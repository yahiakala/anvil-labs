async function c(e){let r=null;try{r=Sk.read(e),typeof r!="string"&&(r=await Sk.misceval.asyncToPromise(()=>r))}catch{if(e.startsWith("app/")){let[o,n,t]=e.split("/");t==="__init__.py"&&n!=="anvil"&&(r="pass")}else r=null}return r}var a,{builtin:{ExternalError:p},misceval:{callsimArray:y,callsimOrSuspendArray:d},ffi:{toPy:l}}=Sk;async function f(e){let{data:r}=e;if(!r.ANVIL_LABS||r.type!=="IMPORT")return;let{filename:o,id:n}=r,t=await c(o);a.active?.postMessage({type:"MODULE",content:t,id:n})}function m(e,r,o){let n;try{let t=Sk.builtin[e];n=y(t,r.map(s=>l(s))),n.traceback=o??[]}catch{let t;try{t=new window[e](...r)}catch{t=new Error(...r)}n=new p(t)}return n}function g(e){let{data:r}=e;if(!r.ANVIL_LABS||r.type!=="ERROR")return;let{errorType:o,errorArgs:n,errorTb:t}=r,s=m(o,n,t),i=Sk.sysmodules.quick$lookup(l("anvil_labs.service_worker"));if(!i)throw s;let u=i.$d._error_handler;d(u,[s])}async function k(){a=await navigator.serviceWorker.register("_/theme/anvil_labs/sw.js");try{await a.update()}catch{}return navigator.serviceWorker.addEventListener("message",f),navigator.serviceWorker.addEventListener("message",g),a}var w=k;export{w as default,k as init};