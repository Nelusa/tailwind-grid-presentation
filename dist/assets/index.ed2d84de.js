(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();function Ml(t,n){const s=Object.create(null),l=t.split(",");for(let o=0;o<l.length;o++)s[l[o]]=!0;return n?o=>!!s[o.toLowerCase()]:o=>!!s[o]}function Ke(t){if(se(t)){const n={};for(let s=0;s<t.length;s++){const l=t[s],o=Ne(l)?hd(l):Ke(l);if(o)for(const r in o)n[r]=o[r]}return n}else{if(Ne(t))return t;if(ze(t))return t}}const fd=/;(?![^(]*\))/g,yd=/:([^]+)/,md=/\/\*.*?\*\//gs;function hd(t){const n={};return t.replace(md,"").split(fd).forEach(s=>{if(s){const l=s.split(yd);l.length>1&&(n[l[0].trim()]=l[1].trim())}}),n}function Me(t){let n="";if(Ne(t))n=t;else if(se(t))for(let s=0;s<t.length;s++){const l=Me(t[s]);l&&(n+=l+" ")}else if(ze(t))for(const s in t)t[s]&&(n+=s+" ");return n.trim()}function ie(t){if(!t)return null;let{class:n,style:s}=t;return n&&!Ne(n)&&(t.class=Me(n)),s&&(t.style=Ke(s)),t}const gd="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",vd=Ml(gd),_d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bd=Ml(_d);function Fc(t){return!!t||t===""}const Sn=t=>Ne(t)?t:t==null?"":se(t)||ze(t)&&(t.toString===Oc||!pe(t.toString))?JSON.stringify(t,jc,2):String(t),jc=(t,n)=>n&&n.__v_isRef?jc(t,n.value):Gn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[l,o])=>(s[`${l} =>`]=o,s),{})}:Tc(n)?{[`Set(${n.size})`]:[...n.values()]}:ze(n)&&!se(n)&&!zc(n)?String(n):n,$e={},Un=[],Dt=()=>{},kd=()=>!1,wd=/^on[^a-z]/,Nl=t=>wd.test(t),xr=t=>t.startsWith("onUpdate:"),rt=Object.assign,Ar=(t,n)=>{const s=t.indexOf(n);s>-1&&t.splice(s,1)},xd=Object.prototype.hasOwnProperty,be=(t,n)=>xd.call(t,n),se=Array.isArray,Gn=t=>Il(t)==="[object Map]",Tc=t=>Il(t)==="[object Set]",pe=t=>typeof t=="function",Ne=t=>typeof t=="string",Br=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",$c=t=>ze(t)&&pe(t.then)&&pe(t.catch),Oc=Object.prototype.toString,Il=t=>Oc.call(t),Ad=t=>Il(t).slice(8,-1),zc=t=>Il(t)==="[object Object]",Er=t=>Ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ml=Ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rl=t=>{const n=Object.create(null);return s=>n[s]||(n[s]=t(s))},Bd=/-(\w)/g,It=Rl(t=>t.replace(Bd,(n,s)=>s?s.toUpperCase():"")),Ed=/\B([A-Z])/g,Tn=Rl(t=>t.replace(Ed,"-$1").toLowerCase()),Vl=Rl(t=>t.charAt(0).toUpperCase()+t.slice(1)),oo=Rl(t=>t?`on${Vl(t)}`:""),Ls=(t,n)=>!Object.is(t,n),Wn=(t,n)=>{for(let s=0;s<t.length;s++)t[s](n)},wl=(t,n,s)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value:s})},xl=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let wa;const Dd=()=>wa||(wa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ut;class Pc{constructor(n=!1){this.detached=n,this.active=!0,this.effects=[],this.cleanups=[],this.parent=ut,!n&&ut&&(this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}run(n){if(this.active){const s=ut;try{return ut=this,n()}finally{ut=s}}}on(){ut=this}off(){ut=this.parent}stop(n){if(this.active){let s,l;for(s=0,l=this.effects.length;s<l;s++)this.effects[s].stop();for(s=0,l=this.cleanups.length;s<l;s++)this.cleanups[s]();if(this.scopes)for(s=0,l=this.scopes.length;s<l;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function Cd(t){return new Pc(t)}function Sd(t,n=ut){n&&n.active&&n.effects.push(t)}function Lc(){return ut}function Mc(t){ut&&ut.cleanups.push(t)}const Dr=t=>{const n=new Set(t);return n.w=0,n.n=0,n},Nc=t=>(t.w&pn)>0,Ic=t=>(t.n&pn)>0,Fd=({deps:t})=>{if(t.length)for(let n=0;n<t.length;n++)t[n].w|=pn},jd=t=>{const{deps:n}=t;if(n.length){let s=0;for(let l=0;l<n.length;l++){const o=n[l];Nc(o)&&!Ic(o)?o.delete(t):n[s++]=o,o.w&=~pn,o.n&=~pn}n.length=s}},Oo=new WeakMap;let bs=0,pn=1;const zo=30;let At;const En=Symbol(""),Po=Symbol("");class Cr{constructor(n,s=null,l){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Sd(this,l)}run(){if(!this.active)return this.fn();let n=At,s=sn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=At,At=this,sn=!0,pn=1<<++bs,bs<=zo?Fd(this):xa(this),this.fn()}finally{bs<=zo&&jd(this),pn=1<<--bs,At=this.parent,sn=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){At===this?this.deferStop=!0:this.active&&(xa(this),this.onStop&&this.onStop(),this.active=!1)}}function xa(t){const{deps:n}=t;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(t);n.length=0}}let sn=!0;const Rc=[];function os(){Rc.push(sn),sn=!1}function rs(){const t=Rc.pop();sn=t===void 0?!0:t}function gt(t,n,s){if(sn&&At){let l=Oo.get(t);l||Oo.set(t,l=new Map);let o=l.get(s);o||l.set(s,o=Dr()),Vc(o)}}function Vc(t,n){let s=!1;bs<=zo?Ic(t)||(t.n|=pn,s=!Nc(t)):s=!t.has(At),s&&(t.add(At),At.deps.push(t))}function Kt(t,n,s,l,o,r){const a=Oo.get(t);if(!a)return;let i=[];if(n==="clear")i=[...a.values()];else if(s==="length"&&se(t)){const c=xl(l);a.forEach((u,d)=>{(d==="length"||d>=c)&&i.push(u)})}else switch(s!==void 0&&i.push(a.get(s)),n){case"add":se(t)?Er(s)&&i.push(a.get("length")):(i.push(a.get(En)),Gn(t)&&i.push(a.get(Po)));break;case"delete":se(t)||(i.push(a.get(En)),Gn(t)&&i.push(a.get(Po)));break;case"set":Gn(t)&&i.push(a.get(En));break}if(i.length===1)i[0]&&Lo(i[0]);else{const c=[];for(const u of i)u&&c.push(...u);Lo(Dr(c))}}function Lo(t,n){const s=se(t)?t:[...t];for(const l of s)l.computed&&Aa(l);for(const l of s)l.computed||Aa(l)}function Aa(t,n){(t!==At||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Td=Ml("__proto__,__v_isRef,__isVue"),Hc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Br)),$d=Sr(),Od=Sr(!1,!0),zd=Sr(!0),Ba=Pd();function Pd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(n=>{t[n]=function(...s){const l=xe(this);for(let r=0,a=this.length;r<a;r++)gt(l,"get",r+"");const o=l[n](...s);return o===-1||o===!1?l[n](...s.map(xe)):o}}),["push","pop","shift","unshift","splice"].forEach(n=>{t[n]=function(...s){os();const l=xe(this)[n].apply(this,s);return rs(),l}}),t}function Sr(t=!1,n=!1){return function(l,o,r){if(o==="__v_isReactive")return!t;if(o==="__v_isReadonly")return t;if(o==="__v_isShallow")return n;if(o==="__v_raw"&&r===(t?n?Jd:Kc:n?Wc:Gc).get(l))return l;const a=se(l);if(!t&&a&&be(Ba,o))return Reflect.get(Ba,o,r);const i=Reflect.get(l,o,r);return(Br(o)?Hc.has(o):Td(o))||(t||gt(l,"get",o),n)?i:Ce(i)?a&&Er(o)?i:i.value:ze(i)?t?wn(i):Oe(i):i}}const Ld=qc(),Md=qc(!0);function qc(t=!1){return function(s,l,o,r){let a=s[l];if(Qn(a)&&Ce(a)&&!Ce(o))return!1;if(!t&&(!Al(o)&&!Qn(o)&&(a=xe(a),o=xe(o)),!se(s)&&Ce(a)&&!Ce(o)))return a.value=o,!0;const i=se(s)&&Er(l)?Number(l)<s.length:be(s,l),c=Reflect.set(s,l,o,r);return s===xe(r)&&(i?Ls(o,a)&&Kt(s,"set",l,o):Kt(s,"add",l,o)),c}}function Nd(t,n){const s=be(t,n);t[n];const l=Reflect.deleteProperty(t,n);return l&&s&&Kt(t,"delete",n,void 0),l}function Id(t,n){const s=Reflect.has(t,n);return(!Br(n)||!Hc.has(n))&&gt(t,"has",n),s}function Rd(t){return gt(t,"iterate",se(t)?"length":En),Reflect.ownKeys(t)}const Uc={get:$d,set:Ld,deleteProperty:Nd,has:Id,ownKeys:Rd},Vd={get:zd,set(t,n){return!0},deleteProperty(t,n){return!0}},Hd=rt({},Uc,{get:Od,set:Md}),Fr=t=>t,Hl=t=>Reflect.getPrototypeOf(t);function ll(t,n,s=!1,l=!1){t=t.__v_raw;const o=xe(t),r=xe(n);s||(n!==r&&gt(o,"get",n),gt(o,"get",r));const{has:a}=Hl(o),i=l?Fr:s?$r:Ms;if(a.call(o,n))return i(t.get(n));if(a.call(o,r))return i(t.get(r));t!==o&&t.get(n)}function ol(t,n=!1){const s=this.__v_raw,l=xe(s),o=xe(t);return n||(t!==o&&gt(l,"has",t),gt(l,"has",o)),t===o?s.has(t):s.has(t)||s.has(o)}function rl(t,n=!1){return t=t.__v_raw,!n&&gt(xe(t),"iterate",En),Reflect.get(t,"size",t)}function Ea(t){t=xe(t);const n=xe(this);return Hl(n).has.call(n,t)||(n.add(t),Kt(n,"add",t,t)),this}function Da(t,n){n=xe(n);const s=xe(this),{has:l,get:o}=Hl(s);let r=l.call(s,t);r||(t=xe(t),r=l.call(s,t));const a=o.call(s,t);return s.set(t,n),r?Ls(n,a)&&Kt(s,"set",t,n):Kt(s,"add",t,n),this}function Ca(t){const n=xe(this),{has:s,get:l}=Hl(n);let o=s.call(n,t);o||(t=xe(t),o=s.call(n,t)),l&&l.call(n,t);const r=n.delete(t);return o&&Kt(n,"delete",t,void 0),r}function Sa(){const t=xe(this),n=t.size!==0,s=t.clear();return n&&Kt(t,"clear",void 0,void 0),s}function al(t,n){return function(l,o){const r=this,a=r.__v_raw,i=xe(a),c=n?Fr:t?$r:Ms;return!t&&gt(i,"iterate",En),a.forEach((u,d)=>l.call(o,c(u),c(d),r))}}function il(t,n,s){return function(...l){const o=this.__v_raw,r=xe(o),a=Gn(r),i=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,u=o[t](...l),d=s?Fr:n?$r:Ms;return!n&&gt(r,"iterate",c?Po:En),{next(){const{value:f,done:y}=u.next();return y?{value:f,done:y}:{value:i?[d(f[0]),d(f[1])]:d(f),done:y}},[Symbol.iterator](){return this}}}}function Jt(t){return function(...n){return t==="delete"?!1:this}}function qd(){const t={get(r){return ll(this,r)},get size(){return rl(this)},has:ol,add:Ea,set:Da,delete:Ca,clear:Sa,forEach:al(!1,!1)},n={get(r){return ll(this,r,!1,!0)},get size(){return rl(this)},has:ol,add:Ea,set:Da,delete:Ca,clear:Sa,forEach:al(!1,!0)},s={get(r){return ll(this,r,!0)},get size(){return rl(this,!0)},has(r){return ol.call(this,r,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:al(!0,!1)},l={get(r){return ll(this,r,!0,!0)},get size(){return rl(this,!0)},has(r){return ol.call(this,r,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:al(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=il(r,!1,!1),s[r]=il(r,!0,!1),n[r]=il(r,!1,!0),l[r]=il(r,!0,!0)}),[t,s,n,l]}const[Ud,Gd,Wd,Kd]=qd();function jr(t,n){const s=n?t?Kd:Wd:t?Gd:Ud;return(l,o,r)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?l:Reflect.get(be(s,o)&&o in l?s:l,o,r)}const Yd={get:jr(!1,!1)},Xd={get:jr(!1,!0)},Zd={get:jr(!0,!1)},Gc=new WeakMap,Wc=new WeakMap,Kc=new WeakMap,Jd=new WeakMap;function Qd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ef(t){return t.__v_skip||!Object.isExtensible(t)?0:Qd(Ad(t))}function Oe(t){return Qn(t)?t:Tr(t,!1,Uc,Yd,Gc)}function tf(t){return Tr(t,!1,Hd,Xd,Wc)}function wn(t){return Tr(t,!0,Vd,Zd,Kc)}function Tr(t,n,s,l,o){if(!ze(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const r=o.get(t);if(r)return r;const a=ef(t);if(a===0)return t;const i=new Proxy(t,a===2?l:s);return o.set(t,i),i}function Kn(t){return Qn(t)?Kn(t.__v_raw):!!(t&&t.__v_isReactive)}function Qn(t){return!!(t&&t.__v_isReadonly)}function Al(t){return!!(t&&t.__v_isShallow)}function Yc(t){return Kn(t)||Qn(t)}function xe(t){const n=t&&t.__v_raw;return n?xe(n):t}function ql(t){return wl(t,"__v_skip",!0),t}const Ms=t=>ze(t)?Oe(t):t,$r=t=>ze(t)?wn(t):t;function Or(t){sn&&At&&(t=xe(t),Vc(t.dep||(t.dep=Dr())))}function zr(t,n){t=xe(t),t.dep&&Lo(t.dep)}function Ce(t){return!!(t&&t.__v_isRef===!0)}function H(t){return Xc(t,!1)}function Rt(t){return Xc(t,!0)}function Xc(t,n){return Ce(t)?t:new nf(t,n)}class nf{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:xe(n),this._value=s?n:Ms(n)}get value(){return Or(this),this._value}set value(n){const s=this.__v_isShallow||Al(n)||Qn(n);n=s?n:xe(n),Ls(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:Ms(n),zr(this))}}function x(t){return Ce(t)?t.value:t}const sf={get:(t,n,s)=>x(Reflect.get(t,n,s)),set:(t,n,s,l)=>{const o=t[n];return Ce(o)&&!Ce(s)?(o.value=s,!0):Reflect.set(t,n,s,l)}};function Zc(t){return Kn(t)?t:new Proxy(t,sf)}class lf{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:l}=n(()=>Or(this),()=>zr(this));this._get=s,this._set=l}get value(){return this._get()}set value(n){this._set(n)}}function Jc(t){return new lf(t)}function of(t){const n=se(t)?new Array(t.length):{};for(const s in t)n[s]=af(t,s);return n}class rf{constructor(n,s,l){this._object=n,this._key=s,this._defaultValue=l,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function af(t,n,s){const l=t[n];return Ce(l)?l:new rf(t,n,s)}var Qc;class cf{constructor(n,s,l,o){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[Qc]=!1,this._dirty=!0,this.effect=new Cr(n,()=>{this._dirty||(this._dirty=!0,zr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=l}get value(){const n=xe(this);return Or(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}Qc="__v_isReadonly";function pf(t,n,s=!1){let l,o;const r=pe(t);return r?(l=t,o=Dt):(l=t.get,o=t.set),new cf(l,o,r||!o,s)}function ln(t,n,s,l){let o;try{o=l?t(...l):t()}catch(r){Ul(r,n,s)}return o}function Ct(t,n,s,l){if(pe(t)){const r=ln(t,n,s,l);return r&&$c(r)&&r.catch(a=>{Ul(a,n,s)}),r}const o=[];for(let r=0;r<t.length;r++)o.push(Ct(t[r],n,s,l));return o}function Ul(t,n,s,l=!0){const o=n?n.vnode:null;if(n){let r=n.parent;const a=n.proxy,i=s;for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,a,i)===!1)return}r=r.parent}const c=n.appContext.config.errorHandler;if(c){ln(c,null,10,[t,a,i]);return}}uf(t,s,o,l)}function uf(t,n,s,l=!0){console.error(t)}let Ns=!1,Mo=!1;const Je=[];let Pt=0;const Yn=[];let Ut=null,vn=0;const ep=Promise.resolve();let Pr=null;function Qe(t){const n=Pr||ep;return t?n.then(this?t.bind(this):t):n}function df(t){let n=Pt+1,s=Je.length;for(;n<s;){const l=n+s>>>1;Is(Je[l])<t?n=l+1:s=l}return n}function Lr(t){(!Je.length||!Je.includes(t,Ns&&t.allowRecurse?Pt+1:Pt))&&(t.id==null?Je.push(t):Je.splice(df(t.id),0,t),tp())}function tp(){!Ns&&!Mo&&(Mo=!0,Pr=ep.then(sp))}function ff(t){const n=Je.indexOf(t);n>Pt&&Je.splice(n,1)}function yf(t){se(t)?Yn.push(...t):(!Ut||!Ut.includes(t,t.allowRecurse?vn+1:vn))&&Yn.push(t),tp()}function Fa(t,n=Ns?Pt+1:0){for(;n<Je.length;n++){const s=Je[n];s&&s.pre&&(Je.splice(n,1),n--,s())}}function np(t){if(Yn.length){const n=[...new Set(Yn)];if(Yn.length=0,Ut){Ut.push(...n);return}for(Ut=n,Ut.sort((s,l)=>Is(s)-Is(l)),vn=0;vn<Ut.length;vn++)Ut[vn]();Ut=null,vn=0}}const Is=t=>t.id==null?1/0:t.id,mf=(t,n)=>{const s=Is(t)-Is(n);if(s===0){if(t.pre&&!n.pre)return-1;if(n.pre&&!t.pre)return 1}return s};function sp(t){Mo=!1,Ns=!0,Je.sort(mf);const n=Dt;try{for(Pt=0;Pt<Je.length;Pt++){const s=Je[Pt];s&&s.active!==!1&&ln(s,null,14)}}finally{Pt=0,Je.length=0,np(),Ns=!1,Pr=null,(Je.length||Yn.length)&&sp()}}function hf(t,n,...s){if(t.isUnmounted)return;const l=t.vnode.props||$e;let o=s;const r=n.startsWith("update:"),a=r&&n.slice(7);if(a&&a in l){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:y}=l[d]||$e;y&&(o=s.map(h=>Ne(h)?h.trim():h)),f&&(o=s.map(xl))}let i,c=l[i=oo(n)]||l[i=oo(It(n))];!c&&r&&(c=l[i=oo(Tn(n))]),c&&Ct(c,t,6,o);const u=l[i+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,Ct(u,t,6,o)}}function lp(t,n,s=!1){const l=n.emitsCache,o=l.get(t);if(o!==void 0)return o;const r=t.emits;let a={},i=!1;if(!pe(t)){const c=u=>{const d=lp(u,n,!0);d&&(i=!0,rt(a,d))};!s&&n.mixins.length&&n.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!i?(ze(t)&&l.set(t,null),null):(se(r)?r.forEach(c=>a[c]=null):rt(a,r),ze(t)&&l.set(t,a),a)}function Gl(t,n){return!t||!Nl(n)?!1:(n=n.slice(2).replace(/Once$/,""),be(t,n[0].toLowerCase()+n.slice(1))||be(t,Tn(n))||be(t,n))}let Xe=null,Wl=null;function Bl(t){const n=Xe;return Xe=t,Wl=t&&t.type.__scopeId||null,n}function Mr(t){Wl=t}function Nr(){Wl=null}function $(t,n=Xe,s){if(!n||t._n)return t;const l=(...o)=>{l._d&&Ia(-1);const r=Bl(n);let a;try{a=t(...o)}finally{Bl(r),l._d&&Ia(1)}return a};return l._n=!0,l._c=!0,l._d=!0,l}function ro(t){const{type:n,vnode:s,proxy:l,withProxy:o,props:r,propsOptions:[a],slots:i,attrs:c,emit:u,render:d,renderCache:f,data:y,setupState:h,ctx:m,inheritAttrs:_}=t;let b,w;const A=Bl(t);try{if(s.shapeFlag&4){const D=o||l;b=zt(d.call(D,D,f,r,h,y,m)),w=c}else{const D=n;b=zt(D.length>1?D(r,{attrs:c,slots:i,emit:u}):D(r,null)),w=n.props?c:gf(c)}}catch(D){Bs.length=0,Ul(D,t,1),b=j(un)}let k=b;if(w&&_!==!1){const D=Object.keys(w),{shapeFlag:z}=k;D.length&&z&7&&(a&&D.some(xr)&&(w=vf(w,a)),k=Fn(k,w))}return s.dirs&&(k=Fn(k),k.dirs=k.dirs?k.dirs.concat(s.dirs):s.dirs),s.transition&&(k.transition=s.transition),b=k,Bl(A),b}const gf=t=>{let n;for(const s in t)(s==="class"||s==="style"||Nl(s))&&((n||(n={}))[s]=t[s]);return n},vf=(t,n)=>{const s={};for(const l in t)(!xr(l)||!(l.slice(9)in n))&&(s[l]=t[l]);return s};function _f(t,n,s){const{props:l,children:o,component:r}=t,{props:a,children:i,patchFlag:c}=n,u=r.emitsOptions;if(n.dirs||n.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return l?ja(l,a,u):!!a;if(c&8){const d=n.dynamicProps;for(let f=0;f<d.length;f++){const y=d[f];if(a[y]!==l[y]&&!Gl(u,y))return!0}}}else return(o||i)&&(!i||!i.$stable)?!0:l===a?!1:l?a?ja(l,a,u):!0:!!a;return!1}function ja(t,n,s){const l=Object.keys(n);if(l.length!==Object.keys(t).length)return!0;for(let o=0;o<l.length;o++){const r=l[o];if(n[r]!==t[r]&&!Gl(s,r))return!0}return!1}function bf({vnode:t,parent:n},s){for(;n&&n.subTree===t;)(t=n.vnode).el=s,n=n.parent}const op=t=>t.__isSuspense;function kf(t,n){n&&n.pendingBranch?se(t)?n.effects.push(...t):n.effects.push(t):yf(t)}function ft(t,n){if(We){let s=We.provides;const l=We.parent&&We.parent.provides;l===s&&(s=We.provides=Object.create(l)),s[t]=n}}function M(t,n,s=!1){const l=We||Xe;if(l){const o=l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides;if(o&&t in o)return o[t];if(arguments.length>1)return s&&pe(n)?n.call(l.proxy):n}}function as(t,n){return Ir(t,null,n)}const cl={};function ye(t,n,s){return Ir(t,n,s)}function Ir(t,n,{immediate:s,deep:l,flush:o,onTrack:r,onTrigger:a}=$e){const i=We;let c,u=!1,d=!1;if(Ce(t)?(c=()=>t.value,u=Al(t)):Kn(t)?(c=()=>t,l=!0):se(t)?(d=!0,u=t.some(k=>Kn(k)||Al(k)),c=()=>t.map(k=>{if(Ce(k))return k.value;if(Kn(k))return xn(k);if(pe(k))return ln(k,i,2)})):pe(t)?n?c=()=>ln(t,i,2):c=()=>{if(!(i&&i.isUnmounted))return f&&f(),Ct(t,i,3,[y])}:c=Dt,n&&l){const k=c;c=()=>xn(k())}let f,y=k=>{f=w.onStop=()=>{ln(k,i,4)}},h;if(Vs)if(y=Dt,n?s&&Ct(n,i,3,[c(),d?[]:void 0,y]):c(),o==="sync"){const k=yy();h=k.__watcherHandles||(k.__watcherHandles=[])}else return Dt;let m=d?new Array(t.length).fill(cl):cl;const _=()=>{if(!!w.active)if(n){const k=w.run();(l||u||(d?k.some((D,z)=>Ls(D,m[z])):Ls(k,m)))&&(f&&f(),Ct(n,i,3,[k,m===cl?void 0:d&&m[0]===cl?[]:m,y]),m=k)}else w.run()};_.allowRecurse=!!n;let b;o==="sync"?b=_:o==="post"?b=()=>Ye(_,i&&i.suspense):(_.pre=!0,i&&(_.id=i.uid),b=()=>Lr(_));const w=new Cr(c,b);n?s?_():m=w.run():o==="post"?Ye(w.run.bind(w),i&&i.suspense):w.run();const A=()=>{w.stop(),i&&i.scope&&Ar(i.scope.effects,w)};return h&&h.push(A),A}function wf(t,n,s){const l=this.proxy,o=Ne(t)?t.includes(".")?rp(l,t):()=>l[t]:t.bind(l,l);let r;pe(n)?r=n:(r=n.handler,s=n);const a=We;ts(this);const i=Ir(o,r.bind(l),s);return a?ts(a):Dn(),i}function rp(t,n){const s=n.split(".");return()=>{let l=t;for(let o=0;o<s.length&&l;o++)l=l[s[o]];return l}}function xn(t,n){if(!ze(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),Ce(t))xn(t.value,n);else if(se(t))for(let s=0;s<t.length;s++)xn(t[s],n);else if(Tc(t)||Gn(t))t.forEach(s=>{xn(s,n)});else if(zc(t))for(const s in t)xn(t[s],n);return t}function ap(t,n){t.shapeFlag&6&&t.component?ap(t.component.subTree,n):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}function Ae(t){return pe(t)?{setup:t,name:t.name}:t}const Xn=t=>!!t.type.__asyncLoader,ip=t=>t.type.__isKeepAlive,xf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:n}){const s=$n(),l=s.ctx;if(!l.renderer)return()=>{const A=n.default&&n.default();return A&&A.length===1?A[0]:A};const o=new Map,r=new Set;let a=null;const i=s.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:f}}}=l,y=f("div");l.activate=(A,k,D,z,P)=>{const N=A.component;u(A,k,D,0,i),c(N.vnode,A,k,D,N,i,z,A.slotScopeIds,P),Ye(()=>{N.isDeactivated=!1,N.a&&Wn(N.a);const Z=A.props&&A.props.onVnodeMounted;Z&&vt(Z,N.parent,A)},i)},l.deactivate=A=>{const k=A.component;u(A,y,null,1,i),Ye(()=>{k.da&&Wn(k.da);const D=A.props&&A.props.onVnodeUnmounted;D&&vt(D,k.parent,A),k.isDeactivated=!0},i)};function h(A){ao(A),d(A,s,i,!0)}function m(A){o.forEach((k,D)=>{const z=Uo(k.type);z&&(!A||!A(z))&&_(D)})}function _(A){const k=o.get(A);!a||k.type!==a.type?h(k):a&&ao(a),o.delete(A),r.delete(A)}ye(()=>[t.include,t.exclude],([A,k])=>{A&&m(D=>ks(A,D)),k&&m(D=>!ks(k,D))},{flush:"post",deep:!0});let b=null;const w=()=>{b!=null&&o.set(b,io(s.subTree))};return is(w),Rr(w),Yl(()=>{o.forEach(A=>{const{subTree:k,suspense:D}=s,z=io(k);if(A.type===z.type){ao(z);const P=z.component.da;P&&Ye(P,D);return}h(A)})}),()=>{if(b=null,!n.default)return null;const A=n.default(),k=A[0];if(A.length>1)return a=null,A;if(!es(k)||!(k.shapeFlag&4)&&!(k.shapeFlag&128))return a=null,k;let D=io(k);const z=D.type,P=Uo(Xn(D)?D.type.__asyncResolved||{}:z),{include:N,exclude:Z,max:re}=t;if(N&&(!P||!ks(N,P))||Z&&P&&ks(Z,P))return a=D,k;const fe=D.key==null?z:D.key,_e=o.get(fe);return D.el&&(D=Fn(D),k.shapeFlag&128&&(k.ssContent=D)),b=fe,_e?(D.el=_e.el,D.component=_e.component,D.transition&&ap(D,D.transition),D.shapeFlag|=512,r.delete(fe),r.add(fe)):(r.add(fe),re&&r.size>parseInt(re,10)&&_(r.values().next().value)),D.shapeFlag|=256,a=D,op(k.type)?k:D}}},cp=xf;function ks(t,n){return se(t)?t.some(s=>ks(s,n)):Ne(t)?t.split(",").includes(n):t.test?t.test(n):!1}function Af(t,n){pp(t,"a",n)}function Bf(t,n){pp(t,"da",n)}function pp(t,n,s=We){const l=t.__wdc||(t.__wdc=()=>{let o=s;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(Kl(n,l,s),s){let o=s.parent;for(;o&&o.parent;)ip(o.parent.vnode)&&Ef(l,n,s,o),o=o.parent}}function Ef(t,n,s,l){const o=Kl(n,t,l,!0);Xl(()=>{Ar(l[n],o)},s)}function ao(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function io(t){return t.shapeFlag&128?t.ssContent:t}function Kl(t,n,s=We,l=!1){if(s){const o=s[t]||(s[t]=[]),r=n.__weh||(n.__weh=(...a)=>{if(s.isUnmounted)return;os(),ts(s);const i=Ct(n,s,t,a);return Dn(),rs(),i});return l?o.unshift(r):o.push(r),r}}const Yt=t=>(n,s=We)=>(!Vs||t==="sp")&&Kl(t,(...l)=>n(...l),s),Df=Yt("bm"),is=Yt("m"),Cf=Yt("bu"),Rr=Yt("u"),Yl=Yt("bum"),Xl=Yt("um"),Sf=Yt("sp"),Ff=Yt("rtg"),jf=Yt("rtc");function Tf(t,n=We){Kl("ec",t,n)}function Zl(t,n){const s=Xe;if(s===null)return t;const l=eo(s)||s.proxy,o=t.dirs||(t.dirs=[]);for(let r=0;r<n.length;r++){let[a,i,c,u=$e]=n[r];a&&(pe(a)&&(a={mounted:a,updated:a}),a.deep&&xn(i),o.push({dir:a,instance:l,value:i,oldValue:void 0,arg:c,modifiers:u}))}return t}function dn(t,n,s,l){const o=t.dirs,r=n&&n.dirs;for(let a=0;a<o.length;a++){const i=o[a];r&&(i.oldValue=r[a].value);let c=i.dir[l];c&&(os(),Ct(c,s,8,[t.el,i,t,n]),rs())}}const up="components",$f="directives";function El(t,n){return dp(up,t,!0,n)||t}const Of=Symbol();function zf(t){return dp($f,t)}function dp(t,n,s=!0,l=!1){const o=Xe||We;if(o){const r=o.type;if(t===up){const i=Uo(r,!1);if(i&&(i===n||i===It(n)||i===Vl(It(n))))return r}const a=Ta(o[t]||r[t],n)||Ta(o.appContext[t],n);return!a&&l?r:a}}function Ta(t,n){return t&&(t[n]||t[It(n)]||t[Vl(It(n))])}function Zs(t,n,s,l){let o;const r=s&&s[l];if(se(t)||Ne(t)){o=new Array(t.length);for(let a=0,i=t.length;a<i;a++)o[a]=n(t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){o=new Array(t);for(let a=0;a<t;a++)o[a]=n(a+1,a,void 0,r&&r[a])}else if(ze(t))if(t[Symbol.iterator])o=Array.from(t,(a,i)=>n(a,i,void 0,r&&r[i]));else{const a=Object.keys(t);o=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const u=a[i];o[i]=n(t[u],u,i,r&&r[i])}}else o=[];return s&&(s[l]=o),o}function Ft(t,n,s={},l,o){if(Xe.isCE||Xe.parent&&Xn(Xe.parent)&&Xe.parent.isCE)return n!=="default"&&(s.name=n),j("slot",s,l&&l());let r=t[n];r&&r._c&&(r._d=!1),B();const a=r&&fp(r(s)),i=W(De,{key:s.key||a&&a.key||`_${n}`},a||(l?l():[]),a&&t._===1?64:-2);return!o&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function fp(t){return t.some(n=>es(n)?!(n.type===un||n.type===De&&!fp(n.children)):!0)?t:null}const No=t=>t?Ap(t)?eo(t)||t.proxy:No(t.parent):null,xs=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>No(t.parent),$root:t=>No(t.root),$emit:t=>t.emit,$options:t=>Vr(t),$forceUpdate:t=>t.f||(t.f=()=>Lr(t.update)),$nextTick:t=>t.n||(t.n=Qe.bind(t.proxy)),$watch:t=>wf.bind(t)}),co=(t,n)=>t!==$e&&!t.__isScriptSetup&&be(t,n),Pf={get({_:t},n){const{ctx:s,setupState:l,data:o,props:r,accessCache:a,type:i,appContext:c}=t;let u;if(n[0]!=="$"){const h=a[n];if(h!==void 0)switch(h){case 1:return l[n];case 2:return o[n];case 4:return s[n];case 3:return r[n]}else{if(co(l,n))return a[n]=1,l[n];if(o!==$e&&be(o,n))return a[n]=2,o[n];if((u=t.propsOptions[0])&&be(u,n))return a[n]=3,r[n];if(s!==$e&&be(s,n))return a[n]=4,s[n];Io&&(a[n]=0)}}const d=xs[n];let f,y;if(d)return n==="$attrs"&&gt(t,"get",n),d(t);if((f=i.__cssModules)&&(f=f[n]))return f;if(s!==$e&&be(s,n))return a[n]=4,s[n];if(y=c.config.globalProperties,be(y,n))return y[n]},set({_:t},n,s){const{data:l,setupState:o,ctx:r}=t;return co(o,n)?(o[n]=s,!0):l!==$e&&be(l,n)?(l[n]=s,!0):be(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(r[n]=s,!0)},has({_:{data:t,setupState:n,accessCache:s,ctx:l,appContext:o,propsOptions:r}},a){let i;return!!s[a]||t!==$e&&be(t,a)||co(n,a)||(i=r[0])&&be(i,a)||be(l,a)||be(xs,a)||be(o.config.globalProperties,a)},defineProperty(t,n,s){return s.get!=null?t._.accessCache[n]=0:be(s,"value")&&this.set(t,n,s.value,null),Reflect.defineProperty(t,n,s)}};let Io=!0;function Lf(t){const n=Vr(t),s=t.proxy,l=t.ctx;Io=!1,n.beforeCreate&&$a(n.beforeCreate,t,"bc");const{data:o,computed:r,methods:a,watch:i,provide:c,inject:u,created:d,beforeMount:f,mounted:y,beforeUpdate:h,updated:m,activated:_,deactivated:b,beforeDestroy:w,beforeUnmount:A,destroyed:k,unmounted:D,render:z,renderTracked:P,renderTriggered:N,errorCaptured:Z,serverPrefetch:re,expose:fe,inheritAttrs:_e,components:Ge,directives:He,filters:Le}=n;if(u&&Mf(u,l,null,t.appContext.config.unwrapInjectedRef),a)for(const Y in a){const ne=a[Y];pe(ne)&&(l[Y]=ne.bind(s))}if(o){const Y=o.call(s,s);ze(Y)&&(t.data=Oe(Y))}if(Io=!0,r)for(const Y in r){const ne=r[Y],he=pe(ne)?ne.bind(s,s):pe(ne.get)?ne.get.bind(s,s):Dt,Be=!pe(ne)&&pe(ne.set)?ne.set.bind(s):Dt,nt=C({get:he,set:Be});Object.defineProperty(l,Y,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Ie=>nt.value=Ie})}if(i)for(const Y in i)yp(i[Y],l,s,Y);if(c){const Y=pe(c)?c.call(s):c;Reflect.ownKeys(Y).forEach(ne=>{ft(ne,Y[ne])})}d&&$a(d,t,"c");function Te(Y,ne){se(ne)?ne.forEach(he=>Y(he.bind(s))):ne&&Y(ne.bind(s))}if(Te(Df,f),Te(is,y),Te(Cf,h),Te(Rr,m),Te(Af,_),Te(Bf,b),Te(Tf,Z),Te(jf,P),Te(Ff,N),Te(Yl,A),Te(Xl,D),Te(Sf,re),se(fe))if(fe.length){const Y=t.exposed||(t.exposed={});fe.forEach(ne=>{Object.defineProperty(Y,ne,{get:()=>s[ne],set:he=>s[ne]=he})})}else t.exposed||(t.exposed={});z&&t.render===Dt&&(t.render=z),_e!=null&&(t.inheritAttrs=_e),Ge&&(t.components=Ge),He&&(t.directives=He)}function Mf(t,n,s=Dt,l=!1){se(t)&&(t=Ro(t));for(const o in t){const r=t[o];let a;ze(r)?"default"in r?a=M(r.from||o,r.default,!0):a=M(r.from||o):a=M(r),Ce(a)&&l?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):n[o]=a}}function $a(t,n,s){Ct(se(t)?t.map(l=>l.bind(n.proxy)):t.bind(n.proxy),n,s)}function yp(t,n,s,l){const o=l.includes(".")?rp(s,l):()=>s[l];if(Ne(t)){const r=n[t];pe(r)&&ye(o,r)}else if(pe(t))ye(o,t.bind(s));else if(ze(t))if(se(t))t.forEach(r=>yp(r,n,s,l));else{const r=pe(t.handler)?t.handler.bind(s):n[t.handler];pe(r)&&ye(o,r,t)}}function Vr(t){const n=t.type,{mixins:s,extends:l}=n,{mixins:o,optionsCache:r,config:{optionMergeStrategies:a}}=t.appContext,i=r.get(n);let c;return i?c=i:!o.length&&!s&&!l?c=n:(c={},o.length&&o.forEach(u=>Dl(c,u,a,!0)),Dl(c,n,a)),ze(n)&&r.set(n,c),c}function Dl(t,n,s,l=!1){const{mixins:o,extends:r}=n;r&&Dl(t,r,s,!0),o&&o.forEach(a=>Dl(t,a,s,!0));for(const a in n)if(!(l&&a==="expose")){const i=Nf[a]||s&&s[a];t[a]=i?i(t[a],n[a]):n[a]}return t}const Nf={data:Oa,props:hn,emits:hn,methods:hn,computed:hn,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:hn,directives:hn,watch:Rf,provide:Oa,inject:If};function Oa(t,n){return n?t?function(){return rt(pe(t)?t.call(this,this):t,pe(n)?n.call(this,this):n)}:n:t}function If(t,n){return hn(Ro(t),Ro(n))}function Ro(t){if(se(t)){const n={};for(let s=0;s<t.length;s++)n[t[s]]=t[s];return n}return t}function st(t,n){return t?[...new Set([].concat(t,n))]:n}function hn(t,n){return t?rt(rt(Object.create(null),t),n):n}function Rf(t,n){if(!t)return n;if(!n)return t;const s=rt(Object.create(null),t);for(const l in n)s[l]=st(t[l],n[l]);return s}function Vf(t,n,s,l=!1){const o={},r={};wl(r,Ql,1),t.propsDefaults=Object.create(null),mp(t,n,o,r);for(const a in t.propsOptions[0])a in o||(o[a]=void 0);s?t.props=l?o:tf(o):t.type.props?t.props=o:t.props=r,t.attrs=r}function Hf(t,n,s,l){const{props:o,attrs:r,vnode:{patchFlag:a}}=t,i=xe(o),[c]=t.propsOptions;let u=!1;if((l||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let y=d[f];if(Gl(t.emitsOptions,y))continue;const h=n[y];if(c)if(be(r,y))h!==r[y]&&(r[y]=h,u=!0);else{const m=It(y);o[m]=Vo(c,i,m,h,t,!1)}else h!==r[y]&&(r[y]=h,u=!0)}}}else{mp(t,n,o,r)&&(u=!0);let d;for(const f in i)(!n||!be(n,f)&&((d=Tn(f))===f||!be(n,d)))&&(c?s&&(s[f]!==void 0||s[d]!==void 0)&&(o[f]=Vo(c,i,f,void 0,t,!0)):delete o[f]);if(r!==i)for(const f in r)(!n||!be(n,f)&&!0)&&(delete r[f],u=!0)}u&&Kt(t,"set","$attrs")}function mp(t,n,s,l){const[o,r]=t.propsOptions;let a=!1,i;if(n)for(let c in n){if(ml(c))continue;const u=n[c];let d;o&&be(o,d=It(c))?!r||!r.includes(d)?s[d]=u:(i||(i={}))[d]=u:Gl(t.emitsOptions,c)||(!(c in l)||u!==l[c])&&(l[c]=u,a=!0)}if(r){const c=xe(s),u=i||$e;for(let d=0;d<r.length;d++){const f=r[d];s[f]=Vo(o,c,f,u[f],t,!be(u,f))}}return a}function Vo(t,n,s,l,o,r){const a=t[s];if(a!=null){const i=be(a,"default");if(i&&l===void 0){const c=a.default;if(a.type!==Function&&pe(c)){const{propsDefaults:u}=o;s in u?l=u[s]:(ts(o),l=u[s]=c.call(null,n),Dn())}else l=c}a[0]&&(r&&!i?l=!1:a[1]&&(l===""||l===Tn(s))&&(l=!0))}return l}function hp(t,n,s=!1){const l=n.propsCache,o=l.get(t);if(o)return o;const r=t.props,a={},i=[];let c=!1;if(!pe(t)){const d=f=>{c=!0;const[y,h]=hp(f,n,!0);rt(a,y),h&&i.push(...h)};!s&&n.mixins.length&&n.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!r&&!c)return ze(t)&&l.set(t,Un),Un;if(se(r))for(let d=0;d<r.length;d++){const f=It(r[d]);za(f)&&(a[f]=$e)}else if(r)for(const d in r){const f=It(d);if(za(f)){const y=r[d],h=a[f]=se(y)||pe(y)?{type:y}:Object.assign({},y);if(h){const m=Ma(Boolean,h.type),_=Ma(String,h.type);h[0]=m>-1,h[1]=_<0||m<_,(m>-1||be(h,"default"))&&i.push(f)}}}const u=[a,i];return ze(t)&&l.set(t,u),u}function za(t){return t[0]!=="$"}function Pa(t){const n=t&&t.toString().match(/^\s*function (\w+)/);return n?n[1]:t===null?"null":""}function La(t,n){return Pa(t)===Pa(n)}function Ma(t,n){return se(n)?n.findIndex(s=>La(s,t)):pe(n)&&La(n,t)?0:-1}const gp=t=>t[0]==="_"||t==="$stable",Hr=t=>se(t)?t.map(zt):[zt(t)],qf=(t,n,s)=>{if(n._n)return n;const l=$((...o)=>Hr(n(...o)),s);return l._c=!1,l},vp=(t,n,s)=>{const l=t._ctx;for(const o in t){if(gp(o))continue;const r=t[o];if(pe(r))n[o]=qf(o,r,l);else if(r!=null){const a=Hr(r);n[o]=()=>a}}},_p=(t,n)=>{const s=Hr(n);t.slots.default=()=>s},Uf=(t,n)=>{if(t.vnode.shapeFlag&32){const s=n._;s?(t.slots=xe(n),wl(n,"_",s)):vp(n,t.slots={})}else t.slots={},n&&_p(t,n);wl(t.slots,Ql,1)},Gf=(t,n,s)=>{const{vnode:l,slots:o}=t;let r=!0,a=$e;if(l.shapeFlag&32){const i=n._;i?s&&i===1?r=!1:(rt(o,n),!s&&i===1&&delete o._):(r=!n.$stable,vp(n,o)),a=n}else n&&(_p(t,n),a={default:1});if(r)for(const i in o)!gp(i)&&!(i in a)&&delete o[i]};function bp(){return{app:null,config:{isNativeTag:kd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wf=0;function Kf(t,n){return function(l,o=null){pe(l)||(l=Object.assign({},l)),o!=null&&!ze(o)&&(o=null);const r=bp(),a=new Set;let i=!1;const c=r.app={_uid:Wf++,_component:l,_props:o,_container:null,_context:r,_instance:null,version:my,get config(){return r.config},set config(u){},use(u,...d){return a.has(u)||(u&&pe(u.install)?(a.add(u),u.install(c,...d)):pe(u)&&(a.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!i){const y=j(l,o);return y.appContext=r,d&&n?n(y,u):t(y,u,f),i=!0,c._container=u,u.__vue_app__=c,eo(y.component)||y.component.proxy}},unmount(){i&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c}};return c}}function Ho(t,n,s,l,o=!1){if(se(t)){t.forEach((y,h)=>Ho(y,n&&(se(n)?n[h]:n),s,l,o));return}if(Xn(l)&&!o)return;const r=l.shapeFlag&4?eo(l.component)||l.component.proxy:l.el,a=o?null:r,{i,r:c}=t,u=n&&n.r,d=i.refs===$e?i.refs={}:i.refs,f=i.setupState;if(u!=null&&u!==c&&(Ne(u)?(d[u]=null,be(f,u)&&(f[u]=null)):Ce(u)&&(u.value=null)),pe(c))ln(c,i,12,[a,d]);else{const y=Ne(c),h=Ce(c);if(y||h){const m=()=>{if(t.f){const _=y?be(f,c)?f[c]:d[c]:c.value;o?se(_)&&Ar(_,r):se(_)?_.includes(r)||_.push(r):y?(d[c]=[r],be(f,c)&&(f[c]=d[c])):(c.value=[r],t.k&&(d[t.k]=c.value))}else y?(d[c]=a,be(f,c)&&(f[c]=a)):h&&(c.value=a,t.k&&(d[t.k]=a))};a?(m.id=-1,Ye(m,s)):m()}}}const Ye=kf;function Yf(t){return Xf(t)}function Xf(t,n){const s=Dd();s.__VUE__=!0;const{insert:l,remove:o,patchProp:r,createElement:a,createText:i,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:y,setScopeId:h=Dt,insertStaticContent:m}=t,_=(g,v,E,S=null,T=null,I=null,G=!1,L=null,R=!!v.dynamicChildren)=>{if(g===v)return;g&&!ds(g,v)&&(S=V(g),Ie(g,T,I,!0),g=null),v.patchFlag===-2&&(R=!1,v.dynamicChildren=null);const{type:O,ref:Q,shapeFlag:X}=v;switch(O){case Jl:b(g,v,E,S);break;case un:w(g,v,E,S);break;case po:g==null&&A(v,E,S,G);break;case De:Ge(g,v,E,S,T,I,G,L,R);break;default:X&1?z(g,v,E,S,T,I,G,L,R):X&6?He(g,v,E,S,T,I,G,L,R):(X&64||X&128)&&O.process(g,v,E,S,T,I,G,L,R,ge)}Q!=null&&T&&Ho(Q,g&&g.ref,I,v||g,!v)},b=(g,v,E,S)=>{if(g==null)l(v.el=i(v.children),E,S);else{const T=v.el=g.el;v.children!==g.children&&u(T,v.children)}},w=(g,v,E,S)=>{g==null?l(v.el=c(v.children||""),E,S):v.el=g.el},A=(g,v,E,S)=>{[g.el,g.anchor]=m(g.children,v,E,S,g.el,g.anchor)},k=({el:g,anchor:v},E,S)=>{let T;for(;g&&g!==v;)T=y(g),l(g,E,S),g=T;l(v,E,S)},D=({el:g,anchor:v})=>{let E;for(;g&&g!==v;)E=y(g),o(g),g=E;o(v)},z=(g,v,E,S,T,I,G,L,R)=>{G=G||v.type==="svg",g==null?P(v,E,S,T,I,G,L,R):re(g,v,T,I,G,L,R)},P=(g,v,E,S,T,I,G,L)=>{let R,O;const{type:Q,props:X,shapeFlag:ee,transition:le,dirs:ve}=g;if(R=g.el=a(g.type,I,X&&X.is,X),ee&8?d(R,g.children):ee&16&&Z(g.children,R,null,S,T,I&&Q!=="foreignObject",G,L),ve&&dn(g,null,S,"created"),X){for(const Se in X)Se!=="value"&&!ml(Se)&&r(R,Se,null,X[Se],I,g.children,S,T,q);"value"in X&&r(R,"value",null,X.value),(O=X.onVnodeBeforeMount)&&vt(O,S,g)}N(R,g,g.scopeId,G,S),ve&&dn(g,null,S,"beforeMount");const Fe=(!T||T&&!T.pendingBranch)&&le&&!le.persisted;Fe&&le.beforeEnter(R),l(R,v,E),((O=X&&X.onVnodeMounted)||Fe||ve)&&Ye(()=>{O&&vt(O,S,g),Fe&&le.enter(R),ve&&dn(g,null,S,"mounted")},T)},N=(g,v,E,S,T)=>{if(E&&h(g,E),S)for(let I=0;I<S.length;I++)h(g,S[I]);if(T){let I=T.subTree;if(v===I){const G=T.vnode;N(g,G,G.scopeId,G.slotScopeIds,T.parent)}}},Z=(g,v,E,S,T,I,G,L,R=0)=>{for(let O=R;O<g.length;O++){const Q=g[O]=L?en(g[O]):zt(g[O]);_(null,Q,v,E,S,T,I,G,L)}},re=(g,v,E,S,T,I,G)=>{const L=v.el=g.el;let{patchFlag:R,dynamicChildren:O,dirs:Q}=v;R|=g.patchFlag&16;const X=g.props||$e,ee=v.props||$e;let le;E&&fn(E,!1),(le=ee.onVnodeBeforeUpdate)&&vt(le,E,v,g),Q&&dn(v,g,E,"beforeUpdate"),E&&fn(E,!0);const ve=T&&v.type!=="foreignObject";if(O?fe(g.dynamicChildren,O,L,E,S,ve,I):G||ne(g,v,L,null,E,S,ve,I,!1),R>0){if(R&16)_e(L,v,X,ee,E,S,T);else if(R&2&&X.class!==ee.class&&r(L,"class",null,ee.class,T),R&4&&r(L,"style",X.style,ee.style,T),R&8){const Fe=v.dynamicProps;for(let Se=0;Se<Fe.length;Se++){const Re=Fe[Se],kt=X[Re],Ln=ee[Re];(Ln!==kt||Re==="value")&&r(L,Re,kt,Ln,T,g.children,E,S,q)}}R&1&&g.children!==v.children&&d(L,v.children)}else!G&&O==null&&_e(L,v,X,ee,E,S,T);((le=ee.onVnodeUpdated)||Q)&&Ye(()=>{le&&vt(le,E,v,g),Q&&dn(v,g,E,"updated")},S)},fe=(g,v,E,S,T,I,G)=>{for(let L=0;L<v.length;L++){const R=g[L],O=v[L],Q=R.el&&(R.type===De||!ds(R,O)||R.shapeFlag&70)?f(R.el):E;_(R,O,Q,null,S,T,I,G,!0)}},_e=(g,v,E,S,T,I,G)=>{if(E!==S){if(E!==$e)for(const L in E)!ml(L)&&!(L in S)&&r(g,L,E[L],null,G,v.children,T,I,q);for(const L in S){if(ml(L))continue;const R=S[L],O=E[L];R!==O&&L!=="value"&&r(g,L,O,R,G,v.children,T,I,q)}"value"in S&&r(g,"value",E.value,S.value)}},Ge=(g,v,E,S,T,I,G,L,R)=>{const O=v.el=g?g.el:i(""),Q=v.anchor=g?g.anchor:i("");let{patchFlag:X,dynamicChildren:ee,slotScopeIds:le}=v;le&&(L=L?L.concat(le):le),g==null?(l(O,E,S),l(Q,E,S),Z(v.children,E,Q,T,I,G,L,R)):X>0&&X&64&&ee&&g.dynamicChildren?(fe(g.dynamicChildren,ee,E,T,I,G,L),(v.key!=null||T&&v===T.subTree)&&qr(g,v,!0)):ne(g,v,E,Q,T,I,G,L,R)},He=(g,v,E,S,T,I,G,L,R)=>{v.slotScopeIds=L,g==null?v.shapeFlag&512?T.ctx.activate(v,E,S,G,R):Le(v,E,S,T,I,G,R):je(g,v,R)},Le=(g,v,E,S,T,I,G)=>{const L=g.component=ry(g,S,T);if(ip(g)&&(L.ctx.renderer=ge),ay(L),L.asyncDep){if(T&&T.registerDep(L,Te),!g.el){const R=L.subTree=j(un);w(null,R,v,E)}return}Te(L,g,v,E,T,I,G)},je=(g,v,E)=>{const S=v.component=g.component;if(_f(g,v,E))if(S.asyncDep&&!S.asyncResolved){Y(S,v,E);return}else S.next=v,ff(S.update),S.update();else v.el=g.el,S.vnode=v},Te=(g,v,E,S,T,I,G)=>{const L=()=>{if(g.isMounted){let{next:Q,bu:X,u:ee,parent:le,vnode:ve}=g,Fe=Q,Se;fn(g,!1),Q?(Q.el=ve.el,Y(g,Q,G)):Q=ve,X&&Wn(X),(Se=Q.props&&Q.props.onVnodeBeforeUpdate)&&vt(Se,le,Q,ve),fn(g,!0);const Re=ro(g),kt=g.subTree;g.subTree=Re,_(kt,Re,f(kt.el),V(kt),g,T,I),Q.el=Re.el,Fe===null&&bf(g,Re.el),ee&&Ye(ee,T),(Se=Q.props&&Q.props.onVnodeUpdated)&&Ye(()=>vt(Se,le,Q,ve),T)}else{let Q;const{el:X,props:ee}=v,{bm:le,m:ve,parent:Fe}=g,Se=Xn(v);if(fn(g,!1),le&&Wn(le),!Se&&(Q=ee&&ee.onVnodeBeforeMount)&&vt(Q,Fe,v),fn(g,!0),X&&ae){const Re=()=>{g.subTree=ro(g),ae(X,g.subTree,g,T,null)};Se?v.type.__asyncLoader().then(()=>!g.isUnmounted&&Re()):Re()}else{const Re=g.subTree=ro(g);_(null,Re,E,S,g,T,I),v.el=Re.el}if(ve&&Ye(ve,T),!Se&&(Q=ee&&ee.onVnodeMounted)){const Re=v;Ye(()=>vt(Q,Fe,Re),T)}(v.shapeFlag&256||Fe&&Xn(Fe.vnode)&&Fe.vnode.shapeFlag&256)&&g.a&&Ye(g.a,T),g.isMounted=!0,v=E=S=null}},R=g.effect=new Cr(L,()=>Lr(O),g.scope),O=g.update=()=>R.run();O.id=g.uid,fn(g,!0),O()},Y=(g,v,E)=>{v.component=g;const S=g.vnode.props;g.vnode=v,g.next=null,Hf(g,v.props,S,E),Gf(g,v.children,E),os(),Fa(),rs()},ne=(g,v,E,S,T,I,G,L,R=!1)=>{const O=g&&g.children,Q=g?g.shapeFlag:0,X=v.children,{patchFlag:ee,shapeFlag:le}=v;if(ee>0){if(ee&128){Be(O,X,E,S,T,I,G,L,R);return}else if(ee&256){he(O,X,E,S,T,I,G,L,R);return}}le&8?(Q&16&&q(O,T,I),X!==O&&d(E,X)):Q&16?le&16?Be(O,X,E,S,T,I,G,L,R):q(O,T,I,!0):(Q&8&&d(E,""),le&16&&Z(X,E,S,T,I,G,L,R))},he=(g,v,E,S,T,I,G,L,R)=>{g=g||Un,v=v||Un;const O=g.length,Q=v.length,X=Math.min(O,Q);let ee;for(ee=0;ee<X;ee++){const le=v[ee]=R?en(v[ee]):zt(v[ee]);_(g[ee],le,E,null,T,I,G,L,R)}O>Q?q(g,T,I,!0,!1,X):Z(v,E,S,T,I,G,L,R,X)},Be=(g,v,E,S,T,I,G,L,R)=>{let O=0;const Q=v.length;let X=g.length-1,ee=Q-1;for(;O<=X&&O<=ee;){const le=g[O],ve=v[O]=R?en(v[O]):zt(v[O]);if(ds(le,ve))_(le,ve,E,null,T,I,G,L,R);else break;O++}for(;O<=X&&O<=ee;){const le=g[X],ve=v[ee]=R?en(v[ee]):zt(v[ee]);if(ds(le,ve))_(le,ve,E,null,T,I,G,L,R);else break;X--,ee--}if(O>X){if(O<=ee){const le=ee+1,ve=le<Q?v[le].el:S;for(;O<=ee;)_(null,v[O]=R?en(v[O]):zt(v[O]),E,ve,T,I,G,L,R),O++}}else if(O>ee)for(;O<=X;)Ie(g[O],T,I,!0),O++;else{const le=O,ve=O,Fe=new Map;for(O=ve;O<=ee;O++){const it=v[O]=R?en(v[O]):zt(v[O]);it.key!=null&&Fe.set(it.key,O)}let Se,Re=0;const kt=ee-ve+1;let Ln=!1,_a=0;const us=new Array(kt);for(O=0;O<kt;O++)us[O]=0;for(O=le;O<=X;O++){const it=g[O];if(Re>=kt){Ie(it,T,I,!0);continue}let Ot;if(it.key!=null)Ot=Fe.get(it.key);else for(Se=ve;Se<=ee;Se++)if(us[Se-ve]===0&&ds(it,v[Se])){Ot=Se;break}Ot===void 0?Ie(it,T,I,!0):(us[Ot-ve]=O+1,Ot>=_a?_a=Ot:Ln=!0,_(it,v[Ot],E,null,T,I,G,L,R),Re++)}const ba=Ln?Zf(us):Un;for(Se=ba.length-1,O=kt-1;O>=0;O--){const it=ve+O,Ot=v[it],ka=it+1<Q?v[it+1].el:S;us[O]===0?_(null,Ot,E,ka,T,I,G,L,R):Ln&&(Se<0||O!==ba[Se]?nt(Ot,E,ka,2):Se--)}}},nt=(g,v,E,S,T=null)=>{const{el:I,type:G,transition:L,children:R,shapeFlag:O}=g;if(O&6){nt(g.component.subTree,v,E,S);return}if(O&128){g.suspense.move(v,E,S);return}if(O&64){G.move(g,v,E,ge);return}if(G===De){l(I,v,E);for(let X=0;X<R.length;X++)nt(R[X],v,E,S);l(g.anchor,v,E);return}if(G===po){k(g,v,E);return}if(S!==2&&O&1&&L)if(S===0)L.beforeEnter(I),l(I,v,E),Ye(()=>L.enter(I),T);else{const{leave:X,delayLeave:ee,afterLeave:le}=L,ve=()=>l(I,v,E),Fe=()=>{X(I,()=>{ve(),le&&le()})};ee?ee(I,ve,Fe):Fe()}else l(I,v,E)},Ie=(g,v,E,S=!1,T=!1)=>{const{type:I,props:G,ref:L,children:R,dynamicChildren:O,shapeFlag:Q,patchFlag:X,dirs:ee}=g;if(L!=null&&Ho(L,null,E,g,!0),Q&256){v.ctx.deactivate(g);return}const le=Q&1&&ee,ve=!Xn(g);let Fe;if(ve&&(Fe=G&&G.onVnodeBeforeUnmount)&&vt(Fe,v,g),Q&6)F(g.component,E,S);else{if(Q&128){g.suspense.unmount(E,S);return}le&&dn(g,null,v,"beforeUnmount"),Q&64?g.type.remove(g,v,E,T,ge,S):O&&(I!==De||X>0&&X&64)?q(O,v,E,!1,!0):(I===De&&X&384||!T&&Q&16)&&q(R,v,E),S&&Zt(g)}(ve&&(Fe=G&&G.onVnodeUnmounted)||le)&&Ye(()=>{Fe&&vt(Fe,v,g),le&&dn(g,null,v,"unmounted")},E)},Zt=g=>{const{type:v,el:E,anchor:S,transition:T}=g;if(v===De){Pn(E,S);return}if(v===po){D(g);return}const I=()=>{o(E),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(g.shapeFlag&1&&T&&!T.persisted){const{leave:G,delayLeave:L}=T,R=()=>G(E,I);L?L(g.el,I,R):R()}else I()},Pn=(g,v)=>{let E;for(;g!==v;)E=y(g),o(g),g=E;o(v)},F=(g,v,E)=>{const{bum:S,scope:T,update:I,subTree:G,um:L}=g;S&&Wn(S),T.stop(),I&&(I.active=!1,Ie(G,g,v,E)),L&&Ye(L,v),Ye(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},q=(g,v,E,S=!1,T=!1,I=0)=>{for(let G=I;G<g.length;G++)Ie(g[G],v,E,S,T)},V=g=>g.shapeFlag&6?V(g.component.subTree):g.shapeFlag&128?g.suspense.next():y(g.anchor||g.el),J=(g,v,E)=>{g==null?v._vnode&&Ie(v._vnode,null,null,!0):_(v._vnode||null,g,v,null,null,null,E),Fa(),np(),v._vnode=g},ge={p:_,um:Ie,m:nt,r:Zt,mt:Le,mc:Z,pc:ne,pbc:fe,n:V,o:t};let ke,ae;return n&&([ke,ae]=n(ge)),{render:J,hydrate:ke,createApp:Kf(J,ke)}}function fn({effect:t,update:n},s){t.allowRecurse=n.allowRecurse=s}function qr(t,n,s=!1){const l=t.children,o=n.children;if(se(l)&&se(o))for(let r=0;r<l.length;r++){const a=l[r];let i=o[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=o[r]=en(o[r]),i.el=a.el),s||qr(a,i)),i.type===Jl&&(i.el=a.el)}}function Zf(t){const n=t.slice(),s=[0];let l,o,r,a,i;const c=t.length;for(l=0;l<c;l++){const u=t[l];if(u!==0){if(o=s[s.length-1],t[o]<u){n[l]=o,s.push(l);continue}for(r=0,a=s.length-1;r<a;)i=r+a>>1,t[s[i]]<u?r=i+1:a=i;u<t[s[r]]&&(r>0&&(n[l]=s[r-1]),s[r]=l)}}for(r=s.length,a=s[r-1];r-- >0;)s[r]=a,a=n[a];return s}const Jf=t=>t.__isTeleport,As=t=>t&&(t.disabled||t.disabled===""),Na=t=>typeof SVGElement<"u"&&t instanceof SVGElement,qo=(t,n)=>{const s=t&&t.to;return Ne(s)?n?n(s):null:s},Qf={__isTeleport:!0,process(t,n,s,l,o,r,a,i,c,u){const{mc:d,pc:f,pbc:y,o:{insert:h,querySelector:m,createText:_,createComment:b}}=u,w=As(n.props);let{shapeFlag:A,children:k,dynamicChildren:D}=n;if(t==null){const z=n.el=_(""),P=n.anchor=_("");h(z,s,l),h(P,s,l);const N=n.target=qo(n.props,m),Z=n.targetAnchor=_("");N&&(h(Z,N),a=a||Na(N));const re=(fe,_e)=>{A&16&&d(k,fe,_e,o,r,a,i,c)};w?re(s,P):N&&re(N,Z)}else{n.el=t.el;const z=n.anchor=t.anchor,P=n.target=t.target,N=n.targetAnchor=t.targetAnchor,Z=As(t.props),re=Z?s:P,fe=Z?z:N;if(a=a||Na(P),D?(y(t.dynamicChildren,D,re,o,r,a,i),qr(t,n,!0)):c||f(t,n,re,fe,o,r,a,i,!1),w)Z||pl(n,s,z,u,1);else if((n.props&&n.props.to)!==(t.props&&t.props.to)){const _e=n.target=qo(n.props,m);_e&&pl(n,_e,null,u,0)}else Z&&pl(n,P,N,u,1)}kp(n)},remove(t,n,s,l,{um:o,o:{remove:r}},a){const{shapeFlag:i,children:c,anchor:u,targetAnchor:d,target:f,props:y}=t;if(f&&r(d),(a||!As(y))&&(r(u),i&16))for(let h=0;h<c.length;h++){const m=c[h];o(m,n,s,!0,!!m.dynamicChildren)}},move:pl,hydrate:ey};function pl(t,n,s,{o:{insert:l},m:o},r=2){r===0&&l(t.targetAnchor,n,s);const{el:a,anchor:i,shapeFlag:c,children:u,props:d}=t,f=r===2;if(f&&l(a,n,s),(!f||As(d))&&c&16)for(let y=0;y<u.length;y++)o(u[y],n,s,2);f&&l(i,n,s)}function ey(t,n,s,l,o,r,{o:{nextSibling:a,parentNode:i,querySelector:c}},u){const d=n.target=qo(n.props,c);if(d){const f=d._lpa||d.firstChild;if(n.shapeFlag&16)if(As(n.props))n.anchor=u(a(t),n,i(t),s,l,o,r),n.targetAnchor=f;else{n.anchor=a(t);let y=f;for(;y;)if(y=a(y),y&&y.nodeType===8&&y.data==="teleport anchor"){n.targetAnchor=y,d._lpa=n.targetAnchor&&a(n.targetAnchor);break}u(f,n,d,s,l,o,r)}kp(n)}return n.anchor&&a(n.anchor)}const ty=Qf;function kp(t){const n=t.ctx;if(n&&n.ut){let s=t.children[0].el;for(;s!==t.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}const De=Symbol(void 0),Jl=Symbol(void 0),un=Symbol(void 0),po=Symbol(void 0),Bs=[];let Bt=null;function B(t=!1){Bs.push(Bt=t?null:[])}function ny(){Bs.pop(),Bt=Bs[Bs.length-1]||null}let Rs=1;function Ia(t){Rs+=t}function wp(t){return t.dynamicChildren=Rs>0?Bt||Un:null,ny(),Rs>0&&Bt&&Bt.push(t),t}function U(t,n,s,l,o,r){return wp(e(t,n,s,l,o,r,!0))}function W(t,n,s,l,o){return wp(j(t,n,s,l,o,!0))}function es(t){return t?t.__v_isVNode===!0:!1}function ds(t,n){return t.type===n.type&&t.key===n.key}const Ql="__vInternal",xp=({key:t})=>t!=null?t:null,hl=({ref:t,ref_key:n,ref_for:s})=>t!=null?Ne(t)||Ce(t)||pe(t)?{i:Xe,r:t,k:n,f:!!s}:t:null;function e(t,n=null,s=null,l=0,o=null,r=t===De?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&xp(n),ref:n&&hl(n),scopeId:Wl,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:l,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Xe};return i?(Ur(c,s),r&128&&t.normalize(c)):s&&(c.shapeFlag|=Ne(s)?8:16),Rs>0&&!a&&Bt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Bt.push(c),c}const j=sy;function sy(t,n=null,s=null,l=0,o=null,r=!1){if((!t||t===Of)&&(t=un),es(t)){const i=Fn(t,n,!0);return s&&Ur(i,s),Rs>0&&!r&&Bt&&(i.shapeFlag&6?Bt[Bt.indexOf(t)]=i:Bt.push(i)),i.patchFlag|=-2,i}if(py(t)&&(t=t.__vccOpts),n){n=oe(n);let{class:i,style:c}=n;i&&!Ne(i)&&(n.class=Me(i)),ze(c)&&(Yc(c)&&!se(c)&&(c=rt({},c)),n.style=Ke(c))}const a=Ne(t)?1:op(t)?128:Jf(t)?64:ze(t)?4:pe(t)?2:0;return e(t,n,s,l,o,a,r,!0)}function oe(t){return t?Yc(t)||Ql in t?rt({},t):t:null}function Fn(t,n,s=!1){const{props:l,ref:o,patchFlag:r,children:a}=t,i=n?te(l||{},n):l;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:i,key:i&&xp(i),ref:n&&n.ref?s&&o?se(o)?o.concat(hl(n)):[o,hl(n)]:hl(n):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==De?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Fn(t.ssContent),ssFallback:t.ssFallback&&Fn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function p(t=" ",n=0){return j(Jl,null,t,n)}function ue(t="",n=!1){return n?(B(),W(un,null,t)):j(un,null,t)}function zt(t){return t==null||typeof t=="boolean"?j(un):se(t)?j(De,null,t.slice()):typeof t=="object"?en(t):j(Jl,null,String(t))}function en(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Fn(t)}function Ur(t,n){let s=0;const{shapeFlag:l}=t;if(n==null)n=null;else if(se(n))s=16;else if(typeof n=="object")if(l&65){const o=n.default;o&&(o._c&&(o._d=!1),Ur(t,o()),o._c&&(o._d=!0));return}else{s=32;const o=n._;!o&&!(Ql in n)?n._ctx=Xe:o===3&&Xe&&(Xe.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else pe(n)?(n={default:n,_ctx:Xe},s=32):(n=String(n),l&64?(s=16,n=[p(n)]):s=8);t.children=n,t.shapeFlag|=s}function te(...t){const n={};for(let s=0;s<t.length;s++){const l=t[s];for(const o in l)if(o==="class")n.class!==l.class&&(n.class=Me([n.class,l.class]));else if(o==="style")n.style=Ke([n.style,l.style]);else if(Nl(o)){const r=n[o],a=l[o];a&&r!==a&&!(se(r)&&r.includes(a))&&(n[o]=r?[].concat(r,a):a)}else o!==""&&(n[o]=l[o])}return n}function vt(t,n,s,l=null){Ct(t,n,7,[s,l])}const ly=bp();let oy=0;function ry(t,n,s){const l=t.type,o=(n?n.appContext:t.appContext)||ly,r={uid:oy++,vnode:t,type:l,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hp(l,o),emitsOptions:lp(l,o),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:l.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=hf.bind(null,r),t.ce&&t.ce(r),r}let We=null;const $n=()=>We||Xe,ts=t=>{We=t,t.scope.on()},Dn=()=>{We&&We.scope.off(),We=null};function Ap(t){return t.vnode.shapeFlag&4}let Vs=!1;function ay(t,n=!1){Vs=n;const{props:s,children:l}=t.vnode,o=Ap(t);Vf(t,s,o,n),Uf(t,l);const r=o?iy(t,n):void 0;return Vs=!1,r}function iy(t,n){const s=t.type;t.accessCache=Object.create(null),t.proxy=ql(new Proxy(t.ctx,Pf));const{setup:l}=s;if(l){const o=t.setupContext=l.length>1?Ep(t):null;ts(t),os();const r=ln(l,t,0,[t.props,o]);if(rs(),Dn(),$c(r)){if(r.then(Dn,Dn),n)return r.then(a=>{Ra(t,a,n)}).catch(a=>{Ul(a,t,0)});t.asyncDep=r}else Ra(t,r,n)}else Bp(t,n)}function Ra(t,n,s){pe(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:ze(n)&&(t.setupState=Zc(n)),Bp(t,s)}let Va;function Bp(t,n,s){const l=t.type;if(!t.render){if(!n&&Va&&!l.render){const o=l.template||Vr(t).template;if(o){const{isCustomElement:r,compilerOptions:a}=t.appContext.config,{delimiters:i,compilerOptions:c}=l,u=rt(rt({isCustomElement:r,delimiters:i},a),c);l.render=Va(o,u)}}t.render=l.render||Dt}ts(t),os(),Lf(t),rs(),Dn()}function cy(t){return new Proxy(t.attrs,{get(n,s){return gt(t,"get","$attrs"),n[s]}})}function Ep(t){const n=l=>{t.exposed=l||{}};let s;return{get attrs(){return s||(s=cy(t))},slots:t.slots,emit:t.emit,expose:n}}function eo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zc(ql(t.exposed)),{get(n,s){if(s in n)return n[s];if(s in xs)return xs[s](t)},has(n,s){return s in n||s in xs}}))}function Uo(t,n=!0){return pe(t)?t.displayName||t.name:t.name||n&&t.__name}function py(t){return pe(t)&&"__vccOpts"in t}const C=(t,n)=>pf(t,n,Vs);function uy(){return dy().slots}function dy(){const t=$n();return t.setupContext||(t.setupContext=Ep(t))}function yt(t,n,s){const l=arguments.length;return l===2?ze(n)&&!se(n)?es(n)?j(t,null,[n]):j(t,n):j(t,null,n):(l>3?s=Array.prototype.slice.call(arguments,2):l===3&&es(s)&&(s=[s]),j(t,n,s))}const fy=Symbol(""),yy=()=>M(fy),my="3.2.45",hy="http://www.w3.org/2000/svg",_n=typeof document<"u"?document:null,Ha=_n&&_n.createElement("template"),gy={insert:(t,n,s)=>{n.insertBefore(t,s||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,s,l)=>{const o=n?_n.createElementNS(hy,t):_n.createElement(t,s?{is:s}:void 0);return t==="select"&&l&&l.multiple!=null&&o.setAttribute("multiple",l.multiple),o},createText:t=>_n.createTextNode(t),createComment:t=>_n.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_n.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,s,l,o,r){const a=s?s.previousSibling:n.lastChild;if(o&&(o===r||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),s),!(o===r||!(o=o.nextSibling)););else{Ha.innerHTML=l?`<svg>${t}</svg>`:t;const i=Ha.content;if(l){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}n.insertBefore(i,s)}return[a?a.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function vy(t,n,s){const l=t._vtc;l&&(n=(n?[n,...l]:[...l]).join(" ")),n==null?t.removeAttribute("class"):s?t.setAttribute("class",n):t.className=n}function _y(t,n,s){const l=t.style,o=Ne(s);if(s&&!o){for(const r in s)Go(l,r,s[r]);if(n&&!Ne(n))for(const r in n)s[r]==null&&Go(l,r,"")}else{const r=l.display;o?n!==s&&(l.cssText=s):n&&t.removeAttribute("style"),"_vod"in t&&(l.display=r)}}const qa=/\s*!important$/;function Go(t,n,s){if(se(s))s.forEach(l=>Go(t,n,l));else if(s==null&&(s=""),n.startsWith("--"))t.setProperty(n,s);else{const l=by(t,n);qa.test(s)?t.setProperty(Tn(l),s.replace(qa,""),"important"):t[l]=s}}const Ua=["Webkit","Moz","ms"],uo={};function by(t,n){const s=uo[n];if(s)return s;let l=It(n);if(l!=="filter"&&l in t)return uo[n]=l;l=Vl(l);for(let o=0;o<Ua.length;o++){const r=Ua[o]+l;if(r in t)return uo[n]=r}return n}const Ga="http://www.w3.org/1999/xlink";function ky(t,n,s,l,o){if(l&&n.startsWith("xlink:"))s==null?t.removeAttributeNS(Ga,n.slice(6,n.length)):t.setAttributeNS(Ga,n,s);else{const r=bd(n);s==null||r&&!Fc(s)?t.removeAttribute(n):t.setAttribute(n,r?"":s)}}function wy(t,n,s,l,o,r,a){if(n==="innerHTML"||n==="textContent"){l&&a(l,o,r),t[n]=s==null?"":s;return}if(n==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=s;const c=s==null?"":s;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),s==null&&t.removeAttribute(n);return}let i=!1;if(s===""||s==null){const c=typeof t[n];c==="boolean"?s=Fc(s):s==null&&c==="string"?(s="",i=!0):c==="number"&&(s=0,i=!0)}try{t[n]=s}catch{}i&&t.removeAttribute(n)}function Rn(t,n,s,l){t.addEventListener(n,s,l)}function xy(t,n,s,l){t.removeEventListener(n,s,l)}function Ay(t,n,s,l,o=null){const r=t._vei||(t._vei={}),a=r[n];if(l&&a)a.value=l;else{const[i,c]=By(n);if(l){const u=r[n]=Cy(l,o);Rn(t,i,u,c)}else a&&(xy(t,i,a,c),r[n]=void 0)}}const Wa=/(?:Once|Passive|Capture)$/;function By(t){let n;if(Wa.test(t)){n={};let l;for(;l=t.match(Wa);)t=t.slice(0,t.length-l[0].length),n[l[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Tn(t.slice(2)),n]}let fo=0;const Ey=Promise.resolve(),Dy=()=>fo||(Ey.then(()=>fo=0),fo=Date.now());function Cy(t,n){const s=l=>{if(!l._vts)l._vts=Date.now();else if(l._vts<=s.attached)return;Ct(Sy(l,s.value),n,5,[l])};return s.value=t,s.attached=Dy(),s}function Sy(t,n){if(se(n)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},n.map(l=>o=>!o._stopped&&l&&l(o))}else return n}const Ka=/^on[a-z]/,Fy=(t,n,s,l,o=!1,r,a,i,c)=>{n==="class"?vy(t,l,o):n==="style"?_y(t,s,l):Nl(n)?xr(n)||Ay(t,n,s,l,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):jy(t,n,l,o))?wy(t,n,l,r,a,i,c):(n==="true-value"?t._trueValue=l:n==="false-value"&&(t._falseValue=l),ky(t,n,l,o))};function jy(t,n,s,l){return l?!!(n==="innerHTML"||n==="textContent"||n in t&&Ka.test(n)&&pe(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA"||Ka.test(n)&&Ne(s)?!1:n in t}const Ya=t=>{const n=t.props["onUpdate:modelValue"]||!1;return se(n)?s=>Wn(n,s):n};function Ty(t){t.target.composing=!0}function Xa(t){const n=t.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const $y={created(t,{modifiers:{lazy:n,trim:s,number:l}},o){t._assign=Ya(o);const r=l||o.props&&o.props.type==="number";Rn(t,n?"change":"input",a=>{if(a.target.composing)return;let i=t.value;s&&(i=i.trim()),r&&(i=xl(i)),t._assign(i)}),s&&Rn(t,"change",()=>{t.value=t.value.trim()}),n||(Rn(t,"compositionstart",Ty),Rn(t,"compositionend",Xa),Rn(t,"change",Xa))},mounted(t,{value:n}){t.value=n==null?"":n},beforeUpdate(t,{value:n,modifiers:{lazy:s,trim:l,number:o}},r){if(t._assign=Ya(r),t.composing||document.activeElement===t&&t.type!=="range"&&(s||l&&t.value.trim()===n||(o||t.type==="number")&&xl(t.value)===n))return;const a=n==null?"":n;t.value!==a&&(t.value=a)}},Oy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Za=(t,n)=>s=>{if(!("key"in s))return;const l=Tn(s.key);if(n.some(o=>o===l||Oy[o]===l))return t(s)},Dp={beforeMount(t,{value:n},{transition:s}){t._vod=t.style.display==="none"?"":t.style.display,s&&n?s.beforeEnter(t):fs(t,n)},mounted(t,{value:n},{transition:s}){s&&n&&s.enter(t)},updated(t,{value:n,oldValue:s},{transition:l}){!n!=!s&&(l?n?(l.beforeEnter(t),fs(t,!0),l.enter(t)):l.leave(t,()=>{fs(t,!1)}):fs(t,n))},beforeUnmount(t,{value:n}){fs(t,n)}};function fs(t,n){t.style.display=n?t._vod:"none"}const zy=rt({patchProp:Fy},gy);let Ja;function Py(){return Ja||(Ja=Yf(zy))}const Ly=(...t)=>{const n=Py().createApp(...t),{mount:s}=n;return n.mount=l=>{const o=My(l);if(!o)return;const r=n._component;!pe(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const a=s(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},n};function My(t){return Ne(t)?document.querySelector(t):t}var Qa;const jt=typeof window<"u",Ny=t=>typeof t<"u",Iy=Object.prototype.toString,Cl=t=>typeof t=="function",Ry=t=>typeof t=="number",Cp=t=>typeof t=="string",Wo=t=>Iy.call(t)==="[object Object]",Ko=()=>+Date.now(),Es=()=>{};jt&&((Qa=window==null?void 0:window.navigator)==null?void 0:Qa.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ze(t){return typeof t=="function"?t():x(t)}function Vy(t,n){function s(...l){t(()=>n.apply(this,l),{fn:n,thisArg:this,args:l})}return s}const Sp=t=>t();function Hy(t=Sp){const n=H(!0);function s(){n.value=!1}function l(){n.value=!0}return{isActive:n,pause:s,resume:l,eventFilter:(...r)=>{n.value&&t(...r)}}}function qy(t){return t}function Uy(t,n){var s;if(typeof t=="number")return t+n;const l=((s=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",o=t.slice(l.length),r=parseFloat(l)+n;return Number.isNaN(r)?t:r+o}function Gy(t,n){let s,l,o;const r=H(!0),a=()=>{r.value=!0,o()};ye(t,a,{flush:"sync"});const i=Cl(n)?n:n.get,c=Cl(n)?void 0:n.set,u=Jc((d,f)=>(l=d,o=f,{get(){return r.value&&(s=i(),r.value=!1),l(),s},set(y){c==null||c(y)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function Vt(t){return Lc()?(Mc(t),!0):!1}function Wy(t){if(!Ce(t))return Oe(t);const n=new Proxy({},{get(s,l,o){return x(Reflect.get(t.value,l,o))},set(s,l,o){return Ce(t.value[l])&&!Ce(o)?t.value[l].value=o:t.value[l]=o,!0},deleteProperty(s,l){return Reflect.deleteProperty(t.value,l)},has(s,l){return Reflect.has(t.value,l)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Oe(n)}function Fp(t){return typeof t=="function"?C(t):H(t)}var Ky=Object.defineProperty,Yy=Object.defineProperties,Xy=Object.getOwnPropertyDescriptors,ei=Object.getOwnPropertySymbols,Zy=Object.prototype.hasOwnProperty,Jy=Object.prototype.propertyIsEnumerable,ti=(t,n,s)=>n in t?Ky(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Qy=(t,n)=>{for(var s in n||(n={}))Zy.call(n,s)&&ti(t,s,n[s]);if(ei)for(var s of ei(n))Jy.call(n,s)&&ti(t,s,n[s]);return t},em=(t,n)=>Yy(t,Xy(n));function tm(t){if(!Ce(t))return of(t);const n=Array.isArray(t.value)?new Array(t.value.length):{};for(const s in t.value)n[s]=Jc(()=>({get(){return t.value[s]},set(l){if(Array.isArray(t.value)){const o=[...t.value];o[s]=l,t.value=o}else{const o=em(Qy({},t.value),{[s]:l});Object.setPrototypeOf(o,t.value),t.value=o}}}));return n}function Gr(t,n=!0){$n()?is(t):n?t():Qe(t)}function nm(t){$n()&&Xl(t)}function sm(t,n=1e3,s={}){const{immediate:l=!0,immediateCallback:o=!1}=s;let r=null;const a=H(!1);function i(){r&&(clearInterval(r),r=null)}function c(){a.value=!1,i()}function u(){x(n)<=0||(a.value=!0,o&&t(),i(),r=setInterval(t,Ze(n)))}if(l&&jt&&u(),Ce(n)){const d=ye(n,()=>{a.value&&jt&&u()});Vt(d)}return Vt(c),{isActive:a,pause:c,resume:u}}function lm(t,n,s={}){const{immediate:l=!0}=s,o=H(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function i(){o.value=!1,a()}function c(...u){a(),o.value=!0,r=setTimeout(()=>{o.value=!1,r=null,t(...u)},Ze(n))}return l&&(o.value=!0,jt&&c()),Vt(i),{isPending:o,start:c,stop:i}}function jp(t=!1,n={}){const{truthyValue:s=!0,falsyValue:l=!1}=n,o=Ce(t),r=H(t);function a(i){if(arguments.length)return r.value=i,r.value;{const c=Ze(s);return r.value=r.value===c?Ze(l):c,r.value}}return o?a:[r,a]}var ni=Object.getOwnPropertySymbols,om=Object.prototype.hasOwnProperty,rm=Object.prototype.propertyIsEnumerable,am=(t,n)=>{var s={};for(var l in t)om.call(t,l)&&n.indexOf(l)<0&&(s[l]=t[l]);if(t!=null&&ni)for(var l of ni(t))n.indexOf(l)<0&&rm.call(t,l)&&(s[l]=t[l]);return s};function im(t,n,s={}){const l=s,{eventFilter:o=Sp}=l,r=am(l,["eventFilter"]);return ye(t,Vy(o,n),r)}var cm=Object.defineProperty,pm=Object.defineProperties,um=Object.getOwnPropertyDescriptors,Sl=Object.getOwnPropertySymbols,Tp=Object.prototype.hasOwnProperty,$p=Object.prototype.propertyIsEnumerable,si=(t,n,s)=>n in t?cm(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,dm=(t,n)=>{for(var s in n||(n={}))Tp.call(n,s)&&si(t,s,n[s]);if(Sl)for(var s of Sl(n))$p.call(n,s)&&si(t,s,n[s]);return t},fm=(t,n)=>pm(t,um(n)),ym=(t,n)=>{var s={};for(var l in t)Tp.call(t,l)&&n.indexOf(l)<0&&(s[l]=t[l]);if(t!=null&&Sl)for(var l of Sl(t))n.indexOf(l)<0&&$p.call(t,l)&&(s[l]=t[l]);return s};function mm(t,n,s={}){const l=s,{eventFilter:o}=l,r=ym(l,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:u}=Hy(o);return{stop:im(t,n,fm(dm({},r),{eventFilter:a})),pause:i,resume:c,isActive:u}}var Op="usehead",li="head:count",yo="data-head-attrs",zp="data-meta-body",hm=(t,n)=>{const s=l=>{if(l.props.renderPriority)return l.props.renderPriority;switch(l.tag){case"base":return-1;case"meta":return l.props.charset?-2:l.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}};return s(t)-s(n)},gm=t=>{if(!["meta","base","script","link","title"].includes(t.tag))return!1;const{props:n,tag:s}=t;if(s==="base"||s==="title")return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const l=["key","id","name","property","http-equiv"];for(const o of l){let r;if(typeof n.getAttribute=="function"&&n.hasAttribute(o)?r=n.getAttribute(o):r=n[o],r!==void 0)return`${s}-${o}-${r}`}return!1};function Yo(t){const n=Ze(t);return!t||!n?n:Array.isArray(n)?n.map(Yo):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,l])=>s==="titleTemplate"?[s,x(l)]:[s,Yo(l)])):n}function vm(t){return{...t,input:Yo(t.input)}}function oi(t,n){if(t instanceof HTMLElement&&n instanceof HTMLElement){const s=n.getAttribute("nonce");if(s&&!t.getAttribute("nonce")){const l=n.cloneNode(!0);return l.setAttribute("nonce",""),l.nonce=s,s===t.nonce&&t.isEqualNode(l)}}return t.isEqualNode(n)}var ri=(t,n)=>{const s=t.getAttribute(yo);if(s)for(const o of s.split(","))o in n||t.removeAttribute(o);const l=[];for(const o in n){const r=n[o];r!=null&&(r===!1?t.removeAttribute(o):t.setAttribute(o,r),l.push(o))}l.length?t.setAttribute(yo,l.join(",")):t.removeAttribute(yo)},_m=(t,n,s)=>{const l=s.createElement(t);for(const o of Object.keys(n))if(o==="body"&&n.body===!0)l.setAttribute(zp,"true");else{const r=n[o];if(o==="renderPriority"||o==="key"||r===!1)continue;o==="children"||o==="textContent"?l.textContent=r:o==="innerHTML"?l.innerHTML=r:l.setAttribute(o,r)}return l},bm=(t=window.document,n,s)=>{var l,o;const r=t.head,a=t.body;let i=r.querySelector(`meta[name="${li}"]`);const c=a.querySelectorAll(`[${zp}]`),u=i?Number(i.getAttribute("content")):0,d=[],f=[];if(c)for(let h=0;h<c.length;h++)c[h]&&((l=c[h].tagName)==null?void 0:l.toLowerCase())===n&&f.push(c[h]);if(i)for(let h=0,m=i.previousElementSibling;h<u;h++,m=(m==null?void 0:m.previousElementSibling)||null)((o=m==null?void 0:m.tagName)==null?void 0:o.toLowerCase())===n&&d.push(m);else i=t.createElement("meta"),i.setAttribute("name",li),i.setAttribute("content","0"),r.append(i);let y=s.map(h=>{var m;return{element:_m(h.tag,h.props,t),body:(m=h.props.body)!=null?m:!1}});y=y.filter(h=>{for(let m=0;m<d.length;m++){const _=d[m];if(oi(_,h.element))return d.splice(m,1),!1}for(let m=0;m<f.length;m++){const _=f[m];if(oi(_,h.element))return f.splice(m,1),!1}return!0}),f.forEach(h=>{var m;return(m=h.parentNode)==null?void 0:m.removeChild(h)}),d.forEach(h=>{var m;return(m=h.parentNode)==null?void 0:m.removeChild(h)}),y.forEach(h=>{h.body===!0?a.insertAdjacentElement("beforeend",h.element):r.insertBefore(h.element,i)}),i.setAttribute("content",`${u-d.length+y.filter(h=>!h.body).length}`)},km=({domCtx:t,document:n,previousTags:s})=>{n||(n=window.document),t.title!==void 0&&(n.title=t.title),ri(n.documentElement,t.htmlAttrs),ri(n.body,t.bodyAttrs);const l=new Set([...Object.keys(t.actualTags),...s]);for(const o of l)bm(n,o,t.actualTags[o]||[]);s.clear(),Object.keys(t.actualTags).forEach(o=>s.add(o))},wm=()=>{const t=M(Op);if(!t)throw new Error("You may forget to apply app.use(head)");return t},xm=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Am=(t,n)=>t==null?"":typeof t=="function"?t(n):t.replace("%s",n!=null?n:""),Bm=t=>{const n=[],s=Object.keys(t),l=o=>(o.hid&&(o.key=o.hid,delete o.hid),o.vmid&&(o.key=o.vmid,delete o.vmid),o);for(const o of s)if(t[o]!=null)switch(o){case"title":n.push({tag:o,props:{textContent:t[o]}});break;case"titleTemplate":break;case"base":n.push({tag:o,props:{key:"default",...t[o]}});break;default:if(xm.includes(o)){const r=t[o];Array.isArray(r)?r.forEach(a=>{const i=l(a);n.push({tag:o,props:i})}):r&&n.push({tag:o,props:l(r)})}break}return n},Em=t=>{let n=[];const s=new Set;let l=0;const o=[],r=[];t&&n.push({input:t});let a=null,i;const c={install(u){u.config.globalProperties.$head=c,u.provide(Op,c)},hookBeforeDomUpdate:o,hookTagsResolved:r,get headTags(){const u=[],d={},f=n.map(vm),y=f.map(m=>m.input.titleTemplate).reverse().find(m=>m!=null);f.forEach((m,_)=>{Bm(m.input).forEach((w,A)=>{var k;if(w._position=_*1e4+A,w._options&&delete w._options,m.options&&(w._options=m.options),y&&w.tag==="title"&&(w.props.textContent=Am(y,w.props.textContent)),!((k=w._options)!=null&&k.raw)){for(const z in w.props)z.startsWith("on")&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to set event listeners. See https://github.com/vueuse/head/pull/118",w),delete w.props[z]);w.props.innerHTML&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to use `innerHTML`",w),delete w.props.innerHTML)}const D=gm(w);D?d[D]=w:u.push(w)})}),u.push(...Object.values(d));const h=u.sort((m,_)=>m._position-_._position);return c.hookTagsResolved.forEach(m=>m(h)),h},addHeadObjs(u,d){const f={input:u,options:d,id:l++};return n.push(f),()=>{n=n.filter(y=>y.id!==f.id)}},removeHeadObjs(u){n=n.filter(d=>d.input!==u)},updateDOM:(u,d)=>{i={title:void 0,htmlAttrs:{},bodyAttrs:{},actualTags:{}};for(const y of c.headTags.sort(hm)){if(y.tag==="title"){i.title=y.props.textContent;continue}if(y.tag==="htmlAttrs"||y.tag==="bodyAttrs"){Object.assign(i[y.tag],y.props);continue}i.actualTags[y.tag]=i.actualTags[y.tag]||[],i.actualTags[y.tag].push(y)}const f=()=>{a=null;for(const y in c.hookBeforeDomUpdate)if(c.hookBeforeDomUpdate[y](i.actualTags)===!1)return;km({domCtx:i,document:u,previousTags:s})};if(d){f();return}a=a||Qe(()=>f())}};return c},Dm=typeof window<"u",Cm=(t,n={})=>{const s=wm(),l=s.addHeadObjs(t,n);Dm&&(as(()=>{s.updateDOM()}),Yl(()=>{l(),s.updateDOM()}))},Sm=t=>{Cm(t)};const Ds=Symbol("v-click-clicks"),bn=Symbol("v-click-clicks-elements"),Xo=Symbol("v-click-clicks-order-map"),Cs=Symbol("v-click-clicks-disabled"),Pp=Symbol("slidev-slide-scale"),K=Symbol("slidev-slidev-context"),Fm=Symbol("slidev-route"),jm=Symbol("slidev-slide-context"),gn="slidev-vclick-target",mo="slidev-vclick-hidden",Tm="slidev-vclick-fade",ho="slidev-vclick-hidden-explicitly",ys="slidev-vclick-current",ul="slidev-vclick-prior";function Zo(t,n){if(!t)return!1;const s=t.indexOf(n);return s>=0?(t.splice(s,1),!0):!1}function $m(...t){let n,s,l;t.length===1?(n=0,l=1,[s]=t):[n,s,l=1]=t;const o=[];let r=n;for(;r<s;)o.push(r),r+=l||1;return o}function Om(t){return t!=null}function zm(t,n){return Object.fromEntries(Object.entries(t).map(([s,l])=>n(s,l)).filter(Om))}const ws={theme:"default",title:"Tailwind & Grid",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>Tailwind &amp; Grid</h2>
<p>Prezentace k FE mikro\u0161kolen\xED</p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"dark",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",background:"https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",class:"text-center"},we=ws;var Cc;const on=(Cc=we.aspectRatio)!=null?Cc:16/9;var Sc;const rn=(Sc=we.canvasWidth)!=null?Sc:980,Wr=Math.ceil(rn/on),Kr=C(()=>zm(we.themeConfig||{},(t,n)=>[`--slidev-theme-${t}`,n]));function bt(t,n,s){Object.defineProperty(t,n,{value:s,writable:!0,enumerable:!1})}const On=Oe({page:0,clicks:0});let Pm=[],Lm=[];bt(On,"$syncUp",!0);bt(On,"$syncDown",!0);bt(On,"$paused",!1);bt(On,"$onSet",t=>Pm.push(t));bt(On,"$onPatch",t=>Lm.push(t));bt(On,"$patch",async()=>!1);function Lp(t,n,s=!1){const l=[];let o=!1,r=!1,a,i;const c=Oe(n);function u(h){l.push(h)}function d(h,m){clearTimeout(a),o=!0,c[h]=m,a=setTimeout(()=>o=!1,0)}function f(h){o||(clearTimeout(i),r=!0,Object.entries(h).forEach(([m,_])=>{c[m]=_}),i=setTimeout(()=>r=!1,0))}function y(h){let m;s?s&&window.addEventListener("storage",b=>{b&&b.key===h&&b.newValue&&f(JSON.parse(b.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",b=>f(b.data)));function _(){!s&&m&&!r?m.postMessage(xe(c)):s&&!r&&window.localStorage.setItem(h,JSON.stringify(c)),o||l.forEach(b=>b(c))}if(ye(c,_,{deep:!0}),s){const b=window.localStorage.getItem(h);b&&f(JSON.parse(b))}}return{init:y,onPatch:u,patch:d,state:c}}const{init:Mm,onPatch:Nm,patch:ai,state:go}=Lp(On,{page:1,clicks:0}),zn=Oe({});let Im=[],Rm=[];bt(zn,"$syncUp",!0);bt(zn,"$syncDown",!0);bt(zn,"$paused",!1);bt(zn,"$onSet",t=>Im.push(t));bt(zn,"$onPatch",t=>Rm.push(t));bt(zn,"$patch",async()=>!1);const{init:Vm,onPatch:Hm,patch:Mp,state:Fl}=Lp(zn,{},!1),qm="modulepreload",Um=function(t){return"/"+t},ii={},jn=function(n,s,l){if(!s||s.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=Um(r),r in ii)return;ii[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!l)for(let d=o.length-1;d>=0;d--){const f=o[d];if(f.href===r&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":qm,a||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),a)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())};function Et(t){var n;const s=Ze(t);return(n=s==null?void 0:s.$el)!=null?n:s}const tt=jt?window:void 0,Np=jt?window.document:void 0,Gm=jt?window.navigator:void 0;function de(...t){let n,s,l,o;if(Cp(t[0])||Array.isArray(t[0])?([s,l,o]=t,n=tt):[n,s,l,o]=t,!n)return Es;Array.isArray(s)||(s=[s]),Array.isArray(l)||(l=[l]);const r=[],a=()=>{r.forEach(d=>d()),r.length=0},i=(d,f,y)=>(d.addEventListener(f,y,o),()=>d.removeEventListener(f,y,o)),c=ye(()=>Et(n),d=>{a(),d&&r.push(...s.flatMap(f=>l.map(y=>i(d,f,y))))},{immediate:!0,flush:"post"}),u=()=>{c(),a()};return Vt(u),u}function Wm(t,n,s={}){const{window:l=tt,ignore:o,capture:r=!0,detectIframe:a=!1}=s;if(!l)return;let i=!0,c;const u=h=>{l.clearTimeout(c);const m=Et(t);if(!(!m||m===h.target||h.composedPath().includes(m))){if(!i){i=!0;return}n(h)}},d=h=>o&&o.some(m=>{const _=Et(m);return _&&(h.target===_||h.composedPath().includes(_))}),f=[de(l,"click",u,{passive:!0,capture:r}),de(l,"pointerdown",h=>{const m=Et(t);m&&(i=!h.composedPath().includes(m)&&!d(h))},{passive:!0}),de(l,"pointerup",h=>{if(h.button===0){const m=h.composedPath();h.composedPath=()=>m,c=l.setTimeout(()=>u(h),50)}},{passive:!0}),a&&de(l,"blur",h=>{var m;const _=Et(t);((m=l.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(_!=null&&_.contains(l.document.activeElement))&&n(h)})].filter(Boolean);return()=>f.forEach(h=>h())}const Km=t=>typeof t=="function"?t:typeof t=="string"?n=>n.key===t:Array.isArray(t)?n=>t.includes(n.key):()=>!0;function Ym(...t){let n,s,l={};t.length===3?(n=t[0],s=t[1],l=t[2]):t.length===2?typeof t[1]=="object"?(n=!0,s=t[0],l=t[1]):(n=t[0],s=t[1]):(n=!0,s=t[0]);const{target:o=tt,eventName:r="keydown",passive:a=!1}=l,i=Km(n);return de(o,r,u=>{i(u)&&s(u)},a)}function Xm(t={}){const{window:n=tt}=t,s=Gy(()=>null,()=>n==null?void 0:n.document.activeElement);return n&&(de(n,"blur",s.trigger,!0),de(n,"focus",s.trigger,!0)),s}function Js(t,n=!1){const s=H(),l=()=>s.value=Boolean(t());return l(),Gr(l,n),s}function Vn(t,n={}){const{window:s=tt}=n,l=Js(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let o;const r=H(!1),a=()=>{!o||("removeEventListener"in o?o.removeEventListener("change",i):o.removeListener(i))},i=()=>{!l.value||(a(),o=s.matchMedia(Fp(t).value),r.value=o.matches,"addEventListener"in o?o.addEventListener("change",i):o.addListener(i))};return as(i),Vt(()=>a()),r}const Zm={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Jm=Object.defineProperty,ci=Object.getOwnPropertySymbols,Qm=Object.prototype.hasOwnProperty,eh=Object.prototype.propertyIsEnumerable,pi=(t,n,s)=>n in t?Jm(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,th=(t,n)=>{for(var s in n||(n={}))Qm.call(n,s)&&pi(t,s,n[s]);if(ci)for(var s of ci(n))eh.call(n,s)&&pi(t,s,n[s]);return t};function nh(t,n={}){function s(i,c){let u=t[i];return c!=null&&(u=Uy(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:l=tt}=n;function o(i){return l?l.matchMedia(i).matches:!1}const r=i=>Vn(`(min-width: ${s(i)})`,n),a=Object.keys(t).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>r(c),enumerable:!0,configurable:!0}),i),{});return th({greater(i){return Vn(`(min-width: ${s(i,.1)})`,n)},greaterOrEqual:r,smaller(i){return Vn(`(max-width: ${s(i,-.1)})`,n)},smallerOrEqual(i){return Vn(`(max-width: ${s(i)})`,n)},between(i,c){return Vn(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,n)},isGreater(i){return o(`(min-width: ${s(i,.1)})`)},isGreaterOrEqual(i){return o(`(min-width: ${s(i)})`)},isSmaller(i){return o(`(max-width: ${s(i,-.1)})`)},isSmallerOrEqual(i){return o(`(max-width: ${s(i)})`)},isInBetween(i,c){return o(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)}},a)}function sh(t={}){const{navigator:n=Gm,read:s=!1,source:l,copiedDuring:o=1500,legacy:r=!1}=t,a=["copy","cut"],i=Js(()=>n&&"clipboard"in n),c=C(()=>i.value||r),u=H(""),d=H(!1),f=lm(()=>d.value=!1,o);function y(){i.value?n.clipboard.readText().then(b=>{u.value=b}):u.value=_()}if(c.value&&s)for(const b of a)de(b,y);async function h(b=Ze(l)){c.value&&b!=null&&(i.value?await n.clipboard.writeText(b):m(b),u.value=b,d.value=!0,f.start())}function m(b){const w=document.createElement("textarea");w.value=b!=null?b:"",w.style.position="absolute",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),w.remove()}function _(){var b,w,A;return(A=(w=(b=document==null?void 0:document.getSelection)==null?void 0:b.call(document))==null?void 0:w.toString())!=null?A:""}return{isSupported:c,text:u,copied:d,copy:h}}function lh(t){return JSON.parse(JSON.stringify(t))}const Jo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qo="__vueuse_ssr_handlers__";Jo[Qo]=Jo[Qo]||{};const oh=Jo[Qo];function rh(t,n){return oh[t]||n}function ah(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}var ih=Object.defineProperty,ui=Object.getOwnPropertySymbols,ch=Object.prototype.hasOwnProperty,ph=Object.prototype.propertyIsEnumerable,di=(t,n,s)=>n in t?ih(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,fi=(t,n)=>{for(var s in n||(n={}))ch.call(n,s)&&di(t,s,n[s]);if(ui)for(var s of ui(n))ph.call(n,s)&&di(t,s,n[s]);return t};const uh={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function $t(t,n,s,l={}){var o;const{flush:r="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:f=tt,eventFilter:y,onError:h=N=>{console.error(N)}}=l,m=(d?Rt:H)(n);if(!s)try{s=rh("getDefaultStorage",()=>{var N;return(N=tt)==null?void 0:N.localStorage})()}catch(N){h(N)}if(!s)return m;const _=Ze(n),b=ah(_),w=(o=l.serializer)!=null?o:uh[b],{pause:A,resume:k}=mm(m,()=>D(m.value),{flush:r,deep:a,eventFilter:y});return f&&i&&de(f,"storage",P),P(),m;function D(N){try{N==null?s.removeItem(t):s.setItem(t,w.write(N))}catch(Z){h(Z)}}function z(N){A();try{const Z=N?N.newValue:s.getItem(t);if(Z==null)return c&&_!==null&&s.setItem(t,w.write(_)),_;if(!N&&u){const re=w.read(Z);return Cl(u)?u(re,_):b==="object"&&!Array.isArray(re)?fi(fi({},_),re):re}else return typeof Z!="string"?Z:w.read(Z)}catch(Z){h(Z)}finally{k()}}function P(N){if(!(N&&N.storageArea!==s)){if(N&&N.key===null){m.value=_;return}N&&N.key!==t||(m.value=z(N))}}}function dh(t){return Vn("(prefers-color-scheme: dark)",t)}var fh=Object.defineProperty,yh=Object.defineProperties,mh=Object.getOwnPropertyDescriptors,yi=Object.getOwnPropertySymbols,hh=Object.prototype.hasOwnProperty,gh=Object.prototype.propertyIsEnumerable,mi=(t,n,s)=>n in t?fh(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,vh=(t,n)=>{for(var s in n||(n={}))hh.call(n,s)&&mi(t,s,n[s]);if(yi)for(var s of yi(n))gh.call(n,s)&&mi(t,s,n[s]);return t},_h=(t,n)=>yh(t,mh(n));function L9(t,n={}){var s,l,o;const r=(s=n.draggingElement)!=null?s:tt,a=(l=n.handle)!=null?l:t,i=H((o=Ze(n.initialValue))!=null?o:{x:0,y:0}),c=H(),u=m=>n.pointerTypes?n.pointerTypes.includes(m.pointerType):!0,d=m=>{Ze(n.preventDefault)&&m.preventDefault(),Ze(n.stopPropagation)&&m.stopPropagation()},f=m=>{var _;if(!u(m)||Ze(n.exact)&&m.target!==Ze(t))return;const b=Ze(t).getBoundingClientRect(),w={x:m.pageX-b.left,y:m.pageY-b.top};((_=n.onStart)==null?void 0:_.call(n,w,m))!==!1&&(c.value=w,d(m))},y=m=>{var _;!u(m)||!c.value||(i.value={x:m.pageX-c.value.x,y:m.pageY-c.value.y},(_=n.onMove)==null||_.call(n,i.value,m),d(m))},h=m=>{var _;!u(m)||!c.value||(c.value=void 0,(_=n.onEnd)==null||_.call(n,i.value,m),d(m))};return jt&&(de(a,"pointerdown",f,!0),de(r,"pointermove",y,!0),de(r,"pointerup",h,!0)),_h(vh({},tm(i)),{position:i,isDragging:C(()=>!!c.value),style:C(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var hi=Object.getOwnPropertySymbols,bh=Object.prototype.hasOwnProperty,kh=Object.prototype.propertyIsEnumerable,wh=(t,n)=>{var s={};for(var l in t)bh.call(t,l)&&n.indexOf(l)<0&&(s[l]=t[l]);if(t!=null&&hi)for(var l of hi(t))n.indexOf(l)<0&&kh.call(t,l)&&(s[l]=t[l]);return s};function xh(t,n,s={}){const l=s,{window:o=tt}=l,r=wh(l,["window"]);let a;const i=Js(()=>o&&"ResizeObserver"in o),c=()=>{a&&(a.disconnect(),a=void 0)},u=ye(()=>Et(t),f=>{c(),i.value&&o&&f&&(a=new ResizeObserver(n),a.observe(f,r))},{immediate:!0,flush:"post"}),d=()=>{c(),u()};return Vt(d),{isSupported:i,stop:d}}function Ah(t,n={}){const{immediate:s=!0,window:l=tt}=n,o=H(!1);let r=null;function a(){!o.value||!l||(t(),r=l.requestAnimationFrame(a))}function i(){!o.value&&l&&(o.value=!0,a())}function c(){o.value=!1,r!=null&&l&&(l.cancelAnimationFrame(r),r=null)}return s&&i(),Vt(c),{isActive:o,pause:c,resume:i}}function Bh(t,n={width:0,height:0},s={}){const{box:l="content-box"}=s,o=H(n.width),r=H(n.height);return xh(t,([a])=>{const i=l==="border-box"?a.borderBoxSize:l==="content-box"?a.contentBoxSize:a.devicePixelContentBoxSize;i?(o.value=i.reduce((c,{inlineSize:u})=>c+u,0),r.value=i.reduce((c,{blockSize:u})=>c+u,0)):(o.value=a.contentRect.width,r.value=a.contentRect.height)},s),ye(()=>Et(t),a=>{o.value=a?n.width:0,r.value=a?n.height:0}),{width:o,height:r}}const gi=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Eh(t,n={}){const{document:s=Np,autoExit:l=!1}=n,o=t||(s==null?void 0:s.querySelector("html")),r=H(!1);let a=gi[0];const i=Js(()=>{if(s){for(const _ of gi)if(_[1]in s)return a=_,!0}else return!1;return!1}),[c,u,d,,f]=a;async function y(){!i.value||(s!=null&&s[d]&&await s[u](),r.value=!1)}async function h(){if(!i.value)return;await y();const _=Et(o);_&&(await _[c](),r.value=!0)}async function m(){r.value?await y():await h()}return s&&de(s,f,()=>{r.value=!!(s!=null&&s[d])},!1),l&&Vt(y),{isSupported:i,isFullscreen:r,enter:h,exit:y,toggle:m}}function Dh(t,n,s={}){const{root:l,rootMargin:o="0px",threshold:r=.1,window:a=tt}=s,i=Js(()=>a&&"IntersectionObserver"in a);let c=Es;const u=i.value?ye(()=>({el:Et(t),root:Et(l)}),({el:f,root:y})=>{if(c(),!f)return;const h=new IntersectionObserver(n,{root:y,rootMargin:o,threshold:r});h.observe(f),c=()=>{h.disconnect(),c=Es}},{immediate:!0,flush:"post"}):Es,d=()=>{c(),u()};return Vt(d),{isSupported:i,stop:d}}const Ch={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Sh(t={}){const{reactive:n=!1,target:s=tt,aliasMap:l=Ch,passive:o=!0,onEventFired:r=Es}=t,a=Oe(new Set),i={toJSON(){return{}},current:a},c=n?Oe(i):i,u=new Set,d=new Set;function f(_,b){_ in c&&(n?c[_]=b:c[_].value=b)}function y(){for(const _ of d)f(_,!1)}function h(_,b){var w,A;const k=(w=_.key)==null?void 0:w.toLowerCase(),z=[(A=_.code)==null?void 0:A.toLowerCase(),k].filter(Boolean);k&&(b?a.add(k):a.delete(k));for(const P of z)d.add(P),f(P,b);k==="meta"&&!b?(u.forEach(P=>{a.delete(P),f(P,!1)}),u.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&b&&[...a,...z].forEach(P=>u.add(P))}de(s,"keydown",_=>(h(_,!0),r(_)),{passive:o}),de(s,"keyup",_=>(h(_,!1),r(_)),{passive:o}),de("blur",y,{passive:!0}),de("focus",y,{passive:!0});const m=new Proxy(c,{get(_,b,w){if(typeof b!="string")return Reflect.get(_,b,w);if(b=b.toLowerCase(),b in l&&(b=l[b]),!(b in c))if(/[+_-]/.test(b)){const k=b.split(/[+_-]/g).map(D=>D.trim());c[b]=C(()=>k.every(D=>x(m[D])))}else c[b]=H(!1);const A=Reflect.get(_,b,w);return n?x(A):A}});return m}function M9(t={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:l=!1,initialValue:o={x:0,y:0},window:r=tt,eventFilter:a}=t,i=H(o.x),c=H(o.y),u=H(null),d=_=>{n==="page"?(i.value=_.pageX,c.value=_.pageY):n==="client"&&(i.value=_.clientX,c.value=_.clientY),u.value="mouse"},f=()=>{i.value=o.x,c.value=o.y},y=_=>{if(_.touches.length>0){const b=_.touches[0];n==="page"?(i.value=b.pageX,c.value=b.pageY):n==="client"&&(i.value=b.clientX,c.value=b.clientY),u.value="touch"}},h=_=>a===void 0?d(_):a(()=>d(_),{}),m=_=>a===void 0?y(_):a(()=>y(_),{});return r&&(de(r,"mousemove",h,{passive:!0}),de(r,"dragover",h,{passive:!0}),s&&(de(r,"touchstart",m,{passive:!0}),de(r,"touchmove",m,{passive:!0}),l&&de(r,"touchend",f,{passive:!0}))),{x:i,y:c,sourceType:u}}var Wt;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Wt||(Wt={}));function Fh(t,n={}){const s=Fp(t),{threshold:l=50,onSwipe:o,onSwipeEnd:r,onSwipeStart:a}=n,i=Oe({x:0,y:0}),c=(P,N)=>{i.x=P,i.y=N},u=Oe({x:0,y:0}),d=(P,N)=>{u.x=P,u.y=N},f=C(()=>i.x-u.x),y=C(()=>i.y-u.y),{max:h,abs:m}=Math,_=C(()=>h(m(f.value),m(y.value))>=l),b=H(!1),w=H(!1),A=C(()=>_.value?m(f.value)>m(y.value)?f.value>0?Wt.LEFT:Wt.RIGHT:y.value>0?Wt.UP:Wt.DOWN:Wt.NONE),k=P=>{var N,Z,re;const fe=P.buttons===0,_e=P.buttons===1;return(re=(Z=(N=n.pointerTypes)==null?void 0:N.includes(P.pointerType))!=null?Z:fe||_e)!=null?re:!0},D=[de(t,"pointerdown",P=>{var N,Z;if(!k(P))return;w.value=!0,(Z=(N=s.value)==null?void 0:N.style)==null||Z.setProperty("touch-action","none");const re=P.target;re==null||re.setPointerCapture(P.pointerId);const{clientX:fe,clientY:_e}=P;c(fe,_e),d(fe,_e),a==null||a(P)}),de(t,"pointermove",P=>{if(!k(P)||!w.value)return;const{clientX:N,clientY:Z}=P;d(N,Z),!b.value&&_.value&&(b.value=!0),b.value&&(o==null||o(P))}),de(t,"pointerup",P=>{var N,Z;!k(P)||(b.value&&(r==null||r(P,A.value)),w.value=!1,b.value=!1,(Z=(N=s.value)==null?void 0:N.style)==null||Z.setProperty("touch-action","initial"))})],z=()=>D.forEach(P=>P());return{isSwiping:wn(b),direction:wn(A),posStart:wn(i),posEnd:wn(u),distanceX:f,distanceY:y,stop:z}}let jh=0;function N9(t,n={}){const s=H(!1),{document:l=Np,immediate:o=!0,manual:r=!1,id:a=`vueuse_styletag_${++jh}`}=n,i=H(t);let c=()=>{};const u=()=>{if(!l)return;const f=l.getElementById(a)||l.createElement("style");f.isConnected||(f.type="text/css",f.id=a,n.media&&(f.media=n.media),l.head.appendChild(f)),!s.value&&(c=ye(i,y=>{f.innerText=y},{immediate:!0}),s.value=!0)},d=()=>{!l||!s.value||(c(),l.head.removeChild(l.getElementById(a)),s.value=!1)};return o&&!r&&Gr(u),r||Vt(d),{id:a,css:i,unload:d,load:u,isLoaded:wn(s)}}var Th=Object.defineProperty,vi=Object.getOwnPropertySymbols,$h=Object.prototype.hasOwnProperty,Oh=Object.prototype.propertyIsEnumerable,_i=(t,n,s)=>n in t?Th(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,zh=(t,n)=>{for(var s in n||(n={}))$h.call(n,s)&&_i(t,s,n[s]);if(vi)for(var s of vi(n))Oh.call(n,s)&&_i(t,s,n[s]);return t};function I9(t={}){const{controls:n=!1,offset:s=0,immediate:l=!0,interval:o="requestAnimationFrame",callback:r}=t,a=H(Ko()+s),i=()=>a.value=Ko()+s,c=r?()=>{i(),r(a.value)}:i,u=o==="requestAnimationFrame"?Ah(c,{immediate:l}):sm(c,o,{immediate:l});return n?zh({timestamp:a},u):a}var Ph=Object.defineProperty,bi=Object.getOwnPropertySymbols,Lh=Object.prototype.hasOwnProperty,Mh=Object.prototype.propertyIsEnumerable,ki=(t,n,s)=>n in t?Ph(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Nh=(t,n)=>{for(var s in n||(n={}))Lh.call(n,s)&&ki(t,s,n[s]);if(bi)for(var s of bi(n))Mh.call(n,s)&&ki(t,s,n[s]);return t};const Ih={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Nh({linear:qy},Ih);function Mt(t,n,s,l={}){var o,r,a;const{clone:i=!1,passive:c=!1,eventName:u,deep:d=!1,defaultValue:f}=l,y=$n(),h=s||(y==null?void 0:y.emit)||((o=y==null?void 0:y.$emit)==null?void 0:o.bind(y))||((a=(r=y==null?void 0:y.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(y==null?void 0:y.proxy));let m=u;n||(n="modelValue"),m=u||m||`update:${n.toString()}`;const _=w=>i?Cl(i)?i(w):lh(w):w,b=()=>Ny(t[n])?_(t[n]):f;if(c){const w=b(),A=H(w);return ye(()=>t[n],k=>A.value=_(k)),ye(A,k=>{(k!==t[n]||d)&&h(m,k)},{deep:d}),A}else return C({get(){return b()},set(w){h(m,w)}})}function R9({window:t=tt}={}){if(!t)return H(!1);const n=H(t.document.hasFocus());return de(t,"blur",()=>{n.value=!1}),de(t,"focus",()=>{n.value=!0}),n}function Rh(t={}){const{window:n=tt,initialWidth:s=1/0,initialHeight:l=1/0,listenOrientation:o=!0,includeScrollbar:r=!0}=t,a=H(s),i=H(l),c=()=>{n&&(r?(a.value=n.innerWidth,i.value=n.innerHeight):(a.value=n.document.documentElement.clientWidth,i.value=n.document.documentElement.clientHeight))};return c(),Gr(c),de("resize",c,{passive:!0}),o&&de("orientationchange",c,{passive:!0}),{width:a,height:i}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Hn=typeof window<"u";function Vh(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function vo(t,n){const s={};for(const l in n){const o=n[l];s[l]=Tt(o)?o.map(t):t(o)}return s}const Ss=()=>{},Tt=Array.isArray,Hh=/\/$/,qh=t=>t.replace(Hh,"");function _o(t,n,s="/"){let l,o={},r="",a="";const i=n.indexOf("#");let c=n.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(l=n.slice(0,c),r=n.slice(c+1,i>-1?i:n.length),o=t(r)),i>-1&&(l=l||n.slice(0,i),a=n.slice(i,n.length)),l=Kh(l!=null?l:n,s),{fullPath:l+(r&&"?")+r+a,path:l,query:o,hash:a}}function Uh(t,n){const s=n.query?t(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function wi(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function Gh(t,n,s){const l=n.matched.length-1,o=s.matched.length-1;return l>-1&&l===o&&ns(n.matched[l],s.matched[o])&&Ip(n.params,s.params)&&t(n.query)===t(s.query)&&n.hash===s.hash}function ns(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function Ip(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const s in t)if(!Wh(t[s],n[s]))return!1;return!0}function Wh(t,n){return Tt(t)?xi(t,n):Tt(n)?xi(n,t):t===n}function xi(t,n){return Tt(n)?t.length===n.length&&t.every((s,l)=>s===n[l]):t.length===1&&t[0]===n}function Kh(t,n){if(t.startsWith("/"))return t;if(!t)return n;const s=n.split("/"),l=t.split("/");let o=s.length-1,r,a;for(r=0;r<l.length;r++)if(a=l[r],a!==".")if(a==="..")o>1&&o--;else break;return s.slice(0,o).join("/")+"/"+l.slice(r-(r===l.length?1:0)).join("/")}var Hs;(function(t){t.pop="pop",t.push="push"})(Hs||(Hs={}));var Fs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Fs||(Fs={}));function Yh(t){if(!t)if(Hn){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qh(t)}const Xh=/^[^#]+#/;function Zh(t,n){return t.replace(Xh,"#")+n}function Jh(t,n){const s=document.documentElement.getBoundingClientRect(),l=t.getBoundingClientRect();return{behavior:n.behavior,left:l.left-s.left-(n.left||0),top:l.top-s.top-(n.top||0)}}const to=()=>({left:window.pageXOffset,top:window.pageYOffset});function Qh(t){let n;if("el"in t){const s=t.el,l=typeof s=="string"&&s.startsWith("#"),o=typeof s=="string"?l?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!o)return;n=Jh(o,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Ai(t,n){return(history.state?history.state.position-n:-1)+t}const er=new Map;function e8(t,n){er.set(t,n)}function t8(t){const n=er.get(t);return er.delete(t),n}let n8=()=>location.protocol+"//"+location.host;function Rp(t,n){const{pathname:s,search:l,hash:o}=n,r=t.indexOf("#");if(r>-1){let i=o.includes(t.slice(r))?t.slice(r).length:1,c=o.slice(i);return c[0]!=="/"&&(c="/"+c),wi(c,"")}return wi(s,t)+l+o}function s8(t,n,s,l){let o=[],r=[],a=null;const i=({state:y})=>{const h=Rp(t,location),m=s.value,_=n.value;let b=0;if(y){if(s.value=h,n.value=y,a&&a===m){a=null;return}b=_?y.position-_.position:0}else l(h);o.forEach(w=>{w(s.value,m,{delta:b,type:Hs.pop,direction:b?b>0?Fs.forward:Fs.back:Fs.unknown})})};function c(){a=s.value}function u(y){o.push(y);const h=()=>{const m=o.indexOf(y);m>-1&&o.splice(m,1)};return r.push(h),h}function d(){const{history:y}=window;!y.state||y.replaceState(Ee({},y.state,{scroll:to()}),"")}function f(){for(const y of r)y();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:u,destroy:f}}function Bi(t,n,s,l=!1,o=!1){return{back:t,current:n,forward:s,replaced:l,position:window.history.length,scroll:o?to():null}}function l8(t){const{history:n,location:s}=window,l={value:Rp(t,s)},o={value:n.state};o.value||r(l.value,{back:null,current:l.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(c,u,d){const f=t.indexOf("#"),y=f>-1?(s.host&&document.querySelector("base")?t:t.slice(f))+c:n8()+t+c;try{n[d?"replaceState":"pushState"](u,"",y),o.value=u}catch(h){console.error(h),s[d?"replace":"assign"](y)}}function a(c,u){const d=Ee({},n.state,Bi(o.value.back,c,o.value.forward,!0),u,{position:o.value.position});r(c,d,!0),l.value=c}function i(c,u){const d=Ee({},o.value,n.state,{forward:c,scroll:to()});r(d.current,d,!0);const f=Ee({},Bi(l.value,c,null),{position:d.position+1},u);r(c,f,!1),l.value=c}return{location:l,state:o,push:i,replace:a}}function o8(t){t=Yh(t);const n=l8(t),s=s8(t,n.state,n.location,n.replace);function l(r,a=!0){a||s.pauseListeners(),history.go(r)}const o=Ee({location:"",base:t,go:l,createHref:Zh.bind(null,t)},n,s);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function r8(t){return typeof t=="string"||t&&typeof t=="object"}function Vp(t){return typeof t=="string"||typeof t=="symbol"}const Qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Hp=Symbol("");var Ei;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ei||(Ei={}));function ss(t,n){return Ee(new Error,{type:t,[Hp]:!0},n)}function Ht(t,n){return t instanceof Error&&Hp in t&&(n==null||!!(t.type&n))}const Di="[^/]+?",a8={sensitive:!1,strict:!1,start:!0,end:!0},i8=/[.+*?^${}()[\]/\\]/g;function c8(t,n){const s=Ee({},a8,n),l=[];let o=s.start?"^":"";const r=[];for(const u of t){const d=u.length?[]:[90];s.strict&&!u.length&&(o+="/");for(let f=0;f<u.length;f++){const y=u[f];let h=40+(s.sensitive?.25:0);if(y.type===0)f||(o+="/"),o+=y.value.replace(i8,"\\$&"),h+=40;else if(y.type===1){const{value:m,repeatable:_,optional:b,regexp:w}=y;r.push({name:m,repeatable:_,optional:b});const A=w||Di;if(A!==Di){h+=10;try{new RegExp(`(${A})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${m}" (${A}): `+D.message)}}let k=_?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(k=b&&u.length<2?`(?:/${k})`:"/"+k),b&&(k+="?"),o+=k,h+=20,b&&(h+=-8),_&&(h+=-20),A===".*"&&(h+=-50)}d.push(h)}l.push(d)}if(s.strict&&s.end){const u=l.length-1;l[u][l[u].length-1]+=.7000000000000001}s.strict||(o+="/?"),s.end?o+="$":s.strict&&(o+="(?:/|$)");const a=new RegExp(o,s.sensitive?"":"i");function i(u){const d=u.match(a),f={};if(!d)return null;for(let y=1;y<d.length;y++){const h=d[y]||"",m=r[y-1];f[m.name]=h&&m.repeatable?h.split("/"):h}return f}function c(u){let d="",f=!1;for(const y of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const h of y)if(h.type===0)d+=h.value;else if(h.type===1){const{value:m,repeatable:_,optional:b}=h,w=m in u?u[m]:"";if(Tt(w)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const A=Tt(w)?w.join("/"):w;if(!A)if(b)y.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);d+=A}}return d||"/"}return{re:a,score:l,keys:r,parse:i,stringify:c}}function p8(t,n){let s=0;for(;s<t.length&&s<n.length;){const l=n[s]-t[s];if(l)return l;s++}return t.length<n.length?t.length===1&&t[0]===40+40?-1:1:t.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function u8(t,n){let s=0;const l=t.score,o=n.score;for(;s<l.length&&s<o.length;){const r=p8(l[s],o[s]);if(r)return r;s++}if(Math.abs(o.length-l.length)===1){if(Ci(l))return 1;if(Ci(o))return-1}return o.length-l.length}function Ci(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const d8={type:0,value:""},f8=/[a-zA-Z0-9_]/;function y8(t){if(!t)return[[]];if(t==="/")return[[d8]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(h){throw new Error(`ERR (${s})/"${u}": ${h}`)}let s=0,l=s;const o=[];let r;function a(){r&&o.push(r),r=[]}let i=0,c,u="",d="";function f(){!u||(s===0?r.push({type:0,value:u}):s===1||s===2||s===3?(r.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),u="")}function y(){u+=c}for(;i<t.length;){if(c=t[i++],c==="\\"&&s!==2){l=s,s=4;continue}switch(s){case 0:c==="/"?(u&&f(),a()):c===":"?(f(),s=1):y();break;case 4:y(),s=l;break;case 1:c==="("?s=2:f8.test(c)?y():(f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:s=3:d+=c;break;case 3:f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,d="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${u}"`),f(),a(),o}function m8(t,n,s){const l=c8(y8(t.path),s),o=Ee(l,{record:t,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function h8(t,n){const s=[],l=new Map;n=ji({strict:!1,end:!0,sensitive:!1},n);function o(d){return l.get(d)}function r(d,f,y){const h=!y,m=g8(d);m.aliasOf=y&&y.record;const _=ji(n,d),b=[m];if("alias"in d){const k=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of k)b.push(Ee({},m,{components:y?y.record.components:m.components,path:D,aliasOf:y?y.record:m}))}let w,A;for(const k of b){const{path:D}=k;if(f&&D[0]!=="/"){const z=f.record.path,P=z[z.length-1]==="/"?"":"/";k.path=f.record.path+(D&&P+D)}if(w=m8(k,f,_),y?y.alias.push(w):(A=A||w,A!==w&&A.alias.push(w),h&&d.name&&!Fi(w)&&a(d.name)),m.children){const z=m.children;for(let P=0;P<z.length;P++)r(z[P],w,y&&y.children[P])}y=y||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&c(w)}return A?()=>{a(A)}:Ss}function a(d){if(Vp(d)){const f=l.get(d);f&&(l.delete(d),s.splice(s.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=s.indexOf(d);f>-1&&(s.splice(f,1),d.record.name&&l.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function i(){return s}function c(d){let f=0;for(;f<s.length&&u8(d,s[f])>=0&&(d.record.path!==s[f].record.path||!qp(d,s[f]));)f++;s.splice(f,0,d),d.record.name&&!Fi(d)&&l.set(d.record.name,d)}function u(d,f){let y,h={},m,_;if("name"in d&&d.name){if(y=l.get(d.name),!y)throw ss(1,{location:d});_=y.record.name,h=Ee(Si(f.params,y.keys.filter(A=>!A.optional).map(A=>A.name)),d.params&&Si(d.params,y.keys.map(A=>A.name))),m=y.stringify(h)}else if("path"in d)m=d.path,y=s.find(A=>A.re.test(m)),y&&(h=y.parse(m),_=y.record.name);else{if(y=f.name?l.get(f.name):s.find(A=>A.re.test(f.path)),!y)throw ss(1,{location:d,currentLocation:f});_=y.record.name,h=Ee({},f.params,d.params),m=y.stringify(h)}const b=[];let w=y;for(;w;)b.unshift(w.record),w=w.parent;return{name:_,path:m,params:h,matched:b,meta:_8(b)}}return t.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:a,getRoutes:i,getRecordMatcher:o}}function Si(t,n){const s={};for(const l of n)l in t&&(s[l]=t[l]);return s}function g8(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:v8(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function v8(t){const n={},s=t.props||!1;if("component"in t)n.default=s;else for(const l in t.components)n[l]=typeof s=="boolean"?s:s[l];return n}function Fi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function _8(t){return t.reduce((n,s)=>Ee(n,s.meta),{})}function ji(t,n){const s={};for(const l in t)s[l]=l in n?n[l]:t[l];return s}function qp(t,n){return n.children.some(s=>s===t||qp(t,s))}const Up=/#/g,b8=/&/g,k8=/\//g,w8=/=/g,x8=/\?/g,Gp=/\+/g,A8=/%5B/g,B8=/%5D/g,Wp=/%5E/g,E8=/%60/g,Kp=/%7B/g,D8=/%7C/g,Yp=/%7D/g,C8=/%20/g;function Yr(t){return encodeURI(""+t).replace(D8,"|").replace(A8,"[").replace(B8,"]")}function S8(t){return Yr(t).replace(Kp,"{").replace(Yp,"}").replace(Wp,"^")}function tr(t){return Yr(t).replace(Gp,"%2B").replace(C8,"+").replace(Up,"%23").replace(b8,"%26").replace(E8,"`").replace(Kp,"{").replace(Yp,"}").replace(Wp,"^")}function F8(t){return tr(t).replace(w8,"%3D")}function j8(t){return Yr(t).replace(Up,"%23").replace(x8,"%3F")}function T8(t){return t==null?"":j8(t).replace(k8,"%2F")}function jl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function $8(t){const n={};if(t===""||t==="?")return n;const l=(t[0]==="?"?t.slice(1):t).split("&");for(let o=0;o<l.length;++o){const r=l[o].replace(Gp," "),a=r.indexOf("="),i=jl(a<0?r:r.slice(0,a)),c=a<0?null:jl(r.slice(a+1));if(i in n){let u=n[i];Tt(u)||(u=n[i]=[u]),u.push(c)}else n[i]=c}return n}function Ti(t){let n="";for(let s in t){const l=t[s];if(s=F8(s),l==null){l!==void 0&&(n+=(n.length?"&":"")+s);continue}(Tt(l)?l.map(r=>r&&tr(r)):[l&&tr(l)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+s,r!=null&&(n+="="+r))})}return n}function O8(t){const n={};for(const s in t){const l=t[s];l!==void 0&&(n[s]=Tt(l)?l.map(o=>o==null?null:""+o):l==null?l:""+l)}return n}const z8=Symbol(""),$i=Symbol(""),Xr=Symbol(""),Xp=Symbol(""),nr=Symbol("");function ms(){let t=[];function n(l){return t.push(l),()=>{const o=t.indexOf(l);o>-1&&t.splice(o,1)}}function s(){t=[]}return{add:n,list:()=>t,reset:s}}function tn(t,n,s,l,o){const r=l&&(l.enterCallbacks[o]=l.enterCallbacks[o]||[]);return()=>new Promise((a,i)=>{const c=f=>{f===!1?i(ss(4,{from:s,to:n})):f instanceof Error?i(f):r8(f)?i(ss(2,{from:n,to:f})):(r&&l.enterCallbacks[o]===r&&typeof f=="function"&&r.push(f),a())},u=t.call(l&&l.instances[o],n,s,c);let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>i(f))})}function bo(t,n,s,l){const o=[];for(const r of t)for(const a in r.components){let i=r.components[a];if(!(n!=="beforeRouteEnter"&&!r.instances[a]))if(P8(i)){const u=(i.__vccOpts||i)[n];u&&o.push(tn(u,s,l,r,a))}else{let c=i();o.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const d=Vh(u)?u.default:u;r.components[a]=d;const y=(d.__vccOpts||d)[n];return y&&tn(y,s,l,r,a)()}))}}return o}function P8(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Oi(t){const n=M(Xr),s=M(Xp),l=C(()=>n.resolve(x(t.to))),o=C(()=>{const{matched:c}=l.value,{length:u}=c,d=c[u-1],f=s.matched;if(!d||!f.length)return-1;const y=f.findIndex(ns.bind(null,d));if(y>-1)return y;const h=zi(c[u-2]);return u>1&&zi(d)===h&&f[f.length-1].path!==h?f.findIndex(ns.bind(null,c[u-2])):y}),r=C(()=>o.value>-1&&I8(s.params,l.value.params)),a=C(()=>o.value>-1&&o.value===s.matched.length-1&&Ip(s.params,l.value.params));function i(c={}){return N8(c)?n[x(t.replace)?"replace":"push"](x(t.to)).catch(Ss):Promise.resolve()}return{route:l,href:C(()=>l.value.href),isActive:r,isExactActive:a,navigate:i}}const L8=Ae({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Oi,setup(t,{slots:n}){const s=Oe(Oi(t)),{options:l}=M(Xr),o=C(()=>({[Pi(t.activeClass,l.linkActiveClass,"router-link-active")]:s.isActive,[Pi(t.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=n.default&&n.default(s);return t.custom?r:yt("a",{"aria-current":s.isExactActive?t.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:o.value},r)}}}),M8=L8;function N8(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function I8(t,n){for(const s in n){const l=n[s],o=t[s];if(typeof l=="string"){if(l!==o)return!1}else if(!Tt(o)||o.length!==l.length||l.some((r,a)=>r!==o[a]))return!1}return!0}function zi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Pi=(t,n,s)=>t!=null?t:n!=null?n:s,R8=Ae({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:s}){const l=M(nr),o=C(()=>t.route||l.value),r=M($i,0),a=C(()=>{let u=x(r);const{matched:d}=o.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),i=C(()=>o.value.matched[a.value]);ft($i,C(()=>a.value+1)),ft(z8,i),ft(nr,o);const c=H();return ye(()=>[c.value,i.value,t.name],([u,d,f],[y,h,m])=>{d&&(d.instances[f]=u,h&&h!==d&&u&&u===y&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),u&&d&&(!h||!ns(d,h)||!y)&&(d.enterCallbacks[f]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=o.value,d=t.name,f=i.value,y=f&&f.components[d];if(!y)return Li(s.default,{Component:y,route:u});const h=f.props[d],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,b=yt(y,Ee({},m,n,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(f.instances[d]=null)},ref:c}));return Li(s.default,{Component:b,route:u})||b}}});function Li(t,n){if(!t)return null;const s=t(n);return s.length===1?s[0]:s}const V8=R8;function H8(t){const n=h8(t.routes,t),s=t.parseQuery||$8,l=t.stringifyQuery||Ti,o=t.history,r=ms(),a=ms(),i=ms(),c=Rt(Qt);let u=Qt;Hn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=vo.bind(null,F=>""+F),f=vo.bind(null,T8),y=vo.bind(null,jl);function h(F,q){let V,J;return Vp(F)?(V=n.getRecordMatcher(F),J=q):J=F,n.addRoute(J,V)}function m(F){const q=n.getRecordMatcher(F);q&&n.removeRoute(q)}function _(){return n.getRoutes().map(F=>F.record)}function b(F){return!!n.getRecordMatcher(F)}function w(F,q){if(q=Ee({},q||c.value),typeof F=="string"){const g=_o(s,F,q.path),v=n.resolve({path:g.path},q),E=o.createHref(g.fullPath);return Ee(g,v,{params:y(v.params),hash:jl(g.hash),redirectedFrom:void 0,href:E})}let V;if("path"in F)V=Ee({},F,{path:_o(s,F.path,q.path).path});else{const g=Ee({},F.params);for(const v in g)g[v]==null&&delete g[v];V=Ee({},F,{params:f(F.params)}),q.params=f(q.params)}const J=n.resolve(V,q),ge=F.hash||"";J.params=d(y(J.params));const ke=Uh(l,Ee({},F,{hash:S8(ge),path:J.path})),ae=o.createHref(ke);return Ee({fullPath:ke,hash:ge,query:l===Ti?O8(F.query):F.query||{}},J,{redirectedFrom:void 0,href:ae})}function A(F){return typeof F=="string"?_o(s,F,c.value.path):Ee({},F)}function k(F,q){if(u!==F)return ss(8,{from:q,to:F})}function D(F){return N(F)}function z(F){return D(Ee(A(F),{replace:!0}))}function P(F){const q=F.matched[F.matched.length-1];if(q&&q.redirect){const{redirect:V}=q;let J=typeof V=="function"?V(F):V;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=A(J):{path:J},J.params={}),Ee({query:F.query,hash:F.hash,params:"path"in J?{}:F.params},J)}}function N(F,q){const V=u=w(F),J=c.value,ge=F.state,ke=F.force,ae=F.replace===!0,g=P(V);if(g)return N(Ee(A(g),{state:typeof g=="object"?Ee({},ge,g.state):ge,force:ke,replace:ae}),q||V);const v=V;v.redirectedFrom=q;let E;return!ke&&Gh(l,J,V)&&(E=ss(16,{to:v,from:J}),Be(J,J,!0,!1)),(E?Promise.resolve(E):re(v,J)).catch(S=>Ht(S)?Ht(S,2)?S:he(S):Y(S,v,J)).then(S=>{if(S){if(Ht(S,2))return N(Ee({replace:ae},A(S.to),{state:typeof S.to=="object"?Ee({},ge,S.to.state):ge,force:ke}),q||v)}else S=_e(v,J,!0,ae,ge);return fe(v,J,S),S})}function Z(F,q){const V=k(F,q);return V?Promise.reject(V):Promise.resolve()}function re(F,q){let V;const[J,ge,ke]=q8(F,q);V=bo(J.reverse(),"beforeRouteLeave",F,q);for(const g of J)g.leaveGuards.forEach(v=>{V.push(tn(v,F,q))});const ae=Z.bind(null,F,q);return V.push(ae),Mn(V).then(()=>{V=[];for(const g of r.list())V.push(tn(g,F,q));return V.push(ae),Mn(V)}).then(()=>{V=bo(ge,"beforeRouteUpdate",F,q);for(const g of ge)g.updateGuards.forEach(v=>{V.push(tn(v,F,q))});return V.push(ae),Mn(V)}).then(()=>{V=[];for(const g of F.matched)if(g.beforeEnter&&!q.matched.includes(g))if(Tt(g.beforeEnter))for(const v of g.beforeEnter)V.push(tn(v,F,q));else V.push(tn(g.beforeEnter,F,q));return V.push(ae),Mn(V)}).then(()=>(F.matched.forEach(g=>g.enterCallbacks={}),V=bo(ke,"beforeRouteEnter",F,q),V.push(ae),Mn(V))).then(()=>{V=[];for(const g of a.list())V.push(tn(g,F,q));return V.push(ae),Mn(V)}).catch(g=>Ht(g,8)?g:Promise.reject(g))}function fe(F,q,V){for(const J of i.list())J(F,q,V)}function _e(F,q,V,J,ge){const ke=k(F,q);if(ke)return ke;const ae=q===Qt,g=Hn?history.state:{};V&&(J||ae?o.replace(F.fullPath,Ee({scroll:ae&&g&&g.scroll},ge)):o.push(F.fullPath,ge)),c.value=F,Be(F,q,V,ae),he()}let Ge;function He(){Ge||(Ge=o.listen((F,q,V)=>{if(!Pn.listening)return;const J=w(F),ge=P(J);if(ge){N(Ee(ge,{replace:!0}),J).catch(Ss);return}u=J;const ke=c.value;Hn&&e8(Ai(ke.fullPath,V.delta),to()),re(J,ke).catch(ae=>Ht(ae,12)?ae:Ht(ae,2)?(N(ae.to,J).then(g=>{Ht(g,20)&&!V.delta&&V.type===Hs.pop&&o.go(-1,!1)}).catch(Ss),Promise.reject()):(V.delta&&o.go(-V.delta,!1),Y(ae,J,ke))).then(ae=>{ae=ae||_e(J,ke,!1),ae&&(V.delta&&!Ht(ae,8)?o.go(-V.delta,!1):V.type===Hs.pop&&Ht(ae,20)&&o.go(-1,!1)),fe(J,ke,ae)}).catch(Ss)}))}let Le=ms(),je=ms(),Te;function Y(F,q,V){he(F);const J=je.list();return J.length?J.forEach(ge=>ge(F,q,V)):console.error(F),Promise.reject(F)}function ne(){return Te&&c.value!==Qt?Promise.resolve():new Promise((F,q)=>{Le.add([F,q])})}function he(F){return Te||(Te=!F,He(),Le.list().forEach(([q,V])=>F?V(F):q()),Le.reset()),F}function Be(F,q,V,J){const{scrollBehavior:ge}=t;if(!Hn||!ge)return Promise.resolve();const ke=!V&&t8(Ai(F.fullPath,0))||(J||!V)&&history.state&&history.state.scroll||null;return Qe().then(()=>ge(F,q,ke)).then(ae=>ae&&Qh(ae)).catch(ae=>Y(ae,F,q))}const nt=F=>o.go(F);let Ie;const Zt=new Set,Pn={currentRoute:c,listening:!0,addRoute:h,removeRoute:m,hasRoute:b,getRoutes:_,resolve:w,options:t,push:D,replace:z,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:r.add,beforeResolve:a.add,afterEach:i.add,onError:je.add,isReady:ne,install(F){const q=this;F.component("RouterLink",M8),F.component("RouterView",V8),F.config.globalProperties.$router=q,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>x(c)}),Hn&&!Ie&&c.value===Qt&&(Ie=!0,D(o.location).catch(ge=>{}));const V={};for(const ge in Qt)V[ge]=C(()=>c.value[ge]);F.provide(Xr,q),F.provide(Xp,Oe(V)),F.provide(nr,c);const J=F.unmount;Zt.add(F),F.unmount=function(){Zt.delete(F),Zt.size<1&&(u=Qt,Ge&&Ge(),Ge=null,c.value=Qt,Ie=!1,Te=!1),J()}}};return Pn}function Mn(t){return t.reduce((n,s)=>n.then(()=>s()),Promise.resolve())}function q8(t,n){const s=[],l=[],o=[],r=Math.max(n.matched.length,t.matched.length);for(let a=0;a<r;a++){const i=n.matched[a];i&&(t.matched.find(u=>ns(u,i))?l.push(i):s.push(i));const c=t.matched[a];c&&(n.matched.find(u=>ns(u,c))||o.push(c))}return[s,l,o]}const ko=H(!1),js=H(!1),qn=H(!1),U8=H(!0),sr=nh({xs:460,...Zm}),Cn=Rh(),Zp=Sh(),G8=C(()=>Cn.height.value-Cn.width.value/on>180),Jp=Eh(jt?document.body:null),Zn=Xm(),W8=C(()=>{var t,n;return["INPUT","TEXTAREA"].includes(((t=Zn.value)==null?void 0:t.tagName)||"")||((n=Zn.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),K8=C(()=>{var t;return["BUTTON","A"].includes(((t=Zn.value)==null?void 0:t.tagName)||"")});$t("slidev-camera","default");$t("slidev-mic","default");const gl=$t("slidev-scale",0),lt=$t("slidev-show-overview",!1),wo=$t("slidev-presenter-cursor",!0),Mi=$t("slidev-show-editor",!1);$t("slidev-editor-width",jt?window.innerWidth*.4:100);const Qp=jp(lt);function Ni(t,n,s,l=o=>o){return t*l(.5-n*(.5-s))}function Y8(t){return[-t[0],-t[1]]}function xt(t,n){return[t[0]+n[0],t[1]+n[1]]}function _t(t,n){return[t[0]-n[0],t[1]-n[1]]}function wt(t,n){return[t[0]*n,t[1]*n]}function X8(t,n){return[t[0]/n,t[1]/n]}function hs(t){return[t[1],-t[0]]}function Ii(t,n){return t[0]*n[0]+t[1]*n[1]}function Z8(t,n){return t[0]===n[0]&&t[1]===n[1]}function J8(t){return Math.hypot(t[0],t[1])}function Q8(t){return t[0]*t[0]+t[1]*t[1]}function Ri(t,n){return Q8(_t(t,n))}function eu(t){return X8(t,J8(t))}function e0(t,n){return Math.hypot(t[1]-n[1],t[0]-n[0])}function gs(t,n,s){let l=Math.sin(s),o=Math.cos(s),r=t[0]-n[0],a=t[1]-n[1],i=r*o-a*l,c=r*l+a*o;return[i+n[0],c+n[1]]}function lr(t,n,s){return xt(t,wt(_t(n,t),s))}function Vi(t,n,s){return xt(t,wt(n,s))}var{min:Nn,PI:t0}=Math,Hi=.275,vs=t0+1e-4;function n0(t,n={}){let{size:s=16,smoothing:l=.5,thinning:o=.5,simulatePressure:r=!0,easing:a=Y=>Y,start:i={},end:c={},last:u=!1}=n,{cap:d=!0,easing:f=Y=>Y*(2-Y)}=i,{cap:y=!0,easing:h=Y=>--Y*Y*Y+1}=c;if(t.length===0||s<=0)return[];let m=t[t.length-1].runningLength,_=i.taper===!1?0:i.taper===!0?Math.max(s,m):i.taper,b=c.taper===!1?0:c.taper===!0?Math.max(s,m):c.taper,w=Math.pow(s*l,2),A=[],k=[],D=t.slice(0,10).reduce((Y,ne)=>{let he=ne.pressure;if(r){let Be=Nn(1,ne.distance/s),nt=Nn(1,1-Be);he=Nn(1,Y+(nt-Y)*(Be*Hi))}return(Y+he)/2},t[0].pressure),z=Ni(s,o,t[t.length-1].pressure,a),P,N=t[0].vector,Z=t[0].point,re=Z,fe=Z,_e=re,Ge=!1;for(let Y=0;Y<t.length;Y++){let{pressure:ne}=t[Y],{point:he,vector:Be,distance:nt,runningLength:Ie}=t[Y];if(Y<t.length-1&&m-Ie<3)continue;if(o){if(r){let ke=Nn(1,nt/s),ae=Nn(1,1-ke);ne=Nn(1,D+(ae-D)*(ke*Hi))}z=Ni(s,o,ne,a)}else z=s/2;P===void 0&&(P=z);let Zt=Ie<_?f(Ie/_):1,Pn=m-Ie<b?h((m-Ie)/b):1;z=Math.max(.01,z*Math.min(Zt,Pn));let F=(Y<t.length-1?t[Y+1]:t[Y]).vector,q=Y<t.length-1?Ii(Be,F):1,V=Ii(Be,N)<0&&!Ge,J=q!==null&&q<0;if(V||J){let ke=wt(hs(N),z);for(let ae=1/13,g=0;g<=1;g+=ae)fe=gs(_t(he,ke),he,vs*g),A.push(fe),_e=gs(xt(he,ke),he,vs*-g),k.push(_e);Z=fe,re=_e,J&&(Ge=!0);continue}if(Ge=!1,Y===t.length-1){let ke=wt(hs(Be),z);A.push(_t(he,ke)),k.push(xt(he,ke));continue}let ge=wt(hs(lr(F,Be,q)),z);fe=_t(he,ge),(Y<=1||Ri(Z,fe)>w)&&(A.push(fe),Z=fe),_e=xt(he,ge),(Y<=1||Ri(re,_e)>w)&&(k.push(_e),re=_e),D=ne,N=Be}let He=t[0].point.slice(0,2),Le=t.length>1?t[t.length-1].point.slice(0,2):xt(t[0].point,[1,1]),je=[],Te=[];if(t.length===1){if(!(_||b)||u){let Y=Vi(He,eu(hs(_t(He,Le))),-(P||z)),ne=[];for(let he=1/13,Be=he;Be<=1;Be+=he)ne.push(gs(Y,He,vs*2*Be));return ne}}else{if(!(_||b&&t.length===1))if(d)for(let ne=1/13,he=ne;he<=1;he+=ne){let Be=gs(k[0],He,vs*he);je.push(Be)}else{let ne=_t(A[0],k[0]),he=wt(ne,.5),Be=wt(ne,.51);je.push(_t(He,he),_t(He,Be),xt(He,Be),xt(He,he))}let Y=hs(Y8(t[t.length-1].vector));if(b||_&&t.length===1)Te.push(Le);else if(y){let ne=Vi(Le,Y,z);for(let he=1/29,Be=he;Be<1;Be+=he)Te.push(gs(ne,Le,vs*3*Be))}else Te.push(xt(Le,wt(Y,z)),xt(Le,wt(Y,z*.99)),_t(Le,wt(Y,z*.99)),_t(Le,wt(Y,z)))}return A.concat(Te,k.reverse(),je)}function s0(t,n={}){var s;let{streamline:l=.5,size:o=16,last:r=!1}=n;if(t.length===0)return[];let a=.15+(1-l)*.85,i=Array.isArray(t[0])?t:t.map(({x:h,y:m,pressure:_=.5})=>[h,m,_]);if(i.length===2){let h=i[1];i=i.slice(0,-1);for(let m=1;m<5;m++)i.push(lr(i[0],h,m/4))}i.length===1&&(i=[...i,[...xt(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,f=c[0],y=i.length-1;for(let h=1;h<i.length;h++){let m=r&&h===y?i[h].slice(0,2):lr(f.point,i[h],a);if(Z8(f.point,m))continue;let _=e0(m,f.point);if(d+=_,h<y&&!u){if(d<o)continue;u=!0}f={point:m,pressure:i[h][2]>=0?i[h][2]:.5,vector:eu(_t(f.point,m)),distance:_,runningLength:d},c.push(f)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function l0(t,n={}){return n0(s0(t,n),n)}var o0=()=>({events:{},emit(t,...n){let s=this.events[t]||[];for(let l=0,o=s.length;l<o;l++)s[l](...n)},on(t,n){var s;return(s=this.events[t])!=null&&s.push(n)||(this.events[t]=[n]),()=>{var l;this.events[t]=(l=this.events[t])==null?void 0:l.filter(o=>n!==o)}}});function Tl(t,n){return t-n}function r0(t){return t<0?-1:1}function $l(t){return[Math.abs(t),r0(t)]}function tu(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var a0=2,Gt=a0,cs=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var o;var n;const s=this.drauu.el,l=(o=this.drauu.options.coordinateScale)!=null?o:1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-r.left)*l,y:(t.pageY-r.top)*l,pressure:t.pressure}}else{const r=this.drauu.svgPoint;r.x=t.clientX,r.y=t.clientY;const a=r.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:a.x*l,y:a.y*l,pressure:t.pressure}}}createElement(t,n){var o;const s=document.createElementNS("http://www.w3.org/2000/svg",t),l=n?{...this.brush,...n}:this.brush;return s.setAttribute("fill",(o=l.fill)!=null?o:"transparent"),s.setAttribute("stroke",l.color),s.setAttribute("stroke-width",l.size.toString()),s.setAttribute("stroke-linecap","round"),l.dasharray&&s.setAttribute("stroke-dasharray",l.dasharray),s}attr(t,n){this.el.setAttribute(t,typeof n=="string"?n:n.toFixed(Gt))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},i0=class extends cs{constructor(){super(...arguments),this.points=[]}onStart(t){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[t],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&this.points.push(t),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!!t}getSvgData(t){const n=l0(t,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const s=n.reduce((l,[o,r],a,i)=>{const[c,u]=i[(a+1)%i.length];return l.push(o,r,(o+c)/2,(r+u)/2),l},["M",...n[0],"Q"]);return s.push("Z"),s.map(l=>typeof l=="number"?l.toFixed(2):l).join(" ")}},c0=class extends cs{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,s]=$l(t.x-this.start.x),[l,o]=$l(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,l);n=r,l=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",l);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Tl),[i,c]=[this.start.y,this.start.y+l*o].sort(Tl);this.attr("cx",(r+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-r)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function nu(t,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),l=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",n),l.setAttribute("id",t),l.setAttribute("viewBox","0 -5 10 10"),l.setAttribute("refX","5"),l.setAttribute("refY","0"),l.setAttribute("markerWidth","4"),l.setAttribute("markerHeight","4"),l.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),l.appendChild(o),s.appendChild(l),s}var p0=class extends cs{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const n=tu(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(nu(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:n,y:s}=t;if(this.shiftPressed){const l=t.x-this.start.x,o=t.y-this.start.y;if(o!==0){let r=l/o;r=Math.round(r),Math.abs(r)<=1?(n=this.start.x+o*r,s=this.start.y+o):(n=this.start.x+l,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},u0=class extends cs{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,s]=$l(t.x-this.start.x),[l,o]=$l(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,l);n=r,l=r}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-l),this.attr("width",n*2),this.attr("height",l*2);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Tl),[i,c]=[this.start.y,this.start.y+l*o].sort(Tl);this.attr("x",r),this.attr("y",i),this.attr("width",a-r),this.attr("height",c-i)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function d0(t,n){const s=t.x-n.x,l=t.y-n.y;return s*s+l*l}function f0(t,n,s){let l=n.x,o=n.y,r=s.x-l,a=s.y-o;if(r!==0||a!==0){const i=((t.x-l)*r+(t.y-o)*a)/(r*r+a*a);i>1?(l=s.x,o=s.y):i>0&&(l+=r*i,o+=a*i)}return r=t.x-l,a=t.y-o,r*r+a*a}function y0(t,n){let s=t[0];const l=[s];let o;for(let r=1,a=t.length;r<a;r++)o=t[r],d0(o,s)>n&&(l.push(o),s=o);return s!==o&&o&&l.push(o),l}function or(t,n,s,l,o){let r=l,a=0;for(let i=n+1;i<s;i++){const c=f0(t[i],t[n],t[s]);c>r&&(a=i,r=c)}r>l&&(a-n>1&&or(t,n,a,l,o),o.push(t[a]),s-a>1&&or(t,a,s,l,o))}function m0(t,n){const s=t.length-1,l=[t[0]];return or(t,0,s,n,l),l.push(t[s]),l}function qi(t,n,s=!1){if(t.length<=2)return t;const l=n!==void 0?n*n:1;return t=s?t:y0(t,l),t=m0(t,l),t}var h0=class extends cs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(t){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[t],this.brush.arrowEnd){this.arrowId=tu();const n=nu(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&(this.points.push(t),this.count+=1),this.count>5&&(this.points=qi(this.points,1,!0),this.count=0),this.attr("d",Gi(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||(t.setAttribute("d",Gi(qi(this.points,1,!0))),!t.getTotalLength()))}};function g0(t,n){const s=n.x-t.x,l=n.y-t.y;return{length:Math.sqrt(s**2+l**2),angle:Math.atan2(l,s)}}function Ui(t,n,s,l){const o=n||t,r=s||t,a=.2,i=g0(o,r),c=i.angle+(l?Math.PI:0),u=i.length*a,d=t.x+Math.cos(c)*u,f=t.y+Math.sin(c)*u;return{x:d,y:f}}function v0(t,n,s){const l=Ui(s[n-1],s[n-2],t),o=Ui(t,s[n-1],s[n+1],!0);return`C ${l.x.toFixed(Gt)},${l.y.toFixed(Gt)} ${o.x.toFixed(Gt)},${o.y.toFixed(Gt)} ${t.x.toFixed(Gt)},${t.y.toFixed(Gt)}`}function Gi(t){return t.reduce((n,s,l,o)=>l===0?`M ${s.x.toFixed(Gt)},${s.y.toFixed(Gt)}`:`${n} ${v0(s,l,o)}`,"")}var _0=class extends cs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(t){const n=(s,l)=>{if(s&&s.length)for(let o=0;o<s.length;o++){const r=s[o];if(r.getTotalLength){const a=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=r.getPointAtLength(a*i/this.pathSubFactor),u=r.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:i,element:l||r})}}else r.children&&n(r.children,r)}};t&&n(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const t=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],l={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,l)&&(s.element.remove(),t.push(n))}return t.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!t.includes(s))),t.length>0}lineLineIntersect(t,n){const s=t.x1,l=t.x2,o=n.x1,r=n.x2,a=t.y1,i=t.y2,c=n.y1,u=n.y2,d=(s-l)*(c-u)-(a-i)*(o-r),f=(s*i-a*l)*(o-r)-(s-l)*(o*u-c*r),y=(s*i-a*l)*(c-u)-(a-i)*(o*u-c*r),h=(m,_,b)=>m>=_&&m<=b?!0:m>=b&&m<=_;if(d===0)return!1;{const m={x:f/d,y:y/d};return h(m.x,s,l)&&h(m.y,a,i)&&h(m.x,o,r)&&h(m.y,c,u)}}};function b0(t){return{draw:new h0(t),stylus:new i0(t),line:new p0(t),rectangle:new u0(t),ellipse:new c0(t),eraseLine:new _0(t)}}var k0=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=o0(),this._models=b0(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,l=this.eventStart.bind(this),o=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",l,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",l),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,n){return this._emitter.on(t,n)}undo(){const t=this.el;return t.lastElementChild?(this._undoStack.push(t.lastElementChild.cloneNode(!0)),t.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var t;return!!((t=this.el)!=null&&t.lastElementChild)}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){!this.acceptsInput(t)||(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const n=this.model._eventUp(t);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(t){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const t=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",t)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}};function w0(t){return new k0(t)}const rr=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Nt=$t("slidev-drawing-enabled",!1),V9=$t("slidev-drawing-pinned",!1),x0=H(!1),A0=H(!1),B0=H(!1),qs=H(!1),An=Wy($t("slidev-drawing-brush",{color:rr[0],size:4,mode:"stylus"})),Wi=H("stylus"),su=C(()=>we.drawings.syncAll||Lt.value);let Us=!1;const _s=C({get(){return Wi.value},set(t){Wi.value=t,t==="arrow"?(An.mode="line",An.arrowEnd=!0):(An.mode=t,An.arrowEnd=!1)}}),E0=Oe({brush:An,acceptsInputTypes:C(()=>Nt.value?void 0:["pen"]),coordinateTransform:!1}),ot=ql(w0(E0));function D0(){ot.clear(),su.value&&Mp(Ve.value,"")}function lu(){var t;A0.value=ot.canRedo(),x0.value=ot.canUndo(),B0.value=!!((t=ot.el)!=null&&t.children.length)}function C0(t){Us=!0;const n=Fl[t||Ve.value];n!=null?ot.load(n):ot.clear(),Us=!1}ot.on("changed",()=>{if(lu(),!Us){const t=ot.dump(),n=Ve.value;(Fl[n]||"")!==t&&su.value&&Mp(n,ot.dump())}});Hm(t=>{Us=!0,t[Ve.value]!=null&&ot.load(t[Ve.value]||""),Us=!1,lu()});Qe(()=>{ye(Ve,()=>{!ot.mounted||C0()},{immediate:!0})});ot.on("start",()=>qs.value=!0);ot.on("end",()=>qs.value=!1);window.addEventListener("keydown",t=>{if(!Nt.value)return;const n=!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey;let s=!0;t.code==="KeyZ"&&(t.ctrlKey||t.metaKey)?t.shiftKey?ot.redo():ot.undo():t.code==="Escape"?Nt.value=!1:t.code==="KeyL"&&n?_s.value="line":t.code==="KeyA"&&n?_s.value="arrow":t.code==="KeyS"&&n?_s.value="stylus":t.code==="KeyR"&&n?_s.value="rectangle":t.code==="KeyE"&&n?_s.value="ellipse":t.code==="KeyC"&&n?D0():t.code.startsWith("Digit")&&n&&+t.code[5]<=rr.length?An.color=rr[+t.code[5]-1]:s=!1,s&&(t.preventDefault(),t.stopPropagation())},!1);function qe(...t){return C(()=>t.every(n=>Ze(n)))}function pt(t){return C(()=>!Ze(t))}const Ki=dh(),xo=$t("slidev-color-schema","auto"),ar=C(()=>we.colorSchema!=="auto"),Zr=C({get(){return ar.value?we.colorSchema==="dark":xo.value==="auto"?Ki.value:xo.value==="dark"},set(t){ar.value||(xo.value=t===Ki.value?"auto":t?"dark":"light")}}),ou=jp(Zr);jt&&ye(Zr,t=>{const n=document.querySelector("html");n.classList.toggle("dark",t),n.classList.toggle("light",!t)},{immediate:!0});const vl=H(1),_l=C(()=>Ue.length-1),mt=H(0),Jr=H(0);function S0(){mt.value>vl.value&&(mt.value-=1)}function F0(){mt.value<_l.value&&(mt.value+=1)}function j0(){if(mt.value>vl.value){let t=mt.value-Jr.value;t<vl.value&&(t=vl.value),mt.value=t}}function T0(){if(mt.value<_l.value){let t=mt.value+Jr.value;t>_l.value&&(t=_l.value),mt.value=t}}function $0(){const{escape:t,space:n,shift:s,left:l,right:o,up:r,down:a,enter:i,d:c,g:u,o:d}=Zp;let f=[{name:"next_space",key:qe(n,pt(s)),fn:an,autoRepeat:!0},{name:"prev_space",key:qe(n,s),fn:cn,autoRepeat:!0},{name:"next_right",key:qe(o,pt(s),pt(lt)),fn:an,autoRepeat:!0},{name:"prev_left",key:qe(l,pt(s),pt(lt)),fn:cn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:an,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:cn,autoRepeat:!0},{name:"next_down",key:qe(a,pt(lt)),fn:Ws,autoRepeat:!0},{name:"prev_up",key:qe(r,pt(lt)),fn:()=>Ks(!1),autoRepeat:!0},{name:"next_shift",key:qe(o,s),fn:Ws,autoRepeat:!0},{name:"prev_shift",key:qe(l,s),fn:()=>Ks(!1),autoRepeat:!0},{name:"toggle_dark",key:qe(c,pt(Nt)),fn:ou},{name:"toggle_overview",key:qe(d,pt(Nt)),fn:Qp},{name:"hide_overview",key:qe(t,pt(Nt)),fn:()=>lt.value=!1},{name:"goto",key:qe(u,pt(Nt)),fn:()=>qn.value=!qn.value},{name:"next_overview",key:qe(o,lt),fn:F0},{name:"prev_overview",key:qe(l,lt),fn:S0},{name:"up_overview",key:qe(r,lt),fn:j0},{name:"down_overview",key:qe(a,lt),fn:T0},{name:"goto_from_overview",key:qe(i,lt),fn:()=>{ls(mt.value),lt.value=!1}}];const y=new Set(f.map(m=>m.name));if(f.filter(m=>m.name&&y.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return f}const ru=qe(pt(W8),pt(K8),U8);function O0(t,n,s=!1){typeof t=="string"&&(t=Zp[t]);const l=qe(t,ru);let o=0,r;const a=()=>{if(clearTimeout(r),!l.value){o=0;return}s&&(r=setTimeout(a,Math.max(1e3-o*250,150)),o++),n()};return ye(l,a,{flush:"sync"})}function z0(t,n){return Ym(t,s=>{!ru.value||s.repeat||n()})}function P0(){const t=$0();new Map(t.map(s=>[s.key,s])).forEach(s=>{s.fn&&O0(s.key,s.fn,s.autoRepeat)}),z0("f",()=>Jp.toggle())}const L0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},M0=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),N0=[M0];function I0(t,n){return B(),U("svg",L0,N0)}const R0={name:"carbon-close",render:I0};function Qr(t){var s,l;const n=(l=(s=t==null?void 0:t.meta)==null?void 0:s.slide)==null?void 0:l.no;return n!=null?`slidev-page-${n}`:""}const au=Ae({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(t){const n=t;M(K);const s=H(),l=Bh(s),o=C(()=>n.width?n.width:l.width.value),r=C(()=>n.width?n.width/on:l.height.value);n.width&&as(()=>{s.value&&(s.value.style.width=`${o.value}px`,s.value.style.height=`${r.value}px`)});const a=C(()=>o.value/r.value),i=C(()=>n.scale?n.scale:a.value<on?o.value/rn:r.value*on/rn),c=C(()=>({height:`${Wr}px`,width:`${rn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=C(()=>({"select-none":!we.selectable,"slidev-code-line-numbers":we.lineNumbers}));return ft(Pp,i),(d,f)=>(B(),U("div",{id:"slide-container",ref_key:"root",ref:s,class:Me(x(u))},[e("div",{id:"slide-content",style:Ke(x(c))},[Ft(d.$slots,"default")],4),Ft(d.$slots,"controls")],2))}});const ea=Ae({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(t,{emit:n}){const s=Mt(t,"clicks",n),l=Mt(t,"clicksElements",n),o=Mt(t,"clicksDisabled",n),r=Mt(t,"clicksOrderMap",n);l.value.length=0,ft(Fm,t.route),ft(jm,t.context),ft(Ds,s),ft(Cs,o),ft(bn,l),ft(Xo,r)},render(){var t,n;return this.$props.is?yt(this.$props.is):(n=(t=this.$slots)==null?void 0:t.default)==null?void 0:n.call(t)}}),V0=["innerHTML"],H0=Ae({__name:"DrawingPreview",props:{page:null},setup(t){return M(K),(n,s)=>x(Fl)[t.page]?(B(),U("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:x(Fl)[t.page]},null,8,V0)):ue("v-if",!0)}}),q0={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},U0=["onClick"],G0=Ae({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(t,{emit:n}){const s=t;M(K);const l=Mt(s,"modelValue",n);function o(){l.value=!1}function r(h){ls(h),o()}function a(h){return h===mt.value}const i=sr.smaller("xs"),c=sr.smaller("sm"),u=4*16*2,d=2*16,f=C(()=>i.value?Cn.width.value-u:c.value?(Cn.width.value-u-d)/2:300),y=C(()=>Math.floor((Cn.width.value-u)/(f.value+d)));return as(()=>{mt.value=Ve.value,Jr.value=y.value}),(h,m)=>{const _=R0;return B(),U(De,null,[Zl(e("div",q0,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Ke(`grid-template-columns: repeat(auto-fit,minmax(${x(f)}px,1fr))`)},[(B(!0),U(De,null,Zs(x(Ue).slice(0,-1),(b,w)=>(B(),U("div",{key:b.path,class:"relative"},[e("div",{class:Me(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(w+1)}]),style:Ke(x(Kr)),onClick:A=>r(+b.path)},[(B(),W(au,{key:b.path,width:x(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:$(()=>[j(x(ea),{is:b==null?void 0:b.component,"clicks-disabled":!0,class:Me(x(Qr)(b)),route:b,context:"overview"},null,8,["is","class","route"]),j(H0,{page:+b.path},null,8,["page"])]),_:2},1032,["width"]))],14,U0),e("div",{class:"absolute top-0 opacity-50",style:Ke(`left: ${x(f)+5}px`)},Sn(w+1),5)]))),128))],4)],512),[[Dp,x(l)]]),x(l)?(B(),U("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:o},[j(_)])):ue("v-if",!0)],64)}}});const W0="/assets/logo.b72bde5d.png",K0={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Y0=Ae({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(t,{emit:n}){const s=t;M(K);const l=Mt(s,"modelValue",n);function o(){l.value=!1}return(r,a)=>(B(),W(cp,null,[x(l)?(B(),U("div",K0,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>o())}),e("div",{class:Me(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[Ft(r.$slots,"default")],2)])):ue("v-if",!0)],1024))}}),X0={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Z0=["innerHTML"],J0=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:W0,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),p("dev ")])])],-1),Q0=Ae({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(t,{emit:n}){const s=t;M(K);const l=Mt(s,"modelValue",n),o=C(()=>typeof we.info=="string");return(r,a)=>(B(),W(Y0,{modelValue:x(l),"onUpdate:modelValue":a[0]||(a[0]=i=>Ce(l)?l.value=i:null),class:"px-6 py-4"},{default:$(()=>[e("div",X0,[x(o)?(B(),U("div",{key:0,class:"mb-4",innerHTML:x(we).info},null,8,Z0)):ue("v-if",!0),J0])]),_:1},8,["modelValue"]))}});const eg=["disabled","onKeydown"],tg=Ae({__name:"Goto",setup(t){M(K);const n=H(),s=H(""),l=C(()=>{if(s.value.startsWith("/"))return!!Ue.find(a=>a.path===s.value.substring(1));{const a=+s.value;return!isNaN(a)&&a>0&&a<=ku.value}});function o(){l.value&&(s.value.startsWith("/")?ls(s.value.substring(1)):ls(+s.value)),r()}function r(){qn.value=!1}return ye(qn,async a=>{var i,c;a?(await Qe(),s.value="",(i=n.value)==null||i.focus()):(c=n.value)==null||c.blur()}),ye(s,a=>{a.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(a,i)=>(B(),U("div",{id:"slidev-goto-dialog",class:Me(["fixed right-5 bg-main transform transition-all",x(qn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Zl(e("input",{ref_key:"input",ref:n,"onUpdate:modelValue":i[0]||(i[0]=c=>s.value=c),type:"text",disabled:!x(qn),class:Me(["outline-none bg-transparent",{"text-red-400":!x(l)&&s.value}]),placeholder:"Goto...",onKeydown:[Za(o,["enter"]),Za(r,["escape"])],onBlur:r},null,42,eg),[[$y,s.value]])],2))}}),ng=Ae({__name:"Controls",setup(t){M(K);const n=Rt(),s=Rt();return(l,o)=>(B(),U(De,null,[j(G0,{modelValue:x(lt),"onUpdate:modelValue":o[0]||(o[0]=r=>Ce(lt)?lt.value=r:null)},null,8,["modelValue"]),j(tg),x(n)?(B(),W(x(n),{key:0})):ue("v-if",!0),x(s)?(B(),W(x(s),{key:1,modelValue:x(ko),"onUpdate:modelValue":o[1]||(o[1]=r=>Ce(ko)?ko.value=r:null)},null,8,["modelValue"])):ue("v-if",!0),x(we).info?(B(),W(Q0,{key:2,modelValue:x(js),"onUpdate:modelValue":o[2]||(o[2]=r=>Ce(js)?js.value=r:null)},null,8,["modelValue"])):ue("v-if",!0)],64))}}),sg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},lg=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),og=[lg];function rg(t,n){return B(),U("svg",sg,og)}const ag={name:"carbon-settings-adjust",render:rg},ig={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},cg=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),pg=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),ug=[cg,pg];function dg(t,n){return B(),U("svg",ig,ug)}const fg={name:"carbon-information",render:dg},yg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},mg=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),hg=[mg];function gg(t,n){return B(),U("svg",yg,hg)}const vg={name:"carbon-download",render:gg},_g={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bg=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),kg=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),wg=[bg,kg];function xg(t,n){return B(),U("svg",_g,wg)}const Ag={name:"carbon-user-speaker",render:xg},Bg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Eg=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Dg=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Cg=[Eg,Dg];function Sg(t,n){return B(),U("svg",Bg,Cg)}const Fg={name:"carbon-presentation-file",render:Sg},jg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tg=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),$g=[Tg];function Og(t,n){return B(),U("svg",jg,$g)}const zg={name:"carbon-pen",render:Og},Pg={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Lg=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Mg=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Ng=[Lg,Mg];function Ig(t,n){return B(),U("svg",Pg,Ng)}const Rg={name:"ph-cursor-duotone",render:Ig},Vg={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Hg=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),qg=[Hg];function Ug(t,n){return B(),U("svg",Vg,qg)}const iu={name:"ph-cursor-fill",render:Ug},Gg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Wg=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Kg=[Wg];function Yg(t,n){return B(),U("svg",Gg,Kg)}const Xg={name:"carbon-sun",render:Yg},Zg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jg=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Qg=[Jg];function ev(t,n){return B(),U("svg",Zg,Qg)}const tv={name:"carbon-moon",render:ev},nv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},sv=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),lv=[sv];function ov(t,n){return B(),U("svg",nv,lv)}const rv={name:"carbon-apps",render:ov},av={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},iv=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),cv=[iv];function pv(t,n){return B(),U("svg",av,cv)}const cu={name:"carbon-arrow-right",render:pv},uv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},dv=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),fv=[dv];function yv(t,n){return B(),U("svg",uv,fv)}const mv={name:"carbon-arrow-left",render:yv},hv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gv=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),vv=[gv];function _v(t,n){return B(),U("svg",hv,vv)}const bv={name:"carbon-maximize",render:_v},kv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},wv=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),xv=[wv];function Av(t,n){return B(),U("svg",kv,xv)}const Bv={name:"carbon-minimize",render:Av},Ev={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Dv=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Cv=[Dv];function Sv(t,n){return B(),U("svg",Ev,Cv)}const Fv={name:"carbon-checkmark",render:Sv},jv={class:"select-list"},Tv={class:"title"},$v={class:"items"},Ov=["onClick"],zv=Ae({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:n}){const s=t;M(K);const l=Mt(s,"modelValue",n,{passive:!0});return(o,r)=>{const a=Fv;return B(),U("div",jv,[e("div",Tv,Sn(t.title),1),e("div",$v,[(B(!0),U(De,null,Zs(t.items,i=>(B(),U("div",{key:i.value,class:Me(["item",{active:x(l)===i.value}]),onClick:()=>{var c;l.value=i.value,(c=i.onClick)==null||c.call(i)}},[j(a,{class:Me(["text-green-500",{"opacity-0":x(l)!==i.value}])},null,8,["class"]),p(" "+Sn(i.display||i.value),1)],10,Ov))),128))])])}}});const Qs=(t,n)=>{const s=t.__vccOpts||t;for(const[l,o]of n)s[l]=o;return s},Pv=Qs(zv,[["__scopeId","data-v-7dd0eaca"]]),Lv={class:"text-sm"},Mv=Ae({__name:"Settings",setup(t){M(K);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,l)=>(B(),U("div",Lv,[j(Pv,{modelValue:x(gl),"onUpdate:modelValue":l[0]||(l[0]=o=>Ce(gl)?gl.value=o:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),Nv={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},Iv=Ae({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:n}){const s=t;M(K);const l=Mt(s,"modelValue",n,{passive:!0}),o=H();return Wm(o,()=>{l.value=!1}),(r,a)=>(B(),U("div",{ref_key:"el",ref:o,class:"flex relative"},[e("button",{class:Me({disabled:t.disabled}),onClick:a[0]||(a[0]=i=>l.value=!x(l))},[Ft(r.$slots,"button",{class:Me({disabled:t.disabled})})],2),(B(),W(cp,null,[x(l)?(B(),U("div",Nv,[Ft(r.$slots,"menu")])):ue("v-if",!0)],1024))],512))}}),Rv={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},dl={__name:"VerticalDivider",setup(t){return M(K),(n,s)=>(B(),U("div",Rv))}},Vv={render(){return[]}},Hv={class:"icon-btn"},qv={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},Uv={class:"my-auto"},Gv={class:"opacity-50"},Wv=Ae({__name:"NavControls",props:{persist:{default:!1}},setup(t){const n=t;M(K);const s=sr.smaller("md"),{isFullscreen:l,toggle:o}=Jp,r=C(()=>cr.value?`?password=${cr.value}`:""),a=C(()=>`/presenter/${Ve.value}${r.value}`),i=C(()=>`/${Ve.value}${r.value}`),c=H(),u=()=>{c.value&&Zn.value&&c.value.contains(Zn.value)&&Zn.value.blur()},d=C(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=Rt(),y=Rt();return jn(()=>import("./DrawingControls.956367d4.js"),["assets/DrawingControls.956367d4.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.20dada4c.js"]).then(h=>y.value=h.default),(h,m)=>{const _=Bv,b=bv,w=mv,A=cu,k=rv,D=tv,z=Xg,P=iu,N=Rg,Z=zg,re=Fg,fe=El("RouterLink"),_e=Ag,Ge=vg,He=fg,Le=ag;return B(),U("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[e("div",{class:Me(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",x(d)]),onMouseleave:u},[x(qt)?ue("v-if",!0):(B(),U("button",{key:0,class:"icon-btn",onClick:m[0]||(m[0]=(...je)=>x(o)&&x(o)(...je))},[x(l)?(B(),W(_,{key:0})):(B(),W(b,{key:1}))])),e("button",{class:Me(["icon-btn",{disabled:!x(px)}]),onClick:m[1]||(m[1]=(...je)=>x(cn)&&x(cn)(...je))},[j(w)],2),e("button",{class:Me(["icon-btn",{disabled:!x(cx)}]),title:"Next",onClick:m[2]||(m[2]=(...je)=>x(an)&&x(an)(...je))},[j(A)],2),x(qt)?ue("v-if",!0):(B(),U("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=je=>x(Qp)())},[j(k)])),x(ar)?ue("v-if",!0):(B(),U("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=je=>x(ou)())},[x(Zr)?(B(),W(D,{key:0})):(B(),W(z,{key:1}))])),j(dl),x(qt)?ue("v-if",!0):(B(),U(De,{key:3},[!x(Lt)&&!x(s)&&x(f)?(B(),U(De,{key:0},[j(x(f)),j(dl)],64)):ue("v-if",!0),x(Lt)?(B(),U("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=je=>wo.value=!x(wo))},[x(wo)?(B(),W(P,{key:0})):(B(),W(N,{key:1,class:"opacity-50"}))])):ue("v-if",!0)],64)),!x(we).drawings.presenterOnly&&!x(qt)?(B(),U(De,{key:4},[e("button",{class:"icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=je=>Nt.value=!x(Nt))},[j(Z),x(Nt)?(B(),U("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Ke({background:x(An).color})},null,4)):ue("v-if",!0)]),j(dl)],64)):ue("v-if",!0),x(qt)?ue("v-if",!0):(B(),U(De,{key:5},[x(Lt)?(B(),W(fe,{key:0,to:x(i),class:"icon-btn",title:"Play Mode"},{default:$(()=>[j(re)]),_:1},8,["to"])):ue("v-if",!0),x(rx)?(B(),W(fe,{key:1,to:x(a),class:"icon-btn",title:"Presenter Mode"},{default:$(()=>[j(_e)]),_:1},8,["to"])):ue("v-if",!0),ue("v-if",!0)],64)),(B(),U(De,{key:6},[x(we).download?(B(),U("button",{key:0,class:"icon-btn",onClick:m[8]||(m[8]=(...je)=>x(pr)&&x(pr)(...je))},[j(Ge)])):ue("v-if",!0)],64)),!x(Lt)&&x(we).info&&!x(qt)?(B(),U("button",{key:7,class:"icon-btn",onClick:m[9]||(m[9]=je=>js.value=!x(js))},[j(He)])):ue("v-if",!0),!x(Lt)&&!x(qt)?(B(),W(Iv,{key:8},{button:$(()=>[e("button",Hv,[j(Le)])]),menu:$(()=>[j(Mv)]),_:1})):ue("v-if",!0),x(qt)?ue("v-if",!0):(B(),W(dl,{key:9})),e("div",qv,[e("div",Uv,[p(Sn(x(Ve))+" ",1),e("span",Gv,"/ "+Sn(x(ku)),1)])]),j(x(Vv))],34)],512)}}}),pu={render(){return[]}},uu={render(){return[]}},Kv={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Yv=Ae({__name:"PresenterMouse",setup(t){return M(K),(n,s)=>{const l=iu;return x(go).cursor?(B(),U("div",Kv,[j(l,{class:"absolute",style:Ke({left:`${x(go).cursor.x}%`,top:`${x(go).cursor.y}%`})},null,8,["style"])])):ue("v-if",!0)}}}),Xv=Ae({__name:"SlidesShow",props:{context:null},setup(t){M(K),ye(dt,()=>{var s,l;((s=dt.value)==null?void 0:s.meta)&&dt.value.meta.preload!==!1&&(dt.value.meta.__preloaded=!0),((l=Ao.value)==null?void 0:l.meta)&&Ao.value.meta.preload!==!1&&(Ao.value.meta.__preloaded=!0)},{immediate:!0});const n=Rt();return jn(()=>import("./DrawingLayer.493b8916.js"),[]).then(s=>n.value=s.default),(s,l)=>(B(),U(De,null,[ue(" Global Bottom "),j(x(uu)),ue(" Slides "),(B(!0),U(De,null,Zs(x(Ue),o=>{var r,a;return B(),U(De,{key:o.path},[((r=o.meta)==null?void 0:r.__preloaded)||o===x(dt)?Zl((B(),W(x(ea),{key:0,is:o==null?void 0:o.component,clicks:o===x(dt)?x(St):0,"clicks-elements":((a=o.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Me(x(Qr)(o)),route:o,context:t.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Dp,o===x(dt)]]):ue("v-if",!0)],64)}),128)),ue(" Global Top "),j(x(pu)),x(n)?(B(),W(x(n),{key:0})):ue("v-if",!0),x(Lt)?ue("v-if",!0):(B(),W(Yv,{key:1}))],64))}}),Zv=Ae({__name:"Play",setup(t){M(K),P0();const n=H();function s(r){var a;Mi.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?an():cn())}fx(n);const l=C(()=>G8.value||Mi.value);Rt();const o=Rt();return jn(()=>import("./DrawingControls.956367d4.js"),["assets/DrawingControls.956367d4.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.20dada4c.js"]).then(r=>o.value=r.default),(r,a)=>(B(),U(De,null,[e("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:Ke(x(Kr))},[j(au,{class:"w-full h-full",style:Ke({background:"var(--slidev-slide-container-background, black)"}),width:x(sa)?x(Cn).width.value:void 0,scale:x(gl),onPointerdown:s},{default:$(()=>[j(Xv,{context:"slide"})]),controls:$(()=>[e("div",{class:Me(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[x(l)?"opacity-100 right-0":"opacity-0 p-2",x(qs)?"pointer-events-none":""]])},[j(Wv,{class:"m-auto",persist:x(l)},null,8,["persist"])],2),!x(we).drawings.presenterOnly&&!x(qt)&&x(o)?(B(),W(x(o),{key:0,class:"ml-0"})):ue("v-if",!0)]),_:1},8,["style","width","scale"]),ue("v-if",!0)],4),j(ng)],64))}});function du(t){const n=C(()=>t.value.path),s=C(()=>Ue.length-1),l=C(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),o=C(()=>no(l.value)),r=C(()=>Ue.find(y=>y.path===`${l.value}`)),a=C(()=>{var y,h,m;return(m=(h=(y=r.value)==null?void 0:y.meta)==null?void 0:h.slide)==null?void 0:m.id}),i=C(()=>{var y,h;return((h=(y=r.value)==null?void 0:y.meta)==null?void 0:h.layout)||(l.value===1?"cover":"default")}),c=C(()=>Ue.find(y=>y.path===`${Math.min(Ue.length,l.value+1)}`)),u=C(()=>Ue.filter(y=>{var h,m;return(m=(h=y.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((y,h)=>(la(y,h),y),[])),d=C(()=>oa(u.value,r.value)),f=C(()=>ra(d.value));return{route:t,path:n,total:s,currentPage:l,currentPath:o,currentRoute:r,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:u,treeWithActiveStatuses:d,tree:f}}function fu(t,n,s){const l=H(0);Qe(()=>{ht.afterEach(async()=>{await Qe(),l.value+=1})});const o=C(()=>{var c,u;return l.value,((u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),r=C(()=>{var c,u,d;return+((d=(u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.clicks)!=null?d:o.value.length)}),a=C(()=>s.value<Ue.length-1||t.value<r.value),i=C(()=>s.value>1||t.value>0);return{clicks:t,clicksElements:o,clicksTotal:r,hasNext:a,hasPrev:i}}const Jv=["id"],Yi=Ae({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(t,{emit:n}){const s=t,l=Mt(s,"clicksElements",n),o=C(()=>({height:`${Wr}px`,width:`${rn}px`})),r=Rt();jn(()=>import("./DrawingPreview.0959a931.js"),[]).then(u=>r.value=u.default);const a=C(()=>s.clicks),i=fu(a,s.nav.currentRoute,s.nav.currentPage),c=C(()=>`${s.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return ft(K,Oe({nav:{...s.nav,...i},configs:we,themeConfigs:C(()=>we.themeConfig)})),(u,d)=>{var f;return B(),U("div",{id:x(c),class:"slide-container",style:Ke(x(o))},[j(x(uu)),j(x(ea),{is:(f=t.route)==null?void 0:f.component,"clicks-elements":x(l),"onUpdate:clicks-elements":d[0]||(d[0]=y=>Ce(l)?l.value=y:null),clicks:x(a),"clicks-disabled":!1,class:Me(x(Qr)(t.route)),route:t.route},null,8,["is","clicks-elements","clicks","class","route"]),x(r)?(B(),W(x(r),{key:0,page:+t.route.path},null,8,["page"])):ue("v-if",!0),j(x(pu))],12,Jv)}}}),Qv=Ae({__name:"PrintSlide",props:{route:null},setup(t){var r;const n=t;M(K);const s=Oe(((r=n.route.meta)==null?void 0:r.__clicksElements)||[]),l=C(()=>n.route),o=du(l);return(a,i)=>(B(),U(De,null,[j(Yi,{"clicks-elements":s,"onUpdate:clicks-elements":i[0]||(i[0]=c=>s=c),clicks:0,nav:x(o),route:x(l)},null,8,["clicks-elements","nav","route"]),x(Ts)?ue("v-if",!0):(B(!0),U(De,{key:0},Zs(s.length,c=>(B(),W(Yi,{key:c,clicks:c,nav:x(o),route:x(l)},null,8,["clicks","nav","route"]))),128))],64))}}),e1={id:"print-content"},t1=Ae({__name:"PrintContainer",props:{width:null},setup(t){const n=t;M(K);const s=C(()=>n.width),l=C(()=>n.width/on),o=C(()=>s.value/l.value),r=C(()=>o.value<on?s.value/rn:l.value*on/rn),a=Ue.slice(0,-1),i=C(()=>({"select-none":!we.selectable,"slidev-code-line-numbers":we.lineNumbers}));return ft(Pp,r),(c,u)=>(B(),U("div",{id:"print-container",class:Me(x(i))},[e("div",e1,[(B(!0),U(De,null,Zs(x(a),d=>(B(),W(Qv,{key:d.path,route:d},null,8,["route"]))),128))]),Ft(c.$slots,"controls")],2))}});const n1=Ae({__name:"Print",setup(t){M(K);function n(s,{slots:l}){if(l.default)return yt("style",l.default())}return as(()=>{sa?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,l)=>(B(),U(De,null,[j(n,null,{default:$(()=>[p(" @page { size: "+Sn(x(rn))+"px "+Sn(x(Wr))+"px; margin: 0px; } ",1)]),_:1}),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Ke(x(Kr))},[j(t1,{class:"w-full h-full",style:Ke({background:"var(--slidev-slide-container-background, black)"}),width:x(Cn).width.value},null,8,["style","width"])],4)],64))}});const s1={class:"slidev-layout end"},l1={__name:"end",setup(t){return M(K),(n,s)=>(B(),U("div",s1," END "))}},o1=Qs(l1,[["__scopeId","data-v-ab32435f"]]),r1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},a1=e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),i1=[a1];function c1(t,n){return B(),U("svg",r1,i1)}const p1={name:"carbon-logo-github",render:c1},u1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d1=e("path",{fill:"currentColor",d:"M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z"},null,-1),f1=[d1];function y1(t,n){return B(),U("svg",u1,f1)}const m1={name:"carbon-edit",render:y1};function Xi(t){return t.startsWith("/")?"/"+t.slice(1):t}function h1(t,n=!1){const s=t&&["#","rgb","hsl"].some(o=>t.indexOf(o)===0),l={background:s?t:void 0,color:t&&!s?"white":void 0,backgroundImage:s?void 0:t?n?`linear-gradient(#0005, #0008), url(${Xi(t)})`:`url("${Xi(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return l.background||delete l.background,l}const g1={class:"my-auto w-full"},v1=Ae({__name:"cover",props:{background:{default:""}},setup(t){const n=t;M(K);const s=C(()=>h1(n.background,!0));return(l,o)=>(B(),U("div",{class:"slidev-layout cover",style:Ke(x(s))},[e("div",g1,[Ft(l.$slots,"default")])],4))}});const yu=t=>(Mr("data-v-22b6f51a"),t=t(),Nr(),t),_1=yu(()=>e("h1",null,"Tailwind & Grid",-1)),b1=yu(()=>e("p",null,"Andy T. a Nel\u010Da L.",-1)),k1={class:"pt-12"},w1={class:"abs-br m-6 flex gap-2"},x1={href:"https://github.com/slidevjs/slidev",target:"_blank",alt:"GitHub",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},A1={__name:"1",setup(t){const n={theme:"default",colorSchema:"dark",background:"https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Tailwind & Grid
Prezentace k FE mikro\u0161kolen\xED
`,drawings:{persist:!1},css:"unocss"},s=M(K);return(l,o)=>{const r=cu,a=m1,i=p1;return B(),W(v1,ie(oe(n)),{default:$(()=>[_1,b1,e("div",k1,[e("span",{onClick:o[0]||(o[0]=(...c)=>x(s).nav.next&&x(s).nav.next(...c)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[p(" M\u016F\u017Eeme za\u010D\xEDt? "),j(r,{class:"inline"})])]),e("div",w1,[e("button",{onClick:o[1]||(o[1]=c=>x(s).nav.openInEditor()),title:"Open in Editor",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},[j(a)]),e("a",x1,[j(i)])]),ue(`
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
`)]),_:1},16)}}},B1=Qs(A1,[["__scopeId","data-v-22b6f51a"]]),E1={class:"slidev-layout center h-full grid place-content-center"},D1={class:"my-auto"},mu={__name:"center",setup(t){return M(K),(n,s)=>(B(),U("div",E1,[e("div",D1,[Ft(n.$slots,"default")])]))}};const C1=t=>(Mr("data-v-8197312d"),t=t(),Nr(),t),S1=C1(()=>e("h1",null,"1. Tailwind",-1)),F1={__name:"2",setup(t){const n={layout:"center"};return M(K),(s,l)=>(B(),W(mu,ie(oe(n)),{default:$(()=>[S1]),_:1},16))}},j1=Qs(F1,[["__scopeId","data-v-8197312d"]]);function Zi(t){return t.startsWith("/")?"/"+t.slice(1):t}function T1(t,n=!1){const s=t&&t[0]==="#"&&t.startsWith("rgb"),l={background:s?t:void 0,color:t&&!s?"white":void 0,backgroundImage:s?void 0:t?n?`linear-gradient(#0005, #0008), url(${Zi(t)})`:`url("${Zi(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return l.background||delete l.background,l}const $1={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},O1=Ae({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(t){const n=t;M(K);const s=C(()=>T1(n.image));return(l,o)=>(B(),U("div",$1,[e("div",{class:Me(["slidev-layout default",n.class])},[Ft(l.$slots,"default")],2),e("div",{class:"w-full w-full",style:Ke(x(s))},null,4)]))}}),z1=e("h1",null,"Tailwind CSS",-1),P1=e("br",null,null,-1),L1=e("br",null,null,-1),M1=e("br",null,null,-1),N1=e("kbd",null,"vlastnost-hodnota",-1),I1=e("br",null,null,-1),R1=e("br",null,null,-1),V1={__name:"3",setup(t){const n={layout:"image-right",image:"https://stateofx-images.netlify.app/captures/css2022/en-US/css_frameworks_experience_ranking.png",hide:!1,srcSequence:"./pages/AT_tw_intro.md"};return M(K),(s,l)=>(B(),W(O1,ie(oe(n)),{default:$(()=>[z1,P1,p(" Jeden z CSS framework\u016F. "),L1,M1,p(" Umo\u017E\u0148uje nak\xF3dovat web pomoc\xED utility t\u0159\xEDd p\u0159edp\u0159ipraven\xFDch pro prakticky ka\u017Edou kombinaci "),N1,p(". "),I1,R1]),_:1},16))}},H1={class:"slidev-layout default"},me={__name:"default",setup(t){return M(K),(n,s)=>(B(),U("div",H1,[Ft(n.$slots,"default")]))}},q1=e("h1",null,"V\xFDhody Tailwind CSS",-1),U1=e("br",null,null,-1),G1=e("br",null,null,-1),W1=e("ul",null,[e("li",null,[p("\u{1F3A8} "),e("span",{class:"text-yellow-600"},[e("strong",null,"Vizu\xE1ln\xED konzistentnost")]),p(" - \u010Clov\u011Bk je\xA0omezen\xA0na n\u011Bkolik p\u0159edp\u0159ipraven\xFDch velikost\xED/rozm\u011Br\u016F/barev apod. Tak\u017Ee je v\xFDsledek relativn\u011B\xA0visu\xE1ln\u011B konsistentn\xED.")]),e("li",null,[p("\u26A1\uFE0F "),e("span",{class:"text-yellow-600"},[e("strong",null,"Rychl\xE9 hromadn\xE9 \xFApravy")]),p(" - Styly t\u011Bchto p\u0159edp\u0159ipraven\xFDch t\u0159\xEDd lze snadno hromadn\u011B zm\u011Bnit \xFApravou konfigurace.")]),e("li",null,[p("\u{1F4F1} "),e("span",{class:"text-yellow-600"},[e("strong",null,"Responzivita")]),p(" - Tailwind t\u0159\xEDdy jsou\xA0responsivn\xED\xA0a pou\u017E\xEDvaj\xED\xA0mobile-first\xA0p\u0159\xEDstup.")]),e("li",null,[p("\u{1F303} "),e("span",{class:"text-yellow-600"},[e("strong",null,"Dark mode")]),p(" - Sta\u010D\xED p\u0159ed t\u0159\xEDdu p\u0159idat\xA0dark:, je mo\u017En\xE9 kombinovat i se stavy nebo responsivn\xEDmi breakpointy.")]),e("li",null,[p("\u{1F4D0} "),e("span",{class:"text-yellow-600"},[e("strong",null,"Snadn\xE9 vytvo\u0159en\xED layoutu")]),p(" - T\u0159\xEDdy layoutu lze nastavit pomoc\xED float, flex nebo grid.")]),e("li",null,[p("\u{1F483}\u{1F3FC} "),e("span",{class:"text-yellow-600"},[e("strong",null,"Animace, transformace, transition")]),p(" - Jsou p\u0159ipraven\xE9 z\xE1kladn\xED animace jako ot\xE1\u010Den\xED (animate-spin), pulsov\xE1n\xED (animate-pulse) a dal\u0161\xED.")])],-1),K1={__name:"4",setup(t){const n={hide:!1,srcSequence:"./pages/AT_tw_benefits.md"};return M(K),(s,l)=>(B(),W(me,ie(oe(n)),{default:$(()=>[q1,U1,G1,W1]),_:1},16))}},Y1={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},X1=e("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),Z1=[X1];function J1(t,n){return B(),U("svg",Y1,Z1)}const Q1={name:"ph-clipboard",render:J1},e5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},t5=e("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),n5=[t5];function s5(t,n){return B(),U("svg",e5,n5)}const l5={name:"ph-check-circle",render:s5};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function hu(t){return typeof t>"u"||t===null}function o5(t){return typeof t=="object"&&t!==null}function r5(t){return Array.isArray(t)?t:hu(t)?[]:[t]}function a5(t,n){var s,l,o,r;if(n)for(r=Object.keys(n),s=0,l=r.length;s<l;s+=1)o=r[s],t[o]=n[o];return t}function i5(t,n){var s="",l;for(l=0;l<n;l+=1)s+=t;return s}function c5(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var p5=hu,u5=o5,d5=r5,f5=i5,y5=c5,m5=a5,ta={isNothing:p5,isObject:u5,toArray:d5,repeat:f5,isNegativeZero:y5,extend:m5};function gu(t,n){var s="",l=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(s+='in "'+t.mark.name+'" '),s+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!n&&t.mark.snippet&&(s+=`

`+t.mark.snippet),l+" "+s):l}function Gs(t,n){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=n,this.message=gu(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Gs.prototype=Object.create(Error.prototype);Gs.prototype.constructor=Gs;Gs.prototype.toString=function(n){return this.name+": "+gu(this,n)};var kn=Gs,h5=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],g5=["scalar","sequence","mapping"];function v5(t){var n={};return t!==null&&Object.keys(t).forEach(function(s){t[s].forEach(function(l){n[String(l)]=s})}),n}function _5(t,n){if(n=n||{},Object.keys(n).forEach(function(s){if(h5.indexOf(s)===-1)throw new kn('Unknown option "'+s+'" is met in definition of "'+t+'" YAML type.')}),this.options=n,this.tag=t,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=v5(n.styleAliases||null),g5.indexOf(this.kind)===-1)throw new kn('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var et=_5;function Ji(t,n){var s=[];return t[n].forEach(function(l){var o=s.length;s.forEach(function(r,a){r.tag===l.tag&&r.kind===l.kind&&r.multi===l.multi&&(o=a)}),s[o]=l}),s}function b5(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function l(o){o.multi?(t.multi[o.kind].push(o),t.multi.fallback.push(o)):t[o.kind][o.tag]=t.fallback[o.tag]=o}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(l);return t}function ir(t){return this.extend(t)}ir.prototype.extend=function(n){var s=[],l=[];if(n instanceof et)l.push(n);else if(Array.isArray(n))l=l.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(l=l.concat(n.explicit));else throw new kn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof et))throw new kn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new kn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new kn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),l.forEach(function(r){if(!(r instanceof et))throw new kn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(ir.prototype);return o.implicit=(this.implicit||[]).concat(s),o.explicit=(this.explicit||[]).concat(l),o.compiledImplicit=Ji(o,"implicit"),o.compiledExplicit=Ji(o,"explicit"),o.compiledTypeMap=b5(o.compiledImplicit,o.compiledExplicit),o};var k5=ir,w5=new et("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),x5=new et("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),A5=new et("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),B5=new k5({explicit:[w5,x5,A5]});function E5(t){if(t===null)return!0;var n=t.length;return n===1&&t==="~"||n===4&&(t==="null"||t==="Null"||t==="NULL")}function D5(){return null}function C5(t){return t===null}var S5=new et("tag:yaml.org,2002:null",{kind:"scalar",resolve:E5,construct:D5,predicate:C5,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function F5(t){if(t===null)return!1;var n=t.length;return n===4&&(t==="true"||t==="True"||t==="TRUE")||n===5&&(t==="false"||t==="False"||t==="FALSE")}function j5(t){return t==="true"||t==="True"||t==="TRUE"}function T5(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var $5=new et("tag:yaml.org,2002:bool",{kind:"scalar",resolve:F5,construct:j5,predicate:T5,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function O5(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function z5(t){return 48<=t&&t<=55}function P5(t){return 48<=t&&t<=57}function L5(t){if(t===null)return!1;var n=t.length,s=0,l=!1,o;if(!n)return!1;if(o=t[s],(o==="-"||o==="+")&&(o=t[++s]),o==="0"){if(s+1===n)return!0;if(o=t[++s],o==="b"){for(s++;s<n;s++)if(o=t[s],o!=="_"){if(o!=="0"&&o!=="1")return!1;l=!0}return l&&o!=="_"}if(o==="x"){for(s++;s<n;s++)if(o=t[s],o!=="_"){if(!O5(t.charCodeAt(s)))return!1;l=!0}return l&&o!=="_"}if(o==="o"){for(s++;s<n;s++)if(o=t[s],o!=="_"){if(!z5(t.charCodeAt(s)))return!1;l=!0}return l&&o!=="_"}}if(o==="_")return!1;for(;s<n;s++)if(o=t[s],o!=="_"){if(!P5(t.charCodeAt(s)))return!1;l=!0}return!(!l||o==="_")}function M5(t){var n=t,s=1,l;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),l=n[0],(l==="-"||l==="+")&&(l==="-"&&(s=-1),n=n.slice(1),l=n[0]),n==="0")return 0;if(l==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function N5(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!ta.isNegativeZero(t)}var I5=new et("tag:yaml.org,2002:int",{kind:"scalar",resolve:L5,construct:M5,predicate:N5,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),R5=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function V5(t){return!(t===null||!R5.test(t)||t[t.length-1]==="_")}function H5(t){var n,s;return n=t.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var q5=/^[-+]?[0-9]+e/;function U5(t,n){var s;if(isNaN(t))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(ta.isNegativeZero(t))return"-0.0";return s=t.toString(10),q5.test(s)?s.replace("e",".e"):s}function G5(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||ta.isNegativeZero(t))}var W5=new et("tag:yaml.org,2002:float",{kind:"scalar",resolve:V5,construct:H5,predicate:G5,represent:U5,defaultStyle:"lowercase"}),K5=B5.extend({implicit:[S5,$5,I5,W5]}),Y5=K5,vu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),_u=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function X5(t){return t===null?!1:vu.exec(t)!==null||_u.exec(t)!==null}function Z5(t){var n,s,l,o,r,a,i,c=0,u=null,d,f,y;if(n=vu.exec(t),n===null&&(n=_u.exec(t)),n===null)throw new Error("Date resolve error");if(s=+n[1],l=+n[2]-1,o=+n[3],!n[4])return new Date(Date.UTC(s,l,o));if(r=+n[4],a=+n[5],i=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(d=+n[10],f=+(n[11]||0),u=(d*60+f)*6e4,n[9]==="-"&&(u=-u)),y=new Date(Date.UTC(s,l,o,r,a,i,c)),u&&y.setTime(y.getTime()-u),y}function J5(t){return t.toISOString()}var Q5=new et("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:X5,construct:Z5,instanceOf:Date,represent:J5});function e_(t){return t==="<<"||t===null}var t_=new et("tag:yaml.org,2002:merge",{kind:"scalar",resolve:e_}),na=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function n_(t){if(t===null)return!1;var n,s,l=0,o=t.length,r=na;for(s=0;s<o;s++)if(n=r.indexOf(t.charAt(s)),!(n>64)){if(n<0)return!1;l+=6}return l%8===0}function s_(t){var n,s,l=t.replace(/[\r\n=]/g,""),o=l.length,r=na,a=0,i=[];for(n=0;n<o;n++)n%4===0&&n&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|r.indexOf(l.charAt(n));return s=o%4*6,s===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):s===18?(i.push(a>>10&255),i.push(a>>2&255)):s===12&&i.push(a>>4&255),new Uint8Array(i)}function l_(t){var n="",s=0,l,o,r=t.length,a=na;for(l=0;l<r;l++)l%3===0&&l&&(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]),s=(s<<8)+t[l];return o=r%3,o===0?(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]):o===2?(n+=a[s>>10&63],n+=a[s>>4&63],n+=a[s<<2&63],n+=a[64]):o===1&&(n+=a[s>>2&63],n+=a[s<<4&63],n+=a[64],n+=a[64]),n}function o_(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var r_=new et("tag:yaml.org,2002:binary",{kind:"scalar",resolve:n_,construct:s_,predicate:o_,represent:l_}),a_=Object.prototype.hasOwnProperty,i_=Object.prototype.toString;function c_(t){if(t===null)return!0;var n=[],s,l,o,r,a,i=t;for(s=0,l=i.length;s<l;s+=1){if(o=i[s],a=!1,i_.call(o)!=="[object Object]")return!1;for(r in o)if(a_.call(o,r))if(!a)a=!0;else return!1;if(!a)return!1;if(n.indexOf(r)===-1)n.push(r);else return!1}return!0}function p_(t){return t!==null?t:[]}var u_=new et("tag:yaml.org,2002:omap",{kind:"sequence",resolve:c_,construct:p_}),d_=Object.prototype.toString;function f_(t){if(t===null)return!0;var n,s,l,o,r,a=t;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1){if(l=a[n],d_.call(l)!=="[object Object]"||(o=Object.keys(l),o.length!==1))return!1;r[n]=[o[0],l[o[0]]]}return!0}function y_(t){if(t===null)return[];var n,s,l,o,r,a=t;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1)l=a[n],o=Object.keys(l),r[n]=[o[0],l[o[0]]];return r}var m_=new et("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:f_,construct:y_}),h_=Object.prototype.hasOwnProperty;function g_(t){if(t===null)return!0;var n,s=t;for(n in s)if(h_.call(s,n)&&s[n]!==null)return!1;return!0}function v_(t){return t!==null?t:{}}var __=new et("tag:yaml.org,2002:set",{kind:"mapping",resolve:g_,construct:v_});Y5.extend({implicit:[Q5,t_],explicit:[r_,u_,m_,__]});function Qi(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"\x85":t===95?"\xA0":t===76?"\u2028":t===80?"\u2029":""}var b_=new Array(256),k_=new Array(256);for(var In=0;In<256;In++)b_[In]=Qi(In)?1:0,k_[In]=Qi(In);function w_(t){return Array.from(new Set(t))}function ec(...t){let n,s,l;t.length===1?(n=0,l=1,[s]=t):[n,s,l=1]=t;const o=[];let r=n;for(;r<s;)o.push(r),r+=l||1;return o}function x_(t,n){if(!n||n==="all"||n==="*")return ec(1,t+1);const s=[];for(const l of n.split(/[,;]/g))if(!l.includes("-"))s.push(+l);else{const[o,r]=l.split("-",2);s.push(...ec(+o,r?+r+1:t+1))}return w_(s).filter(l=>l<=t).sort((l,o)=>l-o)}const A_=["title"],Pe=Ae({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(t){const n=t;M(K);const s=M(Ds),l=M(bn),o=M(Cs);function r(f=5){const y=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=h.length;for(let _=0;_<f;_++)y.push(h.charAt(Math.floor(Math.random()*m)));return y.join("")}const a=H(),i=$n();is(()=>{const f=n.at==null?l==null?void 0:l.value.length:n.at,y=C(()=>o!=null&&o.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),n.ranges.length-1)),h=C(()=>n.ranges[y.value]||"");if(n.ranges.length>=2&&!(o!=null&&o.value)){const m=r(),_=$m(n.ranges.length-1).map(b=>m+b);l!=null&&l.value&&(l.value.push(..._),Xl(()=>_.forEach(b=>Zo(l.value,b)),i))}as(()=>{if(!a.value)return;const _=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const b of _){const w=Array.from(b.querySelectorAll(".line")),A=x_(w.length,h.value);if(w.forEach((k,D)=>{const z=A.includes(D+1);k.classList.toggle(gn,!0),k.classList.toggle("highlighted",z),k.classList.toggle("dishonored",!z)}),n.maxHeight){const k=b.querySelector(".line.highlighted");k&&k.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=sh();function d(){var y,h;const f=(h=(y=a.value)==null?void 0:y.querySelector(".slidev-code"))==null?void 0:h.textContent;f&&u(f)}return(f,y)=>{const h=l5,m=Q1;return B(),U("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:Ke({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[Ft(f.$slots,"default"),x(we).codeCopy?(B(),U("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:x(c)?"Copied":"Copy",onClick:y[0]||(y[0]=_=>d())},[x(c)?(B(),W(h,{key:0,class:"p-2 w-8 h-8"})):(B(),W(m,{key:1,class:"p-2 w-8 h-8"}))],8,A_)):ue("v-if",!0)],4)}}}),B_=e("h1",null,"Instalace Talwind CSS",-1),E_=e("ul",null,[e("li",null,[e("span",{class:"text-sm"},[p("Instalace do projektu s Vite pomoc\xED "),e("kbd",null,"npm install -D tailwindcss postcss autoprefixer")]),e("br")]),e("li",null,[e("span",{class:"text-sm"},[p("Vytvo\u0159en\xED soubor\u016F "),e("em",null,"tailwind.config.cjs"),p(" and "),e("em",null,"postcss.config.cjs"),p(". pomoc\xED "),e("kbd",null,"npx tailwindcss init -p")]),e("br")]),e("li",null,[e("span",{class:"text-sm"},[p("Nastaven\xED "),e("em",null,"content"),p(" v "),e("em",null,"tailwind.config.cjs"),p(":")])])],-1),D_=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"module"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"exports"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"content"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#C98A7D"}},'"./index.html"'),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#C98A7D"}},'"./src/**/*.{js,ts,jsx,tsx}"'),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"theme"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"extend"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"plugins"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"module"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"exports"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"content"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959"}},'"./index.html"'),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959"}},'"./src/**/*.{js,ts,jsx,tsx}"'),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"theme"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"extend"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"plugins"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),C_=e("ul",null,[e("li",null,[e("span",{class:"text-sm"},[p("Nastaven\xED "),e("em",null,"./src/index.css")])])],-1),S_=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"@"),e("span",{style:{color:"#4D9375"}},"tailwind"),e("span",{style:{color:"#DBD7CA"}}," base"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"@"),e("span",{style:{color:"#4D9375"}},"tailwind"),e("span",{style:{color:"#DBD7CA"}}," components"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"@"),e("span",{style:{color:"#4D9375"}},"tailwind"),e("span",{style:{color:"#DBD7CA"}}," utilities"),e("span",{style:{color:"#858585"}},";")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"@"),e("span",{style:{color:"#1C6B48"}},"tailwind"),e("span",{style:{color:"#393A34"}}," base"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"@"),e("span",{style:{color:"#1C6B48"}},"tailwind"),e("span",{style:{color:"#393A34"}}," components"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"@"),e("span",{style:{color:"#1C6B48"}},"tailwind"),e("span",{style:{color:"#393A34"}}," utilities"),e("span",{style:{color:"#8E8F8B"}},";")])])])],-1),F_=e("ul",null,[e("li",null,[e("span",{class:"text-sm"},[p("Spu\u0161t\u011Bn\xED pomoc\xED "),e("kbd",null,"npm run dev")])])],-1),j_={__name:"5",setup(t){const n={hide:!1,srcSequence:"./pages/AT_tw_installation.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[B_,E_,j(o,te({},{ranges:["0","1-10","2-5"]}),{default:$(()=>[D_]),_:1},16),C_,j(o,te({},{ranges:["0","1-3"]}),{default:$(()=>[S_]),_:1},16),F_]),_:1},16)}}},T_=e("h1",null,"Nastaven\xED tailwind.config.cjs",-1),$_=e("ul",null,[e("li",null,[e("span",{class:"text-yellow-600"},"Content, theme, plugins"),e("br")])],-1),O_=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"module"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"exports"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"content"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'./src/**/*.{html,js}'"),e("span",{style:{color:"#858585"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"theme"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"colors"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#C98A7D"}},"'blue'"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'#1fb6ff'"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#C98A7D"}},"'purple'"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'#7e5bef'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"fontFamily"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#E0A569"}},"sans"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'Graphik'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'sans-serif'"),e("span",{style:{color:"#858585"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#E0A569"}},"serif"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'Merriweather'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'serif'"),e("span",{style:{color:"#858585"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"extend"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#E0A569"}},"borderRadius"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#C98A7D"}},"'4xl'"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'2rem'"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"plugins"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"require"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'@tailwindcss/forms'"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"module"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"exports"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"content"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'./src/**/*.{html,js}'"),e("span",{style:{color:"#8E8F8B"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"theme"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"colors"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B56959"}},"'blue'"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'#1fb6ff'"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B56959"}},"'purple'"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'#7e5bef'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"fontFamily"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B58451"}},"sans"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'Graphik'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'sans-serif'"),e("span",{style:{color:"#8E8F8B"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B58451"}},"serif"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'Merriweather'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'serif'"),e("span",{style:{color:"#8E8F8B"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"extend"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B58451"}},"borderRadius"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B56959"}},"'4xl'"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'2rem'"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"plugins"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"require"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'@tailwindcss/forms'"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),z_={__name:"6",setup(t){const n={hide:!1,srcSequence:"./pages/AT_tw_config.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[T_,$_,j(o,te({},{ranges:["1,21","2","3-17","18-20"]}),{default:$(()=>[O_]),_:1},16)]),_:1},16)}}},P_=e("h1",null,"Talwind CSS plugins",-1),L_=e("ul",null,[e("li",null,[e("span",{class:"text-yellow-600"},"Existuje n\u011Bkolik ofici\xE1ln\xEDch plugin\u016F:"),e("br")])],-1),M_=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"module"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"exports"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"plugins"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"require"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'@tailwindcss/typography'"),e("span",{style:{color:"#858585"}},"),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"require"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'@tailwindcss/forms'"),e("span",{style:{color:"#858585"}},"),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"require"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'@tailwindcss/line-clamp'"),e("span",{style:{color:"#858585"}},"),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"require"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'@tailwindcss/aspect-ratio'"),e("span",{style:{color:"#858585"}},"),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"module"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"exports"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"plugins"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"require"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'@tailwindcss/typography'"),e("span",{style:{color:"#8E8F8B"}},"),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"require"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'@tailwindcss/forms'"),e("span",{style:{color:"#8E8F8B"}},"),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"require"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'@tailwindcss/line-clamp'"),e("span",{style:{color:"#8E8F8B"}},"),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"require"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'@tailwindcss/aspect-ratio'"),e("span",{style:{color:"#8E8F8B"}},"),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),N_=e("br",null,null,-1),I_=e("ul",null,[e("li",null,[e("p",null,[e("span",{class:"text-yellow-600"},[p("Plugin je t\u0159eba nainstalovat pomoc\xED npm install nap\u0159. "),e("kbd",null,"npm install -D @tailwindcss/forms")]),e("br")])]),e("li",null,[e("p",null,[e("span",{class:"text-yellow-600"},[p("A p\u0159idat do plugins v"),e("kbd",null,"tailwind.config.cjs")]),e("br")])])],-1),R_=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"module"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"exports"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"plugins"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"require"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'@tailwindcss/forms'"),e("span",{style:{color:"#858585"}},"),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"module"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"exports"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"plugins"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"require"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'@tailwindcss/forms'"),e("span",{style:{color:"#8E8F8B"}},"),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),V_={__name:"7",setup(t){const n={hide:!1,srcSequence:"./pages/AT_tw_plugins.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[P_,L_,j(o,te({},{ranges:[""]}),{default:$(()=>[M_]),_:1},16),N_,I_,j(o,te({},{ranges:["0","1-4"]}),{default:$(()=>[R_]),_:1},16)]),_:1},16)}}},H_=e("h1",null,"Vlastn\xED nastaven\xED styl\u016F",-1),q_=e("ul",null,[e("li",null,[e("span",{class:"text-yellow-600"},"Zm\u011Bny theme v tailwind.config.cjs:"),e("br")])],-1),U_=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},"theme"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"screens"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#A1B567"}},"lg"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'976px'"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#A1B567"}},"xl"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'1440px'"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#6C7834"}},"theme"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"screens"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#6C7834"}},"lg"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'976px'"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#6C7834"}},"xl"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'1440px'"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),G_=e("br",null,null,-1),W_=e("ul",null,[e("li",null,[e("span",{class:"text-yellow-600"},"Pou\u017Eit\xED arbitrary values:"),e("br")])],-1),K_=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"top-[117px]"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"top-[117px]"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Y_=e("br",null,null,-1),X_=e("ul",null,[e("li",null,[e("span",{class:"text-yellow-600"},"Pou\u017Eit\xED arbitrary properties:"),e("br")])],-1),Z_=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"[mask-type:luminance]"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"[mask-type:luminance]"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),J_={__name:"8",setup(t){const n={hide:!1,srcSequence:"./pages/AT_tw_custom-styles.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[H_,q_,j(o,te({},{ranges:["0","2-5","0"]}),{default:$(()=>[U_]),_:1},16),G_,W_,j(o,te({},{ranges:["0","1","0"]}),{default:$(()=>[K_]),_:1},16),Y_,X_,j(o,te({},{ranges:["0","1"]}),{default:$(()=>[Z_]),_:1},16)]),_:1},16)}}},Q_=e("h1",null,"Vlastn\xED nastaven\xED styl\u016F",-1),eb=e("ul",null,[e("li",null,[e("span",{class:"text-yellow-600"},"P\u0159id\xE1n\xED base styl\u016F pomoc\xED @layer v CSS:"),e("br")])],-1),tb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"@"),e("span",{style:{color:"#4D9375"}},"tailwind"),e("span",{style:{color:"#DBD7CA"}}," base"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"@"),e("span",{style:{color:"#4D9375"}},"tailwind"),e("span",{style:{color:"#DBD7CA"}}," components"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"@"),e("span",{style:{color:"#4D9375"}},"tailwind"),e("span",{style:{color:"#DBD7CA"}}," utilities"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"@"),e("span",{style:{color:"#4D9375"}},"layer"),e("span",{style:{color:"#DBD7CA"}}," base "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    @"),e("span",{style:{color:"#E0A569"}},"apply"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"text-"),e("span",{style:{color:"#DBD7CA"}},"2"),e("span",{style:{color:"#E0A569"}},"xl"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"@"),e("span",{style:{color:"#1C6B48"}},"tailwind"),e("span",{style:{color:"#393A34"}}," base"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"@"),e("span",{style:{color:"#1C6B48"}},"tailwind"),e("span",{style:{color:"#393A34"}}," components"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"@"),e("span",{style:{color:"#1C6B48"}},"tailwind"),e("span",{style:{color:"#393A34"}}," utilities"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"@"),e("span",{style:{color:"#1C6B48"}},"layer"),e("span",{style:{color:"#393A34"}}," base "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    @"),e("span",{style:{color:"#B58451"}},"apply"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"text-"),e("span",{style:{color:"#393A34"}},"2"),e("span",{style:{color:"#B58451"}},"xl"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),nb=e("br",null,null,-1),sb=e("ul",null,[e("li",null,[e("span",{class:"text-yellow-600"},"P\u0159id\xE1n\xED t\u0159\xEDd ke komponent\xE1m nebo vlastn\xEDch utilities pomoc\xED @layer v CSS:"),e("br")])],-1),lb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"@"),e("span",{style:{color:"#4D9375"}},"layer"),e("span",{style:{color:"#DBD7CA"}}," components "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"card"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"background-color"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," theme("),e("span",{style:{color:"#C98A7D"}},"'colors.white'"),e("span",{style:{color:"#DBD7CA"}},")"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"@"),e("span",{style:{color:"#1C6B48"}},"layer"),e("span",{style:{color:"#393A34"}}," components "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"card"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"background-color"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," theme("),e("span",{style:{color:"#B56959"}},"'colors.white'"),e("span",{style:{color:"#393A34"}},")"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ob=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"card rounded-none"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"card rounded-none"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),rb={__name:"9",setup(t){const n={hide:!1,srcSequence:"./pages/AT_tw_custom-styles2.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[Q_,eb,j(o,te({},{ranges:["0","5-9","0"]}),{default:$(()=>[tb]),_:1},16),nb,sb,j(o,te({},{ranges:["0","1-5","0"]}),{default:$(()=>[lb]),_:1},16),j(o,te({},{ranges:["0","1"]}),{default:$(()=>[ob]),_:1},16)]),_:1},16)}}},ab=e("h1",null,"Pseudo-classes & pseudo-elements",-1),ib=e("ul",null,[e("li",null,[e("span",{class:"text-yellow-600"},"Stylov\xE1n\xED element\u016F pomoc\xED pseudot\u0159\xEDd jako hover, visible, first (first-child), stav\u016F formul\xE1\u0159e (invalid) apod."),e("br")])],-1),cb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..."'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  Save changes")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..."'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  Save changes")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),pb=e("br",null,null,-1),ub=e("ul",null,[e("li",null,[e("span",{class:"text-yellow-600"},"Stylov\xE1n\xED pseudo-element\u016F ::before a ::after :"),e("br")])],-1),db=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"label"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"block"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"span"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},`"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"`),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    Email")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"span"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"input"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"type"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"email"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"name"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"email"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"placeholder"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"you@example.com"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"label"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"label"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"block"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"span"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},`"after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"`),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    Email")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"span"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"input"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"type"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"email"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"name"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"email"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"placeholder"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"you@example.com"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"label"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),fb=e("br",null,null,-1),yb=e("ul",null,[e("li",null,[e("span",{class:"text-yellow-600"},"Podm\xEDn\u011Bn\xE9 stylov\xE1n\xED pomoc\xED modifik\xE1tor\u016F checked, disabled, hidden apod."),e("br")])],-1),mb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"aria-checked"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"true"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"bg-gray-600 aria-checked:bg-sky-700"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"aria-checked"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"true"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"bg-gray-600 aria-checked:bg-sky-700"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),hb={__name:"10",setup(t){const n={hide:!1,srcSequence:"./pages/AT_tw_modifiers.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[ab,ib,j(o,te({},{ranges:["0","1-4","0"]}),{default:$(()=>[cb]),_:1},16),pb,ub,j(o,te({},{ranges:["0","2-4","0"]}),{default:$(()=>[db]),_:1},16),fb,yb,j(o,te({},{ranges:["0","1"]}),{default:$(()=>[mb]),_:1},16)]),_:1},16)}}},gb=e("h1",null,"Stylov\xE1n\xED podle rodi\u010De nebo sourozence",-1),vb=e("ul",null,[e("li",null,[e("span",{class:"text-yellow-600"},"Podle rodi\u010De"),p(" - ozna\u010Den\xEDm rodi\u010De pomoc\xED "),e("kbd",null,"group"),p(" a pou\u017Eit\xED "),e("kbd",null,"group-*"),p(" k nastylov\xE1n\xED c\xEDlov\xE9ho elementu "),e("br")])],-1),_b=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"a"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"href"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"#"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"flex items-center space-x-3"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"svg"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"h-6 w-6 stroke-sky-500 group-hover:stroke-white"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"fill"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"none"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"viewBox"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"0 0 24 24"'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#758575"}},"<!-- ... -->"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"svg"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"h3"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"text-slate-900 group-hover:text-white text-sm font-semibold"'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"New project"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"h3"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"text-slate-500 group-hover:text-white text-sm"'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Create a new project from a variety of starting templates."),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"a"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"a"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"href"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"#"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"flex items-center space-x-3"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"svg"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"h-6 w-6 stroke-sky-500 group-hover:stroke-white"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"fill"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"none"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"viewBox"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"0 0 24 24"'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#A0ADA0"}},"<!-- ... -->"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"svg"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"h3"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"text-slate-900 group-hover:text-white text-sm font-semibold"'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"New project"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"h3"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"text-slate-500 group-hover:text-white text-sm"'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Create a new project from a variety of starting templates."),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"a"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),bb=e("br",null,null,-1),kb=e("ul",null,[e("li",null,[e("span",{class:"text-yellow-600"},"Podle sourozence"),p(" - ozna\u010Den\xEDm sourozence pomoc\xED "),e("kbd",null,"peer"),p(" a pou\u017Eit\xED "),e("kbd",null,"peer-*"),p(" k nastylov\xE1n\xED c\xEDlov\xE9ho elementu "),e("br")])],-1),wb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"form"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"label"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"block"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"span"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"block text-sm font-medium text-slate-700"'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Email"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"span"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"input"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"type"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"email"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"peer ..."'),e("span",{style:{color:"#858585"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"mt-2 invisible peer-invalid:visible text-pink-600 text-sm"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      Please provide a valid email address.")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"label"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"form"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"form"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"label"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"block"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"span"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"block text-sm font-medium text-slate-700"'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Email"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"span"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"input"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"type"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"email"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"peer ..."'),e("span",{style:{color:"#8E8F8B"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"mt-2 invisible peer-invalid:visible text-pink-600 text-sm"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      Please provide a valid email address.")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"label"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"form"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),xb={__name:"11",setup(t){const n={hide:!1,srcSequence:"./pages/AT_tw_associatedstyles.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[gb,vb,j(o,te({},{ranges:["0","1,3-6","0"]}),{default:$(()=>[_b]),_:1},16),bb,kb,j(o,te({},{ranges:["0","4-5"]}),{default:$(()=>[wb]),_:1},16)]),_:1},16)}}},Ab=e("h1",null,"Container",-1),Bb=e("p",null,[p("T\u0159\xEDda\xA0"),e("kbd",null,"container"),p(" nastavuje\xA0"),e("kbd",null,"max-width"),p(" element tak, aby odpov\xEDdal\xA0"),e("kbd",null,"min-width"),p(" aktu\xE1ln\xEDmu break-pointu (jako jsme zvykl\xED u klasick\xE9ho n\xE1vrhu).")],-1),Eb=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"T\u0159\xEDda"),e("th",null,"Break point"),e("th",null,"Vlastnosti")])]),e("tbody",null,[e("tr",null,[e("td",null,"container"),e("td",null,"\u017D\xE1dn\xFD"),e("td",null,"width: 100%;")]),e("tr",null,[e("td"),e("td",null,"sm\xA0(640px)"),e("td",null,"max-width: 640px;")]),e("tr",null,[e("td"),e("td",null,"md\xA0(768px)"),e("td",null,"max-width: 768px;")]),e("tr",null,[e("td"),e("td",null,"lg\xA0(1024px)"),e("td",null,"max-width: 1024px;")]),e("tr",null,[e("td"),e("td",null,"xl\xA0(1280px)"),e("td",null,"max-width: 1280px;")]),e("tr",null,[e("td"),e("td",null,"2xl\xA0(1536px)"),e("td",null,"max-width: 1536px;")])])],-1),Db=e("p",null,[p("Lze nap\u0159\xEDklad p\u0159idat "),e("kbd",null,"mx-auto"),p(" pro vycentrov\xE1n\xED obsahu, p\u0159\xEDpadn\u011B nastavit vycentrov\xE1n\xED p\u0159\xEDmo v configu.")],-1),Cb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"container mx-auto px-4"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#758575"}},"<!-- ... -->")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"container mx-auto px-4"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#A0ADA0"}},"<!-- ... -->")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Sb={__name:"12",setup(t){const n={srcSequence:"./pages/NL_layout_container.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[Ab,Bb,Eb,Db,j(o,te({},{ranges:[""]}),{default:$(()=>[Cb]),_:1},16)]),_:1},16)}}},Fb=e("h1",null,"Position",-1),jb=e("br",null,null,-1),Tb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"relative h-32 w-32 ..."'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"absolute left-0 top-0 h-16 w-16 ..."'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"01"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"relative h-32 w-32 ..."'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"absolute left-0 top-0 h-16 w-16 ..."'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"01"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),$b=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"relative h-32 w-32 ..."'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"absolute inset-x-0 top-0 h-16 ..."'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"02"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"relative h-32 w-32 ..."'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"absolute inset-x-0 top-0 h-16 ..."'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"02"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Ob=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"relative h-32 w-32 ..."'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"absolute top-0 right-0 h-16 w-16 ..."'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"03"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"relative h-32 w-32 ..."'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"absolute top-0 right-0 h-16 w-16 ..."'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"03"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),zb={__name:"13",setup(t){const n={srcSequence:"./pages/NL_layout_position1.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[Fb,jb,ue('<img src="assets/position1.jpeg" class="w-2/3 mx-auto mb-10">'),j(o,te({},{ranges:[""]}),{default:$(()=>[Tb]),_:1},16),j(o,te({},{ranges:[""]}),{default:$(()=>[$b]),_:1},16),j(o,te({},{ranges:[""]}),{default:$(()=>[Ob]),_:1},16)]),_:1},16)}}},Pb=e("br",null,null,-1),Lb=e("br",null,null,-1),Mb=e("br",null,null,-1),Nb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"relative h-32 w-32 ..."'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"absolute inset-y-0 left-0 w-16 ..."'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"04"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"relative h-32 w-32 ..."'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"absolute inset-y-0 left-0 w-16 ..."'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"04"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Ib=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"relative h-32 w-32 ..."'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"absolute inset-0 ..."'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"05"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"relative h-32 w-32 ..."'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"absolute inset-0 ..."'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"05"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Rb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"relative h-32 w-32 ..."'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"absolute inset-y-0 right-0 w-16 ..."'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"06"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"relative h-32 w-32 ..."'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"absolute inset-y-0 right-0 w-16 ..."'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"06"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Vb={__name:"14",setup(t){const n={srcSequence:"./pages/NL_layout_position2.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[Pb,Lb,Mb,ue('<img src="assets/position2.jpeg" class="w-2/3 mx-auto mb-10">'),j(o,te({},{ranges:[""]}),{default:$(()=>[Nb]),_:1},16),j(o,te({},{ranges:[""]}),{default:$(()=>[Ib]),_:1},16),j(o,te({},{ranges:[""]}),{default:$(()=>[Rb]),_:1},16)]),_:1},16)}}},Hb=e("br",null,null,-1),qb=e("br",null,null,-1),Ub=e("br",null,null,-1),Gb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"relative h-32 w-32 ..."'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"absolute bottom-0 left-0 h-16 w-16 ..."'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"07"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"relative h-32 w-32 ..."'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"absolute bottom-0 left-0 h-16 w-16 ..."'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"07"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Wb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"relative h-32 w-32 ..."'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"absolute inset-x-0 bottom-0 h-16 ..."'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"08"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"relative h-32 w-32 ..."'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"absolute inset-x-0 bottom-0 h-16 ..."'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"08"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Kb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"relative h-32 w-32 ..."'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"absolute bottom-0 right-0 h-16 w-16 ..."'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"09"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"relative h-32 w-32 ..."'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"absolute bottom-0 right-0 h-16 w-16 ..."'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"09"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Yb={__name:"15",setup(t){const n={srcSequence:"./pages/NL_layout_position3.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[Hb,qb,Ub,ue(' <img src="assets/position3.jpeg" class="w-2/3 mx-auto mb-10"> '),j(o,te({},{ranges:[""]}),{default:$(()=>[Gb]),_:1},16),j(o,te({},{ranges:[""]}),{default:$(()=>[Wb]),_:1},16),j(o,te({},{ranges:[""]}),{default:$(()=>[Kb]),_:1},16)]),_:1},16)}}},Xb=e("h1",null,"Responzivn\xED design",-1),Zb=e("br",null,null,-1),Jb=e("br",null,null,-1),Qb=e("p",null,[e("span",{class:"text-yellow-600"},"sm"),p(" = @media (min-width: 640px) "),e("br"),e("span",{class:"text-yellow-600"},"md"),p(" = @media (min-width: 768px) "),e("br"),e("span",{class:"text-yellow-600"}," lg"),p(" = @media (min-width: 1024px) "),e("br"),e("span",{class:"text-yellow-600"}," xl"),p(" = @media (min-width: 1280px) "),e("br"),e("span",{class:"text-yellow-600"},"2xl"),p(" = @media (min-width: 1536px) "),e("br"),e("br")],-1),ek=e("p",null,[p("Tailwind t\u0159\xEDdy jsou responsivn\xED a pou\u017E\xEDvaj\xED mobile-first p\u0159\xEDstup, "),e("span",{class:"text-yellow-600"},[p("nepou\u017E\xEDvejte tedy breakpoint "),e("kbd",null,"sm:"),p(" pro stylov\xE1n\xED mobiln\xED obrazovky")]),p(".")],-1),tk=e("br",null,null,-1),nk=e("br",null,null,-1),sk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"img"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"w-16 md:w-32 lg:w-48"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"..."'),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"img"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"w-16 md:w-32 lg:w-48"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"..."'),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),lk={__name:"16",setup(t){const n={hide:!1,srcSequence:"./pages/AT_tw_responsivity.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[Xb,Zb,p(" V Tailwind CSS je 5 p\u0159eddefinovan\xFDch breakpoint\u016F pro responsivn\xED design: "),Jb,Qb,ek,tk,p(" P\u0159\xEDklad pou\u017Eit\xED breakpointu: "),nk,j(o,te({},{ranges:["0","1-2"]}),{default:$(()=>[sk]),_:1},16)]),_:1},16)}}},ok=e("h1",null,"P\u0159izp\u016Fsoben\xED breakpoint\u016F",-1),rk=e("ul",null,[e("li",null,[e("span",{class:"text-yellow-600"},"Breakpointy lze upravit, p\u0159\xEDpadn\u011B p\u0159idat v theme v tailwind.config.cjs:"),e("br")])],-1),ak=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},"theme"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"screens"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#A1B567"}},"lg"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'976px'"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#A1B567"}},"xl"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'1440px'"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#6C7834"}},"theme"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"screens"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#6C7834"}},"lg"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'976px'"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#6C7834"}},"xl"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'1440px'"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ik=e("br",null,null,-1),ck=e("ul",null,[e("li",null,[e("span",{class:"text-yellow-600"},"Pou\u017Eit\xED arbitrary values:"),e("br")])],-1),pk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"min-[320px]:text-center max-[600px]:bg-sky-300"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"min-[320px]:text-center max-[600px]:bg-sky-300"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),uk={__name:"17",setup(t){const n={hide:!1,srcSequence:"./pages/AT_tw_customresponsivity.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[ok,rk,j(o,te({},{ranges:["0","2-5"]}),{default:$(()=>[ak]),_:1},16),ik,ck,j(o,te({},{ranges:["0","1","0"]}),{default:$(()=>[pk]),_:1},16)]),_:1},16)}}},dk=e("h1",null,"Recyklace styl\u016F",-1),fk=e("br",null,null,-1),yk=e("span",{class:"text-sm"},"Aby se zamezilo neust\xE1l\xE9mu opakov\xE1n\xED kousk\u016F k\xF3du se stejn\xFDmi styly, lze pou\u017E\xEDt n\u011Bkolik zp\u016Fsob\u016F:",-1),mk=e("br",null,null,-1),hk=e("ul",null,[e("li",null,[e("span",{class:"text-sm text-yellow-600"},"Cykly, mapov\xE1n\xED, vyjmut\xED k\xF3du jako komponenty"),e("br")])],-1),gk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"mt-3 flex -space-x-2 overflow-hidden"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    {#each contributors as user}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"img"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"inline-block h-12 w-12 rounded-full ring-2 ring-white"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"{user.avatarUrl}"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"alt"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"{user.handle}"'),e("span",{style:{color:"#858585"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    {/each}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"mt-3 flex -space-x-2 overflow-hidden"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    {#each contributors as user}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"img"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"inline-block h-12 w-12 rounded-full ring-2 ring-white"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"{user.avatarUrl}"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"alt"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"{user.handle}"'),e("span",{style:{color:"#8E8F8B"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    {/each}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),vk=e("ul",null,[e("li",null,[e("span",{class:"text-sm text-yellow-600"},"Pou\u017Eit\xED t\u0159\xEDdy pomoc\xED @apply v tailwind.config.cjs"),e("br")])],-1),_k=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"@"),e("span",{style:{color:"#4D9375"}},"layer"),e("span",{style:{color:"#DBD7CA"}}," components "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"btn-primary"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    @"),e("span",{style:{color:"#E0A569"}},"apply"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"py-"),e("span",{style:{color:"#DBD7CA"}},"2 "),e("span",{style:{color:"#E0A569"}},"px-"),e("span",{style:{color:"#DBD7CA"}},"4 "),e("span",{style:{color:"#E0A569"}},"bg-blue-"),e("span",{style:{color:"#DBD7CA"}},"500 "),e("span",{style:{color:"#E0A569"}},"text-white"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"font-semibold"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"rounded-lg"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"shadow-md"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"hover"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}},"bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"@"),e("span",{style:{color:"#1C6B48"}},"layer"),e("span",{style:{color:"#393A34"}}," components "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"btn-primary"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    @"),e("span",{style:{color:"#B58451"}},"apply"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"py-"),e("span",{style:{color:"#393A34"}},"2 "),e("span",{style:{color:"#B58451"}},"px-"),e("span",{style:{color:"#393A34"}},"4 "),e("span",{style:{color:"#B58451"}},"bg-blue-"),e("span",{style:{color:"#393A34"}},"500 "),e("span",{style:{color:"#B58451"}},"text-white"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"font-semibold"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"rounded-lg"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"shadow-md"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"hover"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}},"bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),bk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"btn-primary"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  Save changes")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"button"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"btn-primary"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  Save changes")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"button"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),kk={__name:"18",setup(t){const n={hide:!1,srcSequence:"./pages/AT_tw_reusingstyles.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[dk,fk,yk,mk,hk,j(o,te({},{ranges:["0","2-4","0"]}),{default:$(()=>[gk]),_:1},16),vk,j(o,te({},{ranges:["0","1-5","0"]}),{default:$(()=>[_k]),_:1},16),j(o,te({},{ranges:["0","1-3"]}),{default:$(()=>[bk]),_:1},16)]),_:1},16)}}};const wk=t=>(Mr("data-v-14873b41"),t=t(),Nr(),t),xk=wk(()=>e("h1",null,"2. Grid",-1)),Ak={__name:"19",setup(t){const n={layout:"center"};return M(K),(s,l)=>(B(),W(mu,ie(oe(n)),{default:$(()=>[xk]),_:1},16))}},Bk=Qs(Ak,[["__scopeId","data-v-14873b41"]]),Ek=e("h1",null,"CSS Grid a jeho v\xFDhody",-1),Dk=e("br",null,null,-1),Ck=e("p",null,"CSS Grid je v\xFDkonn\xFD n\xE1stroj, kter\xFD umo\u017E\u0148uje vytv\xE1\u0159et na webu dvourozm\u011Brn\xE1 rozvr\u017Een\xED pro sloupce a \u0159\xE1dky.",-1),Sk=e("br",null,null,-1),Fk=e("p",{class:"text-2xl mt-12 text-gray-400 font-semibold"},"V\xFDhody gridu:",-1),jk=e("ul",null,[e("li",null,[p("\u{1F4DD} "),e("span",{class:"text-yellow-600"},[e("strong",null,"Flexibilita")]),p(" - CSS Grid je velmi flexibiln\xED a pou\u017Eiteln\xFD na spoustu situac\xED.")]),e("li",null,[p("\u{1F3A8} "),e("span",{class:"text-yellow-600"},[e("strong",null,"Dvourozm\u011Brnost")]),p(" - CSS Grid snad\u0148uje vytv\xE1\u0159en\xED dvourozm\u011Brn\xFDch rozvr\u017Een\xED. Obecn\u011B vzato, CSS Grid Layout n\xE1m pom\xE1h\xE1 vytv\xE1\u0159et slo\u017Eit\u011Bj\u0161\xED rozvr\u017Een\xED pomoc\xED sloupc\u016F i \u0159\xE1dk\u016F.")]),e("li",null,[p("\u{1F9D1}\u200D\u{1F4BB} "),e("span",{class:"text-yellow-600"},[e("strong",null,"'Developer Friendly'")]),p(" - pro zm\u011Bnu pozice polo\u017Eky pomoc\xED m\u0159\xED\u017Eky CSS nemus\xEDte m\u011Bnit HTML k\xF3d.")]),e("li",null,[p("\u{1F6E0} "),e("span",{class:"text-yellow-600"},[e("strong",null,"Jednoduchost")]),p(" - CSS Grid se tak\xE9 snadno pou\u017E\xEDv\xE1 a je podporov\xE1n v\u011Bt\u0161inou webov\xFDch prohl\xED\u017Ee\u010D\u016F.")])],-1),Tk={__name:"20",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_benefits.md"};return M(K),(s,l)=>(B(),W(me,ie(oe(n)),{default:$(()=>[Ek,Dk,Ck,Sk,Fk,jk]),_:1},16))}},$k=e("h1",null,"Vytvo\u0159en\xED gridu",-1),Ok=e("br",null,null,-1),zk=e("p",null,[p("Chcete-li nastavit grid, mus\xEDte m\xEDt "),e("span",{class:"text-yellow-600"},[e("em",null,"grid container")]),p(" i "),e("span",{class:"text-yellow-600"},[e("em",null,"grid items")]),p(". Grid container bude nad\u0159azen\xFDm prvkem, kter\xFD obsahuje grid items jako vno\u0159en\xE9 polo\u017Eky a aplikuje na n\u011B zast\u0159e\u0161uj\xEDc\xED styly a positioning.")],-1),Pk=e("p",null,[p("Chcete-li zm\u011Bnit prvek HTML na kontejner m\u0159\xED\u017Eky, mus\xEDte nastavit vlastnost "),e("kbd",null,"display"),p(" prvku na jednu ze dvou hodnot:")],-1),Lk=e("ul",null,[e("li",null,[e("kbd",null,"grid"),p("\xA0\u2013 pro m\u0159\xED\u017Eku na \xFArovni bloku.")]),e("li",null,[e("kbd",null,"inline-grid"),p("\xA0\u2013 pro inline m\u0159\xED\u017Eku (podobn\u011B jako inline-block).")])],-1),Mk={__name:"21",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_create.md"};return M(K),(s,l)=>(B(),W(me,ie(oe(n)),{default:$(()=>[$k,Ok,zk,Pk,Lk]),_:1},16))}},Nk=e("h1",null,"Vytv\xE1\u0159en\xED sloupc\u016F a \u0159\xE1dk\u016F, grid-template",-1),Ik=e("p",{class:"text-sm"},"Ve v\xFDchoz\xEDm nastaven\xED obsahuj\xED m\u0159\xED\u017Eky pouze jeden sloupec. Pokud byste za\u010Dali p\u0159id\xE1vat polo\u017Eky, ka\u017Ed\xE1 polo\u017Eka by byla um\xEDst\u011Bna na nov\xFD \u0159\xE1dek (a to by nebyl grid, \u017Ee jo!). Abychom to zm\u011Bnili, mus\xEDme explicitn\u011B definovat po\u010Det \u0159\xE1dk\u016F a sloupc\u016F v na\u0161\xED m\u0159\xED\u017Ece.",-1),Rk=e("p",null,[p("Sloupce na\u0161\xED m\u0159\xED\u017Eky m\u016F\u017Eeme definovat pomoc\xED vlastnosti CSS "),e("kbd",null,"grid-template-columns"),p(". K ur\u010Den\xED po\u010Dtu a velikosti \u0159\xE1dk\u016F pou\u017Eijeme vlastnost "),e("kbd",null,"grid-template-rows"),p(".")],-1),Vk=e("p",null,[p("Zkr\xE1cen\xE1 vlastnost "),e("kbd",null,"grid-template"),p(" m\u016F\u017Ee nahradit p\u0159edchoz\xED dv\u011B CSS vlastnosti:")],-1),Hk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"grid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#E0A569"}},"display"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"grid"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#E0A569"}},"width"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1000"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#E0A569"}},"height"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"400"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#E0A569"}},"grid-template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"200"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#DBD7CA"}}," / "),e("span",{style:{color:"#6394BF"}},"20"),e("span",{style:{color:"#CB7676"}},"%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#CB7676"}},"%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"70"),e("span",{style:{color:"#CB7676"}},"%"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"/* fraction: */"),e("span",{style:{color:"#DBD7CA"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"grid-template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#CB7676"}},"fr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#CB7676"}},"fr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#CB7676"}},"fr"),e("span",{style:{color:"#DBD7CA"}}," / "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#CB7676"}},"fr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#CB7676"}},"fr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#CB7676"}},"fr"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"grid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#B58451"}},"display"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"grid"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#B58451"}},"width"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1000"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#B58451"}},"height"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"400"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#B58451"}},"grid-template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"200"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#393A34"}}," / "),e("span",{style:{color:"#296AA3"}},"20"),e("span",{style:{color:"#AB5959"}},"%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#AB5959"}},"%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"70"),e("span",{style:{color:"#AB5959"}},"%"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"/* fraction: */"),e("span",{style:{color:"#393A34"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"grid-template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#AB5959"}},"fr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#AB5959"}},"fr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#AB5959"}},"fr"),e("span",{style:{color:"#393A34"}}," / "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#AB5959"}},"fr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#AB5959"}},"fr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#AB5959"}},"fr"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),qk=e("p",null,[e("kbd",null,"fr"),p("\xA0je mo\u017En\xE9 pou\u017E\xEDt i s jin\xFDmi jednotkami. Kdy\u017E k tomu dojde, ka\u017Ed\xE9 \u201Efr\u201C\xA0p\u0159edstavuje zlomek\xA0"),e("em",null,"dostupn\xE9ho"),p("\xA0prostoru.")],-1),Uk={__name:"22",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_grid-template.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[Nk,Ik,Rk,Vk,j(o,te({},{ranges:["1-6","2","5-6","7-8"]}),{default:$(()=>[Hk]),_:1},16),qk]),_:1},16)}}},Gk=e("h1",null,"Repeat()",-1),Wk=e("p",null,"Vlastnosti, kter\xE9 definuj\xED po\u010Det \u0159\xE1dk\u016F a sloupc\u016F v gridu, mohou m\xEDt funkci jako hodnotu.",-1),Kk=e("p",null,[p("Jednou z t\u011Bchto funkc\xED je "),e("kbd",null,"repeat()"),p(". Funkce "),e("kbd",null,"repeat()"),p(" byla vytvo\u0159ena speci\xE1ln\u011B pro CSS Grid.")],-1),Yk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"grid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#E0A569"}},"display"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"grid"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#E0A569"}},"width"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"300"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#E0A569"}},"grid-template-columns"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"repeat"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"grid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#B58451"}},"display"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"grid"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#B58451"}},"width"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"300"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#B58451"}},"grid-template-columns"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"repeat"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Xk=e("p",null,[p("Funkce "),e("kbd",null,"repeat()"),p(" bude duplikovat specifikace pro \u0159\xE1dky nebo sloupce dan\xFD po\u010Det opakov\xE1n\xED. Ve v\xFD\u0161e uveden\xE9m p\u0159\xEDkladu pou\u017Eit\xED funkce "),e("kbd",null,"repeat()"),p(" zp\u016Fsob\xED, \u017Ee layout bude m\xEDt t\u0159i sloupce, ka\u017Ed\xFD o \u0161\xED\u0159ce 100 pixel\u016F.")],-1),Zk=e("p",null,"Je to vlastn\u011B stejn\xE9 jako n\xE1sleduj\xEDc\xED k\xF3d:",-1),Jk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"grid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#E0A569"}},"display"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"grid"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#E0A569"}},"width"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"300"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#E0A569"}},"grid-template-columns"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"grid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#B58451"}},"display"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"grid"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#B58451"}},"width"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"300"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#B58451"}},"grid-template-columns"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Qk={__name:"23",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_repeat1.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[Gk,Wk,Kk,j(o,te({},{ranges:["0","4","0"]}),{default:$(()=>[Yk]),_:1},16),Xk,Zk,j(o,te({},{ranges:["0","4"]}),{default:$(()=>[Jk]),_:1},16)]),_:1},16)}}},ew=e("h1",null,null,-1),tw=e("br",null,null,-1),nw=e("br",null,null,-1),sw=e("kbd",null,"repeat()",-1),lw=e("kbd",null,"fr",-1),ow=e("kbd",null,"repeat(5, 1fr)",-1),rw=e("p",null,[p("A kone\u010Dn\u011B, druh\xFD parametr\xA0"),e("kbd",null,"repeat()"),p("\xA0m\u016F\u017Ee m\xEDt v\xEDce hodnot:")],-1),aw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"grid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#E0A569"}},"display"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"grid"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#E0A569"}},"width"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"300"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#E0A569"}},"grid-template-columns"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"repeat"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"20"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"50"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"grid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#B58451"}},"display"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"grid"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#B58451"}},"width"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"300"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#B58451"}},"grid-template-columns"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"repeat"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"20"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"50"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),iw=e("p",{class:"italic text-sm"},"Tento k\xF3d vytvo\u0159\xED \u010Dty\u0159i sloupce, kde prvn\xED a t\u0159et\xED sloupec bude m\xEDt \u0161\xED\u0159ku 20 pixel\u016F a druh\xFD a \u010Dtvrt\xFD bude \u0161\xED\u0159ku 50 pixel\u016F.",-1),cw={__name:"24",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_repeat2.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[ew,tw,nw,p(" Funkce "),sw,p(" je zvl\xE1\u0161t\u011B u\u017Eite\u010Dn\xE1 s\xA0"),lw,p(". Nap\u0159\xEDklad\xA0"),ow,p("\xA0rozd\u011Bl\xED layout na p\u011Bt stejn\xFDch \u0159\xE1dk\u016F nebo sloupc\u016F. "),rw,j(o,te({},{ranges:["0","4"]}),{default:$(()=>[aw]),_:1},16),iw]),_:1},16)}}},pw=e("h1",null,"minmax()",-1),uw=e("p",{class:"text-sm"},"Dosud m\u011Bly v\u0161echny m\u0159\xED\u017Eky, se kter\xFDmi jsme pracovali, pevnou velikost. N\u011Bkdy v\u0161ak m\u016F\u017Eete cht\xEDt, aby se velikost m\u0159\xED\u017Eky zm\u011Bnila na z\xE1klad\u011B velikosti va\u0161eho webov\xE9ho prohl\xED\u017Ee\u010De.",-1),dw=e("p",null,"V t\u011Bchto situac\xEDch m\u016F\u017Eete cht\xEDt zabr\xE1nit tomu, aby byl \u0159\xE1dek nebo sloupec p\u0159\xEDli\u0161 velk\xFD nebo p\u0159\xEDli\u0161 mal\xFD. Pokud m\xE1te nap\u0159\xEDklad v m\u0159\xED\u017Ece obr\xE1zek o \u0161\xED\u0159ce 100 pixel\u016F, pravd\u011Bpodobn\u011B nechcete, aby jeho sloupec byl u\u017E\u0161\xED ne\u017E 100 pixel\u016F!",-1),fw=e("p",null,[p("Tento probl\xE9m n\xE1m m\u016F\u017Ee pomoci vy\u0159e\u0161it funkce "),e("kbd",null,"minmax()"),p(".")],-1),yw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"grid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0"),e("span",{style:{color:"#E0A569"}},"display"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"grid"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0"),e("span",{style:{color:"#E0A569"}},"grid-template-columns"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"minmax"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"500"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"grid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0"),e("span",{style:{color:"#B58451"}},"display"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"grid"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0"),e("span",{style:{color:"#B58451"}},"grid-template-columns"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"minmax"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"500"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),mw={__name:"25",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_minmax.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[pw,uw,dw,fw,j(o,te({},{ranges:["3"]}),{default:$(()=>[yw]),_:1},16)]),_:1},16)}}},hw=e("h1",null,"Tailwind & Grid",-1),gw=e("p",null,"\u2026 a t\xEDm se taky dost\xE1v\xE1m k Tailwindu!",-1),vw=e("p",null,"Tailwind ve sv\xE9m defaultn\xEDm nastaven\xED pro z\xE1kladn\xED layout pracuje s frakcemi, repeat() a minmax() funkc\xED, tak\u017Ee si to v\u0161echno vezmeme a p\u0159evedeme do Tailwindu:",-1),_w=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"grid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0"),e("span",{style:{color:"#E0A569"}},"display"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"grid"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0"),e("span",{style:{color:"#E0A569"}},"grid-template-columns"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"repeat"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"minmax"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#CB7676"}},"fr"),e("span",{style:{color:"#858585"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"grid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0"),e("span",{style:{color:"#B58451"}},"display"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"grid"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0"),e("span",{style:{color:"#B58451"}},"grid-template-columns"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"repeat"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"minmax"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#AB5959"}},"fr"),e("span",{style:{color:"#8E8F8B"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),bw=e("br",null,null,-1),kw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"grid grid-cols-1"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"01"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#758575"}},"<!-- ... -->")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"09"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"grid grid-cols-1"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"01"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#A0ADA0"}},"<!-- ... -->")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"09"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),ww={__name:"26",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_tailwind-grid1.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[hw,gw,vw,j(o,te({},{ranges:[""]}),{default:$(()=>[_w]),_:1},16),bw,j(o,te({},{ranges:[""]}),{default:$(()=>[kw]),_:1},16)]),_:1},16)}}};let xw=t=>crypto.getRandomValues(new Uint8Array(t)),Aw=(t,n,s)=>{let l=(2<<Math.log(t.length-1)/Math.LN2)-1,o=-~(1.6*l*n/t.length);return(r=n)=>{let a="";for(;;){let i=s(o),c=o;for(;c--;)if(a+=t[i[c]&l]||"",a.length===r)return a}}},Bw=(t,n=21)=>Aw(t,n,xw);const Ew=["width","height"],Dw=["id"],Cw=["fill"],Sw=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],Fw=Ae({__name:"Arrow",props:{x1:null,y1:null,x2:null,y2:null,width:null,color:null},setup(t){M(K);const s=Bw("abcedfghijklmn",10)();return(l,o)=>(B(),U("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+t.x1,+t.x2)+50,height:Math.max(+t.y1,+t.y2)+50},[e("defs",null,[e("marker",{id:x(s),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[e("polygon",{points:"0 0, 10 3.5, 0 7",fill:t.color||"currentColor"},null,8,Cw)],8,Dw)]),e("line",{x1:+t.x1,y1:+t.y1,x2:+t.x2,y2:+t.y2,stroke:t.color||"currentColor","stroke-width":t.width||2,"marker-end":`url(#${x(s)})`},null,8,Sw)],8,Ew))}}),jw=e("p",null,"Z\xE1kladn\xED nastaven\xED si, jak u\u017E \u0159\xEDkala Andrejka, m\u016F\u017Eete samoz\u0159ejm\u011B zm\u011Bnit v tailwind.config.cjs:",-1),Tw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"module"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"exports"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"theme"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"extend"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#E0A569"}},"gridTemplateColumns"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"// Simple 16 column grid ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#C98A7D"}},"'16'"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'repeat(16, minmax(0, 1fr))'"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"// Complex site-specific column configuration ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#C98A7D"}},"'footer'"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'200px minmax(900px, 1fr) 100px'"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"module"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"exports"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"theme"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"extend"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B58451"}},"gridTemplateColumns"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// Simple 16 column grid ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B56959"}},"'16'"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'repeat(16, minmax(0, 1fr))'"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// Complex site-specific column configuration ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B56959"}},"'footer'"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'200px minmax(900px, 1fr) 100px'"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),$w=e("p",null,"\u2026 p\u0159\xEDpadn\u011B vyu\u017E\xEDt arbitrary values v hranat\xFDch z\xE1vork\xE1ch:",-1),Ow=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"grid grid-cols-[200px_minmax(900px,_1fr)_100px]"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"<!-- ... -->")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"grid grid-cols-[200px_minmax(900px,_1fr)_100px]"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"<!-- ... -->")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),zw={__name:"27",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_tailwind-grid2.md"};return M(K),(s,l)=>{const o=Pe,r=Fw,a=zf("click");return B(),W(me,ie(oe(n)),{default:$(()=>[jw,j(o,te({},{ranges:["all","4-9","0"]}),{default:$(()=>[Tw]),_:1},16),$w,j(o,te({},{ranges:["0","1"]}),{default:$(()=>[Ow]),_:1},16),Zl(j(r,{x1:"600",y1:"530",x2:"400",y2:"440",color:"#666888",width:"2",arrowSize:"1"},null,512),[[a,3]])]),_:1},16)}}},Pw=e("h1",null,"Grid Items",-1),Lw=e("img",{src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0276a63a-42ff-4486-8f36-9060c90400af/css_grid_diagram_2.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221212T140534Z&X-Amz-Expires=86400&X-Amz-Signature=9eff607480d6245e4d7ddfc887ddc95a25c288675f3fe423dca22a922966c00e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22css_grid_diagram_2.svg%22&x-id=GetObject",width:"600",class:"mx-auto"},null,-1),Mw={__name:"28",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_multiple-row-items1.md"};return M(K),(s,l)=>(B(),W(me,ie(oe(n)),{default:$(()=>[Pw,Lw]),_:1},16))}},Nw=e("h1",null,"Multiple Row Items",-1),Iw=e("p",null,"Jak zajist\xEDme, aby jednotliv\xE9 grid items zab\xEDraly v\xEDce \u0159\xE1dk\u016F?",-1),Rw=e("p",null,[p("M\u016F\u017Eeme toho dos\xE1hnout pomoc\xED vlastnost\xED CSS "),e("kbd",null,"grid-row-start"),p("\xA0a\xA0"),e("kbd",null,"grid-row-end"),p(". D\u016Fle\u017Eit\xE9 je si uv\u011Bdomit, \u017Ee tentokr\xE1t nepou\u017E\xEDv\xE1me CSS na vn\u011Bj\u0161\xED "),e("span",{class:"text-yellow-500"},"grid container"),p("; p\u0159id\xE1v\xE1me CSS ke "),e("span",{class:"text-yellow-500"},"grid items"),p("!")],-1),Vw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"item"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#E0A569"}},"grid-row-start"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#E0A569"}},"grid-row-end"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"item"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#B58451"}},"grid-row-start"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#B58451"}},"grid-row-end"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Hw=e("p",{class:"italic text-xs"},[p("Ohrani\u010Den\xED \u0159\xE1dk\u016F a sloupc\u016F v gridu za\u010D\xEDnaj\xED na 1 a kon\u010D\xED na hodnot\u011B, kter\xE1 je o 1 v\u011Bt\u0161\xED ne\u017E po\u010Det \u0159\xE1dk\u016F nebo sloupc\u016F v gridu. Hodnota pro "),e("kbd",null,"grid-row-start"),p(" by m\u011Bla b\xFDt \u0159\xE1dkem, na kter\xE9m m\xE1 grid item za\u010D\xEDnat. Hodnota pro "),e("kbd",null,"grid-row-end"),p("\xA0by m\u011Bla b\xFDt o jednu v\u011Bt\u0161\xED ne\u017E \u0159\xE1dek, na kter\xE9m m\xE1 grid item kon\u010Dit.")],-1),qw=e("br",null,null,-1),Uw=e("kbd",null,"grid-row",-1),Gw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"item"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#E0A569"}},"grid-row"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}},"\xA0/ "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"item"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#B58451"}},"grid-row"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}},"\xA0/ "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Ww={__name:"29",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_multiple-row-items2.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[Nw,Iw,Rw,j(o,te({},{ranges:["all","0"]}),{default:$(()=>[Vw]),_:1},16),Hw,qw,p(" Jako zkratku pak m\u016F\u017Eeme pou\u017E\xEDt "),Uw,j(o,te({},{ranges:["0","all"]}),{default:$(()=>[Gw]),_:1},16)]),_:1},16)}}},Kw=e("h1",null,"Grid Column",-1),Yw=e("br",null,null,-1),Xw=e("kbd",null,"grid-column-start",-1),Zw=e("kbd",null,"grid-column-end",-1),Jw=e("kbd",null,"grid-column",-1),Qw=e("p",null,[p("P\u0159i pou\u017Eit\xED t\u011Bchto vlastnost\xED m\u016F\u017Eeme pou\u017E\xEDt kl\xED\u010Dov\xE9 slovo "),e("kbd",null,"span"),p(" k definov\xE1n\xED za\u010D\xE1tku nebo konce sloupce nebo \u0159\xE1dku vzhledem k jeho druh\xE9mu konci. Pod\xEDvejte se, jak se\xA0"),e("kbd",null,"span"),p("\xA0pou\u017E\xEDv\xE1 v\xA0k\xF3du n\xED\u017Ee:")],-1),e3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"item"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#E0A569"}},"grid-column"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#DBD7CA"}},"\xA0/ span "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"item"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#B58451"}},"grid-column"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#393A34"}},"\xA0/ span "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),t3=e("p",{class:"text-sm italic"},"To znamen\xE1, \u017Ee prvek \u201Eitem\u201C m\xE1 za\u010D\xEDnat na \u010Dtvrt\xE9m sloupci a zab\xEDrat celkem dva sloupce m\xEDsta. Na\u0161e item by tedy zab\xEDrala sloupce \u010Dty\u0159i a p\u011Bt.",-1),n3={__name:"30",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_multiple-col-items1.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[Kw,Yw,p(" P\u0159edchoz\xED t\u0159i vlastnosti existuj\xED i pro sloupce. "),Xw,p(", "),Zw,p(" a "),Jw,p(" funguj\xED stejn\u011B jako vlastnosti \u0159\xE1dku. Tyto vlastnosti umo\u017E\u0148uj\xED, aby grid item zahrnovala v\xEDce sloupc\u016F. "),Qw,j(o,te({},{ranges:[""]}),{default:$(()=>[e3]),_:1},16),t3]),_:1},16)}}},s3=e("h1",null,"Grid Area",-1),l3=e("p",null,[p("Ji\u017E jsme mohli pou\u017E\xEDt "),e("kbd",null,"grid-row"),p("\xA0a\xA0"),e("kbd",null,"grid-column"),p(" jako zkratku pro vlastnosti jako "),e("kbd",null,"grid-row-start"),p("\xA0a\xA0"),e("kbd",null,"grid-row-end"),p(".")],-1),o3=e("p",null,[p("Pomoc\xED vlastnosti "),e("kbd",null,"grid-area"),p(" m\u016F\u017Eeme refaktorovat je\u0161t\u011B v\xEDce. Tato vlastnost nastav\xED po\u010D\xE1te\u010Dn\xED a koncovou pozici pro \u0159\xE1dky i sloupce polo\u017Eky.")],-1),r3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"item"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#E0A569"}},"grid-area"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#DBD7CA"}},"\xA0/ "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#DBD7CA"}},"\xA0/ "),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#DBD7CA"}},"\xA0/ span "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"item"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#B58451"}},"grid-area"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#393A34"}},"\xA0/ "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#393A34"}},"\xA0/ "),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#393A34"}},"\xA0/ span "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),a3=e("p",null,[e("kbd",null,"grid-area"),p(" m\xE1 \u010Dty\u0159i hodnoty odd\u011Blen\xE9 lom\xEDtky. Po\u0159ad\xED je d\u016Fle\u017Eit\xE9! Takto bude "),e("kbd",null,"grid-area"),p(" tyto hodnoty interpretovat:")],-1),i3=e("ol",null,[e("li",null,[e("kbd",null,"grid-row-start")]),e("li",null,[e("kbd",null,"grid-column-start")]),e("li",null,[e("kbd",null,"grid-row-end")]),e("li",null,[e("kbd",null,"grid-column-end")])],-1),c3={__name:"31",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_grid-area.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[s3,l3,o3,j(o,te({},{ranges:[""]}),{default:$(()=>[r3]),_:1},16),a3,i3]),_:1},16)}}},p3=e("h1",null,"Grid-row & Grid-col v Tailwindu",-1),u3=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,[e("p",{class:"text-red-300"},"T\u0159\xEDda v Tailwindu")]),e("th",null,[e("p",{class:"text-yellow-500"},"Vlastnost v CSS")]),e("th",null,[e("p",{class:"text-red-300"},"T\u0159\xEDda v Tailwindu")]),e("th",null,[e("p",{class:"text-yellow-500"},"Vlastnost v CSS")])])]),e("tbody",null,[e("tr",null,[e("td",null,"row-auto"),e("td",null,"grid-row: auto;"),e("td",null,"col-auto"),e("td",null,"grid-column: auto;")]),e("tr",null,[e("td",null,"row-span-1"),e("td",null,"grid-row: span 1 / span 1;"),e("td",null,"col-span-1"),e("td",null,"grid-column: span 1 / span 1;")]),e("tr",null,[e("td",null,"row-span-2"),e("td",null,"grid-row: span 2 / span 2;"),e("td",null,"col-span-2"),e("td",null,"grid-column: span 2 / span 2;")]),e("tr",null,[e("td",null,"row-span-3"),e("td",null,"grid-row: span 3 / span 3;"),e("td",null,"col-span-3"),e("td",null,"grid-column: span 3 / span 3;")]),e("tr",null,[e("td",null,"row-span-4"),e("td",null,"grid-row: span 4 / span 4;"),e("td",null,"col-span-4"),e("td",null,"grid-column: span 4 / span 4;")]),e("tr",null,[e("td",null,"row-span-5"),e("td",null,"grid-row: span 5 / span 5;"),e("td",null,"col-span-5"),e("td",null,"grid-column: span 5 / span 5;")]),e("tr",null,[e("td",null,"row-span-6"),e("td",null,"grid-row: span 6 / span 6;"),e("td",null,"col-span-6"),e("td",null,"grid-column: span 6 / span 6;")]),e("tr",null,[e("td",null,"row-span-full"),e("td",null,"grid-row: 1 / -1;"),e("td",null,"col-span-7"),e("td",null,"grid-column: span 7 / span 7;")]),e("tr",null,[e("td",null,"row-start-1"),e("td",null,"grid-row-start: 1;"),e("td",null,"col-span-8"),e("td",null,"grid-column: span 8 / span 8;")]),e("tr",null,[e("td",null,"\u2026"),e("td"),e("td"),e("td")])])],-1),d3={__name:"32",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_multiple-row-col_tw.md"};return M(K),(s,l)=>(B(),W(me,ie(oe(n)),{default:$(()=>[p3,u3]),_:1},16))}},f3=e("h1",null,"Grid Template Areas",-1),y3=e("br",null,null,-1),m3=e("kbd",null,"grid-template-areas",-1),h3=e("kbd",null,"grid-row-start",-1),g3=e("kbd",null,"grid-row-end",-1),v3=e("kbd",null,"grid-column-start",-1),_3=e("kbd",null,"grid-column-end",-1),b3=e("kbd",null,"grid-area",-1),k3=e("img",{src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/44e14f02-9861-4346-8456-e870d2c48106/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221213T133743Z&X-Amz-Expires=86400&X-Amz-Signature=253422491b618393fa52e9ece073326640a68a9f382999244ea84f63dc0114d4&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject",width:"600",class:"rounded-lg mx-auto mt-10"},null,-1),w3={__name:"33",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_grid-template-areas1.md"};return M(K),(s,l)=>(B(),W(me,ie(oe(n)),{default:$(()=>[f3,y3,p(" Vlastnost\xA0"),m3,p("\xA0umo\u017E\u0148uje pojmenovat \u010D\xE1sti webov\xE9 str\xE1nky, kter\xE9 se pou\u017Eij\xED jako hodnoty v\xA0"),h3,p(",\xA0"),g3,p(",\xA0"),v3,p(","),_3,p(" a\xA0"),b3,p("\xA0. "),k3]),_:1},16))}},x3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"container"'),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0"),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"header"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Welcome!"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"header"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0"),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"section"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"info"'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Info!"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"section"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0"),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"section"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"services"'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Services!"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"section"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0"),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"footer"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"Contact us!"),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"footer"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"container"'),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0"),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"header"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Welcome!"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"header"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0"),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"section"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"info"'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Info!"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"section"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0"),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"section"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"services"'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Services!"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"section"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0"),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"footer"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"Contact us!"),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"footer"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),A3=e("br",null,null,-1),B3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"container"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0"),e("span",{style:{color:"#E0A569"}},"display"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"grid"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0"),e("span",{style:{color:"#E0A569"}},"max-width"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"900"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0"),e("span",{style:{color:"#E0A569"}},"position"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"relative"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0"),e("span",{style:{color:"#E0A569"}},"margin"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"auto"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0"),e("span",{style:{color:"#E0A569"}},"grid-template-areas"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"head head"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"),e("span",{style:{color:"#C98A7D"}},'"info services"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"),e("span",{style:{color:"#C98A7D"}},'"footer footer"'),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0"),e("span",{style:{color:"#E0A569"}},"grid-template-rows"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"300"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"800"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"120"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0"),e("span",{style:{color:"#E0A569"}},"grid-template-columns"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#CB7676"}},"fr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#CB7676"}},"fr"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#429988"}},"header"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0"),e("span",{style:{color:"#E0A569"}},"grid-area"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," head"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"info"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"\xA0\xA0"),e("span",{style:{color:"#E0A569"}},"grid-area"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," info"),e("span",{style:{color:"#858585"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"/* ... */")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"container"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0"),e("span",{style:{color:"#B58451"}},"display"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"grid"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0"),e("span",{style:{color:"#B58451"}},"max-width"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"900"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0"),e("span",{style:{color:"#B58451"}},"position"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"relative"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0"),e("span",{style:{color:"#B58451"}},"margin"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"auto"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0"),e("span",{style:{color:"#B58451"}},"grid-template-areas"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"head head"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"),e("span",{style:{color:"#B56959"}},'"info services"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"),e("span",{style:{color:"#B56959"}},'"footer footer"'),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0"),e("span",{style:{color:"#B58451"}},"grid-template-rows"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"300"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"800"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"120"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0"),e("span",{style:{color:"#B58451"}},"grid-template-columns"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#AB5959"}},"fr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#AB5959"}},"fr"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#2F8A89"}},"header"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0"),e("span",{style:{color:"#B58451"}},"grid-area"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," head"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"info"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\xA0\xA0"),e("span",{style:{color:"#B58451"}},"grid-area"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," info"),e("span",{style:{color:"#8E8F8B"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"/* ... */")])])])],-1),E3={__name:"34",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_grid-template-areas2.md"};return M(K),(s,l)=>{const o=Pe;return B(),W(me,ie(oe(n)),{default:$(()=>[j(o,te({},{ranges:["all","0"]}),{default:$(()=>[x3]),_:1},16),A3,j(o,te({},{ranges:["0","6-8","9-10","13-18","all"]}),{default:$(()=>[B3]),_:1},16)]),_:1},16)}}},D3=e("h1",null,"Rozlo\u017Een\xED prvk\u016F v gridu",-1),C3=e("p",null,[p("V gridu se m\u016F\u017Eeme setkat s mnoha vlastnostmi, pro rozlo\u017Een\xED str\xE1nky, kter\xFDmi jsou "),e("kbd",null,"justify-items"),p(","),e("br"),e("kbd",null,"justify-content"),p(", "),e("kbd",null,"justify-self"),p(", "),e("kbd",null,"align-items"),p(", "),e("kbd",null,"align-content"),p(", "),e("kbd",null,"align-self")],-1),S3=e("ol",null,[e("li",null,[e("p",null,[e("kbd",null,"justify-items"),p("\xA0ur\u010Duje, jak se maj\xED jednotliv\xE9 prvky rozlo\u017Eit na ose \u0159\xE1dku (osa X)")]),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,[e("p",{class:"text-red-300"},"T\u0159\xEDda v Tailwindu")]),e("th",null,[e("p",{class:"text-yellow-500"},"Vlastnost v CSS")])])]),e("tbody",null,[e("tr",null,[e("td",null,"justify-items-start"),e("td",null,"justify-items: start;")]),e("tr",null,[e("td",null,"justify-items-end"),e("td",null,"justify-items: end;")]),e("tr",null,[e("td",null,"justify-items-center"),e("td",null,"justify-items: center;")]),e("tr",null,[e("td",null,"justify-items-stretch"),e("td",null,"justify-items: stretch;")])])]),e("h2",null,[e("strong",null,[e("a",{href:"https://tailwindcss.com/docs/justify-items#basic-usage",target:"_blank",rel:"noopener"})])])])],-1),F3={__name:"35",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_grid-items1.md"};return M(K),(s,l)=>(B(),W(me,ie(oe(n)),{default:$(()=>[D3,C3,S3]),_:1},16))}},j3=e("ol",{start:"2"},[e("li",null,[e("p",null,[e("kbd",null,"justify-content"),p("\xA0ur\u010Duje, jak by se skupiny prvk\u016F m\u011Bly rozlo\u017Eit na ose \u0159\xE1dku (osa X)")]),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,[e("p",{class:"text-red-300 w-52"},"T\u0159\xEDda v Tailwindu")]),e("th",null,[e("p",{class:"text-yellow-500"},"Vlastnost v CSS")])])]),e("tbody",null,[e("tr",null,[e("td",null,"justify-start"),e("td",null,"justify-content: flex-start;")]),e("tr",null,[e("td",null,"justify-end"),e("td",null,"justify-content: flex-end;")]),e("tr",null,[e("td",null,"justify-center"),e("td",null,"justify-content: center;")]),e("tr",null,[e("td",null,"justify-between"),e("td",null,"justify-content: space-between;")]),e("tr",null,[e("td",null,"justify-around"),e("td",null,"justify-content: space-around;")]),e("tr",null,[e("td",null,"justify-evenly"),e("td",null,"justify-content: space-evenly;")])])])])],-1),T3={__name:"36",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_grid-items2.md"};return M(K),(s,l)=>(B(),W(me,ie(oe(n)),{default:$(()=>[j3]),_:1},16))}},$3=e("ol",{start:"3"},[e("li",null,[e("p",null,[e("kbd",null,"justify-self"),p("\xA0ur\u010Duje, jak by se m\u011Bl jednotliv\xFD prvek um\xEDstit vzhledem k ose \u0159\xE1dku (osa X)")]),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,[e("p",{class:"text-red-300 w-1/2"},"T\u0159\xEDda v Tailwindu")]),e("th",null,[e("p",{class:"text-yellow-500"},"Vlastnost v CSS")])])]),e("tbody",null,[e("tr",null,[e("td",null,"justify-self-auto"),e("td",null,"justify-self: auto;")]),e("tr",null,[e("td",null,"justify-self-start"),e("td",null,"justify-self: start;")]),e("tr",null,[e("td",null,"justify-self-end"),e("td",null,"justify-self: end;")]),e("tr",null,[e("td",null,"justify-self-center"),e("td",null,"justify-self: center;")]),e("tr",null,[e("td",null,"justify-self-stretch"),e("td",null,"justify-self: stretch;")])])])])],-1),O3={__name:"37",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_grid-items3.md"};return M(K),(s,l)=>(B(),W(me,ie(oe(n)),{default:$(()=>[$3]),_:1},16))}},z3=e("ol",{start:"4"},[e("li",null,[e("p",null,[e("kbd",null,"align-items"),p("\xA0ur\u010Duje, jak se maj\xED jednotliv\xE9 prvky rozprost\xEDrat po ose sloupce (osa Y)")]),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,[e("p",{class:"text-red-300 w-36"},"T\u0159\xEDda v Tailwindu")]),e("th",null,[e("p",{class:"text-yellow-500"},"Vlastnost v CSS")])])]),e("tbody",null,[e("tr",null,[e("td",null,"items-start"),e("td",null,"align-items: flex-start;")]),e("tr",null,[e("td",null,"items-end"),e("td",null,"align-items: flex-end;")]),e("tr",null,[e("td",null,"items-center"),e("td",null,"align-items: center;")]),e("tr",null,[e("td",null,"items-baseline"),e("td",null,"align-items: baseline;")]),e("tr",null,[e("td",null,"items-stretch"),e("td",null,"align-items: stretch;")])])])])],-1),P3={__name:"38",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_grid-items4.md"};return M(K),(s,l)=>(B(),W(me,ie(oe(n)),{default:$(()=>[z3]),_:1},16))}},L3=e("ol",{start:"5"},[e("li",null,[e("p",null,[e("kbd",null,"align-content"),p("\xA0ur\u010Duje, jak se maj\xED skupiny prvk\u016F rozprost\xEDrat po ose sloupce (osa Y)")]),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,[e("p",{class:"text-red-300 w-52"},"T\u0159\xEDda v Tailwindu")]),e("th",null,[e("p",{class:"text-yellow-500"},"Vlastnost v CSS")])])]),e("tbody",null,[e("tr",null,[e("td",null,"content-center"),e("td",null,"align-content: center;")]),e("tr",null,[e("td",null,"content-start"),e("td",null,"align-content: flex-start;")]),e("tr",null,[e("td",null,"content-end"),e("td",null,"align-content: flex-end;")]),e("tr",null,[e("td",null,"content-between"),e("td",null,"align-content: space-between;")]),e("tr",null,[e("td",null,"content-around"),e("td",null,"align-content: space-around;")]),e("tr",null,[e("td",null,"content-evenly"),e("td",null,"align-content: space-evenly;")]),e("tr",null,[e("td",null,"content-baseline"),e("td",null,"align-content: baseline;")])])])])],-1),M3={__name:"39",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_grid-items5.md"};return M(K),(s,l)=>(B(),W(me,ie(oe(n)),{default:$(()=>[L3]),_:1},16))}},N3=e("ol",{start:"6"},[e("li",null,[e("p",null,[e("kbd",null,"align-self"),p("\xA0ur\u010Duje, jak by se m\u011Bl jednotliv\xFD prvek um\xEDstit vzhledem k ose sloupce (osa Y)")]),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,[e("p",{class:"text-red-300 w-36"},"T\u0159\xEDda v Tailwindu")]),e("th",null,[e("p",{class:"text-yellow-500"},"Vlastnost v CSS")])])]),e("tbody",null,[e("tr",null,[e("td",null,"self-auto"),e("td",null,"align-self: auto;")]),e("tr",null,[e("td",null,"self-start"),e("td",null,"align-self: flex-start;")]),e("tr",null,[e("td",null,"self-end"),e("td",null,"align-self: flex-end;")]),e("tr",null,[e("td",null,"self-center"),e("td",null,"align-self: center;")]),e("tr",null,[e("td",null,"self-stretch"),e("td",null,"align-self: stretch;")]),e("tr",null,[e("td",null,"self-baseline"),e("td",null,"align-self: baseline;")])])])])],-1),I3={__name:"40",setup(t){const n={hide:!1,srcSequence:"./pages/NL_grid_grid-items6.md"};return M(K),(s,l)=>(B(),W(me,ie(oe(n)),{default:$(()=>[N3]),_:1},16))}},R3=e("h1",null,"P\u0159\xEDklady",-1),V3=e("br",null,null,-1),H3=e("br",null,null,-1),q3=e("p",null,[e("a",{href:"https://play.tailwindcss.com/jKoGjDSkfD",target:"_blank",rel:"noopener"},"P\u0158\xCDKLAD 1")],-1),U3=e("p",null,[e("a",{href:"https://play.tailwindcss.com/JfelKgvnpB",target:"_blank",rel:"noopener"},"P\u0158\xCDKLAD 2")],-1),G3={__name:"41",setup(t){const n={hide:!1,class:"text-center",srcSequence:"./pages/NL_grid_example.md"};return M(K),(s,l)=>(B(),W(me,ie(oe(n)),{default:$(()=>[R3,V3,H3,q3,U3]),_:1},16))}};const W3=e("h1",null,"Zdroje",-1),K3=e("br",null,null,-1),Y3=e("br",null,null,-1),X3=e("p",{class:"text-yellow-500 text-lg font-bold"},"Tailwind CSS",-1),Z3=e("p",null,[e("a",{href:"https://tailwindcss.com/docs/installation",target:"_blank",rel:"noopener"},"Tailwind"),p(" \xB7 "),e("a",{href:"https://github.com/tailwindlabs/tailwindcss-forms",target:"_blank",rel:"noopener"},"Form Plugin"),p(" \xB7 "),e("a",{href:"https://2022.stateofcss.com/en-US/",target:"_blank",rel:"noopener"},"State of CSS")],-1),J3=e("br",null,null,-1),Q3=e("p",{class:"text-yellow-500 text-lg font-bold"},"Grid CSS",-1),ex=e("p",null,[e("a",{href:"https://tailwindcss.com/docs/grid-template-columns",target:"_blank",rel:"noopener"},"Grid v Tailwindu"),p(" \xB7 "),e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",target:"_blank",rel:"noopener"},"MDN"),p(" \xB7 "),e("a",{href:"https://gridbyexample.com/",target:"_blank",rel:"noopener"},"Grid By Example"),p(" \xB7 "),e("a",{href:"https://css-tricks.com/snippets/css/complete-guide-grid/",target:"_blank",rel:"noopener"},"Grid Complete Guide")],-1),tx={__name:"42",setup(t){const n={class:"text-center"};return M(K),(s,l)=>(B(),W(me,ie(oe(n)),{default:$(()=>[W3,K3,Y3,X3,Z3,J3,Q3,ex]),_:1},16))}},nx=[{path:"1",name:"page-1",component:B1,meta:{theme:"default",colorSchema:"dark",background:"https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Tailwind & Grid
Prezentace k FE mikro\u0161kolen\xED
`,drawings:{persist:!1},css:"unocss",title:"Tailwind & Grid",slide:{raw:`---
# try also 'default' to start simple
theme: default
colorSchema: 'dark'

background: https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Tailwind & Grid
  Prezentace k FE mikro\u0161kolen\xED
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: unocss
---

# Tailwind & Grid

Andy T. a Nel\u010Da L.

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
   M\u016F\u017Eeme za\u010D\xEDt? <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

<style>
h1 {
  background-color: #ffffff;
  background-image: linear-gradient(45deg, #ffffff 10%, #ffffff 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"Tailwind & Grid",level:1,content:`# Tailwind & Grid

Andy T. a Nel\u010Da L.

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
   M\u016F\u017Eeme za\u010D\xEDt? <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

<style>
h1 {
  background-color: #ffffff;
  background-image: linear-gradient(45deg, #ffffff 10%, #ffffff 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"default",colorSchema:"dark",background:"https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Tailwind & Grid
Prezentace k FE mikro\u0161kolen\xED
`,drawings:{persist:!1},css:"unocss",title:"Tailwind & Grid"},index:0,start:0,end:59,notesHTML:"",filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:j1,meta:{layout:"center",slide:{raw:`---
layout: center
---
# 1. Tailwind

<style>
  h1 {
    font-size: 5rem !important;
    padding: 8rem;
    font-weight: 500
  }
</style>


<!-- Andy -->
`,title:"1. Tailwind",level:1,content:`# 1. Tailwind

<style>
  h1 {
    font-size: 5rem !important;
    padding: 8rem;
    font-weight: 500
  }
</style>`,frontmatter:{layout:"center"},note:"Andy",index:1,start:59,end:75,notesHTML:`<p>Andy</p>
`,filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:V1,meta:{layout:"image-right",image:"https://stateofx-images.netlify.app/captures/css2022/en-US/css_frameworks_experience_ranking.png",title:"Tailwind CSS",hide:!1,srcSequence:"./pages/AT_tw_intro.md",slide:{raw:null,title:"Tailwind CSS",level:1,content:`# Tailwind CSS

<br>
Jeden z CSS framework\u016F.
<br>
<br>
Umo\u017E\u0148uje nak\xF3dovat web pomoc\xED utility t\u0159\xEDd p\u0159edp\u0159ipraven\xFDch pro prakticky ka\u017Edou kombinaci <kbd>vlastnost-hodnota</kbd>.
<br>
<br>`,frontmatter:{layout:"image-right",image:"https://stateofx-images.netlify.app/captures/css2022/en-US/css_frameworks_experience_ranking.png",title:"Tailwind CSS",hide:!1,srcSequence:"./pages/AT_tw_intro.md"},index:2,start:0,end:15,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_intro.md",raw:`---
layout: image-right
image: https://stateofx-images.netlify.app/captures/css2022/en-US/css_frameworks_experience_ranking.png
---

# Tailwind CSS

<br>
Jeden z CSS framework\u016F.
<br>
<br>
Umo\u017E\u0148uje nak\xF3dovat web pomoc\xED utility t\u0159\xEDd p\u0159edp\u0159ipraven\xFDch pro prakticky ka\u017Edou kombinaci <kbd>vlastnost-hodnota</kbd>.
<br>
<br>
`,title:"Tailwind CSS",level:1,content:`# Tailwind CSS

<br>
Jeden z CSS framework\u016F.
<br>
<br>
Umo\u017E\u0148uje nak\xF3dovat web pomoc\xED utility t\u0159\xEDd p\u0159edp\u0159ipraven\xFDch pro prakticky ka\u017Edou kombinaci <kbd>vlastnost-hodnota</kbd>.
<br>
<br>`,frontmatter:{layout:"image-right",image:"https://stateofx-images.netlify.app/captures/css2022/en-US/css_frameworks_experience_ranking.png",title:"Tailwind CSS"},index:0,start:0,end:15},inline:{raw:`---
src: ./pages/AT_tw_intro.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:2,start:75,end:80},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_intro.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:K1,meta:{title:"V\xFDhody Tailwind CSS",hide:!1,srcSequence:"./pages/AT_tw_benefits.md",slide:{raw:null,title:"V\xFDhody Tailwind CSS",level:1,content:`# V\xFDhody Tailwind CSS

<br>
<br>

- \u{1F3A8} <span class="text-yellow-600">**Vizu\xE1ln\xED konzistentnost**</span> - \u010Clov\u011Bk je\xA0omezen\xA0na n\u011Bkolik p\u0159edp\u0159ipraven\xFDch velikost\xED/rozm\u011Br\u016F/barev apod. Tak\u017Ee je v\xFDsledek relativn\u011B\xA0visu\xE1ln\u011B konsistentn\xED.
- \u26A1\uFE0F <span class="text-yellow-600">**Rychl\xE9 hromadn\xE9 \xFApravy**</span> - Styly t\u011Bchto p\u0159edp\u0159ipraven\xFDch t\u0159\xEDd lze snadno hromadn\u011B zm\u011Bnit \xFApravou konfigurace.
- \u{1F4F1} <span class="text-yellow-600">**Responzivita**</span> - Tailwind t\u0159\xEDdy jsou\xA0responsivn\xED\xA0a pou\u017E\xEDvaj\xED\xA0mobile-first\xA0p\u0159\xEDstup.
- \u{1F303} <span class="text-yellow-600">**Dark mode**</span> - Sta\u010D\xED p\u0159ed t\u0159\xEDdu p\u0159idat\xA0dark:, je mo\u017En\xE9 kombinovat i se stavy nebo responsivn\xEDmi breakpointy.
- \u{1F4D0} <span class="text-yellow-600">**Snadn\xE9 vytvo\u0159en\xED layoutu**</span> - T\u0159\xEDdy layoutu lze nastavit pomoc\xED float, flex nebo grid.
- \u{1F483}\u{1F3FC} <span class="text-yellow-600">**Animace, transformace, transition**</span> - Jsou p\u0159ipraven\xE9 z\xE1kladn\xED animace jako ot\xE1\u010Den\xED (animate-spin), pulsov\xE1n\xED (animate-pulse) a dal\u0161\xED.`,frontmatter:{title:"V\xFDhody Tailwind CSS",hide:!1,srcSequence:"./pages/AT_tw_benefits.md"},index:3,start:0,end:15,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_benefits.md",raw:`# V\xFDhody Tailwind CSS

<br>
<br>

- \u{1F3A8} <span class="text-yellow-600">**Vizu\xE1ln\xED konzistentnost**</span> - \u010Clov\u011Bk je\xA0omezen\xA0na n\u011Bkolik p\u0159edp\u0159ipraven\xFDch velikost\xED/rozm\u011Br\u016F/barev apod. Tak\u017Ee je v\xFDsledek relativn\u011B\xA0visu\xE1ln\u011B konsistentn\xED.
- \u26A1\uFE0F <span class="text-yellow-600">**Rychl\xE9 hromadn\xE9 \xFApravy**</span> - Styly t\u011Bchto p\u0159edp\u0159ipraven\xFDch t\u0159\xEDd lze snadno hromadn\u011B zm\u011Bnit \xFApravou konfigurace.
- \u{1F4F1} <span class="text-yellow-600">**Responzivita**</span> - Tailwind t\u0159\xEDdy jsou\xA0responsivn\xED\xA0a pou\u017E\xEDvaj\xED\xA0mobile-first\xA0p\u0159\xEDstup.
- \u{1F303} <span class="text-yellow-600">**Dark mode**</span> - Sta\u010D\xED p\u0159ed t\u0159\xEDdu p\u0159idat\xA0dark:, je mo\u017En\xE9 kombinovat i se stavy nebo responsivn\xEDmi breakpointy.
- \u{1F4D0} <span class="text-yellow-600">**Snadn\xE9 vytvo\u0159en\xED layoutu**</span> - T\u0159\xEDdy layoutu lze nastavit pomoc\xED float, flex nebo grid.
- \u{1F483}\u{1F3FC} <span class="text-yellow-600">**Animace, transformace, transition**</span> - Jsou p\u0159ipraven\xE9 z\xE1kladn\xED animace jako ot\xE1\u010Den\xED (animate-spin), pulsov\xE1n\xED (animate-pulse) a dal\u0161\xED.



`,title:"V\xFDhody Tailwind CSS",level:1,content:`# V\xFDhody Tailwind CSS

<br>
<br>

- \u{1F3A8} <span class="text-yellow-600">**Vizu\xE1ln\xED konzistentnost**</span> - \u010Clov\u011Bk je\xA0omezen\xA0na n\u011Bkolik p\u0159edp\u0159ipraven\xFDch velikost\xED/rozm\u011Br\u016F/barev apod. Tak\u017Ee je v\xFDsledek relativn\u011B\xA0visu\xE1ln\u011B konsistentn\xED.
- \u26A1\uFE0F <span class="text-yellow-600">**Rychl\xE9 hromadn\xE9 \xFApravy**</span> - Styly t\u011Bchto p\u0159edp\u0159ipraven\xFDch t\u0159\xEDd lze snadno hromadn\u011B zm\u011Bnit \xFApravou konfigurace.
- \u{1F4F1} <span class="text-yellow-600">**Responzivita**</span> - Tailwind t\u0159\xEDdy jsou\xA0responsivn\xED\xA0a pou\u017E\xEDvaj\xED\xA0mobile-first\xA0p\u0159\xEDstup.
- \u{1F303} <span class="text-yellow-600">**Dark mode**</span> - Sta\u010D\xED p\u0159ed t\u0159\xEDdu p\u0159idat\xA0dark:, je mo\u017En\xE9 kombinovat i se stavy nebo responsivn\xEDmi breakpointy.
- \u{1F4D0} <span class="text-yellow-600">**Snadn\xE9 vytvo\u0159en\xED layoutu**</span> - T\u0159\xEDdy layoutu lze nastavit pomoc\xED float, flex nebo grid.
- \u{1F483}\u{1F3FC} <span class="text-yellow-600">**Animace, transformace, transition**</span> - Jsou p\u0159ipraven\xE9 z\xE1kladn\xED animace jako ot\xE1\u010Den\xED (animate-spin), pulsov\xE1n\xED (animate-pulse) a dal\u0161\xED.`,frontmatter:{title:"V\xFDhody Tailwind CSS"},index:0,start:0,end:15},inline:{raw:`---
src: ./pages/AT_tw_benefits.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:3,start:80,end:85},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_benefits.md",notesHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:j_,meta:{title:"Instalace Talwind CSS",hide:!1,srcSequence:"./pages/AT_tw_installation.md",slide:{raw:null,title:"Instalace Talwind CSS",level:1,content:`# Instalace Talwind CSS

- <span class="text-sm">Instalace do projektu s Vite pomoc\xED <kbd>npm install -D tailwindcss postcss autoprefixer</kbd></span>
<br>
- <span class="text-sm">Vytvo\u0159en\xED soubor\u016F *tailwind.config.cjs* and *postcss.config.cjs*. pomoc\xED <kbd>npx tailwindcss init -p</kbd></span>
<br>
- <span class="text-sm">Nastaven\xED *content* v *tailwind.config.cjs*:</span>

\`\`\`js {0|1-10|2-5}
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

- <span class="text-sm">Nastaven\xED *./src/index.css*</span>

\`\`\`css{0|1-3}
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

- <span class="text-sm">Spu\u0161t\u011Bn\xED pomoc\xED <kbd>npm run dev</kbd></span>`,frontmatter:{title:"Instalace Talwind CSS",hide:!1,srcSequence:"./pages/AT_tw_installation.md"},index:4,start:0,end:30,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_installation.md",raw:`# Instalace Talwind CSS

- <span class="text-sm">Instalace do projektu s Vite pomoc\xED <kbd>npm install -D tailwindcss postcss autoprefixer</kbd></span>
<br>
- <span class="text-sm">Vytvo\u0159en\xED soubor\u016F *tailwind.config.cjs* and *postcss.config.cjs*. pomoc\xED <kbd>npx tailwindcss init -p</kbd></span>
<br>
- <span class="text-sm">Nastaven\xED *content* v *tailwind.config.cjs*:</span>

\`\`\`js {0|1-10|2-5}
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

- <span class="text-sm">Nastaven\xED *./src/index.css*</span>

\`\`\`css{0|1-3}
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

- <span class="text-sm">Spu\u0161t\u011Bn\xED pomoc\xED <kbd>npm run dev</kbd></span>`,title:"Instalace Talwind CSS",level:1,content:`# Instalace Talwind CSS

- <span class="text-sm">Instalace do projektu s Vite pomoc\xED <kbd>npm install -D tailwindcss postcss autoprefixer</kbd></span>
<br>
- <span class="text-sm">Vytvo\u0159en\xED soubor\u016F *tailwind.config.cjs* and *postcss.config.cjs*. pomoc\xED <kbd>npx tailwindcss init -p</kbd></span>
<br>
- <span class="text-sm">Nastaven\xED *content* v *tailwind.config.cjs*:</span>

\`\`\`js {0|1-10|2-5}
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

- <span class="text-sm">Nastaven\xED *./src/index.css*</span>

\`\`\`css{0|1-3}
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

- <span class="text-sm">Spu\u0161t\u011Bn\xED pomoc\xED <kbd>npm run dev</kbd></span>`,frontmatter:{title:"Instalace Talwind CSS"},index:0,start:0,end:30},inline:{raw:`---
src: ./pages/AT_tw_installation.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:4,start:85,end:90},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_installation.md",notesHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:z_,meta:{title:"Nastaven\xED tailwind.config.cjs",hide:!1,srcSequence:"./pages/AT_tw_config.md",slide:{raw:null,title:"Nastaven\xED tailwind.config.cjs",level:1,content:`# Nastaven\xED tailwind.config.cjs

- <span class="text-yellow-600">Content, theme, plugins</span>
<br>

\`\`\`js {1,21|2|3-17|18-20}
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
\`\`\``,frontmatter:{title:"Nastaven\xED tailwind.config.cjs",hide:!1,srcSequence:"./pages/AT_tw_config.md"},index:5,start:0,end:28,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_config.md",raw:`# Nastaven\xED tailwind.config.cjs

- <span class="text-yellow-600">Content, theme, plugins</span>
<br>

\`\`\`js {1,21|2|3-17|18-20}
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
\`\`\``,title:"Nastaven\xED tailwind.config.cjs",level:1,content:`# Nastaven\xED tailwind.config.cjs

- <span class="text-yellow-600">Content, theme, plugins</span>
<br>

\`\`\`js {1,21|2|3-17|18-20}
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
\`\`\``,frontmatter:{title:"Nastaven\xED tailwind.config.cjs"},index:0,start:0,end:28},inline:{raw:`---
src: ./pages/AT_tw_config.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:5,start:90,end:95},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_config.md",notesHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:V_,meta:{title:"Talwind CSS plugins",hide:!1,srcSequence:"./pages/AT_tw_plugins.md",slide:{raw:null,title:"Talwind CSS plugins",level:1,content:`# Talwind CSS plugins

- <span class="text-yellow-600">Existuje n\u011Bkolik ofici\xE1ln\xEDch plugin\u016F:</span>
<br>

\`\`\`js
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
\`\`\`
<br>

- <span class="text-yellow-600">Plugin je t\u0159eba nainstalovat pomoc\xED npm install nap\u0159. <kbd>npm install -D @tailwindcss/forms</kbd></span>
<br>

- <span class="text-yellow-600">A p\u0159idat do plugins v<kbd>tailwind.config.cjs</kbd></span>
<br>

\`\`\`js{0|1-4}
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
\`\`\``,frontmatter:{title:"Talwind CSS plugins",hide:!1,srcSequence:"./pages/AT_tw_plugins.md"},index:6,start:0,end:31,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_plugins.md",raw:`# Talwind CSS plugins

- <span class="text-yellow-600">Existuje n\u011Bkolik ofici\xE1ln\xEDch plugin\u016F:</span>
<br>

\`\`\`js
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
\`\`\`
<br>

- <span class="text-yellow-600">Plugin je t\u0159eba nainstalovat pomoc\xED npm install nap\u0159. <kbd>npm install -D @tailwindcss/forms</kbd></span>
<br>

- <span class="text-yellow-600">A p\u0159idat do plugins v<kbd>tailwind.config.cjs</kbd></span>
<br>

\`\`\`js{0|1-4}
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
\`\`\``,title:"Talwind CSS plugins",level:1,content:`# Talwind CSS plugins

- <span class="text-yellow-600">Existuje n\u011Bkolik ofici\xE1ln\xEDch plugin\u016F:</span>
<br>

\`\`\`js
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
\`\`\`
<br>

- <span class="text-yellow-600">Plugin je t\u0159eba nainstalovat pomoc\xED npm install nap\u0159. <kbd>npm install -D @tailwindcss/forms</kbd></span>
<br>

- <span class="text-yellow-600">A p\u0159idat do plugins v<kbd>tailwind.config.cjs</kbd></span>
<br>

\`\`\`js{0|1-4}
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
\`\`\``,frontmatter:{title:"Talwind CSS plugins"},index:0,start:0,end:31},inline:{raw:`---
src: ./pages/AT_tw_plugins.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:6,start:95,end:100},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_plugins.md",notesHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:J_,meta:{title:"Vlastn\xED nastaven\xED styl\u016F",hide:!1,srcSequence:"./pages/AT_tw_custom-styles.md",slide:{raw:null,title:"Vlastn\xED nastaven\xED styl\u016F",level:1,content:`# Vlastn\xED nastaven\xED styl\u016F

- <span class="text-yellow-600">Zm\u011Bny theme v tailwind.config.cjs:</span>
<br>

\`\`\`js{0|2-5|0}
  theme: {
    screens: {
      lg: '976px',
      xl: '1440px',
    }
  }
\`\`\`
<br>

- <span class="text-yellow-600">Pou\u017Eit\xED arbitrary values:</span>
<br>

\`\`\`html{0|1|0}
    <div class="top-[117px]"></div>
\`\`\`
<br>

- <span class="text-yellow-600">Pou\u017Eit\xED arbitrary properties:</span>
<br>

\`\`\`html{0|1} 
    <div class="[mask-type:luminance]"></div>
\`\`\``,frontmatter:{title:"Vlastn\xED nastaven\xED styl\u016F",hide:!1,srcSequence:"./pages/AT_tw_custom-styles.md"},index:7,start:0,end:29,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_custom-styles.md",raw:`# Vlastn\xED nastaven\xED styl\u016F

- <span class="text-yellow-600">Zm\u011Bny theme v tailwind.config.cjs:</span>
<br>

\`\`\`js{0|2-5|0}
  theme: {
    screens: {
      lg: '976px',
      xl: '1440px',
    }
  }
\`\`\`
<br>

- <span class="text-yellow-600">Pou\u017Eit\xED arbitrary values:</span>
<br>

\`\`\`html{0|1|0}
    <div class="top-[117px]"></div>
\`\`\`
<br>

- <span class="text-yellow-600">Pou\u017Eit\xED arbitrary properties:</span>
<br>

\`\`\`html{0|1} 
    <div class="[mask-type:luminance]"></div>
\`\`\``,title:"Vlastn\xED nastaven\xED styl\u016F",level:1,content:`# Vlastn\xED nastaven\xED styl\u016F

- <span class="text-yellow-600">Zm\u011Bny theme v tailwind.config.cjs:</span>
<br>

\`\`\`js{0|2-5|0}
  theme: {
    screens: {
      lg: '976px',
      xl: '1440px',
    }
  }
\`\`\`
<br>

- <span class="text-yellow-600">Pou\u017Eit\xED arbitrary values:</span>
<br>

\`\`\`html{0|1|0}
    <div class="top-[117px]"></div>
\`\`\`
<br>

- <span class="text-yellow-600">Pou\u017Eit\xED arbitrary properties:</span>
<br>

\`\`\`html{0|1} 
    <div class="[mask-type:luminance]"></div>
\`\`\``,frontmatter:{title:"Vlastn\xED nastaven\xED styl\u016F"},index:0,start:0,end:29},inline:{raw:`---
src: ./pages/AT_tw_custom-styles.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:7,start:100,end:105},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_custom-styles.md",notesHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:rb,meta:{title:"Vlastn\xED nastaven\xED styl\u016F",hide:!1,srcSequence:"./pages/AT_tw_custom-styles2.md",slide:{raw:null,title:"Vlastn\xED nastaven\xED styl\u016F",level:1,content:`# Vlastn\xED nastaven\xED styl\u016F

- <span class="text-yellow-600">P\u0159id\xE1n\xED base styl\u016F pomoc\xED @layer v CSS:</span>
<br>

\`\`\`css{0|5-9|0}
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl;
  }
}
\`\`\`
<br>

- <span class="text-yellow-600">P\u0159id\xE1n\xED t\u0159\xEDd ke komponent\xE1m nebo vlastn\xEDch utilities pomoc\xED @layer v CSS:</span>
<br>

\`\`\`css{0|1-5|0} 
@layer components {
  .card {
    background-color: theme('colors.white');
  }
    }
\`\`\`
\`\`\`html{0|1}
<div class="card rounded-none"></div>
\`\`\``,frontmatter:{title:"Vlastn\xED nastaven\xED styl\u016F",hide:!1,srcSequence:"./pages/AT_tw_custom-styles2.md"},index:8,start:0,end:38,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_custom-styles2.md",raw:`# Vlastn\xED nastaven\xED styl\u016F

- <span class="text-yellow-600">P\u0159id\xE1n\xED base styl\u016F pomoc\xED @layer v CSS:</span>
<br>

\`\`\`css{0|5-9|0}
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl;
  }
}
\`\`\`
<br>

- <span class="text-yellow-600">P\u0159id\xE1n\xED t\u0159\xEDd ke komponent\xE1m nebo vlastn\xEDch utilities pomoc\xED @layer v CSS:</span>
<br>

\`\`\`css{0|1-5|0} 
@layer components {
  .card {
    background-color: theme('colors.white');
  }
    }
\`\`\`
\`\`\`html{0|1}
<div class="card rounded-none"></div>
\`\`\`






`,title:"Vlastn\xED nastaven\xED styl\u016F",level:1,content:`# Vlastn\xED nastaven\xED styl\u016F

- <span class="text-yellow-600">P\u0159id\xE1n\xED base styl\u016F pomoc\xED @layer v CSS:</span>
<br>

\`\`\`css{0|5-9|0}
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl;
  }
}
\`\`\`
<br>

- <span class="text-yellow-600">P\u0159id\xE1n\xED t\u0159\xEDd ke komponent\xE1m nebo vlastn\xEDch utilities pomoc\xED @layer v CSS:</span>
<br>

\`\`\`css{0|1-5|0} 
@layer components {
  .card {
    background-color: theme('colors.white');
  }
    }
\`\`\`
\`\`\`html{0|1}
<div class="card rounded-none"></div>
\`\`\``,frontmatter:{title:"Vlastn\xED nastaven\xED styl\u016F"},index:0,start:0,end:38},inline:{raw:`---
src: ./pages/AT_tw_custom-styles2.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:8,start:105,end:110},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_custom-styles2.md",notesHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:hb,meta:{title:"Pseudo-classes & pseudo-elements",hide:!1,srcSequence:"./pages/AT_tw_modifiers.md",slide:{raw:null,title:"Pseudo-classes & pseudo-elements",level:1,content:`# Pseudo-classes & pseudo-elements

- <span class="text-yellow-600">Stylov\xE1n\xED element\u016F pomoc\xED pseudot\u0159\xEDd jako hover, visible, first (first-child), stav\u016F formul\xE1\u0159e (invalid) apod.</span>
<br>

\`\`\`html{0|1-4|0}
<button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
  Save changes
</button>
\`\`\`
<br>

- <span class="text-yellow-600">Stylov\xE1n\xED pseudo-element\u016F ::before a ::after :</span>
<br>

\`\`\`html{0|2-4|0}
<label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Email
  </span>
  <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
</label>
\`\`\`
<br>

- <span class="text-yellow-600">Podm\xEDn\u011Bn\xE9 stylov\xE1n\xED pomoc\xED modifik\xE1tor\u016F checked, disabled, hidden apod.</span>
<br>

\`\`\`html{0|1} 
<div aria-checked="true" class="bg-gray-600 aria-checked:bg-sky-700"></div>
\`\`\``,frontmatter:{title:"Pseudo-classes & pseudo-elements",hide:!1,srcSequence:"./pages/AT_tw_modifiers.md"},index:9,start:0,end:31,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_modifiers.md",raw:`# Pseudo-classes & pseudo-elements

- <span class="text-yellow-600">Stylov\xE1n\xED element\u016F pomoc\xED pseudot\u0159\xEDd jako hover, visible, first (first-child), stav\u016F formul\xE1\u0159e (invalid) apod.</span>
<br>

\`\`\`html{0|1-4|0}
<button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
  Save changes
</button>
\`\`\`
<br>

- <span class="text-yellow-600">Stylov\xE1n\xED pseudo-element\u016F ::before a ::after :</span>
<br>

\`\`\`html{0|2-4|0}
<label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Email
  </span>
  <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
</label>
\`\`\`
<br>

- <span class="text-yellow-600">Podm\xEDn\u011Bn\xE9 stylov\xE1n\xED pomoc\xED modifik\xE1tor\u016F checked, disabled, hidden apod.</span>
<br>

\`\`\`html{0|1} 
<div aria-checked="true" class="bg-gray-600 aria-checked:bg-sky-700"></div>
\`\`\``,title:"Pseudo-classes & pseudo-elements",level:1,content:`# Pseudo-classes & pseudo-elements

- <span class="text-yellow-600">Stylov\xE1n\xED element\u016F pomoc\xED pseudot\u0159\xEDd jako hover, visible, first (first-child), stav\u016F formul\xE1\u0159e (invalid) apod.</span>
<br>

\`\`\`html{0|1-4|0}
<button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
  Save changes
</button>
\`\`\`
<br>

- <span class="text-yellow-600">Stylov\xE1n\xED pseudo-element\u016F ::before a ::after :</span>
<br>

\`\`\`html{0|2-4|0}
<label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Email
  </span>
  <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
</label>
\`\`\`
<br>

- <span class="text-yellow-600">Podm\xEDn\u011Bn\xE9 stylov\xE1n\xED pomoc\xED modifik\xE1tor\u016F checked, disabled, hidden apod.</span>
<br>

\`\`\`html{0|1} 
<div aria-checked="true" class="bg-gray-600 aria-checked:bg-sky-700"></div>
\`\`\``,frontmatter:{title:"Pseudo-classes & pseudo-elements"},index:0,start:0,end:31},inline:{raw:`---
src: ./pages/AT_tw_modifiers.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:9,start:110,end:115},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_modifiers.md",notesHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:xb,meta:{title:"Stylov\xE1n\xED podle rodi\u010De nebo sourozence",hide:!1,srcSequence:"./pages/AT_tw_associatedstyles.md",slide:{raw:null,title:"Stylov\xE1n\xED podle rodi\u010De nebo sourozence",level:1,content:`# Stylov\xE1n\xED podle rodi\u010De nebo sourozence

- <span class="text-yellow-600">Podle rodi\u010De</span> - ozna\u010Den\xEDm rodi\u010De pomoc\xED <kbd>group</kbd> a pou\u017Eit\xED <kbd>group-*</kbd> k nastylov\xE1n\xED c\xEDlov\xE9ho elementu
<br>

\`\`\`html{0|1,3-6|0}
<a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
  <div class="flex items-center space-x-3">
    <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
  </div>
  <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
</a>
\`\`\`
<br>

- <span class="text-yellow-600">Podle sourozence</span> - ozna\u010Den\xEDm sourozence pomoc\xED <kbd>peer</kbd> a pou\u017Eit\xED <kbd>peer-*</kbd> k nastylov\xE1n\xED c\xEDlov\xE9ho elementu
<br>

\`\`\`html{0|4-5}
<form>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Email</span>
    <input type="email" class="peer ..."/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>
</form>
\`\`\``,frontmatter:{title:"Stylov\xE1n\xED podle rodi\u010De nebo sourozence",hide:!1,srcSequence:"./pages/AT_tw_associatedstyles.md"},index:10,start:0,end:31,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_associatedstyles.md",raw:`# Stylov\xE1n\xED podle rodi\u010De nebo sourozence

- <span class="text-yellow-600">Podle rodi\u010De</span> - ozna\u010Den\xEDm rodi\u010De pomoc\xED <kbd>group</kbd> a pou\u017Eit\xED <kbd>group-*</kbd> k nastylov\xE1n\xED c\xEDlov\xE9ho elementu
<br>

\`\`\`html{0|1,3-6|0}
<a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
  <div class="flex items-center space-x-3">
    <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
  </div>
  <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
</a>
\`\`\`
<br>

- <span class="text-yellow-600">Podle sourozence</span> - ozna\u010Den\xEDm sourozence pomoc\xED <kbd>peer</kbd> a pou\u017Eit\xED <kbd>peer-*</kbd> k nastylov\xE1n\xED c\xEDlov\xE9ho elementu
<br>

\`\`\`html{0|4-5}
<form>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Email</span>
    <input type="email" class="peer ..."/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>
</form>
\`\`\`
`,title:"Stylov\xE1n\xED podle rodi\u010De nebo sourozence",level:1,content:`# Stylov\xE1n\xED podle rodi\u010De nebo sourozence

- <span class="text-yellow-600">Podle rodi\u010De</span> - ozna\u010Den\xEDm rodi\u010De pomoc\xED <kbd>group</kbd> a pou\u017Eit\xED <kbd>group-*</kbd> k nastylov\xE1n\xED c\xEDlov\xE9ho elementu
<br>

\`\`\`html{0|1,3-6|0}
<a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
  <div class="flex items-center space-x-3">
    <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
  </div>
  <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
</a>
\`\`\`
<br>

- <span class="text-yellow-600">Podle sourozence</span> - ozna\u010Den\xEDm sourozence pomoc\xED <kbd>peer</kbd> a pou\u017Eit\xED <kbd>peer-*</kbd> k nastylov\xE1n\xED c\xEDlov\xE9ho elementu
<br>

\`\`\`html{0|4-5}
<form>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Email</span>
    <input type="email" class="peer ..."/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>
</form>
\`\`\``,frontmatter:{title:"Stylov\xE1n\xED podle rodi\u010De nebo sourozence"},index:0,start:0,end:31},inline:{raw:`---
src: ./pages/AT_tw_associatedstyles.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:10,start:115,end:120},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_associatedstyles.md",notesHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Sb,meta:{title:"Container",srcSequence:"./pages/NL_layout_container.md",slide:{raw:null,title:"Container",level:1,content:`# Container

T\u0159\xEDda\xA0<kbd>container</kbd> nastavuje\xA0<kbd>max-width</kbd> element tak, aby odpov\xEDdal\xA0<kbd>min-width</kbd> aktu\xE1ln\xEDmu break-pointu (jako jsme zvykl\xED u klasick\xE9ho n\xE1vrhu).

| T\u0159\xEDda | Break point | Vlastnosti |
| --- | --- | --- |
| container | \u017D\xE1dn\xFD | width: 100%; |
|  | sm\xA0(640px) | max-width: 640px; |
|  | md\xA0(768px) | max-width: 768px; |
|  | lg\xA0(1024px) | max-width: 1024px; |
|  | xl\xA0(1280px) | max-width: 1280px; |
|  | 2xl\xA0(1536px) | max-width: 1536px; |

Lze nap\u0159\xEDklad p\u0159idat <kbd>mx-auto</kbd> pro vycentrov\xE1n\xED obsahu, p\u0159\xEDpadn\u011B nastavit vycentrov\xE1n\xED p\u0159\xEDmo v configu.

\`\`\`html
<div class="container mx-auto px-4">
	<!-- ... -->
</div>
\`\`\``,frontmatter:{title:"Container",srcSequence:"./pages/NL_layout_container.md"},index:11,start:0,end:20,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_layout_container.md",raw:`# Container

T\u0159\xEDda\xA0<kbd>container</kbd> nastavuje\xA0<kbd>max-width</kbd> element tak, aby odpov\xEDdal\xA0<kbd>min-width</kbd> aktu\xE1ln\xEDmu break-pointu (jako jsme zvykl\xED u klasick\xE9ho n\xE1vrhu).

| T\u0159\xEDda | Break point | Vlastnosti |
| --- | --- | --- |
| container | \u017D\xE1dn\xFD | width: 100%; |
|  | sm\xA0(640px) | max-width: 640px; |
|  | md\xA0(768px) | max-width: 768px; |
|  | lg\xA0(1024px) | max-width: 1024px; |
|  | xl\xA0(1280px) | max-width: 1280px; |
|  | 2xl\xA0(1536px) | max-width: 1536px; |

Lze nap\u0159\xEDklad p\u0159idat <kbd>mx-auto</kbd> pro vycentrov\xE1n\xED obsahu, p\u0159\xEDpadn\u011B nastavit vycentrov\xE1n\xED p\u0159\xEDmo v configu.

\`\`\`html
<div class="container mx-auto px-4">
	<!-- ... -->
</div>
\`\`\``,title:"Container",level:1,content:`# Container

T\u0159\xEDda\xA0<kbd>container</kbd> nastavuje\xA0<kbd>max-width</kbd> element tak, aby odpov\xEDdal\xA0<kbd>min-width</kbd> aktu\xE1ln\xEDmu break-pointu (jako jsme zvykl\xED u klasick\xE9ho n\xE1vrhu).

| T\u0159\xEDda | Break point | Vlastnosti |
| --- | --- | --- |
| container | \u017D\xE1dn\xFD | width: 100%; |
|  | sm\xA0(640px) | max-width: 640px; |
|  | md\xA0(768px) | max-width: 768px; |
|  | lg\xA0(1024px) | max-width: 1024px; |
|  | xl\xA0(1280px) | max-width: 1280px; |
|  | 2xl\xA0(1536px) | max-width: 1536px; |

Lze nap\u0159\xEDklad p\u0159idat <kbd>mx-auto</kbd> pro vycentrov\xE1n\xED obsahu, p\u0159\xEDpadn\u011B nastavit vycentrov\xE1n\xED p\u0159\xEDmo v configu.

\`\`\`html
<div class="container mx-auto px-4">
	<!-- ... -->
</div>
\`\`\``,frontmatter:{title:"Container"},index:0,start:0,end:20},inline:{raw:`---
src: ./pages/NL_layout_container.md
---
`,content:"",frontmatter:{},index:11,start:120,end:124},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_layout_container.md",notesHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:zb,meta:{title:"Position",srcSequence:"./pages/NL_layout_position1.md",slide:{raw:null,title:"Position",level:1,content:`# Position
<br>

<!--<img src="assets/position1.jpeg" class="w-2/3 mx-auto mb-10">-->

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute left-0 top-0 h-16 w-16 ...">01</div>
</div>
\`\`\`

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-x-0 top-0 h-16 ...">02</div>
</div>
\`\`\`

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute top-0 right-0 h-16 w-16 ...">03</div>
</div>
\`\`\``,frontmatter:{title:"Position",srcSequence:"./pages/NL_layout_position1.md"},index:12,start:0,end:24,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_layout_position1.md",raw:`# Position
<br>

<!--<img src="assets/position1.jpeg" class="w-2/3 mx-auto mb-10">-->

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute left-0 top-0 h-16 w-16 ...">01</div>
</div>
\`\`\`

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-x-0 top-0 h-16 ...">02</div>
</div>
\`\`\`

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute top-0 right-0 h-16 w-16 ...">03</div>
</div>
\`\`\`

`,title:"Position",level:1,content:`# Position
<br>

<!--<img src="assets/position1.jpeg" class="w-2/3 mx-auto mb-10">-->

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute left-0 top-0 h-16 w-16 ...">01</div>
</div>
\`\`\`

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-x-0 top-0 h-16 ...">02</div>
</div>
\`\`\`

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute top-0 right-0 h-16 w-16 ...">03</div>
</div>
\`\`\``,frontmatter:{title:"Position"},index:0,start:0,end:24},inline:{raw:`---
src: ./pages/NL_layout_position1.md
---
`,content:"",frontmatter:{},index:12,start:124,end:128},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_layout_position1.md",notesHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Vb,meta:{srcSequence:"./pages/NL_layout_position2.md",slide:{raw:null,content:`<br>
<br>
<br>

<!--<img src="assets/position2.jpeg" class="w-2/3 mx-auto mb-10">-->

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-y-0 left-0 w-16 ...">04</div>
</div>
\`\`\`

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-0 ...">05</div>
</div>
\`\`\`

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-y-0 right-0 w-16 ...">06</div>
</div>
\`\`\``,frontmatter:{srcSequence:"./pages/NL_layout_position2.md"},index:13,start:0,end:23,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_layout_position2.md",raw:`<br>
<br>
<br>

<!--<img src="assets/position2.jpeg" class="w-2/3 mx-auto mb-10">-->

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-y-0 left-0 w-16 ...">04</div>
</div>
\`\`\`

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-0 ...">05</div>
</div>
\`\`\`

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-y-0 right-0 w-16 ...">06</div>
</div>
\`\`\``,content:`<br>
<br>
<br>

<!--<img src="assets/position2.jpeg" class="w-2/3 mx-auto mb-10">-->

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-y-0 left-0 w-16 ...">04</div>
</div>
\`\`\`

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-0 ...">05</div>
</div>
\`\`\`

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-y-0 right-0 w-16 ...">06</div>
</div>
\`\`\``,frontmatter:{},index:0,start:0,end:23},inline:{raw:`---
src: ./pages/NL_layout_position2.md
---
`,content:"",frontmatter:{},index:13,start:128,end:132},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_layout_position2.md",notesHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Yb,meta:{srcSequence:"./pages/NL_layout_position3.md",slide:{raw:null,content:`<br>
<br>
<br>

<!-- <img src="assets/position3.jpeg" class="w-2/3 mx-auto mb-10"> -->

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute bottom-0 left-0 h-16 w-16 ...">07</div>
</div>
\`\`\`

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-x-0 bottom-0 h-16 ...">08</div>
</div>
\`\`\`

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute bottom-0 right-0 h-16 w-16 ...">09</div>
</div>
\`\`\``,frontmatter:{srcSequence:"./pages/NL_layout_position3.md"},index:14,start:0,end:23,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_layout_position3.md",raw:`<br>
<br>
<br>

<!-- <img src="assets/position3.jpeg" class="w-2/3 mx-auto mb-10"> -->

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute bottom-0 left-0 h-16 w-16 ...">07</div>
</div>
\`\`\`

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-x-0 bottom-0 h-16 ...">08</div>
</div>
\`\`\`

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute bottom-0 right-0 h-16 w-16 ...">09</div>
</div>
\`\`\``,content:`<br>
<br>
<br>

<!-- <img src="assets/position3.jpeg" class="w-2/3 mx-auto mb-10"> -->

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute bottom-0 left-0 h-16 w-16 ...">07</div>
</div>
\`\`\`

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-x-0 bottom-0 h-16 ...">08</div>
</div>
\`\`\`

\`\`\`html
<div class="relative h-32 w-32 ...">
  <div class="absolute bottom-0 right-0 h-16 w-16 ...">09</div>
</div>
\`\`\``,frontmatter:{},index:0,start:0,end:23},inline:{raw:`---
src: ./pages/NL_layout_position3.md
---
`,content:"",frontmatter:{},index:14,start:132,end:136},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_layout_position3.md",notesHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:lk,meta:{title:"Responzivn\xED design",hide:!1,srcSequence:"./pages/AT_tw_responsivity.md",slide:{raw:null,title:"Responzivn\xED design",level:1,content:`# Responzivn\xED design

<br>
V Tailwind CSS je 5 p\u0159eddefinovan\xFDch breakpoint\u016F pro responsivn\xED design:
<br>

<span class="text-yellow-600">sm</span>  = @media (min-width: 640px) 
<br>
<span class="text-yellow-600">md</span>  =	@media (min-width: 768px) 
<br>
<span class="text-yellow-600">  lg</span>  = @media (min-width: 1024px) 
<br>
<span class="text-yellow-600">  xl</span>  =	@media (min-width: 1280px)
<br>
<span class="text-yellow-600">2xl</span> =	@media (min-width: 1536px)
<br>
<br>

Tailwind t\u0159\xEDdy jsou responsivn\xED a pou\u017E\xEDvaj\xED mobile-first p\u0159\xEDstup, <span class="text-yellow-600">nepou\u017E\xEDvejte tedy breakpoint <kbd>sm:</kbd> pro stylov\xE1n\xED mobiln\xED obrazovky</span>. 

<br>
P\u0159\xEDklad pou\u017Eit\xED breakpointu:
<br>

\`\`\`html{0|1-2}
<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
<img class="w-16 md:w-32 lg:w-48" src="...">
\`\`\``,frontmatter:{title:"Responzivn\xED design",hide:!1,srcSequence:"./pages/AT_tw_responsivity.md"},index:15,start:0,end:30,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_responsivity.md",raw:`# Responzivn\xED design

<br>
V Tailwind CSS je 5 p\u0159eddefinovan\xFDch breakpoint\u016F pro responsivn\xED design:
<br>

<span class="text-yellow-600">sm</span>  = @media (min-width: 640px) 
<br>
<span class="text-yellow-600">md</span>  =	@media (min-width: 768px) 
<br>
<span class="text-yellow-600">  lg</span>  = @media (min-width: 1024px) 
<br>
<span class="text-yellow-600">  xl</span>  =	@media (min-width: 1280px)
<br>
<span class="text-yellow-600">2xl</span> =	@media (min-width: 1536px)
<br>
<br>

Tailwind t\u0159\xEDdy jsou responsivn\xED a pou\u017E\xEDvaj\xED mobile-first p\u0159\xEDstup, <span class="text-yellow-600">nepou\u017E\xEDvejte tedy breakpoint <kbd>sm:</kbd> pro stylov\xE1n\xED mobiln\xED obrazovky</span>. 

<br>
P\u0159\xEDklad pou\u017Eit\xED breakpointu:
<br>

\`\`\`html{0|1-2}
<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
<img class="w-16 md:w-32 lg:w-48" src="...">
\`\`\`

`,title:"Responzivn\xED design",level:1,content:`# Responzivn\xED design

<br>
V Tailwind CSS je 5 p\u0159eddefinovan\xFDch breakpoint\u016F pro responsivn\xED design:
<br>

<span class="text-yellow-600">sm</span>  = @media (min-width: 640px) 
<br>
<span class="text-yellow-600">md</span>  =	@media (min-width: 768px) 
<br>
<span class="text-yellow-600">  lg</span>  = @media (min-width: 1024px) 
<br>
<span class="text-yellow-600">  xl</span>  =	@media (min-width: 1280px)
<br>
<span class="text-yellow-600">2xl</span> =	@media (min-width: 1536px)
<br>
<br>

Tailwind t\u0159\xEDdy jsou responsivn\xED a pou\u017E\xEDvaj\xED mobile-first p\u0159\xEDstup, <span class="text-yellow-600">nepou\u017E\xEDvejte tedy breakpoint <kbd>sm:</kbd> pro stylov\xE1n\xED mobiln\xED obrazovky</span>. 

<br>
P\u0159\xEDklad pou\u017Eit\xED breakpointu:
<br>

\`\`\`html{0|1-2}
<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
<img class="w-16 md:w-32 lg:w-48" src="...">
\`\`\``,frontmatter:{title:"Responzivn\xED design"},index:0,start:0,end:30},inline:{raw:`---
src: ./pages/AT_tw_responsivity.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:15,start:136,end:141},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_responsivity.md",notesHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:uk,meta:{title:"P\u0159izp\u016Fsoben\xED breakpoint\u016F",hide:!1,srcSequence:"./pages/AT_tw_customresponsivity.md",slide:{raw:null,title:"P\u0159izp\u016Fsoben\xED breakpoint\u016F",level:1,content:`# P\u0159izp\u016Fsoben\xED breakpoint\u016F

- <span class="text-yellow-600">Breakpointy lze upravit, p\u0159\xEDpadn\u011B p\u0159idat v theme v tailwind.config.cjs:</span>
<br>

\`\`\`js{0|2-5}
  theme: {
    screens: {
      lg: '976px',
      xl: '1440px',
    }
  }
\`\`\`
<br>

- <span class="text-yellow-600">Pou\u017Eit\xED arbitrary values:</span>
<br>

\`\`\`html{0|1|0}
    <div class="min-[320px]:text-center max-[600px]:bg-sky-300"></div>
\`\`\``,frontmatter:{title:"P\u0159izp\u016Fsoben\xED breakpoint\u016F",hide:!1,srcSequence:"./pages/AT_tw_customresponsivity.md"},index:16,start:0,end:22,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_customresponsivity.md",raw:`# P\u0159izp\u016Fsoben\xED breakpoint\u016F

- <span class="text-yellow-600">Breakpointy lze upravit, p\u0159\xEDpadn\u011B p\u0159idat v theme v tailwind.config.cjs:</span>
<br>

\`\`\`js{0|2-5}
  theme: {
    screens: {
      lg: '976px',
      xl: '1440px',
    }
  }
\`\`\`
<br>

- <span class="text-yellow-600">Pou\u017Eit\xED arbitrary values:</span>
<br>

\`\`\`html{0|1|0}
    <div class="min-[320px]:text-center max-[600px]:bg-sky-300"></div>
\`\`\`
`,title:"P\u0159izp\u016Fsoben\xED breakpoint\u016F",level:1,content:`# P\u0159izp\u016Fsoben\xED breakpoint\u016F

- <span class="text-yellow-600">Breakpointy lze upravit, p\u0159\xEDpadn\u011B p\u0159idat v theme v tailwind.config.cjs:</span>
<br>

\`\`\`js{0|2-5}
  theme: {
    screens: {
      lg: '976px',
      xl: '1440px',
    }
  }
\`\`\`
<br>

- <span class="text-yellow-600">Pou\u017Eit\xED arbitrary values:</span>
<br>

\`\`\`html{0|1|0}
    <div class="min-[320px]:text-center max-[600px]:bg-sky-300"></div>
\`\`\``,frontmatter:{title:"P\u0159izp\u016Fsoben\xED breakpoint\u016F"},index:0,start:0,end:22},inline:{raw:`---
src: ./pages/AT_tw_customresponsivity.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:16,start:141,end:146},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_customresponsivity.md",notesHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:kk,meta:{title:"Recyklace styl\u016F",hide:!1,srcSequence:"./pages/AT_tw_reusingstyles.md",slide:{raw:null,title:"Recyklace styl\u016F",level:1,content:`# Recyklace styl\u016F

<br>
<span class="text-sm">Aby se zamezilo neust\xE1l\xE9mu opakov\xE1n\xED kousk\u016F k\xF3du se stejn\xFDmi styly, lze pou\u017E\xEDt n\u011Bkolik zp\u016Fsob\u016F:</span>
<br>

- <span class="text-sm text-yellow-600">Cykly, mapov\xE1n\xED, vyjmut\xED k\xF3du jako komponenty</span>
<br>

\`\`\`html{0|2-4|0}
  <div class="mt-3 flex -space-x-2 overflow-hidden">
    {#each contributors as user}
      <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="{user.avatarUrl}" alt="{user.handle}"/>
    {/each}
  </div>
\`\`\`


- <span class="text-sm text-yellow-600">Pou\u017Eit\xED t\u0159\xEDdy pomoc\xED @apply v tailwind.config.cjs</span>
<br>

\`\`\`css{0|1-5|0}
@layer components {
  .btn-primary {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
}
\`\`\`

\`\`\`html{0|1-3}
<button class="btn-primary">
  Save changes
</button>
\`\`\``,frontmatter:{title:"Recyklace styl\u016F",hide:!1,srcSequence:"./pages/AT_tw_reusingstyles.md"},index:17,start:0,end:35,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_reusingstyles.md",raw:`# Recyklace styl\u016F

<br>
<span class="text-sm">Aby se zamezilo neust\xE1l\xE9mu opakov\xE1n\xED kousk\u016F k\xF3du se stejn\xFDmi styly, lze pou\u017E\xEDt n\u011Bkolik zp\u016Fsob\u016F:</span>
<br>

- <span class="text-sm text-yellow-600">Cykly, mapov\xE1n\xED, vyjmut\xED k\xF3du jako komponenty</span>
<br>

\`\`\`html{0|2-4|0}
  <div class="mt-3 flex -space-x-2 overflow-hidden">
    {#each contributors as user}
      <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="{user.avatarUrl}" alt="{user.handle}"/>
    {/each}
  </div>
\`\`\`


- <span class="text-sm text-yellow-600">Pou\u017Eit\xED t\u0159\xEDdy pomoc\xED @apply v tailwind.config.cjs</span>
<br>

\`\`\`css{0|1-5|0}
@layer components {
  .btn-primary {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
}
\`\`\`

\`\`\`html{0|1-3}
<button class="btn-primary">
  Save changes
</button>
\`\`\`
`,title:"Recyklace styl\u016F",level:1,content:`# Recyklace styl\u016F

<br>
<span class="text-sm">Aby se zamezilo neust\xE1l\xE9mu opakov\xE1n\xED kousk\u016F k\xF3du se stejn\xFDmi styly, lze pou\u017E\xEDt n\u011Bkolik zp\u016Fsob\u016F:</span>
<br>

- <span class="text-sm text-yellow-600">Cykly, mapov\xE1n\xED, vyjmut\xED k\xF3du jako komponenty</span>
<br>

\`\`\`html{0|2-4|0}
  <div class="mt-3 flex -space-x-2 overflow-hidden">
    {#each contributors as user}
      <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="{user.avatarUrl}" alt="{user.handle}"/>
    {/each}
  </div>
\`\`\`


- <span class="text-sm text-yellow-600">Pou\u017Eit\xED t\u0159\xEDdy pomoc\xED @apply v tailwind.config.cjs</span>
<br>

\`\`\`css{0|1-5|0}
@layer components {
  .btn-primary {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
}
\`\`\`

\`\`\`html{0|1-3}
<button class="btn-primary">
  Save changes
</button>
\`\`\``,frontmatter:{title:"Recyklace styl\u016F"},index:0,start:0,end:35},inline:{raw:`---
src: ./pages/AT_tw_reusingstyles.md
hide: false
---


<!-- Nel\u010Da -->


`,content:"",frontmatter:{hide:!1},note:"Nel\u010Da",index:17,start:146,end:156},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/AT_tw_reusingstyles.md",notesHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Bk,meta:{layout:"center",slide:{raw:`---
layout: center

---
# 2. Grid


<style>
  h1 {
    font-size: 5rem !important;
    padding: 8rem;
    font-weight: 500
  }
</style>
`,title:"2. Grid",level:1,content:`# 2. Grid


<style>
  h1 {
    font-size: 5rem !important;
    padding: 8rem;
    font-weight: 500
  }
</style>`,frontmatter:{layout:"center"},index:18,start:161,end:176,notesHTML:"",filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Tk,meta:{title:"CSS Grid a jeho v\xFDhody",hide:!1,srcSequence:"./pages/NL_grid_benefits.md",slide:{raw:null,title:"CSS Grid a jeho v\xFDhody",level:1,content:`# CSS Grid a jeho v\xFDhody

<br>

CSS Grid je v\xFDkonn\xFD n\xE1stroj, kter\xFD umo\u017E\u0148uje vytv\xE1\u0159et na webu dvourozm\u011Brn\xE1 rozvr\u017Een\xED pro sloupce a \u0159\xE1dky.\xA0

<br>

<p class="text-2xl mt-12 text-gray-400 font-semibold">V\xFDhody gridu:</p>

- \u{1F4DD} <span class="text-yellow-600">**Flexibilita**</span> - CSS Grid je velmi flexibiln\xED a pou\u017Eiteln\xFD na spoustu situac\xED.
- \u{1F3A8} <span class="text-yellow-600">**Dvourozm\u011Brnost**</span> - CSS Grid snad\u0148uje vytv\xE1\u0159en\xED dvourozm\u011Brn\xFDch rozvr\u017Een\xED. Obecn\u011B vzato, CSS Grid Layout n\xE1m pom\xE1h\xE1 vytv\xE1\u0159et slo\u017Eit\u011Bj\u0161\xED rozvr\u017Een\xED pomoc\xED sloupc\u016F i \u0159\xE1dk\u016F.
- \u{1F9D1}\u200D\u{1F4BB} <span class="text-yellow-600">**'Developer Friendly'**</span> - pro zm\u011Bnu pozice polo\u017Eky pomoc\xED m\u0159\xED\u017Eky CSS nemus\xEDte m\u011Bnit HTML k\xF3d.
- \u{1F6E0} <span class="text-yellow-600">**Jednoduchost**</span> - CSS Grid se tak\xE9 snadno pou\u017E\xEDv\xE1 a je podporov\xE1n v\u011Bt\u0161inou webov\xFDch prohl\xED\u017Ee\u010D\u016F.`,frontmatter:{title:"CSS Grid a jeho v\xFDhody",hide:!1,srcSequence:"./pages/NL_grid_benefits.md"},index:19,start:0,end:15,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_benefits.md",raw:`# CSS Grid a jeho v\xFDhody

<br>

CSS Grid je v\xFDkonn\xFD n\xE1stroj, kter\xFD umo\u017E\u0148uje vytv\xE1\u0159et na webu dvourozm\u011Brn\xE1 rozvr\u017Een\xED pro sloupce a \u0159\xE1dky.\xA0

<br>

<p class="text-2xl mt-12 text-gray-400 font-semibold">V\xFDhody gridu:</p>

- \u{1F4DD} <span class="text-yellow-600">**Flexibilita**</span> - CSS Grid je velmi flexibiln\xED a pou\u017Eiteln\xFD na spoustu situac\xED.
- \u{1F3A8} <span class="text-yellow-600">**Dvourozm\u011Brnost**</span> - CSS Grid snad\u0148uje vytv\xE1\u0159en\xED dvourozm\u011Brn\xFDch rozvr\u017Een\xED. Obecn\u011B vzato, CSS Grid Layout n\xE1m pom\xE1h\xE1 vytv\xE1\u0159et slo\u017Eit\u011Bj\u0161\xED rozvr\u017Een\xED pomoc\xED sloupc\u016F i \u0159\xE1dk\u016F.
- \u{1F9D1}\u200D\u{1F4BB} <span class="text-yellow-600">**'Developer Friendly'**</span> - pro zm\u011Bnu pozice polo\u017Eky pomoc\xED m\u0159\xED\u017Eky CSS nemus\xEDte m\u011Bnit HTML k\xF3d.
- \u{1F6E0} <span class="text-yellow-600">**Jednoduchost**</span> - CSS Grid se tak\xE9 snadno pou\u017E\xEDv\xE1 a je podporov\xE1n v\u011Bt\u0161inou webov\xFDch prohl\xED\u017Ee\u010D\u016F.
`,title:"CSS Grid a jeho v\xFDhody",level:1,content:`# CSS Grid a jeho v\xFDhody

<br>

CSS Grid je v\xFDkonn\xFD n\xE1stroj, kter\xFD umo\u017E\u0148uje vytv\xE1\u0159et na webu dvourozm\u011Brn\xE1 rozvr\u017Een\xED pro sloupce a \u0159\xE1dky.\xA0

<br>

<p class="text-2xl mt-12 text-gray-400 font-semibold">V\xFDhody gridu:</p>

- \u{1F4DD} <span class="text-yellow-600">**Flexibilita**</span> - CSS Grid je velmi flexibiln\xED a pou\u017Eiteln\xFD na spoustu situac\xED.
- \u{1F3A8} <span class="text-yellow-600">**Dvourozm\u011Brnost**</span> - CSS Grid snad\u0148uje vytv\xE1\u0159en\xED dvourozm\u011Brn\xFDch rozvr\u017Een\xED. Obecn\u011B vzato, CSS Grid Layout n\xE1m pom\xE1h\xE1 vytv\xE1\u0159et slo\u017Eit\u011Bj\u0161\xED rozvr\u017Een\xED pomoc\xED sloupc\u016F i \u0159\xE1dk\u016F.
- \u{1F9D1}\u200D\u{1F4BB} <span class="text-yellow-600">**'Developer Friendly'**</span> - pro zm\u011Bnu pozice polo\u017Eky pomoc\xED m\u0159\xED\u017Eky CSS nemus\xEDte m\u011Bnit HTML k\xF3d.
- \u{1F6E0} <span class="text-yellow-600">**Jednoduchost**</span> - CSS Grid se tak\xE9 snadno pou\u017E\xEDv\xE1 a je podporov\xE1n v\u011Bt\u0161inou webov\xFDch prohl\xED\u017Ee\u010D\u016F.`,frontmatter:{title:"CSS Grid a jeho v\xFDhody"},index:0,start:0,end:15},inline:{raw:`--- 
src: ./pages/NL_grid_benefits.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:20,start:176,end:181},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_benefits.md",notesHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Mk,meta:{title:"Vytvo\u0159en\xED gridu",hide:!1,srcSequence:"./pages/NL_grid_create.md",slide:{raw:null,title:"Vytvo\u0159en\xED gridu",level:1,content:`# Vytvo\u0159en\xED gridu

<br>

Chcete-li nastavit grid, mus\xEDte m\xEDt <span class="text-yellow-600">*grid container*</span> i <span class="text-yellow-600">*grid items*</span>. Grid container bude nad\u0159azen\xFDm prvkem, kter\xFD obsahuje grid items jako vno\u0159en\xE9 polo\u017Eky a aplikuje na n\u011B zast\u0159e\u0161uj\xEDc\xED styly a positioning.

Chcete-li zm\u011Bnit prvek HTML na kontejner m\u0159\xED\u017Eky, mus\xEDte nastavit vlastnost <kbd>display</kbd> prvku na jednu ze dvou hodnot:

- <kbd>grid</kbd>\xA0\u2013 pro m\u0159\xED\u017Eku na \xFArovni bloku.
- <kbd>inline-grid</kbd>\xA0\u2013 pro inline m\u0159\xED\u017Eku (podobn\u011B jako inline-block).`,frontmatter:{title:"Vytvo\u0159en\xED gridu",hide:!1,srcSequence:"./pages/NL_grid_create.md"},index:20,start:0,end:10,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_create.md",raw:`# Vytvo\u0159en\xED gridu

<br>

Chcete-li nastavit grid, mus\xEDte m\xEDt <span class="text-yellow-600">*grid container*</span> i <span class="text-yellow-600">*grid items*</span>. Grid container bude nad\u0159azen\xFDm prvkem, kter\xFD obsahuje grid items jako vno\u0159en\xE9 polo\u017Eky a aplikuje na n\u011B zast\u0159e\u0161uj\xEDc\xED styly a positioning.

Chcete-li zm\u011Bnit prvek HTML na kontejner m\u0159\xED\u017Eky, mus\xEDte nastavit vlastnost <kbd>display</kbd> prvku na jednu ze dvou hodnot:

- <kbd>grid</kbd>\xA0\u2013 pro m\u0159\xED\u017Eku na \xFArovni bloku.
- <kbd>inline-grid</kbd>\xA0\u2013 pro inline m\u0159\xED\u017Eku (podobn\u011B jako inline-block).`,title:"Vytvo\u0159en\xED gridu",level:1,content:`# Vytvo\u0159en\xED gridu

<br>

Chcete-li nastavit grid, mus\xEDte m\xEDt <span class="text-yellow-600">*grid container*</span> i <span class="text-yellow-600">*grid items*</span>. Grid container bude nad\u0159azen\xFDm prvkem, kter\xFD obsahuje grid items jako vno\u0159en\xE9 polo\u017Eky a aplikuje na n\u011B zast\u0159e\u0161uj\xEDc\xED styly a positioning.

Chcete-li zm\u011Bnit prvek HTML na kontejner m\u0159\xED\u017Eky, mus\xEDte nastavit vlastnost <kbd>display</kbd> prvku na jednu ze dvou hodnot:

- <kbd>grid</kbd>\xA0\u2013 pro m\u0159\xED\u017Eku na \xFArovni bloku.
- <kbd>inline-grid</kbd>\xA0\u2013 pro inline m\u0159\xED\u017Eku (podobn\u011B jako inline-block).`,frontmatter:{title:"Vytvo\u0159en\xED gridu"},index:0,start:0,end:10},inline:{raw:`--- 
src: ./pages/NL_grid_create.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:21,start:181,end:186},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_create.md",notesHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:Uk,meta:{title:"Vytv\xE1\u0159en\xED sloupc\u016F a \u0159\xE1dk\u016F, grid-template",hide:!1,srcSequence:"./pages/NL_grid_grid-template.md",slide:{raw:null,title:"Vytv\xE1\u0159en\xED sloupc\u016F a \u0159\xE1dk\u016F, grid-template",level:1,content:`# Vytv\xE1\u0159en\xED sloupc\u016F a \u0159\xE1dk\u016F, grid-template

<p class="text-sm">Ve v\xFDchoz\xEDm nastaven\xED obsahuj\xED m\u0159\xED\u017Eky pouze jeden sloupec. Pokud byste za\u010Dali p\u0159id\xE1vat polo\u017Eky, ka\u017Ed\xE1 polo\u017Eka by byla um\xEDst\u011Bna na nov\xFD \u0159\xE1dek (a to by nebyl grid, \u017Ee jo!). Abychom to zm\u011Bnili, mus\xEDme explicitn\u011B definovat po\u010Det \u0159\xE1dk\u016F a sloupc\u016F v na\u0161\xED m\u0159\xED\u017Ece.</p>

Sloupce na\u0161\xED m\u0159\xED\u017Eky m\u016F\u017Eeme definovat pomoc\xED vlastnosti CSS <kbd>grid-template-columns</kbd>. K ur\u010Den\xED po\u010Dtu a velikosti \u0159\xE1dk\u016F pou\u017Eijeme vlastnost <kbd>grid-template-rows</kbd>.

Zkr\xE1cen\xE1 vlastnost <kbd>grid-template</kbd> m\u016F\u017Ee nahradit p\u0159edchoz\xED dv\u011B CSS vlastnosti:

\`\`\`css {1-6|2|5-6|7-8}
.grid {
	display: grid;
	width: 1000px;
	height: 400px;
	grid-template: 200px 100px 100px / 20% 10% 70%; 
	
    /* fraction: */ 
    grid-template: 2fr 1fr 1fr / 1fr 3fr 1fr;
}

\`\`\`

<kbd>fr</kbd>\xA0je mo\u017En\xE9 pou\u017E\xEDt i s jin\xFDmi jednotkami. Kdy\u017E k tomu dojde, ka\u017Ed\xE9 \u201Efr\u201C\xA0p\u0159edstavuje zlomek\xA0*dostupn\xE9ho*\xA0prostoru.`,frontmatter:{title:"Vytv\xE1\u0159en\xED sloupc\u016F a \u0159\xE1dk\u016F, grid-template",hide:!1,srcSequence:"./pages/NL_grid_grid-template.md"},index:21,start:0,end:23,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-template.md",raw:`# Vytv\xE1\u0159en\xED sloupc\u016F a \u0159\xE1dk\u016F, grid-template

<p class="text-sm">Ve v\xFDchoz\xEDm nastaven\xED obsahuj\xED m\u0159\xED\u017Eky pouze jeden sloupec. Pokud byste za\u010Dali p\u0159id\xE1vat polo\u017Eky, ka\u017Ed\xE1 polo\u017Eka by byla um\xEDst\u011Bna na nov\xFD \u0159\xE1dek (a to by nebyl grid, \u017Ee jo!). Abychom to zm\u011Bnili, mus\xEDme explicitn\u011B definovat po\u010Det \u0159\xE1dk\u016F a sloupc\u016F v na\u0161\xED m\u0159\xED\u017Ece.</p>

Sloupce na\u0161\xED m\u0159\xED\u017Eky m\u016F\u017Eeme definovat pomoc\xED vlastnosti CSS <kbd>grid-template-columns</kbd>. K ur\u010Den\xED po\u010Dtu a velikosti \u0159\xE1dk\u016F pou\u017Eijeme vlastnost <kbd>grid-template-rows</kbd>.

Zkr\xE1cen\xE1 vlastnost <kbd>grid-template</kbd> m\u016F\u017Ee nahradit p\u0159edchoz\xED dv\u011B CSS vlastnosti:

\`\`\`css {1-6|2|5-6|7-8}
.grid {
	display: grid;
	width: 1000px;
	height: 400px;
	grid-template: 200px 100px 100px / 20% 10% 70%; 
	
    /* fraction: */ 
    grid-template: 2fr 1fr 1fr / 1fr 3fr 1fr;
}

\`\`\`

<kbd>fr</kbd>\xA0je mo\u017En\xE9 pou\u017E\xEDt i s jin\xFDmi jednotkami. Kdy\u017E k tomu dojde, ka\u017Ed\xE9 \u201Efr\u201C\xA0p\u0159edstavuje zlomek\xA0*dostupn\xE9ho*\xA0prostoru.
`,title:"Vytv\xE1\u0159en\xED sloupc\u016F a \u0159\xE1dk\u016F, grid-template",level:1,content:`# Vytv\xE1\u0159en\xED sloupc\u016F a \u0159\xE1dk\u016F, grid-template

<p class="text-sm">Ve v\xFDchoz\xEDm nastaven\xED obsahuj\xED m\u0159\xED\u017Eky pouze jeden sloupec. Pokud byste za\u010Dali p\u0159id\xE1vat polo\u017Eky, ka\u017Ed\xE1 polo\u017Eka by byla um\xEDst\u011Bna na nov\xFD \u0159\xE1dek (a to by nebyl grid, \u017Ee jo!). Abychom to zm\u011Bnili, mus\xEDme explicitn\u011B definovat po\u010Det \u0159\xE1dk\u016F a sloupc\u016F v na\u0161\xED m\u0159\xED\u017Ece.</p>

Sloupce na\u0161\xED m\u0159\xED\u017Eky m\u016F\u017Eeme definovat pomoc\xED vlastnosti CSS <kbd>grid-template-columns</kbd>. K ur\u010Den\xED po\u010Dtu a velikosti \u0159\xE1dk\u016F pou\u017Eijeme vlastnost <kbd>grid-template-rows</kbd>.

Zkr\xE1cen\xE1 vlastnost <kbd>grid-template</kbd> m\u016F\u017Ee nahradit p\u0159edchoz\xED dv\u011B CSS vlastnosti:

\`\`\`css {1-6|2|5-6|7-8}
.grid {
	display: grid;
	width: 1000px;
	height: 400px;
	grid-template: 200px 100px 100px / 20% 10% 70%; 
	
    /* fraction: */ 
    grid-template: 2fr 1fr 1fr / 1fr 3fr 1fr;
}

\`\`\`

<kbd>fr</kbd>\xA0je mo\u017En\xE9 pou\u017E\xEDt i s jin\xFDmi jednotkami. Kdy\u017E k tomu dojde, ka\u017Ed\xE9 \u201Efr\u201C\xA0p\u0159edstavuje zlomek\xA0*dostupn\xE9ho*\xA0prostoru.`,frontmatter:{title:"Vytv\xE1\u0159en\xED sloupc\u016F a \u0159\xE1dk\u016F, grid-template"},index:0,start:0,end:23},inline:{raw:`--- 
src: ./pages/NL_grid_grid-template.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:22,start:186,end:191},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-template.md",notesHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Qk,meta:{title:"Repeat()",hide:!1,srcSequence:"./pages/NL_grid_repeat1.md",slide:{raw:null,title:"Repeat()",level:1,content:`# Repeat()

Vlastnosti, kter\xE9 definuj\xED po\u010Det \u0159\xE1dk\u016F a sloupc\u016F v gridu, mohou m\xEDt funkci jako hodnotu. 

Jednou z t\u011Bchto funkc\xED je <kbd>repeat()</kbd>. Funkce <kbd>repeat()</kbd> byla vytvo\u0159ena speci\xE1ln\u011B pro CSS Grid.

\`\`\`css{0|4|0}
.grid {
	display: grid;
	width: 300px;
	grid-template-columns: repeat(3, 100px);
}
\`\`\`

Funkce  <kbd>repeat()</kbd> bude duplikovat specifikace pro \u0159\xE1dky nebo sloupce dan\xFD po\u010Det opakov\xE1n\xED. Ve v\xFD\u0161e uveden\xE9m p\u0159\xEDkladu pou\u017Eit\xED funkce  <kbd>repeat()</kbd> zp\u016Fsob\xED, \u017Ee layout bude m\xEDt t\u0159i sloupce, ka\u017Ed\xFD o \u0161\xED\u0159ce 100 pixel\u016F. 

Je to vlastn\u011B stejn\xE9 jako n\xE1sleduj\xEDc\xED k\xF3d:

\`\`\`css {0|4}
.grid {
	display: grid;
	width: 300px;
	grid-template-columns: 100px 100px 100px;
}
\`\`\``,frontmatter:{title:"Repeat()",hide:!1,srcSequence:"./pages/NL_grid_repeat1.md"},index:22,start:0,end:25,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_repeat1.md",raw:`# Repeat()

Vlastnosti, kter\xE9 definuj\xED po\u010Det \u0159\xE1dk\u016F a sloupc\u016F v gridu, mohou m\xEDt funkci jako hodnotu. 

Jednou z t\u011Bchto funkc\xED je <kbd>repeat()</kbd>. Funkce <kbd>repeat()</kbd> byla vytvo\u0159ena speci\xE1ln\u011B pro CSS Grid.

\`\`\`css{0|4|0}
.grid {
	display: grid;
	width: 300px;
	grid-template-columns: repeat(3, 100px);
}
\`\`\`

Funkce  <kbd>repeat()</kbd> bude duplikovat specifikace pro \u0159\xE1dky nebo sloupce dan\xFD po\u010Det opakov\xE1n\xED. Ve v\xFD\u0161e uveden\xE9m p\u0159\xEDkladu pou\u017Eit\xED funkce  <kbd>repeat()</kbd> zp\u016Fsob\xED, \u017Ee layout bude m\xEDt t\u0159i sloupce, ka\u017Ed\xFD o \u0161\xED\u0159ce 100 pixel\u016F. 

Je to vlastn\u011B stejn\xE9 jako n\xE1sleduj\xEDc\xED k\xF3d:

\`\`\`css {0|4}
.grid {
	display: grid;
	width: 300px;
	grid-template-columns: 100px 100px 100px;
}
\`\`\``,title:"Repeat()",level:1,content:`# Repeat()

Vlastnosti, kter\xE9 definuj\xED po\u010Det \u0159\xE1dk\u016F a sloupc\u016F v gridu, mohou m\xEDt funkci jako hodnotu. 

Jednou z t\u011Bchto funkc\xED je <kbd>repeat()</kbd>. Funkce <kbd>repeat()</kbd> byla vytvo\u0159ena speci\xE1ln\u011B pro CSS Grid.

\`\`\`css{0|4|0}
.grid {
	display: grid;
	width: 300px;
	grid-template-columns: repeat(3, 100px);
}
\`\`\`

Funkce  <kbd>repeat()</kbd> bude duplikovat specifikace pro \u0159\xE1dky nebo sloupce dan\xFD po\u010Det opakov\xE1n\xED. Ve v\xFD\u0161e uveden\xE9m p\u0159\xEDkladu pou\u017Eit\xED funkce  <kbd>repeat()</kbd> zp\u016Fsob\xED, \u017Ee layout bude m\xEDt t\u0159i sloupce, ka\u017Ed\xFD o \u0161\xED\u0159ce 100 pixel\u016F. 

Je to vlastn\u011B stejn\xE9 jako n\xE1sleduj\xEDc\xED k\xF3d:

\`\`\`css {0|4}
.grid {
	display: grid;
	width: 300px;
	grid-template-columns: 100px 100px 100px;
}
\`\`\``,frontmatter:{title:"Repeat()"},index:0,start:0,end:25},inline:{raw:`--- 
src: ./pages/NL_grid_repeat1.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:23,start:191,end:196},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_repeat1.md",notesHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:cw,meta:{hide:!1,srcSequence:"./pages/NL_grid_repeat2.md",slide:{raw:null,content:`#
 <br>
 <br>
 Funkce <kbd>repeat()</kbd> je zvl\xE1\u0161t\u011B u\u017Eite\u010Dn\xE1 s\xA0<kbd>fr</kbd>. Nap\u0159\xEDklad\xA0<kbd>repeat(5, 1fr)</kbd>\xA0rozd\u011Bl\xED layout na p\u011Bt stejn\xFDch \u0159\xE1dk\u016F nebo sloupc\u016F.

A kone\u010Dn\u011B, druh\xFD parametr\xA0<kbd>repeat()</kbd>\xA0m\u016F\u017Ee m\xEDt v\xEDce hodnot:

\`\`\`css {0|4}
.grid {
	display: grid;
	width: 300px;
	grid-template-columns: repeat(2, 20px 50px)
}
\`\`\`
<p class="italic text-sm">Tento k\xF3d vytvo\u0159\xED \u010Dty\u0159i sloupce, kde prvn\xED a t\u0159et\xED sloupec bude m\xEDt \u0161\xED\u0159ku 20 pixel\u016F a druh\xFD a \u010Dtvrt\xFD bude \u0161\xED\u0159ku 50 pixel\u016F.</p>`,frontmatter:{hide:!1,srcSequence:"./pages/NL_grid_repeat2.md"},index:23,start:0,end:15,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_repeat2.md",raw:` #
 <br>
 <br>
 Funkce <kbd>repeat()</kbd> je zvl\xE1\u0161t\u011B u\u017Eite\u010Dn\xE1 s\xA0<kbd>fr</kbd>. Nap\u0159\xEDklad\xA0<kbd>repeat(5, 1fr)</kbd>\xA0rozd\u011Bl\xED layout na p\u011Bt stejn\xFDch \u0159\xE1dk\u016F nebo sloupc\u016F.

A kone\u010Dn\u011B, druh\xFD parametr\xA0<kbd>repeat()</kbd>\xA0m\u016F\u017Ee m\xEDt v\xEDce hodnot:

\`\`\`css {0|4}
.grid {
	display: grid;
	width: 300px;
	grid-template-columns: repeat(2, 20px 50px)
}
\`\`\`
<p class="italic text-sm">Tento k\xF3d vytvo\u0159\xED \u010Dty\u0159i sloupce, kde prvn\xED a t\u0159et\xED sloupec bude m\xEDt \u0161\xED\u0159ku 20 pixel\u016F a druh\xFD a \u010Dtvrt\xFD bude \u0161\xED\u0159ku 50 pixel\u016F.</p>`,content:`#
 <br>
 <br>
 Funkce <kbd>repeat()</kbd> je zvl\xE1\u0161t\u011B u\u017Eite\u010Dn\xE1 s\xA0<kbd>fr</kbd>. Nap\u0159\xEDklad\xA0<kbd>repeat(5, 1fr)</kbd>\xA0rozd\u011Bl\xED layout na p\u011Bt stejn\xFDch \u0159\xE1dk\u016F nebo sloupc\u016F.

A kone\u010Dn\u011B, druh\xFD parametr\xA0<kbd>repeat()</kbd>\xA0m\u016F\u017Ee m\xEDt v\xEDce hodnot:

\`\`\`css {0|4}
.grid {
	display: grid;
	width: 300px;
	grid-template-columns: repeat(2, 20px 50px)
}
\`\`\`
<p class="italic text-sm">Tento k\xF3d vytvo\u0159\xED \u010Dty\u0159i sloupce, kde prvn\xED a t\u0159et\xED sloupec bude m\xEDt \u0161\xED\u0159ku 20 pixel\u016F a druh\xFD a \u010Dtvrt\xFD bude \u0161\xED\u0159ku 50 pixel\u016F.</p>`,frontmatter:{},index:0,start:0,end:15},inline:{raw:`--- 
src: ./pages/NL_grid_repeat2.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:24,start:196,end:201},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_repeat2.md",notesHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:mw,meta:{title:"minmax()",hide:!1,srcSequence:"./pages/NL_grid_minmax.md",slide:{raw:null,title:"minmax()",level:1,content:`# minmax()

<p class="text-sm">Dosud m\u011Bly v\u0161echny m\u0159\xED\u017Eky, se kter\xFDmi jsme pracovali, pevnou velikost. N\u011Bkdy v\u0161ak m\u016F\u017Eete cht\xEDt, aby se velikost m\u0159\xED\u017Eky zm\u011Bnila na z\xE1klad\u011B velikosti va\u0161eho webov\xE9ho prohl\xED\u017Ee\u010De.</p>

V t\u011Bchto situac\xEDch m\u016F\u017Eete cht\xEDt zabr\xE1nit tomu, aby byl \u0159\xE1dek nebo sloupec p\u0159\xEDli\u0161 velk\xFD nebo p\u0159\xEDli\u0161 mal\xFD. Pokud m\xE1te nap\u0159\xEDklad v m\u0159\xED\u017Ece obr\xE1zek o \u0161\xED\u0159ce 100 pixel\u016F, pravd\u011Bpodobn\u011B nechcete, aby jeho sloupec byl u\u017E\u0161\xED ne\u017E 100 pixel\u016F! 

Tento probl\xE9m n\xE1m m\u016F\u017Ee pomoci vy\u0159e\u0161it funkce <kbd>minmax()</kbd>.

\`\`\`css {3}
.grid {
\xA0\xA0display: grid;
\xA0\xA0grid-template-columns: 100px minmax(100px, 500px) 100px;
}
\`\`\``,frontmatter:{title:"minmax()",hide:!1,srcSequence:"./pages/NL_grid_minmax.md"},index:24,start:0,end:14,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_minmax.md",raw:`# minmax()

<p class="text-sm">Dosud m\u011Bly v\u0161echny m\u0159\xED\u017Eky, se kter\xFDmi jsme pracovali, pevnou velikost. N\u011Bkdy v\u0161ak m\u016F\u017Eete cht\xEDt, aby se velikost m\u0159\xED\u017Eky zm\u011Bnila na z\xE1klad\u011B velikosti va\u0161eho webov\xE9ho prohl\xED\u017Ee\u010De.</p>

V t\u011Bchto situac\xEDch m\u016F\u017Eete cht\xEDt zabr\xE1nit tomu, aby byl \u0159\xE1dek nebo sloupec p\u0159\xEDli\u0161 velk\xFD nebo p\u0159\xEDli\u0161 mal\xFD. Pokud m\xE1te nap\u0159\xEDklad v m\u0159\xED\u017Ece obr\xE1zek o \u0161\xED\u0159ce 100 pixel\u016F, pravd\u011Bpodobn\u011B nechcete, aby jeho sloupec byl u\u017E\u0161\xED ne\u017E 100 pixel\u016F! 

Tento probl\xE9m n\xE1m m\u016F\u017Ee pomoci vy\u0159e\u0161it funkce <kbd>minmax()</kbd>.

\`\`\`css {3}
.grid {
\xA0\xA0display: grid;
\xA0\xA0grid-template-columns: 100px minmax(100px, 500px) 100px;
}
\`\`\``,title:"minmax()",level:1,content:`# minmax()

<p class="text-sm">Dosud m\u011Bly v\u0161echny m\u0159\xED\u017Eky, se kter\xFDmi jsme pracovali, pevnou velikost. N\u011Bkdy v\u0161ak m\u016F\u017Eete cht\xEDt, aby se velikost m\u0159\xED\u017Eky zm\u011Bnila na z\xE1klad\u011B velikosti va\u0161eho webov\xE9ho prohl\xED\u017Ee\u010De.</p>

V t\u011Bchto situac\xEDch m\u016F\u017Eete cht\xEDt zabr\xE1nit tomu, aby byl \u0159\xE1dek nebo sloupec p\u0159\xEDli\u0161 velk\xFD nebo p\u0159\xEDli\u0161 mal\xFD. Pokud m\xE1te nap\u0159\xEDklad v m\u0159\xED\u017Ece obr\xE1zek o \u0161\xED\u0159ce 100 pixel\u016F, pravd\u011Bpodobn\u011B nechcete, aby jeho sloupec byl u\u017E\u0161\xED ne\u017E 100 pixel\u016F! 

Tento probl\xE9m n\xE1m m\u016F\u017Ee pomoci vy\u0159e\u0161it funkce <kbd>minmax()</kbd>.

\`\`\`css {3}
.grid {
\xA0\xA0display: grid;
\xA0\xA0grid-template-columns: 100px minmax(100px, 500px) 100px;
}
\`\`\``,frontmatter:{title:"minmax()"},index:0,start:0,end:14},inline:{raw:`--- 
src: ./pages/NL_grid_minmax.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:25,start:201,end:206},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_minmax.md",notesHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:ww,meta:{title:"Tailwind & Grid",hide:!1,srcSequence:"./pages/NL_grid_tailwind-grid1.md",slide:{raw:null,title:"Tailwind & Grid",level:1,content:`# Tailwind & Grid

\u2026 a t\xEDm se taky dost\xE1v\xE1m k Tailwindu! 

Tailwind ve sv\xE9m defaultn\xEDm nastaven\xED pro z\xE1kladn\xED layout pracuje s frakcemi, repeat() a minmax() funkc\xED, tak\u017Ee si to v\u0161echno vezmeme a p\u0159evedeme do Tailwindu:

\`\`\`css
.grid {
\xA0\xA0display: grid;
\xA0\xA0grid-template-columns: repeat(1, minmax(0, 1fr));
}
\`\`\`
<br>
\`\`\`html
<div class="grid grid-cols-1">
  <div>01</div>
  <!-- ... -->
  <div>09</div>
</div>
\`\`\``,frontmatter:{title:"Tailwind & Grid",hide:!1,srcSequence:"./pages/NL_grid_tailwind-grid1.md"},index:25,start:0,end:20,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_tailwind-grid1.md",raw:`# Tailwind & Grid

\u2026 a t\xEDm se taky dost\xE1v\xE1m k Tailwindu! 

Tailwind ve sv\xE9m defaultn\xEDm nastaven\xED pro z\xE1kladn\xED layout pracuje s frakcemi, repeat() a minmax() funkc\xED, tak\u017Ee si to v\u0161echno vezmeme a p\u0159evedeme do Tailwindu:

\`\`\`css
.grid {
\xA0\xA0display: grid;
\xA0\xA0grid-template-columns: repeat(1, minmax(0, 1fr));
}
\`\`\`
<br>
\`\`\`html
<div class="grid grid-cols-1">
  <div>01</div>
  <!-- ... -->
  <div>09</div>
</div>
\`\`\``,title:"Tailwind & Grid",level:1,content:`# Tailwind & Grid

\u2026 a t\xEDm se taky dost\xE1v\xE1m k Tailwindu! 

Tailwind ve sv\xE9m defaultn\xEDm nastaven\xED pro z\xE1kladn\xED layout pracuje s frakcemi, repeat() a minmax() funkc\xED, tak\u017Ee si to v\u0161echno vezmeme a p\u0159evedeme do Tailwindu:

\`\`\`css
.grid {
\xA0\xA0display: grid;
\xA0\xA0grid-template-columns: repeat(1, minmax(0, 1fr));
}
\`\`\`
<br>
\`\`\`html
<div class="grid grid-cols-1">
  <div>01</div>
  <!-- ... -->
  <div>09</div>
</div>
\`\`\``,frontmatter:{title:"Tailwind & Grid"},index:0,start:0,end:20},inline:{raw:`--- 
src: ./pages/NL_grid_tailwind-grid1.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:26,start:206,end:211},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_tailwind-grid1.md",notesHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:zw,meta:{hide:!1,srcSequence:"./pages/NL_grid_tailwind-grid2.md",slide:{raw:null,content:`Z\xE1kladn\xED nastaven\xED si, jak u\u017E \u0159\xEDkala Andrejka, m\u016F\u017Eete samoz\u0159ejm\u011B zm\u011Bnit v tailwind.config.cjs:

\`\`\`js {all|4-9|0}
module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid 
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration 
        'footer': '200px minmax(900px, 1fr) 100px',
      }
    }
  }
}

\`\`\`

\u2026 p\u0159\xEDpadn\u011B vyu\u017E\xEDt arbitrary values v hranat\xFDch z\xE1vork\xE1ch:

\`\`\`html {0|1}
    <div class="grid grid-cols-[200px_minmax(900px,_1fr)_100px]">
    <!-- ... -->
    </div>
\`\`\`

<arrow v-click="3" x1="600" y1="530" x2="400" y2="440" color="#666888" width="2" arrowSize="1" />`,frontmatter:{hide:!1,srcSequence:"./pages/NL_grid_tailwind-grid2.md"},index:26,start:0,end:30,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_tailwind-grid2.md",raw:`Z\xE1kladn\xED nastaven\xED si, jak u\u017E \u0159\xEDkala Andrejka, m\u016F\u017Eete samoz\u0159ejm\u011B zm\u011Bnit v tailwind.config.cjs:

\`\`\`js {all|4-9|0}
module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid 
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration 
        'footer': '200px minmax(900px, 1fr) 100px',
      }
    }
  }
}

\`\`\`

\u2026 p\u0159\xEDpadn\u011B vyu\u017E\xEDt arbitrary values v hranat\xFDch z\xE1vork\xE1ch:

\`\`\`html {0|1}
    <div class="grid grid-cols-[200px_minmax(900px,_1fr)_100px]">
    <!-- ... -->
    </div>
\`\`\`

<arrow v-click="3" x1="600" y1="530" x2="400" y2="440" color="#666888" width="2" arrowSize="1" />

`,content:`Z\xE1kladn\xED nastaven\xED si, jak u\u017E \u0159\xEDkala Andrejka, m\u016F\u017Eete samoz\u0159ejm\u011B zm\u011Bnit v tailwind.config.cjs:

\`\`\`js {all|4-9|0}
module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid 
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration 
        'footer': '200px minmax(900px, 1fr) 100px',
      }
    }
  }
}

\`\`\`

\u2026 p\u0159\xEDpadn\u011B vyu\u017E\xEDt arbitrary values v hranat\xFDch z\xE1vork\xE1ch:

\`\`\`html {0|1}
    <div class="grid grid-cols-[200px_minmax(900px,_1fr)_100px]">
    <!-- ... -->
    </div>
\`\`\`

<arrow v-click="3" x1="600" y1="530" x2="400" y2="440" color="#666888" width="2" arrowSize="1" />`,frontmatter:{},index:0,start:0,end:30},inline:{raw:`--- 
src: ./pages/NL_grid_tailwind-grid2.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:27,start:211,end:216},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_tailwind-grid2.md",notesHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Mw,meta:{title:"Grid Items",hide:!1,srcSequence:"./pages/NL_grid_multiple-row-items1.md",slide:{raw:null,title:"Grid Items",level:1,content:`# Grid Items

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0276a63a-42ff-4486-8f36-9060c90400af/css_grid_diagram_2.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221212T140534Z&X-Amz-Expires=86400&X-Amz-Signature=9eff607480d6245e4d7ddfc887ddc95a25c288675f3fe423dca22a922966c00e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22css_grid_diagram_2.svg%22&x-id=GetObject" width="600" class="mx-auto">`,frontmatter:{title:"Grid Items",hide:!1,srcSequence:"./pages/NL_grid_multiple-row-items1.md"},index:27,start:0,end:6,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_multiple-row-items1.md",raw:`
# Grid Items

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0276a63a-42ff-4486-8f36-9060c90400af/css_grid_diagram_2.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221212T140534Z&X-Amz-Expires=86400&X-Amz-Signature=9eff607480d6245e4d7ddfc887ddc95a25c288675f3fe423dca22a922966c00e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22css_grid_diagram_2.svg%22&x-id=GetObject" width="600" class="mx-auto">

`,title:"Grid Items",level:1,content:`# Grid Items

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0276a63a-42ff-4486-8f36-9060c90400af/css_grid_diagram_2.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221212T140534Z&X-Amz-Expires=86400&X-Amz-Signature=9eff607480d6245e4d7ddfc887ddc95a25c288675f3fe423dca22a922966c00e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22css_grid_diagram_2.svg%22&x-id=GetObject" width="600" class="mx-auto">`,frontmatter:{title:"Grid Items"},index:0,start:0,end:6},inline:{raw:`--- 
src: ./pages/NL_grid_multiple-row-items1.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:28,start:216,end:221},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_multiple-row-items1.md",notesHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Ww,meta:{title:"Multiple Row Items",hide:!1,srcSequence:"./pages/NL_grid_multiple-row-items2.md",slide:{raw:null,title:"Multiple Row Items",level:1,content:`# Multiple Row Items
Jak zajist\xEDme, aby jednotliv\xE9 grid items zab\xEDraly v\xEDce \u0159\xE1dk\u016F?

M\u016F\u017Eeme toho dos\xE1hnout pomoc\xED vlastnost\xED CSS <kbd>grid-row-start</kbd>\xA0a\xA0<kbd>grid-row-end</kbd>. D\u016Fle\u017Eit\xE9 je si uv\u011Bdomit, \u017Ee tentokr\xE1t nepou\u017E\xEDv\xE1me CSS na vn\u011Bj\u0161\xED <span class="text-yellow-500">grid container</span>; p\u0159id\xE1v\xE1me CSS ke <span class="text-yellow-500">grid items</span>!

\`\`\`css{all|0}
.item {
	grid-row-start: 1;
	grid-row-end: 3;
}
\`\`\`

<p class="italic text-xs">Ohrani\u010Den\xED \u0159\xE1dk\u016F a sloupc\u016F v gridu za\u010D\xEDnaj\xED na 1 a kon\u010D\xED na hodnot\u011B, kter\xE1 je o 1 v\u011Bt\u0161\xED ne\u017E po\u010Det \u0159\xE1dk\u016F nebo sloupc\u016F v gridu. Hodnota pro <kbd>grid-row-start</kbd> by m\u011Bla b\xFDt \u0159\xE1dkem, na kter\xE9m m\xE1 grid item za\u010D\xEDnat. Hodnota pro <kbd>grid-row-end</kbd>\xA0by m\u011Bla b\xFDt o jednu v\u011Bt\u0161\xED ne\u017E \u0159\xE1dek, na kter\xE9m m\xE1 grid item kon\u010Dit.</p>
<br>
Jako zkratku pak m\u016F\u017Eeme pou\u017E\xEDt <kbd>grid-row</kbd>

\`\`\`css {0|all}
.item {
	grid-row: 1\xA0/ 3;
}
\`\`\``,frontmatter:{title:"Multiple Row Items",hide:!1,srcSequence:"./pages/NL_grid_multiple-row-items2.md"},index:28,start:0,end:21,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_multiple-row-items2.md",raw:`# Multiple Row Items
Jak zajist\xEDme, aby jednotliv\xE9 grid items zab\xEDraly v\xEDce \u0159\xE1dk\u016F?

M\u016F\u017Eeme toho dos\xE1hnout pomoc\xED vlastnost\xED CSS <kbd>grid-row-start</kbd>\xA0a\xA0<kbd>grid-row-end</kbd>. D\u016Fle\u017Eit\xE9 je si uv\u011Bdomit, \u017Ee tentokr\xE1t nepou\u017E\xEDv\xE1me CSS na vn\u011Bj\u0161\xED <span class="text-yellow-500">grid container</span>; p\u0159id\xE1v\xE1me CSS ke <span class="text-yellow-500">grid items</span>!

\`\`\`css{all|0}
.item {
	grid-row-start: 1;
	grid-row-end: 3;
}
\`\`\`

<p class="italic text-xs">Ohrani\u010Den\xED \u0159\xE1dk\u016F a sloupc\u016F v gridu za\u010D\xEDnaj\xED na 1 a kon\u010D\xED na hodnot\u011B, kter\xE1 je o 1 v\u011Bt\u0161\xED ne\u017E po\u010Det \u0159\xE1dk\u016F nebo sloupc\u016F v gridu. Hodnota pro <kbd>grid-row-start</kbd> by m\u011Bla b\xFDt \u0159\xE1dkem, na kter\xE9m m\xE1 grid item za\u010D\xEDnat. Hodnota pro <kbd>grid-row-end</kbd>\xA0by m\u011Bla b\xFDt o jednu v\u011Bt\u0161\xED ne\u017E \u0159\xE1dek, na kter\xE9m m\xE1 grid item kon\u010Dit.</p>
<br>
Jako zkratku pak m\u016F\u017Eeme pou\u017E\xEDt <kbd>grid-row</kbd>

\`\`\`css {0|all}
.item {
	grid-row: 1\xA0/ 3;
}
\`\`\``,title:"Multiple Row Items",level:1,content:`# Multiple Row Items
Jak zajist\xEDme, aby jednotliv\xE9 grid items zab\xEDraly v\xEDce \u0159\xE1dk\u016F?

M\u016F\u017Eeme toho dos\xE1hnout pomoc\xED vlastnost\xED CSS <kbd>grid-row-start</kbd>\xA0a\xA0<kbd>grid-row-end</kbd>. D\u016Fle\u017Eit\xE9 je si uv\u011Bdomit, \u017Ee tentokr\xE1t nepou\u017E\xEDv\xE1me CSS na vn\u011Bj\u0161\xED <span class="text-yellow-500">grid container</span>; p\u0159id\xE1v\xE1me CSS ke <span class="text-yellow-500">grid items</span>!

\`\`\`css{all|0}
.item {
	grid-row-start: 1;
	grid-row-end: 3;
}
\`\`\`

<p class="italic text-xs">Ohrani\u010Den\xED \u0159\xE1dk\u016F a sloupc\u016F v gridu za\u010D\xEDnaj\xED na 1 a kon\u010D\xED na hodnot\u011B, kter\xE1 je o 1 v\u011Bt\u0161\xED ne\u017E po\u010Det \u0159\xE1dk\u016F nebo sloupc\u016F v gridu. Hodnota pro <kbd>grid-row-start</kbd> by m\u011Bla b\xFDt \u0159\xE1dkem, na kter\xE9m m\xE1 grid item za\u010D\xEDnat. Hodnota pro <kbd>grid-row-end</kbd>\xA0by m\u011Bla b\xFDt o jednu v\u011Bt\u0161\xED ne\u017E \u0159\xE1dek, na kter\xE9m m\xE1 grid item kon\u010Dit.</p>
<br>
Jako zkratku pak m\u016F\u017Eeme pou\u017E\xEDt <kbd>grid-row</kbd>

\`\`\`css {0|all}
.item {
	grid-row: 1\xA0/ 3;
}
\`\`\``,frontmatter:{title:"Multiple Row Items"},index:0,start:0,end:21},inline:{raw:`---
src: ./pages/NL_grid_multiple-row-items2.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:29,start:221,end:226},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_multiple-row-items2.md",notesHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:n3,meta:{title:"Grid Column",hide:!1,srcSequence:"./pages/NL_grid_multiple-col-items1.md",slide:{raw:null,title:"Grid Column",level:1,content:`# Grid Column
<br>
P\u0159edchoz\xED t\u0159i vlastnosti existuj\xED i pro sloupce. <kbd>grid-column-start</kbd>, <kbd>grid-column-end</kbd> a <kbd>grid-column</kbd> funguj\xED stejn\u011B jako vlastnosti \u0159\xE1dku. Tyto vlastnosti umo\u017E\u0148uj\xED, aby grid item zahrnovala v\xEDce sloupc\u016F.

P\u0159i pou\u017Eit\xED t\u011Bchto vlastnost\xED m\u016F\u017Eeme pou\u017E\xEDt kl\xED\u010Dov\xE9 slovo <kbd>span</kbd> k definov\xE1n\xED za\u010D\xE1tku nebo konce sloupce nebo \u0159\xE1dku vzhledem k jeho druh\xE9mu konci. Pod\xEDvejte se, jak se\xA0<kbd>span</kbd>\xA0pou\u017E\xEDv\xE1 v\xA0k\xF3du n\xED\u017Ee:

\`\`\`css
.item {
	grid-column: 4\xA0/ span 2;
}
\`\`\`
<p class="text-sm italic">To znamen\xE1, \u017Ee prvek \u201Eitem\u201C m\xE1 za\u010D\xEDnat na \u010Dtvrt\xE9m sloupci a zab\xEDrat celkem dva sloupce m\xEDsta. Na\u0161e item by tedy zab\xEDrala sloupce \u010Dty\u0159i a p\u011Bt.</p>`,frontmatter:{title:"Grid Column",hide:!1,srcSequence:"./pages/NL_grid_multiple-col-items1.md"},index:29,start:0,end:13,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_multiple-col-items1.md",raw:`# Grid Column
<br>
P\u0159edchoz\xED t\u0159i vlastnosti existuj\xED i pro sloupce. <kbd>grid-column-start</kbd>, <kbd>grid-column-end</kbd> a <kbd>grid-column</kbd> funguj\xED stejn\u011B jako vlastnosti \u0159\xE1dku. Tyto vlastnosti umo\u017E\u0148uj\xED, aby grid item zahrnovala v\xEDce sloupc\u016F.

P\u0159i pou\u017Eit\xED t\u011Bchto vlastnost\xED m\u016F\u017Eeme pou\u017E\xEDt kl\xED\u010Dov\xE9 slovo <kbd>span</kbd> k definov\xE1n\xED za\u010D\xE1tku nebo konce sloupce nebo \u0159\xE1dku vzhledem k jeho druh\xE9mu konci. Pod\xEDvejte se, jak se\xA0<kbd>span</kbd>\xA0pou\u017E\xEDv\xE1 v\xA0k\xF3du n\xED\u017Ee:

\`\`\`css
.item {
	grid-column: 4\xA0/ span 2;
}
\`\`\`
<p class="text-sm italic">To znamen\xE1, \u017Ee prvek \u201Eitem\u201C m\xE1 za\u010D\xEDnat na \u010Dtvrt\xE9m sloupci a zab\xEDrat celkem dva sloupce m\xEDsta. Na\u0161e item by tedy zab\xEDrala sloupce \u010Dty\u0159i a p\u011Bt.</p>
`,title:"Grid Column",level:1,content:`# Grid Column
<br>
P\u0159edchoz\xED t\u0159i vlastnosti existuj\xED i pro sloupce. <kbd>grid-column-start</kbd>, <kbd>grid-column-end</kbd> a <kbd>grid-column</kbd> funguj\xED stejn\u011B jako vlastnosti \u0159\xE1dku. Tyto vlastnosti umo\u017E\u0148uj\xED, aby grid item zahrnovala v\xEDce sloupc\u016F.

P\u0159i pou\u017Eit\xED t\u011Bchto vlastnost\xED m\u016F\u017Eeme pou\u017E\xEDt kl\xED\u010Dov\xE9 slovo <kbd>span</kbd> k definov\xE1n\xED za\u010D\xE1tku nebo konce sloupce nebo \u0159\xE1dku vzhledem k jeho druh\xE9mu konci. Pod\xEDvejte se, jak se\xA0<kbd>span</kbd>\xA0pou\u017E\xEDv\xE1 v\xA0k\xF3du n\xED\u017Ee:

\`\`\`css
.item {
	grid-column: 4\xA0/ span 2;
}
\`\`\`
<p class="text-sm italic">To znamen\xE1, \u017Ee prvek \u201Eitem\u201C m\xE1 za\u010D\xEDnat na \u010Dtvrt\xE9m sloupci a zab\xEDrat celkem dva sloupce m\xEDsta. Na\u0161e item by tedy zab\xEDrala sloupce \u010Dty\u0159i a p\u011Bt.</p>`,frontmatter:{title:"Grid Column"},index:0,start:0,end:13},inline:{raw:`---
src: ./pages/NL_grid_multiple-col-items1.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:30,start:226,end:231},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_multiple-col-items1.md",notesHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:c3,meta:{title:"Grid Area",hide:!1,srcSequence:"./pages/NL_grid_grid-area.md",slide:{raw:null,title:"Grid Area",level:1,content:`# Grid Area

Ji\u017E jsme mohli pou\u017E\xEDt <kbd>grid-row</kbd>\xA0a\xA0<kbd>grid-column</kbd> jako zkratku pro vlastnosti jako <kbd>grid-row-start</kbd>\xA0a\xA0<kbd>grid-row-end</kbd>. 

Pomoc\xED vlastnosti <kbd>grid-area</kbd> m\u016F\u017Eeme refaktorovat je\u0161t\u011B v\xEDce. Tato vlastnost nastav\xED po\u010D\xE1te\u010Dn\xED a koncovou pozici pro \u0159\xE1dky i sloupce polo\u017Eky.

\`\`\`css
.item {
	grid-area: 2\xA0/ 3\xA0/ 4\xA0/ span 5;
}
\`\`\`

<kbd>grid-area</kbd> m\xE1 \u010Dty\u0159i hodnoty odd\u011Blen\xE9 lom\xEDtky. Po\u0159ad\xED je d\u016Fle\u017Eit\xE9! Takto bude <kbd>grid-area</kbd> tyto hodnoty interpretovat:

1. <kbd>grid-row-start</kbd>
2. <kbd>grid-column-start</kbd>
3. <kbd>grid-row-end</kbd>
4. <kbd>grid-column-end</kbd>`,frontmatter:{title:"Grid Area",hide:!1,srcSequence:"./pages/NL_grid_grid-area.md"},index:30,start:0,end:18,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-area.md",raw:`# Grid Area

Ji\u017E jsme mohli pou\u017E\xEDt <kbd>grid-row</kbd>\xA0a\xA0<kbd>grid-column</kbd> jako zkratku pro vlastnosti jako <kbd>grid-row-start</kbd>\xA0a\xA0<kbd>grid-row-end</kbd>. 

Pomoc\xED vlastnosti <kbd>grid-area</kbd> m\u016F\u017Eeme refaktorovat je\u0161t\u011B v\xEDce. Tato vlastnost nastav\xED po\u010D\xE1te\u010Dn\xED a koncovou pozici pro \u0159\xE1dky i sloupce polo\u017Eky.

\`\`\`css
.item {
	grid-area: 2\xA0/ 3\xA0/ 4\xA0/ span 5;
}
\`\`\`

<kbd>grid-area</kbd> m\xE1 \u010Dty\u0159i hodnoty odd\u011Blen\xE9 lom\xEDtky. Po\u0159ad\xED je d\u016Fle\u017Eit\xE9! Takto bude <kbd>grid-area</kbd> tyto hodnoty interpretovat:

1. <kbd>grid-row-start</kbd>
2. <kbd>grid-column-start</kbd>
3. <kbd>grid-row-end</kbd>
4. <kbd>grid-column-end</kbd>`,title:"Grid Area",level:1,content:`# Grid Area

Ji\u017E jsme mohli pou\u017E\xEDt <kbd>grid-row</kbd>\xA0a\xA0<kbd>grid-column</kbd> jako zkratku pro vlastnosti jako <kbd>grid-row-start</kbd>\xA0a\xA0<kbd>grid-row-end</kbd>. 

Pomoc\xED vlastnosti <kbd>grid-area</kbd> m\u016F\u017Eeme refaktorovat je\u0161t\u011B v\xEDce. Tato vlastnost nastav\xED po\u010D\xE1te\u010Dn\xED a koncovou pozici pro \u0159\xE1dky i sloupce polo\u017Eky.

\`\`\`css
.item {
	grid-area: 2\xA0/ 3\xA0/ 4\xA0/ span 5;
}
\`\`\`

<kbd>grid-area</kbd> m\xE1 \u010Dty\u0159i hodnoty odd\u011Blen\xE9 lom\xEDtky. Po\u0159ad\xED je d\u016Fle\u017Eit\xE9! Takto bude <kbd>grid-area</kbd> tyto hodnoty interpretovat:

1. <kbd>grid-row-start</kbd>
2. <kbd>grid-column-start</kbd>
3. <kbd>grid-row-end</kbd>
4. <kbd>grid-column-end</kbd>`,frontmatter:{title:"Grid Area"},index:0,start:0,end:18},inline:{raw:`---
src: ./pages/NL_grid_grid-area.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:31,start:231,end:236},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-area.md",notesHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:d3,meta:{title:"Grid-row & Grid-col v Tailwindu",hide:!1,srcSequence:"./pages/NL_grid_multiple-row-col_tw.md",slide:{raw:null,title:"Grid-row & Grid-col v Tailwindu",level:1,content:`# Grid-row & Grid-col v Tailwindu

| <p class="text-red-300">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> | <p class="text-red-300">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
| --- | --- | --- | --- |
| row-auto | grid-row: auto; | col-auto | grid-column: auto;|
| row-span-1 | grid-row: span 1 / span 1; | col-span-1 | grid-column: span 1 / span 1;|
| row-span-2 | grid-row: span 2 / span 2; | col-span-2 | grid-column: span 2 / span 2;|
| row-span-3 | grid-row: span 3 / span 3; | col-span-3 | grid-column: span 3 / span 3;|
| row-span-4 | grid-row: span 4 / span 4; | col-span-4 | grid-column: span 4 / span 4;|
| row-span-5 | grid-row: span 5 / span 5; | col-span-5 | grid-column: span 5 / span 5;|
| row-span-6 | grid-row: span 6 / span 6; | col-span-6 | grid-column: span 6 / span 6;|
| row-span-full | grid-row: 1 / -1; | col-span-7 | grid-column: span 7 / span 7;|
| row-start-1 | grid-row-start: 1; | col-span-8 | grid-column: span 8 / span 8;|
| ... |`,frontmatter:{title:"Grid-row & Grid-col v Tailwindu",hide:!1,srcSequence:"./pages/NL_grid_multiple-row-col_tw.md"},index:31,start:0,end:15,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_multiple-row-col_tw.md",raw:`# Grid-row & Grid-col v Tailwindu

| <p class="text-red-300">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> | <p class="text-red-300">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
| --- | --- | --- | --- |
| row-auto | grid-row: auto; | col-auto | grid-column: auto;|
| row-span-1 | grid-row: span 1 / span 1; | col-span-1 | grid-column: span 1 / span 1;|
| row-span-2 | grid-row: span 2 / span 2; | col-span-2 | grid-column: span 2 / span 2;|
| row-span-3 | grid-row: span 3 / span 3; | col-span-3 | grid-column: span 3 / span 3;|
| row-span-4 | grid-row: span 4 / span 4; | col-span-4 | grid-column: span 4 / span 4;|
| row-span-5 | grid-row: span 5 / span 5; | col-span-5 | grid-column: span 5 / span 5;|
| row-span-6 | grid-row: span 6 / span 6; | col-span-6 | grid-column: span 6 / span 6;|
| row-span-full | grid-row: 1 / -1; | col-span-7 | grid-column: span 7 / span 7;|
| row-start-1 | grid-row-start: 1; | col-span-8 | grid-column: span 8 / span 8;|
| ... |
`,title:"Grid-row & Grid-col v Tailwindu",level:1,content:`# Grid-row & Grid-col v Tailwindu

| <p class="text-red-300">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> | <p class="text-red-300">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
| --- | --- | --- | --- |
| row-auto | grid-row: auto; | col-auto | grid-column: auto;|
| row-span-1 | grid-row: span 1 / span 1; | col-span-1 | grid-column: span 1 / span 1;|
| row-span-2 | grid-row: span 2 / span 2; | col-span-2 | grid-column: span 2 / span 2;|
| row-span-3 | grid-row: span 3 / span 3; | col-span-3 | grid-column: span 3 / span 3;|
| row-span-4 | grid-row: span 4 / span 4; | col-span-4 | grid-column: span 4 / span 4;|
| row-span-5 | grid-row: span 5 / span 5; | col-span-5 | grid-column: span 5 / span 5;|
| row-span-6 | grid-row: span 6 / span 6; | col-span-6 | grid-column: span 6 / span 6;|
| row-span-full | grid-row: 1 / -1; | col-span-7 | grid-column: span 7 / span 7;|
| row-start-1 | grid-row-start: 1; | col-span-8 | grid-column: span 8 / span 8;|
| ... |`,frontmatter:{title:"Grid-row & Grid-col v Tailwindu"},index:0,start:0,end:15},inline:{raw:`---
src: ./pages/NL_grid_multiple-row-col_tw.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:32,start:236,end:241},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_multiple-row-col_tw.md",notesHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:w3,meta:{title:"Grid Template Areas",hide:!1,srcSequence:"./pages/NL_grid_grid-template-areas1.md",slide:{raw:null,title:"Grid Template Areas",level:1,content:`# Grid Template Areas
<br>
Vlastnost\xA0<kbd>grid-template-areas</kbd>\xA0umo\u017E\u0148uje pojmenovat \u010D\xE1sti webov\xE9 str\xE1nky, kter\xE9 se pou\u017Eij\xED jako hodnoty v\xA0<kbd>grid-row-start</kbd>,\xA0<kbd>grid-row-end</kbd>,\xA0<kbd>grid-column-start</kbd>,<kbd>grid-column-end</kbd> a\xA0<kbd>grid-area</kbd>\xA0. 

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/44e14f02-9861-4346-8456-e870d2c48106/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221213T133743Z&X-Amz-Expires=86400&X-Amz-Signature=253422491b618393fa52e9ece073326640a68a9f382999244ea84f63dc0114d4&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" width=600 class="rounded-lg mx-auto mt-10">`,frontmatter:{title:"Grid Template Areas",hide:!1,srcSequence:"./pages/NL_grid_grid-template-areas1.md"},index:32,start:0,end:7,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-template-areas1.md",raw:`# Grid Template Areas
<br>
Vlastnost\xA0<kbd>grid-template-areas</kbd>\xA0umo\u017E\u0148uje pojmenovat \u010D\xE1sti webov\xE9 str\xE1nky, kter\xE9 se pou\u017Eij\xED jako hodnoty v\xA0<kbd>grid-row-start</kbd>,\xA0<kbd>grid-row-end</kbd>,\xA0<kbd>grid-column-start</kbd>,<kbd>grid-column-end</kbd> a\xA0<kbd>grid-area</kbd>\xA0. 

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/44e14f02-9861-4346-8456-e870d2c48106/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221213T133743Z&X-Amz-Expires=86400&X-Amz-Signature=253422491b618393fa52e9ece073326640a68a9f382999244ea84f63dc0114d4&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" width=600 class="rounded-lg mx-auto mt-10">

`,title:"Grid Template Areas",level:1,content:`# Grid Template Areas
<br>
Vlastnost\xA0<kbd>grid-template-areas</kbd>\xA0umo\u017E\u0148uje pojmenovat \u010D\xE1sti webov\xE9 str\xE1nky, kter\xE9 se pou\u017Eij\xED jako hodnoty v\xA0<kbd>grid-row-start</kbd>,\xA0<kbd>grid-row-end</kbd>,\xA0<kbd>grid-column-start</kbd>,<kbd>grid-column-end</kbd> a\xA0<kbd>grid-area</kbd>\xA0. 

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/44e14f02-9861-4346-8456-e870d2c48106/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221213T133743Z&X-Amz-Expires=86400&X-Amz-Signature=253422491b618393fa52e9ece073326640a68a9f382999244ea84f63dc0114d4&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" width=600 class="rounded-lg mx-auto mt-10">`,frontmatter:{title:"Grid Template Areas"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/NL_grid_grid-template-areas1.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:33,start:241,end:246},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-template-areas1.md",notesHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:E3,meta:{hide:!1,srcSequence:"./pages/NL_grid_grid-template-areas2.md",slide:{raw:null,content:`\`\`\`html {all|0}
<div class="container">
\xA0\xA0<header>Welcome!</header>
\xA0\xA0<section class="info">Info!</section>
\xA0\xA0<section class="services">Services!</section>
\xA0\xA0<footer>Contact us!</footer>
</div>
\`\`\`
<br>

\`\`\`css {0|6-8|9-10|13-18|all}
.container {
\xA0\xA0display: grid;
\xA0\xA0max-width: 900px;
\xA0\xA0position: relative;
\xA0\xA0margin: auto;
\xA0\xA0grid-template-areas: "head head"
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"info services"
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"footer footer";
\xA0\xA0grid-template-rows: 300px 800px 120px;
\xA0\xA0grid-template-columns: 1fr 3fr;
}

header {
\xA0\xA0grid-area: head;
}
.info {
\xA0\xA0grid-area: info;
}
/* ... */

\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/NL_grid_grid-template-areas2.md"},index:33,start:0,end:32,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-template-areas2.md",raw:`\`\`\`html {all|0}
<div class="container">
\xA0\xA0<header>Welcome!</header>
\xA0\xA0<section class="info">Info!</section>
\xA0\xA0<section class="services">Services!</section>
\xA0\xA0<footer>Contact us!</footer>
</div>
\`\`\`
<br>

\`\`\`css {0|6-8|9-10|13-18|all}
.container {
\xA0\xA0display: grid;
\xA0\xA0max-width: 900px;
\xA0\xA0position: relative;
\xA0\xA0margin: auto;
\xA0\xA0grid-template-areas: "head head"
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"info services"
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"footer footer";
\xA0\xA0grid-template-rows: 300px 800px 120px;
\xA0\xA0grid-template-columns: 1fr 3fr;
}

header {
\xA0\xA0grid-area: head;
}
.info {
\xA0\xA0grid-area: info;
}
/* ... */

\`\`\``,content:`\`\`\`html {all|0}
<div class="container">
\xA0\xA0<header>Welcome!</header>
\xA0\xA0<section class="info">Info!</section>
\xA0\xA0<section class="services">Services!</section>
\xA0\xA0<footer>Contact us!</footer>
</div>
\`\`\`
<br>

\`\`\`css {0|6-8|9-10|13-18|all}
.container {
\xA0\xA0display: grid;
\xA0\xA0max-width: 900px;
\xA0\xA0position: relative;
\xA0\xA0margin: auto;
\xA0\xA0grid-template-areas: "head head"
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"info services"
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"footer footer";
\xA0\xA0grid-template-rows: 300px 800px 120px;
\xA0\xA0grid-template-columns: 1fr 3fr;
}

header {
\xA0\xA0grid-area: head;
}
.info {
\xA0\xA0grid-area: info;
}
/* ... */

\`\`\``,frontmatter:{},index:0,start:0,end:32},inline:{raw:`---
src: ./pages/NL_grid_grid-template-areas2.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:34,start:246,end:251},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-template-areas2.md",notesHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:F3,meta:{title:"Rozlo\u017Een\xED prvk\u016F v gridu",hide:!1,srcSequence:"./pages/NL_grid_grid-items1.md",slide:{raw:null,title:"Rozlo\u017Een\xED prvk\u016F v gridu",level:1,content:`# Rozlo\u017Een\xED prvk\u016F v gridu
V gridu se m\u016F\u017Eeme setkat s mnoha vlastnostmi, pro rozlo\u017Een\xED str\xE1nky, kter\xFDmi jsou <kbd>justify-items</kbd>,<br>
<kbd>justify-content</kbd>, <kbd>justify-self</kbd>, <kbd>align-items</kbd>, <kbd>align-content</kbd>, <kbd>align-self</kbd>

1. <kbd>justify-items</kbd>\xA0ur\u010Duje, jak se maj\xED jednotliv\xE9 prvky rozlo\u017Eit na ose \u0159\xE1dku (osa X)
    
    
    | <p class="text-red-300">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
    | --- | --- |
    | justify-items-start | justify-items: start; |
    | justify-items-end | justify-items: end; |
    | justify-items-center | justify-items: center; |
    | justify-items-stretch | justify-items: stretch; |
    
    ## **[](https://tailwindcss.com/docs/justify-items#basic-usage)**`,frontmatter:{title:"Rozlo\u017Een\xED prvk\u016F v gridu",hide:!1,srcSequence:"./pages/NL_grid_grid-items1.md"},index:34,start:0,end:16,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-items1.md",raw:`# Rozlo\u017Een\xED prvk\u016F v gridu
V gridu se m\u016F\u017Eeme setkat s mnoha vlastnostmi, pro rozlo\u017Een\xED str\xE1nky, kter\xFDmi jsou <kbd>justify-items</kbd>,<br>
<kbd>justify-content</kbd>, <kbd>justify-self</kbd>, <kbd>align-items</kbd>, <kbd>align-content</kbd>, <kbd>align-self</kbd>

1. <kbd>justify-items</kbd>\xA0ur\u010Duje, jak se maj\xED jednotliv\xE9 prvky rozlo\u017Eit na ose \u0159\xE1dku (osa X)
    
    
    | <p class="text-red-300">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
    | --- | --- |
    | justify-items-start | justify-items: start; |
    | justify-items-end | justify-items: end; |
    | justify-items-center | justify-items: center; |
    | justify-items-stretch | justify-items: stretch; |
    
    ## **[](https://tailwindcss.com/docs/justify-items#basic-usage)**
    `,title:"Rozlo\u017Een\xED prvk\u016F v gridu",level:1,content:`# Rozlo\u017Een\xED prvk\u016F v gridu
V gridu se m\u016F\u017Eeme setkat s mnoha vlastnostmi, pro rozlo\u017Een\xED str\xE1nky, kter\xFDmi jsou <kbd>justify-items</kbd>,<br>
<kbd>justify-content</kbd>, <kbd>justify-self</kbd>, <kbd>align-items</kbd>, <kbd>align-content</kbd>, <kbd>align-self</kbd>

1. <kbd>justify-items</kbd>\xA0ur\u010Duje, jak se maj\xED jednotliv\xE9 prvky rozlo\u017Eit na ose \u0159\xE1dku (osa X)
    
    
    | <p class="text-red-300">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
    | --- | --- |
    | justify-items-start | justify-items: start; |
    | justify-items-end | justify-items: end; |
    | justify-items-center | justify-items: center; |
    | justify-items-stretch | justify-items: stretch; |
    
    ## **[](https://tailwindcss.com/docs/justify-items#basic-usage)**`,frontmatter:{title:"Rozlo\u017Een\xED prvk\u016F v gridu"},index:0,start:0,end:16},inline:{raw:`---
src: ./pages/NL_grid_grid-items1.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:35,start:251,end:256},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-items1.md",notesHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:T3,meta:{hide:!1,srcSequence:"./pages/NL_grid_grid-items2.md",slide:{raw:null,content:`2. <kbd>justify-content</kbd>\xA0ur\u010Duje, jak by se skupiny prvk\u016F m\u011Bly rozlo\u017Eit na ose \u0159\xE1dku (osa X)
    
    
    | <p class="text-red-300 w-52">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
    | --- | --- |
    | justify-start | justify-content: flex-start; |
    | justify-end | justify-content: flex-end; |
    | justify-center | justify-content: center; |
    | justify-between | justify-content: space-between; |
    | justify-around | justify-content: space-around; |
    | justify-evenly | justify-content: space-evenly; |`,frontmatter:{hide:!1,srcSequence:"./pages/NL_grid_grid-items2.md"},index:35,start:0,end:12,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-items2.md",raw:`2. <kbd>justify-content</kbd>\xA0ur\u010Duje, jak by se skupiny prvk\u016F m\u011Bly rozlo\u017Eit na ose \u0159\xE1dku (osa X)
    
    
    | <p class="text-red-300 w-52">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
    | --- | --- |
    | justify-start | justify-content: flex-start; |
    | justify-end | justify-content: flex-end; |
    | justify-center | justify-content: center; |
    | justify-between | justify-content: space-between; |
    | justify-around | justify-content: space-around; |
    | justify-evenly | justify-content: space-evenly; |
`,content:`2. <kbd>justify-content</kbd>\xA0ur\u010Duje, jak by se skupiny prvk\u016F m\u011Bly rozlo\u017Eit na ose \u0159\xE1dku (osa X)
    
    
    | <p class="text-red-300 w-52">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
    | --- | --- |
    | justify-start | justify-content: flex-start; |
    | justify-end | justify-content: flex-end; |
    | justify-center | justify-content: center; |
    | justify-between | justify-content: space-between; |
    | justify-around | justify-content: space-around; |
    | justify-evenly | justify-content: space-evenly; |`,frontmatter:{},index:0,start:0,end:12},inline:{raw:`---
src: ./pages/NL_grid_grid-items2.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:36,start:256,end:261},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-items2.md",notesHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:O3,meta:{hide:!1,srcSequence:"./pages/NL_grid_grid-items3.md",slide:{raw:null,content:`3. <kbd>justify-self</kbd>\xA0ur\u010Duje, jak by se m\u011Bl jednotliv\xFD prvek um\xEDstit vzhledem k ose \u0159\xE1dku (osa X)
    
    
   | <p class="text-red-300 w-1/2">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
    | --- | --- |
    | justify-self-auto | justify-self: auto; |
    | justify-self-start | justify-self: start; |
    | justify-self-end | justify-self: end; |
    | justify-self-center | justify-self: center; |
    | justify-self-stretch | justify-self: stretch; |`,frontmatter:{hide:!1,srcSequence:"./pages/NL_grid_grid-items3.md"},index:36,start:0,end:10,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-items3.md",raw:`3. <kbd>justify-self</kbd>\xA0ur\u010Duje, jak by se m\u011Bl jednotliv\xFD prvek um\xEDstit vzhledem k ose \u0159\xE1dku (osa X)
    
    
   | <p class="text-red-300 w-1/2">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
    | --- | --- |
    | justify-self-auto | justify-self: auto; |
    | justify-self-start | justify-self: start; |
    | justify-self-end | justify-self: end; |
    | justify-self-center | justify-self: center; |
    | justify-self-stretch | justify-self: stretch; |`,content:`3. <kbd>justify-self</kbd>\xA0ur\u010Duje, jak by se m\u011Bl jednotliv\xFD prvek um\xEDstit vzhledem k ose \u0159\xE1dku (osa X)
    
    
   | <p class="text-red-300 w-1/2">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
    | --- | --- |
    | justify-self-auto | justify-self: auto; |
    | justify-self-start | justify-self: start; |
    | justify-self-end | justify-self: end; |
    | justify-self-center | justify-self: center; |
    | justify-self-stretch | justify-self: stretch; |`,frontmatter:{},index:0,start:0,end:10},inline:{raw:`---
src: ./pages/NL_grid_grid-items3.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:37,start:261,end:266},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-items3.md",notesHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:P3,meta:{hide:!1,srcSequence:"./pages/NL_grid_grid-items4.md",slide:{raw:null,content:`4. <kbd>align-items</kbd>\xA0ur\u010Duje, jak se maj\xED jednotliv\xE9 prvky rozprost\xEDrat po ose sloupce (osa Y)
    
    
    | <p class="text-red-300 w-36">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
    | --- | --- |
    | items-start | align-items: flex-start; |
    | items-end | align-items: flex-end; |
    | items-center | align-items: center; |
    | items-baseline | align-items: baseline; |
    | items-stretch | align-items: stretch; |`,frontmatter:{hide:!1,srcSequence:"./pages/NL_grid_grid-items4.md"},index:37,start:0,end:10,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-items4.md",raw:`4. <kbd>align-items</kbd>\xA0ur\u010Duje, jak se maj\xED jednotliv\xE9 prvky rozprost\xEDrat po ose sloupce (osa Y)
    
    
    | <p class="text-red-300 w-36">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
    | --- | --- |
    | items-start | align-items: flex-start; |
    | items-end | align-items: flex-end; |
    | items-center | align-items: center; |
    | items-baseline | align-items: baseline; |
    | items-stretch | align-items: stretch; |`,content:`4. <kbd>align-items</kbd>\xA0ur\u010Duje, jak se maj\xED jednotliv\xE9 prvky rozprost\xEDrat po ose sloupce (osa Y)
    
    
    | <p class="text-red-300 w-36">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
    | --- | --- |
    | items-start | align-items: flex-start; |
    | items-end | align-items: flex-end; |
    | items-center | align-items: center; |
    | items-baseline | align-items: baseline; |
    | items-stretch | align-items: stretch; |`,frontmatter:{},index:0,start:0,end:10},inline:{raw:`---
src: ./pages/NL_grid_grid-items4.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:38,start:266,end:271},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-items4.md",notesHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:M3,meta:{hide:!1,srcSequence:"./pages/NL_grid_grid-items5.md",slide:{raw:null,content:`5. <kbd>align-content</kbd>\xA0ur\u010Duje, jak se maj\xED skupiny prvk\u016F rozprost\xEDrat po ose sloupce (osa Y)
    
    
    | <p class="text-red-300 w-52">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
    | --- | --- |
    | content-center | align-content: center; |
    | content-start | align-content: flex-start; |
    | content-end | align-content: flex-end; |
    | content-between | align-content: space-between; |
    | content-around | align-content: space-around; |
    | content-evenly | align-content: space-evenly; |
    | content-baseline | align-content: baseline; |`,frontmatter:{hide:!1,srcSequence:"./pages/NL_grid_grid-items5.md"},index:38,start:0,end:13,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-items5.md",raw:`5. <kbd>align-content</kbd>\xA0ur\u010Duje, jak se maj\xED skupiny prvk\u016F rozprost\xEDrat po ose sloupce (osa Y)
    
    
    | <p class="text-red-300 w-52">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
    | --- | --- |
    | content-center | align-content: center; |
    | content-start | align-content: flex-start; |
    | content-end | align-content: flex-end; |
    | content-between | align-content: space-between; |
    | content-around | align-content: space-around; |
    | content-evenly | align-content: space-evenly; |
    | content-baseline | align-content: baseline; |
`,content:`5. <kbd>align-content</kbd>\xA0ur\u010Duje, jak se maj\xED skupiny prvk\u016F rozprost\xEDrat po ose sloupce (osa Y)
    
    
    | <p class="text-red-300 w-52">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
    | --- | --- |
    | content-center | align-content: center; |
    | content-start | align-content: flex-start; |
    | content-end | align-content: flex-end; |
    | content-between | align-content: space-between; |
    | content-around | align-content: space-around; |
    | content-evenly | align-content: space-evenly; |
    | content-baseline | align-content: baseline; |`,frontmatter:{},index:0,start:0,end:13},inline:{raw:`---
src: ./pages/NL_grid_grid-items5.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:39,start:271,end:276},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-items5.md",notesHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:I3,meta:{hide:!1,srcSequence:"./pages/NL_grid_grid-items6.md",slide:{raw:null,content:`6. <kbd>align-self</kbd>\xA0ur\u010Duje, jak by se m\u011Bl jednotliv\xFD prvek um\xEDstit vzhledem k ose sloupce (osa Y)
    
    
    | <p class="text-red-300 w-36">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
    | --- | --- |
    | self-auto | align-self: auto; |
    | self-start | align-self: flex-start; |
    | self-end | align-self: flex-end; |
    | self-center | align-self: center; |
    | self-stretch | align-self: stretch; |
    | self-baseline | align-self: baseline; |`,frontmatter:{hide:!1,srcSequence:"./pages/NL_grid_grid-items6.md"},index:39,start:0,end:11,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-items6.md",raw:`6. <kbd>align-self</kbd>\xA0ur\u010Duje, jak by se m\u011Bl jednotliv\xFD prvek um\xEDstit vzhledem k ose sloupce (osa Y)
    
    
    | <p class="text-red-300 w-36">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
    | --- | --- |
    | self-auto | align-self: auto; |
    | self-start | align-self: flex-start; |
    | self-end | align-self: flex-end; |
    | self-center | align-self: center; |
    | self-stretch | align-self: stretch; |
    | self-baseline | align-self: baseline; |`,content:`6. <kbd>align-self</kbd>\xA0ur\u010Duje, jak by se m\u011Bl jednotliv\xFD prvek um\xEDstit vzhledem k ose sloupce (osa Y)
    
    
    | <p class="text-red-300 w-36">T\u0159\xEDda v Tailwindu</p> | <p class="text-yellow-500">Vlastnost v CSS</p> |
    | --- | --- |
    | self-auto | align-self: auto; |
    | self-start | align-self: flex-start; |
    | self-end | align-self: flex-end; |
    | self-center | align-self: center; |
    | self-stretch | align-self: stretch; |
    | self-baseline | align-self: baseline; |`,frontmatter:{},index:0,start:0,end:11},inline:{raw:`---
src: ./pages/NL_grid_grid-items6.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:40,start:276,end:281},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_grid-items6.md",notesHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:G3,meta:{title:"P\u0159\xEDklady",hide:!1,class:"text-center",srcSequence:"./pages/NL_grid_example.md",slide:{raw:null,title:"P\u0159\xEDklady",level:1,content:`# P\u0159\xEDklady
<br>
<br>

[P\u0158\xCDKLAD 1](https://play.tailwindcss.com/jKoGjDSkfD)

[P\u0158\xCDKLAD 2](https://play.tailwindcss.com/JfelKgvnpB)`,frontmatter:{title:"P\u0159\xEDklady",hide:!1,class:"text-center",srcSequence:"./pages/NL_grid_example.md"},index:40,start:0,end:7,source:{filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_example.md",raw:`# P\u0159\xEDklady
<br>
<br>

[P\u0158\xCDKLAD 1](https://play.tailwindcss.com/jKoGjDSkfD)

[P\u0158\xCDKLAD 2](https://play.tailwindcss.com/JfelKgvnpB)`,title:"P\u0159\xEDklady",level:1,content:`# P\u0159\xEDklady
<br>
<br>

[P\u0158\xCDKLAD 1](https://play.tailwindcss.com/jKoGjDSkfD)

[P\u0158\xCDKLAD 2](https://play.tailwindcss.com/JfelKgvnpB)`,frontmatter:{title:"P\u0159\xEDklady"},index:0,start:0,end:7},inline:{raw:`---
hide: false
class: text-center
src: ./pages/NL_grid_example.md
---


`,content:"",frontmatter:{hide:!1,class:"text-center"},index:41,start:281,end:289},filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/pages/NL_grid_example.md",notesHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:tx,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

<style>
h1 {
  font-weight: 500 !important;
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.slidev-layout th {
    padding: 0 !important;
}
.slidev-layout tbody {
  font-size: 0.9rem !important;
}
.slidev-layout td {
padding: 0.5rem !important;
}
 .shiki-container {
  scroll-behavior: smooth !important;
  overflow-y: scroll !important;
  display: block
 }

</style>

# Zdroje
<br>
<br>
<p class="text-yellow-500 text-lg font-bold">Tailwind CSS</p>

[Tailwind](https://tailwindcss.com/docs/installation) \xB7 [Form Plugin](https://github.com/tailwindlabs/tailwindcss-forms) \xB7 [State of CSS](https://2022.stateofcss.com/en-US/)

<br>
<p class="text-yellow-500 text-lg font-bold">Grid CSS</p>

[Grid v Tailwindu](https://tailwindcss.com/docs/grid-template-columns) \xB7 [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) \xB7 [Grid By Example](https://gridbyexample.com/) \xB7 [Grid Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
`,title:"Zdroje",level:1,content:`<style>
h1 {
  font-weight: 500 !important;
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.slidev-layout th {
    padding: 0 !important;
}
.slidev-layout tbody {
  font-size: 0.9rem !important;
}
.slidev-layout td {
padding: 0.5rem !important;
}
 .shiki-container {
  scroll-behavior: smooth !important;
  overflow-y: scroll !important;
  display: block
 }

</style>

# Zdroje
<br>
<br>
<p class="text-yellow-500 text-lg font-bold">Tailwind CSS</p>

[Tailwind](https://tailwindcss.com/docs/installation) \xB7 [Form Plugin](https://github.com/tailwindlabs/tailwindcss-forms) \xB7 [State of CSS](https://2022.stateofcss.com/en-US/)

<br>
<p class="text-yellow-500 text-lg font-bold">Grid CSS</p>

[Grid v Tailwindu](https://tailwindcss.com/docs/grid-template-columns) \xB7 [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) \xB7 [Grid By Example](https://gridbyexample.com/) \xB7 [Grid Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)`,frontmatter:{class:"text-center"},index:41,start:289,end:333,notesHTML:"",filepath:"/Users/letochova/Desktop/Vzde\u030Cla\u0301va\u0301ni\u0301/Mikros\u030Ckoleni\u0301/tailwind-grid-presentation/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",component:o1,meta:{layout:"end"}}],Ue=nx,sx=[{name:"play",path:"/",component:Zv,children:[...Ue]},{name:"print",path:"/print",component:n1},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{path:"/presenter/print",component:()=>jn(()=>import("./PresenterPrint.91d40a29.js"),["assets/PresenterPrint.91d40a29.js","assets/NoteViewer.vue_vue_type_script_setup_true_lang.b98028ab.js"])},{name:"presenter",path:"/presenter/:no",component:()=>jn(()=>import("./Presenter.32d5ea91.js"),["assets/Presenter.32d5ea91.js","assets/NoteViewer.vue_vue_type_script_setup_true_lang.b98028ab.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.20dada4c.js","assets/Presenter.341f1e16.css"]),beforeEnter:t=>{if(!ws.remote||ws.remote===t.query.password)return!0;if(ws.remote&&t.query.password===void 0){const n=prompt("Enter password");if(ws.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],ht=H8({history:o8("/"),routes:sx});function lx(t,n,{mode:s="replace"}={}){return C({get(){const l=ht.currentRoute.value.query[t];return l==null?n!=null?n:null:Array.isArray(l)?l.filter(Boolean):l},set(l){Qe(()=>{ht[x(s)]({query:{...ht.currentRoute.value.query,[t]:l}})})}})}const bu=H(0);Qe(()=>{ht.afterEach(async()=>{await Qe(),bu.value+=1})});const Xt=C(()=>ht.currentRoute.value),sa=C(()=>Xt.value.query.print!==void 0),ox=C(()=>Xt.value.query.print==="clicks"),qt=C(()=>Xt.value.query.embedded!==void 0),Lt=C(()=>Xt.value.path.startsWith("/presenter")),Ts=C(()=>sa.value&&!ox.value),cr=C(()=>Xt.value.query.password),rx=C(()=>!Lt.value&&(!we.remote||cr.value===we.remote)),tc=lx("clicks","0"),ku=C(()=>Ue.length-1),ax=C(()=>Xt.value.path),Ve=C(()=>parseInt(ax.value.split(/\//g).slice(-1)[0])||1);C(()=>no(Ve.value));const dt=C(()=>Ue.find(t=>t.path===`${Ve.value}`));C(()=>{var t,n,s;return(s=(n=(t=dt.value)==null?void 0:t.meta)==null?void 0:n.slide)==null?void 0:s.id});C(()=>{var t,n;return((n=(t=dt.value)==null?void 0:t.meta)==null?void 0:n.layout)||(Ve.value===1?"cover":"default")});const Ao=C(()=>Ue.find(t=>t.path===`${Math.min(Ue.length,Ve.value+1)}`)),ix=C(()=>{var t,n;return bu.value,((n=(t=dt.value)==null?void 0:t.meta)==null?void 0:n.__clicksElements)||[]}),St=C({get(){if(Ts.value)return 99999;let t=+(tc.value||0);return isNaN(t)&&(t=0),t},set(t){tc.value=t.toString()}}),Ol=C(()=>{var t,n,s;return+((s=(n=(t=dt.value)==null?void 0:t.meta)==null?void 0:n.clicks)!=null?s:ix.value.length)}),cx=C(()=>Ve.value<Ue.length-1||St.value<Ol.value),px=C(()=>Ve.value>1||St.value>0),ux=C(()=>Ue.filter(t=>{var n,s;return(s=(n=t.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((t,n)=>(la(t,n),t),[])),dx=C(()=>oa(ux.value,dt.value));C(()=>ra(dx.value));function an(){Ol.value<=St.value?Ws():St.value+=1}async function cn(){St.value<=0?await Ks():St.value-=1}function no(t){return Lt.value?`/presenter/${t}`:`/${t}`}function Ws(){const t=Math.min(Ue.length,Ve.value+1);return ls(t)}async function Ks(t=!0){const n=Math.max(1,Ve.value-1);await ls(n),t&&Ol.value&&ht.replace({query:{...Xt.value.query,clicks:Ol.value}})}function ls(t,n){return ht.push({path:no(t),query:{...Xt.value.query,clicks:n}})}function fx(t){const n=H(0),{direction:s,distanceX:l,distanceY:o}=Fh(t,{onSwipeStart(r){r.pointerType==="touch"&&(qs.value||(n.value=Ko()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!n.value||qs.value)return;const a=Math.abs(l.value),i=Math.abs(o.value);a/window.innerWidth>.3||a>100?s.value===Wt.LEFT?an():cn():(i/window.innerHeight>.4||i>200)&&(s.value===Wt.DOWN?Ks():Ws())}})}async function pr(){const{saveAs:t}=await jn(()=>import("./FileSaver.min.7f56e709.js").then(n=>n.F),[]);t(Cp(we.download)?we.download:we.exportFilename?`${we.exportFilename}.pdf`:"/slidev-exported.pdf",`${we.title}.pdf`)}async function yx(t){var n,s;if(t==null){const l=(s=(n=dt.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(l!=null&&l.filepath))return!1;t=`${l.filepath}:${l.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(t)}`),!0}function la(t,n,s=1){var o,r,a,i,c;const l=(r=(o=n.meta)==null?void 0:o.slide)==null?void 0:r.level;l&&l>s&&t.length>0?la(t[t.length-1].children,n,s+1):t.push({children:[],level:s,path:n.path,hideInToc:Boolean((a=n.meta)==null?void 0:a.hideInToc),title:(c=(i=n.meta)==null?void 0:i.slide)==null?void 0:c.title})}function oa(t,n,s=!1,l){return t.map(o=>{const r={...o,active:o.path===(n==null?void 0:n.path),hasActiveParent:s};return r.children.length>0&&(r.children=oa(r.children,n,r.active||r.hasActiveParent,r)),l&&(r.active||r.activeParent)&&(l.activeParent=!0),r})}function ra(t,n=1){return t.filter(s=>!s.hideInToc).map(s=>({...s,children:ra(s.children,n+1)}))}function mx(){const t=we.titleTemplate.replace("%s",we.title||"Slidev");Sm({title:t}),Mm(`${t} - shared`),Vm(`${t} - drawings`);function n(){Lt.value&&(ai("page",+Ve.value),ai("clicks",St.value))}ht.afterEach(n),ye(St,n),Nm(s=>{(+s.page!=+Ve.value||St.value!==s.clicks)&&ht.replace({path:no(s.page),query:{...ht.currentRoute.value.query,clicks:s.clicks||0}})})}const hx=Ae({__name:"App",setup(t){return M(K),mx(),(n,s)=>{const l=El("RouterView"),o=El("StarportCarrier");return B(),U(De,null,[j(l),j(o)],64)}}});function Bo(t){return t!==null&&typeof t=="object"}function ur(t,n,s=".",l){if(!Bo(n))return ur(t,{},s,l);const o=Object.assign({},n);for(const r in t){if(r==="__proto__"||r==="constructor")continue;const a=t[r];a!=null&&(l&&l(o,r,a,s)||(Array.isArray(a)&&Array.isArray(o[r])?o[r]=[...a,...o[r]]:Bo(a)&&Bo(o[r])?o[r]=ur(a,o[r],(s?`${s}.`:"")+r.toString(),l):o[r]=a))}return o}function gx(t){return(...n)=>n.reduce((s,l)=>ur(s,l,"",t),{})}const vx=gx(),wu=1/60*1e3,_x=typeof performance<"u"?()=>performance.now():()=>Date.now(),xu=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(_x()),wu);function bx(t){let n=[],s=[],l=0,o=!1,r=!1;const a=new WeakSet,i={schedule:(c,u=!1,d=!1)=>{const f=d&&o,y=f?n:s;return u&&a.add(c),y.indexOf(c)===-1&&(y.push(c),f&&o&&(l=n.length)),c},cancel:c=>{const u=s.indexOf(c);u!==-1&&s.splice(u,1),a.delete(c)},process:c=>{if(o){r=!0;return}if(o=!0,[n,s]=[s,n],s.length=0,l=n.length,l)for(let u=0;u<l;u++){const d=n[u];d(c),a.has(d)&&(i.schedule(d),t())}o=!1,r&&(r=!1,i.process(c))}};return i}const kx=40;let dr=!0,Ys=!1,fr=!1;const Jn={delta:0,timestamp:0},el=["read","update","preRender","render","postRender"],so=el.reduce((t,n)=>(t[n]=bx(()=>Ys=!0),t),{}),yr=el.reduce((t,n)=>{const s=so[n];return t[n]=(l,o=!1,r=!1)=>(Ys||Ax(),s.schedule(l,o,r)),t},{}),wx=el.reduce((t,n)=>(t[n]=so[n].cancel,t),{});el.reduce((t,n)=>(t[n]=()=>so[n].process(Jn),t),{});const xx=t=>so[t].process(Jn),Au=t=>{Ys=!1,Jn.delta=dr?wu:Math.max(Math.min(t-Jn.timestamp,kx),1),Jn.timestamp=t,fr=!0,el.forEach(xx),fr=!1,Ys&&(dr=!1,xu(Au))},Ax=()=>{Ys=!0,dr=!0,fr||xu(Au)},Bu=()=>Jn;function Eu(t,n){var s={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&n.indexOf(l)<0&&(s[l]=t[l]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(t);o<l.length;o++)n.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(t,l[o])&&(s[l[o]]=t[l[o]]);return s}var Bx=function(){},nc=function(){};const mr=(t,n,s)=>Math.min(Math.max(s,t),n),Eo=.001,Ex=.01,sc=10,Dx=.05,Cx=1;function Sx({duration:t=800,bounce:n=.25,velocity:s=0,mass:l=1}){let o,r;Bx(t<=sc*1e3);let a=1-n;a=mr(Dx,Cx,a),t=mr(Ex,sc,t/1e3),a<1?(o=u=>{const d=u*a,f=d*t,y=d-s,h=hr(u,a),m=Math.exp(-f);return Eo-y/h*m},r=u=>{const f=u*a*t,y=f*s+s,h=Math.pow(a,2)*Math.pow(u,2)*t,m=Math.exp(-f),_=hr(Math.pow(u,2),a);return(-o(u)+Eo>0?-1:1)*((y-h)*m)/_}):(o=u=>{const d=Math.exp(-u*t),f=(u-s)*t+1;return-Eo+d*f},r=u=>{const d=Math.exp(-u*t),f=(s-u)*(t*t);return d*f});const i=5/t,c=jx(o,r,i);if(t=t*1e3,isNaN(c))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(c,2)*l;return{stiffness:u,damping:a*2*Math.sqrt(l*u),duration:t}}}const Fx=12;function jx(t,n,s){let l=s;for(let o=1;o<Fx;o++)l=l-t(l)/n(l);return l}function hr(t,n){return t*Math.sqrt(1-n*n)}const Tx=["duration","bounce"],$x=["stiffness","damping","mass"];function lc(t,n){return n.some(s=>t[s]!==void 0)}function Ox(t){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!lc(t,$x)&&lc(t,Tx)){const s=Sx(t);n=Object.assign(Object.assign(Object.assign({},n),s),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function aa(t){var{from:n=0,to:s=1,restSpeed:l=2,restDelta:o}=t,r=Eu(t,["from","to","restSpeed","restDelta"]);const a={done:!1,value:n};let{stiffness:i,damping:c,mass:u,velocity:d,duration:f,isResolvedFromDuration:y}=Ox(r),h=oc,m=oc;function _(){const b=d?-(d/1e3):0,w=s-n,A=c/(2*Math.sqrt(i*u)),k=Math.sqrt(i/u)/1e3;if(o===void 0&&(o=Math.min(Math.abs(s-n)/100,.4)),A<1){const D=hr(k,A);h=z=>{const P=Math.exp(-A*k*z);return s-P*((b+A*k*w)/D*Math.sin(D*z)+w*Math.cos(D*z))},m=z=>{const P=Math.exp(-A*k*z);return A*k*P*(Math.sin(D*z)*(b+A*k*w)/D+w*Math.cos(D*z))-P*(Math.cos(D*z)*(b+A*k*w)-D*w*Math.sin(D*z))}}else if(A===1)h=D=>s-Math.exp(-k*D)*(w+(b+k*w)*D);else{const D=k*Math.sqrt(A*A-1);h=z=>{const P=Math.exp(-A*k*z),N=Math.min(D*z,300);return s-P*((b+A*k*w)*Math.sinh(N)+D*w*Math.cosh(N))/D}}}return _(),{next:b=>{const w=h(b);if(y)a.done=b>=f;else{const A=m(b)*1e3,k=Math.abs(A)<=l,D=Math.abs(s-w)<=o;a.done=k&&D}return a.value=a.done?s:w,a},flipTarget:()=>{d=-d,[n,s]=[s,n],_()}}}aa.needsInterpolation=(t,n)=>typeof t=="string"||typeof n=="string";const oc=t=>0,Du=(t,n,s)=>{const l=n-t;return l===0?1:(s-t)/l},ia=(t,n,s)=>-s*t+s*n+t,Cu=(t,n)=>s=>Math.max(Math.min(s,n),t),$s=t=>t%1?Number(t.toFixed(5)):t,Xs=/(-)?([\d]*\.?[\d])+/g,gr=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,zx=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function tl(t){return typeof t=="string"}const nl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Os=Object.assign(Object.assign({},nl),{transform:Cu(0,1)}),fl=Object.assign(Object.assign({},nl),{default:1}),ca=t=>({test:n=>tl(n)&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),yn=ca("deg"),zs=ca("%"),ce=ca("px"),rc=Object.assign(Object.assign({},zs),{parse:t=>zs.parse(t)/100,transform:t=>zs.transform(t*100)}),pa=(t,n)=>s=>Boolean(tl(s)&&zx.test(s)&&s.startsWith(t)||n&&Object.prototype.hasOwnProperty.call(s,n)),Su=(t,n,s)=>l=>{if(!tl(l))return l;const[o,r,a,i]=l.match(Xs);return{[t]:parseFloat(o),[n]:parseFloat(r),[s]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},Bn={test:pa("hsl","hue"),parse:Su("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:s,alpha:l=1})=>"hsla("+Math.round(t)+", "+zs.transform($s(n))+", "+zs.transform($s(s))+", "+$s(Os.transform(l))+")"},Px=Cu(0,255),Do=Object.assign(Object.assign({},nl),{transform:t=>Math.round(Px(t))}),nn={test:pa("rgb","red"),parse:Su("red","green","blue"),transform:({red:t,green:n,blue:s,alpha:l=1})=>"rgba("+Do.transform(t)+", "+Do.transform(n)+", "+Do.transform(s)+", "+$s(Os.transform(l))+")"};function Lx(t){let n="",s="",l="",o="";return t.length>5?(n=t.substr(1,2),s=t.substr(3,2),l=t.substr(5,2),o=t.substr(7,2)):(n=t.substr(1,1),s=t.substr(2,1),l=t.substr(3,1),o=t.substr(4,1),n+=n,s+=s,l+=l,o+=o),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(l,16),alpha:o?parseInt(o,16)/255:1}}const vr={test:pa("#"),parse:Lx,transform:nn.transform},at={test:t=>nn.test(t)||vr.test(t)||Bn.test(t),parse:t=>nn.test(t)?nn.parse(t):Bn.test(t)?Bn.parse(t):vr.parse(t),transform:t=>tl(t)?t:t.hasOwnProperty("red")?nn.transform(t):Bn.transform(t)},Fu="${c}",ju="${n}";function Mx(t){var n,s,l,o;return isNaN(t)&&tl(t)&&((s=(n=t.match(Xs))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((o=(l=t.match(gr))===null||l===void 0?void 0:l.length)!==null&&o!==void 0?o:0)>0}function Tu(t){typeof t=="number"&&(t=`${t}`);const n=[];let s=0;const l=t.match(gr);l&&(s=l.length,t=t.replace(gr,Fu),n.push(...l.map(at.parse)));const o=t.match(Xs);return o&&(t=t.replace(Xs,ju),n.push(...o.map(nl.parse))),{values:n,numColors:s,tokenised:t}}function $u(t){return Tu(t).values}function Ou(t){const{values:n,numColors:s,tokenised:l}=Tu(t),o=n.length;return r=>{let a=l;for(let i=0;i<o;i++)a=a.replace(i<s?Fu:ju,i<s?at.transform(r[i]):$s(r[i]));return a}}const Nx=t=>typeof t=="number"?0:t;function Ix(t){const n=$u(t);return Ou(t)(n.map(Nx))}const sl={test:Mx,parse:$u,createTransformer:Ou,getAnimatableNone:Ix},Rx=new Set(["brightness","contrast","saturate","opacity"]);function Vx(t){let[n,s]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[l]=s.match(Xs)||[];if(!l)return t;const o=s.replace(l,"");let r=Rx.has(n)?1:0;return l!==s&&(r*=100),n+"("+r+o+")"}const Hx=/([a-z-]*)\(.*?\)/g,_r=Object.assign(Object.assign({},sl),{getAnimatableNone:t=>{const n=t.match(Hx);return n?n.map(Vx).join(" "):t}});function Co(t,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+(n-t)*6*s:s<1/2?n:s<2/3?t+(n-t)*(2/3-s)*6:t}function ac({hue:t,saturation:n,lightness:s,alpha:l}){t/=360,n/=100,s/=100;let o=0,r=0,a=0;if(!n)o=r=a=s;else{const i=s<.5?s*(1+n):s+n-s*n,c=2*s-i;o=Co(c,i,t+1/3),r=Co(c,i,t),a=Co(c,i,t-1/3)}return{red:Math.round(o*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:l}}const qx=(t,n,s)=>{const l=t*t,o=n*n;return Math.sqrt(Math.max(0,s*(o-l)+l))},Ux=[vr,nn,Bn],ic=t=>Ux.find(n=>n.test(t)),zu=(t,n)=>{let s=ic(t),l=ic(n),o=s.parse(t),r=l.parse(n);s===Bn&&(o=ac(o),s=nn),l===Bn&&(r=ac(r),l=nn);const a=Object.assign({},o);return i=>{for(const c in a)c!=="alpha"&&(a[c]=qx(o[c],r[c],i));return a.alpha=ia(o.alpha,r.alpha,i),s.transform(a)}},Gx=t=>typeof t=="number",Wx=(t,n)=>s=>n(t(s)),Pu=(...t)=>t.reduce(Wx);function Lu(t,n){return Gx(t)?s=>ia(t,n,s):at.test(t)?zu(t,n):Nu(t,n)}const Mu=(t,n)=>{const s=[...t],l=s.length,o=t.map((r,a)=>Lu(r,n[a]));return r=>{for(let a=0;a<l;a++)s[a]=o[a](r);return s}},Kx=(t,n)=>{const s=Object.assign(Object.assign({},t),n),l={};for(const o in s)t[o]!==void 0&&n[o]!==void 0&&(l[o]=Lu(t[o],n[o]));return o=>{for(const r in l)s[r]=l[r](o);return s}};function cc(t){const n=sl.parse(t),s=n.length;let l=0,o=0,r=0;for(let a=0;a<s;a++)l||typeof n[a]=="number"?l++:n[a].hue!==void 0?r++:o++;return{parsed:n,numNumbers:l,numRGB:o,numHSL:r}}const Nu=(t,n)=>{const s=sl.createTransformer(n),l=cc(t),o=cc(n);return l.numHSL===o.numHSL&&l.numRGB===o.numRGB&&l.numNumbers>=o.numNumbers?Pu(Mu(l.parsed,o.parsed),s):a=>`${a>0?n:t}`},Yx=(t,n)=>s=>ia(t,n,s);function Xx(t){if(typeof t=="number")return Yx;if(typeof t=="string")return at.test(t)?zu:Nu;if(Array.isArray(t))return Mu;if(typeof t=="object")return Kx}function Zx(t,n,s){const l=[],o=s||Xx(t[0]),r=t.length-1;for(let a=0;a<r;a++){let i=o(t[a],t[a+1]);if(n){const c=Array.isArray(n)?n[a]:n;i=Pu(c,i)}l.push(i)}return l}function Jx([t,n],[s]){return l=>s(Du(t,n,l))}function Qx(t,n){const s=t.length,l=s-1;return o=>{let r=0,a=!1;if(o<=t[0]?a=!0:o>=t[l]&&(r=l-1,a=!0),!a){let c=1;for(;c<s&&!(t[c]>o||c===l);c++);r=c-1}const i=Du(t[r],t[r+1],o);return n[r](i)}}function Iu(t,n,{clamp:s=!0,ease:l,mixer:o}={}){const r=t.length;nc(r===n.length),nc(!l||!Array.isArray(l)||l.length===r-1),t[0]>t[r-1]&&(t=[].concat(t),n=[].concat(n),t.reverse(),n.reverse());const a=Zx(n,l,o),i=r===2?Jx(t,a):Qx(t,a);return s?c=>i(mr(t[0],t[r-1],c)):i}const lo=t=>n=>1-t(1-n),ua=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,e2=t=>n=>Math.pow(n,t),Ru=t=>n=>n*n*((t+1)*n-t),t2=t=>{const n=Ru(t);return s=>(s*=2)<1?.5*n(s):.5*(2-Math.pow(2,-10*(s-1)))},Vu=1.525,n2=4/11,s2=8/11,l2=9/10,Hu=t=>t,da=e2(2),o2=lo(da),qu=ua(da),Uu=t=>1-Math.sin(Math.acos(t)),Gu=lo(Uu),r2=ua(Gu),fa=Ru(Vu),a2=lo(fa),i2=ua(fa),c2=t2(Vu),p2=4356/361,u2=35442/1805,d2=16061/1805,zl=t=>{if(t===1||t===0)return t;const n=t*t;return t<n2?7.5625*n:t<s2?9.075*n-9.9*t+3.4:t<l2?p2*n-u2*t+d2:10.8*t*t-20.52*t+10.72},f2=lo(zl),y2=t=>t<.5?.5*(1-zl(1-t*2)):.5*zl(t*2-1)+.5;function m2(t,n){return t.map(()=>n||qu).splice(0,t.length-1)}function h2(t){const n=t.length;return t.map((s,l)=>l!==0?l/(n-1):0)}function g2(t,n){return t.map(s=>s*n)}function bl({from:t=0,to:n=1,ease:s,offset:l,duration:o=300}){const r={done:!1,value:t},a=Array.isArray(n)?n:[t,n],i=g2(l&&l.length===a.length?l:h2(a),o);function c(){return Iu(i,a,{ease:Array.isArray(s)?s:m2(a,s)})}let u=c();return{next:d=>(r.value=u(d),r.done=d>=o,r),flipTarget:()=>{a.reverse(),u=c()}}}function v2({velocity:t=0,from:n=0,power:s=.8,timeConstant:l=350,restDelta:o=.5,modifyTarget:r}){const a={done:!1,value:n};let i=s*t;const c=n+i,u=r===void 0?c:r(c);return u!==c&&(i=u-n),{next:d=>{const f=-i*Math.exp(-d/l);return a.done=!(f>o||f<-o),a.value=a.done?u:u+f,a},flipTarget:()=>{}}}const pc={keyframes:bl,spring:aa,decay:v2};function _2(t){if(Array.isArray(t.to))return bl;if(pc[t.type])return pc[t.type];const n=new Set(Object.keys(t));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?bl:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?aa:bl}function Wu(t,n,s=0){return t-n-s}function b2(t,n,s=0,l=!0){return l?Wu(n+-t,n,s):n-(t-n)+s}function k2(t,n,s,l){return l?t>=n+s:t<=-s}const w2=t=>{const n=({delta:s})=>t(s);return{start:()=>yr.update(n,!0),stop:()=>wx.update(n)}};function Ku(t){var n,s,{from:l,autoplay:o=!0,driver:r=w2,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:u=0,onPlay:d,onStop:f,onComplete:y,onRepeat:h,onUpdate:m}=t,_=Eu(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:b}=_,w,A=0,k=_.duration,D,z=!1,P=!0,N;const Z=_2(_);!((s=(n=Z).needsInterpolation)===null||s===void 0)&&s.call(n,l,b)&&(N=Iu([0,100],[l,b],{clamp:!1}),l=0,b=100);const re=Z(Object.assign(Object.assign({},_),{from:l,to:b}));function fe(){A++,c==="reverse"?(P=A%2===0,a=b2(a,k,u,P)):(a=Wu(a,k,u),c==="mirror"&&re.flipTarget()),z=!1,h&&h()}function _e(){w.stop(),y&&y()}function Ge(Le){if(P||(Le=-Le),a+=Le,!z){const je=re.next(Math.max(0,a));D=je.value,N&&(D=N(D)),z=P?je.done:a<=0}m==null||m(D),z&&(A===0&&(k!=null||(k=a)),A<i?k2(a,k,u,P)&&fe():_e())}function He(){d==null||d(),w=r(Ge),w.start()}return o&&He(),{stop:()=>{f==null||f(),w.stop()}}}function Yu(t,n){return n?t*(1e3/n):0}function x2({from:t=0,velocity:n=0,min:s,max:l,power:o=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:u,driver:d,onUpdate:f,onComplete:y,onStop:h}){let m;function _(k){return s!==void 0&&k<s||l!==void 0&&k>l}function b(k){return s===void 0?l:l===void 0||Math.abs(s-k)<Math.abs(l-k)?s:l}function w(k){m==null||m.stop(),m=Ku(Object.assign(Object.assign({},k),{driver:d,onUpdate:D=>{var z;f==null||f(D),(z=k.onUpdate)===null||z===void 0||z.call(k,D)},onComplete:y,onStop:h}))}function A(k){w(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},k))}if(_(t))A({from:t,velocity:n,to:b(t)});else{let k=o*n+t;typeof u<"u"&&(k=u(k));const D=b(k),z=D===s?-1:1;let P,N;const Z=re=>{P=N,N=re,n=Yu(re-P,Bu().delta),(z===1&&re>D||z===-1&&re<D)&&A({from:re,to:D,velocity:n})};w({type:"decay",from:t,velocity:n,timeConstant:r,power:o,restDelta:c,modifyTarget:u,onUpdate:_(k)?Z:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const Xu=(t,n)=>1-3*n+3*t,Zu=(t,n)=>3*n-6*t,Ju=t=>3*t,Pl=(t,n,s)=>((Xu(n,s)*t+Zu(n,s))*t+Ju(n))*t,Qu=(t,n,s)=>3*Xu(n,s)*t*t+2*Zu(n,s)*t+Ju(n),A2=1e-7,B2=10;function E2(t,n,s,l,o){let r,a,i=0;do a=n+(s-n)/2,r=Pl(a,l,o)-t,r>0?s=a:n=a;while(Math.abs(r)>A2&&++i<B2);return a}const D2=8,C2=.001;function S2(t,n,s,l){for(let o=0;o<D2;++o){const r=Qu(n,s,l);if(r===0)return n;const a=Pl(n,s,l)-t;n-=a/r}return n}const kl=11,yl=1/(kl-1);function F2(t,n,s,l){if(t===n&&s===l)return Hu;const o=new Float32Array(kl);for(let a=0;a<kl;++a)o[a]=Pl(a*yl,t,s);function r(a){let i=0,c=1;const u=kl-1;for(;c!==u&&o[c]<=a;++c)i+=yl;--c;const d=(a-o[c])/(o[c+1]-o[c]),f=i+d*yl,y=Qu(f,t,s);return y>=C2?S2(a,f,t,s):y===0?f:E2(a,i,i+yl,t,s)}return a=>a===0||a===1?a:Pl(r(a),n,l)}const So={};class j2{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,s,l){if(!!this.subscriptions.size)for(const o of this.subscriptions)o(n,s,l)}clear(){this.subscriptions.clear()}}const uc=t=>!isNaN(parseFloat(t));class T2{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new j2,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:l,timestamp:o}=Bu();this.lastUpdated!==o&&(this.timeDelta=l,this.lastUpdated=o),yr.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>yr.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=uc(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=uc(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Yu(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(s=>{const{stop:l}=n(s);this.stopAnimation=l}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function $2(t){return new T2(t)}const{isArray:O2}=Array;function z2(){const t=H({}),n=l=>{const o=r=>{!t.value[r]||(t.value[r].stop(),t.value[r].destroy(),delete t.value[r])};l?O2(l)?l.forEach(o):o(l):Object.keys(t.value).forEach(o)},s=(l,o,r)=>{if(t.value[l])return t.value[l];const a=$2(o);return a.onChange(i=>r[l]=i),t.value[l]=a,a};return nm(n),{motionValues:t,get:s,stop:n}}const P2=t=>Array.isArray(t),mn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Fo=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),L2=t=>({type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}),jo=()=>({type:"keyframes",ease:"linear",duration:300}),M2=t=>({type:"keyframes",duration:800,values:t}),dc={default:L2,x:mn,y:mn,z:mn,rotate:mn,rotateX:mn,rotateY:mn,rotateZ:mn,scaleX:Fo,scaleY:Fo,scale:Fo,backgroundColor:jo,color:jo,opacity:jo},ed=(t,n)=>{let s;return P2(n)?s=M2:s=dc[t]||dc.default,{to:n,...s(n)}},fc={...nl,transform:Math.round},td={color:at,backgroundColor:at,outlineColor:at,fill:at,stroke:at,borderColor:at,borderTopColor:at,borderRightColor:at,borderBottomColor:at,borderLeftColor:at,borderWidth:ce,borderTopWidth:ce,borderRightWidth:ce,borderBottomWidth:ce,borderLeftWidth:ce,borderRadius:ce,radius:ce,borderTopLeftRadius:ce,borderTopRightRadius:ce,borderBottomRightRadius:ce,borderBottomLeftRadius:ce,width:ce,maxWidth:ce,height:ce,maxHeight:ce,size:ce,top:ce,right:ce,bottom:ce,left:ce,padding:ce,paddingTop:ce,paddingRight:ce,paddingBottom:ce,paddingLeft:ce,margin:ce,marginTop:ce,marginRight:ce,marginBottom:ce,marginLeft:ce,rotate:yn,rotateX:yn,rotateY:yn,rotateZ:yn,scale:fl,scaleX:fl,scaleY:fl,scaleZ:fl,skew:yn,skewX:yn,skewY:yn,distance:ce,translateX:ce,translateY:ce,translateZ:ce,x:ce,y:ce,z:ce,perspective:ce,transformPerspective:ce,opacity:Os,originX:rc,originY:rc,originZ:ce,zIndex:fc,filter:_r,WebkitFilter:_r,fillOpacity:Os,strokeOpacity:Os,numOctaves:fc},ya=t=>td[t],nd=(t,n)=>n&&typeof t=="number"&&n.transform?n.transform(t):t;function N2(t,n){let s=ya(t);return s!==_r&&(s=sl),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const I2={linear:Hu,easeIn:da,easeInOut:qu,easeOut:o2,circIn:Uu,circInOut:r2,circOut:Gu,backIn:fa,backInOut:i2,backOut:a2,anticipate:c2,bounceIn:f2,bounceInOut:y2,bounceOut:zl},yc=t=>{if(Array.isArray(t)){const[n,s,l,o]=t;return F2(n,s,l,o)}else if(typeof t=="string")return I2[t];return t},R2=t=>Array.isArray(t)&&typeof t[0]!="number",mc=(t,n)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&sl.test(n)&&!n.startsWith("url("));function V2(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function H2({ease:t,times:n,delay:s,...l}){const o={...l};return n&&(o.offset=n),t&&(o.ease=R2(t)?t.map(yc):yc(t)),s&&(o.elapsed=-s),o}function q2(t,n,s){return Array.isArray(n.to)&&(t.duration||(t.duration=800)),V2(n),U2(t)||(t={...t,...ed(s,n.to)}),{...n,...H2(t)}}function U2({delay:t,repeat:n,repeatType:s,repeatDelay:l,from:o,...r}){return!!Object.keys(r).length}function G2(t,n){return t[n]||t.default||t}function W2(t,n,s,l,o){const r=G2(l,t);let a=r.from===null||r.from===void 0?n.get():r.from;const i=mc(t,s);a==="none"&&i&&typeof s=="string"&&(a=N2(t,s));const c=mc(t,a);function u(f){const y={from:a,to:s,velocity:l.velocity?l.velocity:n.getVelocity(),onUpdate:h=>n.set(h)};return r.type==="inertia"||r.type==="decay"?x2({...y,...r}):Ku({...q2(r,y,t),onUpdate:h=>{y.onUpdate(h),r.onUpdate&&r.onUpdate(h)},onComplete:()=>{l.onComplete&&l.onComplete(),o&&o(),f&&f()}})}function d(f){return n.set(s),l.onComplete&&l.onComplete(),o&&o(),f&&f(),{stop:()=>{}}}return!c||!i||r.type===!1?d:u}function K2(){const{motionValues:t,stop:n,get:s}=z2();return{motionValues:t,stop:n,push:(o,r,a,i={},c)=>{const u=a[o],d=s(o,u,a);if(i&&i.immediate){d.set(r);return}const f=W2(o,d,r,i,c);d.start(f)}}}function Y2(t,n={},{motionValues:s,push:l,stop:o}=K2()){const r=x(n),a=H(!1);ye(s,f=>{a.value=Object.values(f).filter(y=>y.isAnimating()).length>0},{immediate:!0,deep:!0});const i=f=>{if(!r||!r[f])throw new Error(`The variant ${f} does not exist.`);return r[f]},c=f=>(typeof f=="string"&&(f=i(f)),Promise.all(Object.entries(f).map(([y,h])=>{if(y!=="transition")return new Promise(m=>l(y,h,t,f.transition||ed(y,f[y]),m))}).filter(Boolean)));return{isAnimating:a,apply:c,set:f=>{const y=Wo(f)?f:i(f);Object.entries(y).forEach(([h,m])=>{h!=="transition"&&l(h,m,t,{immediate:!0})})},leave:async f=>{let y;if(r&&(r.leave&&(y=r.leave),!r.leave&&r.initial&&(y=r.initial)),!y){f();return}await c(y),f()},stop:o}}const ma=typeof window<"u",X2=()=>ma&&window.onpointerdown===null,Z2=()=>ma&&window.ontouchstart===null,J2=()=>ma&&window.onmousedown===null;function Q2({target:t,state:n,variants:s,apply:l}){const o=x(s),r=H(!1),a=H(!1),i=H(!1),c=C(()=>{let d=[];return o&&(o.hovered&&(d=[...d,...Object.keys(o.hovered)]),o.tapped&&(d=[...d,...Object.keys(o.tapped)]),o.focused&&(d=[...d,...Object.keys(o.focused)])),d}),u=C(()=>{const d={};Object.assign(d,n.value),r.value&&o.hovered&&Object.assign(d,o.hovered),a.value&&o.tapped&&Object.assign(d,o.tapped),i.value&&o.focused&&Object.assign(d,o.focused);for(const f in d)c.value.includes(f)||delete d[f];return d});o.hovered&&(de(t,"mouseenter",()=>r.value=!0),de(t,"mouseleave",()=>{r.value=!1,a.value=!1}),de(t,"mouseout",()=>{r.value=!1,a.value=!1})),o.tapped&&(J2()&&(de(t,"mousedown",()=>a.value=!0),de(t,"mouseup",()=>a.value=!1)),X2()&&(de(t,"pointerdown",()=>a.value=!0),de(t,"pointerup",()=>a.value=!1)),Z2()&&(de(t,"touchstart",()=>a.value=!0),de(t,"touchend",()=>a.value=!1))),o.focused&&(de(t,"focus",()=>i.value=!0),de(t,"blur",()=>i.value=!1)),ye(u,l)}function eA({set:t,target:n,apply:s,variants:l,variant:o}){const r=x(l);ye(()=>n,()=>{!r||(r.initial&&t("initial"),r.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function tA({state:t,apply:n}){ye(t,s=>{s&&n(s)},{immediate:!0})}function nA({target:t,variants:n,variant:s}){const l=x(n);l&&(l.visible||l.visibleOnce)&&Dh(t,([{isIntersecting:o}])=>{l.visible?o?s.value="visible":s.value="initial":l.visibleOnce&&(o&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function sA(t,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&eA(t),n.syncVariants&&tA(t),n.visibilityHooks&&nA(t),n.eventListeners&&Q2(t)}function sd(t={}){const n=Oe({...t}),s=H({});return ye(n,()=>{const l={};for(const[o,r]of Object.entries(n)){const a=ya(o),i=nd(r,a);l[o]=i}s.value=l},{immediate:!0,deep:!0}),{state:n,style:s}}function ha(t,n){ye(()=>Et(t),s=>{!s||n(s)},{immediate:!0})}const lA={x:"translateX",y:"translateY",z:"translateZ"};function ld(t={},n=!0){const s=Oe({...t}),l=H("");return ye(s,o=>{let r="",a=!1;if(n&&(o.x||o.y||o.z)){const i=[o.x||0,o.y||0,o.z||0].map(ce.transform).join(",");r+=`translate3d(${i}) `,a=!0}for(const[i,c]of Object.entries(o)){if(n&&(i==="x"||i==="y"||i==="z"))continue;const u=ya(i),d=nd(c,u);r+=`${lA[i]||i}(${d}) `}n&&!a&&(r+="translateZ(0px) "),l.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:l}}const oA=["","X","Y","Z"],rA=["perspective","translate","scale","rotate","skew"],od=["transformPerspective","x","y","z"];rA.forEach(t=>{oA.forEach(n=>{const s=t+n;od.push(s)})});const aA=new Set(od);function ga(t){return aA.has(t)}const iA=new Set(["originX","originY","originZ"]);function rd(t){return iA.has(t)}function cA(t){const n={},s={};return Object.entries(t).forEach(([l,o])=>{ga(l)||rd(l)?n[l]=o:s[l]=o}),{transform:n,style:s}}function ad(t){const{transform:n,style:s}=cA(t),{transform:l}=ld(n),{style:o}=sd(s);return l.value&&(o.value.transform=l.value),o.value}function pA(t,n){let s,l;const{state:o,style:r}=sd();return ha(t,a=>{l=a;for(const i of Object.keys(td))a.style[i]===null||a.style[i]===""||ga(i)||rd(i)||(o[i]=a.style[i]);s&&Object.entries(s).forEach(([i,c])=>a.style[i]=c),n&&n(o)}),ye(r,a=>{if(!l){s=a;return}for(const i in a)l.style[i]=a[i]},{immediate:!0}),{style:o}}function uA(t){const n=t.trim().split(/\) |\)/);if(n.length===1)return{};const s=l=>l.endsWith("px")||l.endsWith("deg")?parseFloat(l):isNaN(Number(l))?Number(l):l;return n.reduce((l,o)=>{if(!o)return l;const[r,a]=o.split("("),c=a.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),u=c.length===1?c[0]:c;return{...l,[r]:u}},{})}function dA(t,n){Object.entries(uA(n)).forEach(([s,l])=>{const o=["x","y","z"];if(s==="translate3d"){if(l===0){o.forEach(r=>t[r]=0);return}l.forEach((r,a)=>t[o[a]]=r);return}if(l=parseFloat(l),s==="translateX"){t.x=l;return}if(s==="translateY"){t.y=l;return}if(s==="translateZ"){t.z=l;return}t[s]=l})}function fA(t,n){let s,l;const{state:o,transform:r}=ld();return ha(t,a=>{l=a,a.style.transform&&dA(o,a.style.transform),s&&(a.style.transform=s),n&&n(o)}),ye(r,a=>{if(!l){s=a;return}l.style.transform=a},{immediate:!0}),{transform:o}}function yA(t,n){const s=Oe({}),l=a=>Object.entries(a).forEach(([i,c])=>s[i]=c),{style:o}=pA(t,l),{transform:r}=fA(t,l);return ye(s,a=>{Object.entries(a).forEach(([i,c])=>{const u=ga(i)?r:o;u[i]&&u[i]===c||(u[i]=c)})},{immediate:!0,deep:!0}),ha(t,()=>n&&l(n)),{motionProperties:s,style:o,transform:r}}function mA(t={}){const n=x(t),s=H();return{state:C(()=>{if(!!s.value)return n[s.value]}),variant:s}}function id(t,n={},s){const{motionProperties:l}=yA(t),{variant:o,state:r}=mA(n),a=Y2(l,n),i={target:t,variant:o,variants:n,state:r,motionProperties:l,...a};return sA(i,s),i}const hA=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],gA=(t,n)=>{const s=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};s&&(s.variants&&Wo(s.variants)&&(n.value={...n.value,...s.variants}),hA.forEach(l=>{if(l==="delay"){if(s&&s[l]&&Ry(s[l])){const o=s[l];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:o,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:o,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:o,...n.value.visibleOnce.transition}))}return}l==="visible-once"&&(l="visibleOnce"),s&&s[l]&&Wo(s[l])&&(n.value[l]=s[l])}))},To=t=>({created:(s,l,o)=>{const r=l.value&&typeof l.value=="string"?l.value:o.key;r&&So[r]&&So[r].stop();const a=H(t||{});typeof l.value=="object"&&(a.value=l.value),gA(o,a);const i=id(s,a);s.motionInstance=i,r&&(So[r]=i)},getSSRProps(s,l){let{initial:o}=s.value||l&&(l==null?void 0:l.props)||{};o=x(o);const r=vx((t==null?void 0:t.initial)||{},o||{});return!r||Object.keys(r).length===0?void 0:{style:ad(r)}}}),vA={initial:{opacity:0},enter:{opacity:1}},_A={initial:{opacity:0},visible:{opacity:1}},bA={initial:{opacity:0},visibleOnce:{opacity:1}},kA={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},wA={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},xA={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},AA={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},BA={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},EA={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},DA={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},CA={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},SA={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},FA={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},jA={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},TA={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},$A={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},OA={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},zA={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},PA={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},LA={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},MA={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},NA={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},IA={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},RA={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},VA={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},HA={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},qA={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},UA={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},GA={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},WA={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},br={__proto__:null,fade:vA,fadeVisible:_A,fadeVisibleOnce:bA,pop:kA,popVisible:wA,popVisibleOnce:xA,rollBottom:$A,rollLeft:AA,rollRight:DA,rollTop:FA,rollVisibleBottom:OA,rollVisibleLeft:BA,rollVisibleRight:CA,rollVisibleTop:jA,rollVisibleOnceBottom:zA,rollVisibleOnceLeft:EA,rollVisibleOnceRight:SA,rollVisibleOnceTop:TA,slideBottom:UA,slideLeft:PA,slideRight:NA,slideTop:VA,slideVisibleBottom:GA,slideVisibleLeft:LA,slideVisibleRight:IA,slideVisibleTop:HA,slideVisibleOnceBottom:WA,slideVisibleOnceLeft:MA,slideVisibleOnceRight:RA,slideVisibleOnceTop:qA},KA=Ae({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(t){var i;const n=uy(),s=Oe({});if(!t.is&&!n.default)return()=>yt("div",{});const l=C(()=>{let c;return t.preset&&(c=br[t.preset]),c}),o=C(()=>({initial:t.initial,enter:t.enter,leave:t.leave,visible:t.visible,visibleOnce:t.visibleOnce,hovered:t.hovered,tapped:t.tapped,focused:t.focused})),r=C(()=>{const c={...o.value,...l.value||{},...t.variants||{}};return t.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(t.delay)),c}),a=C(()=>{if(!t.is)return;let c=t.is;return typeof a.value=="string"&&!vd(c)&&(c=El(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const c=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var f,y,h;(f=u.variants)!=null&&f.enter&&u.apply("enter"),(y=u.variants)!=null&&y.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};Rr(()=>Object.entries(s).forEach(([u,d])=>c(d)))}return{slots:n,component:a,motionConfig:r,instances:s}},render({slots:t,motionConfig:n,instances:s,component:l}){var i;const o=ad(n.initial||{}),r=(c,u)=>(c.props||(c.props={}),c.props.style=o,c.props.onVnodeMounted=({el:d})=>{const f=id(d,n);s[u]=f},c);if(l){const c=yt(l,void 0,t);return r(c,0),c}return(((i=t.default)==null?void 0:i.call(t))||[]).map((c,u)=>r(c,u))}});function YA(t){const n="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",l=new RegExp(n.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,o=>`-${o}`).toLowerCase().replace(/\s+/g,"-").replace(l,o=>s.charAt(n.indexOf(o))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const XA={install(t,n){if(t.directive("motion",To()),t.component("Motion",KA),!n||n&&!n.excludePresets)for(const s in br){const l=br[s];t.directive(`motion-${YA(s)}`,To(l))}if(n&&n.directives)for(const s in n.directives){const l=n.directives[s];l.initial,t.directive(`motion-${s}`,To(l))}}};var hc;const Ps=typeof window<"u",ZA=Object.prototype.toString,JA=t=>ZA.call(t)==="[object Object]";Ps&&((hc=window==null?void 0:window.navigator)==null?void 0:hc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function QA(t){return Lc()?(Mc(t),!0):!1}function e9(t){var n;const s=x(t);return(n=s==null?void 0:s.$el)!=null?n:s}const t9=Ps?window:void 0,kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},wr="__vueuse_ssr_handlers__";kr[wr]=kr[wr]||{};kr[wr];function n9(t,n={}){const{immediate:s=!0,window:l=t9}=n,o=H(!1);let r=null;function a(){!o.value||!l||(t(),r=l.requestAnimationFrame(a))}function i(){!o.value&&l&&(o.value=!0,a())}function c(){o.value=!1,r!=null&&l&&(l.cancelAnimationFrame(r),r=null)}return s&&i(),QA(c),{isActive:o,pause:c,resume:i}}var gc;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(gc||(gc={}));const va="vue-starport-injection",cd="vue-starport-options",s9={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},pd={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var l9=Object.defineProperty,Ll=Object.getOwnPropertySymbols,ud=Object.prototype.hasOwnProperty,dd=Object.prototype.propertyIsEnumerable,vc=(t,n,s)=>n in t?l9(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,o9=(t,n)=>{for(var s in n||(n={}))ud.call(n,s)&&vc(t,s,n[s]);if(Ll)for(var s of Ll(n))dd.call(n,s)&&vc(t,s,n[s]);return t},_c=(t,n)=>{var s={};for(var l in t)ud.call(t,l)&&n.indexOf(l)<0&&(s[l]=t[l]);if(t!=null&&Ll)for(var l of Ll(t))n.indexOf(l)<0&&dd.call(t,l)&&(s[l]=t[l]);return s};const r9=Ae({name:"StarportProxy",props:o9({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},pd),setup(t,n){const s=M(va),l=C(()=>s.getInstance(t.port,t.component)),o=H(),r=l.value.generateId(),a=H(!1);return l.value.isVisible||(l.value.land(),a.value=!0),is(async()=>{l.value.el||(l.value.el=o.value,await Qe(),a.value=!0,l.value.rect.update())}),Yl(async()=>{l.value.rect.update(),l.value.liftOff(),l.value.el=void 0,a.value=!1,!l.value.options.keepAlive&&(await Qe(),await Qe(),!l.value.el&&s.dispose(l.value.port))}),ye(()=>t,async()=>{l.value.props&&await Qe();const i=t,{props:c}=i,u=_c(i,["props"]);l.value.props=c||{},l.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=t,{initialProps:c,mountedProps:u}=i,d=_c(i,["initialProps","mountedProps"]),f=te(d,(a.value?u:c)||{});return yt("div",te(f,{id:r,ref:o,"data-starport-proxy":l.value.componentId,"data-starport-landed":l.value.isLanded?"true":void 0,"data-starport-floating":l.value.isLanded?void 0:"true"}),n.slots.default?yt(n.slots.default):void 0)}}});var a9=Object.defineProperty,i9=Object.defineProperties,c9=Object.getOwnPropertyDescriptors,bc=Object.getOwnPropertySymbols,p9=Object.prototype.hasOwnProperty,u9=Object.prototype.propertyIsEnumerable,kc=(t,n,s)=>n in t?a9(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,d9=(t,n)=>{for(var s in n||(n={}))p9.call(n,s)&&kc(t,s,n[s]);if(bc)for(var s of bc(n))u9.call(n,s)&&kc(t,s,n[s]);return t},f9=(t,n)=>i9(t,c9(n));const y9=Ae({name:"Starport",inheritAttrs:!0,props:pd,setup(t,n){const s=H(!1);return is(()=>{s.value=!0}),()=>{var a,i;const l=(i=(a=n.slots).default)==null?void 0:i.call(a);if(!l)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(l.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${l.length}`);const o=l[0];let r=o.type;return(!JA(r)||es(r))&&(r={render(){return l}}),yt(r9,f9(d9({},t),{key:t.port,component:ql(r),props:o.props}))}}});function m9(t){const n=Oe({height:0,width:0,left:0,top:0,update:l,listen:r,pause:a,margin:"0px",padding:"0px"}),s=Ps?document.documentElement||document.body:void 0;function l(){if(!Ps)return;const i=e9(t);if(!i)return;const{height:c,width:u,left:d,top:f}=i.getBoundingClientRect(),y=window.getComputedStyle(i),h=y.margin,m=y.padding;Object.assign(n,{height:c,width:u,left:d,top:s.scrollTop+f,margin:h,padding:m})}const o=n9(l,{immediate:!1});function r(){!Ps||(l(),o.resume())}function a(){o.pause()}return n}let h9=(t,n=21)=>(s=n)=>{let l="",o=s;for(;o--;)l+=t[Math.random()*t.length|0];return l};const wc=h9("abcdefghijklmnopqrstuvwxyz",5);function xc(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function g9(t){var n;return t.name||((n=t.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var v9=Object.defineProperty,Ac=Object.getOwnPropertySymbols,_9=Object.prototype.hasOwnProperty,b9=Object.prototype.propertyIsEnumerable,Bc=(t,n,s)=>n in t?v9(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,$o=(t,n)=>{for(var s in n||(n={}))_9.call(n,s)&&Bc(t,s,n[s]);if(Ac)for(var s of Ac(n))b9.call(n,s)&&Bc(t,s,n[s]);return t};function k9(t,n,s={}){const l=g9(n),o=xc(l)||wc(),r=H(),a=H(null),i=H(!1),c=H(!1),u=Cd(!0),d=H({}),f=C(()=>$o($o($o({},s9),s),d.value)),y=H(0);let h;u.run(()=>{h=m9(r),ye(r,async w=>{w&&(c.value=!0),await Qe(),r.value||(c.value=!1)})});const m=xc(t);function _(){return`starport-${o}-${m}-${wc()}`}const b=_();return Oe({el:r,id:b,port:t,props:a,rect:h,scope:u,isLanded:i,isVisible:c,options:f,liftOffTime:y,component:n,componentName:l,componentId:o,generateId:_,setLocalOptions(w={}){d.value=JSON.parse(JSON.stringify(w))},elRef(){return r},liftOff(){!i.value||(i.value=!1,y.value=Date.now(),h.listen())},land(){i.value||(i.value=!0,h.pause())}})}function w9(t){const n=Oe(new Map);function s(o,r){let a=n.get(o);return a||(a=k9(o,r,t),n.set(o,a)),a.component=r,a}function l(o){var r;(r=n.get(o))==null||r.scope.stop(),n.delete(o)}return{portMap:n,dispose:l,getInstance:s}}var x9=Object.defineProperty,A9=Object.defineProperties,B9=Object.getOwnPropertyDescriptors,Ec=Object.getOwnPropertySymbols,E9=Object.prototype.hasOwnProperty,D9=Object.prototype.propertyIsEnumerable,Dc=(t,n,s)=>n in t?x9(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,C9=(t,n)=>{for(var s in n||(n={}))E9.call(n,s)&&Dc(t,s,n[s]);if(Ec)for(var s of Ec(n))D9.call(n,s)&&Dc(t,s,n[s]);return t},S9=(t,n)=>A9(t,B9(n));const F9=Ae({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(t){const n=M(va);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=C(()=>n.getInstance(t.port,t.component)),l=C(()=>{var a;return((a=s.value.el)==null?void 0:a.id)||s.value.id}),o=C(()=>{const a=Date.now()-s.value.liftOffTime,i=Math.max(0,s.value.options.duration-a),c=s.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?S9(C9({},u),{zIndex:-1,display:"none"}):(s.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:s.value.options.easing}),u)}),r={};return()=>{const a=!!(s.value.isLanded&&s.value.el);return yt("div",{style:o.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},yt(ty,{to:a?`#${l.value}`:"body",disabled:!a},yt(s.value.component,te(r,s.value.props))))}}}),j9=Ae({name:"StarportCarrier",setup(t,{slots:n}){const s=w9(M(cd,{}));return $n().appContext.app.provide(va,s),()=>{var o;return[(o=n.default)==null?void 0:o.call(n),Array.from(s.portMap.entries()).map(([r,{component:a}])=>yt(F9,{key:r,port:r,component:a}))]}}});function T9(t={}){return{install(n){n.provide(cd,t),n.component("Starport",y9),n.component("StarportCarrier",j9)}}}function $9(t){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),t.app.use(XA),t.app.use(T9({keepAlive:!0}))}function ct(t,n,s){var l,o;return(o=((l=t.instance)==null?void 0:l.$).provides[n])!=null?o:s}function O9(){return{install(t){t.directive("click",{name:"v-click",mounted(n,s){var d,f,y,h;if(Ts.value||((d=ct(s,Cs))==null?void 0:d.value))return;const l=ct(s,bn),o=ct(s,Ds),r=ct(s,Xo),a=s.modifiers.hide!==!1&&s.modifiers.hide!=null,i=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((f=l==null?void 0:l.value)==null?void 0:f.length)||0,u=i?Tm:mo;if(l&&!((y=l==null?void 0:l.value)!=null&&y.includes(n))&&l.value.push(n),s.value==null&&(s.value=l==null?void 0:l.value.length),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[n]);else if(!((h=r==null?void 0:r.value.get(s.value))!=null&&h.includes(n))){const m=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[n].concat(m))}n==null||n.classList.toggle(gn,!0),o&&ye(o,()=>{var w;const m=(w=o==null?void 0:o.value)!=null?w:0,_=s.value!=null?m>=s.value:m>c;n.classList.contains(ho)||n.classList.toggle(u,!_),a!==!1&&a!==void 0&&n.classList.toggle(u,_),n.classList.toggle(ys,!1);const b=r==null?void 0:r.value.get(m);b==null||b.forEach((A,k)=>{A.classList.toggle(ul,!1),k===b.length-1?A.classList.toggle(ys,!0):A.classList.toggle(ul,!0)}),n.classList.contains(ys)||n.classList.toggle(ul,_)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(gn,!1);const l=ct(s,bn);l!=null&&l.value&&Zo(l.value,n)}}),t.directive("after",{name:"v-after",mounted(n,s){var i,c;if(Ts.value||((i=ct(s,Cs))==null?void 0:i.value))return;const l=ct(s,bn),o=ct(s,Ds),r=ct(s,Xo),a=l==null?void 0:l.value.length;s.value==null&&(s.value=l==null?void 0:l.value.length),r!=null&&r.value.has(s.value)?(c=r==null?void 0:r.value.get(s.value))==null||c.push(n):r==null||r.value.set(s.value,[n]),n==null||n.classList.toggle(gn,!0),o&&ye(o,()=>{var d,f,y;const u=((d=o.value)!=null?d:0)>=((y=(f=s.value)!=null?f:a)!=null?y:0);n.classList.contains(ho)||n.classList.toggle(mo,!u),n.classList.toggle(ys,!1),n.classList.contains(ys)||n.classList.toggle(ul,u)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(gn,!0)}}),t.directive("click-hide",{name:"v-click-hide",mounted(n,s){var a,i,c;if(Ts.value||((a=ct(s,Cs))==null?void 0:a.value))return;const l=ct(s,bn),o=ct(s,Ds),r=((i=l==null?void 0:l.value)==null?void 0:i.length)||0;l&&!((c=l==null?void 0:l.value)!=null&&c.includes(n))&&l.value.push(n),n==null||n.classList.toggle(gn,!0),o&&ye(o,()=>{var f;const u=(f=o==null?void 0:o.value)!=null?f:0,d=s.value!=null?u>=s.value:u>r;n.classList.toggle(mo,d),n.classList.toggle(ho,d)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(gn,!1);const l=ct(s,bn);l!=null&&l.value&&Zo(l.value,n)}})}}}function z9(t,n){const s=du(t),l=fu(n,s.currentRoute,s.currentPage);return{nav:{...s,...l,downloadPDF:pr,next:an,nextSlide:Ws,openInEditor:yx,prev:cn,prevSlide:Ks},configs:we,themeConfigs:C(()=>we.themeConfig)}}function P9(){return{install(t){const n=z9(Xt,St);t.provide(K,Oe(n))}}}const ps=Ly(hx);ps.use(ht);ps.use(Em());ps.use(O9());ps.use(P9());$9({app:ps,router:ht});ps.mount("#app");export{tg as $,P0 as A,fx as B,is as C,Oe as D,M9 as E,De as F,R9 as G,ye as H,$ as I,Ce as J,lt as K,G0 as L,Mr as M,Nr as N,St as O,Ol as P,cx as Q,Ao as R,go as S,qs as T,wo as U,Xv as V,Qr as W,ea as X,Wv as Y,Ve as Z,au as _,K as a,Qs as a0,$t as a1,L9 as a2,Ft as a3,_s as a4,dl as a5,An as a6,Nt as a7,rr as a8,x0 as a9,A0 as aa,B0 as ab,D0 as ac,Zl as ad,Dp as ae,V9 as af,ot as ag,zg as ah,Pp as ai,C0 as aj,Yl as ak,H0 as al,Sm as b,we as c,Ae as d,pf as e,U as f,e as g,x as h,M as i,Ue as j,ku as k,p as l,j as m,Ke as n,B as o,ue as p,Kr as q,Zs as r,Me as s,Sn as t,N9 as u,H as v,I9 as w,C as x,dt as y,W as z};
