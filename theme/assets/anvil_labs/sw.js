function v(){let{ffi:{proxy:e,toPy:t},abstr:{setUpModuleMethods:n,objectSetItem:r},misceval:{promiseToSuspension:s,chain:a}}=Sk,o={__name__:t("js"),window:e(self)};async function c(f){let l=await new Function("return import("+JSON.stringify(f.toString())+")").call(null);return e(l)}return n("js",o,{await_promise:{$meth(f){let l=f.valueOf();return l instanceof Promise||l&&l.then&&typeof l.then=="function"?a(s(l),M=>t(M,{dictHook:T=>e(T)})):f},$flags:{OneArg:!0}},import_from:{$meth(f){return s(c(f))},$flags:{OneArg:!0}}}),r(Sk.sysmodules,t("anvil.js.window"),o.window),o}function _(){let{ffi:{toPy:e,toJs:t},abstr:{setUpModuleMethods:n}}=Sk,r={__name__:new e("json")};return n("js",r,{dumps:{$meth(s){return new e(JSON.stringify(t(s)))},$flags:{OneArg:!0}},loads:{$meth(s){return e(JSON.parse(s.toString()))},$flags:{OneArg:!0}}}),r}var S=new Map([["src/lib/json.js",`var $builtinmodule=${_};`],["src/lib/anvil/__init__.py","def is_server_side():return False"],["src/lib/anvil/js.js",`var $builtinmodule=${v};`],["src/lib/anvil/tz.py",`import datetime,time
class tzoffset(datetime.tzinfo):
	def __init__(A,**B):A._offset=datetime.timedelta(**B)
	def utcoffset(A,dt):return A._offset
	def dst(A,dt):return datetime.timedelta()
	def tzname(A,dt):return None
class tzlocal(tzoffset):
	def __init__(B):
		if time.localtime().tm_isdst and time.daylight:A=-time.altzone
		else:A=-time.timezone
		tzoffset.__init__(B,seconds=A)
class tzutc(tzoffset):0
UTC=tzutc()`],["src/lib/anvil/server.py",`class SerializationError(Exception):0
def get_app_origin():return self.anvilAppOrigin
def get_api_origin():return get_app_origin()+'/_/api'
def call(*args,**kws):
	from anvil_labs.kompot import preserve,reconstruct,serialize;name,*args=args;rv=self.fetch(get_api_origin()+f"/anvil_labs_private_call?name={name}",{'headers':{'Content-Type':'application/json'},'method':'POST','body':self.JSON.stringify(preserve([args,kws]))});result,error=rv.json()
	if error:raise Exception(error)
	return reconstruct(dict(result))
def portable_class(cls,name=None):
	if name is None and isinstance(cls,str):name=cls;return lambda cls:cls
	else:return cls`]]);importScripts("https://anvil.works/runtime-new/runtime/js/lib/skulpt.min.js","https://cdn.jsdelivr.net/npm/localforage@1.10.0/dist/localforage.min.js","https://cdn.jsdelivr.net/npm/uuid@8.3.2/dist/umd/uuid.min.js");var w=localforage.createInstance({name:"anvil-labs-sw",storeName:"lib"}),E=d();function d(){let e={resolve:()=>{},reject:()=>{}};return e.promise=new Promise((t,n)=>{e.resolve=t,e.reject=n}),e}var y=new Map;function O(e){let t=Math.random().toString(36).substring(6);self.postMessage({type:"IMPORT",id:t,filename:e});let n=d();return y.set(t,n),n.promise}var u=e=>{var o,c;let{builtin:{BaseException:t},ffi:{toJs:n}}=Sk,r,s,a;e instanceof t?(s=n(e.args),r=e.tp$name,a=e.traceback):(r=(c=(o=e.constructor)==null?void 0:o.name)!=null?c:"<unknown>",s=e.message?[e.message]:[]),self.postMessage({type:"ERROR",errorType:r,errorArgs:s,errorTb:a})};async function I(e){return await w.getItem(e)}function b(){Sk.configure({output(e){return self.postMessage({type:"OUT",message:e})},yieldLimit:300,syspath:["app"],read(e){let t=S.get(e);return t!==void 0?t:Sk.misceval.promiseToSuspension(I(e).then(n=>n!=null?n:O(e).then(r=>(w.setItem(e,r!=null?r:0),r))).then(n=>{if(n==null||n===0)throw"No module named "+e;return n}))}}),Sk.builtins.self=Sk.ffi.proxy(self),E.resolve(!0)}function P(e){let{data:t}=e;if(t.type==="MODULE"){let{id:n,content:r}=t,s=y.get(n);if(s===void 0)return;let{resolve:a}=s;y.delete(n),a(r)}}self.onunhandledrejection=e=>{u(e.reason)};self.addEventListener("message",P);self.window=self;self.anvilAppOrigin="";var i=null;async function k(e){i=d(),i.promise.then(()=>g({type:"READY"})),await m.setItem("__main__",e);try{await N(()=>z(e,!1,!0)),i.resolve(!0)}catch(t){console.error(t),u(t),i.reject(t)}}var{builtin:{func:x},misceval:{asyncToPromise:N},importMain:z}=Sk;b();L();function $(e){return new Promise(t=>setTimeout(t,e))}var p=0;function L(){function e(t,n=[]){if(t.length!==1)throw new Sk.builtin.TypeError("Expeceted one arg to raise_event");let r={};for(let s=0;s<n.length;s+=2){let a=n[s],o=n[s+1];r[a]=Sk.ffi.toJs(o)}j(t[0].toString(),r)}e.co_fastcall=!0,self.raise_event=new x(e),self.sync_event_handler=t=>n=>{let r=async()=>{await(i==null?void 0:i.promise);try{let s=await t(n);return p=0,s}catch(s){if(p<5&&String(s).toLowerCase().includes("failed to fetch"))return p++,g({type:"OUT",message:`It looks like we're offline re-registering sync: '${n.tag}'
`}),await $(500),self.registration.sync.register(n.tag);p=0,u(s)}};n.waitUntil(r())}}var m=localforage.createInstance({name:"anvil-labs-sw",storeName:"locals"});async function R(e){let t=e.data,{type:n}=t;if(n!=="INIT")return;let{name:r}=t;await k(r)}self.addEventListener("message",R);self.addEventListener("activate",e=>{console.log("%cSW ACTIVATED","color: hotpink;")});async function U(e){let t=e.data,{type:n}=t;if(n!=="APPORIGIN")return;let{origin:r}=t;self.anvilAppOrigin=r,await m.setItem("apporigin",r)}self.addEventListener("message",U);async function g(e){e.ANVIL_LABS=!0;let t=await self.clients.matchAll({includeUncontrolled:!0,type:"window"});for(let n of t)n.postMessage(e)}self.postMessage=g;function j(e,t={}){t.event_name=e,g({type:"EVENT",name:e,kws:t})}function h(e,t){var r;let{get:n}=(r=Object.getOwnPropertyDescriptor(self,e))!=null?r:{};delete self[e],Object.defineProperty(self,e,{get:n,set:t,configurable:!0})}function A(e){var a;let t="on"+e,n=d(),{set:r}=(a=Object.getOwnPropertyDescriptor(self,t))!=null?a:{},s;self[t]=o=>{s=o,D(),setTimeout(()=>{n.resolve("timeout")},5e3),o.waitUntil(n.promise)},h(t,async o=>{if(h(t,r),self[t]=o,!!s)try{await(i==null?void 0:i.promise),await o(s),n.resolve(null)}catch(c){n.reject(c)}}),self.addEventListener(e,o=>{j(e,{tag:o.tag})})}A("sync");A("periodicsync");async function D(){let e=await m.getItem("apporigin");if(self.anvilAppOrigin=e!=null?e:"",i)return i.promise;let t=await m.getItem("__main__");t&&await k(t)}console.log("%cRUNNING SW SCRIPT","color: green;");
