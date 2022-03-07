(this["webpackJsonpmotoko-playground"]=this["webpackJsonpmotoko-playground"]||[]).push([[0],{105:function(e,t,n){var a,i=n(118).wrap,r=n(119);e.exports=function e(){return this instanceof e?i(r()):a||(a=i(r()))}},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=({IDL:e})=>e.Service({binding:e.Func([e.Text,e.Text],[e.Opt(e.Text)],["query"]),did_to_js:e.Func([e.Text],[e.Opt(e.Text)],["query"]),subtype:e.Func([e.Text,e.Text],[e.Variant({Ok:e.Null,Err:e.Text})],["query"])})},113:function(e){e.exports=JSON.parse('[{"authors":["The DFINITY Language Team"],"dependencies":[],"description":"The Motoko standard library","homepage":"https://sdk.dfinity.org/docs/base-libraries/stdlib-intro.html","name":"base","owners":["kritzcreek","dfinity"],"repo":"https://github.com/dfinity/motoko-base.git","version":"master"},{"authors":["Matthew Hammer"],"dependencies":["base"],"description":"A framework for constructing CRUD services in Motoko for the Internet Computer.","name":"crud","owners":["matthewhammer"],"repo":"https://github.com/matthewhammer/motoko-crud.git","version":"c9bc6acbb6da81fc20d8ffec8063d9f6b4d01efd"},{"authors":["Christoph Hegemann"],"dependencies":["base"],"description":"Composable Assertions for unit testing","homepage":"https://kritzcreek.github.io/motoko-matchers/","name":"matchers","owners":["kritzcreek"],"repo":"https://github.com/kritzcreek/motoko-matchers.git","version":"v1.2.0"},{"authors":["Claudio Russo"],"dependencies":["base"],"description":"A Parsec-based parsing combinator library for Motoko","homepage":"https://crusso.github.io/mo-parsec/","name":"parsec","owners":["crusso"],"repo":"https://github.com/crusso/mo-parsec.git","version":"v1.0.0"},{"authors":["Joachim Breitner"],"dependencies":["base"],"description":"A Strongly Connected Component library for Motoko","homepage":"https://nomeata.github.io/motoko-scc/","name":"scc","owners":["nomeata"],"repo":"https://github.com/nomeata/motoko-scc.git","version":"v0.1.1"},{"authors":["Enzo Haussecker"],"dependencies":["base"],"description":"SHA256 implemented in Motoko","name":"sha256","owners":["enzoh"],"repo":"https://github.com/enzoh/motoko-sha.git","version":"9e2468f51ef060ae04fde8d573183191bda30189"},{"authors":["Inv Lo"],"dependencies":["base"],"description":"The Internet Computer Improvement Protocol library","homepage":"https://feliciss.github.io/icip","name":"icip","owners":["feliciss"],"repo":"https://github.com/feliciss/icip.git","version":"v1.2.0"},{"authors":["Christoph Hegemann"],"dependencies":["base"],"description":"A pretty printing library","homepage":"https://kritzcreek.github.io/motoko-pretty/","name":"pretty","owners":["kritzcreek"],"repo":"https://github.com/kritzcreek/motoko-pretty.git","version":"v0.1.0"},{"authors":["Enzo Haussecker","flyq"],"dependencies":["base"],"description":"SHA224 implemented in Motoko","homepage":"https://flyq.github.io/motoko-sha224/","name":"sha224","owners":["flyq"],"repo":"https://github.com/flyq/motoko-sha224.git","version":"v0.1.0"},{"authors":["Yan Chen"],"dependencies":["base"],"description":"Splay tree library","homepage":"https://chenyan2002.github.io/motoko-splay/lib.html","name":"splay","owners":["chenyan2002"],"repo":"https://github.com/chenyan2002/motoko-splay.git","version":"v0.1.0"},{"authors":["Matthew Hammer"],"dependencies":["base"],"description":"Persistent sequence representation and algorithms.","homepage":"http://matthewhammer.org/motoko-sequence/","name":"sequence","owners":["matthewhammer"],"repo":"https://github.com/matthewhammer/motoko-sequence.git","version":"v0.1.1"},{"authors":["flyq"],"dependencies":["base"],"description":"Base32 implemented in Motoko","homepage":"https://flyq.github.io/motoko-base32/","name":"base32","owners":["flyq"],"repo":"https://github.com/flyq/motoko-base32.git","version":"v0.1.1"},{"authors":["Matthew Hammer"],"dependencies":["base"],"description":"Incremental computation, dependency graphs and change propagation.","homepage":"http://matthewhammer.org/motoko-adapton/","name":"adapton","owners":["matthewhammer"],"repo":"https://github.com/matthewhammer/motoko-adapton.git","version":"v0.1.1"},{"authors":["Timo Hanke"],"dependencies":["base"],"description":"Extension of the Iter base library","name":"iterext","owners":["timohanke"],"repo":"https://github.com/timohanke/motoko-iterext.git","version":"v2.0.0"},{"authors":["Timo Hanke"],"dependencies":["base","iterext"],"description":"SHA2 family of hash functions","name":"sha2","owners":["timohanke"],"repo":"https://github.com/timohanke/motoko-sha2.git","version":"v2.0.0"}]')},119:function(e,t,n){e.exports=function(){return new Worker(n.p+"ea857c09995510698004.worker.js")}},245:function(e,t,n){},246:function(e,t,n){},247:function(e,t,n){},248:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(53),o=n.n(r),c=n(2),s=n(105),l=n.n(s);const d=c.c.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-shrink: 0;
  height: var(--sectionHeaderHeight);
  padding: 0 1.2rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 1px solid var(--grey300);
  text-transform: uppercase;
`;var p=n.p+"static/media/icon-collapse.b175d374.svg",m=n.p+"static/media/icon-open.e152dbca.svg",u=n(8),h=n(0);const b=c.c.div`
  width: 40%;
  max-width: 60rem;
  width: var(--candidWidth);
`,g=c.c.iframe`
  height: calc(var(--appHeight) - var(--sectionHeaderHeight));
  border: none;
  width: var(--candidWidth);
`,j=Object(c.c)("img")`
  width: 1.4rem;
  margin-right: 1rem;
  ${e=>e.isExpanded?"":"transform: rotate(180deg);"}
`,f=Object(c.c)("img")`
  width: 2.2rem;
  margin-left: auto;
`,y=c.c.button`
  background: none;
  border: none;
  box-shadow: none;
`,x=u.f;function _({canisterId:e,candid:t,setCandidWidth:n,forceUpdate:i}){const[r,o]=Object(a.useState)(!0),c=t&&t.length<2048?`&did=${encodeURIComponent(btoa(t))}`:"";Object(a.useEffect)((()=>{n(r?"30vw":"fit-content")}),[r,n]),Object(a.useEffect)((()=>{o(!0)}),[e,t,i]);const s=`${x}/?id=${e}&tag=${i}`+c;return Object(h.jsxs)(b,{isExpanded:r,children:[Object(h.jsxs)(d,{children:[Object(h.jsxs)(y,{onClick:()=>{o(!r)},children:[Object(h.jsx)(j,{isExpanded:r,src:p,alt:"Collapse icon"}),r?"CANDID UI":null]}),r?Object(h.jsx)(y,{onClick:()=>{window.open(s,"_blank")},children:Object(h.jsx)(f,{src:m})}):null]}),r?Object(h.jsx)(g,{src:s}):null]})}var O=n(56),w=n(111),v=n.n(w),k=n(112),C=n.n(k),E=n(7);const A=Object(c.c)("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.6rem;
  font-size: 1.4rem;
  font-weight: 500;
  height: ${e=>e.small?"3.3rem":"4.5rem"};
  min-width: ${e=>e.small?"5.6rem":"7.8rem"};
  ${e=>e.width?`width: ${e.width}`:""};
  background-color: ${e=>e.variant?"primary"===e.variant?"var(--colorPrimary)":"white":"var(--grey200)"};
  color: ${e=>"primary"===e.variant?"white":"secondary"===e.variant?"var(--grey500)":"var(--grey600)"};
  border: ${e=>"1px solid "+("secondary"===e.variant?"var(--grey400)":"transparent")};
  border-radius: ${e=>e.small?"1.7rem":"2.3rem"};

  &:not(:last-child) {
    margin-right: 2rem;
  }

  > *:not(:last-child) {
    margin-right: 0.8rem;
  }

  > p {
    margin: 0;
  }

  &:hover {
    background-color: ${e=>"primary"===e.variant?"var(--colorPrimaryDark)":"var(--grey100)"};
    ${e=>e.variant?"":"color: var(--colorPrimary);\n           border: 1px solid var(--grey300);\n\n           > svg * {\n             fill: var(--colorPrimary);\n           }\n           "};
  }

  img {
    max-width: 2.5rem;
  }
`,M=c.c.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`,S=e=>{e.languages.register({id:"motoko"}),e.languages.setLanguageConfiguration("motoko",{comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"<",close:">"}]}),e.languages.setMonarchTokensProvider("motoko",{defaultToken:"",tokenPostfix:".mo",keywords:["actor","and","async","assert","await","break","case","catch","class","continue","debug","else","false","for","func","if","in","import","module","not","null","object","or","label","let","loop","private","public","return","shared","try","throw","debug_show","query","switch","true","type","var","while","stable","flexible","system"],accessmodifiers:["public","private","shared"],typeKeywords:["Any","None","Null","Bool","Int","Int8","Int16","Int32","Int64","Nat","Nat8","Nat16","Nat32","Nat64","Word8","Word16","Word32","Word64","Float","Char","Text","Blob","Error","Principal"],operators:["=","<",">",":","<:","?","+","-","*","/","%","**","&","|","^","<<",">>","#","==","!=",">=","<=",":=","+=","-=","*=","/=","%=","**=","&=","|=","^=","<<=",">>=","#=","->"],symbols:/[=(){}[\].,:;@#_&\-<>`?!+*\\/]/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/[a-zA-Z_$][\w$]*/,{cases:{"@typeKeywords":"keyword.type","@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},[/[{}()[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":""}}],[/\d*\.\d+([eE][-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F_]+/,"number.hex"],[/[0-9_]+/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,{token:"string.quote",bracket:"@open",next:"@string"}],[/'[^\\']'/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],comment:[[/[^/*]+/,"comment"],[/\/\*/,"comment","@push"],["\\*/","comment","@pop"],[/[/*]/,"comment"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]]}})},I={clearLogs(){},log(e){},logLines:[]},T=Object(a.createContext)(I);function D({children:e}){const t=(()=>{const[e,t]=Object(a.useState)([]);return{clearLogs:()=>t([]),log:e=>{const n=new Date(Date.now()).toLocaleTimeString();t((t=>[...t,`[${n}] ${e}`]))},logLines:e}})();return Object(h.jsx)(T.Provider,{value:t,children:e})}const P=()=>Object(a.useContext)(T);var F=n.p+"static/media/icon-caret-down.6083629a.svg";const $=Object(c.c)(d)`
  padding: 0 1rem;
  height: 2.4rem;
  border-top: 1px solid var(--grey300);
`,R=c.c.div`
  flex: 1;
  height: var(--consoleHeight);
  overflow: auto;
  padding-left: 0.5rem;
`,W=c.c.button`
  background: none;
  border: none;
  box-shadow: none;
`,q=c.c.img`
  ${e=>e.isExpanded?"":"transform: rotate(180deg);"}
`;function L({setConsoleHeight:e}){const[t,n]=Object(a.useState)(!0),i=Object(a.useRef)(null),r=P();return Object(a.useEffect)((()=>{i&&i.current&&i.current.scrollIntoView({behavior:"smooth"})}),[r.logLines.length]),Object(a.useEffect)((()=>{e(t?"24rem":"3rem")}),[t]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)($,{children:["Log",Object(h.jsx)(M,{children:Object(h.jsx)(W,{onClick:()=>n(!t),children:Object(h.jsx)(q,{isExpanded:t,src:F,alt:"Caret icon"})})})]}),Object(h.jsx)(R,{children:r.logLines.map(((e,t)=>Object(h.jsx)("pre",{ref:i,style:{whiteSpace:"normal"},children:e},t)))})]})}var N=n.p+"static/media/icon-spin.a1a99674.gif";function z(e){return Object.entries(e).map((([e,t])=>[e,t.id.toText()]))}function B(e){if("README"in e)return"README";if("Main.mo"in e)return"Main.mo";const t=Object.keys(e);if(!t.length)return null;return t.find((e=>e.endsWith("Main.mo")))||t[0]}const U={init:e=>({files:{"Main.mo":""},selectedFile:"Main.mo",canisters:{},selectedCanister:null,packages:{}}),reduce(e,t){switch(t.type){case"loadProject":return{...e,files:t.payload.files,selectedFile:B(t.payload.files)};case"loadPackage":return{...e,packages:{...e.packages,[t.payload.name]:t.payload.package}};case"reset":return this.init(t.payload);case"selectFile":return{...e,selectedFile:t.payload.path};case"selectCanister":return{...e,selectedCanister:t.payload.name};case"deleteCanister":{const n=t.payload.name;return delete e.canisters[n],{...e,selectedCanister:e.selectedCanister===n?null:e.selectedCanister}}case"saveFile":return{...e,files:{...e.files,[t.payload.path]:t.payload.contents}};case"deployWorkplace":{const n=t.payload.canister.name;return{...e,selectedCanister:n,canisters:{...e.canisters,[n]:t.payload.canister}}}default:}return e}},H=a.createContext((()=>{console.warn("using default WorkplaceDispathcContext. Make sure to Provide one in your component tree")})),K=a.createContext((()=>{console.warn("provide a value for worker")}));function V(e,t){e.forEach((e=>{const{message:n,severity:a,source:i,range:{start:r}}=e,o=`${1===a?"Error":"Warning"} in file ${i}:${r.line}:${r.character}   ${n}`;t.log(o)}))}async function G(e,t,n,a,i,r,o,c){try{c.log("Deploying code...");let s=null;if(n){if("reinstall"!==i&&"upgrade"!==i)throw new Error(`Unknown mode ${i}`);s=await J(n,r,a,i,o,c)}else{if("install"!==i)throw new Error(`Cannot ${i} for new canister`);c.log("Requesting a new canister id..."),n=await async function(e,t){const n=BigInt(Date.now())*BigInt(1e6),a=await e.pow(n),i=await u.a.getCanisterId(a);return t.log(`Got canister id ${i.id}`),{id:i.id,isExternal:!1,timestamp:i.timestamp}}(e,c),s=await J(n,r,a,"install",o,c)}return s.name=t,s}catch(s){throw c.log(s.message),s}}async function J(e,t,n,a,i,r){if(!e)throw new Error("no canister id");const o={arg:[...n],wasm_module:[...t],mode:{[a]:null},canister_id:e.id};return e=await u.a.installCode(e,o,i),r.log(`Code installed at canister id ${e.id}`),e}var X=[/^https?:\/\/(localhost|127.0.0.1)(:[0-9]+)?$/,"https://blocks-editor.github.io"];const Y={};let Z;async function Q(e,t,n){if(Z)return Z;return window.addEventListener("message",(async({origin:a,source:i,data:r})=>{try{if(!X.some((e=>e instanceof RegExp?e.test(a):e===a)))return;if("string"===typeof r&&r.startsWith(e)){const o=JSON.parse(r.substring(e.length));if(await(async e=>{var a;"workplace"===e.type&&(e.actions&&e.actions.forEach((e=>{t(e)})),e.packages&&await Promise.all(e.packages.map((async e=>{await n.fetchPackage(e),t({type:"loadPackage",payload:{name:e.name,package:e}})}))),e.deploy&&await(null===(a=Y.deploy)||void 0===a?void 0:a.call(Y)))})(o),!(i instanceof MessagePort)){const t={acknowledge:o.acknowledge};null===i||void 0===i||i.postMessage(`${e}${JSON.stringify(t)}`,a)}}}catch(o){console.error("Error in editor integration message listener:"),console.error(o)}}),!1),Z={"Main.mo":""},Z}const ee=c.c.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: var(--appHeight);
  border: 1px solid var(--grey300);
  border-top: none;
  border-bottom: none;
  max-width: calc(100vw - var(--explorerWidth) - var(--candidWidth));
`,te=c.c.div`
  height: calc(var(--editorHeight) - var(--consoleHeight) - 2.4rem);

  .margin {
    background-color: var(--grey200) !important;
    width: 5.5ch !important;
  }
  ${e=>e.isHidden?"display: none;":""}
`,ne=Object(c.c)(te)`
  overflow: auto;
  padding: 2rem;
`;function ae({state:e,logger:t,setConsoleHeight:n,deploySetter:i,isDeploying:r}){const o=Object(a.useContext)(K),c=Object(a.useContext)(H),s=e.selectedFile,l=s?e.files[s]:"",p=s.endsWith(".mo")?s:e.files["Main.mo"]?"Main.mo":"",m=Object(O.b)(),b=async()=>{if(!s||!s.endsWith("mo"))return;!function(e,t,n,a){const i=[];e.forEach((e=>{if(e.source!==a)return;const t=1===e.severity?n.MarkerSeverity.Error:n.MarkerSeverity.Warning,r={startLineNumber:e.range.start.line+1,startColumn:e.range.start.character+1,endLineNumber:e.range.end.line+1,endColumn:e.range.end.character+1,message:e.message,severity:t};i.push(r)})),n.editor.setModelMarkers(t,"moc",i)}((await o.Moc({type:"check",file:s})).diagnostics,null===m||void 0===m?void 0:m.editor.getModel(`file:///${s}`),m,s)},g=C()((async e=>{c({type:"saveFile",payload:{path:s,contents:e}}),s.endsWith("mo")&&(await o.Moc({type:"save",file:s,content:e}),await b())}),1e3,{leading:!1}),j=async()=>{const n=z(e.canisters);await o.saveWorkplaceToMotoko(e.files),await o.Moc({type:"setActorAliases",list:n}),p||t.log("Select a main entry file to deploy");const a=await async function(e,t,n){const a=await e.Moc({type:"candid",file:t});a.diagnostics&&V(a.diagnostics,n);const i=a.code;if(i){if(""!==i.trim())return i;n.log(`cannot deploy: ${t} has no actor`)}else n.log("cannot deploy: syntax error")}(o,p,t);if(a){const e=(await Object(u.b)(a)).init({IDL:E.a});await i.setInitTypes(e),await i.setCandidCode(a),await i.setWasm(void 0),await i.setMainFile(p),await i.setShowDeployModal(!0)}};return Y.deploy=j,Object(a.useEffect)((()=>{m&&b()}),[m,e]),Object(h.jsxs)(ee,{children:[Object(h.jsxs)(d,{children:["Editor",Object(h.jsx)(M,{children:Object(h.jsxs)(A,{onClick:j,disabled:r,variant:"primary",small:!0,children:[Object(h.jsx)("img",{src:r?N:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAhCAYAAABN2CLhAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANYSURBVHgBzVjRcdswDIXu+l93gioT1J2gygTxBsoGcSawN4g3sDNBugGzgTNB6S4QuwsYJY5QDUGgTNlOk3eHkw2C4CMIQqQKeGMgYhUe34J8YdVLkOeiKHbw0RDI3gXZYhrLICV8FAQyM8yDDzKGgSjgwuDoeaGiNHiEmBbUdhNEE70O6fIM7wWKnIrm2LC55Sg32L5rqoTBR9jO5bVFiHSK+Dp3jEHpQYTCYwJxmb+y+jeoisDRdUFGbLMJMg/tj8of+VkLu0WwuYdLgKPi8DiWGEucFcmmvVS+K2VTwbnA46XLgmvIhedctfkgtRpjqtpHcCrQLl0uyALjZrplUs7mHiOL9kotUUQd25Nz/H8yhC85mRhkqx77ErtVoYnclG10u5c+w+8VdkE2M8iBcr6CAeAoWeRrnpwm94Cx6pDQKj4Z/R32pQ1H5N9gcAIS5AhUAmkVZ0p/k+DhJXHSF4kBiWjJf69CGdqodippJJ+D/IFY0l6sQxDbPgl/Fjah71WCSwmxfDb977UBzX6rZ6ZsJpjGEhNvNrTzHXm8sWFbi/+VtJeGD2gsozF4hf0gElNIgPtTGZ3zc9Tj/0boXaOUxhIV9AAPZYxkzJFxykcNJwDjZvSoziMoarkkIXFSccd2re0s+0DiegUmLdKslLnsmcDgQRVxBxeCTBupnGIXHk84MqpUqRI2FM07tqVxZn1joSifusHKTXI4KD+xvZmsCtR3nnG8Ws0x4U5xeoWeKHiD/BJjbhGpZiOOEj7kQCPW0aZdGySfMA97mkhftKyjpQWyKY9Em8ppjd19Uwl7mtBCTGov5Bf7yNtjaJ8jcolvM/otMX2zSa5kLvkKD4cZxyJJWW+2OeaB+mbvm6zrFsZlJKFZ07mErlh0zqA3lnz7kY5u1i/cj+znEK9jGxZCyVKz3waXuZVj/jeMZMSP+F+IvufXdey+KT1283TLA3ulqzL8F0G+S/+QgU9H2kvxm27b13JC4bETN/AVxJs1gdLCBd2z+N9sqB3LBuKx9ocYYwvnAtsfXswPKnh4s3k8D1TaTjpkWcSdcr7GQ/XwxuCkXxl6mjTV21ds1+A966ZwKeCwl0xt9DVrLcZVpDL6dh8gMb4+K4hflko45CWVv5//8wPiXyySzE5+FvwCAAAAAElFTkSuQmCC",alt:"Rabbit icon"}),Object(h.jsx)("p",{children:r?"Deploying...":"Deploy"})]})})]}),Object(h.jsx)(ne,{isHidden:"README"!==s,children:Object(h.jsx)(v.a,{linkTarget:"_blank",children:"README"===s?l:""})}),Object(h.jsx)(te,{isHidden:"README"===s,children:Object(h.jsx)(O.a,{defaultLanguage:"motoko",value:"README"===s?"":l,path:s,onChange:e=>{g(e)},beforeMount:S,options:{minimap:{enabled:!1},wordWrap:"on",wrappingIndent:"indent",scrollBeyondLastLine:!1,fontSize:16}})}),Object(h.jsx)(L,{setConsoleHeight:n})]})}var ie=n.p+"static/media/icon-package.4a46f29d.svg",re=n.p+"static/media/icon-canister.3af6b7f4.svg",oe=n.p+"static/media/icon-close.2119c336.svg",ce=n.p+"static/media/icon-plus.63458dc8.svg";const se=Object(c.c)("button")`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 1.6rem;
  font-family: "CircularXX", sans-serif;
  font-size: 1.4rem;
  color: ${e=>e.isActive?"var(--colorPrimaryDark)":"var(--grey600)"};
  border: none;
  background-color: ${e=>e.isActive?"var(--colorPrimaryLight)":"var(--grey100)"};
  border-bottom: 1px solid var(--grey300);

  > p {
    margin: 0;
  }

  > *:not(:last-child) {
    margin-right: 0.8rem;
  }

  &:hover {
    color: var(--colorPrimary);
  }

  &[disabled] {
    cursor: default;

    &:hover {
      color: var(--grey600);
    }
  }
`,le=Object(c.c)("div")`
  height: ${({dimensions:e})=>e.height};
  width: ${({dimensions:e})=>e.width};
  border: 1px solid var(--grey300);
  border-radius: 0.8rem;
  overflow: hidden;
`,de=Object(c.c)("div")`
  height: ${({dimensions:e})=>e.height};
  width: ${({dimensions:e})=>e.width};
  overflow-y: auto;
  border-radius: 0.8rem;

  > ${se} {
    background-color: white;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: var(--grey100);
    }
  }
`;function pe({height:e="auto",width:t="100%",children:n}){return Object(h.jsx)(le,{dimensions:{height:e,width:t},children:Object(h.jsx)(de,{dimensions:{height:e,width:t},children:n})})}var me=n(23),ue=n.n(me);const he=750,be=c.a`
  .ReactModal__Content {
    opacity: 0;
    transform: translateY(-10rem);
    transition: transform ${he}ms ease, opacity ${625}ms;
  }
  .ReactModal__Content--after-open {
    opacity: 1;
    transform: translateY(0px);
  }
  .ReactModal__Content--before-close {
    opacity: 0;
    transform: translateY(-10rem);
  }
  
  .ReactModal__Overlay {
    opacity: 0;
    transition: all ${625}ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`;ue.a.setAppElement("#root"),ue.a.defaultStyles={...ue.a.defaultStyles,overlay:{...ue.a.defaultStyles.overlay,backgroundColor:"#000c"},content:{...ue.a.defaultStyles.content,display:"flex",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",inset:"initial",background:"transparent",padding:"0",border:"none"}};const ge=c.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background-color: white;
  border-radius: 2.4rem;
`;function je({isOpen:e=!1,label:t="Dialog",close:n,children:a,...i}){return Object(h.jsxs)(ue.a,{isOpen:e,contentLabel:t,onRequestClose:n,closeTimeoutMS:he,...i,children:[Object(h.jsx)(be,{}),Object(h.jsx)(ge,{children:a})]})}var fe=n.p+"static/media/icon-caret-right.114e324c.svg";const ye=c.c.label`
  display: flex;
  flex-direction: ${({type:e})=>"checkbox"===e?"row-reverse":"column"};
  width: 100%;
  margin: 0 0 2rem;
  align-items: flex-start;
  justify-content: flex-end;
  ${({type:e})=>"checkbox"===e&&"line-height: 1;"}

  &:last-child,
  &:only-child {
    margin-bottom: 3rem;
  }
`,xe=c.c.p`
  margin: ${({type:e})=>"checkbox"===e?"0 0 0 1.5rem":"0"};
  padding: 0;
  font-size: 1.3rem;
  font-weight: 500;
`,_e=c.c.span`
  &::after {
    content: "*";
    color: var(--colorError);
  }
`,Oe=c.b`
  width: 100%;
  color: var(--grey700);
  border: 1px solid var(--grey500);
`,we=c.c.input`
  ${Oe};
  padding: 0.3rem 1rem;

  &[type="checkbox"] {
    width: unset;
  }
`,ve=c.c.input`
  {StyledInput}
  border: unset;
`,ke=c.c.select`
  ${Oe};
  padding: 0.5rem 0.6rem;
`;function Ce({type:e,...t}){return"select"===e?Object(h.jsx)(ke,{...t}):"file"===e?Object(h.jsx)(ve,{type:e,...t}):Object(h.jsx)(we,{type:e,...t})}function Ee({labelText:e,type:t="text",required:n=!1,...a}){var i;return Object(h.jsxs)(ye,{"aria-label":null!==(i=a["aria-label"])&&void 0!==i?i:e,type:t,children:[Object(h.jsxs)(xe,{type:t,children:[e,n&&Object(h.jsx)(_e,{title:"Required"})]}),Object(h.jsx)(Ce,{type:t,name:e,"aria-required":n,...a})]})}const Ae=c.c.div`
  width: 100%;
  margin-top: 1rem;
  font-size: 1.6rem;
  font-weight: 500;
`,Me=c.c.div`
  margin: 1rem 0;
  font-size: 1.4rem;
  color: var(--colorError);
`,Se=c.c.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  width: 100%;
`,Ie=Object(c.c)(A)`
  width: 12rem;
`;function Te({importCode:e,close:t,isPackageModal:n=!1}){const[i,r]=Object(a.useState)("dfinity/examples"),[o,c]=Object(a.useState)("master"),[s,l]=Object(a.useState)("motoko/counter/src"),[d,p]=Object(a.useState)(""),[m,u]=Object(a.useState)(""),b=Object(a.useContext)(K);return Object(h.jsxs)(Ae,{children:[n&&Object(h.jsx)(Ee,{type:"text",labelText:"Package name",value:m,onChange:e=>u(e.target.value)}),Object(h.jsx)(Ee,{type:"text",labelText:"Github repo",value:i,onChange:e=>r(e.target.value)}),Object(h.jsx)(Ee,{type:"text",labelText:"Branch",value:o,onChange:e=>c(e.target.value)}),Object(h.jsx)(Ee,{type:"text",labelText:"Directory",value:s,onChange:e=>l(e.target.value)}),Object(h.jsx)(Me,{children:d}),Object(h.jsx)(Se,{children:Object(h.jsx)(Ie,{onClick:n?async function(){if(!m)return void p("Package name cannot be empty");const n={repo:`https://github.com/${i}.git`,version:o,name:m,dir:s};await b.fetchPackage(n)?(p(""),e(n),t()):p('Cannot find repo or the directory contains no ".mo" files.')}:async function(){const n=await b.fetchGithub({repo:i,branch:o,dir:s});n?(p(""),e(n),t()):p('Cannot find repo or the directory contains no ".mo" files.')},variant:"primary",children:"Import"})})]})}var De=n(113);const Pe=c.c.div`
  ${({dimensions:e})=>{var t,n;return e?`\n        width: ${null!==(t=null===e||void 0===e?void 0:e.width)&&void 0!==t?t:"auto"};\n        height: ${null!==(n=null===e||void 0===e?void 0:e.height)&&void 0!==n?n:"auto"};\n      `:""}}
  display: flex;
  flex-direction: column;
`,Fe=c.c.div`
  padding: 1.5rem;
  flex: 1;
  border: 1px solid var(--grey400);
  border-top: none;
  border-radius: 0 0 1.5rem 1.5rem;
`,$e=c.c.div`
  display: flex;
  justify-content: space-evenly;
`,Re=c.c.button`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  border: 1px solid var(--grey400);
  border-radius: 0.8rem 0.8rem 0 0;

  &:not(:last-child) {
    margin-right: -1px;
  }

  ${({isActive:e})=>e?"\n        background-color: white;\n        color: var(--grey700);\n        border-bottom-color: transparent;":"\n        background-color: var(--grey100);\n        color: var(--grey600);"}
`,We=c.c.div`
  flex-grow: 1;
`;function qe(e){var t;const{children:n,onTabSelect:i=(()=>{}),activeTab:r=0,height:o,width:c}=e,[s,l]=Object(a.useState)(r);Object(a.useEffect)((()=>{l(r)}),[r]);const d=[],p=[];return a.Children.forEach(n,((e,t)=>{const{children:n,label:a,isActive:r=s===t}=e.props;d.push(Object(h.jsx)(Re,{isActive:r,onClick:()=>{return i(e=t),void l(e);var e},children:a},t)),p.push(Object(h.jsx)(Fe,{children:n},t))})),Object(h.jsxs)(Pe,{dimensions:{height:o,width:c},children:[Object(h.jsx)($e,{children:d}),Object(h.jsx)(We,{children:null!==(t=p[s])&&void 0!==t?t:null})]})}function Le(e){return null}const Ne=c.c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 46rem;
  font-size: 1.4rem;
`,ze=c.c.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;function Be({onClick:e,children:t}){return Object(h.jsx)(se,{onClick:e,children:Object(h.jsxs)(ze,{children:[Object(h.jsx)("span",{style:{whiteSpace:"nowrap",overflowX:"hidden"},children:t}),Object(h.jsx)("img",{src:fe,alt:"Continue"})]})})}const Ue=c.c.span`
  margin: 1rem 0 2rem;
  font-size: 1.6rem;
  font-weight: 500;
`,He=Object(c.c)(A)`
  width: 24rem;
  margin-top: 3rem;
`;function Ke({isOpen:e,close:t,loadPackage:n}){const i=Object(a.useContext)(K);return Object(h.jsx)(je,{isOpen:e,close:t,label:"Load package",shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,children:Object(h.jsxs)(Ne,{children:[Object(h.jsx)(Ue,{children:"Select a Motoko package"}),Object(h.jsxs)(qe,{width:"44rem",children:[Object(h.jsx)(Le,{label:"Vessel packages",children:Object(h.jsx)(pe,{height:"36.1rem",children:De.map((e=>Object(h.jsxs)(Be,{onClick:()=>async function(e){if(!await i.fetchPackage(e))throw new Error(`Fail to load package ${e.name}`);await n(e),await t()}(e),children:[e.name," ",e.description?`-- ${e.description}`:""]},e.name)))})}),Object(h.jsx)(Le,{label:"Import from Github",children:Object(h.jsx)(Te,{isPackageModal:!0,importCode:n,close:t})})]}),Object(h.jsx)(He,{onClick:t,children:"Cancel"})]})})}const Ve=c.c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 34rem;
  font-size: 1.6rem;
  font-weight: 500;
`,Ge=c.c.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
`;function Je({isOpen:e,close:t}){const[n,i]=Object(a.useState)(""),r=Object(a.useContext)(K),o=Object(a.useContext)(H);return Object(h.jsx)(je,{isOpen:e,close:t,label:"Add file",shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,children:Object(h.jsxs)(Ve,{children:[Object(h.jsx)("p",{style:{marginBottom:"2rem"},children:"Add a new file"}),Object(h.jsx)(Ee,{type:"text",labelText:"Filename",value:n,onChange:e=>i(e.target.value),autoFocus:!0}),Object(h.jsxs)(Ge,{children:[Object(h.jsx)(A,{variant:"primary",onClick:async function(){const e=n.endsWith(".mo")?n:`${n}.mo`;await r.Moc({type:"save",file:e,content:""}),await o({type:"saveFile",payload:{path:e,contents:""}}),await o({type:"selectFile",payload:{path:e}}),await t()},children:"Add"}),Object(h.jsx)(A,{onClick:t,children:"Cancel"})]})]})})}var Xe=n(4);const Ye={"aaaaa-aa":{name:"ic",candid:"// from spec 0.18.0\ntype canister_id = principal;\ntype user_id = principal;\ntype wasm_module = blob;\n\ntype canister_settings = record {\n  controllers : opt vec principal;\n  compute_allocation : opt nat;\n  memory_allocation : opt nat;\n  freezing_threshold : opt nat;\n};\n\ntype definite_canister_settings = record {\n  controllers : vec principal;\n  compute_allocation : nat;\n  memory_allocation : nat;\n  freezing_threshold : nat;\n};\n\nservice ic : {\n  create_canister : (record {\n    settings : opt canister_settings\n  }) -> (record {canister_id : canister_id});\n  update_settings : (record {\n    canister_id : principal;\n    settings : canister_settings\n  }) -> ();\n  install_code : (record {\n    mode : variant {install; reinstall; upgrade};\n    canister_id : canister_id;\n    wasm_module : wasm_module;\n    arg : blob;\n  }) -> ();\n  uninstall_code : (record {canister_id : canister_id}) -> ();\n  start_canister : (record {canister_id : canister_id}) -> ();\n  stop_canister : (record {canister_id : canister_id}) -> ();\n  canister_status : (record {canister_id : canister_id}) -> (record {\n      status : variant { running; stopping; stopped };\n      settings: definite_canister_settings;\n      module_hash: opt blob;\n      memory_size: nat;\n      cycles: nat;\n  });\n  delete_canister : (record {canister_id : canister_id}) -> ();\n  deposit_cycles : (record {canister_id : canister_id}) -> ();\n  raw_rand : () -> (blob);\n\n  // provisional interfaces for the pre-ledger world\n  provisional_create_canister_with_cycles : (record {\n    amount: opt nat;\n    settings : opt canister_settings\n  }) -> (record {canister_id : canister_id});\n  provisional_top_up_canister :\n    (record { canister_id: canister_id; amount: nat }) -> ();\n}"},"rrkah-fqaaa-aaaaa-aaaaq-cai":{name:"governance"},"ryjl3-tyaaa-aaaaa-aaaba-cai":{name:"ledger",candid:"type AccountBalanceArgs = record {\n  account: AccountIdentifier;\n};\ntype AccountIdentifier = text;\ntype ArchiveOptions = record {\n  node_max_memory_size_bytes: opt nat32;\n  max_message_size_bytes: opt nat32;\n  controller_id: principal;\n};\ntype CanisterId = principal;\ntype BlockHeight = nat64;\ntype Duration = record {\n  secs: nat64;\n  nanos: nat32;\n};\ntype ICPTs = record {\n  e8s : nat64;\n};\ntype LedgerCanisterInitPayload = record {\n  minting_account: AccountIdentifier;\n  initial_values: vec record {AccountIdentifier; ICPTs};\n  max_message_size_bytes: opt nat32;\n  transaction_window: opt Duration;\n  archive_options: opt ArchiveOptions;\n  send_whitelist: vec record {principal};\n};\ntype Memo = nat64;\ntype NotifyCanisterArgs = record {\n  block_height: BlockHeight;\n  max_fee: ICPTs;\n  from_subaccount: opt SubAccount;\n  to_canister: principal;\n  to_subaccount: opt SubAccount;\n};\ntype SendArgs = record {\n  memo: Memo;\n  amount: ICPTs;\n  fee: ICPTs;\n  from_subaccount: opt SubAccount;\n  to: AccountIdentifier;\n  created_at_time: opt TimeStamp;\n};\ntype SubAccount = vec nat8;\ntype TimeStamp = record {\n  timestamp_nanos: nat64;\n};\ntype Transaction = record {\n  transfer: Transfer;\n  memo: Memo;\n  created_at: BlockHeight;\n};\ntype Transfer = variant {\n  Burn: record {\n    from: AccountIdentifier;\n    amount: ICPTs;\n  };\n  Mint: record {\n    to: AccountIdentifier;\n    amount: ICPTs;\n  };\n  Send: record {\n    from: AccountIdentifier;\n    to: AccountIdentifier;\n    amount: ICPTs;\n  };\n};\ntype HeaderField = record {text; text};\ntype HttpRequest = record {\n  url: text;\n  method: text;\n  body: vec nat8;\n  headers: vec HeaderField;\n};\ntype HttpResponse = record {\n  body: vec nat8;\n  headers: vec HeaderField;\n  status_code: nat16;\n};\nservice: (LedgerCanisterInitPayload) -> {\n  send_dfx : (SendArgs) -> (BlockHeight);\n  notify_dfx: (NotifyCanisterArgs) -> ();\n  account_balance_dfx : (AccountBalanceArgs) -> (ICPTs) query;\n  get_nodes : () -> (vec CanisterId) query;\n  http_request: (HttpRequest) -> (HttpResponse) query;\n}"}},Ze=c.c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 36rem;
  font-size: 1.6rem;
  font-weight: 500;
`,Qe=c.c.div`
  margin: 2rem 0;
`,et=c.c.div`
  width: 100%;
  background-color: var(--colorWarning);
  border-radius: 1.5rem;
  margin-top: 1rem;
  padding: 1rem 2rem;
  font-size: 1.4rem;
`,tt=c.c.div`
  padding: 0 2rem;
  width: 100%;
  height: 30rem;
  position: relative;
`,nt=c.c.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
`,at=Object(c.c)(A)`
  width: 10rem;
`;function it({isOpen:e,close:t,deploySetter:n}){const[i,r]=Object(a.useState)(""),[o,c]=Object(a.useState)(""),[s,l]=Object(a.useState)(""),[d,p]=Object(a.useState)(void 0),[m,b]=Object(a.useState)(!1),[g,j]=Object(a.useState)(""),[f,y]=Object(a.useState)(!1),x=Object(a.useContext)(K),_=Object(a.useContext)(H);function O(e){const t=new FileReader;t.addEventListener("load",(()=>{"string"===typeof t.result&&l(t.result)})),t.readAsText(e.target.files[0])}return Object(a.useEffect)((()=>{b(!1)}),[o]),Object(h.jsx)(je,{isOpen:e,close:t,label:"Import canister",shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,children:Object(h.jsxs)(Ze,{children:[Object(h.jsx)(Qe,{children:"Add a canister"}),Object(h.jsxs)(qe,{width:"34rem",children:[Object(h.jsx)(Le,{label:"Import canister",children:Object(h.jsxs)(tt,{children:[Object(h.jsx)(Ee,{type:"text",labelText:"Canister ID",list:"canisters",value:o,onChange:async function(e){const t=e.target.value;let n;await c(t);try{const e=Xe.a.fromText(t);if(Ye.hasOwnProperty(t)){const e=Ye[t];r(e.name),n=e.candid}n||(n=await Object(u.d)(e)),l(n),j("")}catch(a){/no query method/.test(a)?(l(""),b(!0),j("")):/not found/.test(a)?j("Canister id not found"):/valid checksum/.test(a)?j("Not a valid principal"):j(a.message)}}}),Object(h.jsx)("datalist",{id:"canisters",children:Object.entries(Ye).map((([e,t])=>Object(h.jsx)("option",{value:e,children:t.name})))}),Object(h.jsx)(Ee,{type:"text",labelText:"Canister name",value:i,onChange:e=>r(e.target.value)}),Object(h.jsx)(Ee,{type:"checkbox",labelText:"Generate Motoko binding",checked:f,onChange:e=>y(e.target.checked)}),g&&Object(h.jsx)(et,{children:g}),m&&Object(h.jsx)(Ee,{type:"file",labelText:"Upload did file",accept:".did",onChange:O}),Object(h.jsxs)(nt,{children:[Object(h.jsx)(at,{variant:"primary",onClick:async function(){if(g||!i||!o||!s)return;const e={id:Xe.a.fromText(o),isExternal:!0,name:i,candid:s};if(await x.Moc({type:"save",file:`idl/${o}.did`,content:s}),await _({type:"deployWorkplace",payload:{canister:e}}),f){const e=i+".mo",t=(await u.c.binding(s,"mo"))[0];await x.Moc({type:"save",file:e,content:t}),await _({type:"saveFile",payload:{path:e,contents:t}})}await t()},children:"Import"}),Object(h.jsx)(at,{onClick:t,children:"Cancel"})]})]})}),Object(h.jsx)(Le,{label:"Deploy Wasm",children:Object(h.jsxs)(tt,{children:[Object(h.jsx)(Ee,{type:"file",labelText:"Upload Wasm module",accept:".wasm",onChange:function(e){const t=new FileReader;t.addEventListener("load",(()=>{p(new Uint8Array(t.result))}));const a=e.target.files[0];a.size>2097152?j("Wasm size should be less than 2MB"):(j(""),n.setMainFile(a.name),t.readAsArrayBuffer(a))}}),Object(h.jsx)(Ee,{type:"file",labelText:"Upload did file",accept:".did",onChange:O}),g&&Object(h.jsx)(et,{children:g}),Object(h.jsxs)(nt,{children:[Object(h.jsx)(at,{variant:"primary",onClick:async function(){if(!s||!d)return;const e=(await Object(u.b)(s)).init({IDL:E.a});await t(),await n.setWasm(d),await n.setInitTypes(e),await n.setCandidCode(s),await n.setShowDeployModal(!0)},children:"Deploy"}),Object(h.jsx)(at,{onClick:t,children:"Cancel"})]})]})})]})]})})}var rt=n.p+"static/media/icon-folder.7e7e3fee.svg",ot=n.p+"static/media/icon-file.01dbeccc.svg";const ct=c.c.details`
  width: 100%;
  font-size: 1.4rem;
  background-color: var(--grey100);
`,st=c.c.summary`
  display: flex;
  align-items: center;
  height: 3rem;
  padding-left: calc(${({nestDepth:e})=>e+1} * 1.6rem);
  cursor: pointer;
  user-select: none;

  &:hover {
    color: var(--colorPrimary);
  }
`,lt=Object(c.c)(se)`
  padding-left: calc(${({nestDepth:e})=>e+1} * 1.6rem);
  border-bottom: none;
  height: 3rem;
  user-select: none;
`,dt=c.c.img`
  width: 1.6rem;
  margin-right: 0.8rem;
`;function pt(e){const{folderStructure:t,onSelectFile:n,activeFile:a,nestDepth:i=0}=e,r=Object.entries(t.folders).map((([e,t])=>Object(h.jsxs)(ct,{open:!0,children:[Object(h.jsxs)(st,{nestDepth:i,children:[Object(h.jsx)(dt,{src:rt,alt:""}),e]}),pt({folderStructure:t,onSelectFile:n,activeFile:a,nestDepth:i+1})]},e)));return t.files.forEach((e=>{const t=e.split("/").pop(),o=a===e;r.push(Object(h.jsxs)(lt,{nestDepth:i,onClick:()=>n(e),isActive:o,disabled:o,"aria-label":"File",children:[Object(h.jsx)(dt,{src:ot,alt:""}),t]},t))})),Object(h.jsx)(h.Fragment,{children:r})}function mt({filePaths:e,onSelectFile:t,activeFile:n}){const a=function(e){return e.reduce(((e,t)=>{const n=t.split("/").slice(0,-1);let a=e;for(const i of n)i in a.folders||(a.folders[i]={files:[],folders:{}}),a=a.folders[i];return a.files.push(t),e}),{files:[],folders:{}})}(e);return Object(h.jsx)(h.Fragment,{children:pt({folderStructure:a,onSelectFile:t,activeFile:n})})}const ut=c.c.div`
  width: var(--explorerWidth);
  overflow-y: auto;
  overflow-wrap: anywhere;
`,ht=c.c.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  height: 2.4rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 1px solid var(--grey300);
  text-transform: uppercase;
`,bt=c.c.button`
  background: none;
  border: none;
  box-shadow: none;
  margin-left: auto;
`,gt=Object(c.c)(bt)`
  padding: 0;
  margin-right: -1.1rem;
  margin-left: -0.3rem;
`;function jt({state:e,ttl:t,logger:n,deploySetter:i}){const[r,o]=Object(a.useState)([]),[c,s]=Object(a.useState)([]),[l,d]=Object(a.useState)(!1),[p,m]=Object(a.useState)(!1),[b,g]=Object(a.useState)(!1),j=Object(a.useContext)(H),f=async(t,a)=>{switch(a){case"select":return j({type:"selectCanister",payload:{name:t}});case"delete":case"expired":if(e.canisters[t].timestamp)if("delete"===a){const a=e.canisters[t];n.log(`Deleting canister ${t} with id ${a.id.toText()}...`),await async function(e){await u.a.removeCode(e)}(a),n.log("Canister deleted")}else n.log(`Canister ${t} expired`);return j({type:"deleteCanister",payload:{name:t}});default:throw new Error(`unknown action ${a}`)}},y=e=>{if(e){const n=BigInt(Date.now())*BigInt(1e6);return Number((t-(n-e))/BigInt(1e9))}};return Object(a.useEffect)((()=>{if(0===Object.keys(e.canisters).length)return;const t=setTimeout((()=>{const t=Object.values(e.canisters).map((e=>[e.name,y(e.timestamp)])),n=t.filter((([e,t])=>t&&t<=0)).map((([e,t])=>e));n.length>0&&JSON.stringify(c)!==JSON.stringify(n)&&s(n),o(t.map((([e,t])=>{if(!t)return{};if(t>0){const e=t%60;return{status:"Active",minutes:Math.floor(t/60).toString(),seconds:e.toString().padStart(2,"0")}}return{status:"Expired"}})))}),1e3);return()=>clearTimeout(t)}),[e.canisters,r]),Object(a.useEffect)((()=>{c.forEach((e=>{f(e,"expired")}))}),[c]),Object(h.jsxs)(ut,{children:[Object(h.jsx)(Je,{isOpen:p,close:()=>m(!1)}),Object(h.jsx)(Ke,{isOpen:l,close:()=>d(!1),loadPackage:e=>{j({type:"loadPackage",payload:{name:e.name,package:e}})}}),Object(h.jsx)(it,{isOpen:b,close:()=>g(!1),deploySetter:i}),Object(h.jsxs)(ht,{children:["Files",Object(h.jsx)(bt,{onClick:()=>m(!0),"aria-label":"Add file",children:Object(h.jsx)("img",{style:{width:"1.6rem"},src:ce,alt:""})})]}),Object(h.jsx)(mt,{filePaths:Object.keys(e.files).sort(),onSelectFile:e=>{j({type:"selectFile",payload:{path:e}})},activeFile:e.selectedFile}),Object(h.jsxs)(ht,{children:["Packages",Object(h.jsx)(bt,{onClick:()=>d(!0),"aria-label":"Add package",children:Object(h.jsx)("img",{style:{width:"1.6rem"},src:ce,alt:""})})]}),Object.values(e.packages).map((e=>Object(h.jsxs)(se,{onClick:()=>{window.open(e.homepage,"_blank")},disabled:!!e.homepage,"aria-label":"Select motoko package",children:[Object(h.jsx)("img",{src:ie,alt:""}),Object(h.jsxs)("p",{children:["mo:",e.name]})]}))),Object(h.jsxs)(ht,{children:["Canisters",Object(h.jsx)(bt,{onClick:()=>g(!0),"aria-label":"Add canister",children:Object(h.jsx)("img",{style:{width:"1.6rem"},src:ce,alt:""})})]}),Object.keys(e.canisters).map(((t,n)=>{var a,i,o;return Object(h.jsxs)(se,{isActive:e.selectedCanister===t,disabled:e.selectedCanister===t,onClick:()=>f(t,"select"),"aria-label":"Select canister",children:[Object(h.jsx)("img",{src:re,alt:""}),"canister:",t,"Active"===(null===(a=r[n])||void 0===a?void 0:a.status)&&Object(h.jsxs)("div",{style:{marginLeft:"auto"},children:[Object(h.jsx)("span",{style:{fontVariantNumeric:"tabular-nums"},children:null===(i=r[n])||void 0===i?void 0:i.minutes}),":",Object(h.jsx)("span",{style:{fontVariantNumeric:"tabular-nums"},children:null===(o=r[n])||void 0===o?void 0:o.seconds})]}),Object(h.jsx)(gt,{onClick:()=>f(t,"delete"),"aria-label":`Delete canister ${t}`,children:Object(h.jsx)("img",{src:oe,alt:""})})]},t)}))]})}var ft=n.p+"static/media/icon-save.dec6f98c.svg",yt=n.p+"static/media/motoko-lab-logo.5b9112fe.png",xt=n.p+"static/media/motoko-lab-wordmark.be846cc3.svg";const _t=Object(c.c)("img")`
  ${e=>e.horizontal?"\n  width: 10.9rem;\n  margin: -1.6rem;\n  margin-left: -1.2rem;\n":"\n  width: 16.5rem;\n  margin: -1.8rem 0 0.5rem;\n"}
`,Ot=Object(c.c)("img")`
  ${e=>e.horizontal?"\n  margin-left: 2.4rem;\n  height: 34px;\n":"\n  width: 350px;\n  margin-bottom: 4rem;\n"}
`;function wt({horizontal:e=!1}){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_t,{src:yt,horizontal:e,alt:"Motoko Ghost Logo in wireframe"}),Object(h.jsx)(Ot,{src:xt,horizontal:e,alt:"Motoko Playground"})]})}const vt=Object(c.c)("header")`
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--headerHeight);
  padding: 0 1.6rem;
  background-color: ${e=>e.darkMode?"black":"white"};
`,kt=c.c.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 6.4rem;
`,Ct=Object(c.c)(M)`
  > *:not(:last-child) {
    margin-right: 1.8rem;
  }
`,Et=c.c.a`
  letter-spacing: 0.04rem;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 1rem 1.6rem;
  color: var(--grey600);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;function At({shareProject:e,openTutorial:t,darkMode:n=!1}){return Object(h.jsxs)(vt,{darkMode:n,children:[Object(h.jsx)(kt,{children:Object(h.jsx)(wt,{horizontal:!0})}),Object(h.jsxs)(Ct,{children:[Object(h.jsx)(Et,{href:"https://sdk.dfinity.org/docs/language-guide/motoko.html",target:"_blank",rel:"noopener noreferrer",children:"Motoko Docs"}),Object(h.jsx)(Et,{href:"https://sdk.dfinity.org/docs/quickstart/quickstart-intro.html",target:"_blank",rel:"noopener noreferrer",children:"Internet Computer SDK"}),Object(h.jsxs)(A,{width:"15.6rem",onClick:e,children:[Object(h.jsx)("img",{src:ft,alt:"Save icon"}),Object(h.jsx)("p",{children:"Save & Share"})]}),Object(h.jsxs)(A,{width:"16.4rem",onClick:t,children:[Object(h.jsx)("img",{src:ce,alt:"Plus icon"}),Object(h.jsx)("p",{children:"Open Tutorial"})]})]})]})}const Mt={repo:"dfinity/examples",branch:"master"},St="https://raw.githubusercontent.com/dfinity/examples/master/motoko",It={"Hello, world":{repo:{dir:"motoko/echo/src",...Mt},readme:`${St}/echo/README.md`},Counter:{repo:{dir:"motoko/counter/src",...Mt},readme:`${St}/counter/README.md`},Calculator:{repo:{dir:"motoko/calc/src",...Mt},readme:`${St}/calc/README.md`},"Who am I?":{repo:{dir:"motoko/whoami/src",...Mt},readme:`${St}/whoami/README.md`},"Phone Book":{repo:{dir:"motoko/phone-book/src/phone-book",...Mt},readme:`${St}/phone-book/README.md`},"Super Heroes":{repo:{dir:"motoko/superheroes/src/superheroes",...Mt},readme:`${St}/superheroes/README.md`},"Random Maze":{repo:{dir:"motoko/random_maze/src/random_maze",...Mt},readme:`${St}/random_maze/README.md`},"Game of Life":{repo:{dir:"motoko/life",...Mt},readme:`${St}/life/README.md`},"Publisher and Subscriber":{repo:{dir:"motoko/pub-sub/src",...Mt},readme:`${St}/pub-sub/README.md`}};const Tt=c.c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  font-size: 1.4rem;
`,Dt=c.c.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;function Pt({onClick:e,children:t}){return Object(h.jsx)(se,{onClick:e,children:Object(h.jsxs)(Dt,{children:[Object(h.jsx)("span",{children:t}),Object(h.jsx)("img",{src:fe,alt:"Continue"})]})})}const Ft=c.c.span`
  margin: 1rem 0 2rem;
  font-size: 1.6rem;
  font-weight: 500;
`,$t=Object(c.c)(A)`
  width: 24rem;
  margin-top: 3rem;
`;function Rt({isOpen:e,close:t,importCode:n,isFirstOpen:i}){const r=Object(a.useContext)(K);async function o(e){const a=await async function(e,t){let n=await e.fetchGithub(t.repo);n&&t.readme&&(n={README:await(await fetch(t.readme)).text(),...n});return n}(r,e);a&&(await n(a),t())}const c=Object(h.jsxs)("p",{children:["Welcome to the Motoko Playground! Explore Motoko, the native language of the Internet Computer, right in the browser without having to download the SDK. See our open source repository to"," ",Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/dfinity/motoko-playground",children:"learn more"}),"."]}),s=Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Warning:"})," Any edits you've made will be lost when switching to a new project."]}),Object(h.jsxs)("p",{children:["Press ",Object(h.jsx)("kbd",{children:"Esc"}),' or the "Cancel" button below to go back.']})]}),l=i?"Select a project to get started":"Select a project to continue";return Object(h.jsx)(je,{isOpen:e,close:t,label:"Welcome to Motoko Lab",shouldCloseOnEsc:!i,shouldCloseOnOverlayClick:!i,children:Object(h.jsxs)(Tt,{children:[Object(h.jsx)(wt,{}),i?c:s,Object(h.jsx)(Ft,{children:l}),Object(h.jsxs)(qe,{width:"39rem",children:[Object(h.jsx)(Le,{label:"Example Projects",children:Object(h.jsxs)(pe,{height:"28.95rem",children:[Object(h.jsx)(Pt,{onClick:async function(){await n({"Main.mo":""}),t()},children:"New Motoko project"}),Object.entries(It).map((([e,t])=>Object(h.jsx)(Pt,{onClick:()=>o(t),children:e},e)))]})}),Object(h.jsx)(Le,{label:"Import from Github",children:Object(h.jsx)(Te,{importCode:n,close:t})})]}),!i&&Object(h.jsx)($t,{onClick:t,children:"Cancel"})]})})}const Wt=c.c.div`
  width: 40rem;
`,qt=c.c.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,Lt=Object(c.c)(A)`
  margin-top: 2rem;
  width: 14rem;
`;function Nt({isOpen:e,close:t,onConfirm:n,onCancel:a=(()=>{}),children:i}){return Object(h.jsx)(je,{isOpen:e,close:t,label:"Confirm",children:Object(h.jsxs)(Wt,{children:[i,Object(h.jsxs)(qt,{children:[Object(h.jsx)(Lt,{variant:"primary",onClick:function(){n(),t()},children:"Continue"}),Object(h.jsx)(Lt,{onClick:function(){a(),t()},children:"Cancel"})]})]})})}n(245);const zt=c.c.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 46rem;
`,Bt=c.c.div`
  width: 100%;
  margin-top: 2rem;
`,Ut=c.c.div`
  border: 1px solid var(--grey400);
  border-radius: 1.5rem;
  padding: 1rem calc(2rem - 1px);
  margin: 1rem 0 2rem;

  input {
    width: 100%;
    color: var(--grey700);
    border: 1px solid var(--grey500);
    padding: 0.3rem 1rem;
    border-radius: 0;

    + span {
      font-size: 1.4rem;
      margin: -0.5rem 0 0.5rem;
    }
  }
`,Ht=c.c.div`
  width: 100%;
  background-color: var(--colorWarning);
  border-radius: 1.5rem;
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.4rem;

  ul {
    padding-left: 1.4rem;
  }
`,Kt=c.c.pre`
  white-space: pre-wrap;
  overflow-wrap: break-word;
`,Vt=c.c.strong`
  display: block;
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 1rem;
`,Gt=c.c.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
`,Jt=Object(c.c)(A)`
  width: 12rem;
`;function Xt({isOpen:e,close:t,onDeploy:n,isDeploy:i,canisters:r,ttl:o,fileName:c,wasm:s,candid:l,initTypes:d,logger:p}){const[m,b]=Object(a.useState)(""),[g,j]=Object(a.useState)([]),[f,y]=Object(a.useState)(!1),[x,_]=Object(a.useState)(""),[O,w]=Object(a.useState)(""),[v,k]=Object(a.useState)(!1),[C,A]=Object(a.useState)(!1),[M,S]=Object(a.useState)("copying"),[I,T]=Object(a.useState)({wasm:void 0}),[D,P]=Object(a.useState)(""),[F,$]=Object(a.useState)(!1),R=Object(a.useContext)(K),W=Object.keys(r).length>=3,q=!s;Object(a.useEffect)((()=>{W||b(function(e){const t=e.split("/"),n=t.pop().toLowerCase();if("main.mo"===n&&t.length)return t.pop().toLowerCase();{const e=n.lastIndexOf(".");return-1===e?n:n.slice(0,e)}}(c))}),[c]),Object(a.useEffect)((()=>{if(D&&I.wasm){if("upgrade"===D&&!F)return void async function(){let e=!1;if(r[m].stableSig&&I.stable){await R.Moc({type:"save",file:"pre.most",content:r[m].stableSig}),await R.Moc({type:"save",file:"post.most",content:I.stable});const t=await R.Moc({type:"stableCheck",pre:"pre.most",post:"post.most"});if(t.diagnostics){const n=t.diagnostics.map((e=>e.message)).join("\n");await w(n),n&&(e=!0)}else await w("")}if(r[m].candid&&I.candid){const t=r[m].candid,n=await u.c.subtype(I.candid,t);if(n.hasOwnProperty("Err")){const t=n.Err.replaceAll("expected type","pre-upgrade interface");await _(t),t&&(e=!0)}else await _("")}e?y(!0):$(!0)}();F&&async function(e){const t=N();try{await i(!0);const a=await G(R,m,r[m],t,e,I.wasm,v,p);await i(!1),a&&(a.candid=I.candid,a.stableSig=I.stable,await R.Moc({type:"save",file:`idl/${a.id}.did`,content:I.candid}),n(a)),T({wasm:void 0})}catch(a){throw i(!1),a}}(D)}}),[I,F,D]),Object(a.useEffect)((()=>{const e=d.map((e=>Object(E.c)(e)));j(e)}),[d]);const L=Object(a.useCallback)((e=>{e&&g.forEach((t=>t.render(e)))}),[g]),N=()=>{if(!d.length)return E.a.encode(d,[]);const e=g.map((e=>e.parse()));return g.some((e=>e.isRejected()))?void 0:E.a.encode(d,e)};const z=async e=>{if(void 0!==N()){await t();try{if($(!1),P(e),s)await T({wasm:s,candid:l});else{C?await R.Moc({type:"gcFlags",option:"force"}):await R.Moc({type:"gcFlags",option:"scheduling"}),await R.Moc({type:"gcFlags",option:M});const e=await async function(e,t,n){n.log("Compiling code...");const a=await e.Moc({type:"compile",file:t});if(a.diagnostics&&V(a.diagnostics,n),null!==a.code)if(""!==a.code.candid.trim()){if(null!==a.code.stable)return n.log(`Compiled Wasm size: ${Math.floor(a.code.wasm.length/1024)}KB`),a.code;n.log(`cannot deploy: ${t} cannot generate stable signature`)}else n.log(`cannot deploy: ${t} has no actor`);else n.log("syntax error")}(R,c,p);if(!e)throw new Error("syntax error");await T(e)}"upgrade"!==e&&$(!0)}catch(n){throw i(!1),n}}},B=Object(h.jsx)("p",{children:"Deploy your canister to the IC"}),U=Object(h.jsxs)(Ht,{children:[Object(h.jsx)(Vt,{children:"Note:"}),Object(h.jsxs)("ul",{children:[W&&Object(h.jsxs)("li",{children:["You can deploy at most ",3," canisters at the same time."]}),Object(h.jsx)("li",{children:"Cycle transfer instructions are silently ignored by the system."}),Object(h.jsx)("li",{children:"Canister can use at most 1GB of stable memory."}),Object(h.jsxs)("li",{children:["Deployed canister expires after"," ",(o/BigInt(6e10)).toString()," minutes."]})]})]}),H="Select a canister name",J=Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Ee,{type:"text",labelText:H,list:"canisters",value:m,onChange:e=>b(e.target.value)}),Object(h.jsx)("datalist",{id:"canisters",children:Object.keys(r).map((e=>Object(h.jsx)("option",{children:e})))})]}),X=Object(h.jsx)(Ee,{required:!0,type:"select",labelText:H,value:m,onChange:e=>b(e.target.value),children:Object.keys(r).map((e=>Object(h.jsx)("option",{value:e,children:e})))});return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(je,{isOpen:e,close:t,label:"Deploy Canister",shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,children:Object(h.jsxs)(zt,{children:[B,Object(h.jsxs)(Bt,{children:[W?X:J,d.length>0&&Object(h.jsxs)(Ut,{children:[Object(h.jsx)("p",{children:"This service requires the following installation arguments:"}),Object(h.jsxs)("p",{children:["(",d.map((e=>e.name)).join(", "),")"]}),Object(h.jsx)("div",{className:"InitArgs",ref:L})]}),Object(h.jsx)(Ee,{type:"checkbox",labelText:"Enable profiling (experimental)",checked:v,onChange:e=>k(e.target.checked)}),q?Object(h.jsxs)(Ut,{children:[Object(h.jsxs)(Ee,{type:"select",labelText:"GC strategy",value:M,onChange:e=>S(e.target.value),children:[Object(h.jsx)("option",{value:"copying",children:"Copying GC (default)"}),Object(h.jsx)("option",{value:"marking",children:"Marking GC"})]}),Object(h.jsx)(Ee,{type:"checkbox",labelText:"Force garbage collection (only if you want to test GC)",checked:C,onChange:e=>A(e.target.checked)})]}):null]}),U,Object(h.jsxs)(Gt,{children:[r.hasOwnProperty(m)?Object(h.jsxs)(h.Fragment,{children:[v?null:Object(h.jsx)(Jt,{variant:"primary",onClick:()=>z("upgrade"),children:"Upgrade"}),Object(h.jsx)(Jt,{onClick:()=>z("reinstall"),children:"Reinstall"})]}):Object(h.jsx)(Jt,{variant:"primary",onClick:()=>z("install"),children:"Install"}),Object(h.jsx)(Jt,{onClick:t,children:"Cancel"})]})]})}),Object(h.jsxs)(Nt,{isOpen:f,close:()=>y(!1),onConfirm:()=>$(!0),children:[Object(h.jsx)("h3",{style:{width:"100%",textAlign:"center"},children:"Warning"}),O?Object(h.jsxs)(Ht,{children:[Object(h.jsx)("strong",{children:"Incompatible stable signature will cause data loss:"}),Object(h.jsx)(Kt,{children:O})]}):null,x?Object(h.jsxs)(Ht,{children:[Object(h.jsx)("strong",{children:"Upgrade is not backward compatible:"})," ",Object(h.jsx)(Kt,{children:x})]}):null,Object(h.jsx)("p",{style:{fontSize:"1.4rem",marginTop:"2rem"},children:'Press "Continue" to upgrade canister anyway.'})]})]})}const Yt=c.a`
  :root {
    font-family: "CircularXX", sans-serif;
    font-size: 10px;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    color: var(--grey700);
  }

  button {
    cursor: pointer;

    &:active {
      filter: brightness(0.85);
    }
  }
`,Zt=c.c.div`
  display: flex;
  height: var(--appHeight);
  overflow: hidden;

  width: 100vw;
  border-top: 1px solid var(--grey400);
  --candidWidth: ${e=>{var t;return null!==(t=e.candidWidth)&&void 0!==t?t:0}};
  --consoleHeight: ${e=>{var t;return null!==(t=e.consoleHeight)&&void 0!==t?t:0}};
`,Qt=new l.a,en=new URLSearchParams(window.location.search),tn=!!(en.get("git")||en.get("tag")||en.get("post"));function nn(){var e,t;const[n,i]=Object(a.useReducer)(U.reduce,{},U.init),[r,o]=Object(a.useState)(!tn),[c,s]=Object(a.useState)(!tn),[l,d]=Object(a.useState)(!1),[p,m]=Object(a.useState)("0"),[b,g]=Object(a.useState)("3rem"),[j,f]=Object(a.useState)(BigInt(0)),[y,x]=Object(a.useReducer)((e=>(e+1)%10),0),[O,w]=Object(a.useState)(!1),[v,k]=Object(a.useState)(!1),[C,E]=Object(a.useState)(""),[A,M]=Object(a.useState)([]),[S,I]=Object(a.useState)(""),[T,D]=Object(a.useState)(void 0),F={setMainFile:I,setInitTypes:M,setCandidCode:E,setShowDeployModal:w,setWasm:D},$=P();const R=Object(a.useCallback)((e=>{i({type:"loadProject",payload:{files:e}})}),[i]);return Object(a.useEffect)((()=>{const e={name:"base",repo:"https://github.com/dfinity/motoko-base.git",dir:"src",version:"dfx-0.8.5-beta.0",homepage:"https://sdk.dfinity.org/docs/base-libraries/stdlib-intro.html"};(async()=>{if(await Qt.fetchPackage(e),await i({type:"loadPackage",payload:{name:"base",package:e}}),$.log("moc version 0.6.21"),$.log(`base library version ${e.version}`),tn){const e=await async function(e){const t=en.get("git"),n=en.get("tag"),a=en.get("post");if(a)return Q(a,e,Qt);if(t){const e={repo:t,branch:en.get("branch")||"main",dir:en.get("dir")||""};return await Qt.fetchGithub(e)}if(n){const t=await u.e.getProject(BigInt(n));if(1===t.length){const n=t[0].project,a=Object.fromEntries(n.files.map((e=>(Qt.Moc({type:"save",file:e.name,content:e.content}),[e.name,e.content]))));if(n.packages.length)for(const t of n.packages[0]){const n={name:t.name,repo:t.repo,version:t.version,dir:t.dir.length?t.dir[0]:void 0,homepage:t.homepage.length?t.homepage[0]:void 0};await Qt.fetchPackage(n)&&await e({type:"loadPackage",payload:{name:n.name,package:n}})}if(n.canisters.length)for(const t of n.canisters[0]){const n={id:t.id,isExternal:!0,name:t.name,candid:t.candid};await Qt.Moc({type:"save",file:`idl/${n.id}.did`,content:n.candid}),await e({type:"deployWorkplace",payload:{canister:n}})}return a}}}(i);e?R(e):$.log(`Failed to fetch files from "${window.location.search}"`)}})()}),[]),Object(a.useEffect)((()=>{(async()=>{f((await u.a.getInitParams()).canister_time_to_live)})()}),[]),Object(a.useEffect)((()=>{Qt.Moc({type:"setActorAliases",list:z(n.canisters)})}),[n.canisters]),Object(a.useEffect)((()=>{const e=n.selectedCanister&&n.canisters[n.selectedCanister];d(e),m(e?"30vw":"0")}),[n.canisters,n.selectedCanister]),Object(h.jsxs)("main",{children:[Object(h.jsx)(Yt,{}),Object(h.jsx)(At,{shareProject:async function(){$.log("Sharing project code...");const e=(t=n,{files:Object.entries(t.files).filter((([e,t])=>e.endsWith(".mo"))).map((([e,t])=>({name:e,content:t}))),packages:[Object.entries(t.packages).filter((([e,t])=>"base"!==e)).map((([e,t])=>({name:t.name,repo:t.repo,version:t.version,dir:t.dir?[t.dir]:[],homepage:t.homepage?[t.homepage]:[]})))],canisters:[Object.values(t.canisters).filter((e=>e.isExternal&&e.name&&e.candid)).map((e=>({id:e.id,name:e.name,candid:e.candid})))]});var t;const a=await u.e.putProject(e);$.log(`Use this link to access the code:\n${window.location.origin}/?tag=${a.toString()}`)},openTutorial:()=>o(!0)}),Object(h.jsx)(H.Provider,{value:i,children:Object(h.jsxs)(K.Provider,{value:Qt,children:[Object(h.jsx)(Rt,{isOpen:r,importCode:R,close:function(){o(!1),c&&setTimeout((()=>s(!1)),750)},isFirstOpen:c}),Object(h.jsx)(Xt,{isOpen:O,close:()=>w(!1),onDeploy:e=>{x(),i({type:"deployWorkplace",payload:{canister:e}})},isDeploy:k,canisters:(W=n.canisters,Object.fromEntries(Object.entries(W).filter((([e,t])=>!t.isExternal)))),ttl:j,fileName:S,wasm:T,candid:C,initTypes:A,logger:$}),Object(h.jsxs)(Zt,{candidWidth:p,consoleHeight:b,children:[Object(h.jsx)(jt,{state:n,ttl:j,logger:$,deploySetter:F}),Object(h.jsx)(ae,{state:n,logger:$,deploySetter:F,isDeploying:v,setConsoleHeight:g}),l?Object(h.jsx)(_,{setCandidWidth:m,canisterId:null===(e=n.canisters[n.selectedCanister])||void 0===e?void 0:e.id.toString(),candid:null===(t=n.canisters[n.selectedCanister])||void 0===t?void 0:t.candid,forceUpdate:y}):null]})]})})]});var W}var an=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,250)).then((({getCLS:t,getFID:n,getFCP:a,getLCP:i,getTTFB:r})=>{t(e),n(e),a(e),i(e),r(e)}))};n(246),n(247),n(248);o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(D,{children:Object(h.jsx)(nn,{})})}),document.getElementById("root")),an()},55:function(e){e.exports=JSON.parse('{"canisters":{"wasm-utils":{"type":"custom","candid":"service/wasm-utils/wasm-utils.did","wasm":"service/wasm-utils/target/wasm32-unknown-unknown/release/wasm_opt.wasm","build":["sh -c \'cd service/wasm-utils && ./build.sh\'"]},"backend":{"dependencies":["wasm-utils"],"main":"service/pool/Main.mo","type":"motoko"},"saved":{"main":"service/saved/Saved.mo","type":"motoko"},"react_app":{"dependencies":["backend","saved"],"frontend":{"entrypoint":"public/index.html"},"source":["build"],"type":"assets"}},"defaults":{"build":{"output":"build","packtool":"vessel sources"}},"networks":{"local":{"bind":"localhost:8000","type":"ephemeral"}}}')},58:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n(13);const i=({IDL:e})=>{const t=e.Record({max_num_canisters:e.Nat,canister_time_to_live:e.Nat,cycles_per_canister:e.Nat,nonce_time_to_live:e.Nat}),n=e.Record({id:e.Principal,timestamp:e.Int}),a=e.Record({nonce:e.Nat,timestamp:e.Int}),i=e.Record({num_of_installs:e.Nat,num_of_canisters:e.Nat,error_mismatch:e.Nat,error_out_of_capacity:e.Nat,cycles_used:e.Nat,error_total_wait_time:e.Nat}),r=e.Record({url:e.Text,method:e.Text,body:e.Vec(e.Nat8),headers:e.Vec(e.Tuple(e.Text,e.Text))}),o=e.Record({body:e.Vec(e.Nat8),headers:e.Vec(e.Tuple(e.Text,e.Text)),status_code:e.Nat16}),c=e.Record({arg:e.Vec(e.Nat8),wasm_module:e.Vec(e.Nat8),mode:e.Variant({reinstall:e.Null,upgrade:e.Null,install:e.Null}),canister_id:e.Principal}),s=e.Nat,l=e.Variant({FailedExecution:e.Null,InvalidId:e.Null,AttributePaused:e.Null,FailedGettingValue:e.Null,Unauthorized:e.Null}),d=e.Variant({ok:s,err:l});return e.Service({GCCanisters:e.Func([],[],["oneway"]),balance:e.Func([],[e.Nat],["query"]),dump:e.Func([],[e.Vec(n)],["query"]),getCanisterId:e.Func([a],[n],[]),getDeployCanisters:e.Func([],[e.Nat],["query"]),getInitParams:e.Func([],[t],["query"]),getStats:e.Func([],[i],["query"]),http_request:e.Func([r],[o],["query"]),installCode:e.Func([n,c,e.Bool],[n],[]),removeCode:e.Func([n],[],[]),resetStats:e.Func([],[],[]),track:e.Func([],[d],[]),wallet_receive:e.Func([],[],[])})},r="mwrha-maaaa-aaaab-qabqq-cai";((e,t)=>{const n=new a.b({...null===t||void 0===t?void 0:t.agentOptions});a.a.createActor(i,{agent:n,canisterId:e,...null===t||void 0===t?void 0:t.actorOptions})})(r)},59:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n(13);const i=({IDL:e})=>{const t=e.Nat,n=e.Int,a=e.Record({content:e.Text,name:e.Text}),i=e.Record({dir:e.Opt(e.Text),name:e.Text,homepage:e.Opt(e.Text),repo:e.Text,version:e.Text}),r=e.Record({id:e.Principal,name:e.Text,candid:e.Text}),o=e.Record({files:e.Vec(a),packages:e.Opt(e.Vec(i)),canisters:e.Opt(e.Vec(r))}),c=e.Record({timestamp:n,project:o}),s=e.Record({byte_size:e.Nat,num_projects:e.Nat});return e.Service({getProject:e.Func([t],[e.Opt(c)],["query"]),getStats:e.Func([],[s],["query"]),putProject:e.Func([o],[t],[])})},r="vhtho-raaaa-aaaab-qadoq-cai";((e,t)=>{const n=new a.b({...null===t||void 0===t?void 0:t.agentOptions});a.a.createActor(i,{agent:n,canisterId:e,...null===t||void 0===t?void 0:t.actorOptions})})(r)},8:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return backend})),__webpack_require__.d(__webpack_exports__,"e",(function(){return saved})),__webpack_require__.d(__webpack_exports__,"f",(function(){return uiCanisterUrl})),__webpack_require__.d(__webpack_exports__,"c",(function(){return didjs})),__webpack_require__.d(__webpack_exports__,"d",(function(){return fetchCandidInterface})),__webpack_require__.d(__webpack_exports__,"b",(function(){return didToJs}));var _dfinity_agent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(13),_dfinity_principal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_dfinity_candid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),dfx_generated_backend__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(58),dfx_generated_saved__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(59),_didjs_did__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(110),_dfx_json__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(55),_dfx_json__WEBPACK_IMPORTED_MODULE_6___namespace=__webpack_require__.t(55,1);function is_local(e){const t=e._host.hostname;return"127.0.0.1"===t||t.endsWith("localhost")}const agent=new _dfinity_agent__WEBPACK_IMPORTED_MODULE_0__.b({});is_local(agent)&&agent.fetchRootKey();const backend=_dfinity_agent__WEBPACK_IMPORTED_MODULE_0__.a.createActor(dfx_generated_backend__WEBPACK_IMPORTED_MODULE_3__.b,{agent:agent,canisterId:dfx_generated_backend__WEBPACK_IMPORTED_MODULE_3__.a}),saved=_dfinity_agent__WEBPACK_IMPORTED_MODULE_0__.a.createActor(dfx_generated_saved__WEBPACK_IMPORTED_MODULE_4__.b,{agent:agent,canisterId:dfx_generated_saved__WEBPACK_IMPORTED_MODULE_4__.a}),uiCanisterId=is_local(agent)?"rdmx6-jaaaa-aaaaa-aaadq-cai":"a4gq6-oaaaa-aaaab-qaa4q-cai",uiCanisterUrl=is_local(agent)?`http://${uiCanisterId}.${_dfx_json__WEBPACK_IMPORTED_MODULE_6__.networks.local.bind}`:`https://${uiCanisterId}.raw.ic0.app`,didjs=_dfinity_agent__WEBPACK_IMPORTED_MODULE_0__.a.createActor(_didjs_did__WEBPACK_IMPORTED_MODULE_5__.a,{agent:agent,canisterId:_dfinity_principal__WEBPACK_IMPORTED_MODULE_1__.a.fromText(uiCanisterId)});function getUiCanisterUrl(e){return is_local(agent)?`http://${e}.${_dfx_json__WEBPACK_IMPORTED_MODULE_6__.networks.local.bind}`:`https://${e}.raw.ic0.app/?`}async function fetchCandidInterface(e){const t=_dfinity_agent__WEBPACK_IMPORTED_MODULE_0__.a.createActor((({IDL:e})=>e.Service({__get_candid_interface_tmp_hack:e.Func([],[e.Text],["query"])})),{agent:agent,canisterId:e});return await t.__get_candid_interface_tmp_hack()}async function didToJs(source){const js=await didjs.did_to_js(source);if(js===[])return;const dataUri="data:text/javascript;charset=utf-8,"+encodeURIComponent(js[0]),candid=await eval('import("'+dataUri+'")');return candid}}},[[249,1,2]]]);
//# sourceMappingURL=main.1fec32cb.chunk.js.map