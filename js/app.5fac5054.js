(function(t){function e(e){for(var n,l,c=e[0],o=e[1],r=e[2],A=0,g=[];A<c.length;A++)l=c[A],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&g.push(a[l][0]),a[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);d&&d(e);while(g.length)g.shift()();return s.push.apply(s,r||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,c=1;c<i.length;c++){var o=i[c];0!==a[o]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=i[0]))}return t}var n={},a={app:0},s=[];function l(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=n,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(i,n,function(e){return t[e]}.bind(null,n));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/kf/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var d=o;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"1e5a":function(t,e,i){t.exports=i.p+"img/wallet.0cbb5ecd.png"},"40ce":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-aside",{attrs:{width:"30%"}},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:i("f891")}}),n("br")]),n("div",{staticClass:"content"},[n("img",{staticClass:"metamask",attrs:{src:i("a510"),alt:""}}),n("br"),n("div",{staticClass:"tip"},[t._v(" "+t._s(t.$t("MetaMask is requesting to connect your device"))+" ")])])]),n("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":t.loadingText}},["CONNECT-APP"==t.status?n("div",{staticClass:"connect-tip"},[n("div",{staticClass:"text"},[n("ul",[n("li",[t._v(t._s(t.$t("Allow getting your wallet address")))]),n("li",[t._v(t._s(t.$t("Allow to request transaction signature from the current wallet")))])])]),n("div",{staticClass:"img"},[n("img",{attrs:{src:i("1e5a"),width:"120",alt:""}})]),n("div",{staticClass:"form"},[n("div",{staticStyle:{"text-align":"left"}},[n("el-checkbox",{on:{change:function(e){return t.remeber()}},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v(t._s(t.$t("Always allow this service")))]),n("el-button",{staticClass:"agree-btn",attrs:{type:"primary"},on:{click:function(e){return t.connect()}}},[t._v(t._s(t.$t("Agree")))]),n("el-button",{staticClass:"agree-btn",on:{click:function(e){return t.reject()}}},[t._v(t._s(t.$t("Cancel")))])],1)])]):"NO-WALLETS"==t.status?n("div",{staticClass:"no-wallets-tip"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:i("b45c"),width:"100",alt:""}})]),n("div",{staticClass:"text"},[t._v(" "+t._s(t.$t("Current device wallet list is empty, please create wallet first"))+" ")]),n("div",{staticClass:"form"},[n("div",["connect"==t.walletListSource?n("el-button",{staticClass:"agree-btn",attrs:{type:"primary"},on:{click:function(e){return t.noWalletClick()}}},[t._v(t._s(t.$t("I know")))]):t._e()],1)])]):"WALLET-LIST"==t.status?n("div",{staticClass:"wallet-list-tip"},[n("div",{staticClass:"text"},["connect"==t.walletListSource?n("span",[t._v(" "+t._s(t.$t("Select wallet import"))+" ")]):n("span",[t._v(" "+t._s(t.$t("Select wallet trsaction"))+" ")])]),n("div",{staticClass:"form"},[n("div",{staticClass:"radio-div"},t._l(t.walletLists,(function(e){return n("div",{key:e.walletId},[n("el-radio",{attrs:{label:e.walletId},model:{value:t.selectWalletId,callback:function(e){t.selectWalletId=e},expression:"selectWalletId"}},[t._v(t._s(e.name))]),n("br")],1)})),0),n("div",[n("el-button",{staticClass:"agree-btn",attrs:{type:"primary"},on:{click:function(e){return t.selectWallet()}}},["connect"==t.walletListSource?n("span",[t._v(" "+t._s(t.$t("Improve"))+" ")]):n("span",[t._v(" "+t._s(t.$t("Ok"))+" ")])]),"connect"==t.walletListSource?n("el-button",{staticClass:"agree-btn",on:{click:function(e){return t.cancelImprove()}}},[t._v(t._s(t.$t("Cancel")))]):t._e()],1)])]):t._e()])],1)},s=[],l=(i("b0c0"),i("ac1f"),i("841c"),i("1276"),{name:"App",data:function(){return{walletLists:[],selectWalletId:void 0,checked:!1,hdpath:void 0,ws:void 0,status:"CONNECT-APP",extensionId:"oobpjdfjeogiipeegcganhgbnpndnodi",loading:!1,loadingText:this.$t("connect to KeyFort wallet")}},created:function(){var t=function(t){for(var e=window.location.search.substring(1),i=e.split("&"),n=0;n<i.length;n++){var a=i[n].split("=");if(a[0]==t)return a[1]}return!1},e=new WebSocket("ws://localhost:8001");this.ws=e;var i=this;window.WebSocket?(e.onopen=function(e){i.loading=!1,t("signTransaction")?(i.loading=!0,chrome.runtime.sendMessage(i.extensionId,{event:"signTransactionLoaded",data:void 0},(function(t){}))):chrome.runtime.sendMessage(i.extensionId,{event:"connect",data:void 0},(function(t){i.hdPath=t}))},e.onclose=function(t){i.loading=!1,i.ws=void 0,chrome.runtime.sendMessage(this.extensionId,{event:"connectError"})},e.onerror=function(){i.loading=!1,i.ws=void 0,chrome.runtime.sendMessage(this.extensionId,{event:"connectError"})},e.onmessage=function(t){if("end"!=t.data){var e=JSON.parse(t.data),n=e.data;n.errcode?(i.loading=!1,5==n.errcode?i.status="NO-WALLETS":i.alertDeviceError()):(i.loading=!1,"walletLists"==e.event?(i.status="WALLET-LIST",i.walletLists=n.res,i.selectWalletId=n.res[0].walletId):"publicKey"==e.event?chrome.runtime.sendMessage(i.extensionId,{event:"publicKey",data:e.data},(function(t){})):"signTransaction"==e.event&&chrome.runtime.sendMessage(i.extensionId,{event:"signTransaction",data:e.data},(function(t){})))}else i.loading=!1}):chrome.runtime.sendMessage(this.extensionId,{event:"connectError"}),window.addEventListener("message",(function(t){var e,n,a=JSON.parse(t.data);"signTransaction"==a.name&&(e=a.hdPath,n=a.tx,i.signTransaction({hdPath:e,tx:n}))}))},mounted:function(){},methods:{alertDeviceError:function(){this.loading=!1,this.$alert('<div><div class="img"><img src="'+i("621b")+'" width="30" alt=""><br/><img src="'+i("cffc")+'" height="30" alt=""></div><div class="text">'+this.$t("Connect the device to the KeyFort App and make sure the device is connected")+"</div></div>","",{dangerouslyUseHTMLString:!0,customClass:"device-error"})},alertAppConnectError:function(){this.$alert('<div class="img"><img src="'+i("81d9")+'" width="70" alt=""><div class="title">'+this.$t("Unconnected to KeyFort Wallet")+'</div><div class="tip">'+this.$t("Please follow the steps below")+'</div><div class="content"><ul><li>'+this.$t("appConnectError1")+"</li><li>"+this.$t("appConnectError2")+"</li><li>"+this.$t("appConnectError3")+"</li></ul></div></div>","",{dangerouslyUseHTMLString:!0,customClass:"app-connect-error"})},getWalletLists:function(){this.ws?(this.ws.send(JSON.stringify({event:"getWalletLists",data:this.hdPath})),this.loading=!0):this.alertAppConnectError()},connect:function(){this.walletListSource="connect",this.getWalletLists()},signTransaction:function(t){this.walletListSource="signTransaction",this.signTransactionObj=t,this.getWalletLists()},noWalletClick:function(){this.status="CONNECT-APP"},selectWallet:function(){this.loading=!0,"connect"==this.walletListSource?this.ws.send(JSON.stringify({event:"getPublicKey",data:{hdPath:this.hdPath,walletId:this.selectWalletId}})):"signTransaction"==this.walletListSource&&this.ws.send(JSON.stringify({event:"signTransaction",data:{hdPath:this.signTransactionObj.hdPath,tx:this.signTransactionObj.tx,walletId:this.selectWalletId}}))},cancelImprove:function(){this.status="CONNECT-APP"},remeber:function(){console.log("dddd",this.checked),this.checked?localStorage.setItem("allowForever",!0):localStorage.removeItem("allowForever")}}}),c=l,o=i("2877"),r=Object(o["a"])(c,a,s,!1,null,null,null),d=r.exports,A=i("2f62");n["default"].use(A["a"]);var g=new A["a"].Store({state:{},mutations:{},actions:{},modules:{}}),u=i("8c4f"),h=i("5c96"),I=i.n(h),w=(i("0fae"),i("40ce"),i("a925"));n["default"].use(u["a"]),n["default"].use(I.a),n["default"].use(w["a"]);var p=i("b324"),b=i("5773"),v=new w["a"]({locale:"zh-CN",messages:{"zh-CN":p,en:b}});n["default"].config.productionTip=!1,new n["default"]({i18n:v,router:u["a"],store:g,render:function(t){return t(d)}}).$mount("#app")},5773:function(t){t.exports=JSON.parse('{"appConnectError1":"Confirm whether KeyFort wallet has been installed on the computer. If not, please download it https://www.keyfort.io/app/ ","appConnectError2":"Please open the KeyFort wallet application","appConnectError3":"The hardware wallet has been successfully connected to KeyFort wallet"}')},"621b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABkCAYAAADE6GNbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REYzQTUzRUYwRDExMTFFQkEzOUI5RENCMkM0OTkyQTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REYzQTUzRjAwRDExMTFFQkEzOUI5RENCMkM0OTkyQTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERjNBNTNFRDBEMTExMUVCQTM5QjlEQ0IyQzQ5OTJBMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERjNBNTNFRTBEMTExMUVCQTM5QjlEQ0IyQzQ5OTJBMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtuvdWQAAAHRSURBVHja7NyxTgJBEMbxhVAR6XwEKkqDNFYUdqgNmvgC1mKrsdJWWuML0FAJHQW1YCyv4i0EKhOcCUNCiICcm7h3+U/yNZy7mV9uSeYSj8zB/ZezOpE0JIeSPRd2jSVDyZOkqx9k7cKD5FVSTQDCWY/aa8d6dzlJTXLrklva+5vekRuX/GoopJwCSFkhhRRAClmXksptuZ4JrN/ZugupuSNAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgPiqbf8dNOOOAAECBAgQIECAAAECBMjfHqzi1NTN30TrSwaSkX1elFTc/CUvfa8rHzKkJ3mRtH+49mF5ltQlV5LjEI9WS3K9BrFabfvbVmgQvRP6PmC0w5rI1vRCgUztOEUx1ka2dhoCpPvL47TpmHVDgPRD2MMHZBDCHj4goxD2YERZqmIIe/iAVELYwwekGsIePiA1m53iVt32+HdI3gbAUoy1JVubDwHibIq92xFTsjVeJmCfY/ylZH/DGL96nLyO8b6fR7SxI8l50h+sFt+ZCwvP7ECAAAGyFvKZAsdYIe8pgAwV0kwBpKkQ/bGtxwQjtPfO4suuU+iZzUeTBDQ/sV5PrXf3LcAAUiBGUCzcUJ8AAAAASUVORK5CYII="},"81d9":function(t,e,i){t.exports=i.p+"img/disconnect.e4e84865.png"},a510:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjUyQTg1NzkwRDExMTFFQkEzOUI5RENCMkM0OTkyQTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjUyQTg1N0EwRDExMTFFQkEzOUI5RENCMkM0OTkyQTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNTJBODU3NzBEMTExMUVCQTM5QjlEQ0IyQzQ5OTJBMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNTJBODU3ODBEMTExMUVCQTM5QjlEQ0IyQzQ5OTJBMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjpO2xwAAAhVSURBVHja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"},b324:function(t){t.exports=JSON.parse('{"MetaMask is requesting to connect your device":"MetaMask请求连接你的钱包","Allow getting your wallet address":"允许获取你的钱包地址","Allow to request transaction signature from the current wallet":"允许向当前钱包请求交易签名","Always allow this service":"总是准许此服务","Agree":"同意","Cancel":"取消","connect to KeyFort wallet":"正在连接凯付钱包","Connect the device to the KeyFort App and make sure the device is connected":"请启动电脑端KeyFort APP,并保证设备连接成功并且已经解锁","Please make sure the device is plugged in and unlocked":"请确认设备是否插入并已解锁","OK":"确认","Unconnected to KeyFort Wallet":"未连接上KeyFort钱包","Please follow the steps below":"请按以下步骤操作","appConnectError1":"确认是否在电脑上已安装KeyFort钱包，如果没有，请下载 https://www.keyfort.io/app/","appConnectError2":"请打开KeyFort钱包应用程序","appConnectError3":"硬件钱包已成功连接KeyFort钱包","Current device wallet list is empty, please create wallet first":"当前设备钱包列表为空，请先创建钱包","I know":"知道了","Select wallet import":"选择钱包导入","Improve":"导入","Select wallet trsaction":"选择钱包交易"}')},b45c:function(t,e,i){t.exports=i.p+"img/empty.4c5bf0d0.png"},cffc:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAyCAYAAABRYothAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEVGNEU2NUMwRDEyMTFFQkEzOUI5RENCMkM0OTkyQTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEVGNEU2NUQwRDEyMTFFQkEzOUI5RENCMkM0OTkyQTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRUY0RTY1QTBEMTIxMUVCQTM5QjlEQ0IyQzQ5OTJBMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRUY0RTY1QjBEMTIxMUVCQTM5QjlEQ0IyQzQ5OTJBMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoAA6ZMAAAA/SURBVHja7NKxCQAgDABBI07kgE4uqAvEKuU9pApcERJz7dMK6q0oEKii8SaSXfbx4dggEAgEAoFAINC3K8AASkYEEhb7RPsAAAAASUVORK5CYII="},f891:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAABDCAYAAACMTqnbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjUyQTg1N0QwRDExMTFFQkEzOUI5RENCMkM0OTkyQTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjUyQTg1N0UwRDExMTFFQkEzOUI5RENCMkM0OTkyQTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNTJBODU3QjBEMTExMUVCQTM5QjlEQ0IyQzQ5OTJBMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNTJBODU3QzBEMTExMUVCQTM5QjlEQ0IyQzQ5OTJBMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps7NySQAAAfPSURBVHja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"}});
//# sourceMappingURL=app.5fac5054.js.map