;!function(require, directRequire){;"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const locales=require('./common/locales/index.js'),store=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),actions=require('./0634ee2ebd3e560d9d4804ecc960160f.js');var TEMPLATE;(function(a){a[a.PROGRESS_DIALOG=1]="PROGRESS_DIALOG"})(TEMPLATE=exports.TEMPLATE||(exports.TEMPLATE={})),exports.getProgressDialogTemplate=(a)=>{return a.showInDialog?{cancel:{},confirm:{title:locales.config.VIEW_DETAILS,callback:()=>{store.dispatch({type:actions.WINDOW_SET_PROGRESS_DIALOG,data:{show:!0}})}}}:{}},exports.getTemplate=(a,b)=>{return a===TEMPLATE.PROGRESS_DIALOG?exports.getProgressDialogTemplate(b):{}};
;}(require("lazyload"), require);