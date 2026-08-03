function om(n,e){return function(){return n.apply(e,arguments)}}const{toString:TE}=Object.prototype,{getPrototypeOf:us}=Object,{iterator:po,toStringTag:am}=Symbol,Aa=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),Qi=(n,e)=>{let t=n;const r=[];for(;t!=null&&t!==Object.prototype;){if(r.indexOf(t)!==-1)return!1;if(r.push(t),Aa(t,e))return!0;t=us(t)}return!1},wE=(n,e)=>n!=null&&Qi(n,e)?n[e]:void 0,hl=(n=>e=>{const t=TE.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),bt=n=>(n=n.toLowerCase(),e=>hl(e)===n),Ja=n=>e=>typeof e===n,{isArray:Tr}=Array,ls=Ja("undefined");function Os(n){return n!==null&&!ls(n)&&n.constructor!==null&&!ls(n.constructor)&&at(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const cm=bt("ArrayBuffer");function AE(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&cm(n.buffer),e}const vE=Ja("string"),at=Ja("function"),um=Ja("number"),xs=n=>n!==null&&typeof n=="object",RE=n=>n===!0||n===!1,oa=n=>{if(!xs(n))return!1;const e=us(n);return(e===null||e===Object.prototype||us(e)===null)&&!Qi(n,am)&&!Qi(n,po)},bE=n=>{if(!xs(n)||Os(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},SE=bt("Date"),PE=bt("File"),CE=n=>!!(n&&typeof n.uri<"u"),DE=n=>n&&typeof n.getParts<"u",NE=bt("Blob"),kE=bt("FileList"),VE=n=>xs(n)&&at(n.pipe);function OE(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const qd=OE(),jd=typeof qd.FormData<"u"?qd.FormData:void 0,xE=n=>{if(!n)return!1;if(jd&&n instanceof jd)return!0;const e=us(n);if(!e||e===Object.prototype||!at(n.append))return!1;const t=hl(n);return t==="formdata"||t==="object"&&at(n.toString)&&n.toString()==="[object FormData]"},LE=bt("URLSearchParams"),[ME,FE,UE,BE]=["ReadableStream","Request","Response","Headers"].map(bt),qE=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function mo(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let r,s;if(typeof n!="object"&&(n=[n]),Tr(n))for(r=0,s=n.length;r<s;r++)e.call(null,n[r],r,n);else{if(Os(n))return;const i=t?Object.getOwnPropertyNames(n):Object.keys(n),o=i.length;let c;for(r=0;r<o;r++)c=i[r],e.call(null,n[c],c,n)}}function lm(n,e){if(Os(n))return null;e=e.toLowerCase();const t=Object.keys(n);let r=t.length,s;for(;r-- >0;)if(s=t[r],e===s.toLowerCase())return s;return null}const fr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,hm=n=>!ls(n)&&n!==fr;function vu(...n){const{caseless:e,skipUndefined:t}=hm(this)&&this||{},r={},s=(i,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const c=e&&typeof o=="string"&&lm(r,o)||o,u=Aa(r,c)?r[c]:void 0;oa(u)&&oa(i)?r[c]=vu(u,i):oa(i)?r[c]=vu({},i):Tr(i)?r[c]=i.slice():(!t||!ls(i))&&(r[c]=i)};for(let i=0,o=n.length;i<o;i++){const c=n[i];if(!c||Os(c)||(mo(c,s),typeof c!="object"||Tr(c)))continue;const u=Object.getOwnPropertySymbols(c);for(let l=0;l<u.length;l++){const d=u[l];ZE.call(c,d)&&s(c[d],d)}}return r}const jE=(n,e,t,{allOwnKeys:r}={})=>(mo(e,(s,i)=>{t&&at(s)?Object.defineProperty(n,i,{__proto__:null,value:om(s,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(n,i,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),n),zE=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),$E=(n,e,t,r)=>{n.prototype=Object.create(e.prototype,r),Object.defineProperty(n.prototype,"constructor",{__proto__:null,value:n,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(n,"super",{__proto__:null,value:e.prototype}),t&&Object.assign(n.prototype,t)},GE=(n,e,t,r)=>{let s,i,o;const c={};if(e=e||{},n==null)return e;do{for(s=Object.getOwnPropertyNames(n),i=s.length;i-- >0;)o=s[i],(!r||r(o,n,e))&&!c[o]&&(e[o]=n[o],c[o]=!0);n=t!==!1&&us(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},HE=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const r=n.indexOf(e,t);return r!==-1&&r===t},KE=n=>{if(!n)return null;if(Tr(n))return n;let e=n.length;if(!um(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},WE=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&us(Uint8Array)),QE=(n,e)=>{const r=(n&&n[po]).call(n);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(n,i[0],i[1])}},JE=(n,e)=>{let t;const r=[];for(;(t=n.exec(e))!==null;)r.push(t);return r},YE=bt("HTMLFormElement"),XE=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,s){return r.toUpperCase()+s}),{propertyIsEnumerable:ZE}=Object.prototype,eT=bt("RegExp"),dm=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),r={};mo(t,(s,i)=>{let o;(o=e(s,i,n))!==!1&&(r[i]=o||s)}),Object.defineProperties(n,r)},tT=n=>{dm(n,(e,t)=>{if(at(n)&&["arguments","caller","callee"].includes(t))return!1;const r=n[t];if(at(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},nT=(n,e)=>{const t={},r=s=>{s.forEach(i=>{t[i]=!0})};return Tr(n)?r(n):r(String(n).split(e)),t},rT=()=>{},sT=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function iT(n){return!!(n&&at(n.append)&&n[am]==="FormData"&&n[po])}const oT=n=>{const e=new WeakSet,t=r=>{if(xs(r)){if(e.has(r))return;if(Os(r))return r;if(!("toJSON"in r)){e.add(r);const s=Tr(r)?[]:{};return mo(r,(i,o)=>{const c=t(i);!ls(c)&&(s[o]=c)}),e.delete(r),s}}return r};return t(n)},aT=bt("AsyncFunction"),cT=n=>n&&(xs(n)||at(n))&&at(n.then)&&at(n.catch),fm=((n,e)=>n?setImmediate:e?((t,r)=>(fr.addEventListener("message",({source:s,data:i})=>{s===fr&&i===t&&r.length&&r.shift()()},!1),s=>{r.push(s),fr.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",at(fr.postMessage)),uT=typeof queueMicrotask<"u"?queueMicrotask.bind(fr):typeof process<"u"&&process.nextTick||fm,pm=n=>n!=null&&at(n[po]),lT=n=>n!=null&&Qi(n,po)&&pm(n),A={isArray:Tr,isArrayBuffer:cm,isBuffer:Os,isFormData:xE,isArrayBufferView:AE,isString:vE,isNumber:um,isBoolean:RE,isObject:xs,isPlainObject:oa,isEmptyObject:bE,isReadableStream:ME,isRequest:FE,isResponse:UE,isHeaders:BE,isUndefined:ls,isDate:SE,isFile:PE,isReactNativeBlob:CE,isReactNative:DE,isBlob:NE,isRegExp:eT,isFunction:at,isStream:VE,isURLSearchParams:LE,isTypedArray:WE,isFileList:kE,forEach:mo,merge:vu,extend:jE,trim:qE,stripBOM:zE,inherits:$E,toFlatObject:GE,kindOf:hl,kindOfTest:bt,endsWith:HE,toArray:KE,forEachEntry:QE,matchAll:JE,isHTMLForm:YE,hasOwnProperty:Aa,hasOwnProp:Aa,hasOwnInPrototypeChain:Qi,getSafeProp:wE,reduceDescriptors:dm,freezeMethods:tT,toObjectSet:nT,toCamelCase:XE,noop:rT,toFiniteNumber:sT,findKey:lm,global:fr,isContextDefined:hm,isSpecCompliantForm:iT,toJSONObject:oT,isAsyncFn:aT,isThenable:cT,setImmediate:fm,asap:uT,isIterable:pm,isSafeIterable:lT},hT=A.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),dT=n=>{const e={};let t,r,s;return n&&n.split(`
`).forEach(function(o){s=o.indexOf(":"),t=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!t||e[t]&&hT[t])&&(t==="set-cookie"?e[t]?e[t].push(r):e[t]=[r]:e[t]=e[t]?e[t]+", "+r:r)}),e};function fT(n){let e=0,t=n.length;for(;e<t;){const r=n.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;t>e;){const r=n.charCodeAt(t-1);if(r!==9&&r!==32)break;t-=1}return e===0&&t===n.length?n:n.slice(e,t)}const pT=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),mT=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function dl(n,e){return A.isArray(n)?n.map(t=>dl(t,e)):fT(String(n).replace(e,""))}const gT=n=>dl(n,pT),_T=n=>dl(n,mT);function mm(n){const e=Object.create(null);return A.forEach(n.toJSON(),(t,r)=>{e[r]=_T(t)}),e}const zd=Symbol("internals");function Ei(n){return n&&String(n).trim().toLowerCase()}function aa(n){return n===!1||n==null?n:A.isArray(n)?n.map(aa):gT(String(n))}function yT(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(n);)e[r[1]]=r[2];return e}const IT=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Zc(n,e,t,r,s){if(A.isFunction(r))return r.call(this,e,t);if(s&&(e=t),!!A.isString(e)){if(A.isString(r))return e.indexOf(r)!==-1;if(A.isRegExp(r))return r.test(e)}}function ET(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function TT(n,e){const t=A.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(n,r+t,{__proto__:null,value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}let Xe=class{constructor(e){e&&this.set(e)}set(e,t,r){const s=this;function i(c,u,l){const d=Ei(u);if(!d)return;const p=A.findKey(s,d);(!p||s[p]===void 0||l===!0||l===void 0&&s[p]!==!1)&&(s[p||u]=aa(c))}const o=(c,u)=>A.forEach(c,(l,d)=>i(l,d,u));if(A.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(A.isString(e)&&(e=e.trim())&&!IT(e))o(dT(e),t);else if(A.isObject(e)&&A.isSafeIterable(e)){let c=Object.create(null),u,l;for(const d of e){if(!A.isArray(d))throw new TypeError("Object iterator must return a key-value pair");l=d[0],A.hasOwnProp(c,l)?(u=c[l],c[l]=A.isArray(u)?[...u,d[1]]:[u,d[1]]):c[l]=d[1]}o(c,t)}else e!=null&&i(t,e,r);return this}get(e,t){if(e=Ei(e),e){const r=A.findKey(this,e);if(r){const s=this[r];if(!t)return s;if(t===!0)return yT(s);if(A.isFunction(t))return t.call(this,s,r);if(A.isRegExp(t))return t.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Ei(e),e){const r=A.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||Zc(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let s=!1;function i(o){if(o=Ei(o),o){const c=A.findKey(r,o);c&&(!t||Zc(r,r[c],c,t))&&(delete r[c],s=!0)}}return A.isArray(e)?e.forEach(i):i(e),s}clear(e){const t=Object.keys(this);let r=t.length,s=!1;for(;r--;){const i=t[r];(!e||Zc(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const t=this,r={};return A.forEach(this,(s,i)=>{const o=A.findKey(r,i);if(o){t[o]=aa(s),delete t[i];return}const c=e?ET(i):String(i).trim();c!==i&&delete t[i],t[c]=aa(s),r[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return A.forEach(this,(r,s)=>{r!=null&&r!==!1&&(t[s]=e&&A.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[zd]=this[zd]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=Ei(o);r[c]||(TT(s,o),r[c]=!0)}return A.isArray(e)?e.forEach(i):i(e),this}};Xe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);A.reduceDescriptors(Xe.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(r){this[t]=r}}});A.freezeMethods(Xe);const wT="[REDACTED ****]";function AT(n){if(A.hasOwnProp(n,"toJSON"))return!0;let e=Object.getPrototypeOf(n);for(;e&&e!==Object.prototype;){if(A.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function vT(n,e){const t=new Set(e.map(i=>String(i).toLowerCase())),r=[],s=i=>{if(i===null||typeof i!="object"||A.isBuffer(i))return i;if(r.indexOf(i)!==-1)return;i instanceof Xe&&(i=i.toJSON()),r.push(i);let o;if(A.isArray(i))o=[],i.forEach((c,u)=>{const l=s(c);A.isUndefined(l)||(o[u]=l)});else{if(!A.isPlainObject(i)&&AT(i))return r.pop(),i;o=Object.create(null);for(const[c,u]of Object.entries(i)){const l=t.has(c.toLowerCase())?wT:s(u);A.isUndefined(l)||(o[c]=l)}}return r.pop(),o};return s(n)}let j=class gm extends Error{static from(e,t,r,s,i,o){const c=new gm(e.message,t||e.code,r,s,i);return Object.defineProperty(c,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),c.name=e.name,e.status!=null&&c.status==null&&(c.status=e.status),o&&Object.assign(c,o),c}constructor(e,t,r,s,i){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),r&&(this.config=r),s&&(this.request=s),i&&(this.response=i,this.status=i.status)}toJSON(){const e=this.config,t=e&&A.hasOwnProp(e,"redact")?e.redact:void 0,r=A.isArray(t)&&t.length>0?vT(e,t):A.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};j.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";j.ERR_BAD_OPTION="ERR_BAD_OPTION";j.ECONNABORTED="ECONNABORTED";j.ETIMEDOUT="ETIMEDOUT";j.ECONNREFUSED="ECONNREFUSED";j.ERR_NETWORK="ERR_NETWORK";j.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";j.ERR_DEPRECATED="ERR_DEPRECATED";j.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";j.ERR_BAD_REQUEST="ERR_BAD_REQUEST";j.ERR_CANCELED="ERR_CANCELED";j.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";j.ERR_INVALID_URL="ERR_INVALID_URL";j.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const RT=null,_m=100;function Ru(n){return A.isPlainObject(n)||A.isArray(n)}function ym(n){return A.endsWith(n,"[]")?n.slice(0,-2):n}function eu(n,e,t){return n?n.concat(e).map(function(s,i){return s=ym(s),!t&&i?"["+s+"]":s}).join(t?".":""):e}function bT(n){return A.isArray(n)&&!n.some(Ru)}const ST=A.toFlatObject(A,{},null,function(e){return/^is[A-Z]/.test(e)});function Ya(n,e,t){if(!A.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=A.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(L,M){return!A.isUndefined(M[L])});const r=t.metaTokens,s=t.visitor||N,i=t.dots,o=t.indexes,c=t.Blob||typeof Blob<"u"&&Blob,u=t.maxDepth===void 0?_m:t.maxDepth,l=c&&A.isSpecCompliantForm(e),d=[];if(!A.isFunction(s))throw new TypeError("visitor must be a function");function p(D){if(D===null)return"";if(A.isDate(D))return D.toISOString();if(A.isBoolean(D))return D.toString();if(!l&&A.isBlob(D))throw new j("Blob is not supported. Use a Buffer instead.");if(A.isArrayBuffer(D)||A.isTypedArray(D)){if(l&&typeof c=="function")return new c([D]);if(typeof Buffer<"u")return Buffer.from(D);throw new j("Blob is not supported. Use a Buffer instead.",j.ERR_NOT_SUPPORT)}return D}function m(D){if(D>u)throw new j("Object is too deeply nested ("+D+" levels). Max depth: "+u,j.ERR_FORM_DATA_DEPTH_EXCEEDED)}function y(D,L){if(u===1/0)return JSON.stringify(D);const M=[];return JSON.stringify(D,function(Q,W){if(!A.isObject(W))return W;for(;M.length&&M[M.length-1]!==this;)M.pop();return M.push(W),m(L+M.length-1),W})}function N(D,L,M){let G=D;if(A.isReactNative(e)&&A.isReactNativeBlob(D))return e.append(eu(M,L,i),p(D)),!1;if(D&&!M&&typeof D=="object"){if(A.endsWith(L,"{}"))L=r?L:L.slice(0,-2),D=y(D,1);else if(A.isArray(D)&&bT(D)||(A.isFileList(D)||A.endsWith(L,"[]"))&&(G=A.toArray(D)))return L=ym(L),G.forEach(function(W,T){!(A.isUndefined(W)||W===null)&&e.append(o===!0?eu([L],T,i):o===null?L:L+"[]",p(W))}),!1}return Ru(D)?!0:(e.append(eu(M,L,i),p(D)),!1)}const k=Object.assign(ST,{defaultVisitor:N,convertValue:p,isVisitable:Ru});function b(D,L,M=0){if(!A.isUndefined(D)){if(m(M),d.indexOf(D)!==-1)throw new Error("Circular reference detected in "+L.join("."));d.push(D),A.forEach(D,function(Q,W){(!(A.isUndefined(Q)||Q===null)&&s.call(e,Q,A.isString(W)?W.trim():W,L,k))===!0&&b(Q,L?L.concat(W):[W],M+1)}),d.pop()}}if(!A.isObject(n))throw new TypeError("data must be an object");return b(n),e}function $d(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(n).replace(/[!'()~]|%20/g,function(r){return e[r]})}function fl(n,e){this._pairs=[],n&&Ya(n,this,e)}const Im=fl.prototype;Im.append=function(e,t){this._pairs.push([e,t])};Im.toString=function(e){const t=e?r=>e.call(this,r,$d):$d;return this._pairs.map(function(s){return t(s[0])+"="+t(s[1])},"").join("&")};function PT(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Em(n,e,t){if(!e)return n;n=n||"";const r=A.isFunction(t)?{serialize:t}:t,s=A.getSafeProp(r,"encode")||PT,i=A.getSafeProp(r,"serialize");let o;if(i?o=i(e,r):o=A.isURLSearchParams(e)?e.toString():new fl(e,r).toString(s),o){const c=n.indexOf("#");c!==-1&&(n=n.slice(0,c)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n}class Gd{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){A.forEach(this.handlers,function(r){r!==null&&e(r)})}}const pl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},CT=typeof URLSearchParams<"u"?URLSearchParams:fl,DT=typeof FormData<"u"?FormData:null,NT=typeof Blob<"u"?Blob:null,kT={isBrowser:!0,classes:{URLSearchParams:CT,FormData:DT,Blob:NT},protocols:["http","https","file","blob","url","data"]},ml=typeof window<"u"&&typeof document<"u",bu=typeof navigator=="object"&&navigator||void 0,VT=ml&&(!bu||["ReactNative","NativeScript","NS"].indexOf(bu.product)<0),OT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",xT=ml&&window.location.href||"http://localhost",LT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ml,hasStandardBrowserEnv:VT,hasStandardBrowserWebWorkerEnv:OT,navigator:bu,origin:xT},Symbol.toStringTag,{value:"Module"})),Ke={...LT,...kT};function MT(n,e){return Ya(n,new Ke.classes.URLSearchParams,{visitor:function(t,r,s,i){return Ke.isNode&&A.isBuffer(t)?(this.append(r,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...e})}const Hd=_m;function Tm(n){if(n>Hd)throw new j("FormData field is too deeply nested ("+n+" levels). Max depth: "+Hd,j.ERR_FORM_DATA_DEPTH_EXCEEDED)}function FT(n){const e=[],t=/\w+|\[(\w*)]/g;let r;for(;(r=t.exec(n))!==null;)Tm(e.length),e.push(r[0]==="[]"?"":r[1]||r[0]);return e}function UT(n){const e={},t=Object.keys(n);let r;const s=t.length;let i;for(r=0;r<s;r++)i=t[r],e[i]=n[i];return e}function wm(n){function e(t,r,s,i){Tm(i);let o=t[i++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),u=i>=t.length;return o=!o&&A.isArray(s)?s.length:o,u?(A.hasOwnProp(s,o)?s[o]=A.isArray(s[o])?s[o].concat(r):[s[o],r]:s[o]=r,!c):((!A.hasOwnProp(s,o)||!A.isObject(s[o]))&&(s[o]=[]),e(t,r,s[o],i)&&A.isArray(s[o])&&(s[o]=UT(s[o])),!c)}if(A.isFormData(n)&&A.isFunction(n.entries)){const t={};return A.forEachEntry(n,(r,s)=>{e(FT(r),s,t,0)}),t}return null}const Hr=(n,e)=>n!=null&&A.hasOwnProp(n,e)?n[e]:void 0;function BT(n,e,t){if(A.isString(n))try{return(e||JSON.parse)(n),A.trim(n)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(n)}const go={transitional:pl,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",s=r.indexOf("application/json")>-1,i=A.isObject(e);if(i&&A.isHTMLForm(e)&&(e=new FormData(e)),A.isFormData(e))return s?JSON.stringify(wm(e)):e;if(A.isArrayBuffer(e)||A.isBuffer(e)||A.isStream(e)||A.isFile(e)||A.isBlob(e)||A.isReadableStream(e))return e;if(A.isArrayBufferView(e))return e.buffer;if(A.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(i){const u=Hr(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return MT(e,u).toString();if((c=A.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=Hr(this,"env"),d=l&&l.FormData;return Ya(c?{"files[]":e}:e,d&&new d,u)}}return i||s?(t.setContentType("application/json",!1),BT(e)):e}],transformResponse:[function(e){const t=Hr(this,"transitional")||go.transitional,r=t&&t.forcedJSONParsing,s=Hr(this,"responseType"),i=s==="json";if(A.isResponse(e)||A.isReadableStream(e))return e;if(e&&A.isString(e)&&(r&&!s||i)){const c=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e,Hr(this,"parseReviver"))}catch(u){if(c)throw u.name==="SyntaxError"?j.from(u,j.ERR_BAD_RESPONSE,this,null,Hr(this,"response")):u}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ke.classes.FormData,Blob:Ke.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};A.forEach(["delete","get","head","post","put","patch","query"],n=>{go.headers[n]={}});function tu(n,e){const t=this||go,r=e||t,s=Xe.from(r.headers);let i=r.data;return A.forEach(n,function(c){i=c.call(t,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Am(n){return!!(n&&n.__CANCEL__)}let _o=class extends j{constructor(e,t,r){super(e??"canceled",j.ERR_CANCELED,t,r),this.name="CanceledError",this.__CANCEL__=!0}};function vm(n,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?n(t):e(new j("Request failed with status code "+t.status,t.status>=400&&t.status<500?j.ERR_BAD_REQUEST:j.ERR_BAD_RESPONSE,t.config,t.request,t))}function qT(n){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(n);return e&&e[1]||""}function jT(n,e){n=n||10;const t=new Array(n),r=new Array(n);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(u){const l=Date.now(),d=r[i];o||(o=l),t[s]=u,r[s]=l;let p=i,m=0;for(;p!==s;)m+=t[p++],p=p%n;if(s=(s+1)%n,s===i&&(i=(i+1)%n),l-o<e)return;const y=d&&l-d;return y?Math.round(m*1e3/y):void 0}}function zT(n,e){let t=0,r=1e3/e,s,i;const o=(l,d=Date.now())=>{t=d,s=null,i&&(clearTimeout(i),i=null),n(...l)};return[(...l)=>{const d=Date.now(),p=d-t;p>=r?o(l,d):(s=l,i||(i=setTimeout(()=>{i=null,o(s)},r-p)))},()=>s&&o(s)]}const va=(n,e,t=3)=>{let r=0;const s=jT(50,250);return zT(i=>{if(!i||typeof i.loaded!="number")return;const o=i.loaded,c=i.lengthComputable?i.total:void 0,u=c!=null?Math.min(o,c):o,l=Math.max(0,u-r),d=s(l);r=Math.max(r,u);const p={loaded:u,total:c,progress:c?u/c:void 0,bytes:l,rate:d||void 0,estimated:d&&c?(c-u)/d:void 0,event:i,lengthComputable:c!=null,[e?"download":"upload"]:!0};n(p)},t)},Kd=(n,e)=>{const t=n!=null;return[r=>e[0]({lengthComputable:t,total:n,loaded:r}),e[1]]},Wd=n=>(...e)=>A.asap(()=>n(...e)),$T=Ke.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,Ke.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(Ke.origin),Ke.navigator&&/(msie|trident)/i.test(Ke.navigator.userAgent)):()=>!0,GT=Ke.hasStandardBrowserEnv?{write(n,e,t,r,s,i,o){if(typeof document>"u")return;const c=[`${n}=${encodeURIComponent(e)}`];A.isNumber(t)&&c.push(`expires=${new Date(t).toUTCString()}`),A.isString(r)&&c.push(`path=${r}`),A.isString(s)&&c.push(`domain=${s}`),i===!0&&c.push("secure"),A.isString(o)&&c.push(`SameSite=${o}`),document.cookie=c.join("; ")},read(n){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let t=0;t<e.length;t++){const r=e[t].replace(/^\s+/,""),s=r.indexOf("=");if(s!==-1&&r.slice(0,s)===n)try{return decodeURIComponent(r.slice(s+1))}catch{return r.slice(s+1)}}return null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function HT(n){return typeof n!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function KT(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}const WT=/^https?:(?!\/\/)/i,QT=/[\t\n\r]/g;function JT(n){let e=0;for(;e<n.length&&n.charCodeAt(e)<=32;)e++;return n.slice(e)}function YT(n){return JT(n).replace(QT,"")}function Qd(n,e){if(typeof n=="string"&&WT.test(YT(n)))throw new j('Invalid URL: missing "//" after protocol',j.ERR_INVALID_URL,e)}function Rm(n,e,t,r){Qd(e,r);let s=!HT(e);return n&&(s||t===!1)?(Qd(n,r),KT(n,e)):e}const Jd=n=>n instanceof Xe?{...n}:n;function wr(n,e){n=n||{},e=e||{};const t=Object.create(null);Object.defineProperty(t,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(d,p,m,y){return A.isPlainObject(d)&&A.isPlainObject(p)?A.merge.call({caseless:y},d,p):A.isPlainObject(p)?A.merge({},p):A.isArray(p)?p.slice():p}function s(d,p,m,y){if(A.isUndefined(p)){if(!A.isUndefined(d))return r(void 0,d,m,y)}else return r(d,p,m,y)}function i(d,p){if(!A.isUndefined(p))return r(void 0,p)}function o(d,p){if(A.isUndefined(p)){if(!A.isUndefined(d))return r(void 0,d)}else return r(void 0,p)}function c(d){const p=A.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!A.isUndefined(p))if(A.isPlainObject(p)){if(A.hasOwnProp(p,d))return p[d]}else return;const m=A.hasOwnProp(n,"transitional")?n.transitional:void 0;if(A.isPlainObject(m)&&A.hasOwnProp(m,d))return m[d]}function u(d,p,m){if(A.hasOwnProp(e,m))return r(d,p);if(A.hasOwnProp(n,m))return r(void 0,d)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:u,headers:(d,p,m)=>s(Jd(d),Jd(p),m,!0)};return A.forEach(Object.keys({...n,...e}),function(p){if(p==="__proto__"||p==="constructor"||p==="prototype")return;const m=A.hasOwnProp(l,p)?l[p]:s,y=A.hasOwnProp(n,p)?n[p]:void 0,N=A.hasOwnProp(e,p)?e[p]:void 0,k=m(y,N,p);A.isUndefined(k)&&m!==u||(t[p]=k)}),A.hasOwnProp(e,"validateStatus")&&A.isUndefined(e.validateStatus)&&c("validateStatusUndefinedResolves")===!1&&(A.hasOwnProp(n,"validateStatus")?t.validateStatus=r(void 0,n.validateStatus):delete t.validateStatus),t}const XT=["content-type","content-length"];function ZT(n,e,t){if(t!=="content-only"){n.set(e);return}Object.entries(e||{}).forEach(([r,s])=>{XT.includes(r.toLowerCase())&&n.set(r,s)})}const ew=n=>encodeURIComponent(n).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function bm(n){const e=wr({},n),t=m=>A.hasOwnProp(e,m)?e[m]:void 0,r=t("data");let s=t("withXSRFToken");const i=t("xsrfHeaderName"),o=t("xsrfCookieName");let c=t("headers");const u=t("auth"),l=t("baseURL"),d=t("allowAbsoluteUrls"),p=t("url");if(e.headers=c=Xe.from(c),e.url=Em(Rm(l,p,d,e),t("params"),t("paramsSerializer")),u){const m=A.getSafeProp(u,"username")||"",y=A.getSafeProp(u,"password")||"";try{c.set("Authorization","Basic "+btoa(m+":"+(y?ew(y):"")))}catch(N){throw j.from(N,j.ERR_BAD_OPTION_VALUE,n)}}if(A.isFormData(r)&&(Ke.hasStandardBrowserEnv||Ke.hasStandardBrowserWebWorkerEnv||A.isReactNative(r)?c.setContentType(void 0):A.isFunction(r.getHeaders)&&ZT(c,r.getHeaders(),t("formDataHeaderPolicy"))),Ke.hasStandardBrowserEnv&&(A.isFunction(s)&&(s=s(e)),s===!0||s==null&&$T(e.url))){const y=i&&o&&GT.read(o);y&&c.set(i,y)}return e}const tw=typeof XMLHttpRequest<"u",nw=tw&&function(n){return new Promise(function(t,r){const s=bm(n);let i=s.data;const o=Xe.from(s.headers).normalize();let{responseType:c,onUploadProgress:u,onDownloadProgress:l}=s,d,p,m,y,N;function k(){y&&y(),N&&N(),s.cancelToken&&s.cancelToken.unsubscribe(d),s.signal&&s.signal.removeEventListener("abort",d)}let b=new XMLHttpRequest;b.open(s.method.toUpperCase(),s.url,!0),b.timeout=s.timeout;function D(){if(!b)return;const M=Xe.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),Q={data:!c||c==="text"||c==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:M,config:n,request:b};vm(function(T){t(T),k()},function(T){r(T),k()},Q),b=null}"onloadend"in b?b.onloadend=D:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.startsWith("file:"))||setTimeout(D)},b.onabort=function(){b&&(r(new j("Request aborted",j.ECONNABORTED,n,b)),k(),b=null)},b.onerror=function(G){const Q=G&&G.message?G.message:"Network Error",W=new j(Q,j.ERR_NETWORK,n,b);W.event=G||null,r(W),k(),b=null},b.ontimeout=function(){let G=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const Q=s.transitional||pl;s.timeoutErrorMessage&&(G=s.timeoutErrorMessage),r(new j(G,Q.clarifyTimeoutError?j.ETIMEDOUT:j.ECONNABORTED,n,b)),k(),b=null},i===void 0&&o.setContentType(null),"setRequestHeader"in b&&A.forEach(mm(o),function(G,Q){b.setRequestHeader(Q,G)}),A.isUndefined(s.withCredentials)||(b.withCredentials=!!s.withCredentials),c&&c!=="json"&&(b.responseType=s.responseType),l&&([m,N]=va(l,!0),b.addEventListener("progress",m)),u&&b.upload&&([p,y]=va(u),b.upload.addEventListener("progress",p),b.upload.addEventListener("loadend",y)),(s.cancelToken||s.signal)&&(d=M=>{b&&(r(!M||M.type?new _o(null,n,b):M),b.abort(),k(),b=null)},s.cancelToken&&s.cancelToken.subscribe(d),s.signal&&(s.signal.aborted?d():s.signal.addEventListener("abort",d)));const L=qT(s.url);if(L&&!Ke.protocols.includes(L)){r(new j("Unsupported protocol "+L+":",j.ERR_BAD_REQUEST,n)),k();return}b.send(i||null)})},rw=(n,e)=>{if(n=n?n.filter(Boolean):[],!e&&!n.length)return;const t=new AbortController;let r=!1;const s=function(u){if(!r){r=!0,o();const l=u instanceof Error?u:this.reason;t.abort(l instanceof j?l:new _o(l instanceof Error?l.message:l))}};let i=e&&setTimeout(()=>{i=null,s(new j(`timeout of ${e}ms exceeded`,j.ETIMEDOUT))},e);const o=()=>{n&&(i&&clearTimeout(i),i=null,n.forEach(u=>{u.unsubscribe?u.unsubscribe(s):u.removeEventListener("abort",s)}),n=null)};n.forEach(u=>u.addEventListener("abort",s,{once:!0}));const{signal:c}=t;return c.unsubscribe=()=>A.asap(o),c},sw=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let r=0,s;for(;r<t;)s=r+e,yield n.slice(r,s),r=s},iw=async function*(n,e){for await(const t of ow(n))yield*sw(t,e)},ow=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:r}=await e.read();if(t)break;yield r}}finally{await e.cancel()}},Yd=(n,e,t,r)=>{const s=iw(n,e);let i=0,o,c=u=>{o||(o=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:l,value:d}=await s.next();if(l){c(),u.close();return}let p=d.byteLength;if(t){let m=i+=p;t(m)}u.enqueue(new Uint8Array(d))}catch(l){throw c(l),l}},cancel(u){return c(u),s.return()}},{highWaterMark:2})},Ra=n=>n>=48&&n<=57||n>=65&&n<=70||n>=97&&n<=102,aw=(n,e,t)=>e+2<t&&Ra(n.charCodeAt(e+1))&&Ra(n.charCodeAt(e+2));function cw(n){if(!n||typeof n!="string"||!n.startsWith("data:"))return 0;const e=n.indexOf(",");if(e<0)return 0;const t=n.slice(5,e),r=n.slice(e+1);if(/;base64/i.test(t)){let o=r.length;const c=r.length;for(let y=0;y<c;y++)if(r.charCodeAt(y)===37&&y+2<c){const N=r.charCodeAt(y+1),k=r.charCodeAt(y+2);Ra(N)&&Ra(k)&&(o-=2,y+=2)}let u=0,l=c-1;const d=y=>y>=2&&r.charCodeAt(y-2)===37&&r.charCodeAt(y-1)===51&&(r.charCodeAt(y)===68||r.charCodeAt(y)===100);l>=0&&(r.charCodeAt(l)===61?(u++,l--):d(l)&&(u++,l-=3)),u===1&&l>=0&&(r.charCodeAt(l)===61||d(l))&&u++;const m=Math.floor(o/4)*3-(u||0);return m>0?m:0}let i=0;for(let o=0,c=r.length;o<c;o++){const u=r.charCodeAt(o);if(u===37&&aw(r,o,c))i+=1,o+=2;else if(u<128)i+=1;else if(u<2048)i+=2;else if(u>=55296&&u<=56319&&o+1<c){const l=r.charCodeAt(o+1);l>=56320&&l<=57343?(i+=4,o++):i+=3}else i+=3}return i}const gl="1.18.1",Xd=64*1024,{isFunction:Qo}=A,uw=n=>encodeURIComponent(n).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),Zd=n=>{if(!A.isString(n))return n;try{return decodeURIComponent(n)}catch{return n}},ef=(n,...e)=>{try{return!!n(...e)}catch{return!1}},lw=n=>{const e=n.indexOf("://");let t=n;return e!==-1&&(t=t.slice(e+3)),t.includes("@")||t.includes(":")},hw=n=>{const e=A.global!==void 0&&A.global!==null?A.global:globalThis,{ReadableStream:t,TextEncoder:r}=e;n=A.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},n);const{fetch:s,Request:i,Response:o}=n,c=s?Qo(s):typeof fetch=="function",u=Qo(i),l=Qo(o);if(!c)return!1;const d=c&&Qo(t),p=c&&(typeof r=="function"?(D=>L=>D.encode(L))(new r):async D=>new Uint8Array(await new i(D).arrayBuffer())),m=u&&d&&ef(()=>{let D=!1;const L=new i(Ke.origin,{body:new t,method:"POST",get duplex(){return D=!0,"half"}}),M=L.headers.has("Content-Type");return L.body!=null&&L.body.cancel(),D&&!M}),y=l&&d&&ef(()=>A.isReadableStream(new o("").body)),N={stream:y&&(D=>D.body)};c&&["text","arrayBuffer","blob","formData","stream"].forEach(D=>{!N[D]&&(N[D]=(L,M)=>{let G=L&&L[D];if(G)return G.call(L);throw new j(`Response type '${D}' is not supported`,j.ERR_NOT_SUPPORT,M)})});const k=async D=>{if(D==null)return 0;if(A.isBlob(D))return D.size;if(A.isSpecCompliantForm(D))return(await new i(Ke.origin,{method:"POST",body:D}).arrayBuffer()).byteLength;if(A.isArrayBufferView(D)||A.isArrayBuffer(D))return D.byteLength;if(A.isURLSearchParams(D)&&(D=D+""),A.isString(D))return(await p(D)).byteLength},b=async(D,L)=>{const M=A.toFiniteNumber(D.getContentLength());return M??k(L)};return async D=>{let{url:L,method:M,data:G,signal:Q,cancelToken:W,timeout:T,onDownloadProgress:_,onUploadProgress:E,responseType:v,headers:w,withCredentials:S="same-origin",fetchOptions:I,maxContentLength:fe,maxBodyLength:gt}=bm(D);const Yn=A.isNumber(fe)&&fe>-1,ni=A.isNumber(gt)&&gt>-1,Fr=ie=>A.hasOwnProp(D,ie)?D[ie]:void 0;let Xn=s||fetch;v=v?(v+"").toLowerCase():"text";let St=rw([Q,W&&W.toAbortSignal()],T),Ce=null;const Pt=St&&St.unsubscribe&&(()=>{St.unsubscribe()});let zt,Ct=null;const Ur=()=>new j("Request body larger than maxBodyLength limit",j.ERR_BAD_REQUEST,D,Ce);try{let ie;const We=Fr("auth");if(We){const Y=A.getSafeProp(We,"username")||"",Ge=A.getSafeProp(We,"password")||"";ie={username:Y,password:Ge}}if(lw(L)){const Y=new URL(L,Ke.origin);if(!ie&&(Y.username||Y.password)){const Ge=Zd(Y.username),Et=Zd(Y.password);ie={username:Ge,password:Et}}(Y.username||Y.password)&&(Y.username="",Y.password="",L=Y.href)}if(ie&&(w.delete("authorization"),w.set("Authorization","Basic "+btoa(uw((ie.username||"")+":"+(ie.password||""))))),Yn&&typeof L=="string"&&L.startsWith("data:")&&cw(L)>fe)throw new j("maxContentLength size of "+fe+" exceeded",j.ERR_BAD_RESPONSE,D,Ce);if(ni&&M!=="get"&&M!=="head"){const Y=await k(G);if(typeof Y=="number"&&isFinite(Y)&&(zt=Y,Y>gt))throw Ur()}const fn=ni&&(A.isReadableStream(G)||A.isStream(G)),ri=(Y,Ge,Et)=>Yd(Y,Xd,Ie=>{if(ni&&Ie>gt)throw Ct=Ur();Ge&&Ge(Ie)},Et);if(m&&M!=="get"&&M!=="head"&&(E||fn)){if(zt=zt??await b(w,G),zt!==0||fn){let Y=new i(L,{method:"POST",body:G,duplex:"half"}),Ge;if(A.isFormData(G)&&(Ge=Y.headers.get("content-type"))&&w.setContentType(Ge),Y.body){const[Et,Ie]=E&&Kd(zt,va(Wd(E)))||[];G=ri(Y.body,Et,Ie)}}}else if(fn&&!u&&d&&M!=="get"&&M!=="head")G=ri(G);else if(fn&&u&&!m&&M!=="get"&&M!=="head")throw new j("Stream request bodies are not supported by the current fetch implementation",j.ERR_NOT_SUPPORT,D,Ce);A.isString(S)||(S=S?"include":"omit");const xc=u&&"credentials"in i.prototype;if(A.isFormData(G)){const Y=w.getContentType();Y&&/^multipart\/form-data/i.test(Y)&&!/boundary=/i.test(Y)&&w.delete("content-type")}w.set("User-Agent","axios/"+gl,!1);const Mo={...I,signal:St,method:M.toUpperCase(),headers:mm(w.normalize()),body:G,duplex:"half",credentials:xc?S:void 0};Ce=u&&new i(L,Mo);let _t=await(u?Xn(Ce,I):Xn(L,Mo));const Br=Xe.from(_t.headers);if(Yn){const Y=A.toFiniteNumber(Br.getContentLength());if(Y!=null&&Y>fe)throw new j("maxContentLength size of "+fe+" exceeded",j.ERR_BAD_RESPONSE,D,Ce)}const qr=y&&(v==="stream"||v==="response");if(y&&_t.body&&(_||Yn||qr&&Pt)){const Y={};["status","statusText","headers"].forEach(Zn=>{Y[Zn]=_t[Zn]});const Ge=A.toFiniteNumber(Br.getContentLength()),[Et,Ie]=_&&Kd(Ge,va(Wd(_),!0))||[];let Fe=0;const jr=Zn=>{if(Yn&&(Fe=Zn,Fe>fe))throw new j("maxContentLength size of "+fe+" exceeded",j.ERR_BAD_RESPONSE,D,Ce);Et&&Et(Zn)};_t=new o(Yd(_t.body,Xd,jr,()=>{Ie&&Ie(),Pt&&Pt()}),Y)}v=v||"text";let It=await N[A.findKey(N,v)||"text"](_t,D);if(Yn&&!y&&!qr){let Y;if(It!=null&&(typeof It.byteLength=="number"?Y=It.byteLength:typeof It.size=="number"?Y=It.size:typeof It=="string"&&(Y=typeof r=="function"?new r().encode(It).byteLength:It.length)),typeof Y=="number"&&Y>fe)throw new j("maxContentLength size of "+fe+" exceeded",j.ERR_BAD_RESPONSE,D,Ce)}return!qr&&Pt&&Pt(),await new Promise((Y,Ge)=>{vm(Y,Ge,{data:It,headers:Xe.from(_t.headers),status:_t.status,statusText:_t.statusText,config:D,request:Ce})})}catch(ie){if(Pt&&Pt(),St&&St.aborted&&St.reason instanceof j){const We=St.reason;throw We.config=D,Ce&&(We.request=Ce),ie!==We&&Object.defineProperty(We,"cause",{__proto__:null,value:ie,writable:!0,enumerable:!1,configurable:!0}),We}if(Ct)throw Ce&&!Ct.request&&(Ct.request=Ce),Ct;if(ie instanceof j)throw Ce&&!ie.request&&(ie.request=Ce),ie;if(ie&&ie.name==="TypeError"&&/Load failed|fetch/i.test(ie.message)){const We=new j("Network Error",j.ERR_NETWORK,D,Ce,ie&&ie.response);throw Object.defineProperty(We,"cause",{__proto__:null,value:ie.cause||ie,writable:!0,enumerable:!1,configurable:!0}),We}throw j.from(ie,ie&&ie.code,D,Ce,ie&&ie.response)}}},dw=new Map,Sm=n=>{let e=n&&n.env||{};const{fetch:t,Request:r,Response:s}=e,i=[r,s,t];let o=i.length,c=o,u,l,d=dw;for(;c--;)u=i[c],l=d.get(u),l===void 0&&d.set(u,l=c?new Map:hw(e)),d=l;return l};Sm();const _l={http:RT,xhr:nw,fetch:{get:Sm}};A.forEach(_l,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(n,"adapterName",{__proto__:null,value:e})}});const tf=n=>`- ${n}`,fw=n=>A.isFunction(n)||n===null||n===!1;function pw(n,e){n=A.isArray(n)?n:[n];const{length:t}=n;let r,s;const i={};for(let o=0;o<t;o++){r=n[o];let c;if(s=r,!fw(r)&&(s=_l[(c=String(r)).toLowerCase()],s===void 0))throw new j(`Unknown adapter '${c}'`);if(s&&(A.isFunction(s)||(s=s.get(e))))break;i[c||"#"+o]=s}if(!s){const o=Object.entries(i).map(([u,l])=>`adapter ${u} `+(l===!1?"is not supported by the environment":"is not available in the build"));let c=t?o.length>1?`since :
`+o.map(tf).join(`
`):" "+tf(o[0]):"as no adapter specified";throw new j("There is no suitable adapter to dispatch the request "+c,j.ERR_NOT_SUPPORT)}return s}const Pm={getAdapter:pw,adapters:_l};function nu(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new _o(null,n)}function nf(n){return nu(n),n.headers=Xe.from(n.headers),n.data=tu.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Pm.getAdapter(n.adapter||go.adapter,n)(n).then(function(r){nu(n),n.response=r;try{r.data=tu.call(n,n.transformResponse,r)}finally{delete n.response}return r.headers=Xe.from(r.headers),r},function(r){if(!Am(r)&&(nu(n),r&&r.response)){n.response=r.response;try{r.response.data=tu.call(n,n.transformResponse,r.response)}finally{delete n.response}r.response.headers=Xe.from(r.response.headers)}return Promise.reject(r)})}const Xa={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Xa[n]=function(r){return typeof r===n||"a"+(e<1?"n ":" ")+n}});const rf={};Xa.transitional=function(e,t,r){function s(i,o){return"[Axios v"+gl+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(e===!1)throw new j(s(o," has been removed"+(t?" in "+t:"")),j.ERR_DEPRECATED);return t&&!rf[o]&&(rf[o]=!0,console.warn(s(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,o,c):!0}};Xa.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function mw(n,e,t){if(typeof n!="object"||n===null)throw new j("options must be an object",j.ERR_BAD_OPTION_VALUE);const r=Object.keys(n);let s=r.length;for(;s-- >0;){const i=r[s],o=Object.prototype.hasOwnProperty.call(e,i)?e[i]:void 0;if(o){const c=n[i],u=c===void 0||o(c,i,n);if(u!==!0)throw new j("option "+i+" must be "+u,j.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new j("Unknown option "+i,j.ERR_BAD_OPTION)}}const ca={assertOptions:mw,validators:Xa},Qe=ca.validators;let gr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Gd,response:new Gd}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!r.stack)r.stack=i;else if(i){const o=i.indexOf(`
`),c=o===-1?-1:i.indexOf(`
`,o+1),u=c===-1?"":i.slice(c+1);String(r.stack).endsWith(u)||(r.stack+=`
`+i)}}catch{}}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=wr(this.defaults,t);const{transitional:r,paramsSerializer:s,headers:i}=t;r!==void 0&&ca.assertOptions(r,{silentJSONParsing:Qe.transitional(Qe.boolean),forcedJSONParsing:Qe.transitional(Qe.boolean),clarifyTimeoutError:Qe.transitional(Qe.boolean),legacyInterceptorReqResOrdering:Qe.transitional(Qe.boolean),advertiseZstdAcceptEncoding:Qe.transitional(Qe.boolean),validateStatusUndefinedResolves:Qe.transitional(Qe.boolean)},!1),s!=null&&(A.isFunction(s)?t.paramsSerializer={serialize:s}:ca.assertOptions(s,{encode:Qe.function,serialize:Qe.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),ca.assertOptions(t,{baseUrl:Qe.spelling("baseURL"),withXsrfToken:Qe.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=i&&A.merge(i.common,i[t.method]);i&&A.forEach(["delete","get","head","post","put","patch","query","common"],N=>{delete i[N]}),t.headers=Xe.concat(o,i);const c=[];let u=!0;this.interceptors.request.forEach(function(k){if(typeof k.runWhen=="function"&&k.runWhen(t)===!1)return;u=u&&k.synchronous;const b=t.transitional||pl;b&&b.legacyInterceptorReqResOrdering?c.unshift(k.fulfilled,k.rejected):c.push(k.fulfilled,k.rejected)});const l=[];this.interceptors.response.forEach(function(k){l.push(k.fulfilled,k.rejected)});let d,p=0,m;if(!u){const N=[nf.bind(this),void 0];for(N.unshift(...c),N.push(...l),m=N.length,d=Promise.resolve(t);p<m;)d=d.then(N[p++],N[p++]);return d}m=c.length;let y=t;for(;p<m;){const N=c[p++],k=c[p++];try{y=N(y)}catch(b){k.call(this,b);break}}try{d=nf.call(this,y)}catch(N){return Promise.reject(N)}for(p=0,m=l.length;p<m;)d=d.then(l[p++],l[p++]);return d}getUri(e){e=wr(this.defaults,e);const t=Rm(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Em(t,e.params,e.paramsSerializer)}};A.forEach(["delete","get","head","options"],function(e){gr.prototype[e]=function(t,r){return this.request(wr(r||{},{method:e,url:t,data:r&&A.hasOwnProp(r,"data")?r.data:void 0}))}});A.forEach(["post","put","patch","query"],function(e){function t(r){return function(i,o,c){return this.request(wr(c||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}gr.prototype[e]=t(),e!=="query"&&(gr.prototype[e+"Form"]=t(!0))});let gw=class Cm{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(i){t=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,c){r.reason||(r.reason=new _o(i,o,c),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=r=>{e.abort(r)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Cm(function(s){e=s}),cancel:e}}};function _w(n){return function(t){return n.apply(null,t)}}function yw(n){return A.isObject(n)&&n.isAxiosError===!0}const Su={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Su).forEach(([n,e])=>{Su[e]=n});function Dm(n){const e=new gr(n),t=om(gr.prototype.request,e);return A.extend(t,gr.prototype,e,{allOwnKeys:!0}),A.extend(t,e,null,{allOwnKeys:!0}),t.create=function(s){return Dm(wr(n,s))},t}const Ve=Dm(go);Ve.Axios=gr;Ve.CanceledError=_o;Ve.CancelToken=gw;Ve.isCancel=Am;Ve.VERSION=gl;Ve.toFormData=Ya;Ve.AxiosError=j;Ve.Cancel=Ve.CanceledError;Ve.all=function(e){return Promise.all(e)};Ve.spread=_w;Ve.isAxiosError=yw;Ve.mergeConfig=wr;Ve.AxiosHeaders=Xe;Ve.formToJSON=n=>wm(A.isHTMLForm(n)?new FormData(n):n);Ve.getAdapter=Pm.getAdapter;Ve.HttpStatusCode=Su;Ve.default=Ve;const{Axios:Uk,AxiosError:Bk,CanceledError:qk,isCancel:jk,CancelToken:zk,VERSION:$k,all:Gk,Cancel:Hk,isAxiosError:Kk,spread:Wk,toFormData:Qk,AxiosHeaders:Jk,HttpStatusCode:Yk,formToJSON:Xk,getAdapter:Zk,mergeConfig:eV,create:tV}=Ve,Iw=()=>{};var sf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ew=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},km={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,u=s+2<n.length,l=u?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|l>>6,y=l&63;u||(y=64,o||(m=64)),r.push(t[d],t[p],t[m],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Nm(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ew(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||l==null||p==null)throw new Tw;const m=i<<2|c>>4;if(r.push(m),l!==64){const y=c<<4&240|l>>2;if(r.push(y),p!==64){const N=l<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Tw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ww=function(n){const e=Nm(n);return km.encodeByteArray(e,!0)},ba=function(n){return ww(n).replace(/\./g,"")},Vm=function(n){try{return km.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=()=>Om().__FIREBASE_DEFAULTS__,vw=()=>{if(typeof process>"u"||typeof sf>"u")return;const n=sf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rw=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Vm(n[1]);return e&&JSON.parse(e)},Za=()=>{try{return Iw()||Aw()||vw()||Rw()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xm=n=>{var e,t;return(t=(e=Za())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},bw=n=>{const e=xm(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Lm=()=>{var n;return(n=Za())==null?void 0:n.config},Mm=n=>{var e;return(e=Za())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ba(JSON.stringify(t)),ba(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Fm(){var e;const n=(e=Za())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Nw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function kw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vw(){const n=xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Um(){return!Fm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bm(){return!Fm()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function qm(){try{return typeof indexedDB=="object"}catch{return!1}}function Ow(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw="FirebaseError";class on extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=xw,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yo.prototype.create)}}class yo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Lw(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new on(s,c,r)}}function Lw(n,e){return n.replace(Mw,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Mw=/\{\$([^}]+)}/g;function Fw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Rt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(of(i)&&of(o)){if(!Rt(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function of(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ci(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Uw(n,e){const t=new Bw(n,e);return t.subscribe.bind(t)}class Bw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");qw(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ru),s.error===void 0&&(s.error=ru),s.complete===void 0&&(s.complete=ru);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qw(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ru(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yl(n){return(await fetch(n,{credentials:"include"})).ok}class Ar{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Sw;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($w(e))try{this.getOrInitializeService({instanceIdentifier:or})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=or){return this.instances.has(e)}getOptions(e=or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zw(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=or){return this.component?this.component.multipleInstances?e:or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zw(n){return n===or?void 0:n}function $w(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const Hw={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Kw=ne.INFO,Ww={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Qw=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Ww[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Il{constructor(e){this.name=e,this._logLevel=Kw,this._logHandler=Qw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Jw=(n,e)=>e.some(t=>n instanceof t);let af,cf;function Yw(){return af||(af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xw(){return cf||(cf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jm=new WeakMap,Pu=new WeakMap,zm=new WeakMap,su=new WeakMap,El=new WeakMap;function Zw(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Pn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&jm.set(t,n)}).catch(()=>{}),El.set(e,n),e}function eA(n){if(Pu.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Pu.set(n,e)}let Cu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Pu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zm.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function tA(n){Cu=n(Cu)}function nA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(iu(this),e,...t);return zm.set(r,e.sort?e.sort():[e]),Pn(r)}:Xw().includes(n)?function(...e){return n.apply(iu(this),e),Pn(jm.get(this))}:function(...e){return Pn(n.apply(iu(this),e))}}function rA(n){return typeof n=="function"?nA(n):(n instanceof IDBTransaction&&eA(n),Jw(n,Yw())?new Proxy(n,Cu):n)}function Pn(n){if(n instanceof IDBRequest)return Zw(n);if(su.has(n))return su.get(n);const e=rA(n);return e!==n&&(su.set(n,e),El.set(e,n)),e}const iu=n=>El.get(n);function sA(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=Pn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Pn(o.result),u.oldVersion,u.newVersion,Pn(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const iA=["get","getKey","getAll","getAllKeys","count"],oA=["put","add","delete","clear"],ou=new Map;function uf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ou.get(e))return ou.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=oA.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||iA.includes(t)))return;const i=async function(o,...c){const u=this.transaction(o,s?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[t](...c),s&&u.done]))[0]};return ou.set(e,i),i}tA(n=>({...n,get:(e,t,r)=>uf(e,t)||n.get(e,t,r),has:(e,t)=>!!uf(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cA(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function cA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Du="@firebase/app",lf="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new Il("@firebase/app"),uA="@firebase/app-compat",lA="@firebase/analytics-compat",hA="@firebase/analytics",dA="@firebase/app-check-compat",fA="@firebase/app-check",pA="@firebase/auth",mA="@firebase/auth-compat",gA="@firebase/database",_A="@firebase/data-connect",yA="@firebase/database-compat",IA="@firebase/functions",EA="@firebase/functions-compat",TA="@firebase/installations",wA="@firebase/installations-compat",AA="@firebase/messaging",vA="@firebase/messaging-compat",RA="@firebase/performance",bA="@firebase/performance-compat",SA="@firebase/remote-config",PA="@firebase/remote-config-compat",CA="@firebase/storage",DA="@firebase/storage-compat",NA="@firebase/firestore",kA="@firebase/ai",VA="@firebase/firestore-compat",OA="firebase",xA="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="[DEFAULT]",LA={[Du]:"fire-core",[uA]:"fire-core-compat",[hA]:"fire-analytics",[lA]:"fire-analytics-compat",[fA]:"fire-app-check",[dA]:"fire-app-check-compat",[pA]:"fire-auth",[mA]:"fire-auth-compat",[gA]:"fire-rtdb",[_A]:"fire-data-connect",[yA]:"fire-rtdb-compat",[IA]:"fire-fn",[EA]:"fire-fn-compat",[TA]:"fire-iid",[wA]:"fire-iid-compat",[AA]:"fire-fcm",[vA]:"fire-fcm-compat",[RA]:"fire-perf",[bA]:"fire-perf-compat",[SA]:"fire-rc",[PA]:"fire-rc-compat",[CA]:"fire-gcs",[DA]:"fire-gcs-compat",[NA]:"fire-fst",[VA]:"fire-fst-compat",[kA]:"fire-vertex","fire-js":"fire-js",[OA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=new Map,MA=new Map,Nu=new Map;function hf(n,e){try{n.container.addComponent(e)}catch(t){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function hs(n){const e=n.name;if(Nu.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;Nu.set(e,n);for(const t of Pa.values())hf(t,n);for(const t of MA.values())hf(t,n);return!0}function Io(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function FA(n,e,t=Sa){Io(n,e).clearInstance(t)}function Ae(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cn=new yo("app","Firebase",UA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=xA;function qA(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Sa,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Cn.create("bad-app-name",{appName:String(s)});if(t||(t=Lm()),!t)throw Cn.create("no-options");const i=Pa.get(s);if(i){if(Rt(t,i.options)&&Rt(r,i.config))return i;throw Cn.create("duplicate-app",{appName:s})}const o=new Gw(s);for(const u of Nu.values())o.addComponent(u);const c=new BA(t,r,o);return Pa.set(s,c),c}function $m(n=Sa){const e=Pa.get(n);if(!e&&n===Sa&&Lm())return qA();if(!e)throw Cn.create("no-app",{appName:n});return e}function Dn(n,e,t){let r=LA[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(o.join(" "));return}hs(new Ar(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA="firebase-heartbeat-database",zA=1,Ji="firebase-heartbeat-store";let au=null;function Gm(){return au||(au=sA(jA,zA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ji)}catch(t){console.warn(t)}}}}).catch(n=>{throw Cn.create("idb-open",{originalErrorMessage:n.message})})),au}async function $A(n){try{const t=(await Gm()).transaction(Ji),r=await t.objectStore(Ji).get(Hm(n));return await t.done,r}catch(e){if(e instanceof on)Xt.warn(e.message);else{const t=Cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(t.message)}}}async function df(n,e){try{const r=(await Gm()).transaction(Ji,"readwrite");await r.objectStore(Ji).put(e,Hm(n)),await r.done}catch(t){if(t instanceof on)Xt.warn(t.message);else{const r=Cn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xt.warn(r.message)}}}function Hm(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=1024,HA=30;class KA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new QA(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ff();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>HA){const o=JA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Xt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ff(),{heartbeatsToSend:r,unsentEntries:s}=WA(this._heartbeatsCache.heartbeats),i=ba(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Xt.warn(t),""}}}function ff(){return new Date().toISOString().substring(0,10)}function WA(n,e=GA){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pf(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),pf(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class QA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qm()?Ow().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await $A(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return df(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return df(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function pf(n){return ba(JSON.stringify({version:2,heartbeats:n})).length}function JA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(n){hs(new Ar("platform-logger",e=>new aA(e),"PRIVATE")),hs(new Ar("heartbeat",e=>new KA(e),"PRIVATE")),Dn(Du,lf,n),Dn(Du,lf,"esm2020"),Dn("fire-js","")}YA("");var mf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nn,Km;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function E(){}E.prototype=_.prototype,T.F=_.prototype,T.prototype=new E,T.prototype.constructor=T,T.D=function(v,w,S){for(var I=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)I[fe-2]=arguments[fe];return _.prototype[w].apply(v,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,E){E||(E=0);const v=Array(16);if(typeof _=="string")for(var w=0;w<16;++w)v[w]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(w=0;w<16;++w)v[w]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=T.g[0],E=T.g[1],w=T.g[2];let S=T.g[3],I;I=_+(S^E&(w^S))+v[0]+3614090360&4294967295,_=E+(I<<7&4294967295|I>>>25),I=S+(w^_&(E^w))+v[1]+3905402710&4294967295,S=_+(I<<12&4294967295|I>>>20),I=w+(E^S&(_^E))+v[2]+606105819&4294967295,w=S+(I<<17&4294967295|I>>>15),I=E+(_^w&(S^_))+v[3]+3250441966&4294967295,E=w+(I<<22&4294967295|I>>>10),I=_+(S^E&(w^S))+v[4]+4118548399&4294967295,_=E+(I<<7&4294967295|I>>>25),I=S+(w^_&(E^w))+v[5]+1200080426&4294967295,S=_+(I<<12&4294967295|I>>>20),I=w+(E^S&(_^E))+v[6]+2821735955&4294967295,w=S+(I<<17&4294967295|I>>>15),I=E+(_^w&(S^_))+v[7]+4249261313&4294967295,E=w+(I<<22&4294967295|I>>>10),I=_+(S^E&(w^S))+v[8]+1770035416&4294967295,_=E+(I<<7&4294967295|I>>>25),I=S+(w^_&(E^w))+v[9]+2336552879&4294967295,S=_+(I<<12&4294967295|I>>>20),I=w+(E^S&(_^E))+v[10]+4294925233&4294967295,w=S+(I<<17&4294967295|I>>>15),I=E+(_^w&(S^_))+v[11]+2304563134&4294967295,E=w+(I<<22&4294967295|I>>>10),I=_+(S^E&(w^S))+v[12]+1804603682&4294967295,_=E+(I<<7&4294967295|I>>>25),I=S+(w^_&(E^w))+v[13]+4254626195&4294967295,S=_+(I<<12&4294967295|I>>>20),I=w+(E^S&(_^E))+v[14]+2792965006&4294967295,w=S+(I<<17&4294967295|I>>>15),I=E+(_^w&(S^_))+v[15]+1236535329&4294967295,E=w+(I<<22&4294967295|I>>>10),I=_+(w^S&(E^w))+v[1]+4129170786&4294967295,_=E+(I<<5&4294967295|I>>>27),I=S+(E^w&(_^E))+v[6]+3225465664&4294967295,S=_+(I<<9&4294967295|I>>>23),I=w+(_^E&(S^_))+v[11]+643717713&4294967295,w=S+(I<<14&4294967295|I>>>18),I=E+(S^_&(w^S))+v[0]+3921069994&4294967295,E=w+(I<<20&4294967295|I>>>12),I=_+(w^S&(E^w))+v[5]+3593408605&4294967295,_=E+(I<<5&4294967295|I>>>27),I=S+(E^w&(_^E))+v[10]+38016083&4294967295,S=_+(I<<9&4294967295|I>>>23),I=w+(_^E&(S^_))+v[15]+3634488961&4294967295,w=S+(I<<14&4294967295|I>>>18),I=E+(S^_&(w^S))+v[4]+3889429448&4294967295,E=w+(I<<20&4294967295|I>>>12),I=_+(w^S&(E^w))+v[9]+568446438&4294967295,_=E+(I<<5&4294967295|I>>>27),I=S+(E^w&(_^E))+v[14]+3275163606&4294967295,S=_+(I<<9&4294967295|I>>>23),I=w+(_^E&(S^_))+v[3]+4107603335&4294967295,w=S+(I<<14&4294967295|I>>>18),I=E+(S^_&(w^S))+v[8]+1163531501&4294967295,E=w+(I<<20&4294967295|I>>>12),I=_+(w^S&(E^w))+v[13]+2850285829&4294967295,_=E+(I<<5&4294967295|I>>>27),I=S+(E^w&(_^E))+v[2]+4243563512&4294967295,S=_+(I<<9&4294967295|I>>>23),I=w+(_^E&(S^_))+v[7]+1735328473&4294967295,w=S+(I<<14&4294967295|I>>>18),I=E+(S^_&(w^S))+v[12]+2368359562&4294967295,E=w+(I<<20&4294967295|I>>>12),I=_+(E^w^S)+v[5]+4294588738&4294967295,_=E+(I<<4&4294967295|I>>>28),I=S+(_^E^w)+v[8]+2272392833&4294967295,S=_+(I<<11&4294967295|I>>>21),I=w+(S^_^E)+v[11]+1839030562&4294967295,w=S+(I<<16&4294967295|I>>>16),I=E+(w^S^_)+v[14]+4259657740&4294967295,E=w+(I<<23&4294967295|I>>>9),I=_+(E^w^S)+v[1]+2763975236&4294967295,_=E+(I<<4&4294967295|I>>>28),I=S+(_^E^w)+v[4]+1272893353&4294967295,S=_+(I<<11&4294967295|I>>>21),I=w+(S^_^E)+v[7]+4139469664&4294967295,w=S+(I<<16&4294967295|I>>>16),I=E+(w^S^_)+v[10]+3200236656&4294967295,E=w+(I<<23&4294967295|I>>>9),I=_+(E^w^S)+v[13]+681279174&4294967295,_=E+(I<<4&4294967295|I>>>28),I=S+(_^E^w)+v[0]+3936430074&4294967295,S=_+(I<<11&4294967295|I>>>21),I=w+(S^_^E)+v[3]+3572445317&4294967295,w=S+(I<<16&4294967295|I>>>16),I=E+(w^S^_)+v[6]+76029189&4294967295,E=w+(I<<23&4294967295|I>>>9),I=_+(E^w^S)+v[9]+3654602809&4294967295,_=E+(I<<4&4294967295|I>>>28),I=S+(_^E^w)+v[12]+3873151461&4294967295,S=_+(I<<11&4294967295|I>>>21),I=w+(S^_^E)+v[15]+530742520&4294967295,w=S+(I<<16&4294967295|I>>>16),I=E+(w^S^_)+v[2]+3299628645&4294967295,E=w+(I<<23&4294967295|I>>>9),I=_+(w^(E|~S))+v[0]+4096336452&4294967295,_=E+(I<<6&4294967295|I>>>26),I=S+(E^(_|~w))+v[7]+1126891415&4294967295,S=_+(I<<10&4294967295|I>>>22),I=w+(_^(S|~E))+v[14]+2878612391&4294967295,w=S+(I<<15&4294967295|I>>>17),I=E+(S^(w|~_))+v[5]+4237533241&4294967295,E=w+(I<<21&4294967295|I>>>11),I=_+(w^(E|~S))+v[12]+1700485571&4294967295,_=E+(I<<6&4294967295|I>>>26),I=S+(E^(_|~w))+v[3]+2399980690&4294967295,S=_+(I<<10&4294967295|I>>>22),I=w+(_^(S|~E))+v[10]+4293915773&4294967295,w=S+(I<<15&4294967295|I>>>17),I=E+(S^(w|~_))+v[1]+2240044497&4294967295,E=w+(I<<21&4294967295|I>>>11),I=_+(w^(E|~S))+v[8]+1873313359&4294967295,_=E+(I<<6&4294967295|I>>>26),I=S+(E^(_|~w))+v[15]+4264355552&4294967295,S=_+(I<<10&4294967295|I>>>22),I=w+(_^(S|~E))+v[6]+2734768916&4294967295,w=S+(I<<15&4294967295|I>>>17),I=E+(S^(w|~_))+v[13]+1309151649&4294967295,E=w+(I<<21&4294967295|I>>>11),I=_+(w^(E|~S))+v[4]+4149444226&4294967295,_=E+(I<<6&4294967295|I>>>26),I=S+(E^(_|~w))+v[11]+3174756917&4294967295,S=_+(I<<10&4294967295|I>>>22),I=w+(_^(S|~E))+v[2]+718787259&4294967295,w=S+(I<<15&4294967295|I>>>17),I=E+(S^(w|~_))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(w+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.v=function(T,_){_===void 0&&(_=T.length);const E=_-this.blockSize,v=this.C;let w=this.h,S=0;for(;S<_;){if(w==0)for(;S<=E;)s(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<_;)if(v[w++]=T.charCodeAt(S++),w==this.blockSize){s(this,v),w=0;break}}else for(;S<_;)if(v[w++]=T[S++],w==this.blockSize){s(this,v),w=0;break}}this.h=w,this.o+=_},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var E=T.length-8;E<T.length;++E)T[E]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,E=0;E<4;++E)for(let v=0;v<32;v+=8)T[_++]=this.g[E]>>>v&255;return T};function i(T,_){var E=c;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=_(T)}function o(T,_){this.h=_;const E=[];let v=!0;for(let w=T.length-1;w>=0;w--){const S=T[w]|0;v&&S==_||(E[w]=S,v=!1)}this.g=E}var c={};function u(T){return-128<=T&&T<128?i(T,function(_){return new o([_|0],_<0?-1:0)}):new o([T|0],T<0?-1:0)}function l(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return b(l(-T));const _=[];let E=1;for(let v=0;T>=E;v++)_[v]=T/E|0,E*=4294967296;return new o(_,0)}function d(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return b(d(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=l(Math.pow(_,8));let v=p;for(let S=0;S<T.length;S+=8){var w=Math.min(8,T.length-S);const I=parseInt(T.substring(S,S+w),_);w<8?(w=l(Math.pow(_,w)),v=v.j(w).add(l(I))):(v=v.j(E),v=v.add(l(I)))}return v}var p=u(0),m=u(1),y=u(16777216);n=o.prototype,n.m=function(){if(k(this))return-b(this).m();let T=0,_=1;for(let E=0;E<this.g.length;E++){const v=this.i(E);T+=(v>=0?v:4294967296+v)*_,_*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(N(this))return"0";if(k(this))return"-"+b(this).toString(T);const _=l(Math.pow(T,6));var E=this;let v="";for(;;){const w=G(E,_).g;E=D(E,w.j(_));let S=((E.g.length>0?E.g[0]:E.h)>>>0).toString(T);if(E=w,N(E))return S+v;for(;S.length<6;)S="0"+S;v=S+v}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function N(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=D(this,T),k(T)?-1:N(T)?0:1};function b(T){const _=T.g.length,E=[];for(let v=0;v<_;v++)E[v]=~T.g[v];return new o(E,~T.h).add(m)}n.abs=function(){return k(this)?b(this):this},n.add=function(T){const _=Math.max(this.g.length,T.g.length),E=[];let v=0;for(let w=0;w<=_;w++){let S=v+(this.i(w)&65535)+(T.i(w)&65535),I=(S>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);v=I>>>16,S&=65535,I&=65535,E[w]=I<<16|S}return new o(E,E[E.length-1]&-2147483648?-1:0)};function D(T,_){return T.add(b(_))}n.j=function(T){if(N(this)||N(T))return p;if(k(this))return k(T)?b(this).j(b(T)):b(b(this).j(T));if(k(T))return b(this.j(b(T)));if(this.l(y)<0&&T.l(y)<0)return l(this.m()*T.m());const _=this.g.length+T.g.length,E=[];for(var v=0;v<2*_;v++)E[v]=0;for(v=0;v<this.g.length;v++)for(let w=0;w<T.g.length;w++){const S=this.i(v)>>>16,I=this.i(v)&65535,fe=T.i(w)>>>16,gt=T.i(w)&65535;E[2*v+2*w]+=I*gt,L(E,2*v+2*w),E[2*v+2*w+1]+=S*gt,L(E,2*v+2*w+1),E[2*v+2*w+1]+=I*fe,L(E,2*v+2*w+1),E[2*v+2*w+2]+=S*fe,L(E,2*v+2*w+2)}for(T=0;T<_;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=_;T<2*_;T++)E[T]=0;return new o(E,0)};function L(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function M(T,_){this.g=T,this.h=_}function G(T,_){if(N(_))throw Error("division by zero");if(N(T))return new M(p,p);if(k(T))return _=G(b(T),_),new M(b(_.g),b(_.h));if(k(_))return _=G(T,b(_)),new M(b(_.g),_.h);if(T.g.length>30){if(k(T)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var E=m,v=_;v.l(T)<=0;)E=Q(E),v=Q(v);var w=W(E,1),S=W(v,1);for(v=W(v,2),E=W(E,2);!N(v);){var I=S.add(v);I.l(T)<=0&&(w=w.add(E),S=I),v=W(v,1),E=W(E,1)}return _=D(T,w.j(_)),new M(w,_)}for(w=p;T.l(_)>=0;){for(E=Math.max(1,Math.floor(T.m()/_.m())),v=Math.ceil(Math.log(E)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),S=l(E),I=S.j(_);k(I)||I.l(T)>0;)E-=v,S=l(E),I=S.j(_);N(S)&&(S=m),w=w.add(S),T=D(T,I)}return new M(w,T)}n.B=function(T){return G(this,T).h},n.and=function(T){const _=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)&T.i(v);return new o(E,this.h&T.h)},n.or=function(T){const _=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)|T.i(v);return new o(E,this.h|T.h)},n.xor=function(T){const _=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)^T.i(v);return new o(E,this.h^T.h)};function Q(T){const _=T.g.length+1,E=[];for(let v=0;v<_;v++)E[v]=T.i(v)<<1|T.i(v-1)>>>31;return new o(E,T.h)}function W(T,_){const E=_>>5;_%=32;const v=T.g.length-E,w=[];for(let S=0;S<v;S++)w[S]=_>0?T.i(S+E)>>>_|T.i(S+E+1)<<32-_:T.i(S+E);return new o(w,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Km=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,Nn=o}).apply(typeof mf<"u"?mf:typeof self<"u"?self:typeof window<"u"?window:{});var Jo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wm,Di,Qm,ua,ku,Jm,Ym,Xm;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jo=="object"&&Jo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in f))break e;f=f[P]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var f=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&f.push([g,h[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function l(a,h,f){return l=u,l.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,P,V){for(var q=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)q[Z-2]=arguments[Z];return h.prototype[P].apply(g,q)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const h=a.length;if(h>0){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function N(a,h){for(let g=1;g<arguments.length;g++){const P=arguments[g];var f=typeof P;if(f=f!="object"?f:P?Array.isArray(P)?"array":f:"null",f=="array"||f=="object"&&typeof P.length=="number"){f=a.length||0;const V=P.length||0;a.length=f+V;for(let q=0;q<V;q++)a[f+q]=P[q]}else a.push(P)}}class k{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function D(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class L{constructor(){this.h=this.g=null}add(h,f){const g=M.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var M=new k(()=>new G,a=>a.reset());class G{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,W=!1,T=new L,_=()=>{const a=Promise.resolve(void 0);Q=()=>{a.then(E)}};function E(){for(var a;a=D();){try{a.h.call(a.g)}catch(f){b(f)}var h=M;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}W=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a})();function I(a){return/^[\s\xa0]*$/.test(a)}function fe(a,h){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(fe,w),fe.prototype.init=function(a,h){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&fe.Z.h.call(this)},fe.prototype.h=function(){fe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var gt="closure_listenable_"+(Math.random()*1e6|0),Yn=0;function ni(a,h,f,g,P){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=P,this.key=++Yn,this.da=this.fa=!1}function Fr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Xn(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function St(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function Ce(a){const h={};for(const f in a)h[f]=a[f];return h}const Pt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zt(a,h){let f,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(f in g)a[f]=g[f];for(let V=0;V<Pt.length;V++)f=Pt[V],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function Ct(a){this.src=a,this.g={},this.h=0}Ct.prototype.add=function(a,h,f,g,P){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const q=ie(a,h,g,P);return q>-1?(h=a[q],f||(h.fa=!1)):(h=new ni(h,this.src,V,!!g,P),h.fa=f,a.push(h)),h};function Ur(a,h){const f=h.type;if(f in a.g){var g=a.g[f],P=Array.prototype.indexOf.call(g,h,void 0),V;(V=P>=0)&&Array.prototype.splice.call(g,P,1),V&&(Fr(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ie(a,h,f,g){for(let P=0;P<a.length;++P){const V=a[P];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==g)return P}return-1}var We="closure_lm_"+(Math.random()*1e6|0),fn={};function ri(a,h,f,g,P){if(Array.isArray(h)){for(let V=0;V<h.length;V++)ri(a,h[V],f,g,P);return null}return f=Et(f),a&&a[gt]?a.J(h,f,c(g)?!!g.capture:!1,P):xc(a,h,f,!1,g,P)}function xc(a,h,f,g,P,V){if(!h)throw Error("Invalid event type");const q=c(P)?!!P.capture:!!P;let Z=Y(a);if(Z||(a[We]=Z=new Ct(a)),f=Z.add(h,f,g,q,V),f.proxy)return f;if(g=Mo(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)S||(P=q),P===void 0&&(P=!1),a.addEventListener(h.toString(),g,P);else if(a.attachEvent)a.attachEvent(qr(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Mo(){function a(f){return h.call(a.src,a.listener,f)}const h=It;return a}function _t(a,h,f,g,P){if(Array.isArray(h))for(var V=0;V<h.length;V++)_t(a,h[V],f,g,P);else g=c(g)?!!g.capture:!!g,f=Et(f),a&&a[gt]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],f=ie(h,f,g,P),f>-1&&(Fr(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=Y(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ie(h,f,g,P)),(f=a>-1?h[a]:null)&&Br(f))}function Br(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[gt])Ur(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(qr(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Y(h))?(Ur(f,a),f.h==0&&(f.src=null,h[We]=null)):Fr(a)}}}function qr(a){return a in fn?fn[a]:fn[a]="on"+a}function It(a,h){if(a.da)a=!0;else{h=new fe(h,this);const f=a.listener,g=a.ha||a.src;a.fa&&Br(a),a=f.call(g,h)}return a}function Y(a){return a=a[We],a instanceof Ct?a:null}var Ge="__closure_events_fn_"+(Math.random()*1e9>>>0);function Et(a){return typeof a=="function"?a:(a[Ge]||(a[Ge]=function(h){return a.handleEvent(h)}),a[Ge])}function Ie(){v.call(this),this.i=new Ct(this),this.M=this,this.G=null}p(Ie,v),Ie.prototype[gt]=!0,Ie.prototype.removeEventListener=function(a,h,f,g){_t(this,a,h,f,g)};function Fe(a,h){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new w(h,a);else if(h instanceof w)h.target=h.target||a;else{var P=h;h=new w(g,a),zt(h,P)}P=!0;let V,q;if(f)for(q=f.length-1;q>=0;q--)V=h.g=f[q],P=jr(V,g,!0,h)&&P;if(V=h.g=a,P=jr(V,g,!0,h)&&P,P=jr(V,g,!1,h)&&P,f)for(q=0;q<f.length;q++)V=h.g=f[q],P=jr(V,g,!1,h)&&P}Ie.prototype.N=function(){if(Ie.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let g=0;g<f.length;g++)Fr(f[g]);delete a.g[h],a.h--}}this.G=null},Ie.prototype.J=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Ie.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function jr(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let P=!0;for(let V=0;V<h.length;++V){const q=h[V];if(q&&!q.da&&q.capture==f){const Z=q.listener,Oe=q.ha||q.src;q.fa&&Ur(a.i,q),P=Z.call(Oe,g)!==!1&&P}}return P&&!g.defaultPrevented}function Zn(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=l(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Kh(a){a.g=Zn(()=>{a.g=null,a.i&&(a.i=!1,Kh(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class JI extends v{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Kh(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function si(a){v.call(this),this.h=a,this.g={}}p(si,v);var Wh=[];function Qh(a){Xn(a.g,function(h,f){this.g.hasOwnProperty(f)&&Br(h)},a),a.g={}}si.prototype.N=function(){si.Z.N.call(this),Qh(this)},si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lc=o.JSON.stringify,YI=o.JSON.parse,XI=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Jh(){}function Yh(){}var ii={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Mc(){w.call(this,"d")}p(Mc,w);function Fc(){w.call(this,"c")}p(Fc,w);var er={},Xh=null;function Fo(){return Xh=Xh||new Ie}er.Ia="serverreachability";function Zh(a){w.call(this,er.Ia,a)}p(Zh,w);function oi(a){const h=Fo();Fe(h,new Zh(h))}er.STAT_EVENT="statevent";function ed(a,h){w.call(this,er.STAT_EVENT,a),this.stat=h}p(ed,w);function tt(a){const h=Fo();Fe(h,new ed(h,a))}er.Ja="timingevent";function td(a,h){w.call(this,er.Ja,a),this.size=h}p(td,w);function ai(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ci(){this.g=!0}ci.prototype.ua=function(){this.g=!1};function ZI(a,h,f,g,P,V){a.info(function(){if(a.g)if(V){var q="",Z=V.split("&");for(let he=0;he<Z.length;he++){var Oe=Z[he].split("=");if(Oe.length>1){const Ue=Oe[0];Oe=Oe[1];const Nt=Ue.split("_");q=Nt.length>=2&&Nt[1]=="type"?q+(Ue+"="+Oe+"&"):q+(Ue+"=redacted&")}}}else q=null;else q=V;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+f+`
`+q})}function eE(a,h,f,g,P,V,q){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+f+`
`+V+" "+q})}function zr(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+nE(a,f)+(g?" "+g:"")})}function tE(a,h){a.info(function(){return"TIMEOUT: "+h})}ci.prototype.info=function(){};function nE(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var f=V[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var P=g[0];if(P!="noop"&&P!="stop"&&P!="close")for(let q=1;q<g.length;q++)g[q]=""}}}}return Lc(V)}catch{return h}}var Uo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},nd={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},rd;function Uc(){}p(Uc,Jh),Uc.prototype.g=function(){return new XMLHttpRequest},rd=new Uc;function ui(a){return encodeURIComponent(String(a))}function rE(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function pn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.S=g||1,this.V=new si(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new sd}function sd(){this.i=null,this.g="",this.h=!1}var id={},Bc={};function qc(a,h,f){a.M=1,a.A=qo(Dt(h)),a.u=f,a.R=!0,od(a,null)}function od(a,h){a.F=Date.now(),Bo(a),a.B=Dt(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Id(f.i,"t",g),a.C=0,f=a.j.L,a.h=new sd,a.g=Md(a.j,f?h:null,!a.u),a.P>0&&(a.O=new JI(l(a.Y,a,a.g),a.P)),h=a.V,f=a.g,g=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(Wh[0]=P.toString()),P=Wh);for(let V=0;V<P.length;V++){const q=ri(f,P[V],g||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=a.J?Ce(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),oi(),ZI(a.i,a.v,a.B,a.l,a.S,a.u)}pn.prototype.ba=function(a){a=a.target;const h=this.O;h&&_n(a)==3?h.j():this.Y(a)},pn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=_n(this.g),Oe=this.g.ya(),he=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||bd(this.g)))){this.K||Z!=4||Oe==7||(Oe==8||he<=0?oi(3):oi(2)),jc(this);var h=this.g.ca();this.X=h;var f=sE(this);if(this.o=h==200,eE(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,P=this.g;if((g=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(g)){var V=g;break t}}V=null}if(a=V)zr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,zc(this,a);else{this.o=!1,this.m=3,tt(12),tr(this),li(this);break e}}if(this.R){a=!0;let Ue;for(;!this.K&&this.C<f.length;)if(Ue=iE(this,f),Ue==Bc){Z==4&&(this.m=4,tt(14),a=!1),zr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==id){this.m=4,tt(15),zr(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else zr(this.i,this.l,Ue,null),zc(this,Ue);if(ad(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||f.length!=0||this.h.h||(this.m=1,tt(16),a=!1),this.o=this.o&&a,!a)zr(this.i,this.l,f,"[Invalid Chunked Response]"),tr(this),li(this);else if(f.length>0&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.aa&&!q.P&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Yc(q),q.P=!0,tt(11))}}else zr(this.i,this.l,f,null),zc(this,f);Z==4&&tr(this),this.o&&!this.K&&(Z==4?Vd(this.j,this):(this.o=!1,Bo(this)))}else IE(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,tt(12)):(this.m=0,tt(13)),tr(this),li(this)}}}catch{}finally{}};function sE(a){if(!ad(a))return a.g.la();const h=bd(a.g);if(h==="")return"";let f="";const g=h.length,P=_n(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return tr(a),li(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<g;V++)a.h.h=!0,f+=a.h.i.decode(h[V],{stream:!(P&&V==g-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function ad(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function iE(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Bc:(f=Number(h.substring(f,g)),isNaN(f)?id:(g+=1,g+f>h.length?Bc:(h=h.slice(g,g+f),a.C=g+f,h)))}pn.prototype.cancel=function(){this.K=!0,tr(this)};function Bo(a){a.T=Date.now()+a.H,cd(a,a.H)}function cd(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ai(l(a.aa,a),h)}function jc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}pn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(tE(this.i,this.B),this.M!=2&&(oi(),tt(17)),tr(this),this.m=2,li(this)):cd(this,this.T-a)};function li(a){a.j.I==0||a.K||Vd(a.j,a)}function tr(a){jc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Qh(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function zc(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||$c(f.h,a))){if(!a.L&&$c(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Ho(f),$o(f);else break e;Jc(f),tt(18)}}else f.xa=P[1],0<f.xa-f.K&&P[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=ai(l(f.Va,f),6e3));hd(f.h)<=1&&f.ta&&(f.ta=void 0)}else rr(f,11)}else if((a.L||f.g==a)&&Ho(f),!I(h))for(P=f.Ba.g.parse(h),h=0;h<P.length;h++){let he=P[h];const Ue=he[0];if(!(Ue<=f.K))if(f.K=Ue,he=he[1],f.I==2)if(he[0]=="c"){f.M=he[1],f.ba=he[2];const Nt=he[3];Nt!=null&&(f.ka=Nt,f.j.info("VER="+f.ka));const sr=he[4];sr!=null&&(f.za=sr,f.j.info("SVER="+f.za));const yn=he[5];yn!=null&&typeof yn=="number"&&yn>0&&(g=1.5*yn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const In=a.g;if(In){const Wo=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wo){var V=g.h;V.g||Wo.indexOf("spdy")==-1&&Wo.indexOf("quic")==-1&&Wo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Gc(V,V.h),V.h=null))}if(g.G){const Xc=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;Xc&&(g.wa=Xc,pe(g.J,g.G,Xc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var q=a;if(g.na=Ld(g,g.L?g.ba:null,g.W),q.L){dd(g.h,q);var Z=q,Oe=g.O;Oe&&(Z.H=Oe),Z.D&&(jc(Z),Bo(Z)),g.g=q}else Nd(g);f.i.length>0&&Go(f)}else he[0]!="stop"&&he[0]!="close"||rr(f,7);else f.I==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?rr(f,7):Qc(f):he[0]!="noop"&&f.l&&f.l.qa(he),f.A=0)}}oi(4)}catch{}}var oE=class{constructor(a,h){this.g=a,this.map=h}};function ud(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ld(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function hd(a){return a.h?1:a.g?a.g.size:0}function $c(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Gc(a,h){a.g?a.g.add(h):a.h=h}function dd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ud.prototype.cancel=function(){if(this.i=fd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function fd(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return y(a.i)}var pd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aE(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let P,V=null;g>=0?(P=a[f].substring(0,g),V=a[f].substring(g+1)):P=a[f],h(P,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function mn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof mn?(this.l=a.l,hi(this,a.j),this.o=a.o,this.g=a.g,di(this,a.u),this.h=a.h,Hc(this,Ed(a.i)),this.m=a.m):a&&(h=String(a).match(pd))?(this.l=!1,hi(this,h[1]||"",!0),this.o=fi(h[2]||""),this.g=fi(h[3]||"",!0),di(this,h[4]),this.h=fi(h[5]||"",!0),Hc(this,h[6]||"",!0),this.m=fi(h[7]||"")):(this.l=!1,this.i=new mi(null,this.l))}mn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(pi(h,md,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(pi(h,md,!0),"@"),a.push(ui(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(pi(f,f.charAt(0)=="/"?lE:uE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",pi(f,dE)),a.join("")},mn.prototype.resolve=function(a){const h=Dt(this);let f=!!a.j;f?hi(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var g=a.h;if(f)di(h,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var P=h.h.lastIndexOf("/");P!=-1&&(g=h.h.slice(0,P+1)+g)}if(P=g,P==".."||P==".")g="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){g=P.lastIndexOf("/",0)==0,P=P.split("/");const V=[];for(let q=0;q<P.length;){const Z=P[q++];Z=="."?g&&q==P.length&&V.push(""):Z==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),g&&q==P.length&&V.push("")):(V.push(Z),g=!0)}g=V.join("/")}else g=P}return f?h.h=g:f=a.i.toString()!=="",f?Hc(h,Ed(a.i)):f=!!a.m,f&&(h.m=a.m),h};function Dt(a){return new mn(a)}function hi(a,h,f){a.j=f?fi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function di(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Hc(a,h,f){h instanceof mi?(a.i=h,fE(a.i,a.l)):(f||(h=pi(h,hE)),a.i=new mi(h,a.l))}function pe(a,h,f){a.i.set(h,f)}function qo(a){return pe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function fi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function pi(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,cE),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function cE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var md=/[#\/\?@]/g,uE=/[#\?:]/g,lE=/[#\?]/g,hE=/[#\?@]/g,dE=/#/g;function mi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function nr(a){a.g||(a.g=new Map,a.h=0,a.i&&aE(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=mi.prototype,n.add=function(a,h){nr(this),this.i=null,a=$r(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function gd(a,h){nr(a),h=$r(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function _d(a,h){return nr(a),h=$r(a,h),a.g.has(h)}n.forEach=function(a,h){nr(this),this.g.forEach(function(f,g){f.forEach(function(P){a.call(h,P,g,this)},this)},this)};function yd(a,h){nr(a);let f=[];if(typeof h=="string")_d(a,h)&&(f=f.concat(a.g.get($r(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}n.set=function(a,h){return nr(this),this.i=null,a=$r(this,a),_d(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=yd(this,a),a.length>0?String(a[0]):h):h};function Id(a,h,f){gd(a,h),f.length>0&&(a.i=null,a.g.set($r(a,h),y(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var f=h[g];const P=ui(f);f=yd(this,f);for(let V=0;V<f.length;V++){let q=P;f[V]!==""&&(q+="="+ui(f[V])),a.push(q)}}return this.i=a.join("&")};function Ed(a){const h=new mi;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function $r(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function fE(a,h){h&&!a.j&&(nr(a),a.i=null,a.g.forEach(function(f,g){const P=g.toLowerCase();g!=P&&(gd(this,g),Id(this,P,f))},a)),a.j=h}function pE(a,h){const f=new ci;if(o.Image){const g=new Image;g.onload=d(gn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=d(gn,f,"TestLoadImage: error",!1,h,g),g.onabort=d(gn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(gn,f,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function mE(a,h){const f=new ci,g=new AbortController,P=setTimeout(()=>{g.abort(),gn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(P),V.ok?gn(f,"TestPingServer: ok",!0,h):gn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),gn(f,"TestPingServer: error",!1,h)})}function gn(a,h,f,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(f)}catch{}}function gE(){this.g=new XI}function Kc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Kc,Jh),Kc.prototype.g=function(){return new jo(this.i,this.h)};function jo(a,h){Ie.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(jo,Ie),n=jo.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,_i(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,gi(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Td(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Td(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?gi(this):_i(this),this.readyState==3&&Td(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,gi(this))},n.Na=function(a){this.g&&(this.response=a,gi(this))},n.ga=function(){this.g&&gi(this)};function gi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,_i(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function _i(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function wd(a){let h="";return Xn(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Wc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=wd(f),typeof a=="string"?f!=null&&ui(f):pe(a,h,f))}function Re(a){Ie.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Re,Ie);var _E=/^https?$/i,yE=["POST","PUT"];n=Re.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():rd.g(),this.g.onreadystatechange=m(l(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Ad(this,V);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)f.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())f.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(yE,h,void 0)>=0)||g||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,q]of f)this.g.setRequestHeader(V,q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Ad(this,V)}};function Ad(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,vd(a),zo(a)}function vd(a){a.A||(a.A=!0,Fe(a,"complete"),Fe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Fe(this,"complete"),Fe(this,"abort"),zo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zo(this,!0)),Re.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Rd(this):this.Xa())},n.Xa=function(){Rd(this)};function Rd(a){if(a.h&&typeof i<"u"){if(a.v&&_n(a)==4)setTimeout(a.Ca.bind(a),0);else if(Fe(a,"readystatechange"),_n(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=V===0){let q=String(a.D).match(pd)[1]||null;!q&&o.self&&o.self.location&&(q=o.self.location.protocol.slice(0,-1)),g=!_E.test(q?q.toLowerCase():"")}f=g}if(f)Fe(a,"complete"),Fe(a,"success");else{a.o=6;try{var P=_n(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",vd(a)}}finally{zo(a)}}}}function zo(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||Fe(a,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function _n(a){return a.g?a.g.readyState:0}n.ca=function(){try{return _n(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),YI(h)}};function bd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function IE(a){const h={};a=(a.g&&_n(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(I(a[g]))continue;var f=rE(a[g]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[P]||[];h[P]=V,V.push(f)}St(h,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function yi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Sd(a){this.za=0,this.i=[],this.j=new ci,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=yi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=yi("baseRetryDelayMs",5e3,a),this.Za=yi("retryDelaySeedMs",1e4,a),this.Ta=yi("forwardChannelMaxRetries",2,a),this.va=yi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ud(a&&a.concurrentRequestLimit),this.Ba=new gE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Sd.prototype,n.ka=8,n.I=1,n.connect=function(a,h,f,g){tt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Ld(this,null,this.W),Go(this)};function Qc(a){if(Pd(a),a.I==3){var h=a.V++,f=Dt(a.J);if(pe(f,"SID",a.M),pe(f,"RID",h),pe(f,"TYPE","terminate"),Ii(a,f),h=new pn(a,a.j,h),h.M=2,h.A=qo(Dt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Md(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Bo(h)}xd(a)}function $o(a){a.g&&(Yc(a),a.g.cancel(),a.g=null)}function Pd(a){$o(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ho(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Go(a){if(!ld(a.h)&&!a.m){a.m=!0;var h=a.Ea;Q||_(),W||(Q(),W=!0),T.add(h,a),a.D=0}}function EE(a,h){return hd(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ai(l(a.Ea,a,h),Od(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new pn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=Ce(V),zt(V,this.U)):V=this.U),this.u!==null||this.R||(P.J=V,V=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Dd(this,P,h),f=Dt(this.J),pe(f,"RID",a),pe(f,"CVER",22),this.G&&pe(f,"X-HTTP-Session-Id",this.G),Ii(this,f),V&&(this.R?h="headers="+ui(wd(V))+"&"+h:this.u&&Wc(f,this.u,V)),Gc(this.h,P),this.Ra&&pe(f,"TYPE","init"),this.S?(pe(f,"$req",h),pe(f,"SID","null"),P.U=!0,qc(P,f,null)):qc(P,f,h),this.I=2}}else this.I==3&&(a?Cd(this,a):this.i.length==0||ld(this.h)||Cd(this))};function Cd(a,h){var f;h?f=h.l:f=a.V++;const g=Dt(a.J);pe(g,"SID",a.M),pe(g,"RID",f),pe(g,"AID",a.K),Ii(a,g),a.u&&a.o&&Wc(g,a.u,a.o),f=new pn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Dd(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Gc(a.h,f),qc(f,g,h)}function Ii(a,h){a.H&&Xn(a.H,function(f,g){pe(h,g,f)}),a.l&&Xn({},function(f,g){pe(h,g,f)})}function Dd(a,h,f){f=Math.min(a.i.length,f);const g=a.l?l(a.l.Ka,a.l,a):null;e:{var P=a.i;let Z=-1;for(;;){const Oe=["count="+f];Z==-1?f>0?(Z=P[0].g,Oe.push("ofs="+Z)):Z=0:Oe.push("ofs="+Z);let he=!0;for(let Ue=0;Ue<f;Ue++){var V=P[Ue].g;const Nt=P[Ue].map;if(V-=Z,V<0)Z=Math.max(0,P[Ue].g-100),he=!1;else try{V="req"+V+"_"||"";try{var q=Nt instanceof Map?Nt:Object.entries(Nt);for(const[sr,yn]of q){let In=yn;c(yn)&&(In=Lc(yn)),Oe.push(V+sr+"="+encodeURIComponent(In))}}catch(sr){throw Oe.push(V+"type="+encodeURIComponent("_badmap")),sr}}catch{g&&g(Nt)}}if(he){q=Oe.join("&");break e}}q=void 0}return a=a.i.splice(0,f),h.G=a,q}function Nd(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;Q||_(),W||(Q(),W=!0),T.add(h,a),a.A=0}}function Jc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ai(l(a.Da,a),Od(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,kd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ai(l(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,tt(10),$o(this),kd(this))};function Yc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function kd(a){a.g=new pn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Dt(a.na);pe(h,"RID","rpc"),pe(h,"SID",a.M),pe(h,"AID",a.K),pe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&pe(h,"TO",a.ia),pe(h,"TYPE","xmlhttp"),Ii(a,h),a.u&&a.o&&Wc(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=qo(Dt(h)),f.u=null,f.R=!0,od(f,a)}n.Va=function(){this.C!=null&&(this.C=null,$o(this),Jc(this),tt(19))};function Ho(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Vd(a,h){var f=null;if(a.g==h){Ho(a),Yc(a),a.g=null;var g=2}else if($c(a.h,h))f=h.G,dd(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var P=a.D;g=Fo(),Fe(g,new td(g,f)),Go(a)}else Nd(a);else if(P=h.m,P==3||P==0&&h.X>0||!(g==1&&EE(a,h)||g==2&&Jc(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),P){case 1:rr(a,5);break;case 4:rr(a,10);break;case 3:rr(a,6);break;default:rr(a,2)}}}function Od(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function rr(a,h){if(a.j.info("Error code "+h),h==2){var f=l(a.bb,a),g=a.Ua;const P=!g;g=new mn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||hi(g,"https"),qo(g),P?pE(g.toString(),f):mE(g.toString(),f)}else tt(2);a.I=0,a.l&&a.l.pa(h),xd(a),Pd(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function xd(a){if(a.I=0,a.ja=[],a.l){const h=fd(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ja,h),N(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function Ld(a,h,f){var g=f instanceof mn?Dt(f):new mn(f);if(g.g!="")h&&(g.g=h+"."+g.g),di(g,g.u);else{var P=o.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;const V=new mn(null);g&&hi(V,g),h&&(V.g=h),P&&di(V,P),f&&(V.h=f),g=V}return f=a.G,h=a.wa,f&&h&&pe(g,f,h),pe(g,"VER",a.ka),Ii(a,g),g}function Md(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Re(new Kc({ab:f})):new Re(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fd(){}n=Fd.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ko(){}Ko.prototype.g=function(a,h){return new dt(a,h)};function dt(a,h){Ie.call(this),this.g=new Sd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!I(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Gr(this)}p(dt,Ie),dt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},dt.prototype.close=function(){Qc(this.g)},dt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=Lc(a),a=f);h.i.push(new oE(h.Ya++,a)),h.I==3&&Go(h)},dt.prototype.N=function(){this.g.l=null,delete this.j,Qc(this.g),delete this.g,dt.Z.N.call(this)};function Ud(a){Mc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Ud,Mc);function Bd(){Fc.call(this),this.status=1}p(Bd,Fc);function Gr(a){this.g=a}p(Gr,Fd),Gr.prototype.ra=function(){Fe(this.g,"a")},Gr.prototype.qa=function(a){Fe(this.g,new Ud(a))},Gr.prototype.pa=function(a){Fe(this.g,new Bd)},Gr.prototype.oa=function(){Fe(this.g,"b")},Ko.prototype.createWebChannel=Ko.prototype.g,dt.prototype.send=dt.prototype.o,dt.prototype.open=dt.prototype.m,dt.prototype.close=dt.prototype.close,Xm=function(){return new Ko},Ym=function(){return Fo()},Jm=er,ku={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Uo.NO_ERROR=0,Uo.TIMEOUT=8,Uo.HTTP_ERROR=6,ua=Uo,nd.COMPLETE="complete",Qm=nd,Yh.EventType=ii,ii.OPEN="a",ii.CLOSE="b",ii.ERROR="c",ii.MESSAGE="d",Ie.prototype.listen=Ie.prototype.J,Di=Yh,Re.prototype.listenOnce=Re.prototype.K,Re.prototype.getLastError=Re.prototype.Ha,Re.prototype.getLastErrorCode=Re.prototype.ya,Re.prototype.getStatus=Re.prototype.ca,Re.prototype.getResponseJson=Re.prototype.La,Re.prototype.getResponseText=Re.prototype.la,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Fa,Wm=Re}).apply(typeof Jo<"u"?Jo:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us="12.13.0";function XA(n){Us=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new Il("@firebase/firestore");function Zr(){return xn.logLevel}function ZA(n){xn.setLogLevel(n)}function x(n,...e){if(xn.logLevel<=ne.DEBUG){const t=e.map(Tl);xn.debug(`Firestore (${Us}): ${n}`,...t)}}function Se(n,...e){if(xn.logLevel<=ne.ERROR){const t=e.map(Tl);xn.error(`Firestore (${Us}): ${n}`,...t)}}function lt(n,...e){if(xn.logLevel<=ne.WARN){const t=e.map(Tl);xn.warn(`Firestore (${Us}): ${n}`,...t)}}function Tl(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Zm(n,r,t)}function Zm(n,e,t){let r=`FIRESTORE (${Us}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Se(r),new Error(r)}function $(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Zm(e,s,r)}function ev(n,e){n||z(57014,e)}function B(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends on{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(qe.UNAUTHENTICATED)))}shutdown(){}}class tv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class nv{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new ze;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ze,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ze)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string",31837,{l:r}),new eg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string",2055,{h:e}),new qe(e)}}class rv{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class sv{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new rv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(qe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Vu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ae(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){$(this.o===void 0,3512);const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Vu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?($(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Vu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class ov{getToken(){return Promise.resolve(new Vu(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=av(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function J(n,e){return n<e?-1:n>e?1:0}function Ou(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return cu(s)===cu(i)?J(s,i):cu(s)?1:-1}return J(n.length,e.length)}const cv=55296,uv=57343;function cu(n){const e=n.charCodeAt(0);return e>=cv&&e<=uv}function ds(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}function ng(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu="__name__";class kt{constructor(e,t,r){t===void 0?t=0:t>e.length&&z(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&z(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return kt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof kt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=kt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return J(e.length,t.length)}static compareSegments(e,t){const r=kt.isNumericId(e),s=kt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?kt.extractNumericId(e).compare(kt.extractNumericId(t)):Ou(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Nn.fromString(e.substring(4,e.length-2))}}class ee extends kt{construct(e,t,r){return new ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ee(t)}static emptyPath(){return new ee([])}}const lv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends kt{construct(e,t,r){return new ge(e,t,r)}static isValidIdentifier(e){return lv.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xu}static keyField(){return new ge([xu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ee.fromString(e))}static fromName(e){return new U(ee.fromString(e).popFirst(5))}static empty(){return new U(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ee(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n,e,t){if(!t)throw new O(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function rg(n,e,t,r){if(e===!0&&r===!0)throw new O(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function gf(n){if(!U.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _f(n){if(U.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function sg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function tc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z(12329,{type:typeof n})}function te(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=tc(n);throw new O(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function ig(n,e){if(e<=0)throw new O(C.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(n,e){const t={typeString:n};return e&&(t.value=e),t}function Nr(n,e){if(!sg(n))throw new O(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new O(C.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=-62135596800,If=1e6;class oe{static now(){return oe.fromMillis(Date.now())}static fromDate(e){return oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*If);return new oe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<yf)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/If}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Nr(e,oe._jsonSchema))return new oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}oe._jsonSchemaVersion="firestore/timestamp/1.0",oe._jsonSchema={type:ke("string",oe._jsonSchemaVersion),seconds:ke("number"),nanoseconds:ke("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{static fromTimestamp(e){return new K(e)}static min(){return new K(new oe(0,0))}static max(){return new K(new oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=-1;class ps{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function Lu(n){return n.fields.find((e=>e.kind===2))}function ar(n){return n.fields.filter((e=>e.kind!==2))}function hv(n,e){let t=J(n.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let r=0;r<Math.min(n.fields.length,e.fields.length);++r)if(t=dv(n.fields[r],e.fields[r]),t!==0)return t;return J(n.fields.length,e.fields.length)}ps.UNKNOWN_ID=-1;class _r{constructor(e,t){this.fieldPath=e,this.kind=t}}function dv(n,e){const t=ge.comparator(n.fieldPath,e.fieldPath);return t!==0?t:J(n.kind,e.kind)}class ms{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ms(0,mt.min())}}function og(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(r===1e9?new oe(t+1,0):new oe(t,r));return new mt(s,U.empty(),e)}function ag(n){return new mt(n.readTime,n.key,fs)}class mt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new mt(K.min(),U.empty(),fs)}static max(){return new mt(K.max(),U.empty(),fs)}}function Al(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ug{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==cg)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):R.reject(t)}static resolve(e){return new R(((t,r)=>{t(e)}))}static reject(e){return new R(((t,r)=>{r(e)}))}static waitFor(e){return new R(((t,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&t()}),(u=>r(u)))})),o=!0,i===s&&t()}))}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next((s=>s?R.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new R(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let u=0;u<i;u++){const l=u;t(e[l]).next((d=>{o[l]=d,++c,c===i&&r(o)}),(d=>s(d)))}}))}static doWhile(e,t){return new R(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="SimpleDb";class nc{static open(e,t,r,s){try{return new nc(t,e.transaction(s,r))}catch(i){throw new xi(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new ze,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new xi(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const s=vl(r.target.error);this.S.reject(new xi(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(x(ft,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new pv(t)}}class Ft{static delete(e){return x(ft,"Removing database:",e),ur(Om().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!qm())return!1;if(Ft.F())return!0;const e=xe(),t=Ft.M(e),r=0<t&&t<10,s=lg(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.N=r,this.B=null,Ft.M(xe())===12.2&&Se("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(x(ft,"Opening database:",this.name),this.db=await new Promise(((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new xi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new O(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new O(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new xi(e,o))},s.onupgradeneeded=i=>{x(ft,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,s.transaction,i.oldVersion,this.version).next((()=>{x(ft,"Database upgrade to version "+this.version+" complete")}))}}))),this.K&&(this.db.onversionchange=t=>this.K(t)),this.db}q(e){this.K=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const c=nc.open(this.db,e,i?"readonly":"readwrite",r),u=s(c).next((l=>(c.C(),l))).catch((l=>(c.abort(l),R.reject(l)))).toPromise();return u.catch((()=>{})),await c.D,u}catch(c){const u=c,l=u.name!=="FirebaseError"&&o<3;if(x(ft,"Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function lg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class fv{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return ur(this.U.delete())}}class xi extends O{constructor(e,t){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function $n(n){return n.name==="IndexedDbTransactionError"}class pv{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(x(ft,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(x(ft,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ur(r)}add(e){return x(ft,"ADD",this.store.name,e,e),ur(this.store.add(e))}get(e){return ur(this.store.get(e)).next((t=>(t===void 0&&(t=null),x(ft,"GET",this.store.name,e,t),t)))}delete(e){return x(ft,"DELETE",this.store.name,e),ur(this.store.delete(e))}count(){return x(ft,"COUNT",this.store.name),ur(this.store.count())}J(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new R(((o,c)=>{i.onerror=u=>{c(u.target.error)},i.onsuccess=u=>{o(u.target.result)}}))}{const i=this.cursor(r),o=[];return this.H(i,((c,u)=>{o.push(u)})).next((()=>o))}}Z(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new R(((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}}))}X(e,t){x(ft,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const s=this.cursor(r);return this.H(s,((i,o,c)=>c.delete()))}ee(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.H(s,t)}te(e){const t=this.cursor({});return new R(((r,s)=>{t.onerror=i=>{const o=vl(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next((c=>{c?o.continue():r()})):r()}}))}H(e,t){const r=[];return new R(((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const u=new fv(c),l=t(c.primaryKey,c.value,u);if(l instanceof R){const d=l.catch((p=>(u.done(),R.reject(p))));r.push(d)}u.isDone?s():u.G===null?c.continue():c.continue(u.G)}})).next((()=>R.waitFor(r)))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ur(n){return new R(((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=vl(r.target.error);t(s)}}))}let Ef=!1;function vl(n){const e=Ft.M(xe());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ef||(Ef=!0,setTimeout((()=>{throw r}),0)),r}}return n}const Li="IndexBackfiller";class mv{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){x(Li,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();x(Li,`Documents written: ${t}`)}catch(t){$n(t)?x(Li,"Ignoring IndexedDB error during index backfill: ",t):await zn(t)}await this.re(6e4)}))}}class gv{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const r=new Set;let s=t,i=!0;return R.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!r.has(o))return x(Li,`Processing collection: ${o}`),this.oe(e,o,s).next((c=>{s-=c,r.add(o)}));i=!1})))).next((()=>t-s))}oe(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next((i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this._e(s,i))).next((c=>(x(Li,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c)))).next((()=>o.size))}))))}_e(e,t){let r=e;return t.changes.forEach(((s,i)=>{const o=ag(i);Al(o,r)>0&&(r=o)})),new mt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}st.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=-1;function Eo(n){return n==null}function Yi(n){return n===0&&1/n==-1/0}function hg(n){return typeof n=="number"&&Number.isInteger(n)&&!Yi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="";function Ze(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Tf(e)),e=_v(n.get(t),e);return Tf(e)}function _v(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Ca:t+="";break;default:t+=i}}return t}function Tf(n){return n+Ca+""}function Ot(n){const e=n.length;if($(e>=2,64408,{path:n}),e===2)return $(n.charAt(0)===Ca&&n.charAt(1)==="",56145,{path:n}),ee.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf(Ca,i);switch((o<0||o>t)&&z(50515,{path:n}),n.charAt(o+1)){case"":const c=n.substring(i,o);let u;s.length===0?u=c:(s+=c,u=s,s=""),r.push(u);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:z(61167,{path:n})}i=o+2}return new ee(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="remoteDocuments",To="owner",Kr="owner",Xi="mutationQueues",yv="userId",Tt="mutations",wf="batchId",pr="userMutationsIndex",Af=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(n,e){return[n,Ze(e)]}function dg(n,e,t){return[n,Ze(e),t]}const Iv={},gs="documentMutations",Da="remoteDocumentsV14",Ev=["prefixPath","collectionGroup","readTime","documentId"],ha="documentKeyIndex",Tv=["prefixPath","collectionGroup","documentId"],fg="collectionGroupIndex",wv=["collectionGroup","readTime","prefixPath","documentId"],Zi="remoteDocumentGlobal",Mu="remoteDocumentGlobalKey",_s="targets",pg="queryTargetsIndex",Av=["canonicalId","targetId"],ys="targetDocuments",vv=["targetId","path"],Rl="documentTargetsIndex",Rv=["path","targetId"],Na="targetGlobalKey",yr="targetGlobal",eo="collectionParents",bv=["collectionId","parent"],Is="clientMetadata",Sv="clientId",rc="bundles",Pv="bundleId",sc="namedQueries",Cv="name",bl="indexConfiguration",Dv="indexId",Fu="collectionGroupIndex",Nv="collectionGroup",Mi="indexState",kv=["indexId","uid"],mg="sequenceNumberIndex",Vv=["uid","sequenceNumber"],Fi="indexEntries",Ov=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],gg="documentKeyIndex",xv=["indexId","uid","orderedDocumentKey"],ic="documentOverlays",Lv=["userId","collectionPath","documentId"],Uu="collectionPathOverlayIndex",Mv=["userId","collectionPath","largestBatchId"],_g="collectionGroupOverlayIndex",Fv=["userId","collectionGroup","largestBatchId"],Sl="globals",Uv="name",yg=[Xi,Tt,gs,cr,_s,To,yr,ys,Is,Zi,eo,rc,sc],Bv=[...yg,ic],Ig=[Xi,Tt,gs,Da,_s,To,yr,ys,Is,Zi,eo,rc,sc,ic],Eg=Ig,Pl=[...Eg,bl,Mi,Fi],qv=Pl,Tg=[...Pl,Sl],jv=Tg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends ug{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Me(n,e){const t=B(n);return Ft.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function wg(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function Ag(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){this.comparator=e,this.root=t||He.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yo(this.root,e,this.comparator,!0)}}class Yo{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??He.RED,this.left=s??He.EMPTY,this.right=i??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new He(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw z(27949);return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new He(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Rf(this.data.getIterator())}getIteratorFrom(e){return new Rf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ue(this.comparator);return t.data=e,t}}class Rf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Wr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new it([])}unionWith(e){let t=new ue(ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new it(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new vg("Invalid base64 string: "+i):i}})(e);return new ve(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const $v=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zt(n){if($(!!n,39018),typeof n=="string"){let e=0;const t=$v.exec(n);if($(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ee(n.seconds),nanos:Ee(n.nanos)}}function Ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function en(n){return typeof n=="string"?ve.fromBase64String(n):ve.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="server_timestamp",bg="__type__",Sg="__previous_value__",Pg="__local_write_time__";function oc(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[bg])==null?void 0:r.stringValue)===Rg}function ac(n){const e=n.mapValue.fields[Sg];return oc(e)?ac(e):e}function to(n){const e=Zt(n.mapValue.fields[Pg].timestampValue);return new oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,t,r,s,i,o,c,u,l,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=l,this.isUsingEmulator=d,this.apiKey=p}}const no="(default)";class Ln{constructor(e,t){this.projectId=e,this.database=t||no}static empty(){return new Ln("","")}get isDefaultDatabase(){return this.database===no}isEqual(e){return e instanceof Ln&&e.projectId===this.projectId&&e.database===this.database}}function Hv(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ln(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="__type__",Cg="__max__",bn={mapValue:{fields:{__type__:{stringValue:Cg}}}},Dl="__vector__",Es="value",da={nullValue:"NULL_VALUE"};function Mn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?oc(n)?4:Dg(n)?9007199254740991:cc(n)?10:11:z(28295,{value:n})}function Bt(n,e){if(n===e)return!0;const t=Mn(n);if(t!==Mn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return to(n).isEqual(to(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Zt(s.timestampValue),c=Zt(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return en(s.bytesValue).isEqual(en(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ee(s.geoPointValue.latitude)===Ee(i.geoPointValue.latitude)&&Ee(s.geoPointValue.longitude)===Ee(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ee(s.integerValue)===Ee(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ee(s.doubleValue),c=Ee(i.doubleValue);return o===c?Yi(o)===Yi(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return ds(n.arrayValue.values||[],e.arrayValue.values||[],Bt);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(vf(o)!==vf(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!Bt(o[u],c[u])))return!1;return!0})(n,e);default:return z(52216,{left:n})}}function ro(n,e){return(n.values||[]).find((t=>Bt(t,e)))!==void 0}function Fn(n,e){if(n===e)return 0;const t=Mn(n),r=Mn(e);if(t!==r)return J(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=Ee(i.integerValue||i.doubleValue),u=Ee(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return bf(n.timestampValue,e.timestampValue);case 4:return bf(to(n),to(e));case 5:return Ou(n.stringValue,e.stringValue);case 6:return(function(i,o){const c=en(i),u=en(o);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),u=o.split("/");for(let l=0;l<c.length&&l<u.length;l++){const d=J(c[l],u[l]);if(d!==0)return d}return J(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=J(Ee(i.latitude),Ee(o.latitude));return c!==0?c:J(Ee(i.longitude),Ee(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Sf(n.arrayValue,e.arrayValue);case 10:return(function(i,o){var m,y,N,k;const c=i.fields||{},u=o.fields||{},l=(m=c[Es])==null?void 0:m.arrayValue,d=(y=u[Es])==null?void 0:y.arrayValue,p=J(((N=l==null?void 0:l.values)==null?void 0:N.length)||0,((k=d==null?void 0:d.values)==null?void 0:k.length)||0);return p!==0?p:Sf(l,d)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===bn.mapValue&&o===bn.mapValue)return 0;if(i===bn.mapValue)return 1;if(o===bn.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),l=o.fields||{},d=Object.keys(l);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=Ou(u[p],d[p]);if(m!==0)return m;const y=Fn(c[u[p]],l[d[p]]);if(y!==0)return y}return J(u.length,d.length)})(n.mapValue,e.mapValue);default:throw z(23264,{he:t})}}function bf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=Zt(n),r=Zt(e),s=J(t.seconds,r.seconds);return s!==0?s:J(t.nanos,r.nanos)}function Sf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Fn(t[s],r[s]);if(i)return i}return J(t.length,r.length)}function Ts(n){return qu(n)}function qu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Zt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return en(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return U.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=qu(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${qu(t.fields[o])}`;return s+"}"})(n.mapValue):z(61005,{value:n})}function fa(n){switch(Mn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ac(n);return e?16+fa(e):16;case 5:return 2*n.stringValue.length;case 6:return en(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+fa(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Gn(r.fields,((i,o)=>{s+=i.length+fa(o)})),s})(n.mapValue);default:throw z(13486,{value:n})}}function vr(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ju(n){return!!n&&"integerValue"in n}function so(n){return!!n&&"arrayValue"in n}function Pf(n){return!!n&&"nullValue"in n}function Cf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function pa(n){return!!n&&"mapValue"in n}function cc(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Cl])==null?void 0:r.stringValue)===Dl}function Ui(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Gn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Ui(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ui(n.arrayValue.values[t]);return e}return{...n}}function Dg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Cg}const Ng={mapValue:{fields:{[Cl]:{stringValue:Dl},[Es]:{arrayValue:{}}}}};function Kv(n){return"nullValue"in n?da:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?vr(Ln.empty(),U.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?cc(n)?Ng:{mapValue:{}}:z(35942,{value:n})}function Wv(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?vr(Ln.empty(),U.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Ng:"mapValue"in n?cc(n)?{mapValue:{}}:bn:z(61959,{value:n})}function Df(n,e){const t=Fn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Nf(n,e){const t=Fn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.value=e}static empty(){return new je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!pa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ui(t)}setAll(e){let t=ge.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Ui(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());pa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Bt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];pa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Gn(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new je(Ui(this.value))}}function kg(n){const e=[];return Gn(n.fields,((t,r)=>{const s=new ge([t]);if(pa(r)){const i=kg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new it(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new me(e,0,K.min(),K.min(),K.min(),je.empty(),0)}static newFoundDocument(e,t,r,s){return new me(e,1,t,K.min(),r,s,0)}static newNoDocument(e,t){return new me(e,2,t,K.min(),K.min(),je.empty(),0)}static newUnknownDocument(e,t){return new me(e,3,t,K.min(),K.min(),je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t){this.position=e,this.inclusive=t}}function kf(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=U.comparator(U.fromName(o.referenceValue),t.key):r=Fn(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Bt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t="asc"){this.field=e,this.dir=t}}function Qv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{}class re extends Vg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Jv(e,t,r):t==="array-contains"?new Zv(e,r):t==="in"?new Ug(e,r):t==="not-in"?new eR(e,r):t==="array-contains-any"?new tR(e,r):new re(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Yv(e,r):new Xv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Fn(t,this.value)):t!==null&&Mn(this.value)===Mn(t)&&this.matchesComparison(Fn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ae extends Vg{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ae(e,t)}matches(e){return ws(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ws(n){return n.op==="and"}function zu(n){return n.op==="or"}function Nl(n){return Og(n)&&ws(n)}function Og(n){for(const e of n.filters)if(e instanceof ae)return!1;return!0}function $u(n){if(n instanceof re)return n.field.canonicalString()+n.op.toString()+Ts(n.value);if(Nl(n))return n.filters.map((e=>$u(e))).join(",");{const e=n.filters.map((t=>$u(t))).join(",");return`${n.op}(${e})`}}function xg(n,e){return n instanceof re?(function(r,s){return s instanceof re&&r.op===s.op&&r.field.isEqual(s.field)&&Bt(r.value,s.value)})(n,e):n instanceof ae?(function(r,s){return s instanceof ae&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&xg(o,s.filters[c])),!0):!1})(n,e):void z(19439)}function Lg(n,e){const t=n.filters.concat(e);return ae.create(t,n.op)}function Mg(n){return n instanceof re?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ts(t.value)}`})(n):n instanceof ae?(function(t){return t.op.toString()+" {"+t.getFilters().map(Mg).join(" ,")+"}"})(n):"Filter"}class Jv extends re{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class Yv extends re{constructor(e,t){super(e,"in",t),this.keys=Fg("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Xv extends re{constructor(e,t){super(e,"not-in",t),this.keys=Fg("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Fg(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>U.fromName(r.referenceValue)))}class Zv extends re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return so(t)&&ro(t.arrayValue,this.value)}}class Ug extends re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ro(this.value.arrayValue,t)}}class eR extends re{constructor(e,t){super(e,"not-in",t)}matches(e){if(ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ro(this.value.arrayValue,t)}}class tR extends re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!so(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ro(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Gu(n,e=null,t=[],r=[],s=null,i=null,o=null){return new nR(n,e,t,r,s,i,o)}function Rr(n){const e=B(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>$u(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Eo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Ts(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Ts(r))).join(",")),e.Te=t}return e.Te}function wo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Qv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!xg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Vf(n.startAt,e.startAt)&&Vf(n.endAt,e.endAt)}function ka(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Va(n,e){return n.filters.filter((t=>t instanceof re&&t.field.isEqual(e)))}function Of(n,e,t){let r=da,s=!0;for(const i of Va(n,e)){let o=da,c=!0;switch(i.op){case"<":case"<=":o=Kv(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=da}Df({value:r,inclusive:s},{value:o,inclusive:c})<0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Df({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function xf(n,e,t){let r=bn,s=!0;for(const i of Va(n,e)){let o=bn,c=!0;switch(i.op){case">=":case">":o=Wv(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=bn}Nf({value:r,inclusive:s},{value:o,inclusive:c})>0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Nf({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Bg(n,e,t,r,s,i,o,c){return new an(n,e,t,r,s,i,o,c)}function Bs(n){return new an(n)}function Lf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function rR(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function kl(n){return n.collectionGroup!==null}function rs(n){const e=B(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ue(ge.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((l=>{l.isInequality()&&(c=c.add(l.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new io(i,r))})),t.has(ge.keyField().canonicalString())||e.Ie.push(new io(ge.keyField(),r))}return e.Ie}function et(n){const e=B(n);return e.Ee||(e.Ee=jg(e,rs(n))),e.Ee}function qg(n){const e=B(n);return e.Re||(e.Re=jg(e,n.explicitOrderBy)),e.Re}function jg(n,e){if(n.limitType==="F")return Gu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new io(s.field,i)}));const t=n.endAt?new Un(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Un(n.startAt.position,n.startAt.inclusive):null;return Gu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Hu(n,e){const t=n.filters.concat([e]);return new an(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function sR(n,e){const t=n.explicitOrderBy.concat([e]);return new an(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Oa(n,e,t){return new an(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function iR(n,e){return new an(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,e,n.endAt)}function oR(n,e){return new an(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,n.startAt,e)}function Ao(n,e){return wo(et(n),et(e))&&n.limitType===e.limitType}function zg(n){return`${Rr(et(n))}|lt:${n.limitType}`}function es(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Mg(s))).join(", ")}]`),Eo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Ts(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Ts(s))).join(",")),`Target(${r})`})(et(n))}; limitType=${n.limitType})`}function vo(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):U.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of rs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,u){const l=kf(o,c,u);return o.inclusive?l<=0:l<0})(r.startAt,rs(r),s)||r.endAt&&!(function(o,c,u){const l=kf(o,c,u);return o.inclusive?l>=0:l>0})(r.endAt,rs(r),s))})(n,e)}function $g(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Gg(n){return(e,t)=>{let r=!1;for(const s of rs(n)){const i=aR(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function aR(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):(function(i,o,c){const u=o.data.field(i),l=c.data.field(i);return u!==null&&l!==null?Fn(u,l):z(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gn(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Ag(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=new de(U.comparator);function ot(){return cR}const Hg=new de(U.comparator);function Ni(...n){let e=Hg;for(const t of n)e=e.insert(t.key,t);return e}function Kg(n){let e=Hg;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function xt(){return Bi()}function Wg(){return Bi()}function Bi(){return new cn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const uR=new de(U.comparator),lR=new ue(U.comparator);function X(...n){let e=lR;for(const t of n)e=e.add(t);return e}const hR=new ue(J);function Vl(){return hR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yi(e)?"-0":e}}function Qg(n){return{integerValue:""+n}}function Jg(n,e){return hg(e)?Qg(e):Ol(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this._=void 0}}function dR(n,e,t){return n instanceof As?(function(s,i){const o={fields:{[bg]:{stringValue:Rg},[Pg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&oc(i)&&(i=ac(i)),i&&(o.fields[Sg]=i),{mapValue:o}})(t,e):n instanceof br?Xg(n,e):n instanceof Sr?Zg(n,e):(function(s,i){const o=Yg(s,i),c=Mf(o)+Mf(s.Ae);return ju(o)&&ju(s.Ae)?Qg(c):Ol(s.serializer,c)})(n,e)}function fR(n,e,t){return n instanceof br?Xg(n,e):n instanceof Sr?Zg(n,e):t}function Yg(n,e){return n instanceof vs?(function(r){return ju(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class As extends uc{}class br extends uc{constructor(e){super(),this.elements=e}}function Xg(n,e){const t=e_(e);for(const r of n.elements)t.some((s=>Bt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Sr extends uc{constructor(e){super(),this.elements=e}}function Zg(n,e){let t=e_(e);for(const r of n.elements)t=t.filter((s=>!Bt(s,r)));return{arrayValue:{values:t}}}class vs extends uc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Mf(n){return Ee(n.integerValue||n.doubleValue)}function e_(n){return so(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t){this.field=e,this.transform=t}}function pR(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof br&&s instanceof br||r instanceof Sr&&s instanceof Sr?ds(r.elements,s.elements,Bt):r instanceof vs&&s instanceof vs?Bt(r.Ae,s.Ae):r instanceof As&&s instanceof As})(n.transform,e.transform)}class mR{constructor(e,t){this.version=e,this.transformResults=t}}class Te{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Te}static exists(e){return new Te(void 0,e)}static updateTime(e){return new Te(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ma(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class lc{}function t_(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new js(n.key,Te.none()):new qs(n.key,n.data,Te.none());{const t=n.data,r=je.empty();let s=new ue(ge.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new un(n.key,r,new it(s.toArray()),Te.none())}}function gR(n,e,t){n instanceof qs?(function(s,i,o){const c=s.value.clone(),u=Uf(s.fieldTransforms,i,o.transformResults);c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof un?(function(s,i,o){if(!ma(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Uf(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(n_(s)),u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function qi(n,e,t,r){return n instanceof qs?(function(i,o,c,u){if(!ma(i.precondition,o))return c;const l=i.value.clone(),d=Bf(i.fieldTransforms,u,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null})(n,e,t,r):n instanceof un?(function(i,o,c,u){if(!ma(i.precondition,o))return c;const l=Bf(i.fieldTransforms,u,o),d=o.data;return d.setAll(n_(i)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,o,c){return ma(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function _R(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Yg(r.transform,s||null);i!=null&&(t===null&&(t=je.empty()),t.set(r.field,i))}return t||null}function Ff(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ds(r,s,((i,o)=>pR(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class qs extends lc{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class un extends lc{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function n_(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Uf(n,e,t){const r=new Map;$(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,fR(o,c,t[s]))}return r}function Bf(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,dR(i,o,e))}return r}class js extends lc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xl extends lc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&gR(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=qi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=qi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Wg();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const u=t_(o,c);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(K.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),X())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,((t,r)=>Ff(t,r)))&&ds(this.baseMutations,e.baseMutations,((t,r)=>Ff(t,r)))}}class Ml{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){$(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return uR})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ml(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,se;function s_(n){switch(n){case C.OK:return z(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return z(15467,{code:n})}}function i_(n){if(n===void 0)return Se("GRPC error has no .code"),C.UNKNOWN;switch(n){case De.OK:return C.OK;case De.CANCELLED:return C.CANCELLED;case De.UNKNOWN:return C.UNKNOWN;case De.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case De.INTERNAL:return C.INTERNAL;case De.UNAVAILABLE:return C.UNAVAILABLE;case De.UNAUTHENTICATED:return C.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case De.NOT_FOUND:return C.NOT_FOUND;case De.ALREADY_EXISTS:return C.ALREADY_EXISTS;case De.PERMISSION_DENIED:return C.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case De.ABORTED:return C.ABORTED;case De.OUT_OF_RANGE:return C.OUT_OF_RANGE;case De.UNIMPLEMENTED:return C.UNIMPLEMENTED;case De.DATA_LOSS:return C.DATA_LOSS;default:return z(39323,{code:n})}}(se=De||(De={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji=null;function IR(n){if(ji)throw new Error("a TestingHooksSpi instance is already set");ji=n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=new Nn([4294967295,4294967295],0);function qf(n){const e=o_().encode(n),t=new Km;return t.update(e),new Uint8Array(t.digest())}function jf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Nn([t,r],0),new Nn([s,i],0)]}class Ul{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ki(`Invalid padding: ${t}`);if(r<0)throw new ki(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ki(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ki(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Nn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Nn.fromNumber(r)));return s.compare(ER)===1&&(s=new Nn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=qf(e),[r,s]=jf(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ul(i,s,t);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=qf(e),[r,s]=jf(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,bo.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new zs(K.min(),s,new de(J),ot(),X())}}class bo{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new bo(r,t,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class a_{constructor(e,t){this.targetId=e,this.Ce=t}}class c_{constructor(e,t,r=ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class zf{constructor(){this.ve=0,this.Fe=$f(),this.Me=ve.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=X(),t=X(),r=X();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:z(38017,{changeType:i})}})),new bo(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=$f()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,$(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class TR{constructor(e){this.Ge=e,this.ze=new Map,this.je=ot(),this.Je=Xo(),this.He=Xo(),this.Ze=new de(J)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:z(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(ka(i))if(r===0){const o=new U(i.path);this.et(t,o,me.newNoDocument(o,K.min()))}else $(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const c=this.ut(e),u=c?this.ct(c,e,o):1;if(u!==0){this.it(t);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,l)}ji==null||ji.o((function(d,p,m,y,N){var D,L,M;const k={localCacheCount:d,existenceFilterCount:p.count,databaseId:m.database,projectId:m.projectId},b=p.unchangedNames;return b&&(k.bloomFilter={applied:N===0,hashCount:(b==null?void 0:b.hashCount)??0,bitmapLength:((L=(D=b==null?void 0:b.bits)==null?void 0:D.bitmap)==null?void 0:L.length)??0,padding:((M=b==null?void 0:b.bits)==null?void 0:M.padding)??0,mightContain:G=>(y==null?void 0:y.mightContain(G))??!1}),k})(o,e.Ce,this.Ge.ht(),c,u))}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=en(r).toUint8Array()}catch(u){if(u instanceof vg)return lt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ul(o,s,i)}catch(u){return lt(u instanceof ki?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&ka(c.target)){const u=new U(c.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,me.newNoDocument(u,e))}i.Be&&(t.set(o,i.ke()),i.Ke())}}));let r=X();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((u=>{const l=this.ot(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new zs(e,t,this.Ze,this.je,r);return this.je=ot(),this.Je=Xo(),this.He=Xo(),this.Ze=new de(J),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new zf,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new ue(J),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new ue(J),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new zf),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Xo(){return new de(U.comparator)}function $f(){return new de(U.comparator)}const wR={asc:"ASCENDING",desc:"DESCENDING"},AR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vR={and:"AND",or:"OR"};class RR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ku(n,e){return n.useProto3Json||Eo(e)?e:{value:e}}function Rs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function u_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function bR(n,e){return Rs(n,e.toTimestamp())}function Pe(n){return $(!!n,49232),K.fromTimestamp((function(t){const r=Zt(t);return new oe(r.seconds,r.nanos)})(n))}function Bl(n,e){return Wu(n,e).canonicalString()}function Wu(n,e){const t=(function(s){return new ee(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function l_(n){const e=ee.fromString(n);return $(I_(e),10190,{key:e.toString()}),e}function oo(n,e){return Bl(n.databaseId,e.path)}function Ut(n,e){const t=l_(e);if(t.get(1)!==n.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(f_(t))}function h_(n,e){return Bl(n.databaseId,e)}function d_(n){const e=l_(n);return e.length===4?ee.emptyPath():f_(e)}function Qu(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function f_(n){return $(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Gf(n,e,t){return{name:oo(n,e),fields:t.value.mapValue.fields}}function hc(n,e,t){const r=Ut(n,e.name),s=Pe(e.updateTime),i=e.createTime?Pe(e.createTime):K.min(),o=new je({mapValue:{fields:e.fields}}),c=me.newFoundDocument(r,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function SR(n,e){return"found"in e?(function(r,s){$(!!s.found,43571),s.found.name,s.found.updateTime;const i=Ut(r,s.found.name),o=Pe(s.found.updateTime),c=s.found.createTime?Pe(s.found.createTime):K.min(),u=new je({mapValue:{fields:s.found.fields}});return me.newFoundDocument(i,o,c,u)})(n,e):"missing"in e?(function(r,s){$(!!s.missing,3894),$(!!s.readTime,22933);const i=Ut(r,s.missing),o=Pe(s.readTime);return me.newNoDocument(i,o)})(n,e):z(7234,{result:e})}function PR(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:z(39313,{state:l})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(l,d){return l.useProto3Json?($(d===void 0||typeof d=="string",58123),ve.fromBase64String(d||"")):($(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ve.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(l){const d=l.code===void 0?C.UNKNOWN:i_(l.code);return new O(d,l.message||"")})(o);t=new c_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ut(n,r.document.name),i=Pe(r.document.updateTime),o=r.document.createTime?Pe(r.document.createTime):K.min(),c=new je({mapValue:{fields:r.document.fields}}),u=me.newFoundDocument(s,i,o,c),l=r.targetIds||[],d=r.removedTargetIds||[];t=new ga(l,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ut(n,r.document),i=r.readTime?Pe(r.readTime):K.min(),o=me.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ga([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ut(n,r.document),i=r.removedTargetIds||[];t=new ga([],i,s,null)}else{if(!("filter"in e))return z(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new yR(s,i),c=r.targetId;t=new a_(c,o)}}return t}function ao(n,e){let t;if(e instanceof qs)t={update:Gf(n,e.key,e.value)};else if(e instanceof js)t={delete:oo(n,e.key)};else if(e instanceof un)t={update:Gf(n,e.key,e.data),updateMask:OR(e.fieldMask)};else{if(!(e instanceof xl))return z(16599,{dt:e.type});t={verify:oo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof As)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof br)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Sr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof vs)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw z(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:bR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z(27497)})(n,e.precondition)),t}function Ju(n,e){const t=e.currentDocument?(function(i){return i.updateTime!==void 0?Te.updateTime(Pe(i.updateTime)):i.exists!==void 0?Te.exists(i.exists):Te.none()})(e.currentDocument):Te.none(),r=e.updateTransforms?e.updateTransforms.map((s=>(function(o,c){let u=null;if("setToServerValue"in c)$(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new As;else if("appendMissingElements"in c){const d=c.appendMissingElements.values||[];u=new br(d)}else if("removeAllFromArray"in c){const d=c.removeAllFromArray.values||[];u=new Sr(d)}else"increment"in c?u=new vs(o,c.increment):z(16584,{proto:c});const l=ge.fromServerFormat(c.fieldPath);return new Ro(l,u)})(n,s))):[];if(e.update){e.update.name;const s=Ut(n,e.update.name),i=new je({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(u){const l=u.fieldPaths||[];return new it(l.map((d=>ge.fromServerFormat(d))))})(e.updateMask);return new un(s,i,o,t,r)}return new qs(s,i,t,r)}if(e.delete){const s=Ut(n,e.delete);return new js(s,t)}if(e.verify){const s=Ut(n,e.verify);return new xl(s,t)}return z(1463,{proto:e})}function CR(n,e){return n&&n.length>0?($(e!==void 0,14353),n.map((t=>(function(s,i){let o=s.updateTime?Pe(s.updateTime):Pe(i);return o.isEqual(K.min())&&(o=Pe(i)),new mR(o,s.transformResults||[])})(t,e)))):[]}function p_(n,e){return{documents:[h_(n,e.path)]}}function dc(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=h_(n,s);const i=(function(l){if(l.length!==0)return y_(ae.create(l,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(l){if(l.length!==0)return l.map((d=>(function(m){return{field:vn(m.field),direction:NR(m.dir)}})(d)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Ku(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(l){return{before:l.inclusive,values:l.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(l){return{before:!l.inclusive,values:l.position}})(e.endAt)),{ft:t,parent:s}}function m_(n,e,t,r){const{ft:s,parent:i}=dc(n,e),o={},c=[];let u=0;return t.forEach((l=>{const d=r?l.alias:"aggregate_"+u++;o[d]=l.alias,l.aggregateType==="count"?c.push({alias:d,count:{}}):l.aggregateType==="avg"?c.push({alias:d,avg:{field:vn(l.fieldPath)}}):l.aggregateType==="sum"&&c.push({alias:d,sum:{field:vn(l.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:s.structuredQuery},parent:s.parent},gt:o,parent:i}}function g_(n){let e=d_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){$(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(p){const m=__(p);return m instanceof ae&&Nl(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((m=>(function(N){return new io(ts(N.field),(function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(m)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,Eo(m)?null:m})(t.limit));let u=null;t.startAt&&(u=(function(p){const m=!!p.before,y=p.values||[];return new Un(y,m)})(t.startAt));let l=null;return t.endAt&&(l=(function(p){const m=!p.before,y=p.values||[];return new Un(y,m)})(t.endAt)),Bg(e,s,o,i,c,"F",u,l)}function DR(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function __(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ts(t.unaryFilter.field);return re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ts(t.unaryFilter.field);return re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ts(t.unaryFilter.field);return re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ts(t.unaryFilter.field);return re.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return z(61313);default:return z(60726)}})(n):n.fieldFilter!==void 0?(function(t){return re.create(ts(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return z(58110);default:return z(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ae.create(t.compositeFilter.filters.map((r=>__(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z(1026)}})(t.compositeFilter.op))})(n):z(30097,{filter:n})}function NR(n){return wR[n]}function kR(n){return AR[n]}function VR(n){return vR[n]}function vn(n){return{fieldPath:n.canonicalString()}}function ts(n){return ge.fromServerFormat(n.fieldPath)}function y_(n){return n instanceof re?(function(t){if(t.op==="=="){if(Cf(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NAN"}};if(Pf(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Cf(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NOT_NAN"}};if(Pf(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vn(t.field),op:kR(t.op),value:t.value}}})(n):n instanceof ae?(function(t){const r=t.getFilters().map((s=>y_(s)));return r.length===1?r[0]:{compositeFilter:{op:VR(t.op),filters:r}}})(n):z(54877,{filter:n})}function OR(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function I_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function E_(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t,r,s,i=K.min(),o=K.min(),c=ve.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Lt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.yt=e}}function xR(n,e){let t;if(e.document)t=hc(n.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=U.fromSegments(e.noDocument.path),s=Cr(e.noDocument.readTime);t=me.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return z(56709);{const r=U.fromSegments(e.unknownDocument.path),s=Cr(e.unknownDocument.version);t=me.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime((function(s){const i=new oe(s[0],s[1]);return K.fromTimestamp(i)})(e.readTime)),t}function Hf(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:xa(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=(function(i,o){return{name:oo(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Rs(i,o.version.toTimestamp()),createTime:Rs(i,o.createTime.toTimestamp())}})(n.yt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Pr(e.version)};else{if(!e.isUnknownDocument())return z(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:Pr(e.version)}}return r}function xa(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Pr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Cr(n){const e=new oe(n.seconds,n.nanoseconds);return K.fromTimestamp(e)}function lr(n,e){const t=(e.baseMutations||[]).map((i=>Ju(n.yt,i)));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map((i=>Ju(n.yt,i))),s=oe.fromMillis(e.localWriteTimeMs);return new Ll(e.batchId,s,t,r)}function Vi(n){const e=Cr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Cr(n.lastLimboFreeSnapshotVersion):K.min();let r;return r=(function(i){return i.documents!==void 0})(n.query)?(function(i){const o=i.documents.length;return $(o===1,1966,{count:o}),et(Bs(d_(i.documents[0])))})(n.query):(function(i){return et(g_(i))})(n.query),new Lt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,ve.fromBase64String(n.resumeToken))}function w_(n,e){const t=Pr(e.snapshotVersion),r=Pr(e.lastLimboFreeSnapshotVersion);let s;s=ka(e.target)?p_(n.yt,e.target):dc(n.yt,e.target).ft;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Rr(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function fc(n){const e=g_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Oa(e,e.limit,"L"):e}function uu(n,e){return new Fl(e.largestBatchId,Ju(n.yt,e.overlayMutation))}function Kf(n,e){const t=e.path.lastSegment();return[n,Ze(e.path.popLast()),t]}function Wf(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Pr(r.readTime),documentKey:Ze(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{getBundleMetadata(e,t){return Qf(e).get(t).next((r=>{if(r)return(function(i){return{id:i.bundleId,createTime:Cr(i.createTime),version:i.version}})(r)}))}saveBundleMetadata(e,t){return Qf(e).put((function(s){return{bundleId:s.id,createTime:Pr(Pe(s.createTime)),version:s.version}})(t))}getNamedQuery(e,t){return Jf(e).get(t).next((r=>{if(r)return(function(i){return{name:i.name,query:fc(i.bundledQuery),readTime:Cr(i.readTime)}})(r)}))}saveNamedQuery(e,t){return Jf(e).put((function(s){return{name:s.name,readTime:Pr(Pe(s.readTime)),bundledQuery:s.bundledQuery}})(t))}}function Qf(n){return Me(n,rc)}function Jf(n){return Me(n,sc)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const r=t.uid||"";return new pc(e,r)}getOverlay(e,t){return Ti(e).get(Kf(this.userId,t)).next((r=>r?uu(this.serializer,r):null))}getOverlays(e,t){const r=xt();return R.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){const s=[];return r.forEach(((i,o)=>{const c=new Fl(t,o);s.push(this.St(e,c))})),R.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach((o=>s.add(Ze(o.getCollectionPath()))));const i=[];return s.forEach((o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Ti(e).X(Uu,c))})),R.waitFor(i)}getOverlaysForCollection(e,t,r){const s=xt(),i=Ze(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Ti(e).J(Uu,o).next((c=>{for(const u of c){const l=uu(this.serializer,u);s.set(l.getKey(),l)}return s}))}getOverlaysForCollectionGroup(e,t,r,s){const i=xt();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ti(e).ee({index:_g,range:c},((u,l,d)=>{const p=uu(this.serializer,l);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):d.done()})).next((()=>i))}St(e,t){return Ti(e).put((function(s,i,o){const[c,u,l]=Kf(i,o.mutation.key);return{userId:i,collectionPath:u,documentId:l,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ao(s.yt,o.mutation)}})(this.serializer,this.userId,t))}}function Ti(n){return Me(n,ic)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{bt(e){return Me(e,Sl)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const r=t==null?void 0:t.value;return r?ve.fromUint8Array(r):ve.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(Ee(e.integerValue));else if("doubleValue"in e){const r=Ee(e.doubleValue);isNaN(r)?this.Ft(t,13):(this.Ft(t,15),Yi(r)?t.Mt(0):t.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(t,20),typeof r=="string"&&(r=Zt(r)),t.xt(`${r.seconds||""}`),t.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(en(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(t,45),t.Mt(r.latitude||0),t.Mt(r.longitude||0)}else"mapValue"in e?Dg(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):cc(e)?this.kt(e.mapValue,t):(this.Kt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Nt(t)):z(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}Kt(e,t){const r=e.fields||{};this.Ft(t,55);for(const s of Object.keys(r))this.Ot(s,t),this.Ct(r[s],t)}kt(e,t){var o,c;const r=e.fields||{};this.Ft(t,53);const s=Es,i=((c=(o=r[s].arrayValue)==null?void 0:o.values)==null?void 0:c.length)||0;this.Ft(t,15),t.Mt(Ee(i)),this.Ot(s,t),this.Ct(r[s],t)}qt(e,t){const r=e.values||[];this.Ft(t,50);for(const s of r)this.Ct(s,t)}Lt(e,t){this.Ft(t,37),U.fromName(e).path.forEach((r=>{this.Ft(t,60),this.$t(r,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}hr.Wt=new hr;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=255;function FR(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function Yf(n){const e=64-(function(r){let s=0;for(let i=0;i<8;++i){const o=FR(255&r[i]);if(s+=o,o!==8)break}return s})(n);return Math.ceil(e/8)}class UR{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Gt(r.value),r=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Ht()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const s=t.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Yt(e){const t=this.en(e),r=Yf(t);this.tn(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}nn(e){const t=this.en(e),r=Yf(t);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}rn(){this.sn(Qr),this.sn(255)}_n(){this.an(Qr),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)})(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===Qr?(this.sn(Qr),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===Qr?(this.an(Qr),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class BR{constructor(e){this.cn=e}Bt(e){this.cn.Qt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.Yt(e)}vt(){this.cn.rn()}}class qR{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Xt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class wi{constructor(){this.cn=new UR,this.ascending=new BR(this.cn),this.descending=new qR(this.cn)}seed(e){this.cn.seed(e)}ln(e){return e===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,r,s){this.hn=e,this.Pn=t,this.Tn=r,this.In=s}En(){const e=this.In.length,t=e===0||this.In[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.In,0),t!==e?r.set([0],this.In.length):++r[r.length-1],new dr(this.hn,this.Pn,this.Tn,r)}Rn(e,t,r){return{indexId:this.hn,uid:e,arrayValue:_a(this.Tn),directionalValue:_a(this.In),orderedDocumentKey:_a(t),documentKey:r.path.toArray()}}An(e,t,r){const s=this.Rn(e,t,r);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function En(n,e){let t=n.hn-e.hn;return t!==0?t:(t=Xf(n.Tn,e.Tn),t!==0?t:(t=Xf(n.In,e.In),t!==0?t:U.comparator(n.Pn,e.Pn)))}function Xf(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function _a(n){return Bm()?(function(t){let r="";for(let s=0;s<t.length;s++)r+=String.fromCharCode(t[s]);return r})(n):n}function Zf(n){return typeof n!="string"?n:(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(n)}class ep{constructor(e){this.Vn=new ue(((t,r)=>ge.comparator(t.field,r.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.mn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.mn.push(r)}}get fn(){return this.Vn.size>1}gn(e){if($(e.collectionGroup===this.collectionId,49279),this.fn)return!1;const t=Lu(e);if(t!==void 0&&!this.pn(t))return!1;const r=ar(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.pn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Vn.size>0){const c=this.Vn.getIterator().getNext();if(!s.has(c.field.canonicalString())){const u=r[i];if(!this.yn(c,u)||!this.wn(this.dn[o++],u))return!1}++i}for(;i<r.length;++i){const c=r[i];if(o>=this.dn.length||!this.wn(this.dn[o++],c))return!1}return!0}Sn(){if(this.fn)return null;let e=new ue(ge.comparator);const t=[];for(const r of this.mn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new _r(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new _r(r.field,0))}for(const r of this.dn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new _r(r.field,r.dir==="asc"?0:1)));return new ps(ps.UNKNOWN_ID,this.collectionId,t,ms.empty())}pn(e){for(const t of this.mn)if(this.yn(t,e))return!0;return!1}yn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}wn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(n){var t,r;if($(n instanceof re||n instanceof ae,20012),n instanceof re){if(n instanceof Ug){const s=((r=(t=n.value.arrayValue)==null?void 0:t.values)==null?void 0:r.map((i=>re.create(n.field,"==",i))))||[];return ae.create(s,"or")}return n}const e=n.filters.map((s=>A_(s)));return ae.create(e,n.op)}function jR(n){if(n.getFilters().length===0)return[];const e=Zu(A_(n));return $(v_(e),7391),Yu(e)||Xu(e)?[e]:e.getFilters()}function Yu(n){return n instanceof re}function Xu(n){return n instanceof ae&&Nl(n)}function v_(n){return Yu(n)||Xu(n)||(function(t){if(t instanceof ae&&zu(t)){for(const r of t.getFilters())if(!Yu(r)&&!Xu(r))return!1;return!0}return!1})(n)}function Zu(n){if($(n instanceof re||n instanceof ae,34018),n instanceof re)return n;if(n.filters.length===1)return Zu(n.filters[0]);const e=n.filters.map((r=>Zu(r)));let t=ae.create(e,n.op);return t=La(t),v_(t)?t:($(t instanceof ae,64498),$(ws(t),40251),$(t.filters.length>1,57927),t.filters.reduce(((r,s)=>ql(r,s))))}function ql(n,e){let t;return $(n instanceof re||n instanceof ae,38388),$(e instanceof re||e instanceof ae,25473),t=n instanceof re?e instanceof re?(function(s,i){return ae.create([s,i],"and")})(n,e):tp(n,e):e instanceof re?tp(e,n):(function(s,i){if($(s.filters.length>0&&i.filters.length>0,48005),ws(s)&&ws(i))return Lg(s,i.getFilters());const o=zu(s)?s:i,c=zu(s)?i:s,u=o.filters.map((l=>ql(l,c)));return ae.create(u,"or")})(n,e),La(t)}function tp(n,e){if(ws(e))return Lg(e,n.getFilters());{const t=e.filters.map((r=>ql(n,r)));return ae.create(t,"or")}}function La(n){if($(n instanceof re||n instanceof ae,11850),n instanceof re)return n;const e=n.getFilters();if(e.length===1)return La(e[0]);if(Og(n))return n;const t=e.map((s=>La(s))),r=[];return t.forEach((s=>{s instanceof re?r.push(s):s instanceof ae&&(s.op===n.op?r.push(...s.filters):r.push(s))})),r.length===1?r[0]:ae.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.bn=new jl}addToCollectionParentIndex(e,t){return this.bn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(mt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(mt.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class jl{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ue(ee.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ue(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="IndexedDbIndexManager",Zo=new Uint8Array(0);class $R{constructor(e,t){this.databaseId=t,this.Dn=new jl,this.Cn=new cn((r=>Rr(r)),((r,s)=>wo(r,s))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Dn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener((()=>{this.Dn.add(t)}));const i={collectionId:r,parent:Ze(s)};return rp(e).put(i)}return R.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[ng(t),""],!1,!0);return rp(e).J(s).next((i=>{for(const o of i){if(o.collectionId!==t)break;r.push(Ot(o.parent))}return r}))}addFieldIndex(e,t){const r=Ai(e),s=(function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map((u=>[u.fieldPath.canonicalString(),u.kind]))}})(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=Yr(e);return i.next((c=>{o.put(Wf(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const r=Ai(e),s=Yr(e),i=Jr(e);return r.delete(t.indexId).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Ai(e),r=Jr(e),s=Yr(e);return t.X().next((()=>r.X())).next((()=>s.X()))}createTargetIndexes(e,t){return R.forEach(this.vn(t),(r=>this.getIndexType(e,r).next((s=>{if(s===0||s===1){const i=new ep(r).Sn();if(i!=null)return this.addFieldIndex(e,i)}}))))}getDocumentsMatchingTarget(e,t){const r=Jr(e);let s=!0;const i=new Map;return R.forEach(this.vn(t),(o=>this.Fn(e,o).next((c=>{s&&(s=!!c),i.set(o,c)})))).next((()=>{if(s){let o=X();const c=[];return R.forEach(i,((u,l)=>{x(np,`Using index ${(function(M){return`id=${M.indexId}|cg=${M.collectionGroup}|f=${M.fields.map((G=>`${G.fieldPath}:${G.kind}`)).join(",")}`})(u)} to execute ${Rr(t)}`);const d=(function(M,G){const Q=Lu(G);if(Q===void 0)return null;for(const W of Va(M,Q.fieldPath))switch(W.op){case"array-contains-any":return W.value.arrayValue.values||[];case"array-contains":return[W.value]}return null})(l,u),p=(function(M,G){const Q=new Map;for(const W of ar(G))for(const T of Va(M,W.fieldPath))switch(T.op){case"==":case"in":Q.set(W.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return Q.set(W.fieldPath.canonicalString(),T.value),Array.from(Q.values())}return null})(l,u),m=(function(M,G){const Q=[];let W=!0;for(const T of ar(G)){const _=T.kind===0?Of(M,T.fieldPath,M.startAt):xf(M,T.fieldPath,M.startAt);Q.push(_.value),W&&(W=_.inclusive)}return new Un(Q,W)})(l,u),y=(function(M,G){const Q=[];let W=!0;for(const T of ar(G)){const _=T.kind===0?xf(M,T.fieldPath,M.endAt):Of(M,T.fieldPath,M.endAt);Q.push(_.value),W&&(W=_.inclusive)}return new Un(Q,W)})(l,u),N=this.Mn(u,l,m),k=this.Mn(u,l,y),b=this.xn(u,l,p),D=this.On(u.indexId,d,N,m.inclusive,k,y.inclusive,b);return R.forEach(D,(L=>r.Z(L,t.limit).next((M=>{M.forEach((G=>{const Q=U.fromSegments(G.documentKey);o.has(Q)||(o=o.add(Q),c.push(Q))}))}))))})).next((()=>c))}return R.resolve(null)}))}vn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=jR(ae.create(e.filters,"and")).map((r=>Gu(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt))),this.Cn.set(e,t),t)}On(e,t,r,s,i,o,c){const u=(t!=null?t.length:1)*Math.max(r.length,i.length),l=u/(t!=null?t.length:1),d=[];for(let p=0;p<u;++p){const m=t?this.Nn(t[p/l]):Zo,y=this.Bn(e,m,r[p%l],s),N=this.Ln(e,m,i[p%l],o),k=c.map((b=>this.Bn(e,m,b,!0)));d.push(...this.createRange(y,N,k))}return d}Bn(e,t,r,s){const i=new dr(e,U.empty(),t,r);return s?i:i.En()}Ln(e,t,r,s){const i=new dr(e,U.empty(),t,r);return s?i.En():i}Fn(e,t){const r=new ep(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next((i=>{let o=null;for(const c of i)r.gn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o}))}getIndexType(e,t){let r=2;const s=this.vn(t);return R.forEach(s,(i=>this.Fn(e,i).next((o=>{o?r!==0&&o.fields.length<(function(u){let l=new ue(ge.comparator),d=!1;for(const p of u.filters)for(const m of p.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:l=l.add(m.field));for(const p of u.orderBy)p.field.isKeyField()||(l=l.add(p.field));return l.size+(d?1:0)})(i)&&(r=1):r=0})))).next((()=>(function(o){return o.limit!==null})(t)&&s.length>1&&r===2?1:r))}kn(e,t){const r=new wi;for(const s of ar(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.ln(s.kind);hr.Wt.Dt(i,o)}return r.un()}Nn(e){const t=new wi;return hr.Wt.Dt(e,t.ln(0)),t.un()}Kn(e,t){const r=new wi;return hr.Wt.Dt(vr(this.databaseId,t),r.ln((function(i){const o=ar(i);return o.length===0?0:o[o.length-1].kind})(e))),r.un()}xn(e,t,r){if(r===null)return[];let s=[];s.push(new wi);let i=0;for(const o of ar(e)){const c=r[i++];for(const u of s)if(this.qn(t,o.fieldPath)&&so(c))s=this.Un(s,o,c);else{const l=u.ln(o.kind);hr.Wt.Dt(c,l)}}return this.$n(s)}Mn(e,t,r){return this.xn(e,t,r.position)}$n(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].un();return t}Un(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const c of s){const u=new wi;u.seed(c.un()),hr.Wt.Dt(o,u.ln(t.kind)),i.push(u)}return i}qn(e,t){return!!e.filters.find((r=>r instanceof re&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in")))}getFieldIndexes(e,t){const r=Ai(e),s=Yr(e);return(t?r.J(Fu,IDBKeyRange.bound(t,t)):r.J()).next((i=>{const o=[];return R.forEach(i,(c=>s.get([c.indexId,this.uid]).next((u=>{o.push((function(d,p){const m=p?new ms(p.sequenceNumber,new mt(Cr(p.readTime),new U(Ot(p.documentKey)),p.largestBatchId)):ms.empty(),y=d.fields.map((([N,k])=>new _r(ge.fromServerFormat(N),k)));return new ps(d.indexId,d.collectionGroup,y,m)})(c,u))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:J(r.collectionGroup,s.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,r){const s=Ai(e),i=Yr(e);return this.Wn(e).next((o=>s.J(Fu,IDBKeyRange.bound(t,t)).next((c=>R.forEach(c,(u=>i.put(Wf(u.indexId,this.uid,o,r))))))))}updateIndexEntries(e,t){const r=new Map;return R.forEach(t,((s,i)=>{const o=r.get(s.collectionGroup);return(o?R.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next((c=>(r.set(s.collectionGroup,c),R.forEach(c,(u=>this.Qn(e,s,u).next((l=>{const d=this.Gn(i,u);return l.isEqual(d)?R.resolve():this.zn(e,i,u,l,d)})))))))}))}jn(e,t,r,s){return Jr(e).put(s.Rn(this.uid,this.Kn(r,t.key),t.key))}Jn(e,t,r,s){return Jr(e).delete(s.An(this.uid,this.Kn(r,t.key),t.key))}Qn(e,t,r){const s=Jr(e);let i=new ue(En);return s.ee({index:gg,range:IDBKeyRange.only([r.indexId,this.uid,_a(this.Kn(r,t))])},((o,c)=>{i=i.add(new dr(r.indexId,t,Zf(c.arrayValue),Zf(c.directionalValue)))})).next((()=>i))}Gn(e,t){let r=new ue(En);const s=this.kn(t,e);if(s==null)return r;const i=Lu(t);if(i!=null){const o=e.data.field(i.fieldPath);if(so(o))for(const c of o.arrayValue.values||[])r=r.add(new dr(t.indexId,e.key,this.Nn(c),s))}else r=r.add(new dr(t.indexId,e.key,Zo,s));return r}zn(e,t,r,s,i){x(np,"Updating index entries for document '%s'",t.key);const o=[];return(function(u,l,d,p,m){const y=u.getIterator(),N=l.getIterator();let k=Wr(y),b=Wr(N);for(;k||b;){let D=!1,L=!1;if(k&&b){const M=d(k,b);M<0?L=!0:M>0&&(D=!0)}else k!=null?L=!0:D=!0;D?(p(b),b=Wr(N)):L?(m(k),k=Wr(y)):(k=Wr(y),b=Wr(N))}})(s,i,En,(c=>{o.push(this.jn(e,t,r,c))}),(c=>{o.push(this.Jn(e,t,r,c))})),R.waitFor(o)}Wn(e){let t=1;return Yr(e).ee({index:mg,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((r,s,i)=>{i.done(),t=s.sequenceNumber+1})).next((()=>t))}createRange(e,t,r){r=r.sort(((o,c)=>En(o,c))).filter(((o,c,u)=>!c||En(o,u[c-1])!==0));const s=[];s.push(e);for(const o of r){const c=En(o,e),u=En(o,t);if(c===0)s[0]=e.En();else if(c>0&&u<0)s.push(o),s.push(o.En());else if(u>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Hn(s[o],s[o+1]))return[];const c=s[o].An(this.uid,Zo,U.empty()),u=s[o+1].An(this.uid,Zo,U.empty());i.push(IDBKeyRange.bound(c,u))}return i}Hn(e,t){return En(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(sp)}getMinOffset(e,t){return R.mapArray(this.vn(t),(r=>this.Fn(e,r).next((s=>s||z(44426))))).next(sp)}}function rp(n){return Me(n,eo)}function Jr(n){return Me(n,Fi)}function Ai(n){return Me(n,bl)}function Yr(n){return Me(n,Mi)}function sp(n){$(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Al(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new mt(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},R_=41943040;class Ye{static withCacheSize(e){return new Ye(e,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(n,e,t){const r=n.store(Tt),s=n.store(gs),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=r.ee({range:o},((d,p,m)=>(c++,m.delete())));i.push(u.next((()=>{$(c===1,47070,{batchId:t.batchId})})));const l=[];for(const d of t.mutations){const p=dg(e,d.key.path,t.batchId);i.push(s.delete(p)),l.push(d.key)}return R.waitFor(i).next((()=>l))}function Ma(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw z(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye.DEFAULT_COLLECTION_PERCENTILE=10,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ye.DEFAULT=new Ye(R_,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ye.DISABLED=new Ye(-1,0,0);class mc{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Zn={}}static wt(e,t,r,s){$(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new mc(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Tn(e).ee({index:pr,range:r},((s,i,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,r,s){const i=ns(e),o=Tn(e);return o.add({}).next((c=>{$(typeof c=="number",49019);const u=new Ll(c,t,r,s),l=(function(y,N,k){const b=k.baseMutations.map((L=>ao(y.yt,L))),D=k.mutations.map((L=>ao(y.yt,L)));return{userId:N,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:b,mutations:D}})(this.serializer,this.userId,u),d=[];let p=new ue(((m,y)=>J(m.canonicalString(),y.canonicalString())));for(const m of s){const y=dg(this.userId,m.key.path,c);p=p.add(m.key.path.popLast()),d.push(o.put(l)),d.push(i.put(y,Iv))}return p.forEach((m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))})),e.addOnCommittedListener((()=>{this.Zn[c]=u.keys()})),R.waitFor(d).next((()=>u))}))}lookupMutationBatch(e,t){return Tn(e).get(t).next((r=>r?($(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),lr(this.serializer,r)):null))}Xn(e,t){return this.Zn[t]?R.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next((r=>{if(r){const s=r.keys();return this.Zn[t]=s,s}return null}))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Tn(e).ee({index:pr,range:s},((o,c,u)=>{c.userId===this.userId&&($(c.batchId>=r,47524,{Yn:r}),i=lr(this.serializer,c)),u.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=kn;return Tn(e).ee({index:pr,range:t,reverse:!0},((s,i,o)=>{r=i.batchId,o.done()})).next((()=>r))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,kn],[this.userId,Number.POSITIVE_INFINITY]);return Tn(e).J(pr,t).next((r=>r.map((s=>lr(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=la(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return ns(e).ee({range:s},((o,c,u)=>{const[l,d,p]=o,m=Ot(d);if(l===this.userId&&t.path.isEqual(m))return Tn(e).get(p).next((y=>{if(!y)throw z(61480,{er:o,batchId:p});$(y.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:y.userId,batchId:p}),i.push(lr(this.serializer,y))}));u.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ue(J);const s=[];return t.forEach((i=>{const o=la(this.userId,i.path),c=IDBKeyRange.lowerBound(o),u=ns(e).ee({range:c},((l,d,p)=>{const[m,y,N]=l,k=Ot(y);m===this.userId&&i.path.isEqual(k)?r=r.add(N):p.done()}));s.push(u)})),R.waitFor(s).next((()=>this.tr(e,r)))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=la(this.userId,r),o=IDBKeyRange.lowerBound(i);let c=new ue(J);return ns(e).ee({range:o},((u,l,d)=>{const[p,m,y]=u,N=Ot(m);p===this.userId&&r.isPrefixOf(N)?N.length===s&&(c=c.add(y)):d.done()})).next((()=>this.tr(e,c)))}tr(e,t){const r=[],s=[];return t.forEach((i=>{s.push(Tn(e).get(i).next((o=>{if(o===null)throw z(35274,{batchId:i});$(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),r.push(lr(this.serializer,o))})))})),R.waitFor(s).next((()=>r))}removeMutationBatch(e,t){return b_(e.le,this.userId,t).next((r=>(e.addOnCommittedListener((()=>{this.nr(t.batchId)})),R.forEach(r,(s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))))}nr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return R.resolve();const r=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),s=[];return ns(e).ee({range:r},((i,o,c)=>{if(i[0]===this.userId){const u=Ot(i[1]);s.push(u)}else c.done()})).next((()=>{$(s.length===0,56720,{rr:s.map((i=>i.canonicalString()))})}))}))}containsKey(e,t){return S_(e,this.userId,t)}ir(e){return P_(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:kn,lastStreamToken:""}))}}function S_(n,e,t){const r=la(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return ns(n).ee({range:i,Y:!0},((c,u,l)=>{const[d,p,m]=c;d===e&&p===s&&(o=!0),l.done()})).next((()=>o))}function Tn(n){return Me(n,Tt)}function ns(n){return Me(n,gs)}function P_(n){return Me(n,Xi)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new tn(0)}static ar(){return new tn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ur(e).next((t=>{const r=new tn(t.highestTargetId);return t.highestTargetId=r.next(),this.cr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.ur(e).next((t=>K.fromTimestamp(new oe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.ur(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,r){return this.ur(e).next((s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.cr(e,s))))}addTargetData(e,t){return this.lr(e,t).next((()=>this.ur(e).next((r=>(r.targetCount+=1,this.hr(t,r),this.cr(e,r))))))}updateTargetData(e,t){return this.lr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Xr(e).delete(t.targetId))).next((()=>this.ur(e))).next((r=>($(r.targetCount>0,8065),r.targetCount-=1,this.cr(e,r))))}removeTargets(e,t,r){let s=0;const i=[];return Xr(e).ee(((o,c)=>{const u=Vi(c);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(s++,i.push(this.removeTargetData(e,u)))})).next((()=>R.waitFor(i))).next((()=>s))}forEachTarget(e,t){return Xr(e).ee(((r,s)=>{const i=Vi(s);t(i)}))}ur(e){return op(e).get(Na).next((t=>($(t!==null,2888),t)))}cr(e,t){return op(e).put(Na,t)}lr(e,t){return Xr(e).put(w_(this.serializer,t))}hr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.ur(e).next((t=>t.targetCount))}getTargetData(e,t){const r=Rr(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Xr(e).ee({range:s,index:pg},((o,c,u)=>{const l=Vi(c);wo(t,l.target)&&(i=l,u.done())})).next((()=>i))}addMatchingKeys(e,t,r){const s=[],i=Rn(e);return t.forEach((o=>{const c=Ze(o.path);s.push(i.put({targetId:r,path:c})),s.push(this.referenceDelegate.addReference(e,r,o))})),R.waitFor(s)}removeMatchingKeys(e,t,r){const s=Rn(e);return R.forEach(t,(i=>{const o=Ze(i.path);return R.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])}))}removeMatchingKeysForTargetId(e,t){const r=Rn(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Rn(e);let i=X();return s.ee({range:r,Y:!0},((o,c,u)=>{const l=Ot(o[1]),d=new U(l);i=i.add(d)})).next((()=>i))}containsKey(e,t){const r=Ze(t.path),s=IDBKeyRange.bound([r],[ng(r)],!1,!0);let i=0;return Rn(e).ee({index:Rl,Y:!0,range:s},(([o,c],u,l)=>{o!==0&&(i++,l.done())})).next((()=>i>0))}At(e,t){return Xr(e).get(t).next((r=>r?Vi(r):null))}}function Xr(n){return Me(n,_s)}function op(n){return Me(n,yr)}function Rn(n){return Me(n,ys)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="LruGarbageCollector",C_=1048576;function cp([n,e],[t,r]){const s=J(n,t);return s===0?J(e,r):s}class HR{constructor(e){this.Pr=e,this.buffer=new ue(cp),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();cp(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class D_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){x(ap,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){$n(t)?x(ap,"Ignoring IndexedDB error during garbage collection: ",t):await zn(t)}await this.Ar(3e5)}))}}class KR{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return R.resolve(st.ce);const r=new HR(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(ip)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ip):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,o,c,u,l;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(l=Date.now(),Zr()<=ne.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${p} documents in `+(l-u)+`ms
Total Duration: ${l-d}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function N_(n,e){return new KR(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,t){this.db=e,this.garbageCollector=N_(this,t)}dr(e){const t=this.pr(e);return this.db.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}mr(e,t){return this.yr(e,((r,s)=>t(s)))}addReference(e,t,r){return ea(e,r)}removeReference(e,t,r){return ea(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return ea(e,t)}wr(e,t){return(function(s,i){let o=!1;return P_(s).te((c=>S_(s,c,i).next((u=>(u&&(o=!0),R.resolve(!u)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.yr(e,((o,c)=>{if(c<=t){const u=this.wr(e,o).next((l=>{if(!l)return i++,r.getEntry(e,o).next((()=>(r.removeEntry(o,K.min()),Rn(e).delete((function(p){return[0,Ze(p.path)]})(o)))))}));s.push(u)}})).next((()=>R.waitFor(s))).next((()=>r.apply(e))).next((()=>i))}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return ea(e,t)}yr(e,t){const r=Rn(e);let s,i=st.ce;return r.ee({index:Rl},(([o,c],{path:u,sequenceNumber:l})=>{o===0?(i!==st.ce&&t(new U(Ot(s)),i),i=l,s=u):i=st.ce})).next((()=>{i!==st.ce&&t(new U(Ot(s)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ea(n,e){return Rn(n).put((function(r,s){return{targetId:0,path:Ze(r.path),sequenceNumber:s}})(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(){this.changes=new cn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return ir(e).put(r)}removeEntry(e,t,r){return ir(e).delete((function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],xa(o),c[c.length-1]]})(t,r))}updateMetadata(e,t){return this.getMetadata(e).next((r=>(r.byteSize+=t,this.Sr(e,r))))}getEntry(e,t){let r=me.newInvalidDocument(t);return ir(e).ee({index:ha,range:IDBKeyRange.only(vi(t))},((s,i)=>{r=this.br(t,i)})).next((()=>r))}Dr(e,t){let r={size:0,document:me.newInvalidDocument(t)};return ir(e).ee({index:ha,range:IDBKeyRange.only(vi(t))},((s,i)=>{r={document:this.br(t,i),size:Ma(i)}})).next((()=>r))}getEntries(e,t){let r=ot();return this.Cr(e,t,((s,i)=>{const o=this.br(s,i);r=r.insert(s,o)})).next((()=>r))}vr(e,t){let r=ot(),s=new de(U.comparator);return this.Cr(e,t,((i,o)=>{const c=this.br(i,o);r=r.insert(i,c),s=s.insert(i,Ma(o))})).next((()=>({documents:r,Fr:s})))}Cr(e,t,r){if(t.isEmpty())return R.resolve();let s=new ue(hp);t.forEach((u=>s=s.add(u)));const i=IDBKeyRange.bound(vi(s.first()),vi(s.last())),o=s.getIterator();let c=o.getNext();return ir(e).ee({index:ha,range:i},((u,l,d)=>{const p=U.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;c&&hp(c,p)<0;)r(c,null),c=o.getNext();c&&c.isEqual(p)&&(r(c,l),c=o.hasNext()?o.getNext():null),c?d.j(vi(c)):d.done()})).next((()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),xa(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ir(e).J(IDBKeyRange.bound(c,u,!0)).next((l=>{i==null||i.incrementDocumentReadCount(l.length);let d=ot();for(const p of l){const m=this.br(U.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);m.isFoundDocument()&&(vo(t,m)||s.has(m.key))&&(d=d.insert(m.key,m))}return d}))}getAllFromCollectionGroup(e,t,r,s){let i=ot();const o=lp(t,r),c=lp(t,mt.max());return ir(e).ee({index:fg,range:IDBKeyRange.bound(o,c,!0)},((u,l,d)=>{const p=this.br(U.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);i=i.insert(p.key,p),i.size===s&&d.done()})).next((()=>i))}newChangeBuffer(e){return new JR(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return up(e).get(Mu).next((t=>($(!!t,20021),t)))}Sr(e,t){return up(e).put(Mu,t)}br(e,t){if(t){const r=xR(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(K.min())))return r}return me.newInvalidDocument(e)}}function V_(n){return new QR(n)}class JR extends k_{constructor(e,t){super(),this.Mr=e,this.trackRemovals=t,this.Or=new cn((r=>r.toString()),((r,s)=>r.isEqual(s)))}applyChanges(e){const t=[];let r=0,s=new ue(((i,o)=>J(i.canonicalString(),o.canonicalString())));return this.changes.forEach(((i,o)=>{const c=this.Or.get(i);if(t.push(this.Mr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const u=Hf(this.Mr.serializer,o);s=s.add(i.path.popLast());const l=Ma(u);r+=l-c.size,t.push(this.Mr.addEntry(e,i,u))}else if(r-=c.size,this.trackRemovals){const u=Hf(this.Mr.serializer,o.convertToNoDocument(K.min()));t.push(this.Mr.addEntry(e,i,u))}})),s.forEach((i=>{t.push(this.Mr.indexManager.addToCollectionParentIndex(e,i))})),t.push(this.Mr.updateMetadata(e,r)),R.waitFor(t)}getFromCache(e,t){return this.Mr.Dr(e,t).next((r=>(this.Or.set(t,{size:r.size,readTime:r.document.readTime}),r.document)))}getAllFromCache(e,t){return this.Mr.vr(e,t).next((({documents:r,Fr:s})=>(s.forEach(((i,o)=>{this.Or.set(i,{size:o,readTime:r.get(i).readTime})})),r)))}}function up(n){return Me(n,Zi)}function ir(n){return Me(n,Da)}function vi(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function lp(n,e){const t=e.documentKey.path.toArray();return[n,xa(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function hp(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=J(t[i],r[i]),s)return s;return s=J(t.length,r.length),s||(s=J(t[t.length-2],r[r.length-2]),s||J(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&qi(r.mutation,s,it.empty(),oe.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,X()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=X()){const s=xt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let o=Ni();return i.forEach(((c,u)=>{o=o.insert(c,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=xt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,X())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,r,s){let i=ot();const o=Bi(),c=(function(){return Bi()})();return t.forEach(((u,l)=>{const d=r.get(l.key);s.has(l.key)&&(d===void 0||d.mutation instanceof un)?i=i.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),qi(d.mutation,l,d.mutation.getFieldMask(),oe.now())):o.set(l.key,it.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((l,d)=>o.set(l,d))),t.forEach(((l,d)=>c.set(l,new YR(d,o.get(l)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=Bi();let s=new de(((o,c)=>o-c)),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((u=>{const l=t.get(u);if(l===null)return;let d=r.get(u)||it.empty();d=c.applyToLocalView(l,d),r.set(u,d);const p=(s.get(c.batchId)||X()).add(u);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),l=u.key,d=u.value,p=Wg();d.forEach((m=>{if(!i.has(m)){const y=t_(t.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,l,p))}return R.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return rR(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):kl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):R.resolve(xt());let c=fs,u=i;return o.next((l=>R.forEach(l,((d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?R.resolve():this.remoteDocumentCache.getEntry(e,d).next((m=>{u=u.insert(d,m)}))))).next((()=>this.populateOverlays(e,l,i))).next((()=>this.computeViews(e,u,l,X()))).next((d=>({batchId:c,changes:Kg(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next((r=>{let s=Ni();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Ni();return this.indexManager.getCollectionParents(e,i).next((c=>R.forEach(c,(u=>{const l=(function(p,m){return new an(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next((d=>{d.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((o=>{i.forEach(((u,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,me.newInvalidDocument(d)))}));let c=Ni();return o.forEach(((u,l)=>{const d=i.get(u);d!==void 0&&qi(d.mutation,l,it.empty(),oe.now()),vo(t,l)&&(c=c.insert(u,l))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return R.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Pe(s.createTime)}})(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:fc(s.bundledQuery),readTime:Pe(s.readTime)}})(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this.overlays=new de(U.comparator),this.Lr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=xt();return R.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.St(e,t,i)})),R.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const s=xt(),i=t.length+1,o=new U(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,l=u.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new de(((l,d)=>l-d));const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let d=i.get(l.largestBatchId);d===null&&(d=xt(),i=i.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const c=xt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((l,d)=>c.set(l,d))),!(c.size()>=s)););return R.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Fl(t,r));let i=this.Lr.get(t);i===void 0&&(i=X(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(){this.sessionToken=ve.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this.kr=new ue(Be.Kr),this.qr=new ue(Be.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Be(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Be(e,t))}Qr(e,t){e.forEach((r=>this.removeReference(r,t)))}Gr(e){const t=new U(new ee([])),r=new Be(t,e),s=new Be(t,e+1),i=[];return this.qr.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new U(new ee([])),r=new Be(t,e),s=new Be(t,e+1);let i=X();return this.qr.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Be(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return U.comparator(e.key,t.key)||J(e.Jr,t.Jr)}static Ur(e,t){return J(e.Jr,t.Jr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new ue(Be.Kr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ll(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.Hr=this.Hr.add(new Be(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?kn:this.Yn-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Be(t,0),s=new Be(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Jr);i.push(c)})),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ue(J);return t.forEach((s=>{const i=new Be(s,0),o=new Be(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],(c=>{r=r.add(c.Jr)}))})),R.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;U.isDocumentKey(i)||(i=i.child(""));const o=new Be(new U(i),0);let c=new ue(J);return this.Hr.forEachWhile((u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(c=c.add(u.Jr)),!0)}),o),R.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){$(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return R.forEach(t.mutations,(s=>{const i=new Be(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Hr=r}))}nr(e){}containsKey(e,t){const r=new Be(t,0),s=this.Hr.firstAfterOrEqual(r);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.ti=e,this.docs=(function(){return new de(U.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():me.newInvalidDocument(t))}getEntries(e,t){let r=ot();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():me.newInvalidDocument(s))})),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=ot();const o=t.path,c=new U(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:l,value:{document:d}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Al(ag(d),r)<=0||(s.has(d.key)||vo(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,r,s){z(9500)}ni(e,t){return R.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new rb(this)}getSize(e){return R.resolve(this.size)}}class rb extends k_{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)})),R.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.persistence=e,this.ri=new cn((t=>Rr(t)),wo),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.ii=0,this.si=new zl,this.targetCount=0,this.oi=tn._r()}forEachTarget(e,t){return this.ri.forEach(((r,s)=>t(s))),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),R.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new tn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.lr(t),R.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),R.waitFor(i).next((()=>s))}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),R.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,t){this._i={},this.overlays={},this.ai=new st(0),this.ui=!1,this.ui=!0,this.ci=new eb,this.referenceDelegate=e(this),this.li=new sb(this),this.indexManager=new zR,this.remoteDocumentCache=(function(s){return new nb(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new T_(t),this.Pi=new XR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ZR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new tb(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const s=new ib(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((i=>this.referenceDelegate.Ii(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return R.or(Object.values(this._i).map((r=>()=>r.containsKey(e,t))))}}class ib extends ug{constructor(e){super(),this.currentSequenceNumber=e}}class gc{constructor(e){this.persistence=e,this.Ri=new zl,this.Ai=null}static Vi(e){return new gc(e)}get di(){if(this.Ai)return this.Ai;throw z(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,(r=>{const s=U.fromPath(r);return this.mi(e,s).next((i=>{i||t.removeEntry(s,K.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Fa{constructor(e,t){this.persistence=e,this.fi=new cn((r=>Ze(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=N_(this,t)}static Vi(e,t){return new Fa(e,t)}Ti(){}Ii(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}mr(e,t){return R.forEach(this.fi,((r,s)=>this.wr(e,r,s).next((i=>i?R.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(r++,i.removeEntry(o,K.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=fa(e.data.value)),t}wr(e,t,r){return R.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.serializer=e}k(e,t,r,s){const i=new nc("createOrUpgrade",t);r<1&&s>=1&&((function(u){u.createObjectStore(To)})(e),(function(u){u.createObjectStore(Xi,{keyPath:yv}),u.createObjectStore(Tt,{keyPath:wf,autoIncrement:!0}).createIndex(pr,Af,{unique:!0}),u.createObjectStore(gs)})(e),dp(e),(function(u){u.createObjectStore(cr)})(e));let o=R.resolve();return r<3&&s>=3&&(r!==0&&((function(u){u.deleteObjectStore(ys),u.deleteObjectStore(_s),u.deleteObjectStore(yr)})(e),dp(e)),o=o.next((()=>(function(u){const l=u.store(yr),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:K.min().toTimestamp(),targetCount:0};return l.put(Na,d)})(i)))),r<4&&s>=4&&(r!==0&&(o=o.next((()=>(function(u,l){return l.store(Tt).J().next((p=>{u.deleteObjectStore(Tt),u.createObjectStore(Tt,{keyPath:wf,autoIncrement:!0}).createIndex(pr,Af,{unique:!0});const m=l.store(Tt),y=p.map((N=>m.put(N)));return R.waitFor(y)}))})(e,i)))),o=o.next((()=>{(function(u){u.createObjectStore(Is,{keyPath:Sv})})(e)}))),r<5&&s>=5&&(o=o.next((()=>this.gi(i)))),r<6&&s>=6&&(o=o.next((()=>((function(u){u.createObjectStore(Zi)})(e),this.pi(i))))),r<7&&s>=7&&(o=o.next((()=>this.yi(i)))),r<8&&s>=8&&(o=o.next((()=>this.wi(e,i)))),r<9&&s>=9&&(o=o.next((()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)}))),r<10&&s>=10&&(o=o.next((()=>this.Si(i)))),r<11&&s>=11&&(o=o.next((()=>{(function(u){u.createObjectStore(rc,{keyPath:Pv})})(e),(function(u){u.createObjectStore(sc,{keyPath:Cv})})(e)}))),r<12&&s>=12&&(o=o.next((()=>{(function(u){const l=u.createObjectStore(ic,{keyPath:Lv});l.createIndex(Uu,Mv,{unique:!1}),l.createIndex(_g,Fv,{unique:!1})})(e)}))),r<13&&s>=13&&(o=o.next((()=>(function(u){const l=u.createObjectStore(Da,{keyPath:Ev});l.createIndex(ha,Tv),l.createIndex(fg,wv)})(e))).next((()=>this.bi(e,i))).next((()=>e.deleteObjectStore(cr)))),r<14&&s>=14&&(o=o.next((()=>this.Di(e,i)))),r<15&&s>=15&&(o=o.next((()=>(function(u){u.createObjectStore(bl,{keyPath:Dv,autoIncrement:!0}).createIndex(Fu,Nv,{unique:!1}),u.createObjectStore(Mi,{keyPath:kv}).createIndex(mg,Vv,{unique:!1}),u.createObjectStore(Fi,{keyPath:Ov}).createIndex(gg,xv,{unique:!1})})(e)))),r<16&&s>=16&&(o=o.next((()=>{t.objectStore(Mi).clear()})).next((()=>{t.objectStore(Fi).clear()}))),r<17&&s>=17&&(o=o.next((()=>{(function(u){u.createObjectStore(Sl,{keyPath:Uv})})(e)}))),r<18&&s>=18&&Bm()&&(o=o.next((()=>{t.objectStore(Mi).clear()})).next((()=>{t.objectStore(Fi).clear()}))),o}pi(e){let t=0;return e.store(cr).ee(((r,s)=>{t+=Ma(s)})).next((()=>{const r={byteSize:t};return e.store(Zi).put(Mu,r)}))}gi(e){const t=e.store(Xi),r=e.store(Tt);return t.J().next((s=>R.forEach(s,(i=>{const o=IDBKeyRange.bound([i.userId,kn],[i.userId,i.lastAcknowledgedBatchId]);return r.J(pr,o).next((c=>R.forEach(c,(u=>{$(u.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const l=lr(this.serializer,u);return b_(e,i.userId,l).next((()=>{}))}))))}))))}yi(e){const t=e.store(ys),r=e.store(cr);return e.store(yr).get(Na).next((s=>{const i=[];return r.ee(((o,c)=>{const u=new ee(o),l=(function(p){return[0,Ze(p)]})(u);i.push(t.get(l).next((d=>d?R.resolve():(p=>t.put({targetId:0,path:Ze(p),sequenceNumber:s.highestListenSequenceNumber}))(u))))})).next((()=>R.waitFor(i)))}))}wi(e,t){e.createObjectStore(eo,{keyPath:bv});const r=t.store(eo),s=new jl,i=o=>{if(s.add(o)){const c=o.lastSegment(),u=o.popLast();return r.put({collectionId:c,parent:Ze(u)})}};return t.store(cr).ee({Y:!0},((o,c)=>{const u=new ee(o);return i(u.popLast())})).next((()=>t.store(gs).ee({Y:!0},(([o,c,u],l)=>{const d=Ot(c);return i(d.popLast())}))))}Si(e){const t=e.store(_s);return t.ee(((r,s)=>{const i=Vi(s),o=w_(this.serializer,i);return t.put(o)}))}bi(e,t){const r=t.store(cr),s=[];return r.ee(((i,o)=>{const c=t.store(Da),u=(function(p){return p.document?new U(ee.fromString(p.document.name).popFirst(5)):p.noDocument?U.fromSegments(p.noDocument.path):p.unknownDocument?U.fromSegments(p.unknownDocument.path):z(36783)})(o).path.toArray(),l={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(l))})).next((()=>R.waitFor(s)))}Di(e,t){const r=t.store(Tt),s=V_(this.serializer),i=new $l(gc.Vi,this.serializer.yt);return r.J().next((o=>{const c=new Map;return o.forEach((u=>{let l=c.get(u.userId)??X();lr(this.serializer,u).keys().forEach((d=>l=l.add(d))),c.set(u.userId,l)})),R.forEach(c,((u,l)=>{const d=new qe(l),p=pc.wt(this.serializer,d),m=i.getIndexManager(d),y=mc.wt(d,this.serializer,m,i.referenceDelegate);return new O_(s,y,p,m).recalculateAndSaveOverlaysForDocumentKeys(new Bu(t,st.ce),u).next()}))}))}}function dp(n){n.createObjectStore(ys,{keyPath:vv}).createIndex(Rl,Rv,{unique:!0}),n.createObjectStore(_s,{keyPath:"targetId"}).createIndex(pg,Av,{unique:!0}),n.createObjectStore(yr)}const wn="IndexedDbPersistence",lu=18e5,hu=5e3,du="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",x_="main";class Gl{constructor(e,t,r,s,i,o,c,u,l,d,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ci=i,this.window=o,this.document=c,this.Fi=l,this.Mi=d,this.xi=p,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=m=>Promise.resolve(),!Gl.v())throw new O(C.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new WR(this,s),this.Ki=t+x_,this.serializer=new T_(u),this.qi=new Ft(this.Ki,this.xi,new ob(this.serializer)),this.ci=new MR,this.li=new GR(this.referenceDelegate,this.serializer),this.remoteDocumentCache=V_(this.serializer),this.Pi=new LR,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,d===!1&&Se(wn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new O(C.FAILED_PRECONDITION,du);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.li.getHighestSequenceNumber(e)))})).then((e=>{this.ai=new st(e,this.Fi)})).then((()=>{this.ui=!0})).catch((e=>(this.qi&&this.qi.close(),Promise.reject(e))))}zi(e){return this.ki=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.qi.q((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ci.enqueueAndForget((async()=>{this.started&&await this.$i()})))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>ta(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ji(e).next((t=>{t||(this.isPrimary=!1,this.Ci.enqueueRetryable((()=>this.ki(!1))))}))})).next((()=>this.Ji(e))).next((t=>this.isPrimary&&!t?this.Hi(e).next((()=>!1)):!!t&&this.Zi(e).next((()=>!0)))))).catch((e=>{if($n(e))return x(wn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x(wn,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Ci.enqueueRetryable((()=>this.ki(e))),this.isPrimary=e}))}ji(e){return Ri(e).get(Kr).next((t=>R.resolve(this.Xi(t))))}Yi(e){return ta(e).delete(this.clientId)}async es(){if(this.isPrimary&&!this.ts(this.Li,lu)){this.Li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const r=Me(t,Is);return r.J().next((s=>{const i=this.ns(s,lu),o=s.filter((c=>i.indexOf(c)===-1));return R.forEach(o,(c=>r.delete(c.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ui)for(const t of e)this.Ui.removeItem(this.rs(t.clientId))}}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.$i().then((()=>this.es())).then((()=>this.Gi()))))}Xi(e){return!!e&&e.ownerId===this.clientId}Ji(e){return this.Mi?R.resolve(!0):Ri(e).get(Kr).next((t=>{if(t!==null&&this.ts(t.leaseTimestampMs,hu)&&!this.ss(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new O(C.FAILED_PRECONDITION,du);return!1}}return!(!this.networkEnabled||!this.inForeground)||ta(e).J().next((r=>this.ns(r,hu).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&x(wn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),await this.qi.runTransaction("shutdown","readwrite",[To,Is],(e=>{const t=new Bu(e,st.ce);return this.Hi(t).next((()=>this.Yi(t)))})),this.qi.close(),this.ls()}ns(e,t){return e.filter((r=>this.ts(r.updateTimeMs,t)&&!this.ss(r.clientId)))}hs(){return this.runTransaction("getActiveClients","readonly",(e=>ta(e).J().next((t=>this.ns(t,lu).map((r=>r.clientId))))))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(e,t){return mc.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new $R(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return pc.wt(this.serializer,e)}getBundleCache(){return this.Pi}runTransaction(e,t,r){x(wn,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(function(u){return u===18?jv:u===17?Tg:u===16?qv:u===15?Pl:u===14?Eg:u===13?Ig:u===12?Bv:u===11?yg:void z(60245)})(this.xi);let o;return this.qi.runTransaction(e,s,i,(c=>(o=new Bu(c,this.ai?this.ai.next():st.ce),t==="readwrite-primary"?this.ji(o).next((u=>!!u||this.Ji(o))).next((u=>{if(!u)throw Se(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable((()=>this.ki(!1))),new O(C.FAILED_PRECONDITION,cg);return r(o)})).next((u=>this.Zi(o).next((()=>u)))):this.Ps(o).next((()=>r(o)))))).then((c=>(o.raiseOnCommittedEvent(),c)))}Ps(e){return Ri(e).get(Kr).next((t=>{if(t!==null&&this.ts(t.leaseTimestampMs,hu)&&!this.ss(t.ownerId)&&!this.Xi(t)&&!(this.Mi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new O(C.FAILED_PRECONDITION,du)}))}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ri(e).put(Kr,t)}static v(){return Ft.v()}Hi(e){const t=Ri(e);return t.get(Kr).next((r=>this.Xi(r)?(x(wn,"Releasing primary lease."),t.delete(Kr)):R.resolve()))}ts(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Se(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.$i())))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Oi=()=>{this._s();const t=/(?:Version|Mobile)\/1[456]/;Um()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(e){var t;try{const r=((t=this.Ui)==null?void 0:t.getItem(this.rs(e)))!==null;return x(wn,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Se(wn,"Failed to get zombied client id.",r),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(e){Se("Failed to set zombie client id.",e)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch{}}rs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ri(n){return Me(n,To)}function ta(n){return Me(n,Is)}function Hl(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=X(),s=X();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Kl(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Um()?8:lg(xe())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ps(e,t,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new ab;return this.ys(e,t,o).next((c=>{if(i.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>i.result))}ws(e,t,r,s){return r.documentReadCount<this.Vs?(Zr()<=ne.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",es(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(Zr()<=ne.DEBUG&&x("QueryEngine","Query:",es(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Zr()<=ne.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",es(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,et(t))):R.resolve())}gs(e,t){if(Lf(t))return R.resolve(null);let r=et(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Oa(t,null,"F"),r=et(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=X(...i);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((u=>{const l=this.Ss(t,c);return this.bs(t,l,o,u.readTime)?this.gs(e,Oa(t,null,"F")):this.Ds(e,l,t,u)}))))})))))}ps(e,t,r,s){return Lf(t)||s.isEqual(K.min())?R.resolve(null):this.fs.getDocuments(e,r).next((i=>{const o=this.Ss(t,i);return this.bs(t,o,r,s)?R.resolve(null):(Zr()<=ne.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),es(t)),this.Ds(e,o,t,og(s,fs)).next((c=>c)))}))}Ss(e,t){let r=new ue(Gg(e));return t.forEach(((s,i)=>{vo(e,i)&&(r=r.add(i))})),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return Zr()<=ne.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",es(t)),this.fs.getDocumentsMatchingQuery(e,t,mt.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl="LocalStore",cb=3e8;class ub{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new de(J),this.Fs=new cn((i=>Rr(i)),wo),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new O_(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function M_(n,e,t,r){return new ub(n,e,t,r)}async function F_(n,e){const t=B(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let u=X();for(const l of s){o.push(l.batchId);for(const d of l.mutations)u=u.add(d.key)}for(const l of i){c.push(l.batchId);for(const d of l.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(r,u).next((l=>({Ns:l,removedBatchIds:o,addedBatchIds:c})))}))}))}function lb(n,e){const t=B(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,u,l,d){const p=l.batch,m=p.keys();let y=R.resolve();return m.forEach((N=>{y=y.next((()=>d.getEntry(u,N))).next((k=>{const b=l.docVersions.get(N);$(b!==null,48541),k.version.compareTo(b)<0&&(p.applyToRemoteDocument(k,l),k.isValidDocument()&&(k.setReadTime(l.commitVersion),d.addEntry(k)))}))})),y.next((()=>c.mutationQueue.removeMutationBatch(u,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=X();for(let l=0;l<c.mutationResults.length;++l)c.mutationResults[l].transformResults.length>0&&(u=u.add(c.batch.mutations[l].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function U_(n){const e=B(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function hb(n,e){const t=B(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((d,p)=>{const m=s.get(p);if(!m)return;c.push(t.li.removeMatchingKeys(i,d.removedDocuments,p).next((()=>t.li.addMatchingKeys(i,d.addedDocuments,p))));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(ve.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(p,y),(function(k,b,D){return k.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=cb?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0})(m,y,d)&&c.push(t.li.updateTargetData(i,y))}));let u=ot(),l=X();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(B_(i,o,e.documentUpdates).next((d=>{u=d.Bs,l=d.Ls}))),!r.isEqual(K.min())){const d=t.li.getLastRemoteSnapshotVersion(i).next((p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return R.waitFor(c).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,l))).next((()=>u))})).then((i=>(t.vs=s,i)))}function B_(n,e,t){let r=X(),s=X();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let o=ot();return t.forEach(((c,u)=>{const l=i.get(c);u.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(K.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):x(Wl,"Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)})),{Bs:o,Ls:s}}))}function db(n,e){const t=B(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=kn),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function bs(n,e){const t=B(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.li.getTargetData(r,e).next((i=>i?(s=i,R.resolve(s)):t.li.allocateTargetId(r).next((o=>(s=new Lt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r}))}async function Ss(n,e,t){const r=B(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!$n(o))throw o;x(Wl,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Ua(n,e,t){const r=B(n);let s=K.min(),i=X();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,l,d){const p=B(u),m=p.Fs.get(d);return m!==void 0?R.resolve(p.vs.get(m)):p.li.getTargetData(l,d)})(r,o,et(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next((u=>{i=u}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,t?s:K.min(),t?i:X()))).next((c=>(z_(r,$g(e),c),{documents:c,ks:i})))))}function q_(n,e){const t=B(n),r=B(t.li),s=t.vs.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",(i=>r.At(i,e).next((o=>o?o.target:null))))}function j_(n,e){const t=B(n),r=t.Ms.get(e)||K.min();return t.persistence.runTransaction("Get new document changes","readonly",(s=>t.xs.getAllFromCollectionGroup(s,e,og(r,fs),Number.MAX_SAFE_INTEGER))).then((s=>(z_(t,e,s),s)))}function z_(n,e,t){let r=n.Ms.get(e)||K.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Ms.set(e,r)}async function fb(n,e,t,r){const s=B(n);let i=X(),o=ot();for(const l of t){const d=e.Ks(l.metadata.name);l.document&&(i=i.add(d));const p=e.qs(l);p.setReadTime(e.Us(l.metadata.readTime)),o=o.insert(d,p)}const c=s.xs.newChangeBuffer({trackRemovals:!0}),u=await bs(s,(function(d){return et(Bs(ee.fromString(`__bundle__/docs/${d}`)))})(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",(l=>B_(l,c,o).next((d=>(c.apply(l),d))).next((d=>s.li.removeMatchingKeysForTargetId(l,u.targetId).next((()=>s.li.addMatchingKeys(l,i,u.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(l,d.Bs,d.Ls))).next((()=>d.Bs))))))}async function pb(n,e,t=X()){const r=await bs(n,et(fc(e.bundledQuery))),s=B(n);return s.persistence.runTransaction("Save named query","readwrite",(i=>{const o=Pe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.Pi.saveNamedQuery(i,e);const c=r.withResumeToken(ve.EMPTY_BYTE_STRING,o);return s.vs=s.vs.insert(c.targetId,c),s.li.updateTargetData(i,c).next((()=>s.li.removeMatchingKeysForTargetId(i,r.targetId))).next((()=>s.li.addMatchingKeys(i,t,r.targetId))).next((()=>s.Pi.saveNamedQuery(i,e)))}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="firestore_clients";function fp(n,e){return`${$_}_${n}_${e}`}const G_="firestore_mutations";function pp(n,e,t){let r=`${G_}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const H_="firestore_targets";function fu(n,e){return`${H_}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="SharedClientState";class Ba{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static $s(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new O(s.error.code,s.error.message))),o?new Ba(e,t,s.state,i):(Se(Vt,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class zi{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static $s(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new O(r.error.code,r.error.message))),i?new zi(e,r.state,s):(Se(Vt,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class qa{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static $s(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=Vl();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=hg(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new qa(e,i):(Se(Vt,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Ql{constructor(e,t){this.clientId=e,this.onlineState=t}static $s(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Ql(t.clientId,t.onlineState):(Se(Vt,`Failed to parse online state: ${e}`),null)}}class el{constructor(){this.activeTargetIds=Vl()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pu{constructor(e,t,r,s,i){this.window=e,this.Ci=t,this.persistenceKey=r,this.zs=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.js=this.Js.bind(this),this.Hs=new de(J),this.started=!1,this.Zs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Xs=fp(this.persistenceKey,this.zs),this.Ys=(function(u){return`firestore_sequence_number_${u}`})(this.persistenceKey),this.Hs=this.Hs.insert(this.zs,new el),this.eo=new RegExp(`^${$_}_${o}_([^_]*)$`),this.no=new RegExp(`^${G_}_${o}_(\\d+)(?:_(.*))?$`),this.ro=new RegExp(`^${H_}_${o}_(\\d+)$`),this.io=(function(u){return`firestore_online_state_${u}`})(this.persistenceKey),this.so=(function(u){return`firestore_bundle_loaded_v2_${u}`})(this.persistenceKey),this.window.addEventListener("storage",this.js)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.hs();for(const r of e){if(r===this.zs)continue;const s=this.getItem(fp(this.persistenceKey,r));if(s){const i=qa.$s(r,s);i&&(this.Hs=this.Hs.insert(i.clientId,i))}}this.oo();const t=this.storage.getItem(this.io);if(t){const r=this._o(t);r&&this.ao(r)}for(const r of this.Zs)this.Js(r);this.Zs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ys,JSON.stringify(e))}getAllActiveQueryTargets(){return this.uo(this.Hs)}isActiveQueryTarget(e){let t=!1;return this.Hs.forEach(((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.co(e,"pending")}updateMutationState(e,t,r){this.co(e,t,r),this.lo(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(fu(this.persistenceKey,e));if(s){const i=zi.$s(e,s);i&&(r=i.state)}}return t&&this.ho.Qs(e),this.oo(),r}removeLocalQueryTarget(e){this.ho.Gs(e),this.oo()}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(fu(this.persistenceKey,e))}updateQueryState(e,t,r){this.Po(e,t,r)}handleUserChange(e,t,r){t.forEach((s=>{this.lo(s)})),this.currentUser=e,r.forEach((s=>{this.addPendingMutation(s)}))}setOnlineState(e){this.To(e)}notifyBundleLoaded(e){this.Io(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return x(Vt,"READ",e,t),t}setItem(e,t){x(Vt,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){x(Vt,"REMOVE",e),this.storage.removeItem(e)}Js(e){const t=e;if(t.storageArea===this.storage){if(x(Vt,"EVENT",t.key,t.newValue),t.key===this.Xs)return void Se("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ci.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.eo.test(t.key)){if(t.newValue==null){const r=this.Eo(t.key);return this.Ro(r,null)}{const r=this.Ao(t.key,t.newValue);if(r)return this.Ro(r.clientId,r)}}else if(this.no.test(t.key)){if(t.newValue!==null){const r=this.Vo(t.key,t.newValue);if(r)return this.mo(r)}}else if(this.ro.test(t.key)){if(t.newValue!==null){const r=this.fo(t.key,t.newValue);if(r)return this.po(r)}}else if(t.key===this.io){if(t.newValue!==null){const r=this._o(t.newValue);if(r)return this.ao(r)}}else if(t.key===this.Ys){const r=(function(i){let o=st.ce;if(i!=null)try{const c=JSON.parse(i);$(typeof c=="number",30636,{yo:i}),o=c}catch(c){Se(Vt,"Failed to read sequence number from WebStorage",c)}return o})(t.newValue);r!==st.ce&&this.sequenceNumberHandler(r)}else if(t.key===this.so){const r=this.wo(t.newValue);await Promise.all(r.map((s=>this.syncEngine.So(s))))}}}else this.Zs.push(t)}))}}get ho(){return this.Hs.get(this.zs)}oo(){this.setItem(this.Xs,this.ho.Ws())}co(e,t,r){const s=new Ba(this.currentUser,e,t,r),i=pp(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Ws())}lo(e){const t=pp(this.persistenceKey,this.currentUser,e);this.removeItem(t)}To(e){const t={clientId:this.zs,onlineState:e};this.storage.setItem(this.io,JSON.stringify(t))}Po(e,t,r){const s=fu(this.persistenceKey,e),i=new zi(e,t,r);this.setItem(s,i.Ws())}Io(e){const t=JSON.stringify(Array.from(e));this.setItem(this.so,t)}Eo(e){const t=this.eo.exec(e);return t?t[1]:null}Ao(e,t){const r=this.Eo(e);return qa.$s(r,t)}Vo(e,t){const r=this.no.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Ba.$s(new qe(i),s,t)}fo(e,t){const r=this.ro.exec(e),s=Number(r[1]);return zi.$s(s,t)}_o(e){return Ql.$s(e)}wo(e){return JSON.parse(e)}async mo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.bo(e.batchId,e.state,e.error);x(Vt,`Ignoring mutation for non-active user ${e.user.uid}`)}po(e){return this.syncEngine.Do(e.targetId,e.state,e.error)}Ro(e,t){const r=t?this.Hs.insert(e,t):this.Hs.remove(e),s=this.uo(this.Hs),i=this.uo(r),o=[],c=[];return i.forEach((u=>{s.has(u)||o.push(u)})),s.forEach((u=>{i.has(u)||c.push(u)})),this.syncEngine.Co(o,c).then((()=>{this.Hs=r}))}ao(e){this.Hs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}uo(e){let t=Vl();return e.forEach(((r,s)=>{t=t.unionWith(s.activeTargetIds)})),t}}class K_{constructor(){this.vo=new el,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new el,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="ConnectivityMonitor";class gp{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){x(mp,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){x(mp,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na=null;function tl(){return na===null?na=(function(){return 268435456+Math.round(2147483648*Math.random())})():na++,"0x"+na.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="RestConnection",gb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class _b{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===no?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const o=tl(),c=this.Qo(e,t.toUriEncodedString());x(mu,`Sending RPC '${e}' ${o}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:l}=new URL(c),d=Ms(l);return this.zo(e,c,u,r,d).then((p=>(x(mu,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw lt(mu,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}jo(e,t,r,s,i,o){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Us})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Qo(e,t){const r=gb[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection",bi=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class ss extends _b{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ss.c_){const e=Ym();bi(e,Jm.STAT_EVENT,(t=>{t.stat===ku.PROXY?x(Je,"STAT_EVENT: detected buffering proxy"):t.stat===ku.NOPROXY&&x(Je,"STAT_EVENT: detected no buffering proxy")})),ss.c_=!0}}zo(e,t,r,s,i){const o=tl();return new Promise(((c,u)=>{const l=new Wm;l.setWithCredentials(!0),l.listenOnce(Qm.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case ua.NO_ERROR:const p=l.getResponseJson();x(Je,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case ua.TIMEOUT:x(Je,`RPC '${e}' ${o} timed out`),u(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case ua.HTTP_ERROR:const m=l.getStatus();if(x(Je,`RPC '${e}' ${o} failed with status:`,m,"response text:",l.getResponseText()),m>0){let y=l.getResponseJson();Array.isArray(y)&&(y=y[0]);const N=y==null?void 0:y.error;if(N&&N.status&&N.message){const k=(function(D){const L=D.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(L)>=0?L:C.UNKNOWN})(N.status);u(new O(k,N.message))}else u(new O(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new O(C.UNAVAILABLE,"Connection failed."));break;default:z(9055,{l_:e,streamId:o,h_:l.getLastErrorCode(),P_:l.getLastError()})}}finally{x(Je,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(s);x(Je,`RPC '${e}' ${o} sending request:`,s),l.send(t,"POST",d,r,15)}))}T_(e,t,r){const s=tl(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=i.join("");x(Je,`Creating RPC '${e}' stream ${s}: ${l}`,c);const d=o.createWebChannel(l,c);this.I_(d);let p=!1,m=!1;const y=new yb({Jo:N=>{m?x(Je,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(p||(x(Je,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),x(Je,`RPC '${e}' stream ${s} sending:`,N),d.send(N))},Ho:()=>d.close()});return bi(d,Di.EventType.OPEN,(()=>{m||(x(Je,`RPC '${e}' stream ${s} transport opened.`),y.i_())})),bi(d,Di.EventType.CLOSE,(()=>{m||(m=!0,x(Je,`RPC '${e}' stream ${s} transport closed`),y.o_(),this.E_(d))})),bi(d,Di.EventType.ERROR,(N=>{m||(m=!0,lt(Je,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),y.o_(new O(C.UNAVAILABLE,"The operation could not be completed")))})),bi(d,Di.EventType.MESSAGE,(N=>{var k;if(!m){const b=N.data[0];$(!!b,16349);const D=b,L=(D==null?void 0:D.error)||((k=D[0])==null?void 0:k.error);if(L){x(Je,`RPC '${e}' stream ${s} received error:`,L);const M=L.status;let G=(function(T){const _=De[T];if(_!==void 0)return i_(_)})(M),Q=L.message;M==="NOT_FOUND"&&Q.includes("database")&&Q.includes("does not exist")&&Q.includes(this.databaseId.database)&&lt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),G===void 0&&(G=C.INTERNAL,Q="Unknown error status: "+M+" with message "+L.message),m=!0,y.o_(new O(G,Q)),d.close()}else x(Je,`RPC '${e}' stream ${s} received:`,b),y.__(b)}})),ss.u_(),setTimeout((()=>{y.s_()}),0),y}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Xm()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(n){return new ss(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(){return typeof window<"u"?window:null}function ya(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(n){return new RR(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ss.c_=!1;class Jl{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="PersistentStream";class Q_{constructor(e,t,r,s,i,o,c,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Jl(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Se(t.toString()),Se("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new O(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return x(_p,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(x(_p,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Eb extends Q_{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=PR(this.serializer,e),r=(function(i){if(!("targetChange"in i))return K.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?K.min():o.readTime?Pe(o.readTime):K.min()})(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=Qu(this.serializer),t.addTarget=(function(i,o){let c;const u=o.target;if(c=ka(u)?{documents:p_(i,u)}:{query:dc(i,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=u_(i,o.resumeToken);const l=Ku(i,o.expectedCount);l!==null&&(c.expectedCount=l)}else if(o.snapshotVersion.compareTo(K.min())>0){c.readTime=Rs(i,o.snapshotVersion.toTimestamp());const l=Ku(i,o.expectedCount);l!==null&&(c.expectedCount=l)}return c})(this.serializer,e);const r=DR(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=Qu(this.serializer),t.removeTarget=e,this.K_(t)}}class Tb extends Q_{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return $(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){$(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=CR(e.writeResults,e.commitTime),r=Pe(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Qu(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>ao(this.serializer,r)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{}class Ab extends wb{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Wu(t,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(C.UNKNOWN,i.toString())}))}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,Wu(t,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(C.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function vb(n,e,t,r){return new Ab(n,e,t,r)}class Rb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Se(t),this.aa=!1):x("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="RemoteStore";class bb{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new tn(1e3),this.Va=new tn(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo((o=>{r.enqueueAndForget((async()=>{Hn(this)&&(x(qt,"Restarting streams for network reachability change."),await(async function(u){const l=B(u);l.da.add(4),await $s(l),l.ga.set("Unknown"),l.da.delete(4),await So(l)})(this))}))})),this.ga=new Rb(r,s)}}async function So(n){if(Hn(n))for(const e of n.ma)await e(!0)}async function $s(n){for(const e of n.ma)await e(!1)}function nl(n,e){return n.Ea.get(e)||void 0}function _c(n,e){const t=B(n),r=nl(t,e.targetId);if(r!==void 0&&t.Ia.has(r))return;const s=(function(c,u){const l=nl(c,u);l!==void 0&&c.Ra.delete(l);const d=(function(m,y){return y%2!=0?m.Va.next():m.Aa.next()})(c,u);return c.Ea.set(u,d),c.Ra.set(d,u),d})(t,e.targetId);x(qt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Lt(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(s,i),Zl(t)?Xl(t):Hs(t).O_()&&Yl(t,i)}function Ps(n,e){const t=B(n),r=Hs(t),s=nl(t,e);x(qt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ia.delete(s),t.Ea.delete(e),t.Ra.delete(s),r.O_()&&J_(t,s),t.Ia.size===0&&(r.O_()?r.L_():Hn(t)&&t.ga.set("Unknown"))}function Yl(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void x(qt,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}Hs(n).Z_(e)}function J_(n,e){n.pa.$e(e),Hs(n).X_(e)}function Xl(n){n.pa=new TR({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):X()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Hs(n).start(),n.ga.ua()}function Zl(n){return Hn(n)&&!Hs(n).x_()&&n.Ia.size>0}function Hn(n){return B(n).da.size===0}function Y_(n){n.pa=void 0}async function Sb(n){n.ga.set("Online")}async function Pb(n){n.Ia.forEach(((e,t)=>{Yl(n,e)}))}async function Cb(n,e){Y_(n),Zl(n)?(n.ga.ha(e),Xl(n)):n.ga.set("Unknown")}async function Db(n,e,t){if(n.ga.set("Online"),e instanceof c_&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds){if(s.Ia.has(c)){const u=s.Ra.get(c);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.Ea.delete(u),s.Ra.delete(c)),s.Ia.delete(c)}s.pa.removeTarget(c)}})(n,e)}catch(r){x(qt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ja(n,r)}else if(e instanceof ga?n.pa.Xe(e):e instanceof a_?n.pa.st(e):n.pa.tt(e),!t.isEqual(K.min()))try{const r=await U_(n.localStore);t.compareTo(r)>=0&&await(function(i,o){const c=i.pa.Tt(o);c.targetChanges.forEach(((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=i.Ia.get(d);p&&i.Ia.set(d,p.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,d)=>{const p=i.Ia.get(l);if(!p)return;i.Ia.set(l,p.withResumeToken(ve.EMPTY_BYTE_STRING,p.snapshotVersion)),J_(i,l);const m=new Lt(p.target,l,d,p.sequenceNumber);Yl(i,m)}));const u=(function(d,p){const m=new Map;p.targetChanges.forEach(((N,k)=>{const b=d.Ra.get(k);b!==void 0&&m.set(b,N)}));let y=new de(J);return p.targetMismatches.forEach(((N,k)=>{const b=d.Ra.get(N);b!==void 0&&(y=y.insert(b,k))})),new zs(p.snapshotVersion,m,y,p.documentUpdates,p.resolvedLimboDocuments)})(i,c);return i.remoteSyncer.applyRemoteEvent(u)})(n,t)}catch(r){x(qt,"Failed to raise snapshot:",r),await ja(n,r)}}async function ja(n,e,t){if(!$n(e))throw e;n.da.add(1),await $s(n),n.ga.set("Offline"),t||(t=()=>U_(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{x(qt,"Retrying IndexedDB access"),await t(),n.da.delete(1),await So(n)}))}function X_(n,e){return e().catch((t=>ja(n,t,e)))}async function Gs(n){const e=B(n),t=Bn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:kn;for(;Nb(e);)try{const s=await db(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,kb(e,s)}catch(s){await ja(e,s)}Z_(e)&&ey(e)}function Nb(n){return Hn(n)&&n.Ta.length<10}function kb(n,e){n.Ta.push(e);const t=Bn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Z_(n){return Hn(n)&&!Bn(n).x_()&&n.Ta.length>0}function ey(n){Bn(n).start()}async function Vb(n){Bn(n).ra()}async function Ob(n){const e=Bn(n);for(const t of n.Ta)e.ea(t.mutations)}async function xb(n,e,t){const r=n.Ta.shift(),s=Ml.from(r,e,t);await X_(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Gs(n)}async function Lb(n,e){e&&Bn(n).Y_&&await(async function(r,s){if((function(o){return s_(o)&&o!==C.ABORTED})(s.code)){const i=r.Ta.shift();Bn(r).B_(),await X_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Gs(r)}})(n,e),Z_(n)&&ey(n)}async function yp(n,e){const t=B(n);t.asyncQueue.verifyOperationInProgress(),x(qt,"RemoteStore received new credentials");const r=Hn(t);t.da.add(3),await $s(t),r&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await So(t)}async function rl(n,e){const t=B(n);e?(t.da.delete(2),await So(t)):e||(t.da.add(2),await $s(t),t.ga.set("Unknown"))}function Hs(n){return n.ya||(n.ya=(function(t,r,s){const i=B(t);return i.sa(),new Eb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Sb.bind(null,n),Yo:Pb.bind(null,n),t_:Cb.bind(null,n),H_:Db.bind(null,n)}),n.ma.push((async e=>{e?(n.ya.B_(),Zl(n)?Xl(n):n.ga.set("Unknown")):(await n.ya.stop(),Y_(n))}))),n.ya}function Bn(n){return n.wa||(n.wa=(function(t,r,s){const i=B(t);return i.sa(),new Tb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Vb.bind(null,n),t_:Lb.bind(null,n),ta:Ob.bind(null,n),na:xb.bind(null,n)}),n.ma.push((async e=>{e?(n.wa.B_(),await Gs(n)):(await n.wa.stop(),n.Ta.length>0&&(x(qt,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new eh(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ks(n,e){if(Se("AsyncQueue",`${e}: ${n}`),$n(n))return new O(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{static emptySet(e){return new Ir(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=Ni(),this.sortedSet=new de(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ir)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ir;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.Sa=new de(U.comparator)}track(e){const t=e.doc.key,r=this.Sa.get(t);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(t):e.type===1&&r.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):z(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Dr{constructor(e,t,r,s,i,o,c,u,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Dr(e,t,Ir.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ao(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some((e=>e.Ma()))}}class Fb{constructor(){this.queries=Ep(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,r){const s=B(t),i=s.queries;s.queries=Ep(),i.forEach(((o,c)=>{for(const u of c.va)u.onError(r)}))})(this,new O(C.ABORTED,"Firestore shutting down"))}}function Ep(){return new cn((n=>zg(n)),Ao)}async function th(n,e){const t=B(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new Mb,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await t.onListen(s,!0);break;case 1:i.Ca=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Ks(o,`Initialization of query '${es(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.va.push(e),e.Oa(t.onlineState),i.Ca&&e.Na(i.Ca)&&rh(t)}async function nh(n,e){const t=B(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.va.indexOf(e);o>=0&&(i.va.splice(o,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Ub(n,e){const t=B(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.va)c.Na(s)&&(r=!0);o.Ca=s}}r&&rh(t)}function Bb(n,e,t){const r=B(n),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(t);r.queries.delete(e)}function rh(n){n.xa.forEach((e=>{e.next()}))}var sl,Tp;(Tp=sl||(sl={})).Ba="default",Tp.Cache="cache";class sh{constructor(e,t,r){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Dr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const r=t!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=Dr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==sl.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,t){this.Qa=e,this.byteLength=t}Ga(){return"metadata"in this.Qa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e){this.serializer=e}Ks(e){return Ut(this.serializer,e)}qs(e){return e.metadata.exists?hc(this.serializer,e.document,!1):me.newNoDocument(this.Ks(e.metadata.name),this.Us(e.metadata.readTime))}Us(e){return Pe(e)}}class ih{constructor(e,t){this.za=e,this.serializer=t,this.ja=[],this.Ja=[],this.collectionGroups=new Set,this.progress=ny(e)}get queries(){return this.ja}get documents(){return this.Ja}Ha(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Qa.namedQuery)this.ja.push(e.Qa.namedQuery);else if(e.Qa.documentMetadata){this.Ja.push({metadata:e.Qa.documentMetadata}),e.Qa.documentMetadata.exists||++t;const r=ee.fromString(e.Qa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Qa.document&&(this.Ja[this.Ja.length-1].document=e.Qa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}Za(e){const t=new Map,r=new wp(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.Ks(s.metadata.name);for(const o of s.metadata.queries){const c=(t.get(o)||X()).add(i);t.set(o,c)}}return t}async Xa(e){const t=await fb(e,new wp(this.serializer),this.Ja,this.za.id),r=this.Za(this.documents);for(const s of this.ja)await pb(e,s,r.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Ya:this.collectionGroups,eu:t}}}function ny(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this.key=e}}class sy{constructor(e){this.key=e}}class iy{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=X(),this.mutatedKeys=X(),this.iu=Gg(e),this.su=new Ir(this.iu)}get ou(){return this.tu}_u(e,t){const r=t?t.au:new Ip,s=t?t.su:this.su;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const m=s.get(d),y=vo(this.query,p)?p:null,N=!!m&&this.mutatedKeys.has(m.key),k=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let b=!1;m&&y?m.data.isEqual(y.data)?N!==k&&(r.track({type:3,doc:y}),b=!0):this.uu(m,y)||(r.track({type:2,doc:y}),b=!0,(u&&this.iu(y,u)>0||l&&this.iu(y,l)<0)&&(c=!0)):!m&&y?(r.track({type:0,doc:y}),b=!0):m&&!y&&(r.track({type:1,doc:m}),b=!0,(u||l)&&(c=!0)),b&&(y?(o=o.add(y),i=k?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{su:o,au:r,bs:c,mutatedKeys:i}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort(((d,p)=>(function(y,N){const k=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z(20277,{Vt:b})}};return k(y)-k(N)})(d.type,p.type)||this.iu(d.doc,p.doc))),this.cu(r),s=s??!1;const c=t&&!s?this.lu():[],u=this.ru.size===0&&this.current&&!s?1:0,l=u!==this.nu;return this.nu=u,o.length!==0||l?{snapshot:new Dr(this.query,e.su,i,o,e.mutatedKeys,u===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:c}:{hu:c}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Ip,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach((t=>this.tu=this.tu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.tu=this.tu.delete(t))),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=X(),this.su.forEach((r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))}));const t=[];return e.forEach((r=>{this.ru.has(r)||t.push(new sy(r))})),this.ru.forEach((r=>{e.has(r)||t.push(new ry(r))})),t}Tu(e){this.tu=e.ks,this.ru=X();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return Dr.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Kn="SyncEngine";class qb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class jb{constructor(e){this.key=e,this.Eu=!1}}class zb{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new cn((c=>zg(c)),Ao),this.Vu=new Map,this.du=new Set,this.mu=new de(U.comparator),this.fu=new Map,this.gu=new zl,this.pu={},this.yu=new Map,this.wu=tn.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function $b(n,e,t=!0){const r=yc(n);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await oy(r,e,t,!0),s}async function Gb(n,e){const t=yc(n);await oy(t,e,!0,!1)}async function oy(n,e,t,r){const s=await bs(n.localStore,et(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await oh(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&_c(n.remoteStore,s),c}async function oh(n,e,t,r,s){n.bu=(p,m,y)=>(async function(k,b,D,L){let M=b.view._u(D);M.bs&&(M=await Ua(k.localStore,b.query,!1).then((({documents:T})=>b.view._u(T,M))));const G=L&&L.targetChanges.get(b.targetId),Q=L&&L.targetMismatches.get(b.targetId)!=null,W=b.view.applyChanges(M,k.isPrimaryClient,G,Q);return il(k,b.targetId,W.hu),W.snapshot})(n,p,m,y);const i=await Ua(n.localStore,e,!0),o=new iy(e,i.ks),c=o._u(i.documents),u=bo.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),l=o.applyChanges(c,n.isPrimaryClient,u);il(n,t,l.hu);const d=new qb(e,t,o);return n.Au.set(e,d),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),l.snapshot}async function Hb(n,e,t){const r=B(n),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter((o=>!Ao(o,e)))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ss(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ps(r.remoteStore,s.targetId),Cs(r,s.targetId)})).catch(zn)):(Cs(r,s.targetId),await Ss(r.localStore,s.targetId,!0))}async function Kb(n,e){const t=B(n),r=t.Au.get(e),s=t.Vu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ps(t.remoteStore,r.targetId))}async function Wb(n,e,t){const r=lh(n);try{const s=await(function(o,c){const u=B(o),l=oe.now(),d=c.reduce(((y,N)=>y.add(N.key)),X());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let N=ot(),k=X();return u.xs.getEntries(y,d).next((b=>{N=b,N.forEach(((D,L)=>{L.isValidDocument()||(k=k.add(D))}))})).next((()=>u.localDocuments.getOverlayedDocuments(y,N))).next((b=>{p=b;const D=[];for(const L of c){const M=_R(L,p.get(L.key).overlayedDocument);M!=null&&D.push(new un(L.key,M,kg(M.value.mapValue),Te.exists(!0)))}return u.mutationQueue.addMutationBatch(y,l,D,c)})).next((b=>{m=b;const D=b.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(y,b.batchId,D)}))})).then((()=>({batchId:m.batchId,changes:Kg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,u){let l=o.pu[o.currentUser.toKey()];l||(l=new de(J)),l=l.insert(c,u),o.pu[o.currentUser.toKey()]=l})(r,s.batchId,t),await ln(r,s.changes),await Gs(r.remoteStore)}catch(s){const i=Ks(s,"Failed to persist write");t.reject(i)}}async function ay(n,e){const t=B(n);try{const r=await hb(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.fu.get(i);o&&($(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Eu=!0:s.modifiedDocuments.size>0?$(o.Eu,14607):s.removedDocuments.size>0&&($(o.Eu,42227),o.Eu=!1))})),await ln(t,r,e)}catch(r){await zn(r)}}function Ap(n,e,t){const r=B(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Au.forEach(((i,o)=>{const c=o.view.Oa(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const u=B(o);u.onlineState=c;let l=!1;u.queries.forEach(((d,p)=>{for(const m of p.va)m.Oa(c)&&(l=!0)})),l&&rh(u)})(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Qb(n,e,t){const r=B(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.fu.get(e),i=s&&s.key;if(i){let o=new de(U.comparator);o=o.insert(i,me.newNoDocument(i,K.min()));const c=X().add(i),u=new zs(K.min(),new Map,new de(J),o,c);await ay(r,u),r.mu=r.mu.remove(i),r.fu.delete(e),uh(r)}else await Ss(r.localStore,e,!1).then((()=>Cs(r,e,t))).catch(zn)}async function Jb(n,e){const t=B(n),r=e.batch.batchId;try{const s=await lb(t.localStore,e);ch(t,r,null),ah(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ln(t,s)}catch(s){await zn(s)}}async function Yb(n,e,t){const r=B(n);try{const s=await(function(o,c){const u=B(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(l=>{let d;return u.mutationQueue.lookupMutationBatch(l,c).next((p=>($(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(l,p)))).next((()=>u.mutationQueue.performConsistencyCheck(l))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(l,d,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d))).next((()=>u.localDocuments.getDocuments(l,d)))}))})(r.localStore,e);ch(r,e,t),ah(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ln(r,s)}catch(s){await zn(s)}}async function Xb(n,e){const t=B(n);Hn(t.remoteStore)||x(Kn,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await(function(o){const c=B(o);return c.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(u=>c.mutationQueue.getHighestUnacknowledgedBatchId(u)))})(t.localStore);if(r===kn)return void e.resolve();const s=t.yu.get(r)||[];s.push(e),t.yu.set(r,s)}catch(r){const s=Ks(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function ah(n,e){(n.yu.get(e)||[]).forEach((t=>{t.resolve()})),n.yu.delete(e)}function ch(n,e,t){const r=B(n);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function Cs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Vu.get(e))n.Au.delete(r),t&&n.Ru.Du(r,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach((r=>{n.gu.containsKey(r)||cy(n,r)}))}function cy(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(Ps(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),uh(n))}function il(n,e,t){for(const r of t)r instanceof ry?(n.gu.addReference(r.key,e),Zb(n,r)):r instanceof sy?(x(Kn,"Document no longer in limbo: "+r.key),n.gu.removeReference(r.key,e),n.gu.containsKey(r.key)||cy(n,r.key)):z(19791,{Cu:r})}function Zb(n,e){const t=e.key,r=t.path.canonicalString();n.mu.get(t)||n.du.has(r)||(x(Kn,"New document in limbo: "+t),n.du.add(r),uh(n))}function uh(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new U(ee.fromString(e)),r=n.wu.next();n.fu.set(r,new jb(t)),n.mu=n.mu.insert(t,r),_c(n.remoteStore,new Lt(et(Bs(t.path)),r,"TargetPurposeLimboResolution",st.ce))}}async function ln(n,e,t){const r=B(n),s=[],i=[],o=[];r.Au.isEmpty()||(r.Au.forEach(((c,u)=>{o.push(r.bu(u,e,t).then((l=>{var d;if((l||t)&&r.isPrimaryClient){const p=l?!l.fromCache:(d=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(l){s.push(l);const p=Kl.Es(u.targetId,l);i.push(p)}})))})),await Promise.all(o),r.Ru.H_(s),await(async function(u,l){const d=B(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>R.forEach(l,(m=>R.forEach(m.Ts,(y=>d.persistence.referenceDelegate.addReference(p,m.targetId,y))).next((()=>R.forEach(m.Is,(y=>d.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))))))}catch(p){if(!$n(p))throw p;x(Wl,"Failed to update sequence numbers: "+p)}for(const p of l){const m=p.targetId;if(!p.fromCache){const y=d.vs.get(m),N=y.snapshotVersion,k=y.withLastLimboFreeSnapshotVersion(N);d.vs=d.vs.insert(m,k)}}})(r.localStore,i))}async function eS(n,e){const t=B(n);if(!t.currentUser.isEqual(e)){x(Kn,"User change. New user:",e.toKey());const r=await F_(t.localStore,e);t.currentUser=e,(function(i,o){i.yu.forEach((c=>{c.forEach((u=>{u.reject(new O(C.CANCELLED,o))}))})),i.yu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ln(t,r.Ns)}}function tS(n,e){const t=B(n),r=t.fu.get(e);if(r&&r.Eu)return X().add(r.key);{let s=X();const i=t.Vu.get(e);if(!i)return s;for(const o of i){const c=t.Au.get(o);s=s.unionWith(c.view.ou)}return s}}async function nS(n,e){const t=B(n),r=await Ua(t.localStore,e.query,!0),s=e.view.Tu(r);return t.isPrimaryClient&&il(t,e.targetId,s.hu),s}async function rS(n,e){const t=B(n);return j_(t.localStore,e).then((r=>ln(t,r)))}async function sS(n,e,t,r){const s=B(n),i=await(function(c,u){const l=B(c),d=B(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",(p=>d.Xn(p,u).next((m=>m?l.localDocuments.getDocuments(p,m):R.resolve(null)))))})(s.localStore,e);i!==null?(t==="pending"?await Gs(s.remoteStore):t==="acknowledged"||t==="rejected"?(ch(s,e,r||null),ah(s,e),(function(c,u){B(B(c).mutationQueue).nr(u)})(s.localStore,e)):z(6720,"Unknown batchState",{vu:t}),await ln(s,i)):x(Kn,"Cannot apply mutation batch with id: "+e)}async function iS(n,e){const t=B(n);if(yc(t),lh(t),e===!0&&t.Su!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await vp(t,r.toArray());t.Su=!0,await rl(t.remoteStore,!0);for(const i of s)_c(t.remoteStore,i)}else if(e===!1&&t.Su!==!1){const r=[];let s=Promise.resolve();t.Vu.forEach(((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then((()=>(Cs(t,o),Ss(t.localStore,o,!0)))),Ps(t.remoteStore,o)})),await s,await vp(t,r),(function(o){const c=B(o);c.fu.forEach(((u,l)=>{Ps(c.remoteStore,l)})),c.gu.zr(),c.fu=new Map,c.mu=new de(U.comparator)})(t),t.Su=!1,await rl(t.remoteStore,!1)}}async function vp(n,e,t){const r=B(n),s=[],i=[];for(const o of e){let c;const u=r.Vu.get(o);if(u&&u.length!==0){c=await bs(r.localStore,et(u[0]));for(const l of u){const d=r.Au.get(l),p=await nS(r,d);p.snapshot&&i.push(p.snapshot)}}else{const l=await q_(r.localStore,o);c=await bs(r.localStore,l),await oh(r,uy(l),o,!1,c.resumeToken)}s.push(c)}return r.Ru.H_(i),s}function uy(n){return Bg(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function oS(n){return(function(t){return B(B(t).persistence).hs()})(B(n).localStore)}async function aS(n,e,t,r){const s=B(n);if(s.Su)return void x(Kn,"Ignoring unexpected query state notification.");const i=s.Vu.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await j_(s.localStore,$g(i[0])),c=zs.createSynthesizedRemoteEventForCurrentChange(e,t==="current",ve.EMPTY_BYTE_STRING);await ln(s,o,c);break}case"rejected":await Ss(s.localStore,e,!0),Cs(s,e,r);break;default:z(64155,t)}}async function cS(n,e,t){const r=yc(n);if(r.Su){for(const s of e){if(r.Vu.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){x(Kn,"Adding an already active target "+s);continue}const i=await q_(r.localStore,s),o=await bs(r.localStore,i);await oh(r,uy(i),o.targetId,!1,o.resumeToken),_c(r.remoteStore,o)}for(const s of t)r.Vu.has(s)&&await Ss(r.localStore,s,!1).then((()=>{Ps(r.remoteStore,s),Cs(r,s)})).catch(zn)}}function yc(n){const e=B(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ay.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Qb.bind(null,e),e.Ru.H_=Ub.bind(null,e.eventManager),e.Ru.Du=Bb.bind(null,e.eventManager),e}function lh(n){const e=B(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Jb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yb.bind(null,e),e}function uS(n,e,t){const r=B(n);(async function(i,o,c){try{const u=await o.getMetadata();if(await(function(y,N){const k=B(y),b=Pe(N.createTime);return k.persistence.runTransaction("hasNewerBundle","readonly",(D=>k.Pi.getBundleMetadata(D,N.id))).then((D=>!!D&&D.createTime.compareTo(b)>=0))})(i.localStore,u))return await o.close(),c._completeWith((function(y){return{taskState:"Success",documentsLoaded:y.totalDocuments,bytesLoaded:y.totalBytes,totalDocuments:y.totalDocuments,totalBytes:y.totalBytes}})(u)),Promise.resolve(new Set);c._updateProgress(ny(u));const l=new ih(u,o.serializer);let d=await o.Fu();for(;d;){const m=await l.Ha(d);m&&c._updateProgress(m),d=await o.Fu()}const p=await l.Xa(i.localStore);return await ln(i,p.eu,void 0),await(function(y,N){const k=B(y);return k.persistence.runTransaction("Save bundle","readwrite",(b=>k.Pi.saveBundleMetadata(b,N)))})(i.localStore,u),c._completeWith(p.progress),Promise.resolve(p.Ya)}catch(u){return lt(Kn,`Loading bundle failed with ${u}`),c._failWith(u),Promise.resolve(new Set)}})(r,e,t).then((s=>{r.sharedClientState.notifyBundleLoaded(s)}))}class Ds{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=kr(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return M_(this.persistence,new L_,e.initialUser,this.serializer)}xu(e){return new $l(gc.Vi,this.serializer)}Mu(e){return new K_}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ds.provider={build:()=>new Ds};class hh extends Ds{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){$(this.persistence.referenceDelegate instanceof Fa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new D_(r,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?Ye.withCacheSize(this.cacheSizeBytes):Ye.DEFAULT;return new $l((r=>Fa.Vi(r,t)),this.serializer)}}class dh extends Ds{constructor(e,t,r){super(),this.Lu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Lu.initialize(this,e),await lh(this.Lu.syncEngine),await Gs(this.Lu.remoteStore),await this.persistence.zi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}Ou(e){return M_(this.persistence,new L_,e.initialUser,this.serializer)}Nu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new D_(r,e.asyncQueue,t)}Bu(e,t){const r=new gv(t,this.persistence);return new mv(e.asyncQueue,r)}xu(e){const t=Hl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ye.withCacheSize(this.cacheSizeBytes):Ye.DEFAULT;return new Gl(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,W_(),ya(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Mu(e){return new K_}}class ly extends dh{constructor(e,t){super(e,t,!1),this.Lu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Lu.syncEngine;this.sharedClientState instanceof pu&&(this.sharedClientState.syncEngine={bo:sS.bind(null,t),Do:aS.bind(null,t),Co:cS.bind(null,t),hs:oS.bind(null,t),So:rS.bind(null,t)},await this.sharedClientState.start()),await this.persistence.zi((async r=>{await iS(this.Lu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())}))}Mu(e){const t=W_();if(!pu.v(t))throw new O(C.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Hl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new pu(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class qn{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ap(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eS.bind(null,this.syncEngine),await rl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Fb})()}createDatastore(e){const t=kr(e.databaseInfo.databaseId),r=Ib(e.databaseInfo);return vb(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,o,c){return new bb(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ap(this.syncEngine,t,0)),(function(){return gp.v()?new gp:new mb})())}createSyncEngine(e,t){return(function(s,i,o,c,u,l,d){const p=new zb(s,i,o,c,u,l);return d&&(p.Su=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=B(s);x(qt,"RemoteStore shutting down."),i.da.add(5),await $s(i),i.fa.shutdown(),i.ga.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}qn.provider={build:()=>new qn};function Rp(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Se("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,t){this.qu=e,this.serializer=t,this.metadata=new ze,this.buffer=new Uint8Array,this.Uu=(function(){return new TextDecoder("utf-8")})(),this.$u().then((r=>{r&&r.Ga()?this.metadata.resolve(r.Qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Qa)}`))}),(r=>this.metadata.reject(r)))}close(){return this.qu.cancel()}async getMetadata(){return this.metadata.promise}async Fu(){return await this.getMetadata(),this.$u()}async $u(){const e=await this.Wu();if(e===null)return null;const t=this.Uu.decode(e),r=Number(t);isNaN(r)&&this.Qu(`length string (${t}) is not valid number`);const s=await this.Gu(r);return new ty(JSON.parse(s),e.length+r)}zu(){return this.buffer.findIndex((e=>e===123))}async Wu(){for(;this.zu()<0&&!await this.ju(););if(this.buffer.length===0)return null;const e=this.zu();e<0&&this.Qu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Gu(e){for(;this.buffer.length<e;)await this.ju()&&this.Qu("Reached the end of bundle when more is expected.");const t=this.Uu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Qu(e){throw this.qu.cancel(),new Error(`Invalid bundle format: ${e}`)}async ju(){const e=await this.qu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let r=this.Fu();if(!r||!r.Ga())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(r==null?void 0:r.Qa)}`);this.metadata=r;do r=this.Fu(),r!==null&&this.elements.push(r);while(r!==null)}getMetadata(){return this.metadata}Ju(){return this.elements}Fu(){if(this.cursor===this.bundleData.length)return null;const e=this.Wu(),t=this.Gu(e);return new ty(JSON.parse(t),e)}Gu(e){if(this.cursor+e>this.bundleData.length)throw new O(C.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}Wu(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if(this.bundleData[t]==="{"){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dS=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new O(C.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(s,i){const o=B(s),c={documents:i.map((p=>oo(o.serializer,p)))},u=await o.jo("BatchGetDocuments",o.serializer.databaseId,ee.emptyPath(),c,i.length),l=new Map;u.forEach((p=>{const m=SR(o.serializer,p);l.set(m.key.toString(),m)}));const d=[];return i.forEach((p=>{const m=l.get(p.toString());$(!!m,55234,{key:p}),d.push(m)})),d})(this.datastore,e);return t.forEach((r=>this.recordVersion(r))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new js(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,r)=>{const s=U.fromPath(r);this.mutations.push(new xl(s,this.precondition(s)))})),await(async function(r,s){const i=B(r),o={writes:s.map((c=>ao(i.serializer,c)))};await i.Wo("Commit",i.serializer.databaseId,ee.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw z(50498,{Hu:e.constructor.name});t=K.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new O(C.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(K.min())?Te.exists(!1):Te.updateTime(t):Te.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(K.min()))throw new O(C.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Te.updateTime(t)}return Te.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this.Zu=r.maxAttempts,this.M_=new Jl(this.asyncQueue,"transaction_retry")}Xu(){this.Zu-=1,this.Yu()}Yu(){this.M_.p_((async()=>{const e=new dS(this.datastore),t=this.ec(e);t&&t.then((r=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(r)})).catch((s=>{this.tc(s)}))))})).catch((r=>{this.tc(r)}))}))}ec(e){try{const t=this.updateFunction(e);return!Eo(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}tc(e){this.Zu>0&&this.nc(e)?(this.Zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Yu(),Promise.resolve())))):this.deferred.reject(e)}nc(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!s_(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn="FirestoreClient";class pS{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=qe.UNAUTHENTICATED,this.clientId=ec.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{x(jn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(x(jn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ks(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function gu(n,e){n.asyncQueue.verifyOperationInProgress(),x(jn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await F_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function bp(n,e){n.asyncQueue.verifyOperationInProgress();const t=await fh(n);x(jn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>yp(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>yp(e.remoteStore,s))),n._onlineComponents=e}async function fh(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(jn,"Using user provided OfflineComponentProvider");try{await gu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;lt("Error using user provided cache. Falling back to memory cache: "+t),await gu(n,new Ds)}}else x(jn,"Using default OfflineComponentProvider"),await gu(n,new hh(void 0));return n._offlineComponents}async function Ec(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(jn,"Using user provided OnlineComponentProvider"),await bp(n,n._uninitializedComponentsProvider._online)):(x(jn,"Using default OnlineComponentProvider"),await bp(n,new qn))),n._onlineComponents}function hy(n){return fh(n).then((e=>e.persistence))}function Ws(n){return fh(n).then((e=>e.localStore))}function dy(n){return Ec(n).then((e=>e.remoteStore))}function ph(n){return Ec(n).then((e=>e.syncEngine))}function fy(n){return Ec(n).then((e=>e.datastore))}async function Ns(n){const e=await Ec(n),t=e.eventManager;return t.onListen=$b.bind(null,e.syncEngine),t.onUnlisten=Hb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Gb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Kb.bind(null,e.syncEngine),t}function mS(n){return n.asyncQueue.enqueue((async()=>{const e=await hy(n),t=await dy(n);return e.setNetworkEnabled(!0),(function(s){const i=B(s);return i.da.delete(0),So(i)})(t)}))}function gS(n){return n.asyncQueue.enqueue((async()=>{const e=await hy(n),t=await dy(n);return e.setNetworkEnabled(!1),(async function(s){const i=B(s);i.da.add(0),await $s(i),i.ga.set("Offline")})(t)}))}function _S(n,e,t,r){const s=new Ic(r),i=new sh(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>th(await Ns(n),i))),()=>{s.Ku(),n.asyncQueue.enqueueAndForget((async()=>nh(await Ns(n),i)))}}function yS(n,e){const t=new ze;return n.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const c=await(function(l,d){const p=B(l);return p.persistence.runTransaction("read document","readonly",(m=>p.localDocuments.getDocument(m,d)))})(s,i);c.isFoundDocument()?o.resolve(c):c.isNoDocument()?o.resolve(null):o.reject(new O(C.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(c){const u=Ks(c,`Failed to get document '${i} from cache`);o.reject(u)}})(await Ws(n),e,t))),t.promise}function py(n,e,t={}){const r=new ze;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,u,l){const d=new Ic({next:m=>{d.Ku(),o.enqueueAndForget((()=>nh(i,p)));const y=m.docs.has(c);!y&&m.fromCache?l.reject(new O(C.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&u&&u.source==="server"?l.reject(new O(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(m)},error:m=>l.reject(m)}),p=new sh(Bs(c.path),d,{includeMetadataChanges:!0,Wa:!0});return th(i,p)})(await Ns(n),n.asyncQueue,e,t,r))),r.promise}function IS(n,e){const t=new ze;return n.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const c=await Ua(s,i,!0),u=new iy(i,c.ks),l=u._u(c.documents),d=u.applyChanges(l,!1);o.resolve(d.snapshot)}catch(c){const u=Ks(c,`Failed to execute query '${i} against cache`);o.reject(u)}})(await Ws(n),e,t))),t.promise}function my(n,e,t={}){const r=new ze;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,u,l){const d=new Ic({next:m=>{d.Ku(),o.enqueueAndForget((()=>nh(i,p))),m.fromCache&&u.source==="server"?l.reject(new O(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(m)},error:m=>l.reject(m)}),p=new sh(c,d,{includeMetadataChanges:!0,Wa:!0});return th(i,p)})(await Ns(n),n.asyncQueue,e,t,r))),r.promise}function ES(n,e,t){const r=new ze;return n.asyncQueue.enqueueAndForget((async()=>{try{const s=await fy(n);r.resolve((async function(o,c,u){var k;const l=B(o),{request:d,gt:p,parent:m}=m_(l.serializer,qg(c),u);l.connection.Ko||delete d.parent;const y=(await l.jo("RunAggregationQuery",l.serializer.databaseId,m,d,1)).filter((b=>!!b.result));$(y.length===1,64727);const N=(k=y[0].result)==null?void 0:k.aggregateFields;return Object.keys(N).reduce(((b,D)=>(b[p[D]]=N[D],b)),{})})(s,e,t))}catch(s){r.reject(s)}})),r.promise}function TS(n,e){const t=new ze;return n.asyncQueue.enqueueAndForget((async()=>Wb(await ph(n),e,t))),t.promise}function wS(n,e){const t=new Ic(e);return n.asyncQueue.enqueueAndForget((async()=>(function(s,i){B(s).xa.add(i),i.next()})(await Ns(n),t))),()=>{t.Ku(),n.asyncQueue.enqueueAndForget((async()=>(function(s,i){B(s).xa.delete(i)})(await Ns(n),t)))}}function AS(n,e,t){const r=new ze;return n.asyncQueue.enqueueAndForget((async()=>{const s=await fy(n);new fS(n.asyncQueue,s,t,e,r).Xu()})),r.promise}function vS(n,e,t,r){const s=(function(o,c){let u;return u=typeof o=="string"?o_().encode(o):o,(function(d,p){return new lS(d,p)})((function(d,p){if(d instanceof Uint8Array)return Rp(d,p);if(d instanceof ArrayBuffer)return Rp(new Uint8Array(d),p);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(u),c)})(t,kr(e));n.asyncQueue.enqueueAndForget((async()=>{uS(await ph(n),s,r)}))}function RS(n,e){return n.asyncQueue.enqueue((async()=>(function(r,s){const i=B(r);return i.persistence.runTransaction("Get named query","readonly",(o=>i.Pi.getNamedQuery(o,s)))})(await Ws(n),e)))}function gy(n,e){return(function(r,s){return new hS(r,s)})(n,e)}function bS(n,e){return n.asyncQueue.enqueue((async()=>(async function(r,s){const i=B(r),o=i.indexManager,c=[];return i.persistence.runTransaction("Configure indexes","readwrite",(u=>o.getFieldIndexes(u).next((l=>(function(p,m,y,N,k){p=[...p],m=[...m],p.sort(y),m.sort(y);const b=p.length,D=m.length;let L=0,M=0;for(;L<D&&M<b;){const G=y(p[M],m[L]);G<0?k(p[M++]):G>0?N(m[L++]):(L++,M++)}for(;L<D;)N(m[L++]);for(;M<b;)k(p[M++])})(l,s,hv,(d=>{c.push(o.addFieldIndex(u,d))}),(d=>{c.push(o.deleteFieldIndex(u,d))})))).next((()=>R.waitFor(c)))))})(await Ws(n),e)))}function SS(n,e){return n.asyncQueue.enqueue((async()=>(function(r,s){B(r).Cs.As=s})(await Ws(n),e)))}function PS(n){return n.asyncQueue.enqueue((async()=>(function(t){const r=B(t),s=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",(i=>s.deleteAllFieldIndexes(i)))})(await Ws(n))))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="ComponentProvider",Sp=new Map;function DS(n,e,t,r,s){return new Gv(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,_y(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy="firestore.googleapis.com",Pp=!0;class Cp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yy,this.ssl=Pp}else this.host=e.host,this.ssl=e.ssl??Pp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=R_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<C_)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_y(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Po{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new tg;switch(r.type){case"firstParty":return new sv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Sp.get(t);r&&(x(CS,"Removing Datastore"),Sp.delete(t),r.terminate())})(this),Promise.resolve()}}function Iy(n,e,t,r={}){var l;n=te(n,Po);const s=Ms(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&yl(`https://${c}`),i.host!==yy&&i.host!==c&&lt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!Rt(u,o)&&(n._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=qe.MOCK_USER;else{d=Pw(r.mockUserToken,(l=n._app)==null?void 0:l.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new qe(m)}n._authCredentials=new tv(new eg(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Le(this.firestore,e,this._query)}}class ce{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new At(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ce(this.firestore,e,this._key)}toJSON(){return{type:ce._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Nr(t,ce._jsonSchema))return new ce(e,r||null,new U(ee.fromString(t.referencePath)))}}ce._jsonSchemaVersion="firestore/documentReference/1.0",ce._jsonSchema={type:ke("string",ce._jsonSchemaVersion),referencePath:ke("string")};class At extends Le{constructor(e,t,r){super(e,t,Bs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ce(this.firestore,null,new U(e))}withConverter(e){return new At(this.firestore,e,this._path)}}function NS(n,e,...t){if(n=H(n),wl("collection","path",e),n instanceof Po){const r=ee.fromString(e,...t);return _f(r),new At(n,null,r)}{if(!(n instanceof ce||n instanceof At))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return _f(r),new At(n.firestore,null,r)}}function kS(n,e){if(n=te(n,Po),wl("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Le(n,null,(function(r){return new an(ee.emptyPath(),r)})(e))}function Ey(n,e,...t){if(n=H(n),arguments.length===1&&(e=ec.newId()),wl("doc","path",e),n instanceof Po){const r=ee.fromString(e,...t);return gf(r),new ce(n,null,new U(r))}{if(!(n instanceof ce||n instanceof At))throw new O(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return gf(r),new ce(n.firestore,n instanceof At?n.converter:null,new U(r))}}function VS(n,e){return n=H(n),e=H(e),(n instanceof ce||n instanceof At)&&(e instanceof ce||e instanceof At)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function mh(n,e){return n=H(n),e=H(e),n instanceof Le&&e instanceof Le&&n.firestore===e.firestore&&Ao(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="AsyncQueue";class Np{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Jl(this,"async_queue_retry"),this.lc=()=>{const r=ya();r&&x(Dp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const t=ya();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=ya();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise((()=>{}));const t=new ze;return this.Tc((()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.rc.push(e),this.Ic())))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!$n(e))throw e;x(Dp,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_((()=>this.Ic()))}}Tc(e){const t=this.hc.then((()=>(this.ac=!0,e().catch((r=>{throw this._c=r,this.ac=!1,Se("INTERNAL UNHANDLED ERROR: ",kp(r)),r})).then((r=>(this.ac=!1,r))))));return this.hc=t,t}enqueueAfterDelay(e,t,r){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const s=eh.createAndSchedule(this,e,t,r,(i=>this.Ec(i)));return this.oc.push(s),s}Pc(){this._c&&z(47125,{Rc:kp(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then((()=>{this.oc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()}))}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function kp(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(){this._progressObserver={},this._taskCompletionResolver=new ze,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=-1;class le extends Po{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Np,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Np(e),this._firestoreClient=void 0,await e}}}function xS(n,e,t){t||(t=no);const r=Io(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(Rt(i,e))return s;throw new O(C.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new O(C.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<C_)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Ms(e.host)&&yl(e.host),r.initialize({options:e,instanceIdentifier:t})}function LS(n,e){const t=typeof n=="object"?n:$m(),r=typeof n=="string"?n:e||no,s=Io(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=bw("firestore");i&&Iy(s,...i)}return s}function we(n){if(n._terminated)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||wy(n),n._firestoreClient}function wy(n){var r,s,i,o;const e=n._freezeSettings(),t=DS(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new pS(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}})(n._componentsProvider))}function MS(n,e){lt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return Ay(n,qn.provider,{build:r=>new dh(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function FS(n){lt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();Ay(n,qn.provider,{build:t=>new ly(t,e.cacheSizeBytes)})}function Ay(n,e,t){if((n=te(n,le))._firestoreClient||n._terminated)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new O(C.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},wy(n)}function US(n){if(n._initialized&&!n._terminated)throw new O(C.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ze;return n._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(r){if(!Ft.v())return Promise.resolve();const s=r+x_;await Ft.delete(s)})(Hl(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function BS(n){return(function(t){const r=new ze;return t.asyncQueue.enqueueAndForget((async()=>Xb(await ph(t),r))),r.promise})(we(n=te(n,le)))}function qS(n){return mS(we(n=te(n,le)))}function jS(n){return gS(we(n=te(n,le)))}function zS(n){return FA(n.app,"firestore",n._databaseId.database),n._delete()}function ol(n,e){const t=we(n=te(n,le)),r=new Ty;return vS(t,n._databaseId,e,r),r}function vy(n,e){return RS(we(n=te(n,le)),e).then((t=>t?new Le(n,null,t.query):null))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rt(ve.fromBase64String(e))}catch(t){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new rt(ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Nr(e,rt._jsonSchema))return rt.fromBase64String(e.bytes)}}rt._jsonSchemaVersion="firestore/bytes/1.0",rt._jsonSchema={type:ke("string",rt._jsonSchemaVersion),bytes:ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function $S(){return new Vr(xu)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:vt._jsonSchemaVersion}}static fromJSON(e){if(Nr(e,vt._jsonSchema))return new vt(e.latitude,e.longitude)}}vt._jsonSchemaVersion="firestore/geoPoint/1.0",vt._jsonSchema={type:ke("string",vt._jsonSchemaVersion),latitude:ke("number"),longitude:ke("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:pt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Nr(e,pt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new pt(e.vectorValues);throw new O(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pt._jsonSchemaVersion="firestore/vectorValue/1.0",pt._jsonSchema={type:ke("string",pt._jsonSchemaVersion),vectorValues:ke("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=/^__.*__$/;class HS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new un(e,this.data,this.fieldMask,t,this.fieldTransforms):new qs(e,this.data,t,this.fieldTransforms)}}class Ry{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new un(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function by(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{dataSource:n})}}class Tc{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Tc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return za(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(by(this.dataSource)&&GS.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class KS{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||kr(e)}V(e,t,r,s=!1){return new Tc({dataSource:e,methodName:t,targetDoc:r,path:ge.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Or(n){const e=n._freezeSettings(),t=kr(n._databaseId);return new KS(n._databaseId,!!e.ignoreUndefinedProperties,t)}function wc(n,e,t,r,s,i={}){const o=n.V(i.merge||i.mergeFields?2:0,e,t,s);wh("Data must be an object, but it was:",o,r);const c=Cy(r,o);let u,l;if(i.merge)u=new it(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=nn(e,p,t);if(!o.contains(m))throw new O(C.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Ny(d,m)||d.push(m)}u=new it(d),l=o.fieldTransforms.filter((p=>u.covers(p.field)))}else u=null,l=o.fieldTransforms;return new HS(new je(c),u,l)}class Co extends Wn{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Co}}function Sy(n,e,t){return new Tc({dataSource:3,targetDoc:e.settings.targetDoc,methodName:n._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class gh extends Wn{_toFieldTransform(e){return new Ro(e.path,new As)}isEqual(e){return e instanceof gh}}class _h extends Wn{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Sy(this,e,!0),r=this.vc.map((i=>xr(i,t))),s=new br(r);return new Ro(e.path,s)}isEqual(e){return e instanceof _h&&Rt(this.vc,e.vc)}}class yh extends Wn{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Sy(this,e,!0),r=this.vc.map((i=>xr(i,t))),s=new Sr(r);return new Ro(e.path,s)}isEqual(e){return e instanceof yh&&Rt(this.vc,e.vc)}}class Ih extends Wn{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new vs(e.serializer,Jg(e.serializer,this.Fc));return new Ro(e.path,t)}isEqual(e){return e instanceof Ih&&this.Fc===e.Fc}}function Eh(n,e,t,r){const s=n.V(1,e,t);wh("Data must be an object, but it was:",s,r);const i=[],o=je.empty();Gn(r,((u,l)=>{const d=Ah(e,u,t);l=H(l);const p=s.Sc(d);if(l instanceof Co)i.push(d);else{const m=xr(l,p);m!=null&&(i.push(d),o.set(d,m))}}));const c=new it(i);return new Ry(o,c,s.fieldTransforms)}function Th(n,e,t,r,s,i){const o=n.V(1,e,t),c=[nn(e,r,t)],u=[s];if(i.length%2!=0)throw new O(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(nn(e,i[m])),u.push(i[m+1]);const l=[],d=je.empty();for(let m=c.length-1;m>=0;--m)if(!Ny(l,c[m])){const y=c[m];let N=u[m];N=H(N);const k=o.Sc(y);if(N instanceof Co)l.push(y);else{const b=xr(N,k);b!=null&&(l.push(y),d.set(y,b))}}const p=new it(l);return new Ry(d,p,o.fieldTransforms)}function Py(n,e,t,r=!1){return xr(t,n.V(r?4:3,e))}function xr(n,e){if(Dy(n=H(n)))return wh("Unsupported field value:",e,n),Cy(n,e);if(n instanceof Wn)return(function(r,s){if(!by(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let u=xr(c,s.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=H(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Jg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=oe.fromDate(r);return{timestampValue:Rs(s.serializer,i)}}if(r instanceof oe){const i=new oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rs(s.serializer,i)}}if(r instanceof vt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rt)return{bytesValue:u_(s.serializer,r._byteString)};if(r instanceof ce){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof pt)return(function(o,c){const u=o instanceof pt?o.toArray():o;return{mapValue:{fields:{[Cl]:{stringValue:Dl},[Es]:{arrayValue:{values:u.map((d=>{if(typeof d!="number")throw c.Dc("VectorValues must only contain numeric values.");return Ol(c.serializer,d)}))}}}}}})(r,s);if(E_(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${tc(r)}`)})(n,e)}function Cy(n,e){const t={};return Ag(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gn(n,((r,s)=>{const i=xr(s,e.yc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Dy(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof oe||n instanceof vt||n instanceof rt||n instanceof ce||n instanceof Wn||n instanceof pt||E_(n))}function wh(n,e,t){if(!Dy(t)||!sg(t)){const r=tc(t);throw r==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+r)}}function nn(n,e,t){if((e=H(e))instanceof Vr)return e._internalPath;if(typeof e=="string")return Ah(n,e);throw za("Field path arguments must be of type string or ",n,!1,void 0,t)}const WS=new RegExp("[~\\*/\\[\\]]");function Ah(n,e,t){if(e.search(WS)>=0)throw za(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vr(...e.split("."))._internalPath}catch{throw za(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function za(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new O(C.INVALID_ARGUMENT,c+n+u)}function Ny(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{convertValue(e,t="none"){switch(Mn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(en(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Gn(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Es].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>Ee(o.doubleValue)));return new pt(t)}convertGeoPoint(e){return new vt(Ee(e.latitude),Ee(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ac(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(to(e));default:return null}}convertTimestamp(e){const t=Zt(e);return new oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ee.fromString(e);$(I_(r),9688,{name:e});const s=new Ln(r.get(1),r.get(3)),i=new U(r.popFirst(5));return s.isEqual(t)||Se(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends vh{constructor(e){super(),this.firestore=e}convertBytes(e){return new rt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ce(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(){return new Co("deleteField")}function JS(){return new gh("serverTimestamp")}function YS(...n){return new _h("arrayUnion",n)}function XS(...n){return new yh("arrayRemove",n)}function ZS(n){return new Ih("increment",n)}function eP(n){return new pt(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(n){var r;const e=we(te(n.firestore,le)),t=(r=e._onlineComponents)==null?void 0:r.datastore.serializer;return t===void 0?null:dc(t,et(n._query)).ft}function nP(n,e){var i;const t=wg(e,((o,c)=>new r_(c,o.aggregateType,o._internalFieldPath))),r=we(te(n.firestore,le)),s=(i=r._onlineComponents)==null?void 0:i.datastore.serializer;return s===void 0?null:m_(s,qg(n._query),t,!0).request}const Vp="@firebase/firestore",Op="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class ky{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new je({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(nn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rP extends co{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rh{}class Qs extends Rh{}function sP(n,e,...t){let r=[];e instanceof Rh&&r.push(e),r=r.concat(t),(function(i){const o=i.filter((u=>u instanceof Lr)).length,c=i.filter((u=>u instanceof Js)).length;if(o>1||o>0&&c>0)throw new O(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Js extends Qs{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Js(e,t,r)}_apply(e){const t=this._parse(e);return xy(e._query,t),new Le(e.firestore,e.converter,Hu(e._query,t))}_parse(e){const t=Or(e.firestore);return(function(i,o,c,u,l,d,p){let m;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new O(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Lp(p,d);const N=[];for(const k of p)N.push(xp(u,i,k));m={arrayValue:{values:N}}}else m=xp(u,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Lp(p,d),m=Py(c,o,p,d==="in"||d==="not-in");return re.create(l,d,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function iP(n,e,t){const r=e,s=nn("where",n);return Js._create(s,r,t)}class Lr extends Rh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Lr(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:ae.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const u of c)xy(o,u),o=Hu(o,u)})(e._query,t),new Le(e.firestore,e.converter,Hu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function oP(...n){return n.forEach((e=>Ly("or",e))),Lr._create("or",n)}function aP(...n){return n.forEach((e=>Ly("and",e))),Lr._create("and",n)}class Ac extends Qs{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ac(e,t)}_apply(e){const t=(function(s,i,o){if(s.startAt!==null)throw new O(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new O(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new io(i,o)})(e._query,this._field,this._direction);return new Le(e.firestore,e.converter,sR(e._query,t))}}function cP(n,e="asc"){const t=e,r=nn("orderBy",n);return Ac._create(r,t)}class Do extends Qs{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Do(e,t,r)}_apply(e){return new Le(e.firestore,e.converter,Oa(e._query,this._limit,this._limitType))}}function uP(n){return ig("limit",n),Do._create("limit",n,"F")}function lP(n){return ig("limitToLast",n),Do._create("limitToLast",n,"L")}class No extends Qs{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new No(e,t,r)}_apply(e){const t=Oy(e,this.type,this._docOrFields,this._inclusive);return new Le(e.firestore,e.converter,iR(e._query,t))}}function hP(...n){return No._create("startAt",n,!0)}function dP(...n){return No._create("startAfter",n,!1)}class ko extends Qs{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ko(e,t,r)}_apply(e){const t=Oy(e,this.type,this._docOrFields,this._inclusive);return new Le(e.firestore,e.converter,oR(e._query,t))}}function fP(...n){return ko._create("endBefore",n,!1)}function pP(...n){return ko._create("endAt",n,!0)}function Oy(n,e,t,r){if(t[0]=H(t[0]),t[0]instanceof co)return(function(i,o,c,u,l){if(!u)throw new O(C.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const d=[];for(const p of rs(i))if(p.field.isKeyField())d.push(vr(o,u.key));else{const m=u.data.field(p.field);if(oc(m))throw new O(C.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const y=p.field.canonicalString();throw new O(C.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(m)}return new Un(d,l)})(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=Or(n.firestore);return(function(o,c,u,l,d,p){const m=o.explicitOrderBy;if(d.length>m.length)throw new O(C.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let N=0;N<d.length;N++){const k=d[N];if(m[N].field.isKeyField()){if(typeof k!="string")throw new O(C.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof k}`);if(!kl(o)&&k.indexOf("/")!==-1)throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${k}' contains a slash.`);const b=o.path.child(ee.fromString(k));if(!U.isDocumentKey(b))throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const D=new U(b);y.push(vr(c,D))}else{const b=Py(u,l,k);y.push(b)}}return new Un(y,p)})(n._query,n.firestore._databaseId,s,e,t,r)}}function xp(n,e,t){if(typeof(t=H(t))=="string"){if(t==="")throw new O(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kl(e)&&t.indexOf("/")!==-1)throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ee.fromString(t));if(!U.isDocumentKey(r))throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vr(n,new U(r))}if(t instanceof ce)return vr(n,t._key);throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tc(t)}.`)}function Lp(n,e){if(!Array.isArray(n)||n.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xy(n,e){const t=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Ly(n,e){if(!(e instanceof Js||e instanceof Lr))throw new O(C.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}function vc(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class bh extends vh{constructor(e){super(),this.firestore=e}convertBytes(e){return new rt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ce(this.firestore,null,t)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(n){return new ks("sum",nn("sum",n))}function gP(n){return new ks("avg",nn("average",n))}function My(){return new ks("count")}function _P(n,e){var t,r;return n instanceof ks&&e instanceof ks&&n.aggregateType===e.aggregateType&&((t=n._internalFieldPath)==null?void 0:t.canonicalString())===((r=e._internalFieldPath)==null?void 0:r.canonicalString())}function yP(n,e){return mh(n.query,e.query)&&Rt(n.data(),e.data())}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(n){return Fy(n,{count:My()})}function Fy(n,e){const t=te(n.firestore,le),r=we(t),s=wg(e,((i,o)=>new r_(o,i.aggregateType,i._internalFieldPath)));return ES(r,n._query,s).then((i=>(function(c,u,l){const d=new Qn(c);return new ky(u,d,l)})(t,n,i)))}class EP{constructor(e){this.kind="memory",this._onlineComponentProvider=qn.provider,this._offlineComponentProvider=e!=null&&e.garbageCollector?e.garbageCollector._offlineComponentProvider:{build:()=>new hh(void 0)}}toJSON(){return{kind:this.kind}}}class TP{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Uy(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class wP{constructor(){this.kind="memoryEager",this._offlineComponentProvider=Ds.provider}toJSON(){return{kind:this.kind}}}class AP{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new hh(e)}}toJSON(){return{kind:this.kind}}}function vP(){return new wP}function RP(n){return new AP(n==null?void 0:n.cacheSizeBytes)}function bP(n){return new EP(n)}function SP(n){return new TP(n)}class PP{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=qn.provider,this._offlineComponentProvider={build:t=>new dh(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class CP{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=qn.provider,this._offlineComponentProvider={build:t=>new ly(t,e==null?void 0:e.cacheSizeBytes)}}}function Uy(n){return new PP(n==null?void 0:n.forceOwnership)}function DP(){return new CP}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="NOT SUPPORTED";class Wt{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ct extends co{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $i(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(nn("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ct._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}function NP(n,e,t){if(Nr(e,ct._jsonSchema)){if(e.bundle===By)throw new O(C.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=kr(n._databaseId),s=gy(e.bundle,r),i=s.Ju(),o=new ih(s.getMetadata(),r);for(const d of i)o.Ha(d);const c=o.documents;if(c.length!==1)throw new O(C.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${c.length} documents.`);const u=hc(r,c[0].document),l=new U(ee.fromString(e.bundleName));return new ct(n,new bh(n),l,u,new Wt(!1,!1),t||null)}}ct._jsonSchemaVersion="firestore/documentSnapshot/1.0",ct._jsonSchema={type:ke("string",ct._jsonSchemaVersion),bundleSource:ke("string","DocumentSnapshot"),bundleName:ke("string"),bundle:ke("string")};class $i extends ct{data(e={}){return super.data(e)}}class ut{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Wt(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new $i(this._firestore,this._userDataWriter,r.key,r,new Wt(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const u=new $i(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Wt(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new $i(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Wt(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,d=-1;return c.type!==0&&(l=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:VP(c.type),doc:u,oldIndex:l,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ut._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ec.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function kP(n,e,t){if(Nr(e,ut._jsonSchema)){if(e.bundle===By)throw new O(C.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=kr(n._databaseId),s=gy(e.bundle,r),i=s.Ju(),o=new ih(s.getMetadata(),r);for(const m of i)o.Ha(m);if(o.queries.length!==1)throw new O(C.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const c=fc(o.queries[0].bundledQuery),u=o.documents;let l=new Ir;u.map((m=>{const y=hc(r,m.document);l=l.add(y)}));const d=Dr.fromInitialDocuments(c,l,X(),!1,!1),p=new Le(n,t||null,c);return new ut(n,new bh(n),p,d)}}function VP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z(61501,{type:n})}}function OP(n,e){return n instanceof ct&&e instanceof ct?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof ut&&e instanceof ut&&n._firestore===e._firestore&&mh(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ut._jsonSchemaVersion="firestore/querySnapshot/1.0",ut._jsonSchema={type:ke("string",ut._jsonSchemaVersion),bundleSource:ke("string","QuerySnapshot"),bundleName:ke("string"),bundle:ke("string")};const xP={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Or(e)}set(e,t,r){this._verifyNotCommitted();const s=Sn(e,this._firestore),i=vc(s.converter,t,r),o=wc(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Te.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Sn(e,this._firestore);let o;return o=typeof(t=H(t))=="string"||t instanceof Vr?Th(this._dataReader,"WriteBatch.update",i._key,t,r,s):Eh(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,Te.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Sn(e,this._firestore);return this._mutations=this._mutations.concat(new js(t._key,Te.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new O(C.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Sn(n,e){if((n=H(n)).firestore!==e)throw new O(C.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Or(e)}get(e){const t=Sn(e,this._firestore),r=new bh(this._firestore);return this._transaction.lookup([t._key]).then((s=>{if(!s||s.length!==1)return z(24041);const i=s[0];if(i.isFoundDocument())return new co(this._firestore,r,i.key,i,t.converter);if(i.isNoDocument())return new co(this._firestore,r,t._key,null,t.converter);throw z(18433,{doc:i})}))}set(e,t,r){const s=Sn(e,this._firestore),i=vc(s.converter,t,r),o=wc(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,t,r,...s){const i=Sn(e,this._firestore);let o;return o=typeof(t=H(t))=="string"||t instanceof Vr?Th(this._dataReader,"Transaction.update",i._key,t,r,s):Eh(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=Sn(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy extends LP{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Sn(e,this._firestore),r=new Qn(this._firestore);return super.get(e).then((s=>new ct(this._firestore,r,t._key,s._document,new Wt(!1,!1),t.converter)))}}function MP(n,e,t){n=te(n,le);const r={...xP,...t};(function(o){if(o.maxAttempts<1)throw new O(C.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r);const s=we(n);return AS(s,(i=>e(new jy(n,i))),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(n){n=te(n,ce);const e=te(n.firestore,le),t=we(e);return py(t,n._key).then((r=>Sh(e,n,r)))}function UP(n){n=te(n,ce);const e=te(n.firestore,le),t=we(e),r=new Qn(e);return yS(t,n._key).then((s=>new ct(e,r,n._key,s,new Wt(s!==null&&s.hasLocalMutations,!0),n.converter)))}function BP(n){n=te(n,ce);const e=te(n.firestore,le),t=we(e);return py(t,n._key,{source:"server"}).then((r=>Sh(e,n,r)))}function qP(n){n=te(n,Le);const e=te(n.firestore,le),t=we(e),r=new Qn(e);return Vy(n._query),my(t,n._query).then((s=>new ut(e,r,n,s)))}function jP(n){n=te(n,Le);const e=te(n.firestore,le),t=we(e),r=new Qn(e);return IS(t,n._query).then((s=>new ut(e,r,n,s)))}function zP(n){n=te(n,Le);const e=te(n.firestore,le),t=we(e),r=new Qn(e);return my(t,n._query,{source:"server"}).then((s=>new ut(e,r,n,s)))}function $P(n,e,t){n=te(n,ce);const r=te(n.firestore,le),s=vc(n.converter,e,t),i=Or(r);return Ys(r,[wc(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Te.none())])}function GP(n,e,t,...r){n=te(n,ce);const s=te(n.firestore,le),i=Or(s);let o;return o=typeof(e=H(e))=="string"||e instanceof Vr?Th(i,"updateDoc",n._key,e,t,r):Eh(i,"updateDoc",n._key,e),Ys(s,[o.toMutation(n._key,Te.exists(!0))])}function HP(n){return Ys(te(n.firestore,le),[new js(n._key,Te.none())])}function KP(n,e){const t=te(n.firestore,le),r=Ey(n),s=vc(n.converter,e),i=Or(n.firestore);return Ys(t,[wc(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Te.exists(!1))]).then((()=>r))}function al(n,...e){var l,d,p;n=H(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||is(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(is(e[r])){const m=e[r];e[r]=(l=m.next)==null?void 0:l.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let i,o,c;if(n instanceof ce)o=te(n.firestore,le),c=Bs(n._key.path),i={next:m=>{e[r]&&e[r](Sh(o,n,m))},error:e[r+1],complete:e[r+2]};else{const m=te(n,Le);o=te(m.firestore,le),c=m._query;const y=new Qn(o);i={next:N=>{e[r]&&e[r](new ut(o,y,m,N))},error:e[r+1],complete:e[r+2]},Vy(n._query)}const u=we(o);return _S(u,c,s,i)}function WP(n,e,...t){const r=H(n),s=(function(u){const l={bundle:"",bundleName:"",bundleSource:""},d=["bundle","bundleName","bundleSource"];for(const p of d){if(!(p in u)){l.error=`snapshotJson missing required field: ${p}`;break}const m=u[p];if(typeof m!="string"){l.error=`snapshotJson field '${p}' must be a string.`;break}if(m.length===0){l.error=`snapshotJson field '${p}' cannot be an empty string.`;break}p==="bundle"?l.bundle=m:p==="bundleName"?l.bundleName=m:p==="bundleSource"&&(l.bundleSource=m)}return l})(e);if(s.error)throw new O(C.INVALID_ARGUMENT,s.error);let i,o=0;if(typeof t[o]!="object"||is(t[o])||(i=t[o++]),s.bundleSource==="QuerySnapshot"){let c=null;if(typeof t[o]=="object"&&is(t[o])){const u=t[o++];c={next:u.next,error:u.error,complete:u.complete}}else c={next:t[o++],error:t[o++],complete:t[o++]};return(function(l,d,p,m,y){let N,k=!1;return ol(l,d.bundle).then((()=>vy(l,d.bundleName))).then((D=>{D&&!k&&(y&&D.withConverter(y),N=al(D,p||{},m))})).catch((D=>(m.error&&m.error(D),()=>{}))),()=>{k||(k=!0,N&&N())}})(r,s,i,c,t[o])}if(s.bundleSource==="DocumentSnapshot"){let c=null;if(typeof t[o]=="object"&&is(t[o])){const u=t[o++];c={next:u.next,error:u.error,complete:u.complete}}else c={next:t[o++],error:t[o++],complete:t[o++]};return(function(l,d,p,m,y){let N,k=!1;return ol(l,d.bundle).then((()=>{if(!k){const D=new ce(l,y||null,U.fromPath(d.bundleName));N=al(D,p||{},m)}})).catch((D=>(m.error&&m.error(D),()=>{}))),()=>{k||(k=!0,N&&N())}})(r,s,i,c,t[o])}throw new O(C.INVALID_ARGUMENT,`unsupported bundle source: ${s.bundleSource}`)}function QP(n,e){n=te(n,le);const t=we(n),r=is(e)?e:{next:e};return wS(t,r)}function Ys(n,e){const t=we(n);return TS(t,e)}function Sh(n,e,t){const r=t.docs.get(e._key),s=new Qn(n);return new ct(n,s,e._key,r,new Wt(t.hasPendingWrites,t.fromCache),e.converter)}function JP(n){return n=te(n,le),we(n),new qy(n,(e=>Ys(n,e)))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(n,e){n=te(n,le);const t=we(n);if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return lt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=(function(i){const o=typeof i=="string"?(function(l){try{return JSON.parse(l)}catch(d){throw new O(C.INVALID_ARGUMENT,"Failed to parse JSON: "+(d==null?void 0:d.message))}})(i):i,c=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const l=Mp(u,"collectionGroup"),d=[];if(Array.isArray(u.fields))for(const p of u.fields){const m=Mp(p,"fieldPath"),y=Ah("setIndexConfiguration",m);p.arrayConfig==="CONTAINS"?d.push(new _r(y,2)):p.order==="ASCENDING"?d.push(new _r(y,0)):p.order==="DESCENDING"&&d.push(new _r(y,1))}c.push(new ps(ps.UNKNOWN_ID,l,d,ms.empty()))}return c})(e);return bS(t,r)}function Mp(n,e){if(typeof n[e]!="string")throw new O(C.INVALID_ARGUMENT,"Missing string value for: "+e);return n[e]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function XP(n){var s;n=te(n,le);const e=Fp.get(n);if(e)return e;if(((s=we(n)._uninitializedComponentsProvider)==null?void 0:s._offline.kind)!=="persistent")return null;const r=new zy(n);return Fp.set(n,r),r}function ZP(n){$y(n,!0)}function eC(n){$y(n,!1)}function tC(n){const e=we(n._firestore);PS(e).then((t=>x("deleting all persistent cache indexes succeeded"))).catch((t=>lt("deleting all persistent cache indexes failed",t)))}function $y(n,e){const t=we(n._firestore);SS(t,e).then((r=>x(`setting persistent cache index auto creation isEnabled=${e} succeeded`))).catch((r=>lt(`setting persistent cache index auto creation isEnabled=${e} failed`,r)))}const Fp=new WeakMap;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Ph.instance.onExistenceFilterMismatch(e)}}class Ph{constructor(){this.t=new Map}static get instance(){return ra||(ra=new Ph,IR(ra)),ra}o(e){this.t.forEach((t=>t(e)))}onExistenceFilterMismatch(e){const t=Symbol(),r=this.t;return r.set(t,e),()=>r.delete(t)}}let ra=null;(function(e,t=!0){XA(Fs),hs(new Ar("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new le(new nv(r.getProvider("auth-internal")),new iv(o,r.getProvider("app-check-internal")),Hv(o,s),o);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Dn(Vp,Op,e),Dn(Vp,Op,"esm2020")})();const sV=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:vh,AggregateField:ks,AggregateQuerySnapshot:ky,Bytes:rt,CACHE_SIZE_UNLIMITED:OS,CollectionReference:At,DocumentReference:ce,DocumentSnapshot:ct,FieldPath:Vr,FieldValue:Wn,Firestore:le,FirestoreError:O,GeoPoint:vt,LoadBundleTask:Ty,PersistentCacheIndexManager:zy,Query:Le,QueryCompositeFilterConstraint:Lr,QueryConstraint:Qs,QueryDocumentSnapshot:$i,QueryEndAtConstraint:ko,QueryFieldFilterConstraint:Js,QueryLimitConstraint:Do,QueryOrderByConstraint:Ac,QuerySnapshot:ut,QueryStartAtConstraint:No,SnapshotMetadata:Wt,Timestamp:oe,Transaction:jy,VectorValue:pt,WriteBatch:qy,_AutoId:ec,_ByteString:ve,_DatabaseId:Ln,_DocumentKey:U,_EmptyAppCheckTokenProvider:ov,_EmptyAuthCredentialsProvider:tg,_FieldPath:ge,_TestingHooks:nC,_cast:te,_debugAssert:ev,_internalAggregationQueryToProtoRunAggregationQueryRequest:nP,_internalQueryToProtoQueryTarget:tP,_isBase64Available:zv,_logWarn:lt,_validateIsNotUsedTogether:rg,addDoc:KP,aggregateFieldEqual:_P,aggregateQuerySnapshotEqual:yP,and:aP,arrayRemove:XS,arrayUnion:YS,average:gP,clearIndexedDbPersistence:US,collection:NS,collectionGroup:kS,connectFirestoreEmulator:Iy,count:My,deleteAllPersistentCacheIndexes:tC,deleteDoc:HP,deleteField:QS,disableNetwork:jS,disablePersistentCacheIndexAutoCreation:eC,doc:Ey,documentId:$S,documentSnapshotFromJSON:NP,enableIndexedDbPersistence:MS,enableMultiTabIndexedDbPersistence:FS,enableNetwork:qS,enablePersistentCacheIndexAutoCreation:ZP,endAt:pP,endBefore:fP,ensureFirestoreConfigured:we,executeWrite:Ys,getAggregateFromServer:Fy,getCountFromServer:IP,getDoc:FP,getDocFromCache:UP,getDocFromServer:BP,getDocs:qP,getDocsFromCache:jP,getDocsFromServer:zP,getFirestore:LS,getPersistentCacheIndexManager:XP,increment:ZS,initializeFirestore:xS,limit:uP,limitToLast:lP,loadBundle:ol,memoryEagerGarbageCollector:vP,memoryLocalCache:bP,memoryLruGarbageCollector:RP,namedQuery:vy,onSnapshot:al,onSnapshotResume:WP,onSnapshotsInSync:QP,or:oP,orderBy:cP,persistentLocalCache:SP,persistentMultipleTabManager:DP,persistentSingleTabManager:Uy,query:sP,queryEqual:mh,querySnapshotFromJSON:kP,refEqual:VS,runTransaction:MP,serverTimestamp:JS,setDoc:$P,setIndexConfiguration:YP,setLogLevel:ZA,snapshotEqual:OP,startAfter:dP,startAt:hP,sum:mP,terminate:zS,updateDoc:GP,vector:eP,waitForPendingWrites:BS,where:iP,writeBatch:JP},Symbol.toStringTag,{value:"Module"}));var rC="firebase",sC="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn(rC,sC,"app");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC={PHONE:"phone",TOTP:"totp"},oC={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},aC={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},cC={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},uC={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function Gy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hC=lC,Hy=Gy,Ky=new yo("auth","Firebase",Gy()),dC={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new Il("@firebase/auth");function fC(n,...e){$a.logLevel<=ne.WARN&&$a.warn(`Auth (${Fs}): ${n}`,...e)}function Ia(n,...e){$a.logLevel<=ne.ERROR&&$a.error(`Auth (${Fs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n,...e){throw Dh(n,...e)}function nt(n,...e){return Dh(n,...e)}function Ch(n,e,t){const r={...Hy(),[e]:t};return new yo("auth","Firebase",r).create(e,{appName:n.name})}function $e(n){return Ch(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xs(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ht(n,"argument-error"),Ch(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dh(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ky.create(n,...e)}function F(n,e,...t){if(!n)throw Dh(e,...t)}function Mt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ia(e),new Error(e)}function rn(n,e){n||Mt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Nh(){return Up()==="http:"||Up()==="https:"}function Up(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nh()||Nw()||"connection"in navigator)?navigator.onLine:!0}function mC(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t){this.shortDelay=e,this.longDelay=t,rn(t>e,"Short delay should be less than long delay!"),this.isMobile=Cw()||kw()}get(){return pC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(n,e){rn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yC=new Vo(3e4,6e4);function _e(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function ye(n,e,t,r,s={}){return Qy(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ls({key:n.config.apiKey,...o}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const l={method:e,headers:u,...i};return Dw()||(l.referrerPolicy="no-referrer"),n.emulatorConfig&&Ms(n.emulatorConfig.host)&&(l.credentials="include"),Wy.fetch()(await Jy(n,n.config.apiHost,t,c),l)})}async function Qy(n,e,t){n._canInitEmulator=!1;const r={...gC,...e};try{const s=new EC(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[u,l]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oi(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Oi(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Oi(n,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ch(n,d,l);ht(n,d)}}catch(s){if(s instanceof on)throw s;ht(n,"network-request-failed",{message:String(s)})}}async function hn(n,e,t,r,s={}){const i=await ye(n,e,t,r,s);return"mfaPendingCredential"in i&&ht(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Jy(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?kh(n.config,s):`${n.config.apiScheme}://${s}`;return _C.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function IC(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class EC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),yC.get())})}}function Oi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=nt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(n){return n!==void 0&&n.getResponse!==void 0}function qp(n){return n!==void 0&&n.enterprise!==void 0}class Yy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return IC(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(n){return(await ye(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Xy(n,e){return ye(n,"GET","/v2/recaptchaConfig",_e(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wC(n,e){return ye(n,"POST","/v1/accounts:delete",e)}async function AC(n,e){return ye(n,"POST","/v1/accounts:update",e)}async function Ga(n,e){return ye(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(n,e=!1){return H(n).getIdToken(e)}async function Zy(n,e=!1){const t=H(n),r=await t.getIdToken(e),s=Rc(r);F(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Gi(_u(s.auth_time)),issuedAtTime:Gi(_u(s.iat)),expirationTime:Gi(_u(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _u(n){return Number(n)*1e3}function Rc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ia("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vm(t);return s?JSON.parse(s):(Ia("Failed to decode base64 JWT payload"),null)}catch(s){return Ia("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function jp(n){const e=Rc(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof on&&RC(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function RC({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gi(this.lastLoginAt),this.creationTime=Gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(n){var p;const e=n.auth,t=await n.getIdToken(),r=await sn(n,Ga(e,{idToken:t}));F(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?tI(s.providerUserInfo):[],o=SC(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),l=c?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new cl(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,d)}async function eI(n){const e=H(n);await lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SC(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function tI(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PC(n,e){const t=await Qy(n,{},async()=>{const r=Ls({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await Jy(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&Ms(n.emulatorConfig.host)&&(u.credentials="include"),Wy.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function CC(n,e){return ye(n,"POST","/v2/accounts:revokeToken",_e(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=jp(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await PC(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new os;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class wt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new bC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await sn(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Zy(this,e)}reload(){return eI(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new wt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await lo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ae(this.auth.app))return Promise.reject($e(this.auth));const e=await this.getIdToken();return await sn(this,wC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,l=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:y,providerData:N,stsTokenManager:k}=t;F(p&&k,e,"internal-error");const b=os.fromJSON(this.name,k);F(typeof p=="string",e,"internal-error"),An(r,e.name),An(s,e.name),F(typeof m=="boolean",e,"internal-error"),F(typeof y=="boolean",e,"internal-error"),An(i,e.name),An(o,e.name),An(c,e.name),An(u,e.name),An(l,e.name),An(d,e.name);const D=new wt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:b,createdAt:l,lastLoginAt:d});return N&&Array.isArray(N)&&(D.providerData=N.map(L=>({...L}))),u&&(D._redirectEventId=u),D}static async _fromIdTokenResponse(e,t,r=!1){const s=new os;s.updateFromServerResponse(t);const i=new wt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await lo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];F(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?tI(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new os;c.updateFromIdToken(r);const u=new wt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new cl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,l),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=new Map;function Qt(n){rn(n instanceof Function,"Expected a class definition");let e=zp.get(n);return e?(rn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zp.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nI.type="NONE";const ul=nI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(n,e,t){return`firebase:${n}:${e}:${t}`}class as{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ea(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ea("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ga(this.auth,{idToken:e}).catch(()=>{});return t?wt._fromGetAccountInfoResponse(this.auth,t,e):null}return wt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new as(Qt(ul),e,r);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Qt(ul);const o=Ea(r,e.config.apiKey,e.name);let c=null;for(const l of t)try{const d=await l._get(o);if(d){let p;if(typeof d=="string"){const m=await Ga(e,{idToken:d}).catch(()=>{});if(!m)break;p=await wt._fromGetAccountInfoResponse(e,m,d)}else p=wt._fromJSON(e,d);l!==i&&(c=p),i=l;break}}catch{}const u=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new as(i,e,r):(i=u[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new as(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cI(e))return"Blackberry";if(uI(e))return"Webos";if(sI(e))return"Safari";if((e.includes("chrome/")||iI(e))&&!e.includes("edge/"))return"Chrome";if(aI(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rI(n=xe()){return/firefox\//i.test(n)}function sI(n=xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iI(n=xe()){return/crios\//i.test(n)}function oI(n=xe()){return/iemobile/i.test(n)}function aI(n=xe()){return/android/i.test(n)}function cI(n=xe()){return/blackberry/i.test(n)}function uI(n=xe()){return/webos/i.test(n)}function Vh(n=xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function DC(n=xe()){var e;return Vh(n)&&!!((e=window.navigator)!=null&&e.standalone)}function NC(){return Vw()&&document.documentMode===10}function lI(n=xe()){return Vh(n)||aI(n)||uI(n)||cI(n)||/windows phone/i.test(n)||oI(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(n,e=[]){let t;switch(n){case"Browser":t=$p(xe());break;case"Worker":t=`${$p(xe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Fs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const u=e(i);o(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VC(n,e={}){return ye(n,"GET","/v2/passwordPolicy",_e(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC=6;class xC{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??OC,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gp(this),this.idTokenSubscription=new Gp(this),this.beforeStateQueue=new kC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ky,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ga(this,{idToken:e}),r=await wt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ae(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await lo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ae(this.app))return Promise.reject($e(this));const t=e?H(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ae(this.app)?Promise.reject($e(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ae(this.app)?Promise.reject($e(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VC(this),t=new xC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await CC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qt(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[Qt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Ae(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&fC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function be(n){return H(n)}class Gp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Uw(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MC(n){Oo=n}function Oh(n){return Oo.loadJS(n)}function FC(){return Oo.recaptchaV2Script}function UC(){return Oo.recaptchaEnterpriseScript}function BC(){return Oo.gapiScript}function dI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=500,jC=6e4,sa=1e12;class zC{constructor(e){this.auth=e,this.counter=sa,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new HC(e,this.auth.name,t||{})),this.counter++,r}reset(e){var r;const t=e||sa;(r=this._widgets.get(t))==null||r.delete(),this._widgets.delete(t)}getResponse(e){var r;const t=e||sa;return((r=this._widgets.get(t))==null?void 0:r.getResponse())||""}async execute(e){var r;const t=e||sa;return(r=this._widgets.get(t))==null||r.execute(),""}}class $C{constructor(){this.enterprise=new GC}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class GC{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class HC{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;F(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=KC(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},jC)},qC))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function KC(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const WC="recaptcha-enterprise",Hi="NO_RECAPTCHA";class fI{constructor(e){this.type=WC,this.auth=be(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Xy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Yy(u);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(u=>{c(u)})})}function s(i,o,c){const u=window.grecaptcha;qp(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Hi)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $C().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&qp(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=UC();u.length!==0&&(u+=c),Oh(u).then(()=>{s(c,i,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function Si(n,e,t,r=!1,s=!1){const i=new fI(n);let o;if(s)o=Hi;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,l=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Vn(n,e,t,r,s){var i,o;if(s==="EMAIL_PASSWORD_PROVIDER")if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Si(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Si(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(c)});else if(s==="PHONE_PROVIDER")if((o=n._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const c=await Si(n,e,t);return r(n,c).catch(async u=>{var l;if(((l=n._getRecaptchaConfig())==null?void 0:l.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const d=await Si(n,e,t,!1,!0);return r(n,d)}return Promise.reject(u)})}else{const c=await Si(n,e,t,!1,!0);return r(n,c)}else return Promise.reject(s+" provider is not supported.")}async function pI(n){const e=be(n),t=await Xy(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Yy(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new fI(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(n,e){const t=Io(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Rt(i,e??{}))return s;ht(s,"already-initialized")}return t.initialize({options:e})}function QC(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Qt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gI(n,e,t){const r=be(n);F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=_I(e),{host:o,port:c}=JC(e),u=c===null?"":`:${c}`,l={url:`${i}//${o}${u}/`},d=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){F(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),F(Rt(l,r.config.emulator)&&Rt(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Ms(o)?yl(`${i}//${o}${u}`):s||YC()}function _I(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function JC(n){const e=_I(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Hp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Hp(o)}}}function Hp(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function YC(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,t){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yI(n,e){return ye(n,"POST","/v1/accounts:resetPassword",_e(n,e))}async function XC(n,e){return ye(n,"POST","/v1/accounts:update",e)}async function ZC(n,e){return ye(n,"POST","/v1/accounts:signUp",e)}async function eD(n,e){return ye(n,"POST","/v1/accounts:update",_e(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD(n,e){return hn(n,"POST","/v1/accounts:signInWithPassword",_e(n,e))}async function bc(n,e){return ye(n,"POST","/v1/accounts:sendOobCode",_e(n,e))}async function nD(n,e){return bc(n,e)}async function rD(n,e){return bc(n,e)}async function sD(n,e){return bc(n,e)}async function iD(n,e){return bc(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oD(n,e){return hn(n,"POST","/v1/accounts:signInWithEmailLink",_e(n,e))}async function aD(n,e){return hn(n,"POST","/v1/accounts:signInWithEmailLink",_e(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends Zs{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Vs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Vs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vn(e,t,"signInWithPassword",tD,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return oD(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vn(e,r,"signUpPassword",ZC,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return aD(e,{idToken:t,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(n,e){return hn(n,"POST","/v1/accounts:signInWithIdp",_e(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD="http://localhost";class jt extends Zs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ht("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new jt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Yt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Yt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yt(e,t)}buildRequest(){const e={requestUri:cD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ls(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kp(n,e){return ye(n,"POST","/v1/accounts:sendVerificationCode",_e(n,e))}async function uD(n,e){return hn(n,"POST","/v1/accounts:signInWithPhoneNumber",_e(n,e))}async function lD(n,e){const t=await hn(n,"POST","/v1/accounts:signInWithPhoneNumber",_e(n,e));if(t.temporaryProof)throw Oi(n,"account-exists-with-different-credential",t);return t}const hD={USER_NOT_FOUND:"user-not-found"};async function dD(n,e){const t={...e,operation:"REAUTH"};return hn(n,"POST","/v1/accounts:signInWithPhoneNumber",_e(n,t),hD)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Zs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new On({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new On({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return uD(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return lD(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return dD(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!t&&!s&&!i?null:new On({verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pD(n){const e=Pi(Ci(n)).link,t=e?Pi(Ci(e)).deep_link_id:null,r=Pi(Ci(n)).deep_link_id;return(r?Pi(Ci(r)).link:null)||r||t||e||n}class ei{constructor(e){const t=Pi(Ci(e)),r=t.apiKey??null,s=t.oobCode??null,i=fD(t.mode??null);F(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=pD(e);try{return new ei(t)}catch{return null}}}function mD(n){return ei.parseLink(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.providerId=Jn.PROVIDER_ID}static credential(e,t){return Vs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ei.parseLink(t);return F(r,"argument-error"),Vs._fromEmailAndCode(e,r.code,r.tenantId)}}Jn.PROVIDER_ID="password";Jn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends dn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ki extends ti{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return F("providerId"in t&&"signInMethod"in t,"argument-error"),jt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return F(e.idToken||e.accessToken,"argument-error"),jt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Ki.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ki.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:c}=e;if(!r&&!s&&!t&&!i||!c)return null;try{return new Ki(c)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends ti{constructor(){super("facebook.com")}static credential(e){return jt._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.FACEBOOK_SIGN_IN_METHOD="facebook.com";$t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return jt._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Gt.credential(t,r)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends ti{constructor(){super("github.com")}static credential(e){return jt._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD="http://localhost";class ho extends Zs{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Yt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Yt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,pendingToken:i}=t;return!r||!s||!i||r!==s?null:new ho(r,i)}static _create(e,t){return new ho(e,t)}buildRequest(){return{requestUri:gD,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D="saml.";class Ha extends dn{constructor(e){F(e.startsWith(_D),"argument-error"),super(e)}static credentialFromResult(e){return Ha.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ha.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=ho.fromJSON(e);return F(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return ho._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends ti{constructor(){super("twitter.com")}static credential(e,t){return jt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Kt.credential(t,r)}catch{return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com";Kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(n,e){return hn(n,"POST","/v1/accounts:signUp",_e(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await wt._fromIdTokenResponse(e,r,s),o=Wp(r);return new yt({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Wp(r);return new yt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Wp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yD(n){var s;if(Ae(n.app))return Promise.reject($e(n));const e=be(n);if(await e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new yt({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await II(e,{returnSecureToken:!0}),r=await yt._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka extends on{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ka.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ka(e,t,r,s)}}function EI(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ka._fromErrorAndOperation(n,i,e,r):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ID(n,e){const t=H(n);await Sc(!0,t,e);const{providerUserInfo:r}=await AC(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),s=TI(r||[]);return t.providerData=t.providerData.filter(i=>s.has(i.providerId)),s.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function xh(n,e,t=!1){const r=await sn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return yt._forOperation(n,"link",r)}async function Sc(n,e,t){await lo(e);const r=TI(e.providerData),s=n===!1?"provider-already-linked":"no-such-provider";F(r.has(t)===n,e.auth,s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wI(n,e,t=!1){const{auth:r}=n;if(Ae(r.app))return Promise.reject($e(r));const s="reauthenticate";try{const i=await sn(n,EI(r,s,e,n),t);F(i.idToken,r,"internal-error");const o=Rc(i.idToken);F(o,r,"internal-error");const{sub:c}=o;return F(n.uid===c,r,"user-mismatch"),yt._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(n,e,t=!1){if(Ae(n.app))return Promise.reject($e(n));const r="signIn",s=await EI(n,r,e),i=await yt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Pc(n,e){return AI(be(n),e)}async function vI(n,e){const t=H(n);return await Sc(!1,t,e.providerId),xh(t,e)}async function RI(n,e){return wI(H(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ED(n,e){return hn(n,"POST","/v1/accounts:signInWithCustomToken",_e(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TD(n,e){if(Ae(n.app))return Promise.reject($e(n));const t=be(n),r=await ED(t,{token:e,returnSecureToken:!0}),s=await yt._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Lh._fromServerResponse(e,t):"totpInfo"in t?Mh._fromServerResponse(e,t):ht(e,"internal-error")}}class Lh extends xo{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Lh(t)}}class Mh extends xo{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Mh(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(n,e,t){var r;F(((r=t.url)==null?void 0:r.length)>0,n,"invalid-continue-uri"),F(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),F(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(F(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(F(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fh(n){const e=be(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wD(n,e,t){const r=be(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Cc(r,s,t),await Vn(r,s,"getOobCode",rD,"EMAIL_PASSWORD_PROVIDER")}async function AD(n,e,t){await yI(H(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Fh(n),r})}async function vD(n,e){await eD(H(n),{oobCode:e})}async function bI(n,e){const t=H(n),r=await yI(t,{oobCode:e}),s=r.requestType;switch(F(s,t,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":F(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":F(r.mfaInfo,t,"internal-error");default:F(r.email,t,"internal-error")}let i=null;return r.mfaInfo&&(i=xo._fromServerResponse(be(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:i},operation:s}}async function RD(n,e){const{data:t}=await bI(H(n),e);return t.email}async function bD(n,e,t){if(Ae(n.app))return Promise.reject($e(n));const r=be(n),o=await Vn(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",II,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Fh(n),u}),c=await yt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function SD(n,e,t){return Ae(n.app)?Promise.reject($e(n)):Pc(H(n),Jn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Fh(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PD(n,e,t){const r=be(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function i(o,c){F(c.handleCodeInApp,r,"argument-error"),c&&Cc(r,o,c)}i(s,t),await Vn(r,s,"getOobCode",sD,"EMAIL_PASSWORD_PROVIDER")}function CD(n,e){const t=ei.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function DD(n,e,t){if(Ae(n.app))return Promise.reject($e(n));const r=H(n),s=Jn.credentialWithLink(e,t||uo());return F(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Pc(r,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ND(n,e){return ye(n,"POST","/v1/accounts:createAuthUri",_e(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kD(n,e){const t=Nh()?uo():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:s}=await ND(H(n),r);return s||[]}async function VD(n,e){const t=H(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Cc(t.auth,s,e);const{email:i}=await nD(t.auth,s);i!==n.email&&await n.reload()}async function OD(n,e,t){const r=H(n),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Cc(r.auth,i,t);const{email:o}=await iD(r.auth,i);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xD(n,e){return ye(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LD(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=H(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await sn(r,xD(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function MD(n,e){const t=H(n);return Ae(t.auth.app)?Promise.reject($e(t.auth)):SI(t,e,null)}function FD(n,e){return SI(H(n),null,e)}async function SI(n,e,t){const{auth:r}=n,i={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(i.email=e),t&&(i.password=t);const o=await sn(n,XC(r,i));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UD(n){var s,i;if(!n)return null;const{providerId:e}=n,t=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},r=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(n!=null&&n.idToken)){const o=(i=(s=Rc(n.idToken))==null?void 0:s.firebase)==null?void 0:i.sign_in_provider;if(o){const c=o!=="anonymous"&&o!=="custom"?o:null;return new cs(r,c)}}if(!e)return null;switch(e){case"facebook.com":return new BD(r,t);case"github.com":return new qD(r,t);case"google.com":return new jD(r,t);case"twitter.com":return new zD(r,t,n.screenName||null);case"custom":case"anonymous":return new cs(r,null);default:return new cs(r,e,t)}}class cs{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class PI extends cs{constructor(e,t,r,s){super(e,t,r),this.username=s}}class BD extends cs{constructor(e,t){super(e,"facebook.com",t)}}class qD extends PI{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class jD extends cs{constructor(e,t){super(e,"google.com",t)}}class zD extends PI{constructor(e,t,r){super(e,"twitter.com",t,r)}}function $D(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:UD(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(n,e){return H(n).setPersistence(e)}function HD(n){return pI(n)}async function KD(n,e){return be(n).validatePassword(e)}function CI(n,e,t,r){return H(n).onIdTokenChanged(e,t,r)}function DI(n,e,t){return H(n).beforeAuthStateChanged(e,t)}function WD(n,e,t,r){return H(n).onAuthStateChanged(e,t,r)}function QD(n){H(n).useDeviceLanguage()}function JD(n,e){return H(n).updateCurrentUser(e)}function YD(n){return H(n).signOut()}function XD(n,e){return be(n).revokeAccessToken(e)}async function ZD(n){return H(n).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new mr("enroll",e,t)}static _fromMfaPendingCredential(e){return new mr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return mr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((r=e.multiFactorSession)!=null&&r.idToken)return mr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=be(e),s=t.customData._serverResponse,i=(s.mfaInfo||[]).map(c=>xo._fromServerResponse(r,c));F(s.mfaPendingCredential,r,"internal-error");const o=mr._fromMfaPendingCredential(s.mfaPendingCredential);return new Uh(o,i,async c=>{const u=await c._process(r,o);delete s.mfaInfo,delete s.mfaPendingCredential;const l={...s,idToken:u.idToken,refreshToken:u.refreshToken};switch(t.operationType){case"signIn":const d=await yt._fromIdTokenResponse(r,t.operationType,l);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return F(t.user,r,"internal-error"),yt._forOperation(t.user,t.operationType,l);default:ht(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function eN(n,e){var s;const t=H(n),r=e;return F(e.customData.operationType,t,"argument-error"),F((s=r.customData._serverResponse)==null?void 0:s.mfaPendingCredential,t,"argument-error"),Uh._fromError(t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(n,e){return ye(n,"POST","/v2/accounts/mfaEnrollment:start",_e(n,e))}function tN(n,e){return ye(n,"POST","/v2/accounts/mfaEnrollment:finalize",_e(n,e))}function nN(n,e){return ye(n,"POST","/v2/accounts/mfaEnrollment:start",_e(n,e))}function rN(n,e){return ye(n,"POST","/v2/accounts/mfaEnrollment:finalize",_e(n,e))}function sN(n,e){return ye(n,"POST","/v2/accounts/mfaEnrollment:withdraw",_e(n,e))}class Bh{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>xo._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Bh(e)}async getSession(){return mr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,s=await this.getSession(),i=await sn(this.user,r._process(this.user.auth,s,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const s=await sn(this.user,sN(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==t),await this.user._updateTokensIfNecessary(s),await this.user.reload()}catch(s){throw s}}}const yu=new WeakMap;function iN(n){const e=H(n);return yu.has(e)||yu.set(e,Bh._fromUser(e)),yu.get(e)}const Wa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wa,"1"),this.storage.removeItem(Wa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=1e3,aN=10;class kI extends NI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);NC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,aN):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},oN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kI.type="LOCAL";const VI=kI;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=1e3;function Iu(n){var r;const e=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),t=RegExp(`${e}=([^;]+)`);return((r=document.cookie.match(t))==null?void 0:r[1])??null}function Eu(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}class OI{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=Eu(e);if(window.cookieStore){const r=await window.cookieStore.get(t);return r==null?void 0:r.value}return Iu(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;const r=Eu(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const r=Eu(e);if(window.cookieStore){const c=(l=>{const d=l.changed.find(m=>m.name===r);d&&t(d.value),l.deleted.find(m=>m.name===r)&&t(null)}),u=()=>window.cookieStore.removeEventListener("change",c);return this.listenerUnsubscribes.set(t,u),window.cookieStore.addEventListener("change",c)}let s=Iu(r);const i=setInterval(()=>{const c=Iu(r);c!==s&&(t(c),s=c)},cN),o=()=>clearInterval(i);this.listenerUnsubscribes.set(t,o)}_removeListener(e,t){const r=this.listenerUnsubscribes.get(t);r&&(r(),this.listenerUnsubscribes.delete(t))}}OI.type="COOKIE";const uN=OI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI extends NI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xI.type="SESSION";const qh=xI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Dc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(t.origin,i)),u=await lN(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,u)=>{const l=Nc("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===l)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(){return window}function dN(n){Ne().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(){return typeof Ne().WorkerGlobalScope<"u"&&typeof Ne().importScripts=="function"}async function fN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pN(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function mN(){return jh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI="firebaseLocalStorageDb",gN=1,Qa="firebaseLocalStorage",MI="fbase_key";class Lo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function kc(n,e){return n.transaction([Qa],e?"readwrite":"readonly").objectStore(Qa)}function _N(){const n=indexedDB.deleteDatabase(LI);return new Lo(n).toPromise()}function ll(){const n=indexedDB.open(LI,gN);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Qa,{keyPath:MI})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Qa)?e(r):(r.close(),await _N(),e(await ll()))})})}async function Jp(n,e,t){const r=kc(n,!0).put({[MI]:e,value:t});return new Lo(r).toPromise()}async function yN(n,e){const t=kc(n,!1).get(e),r=await new Lo(t).toPromise();return r===void 0?null:r.value}function Yp(n,e){const t=kc(n,!0).delete(e);return new Lo(t).toPromise()}const IN=800,EN=3;class FI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ll(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>EN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dc._getInstance(mN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await fN(),!this.activeServiceWorker)return;this.sender=new hN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ll();return await Jp(e,Wa,"1"),await Yp(e,Wa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jp(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>yN(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=kc(s,!1).getAll();return new Lo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}FI.type="LOCAL";const UI=FI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(n,e){return ye(n,"POST","/v2/accounts/mfaSignIn:start",_e(n,e))}function TN(n,e){return ye(n,"POST","/v2/accounts/mfaSignIn:finalize",_e(n,e))}function wN(n,e){return ye(n,"POST","/v2/accounts/mfaSignIn:finalize",_e(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=dI("rcb"),AN=new Vo(3e4,6e4);class vN{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Ne().grecaptcha)!=null&&e.render)}load(e,t=""){return F(RN(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Bp(Ne().grecaptcha)?Promise.resolve(Ne().grecaptcha):new Promise((r,s)=>{const i=Ne().setTimeout(()=>{s(nt(e,"network-request-failed"))},AN.get());Ne()[Tu]=()=>{Ne().clearTimeout(i),delete Ne()[Tu];const c=Ne().grecaptcha;if(!c||!Bp(c)){s(nt(e,"internal-error"));return}const u=c.render;c.render=(l,d)=>{const p=u(l,d);return this.counter++,p},this.hostLanguage=t,r(c)};const o=`${FC()}?${Ls({onload:Tu,render:"explicit",hl:t})}`;Oh(o).catch(()=>{clearTimeout(i),s(nt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=Ne().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function RN(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class bN{async load(e){return new zC(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="recaptcha",SN={theme:"light",type:"image"};class PN{constructor(e,t,r={...SN}){this.parameters=r,this.type=Wi,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=be(e),this.isInvisible=this.parameters.size==="invisible",F(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;F(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new bN:new vN,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){F(!this.parameters.sitekey,this.auth,"argument-error"),F(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),F(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Ne()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){F(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){F(Nh()&&!jh(),this.auth,"internal-error"),await CN(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await TC(this.auth);F(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return F(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function CN(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=On._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function DN(n,e,t){if(Ae(n.app))return Promise.reject($e(n));const r=be(n),s=await Vc(r,e,H(t));return new zh(s,i=>Pc(r,i))}async function NN(n,e,t){const r=H(n);await Sc(!1,r,"phone");const s=await Vc(r.auth,e,H(t));return new zh(s,i=>vI(r,i))}async function kN(n,e,t){const r=H(n);if(Ae(r.auth.app))return Promise.reject($e(r.auth));const s=await Vc(r.auth,e,H(t));return new zh(s,i=>RI(r,i))}async function Vc(n,e,t){var r;if(!n._getRecaptchaConfig())try{await pI(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const i=s.session;if("phoneNumber"in s){F(i.type==="enroll",n,"internal-error");const o={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Vn(n,o,"mfaSmsEnrollment",async(d,p)=>{if(p.phoneEnrollmentInfo.captchaResponse===Hi){F((t==null?void 0:t.type)===Wi,d,"argument-error");const m=await wu(d,p,t);return Qp(d,m)}return Qp(d,p)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{F(i.type==="signin",n,"internal-error");const o=((r=s.multiFactorHint)==null?void 0:r.uid)||s.multiFactorUid;F(o,n,"missing-multi-factor-info");const c={mfaPendingCredential:i.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Vn(n,c,"mfaSmsSignIn",async(p,m)=>{if(m.phoneSignInInfo.captchaResponse===Hi){F((t==null?void 0:t.type)===Wi,p,"argument-error");const y=await wu(p,m,t);return Xp(p,y)}return Xp(p,m)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Vn(n,i,"sendVerificationCode",async(l,d)=>{if(d.captchaResponse===Hi){F((t==null?void 0:t.type)===Wi,l,"argument-error");const p=await wu(l,d,t);return Kp(l,p)}return Kp(l,d)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t==null||t._reset()}}async function VN(n,e){const t=H(n);if(Ae(t.auth.app))return Promise.reject($e(t.auth));await xh(t,e)}async function wu(n,e,t){F(t.type===Wi,n,"argument-error");const r=await t.verify();F(typeof r=="string",n,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,c=s.phoneEnrollmentInfo.clientType,u=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:r,captchaResponse:o,clientType:c,recaptchaVersion:u}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,c=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:i,clientType:o,recaptchaVersion:c}}),s}else return Object.assign(s,{recaptchaToken:r}),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.providerId=Er.PROVIDER_ID,this.auth=be(e)}verifyPhoneNumber(e,t){return Vc(this.auth,e,H(t))}static credential(e,t){return On._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Er.credentialFromTaggedObject(t)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?On._fromTokenResponse(t,r):null}}Er.PROVIDER_ID="phone";Er.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n,e){return e?Qt(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h extends Zs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ON(n){return AI(n.auth,new $h(n),n.bypassAuthState)}function xN(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),wI(t,new $h(n),n.bypassAuthState)}async function LN(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),xh(t,new $h(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ON;case"linkViaPopup":case"linkViaRedirect":return LN;case"reauthViaPopup":case"reauthViaRedirect":return xN;default:ht(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=new Vo(2e3,1e4);async function FN(n,e,t){if(Ae(n.app))return Promise.reject(nt(n,"operation-not-supported-in-this-environment"));const r=be(n);Xs(n,e,dn);const s=Mr(r,t);return new Jt(r,"signInViaPopup",e,s).executeNotNull()}async function UN(n,e,t){const r=H(n);if(Ae(r.auth.app))return Promise.reject(nt(r.auth,"operation-not-supported-in-this-environment"));Xs(r.auth,e,dn);const s=Mr(r.auth,t);return new Jt(r.auth,"reauthViaPopup",e,s,r).executeNotNull()}async function BN(n,e,t){const r=H(n);Xs(r.auth,e,dn);const s=Mr(r.auth,t);return new Jt(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class Jt extends BI{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=Nc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MN.get())};e()}}Jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN="pendingRedirect",Ta=new Map;class jN extends BI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ta.get(this.auth._key());if(!e){try{const r=await zN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ta.set(this.auth._key(),e)}return this.bypassAuthState||Ta.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zN(n,e){const t=jI(e),r=qI(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function Gh(n,e){return qI(n)._set(jI(e),"true")}function $N(n,e){Ta.set(n._key(),e)}function qI(n){return Qt(n._redirectPersistence)}function jI(n){return Ea(qN,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(n,e,t){return HN(n,e,t)}async function HN(n,e,t){if(Ae(n.app))return Promise.reject($e(n));const r=be(n);Xs(n,e,dn),await r._initializationPromise;const s=Mr(r,t);return await Gh(s,r),s._openRedirect(r,e,"signInViaRedirect")}function KN(n,e,t){return WN(n,e,t)}async function WN(n,e,t){const r=H(n);if(Xs(r.auth,e,dn),Ae(r.auth.app))return Promise.reject($e(r.auth));await r.auth._initializationPromise;const s=Mr(r.auth,t);await Gh(s,r.auth);const i=await $I(r);return s._openRedirect(r.auth,e,"reauthViaRedirect",i)}function QN(n,e,t){return JN(n,e,t)}async function JN(n,e,t){const r=H(n);Xs(r.auth,e,dn),await r.auth._initializationPromise;const s=Mr(r.auth,t);await Sc(!1,r,e.providerId),await Gh(s,r.auth);const i=await $I(r);return s._openRedirect(r.auth,e,"linkViaRedirect",i)}async function YN(n,e){return await be(n)._initializationPromise,zI(n,e,!1)}async function zI(n,e,t=!1){if(Ae(n.app))return Promise.reject($e(n));const r=be(n),s=Mr(r,e),o=await new jN(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function $I(n){const e=Nc(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=600*1e3;class ZN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ek(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!GI(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(nt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zp(e))}saveEventToCache(e){this.cachedEventUids.add(Zp(e)),this.lastProcessedEventTime=Date.now()}}function Zp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function GI({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ek(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return GI(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(n,e={}){return ye(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rk=/^https?/;async function sk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await tk(n);for(const t of e)try{if(ik(t))return}catch{}ht(n,"unauthorized-domain")}function ik(n){const e=uo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!rk.test(t))return!1;if(nk.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=new Vo(3e4,6e4);function em(){const n=Ne().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ak(n){return new Promise((e,t)=>{var s,i,o;function r(){em(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{em(),t(nt(n,"network-request-failed"))},timeout:ok.get()})}if((i=(s=Ne().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Ne().gapi)!=null&&o.load)r();else{const c=dI("iframefcb");return Ne()[c]=()=>{gapi.load?r():t(nt(n,"network-request-failed"))},Oh(`${BC()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw wa=null,e})}let wa=null;function ck(n){return wa=wa||ak(n),wa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=new Vo(5e3,15e3),lk="__/auth/iframe",hk="emulator/auth/iframe",dk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pk(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?kh(e,hk):`https://${n.config.authDomain}/${lk}`,r={apiKey:e.apiKey,appName:n.name,v:Fs},s=fk.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ls(r).slice(1)}`}async function mk(n){const e=await ck(n),t=Ne().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:pk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nt(n,"network-request-failed"),c=Ne().setTimeout(()=>{i(o)},uk.get());function u(){Ne().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_k=500,yk=600,Ik="_blank",Ek="http://localhost";class tm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tk(n,e,t,r=_k,s=yk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...gk,width:r.toString(),height:s.toString(),top:i,left:o},l=xe().toLowerCase();t&&(c=iI(l)?Ik:t),rI(l)&&(e=e||Ek,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[y,N])=>`${m}${y}=${N},`,"");if(DC(l)&&c!=="_self")return wk(e||"",c),new tm(null);const p=window.open(e||"",c,d);F(p,n,"popup-blocked");try{p.focus()}catch{}return new tm(p)}function wk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak="__/auth/handler",vk="emulator/auth/handler",Rk=encodeURIComponent("fac");async function nm(n,e,t,r,s,i){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Fs,eventId:s};if(e instanceof dn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Fw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof ti){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const u=await n._getAppCheckToken(),l=u?`#${Rk}=${encodeURIComponent(u)}`:"";return`${bk(n)}?${Ls(c).slice(1)}${l}`}function bk({config:n}){return n.emulator?kh(n,vk):`https://${n.authDomain}/${Ak}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="webStorageSupport";class Sk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qh,this._completeRedirectFn=zI,this._overrideRedirectResult=$N}async _openPopup(e,t,r,s){var o;rn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await nm(e,t,r,uo(),s);return Tk(e,i,Nc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await nm(e,t,r,uo(),s);return dN(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(rn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await mk(e),r=new ZN(e);return t.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Au,{type:Au},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Au];i!==void 0&&t(!!i),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return lI()||sI()||Vh()}}const HI=Sk;class KI{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Mt("unexpected MultiFactorSessionType")}}}class Hh extends KI{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Hh(e)}_finalizeEnroll(e,t,r){return tN(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return TN(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class WI{constructor(){}static assertion(e){return Hh._fromCredential(e)}}WI.FACTOR_ID="phone";class QI{static assertionForEnrollment(e,t){return fo._fromSecret(e,t)}static assertionForSignIn(e,t){return fo._fromEnrollmentId(e,t)}static async generateSecret(e){var s;const t=e;F(typeof((s=t.user)==null?void 0:s.auth)<"u","internal-error");const r=await nN(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Oc._fromStartTotpMfaEnrollmentResponse(r,t.user.auth)}}QI.FACTOR_ID="totp";class fo extends KI{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new fo(t,void 0,e)}static _fromEnrollmentId(e,t){return new fo(t,e)}async _finalizeEnroll(e,t,r){return F(typeof this.secret<"u",e,"argument-error"),rN(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){F(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const r={verificationCode:this.otp};return wN(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}}class Oc{constructor(e,t,r,s,i,o,c){this.sessionInfo=o,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=s,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Oc(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var s;let r=!1;return(ia(e)||ia(t))&&(r=!0),r&&(ia(e)&&(e=((s=this.auth.currentUser)==null?void 0:s.email)||"unknownuser"),ia(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function ia(n){return typeof n>"u"||(n==null?void 0:n.length)===0}var rm="@firebase/auth",sm="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Dk(n){hs(new Ar("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hI(n)},l=new LC(r,s,i,u);return QC(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),hs(new Ar("auth-internal",e=>{const t=be(e.getProvider("auth").getImmediate());return(r=>new Pk(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(rm,sm,Ck(n)),Dn(rm,sm,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=300,kk=Mm("authIdTokenMaxAge")||Nk;let im=null;const Vk=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>kk)return;const s=t==null?void 0:t.token;im!==s&&(im=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ok(n=$m()){const e=Io(n,"auth");if(e.isInitialized())return e.getImmediate();const t=mI(n,{popupRedirectResolver:HI,persistence:[UI,VI,qh]}),r=Mm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Vk(i.toString());DI(t,o,()=>o(t.currentUser)),CI(t,c=>o(c))}}const s=xm("auth");return s&&gI(t,`http://${s}`),t}function xk(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}MC({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=nt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",xk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Dk("Browser");const iV=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:uC,ActionCodeURL:ei,AuthCredential:Zs,AuthErrorCodes:dC,EmailAuthCredential:Vs,EmailAuthProvider:Jn,FacebookAuthProvider:$t,FactorId:iC,GithubAuthProvider:Ht,GoogleAuthProvider:Gt,OAuthCredential:jt,OAuthProvider:Ki,OperationType:cC,PhoneAuthCredential:On,PhoneAuthProvider:Er,PhoneMultiFactorGenerator:WI,ProviderId:oC,RecaptchaVerifier:PN,SAMLAuthProvider:Ha,SignInMethod:aC,TotpMultiFactorGenerator:QI,TotpSecret:Oc,TwitterAuthProvider:Kt,applyActionCode:vD,beforeAuthStateChanged:DI,browserCookiePersistence:uN,browserLocalPersistence:VI,browserPopupRedirectResolver:HI,browserSessionPersistence:qh,checkActionCode:bI,confirmPasswordReset:AD,connectAuthEmulator:gI,createUserWithEmailAndPassword:bD,debugErrorMap:hC,deleteUser:ZD,fetchSignInMethodsForEmail:kD,getAdditionalUserInfo:$D,getAuth:Ok,getIdToken:vC,getIdTokenResult:Zy,getMultiFactorResolver:eN,getRedirectResult:YN,inMemoryPersistence:ul,indexedDBLocalPersistence:UI,initializeAuth:mI,initializeRecaptchaConfig:HD,isSignInWithEmailLink:CD,linkWithCredential:vI,linkWithPhoneNumber:NN,linkWithPopup:BN,linkWithRedirect:QN,multiFactor:iN,onAuthStateChanged:WD,onIdTokenChanged:CI,parseActionCodeURL:mD,prodErrorMap:Hy,reauthenticateWithCredential:RI,reauthenticateWithPhoneNumber:kN,reauthenticateWithPopup:UN,reauthenticateWithRedirect:KN,reload:eI,revokeAccessToken:XD,sendEmailVerification:VD,sendPasswordResetEmail:wD,sendSignInLinkToEmail:PD,setPersistence:GD,signInAnonymously:yD,signInWithCredential:Pc,signInWithCustomToken:TD,signInWithEmailAndPassword:SD,signInWithEmailLink:DD,signInWithPhoneNumber:DN,signInWithPopup:FN,signInWithRedirect:GN,signOut:YD,unlink:ID,updateCurrentUser:JD,updateEmail:MD,updatePassword:FD,updatePhoneNumber:VN,updateProfile:LD,useDeviceLanguage:QD,validatePassword:KD,verifyBeforeUpdateEmail:OD,verifyPasswordResetCode:RD},Symbol.toStringTag,{value:"Module"}));export{Ve as a,LS as b,sV as c,iV as d,Ok as g,qA as i};
