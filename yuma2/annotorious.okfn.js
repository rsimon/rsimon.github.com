var l=void 0,m=!0,p=null,q=!1,u,v=this;function aa(a,b){var c=a.split("."),d=v;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)!c.length&&b!==l?d[f]=b:d=d[f]?d[f]:d[f]={}}
function x(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ba(a){var b=x(a);return"array"==b||"object"==b&&"number"==typeof a.length}function y(a){return"string"==typeof a}function ca(a){var b=typeof a;return"object"==b&&a!=p||"function"==b}var z="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),da=0;
function ea(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}}function fa(a,b){function c(){}c.prototype=b.prototype;a.ea=b.prototype;a.prototype=new c;a.prototype.constructor=a};function ga(a){return a.width&&a.height&&a.x&&a.y};function ha(a,b){this.x=a;this.y=b};function ia(a,b,c,d){0<c?(this.x=a,this.width=c):(this.x=a+c,this.width=-c);0<d?(this.y=b,this.height=d):(this.y=b+d,this.height=-d)};function ja(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")}function ka(a){if(!oa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(pa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(qa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ra,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(sa,"&quot;"));return a}var pa=/&/g,qa=/</g,ra=/>/g,sa=/\"/g,oa=/[&<>\"]/,ta={};function ua(a){return ta[a]||(ta[a]=(""+a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};var A=Array.prototype,B=A.indexOf?function(a,b,c){return A.indexOf.call(a,b,c)}:function(a,b,c){c=c==p?0:0>c?Math.max(0,a.length+c):c;if(y(a))return!y(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=A.forEach?function(a,b,c){A.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=y(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)};function va(a,b){var c=B(a,b);0<=c&&A.splice.call(a,c,1)}function wa(a){return A.concat.apply(A,arguments)}
function xa(a){if("array"==x(a))return wa(a);for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b}function ya(a,b,c,d){A.splice.apply(a,za(arguments,1))}function za(a,b,c){return 2>=arguments.length?A.slice.call(a,b):A.slice.call(a,b,c)}function Aa(a,b){A.sort.call(a,b||Ba)}function Ba(a,b){return a>b?1:a<b?-1:0};var D,Ca,Da,Ea,Ga;function Ha(){return v.navigator?v.navigator.userAgent:p}function Ia(){return v.navigator}Ea=Da=Ca=D=q;var Ja;if(Ja=Ha()){var Ka=Ia();D=0==Ja.indexOf("Opera");Ca=!D&&-1!=Ja.indexOf("MSIE");Da=!D&&-1!=Ja.indexOf("WebKit");Ea=!D&&!Da&&"Gecko"==Ka.product}var La=D,F=Ca,G=Ea,H=Da,Ma=Ia();Ga=-1!=(Ma&&Ma.platform||"").indexOf("Mac");var Na=!!Ia()&&-1!=(Ia().appVersion||"").indexOf("X11"),Oa;
a:{var Pa="",I;if(La&&v.opera)var Qa=v.opera.version,Pa="function"==typeof Qa?Qa():Qa;else if(G?I=/rv\:([^\);]+)(\)|;)/:F?I=/MSIE\s+([^\);]+)(\)|;)/:H&&(I=/WebKit\/(\S+)/),I)var Ra=I.exec(Ha()),Pa=Ra?Ra[1]:"";if(F){var Sa,Ta=v.document;Sa=Ta?Ta.documentMode:l;if(Sa>parseFloat(Pa)){Oa=""+Sa;break a}}Oa=Pa}var Ua={};
function J(a){var b;if(!(b=Ua[a])){b=0;for(var c=ja(""+Oa).split("."),d=ja(""+a).split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",h=d[e]||"",i=RegExp("(\\d*)(\\D*)","g"),j=RegExp("(\\d*)(\\D*)","g");do{var r=i.exec(g)||["","",""],k=j.exec(h)||["","",""];if(0==r[0].length&&0==k[0].length)break;b=((0==r[1].length?0:parseInt(r[1],10))<(0==k[1].length?0:parseInt(k[1],10))?-1:(0==r[1].length?0:parseInt(r[1],10))>(0==k[1].length?0:parseInt(k[1],10))?1:0)||((0==r[2].length)<(0==
k[2].length)?-1:(0==r[2].length)>(0==k[2].length)?1:0)||(r[2]<k[2]?-1:r[2]>k[2]?1:0)}while(0==b)}b=Ua[a]=0<=b}return b}var Va={};function Wa(){return Va[9]||(Va[9]=F&&!!document.documentMode&&9<=document.documentMode)};var Xa,Ya=!F||Wa();!G&&!F||F&&Wa()||G&&J("1.9.1");F&&J("9");function Za(a){return(a=a.className)&&"function"==typeof a.split?a.split(/\s+/):[]}function $a(a,b){var c=Za(a),d=za(arguments,1),f;f=c;for(var e=0,g=0;g<d.length;g++)0<=B(f,d[g])||(f.push(d[g]),e++);f=e==d.length;a.className=c.join(" ");return f}function ab(a,b){for(var c=Za(a),d=za(arguments,1),f=c,e=0,g=0;g<f.length;g++)0<=B(d,f[g])&&(ya(f,g--,1),e++);a.className=c.join(" ")};function bb(a,b){for(var c in a)b.call(l,a[c],c,a)}var cb="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");function db(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<cb.length;e++)c=cb[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function eb(a,b){bb(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in fb?a.setAttribute(fb[d],b):0==d.lastIndexOf("aria-",0)?a.setAttribute(d,b):a[d]=b})}var fb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",maxlength:"maxLength",type:"type"};
function ob(a,b,c){var d=arguments,f=document,e=d[0],g=d[1];if(!Ya&&g&&(g.name||g.type)){e=["<",e];g.name&&e.push(' name="',ka(g.name),'"');if(g.type){e.push(' type="',ka(g.type),'"');var h={};db(h,g);g=h;delete g.type}e.push(">");e=e.join("")}e=f.createElement(e);g&&(y(g)?e.className=g:"array"==x(g)?$a.apply(p,[e].concat(g)):eb(e,g));2<d.length&&pb(f,e,d);return e}
function pb(a,b,c){function d(c){c&&b.appendChild(y(c)?a.createTextNode(c):c)}for(var f=2;f<c.length;f++){var e=c[f];ba(e)&&!(ca(e)&&0<e.nodeType)?C(qb(e)?xa(e):e,d):d(e)}}function rb(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)}function qb(a){if(a&&"number"==typeof a.length){if(ca(a))return"function"==typeof a.item||"string"==typeof a.item;if("function"==x(a))return"function"==typeof a.item}return q}function K(a){this.K=a||v.document||document}K.prototype.createElement=function(a){return this.K.createElement(a)};
K.prototype.createTextNode=function(a){return this.K.createTextNode(a)};K.prototype.appendChild=function(a,b){a.appendChild(b)};function sb(a,b){var c=(Xa||(Xa=new K)).createElement("DIV");c.innerHTML=a(b||tb,l,l);if(1==c.childNodes.length){var d=c.firstChild;if(1==d.nodeType)return d}return c}var tb={};!F||Wa();var ub=!F||Wa();F&&J("8");!H||J("528");G&&J("1.9b")||F&&J("8")||La&&J("9.5")||H&&J("528");!G||J("8");function vb(){}vb.prototype.Q=q;vb.prototype.u=function(){this.Q||(this.Q=m,this.v())};vb.prototype.v=function(){this.aa&&wb.apply(p,this.aa)};function wb(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ba(d)?wb.apply(p,d):d&&"function"==typeof d.u&&d.u()}};function L(a,b){this.type=a;this.currentTarget=this.target=b}fa(L,vb);L.prototype.v=function(){delete this.type;delete this.target;delete this.currentTarget};L.prototype.O=q;L.prototype.da=m;function xb(a){xb[" "](a);return a}xb[" "]=function(){};function M(a,b){a&&this.w(a,b)}fa(M,L);u=M.prototype;u.target=p;u.relatedTarget=p;u.offsetX=0;u.offsetY=0;u.clientX=0;u.clientY=0;u.screenX=0;u.screenY=0;u.button=0;u.keyCode=0;u.charCode=0;u.ctrlKey=q;u.altKey=q;u.shiftKey=q;u.metaKey=q;
u.w=function(a,b){var c=this.type=a.type;L.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(G){var f;a:{try{xb(d.nodeName);f=m;break a}catch(e){}f=q}f||(d=p)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=H||a.offsetX!==l?a.offsetX:a.layerX;this.offsetY=H||a.offsetY!==l?a.offsetY:a.layerY;this.clientX=a.clientX!==l?a.clientX:a.pageX;this.clientY=a.clientY!==l?a.clientY:a.pageY;this.screenX=a.screenX||
0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;delete this.da;delete this.O};u.v=function(){M.ea.v.call(this);this.relatedTarget=this.currentTarget=this.target=p};function yb(){}var zb=0;u=yb.prototype;u.key=0;u.o=q;u.P=q;u.w=function(a,b,c,d,f,e){if("function"==x(a))this.T=m;else if(a&&a.handleEvent&&"function"==x(a.handleEvent))this.T=q;else throw Error("Invalid listener argument");this.z=a;this.W=b;this.src=c;this.type=d;this.capture=!!f;this.R=e;this.P=q;this.key=++zb;this.o=q};u.handleEvent=function(a){return this.T?this.z.call(this.R||this.src,a):this.z.handleEvent.call(this.z,a)};var N={},O={},P={},U={};
function V(a,b,c,d,f){if(b)if("array"==x(b))for(var e=0;e<b.length;e++)V(a,b[e],c,d,f);else{var d=!!d,g=O;b in g||(g[b]={g:0,k:0});g=g[b];d in g||(g[d]={g:0,k:0},g.g++);var g=g[d],h=a[z]||(a[z]=++da),i;g.k++;if(g[h]){i=g[h];for(e=0;e<i.length;e++)if(g=i[e],g.z==c&&g.R==f){if(g.o)break;return}}else i=g[h]=[],g.g++;e=Ab();e.src=a;g=new yb;g.w(c,e,a,b,d,f);c=g.key;e.key=c;i.push(g);N[c]=g;P[h]||(P[h]=[]);P[h].push(g);a.addEventListener?(a==v||!a.$)&&a.addEventListener(b,e,d):a.attachEvent(b in U?U[b]:
U[b]="on"+b,e)}else throw Error("Invalid event type");}function Ab(){var a=Bb,b=ub?function(c){return a.call(b.src,b.key,c)}:function(c){c=a.call(b.src,b.key,c);if(!c)return c};return b}function Cb(a,b,c,d){if(!d.A&&d.V){for(var f=0,e=0;f<d.length;f++)d[f].o?d[f].W.src=p:(f!=e&&(d[e]=d[f]),e++);d.length=e;d.V=q;0==e&&(delete O[a][b][c],O[a][b].g--,0==O[a][b].g&&(delete O[a][b],O[a].g--),0==O[a].g&&delete O[a])}}
function Db(a,b,c,d,f){var e=1,b=b[z]||(b[z]=++da);if(a[b]){a.k--;a=a[b];a.A?a.A++:a.A=1;try{for(var g=a.length,h=0;h<g;h++){var i=a[h];i&&!i.o&&(e&=Eb(i,f)!==q)}}finally{a.A--,Cb(c,d,b,a)}}return Boolean(e)}
function Eb(a,b){var c=a.handleEvent(b);if(a.P){var d=a.key;if(N[d]){var f=N[d];if(!f.o){var e=f.src,g=f.type,h=f.W,i=f.capture;e.removeEventListener?(e==v||!e.$)&&e.removeEventListener(g,h,i):e.detachEvent&&e.detachEvent(g in U?U[g]:U[g]="on"+g,h);e=e[z]||(e[z]=++da);h=O[g][i][e];if(P[e]){var j=P[e];va(j,f);0==j.length&&delete P[e]}f.o=m;h.V=m;Cb(g,i,e,h);delete N[d]}}}return c}
function Bb(a,b){if(!N[a])return m;var c=N[a],d=c.type,f=O;if(!(d in f))return m;var f=f[d],e,g;if(!ub){var h;if(!(h=b))a:{h=["window","event"];for(var i=v;e=h.shift();)if(i[e]!=p)i=i[e];else{h=p;break a}h=i}e=h;h=m in f;i=q in f;if(h){if(0>e.keyCode||e.returnValue!=l)return m;a:{var j=q;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(r){j=m}if(j||e.returnValue==l)e.returnValue=m}}j=new M;j.w(e,this);e=m;try{if(h){for(var k=[],w=j.currentTarget;w;w=w.parentNode)k.push(w);g=f[m];g.k=g.g;for(var o=k.length-
1;!j.O&&0<=o&&g.k;o--)j.currentTarget=k[o],e&=Db(g,k[o],d,m,j);if(i){g=f[q];g.k=g.g;for(o=0;!j.O&&o<k.length&&g.k;o++)j.currentTarget=k[o],e&=Db(g,k[o],d,q,j)}}else e=Eb(c,j)}finally{k&&(k.length=0),j.u()}return e}d=new M(b,this);try{e=Eb(c,d)}finally{d.u()}return e}var Fb=0;function W(a){return a+"_"+Fb++};function X(){return m};/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

 The "New" BSD License:

 Copyright (c) 2005-2009, The Dojo Foundation
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
 list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
 this list of conditions and the following disclaimer in the documentation
 and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
 may be used to endorse or promote products derived from this software
 without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
 FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var Gb=function(){function a(a,c){if(!a)return[];if(a.constructor==Array)return a;if(!y(a))return[a];if(y(c)&&(c=y(c)?document.getElementById(c):c,!c))return[];var c=c||document,e=c.ownerDocument||c.documentElement;S=c.contentType&&"application/xml"==c.contentType||La&&(c.doctype||"[object XMLDocument]"==e.toString())||!!e&&(F?e.xml:c.xmlVersion||e.xmlVersion);return(e=d(a)(c))&&e.B?e:b(e)}function b(a){if(a&&a.B)return a;var b=[];if(!a||!a.length)return b;a[0]&&b.push(a[0]);if(2>a.length)return b;
E++;if(F&&S){var c=E+"";a[0].setAttribute("_zipIdx",c);for(var d=1,e;e=a[d];d++)a[d].getAttribute("_zipIdx")!=c&&b.push(e),e.setAttribute("_zipIdx",c)}else if(F&&a.Z)try{for(d=1;e=a[d];d++)la(e)&&b.push(e)}catch(f){}else{a[0]&&(a[0]._zipIdx=E);for(d=1;e=a[d];d++)a[d]._zipIdx!=E&&b.push(e),e._zipIdx=E}return b}function c(a,b){if(!b)return 1;var c=cc(a);return!b[c]?b[c]=1:0}function d(a,b){if(gb){var c=hb[a];if(c&&!b)return c}if(c=ib[a])return c;var c=a.charAt(0),e=-1==a.indexOf(" ");0<=a.indexOf("#")&&
e&&(b=m);if(gb&&!b&&-1==">~+".indexOf(c)&&(!F||-1==a.indexOf(":"))&&!(jb&&0<=a.indexOf("."))&&-1==a.indexOf(":contains")&&-1==a.indexOf("|=")){var g=0<=">~+".indexOf(a.charAt(a.length-1))?a+" *":a;return hb[a]=function(b){try{if(!(9==b.nodeType||e))throw"";var c=b.querySelectorAll(g);F?c.Z=m:c.B=m;return c}catch(Q){return d(a,m)(b)}}}var h=a.split(/\s*,\s*/);return ib[a]=2>h.length?f(a):function(a){for(var b=0,c=[],d;d=h[b++];)c=c.concat(f(d)(a));return c}}function f(a){var b=kb(ja(a));if(1==b.length){var c=
e(b[0]);return function(a){if(a=c(a,[]))a.B=m;return a}}return function(a){for(var a=Y(a),c,d,bc=b.length,f,R,g=0;g<bc;g++){R=[];c=b[g];d=a.length-1;0<d&&(f={},R.B=m);d=e(c);for(var h=0;c=a[h];h++)d(c,R,f);if(!R.length)break;a=R}return R}}function e(a){var b=lb[a.n];if(b)return b;var c=a.S,c=c?c.C:"",d=j(a,{m:1}),e="*"==a.d,f=document.getElementsByClassName;if(c)f={m:1},e&&(f.d=1),d=j(a,f),"+"==c?b=i(d):"~"==c?b=h(d):">"==c&&(b=g(d));else if(a.id)d=!a.U&&e?X:j(a,{m:1,id:1}),b=function(b,c){var e;
e=b?new K(9==b.nodeType?b:b.ownerDocument||b.document):Xa||(Xa=new K);var f=a.id;if(f=(e=y(f)?e.K.getElementById(f):f)&&d(e))if(!(f=9==b.nodeType)){for(f=e.parentNode;f&&!(f==b);)f=f.parentNode;f=!!f}if(f)return Y(e,c)};else if(f&&/\{\s*\[native code\]\s*\}/.test(""+f)&&a.f.length&&!jb)var d=j(a,{m:1,f:1,id:1}),w=a.f.join(" "),b=function(a,b){for(var c=Y(0,b),e,f=0,Q=a.getElementsByClassName(w);e=Q[f++];)d(e,a)&&c.push(e);return c};else!e&&!a.U?b=function(b,c){for(var d=Y(0,c),e,f=0,Q=b.getElementsByTagName(a.L());e=
Q[f++];)d.push(e);return d}:(d=j(a,{m:1,d:1,id:1}),b=function(b,c){for(var e=Y(0,c),f,Q=0,g=b.getElementsByTagName(a.L());f=g[Q++];)d(f,b)&&e.push(f);return e});return lb[a.n]=b}function g(a){a=a||X;return function(b,d,e){for(var f=0,g=b[mb];b=g[f++];)Z(b)&&(!e||c(b,e))&&a(b,f)&&d.push(b);return d}}function h(a){return function(b,d,e){for(b=b[$];b;){if(Z(b)){if(e&&!c(b,e))break;a(b)&&d.push(b)}b=b[$]}return d}}function i(a){return function(b,d,e){for(;b=b[$];)if(!ma||la(b)){(!e||c(b,e))&&a(b)&&d.push(b);
break}return d}}function j(a,b){if(!a)return X;var b=b||{},c=p;b.m||(c=T(c,la));b.d||"*"!=a.d&&(c=T(c,function(b){return b&&b.tagName==a.L()}));b.f||C(a.f,function(a,b){var d=RegExp("(?:^|\\s)"+a+"(?:\\s|$)");c=T(c,function(a){return d.test(a.className)});c.count=b});b.j||C(a.j,function(a){var b=a.name;Fa[b]&&(c=T(c,Fa[b](b,a.value)))});b.t||C(a.t,function(a){var b,d=a.J;a.type&&nb[a.type]?b=nb[a.type](d,a.M):d.length&&(b=dc(d));b&&(c=T(c,b))});b.id||a.id&&(c=T(c,function(b){return!!b&&b.id==a.id}));
c||"default"in b||(c=X);return c}function r(a){return w(a)%2}function k(a){return!(w(a)%2)}function w(a){var b=a.parentNode,c=0,d=b[mb],e=a._i||-1,f=b._l||-1;if(!d)return-1;d=d.length;if(f==d&&0<=e&&0<=f)return e;b._l=d;e=-1;for(b=b.firstElementChild||b.firstChild;b;b=b[$])Z(b)&&(b._i=++c,a===b&&(e=c));return e}function o(a){for(;a=a[$];)if(Z(a))return q;return m}function na(a){for(;a=a[ec];)if(Z(a))return q;return m}function t(a,b){return!a?"":"class"==b?a.className||"":"for"==b?a.htmlFor||"":"style"==
b?a.style.cssText||"":(S?a.getAttribute(b):a.getAttribute(b,2))||""}function la(a){return 1==a.nodeType}function T(a,b){return!a?b:!b?a:function(){return a.apply(window,arguments)&&b.apply(window,arguments)}}function kb(a){function b(){0<=i&&(n.id=c(i,s).replace(/\\/g,""),i=-1);if(0<=j){var a=j==s?p:c(j,s);0>">~+".indexOf(a)?n.d=a:n.C=a;j=-1}0<=w&&(n.f.push(c(w+1,s).replace(/\\/g,"")),w=-1)}function c(b,d){return ja(a.slice(b,d))}for(var a=0<=">~+".indexOf(a.slice(-1))?a+" * ":a+" ",d=[],e=-1,f=-1,
g=-1,h=-1,w=-1,i=-1,j=-1,k="",o="",r,s=0,na=a.length,n=p,t=p;k=o,o=a.charAt(s),s<na;s++)if("\\"!=k)if(n||(r=s,n={n:p,j:[],t:[],f:[],d:p,C:p,id:p,L:function(){return S?this.ca:this.d}},j=s),0<=e)if("]"==o){t.J?t.M=c(g||e+1,s):t.J=c(e+1,s);if((e=t.M)&&('"'==e.charAt(0)||"'"==e.charAt(0)))t.M=e.slice(1,-1);n.t.push(t);t=p;e=g=-1}else"="==o&&(g=0<="|~^$*".indexOf(k)?k:"",t.type=g+o,t.J=c(e+1,s-g.length),g=s+1);else 0<=f?")"==o&&(0<=h&&(t.value=c(f+1,s)),h=f=-1):"#"==o?(b(),i=s+1):"."==o?(b(),w=s):":"==
o?(b(),h=s):"["==o?(b(),e=s,t={}):"("==o?(0<=h&&(t={name:c(h+1,s),value:p},n.j.push(t)),f=s):" "==o&&k!=o&&(b(),0<=h&&n.j.push({name:c(h+1,s)}),n.U=n.j.length||n.t.length||n.f.length,n.ia=n.n=c(r,s),n.ca=n.d=n.C?p:n.d||"*",n.d&&(n.d=n.d.toUpperCase()),d.length&&d[d.length-1].C&&(n.S=d.pop(),n.n=n.S.n+" "+n.n),d.push(n),n=p);return d}function Y(a,b){var c=b||[];a&&c.push(a);return c}var jb=H&&"BackCompat"==document.compatMode,mb=document.firstChild.children?"children":"childNodes",S=q,nb={"*=":function(a,
b){return function(c){return 0<=t(c,a).indexOf(b)}},"^=":function(a,b){return function(c){return 0==t(c,a).indexOf(b)}},"$=":function(a,b){return function(c){c=" "+t(c,a);return c.lastIndexOf(b)==c.length-b.length}},"~=":function(a,b){var c=" "+b+" ";return function(b){return 0<=(" "+t(b,a)+" ").indexOf(c)}},"|=":function(a,b){b=" "+b;return function(c){c=" "+t(c,a);return c==b||0==c.indexOf(b+"-")}},"=":function(a,b){return function(c){return t(c,a)==b}}},ma="undefined"==typeof document.firstChild.nextElementSibling,
$=!ma?"nextElementSibling":"nextSibling",ec=!ma?"previousElementSibling":"previousSibling",Z=ma?la:X,Fa={checked:function(){return function(a){return a.checked||a.attributes.checked}},"first-child":function(){return na},"last-child":function(){return o},"only-child":function(){return function(a){return!na(a)||!o(a)?q:m}},empty:function(){return function(a){for(var b=a.childNodes,a=a.childNodes.length-1;0<=a;a--){var c=b[a].nodeType;if(1===c||3==c)return q}return m}},contains:function(a,b){var c=b.charAt(0);
if('"'==c||"'"==c)b=b.slice(1,-1);return function(a){return 0<=a.innerHTML.indexOf(b)}},not:function(a,b){var c=kb(b)[0],d={m:1};"*"!=c.d&&(d.d=1);c.f.length||(d.f=1);var e=j(c,d);return function(a){return!e(a)}},"nth-child":function(a,b){if("odd"==b)return r;if("even"==b)return k;if(-1!=b.indexOf("n")){var c=b.split("n",2),d=c[0]?"-"==c[0]?-1:parseInt(c[0],10):1,e=c[1]?parseInt(c[1],10):0,f=0,g=-1;0<d?0>e?e=e%d&&d+e%d:0<e&&(e>=d&&(f=e-e%d),e%=d):0>d&&(d*=-1,0<e&&(g=e,e%=d));if(0<d)return function(a){a=
w(a);return a>=f&&(0>g||a<=g)&&a%d==e};b=e}var h=parseInt(b,10);return function(a){return w(a)==h}}},dc=F?function(a){var b=a.toLowerCase();"class"==b&&(a="className");return function(c){return S?c.getAttribute(a):c[a]||c[b]}}:function(a){return function(b){return b&&b.getAttribute&&b.hasAttribute(a)}},lb={},ib={},hb={},gb=!!document.querySelectorAll&&(!H||J("526")),E=0,cc=F?function(a){return S?a.getAttribute("_uid")||a.setAttribute("_uid",++E)||E:a.uniqueID}:function(a){return a._uid||(a._uid=++E)};
a.j=Fa;return a}();aa("goog.dom.query",Gb);aa("goog.dom.query.pseudos",Gb.j);function Hb(a,b,c){this.i=a;this.H=b;this.h=c;this.p=[];this.c=this.i.getContext("2d");this.r=m;var d=this;V(this.i,"mousemove",function(a){if(d.r){var b=Ib(d,a.offsetX,a.offsetY);b?d.b?d.b!=b&&(d.r=q,d.H.l.startViewerHideTimer()):(d.b=b,Jb(d),d.h.fireEvent(Kb,{I:d.b,N:a})):d.b&&(d.r=q,d.H.l.startViewerHideTimer())}else d.F=a});Lb(c,Mb,function(){if(d.F){var a=d.b;d.b=Ib(d,d.F.offsetX,d.F.offsetY);Jb(d);d.r=m;a!=d.b&&(d.h.fireEvent(Nb,{I:a,N:event}),d.h.fireEvent(Kb,{I:d.b,N:event}))}})}
function Ib(a,b,c){a=Ob(a,b,c);if(0<a.length)return a[0]}function Ob(a,b,c){var d=[];C(a.p,function(a){ga(a.shape.a)&&!(b<a.shape.a.x||c<a.shape.a.y||b>a.shape.a.x+a.shape.a.width||c>a.shape.a.y+a.shape.a.height)&&d.push(a)});Aa(d,function(a,b){return(ga(a.shape.a)?a.shape.a.width*a.shape.a.height:0)>(ga(b.shape.a)?b.shape.a.width*b.shape.a.height:0)});return d}
function Pb(a,b,c,d){a.c.lineWidth=d;b=b.shape;b.type!=Qb&&b.type!=Rb&&b.type==Sb&&(b=b.a,a.c.strokeStyle="#000000",a.c.strokeRect(b.x+0.5,b.y+0.5,b.width,b.height),a.c.strokeStyle=c,a.c.strokeRect(b.x+1.5,b.y+1.5,b.width-2,b.height-2))}function Jb(a){a.c.clearRect(0,0,a.i.width,a.i.height);C(a.p,function(b){Pb(a,b,"#ffffff",1)});if(a.b){Pb(a,a.b,"#fff000",1.2);var b=a.b.shape.a;a.H.show(a.b,b.x,b.y+b.height+5)}else a.ga&&a.fa()};function Tb(a,b,c){y(b)?Ub(a,c,b):bb(b,ea(Ub,a))}function Ub(a,b,c){a.style[ua(c)]=b}function Vb(a,b,c){var d=G&&(Ga||Na)&&J("1.9");a.style.left=Wb(b,d);a.style.top=Wb(c,d)}function Xb(a,b,c){if(c==l)throw Error("missing height argument");a.style.width=Wb(b,m);a.style.height=Wb(c,m)}function Wb(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Yb(a,b){var c=a.style;"opacity"in c?c.opacity=b:"MozOpacity"in c?c.MozOpacity=b:"filter"in c&&(c.filter=""===b?"":"alpha(opacity="+100*b+")")};function Zb(a,b){function c(){return!(0<=B(Za(b.editor.element[0]),"annotator-hide"))}var d=$b(b.element[0].firstChild),f=new ac,e=ob("div","yuma-annotationlayer");Tb(e,"position","relative");Xb(e,a.width,a.height);rb(e,a);e.appendChild(a);var g=sb(fc,{ba:"Click and Drag to Annotate"});Yb(g,0);e.appendChild(g);var h=sb(gc,{width:a.width,height:a.height});e.appendChild(h);var i=sb(gc,{width:a.width,height:a.height});i.style.display="none";e.appendChild(i);V(e,"mouseover",function(){$a(e,"hover");!j.isShown()&&
!c()&&f.fireEvent(hc)});V(e,"mouseout",function(){ab(e,"hover");!j.isShown()&&!c()&&f.fireEvent(ic)});var j=new jc(a,0,b,d),r=new Hb(h,j,f),k=new kc(i,f);V(h,"mousedown",function(a){i.style.display="";var b=a.offsetX,a=a.offsetY;k.G=m;k.q=new ha(b,a);k.h.fireEvent(lc,{offsetX:b,offsetY:a});Tb(document.body,"-webkit-user-select","none")});Lb(f,hc,function(){Yb(h,1);Yb(g,0.8)});Lb(f,ic,function(){Yb(h,0.4);Yb(g,0)});Lb(f,mc,function(c){var e={url:a.src,shape:c.shape};b.publish("beforeAnnotationCreated",
e);var f=$b(a),g=c.shape.a,c=g.x+f.left-d.left+16,f=g.y+g.height+f.top+window.pageYOffset-d.top+5;b.showEditor(e,{top:window.pageYOffset-d.top,left:0});Vb(b.editor.element[0],c,f)});b.viewer.on("edit",function(c){if(c.url==a.src){var e=$b(a),f=c.shape.a,c=f.x+e.left-d.left+16,e=f.y+f.height+e.top-d.top+window.pageYOffset+5;Vb(b.editor.element[0],0,window.pageYOffset-d.top);b.editor.show();Vb(b.editor.element[0],c,e)}});b.viewer.on("hide",function(){f.fireEvent(Mb);0<=B(Za(e),"hover")||f.fireEvent(ic)});
b.subscribe("annotationCreated",function(b){nc(k);b.url==a.src&&(r.p.push(b),Pb(r,b,"#ffffff",1))});b.subscribe("annotationsLoaded",function(b){for(var c in b){var d=b[c];if(d.url==a.src){var e=r;e.p.push(d);Pb(e,d,"#ffffff",1)}}});b.subscribe("annotationDeleted",function(b){b.url==a.src&&(b==r.b&&delete r.b,va(r.p,b),Jb(r),r.h.fireEvent(oc,{I:b}))});b.subscribe("annotationEditorHidden",function(){i.style.display="none";nc(k)})}function jc(a,b,c,d){this.Y=a;this.l=c;this.D=d}
jc.prototype.show=function(a,b,c){var d=$b(this.Y);this.l.showViewer([a],{top:window.pageYOffset-this.D.top,left:0});Vb(this.l.viewer.element[0],d.left-this.D.left+b+16,d.top+window.pageYOffset-this.D.top+c);this.l.clearViewerHideTimer()};jc.prototype.isShown=function(){return this.l.viewer.isShown()};
window.Annotator.Plugin.YumaImagePlugin=function(){function a(a){this.X=a}a.prototype.pluginInit=function(){var a=this.X.getElementsByTagName("img"),c=this;pc(function(){C(a,function(a){new Zb(a,c.annotator)})})};return a}();function kc(a,b){this.i=a;this.h=b;this.c=a.getContext("2d");this.c.lineWidth=1;this.G=q;var c=this;V(a,"mousemove",function(b){c.G&&(c.e=new ia(c.q.x,c.q.y,b.offsetX-c.q.x,b.offsetY-c.q.y),c.c.clearRect(0,0,a.width,a.height),c.c.strokeStyle="#000000",c.c.strokeRect(c.e.x+0.5,c.e.y+0.5,c.e.width,c.e.height),c.c.strokeStyle="#ffffff",c.c.strokeRect(c.e.x+1.5,c.e.y+1.5,c.e.width-2,c.e.height-2))});V(a,"mouseup",function(a){c.G=q;c.h.fireEvent(mc,{N:a,shape:new qc(c.e)})})}
function nc(a){a.c.clearRect(0,0,a.i.width,a.i.height);Tb(document.body,"-webkit-user-select","auto")};function qc(a){this.type=Sb;this.a=a}var Qb="Point",Sb="Rectangle",Rb="Polygon";function $b(a){for(var b=0,c=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)b+=a.offsetLeft-a.scrollLeft,c+=a.offsetTop-a.scrollTop,a=a.offsetParent;return{top:c,left:b}}function pc(a){if("function"==typeof window.onload){var b=window.onload;window.onload=function(){b();a()}}else window.onload=a};function ac(){this.s=[]}function Lb(a,b,c){a.s[b]||(a.s[b]=[]);a.s[b].push(c)}ac.prototype.fireEvent=function(a,b){var c=this.s[a];c&&C(c,function(a){a(b)})};var hc=W("mouse_over_media"),ic=W("mouse_out_of_media"),Kb=W("mouse_over_annotation"),Nb=W("mouse_out_of_annotation"),lc=W("selection_started"),mc=W("selection_completed");W("selection_changed");var Mb=W("popup_hidden");W("popup_btn_delete");W("popup_btn_edit");var oc=W("annotation_removed");W("annotation_edit_cancel");W("annotation_edit_save");F&&J(8);"ScriptEngine"in v&&"JScript"==v.ScriptEngine()&&(v.ScriptEngineMajorVersion(),v.ScriptEngineMinorVersion(),v.ScriptEngineBuildVersion());function rc(a){return"object"===typeof a&&a&&0===a.ha?a.content:(""+a).replace(sc,tc)}var uc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\u000c":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function tc(a){return uc[a]}var sc=/[\x00\x22\x26\x27\x3c\x3e]/g;function fc(a){return'<div class="yuma-hint" style="white-space:nowrap; position:absolute; pointer-events:none; top:10px; left:10px;">'+rc(a.ba)+"</div>"}function gc(a){return'<canvas class="yuma-canvas" style="position:absolute; top:0px; left:0px; width:'+rc(a.width)+"px; height:"+rc(a.height)+'px;" width="'+rc(a.width)+'" height="'+rc(a.height)+'"></canvas>'};
