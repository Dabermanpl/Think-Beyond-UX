(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,34708,(e,t,r)=>{"use strict";t.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||0x1fffffffffffff,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},82048,(e,t,r)=>{"use strict";var o=e.i(47167);t.exports="object"==typeof o.default&&o.default.env&&o.default.env.NODE_DEBUG&&/\bsemver\b/i.test(o.default.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{}},79731,(e,t,r)=>{"use strict";let{MAX_SAFE_COMPONENT_LENGTH:o,MAX_SAFE_BUILD_LENGTH:n,MAX_LENGTH:i}=e.r(34708),l=e.r(82048),a=(r=t.exports={}).re=[],s=r.safeRe=[],c=r.src=[],d=r.safeSrc=[],u=r.t={},p=0,f="[a-zA-Z0-9-]",h=[["\\s",1],["\\d",i],[f,n]],g=(e,t,r)=>{let o=(e=>{for(let[t,r]of h)e=e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);return e})(t),n=p++;l(e,n,t),u[e]=n,c[n]=t,d[n]=o,a[n]=new RegExp(t,r?"g":void 0),s[n]=new RegExp(o,r?"g":void 0)};g("NUMERICIDENTIFIER","0|[1-9]\\d*"),g("NUMERICIDENTIFIERLOOSE","\\d+"),g("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${f}*`),g("MAINVERSION",`(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})`),g("MAINVERSIONLOOSE",`(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})`),g("PRERELEASEIDENTIFIER",`(?:${c[u.NONNUMERICIDENTIFIER]}|${c[u.NUMERICIDENTIFIER]})`),g("PRERELEASEIDENTIFIERLOOSE",`(?:${c[u.NONNUMERICIDENTIFIER]}|${c[u.NUMERICIDENTIFIERLOOSE]})`),g("PRERELEASE",`(?:-(${c[u.PRERELEASEIDENTIFIER]}(?:\\.${c[u.PRERELEASEIDENTIFIER]})*))`),g("PRERELEASELOOSE",`(?:-?(${c[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[u.PRERELEASEIDENTIFIERLOOSE]})*))`),g("BUILDIDENTIFIER",`${f}+`),g("BUILD",`(?:\\+(${c[u.BUILDIDENTIFIER]}(?:\\.${c[u.BUILDIDENTIFIER]})*))`),g("FULLPLAIN",`v?${c[u.MAINVERSION]}${c[u.PRERELEASE]}?${c[u.BUILD]}?`),g("FULL",`^${c[u.FULLPLAIN]}$`),g("LOOSEPLAIN",`[v=\\s]*${c[u.MAINVERSIONLOOSE]}${c[u.PRERELEASELOOSE]}?${c[u.BUILD]}?`),g("LOOSE",`^${c[u.LOOSEPLAIN]}$`),g("GTLT","((?:<|>)?=?)"),g("XRANGEIDENTIFIERLOOSE",`${c[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),g("XRANGEIDENTIFIER",`${c[u.NUMERICIDENTIFIER]}|x|X|\\*`),g("XRANGEPLAIN",`[v=\\s]*(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:${c[u.PRERELEASE]})?${c[u.BUILD]}?)?)?`),g("XRANGEPLAINLOOSE",`[v=\\s]*(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:${c[u.PRERELEASELOOSE]})?${c[u.BUILD]}?)?)?`),g("XRANGE",`^${c[u.GTLT]}\\s*${c[u.XRANGEPLAIN]}$`),g("XRANGELOOSE",`^${c[u.GTLT]}\\s*${c[u.XRANGEPLAINLOOSE]}$`),g("COERCEPLAIN",`(^|[^\\d])(\\d{1,${o}})(?:\\.(\\d{1,${o}}))?(?:\\.(\\d{1,${o}}))?`),g("COERCE",`${c[u.COERCEPLAIN]}(?:$|[^\\d])`),g("COERCEFULL",c[u.COERCEPLAIN]+`(?:${c[u.PRERELEASE]})?`+`(?:${c[u.BUILD]})?`+"(?:$|[^\\d])"),g("COERCERTL",c[u.COERCE],!0),g("COERCERTLFULL",c[u.COERCEFULL],!0),g("LONETILDE","(?:~>?)"),g("TILDETRIM",`(\\s*)${c[u.LONETILDE]}\\s+`,!0),r.tildeTrimReplace="$1~",g("TILDE",`^${c[u.LONETILDE]}${c[u.XRANGEPLAIN]}$`),g("TILDELOOSE",`^${c[u.LONETILDE]}${c[u.XRANGEPLAINLOOSE]}$`),g("LONECARET","(?:\\^)"),g("CARETTRIM",`(\\s*)${c[u.LONECARET]}\\s+`,!0),r.caretTrimReplace="$1^",g("CARET",`^${c[u.LONECARET]}${c[u.XRANGEPLAIN]}$`),g("CARETLOOSE",`^${c[u.LONECARET]}${c[u.XRANGEPLAINLOOSE]}$`),g("COMPARATORLOOSE",`^${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]})$|^$`),g("COMPARATOR",`^${c[u.GTLT]}\\s*(${c[u.FULLPLAIN]})$|^$`),g("COMPARATORTRIM",`(\\s*)${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]}|${c[u.XRANGEPLAIN]})`,!0),r.comparatorTrimReplace="$1$2$3",g("HYPHENRANGE",`^\\s*(${c[u.XRANGEPLAIN]})\\s+-\\s+(${c[u.XRANGEPLAIN]})\\s*$`),g("HYPHENRANGELOOSE",`^\\s*(${c[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[u.XRANGEPLAINLOOSE]})\\s*$`),g("STAR","(<|>)?=?\\s*\\*"),g("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),g("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},17787,(e,t,r)=>{"use strict";let o=Object.freeze({loose:!0}),n=Object.freeze({});t.exports=e=>e?"object"!=typeof e?o:e:n},77766,(e,t,r)=>{"use strict";let o=/^[0-9]+$/,n=(e,t)=>{if("number"==typeof e&&"number"==typeof t)return e===t?0:e<t?-1:1;let r=o.test(e),n=o.test(t);return r&&n&&(e*=1,t*=1),e===t?0:r&&!n?-1:n&&!r?1:e<t?-1:1};t.exports={compareIdentifiers:n,rcompareIdentifiers:(e,t)=>n(t,e)}},96369,(e,t,r)=>{"use strict";let o=e.r(82048),{MAX_LENGTH:n,MAX_SAFE_INTEGER:i}=e.r(34708),{safeRe:l,t:a}=e.r(79731),s=e.r(17787),{compareIdentifiers:c}=e.r(77766);class d{constructor(e,t){if(t=s(t),e instanceof d)if(!!t.loose===e.loose&&!!t.includePrerelease===e.includePrerelease)return e;else e=e.version;else if("string"!=typeof e)throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>n)throw TypeError(`version is longer than ${n} characters`);o("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?l[a.LOOSE]:l[a.FULL]);if(!r)throw TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>i||this.major<0)throw TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(e=>{if(/^[0-9]+$/.test(e)){let t=+e;if(t>=0&&t<i)return t}return e}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(o("SemVer.compare",this.version,this.options,e),!(e instanceof d)){if("string"==typeof e&&e===this.version)return 0;e=new d(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return(e instanceof d||(e=new d(e,this.options)),this.major<e.major)?-1:this.major>e.major?1:this.minor<e.minor?-1:this.minor>e.minor?1:this.patch<e.patch?-1:+(this.patch>e.patch)}comparePre(e){if(e instanceof d||(e=new d(e,this.options)),this.prerelease.length&&!e.prerelease.length)return -1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{let r=this.prerelease[t],n=e.prerelease[t];if(o("prerelease compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return -1;else if(r===n)continue;else return c(r,n)}while(++t)}compareBuild(e){e instanceof d||(e=new d(e,this.options));let t=0;do{let r=this.build[t],n=e.build[t];if(o("build compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return -1;else if(r===n)continue;else return c(r,n)}while(++t)}inc(e,t,r){if(e.startsWith("pre")){if(!t&&!1===r)throw Error("invalid increment argument: identifier is empty");if(t){let e=`-${t}`.match(this.options.loose?l[a.PRERELEASELOOSE]:l[a.PRERELEASE]);if(!e||e[1]!==t)throw Error(`invalid identifier: ${t}`)}}switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t,r),this.inc("pre",t,r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t,r),this.inc("pre",t,r);break;case"release":if(0===this.prerelease.length)throw Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(0!==this.minor||0!==this.patch||0===this.prerelease.length)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(0!==this.patch||0===this.prerelease.length)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":{let e=+!!Number(r);if(0===this.prerelease.length)this.prerelease=[e];else{let o=this.prerelease.length;for(;--o>=0;)"number"==typeof this.prerelease[o]&&(this.prerelease[o]++,o=-2);if(-1===o){if(t===this.prerelease.join(".")&&!1===r)throw Error("invalid increment argument: identifier already exists");this.prerelease.push(e)}}if(t){let o=[t,e];!1===r&&(o=[t]),0===c(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=o):this.prerelease=o}break}default:throw Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}t.exports=d},78551,(e,t,r)=>{"use strict";let o=e.r(96369);t.exports=(e,t,r=!1)=>{if(e instanceof o)return e;try{return new o(e,t)}catch(e){if(!r)return null;throw e}}},27812,(e,t,r)=>{"use strict";let o=e.r(78551);t.exports=(e,t)=>{let r=o(e,t);return r?r.version:null}},27240,(e,t,r)=>{"use strict";let o=e.r(78551);t.exports=(e,t)=>{let r=o(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}},64666,(e,t,r)=>{"use strict";let o=e.r(96369);t.exports=(e,t,r,n,i)=>{"string"==typeof r&&(i=n,n=r,r=void 0);try{return new o(e instanceof o?e.version:e,r).inc(t,n,i).version}catch(e){return null}}},58058,(e,t,r)=>{"use strict";let o=e.r(78551);t.exports=(e,t)=>{let r=o(e,null,!0),n=o(t,null,!0),i=r.compare(n);if(0===i)return null;let l=i>0,a=l?r:n,s=l?n:r,c=!!a.prerelease.length;if(s.prerelease.length&&!c){if(!s.patch&&!s.minor)return"major";if(0===s.compareMain(a))return s.minor&&!s.patch?"minor":"patch"}let d=c?"pre":"";return r.major!==n.major?d+"major":r.minor!==n.minor?d+"minor":r.patch!==n.patch?d+"patch":"prerelease"}},95641,(e,t,r)=>{"use strict";let o=e.r(96369);t.exports=(e,t)=>new o(e,t).major},17840,(e,t,r)=>{"use strict";let o=e.r(96369);t.exports=(e,t)=>new o(e,t).minor},36041,(e,t,r)=>{"use strict";let o=e.r(96369);t.exports=(e,t)=>new o(e,t).patch},1506,(e,t,r)=>{"use strict";let o=e.r(78551);t.exports=(e,t)=>{let r=o(e,t);return r&&r.prerelease.length?r.prerelease:null}},4197,(e,t,r)=>{"use strict";let o=e.r(96369);t.exports=(e,t,r)=>new o(e,r).compare(new o(t,r))},46759,(e,t,r)=>{"use strict";let o=e.r(4197);t.exports=(e,t,r)=>o(t,e,r)},67882,(e,t,r)=>{"use strict";let o=e.r(4197);t.exports=(e,t)=>o(e,t,!0)},39994,(e,t,r)=>{"use strict";let o=e.r(96369);t.exports=(e,t,r)=>{let n=new o(e,r),i=new o(t,r);return n.compare(i)||n.compareBuild(i)}},75139,(e,t,r)=>{"use strict";let o=e.r(39994);t.exports=(e,t)=>e.sort((e,r)=>o(e,r,t))},90189,(e,t,r)=>{"use strict";let o=e.r(39994);t.exports=(e,t)=>e.sort((e,r)=>o(r,e,t))},26646,(e,t,r)=>{"use strict";let o=e.r(4197);t.exports=(e,t,r)=>o(e,t,r)>0},46961,(e,t,r)=>{"use strict";let o=e.r(4197);t.exports=(e,t,r)=>0>o(e,t,r)},41447,(e,t,r)=>{"use strict";let o=e.r(4197);t.exports=(e,t,r)=>0===o(e,t,r)},79651,(e,t,r)=>{"use strict";let o=e.r(4197);t.exports=(e,t,r)=>0!==o(e,t,r)},35433,(e,t,r)=>{"use strict";let o=e.r(4197);t.exports=(e,t,r)=>o(e,t,r)>=0},74754,(e,t,r)=>{"use strict";let o=e.r(4197);t.exports=(e,t,r)=>0>=o(e,t,r)},54661,(e,t,r)=>{"use strict";let o=e.r(41447),n=e.r(79651),i=e.r(26646),l=e.r(35433),a=e.r(46961),s=e.r(74754);t.exports=(e,t,r,c)=>{switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return o(e,r,c);case"!=":return n(e,r,c);case">":return i(e,r,c);case">=":return l(e,r,c);case"<":return a(e,r,c);case"<=":return s(e,r,c);default:throw TypeError(`Invalid operator: ${t}`)}}},70530,(e,t,r)=>{"use strict";let o=e.r(96369),n=e.r(78551),{safeRe:i,t:l}=e.r(79731);t.exports=(e,t)=>{if(e instanceof o)return e;if("number"==typeof e&&(e=String(e)),"string"!=typeof e)return null;let r=null;if((t=t||{}).rtl){let o,n=t.includePrerelease?i[l.COERCERTLFULL]:i[l.COERCERTL];for(;(o=n.exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&o.index+o[0].length===r.index+r[0].length||(r=o),n.lastIndex=o.index+o[1].length+o[2].length;n.lastIndex=-1}else r=e.match(t.includePrerelease?i[l.COERCEFULL]:i[l.COERCE]);if(null===r)return null;let a=r[2],s=r[3]||"0",c=r[4]||"0",d=t.includePrerelease&&r[5]?`-${r[5]}`:"",u=t.includePrerelease&&r[6]?`+${r[6]}`:"";return n(`${a}.${s}.${c}${d}${u}`,t)}},58286,(e,t,r)=>{"use strict";t.exports=class{constructor(){this.max=1e3,this.map=new Map}get(e){let t=this.map.get(e);if(void 0!==t)return this.map.delete(e),this.map.set(e,t),t}delete(e){return this.map.delete(e)}set(e,t){if(!this.delete(e)&&void 0!==t){if(this.map.size>=this.max){let e=this.map.keys().next().value;this.delete(e)}this.map.set(e,t)}return this}}},17530,(e,t,r)=>{"use strict";let o=/\s+/g;class n{constructor(e,t){if(t=l(t),e instanceof n)if(!!t.loose===e.loose&&!!t.includePrerelease===e.includePrerelease)return e;else return new n(e.raw,t);if(e instanceof a)return this.raw=e.value,this.set=[[e]],this.formatted=void 0,this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e.trim().replace(o," "),this.set=this.raw.split("||").map(e=>this.parseRange(e.trim())).filter(e=>e.length),!this.set.length)throw TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const e=this.set[0];if(this.set=this.set.filter(e=>!b(e[0])),0===this.set.length)this.set=[e];else if(this.set.length>1){for(const e of this.set)if(1===e.length&&w(e[0])){this.set=[e];break}}}this.formatted=void 0}get range(){if(void 0===this.formatted){this.formatted="";for(let e=0;e<this.set.length;e++){e>0&&(this.formatted+="||");let t=this.set[e];for(let e=0;e<t.length;e++)e>0&&(this.formatted+=" "),this.formatted+=t[e].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(e){let t=((this.options.includePrerelease&&g)|(this.options.loose&&m))+":"+e,r=i.get(t);if(r)return r;let o=this.options.loose,n=o?d[u.HYPHENRANGELOOSE]:d[u.HYPHENRANGE];s("hyphen replace",e=e.replace(n,R(this.options.includePrerelease))),s("comparator trim",e=e.replace(d[u.COMPARATORTRIM],p)),s("tilde trim",e=e.replace(d[u.TILDETRIM],f)),s("caret trim",e=e.replace(d[u.CARETTRIM],h));let l=e.split(" ").map(e=>x(e,this.options)).join(" ").split(/\s+/).map(e=>I(e,this.options));o&&(l=l.filter(e=>(s("loose invalid filter",e,this.options),!!e.match(d[u.COMPARATORLOOSE])))),s("range list",l);let c=new Map;for(let e of l.map(e=>new a(e,this.options))){if(b(e))return[e];c.set(e.value,e)}c.size>1&&c.has("")&&c.delete("");let w=[...c.values()];return i.set(t,w),w}intersects(e,t){if(!(e instanceof n))throw TypeError("a Range is required");return this.set.some(r=>v(r,t)&&e.set.some(e=>v(e,t)&&r.every(r=>e.every(e=>r.intersects(e,t)))))}test(e){if(!e)return!1;if("string"==typeof e)try{e=new c(e,this.options)}catch(e){return!1}for(let t=0;t<this.set.length;t++)if(T(this.set[t],e,this.options))return!0;return!1}}t.exports=n;let i=new(e.r(58286)),l=e.r(17787),a=e.r(61644),s=e.r(82048),c=e.r(96369),{safeRe:d,t:u,comparatorTrimReplace:p,tildeTrimReplace:f,caretTrimReplace:h}=e.r(79731),{FLAG_INCLUDE_PRERELEASE:g,FLAG_LOOSE:m}=e.r(34708),b=e=>"<0.0.0-0"===e.value,w=e=>""===e.value,v=(e,t)=>{let r=!0,o=e.slice(),n=o.pop();for(;r&&o.length;)r=o.every(e=>n.intersects(e,t)),n=o.pop();return r},x=(e,t)=>(s("comp",e=e.replace(d[u.BUILD],""),t),s("caret",e=k(e,t)),s("tildes",e=C(e,t)),s("xrange",e=$(e,t)),s("stars",e=O(e,t)),e),y=e=>!e||"x"===e.toLowerCase()||"*"===e,C=(e,t)=>e.trim().split(/\s+/).map(e=>E(e,t)).join(" "),E=(e,t)=>{let r=t.loose?d[u.TILDELOOSE]:d[u.TILDE];return e.replace(r,(t,r,o,n,i)=>{let l;return s("tilde",e,t,r,o,n,i),y(r)?l="":y(o)?l=`>=${r}.0.0 <${+r+1}.0.0-0`:y(n)?l=`>=${r}.${o}.0 <${r}.${+o+1}.0-0`:i?(s("replaceTilde pr",i),l=`>=${r}.${o}.${n}-${i} <${r}.${+o+1}.0-0`):l=`>=${r}.${o}.${n} <${r}.${+o+1}.0-0`,s("tilde return",l),l})},k=(e,t)=>e.trim().split(/\s+/).map(e=>S(e,t)).join(" "),S=(e,t)=>{s("caret",e,t);let r=t.loose?d[u.CARETLOOSE]:d[u.CARET],o=t.includePrerelease?"-0":"";return e.replace(r,(t,r,n,i,l)=>{let a;return s("caret",e,t,r,n,i,l),y(r)?a="":y(n)?a=`>=${r}.0.0${o} <${+r+1}.0.0-0`:y(i)?a="0"===r?`>=${r}.${n}.0${o} <${r}.${+n+1}.0-0`:`>=${r}.${n}.0${o} <${+r+1}.0.0-0`:l?(s("replaceCaret pr",l),a="0"===r?"0"===n?`>=${r}.${n}.${i}-${l} <${r}.${n}.${+i+1}-0`:`>=${r}.${n}.${i}-${l} <${r}.${+n+1}.0-0`:`>=${r}.${n}.${i}-${l} <${+r+1}.0.0-0`):(s("no pr"),a="0"===r?"0"===n?`>=${r}.${n}.${i}${o} <${r}.${n}.${+i+1}-0`:`>=${r}.${n}.${i}${o} <${r}.${+n+1}.0-0`:`>=${r}.${n}.${i} <${+r+1}.0.0-0`),s("caret return",a),a})},$=(e,t)=>(s("replaceXRanges",e,t),e.split(/\s+/).map(e=>L(e,t)).join(" ")),L=(e,t)=>{e=e.trim();let r=t.loose?d[u.XRANGELOOSE]:d[u.XRANGE];return e.replace(r,(r,o,n,i,l,a)=>{s("xRange",e,r,o,n,i,l,a);let c=y(n),d=c||y(i),u=d||y(l);return"="===o&&u&&(o=""),a=t.includePrerelease?"-0":"",c?r=">"===o||"<"===o?"<0.0.0-0":"*":o&&u?(d&&(i=0),l=0,">"===o?(o=">=",d?(n=+n+1,i=0):i=+i+1,l=0):"<="===o&&(o="<",d?n=+n+1:i=+i+1),"<"===o&&(a="-0"),r=`${o+n}.${i}.${l}${a}`):d?r=`>=${n}.0.0${a} <${+n+1}.0.0-0`:u&&(r=`>=${n}.${i}.0${a} <${n}.${+i+1}.0-0`),s("xRange return",r),r})},O=(e,t)=>(s("replaceStars",e,t),e.trim().replace(d[u.STAR],"")),I=(e,t)=>(s("replaceGTE0",e,t),e.trim().replace(d[t.includePrerelease?u.GTE0PRE:u.GTE0],"")),R=e=>(t,r,o,n,i,l,a,s,c,d,u,p)=>(r=y(o)?"":y(n)?`>=${o}.0.0${e?"-0":""}`:y(i)?`>=${o}.${n}.0${e?"-0":""}`:l?`>=${r}`:`>=${r}${e?"-0":""}`,s=y(c)?"":y(d)?`<${+c+1}.0.0-0`:y(u)?`<${c}.${+d+1}.0-0`:p?`<=${c}.${d}.${u}-${p}`:e?`<${c}.${d}.${+u+1}-0`:`<=${s}`,`${r} ${s}`.trim()),T=(e,t,r)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++)if(s(e[r].semver),e[r].semver!==a.ANY&&e[r].semver.prerelease.length>0){let o=e[r].semver;if(o.major===t.major&&o.minor===t.minor&&o.patch===t.patch)return!0}return!1}return!0}},61644,(e,t,r)=>{"use strict";let o=Symbol("SemVer ANY");class n{static get ANY(){return o}constructor(e,t){if(t=i(t),e instanceof n)if(!!t.loose===e.loose)return e;else e=e.value;c("comparator",e=e.trim().split(/\s+/).join(" "),t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===o?this.value="":this.value=this.operator+this.semver.version,c("comp",this)}parse(e){let t=this.options.loose?l[a.COMPARATORLOOSE]:l[a.COMPARATOR],r=e.match(t);if(!r)throw TypeError(`Invalid comparator: ${e}`);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new d(r[2],this.options.loose):this.semver=o}toString(){return this.value}test(e){if(c("Comparator.test",e,this.options.loose),this.semver===o||e===o)return!0;if("string"==typeof e)try{e=new d(e,this.options)}catch(e){return!1}return s(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof n))throw TypeError("a Comparator is required");return""===this.operator?""===this.value||new u(e.value,t).test(this.value):""===e.operator?""===e.value||new u(this.value,t).test(e.semver):!((t=i(t)).includePrerelease&&("<0.0.0-0"===this.value||"<0.0.0-0"===e.value)||!t.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0")))&&!!(this.operator.startsWith(">")&&e.operator.startsWith(">")||this.operator.startsWith("<")&&e.operator.startsWith("<")||this.semver.version===e.semver.version&&this.operator.includes("=")&&e.operator.includes("=")||s(this.semver,"<",e.semver,t)&&this.operator.startsWith(">")&&e.operator.startsWith("<")||s(this.semver,">",e.semver,t)&&this.operator.startsWith("<")&&e.operator.startsWith(">"))}}t.exports=n;let i=e.r(17787),{safeRe:l,t:a}=e.r(79731),s=e.r(54661),c=e.r(82048),d=e.r(96369),u=e.r(17530)},34782,(e,t,r)=>{"use strict";let o=e.r(17530);t.exports=(e,t,r)=>{try{t=new o(t,r)}catch(e){return!1}return t.test(e)}},99197,(e,t,r)=>{"use strict";let o=e.r(17530);t.exports=(e,t)=>new o(e,t).set.map(e=>e.map(e=>e.value).join(" ").trim().split(" "))},84246,(e,t,r)=>{"use strict";let o=e.r(96369),n=e.r(17530);t.exports=(e,t,r)=>{let i=null,l=null,a=null;try{a=new n(t,r)}catch(e){return null}return e.forEach(e=>{a.test(e)&&(!i||-1===l.compare(e))&&(l=new o(i=e,r))}),i}},94178,(e,t,r)=>{"use strict";let o=e.r(96369),n=e.r(17530);t.exports=(e,t,r)=>{let i=null,l=null,a=null;try{a=new n(t,r)}catch(e){return null}return e.forEach(e=>{a.test(e)&&(!i||1===l.compare(e))&&(l=new o(i=e,r))}),i}},99536,(e,t,r)=>{"use strict";let o=e.r(96369),n=e.r(17530),i=e.r(26646);t.exports=(e,t)=>{e=new n(e,t);let r=new o("0.0.0");if(e.test(r)||(r=new o("0.0.0-0"),e.test(r)))return r;r=null;for(let t=0;t<e.set.length;++t){let n=e.set[t],l=null;n.forEach(e=>{let t=new o(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":(!l||i(t,l))&&(l=t);break;case"<":case"<=":break;default:throw Error(`Unexpected operation: ${e.operator}`)}}),l&&(!r||i(r,l))&&(r=l)}return r&&e.test(r)?r:null}},39677,(e,t,r)=>{"use strict";let o=e.r(17530);t.exports=(e,t)=>{try{return new o(e,t).range||"*"}catch(e){return null}}},56585,(e,t,r)=>{"use strict";let o=e.r(96369),n=e.r(61644),{ANY:i}=n,l=e.r(17530),a=e.r(34782),s=e.r(26646),c=e.r(46961),d=e.r(74754),u=e.r(35433);t.exports=(e,t,r,p)=>{let f,h,g,m,b;switch(e=new o(e,p),t=new l(t,p),r){case">":f=s,h=d,g=c,m=">",b=">=";break;case"<":f=c,h=u,g=s,m="<",b="<=";break;default:throw TypeError('Must provide a hilo val of "<" or ">"')}if(a(e,t,p))return!1;for(let r=0;r<t.set.length;++r){let o=t.set[r],l=null,a=null;if(o.forEach(e=>{e.semver===i&&(e=new n(">=0.0.0")),l=l||e,a=a||e,f(e.semver,l.semver,p)?l=e:g(e.semver,a.semver,p)&&(a=e)}),l.operator===m||l.operator===b||(!a.operator||a.operator===m)&&h(e,a.semver)||a.operator===b&&g(e,a.semver))return!1}return!0}},17241,(e,t,r)=>{"use strict";let o=e.r(56585);t.exports=(e,t,r)=>o(e,t,">",r)},22252,(e,t,r)=>{"use strict";let o=e.r(56585);t.exports=(e,t,r)=>o(e,t,"<",r)},3917,(e,t,r)=>{"use strict";let o=e.r(17530);t.exports=(e,t,r)=>(e=new o(e,r),t=new o(t,r),e.intersects(t,r))},29024,(e,t,r)=>{"use strict";let o=e.r(34782),n=e.r(4197);t.exports=(e,t,r)=>{let i=[],l=null,a=null,s=e.sort((e,t)=>n(e,t,r));for(let e of s)o(e,t,r)?(a=e,l||(l=e)):(a&&i.push([l,a]),a=null,l=null);l&&i.push([l,null]);let c=[];for(let[e,t]of i)e===t?c.push(e):t||e!==s[0]?t?e===s[0]?c.push(`<=${t}`):c.push(`${e} - ${t}`):c.push(`>=${e}`):c.push("*");let d=c.join(" || "),u="string"==typeof t.raw?t.raw:String(t);return d.length<u.length?d:t}},42178,(e,t,r)=>{"use strict";let o=e.r(17530),n=e.r(61644),{ANY:i}=n,l=e.r(34782),a=e.r(4197),s=[new n(">=0.0.0-0")],c=[new n(">=0.0.0")],d=(e,t,r)=>{let o,n,d,f,h,g,m;if(e===t)return!0;if(1===e.length&&e[0].semver===i)if(1===t.length&&t[0].semver===i)return!0;else e=r.includePrerelease?s:c;if(1===t.length&&t[0].semver===i)if(r.includePrerelease)return!0;else t=c;let b=new Set;for(let t of e)">"===t.operator||">="===t.operator?o=u(o,t,r):"<"===t.operator||"<="===t.operator?n=p(n,t,r):b.add(t.semver);if(b.size>1)return null;if(o&&n&&((d=a(o.semver,n.semver,r))>0||0===d&&(">="!==o.operator||"<="!==n.operator)))return null;for(let e of b){if(o&&!l(e,String(o),r)||n&&!l(e,String(n),r))return null;for(let o of t)if(!l(e,String(o),r))return!1;return!0}let w=!!n&&!r.includePrerelease&&!!n.semver.prerelease.length&&n.semver,v=!!o&&!r.includePrerelease&&!!o.semver.prerelease.length&&o.semver;for(let e of(w&&1===w.prerelease.length&&"<"===n.operator&&0===w.prerelease[0]&&(w=!1),t)){if(m=m||">"===e.operator||">="===e.operator,g=g||"<"===e.operator||"<="===e.operator,o){if(v&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===v.major&&e.semver.minor===v.minor&&e.semver.patch===v.patch&&(v=!1),">"===e.operator||">="===e.operator){if((f=u(o,e,r))===e&&f!==o)return!1}else if(">="===o.operator&&!l(o.semver,String(e),r))return!1}if(n){if(w&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===w.major&&e.semver.minor===w.minor&&e.semver.patch===w.patch&&(w=!1),"<"===e.operator||"<="===e.operator){if((h=p(n,e,r))===e&&h!==n)return!1}else if("<="===n.operator&&!l(n.semver,String(e),r))return!1}if(!e.operator&&(n||o)&&0!==d)return!1}return(!o||!g||!!n||0===d)&&(!n||!m||!!o||0===d)&&!v&&!w&&!0},u=(e,t,r)=>{if(!e)return t;let o=a(e.semver,t.semver,r);return o>0?e:o<0||">"===t.operator&&">="===e.operator?t:e},p=(e,t,r)=>{if(!e)return t;let o=a(e.semver,t.semver,r);return o<0?e:o>0||"<"===t.operator&&"<="===e.operator?t:e};t.exports=(e,t,r={})=>{if(e===t)return!0;e=new o(e,r),t=new o(t,r);let n=!1;e:for(let o of e.set){for(let e of t.set){let t=d(o,e,r);if(n=n||null!==t,t)continue e}if(n)return!1}return!0}},23953,(e,t,r)=>{"use strict";let o=e.r(79731),n=e.r(34708),i=e.r(96369),l=e.r(77766),a=e.r(78551),s=e.r(27812),c=e.r(27240),d=e.r(64666),u=e.r(58058),p=e.r(95641),f=e.r(17840),h=e.r(36041),g=e.r(1506),m=e.r(4197),b=e.r(46759),w=e.r(67882),v=e.r(39994),x=e.r(75139),y=e.r(90189),C=e.r(26646),E=e.r(46961),k=e.r(41447),S=e.r(79651),$=e.r(35433),L=e.r(74754),O=e.r(54661),I=e.r(70530),R=e.r(61644),T=e.r(17530),N=e.r(34782),A=e.r(99197),P=e.r(84246),j=e.r(94178),_=e.r(99536),M=e.r(39677),D=e.r(56585),H=e.r(17241),B=e.r(22252),V=e.r(3917);t.exports={parse:a,valid:s,clean:c,inc:d,diff:u,major:p,minor:f,patch:h,prerelease:g,compare:m,rcompare:b,compareLoose:w,compareBuild:v,sort:x,rsort:y,gt:C,lt:E,eq:k,neq:S,gte:$,lte:L,cmp:O,coerce:I,Comparator:R,Range:T,satisfies:N,toComparators:A,maxSatisfying:P,minSatisfying:j,minVersion:_,validRange:M,outside:D,gtr:H,ltr:B,intersects:V,simplifyRange:e.r(29024),subset:e.r(42178),SemVer:i,re:o.re,src:o.src,tokens:o.t,SEMVER_SPEC_VERSION:n.SEMVER_SPEC_VERSION,RELEASE_TYPES:n.RELEASE_TYPES,compareIdentifiers:l.compareIdentifiers,rcompareIdentifiers:l.rcompareIdentifiers}},39840,84845,34417,19378,25598,34955,e=>{"use strict";var t=e.i(23953);let r="16.9.0",o=!1;function n(){return!("u"<typeof localStorage)&&null!=localStorage||(o||(console.warn("[LocatorJS]: No local storage available. Please check your browser settings."),o=!0),!1)}function i(){if(!n())return{};let e={},t=localStorage.getItem("LOCATOR_OPTIONS");if(t){let r=JSON.parse(t);"string"==typeof r.projectPath&&(e.projectPath=r.projectPath),"string"==typeof r.templateOrTemplateId&&(e.templateOrTemplateId=r.templateOrTemplateId),"string"==typeof r.adapterId&&(e.adapterId=r.adapterId),"object"==typeof r.replacePath&&"string"==typeof r.replacePath.from&&"string"==typeof r.replacePath.to&&(e.replacePath={from:r.replacePath.from,to:r.replacePath.to}),"boolean"==typeof r.disabled&&(e.disabled=r.disabled),"boolean"==typeof r.showIntro&&(e.showIntro=r.showIntro),"string"==typeof r.hrefTarget&&(e.hrefTarget=r.hrefTarget),"boolean"==typeof r.welcomeScreenDismissed&&(e.welcomeScreenDismissed=r.welcomeScreenDismissed)}return e}function l(e){n()&&localStorage.setItem("LOCATOR_OPTIONS",JSON.stringify(e))}function a(){n()&&localStorage.removeItem("LOCATOR_OPTIONS")}function s(e){if(!n())return;let t=localStorage.getItem("LOCATOR_OPTIONS");addEventListener("storage",r=>{if("LOCATOR_OPTIONS"!==r.key)return;let o=localStorage.getItem("LOCATOR_OPTIONS");o!==t&&(t=o,e(i()))})}e.s(["cleanOptions",()=>a,"getStoredOptions",()=>i,"listenOnOptionsChanges",()=>s,"setStoredOptions",()=>l],84845);let c="u">typeof navigator&&navigator.platform.toUpperCase().indexOf("MAC")>=0;function d(){return!!window.__SVELTE_HMR||!!window.__SAPPER__}function u(){return!!window.__VUE__}function p(){return!!window.__LOCATOR_DATA__}function f(){if(window.__REACT_DEVTOOLS_GLOBAL_HOOK__){let e=window.__REACT_DEVTOOLS_GLOBAL_HOOK__?.renderers;if(e){let o=[];if(Array.from(e.values()).filter(e=>(function({rendererPackageName:e,version:o,bundleType:n},i){return"react-dom"===e&&"string"==typeof o&&/^\d+\.\d+\.\d+(-\S+)?$/.test(o)&&(0,t.gte)(o,r)?1===n||(i&&i(`Unsupported React renderer, only bundle type 1 (development) is supported but ${n} (${0===n?"production":"unknown"}) is found`),!1):(i&&i(`Unsupported React renderer (only react-dom v${r}+ is supported). Renderer: ${e||"unknown"}, Version: ${o||"unknown"}`),!1)})(e,e=>{o.push(e)})).length)return!0}}return!1}e.s(["allTargets",0,{vscode:{url:"vscode://file/${projectPath}${filePath}:${line}:${column}",label:"VSCode"},webstorm:{url:"webstorm://open?file=${projectPath}${filePath}&line=${line}&column=${column}",label:"WebStorm"},cursor:{url:"cursor://file/${projectPath}${filePath}:${line}:${column}",label:"Cursor"},windsurf:{url:"windsurf://file/${projectPath}${filePath}:${line}:${column}",label:"Windsurf"}},"detectJSX",()=>p,"detectReact",()=>f,"detectSvelte",()=>d,"detectVue",()=>u,"modifiersTitles",0,{alt:c?"⌥ Option":"Alt",ctrl:c?"⌃ Ctrl":"Ctrl",meta:c?"⌘ Command":"Windows",shift:c?"⇧ Shift":"Shift"}],39840),e.s(["HREF_TARGET",0,"_self","PADDING",0,6,"fontFamily",0,"Helvetica, sans-serif, Arial"],34417);let h=null;function g(e){h=e}function m(e,t,r,o){let n,i,l,a={filePath:e.filePath,projectPath:r.getOptions().projectPath||h||e.projectPath,line:String(e.line),column:String(e.column),linePlusOne:String(e.line+1),columnPlusOne:String(e.column+1),lineMinusOne:String(e.line-1),columnMinusOne:String(e.column-1)},s=(n=o||r.getOptions().templateOrTemplateId||document.documentElement.dataset.locatorTarget||Object.entries(t)[0][0],(i=t[n])?i.url:n),c=r.getOptions().replacePath,d=(l=s,Object.entries(a).forEach(([e,t])=>{l=l.replace("${"+e+"}",t)}),l);return c&&(d=function(e,t,r){try{return e.replace(RegExp(`${t}`),r)}catch(t){return e}}(d,c.from,c.to)),d}function b(e,t,r){return m({filePath:e.fileName,projectPath:e.projectPath||"",line:e.lineNumber,column:e.columnNumber||0},t,r)}function w(e){let[t,r]=e.split("::");if(!t||!r)throw Error("locatorjsId is malformed");return[t,r]}function v(e){let t=e.lastIndexOf(":");if(-1===t)return null;let r=e.lastIndexOf(":",t-1);if(-1===r)return null;let o=e.substring(0,r),n=e.substring(r+1,t),i=e.substring(t+1),l=parseInt(n,10),a=parseInt(i,10);return Number.isNaN(l)||Number.isNaN(a)?null:[o,l,a]}function x(e){for(let t of["/src/","/app/","/pages/","/components/"]){let r=e.indexOf(t);if(-1!==r)return[e.substring(0,r),e.substring(r)]}let t=e.lastIndexOf("/");return -1!==t?[e.substring(0,t+1),e.substring(t+1)]:[e,""]}function y(){return"u">typeof document&&!!document.querySelector(".locatorjs-extension-script")}e.s(["buildLink",()=>m,"buildLinkFromSource",()=>b,"setInternalProjectPath",()=>g],19378),e.s(["parseDataId",()=>w,"parseDataPath",()=>v,"splitFullPath",()=>x],25598),e.s(["isExtension",()=>y],34955)},63961,e=>{"use strict";let t,r,o,n={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return i(this.context.count)},getNextContextId(){return i(this.context.count++)}};function i(e){let t=String(e),r=t.length-1;return n.context.id+(r?String.fromCharCode(96+r):"")+t}let l=Symbol("solid-proxy"),a="function"==typeof Proxy,s=Symbol("solid-track");Symbol("solid-dev-component");let c={equals:(e,t)=>e===t},d=j,u={owned:null,cleanups:null,context:null,owner:null};var p,f=null;let h=null,g=null,m=null,b=null,w=0;function v(e,t){let r=g,o=f,n=0===e.length,i=void 0===t?o:t,l=n?u:{owned:null,cleanups:null,context:i?i.context:null,owner:i},a=n?e:()=>e(()=>k(()=>D(l)));f=l,g=null;try{return P(a,!0)}finally{g=r,f=o}}function x(e,t){let r={value:e,observers:null,observerSlots:null,comparator:(t=t?Object.assign({},c,t):c).equals||void 0};return[O.bind(r),e=>("function"==typeof e&&(e=e(h&&h.running&&h.sources.has(r)?r.tValue:r.value)),I(r,e))]}function y(e,t,r){R(N(e,t,!1,1))}function C(e,r,o){d=_;let n=N(e,r,!1,1),i=t&&L(t);i&&(n.suspense=i),o&&o.render||(n.user=!0),b?b.push(n):R(n)}function E(e,t,r){r=r?Object.assign({},c,r):c;let o=N(e,t,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=r.equals||void 0,R(o),O.bind(o)}function k(e){if(null===g)return e();let t=g;g=null;try{return e()}finally{g=t}}function S(e){return null===f||(null===f.cleanups?f.cleanups=[e]:f.cleanups.push(e)),e}let[,$]=x(!1);function L(e){let t;return f&&f.context&&void 0!==(t=f.context[e.id])?t:e.defaultValue}function O(){let e=h&&h.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===1)R(this);else{let e=m;m=null,P(()=>M(this),!1),m=e}if(g){let e=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(e)):(g.sources=[this],g.sourceSlots=[e]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return e&&h.sources.has(this)?this.tValue:this.value}function I(e,t,r){let o=h&&h.running&&h.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(o,t)){if(h){let o=h.running;(o||!r&&h.sources.has(e))&&(h.sources.add(e),e.tValue=t),o||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&P(()=>{for(let t=0;t<e.observers.length;t+=1){let r=e.observers[t],o=h&&h.running;o&&h.disposed.has(r)||((o?r.tState:r.state)||(r.pure?m.push(r):b.push(r),r.observers&&function e(t){let r=h&&h.running;for(let o=0;o<t.observers.length;o+=1){let n=t.observers[o];(r?n.tState:n.state)||(r?n.tState=2:n.state=2,n.pure?m.push(n):b.push(n),n.observers&&e(n))}}(r)),o?r.tState=1:r.state=1)}if(m.length>1e6)throw m=[],Error()},!1)}return t}function R(e){if(!e.fn)return;D(e);let t=w;T(e,h&&h.running&&h.sources.has(e)?e.tValue:e.value,t),h&&!h.running&&h.sources.has(e)&&queueMicrotask(()=>{P(()=>{h&&(h.running=!0),g=f=e,T(e,e.tValue,t),g=f=null},!1)})}function T(e,t,r){let o,n=f,i=g;g=f=e;try{o=e.fn(t)}catch(t){return e.pure&&(h&&h.running?(e.tState=1,e.tOwned&&e.tOwned.forEach(D),e.tOwned=void 0):(e.state=1,e.owned&&e.owned.forEach(D),e.owned=null)),e.updatedAt=r+1,B(t)}finally{g=i,f=n}(!e.updatedAt||e.updatedAt<=r)&&(null!=e.updatedAt&&"observers"in e?I(e,o,!0):h&&h.running&&e.pure?(h.sources.add(e),e.tValue=o):e.value=o,e.updatedAt=r)}function N(e,t,r,o=1,n){let i={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:f,context:f?f.context:null,pure:r};return h&&h.running&&(i.state=0,i.tState=o),null===f||f!==u&&(h&&h.running&&f.pure?f.tOwned?f.tOwned.push(i):f.tOwned=[i]:f.owned?f.owned.push(i):f.owned=[i]),i}function A(e){let t=h&&h.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===2)return M(e);if(e.suspense&&k(e.suspense.inFallback))return e.suspense.effects.push(e);let r=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<w);){if(t&&h.disposed.has(e))return;(t?e.tState:e.state)&&r.push(e)}for(let o=r.length-1;o>=0;o--){if(e=r[o],t){let t=e,n=r[o+1];for(;(t=t.owner)&&t!==n;)if(h.disposed.has(t))return}if((t?e.tState:e.state)===1)R(e);else if((t?e.tState:e.state)===2){let t=m;m=null,P(()=>M(e,r[0]),!1),m=t}}}function P(e,t){if(m)return e();let r=!1;t||(m=[]),b?r=!0:b=[],w++;try{let t=e();return function(e){let t;if(m&&(j(m),m=null),e)return;if(h)if(h.promises.size||h.queue.size){if(h.running){h.running=!1,h.effects.push.apply(h.effects,b),b=null,$(!0);return}}else{let e=h.sources,r=h.disposed;for(let e of(b.push.apply(b,h.effects),t=h.resolve,b))"tState"in e&&(e.state=e.tState),delete e.tState;h=null,P(()=>{for(let e of r)D(e);for(let t of e){if(t.value=t.tValue,t.owned)for(let e=0,r=t.owned.length;e<r;e++)D(t.owned[e]);t.tOwned&&(t.owned=t.tOwned),delete t.tValue,delete t.tOwned,t.tState=0}$(!1)},!1)}let r=b;b=null,r.length&&P(()=>d(r),!1),t&&t()}(r),t}catch(e){r||(b=null),m=null,B(e)}}function j(e){for(let t=0;t<e.length;t++)A(e[t])}function _(e){let t,r=0;for(t=0;t<e.length;t++){let o=e[t];o.user?e[r++]=o:A(o)}if(n.context){if(n.count){n.effects||(n.effects=[]),n.effects.push(...e.slice(0,r));return}n.context=void 0}for(n.effects&&(n.done||!n.count)&&(e=[...n.effects,...e],r+=n.effects.length,delete n.effects),t=0;t<r;t++)A(e[t])}function M(e,t){let r=h&&h.running;r?e.tState=0:e.state=0;for(let o=0;o<e.sources.length;o+=1){let n=e.sources[o];if(n.sources){let e=r?n.tState:n.state;1===e?n!==t&&(!n.updatedAt||n.updatedAt<w)&&A(n):2===e&&M(n,t)}}}function D(e){let t;if(e.sources)for(;e.sources.length;){let t=e.sources.pop(),r=e.sourceSlots.pop(),o=t.observers;if(o&&o.length){let e=o.pop(),n=t.observerSlots.pop();r<o.length&&(e.sourceSlots[n]=r,o[r]=e,t.observerSlots[r]=n)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)D(e.tOwned[t]);delete e.tOwned}if(h&&h.running&&e.pure)!function e(t,r){if(r||(t.tState=0,h.disposed.add(t)),t.owned)for(let r=0;r<t.owned.length;r++)e(t.owned[r])}(e,!0);else if(e.owned){for(t=e.owned.length-1;t>=0;t--)D(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}h&&h.running?e.tState=0:e.state=0}function H(e,t,r){try{for(let r of t)r(e)}catch(e){B(e,r&&r.owner||null)}}function B(e,t=f){let r=e instanceof Error?e:Error("string"==typeof e?e:"Unknown error",{cause:e});!0;throw r}let V=Symbol("fallback");function F(e){for(let t=0;t<e.length;t++)e[t]()}function z(e,t){return k(()=>e(t||{}))}function G(){return!0}let U={get:(e,t,r)=>t===l?r:e.get(t),has:(e,t)=>t===l||e.has(t),set:G,deleteProperty:G,getOwnPropertyDescriptor:(e,t)=>({configurable:!0,enumerable:!0,get:()=>e.get(t),set:G,deleteProperty:G}),ownKeys:e=>e.keys()};function X(e){return(e="function"==typeof e?e():e)?e:{}}function W(){for(let e=0,t=this.length;e<t;++e){let t=this[e]();if(void 0!==t)return t}}function Y(e){let t="fallback"in e&&{fallback:()=>e.fallback};return E(function(e,t,r={}){let o=[],n=[],i=[],l=0,a=t.length>1?[]:null;return S(()=>F(i)),()=>{let c=e()||[],d=c.length,u,p;return c[s],k(()=>{let e,t,s,h,g,m,b,w,x;if(0===d)0!==l&&(F(i),i=[],o=[],n=[],l=0,a&&(a=[])),r.fallback&&(o=[V],n[0]=v(e=>(i[0]=e,r.fallback())),l=1);else if(0===l){for(p=0,n=Array(d);p<d;p++)o[p]=c[p],n[p]=v(f);l=d}else{for(s=Array(d),h=Array(d),a&&(g=Array(d)),m=0,b=Math.min(l,d);m<b&&o[m]===c[m];m++);for(b=l-1,w=d-1;b>=m&&w>=m&&o[b]===c[w];b--,w--)s[w]=n[b],h[w]=i[b],a&&(g[w]=a[b]);for(e=new Map,t=Array(w+1),p=w;p>=m;p--)x=c[p],u=e.get(x),t[p]=void 0===u?-1:u,e.set(x,p);for(u=m;u<=b;u++)x=o[u],void 0!==(p=e.get(x))&&-1!==p?(s[p]=n[u],h[p]=i[u],a&&(g[p]=a[u]),p=t[p],e.set(x,p)):i[u]();for(p=m;p<d;p++)p in s?(n[p]=s[p],i[p]=h[p],a&&(a[p]=g[p],a[p](p))):n[p]=v(f);n=n.slice(0,l=d),o=c.slice(0)}return n});function f(e){if(i[p]=e,a){let[e,r]=x(p);return a[p]=r,t(c[p],e)}return t(c[p])}}}(()=>e.each,e.children,t||void 0))}function Z(e){let t=e.keyed,r=E(()=>e.when,void 0,void 0),o=t?r:E(r,void 0,{equals:(e,t)=>!e==!t});return E(()=>{let n=o();if(n){let i=e.children;return"function"==typeof i&&i.length>0?k(()=>i(t?n:()=>{if(!k(o))throw"Stale read from <Show>.";return r()})):i}return e.fallback},void 0,void 0)}Object.create(null),Object.create(null);let q=e=>E(()=>e()),J="_$DX_DELEGATE";function K(e,t,r,o){let n,i=()=>{let t=o?document.createElementNS("http://www.w3.org/1998/Math/MathML","template"):document.createElement("template");return t.innerHTML=e,r?t.content.firstChild.firstChild:o?t.firstChild:t.content.firstChild},l=t?()=>k(()=>document.importNode(n||(n=i()),!0)):()=>(n||(n=i())).cloneNode(!0);return l.cloneNode=l,l}function Q(e,t=window.document){let r=t[J]||(t[J]=new Set);for(let o=0,n=e.length;o<n;o++){let n=e[o];r.has(n)||(r.add(n),t.addEventListener(n,es))}}function ee(e,t,r){ea(e)||(null==r?e.removeAttribute(t):e.setAttribute(t,r))}function et(e,t){ea(e)||(null==t?e.removeAttribute("class"):e.className=t)}function er(e,t,r,o){if(o)Array.isArray(r)?(e[`$$${t}`]=r[0],e[`$$${t}Data`]=r[1]):e[`$$${t}`]=r;else if(Array.isArray(r)){let o=r[0];e.addEventListener(t,r[0]=t=>o.call(e,r[1],t))}else e.addEventListener(t,r,"function"!=typeof r&&r)}function eo(e,t,r){let o,n;if(!t)return r?ee(e,"style"):t;let i=e.style;if("string"==typeof t)return i.cssText=t;for(n in"string"==typeof r&&(i.cssText=r=void 0),r||(r={}),t||(t={}),r)null==t[n]&&i.removeProperty(n),delete r[n];for(n in t)(o=t[n])!==r[n]&&(i.setProperty(n,o),r[n]=o);return r}function en(e,t,r){null!=r?e.style.setProperty(t,r):e.style.removeProperty(t)}function ei(e,t,r){return k(()=>e(t,r))}function el(e,t,r,o){if(void 0===r||o||(o=[]),"function"!=typeof t)return ec(e,t,o,r);y(o=>ec(e,t(),o,r),o)}function ea(e){return!!n.context&&!n.done&&(!e||e.isConnected)}function es(e){if(n.registry&&n.events&&n.events.find(([t,r])=>r===e))return;let t=e.target,r=`$$${e.type}`,o=e.target,i=e.currentTarget,l=t=>Object.defineProperty(e,"target",{configurable:!0,value:t}),a=()=>{let o=t[r];if(o&&!t.disabled){let n=t[`${r}Data`];if(void 0!==n?o.call(t,n,e):o.call(t,e),e.cancelBubble)return}return t.host&&"string"!=typeof t.host&&!t.host._$host&&t.contains(e.target)&&l(t.host),!0},s=()=>{for(;a()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>t||document}),n.registry&&!n.done&&(n.done=_$HY.done=!0),e.composedPath){let r=e.composedPath();l(r[0]);for(let e=0;e<r.length-2&&(t=r[e],a());e++){if(t._$host){t=t._$host,s();break}if(t.parentNode===i)break}}else s();l(o)}function ec(e,t,r,o,n){let i=ea(e);if(i){r||(r=[...e.childNodes]);let t=[];for(let e=0;e<r.length;e++){let o=r[e];8===o.nodeType&&"!$"===o.data.slice(0,2)?o.remove():t.push(o)}r=t}for(;"function"==typeof r;)r=r();if(t===r)return r;let l=typeof t,a=void 0!==o;if(e=a&&r[0]&&r[0].parentNode||e,"string"===l||"number"===l){if(i||"number"===l&&(t=t.toString())===r)return r;if(a){let n=r[0];n&&3===n.nodeType?n.data!==t&&(n.data=t):n=document.createTextNode(t),r=eu(e,r,o,n)}else r=""!==r&&"string"==typeof r?e.firstChild.data=t:e.textContent=t}else if(null==t||"boolean"===l){if(i)return r;r=eu(e,r,o)}else if("function"===l)return y(()=>{let n=t();for(;"function"==typeof n;)n=n();r=ec(e,n,r,o)}),()=>r;else if(Array.isArray(t)){let l=[],s=r&&Array.isArray(r);if(function e(t,r,o,n){let i=!1;for(let l=0,a=r.length;l<a;l++){let a=r[l],s=o&&o[t.length],c;if(null==a||!0===a||!1===a);else if("object"==(c=typeof a)&&a.nodeType)t.push(a);else if(Array.isArray(a))i=e(t,a,s)||i;else if("function"===c)if(n){for(;"function"==typeof a;)a=a();i=e(t,Array.isArray(a)?a:[a],Array.isArray(s)?s:[s])||i}else t.push(a),i=!0;else{let e=String(a);s&&3===s.nodeType&&s.data===e?t.push(s):t.push(document.createTextNode(e))}}return i}(l,t,r,n))return y(()=>r=ec(e,l,r,o,!0)),()=>r;if(i){if(!l.length)return r;if(void 0===o)return r=[...e.childNodes];let t=l[0];if(t.parentNode!==e)return r;let n=[t];for(;(t=t.nextSibling)!==o;)n.push(t);return r=n}if(0===l.length){if(r=eu(e,r,o),a)return r}else s?0===r.length?ed(e,l,o):function(e,t,r){let o=r.length,n=t.length,i=o,l=0,a=0,s=t[n-1].nextSibling,c=null;for(;l<n||a<i;){if(t[l]===r[a]){l++,a++;continue}for(;t[n-1]===r[i-1];)n--,i--;if(n===l){let t=i<o?a?r[a-1].nextSibling:r[i-a]:s;for(;a<i;)e.insertBefore(r[a++],t)}else if(i===a)for(;l<n;)c&&c.has(t[l])||t[l].remove(),l++;else if(t[l]===r[i-1]&&r[a]===t[n-1]){let o=t[--n].nextSibling;e.insertBefore(r[a++],t[l++].nextSibling),e.insertBefore(r[--i],o),t[n]=r[i]}else{if(!c){c=new Map;let e=a;for(;e<i;)c.set(r[e],e++)}let o=c.get(t[l]);if(null!=o)if(a<o&&o<i){let s=l,d=1,u;for(;++s<n&&s<i&&null!=(u=c.get(t[s]))&&u===o+d;)d++;if(d>o-a){let n=t[l];for(;a<o;)e.insertBefore(r[a++],n)}else e.replaceChild(r[a++],t[l++])}else l++;else t[l++].remove()}}}(e,r,l):(r&&eu(e),ed(e,l));r=l}else if(t.nodeType){if(i&&t.parentNode)return r=a?[t]:t;if(Array.isArray(r)){if(a)return r=eu(e,r,o,t);eu(e,r,null,t)}else null!=r&&""!==r&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);r=t}return r}function ed(e,t,r=null){for(let o=0,n=t.length;o<n;o++)e.insertBefore(t[o],r)}function eu(e,t,r,o){if(void 0===r)return e.textContent="";let n=o||document.createTextNode("");if(t.length){let o=!1;for(let i=t.length-1;i>=0;i--){let l=t[i];if(n!==l){let t=l.parentNode===e;o||i?t&&l.remove():t?e.replaceChild(n,l):e.insertBefore(n,r)}else o=!0}}else e.insertBefore(n,r);return[n]}Symbol();var ep=e.i(39840);function ef(){let e=(document.documentElement.dataset.locatorMouseModifiers||"alt").split("+"),t={};return e.forEach(e=>{t[e]=!0},{}),t}function eh(e,t=!1){let r=ef();return t?!!r.alt==e.altKey&&!!r.meta==e.metaKey&&!!r.shift==e.shiftKey:!!r.alt==e.altKey&&!!r.ctrl==e.ctrlKey&&!!r.meta==e.metaKey&&!!r.shift==e.shiftKey}function eg(){}function em(e){let t=e;for(;t;){if(t._debugSource)return{fiber:t,source:t._debugSource};t=t._debugOwner||null}return null}function eb(e,t){let r=window.__REACT_DEVTOOLS_GLOBAL_HOOK__?.renderers,o=r?.values();if(o){for(let r of Array.from(o))if(r.findFiberByHostInstance){let o=r.findFiberByHostInstance(e);if(o)if(t)return em(o)?.fiber||null;else return o}}return null}function ew(e){return e?"string"==typeof e.elementType?e.elementType:e.elementType?e.elementType.name?e.elementType.name:e.elementType.displayName?e.elementType.displayName:e.elementType.type?.name?e.elementType.type.name:e.elementType._payload?._result?.name?e.elementType._payload._result.name:"Anonymous":"Anonymous":"Not found"}function ev(e,t){return{label:ew(e),link:t?{filePath:t.fileName,projectPath:"",line:t.lineNumber,column:t.columnNumber||0}:null}}function ex(e){let t=[],r=e.child;for(;r;)t.push(r),r=r.sibling;return t}function ey(e){return null!=e}function eC(e){return e.stateNode&&e.stateNode.getBoundingClientRect?e.stateNode.getBoundingClientRect():null}function eE(e,t){let r=Math.min(e.x,t.x),o=Math.min(e.y,t.y);return{x:r,y:o,width:Math.max(e.x+e.width,t.x+t.width)-r,height:Math.max(e.y+e.height,t.y+t.height)-o}}function ek(e){return!!e._debugOwner?.elementType?.styledComponentId}function eS(e){let t=e,r=new Set,o=t,n=t.uniqueId;r.add(o.uniqueId);let i=2;for(;o&&i>0;)i--,(o=o.getParent())&&(r.add(o.uniqueId),t=o);return{expandedIds:r,highlightedId:n,root:t,originalNode:e}}let e$=new WeakMap,eL=0;class eO{type="element";constructor(e){this.element=e,this.name=e.nodeName.toLowerCase(),this.uniqueId=String(function(e){return e$.has(e)||(eL++,e$.set(e,eL)),e$.get(e)}(e))}getBox(){return this.element.getBoundingClientRect()}getElement(){return this.element}getChildren(){return Array.from(this.element.children).map(e=>e instanceof HTMLElement?new this.constructor(e):null).filter(ey)}getParent(){return this.element.parentElement?new this.constructor(this.element.parentElement):null}getSource(){throw Error("Method not implemented.")}getComponent(){throw Error("Method not implemented.")}}class eI extends eO{getSource(){let e=eb(this.element,!1);return e&&e._debugSource?{fileName:e._debugSource.fileName,lineNumber:e._debugSource.lineNumber,columnNumber:e._debugSource.columnNumber}:null}getComponent(){let e=eb(this.element,!1),t=e?._debugOwner;if(t){let e=ev(t,em(t)?.source);return{label:e.label,callLink:e.link&&{fileName:e.link.filePath,lineNumber:e.link.line,columnNumber:e.link.column,projectPath:e.link.projectPath}||void 0}}return null}}function eR(e){let t=ev(e,em(e)?.source);return{title:t.label,link:t.link}}let eT=function(e){let t=[],r=eb(e,!1);if(r){let o,{component:n,componentBox:i,parentElements:l}=function(e){let t=[],r=e.stateNode;if(!r||!(r instanceof HTMLElement))throw Error("This functions works only for Fibres with HTMLElement stateNode");let o=r.getBoundingClientRect(),n=ek(e)&&e._debugOwner?e._debugOwner:e;for(;n._debugOwner||n.return;){let e=(n=n._debugOwner||n.return).stateNode;if(!e||!(e instanceof HTMLElement))return{component:n,parentElements:t,componentBox:function e(t,r=0){let o;return ex(t).forEach(t=>{let n=eC(t);!n&&r<6&&(n=e(t,r+1)||null),!n||n.width<=0||n.height<=0||(o=o?eE(o,n):n)}),o}(n)||o};let r=ew(n);o=eE(o,e.getBoundingClientRect()),t.push({box:e.getBoundingClientRect(),label:r,link:null})}throw Error("Could not find root component")}(r);(function(e){let t=[e],r=e;for(;r.return&&!((r=r.return).stateNode&&r.stateNode instanceof HTMLElement)&&!(ex(r).length>1);)t.push(r);return t})(n).forEach(e=>{let r=em(e);if(r){let e=ev(r.fiber,r.source);t.push(e)}});let a=ev(r,em(r)?.source);return ek(r)&&(a.label=`${a.label} (styled)`),{thisElement:{box:eC(r)||e.getBoundingClientRect(),...a},htmlElement:e,parentElements:l,componentBox:i,componentsLabels:(o={},t.map(e=>{let t=JSON.stringify(e);return o[t]?null:(o[t]=!0,e)}).filter(ey))}}return null},eN=function(e){return eS(new eI(e))},eA=function(e){let t=eb(e,!1);if(t){let e=[],r=t;for(e.push(eR(r));r._debugOwner;)e.push(eR(r=r._debugOwner));return e}return[]};var eP=e.i(25598);function ej(e,t){if(e.dataset.locatorjs){let r=(0,eP.parseDataPath)(e.dataset.locatorjs);if(r){let[,o,n]=r;if(t){let e=t.expressions.find(e=>e.loc.start.line===o&&e.loc.start.column===n);if(e)return e}return{name:e.tagName.toLowerCase(),loc:{start:{line:o,column:n},end:{line:o,column:n}},wrappingComponentId:null}}}if(e.dataset.locatorjsId&&t){let[,r]=(0,eP.parseDataId)(e.dataset.locatorjsId),o=t.expressions[Number(r)];if(o)return o}return null}function e_(e){let t=e.closest("[data-locatorjs-id], [data-locatorjs]");if(t&&t instanceof HTMLElement&&t.dataset&&(t.dataset.locatorjsId||t.dataset.locatorjs||t.dataset.locatorjsStyled)){var r,o,n;let e,i,l,a,s=t.dataset.locatorjsId,c=t.dataset.locatorjs,d=t.dataset.locatorjsStyled;if(!s&&!c)return null;if(c){let t=(0,eP.parseDataPath)(c);if(!t)return null;[e]=t}else{if(!s)return null;[e]=(0,eP.parseDataId)(s)}let u=window.__LOCATOR_DATA__,p=u?.[e],[f,h]=d?(0,eP.parseDataId)(d):[null,null],g=f&&u?.[f],m=g&&g.styledDefinitions[Number(h)];m&&(g.filePath,g.projectPath,m.loc?.start.column,m.loc?.start.line);let b=ej(t,p||null);if(!b)return null;p?(i=p.filePath,l=p.projectPath):[l,i]=(0,eP.splitFullPath)(e);let w=null!==b.wrappingComponentId&&p?p.components[Number(b.wrappingComponentId)]:null;return{thisElement:{box:t.getBoundingClientRect(),label:b.name,link:{filePath:i,projectPath:l,column:(b.loc.start.column||0)+1,line:b.loc.start.line||0}},htmlElement:t,parentElements:[],componentBox:(r=u||{},o=e,n=Number(b.wrappingComponentId),a=t.getBoundingClientRect(),!function e(t){let i=t.parentNode;if(i&&i instanceof HTMLElement)if(i.dataset.locatorjs||i.dataset.locatorjsId){let t;if(i.dataset.locatorjs){let r=(0,eP.parseDataPath)(i.dataset.locatorjs);if(!r)return void e(i);[t]=r}else{if(!i.dataset.locatorjsId)return void e(i);[t]=(0,eP.parseDataId)(i.dataset.locatorjsId)}let l=ej(i,r[t]||null);l&&(l.wrappingComponentId===n&&o===t&&(a=eE(a,i.getBoundingClientRect()),e(i)),l.wrappingComponentId)}else e(i)}(t),a),componentsLabels:w?[{label:w.name||"component",link:{filePath:i,projectPath:l,column:(w.loc?.start.column||0)+1,line:w.loc?.start.line||0}}]:[]}}return null}class eM extends eO{getSource(){let e,t=this.element.dataset.locatorjsId,r=this.element.dataset.locatorjs;if(!t&&!r)return null;if(r){let t=(0,eP.parseDataPath)(r);if(!t)return null;[e]=t}else{if(!t)return null;[e]=(0,eP.parseDataId)(t)}let o=window.__LOCATOR_DATA__,n=o?.[e],i=ej(this.element,n||null);if(i){let t,r;return n?(t=n.filePath,r=n.projectPath):[r,t]=(0,eP.splitFullPath)(e),{fileName:t,projectPath:r,columnNumber:(i.loc.start.column||0)+1,lineNumber:i.loc.start.line||0}}return null}getComponent(){let e,t=this.element.dataset.locatorjsId,r=this.element.dataset.locatorjs;if(!t&&!r)return null;if(r){let t=(0,eP.parseDataPath)(r);if(!t)return null;[e]=t}else{if(!t)return null;[e]=(0,eP.parseDataId)(t)}let o=window.__LOCATOR_DATA__,n=o?.[e];if(n){let e=ej(this.element,n);if(e&&null!==e.wrappingComponentId){let t=n.components[e.wrappingComponentId];if(t)return{label:t.name||"component",definitionLink:{fileName:n.filePath,projectPath:n.projectPath,columnNumber:(t.loc?.start.column||0)+1,lineNumber:t.loc?.start.line||0}}}}return null}}let eD=function(e){return eS(new eM(e))},eH=function(e){let t=[],r=e,o=null;do{if(r){let e=e_(r),n=JSON.stringify(e?.componentsLabels);if(e&&n!==o){o=n;let r=e.thisElement.link,i=e.thisElement.label;r&&t.push({title:i,link:r})}}r=r.parentElement}while(r)return t};class eB extends eO{getSource(){let e=this.element;if(e.__svelte_meta){let{loc:t}=e.__svelte_meta;return{fileName:t.file,lineNumber:t.line+1,columnNumber:t.column+1}}return null}getComponent(){return null}}let eV=function(e){if(e.__svelte_meta){let{loc:t}=e.__svelte_meta;return{thisElement:{box:e.getBoundingClientRect(),label:e.nodeName.toLowerCase(),link:{column:t.column+1,line:t.line+1,filePath:t.file,projectPath:""}},htmlElement:e,parentElements:[],componentBox:e.getBoundingClientRect(),componentsLabels:[]}}return null},eF=function(e){return eS(new eB(e))},ez=function(e){let t=[],r=e,o=1e4;do{if(r?.__svelte_meta){let{loc:e}=r.__svelte_meta;e.file!==t[t.length-1]?.link?.filePath&&t.push({title:r.nodeName.toLowerCase(),link:{column:e.column+1,line:e.line+1,filePath:e.file,projectPath:""}})}if(r=r.parentElement,--o<0)break}while(r)return t};function eG(e){let t=e.__vueParentComponent;if(t){if(!t.type)return null;let r=function e(t){let r=null;return t?.subTree?.children&&t?.subTree?.children instanceof Array&&t?.subTree?.children.forEach(t=>{var o;let n=(o=t).el instanceof HTMLElement?o.el.getBoundingClientRect():o.component?e(o.component):null;!n||n.width<=0||n.height<=0||(r=r?eE(r,n):n)}),r}(t),{__file:o,__name:n}=t.type;if(o&&n)return{thisElement:{box:e.getBoundingClientRect(),label:e.nodeName.toLowerCase(),link:{column:1,line:1,filePath:o,projectPath:""}},htmlElement:e,parentElements:[],componentBox:r||e.getBoundingClientRect(),componentsLabels:[{label:n,link:{column:1,line:1,filePath:o,projectPath:""}}]}}return null}class eU extends eO{getSource(){let e=this.element.__vueParentComponent;if(e&&e.type){let{__file:t}=e.type;if(t)return{fileName:t,lineNumber:1,columnNumber:1}}return null}getComponent(){return null}}let eX=function(e){return eS(new eU(e))},eW=function(e){let t=[],r=e,o=null;do{if(r){let e=eG(r),n=JSON.stringify(e?.componentsLabels);if(e&&n!==o){o=n;let r=e.thisElement.link,i=e.thisElement.label;r&&t.push({title:i,link:r})}}r=r.parentElement}while(r)return t};function eY(e,t){return"react"===t?eT(e):"svelte"===t?eV(e):"jsx"===t?e_(e):"vue"===t?eG(e):e_(e)||eT(e)||eV(e)||eG(e)}function eZ(e,t){return"react"===t&&eA?eA(e):"svelte"===t&&ez?ez(e):"vue"===t&&eW?eW(e):"jsx"===t&&eH?eH(e):(0,ep.detectSvelte)()&&ez?ez(e):(0,ep.detectVue)()&&eW?eW(e):(0,ep.detectReact)()&&eA?eA(e):(0,ep.detectJSX)()&&eH?eH(e):[]}var eq=K('<button class="py-1 px-1 hover:bg-white/30 pointer hover:text-gray-100 rounded">');function eJ(e){var t;return(t=eq()).$$click=t=>{t.preventDefault(),t.stopPropagation(),e.onClick()},el(t,()=>e.children),t}Q(["click"]);var eK=K('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"style=pointer-events:none><title>check-bold</title><path fill=green d=M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z>'),eQ=K('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"style=pointer-events:none><path fill=currentColor d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">');function e0(e){let[t,r]=x(!1);return z(eJ,{onClick:()=>{r(!0),setTimeout(()=>{r(!1)},2e3),e.onClick()},get children(){var o,n;return q(()=>!!t())()?(en(o=eK(),"width","16px"),en(o,"height","16px"),o):(en(n=eQ(),"width","16px"),en(n,"height","16px"),n)}})}var e1=e.i(34417),e2=e.i(19378);function e3(e,t){window.open(e,t.getOptions().hrefTarget)}function e4(e,t,r){let o=(0,e2.buildLink)(e,t,r);window.open(o,r.getOptions().hrefTarget||e1.HREF_TARGET)}function e5(e,t,r){return e3((0,e2.buildLinkFromSource)(e,t,r),r)}var e6=e.i(84845);let e9={id:o=Symbol("context"),Provider:(p=o,function(e){let t;return y(()=>t=k(()=>{let t,r;return f.context={...f.context,[p]:e.value},t=E(()=>e.children),(r=E(()=>(function e(t){if("function"==typeof t&&!t.length)return e(t());if(Array.isArray(t)){let r=[];for(let o=0;o<t.length;o++){let n=e(t[o]);Array.isArray(n)?r.push.apply(r,n):r.push(n)}return r}return t})(t()))).toArray=()=>{let e=r();return Array.isArray(e)?e:null!=e?[e]:[]},r}),void 0),t}),defaultValue:void 0};function e8(e){let t=function(){let[e,t]=x((0,e6.getStoredOptions)());function r(e){let r={...(0,e6.getStoredOptions)(),...e};(0,e6.setStoredOptions)(r),t(r)}return(0,e6.listenOnOptionsChanges)(e=>{t(e)}),window.addEventListener("message",e=>{e.source==window&&e.data.type&&"LOCATOR_EXTENSION_UPDATED_OPTIONS"==e.data.type&&t((0,e6.getStoredOptions)())},!1),window.enableLocator=()=>(r({disabled:!1}),"Locator enabled"),{setOptions:r,getOptions:e}}();return z(e9.Provider,{value:t,get children(){return e.children}})}function e7(){let e=L(e9);if(!e)throw Error("Options context is not provided");return e}var te=K('<div class="border border-purple-500"style=z-index:1><div id=locatorjs-labels-section style=justify-content:center;pointer-events:auto><div id=locatorjs-labels-wrapper>'),tt=K('<a class="cursor-pointer bg-purple-500 block text-white text-xs font-bold text-center px-1 py-0.5 rounded whitespace-nowrap pointer-events-auto hover:bg-purple-600">'),tr=K('<div class="cursor-pointer bg-purple-500 block text-white text-xs font-bold text-center px-1 py-0.5 rounded whitespace-nowrap pointer-events-auto hover:bg-purple-600">');function to(e){var t,r,o;let n=e7(),i=()=>e.bbox.height>=window.innerHeight-40,l=()=>e.bbox.y<30&&!i(),a=()=>Math.max(e.bbox.x-e1.PADDING,0),s=()=>Math.max(e.bbox.y-e1.PADDING,0),c=()=>Math.min(e.bbox.width-(e.bbox.x<0?-(e.bbox.x-e1.PADDING):0)+2*e1.PADDING,window.innerWidth),d=()=>Math.min(e.bbox.height-(e.bbox.y<0?-(e.bbox.y-e1.PADDING):0)+2*e1.PADDING,window.innerHeight);return o=(r=(t=te()).firstChild).firstChild,en(t,"position","fixed"),el(o,z(Y,{get each(){return e.labels},children:t=>{var r,o;let i=t.link?(0,e2.buildLink)(t.link,e.targets,n):null,l={"line-height":"18px"};return i?((r=tt()).$$click=()=>{eg(),e3(i,n)},ee(r,"href",i),el(r,()=>t.label),y(e=>{var t=n.getOptions().hrefTarget||e1.HREF_TARGET;return e.e=eo(r,l,e.e),t!==e.t&&ee(r,"target",e.t=t),e},{e:void 0,t:void 0}),r):(el(o=tr(),()=>t.label),y(e=>eo(o,l,e)),o)}})),y(e=>{var n=a()+"px",u=s()+"px",p=c()+"px",f=d()+"px",h=0===a()||0===s()?"0":"8px",g=a()+c()===window.innerWidth||0===s()?"0":"8px",m=0===a()||s()+d()===window.innerHeight?"0":"8px",b=a()+c()===window.innerWidth||s()+d()===window.innerHeight?"0":"8px",w={position:"absolute",display:"flex",bottom:l()?i()?"2px":"-28px":void 0,top:l()?void 0:i()?"2px":"-28px",left:"0px",width:"100%",cursor:"pointer",...l()?{"border-bottom-left-radius":"100%","border-bottom-right-radius":"100%"}:{"border-top-left-radius":"100%","border-top-right-radius":"100%"}},v=l()?"10px 10px 2px 10px":"2px 10px 10px 10px";return n!==e.e&&en(t,"left",e.e=n),u!==e.t&&en(t,"top",e.t=u),p!==e.a&&en(t,"width",e.a=p),f!==e.o&&en(t,"height",e.o=f),h!==e.i&&en(t,"border-top-left-radius",e.i=h),g!==e.n&&en(t,"border-top-right-radius",e.n=g),m!==e.s&&en(t,"border-bottom-left-radius",e.s=m),b!==e.h&&en(t,"border-bottom-right-radius",e.h=b),e.r=eo(r,w,e.r),v!==e.d&&en(o,"padding",e.d=v),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0}),t}Q(["click"]);var tn=K('<div class="fixed flex text-xs font-bold items-center justify-center text-blue-500 bg-blue-500/30"style="text-shadow:-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff">'),ti=K('<div class="fixed flex text-xs font-bold items-center justify-center text-orange-500 bg-orange-500/30"style="text-shadow:-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff">'),tl=K('<div class="fixed flex text-xs font-bold items-center justify-center text-green-500 bg-green-500/30"style="text-shadow:-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff">');function ta(e){var t;return[q(()=>Object.entries(e.allBoxes.margin).map(([,e])=>{var t;return t=ti(),y(r=>{var o=e.left+"px",n=e.top+"px",i=e.width+"px",l=e.height+"px";return o!==r.e&&en(t,"left",r.e=o),n!==r.t&&en(t,"top",r.t=n),i!==r.a&&en(t,"width",r.a=i),l!==r.o&&en(t,"height",r.o=l),r},{e:void 0,t:void 0,a:void 0,o:void 0}),t})),q(()=>Object.entries(e.allBoxes.padding).map(([,e])=>{var t;return t=tl(),y(r=>{var o=e.left+"px",n=e.top+"px",i=e.width+"px",l=e.height+"px";return o!==r.e&&en(t,"left",r.e=o),n!==r.t&&en(t,"top",r.t=n),i!==r.a&&en(t,"width",r.a=i),l!==r.o&&en(t,"height",r.o=l),r},{e:void 0,t:void 0,a:void 0,o:void 0}),t})),(el(t=tn(),()=>e.allBoxes.innerBox.label),y(r=>{var o=e.allBoxes.innerBox.left+"px",n=e.allBoxes.innerBox.top+"px",i=e.allBoxes.innerBox.width+"px",l=e.allBoxes.innerBox.height+"px";return o!==r.e&&en(t,"left",r.e=o),n!==r.t&&en(t,"top",r.t=n),i!==r.a&&en(t,"width",r.a=i),l!==r.o&&en(t,"height",r.o=l),r},{e:void 0,t:void 0,a:void 0,o:void 0}),t)]}var ts=K('<div class="group/tooltip relative block"><div role=tooltip>');function tc(e){var t,r;let o={bottom:"-bottom-7 left-1/2 -translate-x-1/2 transform",left:"-left-2 top-1/2 -translate-y-1/2 -translate-x-full transform",right:"-right-2 top-1/2 -translate-y-1/2 translate-x-full transform",top:"-top-7 left-1/2 -translate-x-1/2 transform"};return r=(t=ts()).firstChild,el(t,()=>e.children,r),el(r,()=>e.tooltipText),y(()=>et(r,"pointer-events-none invisible absolute z-10 whitespace-nowrap rounded bg-gray-700 px-2 py-1 text-center text-xs text-white opacity-0 transition-opacity duration-300 group-hover/tooltip:visible group-hover/tooltip:opacity-100 "+o[e.position||"top"])),t}var td=K('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"style=pointer-events:none><title>sitemap</title><path fill=currentColor d="M9,2V8H11V11H5C3.89,11 3,11.89 3,13V16H1V22H7V16H5V13H11V16H9V22H15V16H13V13H19V16H17V22H23V16H21V13C21,11.89 20.11,11 19,11H13V8H15V2H9Z">'),tu=K('<div><div class="fixed flex text-xs font-bold items-center justify-center text-sky-500 rounded border border-solid border-sky-500"style="z-index:2;text-shadow:-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff;text-overflow:ellipsis"><div class="absolute bg-black/60 text-white font-bold rounded-md px-1 py-1 flex"style=text-shadow:none;pointer-events:auto>'),tp=K('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"style=pointer-events:none><title>format-list-text</title><path fill=currentColor d="M2 14H8V20H2M16 8H10V10H16M2 10H8V4H2M10 4V6H22V4M10 20H16V18H10M10 16H22V14H10">');function tf(e){var t,r,o,n,i,l;let a,s=()=>{let t=e.element.htmlElement,r=e.element.thisElement.box;if(t&&r){let e=window.getComputedStyle(t),o={top:parseFloat(e.marginTop),left:parseFloat(e.marginLeft),right:parseFloat(e.marginRight),bottom:parseFloat(e.marginBottom)},n={top:parseFloat(e.paddingTop),left:parseFloat(e.paddingLeft),right:parseFloat(e.paddingRight),bottom:parseFloat(e.paddingBottom)};return{margin:{top:{top:r.y-o.top,left:r.x,width:r.width,height:o.top,label:th(o.top)},left:{top:r.y-o.top,left:r.x-o.left,width:o.left,height:r.height+o.top+o.bottom,label:th(o.left)},right:{top:r.y-o.top,left:r.x+r.width,width:o.right,height:r.height+o.top+o.bottom,label:th(o.right)},bottom:{top:r.y+r.height,left:r.x,width:r.width,height:o.bottom,label:th(o.bottom)}},padding:{top:{top:r.y,left:r.x,width:r.width,height:n.top,label:th(n.top)},left:{top:r.y+n.top,left:r.x,width:n.left,height:r.height-n.top-n.bottom,label:th(n.left)},right:{top:r.y+n.top,left:r.x+r.width-n.right,width:n.right,height:r.height-n.top-n.bottom,label:th(n.right)},bottom:{top:r.y+r.height-n.bottom,left:r.x,width:r.width,height:n.bottom,label:th(n.bottom)}},innerBox:{top:r.y+n.top,left:r.x+n.left,width:r.width-n.left-n.right,height:r.height-n.top-n.bottom,label:""}}}return null};return[(o=(r=(t=tu()).firstChild).firstChild,el(t,(n=q(()=>!!s()),()=>n()&&z(ta,{get allBoxes(){return s()}})),r),"function"==typeof(i=a)?ei(i,o):a=o,el(o,z(tc,{tooltipText:"Tree view",get children(){return z(eJ,{onClick:()=>{e.showTreeFromElement(e.element.htmlElement)},get children(){var c=td();return en(c,"width","16px"),en(c,"height","16px"),c}})}}),null),el(o,(l=q(()=>eZ(e.element.htmlElement).filter(e=>e.link).length>1),()=>l()&&z(tc,{tooltipText:"Parents",get children(){return z(eJ,{onClick:()=>{e.showParentsPath(e.element.htmlElement,e.element.thisElement.box.x+2,e.element.thisElement.box.y+20)},get children(){var t=tp();return en(t,"width","16px"),en(t,"height","16px"),t}})}})),null),el(o,z(tc,{tooltipText:"Copy path",get children(){return z(e0,{onClick:()=>{e.copyToClipboard(e.element.htmlElement)}})}}),null),el(r,()=>e.element.thisElement.label,null),y(t=>{let n,i;var l=e.element.thisElement.box.x+"px",s=e.element.thisElement.box.y+"px",c=e.element.thisElement.box.width+"px",d=e.element.thisElement.box.height+"px",u={...(n=a?.clientWidth||80,i={top:-16,left:0},e.element.thisElement.box.width<n&&(i.left=-n/2+e.element.thisElement.box.width/2-1),e.element.thisElement.box.height<40&&(i.top=-30),{top:i.top+"px",left:i.left+"px"})};return l!==t.e&&en(r,"left",t.e=l),s!==t.t&&en(r,"top",t.t=s),c!==t.a&&en(r,"width",t.a=c),d!==t.o&&en(r,"height",t.o=d),t.i=eo(o,u,t.i),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),t),q(()=>q(()=>e.element.componentsLabels.length>0)()&&z(to,{get labels(){return e.element.componentsLabels},get bbox(){return e.element.componentBox},get element(){return e.element.htmlElement},get showTreeFromElement(){return e.showTreeFromElement},get targets(){return e.targets}}))]}function th(e){return e?`${e}px`:""}var tg=K('<div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center"><div class="flex items-center justify-center"style="background-color:rgba(222, 0, 0, 0.3);border-radius:2px;font-size:12px;font-weight:bold;text-shadow:-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff;text-overflow:ellipsis">No source found');function tm(e){let t=E(()=>eY(e.currentElement,e.adapterId));return q(()=>{var r,o;return q(()=>!!t())()?z(tf,{get element(){return t()},get showTreeFromElement(){return e.showTreeFromElement},get showParentsPath(){return e.showParentsPath},get copyToClipboard(){return e.copyToClipboard},get targets(){return e.targets}}):(en(o=(r=tg()).firstChild,"position","absolute"),en(o,"border","1px solid rgba(222, 0, 0, 0.5)"),y(t=>{var r=e.currentElement.getBoundingClientRect().x+"px",n=e.currentElement.getBoundingClientRect().y+"px",i=e.currentElement.getBoundingClientRect().width+"px",l=e.currentElement.getBoundingClientRect().height+"px";return r!==t.e&&en(o,"left",t.e=r),n!==t.t&&en(o,"top",t.t=n),i!==t.a&&en(o,"width",t.a=i),l!==t.o&&en(o,"height",t.o=l),t},{e:void 0,t:void 0,a:void 0,o:void 0}),r)})}var tb=K("<div>");function tw(e){var t,r;let o=()=>2*("component"===e.node.type);return el(t=tb(),(r=q(()=>!!e.node.getBox()),()=>{var t;return r()?(en(t=tb(),"position","fixed"),y(r=>{var n=e.node.getBox().x-o()+"px",i=e.node.getBox().y-o()+"px",l=e.node.getBox().width+2*o()+"px",a=e.node.getBox().height+2*o()+"px",s="component"===e.node.type?"2px solid rgba(200,0,0,1)":"1px solid rgba(200,0,0,1)",c="component"===e.node.type?"5px":"3px",d="component"===e.node.type?1e3:10;return n!==r.e&&en(t,"left",r.e=n),i!==r.t&&en(t,"top",r.t=i),l!==r.a&&en(t,"width",r.a=l),a!==r.o&&en(t,"height",r.o=a),s!==r.i&&en(t,"border",r.i=s),c!==r.n&&en(t,"border-radius",r.n=c),d!==r.s&&en(t,"z-index",r.s=d),r},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),t):null})),t}function tv(){return"fixed left-3 bottom-3 bg-white shadow-lg rounded-lg py-3 px-3 border-2 border-red-500 transition-all pointer-events-auto"}var tx=K('<a class="hover:bg-slate-50 rounded"title=LocatorJS href=https://www.locatorjs.com target=_blank><svg width=276 height=66 viewBox="0 0 276 66"fill=none xmlns=http://www.w3.org/2000/svg><g clip-path=url(#clip0_12_2)><path d="M81.2989 47.0524H95.4743V51H76.8579V19.2399H81.2989V47.0524ZM120.289 40.3236C120.289 41.9684 119.99 43.4787 119.391 44.8543C118.823 46.23 118.016 47.4262 116.969 48.443C115.952 49.4299 114.741 50.2075 113.336 50.7757C111.93 51.314 110.42 51.5832 108.805 51.5832C107.19 51.5832 105.68 51.314 104.274 50.7757C102.868 50.2075 101.657 49.4299 100.64 48.443C99.6237 47.4262 98.8162 46.23 98.2181 44.8543C97.6499 43.4787 97.3658 41.9684 97.3658 40.3236C97.3658 38.6787 97.6499 37.1834 98.2181 35.8377C98.8162 34.462 99.6237 33.2807 100.64 32.2938C101.657 31.3069 102.868 30.5443 104.274 30.006C105.68 29.4378 107.19 29.1537 108.805 29.1537C110.42 29.1537 111.93 29.4378 113.336 30.006C114.741 30.5443 115.952 31.3069 116.969 32.2938C118.016 33.2807 118.823 34.462 119.391 35.8377C119.99 37.1834 120.289 38.6787 120.289 40.3236ZM115.893 40.3236C115.893 39.3068 115.728 38.3348 115.399 37.4077C115.1 36.4807 114.651 35.6732 114.053 34.9854C113.455 34.2676 112.708 33.6994 111.81 33.2807C110.943 32.862 109.941 32.6527 108.805 32.6527C107.668 32.6527 106.652 32.862 105.754 33.2807C104.887 33.6994 104.154 34.2676 103.556 34.9854C102.958 35.6732 102.495 36.4807 102.166 37.4077C101.867 38.3348 101.717 39.3068 101.717 40.3236C101.717 41.3404 101.867 42.3123 102.166 43.2394C102.495 44.1665 102.958 44.9889 103.556 45.7066C104.154 46.4244 104.887 46.9926 105.754 47.4113C106.652 47.83 107.668 48.0393 108.805 48.0393C109.941 48.0393 110.943 47.83 111.81 47.4113C112.708 46.9926 113.455 46.4244 114.053 45.7066C114.651 44.9889 115.1 44.1665 115.399 43.2394C115.728 42.3123 115.893 41.3404 115.893 40.3236ZM141.029 35.1199C140.581 34.4321 139.908 33.8639 139.011 33.4153C138.113 32.9368 137.156 32.6976 136.14 32.6976C135.033 32.6976 134.046 32.9069 133.179 33.3256C132.342 33.7443 131.624 34.3125 131.026 35.0302C130.428 35.7181 129.964 36.5255 129.635 37.4526C129.336 38.3797 129.187 39.3516 129.187 40.3684C129.187 41.3852 129.336 42.3572 129.635 43.2843C129.964 44.2113 130.428 45.0338 131.026 45.7515C131.624 46.4393 132.357 46.9926 133.224 47.4113C134.091 47.83 135.078 48.0393 136.185 48.0393C137.261 48.0393 138.233 47.83 139.1 47.4113C139.998 46.9926 140.73 46.4244 141.298 45.7066L144.125 48.2636C143.227 49.3103 142.106 50.1327 140.76 50.7308C139.414 51.2991 137.889 51.5832 136.185 51.5832C134.54 51.5832 133.014 51.314 131.609 50.7757C130.233 50.2374 129.037 49.4897 128.02 48.5328C127.003 47.5459 126.196 46.3646 125.598 44.9889C125.03 43.6132 124.745 42.0731 124.745 40.3684C124.745 38.6937 125.03 37.1685 125.598 35.7928C126.166 34.4171 126.959 33.2359 127.975 32.249C128.992 31.2621 130.188 30.4995 131.564 29.9612C132.97 29.4229 134.48 29.1537 136.095 29.1537C137.59 29.1537 139.07 29.4528 140.536 30.0509C142.031 30.649 143.212 31.5163 144.08 32.6527L141.029 35.1199ZM161.536 37.2283C161.536 35.6433 161.058 34.477 160.101 33.7293C159.144 32.9518 157.873 32.563 156.288 32.563C155.091 32.563 153.955 32.8022 152.878 33.2807C151.832 33.7293 150.949 34.3125 150.232 35.0302L147.989 32.3387C149.035 31.3518 150.306 30.5742 151.802 30.006C153.327 29.4378 154.957 29.1537 156.691 29.1537C158.217 29.1537 159.532 29.378 160.639 29.8266C161.775 30.2453 162.702 30.8284 163.42 31.5761C164.138 32.3237 164.676 33.206 165.035 34.2228C165.394 35.2396 165.573 36.3311 165.573 37.4975V46.7833C165.573 47.501 165.588 48.2636 165.618 49.0711C165.678 49.8486 165.768 50.4916 165.887 51H162.074C161.835 49.9832 161.716 48.9664 161.716 47.9496H161.581C160.803 49.086 159.817 49.9682 158.62 50.5963C157.454 51.2243 156.063 51.5383 154.448 51.5383C153.611 51.5383 152.729 51.4187 151.802 51.1794C150.905 50.9701 150.082 50.6112 149.334 50.1028C148.587 49.5944 147.959 48.9215 147.45 48.0842C146.972 47.2468 146.733 46.215 146.733 44.9889C146.733 43.374 147.166 42.103 148.034 41.1759C148.901 40.2189 150.037 39.5012 151.443 39.0227C152.848 38.5143 154.433 38.1853 156.198 38.0358C157.962 37.8862 159.742 37.8115 161.536 37.8115V37.2283ZM160.504 40.8619C159.458 40.8619 158.366 40.9067 157.23 40.9965C156.123 41.0862 155.106 41.2656 154.179 41.5348C153.282 41.8039 152.534 42.2076 151.936 42.746C151.338 43.2843 151.039 44.002 151.039 44.8992C151.039 45.5272 151.159 46.0506 151.398 46.4692C151.667 46.8879 152.011 47.2318 152.43 47.501C152.848 47.7702 153.312 47.9645 153.82 48.0842C154.329 48.1739 154.852 48.2187 155.39 48.2187C157.364 48.2187 158.874 47.6356 159.921 46.4692C160.998 45.273 161.536 43.7777 161.536 41.9834V40.8619H160.504ZM182.585 33.191H176.933V44.2712C176.933 45.5571 177.172 46.4842 177.651 47.0524C178.129 47.5907 178.892 47.8599 179.938 47.8599C180.327 47.8599 180.746 47.815 181.194 47.7253C181.643 47.6356 182.047 47.501 182.406 47.3216L182.54 50.7757C182.032 50.9551 181.464 51.0897 180.836 51.1794C180.237 51.2991 179.609 51.3589 178.952 51.3589C176.948 51.3589 175.408 50.8056 174.331 49.6991C173.284 48.5926 172.761 46.9328 172.761 44.7197V33.191H168.679V29.7369H172.761V23.6361H176.933V29.7369H182.585V33.191ZM208.473 40.3236C208.473 41.9684 208.174 43.4787 207.576 44.8543C207.008 46.23 206.2 47.4262 205.154 48.443C204.137 49.4299 202.926 50.2075 201.52 50.7757C200.115 51.314 198.604 51.5832 196.989 51.5832C195.374 51.5832 193.864 51.314 192.459 50.7757C191.053 50.2075 189.842 49.4299 188.825 48.443C187.808 47.4262 187.001 46.23 186.403 44.8543C185.834 43.4787 185.55 41.9684 185.55 40.3236C185.55 38.6787 185.834 37.1834 186.403 35.8377C187.001 34.462 187.808 33.2807 188.825 32.2938C189.842 31.3069 191.053 30.5443 192.459 30.006C193.864 29.4378 195.374 29.1537 196.989 29.1537C198.604 29.1537 200.115 29.4378 201.52 30.006C202.926 30.5443 204.137 31.3069 205.154 32.2938C206.2 33.2807 207.008 34.462 207.576 35.8377C208.174 37.1834 208.473 38.6787 208.473 40.3236ZM204.077 40.3236C204.077 39.3068 203.913 38.3348 203.584 37.4077C203.285 36.4807 202.836 35.6732 202.238 34.9854C201.64 34.2676 200.892 33.6994 199.995 33.2807C199.128 32.862 198.126 32.6527 196.989 32.6527C195.853 32.6527 194.836 32.862 193.939 33.2807C193.072 33.6994 192.339 34.2676 191.741 34.9854C191.143 35.6732 190.679 36.4807 190.35 37.4077C190.051 38.3348 189.902 39.3068 189.902 40.3236C189.902 41.3404 190.051 42.3123 190.35 43.2394C190.679 44.1665 191.143 44.9889 191.741 45.7066C192.339 46.4244 193.072 46.9926 193.939 47.4113C194.836 47.83 195.853 48.0393 196.989 48.0393C198.126 48.0393 199.128 47.83 199.995 47.4113C200.892 46.9926 201.64 46.4244 202.238 45.7066C202.836 44.9889 203.285 44.1665 203.584 43.2394C203.913 42.3123 204.077 41.3404 204.077 40.3236ZM214.321 34.3125C214.321 33.7443 214.306 33.0116 214.276 32.1144C214.246 31.2172 214.201 30.4247 214.141 29.7369H218.134C218.194 30.2752 218.238 30.9032 218.268 31.6209C218.298 32.3088 218.313 32.877 218.313 33.3256H218.448C219.046 32.0695 219.913 31.0677 221.05 30.32C222.216 29.5425 223.517 29.1537 224.952 29.1537C225.61 29.1537 226.163 29.2135 226.612 29.3331L226.433 33.2359C225.835 33.0863 225.192 33.0116 224.504 33.0116C223.487 33.0116 222.605 33.206 221.857 33.5947C221.109 33.9536 220.481 34.4471 219.973 35.0751C219.494 35.7031 219.136 36.4358 218.896 37.2732C218.657 38.0806 218.537 38.9329 218.537 39.8301V51H214.321V34.3125ZM231.74 43.9123C231.979 45.0487 232.502 45.9908 233.31 46.7384C234.117 47.4861 235.119 47.8599 236.315 47.8599C237.272 47.8599 238.05 47.6804 238.648 47.3216C239.276 46.9627 239.769 46.4842 240.128 45.8861C240.487 45.2581 240.741 44.5403 240.891 43.7329C241.04 42.8955 241.115 42.0133 241.115 41.0862V19.2399H245.556V41.2656C245.556 42.3721 245.437 43.5385 245.197 44.7646C244.958 45.9908 244.509 47.1272 243.852 48.1739C243.194 49.2206 242.267 50.0879 241.07 50.7757C239.904 51.4635 238.394 51.8075 236.54 51.8075C234.117 51.8075 232.143 51.1794 230.618 49.9234C229.093 48.6673 228.091 47.0524 227.613 45.0786L231.74 43.9123ZM268.798 25.1164C268.17 24.2491 267.318 23.5463 266.241 23.008C265.165 22.4398 263.954 22.1557 262.608 22.1557C261.89 22.1557 261.157 22.2604 260.41 22.4697C259.692 22.6492 259.034 22.9632 258.436 23.4118C257.838 23.8304 257.344 24.3687 256.956 25.0267C256.597 25.6547 256.417 26.4173 256.417 27.3145C256.417 28.1818 256.582 28.9145 256.911 29.5126C257.27 30.0808 257.733 30.5742 258.301 30.9929C258.9 31.3817 259.587 31.7256 260.365 32.0247C261.172 32.2938 262.025 32.5779 262.922 32.877C263.998 33.206 265.09 33.5798 266.197 33.9985C267.303 34.4171 268.305 34.9704 269.202 35.6582C270.099 36.3461 270.832 37.2134 271.4 38.2601C271.968 39.2769 272.253 40.5778 272.253 42.1628C272.253 43.8076 271.939 45.2431 271.31 46.4692C270.712 47.6655 269.905 48.6673 268.888 49.4748C267.871 50.2524 266.69 50.8355 265.344 51.2243C264.028 51.6131 262.668 51.8075 261.262 51.8075C259.258 51.8075 257.314 51.4187 255.43 50.6411C253.576 49.8636 252.036 48.7122 250.81 47.187L254.264 44.2712C255.012 45.3777 256.014 46.2749 257.27 46.9627C258.526 47.6505 259.886 47.9945 261.352 47.9945C262.099 47.9945 262.847 47.8898 263.595 47.6804C264.342 47.4711 265.015 47.1421 265.613 46.6935C266.241 46.245 266.75 45.6917 267.139 45.0338C267.527 44.3459 267.722 43.5235 267.722 42.5665C267.722 41.6095 267.512 40.817 267.094 40.189C266.705 39.5311 266.167 38.9778 265.479 38.5292C264.791 38.0806 263.984 37.7068 263.056 37.4077C262.159 37.0788 261.202 36.7498 260.185 36.4208C259.169 36.1218 258.167 35.7629 257.18 35.3442C256.193 34.8956 255.311 34.3424 254.533 33.6845C253.756 32.9966 253.128 32.1592 252.649 31.1724C252.171 30.1855 251.931 28.9593 251.931 27.4939C251.931 25.9089 252.245 24.5482 252.873 23.4118C253.531 22.2753 254.369 21.3333 255.386 20.5856C256.432 19.838 257.599 19.2997 258.885 18.9707C260.2 18.6118 261.516 18.4324 262.832 18.4324C264.686 18.4324 266.421 18.7614 268.036 19.4193C269.651 20.0772 270.952 20.9595 271.939 22.066L268.798 25.1164Z"fill=black></path><path fill-rule=evenodd clip-rule=evenodd d="M10.3286 4.8189C13.8092 2.60154 18.3151 2.12833 26 2.02734V7.02796C23.318 7.06363 21.125 7.14462 19.2499 7.32846C16.0346 7.64367 14.2912 8.22292 13.0151 9.03586C11.4141 10.0558 10.0559 11.414 9.03592 13.015C8.22299 14.2911 7.64373 16.0346 7.32852 19.2498C7.14468 21.1249 7.06369 23.318 7.02803 25.9999H2.0274C2.12839 18.3151 2.6016 13.8091 4.81896 10.3286C6.23121 8.11176 8.11182 6.23115 10.3286 4.8189ZM2.0274 39.9999H7.02803C7.06369 42.6819 7.14468 44.875 7.32852 46.7501C7.64373 49.9653 8.22299 51.7088 9.03592 52.9848C10.0559 54.5859 11.4141 55.9441 13.0151 56.964C14.2912 57.777 16.0346 58.3562 19.2499 58.6714C21.125 58.8553 23.318 58.9363 26 58.9719V63.9725C18.3151 63.8716 13.8092 63.3983 10.3286 61.181C8.11182 59.7687 6.23121 57.8881 4.81896 55.6713C2.6016 52.1908 2.12839 47.6848 2.0274 39.9999ZM40 63.9725C47.6849 63.8716 52.1908 63.3983 55.6714 61.181C57.8882 59.7687 59.7688 57.8881 61.181 55.6713C63.3984 52.1908 63.8716 47.6848 63.9726 39.9999H58.972C58.9363 42.6819 58.8553 44.875 58.6715 46.7501C58.3563 49.9653 57.777 51.7088 56.9641 52.9848C55.9441 54.5859 54.5859 55.9441 52.9849 56.964C51.7089 57.777 49.9654 58.3562 46.7502 58.6714C44.875 58.8553 42.682 58.9363 40 58.9719V63.9725ZM58.972 25.9999C58.9363 23.318 58.8553 21.1249 58.6715 19.2498C58.3563 16.0346 57.777 14.2911 56.9641 13.015C55.9441 11.414 54.5859 10.0558 52.9849 9.03586C51.7089 8.22292 49.9654 7.64367 46.7502 7.32846C44.875 7.14462 42.682 7.06363 40 7.02796V2.02734C47.6849 2.12833 52.1908 2.60154 55.6714 4.8189C57.8882 6.23115 59.7688 8.11176 61.181 10.3286C63.3984 13.8091 63.8716 18.3151 63.9726 25.9999H58.972Z"fill=url(#paint0_linear_12_2)></path><path d="M13.08 34.5427C13.08 34.866 13.274 35.1578 13.5721 35.283L25.3232 40.2171C25.8523 40.4393 26.4369 40.0507 26.4369 39.4768V37.0538C26.4369 36.7189 26.229 36.4191 25.9153 36.3018L17.8431 33.2822C17.7912 33.2628 17.7568 33.2132 17.7568 33.1577C17.7568 33.1022 17.7912 33.0526 17.8432 33.0332L25.9146 30.0225C26.2286 29.9054 26.4369 29.6055 26.4369 29.2703V26.8385C26.4369 26.2647 25.8523 25.8761 25.3232 26.0983L13.5721 31.0324C13.274 31.1576 13.08 31.4494 13.08 31.7727V34.5427Z"fill=#160101></path><path d="M38.5829 22.0116C38.7202 21.5014 38.3359 21 37.8076 21H35.624C35.2609 21 34.943 21.2436 34.8487 21.5942L29.1928 42.6065C29.0555 43.1167 29.4398 43.6181 29.9681 43.6181H32.1517C32.5148 43.6181 32.8327 43.3745 32.927 43.0239L38.5829 22.0116Z"fill=#160101></path><path d="M54.2036 35.283C54.5017 35.1578 54.6957 34.866 54.6957 34.5427V31.7727C54.6957 31.4494 54.5017 31.1576 54.2036 31.0324L42.4525 26.0983C41.9234 25.8761 41.3388 26.2647 41.3388 26.8385V29.2706C41.3388 29.6056 41.5468 29.9054 41.8607 30.0227L49.9503 33.0456C49.9971 33.0631 50.0282 33.1078 50.0282 33.1577C50.0282 33.2076 49.9972 33.2523 49.9505 33.2698L41.86 36.3016C41.5465 36.4191 41.3388 36.7187 41.3388 37.0534V39.4768C41.3388 40.0507 41.9234 40.4393 42.4525 40.2171L54.2036 35.283Z"fill=#160101></path></g><defs><linearGradient id=paint0_linear_12_2 x1=2.0274 y1=2.02734 x2=46.9876 y2=47.4871 gradientUnits=userSpaceOnUse><stop stop-color=#1909D1></stop><stop offset=1 stop-color=#DC0E0E></stop></linearGradient><clipPath id=clip0_12_2><rect width=276 height=66 fill=white>');function ty(e){var t,r;let o=function(...e){let t=!1;for(let r=0;r<e.length;r++){let o=e[r];t=t||!!o&&l in o,e[r]="function"==typeof o?(t=!0,E(o)):o}if(a&&t)return new Proxy({get(t){for(let r=e.length-1;r>=0;r--){let o=X(e[r])[t];if(void 0!==o)return o}},has(t){for(let r=e.length-1;r>=0;r--)if(t in X(e[r]))return!0;return!1},keys(){let t=[];for(let r=0;r<e.length;r++)t.push(...Object.keys(X(e[r])));return[...new Set(t)]}},U);let r={},o=Object.create(null);for(let t=e.length-1;t>=0;t--){let n=e[t];if(!n)continue;let i=Object.getOwnPropertyNames(n);for(let e=i.length-1;e>=0;e--){let t=i[e];if("__proto__"===t||"constructor"===t)continue;let l=Object.getOwnPropertyDescriptor(n,t);if(o[t]){let e=r[t];e&&(l.get?e.push(l.get.bind(n)):void 0!==l.value&&e.push(()=>l.value))}else o[t]=l.get?{enumerable:!0,configurable:!0,get:W.bind(r[t]=[l.get.bind(n)])}:void 0!==l.value?l:void 0}}let n={},i=Object.keys(o);for(let e=i.length-1;e>=0;e--){let t=i[e],r=o[t];r&&r.get?Object.defineProperty(n,t,r):n[t]=r?r.value:void 0}return n}({width:90},e);return r=(t=tx()).firstChild,t.$$click=e=>{e.preventDefault(),window.open("https://www.locatorjs.com","_blank")},y(e=>{var t=o.width+"px",n=o.width/276*66+"px";return t!==e.e&&en(r,"width",e.e=t),n!==e.t&&en(r,"height",e.t=n),e},{e:void 0,t:void 0}),t}Q(["click"]);var tC=e.i(34955),tE=K('<button class="bg-slate-100 py-1 px-2 rounded hover:bg-slate-300 active:bg-slate-200 cursor-pointer text-xs">');function tk(e){var t;return er(t=tE(),"click",()=>{e.onClick()}),el(t,()=>e.title||"Settings"),t}var tS=K('<div class="flex justify-between gap-2">');function t$(e){var t,r;return el(t=tS(),z(ty,{}),null),el(t,(r=q(()=>!!e.openOptions),()=>r()?z(tk,{onClick:()=>{e.openOptions()},get title(){return(0,tC.isExtension)()?"Project settings":"Settings"}}):null),null),t}var tL=K('<div><div class="text-sm mt-2 mb-1">Go to component code with <!> + <div class="inline-block px-1 py-0.5 border border-slate-200 rounded">click</div> </div><div class="text-xs mt-2 mb-1 text-gray-600 flex gap-1"><a class="underline cursor-pointer"href=https://www.locatorjs.com target=_blank>What is Locator?</a><a class="underline cursor-pointer">Stop showing this popup'),tO=K('<div class="inline-block px-1 py-0.5 border border-slate-200 rounded">');function tI(e){var t,r,o,n;let i=e7(),[l,a]=x(!0);return setTimeout(()=>{a(!1)},5e3),C(()=>{e.hide&&l()&&a(!1)}),n=((o=(r=(t=tL()).firstChild).firstChild.nextSibling).nextSibling,r.nextSibling).firstChild.nextSibling,el(t,z(t$,{get openOptions(){return e.openOptions},get adapter(){return e.adapter}}),r),el(r,z(Y,{get each(){return Object.keys(ef())},children:(e,t)=>{var r;return[q(()=>0===t()?"":" + "),(el(r=tO(),()=>ep.modifiersTitles[e]),r)]}}),o),n.$$click=()=>{i.setOptions({showIntro:!1})},y(e=>{var r=tv(),o=l()?"12px":"-120px";return r!==e.e&&et(t,e.e=r),o!==e.t&&en(t,"bottom",e.t=o),e},{e:void 0,t:void 0}),t}Q(["click"]);var tR=K('<button class="w-6 h-6 rounded hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600"><svg viewBox="0 0 24 24"><path fill=currentColor d=M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z>');function tT(e){var t,r;return r=(t=tR()).firstChild,t.$$click=()=>e.onClick(),en(r,"width","20px"),en(r,"height","20px"),t}Q(["click"]);var tN=K('<div class="mt-2 border border-gray-200 rounded p-4 flex flex-col gap-1"><div class="flex justify-between self-stretch text-sm"><div>Editor / Link template</div><a class="underline cursor-pointer"></a></div><div class="text-xs text-gray-700">Change your editor for this project. For less common editors, you can change the link template.'),tA=K('<div class="flex flex-col gap-1 py-1"><div class="flex items-center"><input id=custom type=radio class="focus:ring-indigo-200 h-4 w-4 text-indigo-600 border-slate-300 hover:border-slate-400"><label for=custom class="ml-2 block text-sm font-medium text-slate-700 hover:text-slate-800">Custom'),tP=K('<div class="flex items-center"><input type=radio class="focus:ring-indigo-200 h-4 w-4 text-indigo-600 border-slate-300 hover:border-slate-400"><label class="ml-2 block text-sm font-medium text-slate-700 hover:text-slate-800">'),tj=K("<div class=mt-1><input type=text name=text>");function t_(e){var t,r,o,n;function i(){e.selectTarget((e.targets[e.selectedTarget||""]?e.targets[e.selectedTarget||""]?.url:e.selectedTarget||"")||"")}let l=()=>!e.targets[e.selectedTarget||""];return o=(r=(t=tN()).firstChild).firstChild.nextSibling,r.nextSibling,o.$$click=()=>{void 0===e.selectedTarget?e.selectTarget(Object.entries(e.targets)[0][0]):e.selectTarget(void 0)},el(o,()=>void 0===e.selectedTarget?"edit":"clear"),el(t,(n=q(()=>void 0!==e.selectedTarget),()=>{var t,r,o;return n()?[(o=(r=(t=tA()).firstChild).firstChild,el(t,z(Y,{get each(){return Object.entries(e.targets)},children:([t,r])=>{var o,n,i;return i=(n=(o=tP()).firstChild).nextSibling,n.$$click=()=>{e.selectTarget(t)},ee(n,"id",t),ee(i,"for",t),el(i,()=>r.label),y(()=>n.checked=t===(e.selectedTarget||"")),o}}),r),o.$$click=()=>{i()},y(()=>o.checked=l()),t),q(()=>{var t,r;return q(()=>!!l())()&&((r=(t=tj()).firstChild).$$input=t=>{e.selectTarget(t.currentTarget.value)},r.$$click=()=>{e.targets[e.selectedTarget||""]&&i()},y(()=>et(r,"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-300 rounded-md "+(e.targets[e.selectedTarget||""]?"text-slate-400":"text-slate-800"))),y(()=>r.value=e.targets[e.selectedTarget||""]?e.targets[e.selectedTarget||""]?.url:e.selectedTarget||""),t)})]:null}),null),t}Q(["click","input"]);var tM=K('<div class="mt-2 border border-gray-200 rounded p-4 flex flex-col gap-1"><div class="flex justify-between self-stretch text-sm"><div>Project path (prefix)</div><a class="underline cursor-pointer"></a></div><div class="text-xs text-gray-700">If your framework generates relative paths, you can add a prefix to it to make absolute paths.'),tD=K('<div class="py-2 flex flex-col gap-2"><input id=project-path placeholder="e.g. /Users/MyName/MyProject"type=text name=text class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-300 rounded-md"><div class="text-xs text-slate-700 pt-2">Run <code class="bg-slate-100 rounded py-1 px-2">pwd</code> or <code class="bg-slate-100 rounded py-1 px-2">echo %cd%</code> to get the current path');function tH(e){var t,r,o,n;return o=(r=(t=tM()).firstChild).firstChild.nextSibling,r.nextSibling,o.$$click=()=>{void 0===e.value?e.onChange(""):e.onChange(void 0)},el(o,()=>void 0===e.value?"edit":"clear"),el(t,(n=q(()=>void 0!==e.value),()=>{var t,r;return n()?((r=(t=tD()).firstChild).$$input=t=>{e.onChange(t.currentTarget.value)},y(()=>r.value=e.value),t):[]}),null),t}Q(["click","input"]);var tB=K('<div class="mt-2 border border-gray-200 rounded p-4 flex flex-col gap-1"><div class="flex justify-between self-stretch text-sm"><div>Transform final link</div><a class="underline cursor-pointer"></a></div><div class="text-xs text-gray-700">In case you need to change something in the final generated link you can find and replace parts with Regex'),tV=K('<div class=py-2><div class="flex gap-2"><div class=grow><label for=project-path class="block text-sm text-slate-700 pb-0.5 font-bold">From (Regex)</label><input id=project-path placeholder="from regex"type=text name=text class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-300 rounded-md"></div><div class=grow><label for=project-path class="block text-sm text-slate-700 pb-0.5 font-bold">To</label><input id=project-path placeholder=to type=text name=text class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-300 rounded-md">'),tF=K('<div class="text-red-600 mt-1 text-sm">Regex is not valid!');let tz={from:"",to:""};function tG(e){var t,r,o,n;return o=(r=(t=tB()).firstChild).firstChild.nextSibling,r.nextSibling,o.$$click=()=>{void 0===e.value?e.onChange(tz):e.onChange(void 0)},el(o,()=>void 0===e.value?"edit":"clear"),el(t,(n=q(()=>void 0!==e.value),()=>{var t,r,o,i,l;return n()?(o=(r=(t=tV()).firstChild.firstChild).firstChild.nextSibling,i=r.nextSibling.firstChild.nextSibling,o.$$input=t=>{e.onChange({...e.value||tz,from:t.currentTarget.value})},i.$$input=t=>{e.onChange({...e.value||tz,to:t.currentTarget.value})},el(t,(l=q(()=>!!(()=>{if(!e.value||!e.value.from)return!1;try{RegExp(`${e.value.from}`)}catch(e){return!0}return!1})()),()=>l()?tF():null),null),y(()=>o.value=e.value.from),y(()=>i.value=e.value.to),t):null}),null),t}Q(["click","input"]);var tU=K('<div class="mt-2 border border-gray-200 rounded p-4 flex flex-col gap-1"><div class="flex justify-between self-stretch text-sm"><div>Link Href Target</div><a class="underline cursor-pointer">'),tX=K('<div class="text-xs text-gray-700">Hot-reloading On some stacks (e.g. Create React App) gets broken when you use _blank as the target. You can change the target to _self to fix this. <br>Some browsers open unnecessary tabs when you use _blank.'),tW=K('<div class="flex flex-col gap-1 py-1">'),tY=K('<div class="flex items-center"><input type=radio class="focus:ring-indigo-200 h-4 w-4 text-indigo-600 border-slate-300 hover:border-slate-400"><label class="ml-2 block text-sm font-medium text-slate-700 hover:text-slate-800">');let tZ=["_blank","_self"];function tq(e){var t,r,o;return(r=(t=tU()).firstChild.firstChild.nextSibling).$$click=()=>{void 0===e.value?e.onChange(e1.HREF_TARGET):e.onChange(void 0)},el(r,()=>void 0===e.value?"edit":"clear"),el(t,(o=q(()=>void 0!==e.value),()=>{var t;return o()?[tX(),(el(t=tW(),z(Y,{get each(){return Object.entries(tZ)},children:([t,r])=>{var o,n,i;return i=(n=(o=tY()).firstChild).nextSibling,n.$$click=()=>{e.onChange(t)},ee(n,"id",t),ee(i,"for",t),el(i,r),y(()=>n.checked=t===(e.value||"")),o}})),t)]:null}),null),t}Q(["click"]);var tJ=K('<div><div class=mt-4><div class="text-sm flex flex-col bg-green-50 text-green-800 p-4 -mx-4 rounded whitespace-pre-wrap break-all"><label for=email class="block text-xs text-green-700">Link preview:'),tK=K("<a class=hover:underline>");function tQ(e){var t,r,o,n;let i=e7();function l(){return i.getOptions().templateOrTemplateId}let a=()=>e.linkProps?(0,e2.buildLink)(e.linkProps,e.targets,i,l()):void 0;return(o=(r=(t=tJ()).firstChild).firstChild).firstChild,el(t,z(tH,{get value(){return i.getOptions().projectPath},onChange:function(e){i.setOptions({projectPath:e})}}),r),el(t,z(tG,{get value(){return i.getOptions().replacePath},onChange:e=>{i.setOptions({replacePath:e})}}),r),el(t,z(t_,{get targets(){return e.targets},get selectedTarget(){return l()},selectTarget:function(e){i.setOptions({templateOrTemplateId:e})}}),r),el(t,z(tq,{get value(){return i.getOptions().hrefTarget},onChange:e=>{i.setOptions({hrefTarget:e})}}),r),el(o,(n=q(()=>!!a()),()=>{var e;return n()?(el(e=tK(),a),y(t=>{var r=a(),o=i.getOptions().hrefTarget||e1.HREF_TARGET;return r!==t.e&&ee(e,"href",t.e=r),o!==t.t&&ee(e,"target",t.t=o),t},{e:void 0,t:void 0}),e):"To test the link, try to hover over some element."}),null),t}var t0=K('<div><div class=p-1><div class="flex justify-between items-center"></div><div class="flex gap-2 justify-between mt-4"><button class="bg-slate-100 py-1 px-2 rounded hover:bg-slate-300 active:bg-slate-200 cursor-pointer text-xs">Reset settings</button><button class="bg-red-50 py-1 px-2 rounded hover:bg-red-200 active:bg-red-100 cursor-pointer text-xs text-red-800 flex gap-1"><svg viewBox="0 0 24 24"><path fill=currentColor d="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13"></path></svg> Disable Locator');function t1(e){var t,r,o,n,i,l,a;let s=e7(),c=E(()=>e.currentElement&&eY(e.currentElement,e.adapterId)?.thisElement.link||null);return a=(l=(i=(n=(o=(r=(t=t0()).firstChild).firstChild).nextSibling).firstChild).nextSibling).firstChild,el(o,z(ty,{}),null),el(o,z(tT,{onClick:()=>e.onClose()}),null),el(r,z(tQ,{get linkProps(){return c()},get adapterId(){return e.adapterId},get targets(){return e.targets}}),n),i.$$click=()=>{(0,e6.cleanOptions)(),e.onClose()},l.$$click=()=>{(0,tC.isExtension)()?(s.setOptions({disabled:!0}),e.onClose()):e.showDisableDialog()},en(a,"width","16px"),en(a,"height","16px"),y(()=>et(t,tv()+" w-[560px] max-w-full overflow-hidden")),t}Q(["click"]);var t2=K("<a target=_blank class=underline>");function t3(e){var t;return(t=t2()).$$click=t=>{t.preventDefault(),window.open(e.href,"_blank")},el(t,()=>e.children),y(()=>ee(t,"href",e.href)),t}Q(["click"]);var t4=K('<div class="bg-white p-4 rounded-xl border-2 border-red-500 shadow-xl cursor-auto pointer-events-auto z-10"><div class="mt-2 font-bold">No source info found for this element!</div><div class=text-gray-700><p class="font-medium text-gray-900 mt-2 mb-1">You need one of these:</p><ul class="pl-4 list-disc"><li>Working React in development mode, with </li><li>React, SolidJS or Preact with Locator Babel plugin</li></ul><p class="font-medium text-gray-900 mt-2 mb-1">Setup babel plugin:</p><div><ul class="pl-4 list-disc"><li></li><li></li><li>');function t5(){var e,t,r,o,n,i,l;return l=(i=(n=((o=(r=(t=(e=t4()).firstChild).nextSibling.firstChild.nextSibling).firstChild).firstChild,r.nextSibling).nextSibling.firstChild.firstChild).nextSibling).nextSibling,el(e,z(ty,{}),t),el(o,z(t3,{href:"https://babeljs.io/docs/en/babel-preset-react",children:"preset-react plugins"}),null),el(n,z(t3,{href:"https://www.locatorjs.com/install/react-data-id",children:"React"})),el(i,z(t3,{href:"https://www.locatorjs.com/install/preact",children:"Preact"})),el(l,z(t3,{href:"https://www.locatorjs.com/install/solidjs",children:"SolidJS"})),e}var t6=K('<div class="bg-white p-4 rounded-xl border-2 border-red-500 shadow-xl cursor-auto pointer-events-auto z-10 max-w-xl max-h-full overflow-auto"><div class="mt-2 mb-4"><h1 class="text-2xl font-bold">Welcome to Locator!</h1><span class=text-sm>Before using Locator, let\'s try links in your project and fix them if needed.</span></div><div class="mt-4 flex gap-2 justify-between items-center"><div class="text-sm text-gray-600"></div><div class="flex gap-2"><a class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Test link</a><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Confirm');function t9(e){var t,r,o,n;let i=e7();return n=(o=(r=(t=t6()).firstChild.nextSibling).firstChild.nextSibling.firstChild).nextSibling,el(t,z(tQ,{get linkProps(){return e.originalLinkProps},get adapterId(){return e.adapterId},get targets(){return e.targets}}),r),n.$$click=()=>{i.setOptions({welcomeScreenDismissed:!0}),e.onClose()},y(t=>{var r=e.originalLinkProps?(0,e2.buildLink)(e.originalLinkProps,e.targets,i,i.getOptions().templateOrTemplateId):void 0,n=i.getOptions().hrefTarget||e1.HREF_TARGET;return r!==t.e&&ee(o,"href",t.e=r),n!==t.t&&ee(o,"target",t.t=n),t},{e:void 0,t:void 0}),t}function t8(e){return"locatorjs-label"==e.className||"locatorjs-labels-section"==e.id||"locatorjs-layer"==e.id||"locatorjs-wrapper"==e.id||e.matches("#locatorjs-wrapper *")}function t7(e){let t=e.split("/"),r=t.slice(Math.max(t.length-3,0),t.length).join("/");return r!==e?`.../${r}`:r}Q(["click"]);var re=K('<div class="font-bold cursor-pointer text-black hover:bg-gray-100 rounded">'),rt=K("<div class=font-bold>"),rr=K('<div><div><div><div class="font-mono flex gap-1">&lt;<!>></div><div class="whitespace-nowrap text-ellipsis overflow-hidden"></div></div><div>'),ro=K('<div class="flex gap-2 justify-between pb-1"><div class="whitespace-nowrap text-ellipsis overflow-hidden">'),rn=K('<button class="inline-flex cursor-pointer bg-gray-100 rounded-full hover:bg-gray-200 py-0 px-2 ml-2">...');function ri(e){var t,r,o,n,i,l,a,s,c,d,u;let p=e7();function f(){return e.node.getComponent&&JSON.stringify(e.node.getComponent())!==JSON.stringify(e.parentComponent)&&!!e.node.getSource()}function h(){var t,r;return e.node.getComponent()?.callLink?((t=re()).$$click=()=>{let t=e.node.getComponent()?.callLink;t&&e5(t,e.targets,p)},el(t,()=>e.node.getComponent()?.label),t):(el(r=rt(),()=>e.node.getComponent()?.label),r)}return(i=(n=(o=(r=(t=rr()).firstChild).firstChild).firstChild).firstChild.nextSibling).nextSibling,l=n.nextSibling,a=o.nextSibling,t.addEventListener("mouseleave",()=>{e.setHighlightedBoundingBox(null)}),t.addEventListener("mouseenter",()=>{e.setHighlightedBoundingBox(e.node)}),el(t,(s=q(()=>!!f()),()=>{var t,r;return s()&&(r=(t=ro()).firstChild,el(t,h,r),el(r,()=>t7(e.node.getComponent()?.definitionLink?.fileName||"")),t)}),r),o.$$click=()=>{let t=e.node.getSource();t&&e5(t,e.targets,p)},el(n,()=>e.node.name,i),el(n,(c=q(()=>!e.node.getSource()),()=>c()&&h()),null),el(l,(d=q(()=>!!(e.node.getSource()?.fileName!==e.parentFilePath&&!f())),()=>d()?t7(e.node.getSource()?.fileName||""):null)),el(a,(u=q(()=>!!e.expandedIds.has(e.node.uniqueId)),()=>{var t;return u()?z(Y,{get each(){return e.node.getChildren()},children:t=>z(ri,{node:t,get expandedIds(){return e.expandedIds},get highlightedId(){return e.highlightedId},get expandId(){return e.expandId},get parentFilePath(){return e.node.getSource()?.fileName},get targets(){return e.targets},get setHighlightedBoundingBox(){return e.setHighlightedBoundingBox},get parentComponent(){return e.node.getComponent()}})}):q(()=>!!e.node.getChildren().length)()?((t=rn()).$$click=()=>{e.expandId(e.node.uniqueId)},t):""})),y(n=>{var i="text-xs pl-2 "+(e.highlightedId===e.node.uniqueId?"bg-yellow-100 ":" ")+(f()?"border border-gray-300 py-2 pr-2 ":" ")+(e.node.getSource()?"text-black ":"text-gray-500 "),l=f()?"pl-2":"",a="flex justify-between items-center gap-4 "+(e.node.getSource()?" cursor-pointer hover:bg-sky-100":"");return i!==n.e&&et(t,n.e=i),l!==n.t&&et(r,n.t=l),a!==n.a&&et(o,n.a=a),n},{e:void 0,t:void 0,a:void 0}),t}Q(["click"]);let rl=Math.min,ra=Math.max,rs=Math.round,rc=e=>({x:e,y:e}),rd={left:"right",right:"left",bottom:"top",top:"bottom"};function ru(e,t){return"function"==typeof e?e(t):e}function rp(e){return e.split("-")[0]}function rf(e){return e.split("-")[1]}function rh(e){return"x"===e?"y":"x"}function rg(e){return"y"===e?"height":"width"}function rm(e){let t=e[0];return"t"===t||"b"===t?"y":"x"}function rb(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}let rw=["left","right"],rv=["right","left"],rx=["top","bottom"],ry=["bottom","top"];function rC(e){let t=rp(e);return rd[t]+e.slice(t.length)}function rE(e){let{x:t,y:r,width:o,height:n}=e;return{width:o,height:n,top:r,left:t,right:t+o,bottom:r+n,x:t,y:r}}function rk(e,t,r){let o,{reference:n,floating:i}=e,l=rm(t),a=rh(rm(t)),s=rg(a),c=rp(t),d="y"===l,u=n.x+n.width/2-i.width/2,p=n.y+n.height/2-i.height/2,f=n[s]/2-i[s]/2;switch(c){case"top":o={x:u,y:n.y-i.height};break;case"bottom":o={x:u,y:n.y+n.height};break;case"right":o={x:n.x+n.width,y:p};break;case"left":o={x:n.x-i.width,y:p};break;default:o={x:n.x,y:n.y}}switch(rf(t)){case"start":o[a]-=f*(r&&d?-1:1);break;case"end":o[a]+=f*(r&&d?-1:1)}return o}async function rS(e,t){var r,o;void 0===t&&(t={});let{x:n,y:i,platform:l,rects:a,elements:s,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:f=!1,padding:h=0}=ru(t,e),g="number"!=typeof(o=h)?{top:0,right:0,bottom:0,left:0,...o}:{top:o,right:o,bottom:o,left:o},m=s[f?"floating"===p?"reference":"floating":p],b=rE(await l.getClippingRect({element:null==(r=await (null==l.isElement?void 0:l.isElement(m)))||r?m:m.contextElement||await (null==l.getDocumentElement?void 0:l.getDocumentElement(s.floating)),boundary:d,rootBoundary:u,strategy:c})),w="floating"===p?{x:n,y:i,width:a.floating.width,height:a.floating.height}:a.reference,v=await (null==l.getOffsetParent?void 0:l.getOffsetParent(s.floating)),x=await (null==l.isElement?void 0:l.isElement(v))&&await (null==l.getScale?void 0:l.getScale(v))||{x:1,y:1},y=rE(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:w,offsetParent:v,strategy:c}):w);return{top:(b.top-y.top+g.top)/x.y,bottom:(y.bottom-b.bottom+g.bottom)/x.y,left:(b.left-y.left+g.left)/x.x,right:(y.right-b.right+g.right)/x.x}}let r$=async(e,t,r)=>{let{placement:o="bottom",strategy:n="absolute",middleware:i=[],platform:l}=r,a=l.detectOverflow?l:{...l,detectOverflow:rS},s=await (null==l.isRTL?void 0:l.isRTL(t)),c=await l.getElementRects({reference:e,floating:t,strategy:n}),{x:d,y:u}=rk(c,o,s),p=o,f=0,h={};for(let r=0;r<i.length;r++){let g=i[r];if(!g)continue;let{name:m,fn:b}=g,{x:w,y:v,data:x,reset:y}=await b({x:d,y:u,initialPlacement:o,placement:p,strategy:n,middlewareData:h,rects:c,platform:a,elements:{reference:e,floating:t}});d=null!=w?w:d,u=null!=v?v:u,h[m]={...h[m],...x},y&&f<50&&(f++,"object"==typeof y&&(y.placement&&(p=y.placement),y.rects&&(c=!0===y.rects?await l.getElementRects({reference:e,floating:t,strategy:n}):y.rects),{x:d,y:u}=rk(c,p,s)),r=-1)}return{x:d,y:u,placement:p,strategy:n,middlewareData:h}},rL=new Set(["left","top"]);async function rO(e,t){let{placement:r,platform:o,elements:n}=e,i=await (null==o.isRTL?void 0:o.isRTL(n.floating)),l=rp(r),a=rf(r),s="y"===rm(r),c=rL.has(l)?-1:1,d=i&&s?-1:1,u=ru(t,e),{mainAxis:p,crossAxis:f,alignmentAxis:h}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&"number"==typeof h&&(f="end"===a?-1*h:h),s?{x:f*d,y:p*c}:{x:p*c,y:f*d}}function rI(){return"u">typeof window}function rR(e){return rA(e)?(e.nodeName||"").toLowerCase():"#document"}function rT(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function rN(e){var t;return null==(t=(rA(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function rA(e){return!!rI()&&(e instanceof Node||e instanceof rT(e).Node)}function rP(e){return!!rI()&&(e instanceof Element||e instanceof rT(e).Element)}function rj(e){return!!rI()&&(e instanceof HTMLElement||e instanceof rT(e).HTMLElement)}function r_(e){return!(!rI()||"u"<typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof rT(e).ShadowRoot)}function rM(e){let{overflow:t,overflowX:r,overflowY:o,display:n}=rU(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&"inline"!==n&&"contents"!==n}function rD(e){try{if(e.matches(":popover-open"))return!0}catch(e){}try{return e.matches(":modal")}catch(e){return!1}}let rH=/transform|translate|scale|rotate|perspective|filter/,rB=/paint|layout|strict|content/,rV=e=>!!e&&"none"!==e;function rF(e){let t=rP(e)?rU(e):e;return rV(t.transform)||rV(t.translate)||rV(t.scale)||rV(t.rotate)||rV(t.perspective)||!rz()&&(rV(t.backdropFilter)||rV(t.filter))||rH.test(t.willChange||"")||rB.test(t.contain||"")}function rz(){return null==r&&(r="u">typeof CSS&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),r}function rG(e){return/^(html|body|#document)$/.test(rR(e))}function rU(e){return rT(e).getComputedStyle(e)}function rX(e){return rP(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function rW(e){if("html"===rR(e))return e;let t=e.assignedSlot||e.parentNode||r_(e)&&e.host||rN(e);return r_(t)?t.host:t}function rY(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function rZ(e){let t=rU(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,n=rj(e),i=n?e.offsetWidth:r,l=n?e.offsetHeight:o,a=rs(r)!==i||rs(o)!==l;return a&&(r=i,o=l),{width:r,height:o,$:a}}function rq(e){return rP(e)?e:e.contextElement}function rJ(e){let t=rq(e);if(!rj(t))return rc(1);let r=t.getBoundingClientRect(),{width:o,height:n,$:i}=rZ(t),l=(i?rs(r.width):r.width)/o,a=(i?rs(r.height):r.height)/n;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}let rK=rc(0);function rQ(e){let t=rT(e);return rz()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:rK}function r0(e,t,r,o){var n;void 0===t&&(t=!1),void 0===r&&(r=!1);let i=e.getBoundingClientRect(),l=rq(e),a=rc(1);t&&(o?rP(o)&&(a=rJ(o)):a=rJ(e));let s=(void 0===(n=r)&&(n=!1),o&&(!n||o===rT(l))&&n)?rQ(l):rc(0),c=(i.left+s.x)/a.x,d=(i.top+s.y)/a.y,u=i.width/a.x,p=i.height/a.y;if(l){let e=rT(l),t=o&&rP(o)?rT(o):o,r=e,n=rY(r);for(;n&&o&&t!==r;){let e=rJ(n),t=n.getBoundingClientRect(),o=rU(n),i=t.left+(n.clientLeft+parseFloat(o.paddingLeft))*e.x,l=t.top+(n.clientTop+parseFloat(o.paddingTop))*e.y;c*=e.x,d*=e.y,u*=e.x,p*=e.y,c+=i,d+=l,n=rY(r=rT(n))}}return rE({width:u,height:p,x:c,y:d})}function r1(e,t){let r=rX(e).scrollLeft;return t?t.left+r:r0(rN(e)).left+r}function r2(e,t){let r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-r1(e,r),y:r.top+t.scrollTop}}function r3(e,t,r){var o;let n;if("viewport"===t)n=function(e,t){let r=rT(e),o=rN(e),n=r.visualViewport,i=o.clientWidth,l=o.clientHeight,a=0,s=0;if(n){i=n.width,l=n.height;let e=rz();(!e||e&&"fixed"===t)&&(a=n.offsetLeft,s=n.offsetTop)}let c=r1(o);if(c<=0){let e=o.ownerDocument,t=e.body,r=getComputedStyle(t),n="CSS1Compat"===e.compatMode&&parseFloat(r.marginLeft)+parseFloat(r.marginRight)||0,l=Math.abs(o.clientWidth-t.clientWidth-n);l<=25&&(i-=l)}else c<=25&&(i+=c);return{width:i,height:l,x:a,y:s}}(e,r);else if("document"===t){let t,r,i,l,a,s,c;o=rN(e),t=rN(o),r=rX(o),i=o.ownerDocument.body,l=ra(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),a=ra(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight),s=-r.scrollLeft+r1(o),c=-r.scrollTop,"rtl"===rU(i).direction&&(s+=ra(t.clientWidth,i.clientWidth)-l),n={width:l,height:a,x:s,y:c}}else if(rP(t)){let e,o,i,l,a,s;o=(e=r0(t,!0,"fixed"===r)).top+t.clientTop,i=e.left+t.clientLeft,l=rj(t)?rJ(t):rc(1),a=t.clientWidth*l.x,s=t.clientHeight*l.y,n={width:a,height:s,x:i*l.x,y:o*l.y}}else{let r=rQ(e);n={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return rE(n)}function r4(e){return"static"===rU(e).position}function r5(e,t){if(!rj(e)||"fixed"===rU(e).position)return null;if(t)return t(e);let r=e.offsetParent;return rN(e)===r&&(r=r.ownerDocument.body),r}function r6(e,t){var r;let o=rT(e);if(rD(e))return o;if(!rj(e)){let t=rW(e);for(;t&&!rG(t);){if(rP(t)&&!r4(t))return t;t=rW(t)}return o}let n=r5(e,t);for(;n&&(r=n,/^(table|td|th)$/.test(rR(r)))&&r4(n);)n=r5(n,t);return n&&rG(n)&&r4(n)&&!rF(n)?o:n||function(e){let t=rW(e);for(;rj(t)&&!rG(t);){if(rF(t))return t;if(rD(t))break;t=rW(t)}return null}(e)||o}let r9=async function(e){let t=this.getOffsetParent||r6,r=this.getDimensions,o=await r(e.floating);return{reference:function(e,t,r){let o=rj(t),n=rN(t),i="fixed"===r,l=r0(e,!0,i,t),a={scrollLeft:0,scrollTop:0},s=rc(0);if(o||!o&&!i)if(("body"!==rR(t)||rM(n))&&(a=rX(t)),o){let e=r0(t,!0,i,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else n&&(s.x=r1(n));i&&!o&&n&&(s.x=r1(n));let c=!n||o||i?rc(0):r2(n,a);return{x:l.left+a.scrollLeft-s.x-c.x,y:l.top+a.scrollTop-s.y-c.y,width:l.width,height:l.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},r8={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:r,offsetParent:o,strategy:n}=e,i="fixed"===n,l=rN(o),a=!!t&&rD(t.floating);if(o===l||a&&i)return r;let s={scrollLeft:0,scrollTop:0},c=rc(1),d=rc(0),u=rj(o);if((u||!u&&!i)&&(("body"!==rR(o)||rM(l))&&(s=rX(o)),u)){let e=r0(o);c=rJ(o),d.x=e.x+o.clientLeft,d.y=e.y+o.clientTop}let p=!l||u||i?rc(0):r2(l,s);return{width:r.width*c.x,height:r.height*c.y,x:r.x*c.x-s.scrollLeft*c.x+d.x+p.x,y:r.y*c.y-s.scrollTop*c.y+d.y+p.y}},getDocumentElement:rN,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:o,strategy:n}=e,i=[..."clippingAncestors"===r?rD(t)?[]:function(e,t){let r=t.get(e);if(r)return r;let o=(function e(t,r,o){var n;void 0===r&&(r=[]),void 0===o&&(o=!0);let i=function e(t){let r=rW(t);return rG(r)?t.ownerDocument?t.ownerDocument.body:t.body:rj(r)&&rM(r)?r:e(r)}(t),l=i===(null==(n=t.ownerDocument)?void 0:n.body),a=rT(i);if(!l)return r.concat(i,e(i,[],o));{let t=rY(a);return r.concat(a,a.visualViewport||[],rM(i)?i:[],t&&o?e(t):[])}})(e,[],!1).filter(e=>rP(e)&&"body"!==rR(e)),n=null,i="fixed"===rU(e).position,l=i?rW(e):e;for(;rP(l)&&!rG(l);){let t=rU(l),r=rF(l);r||"fixed"!==t.position||(n=null),(i?r||n:!(!r&&"static"===t.position&&n&&("absolute"===n.position||"fixed"===n.position)||rM(l)&&!r&&function e(t,r){let o=rW(t);return!(o===r||!rP(o)||rG(o))&&("fixed"===rU(o).position||e(o,r))}(e,l)))?n=t:o=o.filter(e=>e!==l),l=rW(l)}return t.set(e,o),o}(t,this._c):[].concat(r),o],l=r3(t,i[0],n),a=l.top,s=l.right,c=l.bottom,d=l.left;for(let e=1;e<i.length;e++){let r=r3(t,i[e],n);a=ra(r.top,a),s=rl(r.right,s),c=rl(r.bottom,c),d=ra(r.left,d)}return{width:s-d,height:c-a,x:d,y:a}},getOffsetParent:r6,getElementRects:r9,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:r}=rZ(e);return{width:t,height:r}},getScale:rJ,isElement:rP,isRTL:function(e){return"rtl"===rU(e).direction}};var r7=K('<div style=pointer-events:auto;background-color:rgba(0,0,0,0.1);z-index:1001><div><div class="m-2 bg-white rounded-md p-4 shadow-xl text-xs overflow-auto"style="max-height:calc(100vh - 16px)">'),oe=K("<div>"),ot=K('<div class=mb-2><button class="inline-flex cursor-pointer bg-gray-100 rounded-full hover:bg-gray-200 py-0 px-2 ">...');function or(e){var t,r,o,n,i;let l,[a,s]=x();return C(()=>{if(l){var t,r,o,n,i;let a,c,d,u=e.treeState.originalNode.getBox();(o={getBoundingClientRect:()=>({top:u?.y||0,left:u?.x||0,width:16,height:16})},n=l,i={placement:"left-start",middleware:[{name:"offset",options:10,async fn(e){var t,r;let{x:o,y:n,placement:i,middlewareData:l}=e,a=await rO(e,10);return i===(null==(t=l.offset)?void 0:t.placement)&&null!=(r=l.arrow)&&r.alignmentOffset?{}:{x:o+a.x,y:n+a.y,data:{...a,placement:i}}}},(void 0===t&&(t={}),{name:"shift",options:t,async fn(e){let{x:r,y:o,placement:n,platform:i}=e,{mainAxis:l=!0,crossAxis:a=!1,limiter:s={fn:e=>{let{x:t,y:r}=e;return{x:t,y:r}}},...c}=ru(t,e),d={x:r,y:o},u=await i.detectOverflow(e,c),p=rm(rp(n)),f=rh(p),h=d[f],g=d[p];if(l){let e="y"===f?"top":"left",t="y"===f?"bottom":"right",r=h+u[e],o=h-u[t];h=ra(r,rl(h,o))}if(a){let e="y"===p?"top":"left",t="y"===p?"bottom":"right",r=g+u[e],o=g-u[t];g=ra(r,rl(g,o))}let m=s.fn({...e,[f]:h,[p]:g});return{...m,data:{x:m.x-r,y:m.y-o,enabled:{[f]:l,[p]:a}}}}}),(void 0===r&&(r={}),{name:"flip",options:r,async fn(e){var t,o,n,i,l,a,s,c;let d,u,p,{placement:f,middlewareData:h,rects:g,initialPlacement:m,platform:b,elements:w}=e,{mainAxis:v=!0,crossAxis:x=!0,fallbackPlacements:y,fallbackStrategy:C="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:k=!0,...S}=ru(r,e);if(null!=(t=h.arrow)&&t.alignmentOffset)return{};let $=rp(f),L=rm(m),O=rp(m)===m,I=await (null==b.isRTL?void 0:b.isRTL(w.floating)),R=y||(O||!k?[rC(m)]:(d=rC(m),[rb(m),d,rb(d)])),T="none"!==E;!y&&T&&R.push(...(u=rf(m),p=function(e,t,r){switch(e){case"top":case"bottom":if(r)return t?rv:rw;return t?rw:rv;case"left":case"right":return t?rx:ry;default:return[]}}(rp(m),"start"===E,I),u&&(p=p.map(e=>e+"-"+u),k&&(p=p.concat(p.map(rb)))),p));let N=[m,...R],A=await b.detectOverflow(e,S),P=[],j=(null==(o=h.flip)?void 0:o.overflows)||[];if(v&&P.push(A[$]),x){let e,t,r,o,n=(a=f,s=g,void 0===(c=I)&&(c=!1),e=rf(a),r=rg(t=rh(rm(a))),o="x"===t?e===(c?"end":"start")?"right":"left":"start"===e?"bottom":"top",s.reference[r]>s.floating[r]&&(o=rC(o)),[o,rC(o)]);P.push(A[n[0]],A[n[1]])}if(j=[...j,{placement:f,overflows:P}],!P.every(e=>e<=0)){let e=((null==(n=h.flip)?void 0:n.index)||0)+1,t=N[e];if(t&&("alignment"!==x||L===rm(t)||j.every(e=>rm(e.placement)!==L||e.overflows[0]>0)))return{data:{index:e,overflows:j},reset:{placement:t}};let r=null==(i=j.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:i.placement;if(!r)switch(C){case"bestFit":{let e=null==(l=j.filter(e=>{if(T){let t=rm(e.placement);return t===L||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(r=e);break}case"initialPlacement":r=m}if(f!==r)return{reset:{placement:r}}}return{}}})]},a=new Map,d={...(c={platform:r8,...i}).platform,_c:a},r$(o,n,{...c,platform:d})).then(({x:e,y:t})=>{s({x:e,y:t})})}}),o=(r=(t=r7()).firstChild).firstChild,t.$$click=t=>{t.currentTarget===t.target&&e.close()},en(t,"position","fixed"),en(t,"top","0"),en(t,"left","0"),en(t,"width","100vw"),en(t,"height","100vh"),"function"==typeof(n=l)?ei(n,r):l=r,en(r,"position","absolute"),el(o,(i=q(()=>!!e.treeState),()=>{var t,r;return i()?(el(t=oe(),(r=q(()=>!!e.treeState?.root.getParent()),()=>{var t;return r()?((t=ot()).firstChild.$$click=()=>{let t=e.treeState,r=t.root.getParent();r&&(t.expandedIds.add(r.uniqueId),e.setTreeState({...t,root:r}))},t):null}),null),el(t,z(ri,{get node(){return e.treeState.root},get expandedIds(){return e.treeState.expandedIds},get highlightedId(){return e.treeState.highlightedId},expandId:t=>{let r=e.treeState;r.expandedIds.add(t),e.setTreeState(r)},get targets(){return e.targets},get setHighlightedBoundingBox(){return e.setHighlightedNode},parentComponent:null}),null),t):"no tree"})),y(e=>{var t=`${a()?.y||0}px`,o=`${a()?.x||0}px`;return t!==e.e&&en(r,"top",e.e=t),o!==e.t&&en(r,"left",e.t=o),e},{e:void 0,t:void 0}),t}Q(["click"]);var oo=K('<div><div class="flex justify-between items-center"></div><div class="font-medium mt-2">Disable Locator</div><div class="text-sm text-gray-700 mt-1">You will be able to enable Locator again by running `enableLocator()` in DevTools console.</div><div class="flex justify-end"><button class="bg-slate-100 py-2 px-4 rounded hover:bg-slate-300 active:bg-slate-200 cursor-pointer text-sm">Confirm');function on(e){var t,r,o;let n=e7();return o=(r=(t=oo()).firstChild).nextSibling.nextSibling.nextSibling.firstChild,el(r,z(ty,{}),null),el(r,z(tT,{onClick:()=>e.onClose()}),null),er(o,"click",()=>{n.setOptions({disabled:!0})}),y(()=>et(t,tv()+" w-96")),t}var oi=K('<div tabindex=0 style=pointer-events:auto;background-color:rgba(0,0,0,0.1);z-index:1001><div><div class="bg-white rounded-md py-2 shadow-xl text-xs overflow-auto flex flex-col"style="max-height:calc(100vh - 16px)">'),ol=K('<a><div class="text-xs text-gray-500">');function oa(e){var t,r,o,n,i,l,a;let s,c,d,u=e7();t=()=>{d&&d.focus()},C(()=>k(t));let[p,f]=x(null),h=()=>eZ(e.contextMenuState.target,e.adapterId);function g(e){if(null==p)return void f(0);let t=p()??-1;"down"===e&&(t+=1),"up"===e&&(t-=1),t<0&&(t=h().length-1),t>h().length-1&&(t=0),f(t),window.setTimeout(()=>{null!=p&&c?.querySelector(`:nth-child(${(p()||0)+1})`)?.scrollIntoView({block:"nearest"})},0)}return n=(o=(r=oi()).firstChild).firstChild,r.$$keydown=function(t){switch(t.key){case"Escape":t.preventDefault(),t.stopPropagation(),e.close();break;case"ArrowDown":t.preventDefault(),g("down");break;case"ArrowUp":t.preventDefault(),g("up");break;case"Enter":case" ":if(t.preventDefault(),null!==p()){let t=h()[p()];t&&e4(t.link,e.targets,u),f(null)}e.close()}},r.$$click=t=>{t.currentTarget===t.target&&e.close()},"function"==typeof(i=d)?ei(i,r):d=r,en(r,"position","fixed"),en(r,"top","0"),en(r,"left","0"),en(r,"width","100vw"),en(r,"height","100vh"),"function"==typeof(l=s)?ei(l,o):s=o,en(o,"position","absolute"),"function"==typeof(a=c)?ei(a,n):c=n,el(n,z(Y,{get each(){return h()},children:(t,r)=>{var o,n;let i=t.link;return i?(n=(o=ol()).firstChild,o.$$click=t=>{t.preventDefault(),t.stopPropagation(),e4(i,e.targets,u),e.close()},el(o,()=>t.title,n),el(n,()=>(function(e){let t=e.split("/");if(1===t.length)return t[0]||"unnamed";let r=t[t.length-1]||"unnamed";return r.startsWith("index.")?`${t[t.length-2]}/${r}`:r})(i.filePath||"")),y(t=>{var n="px-4 py-2 w-60 hover:bg-slate-50 text-left text-sm font-medium "+(r()===p()?"bg-slate-100":""),l=(0,e2.buildLink)(i,e.targets,u);return n!==t.e&&et(o,t.e=n),l!==t.t&&ee(o,"href",t.t=l),t},{e:void 0,t:void 0}),o):null}})),y(t=>{var r=`${e.contextMenuState.y||0}px`,n=`${e.contextMenuState.x||0}px`;return r!==t.e&&en(o,"top",t.e=r),n!==t.t&&en(o,"left",t.t=n),t},{e:void 0,t:void 0}),r}Q(["click","keydown"]);var os=K('<div><div class="mt-2 text-xs text-gray-600">Support me on <a class="underline hover:text-sky-900 text-sky-700"href=https://github.com/sponsors/infi-pc target=_blank>GitHub sponsors'),oc=K('<div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/70 pointer-events-auto">');function od(e){let[t,r]=x(["off"]),[o,n]=x(!1),[i,l]=x(null),[a,s]=x(null),[c,d]=x(null),u=e7();function p(e){n(eh(e))}function f(e){n(eh(e,!0))}function h(e){let t=e.target;if(t&&t instanceof HTMLElement){if(t8(t))return;n(eh(e,!0)),P(()=>{l(t)},!1)}}function g(e){eh(e)&&(e.preventDefault(),e.stopPropagation())}function m(e,t,o){r(["context",{target:e,x:t,y:o}])}function b(t){let r=eY(t,e.adapterId);if(r){let e=r.thisElement.link;e&&navigator.clipboard.writeText(e.filePath)}}function w(e){if(!eh(e,!0))return;e.preventDefault(),e.stopPropagation();let t=e.clientX,r=e.clientY,o=e.target;o&&o instanceof HTMLElement&&m(o,t,r)}function v(r){if(!eh(r)&&"options"!==t()[0])return;let o=r.target;if(o&&o instanceof HTMLElement){if(o.shadowRoot||t8(o))return;let t=eY(o,e.adapterId);if(t){let o=t.thisElement.link;o?(r.preventDefault(),r.stopPropagation(),eg(),(!(0,tC.isExtension)()||(0,ep.detectSvelte)())&&!u.getOptions().welcomeScreenDismissed?s(["choose-editor",o]):e4(o,e.targets,u)):(console.error("[LocatorJS]: Could not find link: Element info: ",t),s(["no-link"]))}else console.error("[LocatorJS]: Could not find element info. Element: ",o),s(["no-link"])}}function E(){l(null)}C(()=>{o()&&i()?document.body.classList.add("locatorjs-active-pointer"):document.body.classList.remove("locatorjs-active-pointer")});let k=[document];for(let e of(document.querySelectorAll("*").forEach(e=>{"locatorjs-wrapper"!==e.id&&e.shadowRoot&&k.push(e.shadowRoot)}),k))e.addEventListener("mouseover",h,{capture:!0}),e.addEventListener("keydown",f),e.addEventListener("keyup",p),e.addEventListener("click",v,{capture:!0}),e.addEventListener("contextmenu",w,{capture:!0}),e.addEventListener("mousedown",g,{capture:!0}),e.addEventListener("mouseup",g,{capture:!0}),e.addEventListener("scroll",E);function $(e){let t=(0,ep.detectSvelte)()&&eF?eF(e):(0,ep.detectVue)()&&eX?eX(e):(0,ep.detectReact)()&&eN?eN(e):(0,ep.detectJSX)()&&eD?eD(e):null;t&&r(["tree",t])}function L(){r(["options"])}return S(()=>{for(let e of k)e.removeEventListener("keyup",p),e.removeEventListener("keydown",f),e.removeEventListener("mouseover",h,{capture:!0}),e.removeEventListener("click",v,{capture:!0}),e.removeEventListener("contextmenu",w,{capture:!0}),e.removeEventListener("mousedown",g,{capture:!0}),e.removeEventListener("mouseup",g,{capture:!0}),e.removeEventListener("scroll",E)}),[q(()=>q(()=>"tree"===t()[0])()?z(or,{get treeState(){return t()[1]},close:()=>r(["off"]),setTreeState:e=>r(["tree",e]),get adapterId(){return e.adapterId},get targets(){return e.targets},setHighlightedNode:d}):null),q(()=>q(()=>"context"===t()[0])()?z(oa,{get contextMenuState(){return t()[1]},close:()=>r(["off"]),get adapterId(){return e.adapterId},get targets(){return e.targets},setHighlightedNode:d}):null),q(()=>q(()=>!!((o()||"options"===t()[0])&&i()))()?z(tm,{get currentElement(){return i()},get adapterId(){return e.adapterId},get targets(){return e.targets},showTreeFromElement:$,showParentsPath:m,copyToClipboard:b}):null),q(()=>{var t,r,n;return q(()=>!!o())()?(n=(r=(t=os()).firstChild).firstChild.nextSibling,el(t,z(t$,{openOptions:L,get adapter(){return e.adapterId}}),r),n.$$click=e=>{e.preventDefault(),e.stopPropagation(),window.open("https://github.com/sponsors/infi-pc")},y(()=>et(t,tv())),t):null}),q(()=>q(()=>!!c())()?z(tw,{get node(){return c()}}):null),q(()=>q(()=>!!(!1!==e.showIntro&&!(0,tC.isExtension)()&&!1!==u.getOptions().showIntro))()?z(tI,{openOptions:L,get hide(){return!!o()||"off"!==t()[0]},get adapter(){return e.adapterId}}):null),q(()=>q(()=>"options"===t()[0])()?z(t1,{get adapterId(){return e.adapterId},get targets(){return e.targets},onClose:()=>{r(["off"])},showDisableDialog:()=>{r(["disable-confirmation"])},get currentElement(){return i()}}):null),q(()=>q(()=>"disable-confirmation"===t()[0])()?z(on,{onClose:()=>{r(["off"])}}):null),q(()=>{var t,r,o;return q(()=>!!a())()&&((t=oc()).$$click=e=>{e.currentTarget===e.target&&s(null)},el(t,(r=q(()=>"no-link"===a()[0]),()=>r()&&z(t5,{})),null),el(t,(o=q(()=>"choose-editor"===a()[0]),()=>o()&&z(t9,{get targets(){return e.targets},get originalLinkProps(){return a()[1]},onClose:()=>{s(null)}})),null),t)})]}function ou(e){let t=e7(),r=()=>t.getOptions().disabled||!1;return C(()=>{r()&&(0,tC.isExtension)()?document.head.dataset.locatorDisabled="disabled":delete document.head.dataset.locatorDisabled}),z(Z,{get when(){return!r()},get children(){return z(od,e)}})}function op(e,t,r,o){!function(e,t,r,o={}){v(r=>{t===document?e():el(t,e(),t.firstChild?null:void 0,void 0)},o.owner)}(()=>z(e8,{get children(){return z(ou,{get targets(){return Object.fromEntries(Object.entries(r).map(([e,t])=>[e,"string"==typeof t?{url:t,label:e}:t]))},adapterId:t,showIntro:o})}}),e)}Q(["click"]),e.s(["initRender",()=>op],63961)},84830,e=>{"use strict";e.i(47167);var t=e.i(71645),r=e.i(39840),o=e.i(34417);let n=`*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

/*
! tailwindcss v3.4.18 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  letter-spacing: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}

[type='text'],input:where(:not([type])),[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, input:where(:not([type])):focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #2563eb;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6b7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6b7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
}

::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {
  padding-top: 0;
  padding-bottom: 0;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
}

[multiple],[size]:where(select:not([size="1"])) {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px solid ButtonText;
  outline: 1px auto -webkit-focus-ring-color;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.pointer-events-none {
  pointer-events: none;
}

.pointer-events-auto {
  pointer-events: auto;
}

.visible {
  visibility: visible;
}

.invisible {
  visibility: hidden;
}

.collapse {
  visibility: collapse;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.-bottom-7 {
  bottom: -1.75rem;
}

.-left-1 {
  left: -0.25rem;
}

.-left-2 {
  left: -0.5rem;
}

.-left-4 {
  left: -1rem;
}

.-right-2 {
  right: -0.5rem;
}

.-top-1 {
  top: -0.25rem;
}

.-top-2 {
  top: -0.5rem;
}

.-top-4 {
  top: -1rem;
}

.-top-7 {
  top: -1.75rem;
}

.bottom-3 {
  bottom: 0.75rem;
}

.left-0 {
  left: 0px;
}

.left-1 {
  left: 0.25rem;
}

.left-1\\/2 {
  left: 50%;
}

.left-3 {
  left: 0.75rem;
}

.top-0 {
  top: 0px;
}

.top-1 {
  top: 0.25rem;
}

.top-1\\/2 {
  top: 50%;
}

.z-10 {
  z-index: 10;
}

.m-1 {
  margin: 0.25rem;
}

.m-2 {
  margin: 0.5rem;
}

.m-4 {
  margin: 1rem;
}

.-mx-4 {
  margin-left: -1rem;
  margin-right: -1rem;
}

.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.ml-3 {
  margin-left: 0.75rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-3 {
  margin-top: 0.75rem;
}

.mt-4 {
  margin-top: 1rem;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.table {
  display: table;
}

.contents {
  display: contents;
}

.hidden {
  display: none;
}

.h-4 {
  height: 1rem;
}

.h-6 {
  height: 1.5rem;
}

.h-screen {
  height: 100vh;
}

.max-h-full {
  max-height: 100%;
}

.w-11 {
  width: 2.75rem;
}

.w-4 {
  width: 1rem;
}

.w-6 {
  width: 1.5rem;
}

.w-60 {
  width: 15rem;
}

.w-80 {
  width: 20rem;
}

.w-96 {
  width: 24rem;
}

.w-\\[560px\\] {
  width: 560px;
}

.w-full {
  width: 100%;
}

.w-screen {
  width: 100vw;
}

.max-w-2xl {
  max-width: 42rem;
}

.max-w-full {
  max-width: 100%;
}

.max-w-md {
  max-width: 28rem;
}

.max-w-xl {
  max-width: 36rem;
}

.flex-shrink {
  flex-shrink: 1;
}

.flex-grow {
  flex-grow: 1;
}

.grow {
  flex-grow: 1;
}

.border-collapse {
  border-collapse: collapse;
}

.-translate-x-1 {
  --tw-translate-x: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-full {
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-1 {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-full {
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.cursor-auto {
  cursor: auto;
}

.cursor-default {
  cursor: default;
}

.cursor-pointer {
  cursor: pointer;
}

.resize {
  resize: both;
}

.list-disc {
  list-style-type: disc;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-1 {
  gap: 0.25rem;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-4 {
  gap: 1rem;
}

.self-stretch {
  align-self: stretch;
}

.overflow-auto {
  overflow: auto;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-scroll {
  overflow: scroll;
}

.text-ellipsis {
  text-overflow: ellipsis;
}

.whitespace-nowrap {
  white-space: nowrap;
}

.whitespace-pre-wrap {
  white-space: pre-wrap;
}

.break-words {
  overflow-wrap: break-word;
}

.break-all {
  word-break: break-all;
}

.rounded {
  border-radius: 0.25rem;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-md {
  border-radius: 0.375rem;
}

.rounded-sm {
  border-radius: 0.125rem;
}

.rounded-xl {
  border-radius: 0.75rem;
}

.border {
  border-width: 1px;
}

.border-2 {
  border-width: 2px;
}

.border-solid {
  border-style: solid;
}

.border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(59 130 246 / var(--tw-border-opacity, 1));
}

.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));
}

.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));
}

.border-gray-600 {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity, 1));
}

.border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(34 197 94 / var(--tw-border-opacity, 1));
}

.border-purple-500 {
  --tw-border-opacity: 1;
  border-color: rgb(168 85 247 / var(--tw-border-opacity, 1));
}

.border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(239 68 68 / var(--tw-border-opacity, 1));
}

.border-sky-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 165 233 / var(--tw-border-opacity, 1));
}

.border-slate-200 {
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity, 1));
}

.border-slate-300 {
  --tw-border-opacity: 1;
  border-color: rgb(203 213 225 / var(--tw-border-opacity, 1));
}

.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}

.bg-black\\/60 {
  background-color: rgb(0 0 0 / 0.6);
}

.bg-black\\/70 {
  background-color: rgb(0 0 0 / 0.7);
}

.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity, 1));
}

.bg-blue-500\\/30 {
  background-color: rgb(59 130 246 / 0.3);
}

.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1));
}

.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));
}

.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}

.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));
}

.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity, 1));
}

.bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 252 231 / var(--tw-bg-opacity, 1));
}

.bg-green-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(240 253 244 / var(--tw-bg-opacity, 1));
}

.bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1));
}

.bg-green-500\\/30 {
  background-color: rgb(34 197 94 / 0.3);
}

.bg-orange-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 115 22 / var(--tw-bg-opacity, 1));
}

.bg-orange-500\\/30 {
  background-color: rgb(249 115 22 / 0.3);
}

.bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1));
}

.bg-red-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 242 242 / var(--tw-bg-opacity, 1));
}

.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));
}

.bg-slate-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity, 1));
}

.bg-slate-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(203 213 225 / var(--tw-bg-opacity, 1));
}

.bg-slate-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity, 1));
}

.bg-slate-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity, 1));
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}

.bg-yellow-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 249 195 / var(--tw-bg-opacity, 1));
}

.p-0 {
  padding: 0px;
}

.p-1 {
  padding: 0.25rem;
}

.p-2 {
  padding: 0.5rem;
}

.p-3 {
  padding: 0.75rem;
}

.p-4 {
  padding: 1rem;
}

.p-6 {
  padding: 1.5rem;
}

.p-8 {
  padding: 2rem;
}

.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}

.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}

.py-0\\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.pb-0 {
  padding-bottom: 0px;
}

.pb-0\\.5 {
  padding-bottom: 0.125rem;
}

.pb-1 {
  padding-bottom: 0.25rem;
}

.pl-2 {
  padding-left: 0.5rem;
}

.pl-4 {
  padding-left: 1rem;
}

.pr-2 {
  padding-right: 0.5rem;
}

.pt-2 {
  padding-top: 0.5rem;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.font-bold {
  font-weight: 700;
}

.font-medium {
  font-weight: 500;
}

.uppercase {
  text-transform: uppercase;
}

.lowercase {
  text-transform: lowercase;
}

.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity, 1));
}

.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity, 1));
}

.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity, 1));
}

.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity, 1));
}

.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}

.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}

.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity, 1));
}

.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity, 1));
}

.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity, 1));
}

.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity, 1));
}

.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(22 163 74 / var(--tw-text-opacity, 1));
}

.text-green-700 {
  --tw-text-opacity: 1;
  color: rgb(21 128 61 / var(--tw-text-opacity, 1));
}

.text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(22 101 52 / var(--tw-text-opacity, 1));
}

.text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(79 70 229 / var(--tw-text-opacity, 1));
}

.text-orange-500 {
  --tw-text-opacity: 1;
  color: rgb(249 115 22 / var(--tw-text-opacity, 1));
}

.text-purple-500 {
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
}

.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1));
}

.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity, 1));
}

.text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(153 27 27 / var(--tw-text-opacity, 1));
}

.text-sky-500 {
  --tw-text-opacity: 1;
  color: rgb(14 165 233 / var(--tw-text-opacity, 1));
}

.text-sky-700 {
  --tw-text-opacity: 1;
  color: rgb(3 105 161 / var(--tw-text-opacity, 1));
}

.text-slate-400 {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity, 1));
}

.text-slate-500 {
  --tw-text-opacity: 1;
  color: rgb(100 116 139 / var(--tw-text-opacity, 1));
}

.text-slate-700 {
  --tw-text-opacity: 1;
  color: rgb(51 65 85 / var(--tw-text-opacity, 1));
}

.text-slate-800 {
  --tw-text-opacity: 1;
  color: rgb(30 41 59 / var(--tw-text-opacity, 1));
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.underline {
  text-decoration-line: underline;
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.outline {
  outline-style: solid;
}

.ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-blue-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity, 1));
}

.ring-blue-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 64 175 / var(--tw-ring-opacity, 1));
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-300 {
  transition-duration: 300ms;
}

.hover\\:border-slate-400:hover {
  --tw-border-opacity: 1;
  border-color: rgb(148 163 184 / var(--tw-border-opacity, 1));
}

.hover\\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-green-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(21 128 61 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-purple-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(147 51 234 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-red-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(254 202 202 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-sky-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(224 242 254 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-slate-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-slate-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(203 213 225 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-slate-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-white\\/30:hover {
  background-color: rgb(255 255 255 / 0.3);
}

.hover\\:text-gray-100:hover {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity, 1));
}

.hover\\:text-sky-900:hover {
  --tw-text-opacity: 1;
  color: rgb(12 74 110 / var(--tw-text-opacity, 1));
}

.hover\\:text-slate-600:hover {
  --tw-text-opacity: 1;
  color: rgb(71 85 105 / var(--tw-text-opacity, 1));
}

.hover\\:text-slate-800:hover {
  --tw-text-opacity: 1;
  color: rgb(30 41 59 / var(--tw-text-opacity, 1));
}

.hover\\:underline:hover {
  text-decoration-line: underline;
}

.focus\\:border-indigo-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(99 102 241 / var(--tw-border-opacity, 1));
}

.focus\\:ring-indigo-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(199 210 254 / var(--tw-ring-opacity, 1));
}

.focus\\:ring-indigo-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity, 1));
}

.active\\:bg-red-100:active {
  --tw-bg-opacity: 1;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity, 1));
}

.active\\:bg-slate-200:active {
  --tw-bg-opacity: 1;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity, 1));
}

.group\\/tooltip:hover .group-hover\\/tooltip\\:visible {
  visibility: visible;
}

.group\\/tooltip:hover .group-hover\\/tooltip\\:opacity-100 {
  opacity: 1;
}

@media (min-width: 640px) {
  .sm\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}`;var i=e.i(19378),l=e.i(34955);e.i(25598),"u">typeof window&&(0,l.isExtension)()&&setTimeout(()=>(function({adapter:t,targets:l,projectPath:s,showIntro:c}={}){if("u"<typeof window||"u"<typeof document||document.getElementById("locatorjs-wrapper"))return;s&&(0,i.setInternalProjectPath)(s);let d=document.createElement("style");d.id="locatorjs-style",d.innerHTML=`
      #locatorjs-layer {
        all: initial;
        pointer-events: none;
        font-family: ${o.fontFamily};
      }
      #locatorjs-layer * {
        box-sizing: border-box;
      }
      #locatorjs-labels-wrapper {
        display: flex;
        gap: 8px;
      }
      .locatorjs-tree-node:hover {
        background-color: #eee;
      }
      ${n}
    `;let u=document.createElement("style");u.id="locatorjs-global-style",u.innerHTML=`
      #locatorjs-wrapper {
        z-index: ${a};
        pointer-events: none;
        position: fixed;
      }
      .locatorjs-active-pointer * {
        cursor: pointer !important;
      }
    `;let p=document.createElement("div");p.setAttribute("id","locatorjs-wrapper");let f=p.attachShadow({mode:"open"}),h=document.createElement("div");h.setAttribute("id","locatorjs-layer"),f.appendChild(d),f.appendChild(h),document.body.appendChild(p),document.head.appendChild(u);{let{initRender:o}=e.r(63961);o(h,t,l||r.allTargets,c)}})({}),0);let a=0x7fffffff;function s(){return(0,t.useEffect)(()=>{},[]),null}e.s(["LocatorJS",()=>s],84830)}]);