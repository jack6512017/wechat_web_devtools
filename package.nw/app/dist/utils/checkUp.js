'use strict';var _exports;function init(){function a(H){u.notifications({title:`有新版本`,message:`新版本 ${H} 已经准备好，立刻重启更新？`,buttons:[{title:'\u91CD\u542F'}]},I=>{0===I&&(o.unRegister(),chrome.runtime.reload())})}function b(H){function I(){u.notifications({title:`有新版本`,message:`新版本 ${H} 已经准备好，立刻重启安装？`,buttons:[{title:'\u5B89\u88C5\u65B0\u7248\u672C'}]},R=>{if(0===R){let S=v?'open':P,T=v?[P]:[];m(S,T,{detached:!0,cwd:y}),nw.App.quit()}})}let J=v?'darwin':'x64'===process.arch?'x64':'ia32',K=`${w}&type=${J}`,L={url:K},M=n.getProxyForURL(K);'DIRECT'!==M&&(L.proxy='http://'+M.replace('PROXY ',''));let N=`${J}_${H}.${v?'ndmg':'nexe'}`,O=i.join(y,N),P=`${J}_${H}.${v?'dmg':'exe'}`,Q=i.join(y,P);j.existsSync(Q)?I():z(L,(R,S,T)=>{R||j.rename(O,Q,U=>{U||I()})}).pipe(j.createWriteStream(O))}function c(H,I){if(clearInterval(B),'app'===I||'big_code'===I)return void b(H);let J=i.join(y,`${I}${H}`);if(j.existsSync(J))return g.info(`checkUp.js ${J} is existsSync`),localStorage.setItem('new-version',H),void a(H);let K=[];K.push(function(M){let N={url:`${w}&type=${I}`,needToken:0,encoding:null};g.info(`checkUp.js begin fetch new version ${N.url}`),f(N,(O,P,Q)=>{M(O,Q)})}),K.push(function(M,N){l.gunzip(M,(O,P)=>{N(O,P)})}),K.push(function(M,N){j.writeFile(J,M,O=>{N(O,J)})}),K.push(function(M,N){let O=i.join(y,H.toString());k.sync(O);let P=v?i.join(O,'app.nw'):i.join(O,'package.nw');h.extractAll(M,P);let Q=i.join(P,'package.json'),R=JSON.parse(j.readFileSync(Q,'utf8'));v?(R.window.frame=!0,R['chromium-args']='-ignore-certificate-errors -load-extension=/Applications/wechatwebdevtools.app/Contents/Resources/app.nw/app/dist/extensions/'):R['chromium-args']='-ignore-certificate-errors -load-extension=./package.nw/app/dist/extensions/',j.writeFileSync(Q,JSON.stringify(R),'utf8'),localStorage.setItem('new-version',H),N(null,H)}),q.waterfall(K,(L,M)=>{return L?void g.error(`checkUp.js async.waterfall ${L.toString()}`):void a(M)})}function d(H){let I=H.split('.'),J=parseInt(I[0]),K=parseInt(I[1]),L=parseInt(I[2]);if(J>E)return'app';return K>F?'big_code':!!(L>G)&&'small_code'}function e(H){let I=d(H.last_ide);I?(g.info(`checkUp.js find new version ${H.last_ide} and current version is ${C}`),c(H.last_ide,I)):(B&&clearInterval(B),B=setInterval(()=>{let J={method:'post',url:`${s.LOADCONFIG_URL}?type=checkup`,needToken:0,body:JSON.stringify({type:7,version:nw.App.manifest.version})};f(J,(K,L,M)=>{if(!K){let N=JSON.parse(M),O=N.client_list,P={};O.forEach(R=>{P[R.key]=R.value}),e(P),t.check(P);let Q=N.notice_list;Q&&0<Q.length&&u.handleNotificationList(Q)}else g.info(`checkUp.js onLineCheck error: ${K.toString()}`)}),chrome.processes.getProcessInfo([],!0,K=>{let L=0;for(let O in K){let P=K[O];P.privateMemory&&(L+=P.privateMemory)}let M=r.getRestartInfo(),N=r.getCurrentProject();A('memory_monitor',N.appid,`${parseInt(L/1024/1024)},${M.projectRestartNum}`)})},600000))}const f=require('../common/request/request.js'),g=require('../common/log/log.js'),h=require('asar'),i=require('path'),j=require('fs'),k=require('mkdir-p'),l=require('zlib');require('rmdir');const m=require('child_process').spawn,n=require('./tools.js'),o=require('../common/shortCut/shortCut.js');l.createGunzip();const q=require('async'),r=require('../stores/projectStores.js'),s=require('../config/urlConfig.js'),t=require('../weapp/utils/vendorManager.js'),u=require('./notifyManager.js'),v='darwin'===process.platform,w=s.downloadRedirectURL+(v?'?os=darwin':'?os=win');global.appVersion,nw.App.getDataPath(),s.LOADCONFIG_URL;const x=require('../config/dirConfig.js'),y=x.WeappApplication;i.join(y,'uplog.json');const z=require('request'),A=require('./newReport.js');var B;const C=global.appVersion,D=C.split('.'),E=parseInt(D[0]),F=parseInt(D[1]),G=parseInt(D[2]);_exports=H=>{global.appConfig.isDev||(e(H),t.check(H))}}init(),module.exports=_exports;