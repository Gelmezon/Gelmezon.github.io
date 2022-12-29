if("function"!=typeof window.ImportBondageCollege)throw alert("Club not detected! Please only use this while you have Club open!"),"Dependency not met";if(void 0!==window.BCX_Loaded)throw alert("BCX is already detected in current window. To reload, please refresh the window."),"Already loaded";window.BCX_Loaded=!1,console.debug("BCX: Parse start..."),function(){"use strict";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var o,t={};o=t,function(){const e="1.1.0";function t(e){alert("Mod ERROR:\n"+e);const o=new Error(e);throw console.error(o),o}const n=new TextEncoder;function r(e){return!!e&&"object"==typeof e&&!Array.isArray(e)}function i(e){const o=new Set;return e.filter((e=>!o.has(e)&&o.add(e)))}const a=new Map,d=new Set;function s(e){d.has(e)||(d.add(e),console.warn(e))}function l(e){const o=[],t=new Map,n=new Set;for(const r of u.values()){const i=r.patching.get(e.name);if(i){o.push(...i.hooks);for(const[o,a]of i.patches.entries())t.has(o)&&t.get(o)!==a&&s(`ModSDK: Mod '${r.name}' is patching function ${e.name} with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${o}\nPatch1:\n${t.get(o)||""}\nPatch2:\n${a}`),t.set(o,a),n.add(r.name)}}o.sort(((e,o)=>o.priority-e.priority));const r=function(e,o){if(0===o.size)return e;let t=e.toString().replaceAll("\r\n","\n");for(const[n,r]of o.entries())t.includes(n)||s(`ModSDK: Patching ${e.name}: Patch ${n} not applied`),t=t.replaceAll(n,r);return(0,eval)(`(${t})`)}(e.original,t);let i=function(o){var t,i;const a=null===(i=(t=m.errorReporterHooks).hookChainExit)||void 0===i?void 0:i.call(t,e.name,n),d=r.apply(this,o);return null==a||a(),d};for(let t=o.length-1;t>=0;t--){const n=o[t],r=i;i=function(o){var t,i;const a=null===(i=(t=m.errorReporterHooks).hookEnter)||void 0===i?void 0:i.call(t,e.name,n.mod),d=n.hook.apply(this,[o,e=>{if(1!==arguments.length||!Array.isArray(o))throw new Error(`Mod ${n.mod} failed to call next hook: Expected args to be array, got ${typeof e}`);return r.call(this,e)}]);return null==a||a(),d}}return{hooks:o,patches:t,patchesSources:n,enter:i,final:r}}function c(e,o=!1){let t=a.get(e);if(t)o&&(t.precomputed=l(t));else{let o=window;const i=e.split(".");for(let t=0;t<i.length-1;t++)if(o=o[i[t]],!r(o))throw new Error(`ModSDK: Function ${e} to be patched not found; ${i.slice(0,t+1).join(".")} is not object`);const d=o[i[i.length-1]];if("function"!=typeof d)throw new Error(`ModSDK: Function ${e} to be patched not found`);const s=function(e){let o=-1;for(const t of n.encode(e)){let e=255&(o^t);for(let o=0;o<8;o++)e=1&e?-306674912^e>>>1:e>>>1;o=o>>>8^e}return((-1^o)>>>0).toString(16).padStart(8,"0").toUpperCase()}(d.toString().replaceAll("\r\n","\n")),c={name:e,original:d,originalHash:s};t=Object.assign(Object.assign({},c),{precomputed:l(c),router:()=>{},context:o,contextProperty:i[i.length-1]}),t.router=function(e){return function(...o){return e.precomputed.enter.apply(this,[o])}}(t),a.set(e,t),o[t.contextProperty]=t.router}return t}function f(){const e=new Set;for(const o of u.values())for(const t of o.patching.keys())e.add(t);for(const o of a.keys())e.add(o);for(const o of e)c(o,!0)}function p(){const e=new Map;for(const[o,t]of a)e.set(o,{name:o,original:t.original,originalHash:t.originalHash,sdkEntrypoint:t.router,currentEntrypoint:t.context[t.contextProperty],hookedByMods:i(t.precomputed.hooks.map((e=>e.mod))),patchedByMods:Array.from(t.precomputed.patchesSources)});return e}const u=new Map;function g(e){u.get(e.name)!==e&&t(`Failed to unload mod '${e.name}': Not registered`),u.delete(e.name),e.loaded=!1,f()}function h(e,o,n){"string"==typeof e&&"string"==typeof o&&(alert(`Mod SDK warning: Mod '${e}' is registering in a deprecated way.\nIt will work for now, but please inform author to update.`),e={name:e,fullName:e,version:o},o={allowReplace:!0===n}),e&&"object"==typeof e||t("Failed to register mod: Expected info object, got "+typeof e),"string"==typeof e.name&&e.name||t("Failed to register mod: Expected name to be non-empty string, got "+typeof e.name);let i=`'${e.name}'`;"string"==typeof e.fullName&&e.fullName||t(`Failed to register mod ${i}: Expected fullName to be non-empty string, got ${typeof e.fullName}`),i=`'${e.fullName} (${e.name})'`,"string"!=typeof e.version&&t(`Failed to register mod ${i}: Expected version to be string, got ${typeof e.version}`),e.repository||(e.repository=void 0),void 0!==e.repository&&"string"!=typeof e.repository&&t(`Failed to register mod ${i}: Expected repository to be undefined or string, got ${typeof e.version}`),null==o&&(o={}),o&&"object"==typeof o||t(`Failed to register mod ${i}: Expected options to be undefined or object, got ${typeof o}`);const a=!0===o.allowReplace,d=u.get(e.name);d&&(d.allowReplace&&a||t(`Refusing to load mod ${i}: it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`),g(d));const s=e=>{"string"==typeof e&&e||t(`Mod ${i} failed to patch a function: Expected function name string, got ${typeof e}`);let o=p.patching.get(e);return o||(o={hooks:[],patches:new Map},p.patching.set(e,o)),o},l={unload:()=>g(p),hookFunction:(e,o,n)=>{p.loaded||t(`Mod ${i} attempted to call SDK function after being unloaded`);const r=s(e);"number"!=typeof o&&t(`Mod ${i} failed to hook function '${e}': Expected priority number, got ${typeof o}`),"function"!=typeof n&&t(`Mod ${i} failed to hook function '${e}': Expected hook function, got ${typeof n}`);const a={mod:p.name,priority:o,hook:n};return r.hooks.push(a),f(),()=>{const e=r.hooks.indexOf(a);e>=0&&(r.hooks.splice(e,1),f())}},patchFunction:(e,o)=>{p.loaded||t(`Mod ${i} attempted to call SDK function after being unloaded`);const n=s(e);r(o)||t(`Mod ${i} failed to patch function '${e}': Expected patches object, got ${typeof o}`);for(const[r,a]of Object.entries(o))"string"==typeof a?n.patches.set(r,a):null===a?n.patches.delete(r):t(`Mod ${i} failed to patch function '${e}': Invalid format of patch '${r}'`);f()},removePatches:e=>{p.loaded||t(`Mod ${i} attempted to call SDK function after being unloaded`),s(e).patches.clear(),f()},callOriginal:(e,o,n)=>(p.loaded||t(`Mod ${i} attempted to call SDK function after being unloaded`),"string"==typeof e&&e||t(`Mod ${i} failed to call a function: Expected function name string, got ${typeof e}`),Array.isArray(o)||t(`Mod ${i} failed to call a function: Expected args array, got ${typeof o}`),function(e,o,t=window){return c(e).original.apply(t,o)}(e,o,n)),getOriginalHash:e=>("string"==typeof e&&e||t(`Mod ${i} failed to get hash: Expected function name string, got ${typeof e}`),c(e).originalHash)},p={name:e.name,fullName:e.fullName,version:e.version,repository:e.repository,allowReplace:a,api:l,loaded:!0,patching:new Map};return u.set(e.name,p),Object.freeze(l)}function y(){const e=[];for(const o of u.values())e.push({name:o.name,fullName:o.fullName,version:o.version,repository:o.repository});return e}let m;const w=function(){if(void 0===window.bcModSdk)return window.bcModSdk=function(){const o={version:e,apiVersion:1,registerMod:h,getModsInfo:y,getPatchingInfo:p,errorReporterHooks:Object.seal({hookEnter:null,hookChainExit:null})};return m=o,Object.freeze(o)}();if(r(window.bcModSdk)||t("Failed to init Mod SDK: Name already in use"),1!==window.bcModSdk.apiVersion&&t(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==e&&(alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk.version.startsWith("1.0.")&&void 0===window.bcModSdk._shim10register)){const e=window.bcModSdk,o=Object.freeze(Object.assign(Object.assign({},e),{registerMod:(o,t,n)=>o&&"object"==typeof o&&"string"==typeof o.name&&"string"==typeof o.version?e.registerMod(o.name,o.version,"object"==typeof t&&!!t&&!0===t.allowReplace):e.registerMod(o,t,n),_shim10register:!0}));window.bcModSdk=o}return window.bcModSdk}();Object.defineProperty(o,"__esModule",{value:!0}),o.default=w}();e(t).registerMod("candy-bot","1.1.0").hookFunction("SpeechGarble",4,((e,o)=>{const t=e[1];return o(e)+"<>"+t}))}();
//# sourceMappingURL=candy-bot.js.map
