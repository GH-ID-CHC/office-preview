import {
  __commonJS,
  __toESM
} from "./chunk-LQ2VYIYD.js";

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/global-this.js"(exports, module) {
    "use strict";
    var check = function(it3) {
      return it3 && it3.Math === Math && it3;
    };
    module.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ function() {
      return this;
    }() || Function("return this")();
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/fails.js"(exports, module) {
    "use strict";
    module.exports = function(exec) {
      try {
        return !!exec();
      } catch (error2) {
        return true;
      }
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/descriptors.js"(exports, module) {
    "use strict";
    var fails22 = require_fails();
    module.exports = !fails22(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/function-bind-native.js"(exports, module) {
    "use strict";
    var fails22 = require_fails();
    module.exports = !fails22(function() {
      var test2 = (function() {
      }).bind();
      return typeof test2 != "function" || test2.hasOwnProperty("prototype");
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/function-call.js"(exports, module) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call5 = Function.prototype.call;
    module.exports = NATIVE_BIND ? call5.bind(call5) : function() {
      return call5.apply(call5, arguments);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor4 = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor4 && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V2) {
      var descriptor = getOwnPropertyDescriptor4(this, V2);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
    "use strict";
    module.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype3 = Function.prototype;
    var call5 = FunctionPrototype3.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype3.bind.bind(call5, call5);
    module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn2) {
      return function() {
        return call5.apply(fn2, arguments);
      };
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/classof-raw.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this();
    var toString8 = uncurryThis16({}.toString);
    var stringSlice5 = uncurryThis16("".slice);
    module.exports = function(it3) {
      return stringSlice5(toString8(it3), 8, -1);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/indexed-object.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this();
    var fails22 = require_fails();
    var classof2 = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis16("".split);
    module.exports = fails22(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it3) {
      return classof2(it3) === "String" ? split(it3, "") : $Object(it3);
    } : $Object;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module) {
    "use strict";
    module.exports = function(it3) {
      return it3 === null || it3 === void 0;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
    "use strict";
    var isNullOrUndefined2 = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module.exports = function(it3) {
      if (isNullOrUndefined2(it3))
        throw new $TypeError("Can't call method on " + it3);
      return it3;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
    "use strict";
    var IndexedObject2 = require_indexed_object();
    var requireObjectCoercible4 = require_require_object_coercible();
    module.exports = function(it3) {
      return IndexedObject2(requireObjectCoercible4(it3));
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-callable.js"(exports, module) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-object.js"(exports, module) {
    "use strict";
    var isCallable5 = require_is_callable();
    module.exports = function(it3) {
      return typeof it3 == "object" ? it3 !== null : isCallable5(it3);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/get-built-in.js"(exports, module) {
    "use strict";
    var globalThis14 = require_global_this();
    var isCallable5 = require_is_callable();
    var aFunction = function(argument) {
      return isCallable5(argument) ? argument : void 0;
    };
    module.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(globalThis14[namespace]) : globalThis14[namespace] && globalThis14[namespace][method];
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this();
    module.exports = uncurryThis16({}.isPrototypeOf);
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment-user-agent.js"(exports, module) {
    "use strict";
    var globalThis14 = require_global_this();
    var navigator = globalThis14.navigator;
    var userAgent = navigator && navigator.userAgent;
    module.exports = userAgent ? String(userAgent) : "";
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment-v8-version.js"(exports, module) {
    "use strict";
    var globalThis14 = require_global_this();
    var userAgent = require_environment_user_agent();
    var process2 = globalThis14.process;
    var Deno2 = globalThis14.Deno;
    var versions = process2 && process2.versions || Deno2 && Deno2.version;
    var v8 = versions && versions.v8;
    var match;
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match)
          version = +match[1];
      }
    }
    module.exports = version;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module) {
    "use strict";
    var V8_VERSION2 = require_environment_v8_version();
    var fails22 = require_fails();
    var globalThis14 = require_global_this();
    var $String2 = globalThis14.String;
    module.exports = !!Object.getOwnPropertySymbols && !fails22(function() {
      var symbol = Symbol("symbol detection");
      return !$String2(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION2 && V8_VERSION2 < 41;
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-symbol.js"(exports, module) {
    "use strict";
    var getBuiltIn4 = require_get_built_in();
    var isCallable5 = require_is_callable();
    var isPrototypeOf4 = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module.exports = USE_SYMBOL_AS_UID ? function(it3) {
      return typeof it3 == "symbol";
    } : function(it3) {
      var $Symbol = getBuiltIn4("Symbol");
      return isCallable5($Symbol) && isPrototypeOf4($Symbol.prototype, $Object(it3));
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/try-to-string.js"(exports, module) {
    "use strict";
    var $String2 = String;
    module.exports = function(argument) {
      try {
        return $String2(argument);
      } catch (error2) {
        return "Object";
      }
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/a-callable.js"(exports, module) {
    "use strict";
    var isCallable5 = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isCallable5(argument))
        return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/get-method.js"(exports, module) {
    "use strict";
    var aCallable4 = require_a_callable();
    var isNullOrUndefined2 = require_is_null_or_undefined();
    module.exports = function(V2, P2) {
      var func = V2[P2];
      return isNullOrUndefined2(func) ? void 0 : aCallable4(func);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
    "use strict";
    var call5 = require_function_call();
    var isCallable5 = require_is_callable();
    var isObject5 = require_is_object();
    var $TypeError = TypeError;
    module.exports = function(input, pref) {
      var fn2, val;
      if (pref === "string" && isCallable5(fn2 = input.toString) && !isObject5(val = call5(fn2, input)))
        return val;
      if (isCallable5(fn2 = input.valueOf) && !isObject5(val = call5(fn2, input)))
        return val;
      if (pref !== "string" && isCallable5(fn2 = input.toString) && !isObject5(val = call5(fn2, input)))
        return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-pure.js"(exports, module) {
    "use strict";
    module.exports = false;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/define-global-property.js"(exports, module) {
    "use strict";
    var globalThis14 = require_global_this();
    var defineProperty2 = Object.defineProperty;
    module.exports = function(key, value) {
      try {
        defineProperty2(globalThis14, key, { value, configurable: true, writable: true });
      } catch (error2) {
        globalThis14[key] = value;
      }
      return value;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/shared-store.js"(exports, module) {
    "use strict";
    var IS_PURE4 = require_is_pure();
    var globalThis14 = require_global_this();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module.exports = globalThis14[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.39.0",
      mode: IS_PURE4 ? "pure" : "global",
      copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/shared.js"(exports, module) {
    "use strict";
    var store = require_shared_store();
    module.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-object.js"(exports, module) {
    "use strict";
    var requireObjectCoercible4 = require_require_object_coercible();
    var $Object = Object;
    module.exports = function(argument) {
      return $Object(requireObjectCoercible4(argument));
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/has-own-property.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this();
    var toObject7 = require_to_object();
    var hasOwnProperty = uncurryThis16({}.hasOwnProperty);
    module.exports = Object.hasOwn || function hasOwn4(it3, key) {
      return hasOwnProperty(toObject7(it3), key);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/uid.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString8 = uncurryThis16(1 .toString);
    module.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString8(++id + postfix, 36);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
    "use strict";
    var globalThis14 = require_global_this();
    var shared = require_shared();
    var hasOwn4 = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var Symbol2 = globalThis14.Symbol;
    var WellKnownSymbolsStore = shared("wks");
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module.exports = function(name) {
      if (!hasOwn4(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn4(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-primitive.js"(exports, module) {
    "use strict";
    var call5 = require_function_call();
    var isObject5 = require_is_object();
    var isSymbol2 = require_is_symbol();
    var getMethod2 = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol8 = require_well_known_symbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE2 = wellKnownSymbol8("toPrimitive");
    module.exports = function(input, pref) {
      if (!isObject5(input) || isSymbol2(input))
        return input;
      var exoticToPrim = getMethod2(input, TO_PRIMITIVE2);
      var result;
      if (exoticToPrim) {
        if (pref === void 0)
          pref = "default";
        result = call5(exoticToPrim, input, pref);
        if (!isObject5(result) || isSymbol2(result))
          return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0)
        pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-property-key.js"(exports, module) {
    "use strict";
    var toPrimitive2 = require_to_primitive();
    var isSymbol2 = require_is_symbol();
    module.exports = function(argument) {
      var key = toPrimitive2(argument, "string");
      return isSymbol2(key) ? key : key + "";
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/document-create-element.js"(exports, module) {
    "use strict";
    var globalThis14 = require_global_this();
    var isObject5 = require_is_object();
    var document2 = globalThis14.document;
    var EXISTS = isObject5(document2) && isObject5(document2.createElement);
    module.exports = function(it3) {
      return EXISTS ? document2.createElement(it3) : {};
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
    "use strict";
    var DESCRIPTORS7 = require_descriptors();
    var fails22 = require_fails();
    var createElement = require_document_create_element();
    module.exports = !DESCRIPTORS7 && !fails22(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a !== 7;
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
    "use strict";
    var DESCRIPTORS7 = require_descriptors();
    var call5 = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject6 = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var hasOwn4 = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS7 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor4(O2, P2) {
      O2 = toIndexedObject6(O2);
      P2 = toPropertyKey(P2);
      if (IE8_DOM_DEFINE)
        try {
          return $getOwnPropertyDescriptor(O2, P2);
        } catch (error2) {
        }
      if (hasOwn4(O2, P2))
        return createPropertyDescriptor(!call5(propertyIsEnumerableModule.f, O2, P2), O2[P2]);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module) {
    "use strict";
    var DESCRIPTORS7 = require_descriptors();
    var fails22 = require_fails();
    module.exports = DESCRIPTORS7 && fails22(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype !== 42;
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/an-object.js"(exports, module) {
    "use strict";
    var isObject5 = require_is_object();
    var $String2 = String;
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isObject5(argument))
        return argument;
      throw new $TypeError($String2(argument) + " is not an object");
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-define-property.js"(exports) {
    "use strict";
    var DESCRIPTORS7 = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject4 = require_an_object();
    var toPropertyKey = require_to_property_key();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS7 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty2(O2, P2, Attributes) {
      anObject4(O2);
      P2 = toPropertyKey(P2);
      anObject4(Attributes);
      if (typeof O2 === "function" && P2 === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O2, P2);
        if (current && current[WRITABLE]) {
          O2[P2] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O2, P2, Attributes);
    } : $defineProperty : function defineProperty2(O2, P2, Attributes) {
      anObject4(O2);
      P2 = toPropertyKey(P2);
      anObject4(Attributes);
      if (IE8_DOM_DEFINE)
        try {
          return $defineProperty(O2, P2, Attributes);
        } catch (error2) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw new $TypeError("Accessors not supported");
      if ("value" in Attributes)
        O2[P2] = Attributes.value;
      return O2;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
    "use strict";
    var DESCRIPTORS7 = require_descriptors();
    var definePropertyModule2 = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module.exports = DESCRIPTORS7 ? function(object, key, value) {
      return definePropertyModule2.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/function-name.js"(exports, module) {
    "use strict";
    var DESCRIPTORS7 = require_descriptors();
    var hasOwn4 = require_has_own_property();
    var FunctionPrototype3 = Function.prototype;
    var getDescriptor = DESCRIPTORS7 && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn4(FunctionPrototype3, "name");
    var PROPER = EXISTS && (function something() {
    }).name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS7 || DESCRIPTORS7 && getDescriptor(FunctionPrototype3, "name").configurable);
    module.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/inspect-source.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this();
    var isCallable5 = require_is_callable();
    var store = require_shared_store();
    var functionToString2 = uncurryThis16(Function.toString);
    if (!isCallable5(store.inspectSource)) {
      store.inspectSource = function(it3) {
        return functionToString2(it3);
      };
    }
    module.exports = store.inspectSource;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module) {
    "use strict";
    var globalThis14 = require_global_this();
    var isCallable5 = require_is_callable();
    var WeakMap = globalThis14.WeakMap;
    module.exports = isCallable5(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/shared-key.js"(exports, module) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys3 = shared("keys");
    module.exports = function(key) {
      return keys3[key] || (keys3[key] = uid(key));
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/hidden-keys.js"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/internal-state.js"(exports, module) {
    "use strict";
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var globalThis14 = require_global_this();
    var isObject5 = require_is_object();
    var createNonEnumerableProperty3 = require_create_non_enumerable_property();
    var hasOwn4 = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError3 = globalThis14.TypeError;
    var WeakMap = globalThis14.WeakMap;
    var set2;
    var get;
    var has;
    var enforce = function(it3) {
      return has(it3) ? get(it3) : set2(it3, {});
    };
    var getterFor = function(TYPE) {
      return function(it3) {
        var state;
        if (!isObject5(it3) || (state = get(it3)).type !== TYPE) {
          throw new TypeError3("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap());
      store.get = store.get;
      store.has = store.has;
      store.set = store.set;
      set2 = function(it3, metadata) {
        if (store.has(it3))
          throw new TypeError3(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it3;
        store.set(it3, metadata);
        return metadata;
      };
      get = function(it3) {
        return store.get(it3) || {};
      };
      has = function(it3) {
        return store.has(it3);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set2 = function(it3, metadata) {
        if (hasOwn4(it3, STATE))
          throw new TypeError3(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it3;
        createNonEnumerableProperty3(it3, STATE, metadata);
        return metadata;
      };
      get = function(it3) {
        return hasOwn4(it3, STATE) ? it3[STATE] : {};
      };
      has = function(it3) {
        return hasOwn4(it3, STATE);
      };
    }
    var store;
    var STATE;
    module.exports = {
      set: set2,
      get,
      has,
      enforce,
      getterFor
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/make-built-in.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this();
    var fails22 = require_fails();
    var isCallable5 = require_is_callable();
    var hasOwn4 = require_has_own_property();
    var DESCRIPTORS7 = require_descriptors();
    var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
    var inspectSource = require_inspect_source();
    var InternalStateModule = require_internal_state();
    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState = InternalStateModule.get;
    var $String2 = String;
    var defineProperty2 = Object.defineProperty;
    var stringSlice5 = uncurryThis16("".slice);
    var replace = uncurryThis16("".replace);
    var join4 = uncurryThis16([].join);
    var CONFIGURABLE_LENGTH = DESCRIPTORS7 && !fails22(function() {
      return defineProperty2(function() {
      }, "length", { value: 8 }).length !== 8;
    });
    var TEMPLATE = String(String).split("String");
    var makeBuiltIn2 = module.exports = function(value, name, options) {
      if (stringSlice5($String2(name), 0, 7) === "Symbol(") {
        name = "[" + replace($String2(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
      }
      if (options && options.getter)
        name = "get " + name;
      if (options && options.setter)
        name = "set " + name;
      if (!hasOwn4(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS7)
          defineProperty2(value, "name", { value: name, configurable: true });
        else
          value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn4(options, "arity") && value.length !== options.arity) {
        defineProperty2(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn4(options, "constructor") && options.constructor) {
          if (DESCRIPTORS7)
            defineProperty2(value, "prototype", { writable: false });
        } else if (value.prototype)
          value.prototype = void 0;
      } catch (error2) {
      }
      var state = enforceInternalState(value);
      if (!hasOwn4(state, "source")) {
        state.source = join4(TEMPLATE, typeof name == "string" ? name : "");
      }
      return value;
    };
    Function.prototype.toString = makeBuiltIn2(function toString8() {
      return isCallable5(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/define-built-in.js"(exports, module) {
    "use strict";
    var isCallable5 = require_is_callable();
    var definePropertyModule2 = require_object_define_property();
    var makeBuiltIn2 = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module.exports = function(O2, key, value, options) {
      if (!options)
        options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable5(value))
        makeBuiltIn2(value, name, options);
      if (options.global) {
        if (simple)
          O2[key] = value;
        else
          defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe)
            delete O2[key];
          else if (O2[key])
            simple = true;
        } catch (error2) {
        }
        if (simple)
          O2[key] = value;
        else
          definePropertyModule2.f(O2, key, {
            value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
          });
      }
      return O2;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/math-trunc.js"(exports, module) {
    "use strict";
    var ceil = Math.ceil;
    var floor3 = Math.floor;
    module.exports = Math.trunc || function trunc(x2) {
      var n2 = +x2;
      return (n2 > 0 ? floor3 : ceil)(n2);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
    "use strict";
    var trunc = require_math_trunc();
    module.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
    "use strict";
    var toIntegerOrInfinity4 = require_to_integer_or_infinity();
    var max4 = Math.max;
    var min4 = Math.min;
    module.exports = function(index, length) {
      var integer = toIntegerOrInfinity4(index);
      return integer < 0 ? max4(integer + length, 0) : min4(integer, length);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-length.js"(exports, module) {
    "use strict";
    var toIntegerOrInfinity4 = require_to_integer_or_infinity();
    var min4 = Math.min;
    module.exports = function(argument) {
      var len = toIntegerOrInfinity4(argument);
      return len > 0 ? min4(len, 9007199254740991) : 0;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
    "use strict";
    var toLength4 = require_to_length();
    module.exports = function(obj) {
      return toLength4(obj.length);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-includes.js"(exports, module) {
    "use strict";
    var toIndexedObject6 = require_to_indexed_object();
    var toAbsoluteIndex4 = require_to_absolute_index();
    var lengthOfArrayLike7 = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O2 = toIndexedObject6($this);
        var length = lengthOfArrayLike7(O2);
        if (length === 0)
          return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex4(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el)
          while (length > index) {
            value = O2[index++];
            if (value !== value)
              return true;
          }
        else
          for (; length > index; index++) {
            if ((IS_INCLUDES || index in O2) && O2[index] === el)
              return IS_INCLUDES || index || 0;
          }
        return !IS_INCLUDES && -1;
      };
    };
    module.exports = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this();
    var hasOwn4 = require_has_own_property();
    var toIndexedObject6 = require_to_indexed_object();
    var indexOf2 = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push5 = uncurryThis16([].push);
    module.exports = function(object, names) {
      var O2 = toIndexedObject6(object);
      var i2 = 0;
      var result = [];
      var key;
      for (key in O2)
        !hasOwn4(hiddenKeys, key) && hasOwn4(O2, key) && push5(result, key);
      while (names.length > i2)
        if (hasOwn4(O2, key = names[i2++])) {
          ~indexOf2(result, key) || push5(result, key);
        }
      return result;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
    "use strict";
    module.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames3(O2) {
      return internalObjectKeys(O2, hiddenKeys);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/own-keys.js"(exports, module) {
    "use strict";
    var getBuiltIn4 = require_get_built_in();
    var uncurryThis16 = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject4 = require_an_object();
    var concat3 = uncurryThis16([].concat);
    module.exports = getBuiltIn4("Reflect", "ownKeys") || function ownKeys3(it3) {
      var keys3 = getOwnPropertyNamesModule.f(anObject4(it3));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat3(keys3, getOwnPropertySymbols(it3)) : keys3;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
    "use strict";
    var hasOwn4 = require_has_own_property();
    var ownKeys3 = require_own_keys();
    var getOwnPropertyDescriptorModule2 = require_object_get_own_property_descriptor();
    var definePropertyModule2 = require_object_define_property();
    module.exports = function(target, source, exceptions) {
      var keys3 = ownKeys3(source);
      var defineProperty2 = definePropertyModule2.f;
      var getOwnPropertyDescriptor4 = getOwnPropertyDescriptorModule2.f;
      for (var i2 = 0; i2 < keys3.length; i2++) {
        var key = keys3[i2];
        if (!hasOwn4(target, key) && !(exceptions && hasOwn4(exceptions, key))) {
          defineProperty2(target, key, getOwnPropertyDescriptor4(source, key));
        }
      }
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-forced.js"(exports, module) {
    "use strict";
    var fails22 = require_fails();
    var isCallable5 = require_is_callable();
    var replacement = /#|\.prototype\./;
    var isForced2 = function(feature, detection) {
      var value = data[normalize(feature)];
      return value === POLYFILL ? true : value === NATIVE ? false : isCallable5(detection) ? fails22(detection) : !!detection;
    };
    var normalize = isForced2.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced2.data = {};
    var NATIVE = isForced2.NATIVE = "N";
    var POLYFILL = isForced2.POLYFILL = "P";
    module.exports = isForced2;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/export.js"(exports, module) {
    "use strict";
    var globalThis14 = require_global_this();
    var getOwnPropertyDescriptor4 = require_object_get_own_property_descriptor().f;
    var createNonEnumerableProperty3 = require_create_non_enumerable_property();
    var defineBuiltIn5 = require_define_built_in();
    var defineGlobalProperty = require_define_global_property();
    var copyConstructorProperties3 = require_copy_constructor_properties();
    var isForced2 = require_is_forced();
    module.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED11, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = globalThis14;
      } else if (STATIC) {
        target = globalThis14[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target = globalThis14[TARGET] && globalThis14[TARGET].prototype;
      }
      if (target)
        for (key in source) {
          sourceProperty = source[key];
          if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor4(target, key);
            targetProperty = descriptor && descriptor.value;
          } else
            targetProperty = target[key];
          FORCED11 = isForced2(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          if (!FORCED11 && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty)
              continue;
            copyConstructorProperties3(sourceProperty, targetProperty);
          }
          if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty3(sourceProperty, "sham", true);
          }
          defineBuiltIn5(target, key, sourceProperty, options);
        }
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-string-tag-support.js"(exports, module) {
    "use strict";
    var wellKnownSymbol8 = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol8("toStringTag");
    var test2 = {};
    test2[TO_STRING_TAG] = "z";
    module.exports = String(test2) === "[object z]";
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/classof.js"(exports, module) {
    "use strict";
    var TO_STRING_TAG_SUPPORT2 = require_to_string_tag_support();
    var isCallable5 = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol8 = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol8("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ function() {
      return arguments;
    }()) === "Arguments";
    var tryGet = function(it3, key) {
      try {
        return it3[key];
      } catch (error2) {
      }
    };
    module.exports = TO_STRING_TAG_SUPPORT2 ? classofRaw : function(it3) {
      var O2, tag, result;
      return it3 === void 0 ? "Undefined" : it3 === null ? "Null" : typeof (tag = tryGet(O2 = $Object(it3), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O2) : (result = classofRaw(O2)) === "Object" && isCallable5(O2.callee) ? "Arguments" : result;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-string.js
var require_to_string = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-string.js"(exports, module) {
    "use strict";
    var classof2 = require_classof();
    var $String2 = String;
    module.exports = function(argument) {
      if (classof2(argument) === "Symbol")
        throw new TypeError("Cannot convert a Symbol value to a string");
      return $String2(argument);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-keys.js"(exports, module) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module.exports = Object.keys || function keys3(O2) {
      return internalObjectKeys(O2, enumBugKeys);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-define-properties.js"(exports) {
    "use strict";
    var DESCRIPTORS7 = require_descriptors();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var definePropertyModule2 = require_object_define_property();
    var anObject4 = require_an_object();
    var toIndexedObject6 = require_to_indexed_object();
    var objectKeys = require_object_keys();
    exports.f = DESCRIPTORS7 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O2, Properties) {
      anObject4(O2);
      var props = toIndexedObject6(Properties);
      var keys3 = objectKeys(Properties);
      var length = keys3.length;
      var index = 0;
      var key;
      while (length > index)
        definePropertyModule2.f(O2, key = keys3[index++], props[key]);
      return O2;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/html.js"(exports, module) {
    "use strict";
    var getBuiltIn4 = require_get_built_in();
    module.exports = getBuiltIn4("document", "documentElement");
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-create.js"(exports, module) {
    "use strict";
    var anObject4 = require_an_object();
    var definePropertiesModule = require_object_define_properties();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = require_hidden_keys();
    var html = require_html();
    var documentCreateElement = require_document_create_element();
    var sharedKey = require_shared_key();
    var GT = ">";
    var LT = "<";
    var PROTOTYPE = "prototype";
    var SCRIPT = "script";
    var IE_PROTO = sharedKey("IE_PROTO");
    var EmptyConstructor = function() {
    };
    var scriptTag = function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    };
    var NullProtoObjectViaActiveX = function(activeXDocument2) {
      activeXDocument2.write(scriptTag(""));
      activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      activeXDocument2 = null;
      return temp;
    };
    var NullProtoObjectViaIFrame = function() {
      var iframe = documentCreateElement("iframe");
      var JS = "java" + SCRIPT + ":";
      var iframeDocument;
      iframe.style.display = "none";
      html.appendChild(iframe);
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag("document.F=Object"));
      iframeDocument.close();
      return iframeDocument.F;
    };
    var activeXDocument;
    var NullProtoObject = function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error2) {
      }
      NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      var length = enumBugKeys.length;
      while (length--)
        delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = true;
    module.exports = Object.create || function create2(O2, Properties) {
      var result;
      if (O2 !== null) {
        EmptyConstructor[PROTOTYPE] = anObject4(O2);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O2;
      } else
        result = NullProtoObject();
      return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-slice.js
var require_array_slice = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-slice.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this();
    module.exports = uncurryThis16([].slice);
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-get-own-property-names-external.js
var require_object_get_own_property_names_external = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-get-own-property-names-external.js"(exports, module) {
    "use strict";
    var classof2 = require_classof_raw();
    var toIndexedObject6 = require_to_indexed_object();
    var $getOwnPropertyNames = require_object_get_own_property_names().f;
    var arraySlice3 = require_array_slice();
    var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    var getWindowNames = function(it3) {
      try {
        return $getOwnPropertyNames(it3);
      } catch (error2) {
        return arraySlice3(windowNames);
      }
    };
    module.exports.f = function getOwnPropertyNames3(it3) {
      return windowNames && classof2(it3) === "Window" ? getWindowNames(it3) : $getOwnPropertyNames(toIndexedObject6(it3));
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/define-built-in-accessor.js
var require_define_built_in_accessor = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/define-built-in-accessor.js"(exports, module) {
    "use strict";
    var makeBuiltIn2 = require_make_built_in();
    var defineProperty2 = require_object_define_property();
    module.exports = function(target, name, descriptor) {
      if (descriptor.get)
        makeBuiltIn2(descriptor.get, name, { getter: true });
      if (descriptor.set)
        makeBuiltIn2(descriptor.set, name, { setter: true });
      return defineProperty2.f(target, name, descriptor);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/well-known-symbol-wrapped.js
var require_well_known_symbol_wrapped = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/well-known-symbol-wrapped.js"(exports) {
    "use strict";
    var wellKnownSymbol8 = require_well_known_symbol();
    exports.f = wellKnownSymbol8;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/path.js
var require_path = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/path.js"(exports, module) {
    "use strict";
    var globalThis14 = require_global_this();
    module.exports = globalThis14;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/well-known-symbol-define.js
var require_well_known_symbol_define = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/well-known-symbol-define.js"(exports, module) {
    "use strict";
    var path2 = require_path();
    var hasOwn4 = require_has_own_property();
    var wrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
    var defineProperty2 = require_object_define_property().f;
    module.exports = function(NAME2) {
      var Symbol2 = path2.Symbol || (path2.Symbol = {});
      if (!hasOwn4(Symbol2, NAME2))
        defineProperty2(Symbol2, NAME2, {
          value: wrappedWellKnownSymbolModule.f(NAME2)
        });
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/symbol-define-to-primitive.js
var require_symbol_define_to_primitive = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/symbol-define-to-primitive.js"(exports, module) {
    "use strict";
    var call5 = require_function_call();
    var getBuiltIn4 = require_get_built_in();
    var wellKnownSymbol8 = require_well_known_symbol();
    var defineBuiltIn5 = require_define_built_in();
    module.exports = function() {
      var Symbol2 = getBuiltIn4("Symbol");
      var SymbolPrototype2 = Symbol2 && Symbol2.prototype;
      var valueOf = SymbolPrototype2 && SymbolPrototype2.valueOf;
      var TO_PRIMITIVE2 = wellKnownSymbol8("toPrimitive");
      if (SymbolPrototype2 && !SymbolPrototype2[TO_PRIMITIVE2]) {
        defineBuiltIn5(SymbolPrototype2, TO_PRIMITIVE2, function(hint) {
          return call5(valueOf, this);
        }, { arity: 1 });
      }
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/set-to-string-tag.js
var require_set_to_string_tag = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/set-to-string-tag.js"(exports, module) {
    "use strict";
    var defineProperty2 = require_object_define_property().f;
    var hasOwn4 = require_has_own_property();
    var wellKnownSymbol8 = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol8("toStringTag");
    module.exports = function(target, TAG, STATIC) {
      if (target && !STATIC)
        target = target.prototype;
      if (target && !hasOwn4(target, TO_STRING_TAG)) {
        defineProperty2(target, TO_STRING_TAG, { configurable: true, value: TAG });
      }
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/function-uncurry-this-clause.js
var require_function_uncurry_this_clause = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/function-uncurry-this-clause.js"(exports, module) {
    "use strict";
    var classofRaw = require_classof_raw();
    var uncurryThis16 = require_function_uncurry_this();
    module.exports = function(fn2) {
      if (classofRaw(fn2) === "Function")
        return uncurryThis16(fn2);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/function-bind-context.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this_clause();
    var aCallable4 = require_a_callable();
    var NATIVE_BIND = require_function_bind_native();
    var bind2 = uncurryThis16(uncurryThis16.bind);
    module.exports = function(fn2, that) {
      aCallable4(fn2);
      return that === void 0 ? fn2 : NATIVE_BIND ? bind2(fn2, that) : function() {
        return fn2.apply(that, arguments);
      };
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-array.js"(exports, module) {
    "use strict";
    var classof2 = require_classof_raw();
    module.exports = Array.isArray || function isArray3(argument) {
      return classof2(argument) === "Array";
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-constructor.js
var require_is_constructor = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-constructor.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this();
    var fails22 = require_fails();
    var isCallable5 = require_is_callable();
    var classof2 = require_classof();
    var getBuiltIn4 = require_get_built_in();
    var inspectSource = require_inspect_source();
    var noop = function() {
    };
    var construct2 = getBuiltIn4("Reflect", "construct");
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec = uncurryThis16(constructorRegExp.exec);
    var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
    var isConstructorModern = function isConstructor2(argument) {
      if (!isCallable5(argument))
        return false;
      try {
        construct2(noop, [], argument);
        return true;
      } catch (error2) {
        return false;
      }
    };
    var isConstructorLegacy = function isConstructor2(argument) {
      if (!isCallable5(argument))
        return false;
      switch (classof2(argument)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return false;
      }
      try {
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
      } catch (error2) {
        return true;
      }
    };
    isConstructorLegacy.sham = true;
    module.exports = !construct2 || fails22(function() {
      var called;
      return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = true;
      }) || called;
    }) ? isConstructorLegacy : isConstructorModern;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-species-constructor.js
var require_array_species_constructor = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-species-constructor.js"(exports, module) {
    "use strict";
    var isArray3 = require_is_array();
    var isConstructor2 = require_is_constructor();
    var isObject5 = require_is_object();
    var wellKnownSymbol8 = require_well_known_symbol();
    var SPECIES2 = wellKnownSymbol8("species");
    var $Array2 = Array;
    module.exports = function(originalArray) {
      var C2;
      if (isArray3(originalArray)) {
        C2 = originalArray.constructor;
        if (isConstructor2(C2) && (C2 === $Array2 || isArray3(C2.prototype)))
          C2 = void 0;
        else if (isObject5(C2)) {
          C2 = C2[SPECIES2];
          if (C2 === null)
            C2 = void 0;
        }
      }
      return C2 === void 0 ? $Array2 : C2;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-species-create.js
var require_array_species_create = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-species-create.js"(exports, module) {
    "use strict";
    var arraySpeciesConstructor = require_array_species_constructor();
    module.exports = function(originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-iteration.js
var require_array_iteration = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-iteration.js"(exports, module) {
    "use strict";
    var bind2 = require_function_bind_context();
    var uncurryThis16 = require_function_uncurry_this();
    var IndexedObject2 = require_indexed_object();
    var toObject7 = require_to_object();
    var lengthOfArrayLike7 = require_length_of_array_like();
    var arraySpeciesCreate4 = require_array_species_create();
    var push5 = uncurryThis16([].push);
    var createMethod = function(TYPE) {
      var IS_MAP = TYPE === 1;
      var IS_FILTER = TYPE === 2;
      var IS_SOME = TYPE === 3;
      var IS_EVERY = TYPE === 4;
      var IS_FIND_INDEX = TYPE === 6;
      var IS_FILTER_REJECT = TYPE === 7;
      var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
      return function($this, callbackfn, that, specificCreate) {
        var O2 = toObject7($this);
        var self2 = IndexedObject2(O2);
        var length = lengthOfArrayLike7(self2);
        var boundFunction = bind2(callbackfn, that);
        var index = 0;
        var create2 = specificCreate || arraySpeciesCreate4;
        var target = IS_MAP ? create2($this, length) : IS_FILTER || IS_FILTER_REJECT ? create2($this, 0) : void 0;
        var value, result;
        for (; length > index; index++)
          if (NO_HOLES || index in self2) {
            value = self2[index];
            result = boundFunction(value, index, O2);
            if (TYPE) {
              if (IS_MAP)
                target[index] = result;
              else if (result)
                switch (TYPE) {
                  case 3:
                    return true;
                  case 5:
                    return value;
                  case 6:
                    return index;
                  case 2:
                    push5(target, value);
                }
              else
                switch (TYPE) {
                  case 4:
                    return false;
                  case 7:
                    push5(target, value);
                }
            }
          }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
      };
    };
    module.exports = {
      // `Array.prototype.forEach` method
      // https://tc39.es/ecma262/#sec-array.prototype.foreach
      forEach: createMethod(0),
      // `Array.prototype.map` method
      // https://tc39.es/ecma262/#sec-array.prototype.map
      map: createMethod(1),
      // `Array.prototype.filter` method
      // https://tc39.es/ecma262/#sec-array.prototype.filter
      filter: createMethod(2),
      // `Array.prototype.some` method
      // https://tc39.es/ecma262/#sec-array.prototype.some
      some: createMethod(3),
      // `Array.prototype.every` method
      // https://tc39.es/ecma262/#sec-array.prototype.every
      every: createMethod(4),
      // `Array.prototype.find` method
      // https://tc39.es/ecma262/#sec-array.prototype.find
      find: createMethod(5),
      // `Array.prototype.findIndex` method
      // https://tc39.es/ecma262/#sec-array.prototype.findIndex
      findIndex: createMethod(6),
      // `Array.prototype.filterReject` method
      // https://github.com/tc39/proposal-array-filtering
      filterReject: createMethod(7)
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.symbol.constructor.js
var require_es_symbol_constructor = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.symbol.constructor.js"() {
    "use strict";
    var $32 = require_export();
    var globalThis14 = require_global_this();
    var call5 = require_function_call();
    var uncurryThis16 = require_function_uncurry_this();
    var IS_PURE4 = require_is_pure();
    var DESCRIPTORS7 = require_descriptors();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var fails22 = require_fails();
    var hasOwn4 = require_has_own_property();
    var isPrototypeOf4 = require_object_is_prototype_of();
    var anObject4 = require_an_object();
    var toIndexedObject6 = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var $toString2 = require_to_string();
    var createPropertyDescriptor = require_create_property_descriptor();
    var nativeObjectCreate = require_object_create();
    var objectKeys = require_object_keys();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertyNamesExternal = require_object_get_own_property_names_external();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var getOwnPropertyDescriptorModule2 = require_object_get_own_property_descriptor();
    var definePropertyModule2 = require_object_define_property();
    var definePropertiesModule = require_object_define_properties();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var defineBuiltIn5 = require_define_built_in();
    var defineBuiltInAccessor4 = require_define_built_in_accessor();
    var shared = require_shared();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var uid = require_uid();
    var wellKnownSymbol8 = require_well_known_symbol();
    var wrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
    var defineWellKnownSymbol6 = require_well_known_symbol_define();
    var defineSymbolToPrimitive2 = require_symbol_define_to_primitive();
    var setToStringTag5 = require_set_to_string_tag();
    var InternalStateModule = require_internal_state();
    var $forEach2 = require_array_iteration().forEach;
    var HIDDEN = sharedKey("hidden");
    var SYMBOL = "Symbol";
    var PROTOTYPE = "prototype";
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(SYMBOL);
    var ObjectPrototype2 = Object[PROTOTYPE];
    var $Symbol = globalThis14.Symbol;
    var SymbolPrototype2 = $Symbol && $Symbol[PROTOTYPE];
    var RangeError3 = globalThis14.RangeError;
    var TypeError3 = globalThis14.TypeError;
    var QObject = globalThis14.QObject;
    var nativeGetOwnPropertyDescriptor2 = getOwnPropertyDescriptorModule2.f;
    var nativeDefineProperty = definePropertyModule2.f;
    var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
    var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
    var push5 = uncurryThis16([].push);
    var AllSymbols = shared("symbols");
    var ObjectPrototypeSymbols = shared("op-symbols");
    var WellKnownSymbolsStore = shared("wks");
    var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
    var fallbackDefineProperty = function(O2, P2, Attributes) {
      var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor2(ObjectPrototype2, P2);
      if (ObjectPrototypeDescriptor)
        delete ObjectPrototype2[P2];
      nativeDefineProperty(O2, P2, Attributes);
      if (ObjectPrototypeDescriptor && O2 !== ObjectPrototype2) {
        nativeDefineProperty(ObjectPrototype2, P2, ObjectPrototypeDescriptor);
      }
    };
    var setSymbolDescriptor = DESCRIPTORS7 && fails22(function() {
      return nativeObjectCreate(nativeDefineProperty({}, "a", {
        get: function() {
          return nativeDefineProperty(this, "a", { value: 7 }).a;
        }
      })).a !== 7;
    }) ? fallbackDefineProperty : nativeDefineProperty;
    var wrap = function(tag, description) {
      var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype2);
      setInternalState(symbol, {
        type: SYMBOL,
        tag,
        description
      });
      if (!DESCRIPTORS7)
        symbol.description = description;
      return symbol;
    };
    var $defineProperty = function defineProperty2(O2, P2, Attributes) {
      if (O2 === ObjectPrototype2)
        $defineProperty(ObjectPrototypeSymbols, P2, Attributes);
      anObject4(O2);
      var key = toPropertyKey(P2);
      anObject4(Attributes);
      if (hasOwn4(AllSymbols, key)) {
        if (!Attributes.enumerable) {
          if (!hasOwn4(O2, HIDDEN))
            nativeDefineProperty(O2, HIDDEN, createPropertyDescriptor(1, nativeObjectCreate(null)));
          O2[HIDDEN][key] = true;
        } else {
          if (hasOwn4(O2, HIDDEN) && O2[HIDDEN][key])
            O2[HIDDEN][key] = false;
          Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
        }
        return setSymbolDescriptor(O2, key, Attributes);
      }
      return nativeDefineProperty(O2, key, Attributes);
    };
    var $defineProperties = function defineProperties(O2, Properties) {
      anObject4(O2);
      var properties = toIndexedObject6(Properties);
      var keys3 = objectKeys(properties).concat($getOwnPropertySymbols(properties));
      $forEach2(keys3, function(key) {
        if (!DESCRIPTORS7 || call5($propertyIsEnumerable, properties, key))
          $defineProperty(O2, key, properties[key]);
      });
      return O2;
    };
    var $create = function create2(O2, Properties) {
      return Properties === void 0 ? nativeObjectCreate(O2) : $defineProperties(nativeObjectCreate(O2), Properties);
    };
    var $propertyIsEnumerable = function propertyIsEnumerable(V2) {
      var P2 = toPropertyKey(V2);
      var enumerable = call5(nativePropertyIsEnumerable, this, P2);
      if (this === ObjectPrototype2 && hasOwn4(AllSymbols, P2) && !hasOwn4(ObjectPrototypeSymbols, P2))
        return false;
      return enumerable || !hasOwn4(this, P2) || !hasOwn4(AllSymbols, P2) || hasOwn4(this, HIDDEN) && this[HIDDEN][P2] ? enumerable : true;
    };
    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor4(O2, P2) {
      var it3 = toIndexedObject6(O2);
      var key = toPropertyKey(P2);
      if (it3 === ObjectPrototype2 && hasOwn4(AllSymbols, key) && !hasOwn4(ObjectPrototypeSymbols, key))
        return;
      var descriptor = nativeGetOwnPropertyDescriptor2(it3, key);
      if (descriptor && hasOwn4(AllSymbols, key) && !(hasOwn4(it3, HIDDEN) && it3[HIDDEN][key])) {
        descriptor.enumerable = true;
      }
      return descriptor;
    };
    var $getOwnPropertyNames = function getOwnPropertyNames3(O2) {
      var names = nativeGetOwnPropertyNames(toIndexedObject6(O2));
      var result = [];
      $forEach2(names, function(key) {
        if (!hasOwn4(AllSymbols, key) && !hasOwn4(hiddenKeys, key))
          push5(result, key);
      });
      return result;
    };
    var $getOwnPropertySymbols = function(O2) {
      var IS_OBJECT_PROTOTYPE = O2 === ObjectPrototype2;
      var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject6(O2));
      var result = [];
      $forEach2(names, function(key) {
        if (hasOwn4(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn4(ObjectPrototype2, key))) {
          push5(result, AllSymbols[key]);
        }
      });
      return result;
    };
    if (!NATIVE_SYMBOL) {
      $Symbol = function Symbol2() {
        if (isPrototypeOf4(SymbolPrototype2, this))
          throw new TypeError3("Symbol is not a constructor");
        var description = !arguments.length || arguments[0] === void 0 ? void 0 : $toString2(arguments[0]);
        var tag = uid(description);
        var setter = function(value) {
          var $this = this === void 0 ? globalThis14 : this;
          if ($this === ObjectPrototype2)
            call5(setter, ObjectPrototypeSymbols, value);
          if (hasOwn4($this, HIDDEN) && hasOwn4($this[HIDDEN], tag))
            $this[HIDDEN][tag] = false;
          var descriptor = createPropertyDescriptor(1, value);
          try {
            setSymbolDescriptor($this, tag, descriptor);
          } catch (error2) {
            if (!(error2 instanceof RangeError3))
              throw error2;
            fallbackDefineProperty($this, tag, descriptor);
          }
        };
        if (DESCRIPTORS7 && USE_SETTER)
          setSymbolDescriptor(ObjectPrototype2, tag, { configurable: true, set: setter });
        return wrap(tag, description);
      };
      SymbolPrototype2 = $Symbol[PROTOTYPE];
      defineBuiltIn5(SymbolPrototype2, "toString", function toString8() {
        return getInternalState(this).tag;
      });
      defineBuiltIn5($Symbol, "withoutSetter", function(description) {
        return wrap(uid(description), description);
      });
      propertyIsEnumerableModule.f = $propertyIsEnumerable;
      definePropertyModule2.f = $defineProperty;
      definePropertiesModule.f = $defineProperties;
      getOwnPropertyDescriptorModule2.f = $getOwnPropertyDescriptor;
      getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
      getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
      wrappedWellKnownSymbolModule.f = function(name) {
        return wrap(wellKnownSymbol8(name), name);
      };
      if (DESCRIPTORS7) {
        defineBuiltInAccessor4(SymbolPrototype2, "description", {
          configurable: true,
          get: function description() {
            return getInternalState(this).description;
          }
        });
        if (!IS_PURE4) {
          defineBuiltIn5(ObjectPrototype2, "propertyIsEnumerable", $propertyIsEnumerable, { unsafe: true });
        }
      }
    }
    $32({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
      Symbol: $Symbol
    });
    $forEach2(objectKeys(WellKnownSymbolsStore), function(name) {
      defineWellKnownSymbol6(name);
    });
    $32({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
      useSetter: function() {
        USE_SETTER = true;
      },
      useSimple: function() {
        USE_SETTER = false;
      }
    });
    $32({ target: "Object", stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS7 }, {
      // `Object.create` method
      // https://tc39.es/ecma262/#sec-object.create
      create: $create,
      // `Object.defineProperty` method
      // https://tc39.es/ecma262/#sec-object.defineproperty
      defineProperty: $defineProperty,
      // `Object.defineProperties` method
      // https://tc39.es/ecma262/#sec-object.defineproperties
      defineProperties: $defineProperties,
      // `Object.getOwnPropertyDescriptor` method
      // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor
    });
    $32({ target: "Object", stat: true, forced: !NATIVE_SYMBOL }, {
      // `Object.getOwnPropertyNames` method
      // https://tc39.es/ecma262/#sec-object.getownpropertynames
      getOwnPropertyNames: $getOwnPropertyNames
    });
    defineSymbolToPrimitive2();
    setToStringTag5($Symbol, SYMBOL);
    hiddenKeys[HIDDEN] = true;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/symbol-registry-detection.js
var require_symbol_registry_detection = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/symbol-registry-detection.js"(exports, module) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module.exports = NATIVE_SYMBOL && !!Symbol["for"] && !!Symbol.keyFor;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.symbol.for.js
var require_es_symbol_for = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.symbol.for.js"() {
    "use strict";
    var $32 = require_export();
    var getBuiltIn4 = require_get_built_in();
    var hasOwn4 = require_has_own_property();
    var toString8 = require_to_string();
    var shared = require_shared();
    var NATIVE_SYMBOL_REGISTRY = require_symbol_registry_detection();
    var StringToSymbolRegistry = shared("string-to-symbol-registry");
    var SymbolToStringRegistry = shared("symbol-to-string-registry");
    $32({ target: "Symbol", stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
      "for": function(key) {
        var string = toString8(key);
        if (hasOwn4(StringToSymbolRegistry, string))
          return StringToSymbolRegistry[string];
        var symbol = getBuiltIn4("Symbol")(string);
        StringToSymbolRegistry[string] = symbol;
        SymbolToStringRegistry[symbol] = string;
        return symbol;
      }
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.symbol.key-for.js
var require_es_symbol_key_for = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.symbol.key-for.js"() {
    "use strict";
    var $32 = require_export();
    var hasOwn4 = require_has_own_property();
    var isSymbol2 = require_is_symbol();
    var tryToString = require_try_to_string();
    var shared = require_shared();
    var NATIVE_SYMBOL_REGISTRY = require_symbol_registry_detection();
    var SymbolToStringRegistry = shared("symbol-to-string-registry");
    $32({ target: "Symbol", stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
      keyFor: function keyFor(sym) {
        if (!isSymbol2(sym))
          throw new TypeError(tryToString(sym) + " is not a symbol");
        if (hasOwn4(SymbolToStringRegistry, sym))
          return SymbolToStringRegistry[sym];
      }
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/function-apply.js
var require_function_apply = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/function-apply.js"(exports, module) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype3 = Function.prototype;
    var apply5 = FunctionPrototype3.apply;
    var call5 = FunctionPrototype3.call;
    module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call5.bind(apply5) : function() {
      return call5.apply(apply5, arguments);
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/get-json-replacer-function.js
var require_get_json_replacer_function = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/get-json-replacer-function.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this();
    var isArray3 = require_is_array();
    var isCallable5 = require_is_callable();
    var classof2 = require_classof_raw();
    var toString8 = require_to_string();
    var push5 = uncurryThis16([].push);
    module.exports = function(replacer) {
      if (isCallable5(replacer))
        return replacer;
      if (!isArray3(replacer))
        return;
      var rawLength = replacer.length;
      var keys3 = [];
      for (var i2 = 0; i2 < rawLength; i2++) {
        var element = replacer[i2];
        if (typeof element == "string")
          push5(keys3, element);
        else if (typeof element == "number" || classof2(element) === "Number" || classof2(element) === "String")
          push5(keys3, toString8(element));
      }
      var keysLength = keys3.length;
      var root = true;
      return function(key, value) {
        if (root) {
          root = false;
          return value;
        }
        if (isArray3(this))
          return value;
        for (var j2 = 0; j2 < keysLength; j2++)
          if (keys3[j2] === key)
            return value;
      };
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.json.stringify.js
var require_es_json_stringify = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.json.stringify.js"() {
    "use strict";
    var $32 = require_export();
    var getBuiltIn4 = require_get_built_in();
    var apply5 = require_function_apply();
    var call5 = require_function_call();
    var uncurryThis16 = require_function_uncurry_this();
    var fails22 = require_fails();
    var isCallable5 = require_is_callable();
    var isSymbol2 = require_is_symbol();
    var arraySlice3 = require_array_slice();
    var getReplacerFunction = require_get_json_replacer_function();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var $String2 = String;
    var $stringify = getBuiltIn4("JSON", "stringify");
    var exec = uncurryThis16(/./.exec);
    var charAt = uncurryThis16("".charAt);
    var charCodeAt2 = uncurryThis16("".charCodeAt);
    var replace = uncurryThis16("".replace);
    var numberToString = uncurryThis16(1 .toString);
    var tester = /[\uD800-\uDFFF]/g;
    var low = /^[\uD800-\uDBFF]$/;
    var hi2 = /^[\uDC00-\uDFFF]$/;
    var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails22(function() {
      var symbol = getBuiltIn4("Symbol")("stringify detection");
      return $stringify([symbol]) !== "[null]" || $stringify({ a: symbol }) !== "{}" || $stringify(Object(symbol)) !== "{}";
    });
    var ILL_FORMED_UNICODE = fails22(function() {
      return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\uDEAD") !== '"\\udead"';
    });
    var stringifyWithSymbolsFix = function(it3, replacer) {
      var args = arraySlice3(arguments);
      var $replacer = getReplacerFunction(replacer);
      if (!isCallable5($replacer) && (it3 === void 0 || isSymbol2(it3)))
        return;
      args[1] = function(key, value) {
        if (isCallable5($replacer))
          value = call5($replacer, this, $String2(key), value);
        if (!isSymbol2(value))
          return value;
      };
      return apply5($stringify, null, args);
    };
    var fixIllFormed = function(match, offset, string) {
      var prev = charAt(string, offset - 1);
      var next = charAt(string, offset + 1);
      if (exec(low, match) && !exec(hi2, next) || exec(hi2, match) && !exec(low, prev)) {
        return "\\u" + numberToString(charCodeAt2(match, 0), 16);
      }
      return match;
    };
    if ($stringify) {
      $32({ target: "JSON", stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        stringify: function stringify(it3, replacer, space) {
          var args = arraySlice3(arguments);
          var result = apply5(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
          return ILL_FORMED_UNICODE && typeof result == "string" ? replace(result, tester, fixIllFormed) : result;
        }
      });
    }
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.object.get-own-property-symbols.js
var require_es_object_get_own_property_symbols = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.object.get-own-property-symbols.js"() {
    "use strict";
    var $32 = require_export();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var fails22 = require_fails();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var toObject7 = require_to_object();
    var FORCED11 = !NATIVE_SYMBOL || fails22(function() {
      getOwnPropertySymbolsModule.f(1);
    });
    $32({ target: "Object", stat: true, forced: FORCED11 }, {
      getOwnPropertySymbols: function getOwnPropertySymbols(it3) {
        var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject7(it3)) : [];
      }
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module) {
    "use strict";
    var $TypeError = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module.exports = function(it3) {
      if (it3 > MAX_SAFE_INTEGER)
        throw $TypeError("Maximum allowed index exceeded");
      return it3;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/create-property.js
var require_create_property = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/create-property.js"(exports, module) {
    "use strict";
    var DESCRIPTORS7 = require_descriptors();
    var definePropertyModule2 = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module.exports = function(object, key, value) {
      if (DESCRIPTORS7)
        definePropertyModule2.f(object, key, createPropertyDescriptor(0, value));
      else
        object[key] = value;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-method-has-species-support.js
var require_array_method_has_species_support = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-method-has-species-support.js"(exports, module) {
    "use strict";
    var fails22 = require_fails();
    var wellKnownSymbol8 = require_well_known_symbol();
    var V8_VERSION2 = require_environment_v8_version();
    var SPECIES2 = wellKnownSymbol8("species");
    module.exports = function(METHOD_NAME) {
      return V8_VERSION2 >= 51 || !fails22(function() {
        var array = [];
        var constructor = array.constructor = {};
        constructor[SPECIES2] = function() {
          return { foo: 1 };
        };
        return array[METHOD_NAME](Boolean).foo !== 1;
      });
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-fill.js
var require_array_fill = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-fill.js"(exports, module) {
    "use strict";
    var toObject7 = require_to_object();
    var toAbsoluteIndex4 = require_to_absolute_index();
    var lengthOfArrayLike7 = require_length_of_array_like();
    module.exports = function fill3(value) {
      var O2 = toObject7(this);
      var length = lengthOfArrayLike7(O2);
      var argumentsLength = arguments.length;
      var index = toAbsoluteIndex4(argumentsLength > 1 ? arguments[1] : void 0, length);
      var end2 = argumentsLength > 2 ? arguments[2] : void 0;
      var endPos = end2 === void 0 ? length : toAbsoluteIndex4(end2, length);
      while (endPos > index)
        O2[index++] = value;
      return O2;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/add-to-unscopables.js
var require_add_to_unscopables = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/add-to-unscopables.js"(exports, module) {
    "use strict";
    var wellKnownSymbol8 = require_well_known_symbol();
    var create2 = require_object_create();
    var defineProperty2 = require_object_define_property().f;
    var UNSCOPABLES = wellKnownSymbol8("unscopables");
    var ArrayPrototype = Array.prototype;
    if (ArrayPrototype[UNSCOPABLES] === void 0) {
      defineProperty2(ArrayPrototype, UNSCOPABLES, {
        configurable: true,
        value: create2(null)
      });
    }
    module.exports = function(key) {
      ArrayPrototype[UNSCOPABLES][key] = true;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/flatten-into-array.js
var require_flatten_into_array = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/flatten-into-array.js"(exports, module) {
    "use strict";
    var isArray3 = require_is_array();
    var lengthOfArrayLike7 = require_length_of_array_like();
    var doesNotExceedSafeInteger3 = require_does_not_exceed_safe_integer();
    var bind2 = require_function_bind_context();
    var flattenIntoArray2 = function(target, original, source, sourceLen, start, depth, mapper, thisArg) {
      var targetIndex = start;
      var sourceIndex = 0;
      var mapFn = mapper ? bind2(mapper, thisArg) : false;
      var element, elementLen;
      while (sourceIndex < sourceLen) {
        if (sourceIndex in source) {
          element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
          if (depth > 0 && isArray3(element)) {
            elementLen = lengthOfArrayLike7(element);
            targetIndex = flattenIntoArray2(target, original, element, elementLen, targetIndex, depth - 1) - 1;
          } else {
            doesNotExceedSafeInteger3(targetIndex + 1);
            target[targetIndex] = element;
          }
          targetIndex++;
        }
        sourceIndex++;
      }
      return targetIndex;
    };
    module.exports = flattenIntoArray2;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/iterator-close.js"(exports, module) {
    "use strict";
    var call5 = require_function_call();
    var anObject4 = require_an_object();
    var getMethod2 = require_get_method();
    module.exports = function(iterator, kind, value) {
      var innerResult, innerError;
      anObject4(iterator);
      try {
        innerResult = getMethod2(iterator, "return");
        if (!innerResult) {
          if (kind === "throw")
            throw value;
          return value;
        }
        innerResult = call5(innerResult, iterator);
      } catch (error2) {
        innerError = true;
        innerResult = error2;
      }
      if (kind === "throw")
        throw value;
      if (innerError)
        throw innerResult;
      anObject4(innerResult);
      return value;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/call-with-safe-iteration-closing.js
var require_call_with_safe_iteration_closing = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports, module) {
    "use strict";
    var anObject4 = require_an_object();
    var iteratorClose = require_iterator_close();
    module.exports = function(iterator, fn2, value, ENTRIES) {
      try {
        return ENTRIES ? fn2(anObject4(value)[0], value[1]) : fn2(value);
      } catch (error2) {
        iteratorClose(iterator, "throw", error2);
      }
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/iterators.js
var require_iterators = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/iterators.js"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-array-iterator-method.js"(exports, module) {
    "use strict";
    var wellKnownSymbol8 = require_well_known_symbol();
    var Iterators = require_iterators();
    var ITERATOR3 = wellKnownSymbol8("iterator");
    var ArrayPrototype = Array.prototype;
    module.exports = function(it3) {
      return it3 !== void 0 && (Iterators.Array === it3 || ArrayPrototype[ITERATOR3] === it3);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/get-iterator-method.js
var require_get_iterator_method = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/get-iterator-method.js"(exports, module) {
    "use strict";
    var classof2 = require_classof();
    var getMethod2 = require_get_method();
    var isNullOrUndefined2 = require_is_null_or_undefined();
    var Iterators = require_iterators();
    var wellKnownSymbol8 = require_well_known_symbol();
    var ITERATOR3 = wellKnownSymbol8("iterator");
    module.exports = function(it3) {
      if (!isNullOrUndefined2(it3))
        return getMethod2(it3, ITERATOR3) || getMethod2(it3, "@@iterator") || Iterators[classof2(it3)];
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/get-iterator.js"(exports, module) {
    "use strict";
    var call5 = require_function_call();
    var aCallable4 = require_a_callable();
    var anObject4 = require_an_object();
    var tryToString = require_try_to_string();
    var getIteratorMethod = require_get_iterator_method();
    var $TypeError = TypeError;
    module.exports = function(argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
      if (aCallable4(iteratorMethod))
        return anObject4(call5(iteratorMethod, argument));
      throw new $TypeError(tryToString(argument) + " is not iterable");
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-from.js
var require_array_from = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-from.js"(exports, module) {
    "use strict";
    var bind2 = require_function_bind_context();
    var call5 = require_function_call();
    var toObject7 = require_to_object();
    var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var isConstructor2 = require_is_constructor();
    var lengthOfArrayLike7 = require_length_of_array_like();
    var createProperty5 = require_create_property();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var $Array2 = Array;
    module.exports = function from2(arrayLike) {
      var O2 = toObject7(arrayLike);
      var IS_CONSTRUCTOR = isConstructor2(this);
      var argumentsLength = arguments.length;
      var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
      var mapping = mapfn !== void 0;
      if (mapping)
        mapfn = bind2(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
      var iteratorMethod = getIteratorMethod(O2);
      var index = 0;
      var length, result, step, iterator, next, value;
      if (iteratorMethod && !(this === $Array2 && isArrayIteratorMethod(iteratorMethod))) {
        result = IS_CONSTRUCTOR ? new this() : [];
        iterator = getIterator(O2, iteratorMethod);
        next = iterator.next;
        for (; !(step = call5(next, iterator)).done; index++) {
          value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
          createProperty5(result, index, value);
        }
      } else {
        length = lengthOfArrayLike7(O2);
        result = IS_CONSTRUCTOR ? new this(length) : $Array2(length);
        for (; length > index; index++) {
          value = mapping ? mapfn(O2[index], index) : O2[index];
          createProperty5(result, index, value);
        }
      }
      result.length = index;
      return result;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/check-correctness-of-iteration.js
var require_check_correctness_of_iteration = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/check-correctness-of-iteration.js"(exports, module) {
    "use strict";
    var wellKnownSymbol8 = require_well_known_symbol();
    var ITERATOR3 = wellKnownSymbol8("iterator");
    var SAFE_CLOSING = false;
    try {
      called = 0;
      iteratorWithReturn = {
        next: function() {
          return { done: !!called++ };
        },
        "return": function() {
          SAFE_CLOSING = true;
        }
      };
      iteratorWithReturn[ITERATOR3] = function() {
        return this;
      };
      Array.from(iteratorWithReturn, function() {
        throw 2;
      });
    } catch (error2) {
    }
    var called;
    var iteratorWithReturn;
    module.exports = function(exec, SKIP_CLOSING) {
      try {
        if (!SKIP_CLOSING && !SAFE_CLOSING)
          return false;
      } catch (error2) {
        return false;
      }
      var ITERATION_SUPPORT = false;
      try {
        var object = {};
        object[ITERATOR3] = function() {
          return {
            next: function() {
              return { done: ITERATION_SUPPORT = true };
            }
          };
        };
        exec(object);
      } catch (error2) {
      }
      return ITERATION_SUPPORT;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/correct-prototype-getter.js
var require_correct_prototype_getter = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/correct-prototype-getter.js"(exports, module) {
    "use strict";
    var fails22 = require_fails();
    module.exports = !fails22(function() {
      function F2() {
      }
      F2.prototype.constructor = null;
      return Object.getPrototypeOf(new F2()) !== F2.prototype;
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-get-prototype-of.js
var require_object_get_prototype_of = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-get-prototype-of.js"(exports, module) {
    "use strict";
    var hasOwn4 = require_has_own_property();
    var isCallable5 = require_is_callable();
    var toObject7 = require_to_object();
    var sharedKey = require_shared_key();
    var CORRECT_PROTOTYPE_GETTER2 = require_correct_prototype_getter();
    var IE_PROTO = sharedKey("IE_PROTO");
    var $Object = Object;
    var ObjectPrototype2 = $Object.prototype;
    module.exports = CORRECT_PROTOTYPE_GETTER2 ? $Object.getPrototypeOf : function(O2) {
      var object = toObject7(O2);
      if (hasOwn4(object, IE_PROTO))
        return object[IE_PROTO];
      var constructor = object.constructor;
      if (isCallable5(constructor) && object instanceof constructor) {
        return constructor.prototype;
      }
      return object instanceof $Object ? ObjectPrototype2 : null;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/iterators-core.js
var require_iterators_core = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/iterators-core.js"(exports, module) {
    "use strict";
    var fails22 = require_fails();
    var isCallable5 = require_is_callable();
    var isObject5 = require_is_object();
    var create2 = require_object_create();
    var getPrototypeOf2 = require_object_get_prototype_of();
    var defineBuiltIn5 = require_define_built_in();
    var wellKnownSymbol8 = require_well_known_symbol();
    var IS_PURE4 = require_is_pure();
    var ITERATOR3 = wellKnownSymbol8("iterator");
    var BUGGY_SAFARI_ITERATORS = false;
    var IteratorPrototype;
    var PrototypeOfArrayIteratorPrototype;
    var arrayIterator;
    if ([].keys) {
      arrayIterator = [].keys();
      if (!("next" in arrayIterator))
        BUGGY_SAFARI_ITERATORS = true;
      else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf2(getPrototypeOf2(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
          IteratorPrototype = PrototypeOfArrayIteratorPrototype;
      }
    }
    var NEW_ITERATOR_PROTOTYPE = !isObject5(IteratorPrototype) || fails22(function() {
      var test2 = {};
      return IteratorPrototype[ITERATOR3].call(test2) !== test2;
    });
    if (NEW_ITERATOR_PROTOTYPE)
      IteratorPrototype = {};
    else if (IS_PURE4)
      IteratorPrototype = create2(IteratorPrototype);
    if (!isCallable5(IteratorPrototype[ITERATOR3])) {
      defineBuiltIn5(IteratorPrototype, ITERATOR3, function() {
        return this;
      });
    }
    module.exports = {
      IteratorPrototype,
      BUGGY_SAFARI_ITERATORS
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/iterator-create-constructor.js
var require_iterator_create_constructor = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/iterator-create-constructor.js"(exports, module) {
    "use strict";
    var IteratorPrototype = require_iterators_core().IteratorPrototype;
    var create2 = require_object_create();
    var createPropertyDescriptor = require_create_property_descriptor();
    var setToStringTag5 = require_set_to_string_tag();
    var Iterators = require_iterators();
    var returnThis = function() {
      return this;
    };
    module.exports = function(IteratorConstructor, NAME2, next, ENUMERABLE_NEXT) {
      var TO_STRING_TAG = NAME2 + " Iterator";
      IteratorConstructor.prototype = create2(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
      setToStringTag5(IteratorConstructor, TO_STRING_TAG, false, true);
      Iterators[TO_STRING_TAG] = returnThis;
      return IteratorConstructor;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/function-uncurry-this-accessor.js
var require_function_uncurry_this_accessor = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/function-uncurry-this-accessor.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this();
    var aCallable4 = require_a_callable();
    module.exports = function(object, key, method) {
      try {
        return uncurryThis16(aCallable4(Object.getOwnPropertyDescriptor(object, key)[method]));
      } catch (error2) {
      }
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-possible-prototype.js
var require_is_possible_prototype = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-possible-prototype.js"(exports, module) {
    "use strict";
    var isObject5 = require_is_object();
    module.exports = function(argument) {
      return isObject5(argument) || argument === null;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/a-possible-prototype.js
var require_a_possible_prototype = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/a-possible-prototype.js"(exports, module) {
    "use strict";
    var isPossiblePrototype = require_is_possible_prototype();
    var $String2 = String;
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isPossiblePrototype(argument))
        return argument;
      throw new $TypeError("Can't set " + $String2(argument) + " as a prototype");
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-set-prototype-of.js
var require_object_set_prototype_of = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-set-prototype-of.js"(exports, module) {
    "use strict";
    var uncurryThisAccessor = require_function_uncurry_this_accessor();
    var isObject5 = require_is_object();
    var requireObjectCoercible4 = require_require_object_coercible();
    var aPossiblePrototype = require_a_possible_prototype();
    module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
      var CORRECT_SETTER = false;
      var test2 = {};
      var setter;
      try {
        setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
        setter(test2, []);
        CORRECT_SETTER = test2 instanceof Array;
      } catch (error2) {
      }
      return function setPrototypeOf(O2, proto) {
        requireObjectCoercible4(O2);
        aPossiblePrototype(proto);
        if (!isObject5(O2))
          return O2;
        if (CORRECT_SETTER)
          setter(O2, proto);
        else
          O2.__proto__ = proto;
        return O2;
      };
    }() : void 0);
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/iterator-define.js
var require_iterator_define = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/iterator-define.js"(exports, module) {
    "use strict";
    var $32 = require_export();
    var call5 = require_function_call();
    var IS_PURE4 = require_is_pure();
    var FunctionName = require_function_name();
    var isCallable5 = require_is_callable();
    var createIteratorConstructor = require_iterator_create_constructor();
    var getPrototypeOf2 = require_object_get_prototype_of();
    var setPrototypeOf = require_object_set_prototype_of();
    var setToStringTag5 = require_set_to_string_tag();
    var createNonEnumerableProperty3 = require_create_non_enumerable_property();
    var defineBuiltIn5 = require_define_built_in();
    var wellKnownSymbol8 = require_well_known_symbol();
    var Iterators = require_iterators();
    var IteratorsCore = require_iterators_core();
    var PROPER_FUNCTION_NAME2 = FunctionName.PROPER;
    var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
    var IteratorPrototype = IteratorsCore.IteratorPrototype;
    var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
    var ITERATOR3 = wellKnownSymbol8("iterator");
    var KEYS = "keys";
    var VALUES = "values";
    var ENTRIES = "entries";
    var returnThis = function() {
      return this;
    };
    module.exports = function(Iterable, NAME2, IteratorConstructor, next, DEFAULT, IS_SET, FORCED11) {
      createIteratorConstructor(IteratorConstructor, NAME2, next);
      var getIterationMethod = function(KIND) {
        if (KIND === DEFAULT && defaultIterator)
          return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype)
          return IterablePrototype[KIND];
        switch (KIND) {
          case KEYS:
            return function keys3() {
              return new IteratorConstructor(this, KIND);
            };
          case VALUES:
            return function values2() {
              return new IteratorConstructor(this, KIND);
            };
          case ENTRIES:
            return function entries3() {
              return new IteratorConstructor(this, KIND);
            };
        }
        return function() {
          return new IteratorConstructor(this);
        };
      };
      var TO_STRING_TAG = NAME2 + " Iterator";
      var INCORRECT_VALUES_NAME = false;
      var IterablePrototype = Iterable.prototype;
      var nativeIterator = IterablePrototype[ITERATOR3] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
      var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
      var anyNativeIterator = NAME2 === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
      var CurrentIteratorPrototype, methods, KEY;
      if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf2(anyNativeIterator.call(new Iterable()));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
          if (!IS_PURE4 && getPrototypeOf2(CurrentIteratorPrototype) !== IteratorPrototype) {
            if (setPrototypeOf) {
              setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
            } else if (!isCallable5(CurrentIteratorPrototype[ITERATOR3])) {
              defineBuiltIn5(CurrentIteratorPrototype, ITERATOR3, returnThis);
            }
          }
          setToStringTag5(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
          if (IS_PURE4)
            Iterators[TO_STRING_TAG] = returnThis;
        }
      }
      if (PROPER_FUNCTION_NAME2 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (!IS_PURE4 && CONFIGURABLE_FUNCTION_NAME) {
          createNonEnumerableProperty3(IterablePrototype, "name", VALUES);
        } else {
          INCORRECT_VALUES_NAME = true;
          defaultIterator = function values2() {
            return call5(nativeIterator, this);
          };
        }
      }
      if (DEFAULT) {
        methods = {
          values: getIterationMethod(VALUES),
          keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
          entries: getIterationMethod(ENTRIES)
        };
        if (FORCED11)
          for (KEY in methods) {
            if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
              defineBuiltIn5(IterablePrototype, KEY, methods[KEY]);
            }
          }
        else
          $32({ target: NAME2, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
      }
      if ((!IS_PURE4 || FORCED11) && IterablePrototype[ITERATOR3] !== defaultIterator) {
        defineBuiltIn5(IterablePrototype, ITERATOR3, defaultIterator, { name: DEFAULT });
      }
      Iterators[NAME2] = defaultIterator;
      return methods;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/create-iter-result-object.js
var require_create_iter_result_object = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/create-iter-result-object.js"(exports, module) {
    "use strict";
    module.exports = function(value, done) {
      return { value, done };
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.array.iterator.js
var require_es_array_iterator = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.array.iterator.js"(exports, module) {
    "use strict";
    var toIndexedObject6 = require_to_indexed_object();
    var addToUnscopables6 = require_add_to_unscopables();
    var Iterators = require_iterators();
    var InternalStateModule = require_internal_state();
    var defineProperty2 = require_object_define_property().f;
    var defineIterator = require_iterator_define();
    var createIterResultObject = require_create_iter_result_object();
    var IS_PURE4 = require_is_pure();
    var DESCRIPTORS7 = require_descriptors();
    var ARRAY_ITERATOR = "Array Iterator";
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
    module.exports = defineIterator(Array, "Array", function(iterated, kind) {
      setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject6(iterated),
        // target
        index: 0,
        // next index
        kind
        // kind
      });
    }, function() {
      var state = getInternalState(this);
      var target = state.target;
      var index = state.index++;
      if (!target || index >= target.length) {
        state.target = null;
        return createIterResultObject(void 0, true);
      }
      switch (state.kind) {
        case "keys":
          return createIterResultObject(index, false);
        case "values":
          return createIterResultObject(target[index], false);
      }
      return createIterResultObject([index, target[index]], false);
    }, "values");
    var values2 = Iterators.Arguments = Iterators.Array;
    addToUnscopables6("keys");
    addToUnscopables6("values");
    addToUnscopables6("entries");
    if (!IS_PURE4 && DESCRIPTORS7 && values2.name !== "values")
      try {
        defineProperty2(values2, "name", { value: "values" });
      } catch (error2) {
      }
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-method-is-strict.js
var require_array_method_is_strict = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-method-is-strict.js"(exports, module) {
    "use strict";
    var fails22 = require_fails();
    module.exports = function(METHOD_NAME, argument) {
      var method = [][METHOD_NAME];
      return !!method && fails22(function() {
        method.call(null, argument || function() {
          return 1;
        }, 1);
      });
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/delete-property-or-throw.js
var require_delete_property_or_throw = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/delete-property-or-throw.js"(exports, module) {
    "use strict";
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module.exports = function(O2, P2) {
      if (!delete O2[P2])
        throw new $TypeError("Cannot delete property " + tryToString(P2) + " of " + tryToString(O2));
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-sort.js
var require_array_sort = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-sort.js"(exports, module) {
    "use strict";
    var arraySlice3 = require_array_slice();
    var floor3 = Math.floor;
    var sort3 = function(array, comparefn) {
      var length = array.length;
      if (length < 8) {
        var i2 = 1;
        var element, j2;
        while (i2 < length) {
          j2 = i2;
          element = array[i2];
          while (j2 && comparefn(array[j2 - 1], element) > 0) {
            array[j2] = array[--j2];
          }
          if (j2 !== i2++)
            array[j2] = element;
        }
      } else {
        var middle = floor3(length / 2);
        var left = sort3(arraySlice3(array, 0, middle), comparefn);
        var right = sort3(arraySlice3(array, middle), comparefn);
        var llength = left.length;
        var rlength = right.length;
        var lindex = 0;
        var rindex = 0;
        while (lindex < llength || rindex < rlength) {
          array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
        }
      }
      return array;
    };
    module.exports = sort3;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment-ff-version.js
var require_environment_ff_version = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment-ff-version.js"(exports, module) {
    "use strict";
    var userAgent = require_environment_user_agent();
    var firefox = userAgent.match(/firefox\/(\d+)/i);
    module.exports = !!firefox && +firefox[1];
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment-is-ie-or-edge.js
var require_environment_is_ie_or_edge = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment-is-ie-or-edge.js"(exports, module) {
    "use strict";
    var UA = require_environment_user_agent();
    module.exports = /MSIE|Trident/.test(UA);
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment-webkit-version.js
var require_environment_webkit_version = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment-webkit-version.js"(exports, module) {
    "use strict";
    var userAgent = require_environment_user_agent();
    var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
    module.exports = !!webkit && +webkit[1];
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-set-length.js"(exports, module) {
    "use strict";
    var DESCRIPTORS7 = require_descriptors();
    var isArray3 = require_is_array();
    var $TypeError = TypeError;
    var getOwnPropertyDescriptor4 = Object.getOwnPropertyDescriptor;
    var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS7 && !function() {
      if (this !== void 0)
        return true;
      try {
        Object.defineProperty([], "length", { writable: false }).length = 1;
      } catch (error2) {
        return error2 instanceof TypeError;
      }
    }();
    module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O2, length) {
      if (isArray3(O2) && !getOwnPropertyDescriptor4(O2, "length").writable) {
        throw new $TypeError("Cannot set read only .length");
      }
      return O2.length = length;
    } : function(O2, length) {
      return O2.length = length;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-buffer-basic-detection.js
var require_array_buffer_basic_detection = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-buffer-basic-detection.js"(exports, module) {
    "use strict";
    module.exports = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined";
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/define-built-ins.js
var require_define_built_ins = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/define-built-ins.js"(exports, module) {
    "use strict";
    var defineBuiltIn5 = require_define_built_in();
    module.exports = function(target, src, options) {
      for (var key in src)
        defineBuiltIn5(target, key, src[key], options);
      return target;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/an-instance.js
var require_an_instance = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/an-instance.js"(exports, module) {
    "use strict";
    var isPrototypeOf4 = require_object_is_prototype_of();
    var $TypeError = TypeError;
    module.exports = function(it3, Prototype) {
      if (isPrototypeOf4(Prototype, it3))
        return it3;
      throw new $TypeError("Incorrect invocation");
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-index.js
var require_to_index = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-index.js"(exports, module) {
    "use strict";
    var toIntegerOrInfinity4 = require_to_integer_or_infinity();
    var toLength4 = require_to_length();
    var $RangeError2 = RangeError;
    module.exports = function(it3) {
      if (it3 === void 0)
        return 0;
      var number = toIntegerOrInfinity4(it3);
      var length = toLength4(number);
      if (number !== length)
        throw new $RangeError2("Wrong length or index");
      return length;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/math-sign.js
var require_math_sign = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/math-sign.js"(exports, module) {
    "use strict";
    module.exports = Math.sign || function sign(x2) {
      var n2 = +x2;
      return n2 === 0 || n2 !== n2 ? n2 : n2 < 0 ? -1 : 1;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/math-float-round.js
var require_math_float_round = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/math-float-round.js"(exports, module) {
    "use strict";
    var sign = require_math_sign();
    var abs = Math.abs;
    var EPSILON = 2220446049250313e-31;
    var INVERSE_EPSILON = 1 / EPSILON;
    var roundTiesToEven = function(n2) {
      return n2 + INVERSE_EPSILON - INVERSE_EPSILON;
    };
    module.exports = function(x2, FLOAT_EPSILON, FLOAT_MAX_VALUE, FLOAT_MIN_VALUE) {
      var n2 = +x2;
      var absolute = abs(n2);
      var s2 = sign(n2);
      if (absolute < FLOAT_MIN_VALUE)
        return s2 * roundTiesToEven(absolute / FLOAT_MIN_VALUE / FLOAT_EPSILON) * FLOAT_MIN_VALUE * FLOAT_EPSILON;
      var a2 = (1 + FLOAT_EPSILON / EPSILON) * absolute;
      var result = a2 - (a2 - absolute);
      if (result > FLOAT_MAX_VALUE || result !== result)
        return s2 * Infinity;
      return s2 * result;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/math-fround.js
var require_math_fround = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/math-fround.js"(exports, module) {
    "use strict";
    var floatRound = require_math_float_round();
    var FLOAT32_EPSILON = 11920928955078125e-23;
    var FLOAT32_MAX_VALUE = 34028234663852886e22;
    var FLOAT32_MIN_VALUE = 11754943508222875e-54;
    module.exports = Math.fround || function fround(x2) {
      return floatRound(x2, FLOAT32_EPSILON, FLOAT32_MAX_VALUE, FLOAT32_MIN_VALUE);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/ieee754.js
var require_ieee754 = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/ieee754.js"(exports, module) {
    "use strict";
    var $Array2 = Array;
    var abs = Math.abs;
    var pow2 = Math.pow;
    var floor3 = Math.floor;
    var log2 = Math.log;
    var LN2 = Math.LN2;
    var pack = function(number, mantissaLength, bytes) {
      var buffer = $Array2(bytes);
      var exponentLength = bytes * 8 - mantissaLength - 1;
      var eMax = (1 << exponentLength) - 1;
      var eBias = eMax >> 1;
      var rt2 = mantissaLength === 23 ? pow2(2, -24) - pow2(2, -77) : 0;
      var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
      var index = 0;
      var exponent, mantissa, c2;
      number = abs(number);
      if (number !== number || number === Infinity) {
        mantissa = number !== number ? 1 : 0;
        exponent = eMax;
      } else {
        exponent = floor3(log2(number) / LN2);
        c2 = pow2(2, -exponent);
        if (number * c2 < 1) {
          exponent--;
          c2 *= 2;
        }
        if (exponent + eBias >= 1) {
          number += rt2 / c2;
        } else {
          number += rt2 * pow2(2, 1 - eBias);
        }
        if (number * c2 >= 2) {
          exponent++;
          c2 /= 2;
        }
        if (exponent + eBias >= eMax) {
          mantissa = 0;
          exponent = eMax;
        } else if (exponent + eBias >= 1) {
          mantissa = (number * c2 - 1) * pow2(2, mantissaLength);
          exponent += eBias;
        } else {
          mantissa = number * pow2(2, eBias - 1) * pow2(2, mantissaLength);
          exponent = 0;
        }
      }
      while (mantissaLength >= 8) {
        buffer[index++] = mantissa & 255;
        mantissa /= 256;
        mantissaLength -= 8;
      }
      exponent = exponent << mantissaLength | mantissa;
      exponentLength += mantissaLength;
      while (exponentLength > 0) {
        buffer[index++] = exponent & 255;
        exponent /= 256;
        exponentLength -= 8;
      }
      buffer[index - 1] |= sign * 128;
      return buffer;
    };
    var unpack = function(buffer, mantissaLength) {
      var bytes = buffer.length;
      var exponentLength = bytes * 8 - mantissaLength - 1;
      var eMax = (1 << exponentLength) - 1;
      var eBias = eMax >> 1;
      var nBits = exponentLength - 7;
      var index = bytes - 1;
      var sign = buffer[index--];
      var exponent = sign & 127;
      var mantissa;
      sign >>= 7;
      while (nBits > 0) {
        exponent = exponent * 256 + buffer[index--];
        nBits -= 8;
      }
      mantissa = exponent & (1 << -nBits) - 1;
      exponent >>= -nBits;
      nBits += mantissaLength;
      while (nBits > 0) {
        mantissa = mantissa * 256 + buffer[index--];
        nBits -= 8;
      }
      if (exponent === 0) {
        exponent = 1 - eBias;
      } else if (exponent === eMax) {
        return mantissa ? NaN : sign ? -Infinity : Infinity;
      } else {
        mantissa += pow2(2, mantissaLength);
        exponent -= eBias;
      }
      return (sign ? -1 : 1) * mantissa * pow2(2, exponent - mantissaLength);
    };
    module.exports = {
      pack,
      unpack
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/inherit-if-required.js
var require_inherit_if_required = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/inherit-if-required.js"(exports, module) {
    "use strict";
    var isCallable5 = require_is_callable();
    var isObject5 = require_is_object();
    var setPrototypeOf = require_object_set_prototype_of();
    module.exports = function($this, dummy, Wrapper) {
      var NewTarget, NewTargetPrototype;
      if (
        // it can work only with native `setPrototypeOf`
        setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
        isCallable5(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject5(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
      )
        setPrototypeOf($this, NewTargetPrototype);
      return $this;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-buffer.js
var require_array_buffer = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-buffer.js"(exports, module) {
    "use strict";
    var globalThis14 = require_global_this();
    var uncurryThis16 = require_function_uncurry_this();
    var DESCRIPTORS7 = require_descriptors();
    var NATIVE_ARRAY_BUFFER = require_array_buffer_basic_detection();
    var FunctionName = require_function_name();
    var createNonEnumerableProperty3 = require_create_non_enumerable_property();
    var defineBuiltInAccessor4 = require_define_built_in_accessor();
    var defineBuiltIns = require_define_built_ins();
    var fails22 = require_fails();
    var anInstance = require_an_instance();
    var toIntegerOrInfinity4 = require_to_integer_or_infinity();
    var toLength4 = require_to_length();
    var toIndex = require_to_index();
    var fround = require_math_fround();
    var IEEE754 = require_ieee754();
    var getPrototypeOf2 = require_object_get_prototype_of();
    var setPrototypeOf = require_object_set_prototype_of();
    var arrayFill = require_array_fill();
    var arraySlice3 = require_array_slice();
    var inheritIfRequired2 = require_inherit_if_required();
    var copyConstructorProperties3 = require_copy_constructor_properties();
    var setToStringTag5 = require_set_to_string_tag();
    var InternalStateModule = require_internal_state();
    var PROPER_FUNCTION_NAME2 = FunctionName.PROPER;
    var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
    var ARRAY_BUFFER2 = "ArrayBuffer";
    var DATA_VIEW = "DataView";
    var PROTOTYPE = "prototype";
    var WRONG_LENGTH = "Wrong length";
    var WRONG_INDEX = "Wrong index";
    var getInternalArrayBufferState = InternalStateModule.getterFor(ARRAY_BUFFER2);
    var getInternalDataViewState = InternalStateModule.getterFor(DATA_VIEW);
    var setInternalState = InternalStateModule.set;
    var NativeArrayBuffer2 = globalThis14[ARRAY_BUFFER2];
    var $ArrayBuffer = NativeArrayBuffer2;
    var ArrayBufferPrototype = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
    var $DataView = globalThis14[DATA_VIEW];
    var DataViewPrototype = $DataView && $DataView[PROTOTYPE];
    var ObjectPrototype2 = Object.prototype;
    var Array2 = globalThis14.Array;
    var RangeError3 = globalThis14.RangeError;
    var fill3 = uncurryThis16(arrayFill);
    var reverse2 = uncurryThis16([].reverse);
    var packIEEE754 = IEEE754.pack;
    var unpackIEEE754 = IEEE754.unpack;
    var packInt8 = function(number) {
      return [number & 255];
    };
    var packInt16 = function(number) {
      return [number & 255, number >> 8 & 255];
    };
    var packInt32 = function(number) {
      return [number & 255, number >> 8 & 255, number >> 16 & 255, number >> 24 & 255];
    };
    var unpackInt32 = function(buffer) {
      return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
    };
    var packFloat32 = function(number) {
      return packIEEE754(fround(number), 23, 4);
    };
    var packFloat64 = function(number) {
      return packIEEE754(number, 52, 8);
    };
    var addGetter = function(Constructor, key, getInternalState) {
      defineBuiltInAccessor4(Constructor[PROTOTYPE], key, {
        configurable: true,
        get: function() {
          return getInternalState(this)[key];
        }
      });
    };
    var get = function(view, count, index, isLittleEndian) {
      var store = getInternalDataViewState(view);
      var intIndex = toIndex(index);
      var boolIsLittleEndian = !!isLittleEndian;
      if (intIndex + count > store.byteLength)
        throw new RangeError3(WRONG_INDEX);
      var bytes = store.bytes;
      var start = intIndex + store.byteOffset;
      var pack = arraySlice3(bytes, start, start + count);
      return boolIsLittleEndian ? pack : reverse2(pack);
    };
    var set2 = function(view, count, index, conversion, value, isLittleEndian) {
      var store = getInternalDataViewState(view);
      var intIndex = toIndex(index);
      var pack = conversion(+value);
      var boolIsLittleEndian = !!isLittleEndian;
      if (intIndex + count > store.byteLength)
        throw new RangeError3(WRONG_INDEX);
      var bytes = store.bytes;
      var start = intIndex + store.byteOffset;
      for (var i2 = 0; i2 < count; i2++)
        bytes[start + i2] = pack[boolIsLittleEndian ? i2 : count - i2 - 1];
    };
    if (!NATIVE_ARRAY_BUFFER) {
      $ArrayBuffer = function ArrayBuffer3(length) {
        anInstance(this, ArrayBufferPrototype);
        var byteLength = toIndex(length);
        setInternalState(this, {
          type: ARRAY_BUFFER2,
          bytes: fill3(Array2(byteLength), 0),
          byteLength
        });
        if (!DESCRIPTORS7) {
          this.byteLength = byteLength;
          this.detached = false;
        }
      };
      ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE];
      $DataView = function DataView2(buffer, byteOffset, byteLength) {
        anInstance(this, DataViewPrototype);
        anInstance(buffer, ArrayBufferPrototype);
        var bufferState = getInternalArrayBufferState(buffer);
        var bufferLength = bufferState.byteLength;
        var offset = toIntegerOrInfinity4(byteOffset);
        if (offset < 0 || offset > bufferLength)
          throw new RangeError3("Wrong offset");
        byteLength = byteLength === void 0 ? bufferLength - offset : toLength4(byteLength);
        if (offset + byteLength > bufferLength)
          throw new RangeError3(WRONG_LENGTH);
        setInternalState(this, {
          type: DATA_VIEW,
          buffer,
          byteLength,
          byteOffset: offset,
          bytes: bufferState.bytes
        });
        if (!DESCRIPTORS7) {
          this.buffer = buffer;
          this.byteLength = byteLength;
          this.byteOffset = offset;
        }
      };
      DataViewPrototype = $DataView[PROTOTYPE];
      if (DESCRIPTORS7) {
        addGetter($ArrayBuffer, "byteLength", getInternalArrayBufferState);
        addGetter($DataView, "buffer", getInternalDataViewState);
        addGetter($DataView, "byteLength", getInternalDataViewState);
        addGetter($DataView, "byteOffset", getInternalDataViewState);
      }
      defineBuiltIns(DataViewPrototype, {
        getInt8: function getInt8(byteOffset) {
          return get(this, 1, byteOffset)[0] << 24 >> 24;
        },
        getUint8: function getUint8(byteOffset) {
          return get(this, 1, byteOffset)[0];
        },
        getInt16: function getInt16(byteOffset) {
          var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
          return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
        },
        getUint16: function getUint16(byteOffset) {
          var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
          return bytes[1] << 8 | bytes[0];
        },
        getInt32: function getInt32(byteOffset) {
          return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false));
        },
        getUint32: function getUint32(byteOffset) {
          return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false)) >>> 0;
        },
        getFloat32: function getFloat32(byteOffset) {
          return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false), 23);
        },
        getFloat64: function getFloat64(byteOffset) {
          return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : false), 52);
        },
        setInt8: function setInt8(byteOffset, value) {
          set2(this, 1, byteOffset, packInt8, value);
        },
        setUint8: function setUint8(byteOffset, value) {
          set2(this, 1, byteOffset, packInt8, value);
        },
        setInt16: function setInt16(byteOffset, value) {
          set2(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
        },
        setUint16: function setUint16(byteOffset, value) {
          set2(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
        },
        setInt32: function setInt32(byteOffset, value) {
          set2(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
        },
        setUint32: function setUint32(byteOffset, value) {
          set2(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
        },
        setFloat32: function setFloat32(byteOffset, value) {
          set2(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : false);
        },
        setFloat64: function setFloat64(byteOffset, value) {
          set2(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : false);
        }
      });
    } else {
      INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME2 && NativeArrayBuffer2.name !== ARRAY_BUFFER2;
      if (!fails22(function() {
        NativeArrayBuffer2(1);
      }) || !fails22(function() {
        new NativeArrayBuffer2(-1);
      }) || fails22(function() {
        new NativeArrayBuffer2();
        new NativeArrayBuffer2(1.5);
        new NativeArrayBuffer2(NaN);
        return NativeArrayBuffer2.length !== 1 || INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
      })) {
        $ArrayBuffer = function ArrayBuffer3(length) {
          anInstance(this, ArrayBufferPrototype);
          return inheritIfRequired2(new NativeArrayBuffer2(toIndex(length)), this, $ArrayBuffer);
        };
        $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype;
        ArrayBufferPrototype.constructor = $ArrayBuffer;
        copyConstructorProperties3($ArrayBuffer, NativeArrayBuffer2);
      } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
        createNonEnumerableProperty3(NativeArrayBuffer2, "name", ARRAY_BUFFER2);
      }
      if (setPrototypeOf && getPrototypeOf2(DataViewPrototype) !== ObjectPrototype2) {
        setPrototypeOf(DataViewPrototype, ObjectPrototype2);
      }
      testView = new $DataView(new $ArrayBuffer(2));
      $setInt8 = uncurryThis16(DataViewPrototype.setInt8);
      testView.setInt8(0, 2147483648);
      testView.setInt8(1, 2147483649);
      if (testView.getInt8(0) || !testView.getInt8(1))
        defineBuiltIns(DataViewPrototype, {
          setInt8: function setInt8(byteOffset, value) {
            $setInt8(this, byteOffset, value << 24 >> 24);
          },
          setUint8: function setUint8(byteOffset, value) {
            $setInt8(this, byteOffset, value << 24 >> 24);
          }
        }, { unsafe: true });
    }
    var INCORRECT_ARRAY_BUFFER_NAME;
    var testView;
    var $setInt8;
    setToStringTag5($ArrayBuffer, ARRAY_BUFFER2);
    setToStringTag5($DataView, DATA_VIEW);
    module.exports = {
      ArrayBuffer: $ArrayBuffer,
      DataView: $DataView
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/set-species.js
var require_set_species = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/set-species.js"(exports, module) {
    "use strict";
    var getBuiltIn4 = require_get_built_in();
    var defineBuiltInAccessor4 = require_define_built_in_accessor();
    var wellKnownSymbol8 = require_well_known_symbol();
    var DESCRIPTORS7 = require_descriptors();
    var SPECIES2 = wellKnownSymbol8("species");
    module.exports = function(CONSTRUCTOR_NAME) {
      var Constructor = getBuiltIn4(CONSTRUCTOR_NAME);
      if (DESCRIPTORS7 && Constructor && !Constructor[SPECIES2]) {
        defineBuiltInAccessor4(Constructor, SPECIES2, {
          configurable: true,
          get: function() {
            return this;
          }
        });
      }
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/date-to-primitive.js
var require_date_to_primitive = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/date-to-primitive.js"(exports, module) {
    "use strict";
    var anObject4 = require_an_object();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var $TypeError = TypeError;
    module.exports = function(hint) {
      anObject4(this);
      if (hint === "string" || hint === "default")
        hint = "string";
      else if (hint !== "number")
        throw new $TypeError("Incorrect hint");
      return ordinaryToPrimitive(this, hint);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/this-number-value.js
var require_this_number_value = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/this-number-value.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this();
    module.exports = uncurryThis16(1 .valueOf);
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/whitespaces.js
var require_whitespaces = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/whitespaces.js"(exports, module) {
    "use strict";
    module.exports = "	\n\v\f\r                　\u2028\u2029\uFEFF";
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/string-trim.js
var require_string_trim = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/string-trim.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this();
    var requireObjectCoercible4 = require_require_object_coercible();
    var toString8 = require_to_string();
    var whitespaces = require_whitespaces();
    var replace = uncurryThis16("".replace);
    var ltrim = RegExp("^[" + whitespaces + "]+");
    var rtrim = RegExp("(^|[^" + whitespaces + "])[" + whitespaces + "]+$");
    var createMethod = function(TYPE) {
      return function($this) {
        var string = toString8(requireObjectCoercible4($this));
        if (TYPE & 1)
          string = replace(string, ltrim, "");
        if (TYPE & 2)
          string = replace(string, rtrim, "$1");
        return string;
      };
    };
    module.exports = {
      // `String.prototype.{ trimLeft, trimStart }` methods
      // https://tc39.es/ecma262/#sec-string.prototype.trimstart
      start: createMethod(1),
      // `String.prototype.{ trimRight, trimEnd }` methods
      // https://tc39.es/ecma262/#sec-string.prototype.trimend
      end: createMethod(2),
      // `String.prototype.trim` method
      // https://tc39.es/ecma262/#sec-string.prototype.trim
      trim: createMethod(3)
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/string-repeat.js
var require_string_repeat = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/string-repeat.js"(exports, module) {
    "use strict";
    var toIntegerOrInfinity4 = require_to_integer_or_infinity();
    var toString8 = require_to_string();
    var requireObjectCoercible4 = require_require_object_coercible();
    var $RangeError2 = RangeError;
    module.exports = function repeat2(count) {
      var str = toString8(requireObjectCoercible4(this));
      var result = "";
      var n2 = toIntegerOrInfinity4(count);
      if (n2 < 0 || n2 === Infinity)
        throw new $RangeError2("Wrong number of repetitions");
      for (; n2 > 0; (n2 >>>= 1) && (str += str))
        if (n2 & 1)
          result += str;
      return result;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-assign.js
var require_object_assign = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-assign.js"(exports, module) {
    "use strict";
    var DESCRIPTORS7 = require_descriptors();
    var uncurryThis16 = require_function_uncurry_this();
    var call5 = require_function_call();
    var fails22 = require_fails();
    var objectKeys = require_object_keys();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var toObject7 = require_to_object();
    var IndexedObject2 = require_indexed_object();
    var $assign = Object.assign;
    var defineProperty2 = Object.defineProperty;
    var concat3 = uncurryThis16([].concat);
    module.exports = !$assign || fails22(function() {
      if (DESCRIPTORS7 && $assign({ b: 1 }, $assign(defineProperty2({}, "a", {
        enumerable: true,
        get: function() {
          defineProperty2(this, "b", {
            value: 3,
            enumerable: false
          });
        }
      }), { b: 2 })).b !== 1)
        return true;
      var A2 = {};
      var B2 = {};
      var symbol = Symbol("assign detection");
      var alphabet = "abcdefghijklmnopqrst";
      A2[symbol] = 7;
      alphabet.split("").forEach(function(chr) {
        B2[chr] = chr;
      });
      return $assign({}, A2)[symbol] !== 7 || objectKeys($assign({}, B2)).join("") !== alphabet;
    }) ? function assign2(target, source) {
      var T2 = toObject7(target);
      var argumentsLength = arguments.length;
      var index = 1;
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      var propertyIsEnumerable = propertyIsEnumerableModule.f;
      while (argumentsLength > index) {
        var S2 = IndexedObject2(arguments[index++]);
        var keys3 = getOwnPropertySymbols ? concat3(objectKeys(S2), getOwnPropertySymbols(S2)) : objectKeys(S2);
        var length = keys3.length;
        var j2 = 0;
        var key;
        while (length > j2) {
          key = keys3[j2++];
          if (!DESCRIPTORS7 || call5(propertyIsEnumerable, S2, key))
            T2[key] = S2[key];
        }
      }
      return T2;
    } : $assign;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-to-array.js
var require_object_to_array = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-to-array.js"(exports, module) {
    "use strict";
    var DESCRIPTORS7 = require_descriptors();
    var fails22 = require_fails();
    var uncurryThis16 = require_function_uncurry_this();
    var objectGetPrototypeOf = require_object_get_prototype_of();
    var objectKeys = require_object_keys();
    var toIndexedObject6 = require_to_indexed_object();
    var $propertyIsEnumerable = require_object_property_is_enumerable().f;
    var propertyIsEnumerable = uncurryThis16($propertyIsEnumerable);
    var push5 = uncurryThis16([].push);
    var IE_BUG = DESCRIPTORS7 && fails22(function() {
      var O2 = /* @__PURE__ */ Object.create(null);
      O2[2] = 2;
      return !propertyIsEnumerable(O2, 2);
    });
    var createMethod = function(TO_ENTRIES) {
      return function(it3) {
        var O2 = toIndexedObject6(it3);
        var keys3 = objectKeys(O2);
        var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O2) === null;
        var length = keys3.length;
        var i2 = 0;
        var result = [];
        var key;
        while (length > i2) {
          key = keys3[i2++];
          if (!DESCRIPTORS7 || (IE_WORKAROUND ? key in O2 : propertyIsEnumerable(O2, key))) {
            push5(result, TO_ENTRIES ? [key, O2[key]] : O2[key]);
          }
        }
        return result;
      };
    };
    module.exports = {
      // `Object.entries` method
      // https://tc39.es/ecma262/#sec-object.entries
      entries: createMethod(true),
      // `Object.values` method
      // https://tc39.es/ecma262/#sec-object.values
      values: createMethod(false)
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-to-string.js
var require_object_to_string = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/object-to-string.js"(exports, module) {
    "use strict";
    var TO_STRING_TAG_SUPPORT2 = require_to_string_tag_support();
    var classof2 = require_classof();
    module.exports = TO_STRING_TAG_SUPPORT2 ? {}.toString : function toString8() {
      return "[object " + classof2(this) + "]";
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment.js
var require_environment = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment.js"(exports, module) {
    "use strict";
    var globalThis14 = require_global_this();
    var userAgent = require_environment_user_agent();
    var classof2 = require_classof_raw();
    var userAgentStartsWith = function(string) {
      return userAgent.slice(0, string.length) === string;
    };
    module.exports = function() {
      if (userAgentStartsWith("Bun/"))
        return "BUN";
      if (userAgentStartsWith("Cloudflare-Workers"))
        return "CLOUDFLARE";
      if (userAgentStartsWith("Deno/"))
        return "DENO";
      if (userAgentStartsWith("Node.js/"))
        return "NODE";
      if (globalThis14.Bun && typeof Bun.version == "string")
        return "BUN";
      if (globalThis14.Deno && typeof Deno.version == "object")
        return "DENO";
      if (classof2(globalThis14.process) === "process")
        return "NODE";
      if (globalThis14.window && globalThis14.document)
        return "BROWSER";
      return "REST";
    }();
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment-is-node.js
var require_environment_is_node = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment-is-node.js"(exports, module) {
    "use strict";
    var ENVIRONMENT = require_environment();
    module.exports = ENVIRONMENT === "NODE";
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/a-constructor.js
var require_a_constructor = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/a-constructor.js"(exports, module) {
    "use strict";
    var isConstructor2 = require_is_constructor();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isConstructor2(argument))
        return argument;
      throw new $TypeError(tryToString(argument) + " is not a constructor");
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/species-constructor.js
var require_species_constructor = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/species-constructor.js"(exports, module) {
    "use strict";
    var anObject4 = require_an_object();
    var aConstructor2 = require_a_constructor();
    var isNullOrUndefined2 = require_is_null_or_undefined();
    var wellKnownSymbol8 = require_well_known_symbol();
    var SPECIES2 = wellKnownSymbol8("species");
    module.exports = function(O2, defaultConstructor) {
      var C2 = anObject4(O2).constructor;
      var S2;
      return C2 === void 0 || isNullOrUndefined2(S2 = anObject4(C2)[SPECIES2]) ? defaultConstructor : aConstructor2(S2);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/validate-arguments-length.js
var require_validate_arguments_length = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/validate-arguments-length.js"(exports, module) {
    "use strict";
    var $TypeError = TypeError;
    module.exports = function(passed, required) {
      if (passed < required)
        throw new $TypeError("Not enough arguments");
      return passed;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment-is-ios.js
var require_environment_is_ios = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment-is-ios.js"(exports, module) {
    "use strict";
    var userAgent = require_environment_user_agent();
    module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/task.js
var require_task = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/task.js"(exports, module) {
    "use strict";
    var globalThis14 = require_global_this();
    var apply5 = require_function_apply();
    var bind2 = require_function_bind_context();
    var isCallable5 = require_is_callable();
    var hasOwn4 = require_has_own_property();
    var fails22 = require_fails();
    var html = require_html();
    var arraySlice3 = require_array_slice();
    var createElement = require_document_create_element();
    var validateArgumentsLength = require_validate_arguments_length();
    var IS_IOS = require_environment_is_ios();
    var IS_NODE = require_environment_is_node();
    var set2 = globalThis14.setImmediate;
    var clear = globalThis14.clearImmediate;
    var process2 = globalThis14.process;
    var Dispatch = globalThis14.Dispatch;
    var Function2 = globalThis14.Function;
    var MessageChannel2 = globalThis14.MessageChannel;
    var String2 = globalThis14.String;
    var counter = 0;
    var queue = {};
    var ONREADYSTATECHANGE = "onreadystatechange";
    var $location;
    var defer;
    var channel;
    var port;
    fails22(function() {
      $location = globalThis14.location;
    });
    var run = function(id) {
      if (hasOwn4(queue, id)) {
        var fn2 = queue[id];
        delete queue[id];
        fn2();
      }
    };
    var runner = function(id) {
      return function() {
        run(id);
      };
    };
    var eventListener = function(event) {
      run(event.data);
    };
    var globalPostMessageDefer = function(id) {
      globalThis14.postMessage(String2(id), $location.protocol + "//" + $location.host);
    };
    if (!set2 || !clear) {
      set2 = function setImmediate2(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn2 = isCallable5(handler) ? handler : Function2(handler);
        var args = arraySlice3(arguments, 1);
        queue[++counter] = function() {
          apply5(fn2, void 0, args);
        };
        defer(counter);
        return counter;
      };
      clear = function clearImmediate(id) {
        delete queue[id];
      };
      if (IS_NODE) {
        defer = function(id) {
          process2.nextTick(runner(id));
        };
      } else if (Dispatch && Dispatch.now) {
        defer = function(id) {
          Dispatch.now(runner(id));
        };
      } else if (MessageChannel2 && !IS_IOS) {
        channel = new MessageChannel2();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind2(port.postMessage, port);
      } else if (globalThis14.addEventListener && isCallable5(globalThis14.postMessage) && !globalThis14.importScripts && $location && $location.protocol !== "file:" && !fails22(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        globalThis14.addEventListener("message", eventListener, false);
      } else if (ONREADYSTATECHANGE in createElement("script")) {
        defer = function(id) {
          html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(runner(id), 0);
        };
      }
    }
    module.exports = {
      set: set2,
      clear
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/safe-get-built-in.js
var require_safe_get_built_in = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/safe-get-built-in.js"(exports, module) {
    "use strict";
    var globalThis14 = require_global_this();
    var DESCRIPTORS7 = require_descriptors();
    var getOwnPropertyDescriptor4 = Object.getOwnPropertyDescriptor;
    module.exports = function(name) {
      if (!DESCRIPTORS7)
        return globalThis14[name];
      var descriptor = getOwnPropertyDescriptor4(globalThis14, name);
      return descriptor && descriptor.value;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/queue.js
var require_queue = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/queue.js"(exports, module) {
    "use strict";
    var Queue = function() {
      this.head = null;
      this.tail = null;
    };
    Queue.prototype = {
      add: function(item) {
        var entry = { item, next: null };
        var tail = this.tail;
        if (tail)
          tail.next = entry;
        else
          this.head = entry;
        this.tail = entry;
      },
      get: function() {
        var entry = this.head;
        if (entry) {
          var next = this.head = entry.next;
          if (next === null)
            this.tail = null;
          return entry.item;
        }
      }
    };
    module.exports = Queue;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment-is-ios-pebble.js
var require_environment_is_ios_pebble = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment-is-ios-pebble.js"(exports, module) {
    "use strict";
    var userAgent = require_environment_user_agent();
    module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != "undefined";
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment-is-webos-webkit.js
var require_environment_is_webos_webkit = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/environment-is-webos-webkit.js"(exports, module) {
    "use strict";
    var userAgent = require_environment_user_agent();
    module.exports = /web0s(?!.*chrome)/i.test(userAgent);
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/microtask.js
var require_microtask = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/microtask.js"(exports, module) {
    "use strict";
    var globalThis14 = require_global_this();
    var safeGetBuiltIn = require_safe_get_built_in();
    var bind2 = require_function_bind_context();
    var macrotask = require_task().set;
    var Queue = require_queue();
    var IS_IOS = require_environment_is_ios();
    var IS_IOS_PEBBLE = require_environment_is_ios_pebble();
    var IS_WEBOS_WEBKIT = require_environment_is_webos_webkit();
    var IS_NODE = require_environment_is_node();
    var MutationObserver = globalThis14.MutationObserver || globalThis14.WebKitMutationObserver;
    var document2 = globalThis14.document;
    var process2 = globalThis14.process;
    var Promise2 = globalThis14.Promise;
    var microtask = safeGetBuiltIn("queueMicrotask");
    var notify;
    var toggle;
    var node;
    var promise;
    var then;
    if (!microtask) {
      queue = new Queue();
      flush2 = function() {
        var parent, fn2;
        if (IS_NODE && (parent = process2.domain))
          parent.exit();
        while (fn2 = queue.get())
          try {
            fn2();
          } catch (error2) {
            if (queue.head)
              notify();
            throw error2;
          }
        if (parent)
          parent.enter();
      };
      if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document2) {
        toggle = true;
        node = document2.createTextNode("");
        new MutationObserver(flush2).observe(node, { characterData: true });
        notify = function() {
          node.data = toggle = !toggle;
        };
      } else if (!IS_IOS_PEBBLE && Promise2 && Promise2.resolve) {
        promise = Promise2.resolve(void 0);
        promise.constructor = Promise2;
        then = bind2(promise.then, promise);
        notify = function() {
          then(flush2);
        };
      } else if (IS_NODE) {
        notify = function() {
          process2.nextTick(flush2);
        };
      } else {
        macrotask = bind2(macrotask, globalThis14);
        notify = function() {
          macrotask(flush2);
        };
      }
      microtask = function(fn2) {
        if (!queue.head)
          notify();
        queue.add(fn2);
      };
    }
    var queue;
    var flush2;
    module.exports = microtask;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/host-report-errors.js
var require_host_report_errors = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/host-report-errors.js"(exports, module) {
    "use strict";
    module.exports = function(a2, b2) {
      try {
        arguments.length === 1 ? console.error(a2) : console.error(a2, b2);
      } catch (error2) {
      }
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/perform.js
var require_perform = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/perform.js"(exports, module) {
    "use strict";
    module.exports = function(exec) {
      try {
        return { error: false, value: exec() };
      } catch (error2) {
        return { error: true, value: error2 };
      }
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/promise-native-constructor.js
var require_promise_native_constructor = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/promise-native-constructor.js"(exports, module) {
    "use strict";
    var globalThis14 = require_global_this();
    module.exports = globalThis14.Promise;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/promise-constructor-detection.js
var require_promise_constructor_detection = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/promise-constructor-detection.js"(exports, module) {
    "use strict";
    var globalThis14 = require_global_this();
    var NativePromiseConstructor2 = require_promise_native_constructor();
    var isCallable5 = require_is_callable();
    var isForced2 = require_is_forced();
    var inspectSource = require_inspect_source();
    var wellKnownSymbol8 = require_well_known_symbol();
    var ENVIRONMENT = require_environment();
    var IS_PURE4 = require_is_pure();
    var V8_VERSION2 = require_environment_v8_version();
    var NativePromisePrototype2 = NativePromiseConstructor2 && NativePromiseConstructor2.prototype;
    var SPECIES2 = wellKnownSymbol8("species");
    var SUBCLASSING = false;
    var NATIVE_PROMISE_REJECTION_EVENT = isCallable5(globalThis14.PromiseRejectionEvent);
    var FORCED_PROMISE_CONSTRUCTOR = isForced2("Promise", function() {
      var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor2);
      var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor2);
      if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION2 === 66)
        return true;
      if (IS_PURE4 && !(NativePromisePrototype2["catch"] && NativePromisePrototype2["finally"]))
        return true;
      if (!V8_VERSION2 || V8_VERSION2 < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
        var promise = new NativePromiseConstructor2(function(resolve) {
          resolve(1);
        });
        var FakePromise = function(exec) {
          exec(function() {
          }, function() {
          });
        };
        var constructor = promise.constructor = {};
        constructor[SPECIES2] = FakePromise;
        SUBCLASSING = promise.then(function() {
        }) instanceof FakePromise;
        if (!SUBCLASSING)
          return true;
      }
      return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === "BROWSER" || ENVIRONMENT === "DENO") && !NATIVE_PROMISE_REJECTION_EVENT;
    });
    module.exports = {
      CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
      REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
      SUBCLASSING
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/new-promise-capability.js
var require_new_promise_capability = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/new-promise-capability.js"(exports, module) {
    "use strict";
    var aCallable4 = require_a_callable();
    var $TypeError = TypeError;
    var PromiseCapability = function(C2) {
      var resolve, reject;
      this.promise = new C2(function($$resolve, $$reject) {
        if (resolve !== void 0 || reject !== void 0)
          throw new $TypeError("Bad Promise constructor");
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aCallable4(resolve);
      this.reject = aCallable4(reject);
    };
    module.exports.f = function(C2) {
      return new PromiseCapability(C2);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.promise.constructor.js
var require_es_promise_constructor = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.promise.constructor.js"() {
    "use strict";
    var $32 = require_export();
    var IS_PURE4 = require_is_pure();
    var IS_NODE = require_environment_is_node();
    var globalThis14 = require_global_this();
    var call5 = require_function_call();
    var defineBuiltIn5 = require_define_built_in();
    var setPrototypeOf = require_object_set_prototype_of();
    var setToStringTag5 = require_set_to_string_tag();
    var setSpecies2 = require_set_species();
    var aCallable4 = require_a_callable();
    var isCallable5 = require_is_callable();
    var isObject5 = require_is_object();
    var anInstance = require_an_instance();
    var speciesConstructor2 = require_species_constructor();
    var task = require_task().set;
    var microtask = require_microtask();
    var hostReportErrors = require_host_report_errors();
    var perform = require_perform();
    var Queue = require_queue();
    var InternalStateModule = require_internal_state();
    var NativePromiseConstructor2 = require_promise_native_constructor();
    var PromiseConstructorDetection = require_promise_constructor_detection();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var PROMISE = "Promise";
    var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
    var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
    var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
    var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
    var setInternalState = InternalStateModule.set;
    var NativePromisePrototype2 = NativePromiseConstructor2 && NativePromiseConstructor2.prototype;
    var PromiseConstructor = NativePromiseConstructor2;
    var PromisePrototype = NativePromisePrototype2;
    var TypeError3 = globalThis14.TypeError;
    var document2 = globalThis14.document;
    var process2 = globalThis14.process;
    var newPromiseCapability = newPromiseCapabilityModule.f;
    var newGenericPromiseCapability = newPromiseCapability;
    var DISPATCH_EVENT = !!(document2 && document2.createEvent && globalThis14.dispatchEvent);
    var UNHANDLED_REJECTION = "unhandledrejection";
    var REJECTION_HANDLED = "rejectionhandled";
    var PENDING = 0;
    var FULFILLED = 1;
    var REJECTED = 2;
    var HANDLED = 1;
    var UNHANDLED = 2;
    var Internal;
    var OwnPromiseCapability;
    var PromiseWrapper;
    var nativeThen;
    var isThenable = function(it3) {
      var then;
      return isObject5(it3) && isCallable5(then = it3.then) ? then : false;
    };
    var callReaction = function(reaction, state) {
      var value = state.value;
      var ok = state.state === FULFILLED;
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED)
              onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true)
            result = value;
          else {
            if (domain)
              domain.enter();
            result = handler(value);
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(new TypeError3("Promise-chain cycle"));
          } else if (then = isThenable(result)) {
            call5(then, result, resolve, reject);
          } else
            resolve(result);
        } else
          reject(value);
      } catch (error2) {
        if (domain && !exited)
          domain.exit();
        reject(error2);
      }
    };
    var notify = function(state, isReject) {
      if (state.notified)
        return;
      state.notified = true;
      microtask(function() {
        var reactions = state.reactions;
        var reaction;
        while (reaction = reactions.get()) {
          callReaction(reaction, state);
        }
        state.notified = false;
        if (isReject && !state.rejection)
          onUnhandled(state);
      });
    };
    var dispatchEvent = function(name, promise, reason) {
      var event, handler;
      if (DISPATCH_EVENT) {
        event = document2.createEvent("Event");
        event.promise = promise;
        event.reason = reason;
        event.initEvent(name, false, true);
        globalThis14.dispatchEvent(event);
      } else
        event = { promise, reason };
      if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis14["on" + name]))
        handler(event);
      else if (name === UNHANDLED_REJECTION)
        hostReportErrors("Unhandled promise rejection", reason);
    };
    var onUnhandled = function(state) {
      call5(task, globalThis14, function() {
        var promise = state.facade;
        var value = state.value;
        var IS_UNHANDLED = isUnhandled(state);
        var result;
        if (IS_UNHANDLED) {
          result = perform(function() {
            if (IS_NODE) {
              process2.emit("unhandledRejection", value, promise);
            } else
              dispatchEvent(UNHANDLED_REJECTION, promise, value);
          });
          state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
          if (result.error)
            throw result.value;
        }
      });
    };
    var isUnhandled = function(state) {
      return state.rejection !== HANDLED && !state.parent;
    };
    var onHandleUnhandled = function(state) {
      call5(task, globalThis14, function() {
        var promise = state.facade;
        if (IS_NODE) {
          process2.emit("rejectionHandled", promise);
        } else
          dispatchEvent(REJECTION_HANDLED, promise, state.value);
      });
    };
    var bind2 = function(fn2, state, unwrap) {
      return function(value) {
        fn2(state, value, unwrap);
      };
    };
    var internalReject = function(state, value, unwrap) {
      if (state.done)
        return;
      state.done = true;
      if (unwrap)
        state = unwrap;
      state.value = value;
      state.state = REJECTED;
      notify(state, true);
    };
    var internalResolve = function(state, value, unwrap) {
      if (state.done)
        return;
      state.done = true;
      if (unwrap)
        state = unwrap;
      try {
        if (state.facade === value)
          throw new TypeError3("Promise can't be resolved itself");
        var then = isThenable(value);
        if (then) {
          microtask(function() {
            var wrapper = { done: false };
            try {
              call5(
                then,
                value,
                bind2(internalResolve, wrapper, state),
                bind2(internalReject, wrapper, state)
              );
            } catch (error2) {
              internalReject(wrapper, error2, state);
            }
          });
        } else {
          state.value = value;
          state.state = FULFILLED;
          notify(state, false);
        }
      } catch (error2) {
        internalReject({ done: false }, error2, state);
      }
    };
    if (FORCED_PROMISE_CONSTRUCTOR) {
      PromiseConstructor = function Promise2(executor) {
        anInstance(this, PromisePrototype);
        aCallable4(executor);
        call5(Internal, this);
        var state = getInternalPromiseState(this);
        try {
          executor(bind2(internalResolve, state), bind2(internalReject, state));
        } catch (error2) {
          internalReject(state, error2);
        }
      };
      PromisePrototype = PromiseConstructor.prototype;
      Internal = function Promise2(executor) {
        setInternalState(this, {
          type: PROMISE,
          done: false,
          notified: false,
          parent: false,
          reactions: new Queue(),
          rejection: false,
          state: PENDING,
          value: null
        });
      };
      Internal.prototype = defineBuiltIn5(PromisePrototype, "then", function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this);
        var reaction = newPromiseCapability(speciesConstructor2(this, PromiseConstructor));
        state.parent = true;
        reaction.ok = isCallable5(onFulfilled) ? onFulfilled : true;
        reaction.fail = isCallable5(onRejected) && onRejected;
        reaction.domain = IS_NODE ? process2.domain : void 0;
        if (state.state === PENDING)
          state.reactions.add(reaction);
        else
          microtask(function() {
            callReaction(reaction, state);
          });
        return reaction.promise;
      });
      OwnPromiseCapability = function() {
        var promise = new Internal();
        var state = getInternalPromiseState(promise);
        this.promise = promise;
        this.resolve = bind2(internalResolve, state);
        this.reject = bind2(internalReject, state);
      };
      newPromiseCapabilityModule.f = newPromiseCapability = function(C2) {
        return C2 === PromiseConstructor || C2 === PromiseWrapper ? new OwnPromiseCapability(C2) : newGenericPromiseCapability(C2);
      };
      if (!IS_PURE4 && isCallable5(NativePromiseConstructor2) && NativePromisePrototype2 !== Object.prototype) {
        nativeThen = NativePromisePrototype2.then;
        if (!NATIVE_PROMISE_SUBCLASSING) {
          defineBuiltIn5(NativePromisePrototype2, "then", function then(onFulfilled, onRejected) {
            var that = this;
            return new PromiseConstructor(function(resolve, reject) {
              call5(nativeThen, that, resolve, reject);
            }).then(onFulfilled, onRejected);
          }, { unsafe: true });
        }
        try {
          delete NativePromisePrototype2.constructor;
        } catch (error2) {
        }
        if (setPrototypeOf) {
          setPrototypeOf(NativePromisePrototype2, PromisePrototype);
        }
      }
    }
    $32({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
      Promise: PromiseConstructor
    });
    setToStringTag5(PromiseConstructor, PROMISE, false, true);
    setSpecies2(PROMISE);
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/iterate.js
var require_iterate = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/iterate.js"(exports, module) {
    "use strict";
    var bind2 = require_function_bind_context();
    var call5 = require_function_call();
    var anObject4 = require_an_object();
    var tryToString = require_try_to_string();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var lengthOfArrayLike7 = require_length_of_array_like();
    var isPrototypeOf4 = require_object_is_prototype_of();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var iteratorClose = require_iterator_close();
    var $TypeError = TypeError;
    var Result = function(stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };
    var ResultPrototype = Result.prototype;
    module.exports = function(iterable, unboundFunction, options) {
      var that = options && options.that;
      var AS_ENTRIES = !!(options && options.AS_ENTRIES);
      var IS_RECORD = !!(options && options.IS_RECORD);
      var IS_ITERATOR = !!(options && options.IS_ITERATOR);
      var INTERRUPTED = !!(options && options.INTERRUPTED);
      var fn2 = bind2(unboundFunction, that);
      var iterator, iterFn, index, length, result, next, step;
      var stop = function(condition) {
        if (iterator)
          iteratorClose(iterator, "normal", condition);
        return new Result(true, condition);
      };
      var callFn = function(value) {
        if (AS_ENTRIES) {
          anObject4(value);
          return INTERRUPTED ? fn2(value[0], value[1], stop) : fn2(value[0], value[1]);
        }
        return INTERRUPTED ? fn2(value, stop) : fn2(value);
      };
      if (IS_RECORD) {
        iterator = iterable.iterator;
      } else if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn)
          throw new $TypeError(tryToString(iterable) + " is not iterable");
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike7(iterable); length > index; index++) {
            result = callFn(iterable[index]);
            if (result && isPrototypeOf4(ResultPrototype, result))
              return result;
          }
          return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
      }
      next = IS_RECORD ? iterable.next : iterator.next;
      while (!(step = call5(next, iterator)).done) {
        try {
          result = callFn(step.value);
        } catch (error2) {
          iteratorClose(iterator, "throw", error2);
        }
        if (typeof result == "object" && result && isPrototypeOf4(ResultPrototype, result))
          return result;
      }
      return new Result(false);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/promise-statics-incorrect-iteration.js
var require_promise_statics_incorrect_iteration = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/promise-statics-incorrect-iteration.js"(exports, module) {
    "use strict";
    var NativePromiseConstructor2 = require_promise_native_constructor();
    var checkCorrectnessOfIteration2 = require_check_correctness_of_iteration();
    var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
    module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration2(function(iterable) {
      NativePromiseConstructor2.all(iterable).then(void 0, function() {
      });
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.promise.all.js
var require_es_promise_all = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.promise.all.js"() {
    "use strict";
    var $32 = require_export();
    var call5 = require_function_call();
    var aCallable4 = require_a_callable();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var perform = require_perform();
    var iterate = require_iterate();
    var PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
    $32({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
      all: function all(iterable) {
        var C2 = this;
        var capability = newPromiseCapabilityModule.f(C2);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
          var $promiseResolve = aCallable4(C2.resolve);
          var values2 = [];
          var counter = 0;
          var remaining = 1;
          iterate(iterable, function(promise) {
            var index = counter++;
            var alreadyCalled = false;
            remaining++;
            call5($promiseResolve, C2, promise).then(function(value) {
              if (alreadyCalled)
                return;
              alreadyCalled = true;
              values2[index] = value;
              --remaining || resolve(values2);
            }, reject);
          });
          --remaining || resolve(values2);
        });
        if (result.error)
          reject(result.value);
        return capability.promise;
      }
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.promise.catch.js
var require_es_promise_catch = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.promise.catch.js"() {
    "use strict";
    var $32 = require_export();
    var IS_PURE4 = require_is_pure();
    var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
    var NativePromiseConstructor2 = require_promise_native_constructor();
    var getBuiltIn4 = require_get_built_in();
    var isCallable5 = require_is_callable();
    var defineBuiltIn5 = require_define_built_in();
    var NativePromisePrototype2 = NativePromiseConstructor2 && NativePromiseConstructor2.prototype;
    $32({ target: "Promise", proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
      "catch": function(onRejected) {
        return this.then(void 0, onRejected);
      }
    });
    if (!IS_PURE4 && isCallable5(NativePromiseConstructor2)) {
      method = getBuiltIn4("Promise").prototype["catch"];
      if (NativePromisePrototype2["catch"] !== method) {
        defineBuiltIn5(NativePromisePrototype2, "catch", method, { unsafe: true });
      }
    }
    var method;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.promise.race.js
var require_es_promise_race = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.promise.race.js"() {
    "use strict";
    var $32 = require_export();
    var call5 = require_function_call();
    var aCallable4 = require_a_callable();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var perform = require_perform();
    var iterate = require_iterate();
    var PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
    $32({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
      race: function race(iterable) {
        var C2 = this;
        var capability = newPromiseCapabilityModule.f(C2);
        var reject = capability.reject;
        var result = perform(function() {
          var $promiseResolve = aCallable4(C2.resolve);
          iterate(iterable, function(promise) {
            call5($promiseResolve, C2, promise).then(capability.resolve, reject);
          });
        });
        if (result.error)
          reject(result.value);
        return capability.promise;
      }
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.promise.reject.js
var require_es_promise_reject = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.promise.reject.js"() {
    "use strict";
    var $32 = require_export();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
    $32({ target: "Promise", stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
      reject: function reject(r2) {
        var capability = newPromiseCapabilityModule.f(this);
        var capabilityReject = capability.reject;
        capabilityReject(r2);
        return capability.promise;
      }
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/promise-resolve.js
var require_promise_resolve = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/promise-resolve.js"(exports, module) {
    "use strict";
    var anObject4 = require_an_object();
    var isObject5 = require_is_object();
    var newPromiseCapability = require_new_promise_capability();
    module.exports = function(C2, x2) {
      anObject4(C2);
      if (isObject5(x2) && x2.constructor === C2)
        return x2;
      var promiseCapability = newPromiseCapability.f(C2);
      var resolve = promiseCapability.resolve;
      resolve(x2);
      return promiseCapability.promise;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.promise.resolve.js
var require_es_promise_resolve = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.promise.resolve.js"() {
    "use strict";
    var $32 = require_export();
    var getBuiltIn4 = require_get_built_in();
    var IS_PURE4 = require_is_pure();
    var NativePromiseConstructor2 = require_promise_native_constructor();
    var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
    var promiseResolve2 = require_promise_resolve();
    var PromiseConstructorWrapper = getBuiltIn4("Promise");
    var CHECK_WRAPPER = IS_PURE4 && !FORCED_PROMISE_CONSTRUCTOR;
    $32({ target: "Promise", stat: true, forced: IS_PURE4 || FORCED_PROMISE_CONSTRUCTOR }, {
      resolve: function resolve(x2) {
        return promiseResolve2(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor2 : this, x2);
      }
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/function-bind.js
var require_function_bind = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/function-bind.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this();
    var aCallable4 = require_a_callable();
    var isObject5 = require_is_object();
    var hasOwn4 = require_has_own_property();
    var arraySlice3 = require_array_slice();
    var NATIVE_BIND = require_function_bind_native();
    var $Function = Function;
    var concat3 = uncurryThis16([].concat);
    var join4 = uncurryThis16([].join);
    var factories = {};
    var construct2 = function(C2, argsLength, args) {
      if (!hasOwn4(factories, argsLength)) {
        var list = [];
        var i2 = 0;
        for (; i2 < argsLength; i2++)
          list[i2] = "a[" + i2 + "]";
        factories[argsLength] = $Function("C,a", "return new C(" + join4(list, ",") + ")");
      }
      return factories[argsLength](C2, args);
    };
    module.exports = NATIVE_BIND ? $Function.bind : function bind2(that) {
      var F2 = aCallable4(this);
      var Prototype = F2.prototype;
      var partArgs = arraySlice3(arguments, 1);
      var boundFunction = function bound() {
        var args = concat3(partArgs, arraySlice3(arguments));
        return this instanceof boundFunction ? construct2(F2, args.length, args) : F2.apply(that, args);
      };
      if (isObject5(Prototype))
        boundFunction.prototype = Prototype;
      return boundFunction;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/regexp-flags.js
var require_regexp_flags = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/regexp-flags.js"(exports, module) {
    "use strict";
    var anObject4 = require_an_object();
    module.exports = function() {
      var that = anObject4(this);
      var result = "";
      if (that.hasIndices)
        result += "d";
      if (that.global)
        result += "g";
      if (that.ignoreCase)
        result += "i";
      if (that.multiline)
        result += "m";
      if (that.dotAll)
        result += "s";
      if (that.unicode)
        result += "u";
      if (that.unicodeSets)
        result += "v";
      if (that.sticky)
        result += "y";
      return result;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/regexp-sticky-helpers.js
var require_regexp_sticky_helpers = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/regexp-sticky-helpers.js"(exports, module) {
    "use strict";
    var fails22 = require_fails();
    var globalThis14 = require_global_this();
    var $RegExp = globalThis14.RegExp;
    var UNSUPPORTED_Y = fails22(function() {
      var re = $RegExp("a", "y");
      re.lastIndex = 2;
      return re.exec("abcd") !== null;
    });
    var MISSED_STICKY = UNSUPPORTED_Y || fails22(function() {
      return !$RegExp("a", "y").sticky;
    });
    var BROKEN_CARET = UNSUPPORTED_Y || fails22(function() {
      var re = $RegExp("^r", "gy");
      re.lastIndex = 2;
      return re.exec("str") !== null;
    });
    module.exports = {
      BROKEN_CARET,
      MISSED_STICKY,
      UNSUPPORTED_Y
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/regexp-unsupported-dot-all.js
var require_regexp_unsupported_dot_all = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/regexp-unsupported-dot-all.js"(exports, module) {
    "use strict";
    var fails22 = require_fails();
    var globalThis14 = require_global_this();
    var $RegExp = globalThis14.RegExp;
    module.exports = fails22(function() {
      var re = $RegExp(".", "s");
      return !(re.dotAll && re.test("\n") && re.flags === "s");
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/regexp-unsupported-ncg.js
var require_regexp_unsupported_ncg = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/regexp-unsupported-ncg.js"(exports, module) {
    "use strict";
    var fails22 = require_fails();
    var globalThis14 = require_global_this();
    var $RegExp = globalThis14.RegExp;
    module.exports = fails22(function() {
      var re = $RegExp("(?<a>b)", "g");
      return re.exec("b").groups.a !== "b" || "b".replace(re, "$<a>c") !== "bc";
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/regexp-exec.js
var require_regexp_exec = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/regexp-exec.js"(exports, module) {
    "use strict";
    var call5 = require_function_call();
    var uncurryThis16 = require_function_uncurry_this();
    var toString8 = require_to_string();
    var regexpFlags = require_regexp_flags();
    var stickyHelpers = require_regexp_sticky_helpers();
    var shared = require_shared();
    var create2 = require_object_create();
    var getInternalState = require_internal_state().get;
    var UNSUPPORTED_DOT_ALL = require_regexp_unsupported_dot_all();
    var UNSUPPORTED_NCG = require_regexp_unsupported_ncg();
    var nativeReplace = shared("native-string-replace", String.prototype.replace);
    var nativeExec = RegExp.prototype.exec;
    var patchedExec = nativeExec;
    var charAt = uncurryThis16("".charAt);
    var indexOf2 = uncurryThis16("".indexOf);
    var replace = uncurryThis16("".replace);
    var stringSlice5 = uncurryThis16("".slice);
    var UPDATES_LAST_INDEX_WRONG = function() {
      var re1 = /a/;
      var re2 = /b*/g;
      call5(nativeExec, re1, "a");
      call5(nativeExec, re2, "a");
      return re1.lastIndex !== 0 || re2.lastIndex !== 0;
    }();
    var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;
    var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
    var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
    if (PATCH) {
      patchedExec = function exec(string) {
        var re = this;
        var state = getInternalState(re);
        var str = toString8(string);
        var raw = state.raw;
        var result, reCopy, lastIndex, match, i2, object, group;
        if (raw) {
          raw.lastIndex = re.lastIndex;
          result = call5(patchedExec, raw, str);
          re.lastIndex = raw.lastIndex;
          return result;
        }
        var groups = state.groups;
        var sticky = UNSUPPORTED_Y && re.sticky;
        var flags = call5(regexpFlags, re);
        var source = re.source;
        var charsAdded = 0;
        var strCopy = str;
        if (sticky) {
          flags = replace(flags, "y", "");
          if (indexOf2(flags, "g") === -1) {
            flags += "g";
          }
          strCopy = stringSlice5(str, re.lastIndex);
          if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== "\n")) {
            source = "(?: " + source + ")";
            strCopy = " " + strCopy;
            charsAdded++;
          }
          reCopy = new RegExp("^(?:" + source + ")", flags);
        }
        if (NPCG_INCLUDED) {
          reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
        }
        if (UPDATES_LAST_INDEX_WRONG)
          lastIndex = re.lastIndex;
        match = call5(nativeExec, sticky ? reCopy : re, strCopy);
        if (sticky) {
          if (match) {
            match.input = stringSlice5(match.input, charsAdded);
            match[0] = stringSlice5(match[0], charsAdded);
            match.index = re.lastIndex;
            re.lastIndex += match[0].length;
          } else
            re.lastIndex = 0;
        } else if (UPDATES_LAST_INDEX_WRONG && match) {
          re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
        }
        if (NPCG_INCLUDED && match && match.length > 1) {
          call5(nativeReplace, match[0], reCopy, function() {
            for (i2 = 1; i2 < arguments.length - 2; i2++) {
              if (arguments[i2] === void 0)
                match[i2] = void 0;
            }
          });
        }
        if (match && groups) {
          match.groups = object = create2(null);
          for (i2 = 0; i2 < groups.length; i2++) {
            group = groups[i2];
            object[group[0]] = match[group[1]];
          }
        }
        return match;
      };
    }
    module.exports = patchedExec;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.regexp.exec.js
var require_es_regexp_exec = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.regexp.exec.js"() {
    "use strict";
    var $32 = require_export();
    var exec = require_regexp_exec();
    $32({ target: "RegExp", proto: true, forced: /./.exec !== exec }, {
      exec
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/regexp-get-flags.js
var require_regexp_get_flags = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/regexp-get-flags.js"(exports, module) {
    "use strict";
    var call5 = require_function_call();
    var hasOwn4 = require_has_own_property();
    var isPrototypeOf4 = require_object_is_prototype_of();
    var regExpFlags2 = require_regexp_flags();
    var RegExpPrototype3 = RegExp.prototype;
    module.exports = function(R2) {
      var flags = R2.flags;
      return flags === void 0 && !("flags" in RegExpPrototype3) && !hasOwn4(R2, "flags") && isPrototypeOf4(RegExpPrototype3, R2) ? call5(regExpFlags2, R2) : flags;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-regexp.js
var require_is_regexp = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-regexp.js"(exports, module) {
    "use strict";
    var isObject5 = require_is_object();
    var classof2 = require_classof_raw();
    var wellKnownSymbol8 = require_well_known_symbol();
    var MATCH = wellKnownSymbol8("match");
    module.exports = function(it3) {
      var isRegExp;
      return isObject5(it3) && ((isRegExp = it3[MATCH]) !== void 0 ? !!isRegExp : classof2(it3) === "RegExp");
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/not-a-regexp.js
var require_not_a_regexp = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/not-a-regexp.js"(exports, module) {
    "use strict";
    var isRegExp = require_is_regexp();
    var $TypeError = TypeError;
    module.exports = function(it3) {
      if (isRegExp(it3)) {
        throw new $TypeError("The method doesn't accept regular expressions");
      }
      return it3;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/correct-is-regexp-logic.js
var require_correct_is_regexp_logic = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/correct-is-regexp-logic.js"(exports, module) {
    "use strict";
    var wellKnownSymbol8 = require_well_known_symbol();
    var MATCH = wellKnownSymbol8("match");
    module.exports = function(METHOD_NAME) {
      var regexp = /./;
      try {
        "/./"[METHOD_NAME](regexp);
      } catch (error1) {
        try {
          regexp[MATCH] = false;
          return "/./"[METHOD_NAME](regexp);
        } catch (error2) {
        }
      }
      return false;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/string-multibyte.js
var require_string_multibyte = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/string-multibyte.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this();
    var toIntegerOrInfinity4 = require_to_integer_or_infinity();
    var toString8 = require_to_string();
    var requireObjectCoercible4 = require_require_object_coercible();
    var charAt = uncurryThis16("".charAt);
    var charCodeAt2 = uncurryThis16("".charCodeAt);
    var stringSlice5 = uncurryThis16("".slice);
    var createMethod = function(CONVERT_TO_STRING) {
      return function($this, pos) {
        var S2 = toString8(requireObjectCoercible4($this));
        var position = toIntegerOrInfinity4(pos);
        var size = S2.length;
        var first, second;
        if (position < 0 || position >= size)
          return CONVERT_TO_STRING ? "" : void 0;
        first = charCodeAt2(S2, position);
        return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt2(S2, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S2, position) : first : CONVERT_TO_STRING ? stringSlice5(S2, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
      };
    };
    module.exports = {
      // `String.prototype.codePointAt` method
      // https://tc39.es/ecma262/#sec-string.prototype.codepointat
      codeAt: createMethod(false),
      // `String.prototype.at` method
      // https://github.com/mathiasbynens/String.prototype.at
      charAt: createMethod(true)
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.string.iterator.js
var require_es_string_iterator = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.string.iterator.js"() {
    "use strict";
    var charAt = require_string_multibyte().charAt;
    var toString8 = require_to_string();
    var InternalStateModule = require_internal_state();
    var defineIterator = require_iterator_define();
    var createIterResultObject = require_create_iter_result_object();
    var STRING_ITERATOR = "String Iterator";
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
    defineIterator(String, "String", function(iterated) {
      setInternalState(this, {
        type: STRING_ITERATOR,
        string: toString8(iterated),
        index: 0
      });
    }, function next() {
      var state = getInternalState(this);
      var string = state.string;
      var index = state.index;
      var point;
      if (index >= string.length)
        return createIterResultObject(void 0, true);
      point = charAt(string, index);
      state.index += point.length;
      return createIterResultObject(point, false);
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js
var require_fix_regexp_well_known_symbol_logic = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js"(exports, module) {
    "use strict";
    require_es_regexp_exec();
    var call5 = require_function_call();
    var defineBuiltIn5 = require_define_built_in();
    var regexpExec = require_regexp_exec();
    var fails22 = require_fails();
    var wellKnownSymbol8 = require_well_known_symbol();
    var createNonEnumerableProperty3 = require_create_non_enumerable_property();
    var SPECIES2 = wellKnownSymbol8("species");
    var RegExpPrototype3 = RegExp.prototype;
    module.exports = function(KEY, exec, FORCED11, SHAM) {
      var SYMBOL = wellKnownSymbol8(KEY);
      var DELEGATES_TO_SYMBOL = !fails22(function() {
        var O2 = {};
        O2[SYMBOL] = function() {
          return 7;
        };
        return ""[KEY](O2) !== 7;
      });
      var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails22(function() {
        var execCalled = false;
        var re = /a/;
        if (KEY === "split") {
          re = {};
          re.constructor = {};
          re.constructor[SPECIES2] = function() {
            return re;
          };
          re.flags = "";
          re[SYMBOL] = /./[SYMBOL];
        }
        re.exec = function() {
          execCalled = true;
          return null;
        };
        re[SYMBOL]("");
        return !execCalled;
      });
      if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED11) {
        var nativeRegExpMethod = /./[SYMBOL];
        var methods = exec(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
          var $exec = regexp.exec;
          if ($exec === regexpExec || $exec === RegExpPrototype3.exec) {
            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
              return { done: true, value: call5(nativeRegExpMethod, regexp, str, arg2) };
            }
            return { done: true, value: call5(nativeMethod, str, regexp, arg2) };
          }
          return { done: false };
        });
        defineBuiltIn5(String.prototype, KEY, methods[0]);
        defineBuiltIn5(RegExpPrototype3, SYMBOL, methods[1]);
      }
      if (SHAM)
        createNonEnumerableProperty3(RegExpPrototype3[SYMBOL], "sham", true);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/advance-string-index.js
var require_advance_string_index = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/advance-string-index.js"(exports, module) {
    "use strict";
    var charAt = require_string_multibyte().charAt;
    module.exports = function(S2, index, unicode) {
      return index + (unicode ? charAt(S2, index).length : 1);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/get-substitution.js
var require_get_substitution = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/get-substitution.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this();
    var toObject7 = require_to_object();
    var floor3 = Math.floor;
    var charAt = uncurryThis16("".charAt);
    var replace = uncurryThis16("".replace);
    var stringSlice5 = uncurryThis16("".slice);
    var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
    var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
    module.exports = function(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m2 = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
      if (namedCaptures !== void 0) {
        namedCaptures = toObject7(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }
      return replace(replacement, symbols, function(match, ch) {
        var capture;
        switch (charAt(ch, 0)) {
          case "$":
            return "$";
          case "&":
            return matched;
          case "`":
            return stringSlice5(str, 0, position);
          case "'":
            return stringSlice5(str, tailPos);
          case "<":
            capture = namedCaptures[stringSlice5(ch, 1, -1)];
            break;
          default:
            var n2 = +ch;
            if (n2 === 0)
              return match;
            if (n2 > m2) {
              var f2 = floor3(n2 / 10);
              if (f2 === 0)
                return match;
              if (f2 <= m2)
                return captures[f2 - 1] === void 0 ? charAt(ch, 1) : captures[f2 - 1] + charAt(ch, 1);
              return match;
            }
            capture = captures[n2 - 1];
        }
        return capture === void 0 ? "" : capture;
      });
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/regexp-exec-abstract.js
var require_regexp_exec_abstract = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/regexp-exec-abstract.js"(exports, module) {
    "use strict";
    var call5 = require_function_call();
    var anObject4 = require_an_object();
    var isCallable5 = require_is_callable();
    var classof2 = require_classof_raw();
    var regexpExec = require_regexp_exec();
    var $TypeError = TypeError;
    module.exports = function(R2, S2) {
      var exec = R2.exec;
      if (isCallable5(exec)) {
        var result = call5(exec, R2, S2);
        if (result !== null)
          anObject4(result);
        return result;
      }
      if (classof2(R2) === "RegExp")
        return call5(regexpExec, R2, S2);
      throw new $TypeError("RegExp#exec called on incompatible receiver");
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/string-trim-forced.js
var require_string_trim_forced = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/string-trim-forced.js"(exports, module) {
    "use strict";
    var PROPER_FUNCTION_NAME2 = require_function_name().PROPER;
    var fails22 = require_fails();
    var whitespaces = require_whitespaces();
    var non = "​᠎";
    module.exports = function(METHOD_NAME) {
      return fails22(function() {
        return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME2 && whitespaces[METHOD_NAME].name !== METHOD_NAME;
      });
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-buffer-view-core.js
var require_array_buffer_view_core = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-buffer-view-core.js"(exports, module) {
    "use strict";
    var NATIVE_ARRAY_BUFFER = require_array_buffer_basic_detection();
    var DESCRIPTORS7 = require_descriptors();
    var globalThis14 = require_global_this();
    var isCallable5 = require_is_callable();
    var isObject5 = require_is_object();
    var hasOwn4 = require_has_own_property();
    var classof2 = require_classof();
    var tryToString = require_try_to_string();
    var createNonEnumerableProperty3 = require_create_non_enumerable_property();
    var defineBuiltIn5 = require_define_built_in();
    var defineBuiltInAccessor4 = require_define_built_in_accessor();
    var isPrototypeOf4 = require_object_is_prototype_of();
    var getPrototypeOf2 = require_object_get_prototype_of();
    var setPrototypeOf = require_object_set_prototype_of();
    var wellKnownSymbol8 = require_well_known_symbol();
    var uid = require_uid();
    var InternalStateModule = require_internal_state();
    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState = InternalStateModule.get;
    var Int8Array4 = globalThis14.Int8Array;
    var Int8ArrayPrototype2 = Int8Array4 && Int8Array4.prototype;
    var Uint8ClampedArray2 = globalThis14.Uint8ClampedArray;
    var Uint8ClampedArrayPrototype = Uint8ClampedArray2 && Uint8ClampedArray2.prototype;
    var TypedArray = Int8Array4 && getPrototypeOf2(Int8Array4);
    var TypedArrayPrototype2 = Int8ArrayPrototype2 && getPrototypeOf2(Int8ArrayPrototype2);
    var ObjectPrototype2 = Object.prototype;
    var TypeError3 = globalThis14.TypeError;
    var TO_STRING_TAG = wellKnownSymbol8("toStringTag");
    var TYPED_ARRAY_TAG = uid("TYPED_ARRAY_TAG");
    var TYPED_ARRAY_CONSTRUCTOR = "TypedArrayConstructor";
    var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof2(globalThis14.opera) !== "Opera";
    var TYPED_ARRAY_TAG_REQUIRED = false;
    var NAME2;
    var Constructor;
    var Prototype;
    var TypedArrayConstructorsList = {
      Int8Array: 1,
      Uint8Array: 1,
      Uint8ClampedArray: 1,
      Int16Array: 2,
      Uint16Array: 2,
      Int32Array: 4,
      Uint32Array: 4,
      Float32Array: 4,
      Float64Array: 8
    };
    var BigIntArrayConstructorsList = {
      BigInt64Array: 8,
      BigUint64Array: 8
    };
    var isView = function isView2(it3) {
      if (!isObject5(it3))
        return false;
      var klass = classof2(it3);
      return klass === "DataView" || hasOwn4(TypedArrayConstructorsList, klass) || hasOwn4(BigIntArrayConstructorsList, klass);
    };
    var getTypedArrayConstructor4 = function(it3) {
      var proto = getPrototypeOf2(it3);
      if (!isObject5(proto))
        return;
      var state = getInternalState(proto);
      return state && hasOwn4(state, TYPED_ARRAY_CONSTRUCTOR) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor4(proto);
    };
    var isTypedArray = function(it3) {
      if (!isObject5(it3))
        return false;
      var klass = classof2(it3);
      return hasOwn4(TypedArrayConstructorsList, klass) || hasOwn4(BigIntArrayConstructorsList, klass);
    };
    var aTypedArray23 = function(it3) {
      if (isTypedArray(it3))
        return it3;
      throw new TypeError3("Target is not a typed array");
    };
    var aTypedArrayConstructor = function(C2) {
      if (isCallable5(C2) && (!setPrototypeOf || isPrototypeOf4(TypedArray, C2)))
        return C2;
      throw new TypeError3(tryToString(C2) + " is not a typed array constructor");
    };
    var exportTypedArrayMethod24 = function(KEY, property, forced, options) {
      if (!DESCRIPTORS7)
        return;
      if (forced)
        for (var ARRAY in TypedArrayConstructorsList) {
          var TypedArrayConstructor = globalThis14[ARRAY];
          if (TypedArrayConstructor && hasOwn4(TypedArrayConstructor.prototype, KEY))
            try {
              delete TypedArrayConstructor.prototype[KEY];
            } catch (error2) {
              try {
                TypedArrayConstructor.prototype[KEY] = property;
              } catch (error22) {
              }
            }
        }
      if (!TypedArrayPrototype2[KEY] || forced) {
        defineBuiltIn5(TypedArrayPrototype2, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype2[KEY] || property, options);
      }
    };
    var exportTypedArrayStaticMethod2 = function(KEY, property, forced) {
      var ARRAY, TypedArrayConstructor;
      if (!DESCRIPTORS7)
        return;
      if (setPrototypeOf) {
        if (forced)
          for (ARRAY in TypedArrayConstructorsList) {
            TypedArrayConstructor = globalThis14[ARRAY];
            if (TypedArrayConstructor && hasOwn4(TypedArrayConstructor, KEY))
              try {
                delete TypedArrayConstructor[KEY];
              } catch (error2) {
              }
          }
        if (!TypedArray[KEY] || forced) {
          try {
            return defineBuiltIn5(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
          } catch (error2) {
          }
        } else
          return;
      }
      for (ARRAY in TypedArrayConstructorsList) {
        TypedArrayConstructor = globalThis14[ARRAY];
        if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
          defineBuiltIn5(TypedArrayConstructor, KEY, property);
        }
      }
    };
    for (NAME2 in TypedArrayConstructorsList) {
      Constructor = globalThis14[NAME2];
      Prototype = Constructor && Constructor.prototype;
      if (Prototype)
        enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
      else
        NATIVE_ARRAY_BUFFER_VIEWS = false;
    }
    for (NAME2 in BigIntArrayConstructorsList) {
      Constructor = globalThis14[NAME2];
      Prototype = Constructor && Constructor.prototype;
      if (Prototype)
        enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
    }
    if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable5(TypedArray) || TypedArray === Function.prototype) {
      TypedArray = function TypedArray2() {
        throw new TypeError3("Incorrect invocation");
      };
      if (NATIVE_ARRAY_BUFFER_VIEWS)
        for (NAME2 in TypedArrayConstructorsList) {
          if (globalThis14[NAME2])
            setPrototypeOf(globalThis14[NAME2], TypedArray);
        }
    }
    if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype2 || TypedArrayPrototype2 === ObjectPrototype2) {
      TypedArrayPrototype2 = TypedArray.prototype;
      if (NATIVE_ARRAY_BUFFER_VIEWS)
        for (NAME2 in TypedArrayConstructorsList) {
          if (globalThis14[NAME2])
            setPrototypeOf(globalThis14[NAME2].prototype, TypedArrayPrototype2);
        }
    }
    if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf2(Uint8ClampedArrayPrototype) !== TypedArrayPrototype2) {
      setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype2);
    }
    if (DESCRIPTORS7 && !hasOwn4(TypedArrayPrototype2, TO_STRING_TAG)) {
      TYPED_ARRAY_TAG_REQUIRED = true;
      defineBuiltInAccessor4(TypedArrayPrototype2, TO_STRING_TAG, {
        configurable: true,
        get: function() {
          return isObject5(this) ? this[TYPED_ARRAY_TAG] : void 0;
        }
      });
      for (NAME2 in TypedArrayConstructorsList)
        if (globalThis14[NAME2]) {
          createNonEnumerableProperty3(globalThis14[NAME2], TYPED_ARRAY_TAG, NAME2);
        }
    }
    module.exports = {
      NATIVE_ARRAY_BUFFER_VIEWS,
      TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
      aTypedArray: aTypedArray23,
      aTypedArrayConstructor,
      exportTypedArrayMethod: exportTypedArrayMethod24,
      exportTypedArrayStaticMethod: exportTypedArrayStaticMethod2,
      getTypedArrayConstructor: getTypedArrayConstructor4,
      isView,
      isTypedArray,
      TypedArray,
      TypedArrayPrototype: TypedArrayPrototype2
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/typed-array-constructors-require-wrappers.js
var require_typed_array_constructors_require_wrappers = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/typed-array-constructors-require-wrappers.js"(exports, module) {
    "use strict";
    var globalThis14 = require_global_this();
    var fails22 = require_fails();
    var checkCorrectnessOfIteration2 = require_check_correctness_of_iteration();
    var NATIVE_ARRAY_BUFFER_VIEWS = require_array_buffer_view_core().NATIVE_ARRAY_BUFFER_VIEWS;
    var ArrayBuffer3 = globalThis14.ArrayBuffer;
    var Int8Array4 = globalThis14.Int8Array;
    module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails22(function() {
      Int8Array4(1);
    }) || !fails22(function() {
      new Int8Array4(-1);
    }) || !checkCorrectnessOfIteration2(function(iterable) {
      new Int8Array4();
      new Int8Array4(null);
      new Int8Array4(1.5);
      new Int8Array4(iterable);
    }, true) || fails22(function() {
      return new Int8Array4(new ArrayBuffer3(2), 1, void 0).length !== 1;
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-integral-number.js
var require_is_integral_number = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-integral-number.js"(exports, module) {
    "use strict";
    var isObject5 = require_is_object();
    var floor3 = Math.floor;
    module.exports = Number.isInteger || function isInteger(it3) {
      return !isObject5(it3) && isFinite(it3) && floor3(it3) === it3;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-positive-integer.js
var require_to_positive_integer = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-positive-integer.js"(exports, module) {
    "use strict";
    var toIntegerOrInfinity4 = require_to_integer_or_infinity();
    var $RangeError2 = RangeError;
    module.exports = function(it3) {
      var result = toIntegerOrInfinity4(it3);
      if (result < 0)
        throw new $RangeError2("The argument can't be less than 0");
      return result;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-offset.js
var require_to_offset = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-offset.js"(exports, module) {
    "use strict";
    var toPositiveInteger = require_to_positive_integer();
    var $RangeError2 = RangeError;
    module.exports = function(it3, BYTES) {
      var offset = toPositiveInteger(it3);
      if (offset % BYTES)
        throw new $RangeError2("Wrong offset");
      return offset;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-uint8-clamped.js
var require_to_uint8_clamped = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-uint8-clamped.js"(exports, module) {
    "use strict";
    var round = Math.round;
    module.exports = function(it3) {
      var value = round(it3);
      return value < 0 ? 0 : value > 255 ? 255 : value & 255;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-big-int-array.js
var require_is_big_int_array = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/is-big-int-array.js"(exports, module) {
    "use strict";
    var classof2 = require_classof();
    module.exports = function(it3) {
      var klass = classof2(it3);
      return klass === "BigInt64Array" || klass === "BigUint64Array";
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-big-int.js
var require_to_big_int = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/to-big-int.js"(exports, module) {
    "use strict";
    var toPrimitive2 = require_to_primitive();
    var $TypeError = TypeError;
    module.exports = function(argument) {
      var prim = toPrimitive2(argument, "number");
      if (typeof prim == "number")
        throw new $TypeError("Can't convert number to bigint");
      return BigInt(prim);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/typed-array-from.js
var require_typed_array_from = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/typed-array-from.js"(exports, module) {
    "use strict";
    var bind2 = require_function_bind_context();
    var call5 = require_function_call();
    var aConstructor2 = require_a_constructor();
    var toObject7 = require_to_object();
    var lengthOfArrayLike7 = require_length_of_array_like();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var isBigIntArray = require_is_big_int_array();
    var aTypedArrayConstructor = require_array_buffer_view_core().aTypedArrayConstructor;
    var toBigInt2 = require_to_big_int();
    module.exports = function from2(source) {
      var C2 = aConstructor2(this);
      var O2 = toObject7(source);
      var argumentsLength = arguments.length;
      var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
      var mapping = mapfn !== void 0;
      var iteratorMethod = getIteratorMethod(O2);
      var i2, length, result, thisIsBigIntArray, value, step, iterator, next;
      if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
        iterator = getIterator(O2, iteratorMethod);
        next = iterator.next;
        O2 = [];
        while (!(step = call5(next, iterator)).done) {
          O2.push(step.value);
        }
      }
      if (mapping && argumentsLength > 2) {
        mapfn = bind2(mapfn, arguments[2]);
      }
      length = lengthOfArrayLike7(O2);
      result = new (aTypedArrayConstructor(C2))(length);
      thisIsBigIntArray = isBigIntArray(result);
      for (i2 = 0; length > i2; i2++) {
        value = mapping ? mapfn(O2[i2], i2) : O2[i2];
        result[i2] = thisIsBigIntArray ? toBigInt2(value) : +value;
      }
      return result;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-from-constructor-and-list.js
var require_array_from_constructor_and_list = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-from-constructor-and-list.js"(exports, module) {
    "use strict";
    var lengthOfArrayLike7 = require_length_of_array_like();
    module.exports = function(Constructor, list, $length) {
      var index = 0;
      var length = arguments.length > 2 ? $length : lengthOfArrayLike7(list);
      var result = new Constructor(length);
      while (length > index)
        result[index] = list[index++];
      return result;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/typed-array-constructor.js
var require_typed_array_constructor = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/typed-array-constructor.js"(exports, module) {
    "use strict";
    var $32 = require_export();
    var globalThis14 = require_global_this();
    var call5 = require_function_call();
    var DESCRIPTORS7 = require_descriptors();
    var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS2 = require_typed_array_constructors_require_wrappers();
    var ArrayBufferViewCore23 = require_array_buffer_view_core();
    var ArrayBufferModule = require_array_buffer();
    var anInstance = require_an_instance();
    var createPropertyDescriptor = require_create_property_descriptor();
    var createNonEnumerableProperty3 = require_create_non_enumerable_property();
    var isIntegralNumber = require_is_integral_number();
    var toLength4 = require_to_length();
    var toIndex = require_to_index();
    var toOffset2 = require_to_offset();
    var toUint8Clamped = require_to_uint8_clamped();
    var toPropertyKey = require_to_property_key();
    var hasOwn4 = require_has_own_property();
    var classof2 = require_classof();
    var isObject5 = require_is_object();
    var isSymbol2 = require_is_symbol();
    var create2 = require_object_create();
    var isPrototypeOf4 = require_object_is_prototype_of();
    var setPrototypeOf = require_object_set_prototype_of();
    var getOwnPropertyNames3 = require_object_get_own_property_names().f;
    var typedArrayFrom2 = require_typed_array_from();
    var forEach4 = require_array_iteration().forEach;
    var setSpecies2 = require_set_species();
    var defineBuiltInAccessor4 = require_define_built_in_accessor();
    var definePropertyModule2 = require_object_define_property();
    var getOwnPropertyDescriptorModule2 = require_object_get_own_property_descriptor();
    var arrayFromConstructorAndList = require_array_from_constructor_and_list();
    var InternalStateModule = require_internal_state();
    var inheritIfRequired2 = require_inherit_if_required();
    var getInternalState = InternalStateModule.get;
    var setInternalState = InternalStateModule.set;
    var enforceInternalState = InternalStateModule.enforce;
    var nativeDefineProperty = definePropertyModule2.f;
    var nativeGetOwnPropertyDescriptor2 = getOwnPropertyDescriptorModule2.f;
    var RangeError3 = globalThis14.RangeError;
    var ArrayBuffer3 = ArrayBufferModule.ArrayBuffer;
    var ArrayBufferPrototype = ArrayBuffer3.prototype;
    var DataView2 = ArrayBufferModule.DataView;
    var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore23.NATIVE_ARRAY_BUFFER_VIEWS;
    var TYPED_ARRAY_TAG = ArrayBufferViewCore23.TYPED_ARRAY_TAG;
    var TypedArray = ArrayBufferViewCore23.TypedArray;
    var TypedArrayPrototype2 = ArrayBufferViewCore23.TypedArrayPrototype;
    var isTypedArray = ArrayBufferViewCore23.isTypedArray;
    var BYTES_PER_ELEMENT = "BYTES_PER_ELEMENT";
    var WRONG_LENGTH = "Wrong length";
    var addGetter = function(it3, key) {
      defineBuiltInAccessor4(it3, key, {
        configurable: true,
        get: function() {
          return getInternalState(this)[key];
        }
      });
    };
    var isArrayBuffer = function(it3) {
      var klass;
      return isPrototypeOf4(ArrayBufferPrototype, it3) || (klass = classof2(it3)) === "ArrayBuffer" || klass === "SharedArrayBuffer";
    };
    var isTypedArrayIndex = function(target, key) {
      return isTypedArray(target) && !isSymbol2(key) && key in target && isIntegralNumber(+key) && key >= 0;
    };
    var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor4(target, key) {
      key = toPropertyKey(key);
      return isTypedArrayIndex(target, key) ? createPropertyDescriptor(2, target[key]) : nativeGetOwnPropertyDescriptor2(target, key);
    };
    var wrappedDefineProperty = function defineProperty2(target, key, descriptor) {
      key = toPropertyKey(key);
      if (isTypedArrayIndex(target, key) && isObject5(descriptor) && hasOwn4(descriptor, "value") && !hasOwn4(descriptor, "get") && !hasOwn4(descriptor, "set") && !descriptor.configurable && (!hasOwn4(descriptor, "writable") || descriptor.writable) && (!hasOwn4(descriptor, "enumerable") || descriptor.enumerable)) {
        target[key] = descriptor.value;
        return target;
      }
      return nativeDefineProperty(target, key, descriptor);
    };
    if (DESCRIPTORS7) {
      if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        getOwnPropertyDescriptorModule2.f = wrappedGetOwnPropertyDescriptor;
        definePropertyModule2.f = wrappedDefineProperty;
        addGetter(TypedArrayPrototype2, "buffer");
        addGetter(TypedArrayPrototype2, "byteOffset");
        addGetter(TypedArrayPrototype2, "byteLength");
        addGetter(TypedArrayPrototype2, "length");
      }
      $32({ target: "Object", stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
        getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
        defineProperty: wrappedDefineProperty
      });
      module.exports = function(TYPE, wrapper, CLAMPED) {
        var BYTES = TYPE.match(/\d+/)[0] / 8;
        var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? "Clamped" : "") + "Array";
        var GETTER = "get" + TYPE;
        var SETTER = "set" + TYPE;
        var NativeTypedArrayConstructor = globalThis14[CONSTRUCTOR_NAME];
        var TypedArrayConstructor = NativeTypedArrayConstructor;
        var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
        var exported = {};
        var getter = function(that, index) {
          var data = getInternalState(that);
          return data.view[GETTER](index * BYTES + data.byteOffset, true);
        };
        var setter = function(that, index, value) {
          var data = getInternalState(that);
          data.view[SETTER](index * BYTES + data.byteOffset, CLAMPED ? toUint8Clamped(value) : value, true);
        };
        var addElement = function(that, index) {
          nativeDefineProperty(that, index, {
            get: function() {
              return getter(this, index);
            },
            set: function(value) {
              return setter(this, index, value);
            },
            enumerable: true
          });
        };
        if (!NATIVE_ARRAY_BUFFER_VIEWS) {
          TypedArrayConstructor = wrapper(function(that, data, offset, $length) {
            anInstance(that, TypedArrayConstructorPrototype);
            var index = 0;
            var byteOffset = 0;
            var buffer, byteLength, length;
            if (!isObject5(data)) {
              length = toIndex(data);
              byteLength = length * BYTES;
              buffer = new ArrayBuffer3(byteLength);
            } else if (isArrayBuffer(data)) {
              buffer = data;
              byteOffset = toOffset2(offset, BYTES);
              var $len = data.byteLength;
              if ($length === void 0) {
                if ($len % BYTES)
                  throw new RangeError3(WRONG_LENGTH);
                byteLength = $len - byteOffset;
                if (byteLength < 0)
                  throw new RangeError3(WRONG_LENGTH);
              } else {
                byteLength = toLength4($length) * BYTES;
                if (byteLength + byteOffset > $len)
                  throw new RangeError3(WRONG_LENGTH);
              }
              length = byteLength / BYTES;
            } else if (isTypedArray(data)) {
              return arrayFromConstructorAndList(TypedArrayConstructor, data);
            } else {
              return call5(typedArrayFrom2, TypedArrayConstructor, data);
            }
            setInternalState(that, {
              buffer,
              byteOffset,
              byteLength,
              length,
              view: new DataView2(buffer)
            });
            while (index < length)
              addElement(that, index++);
          });
          if (setPrototypeOf)
            setPrototypeOf(TypedArrayConstructor, TypedArray);
          TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create2(TypedArrayPrototype2);
        } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS2) {
          TypedArrayConstructor = wrapper(function(dummy, data, typedArrayOffset, $length) {
            anInstance(dummy, TypedArrayConstructorPrototype);
            return inheritIfRequired2(function() {
              if (!isObject5(data))
                return new NativeTypedArrayConstructor(toIndex(data));
              if (isArrayBuffer(data))
                return $length !== void 0 ? new NativeTypedArrayConstructor(data, toOffset2(typedArrayOffset, BYTES), $length) : typedArrayOffset !== void 0 ? new NativeTypedArrayConstructor(data, toOffset2(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
              if (isTypedArray(data))
                return arrayFromConstructorAndList(TypedArrayConstructor, data);
              return call5(typedArrayFrom2, TypedArrayConstructor, data);
            }(), dummy, TypedArrayConstructor);
          });
          if (setPrototypeOf)
            setPrototypeOf(TypedArrayConstructor, TypedArray);
          forEach4(getOwnPropertyNames3(NativeTypedArrayConstructor), function(key) {
            if (!(key in TypedArrayConstructor)) {
              createNonEnumerableProperty3(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
            }
          });
          TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
        }
        if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
          createNonEnumerableProperty3(TypedArrayConstructorPrototype, "constructor", TypedArrayConstructor);
        }
        enforceInternalState(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;
        if (TYPED_ARRAY_TAG) {
          createNonEnumerableProperty3(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
        }
        var FORCED11 = TypedArrayConstructor !== NativeTypedArrayConstructor;
        exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
        $32({ global: true, constructor: true, forced: FORCED11, sham: !NATIVE_ARRAY_BUFFER_VIEWS }, exported);
        if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
          createNonEnumerableProperty3(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
        }
        if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
          createNonEnumerableProperty3(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
        }
        setSpecies2(CONSTRUCTOR_NAME);
      };
    } else
      module.exports = function() {
      };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-copy-within.js
var require_array_copy_within = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-copy-within.js"(exports, module) {
    "use strict";
    var toObject7 = require_to_object();
    var toAbsoluteIndex4 = require_to_absolute_index();
    var lengthOfArrayLike7 = require_length_of_array_like();
    var deletePropertyOrThrow3 = require_delete_property_or_throw();
    var min4 = Math.min;
    module.exports = [].copyWithin || function copyWithin2(target, start) {
      var O2 = toObject7(this);
      var len = lengthOfArrayLike7(O2);
      var to2 = toAbsoluteIndex4(target, len);
      var from2 = toAbsoluteIndex4(start, len);
      var end2 = arguments.length > 2 ? arguments[2] : void 0;
      var count = min4((end2 === void 0 ? len : toAbsoluteIndex4(end2, len)) - from2, len - to2);
      var inc = 1;
      if (from2 < to2 && to2 < from2 + count) {
        inc = -1;
        from2 += count - 1;
        to2 += count - 1;
      }
      while (count-- > 0) {
        if (from2 in O2)
          O2[to2] = O2[from2];
        else
          deletePropertyOrThrow3(O2, to2);
        to2 += inc;
        from2 += inc;
      }
      return O2;
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/typed-array-from-same-type-and-list.js
var require_typed_array_from_same_type_and_list = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/typed-array-from-same-type-and-list.js"(exports, module) {
    "use strict";
    var arrayFromConstructorAndList = require_array_from_constructor_and_list();
    var getTypedArrayConstructor4 = require_array_buffer_view_core().getTypedArrayConstructor;
    module.exports = function(instance, list) {
      return arrayFromConstructorAndList(getTypedArrayConstructor4(instance), list);
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-last-index-of.js
var require_array_last_index_of = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-last-index-of.js"(exports, module) {
    "use strict";
    var apply5 = require_function_apply();
    var toIndexedObject6 = require_to_indexed_object();
    var toIntegerOrInfinity4 = require_to_integer_or_infinity();
    var lengthOfArrayLike7 = require_length_of_array_like();
    var arrayMethodIsStrict3 = require_array_method_is_strict();
    var min4 = Math.min;
    var $lastIndexOf2 = [].lastIndexOf;
    var NEGATIVE_ZERO = !!$lastIndexOf2 && 1 / [1].lastIndexOf(1, -0) < 0;
    var STRICT_METHOD2 = arrayMethodIsStrict3("lastIndexOf");
    var FORCED11 = NEGATIVE_ZERO || !STRICT_METHOD2;
    module.exports = FORCED11 ? function lastIndexOf2(searchElement) {
      if (NEGATIVE_ZERO)
        return apply5($lastIndexOf2, this, arguments) || 0;
      var O2 = toIndexedObject6(this);
      var length = lengthOfArrayLike7(O2);
      if (length === 0)
        return -1;
      var index = length - 1;
      if (arguments.length > 1)
        index = min4(index, toIntegerOrInfinity4(arguments[1]));
      if (index < 0)
        index = length + index;
      for (; index >= 0; index--)
        if (index in O2 && O2[index] === searchElement)
          return index || 0;
      return -1;
    } : $lastIndexOf2;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-reduce.js
var require_array_reduce = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-reduce.js"(exports, module) {
    "use strict";
    var aCallable4 = require_a_callable();
    var toObject7 = require_to_object();
    var IndexedObject2 = require_indexed_object();
    var lengthOfArrayLike7 = require_length_of_array_like();
    var $TypeError = TypeError;
    var REDUCE_EMPTY = "Reduce of empty array with no initial value";
    var createMethod = function(IS_RIGHT) {
      return function(that, callbackfn, argumentsLength, memo) {
        var O2 = toObject7(that);
        var self2 = IndexedObject2(O2);
        var length = lengthOfArrayLike7(O2);
        aCallable4(callbackfn);
        if (length === 0 && argumentsLength < 2)
          throw new $TypeError(REDUCE_EMPTY);
        var index = IS_RIGHT ? length - 1 : 0;
        var i2 = IS_RIGHT ? -1 : 1;
        if (argumentsLength < 2)
          while (true) {
            if (index in self2) {
              memo = self2[index];
              index += i2;
              break;
            }
            index += i2;
            if (IS_RIGHT ? index < 0 : length <= index) {
              throw new $TypeError(REDUCE_EMPTY);
            }
          }
        for (; IS_RIGHT ? index >= 0 : length > index; index += i2)
          if (index in self2) {
            memo = callbackfn(memo, self2[index], index, O2);
          }
        return memo;
      };
    };
    module.exports = {
      // `Array.prototype.reduce` method
      // https://tc39.es/ecma262/#sec-array.prototype.reduce
      left: createMethod(false),
      // `Array.prototype.reduceRight` method
      // https://tc39.es/ecma262/#sec-array.prototype.reduceright
      right: createMethod(true)
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.global-this.js
var require_es_global_this = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.global-this.js"() {
    "use strict";
    var $32 = require_export();
    var globalThis14 = require_global_this();
    $32({ global: true, forced: globalThis14.globalThis !== globalThis14 }, {
      globalThis: globalThis14
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.promise.all-settled.js
var require_es_promise_all_settled = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.promise.all-settled.js"() {
    "use strict";
    var $32 = require_export();
    var call5 = require_function_call();
    var aCallable4 = require_a_callable();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var perform = require_perform();
    var iterate = require_iterate();
    var PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
    $32({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
      allSettled: function allSettled(iterable) {
        var C2 = this;
        var capability = newPromiseCapabilityModule.f(C2);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
          var promiseResolve2 = aCallable4(C2.resolve);
          var values2 = [];
          var counter = 0;
          var remaining = 1;
          iterate(iterable, function(promise) {
            var index = counter++;
            var alreadyCalled = false;
            remaining++;
            call5(promiseResolve2, C2, promise).then(function(value) {
              if (alreadyCalled)
                return;
              alreadyCalled = true;
              values2[index] = { status: "fulfilled", value };
              --remaining || resolve(values2);
            }, function(error2) {
              if (alreadyCalled)
                return;
              alreadyCalled = true;
              values2[index] = { status: "rejected", reason: error2 };
              --remaining || resolve(values2);
            });
          });
          --remaining || resolve(values2);
        });
        if (result.error)
          reject(result.value);
        return capability.promise;
      }
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/dom-iterables.js
var require_dom_iterables = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/dom-iterables.js"(exports, module) {
    "use strict";
    module.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/dom-token-list-prototype.js
var require_dom_token_list_prototype = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/dom-token-list-prototype.js"(exports, module) {
    "use strict";
    var documentCreateElement = require_document_create_element();
    var classList = documentCreateElement("span").classList;
    var DOMTokenListPrototype3 = classList && classList.constructor && classList.constructor.prototype;
    module.exports = DOMTokenListPrototype3 === Object.prototype ? void 0 : DOMTokenListPrototype3;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-for-each.js
var require_array_for_each = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/array-for-each.js"(exports, module) {
    "use strict";
    var $forEach2 = require_array_iteration().forEach;
    var arrayMethodIsStrict3 = require_array_method_is_strict();
    var STRICT_METHOD2 = arrayMethodIsStrict3("forEach");
    module.exports = !STRICT_METHOD2 ? function forEach4(callbackfn) {
      return $forEach2(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
    } : [].forEach;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/url-constructor-detection.js
var require_url_constructor_detection = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/url-constructor-detection.js"(exports, module) {
    "use strict";
    var fails22 = require_fails();
    var wellKnownSymbol8 = require_well_known_symbol();
    var DESCRIPTORS7 = require_descriptors();
    var IS_PURE4 = require_is_pure();
    var ITERATOR3 = wellKnownSymbol8("iterator");
    module.exports = !fails22(function() {
      var url = new URL("b?a=1&b=2&c=3", "https://a");
      var params = url.searchParams;
      var params2 = new URLSearchParams("a=1&a=2&b=3");
      var result = "";
      url.pathname = "c%20d";
      params.forEach(function(value, key) {
        params["delete"]("b");
        result += key + value;
      });
      params2["delete"]("a", 2);
      params2["delete"]("b", void 0);
      return IS_PURE4 && (!url.toJSON || !params2.has("a", 1) || params2.has("a", 2) || !params2.has("a", void 0) || params2.has("b")) || !params.size && (IS_PURE4 || !DESCRIPTORS7) || !params.sort || url.href !== "https://a/c%20d?a=1&c=3" || params.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !params[ITERATOR3] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("https://тест").host !== "xn--e1aybc" || new URL("https://a#б").hash !== "#%D0%B1" || result !== "a1c3" || new URL("https://x", void 0).host !== "x";
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/string-punycode-to-ascii.js
var require_string_punycode_to_ascii = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/internals/string-punycode-to-ascii.js"(exports, module) {
    "use strict";
    var uncurryThis16 = require_function_uncurry_this();
    var maxInt = 2147483647;
    var base = 36;
    var tMin = 1;
    var tMax = 26;
    var skew = 38;
    var damp = 700;
    var initialBias = 72;
    var initialN = 128;
    var delimiter = "-";
    var regexNonASCII = /[^\0-\u007E]/;
    var regexSeparators = /[.\u3002\uFF0E\uFF61]/g;
    var OVERFLOW_ERROR = "Overflow: input needs wider integers to process";
    var baseMinusTMin = base - tMin;
    var $RangeError2 = RangeError;
    var exec = uncurryThis16(regexSeparators.exec);
    var floor3 = Math.floor;
    var fromCharCode = String.fromCharCode;
    var charCodeAt2 = uncurryThis16("".charCodeAt);
    var join4 = uncurryThis16([].join);
    var push5 = uncurryThis16([].push);
    var replace = uncurryThis16("".replace);
    var split = uncurryThis16("".split);
    var toLowerCase = uncurryThis16("".toLowerCase);
    var ucs2decode = function(string) {
      var output = [];
      var counter = 0;
      var length = string.length;
      while (counter < length) {
        var value = charCodeAt2(string, counter++);
        if (value >= 55296 && value <= 56319 && counter < length) {
          var extra = charCodeAt2(string, counter++);
          if ((extra & 64512) === 56320) {
            push5(output, ((value & 1023) << 10) + (extra & 1023) + 65536);
          } else {
            push5(output, value);
            counter--;
          }
        } else {
          push5(output, value);
        }
      }
      return output;
    };
    var digitToBasic = function(digit) {
      return digit + 22 + 75 * (digit < 26);
    };
    var adapt = function(delta, numPoints, firstTime) {
      var k2 = 0;
      delta = firstTime ? floor3(delta / damp) : delta >> 1;
      delta += floor3(delta / numPoints);
      while (delta > baseMinusTMin * tMax >> 1) {
        delta = floor3(delta / baseMinusTMin);
        k2 += base;
      }
      return floor3(k2 + (baseMinusTMin + 1) * delta / (delta + skew));
    };
    var encode = function(input) {
      var output = [];
      input = ucs2decode(input);
      var inputLength = input.length;
      var n2 = initialN;
      var delta = 0;
      var bias = initialBias;
      var i2, currentValue;
      for (i2 = 0; i2 < input.length; i2++) {
        currentValue = input[i2];
        if (currentValue < 128) {
          push5(output, fromCharCode(currentValue));
        }
      }
      var basicLength = output.length;
      var handledCPCount = basicLength;
      if (basicLength) {
        push5(output, delimiter);
      }
      while (handledCPCount < inputLength) {
        var m2 = maxInt;
        for (i2 = 0; i2 < input.length; i2++) {
          currentValue = input[i2];
          if (currentValue >= n2 && currentValue < m2) {
            m2 = currentValue;
          }
        }
        var handledCPCountPlusOne = handledCPCount + 1;
        if (m2 - n2 > floor3((maxInt - delta) / handledCPCountPlusOne)) {
          throw new $RangeError2(OVERFLOW_ERROR);
        }
        delta += (m2 - n2) * handledCPCountPlusOne;
        n2 = m2;
        for (i2 = 0; i2 < input.length; i2++) {
          currentValue = input[i2];
          if (currentValue < n2 && ++delta > maxInt) {
            throw new $RangeError2(OVERFLOW_ERROR);
          }
          if (currentValue === n2) {
            var q2 = delta;
            var k2 = base;
            while (true) {
              var t2 = k2 <= bias ? tMin : k2 >= bias + tMax ? tMax : k2 - bias;
              if (q2 < t2)
                break;
              var qMinusT = q2 - t2;
              var baseMinusT = base - t2;
              push5(output, fromCharCode(digitToBasic(t2 + qMinusT % baseMinusT)));
              q2 = floor3(qMinusT / baseMinusT);
              k2 += base;
            }
            push5(output, fromCharCode(digitToBasic(q2)));
            bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
            delta = 0;
            handledCPCount++;
          }
        }
        delta++;
        n2++;
      }
      return join4(output, "");
    };
    module.exports = function(input) {
      var encoded = [];
      var labels = split(replace(toLowerCase(input), regexSeparators, "."), ".");
      var i2, label;
      for (i2 = 0; i2 < labels.length; i2++) {
        label = labels[i2];
        push5(encoded, exec(regexNonASCII, label) ? "xn--" + encode(label) : label);
      }
      return join4(encoded, ".");
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.string.from-code-point.js
var require_es_string_from_code_point = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.string.from-code-point.js"() {
    "use strict";
    var $32 = require_export();
    var uncurryThis16 = require_function_uncurry_this();
    var toAbsoluteIndex4 = require_to_absolute_index();
    var $RangeError2 = RangeError;
    var fromCharCode = String.fromCharCode;
    var $fromCodePoint = String.fromCodePoint;
    var join4 = uncurryThis16([].join);
    var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length !== 1;
    $32({ target: "String", stat: true, arity: 1, forced: INCORRECT_LENGTH }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      fromCodePoint: function fromCodePoint(x2) {
        var elements = [];
        var length = arguments.length;
        var i2 = 0;
        var code;
        while (length > i2) {
          code = +arguments[i2++];
          if (toAbsoluteIndex4(code, 1114111) !== code)
            throw new $RangeError2(code + " is not a valid code point");
          elements[i2] = code < 65536 ? fromCharCode(code) : fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320);
        }
        return join4(elements, "");
      }
    });
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/web.url-search-params.constructor.js
var require_web_url_search_params_constructor = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/web.url-search-params.constructor.js"(exports, module) {
    "use strict";
    require_es_array_iterator();
    require_es_string_from_code_point();
    var $32 = require_export();
    var globalThis14 = require_global_this();
    var safeGetBuiltIn = require_safe_get_built_in();
    var getBuiltIn4 = require_get_built_in();
    var call5 = require_function_call();
    var uncurryThis16 = require_function_uncurry_this();
    var DESCRIPTORS7 = require_descriptors();
    var USE_NATIVE_URL = require_url_constructor_detection();
    var defineBuiltIn5 = require_define_built_in();
    var defineBuiltInAccessor4 = require_define_built_in_accessor();
    var defineBuiltIns = require_define_built_ins();
    var setToStringTag5 = require_set_to_string_tag();
    var createIteratorConstructor = require_iterator_create_constructor();
    var InternalStateModule = require_internal_state();
    var anInstance = require_an_instance();
    var isCallable5 = require_is_callable();
    var hasOwn4 = require_has_own_property();
    var bind2 = require_function_bind_context();
    var classof2 = require_classof();
    var anObject4 = require_an_object();
    var isObject5 = require_is_object();
    var $toString2 = require_to_string();
    var create2 = require_object_create();
    var createPropertyDescriptor = require_create_property_descriptor();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var createIterResultObject = require_create_iter_result_object();
    var validateArgumentsLength = require_validate_arguments_length();
    var wellKnownSymbol8 = require_well_known_symbol();
    var arraySort = require_array_sort();
    var ITERATOR3 = wellKnownSymbol8("iterator");
    var URL_SEARCH_PARAMS = "URLSearchParams";
    var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + "Iterator";
    var setInternalState = InternalStateModule.set;
    var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
    var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
    var nativeFetch = safeGetBuiltIn("fetch");
    var NativeRequest = safeGetBuiltIn("Request");
    var Headers = safeGetBuiltIn("Headers");
    var RequestPrototype = NativeRequest && NativeRequest.prototype;
    var HeadersPrototype = Headers && Headers.prototype;
    var TypeError3 = globalThis14.TypeError;
    var encodeURIComponent2 = globalThis14.encodeURIComponent;
    var fromCharCode = String.fromCharCode;
    var fromCodePoint = getBuiltIn4("String", "fromCodePoint");
    var $parseInt = parseInt;
    var charAt = uncurryThis16("".charAt);
    var join4 = uncurryThis16([].join);
    var push5 = uncurryThis16([].push);
    var replace = uncurryThis16("".replace);
    var shift = uncurryThis16([].shift);
    var splice2 = uncurryThis16([].splice);
    var split = uncurryThis16("".split);
    var stringSlice5 = uncurryThis16("".slice);
    var exec = uncurryThis16(/./.exec);
    var plus = /\+/g;
    var FALLBACK_REPLACER = "�";
    var VALID_HEX = /^[0-9a-f]+$/i;
    var parseHexOctet = function(string, start) {
      var substr = stringSlice5(string, start, start + 2);
      if (!exec(VALID_HEX, substr))
        return NaN;
      return $parseInt(substr, 16);
    };
    var getLeadingOnes = function(octet) {
      var count = 0;
      for (var mask = 128; mask > 0 && (octet & mask) !== 0; mask >>= 1) {
        count++;
      }
      return count;
    };
    var utf8Decode = function(octets) {
      var codePoint = null;
      switch (octets.length) {
        case 1:
          codePoint = octets[0];
          break;
        case 2:
          codePoint = (octets[0] & 31) << 6 | octets[1] & 63;
          break;
        case 3:
          codePoint = (octets[0] & 15) << 12 | (octets[1] & 63) << 6 | octets[2] & 63;
          break;
        case 4:
          codePoint = (octets[0] & 7) << 18 | (octets[1] & 63) << 12 | (octets[2] & 63) << 6 | octets[3] & 63;
          break;
      }
      return codePoint > 1114111 ? null : codePoint;
    };
    var decode = function(input) {
      input = replace(input, plus, " ");
      var length = input.length;
      var result = "";
      var i2 = 0;
      while (i2 < length) {
        var decodedChar = charAt(input, i2);
        if (decodedChar === "%") {
          if (charAt(input, i2 + 1) === "%" || i2 + 3 > length) {
            result += "%";
            i2++;
            continue;
          }
          var octet = parseHexOctet(input, i2 + 1);
          if (octet !== octet) {
            result += decodedChar;
            i2++;
            continue;
          }
          i2 += 2;
          var byteSequenceLength = getLeadingOnes(octet);
          if (byteSequenceLength === 0) {
            decodedChar = fromCharCode(octet);
          } else {
            if (byteSequenceLength === 1 || byteSequenceLength > 4) {
              result += FALLBACK_REPLACER;
              i2++;
              continue;
            }
            var octets = [octet];
            var sequenceIndex = 1;
            while (sequenceIndex < byteSequenceLength) {
              i2++;
              if (i2 + 3 > length || charAt(input, i2) !== "%")
                break;
              var nextByte = parseHexOctet(input, i2 + 1);
              if (nextByte !== nextByte) {
                i2 += 3;
                break;
              }
              if (nextByte > 191 || nextByte < 128)
                break;
              push5(octets, nextByte);
              i2 += 2;
              sequenceIndex++;
            }
            if (octets.length !== byteSequenceLength) {
              result += FALLBACK_REPLACER;
              continue;
            }
            var codePoint = utf8Decode(octets);
            if (codePoint === null) {
              result += FALLBACK_REPLACER;
            } else {
              decodedChar = fromCodePoint(codePoint);
            }
          }
        }
        result += decodedChar;
        i2++;
      }
      return result;
    };
    var find3 = /[!'()~]|%20/g;
    var replacements = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+"
    };
    var replacer = function(match) {
      return replacements[match];
    };
    var serialize = function(it3) {
      return replace(encodeURIComponent2(it3), find3, replacer);
    };
    var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
      setInternalState(this, {
        type: URL_SEARCH_PARAMS_ITERATOR,
        target: getInternalParamsState(params).entries,
        index: 0,
        kind
      });
    }, URL_SEARCH_PARAMS, function next() {
      var state = getInternalIteratorState(this);
      var target = state.target;
      var index = state.index++;
      if (!target || index >= target.length) {
        state.target = null;
        return createIterResultObject(void 0, true);
      }
      var entry = target[index];
      switch (state.kind) {
        case "keys":
          return createIterResultObject(entry.key, false);
        case "values":
          return createIterResultObject(entry.value, false);
      }
      return createIterResultObject([entry.key, entry.value], false);
    }, true);
    var URLSearchParamsState = function(init2) {
      this.entries = [];
      this.url = null;
      if (init2 !== void 0) {
        if (isObject5(init2))
          this.parseObject(init2);
        else
          this.parseQuery(typeof init2 == "string" ? charAt(init2, 0) === "?" ? stringSlice5(init2, 1) : init2 : $toString2(init2));
      }
    };
    URLSearchParamsState.prototype = {
      type: URL_SEARCH_PARAMS,
      bindURL: function(url) {
        this.url = url;
        this.update();
      },
      parseObject: function(object) {
        var entries3 = this.entries;
        var iteratorMethod = getIteratorMethod(object);
        var iterator, next, step, entryIterator, entryNext, first, second;
        if (iteratorMethod) {
          iterator = getIterator(object, iteratorMethod);
          next = iterator.next;
          while (!(step = call5(next, iterator)).done) {
            entryIterator = getIterator(anObject4(step.value));
            entryNext = entryIterator.next;
            if ((first = call5(entryNext, entryIterator)).done || (second = call5(entryNext, entryIterator)).done || !call5(entryNext, entryIterator).done)
              throw new TypeError3("Expected sequence with length 2");
            push5(entries3, { key: $toString2(first.value), value: $toString2(second.value) });
          }
        } else
          for (var key in object)
            if (hasOwn4(object, key)) {
              push5(entries3, { key, value: $toString2(object[key]) });
            }
      },
      parseQuery: function(query) {
        if (query) {
          var entries3 = this.entries;
          var attributes = split(query, "&");
          var index = 0;
          var attribute, entry;
          while (index < attributes.length) {
            attribute = attributes[index++];
            if (attribute.length) {
              entry = split(attribute, "=");
              push5(entries3, {
                key: decode(shift(entry)),
                value: decode(join4(entry, "="))
              });
            }
          }
        }
      },
      serialize: function() {
        var entries3 = this.entries;
        var result = [];
        var index = 0;
        var entry;
        while (index < entries3.length) {
          entry = entries3[index++];
          push5(result, serialize(entry.key) + "=" + serialize(entry.value));
        }
        return join4(result, "&");
      },
      update: function() {
        this.entries.length = 0;
        this.parseQuery(this.url.query);
      },
      updateURL: function() {
        if (this.url)
          this.url.update();
      }
    };
    var URLSearchParamsConstructor = function URLSearchParams2() {
      anInstance(this, URLSearchParamsPrototype);
      var init2 = arguments.length > 0 ? arguments[0] : void 0;
      var state = setInternalState(this, new URLSearchParamsState(init2));
      if (!DESCRIPTORS7)
        this.size = state.entries.length;
    };
    var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
    defineBuiltIns(URLSearchParamsPrototype, {
      // `URLSearchParams.prototype.append` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-append
      append: function append(name, value) {
        var state = getInternalParamsState(this);
        validateArgumentsLength(arguments.length, 2);
        push5(state.entries, { key: $toString2(name), value: $toString2(value) });
        if (!DESCRIPTORS7)
          this.length++;
        state.updateURL();
      },
      // `URLSearchParams.prototype.delete` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
      "delete": function(name) {
        var state = getInternalParamsState(this);
        var length = validateArgumentsLength(arguments.length, 1);
        var entries3 = state.entries;
        var key = $toString2(name);
        var $value = length < 2 ? void 0 : arguments[1];
        var value = $value === void 0 ? $value : $toString2($value);
        var index = 0;
        while (index < entries3.length) {
          var entry = entries3[index];
          if (entry.key === key && (value === void 0 || entry.value === value)) {
            splice2(entries3, index, 1);
            if (value !== void 0)
              break;
          } else
            index++;
        }
        if (!DESCRIPTORS7)
          this.size = entries3.length;
        state.updateURL();
      },
      // `URLSearchParams.prototype.get` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-get
      get: function get(name) {
        var entries3 = getInternalParamsState(this).entries;
        validateArgumentsLength(arguments.length, 1);
        var key = $toString2(name);
        var index = 0;
        for (; index < entries3.length; index++) {
          if (entries3[index].key === key)
            return entries3[index].value;
        }
        return null;
      },
      // `URLSearchParams.prototype.getAll` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
      getAll: function getAll(name) {
        var entries3 = getInternalParamsState(this).entries;
        validateArgumentsLength(arguments.length, 1);
        var key = $toString2(name);
        var result = [];
        var index = 0;
        for (; index < entries3.length; index++) {
          if (entries3[index].key === key)
            push5(result, entries3[index].value);
        }
        return result;
      },
      // `URLSearchParams.prototype.has` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-has
      has: function has(name) {
        var entries3 = getInternalParamsState(this).entries;
        var length = validateArgumentsLength(arguments.length, 1);
        var key = $toString2(name);
        var $value = length < 2 ? void 0 : arguments[1];
        var value = $value === void 0 ? $value : $toString2($value);
        var index = 0;
        while (index < entries3.length) {
          var entry = entries3[index++];
          if (entry.key === key && (value === void 0 || entry.value === value))
            return true;
        }
        return false;
      },
      // `URLSearchParams.prototype.set` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-set
      set: function set2(name, value) {
        var state = getInternalParamsState(this);
        validateArgumentsLength(arguments.length, 1);
        var entries3 = state.entries;
        var found = false;
        var key = $toString2(name);
        var val = $toString2(value);
        var index = 0;
        var entry;
        for (; index < entries3.length; index++) {
          entry = entries3[index];
          if (entry.key === key) {
            if (found)
              splice2(entries3, index--, 1);
            else {
              found = true;
              entry.value = val;
            }
          }
        }
        if (!found)
          push5(entries3, { key, value: val });
        if (!DESCRIPTORS7)
          this.size = entries3.length;
        state.updateURL();
      },
      // `URLSearchParams.prototype.sort` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
      sort: function sort3() {
        var state = getInternalParamsState(this);
        arraySort(state.entries, function(a2, b2) {
          return a2.key > b2.key ? 1 : -1;
        });
        state.updateURL();
      },
      // `URLSearchParams.prototype.forEach` method
      forEach: function forEach4(callback) {
        var entries3 = getInternalParamsState(this).entries;
        var boundFunction = bind2(callback, arguments.length > 1 ? arguments[1] : void 0);
        var index = 0;
        var entry;
        while (index < entries3.length) {
          entry = entries3[index++];
          boundFunction(entry.value, entry.key, this);
        }
      },
      // `URLSearchParams.prototype.keys` method
      keys: function keys3() {
        return new URLSearchParamsIterator(this, "keys");
      },
      // `URLSearchParams.prototype.values` method
      values: function values2() {
        return new URLSearchParamsIterator(this, "values");
      },
      // `URLSearchParams.prototype.entries` method
      entries: function entries3() {
        return new URLSearchParamsIterator(this, "entries");
      }
    }, { enumerable: true });
    defineBuiltIn5(URLSearchParamsPrototype, ITERATOR3, URLSearchParamsPrototype.entries, { name: "entries" });
    defineBuiltIn5(URLSearchParamsPrototype, "toString", function toString8() {
      return getInternalParamsState(this).serialize();
    }, { enumerable: true });
    if (DESCRIPTORS7)
      defineBuiltInAccessor4(URLSearchParamsPrototype, "size", {
        get: function size() {
          return getInternalParamsState(this).entries.length;
        },
        configurable: true,
        enumerable: true
      });
    setToStringTag5(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
    $32({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {
      URLSearchParams: URLSearchParamsConstructor
    });
    if (!USE_NATIVE_URL && isCallable5(Headers)) {
      headersHas = uncurryThis16(HeadersPrototype.has);
      headersSet = uncurryThis16(HeadersPrototype.set);
      wrapRequestOptions = function(init2) {
        if (isObject5(init2)) {
          var body = init2.body;
          var headers;
          if (classof2(body) === URL_SEARCH_PARAMS) {
            headers = init2.headers ? new Headers(init2.headers) : new Headers();
            if (!headersHas(headers, "content-type")) {
              headersSet(headers, "content-type", "application/x-www-form-urlencoded;charset=UTF-8");
            }
            return create2(init2, {
              body: createPropertyDescriptor(0, $toString2(body)),
              headers: createPropertyDescriptor(0, headers)
            });
          }
        }
        return init2;
      };
      if (isCallable5(nativeFetch)) {
        $32({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
          fetch: function fetch2(input) {
            return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
          }
        });
      }
      if (isCallable5(NativeRequest)) {
        RequestConstructor = function Request(input) {
          anInstance(this, RequestPrototype);
          return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
        };
        RequestPrototype.constructor = RequestConstructor;
        RequestConstructor.prototype = RequestPrototype;
        $32({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
          Request: RequestConstructor
        });
      }
    }
    var headersHas;
    var headersSet;
    var wrapRequestOptions;
    var RequestConstructor;
    module.exports = {
      URLSearchParams: URLSearchParamsConstructor,
      getState: getInternalParamsState
    };
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/web.url.constructor.js
var require_web_url_constructor = __commonJS({
  "../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/web.url.constructor.js"() {
    "use strict";
    require_es_string_iterator();
    var $32 = require_export();
    var DESCRIPTORS7 = require_descriptors();
    var USE_NATIVE_URL = require_url_constructor_detection();
    var globalThis14 = require_global_this();
    var bind2 = require_function_bind_context();
    var uncurryThis16 = require_function_uncurry_this();
    var defineBuiltIn5 = require_define_built_in();
    var defineBuiltInAccessor4 = require_define_built_in_accessor();
    var anInstance = require_an_instance();
    var hasOwn4 = require_has_own_property();
    var assign2 = require_object_assign();
    var arrayFrom = require_array_from();
    var arraySlice3 = require_array_slice();
    var codeAt = require_string_multibyte().codeAt;
    var toASCII = require_string_punycode_to_ascii();
    var $toString2 = require_to_string();
    var setToStringTag5 = require_set_to_string_tag();
    var validateArgumentsLength = require_validate_arguments_length();
    var URLSearchParamsModule = require_web_url_search_params_constructor();
    var InternalStateModule = require_internal_state();
    var setInternalState = InternalStateModule.set;
    var getInternalURLState = InternalStateModule.getterFor("URL");
    var URLSearchParams2 = URLSearchParamsModule.URLSearchParams;
    var getInternalSearchParamsState = URLSearchParamsModule.getState;
    var NativeURL = globalThis14.URL;
    var TypeError3 = globalThis14.TypeError;
    var parseInt2 = globalThis14.parseInt;
    var floor3 = Math.floor;
    var pow2 = Math.pow;
    var charAt = uncurryThis16("".charAt);
    var exec = uncurryThis16(/./.exec);
    var join4 = uncurryThis16([].join);
    var numberToString = uncurryThis16(1 .toString);
    var pop = uncurryThis16([].pop);
    var push5 = uncurryThis16([].push);
    var replace = uncurryThis16("".replace);
    var shift = uncurryThis16([].shift);
    var split = uncurryThis16("".split);
    var stringSlice5 = uncurryThis16("".slice);
    var toLowerCase = uncurryThis16("".toLowerCase);
    var unshift = uncurryThis16([].unshift);
    var INVALID_AUTHORITY = "Invalid authority";
    var INVALID_SCHEME = "Invalid scheme";
    var INVALID_HOST = "Invalid host";
    var INVALID_PORT = "Invalid port";
    var ALPHA = /[a-z]/i;
    var ALPHANUMERIC = /[\d+-.a-z]/i;
    var DIGIT = /\d/;
    var HEX_START = /^0x/i;
    var OCT = /^[0-7]+$/;
    var DEC = /^\d+$/;
    var HEX = /^[\da-f]+$/i;
    var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
    var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
    var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
    var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
    var TAB_AND_NEW_LINE = /[\t\n\r]/g;
    var EOF;
    var parseIPv4 = function(input) {
      var parts = split(input, ".");
      var partsLength, numbers, index, part, radix, number, ipv4;
      if (parts.length && parts[parts.length - 1] === "") {
        parts.length--;
      }
      partsLength = parts.length;
      if (partsLength > 4)
        return input;
      numbers = [];
      for (index = 0; index < partsLength; index++) {
        part = parts[index];
        if (part === "")
          return input;
        radix = 10;
        if (part.length > 1 && charAt(part, 0) === "0") {
          radix = exec(HEX_START, part) ? 16 : 8;
          part = stringSlice5(part, radix === 8 ? 1 : 2);
        }
        if (part === "") {
          number = 0;
        } else {
          if (!exec(radix === 10 ? DEC : radix === 8 ? OCT : HEX, part))
            return input;
          number = parseInt2(part, radix);
        }
        push5(numbers, number);
      }
      for (index = 0; index < partsLength; index++) {
        number = numbers[index];
        if (index === partsLength - 1) {
          if (number >= pow2(256, 5 - partsLength))
            return null;
        } else if (number > 255)
          return null;
      }
      ipv4 = pop(numbers);
      for (index = 0; index < numbers.length; index++) {
        ipv4 += numbers[index] * pow2(256, 3 - index);
      }
      return ipv4;
    };
    var parseIPv6 = function(input) {
      var address = [0, 0, 0, 0, 0, 0, 0, 0];
      var pieceIndex = 0;
      var compress = null;
      var pointer = 0;
      var value, length, numbersSeen, ipv4Piece, number, swaps, swap;
      var chr = function() {
        return charAt(input, pointer);
      };
      if (chr() === ":") {
        if (charAt(input, 1) !== ":")
          return;
        pointer += 2;
        pieceIndex++;
        compress = pieceIndex;
      }
      while (chr()) {
        if (pieceIndex === 8)
          return;
        if (chr() === ":") {
          if (compress !== null)
            return;
          pointer++;
          pieceIndex++;
          compress = pieceIndex;
          continue;
        }
        value = length = 0;
        while (length < 4 && exec(HEX, chr())) {
          value = value * 16 + parseInt2(chr(), 16);
          pointer++;
          length++;
        }
        if (chr() === ".") {
          if (length === 0)
            return;
          pointer -= length;
          if (pieceIndex > 6)
            return;
          numbersSeen = 0;
          while (chr()) {
            ipv4Piece = null;
            if (numbersSeen > 0) {
              if (chr() === "." && numbersSeen < 4)
                pointer++;
              else
                return;
            }
            if (!exec(DIGIT, chr()))
              return;
            while (exec(DIGIT, chr())) {
              number = parseInt2(chr(), 10);
              if (ipv4Piece === null)
                ipv4Piece = number;
              else if (ipv4Piece === 0)
                return;
              else
                ipv4Piece = ipv4Piece * 10 + number;
              if (ipv4Piece > 255)
                return;
              pointer++;
            }
            address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
            numbersSeen++;
            if (numbersSeen === 2 || numbersSeen === 4)
              pieceIndex++;
          }
          if (numbersSeen !== 4)
            return;
          break;
        } else if (chr() === ":") {
          pointer++;
          if (!chr())
            return;
        } else if (chr())
          return;
        address[pieceIndex++] = value;
      }
      if (compress !== null) {
        swaps = pieceIndex - compress;
        pieceIndex = 7;
        while (pieceIndex !== 0 && swaps > 0) {
          swap = address[pieceIndex];
          address[pieceIndex--] = address[compress + swaps - 1];
          address[compress + --swaps] = swap;
        }
      } else if (pieceIndex !== 8)
        return;
      return address;
    };
    var findLongestZeroSequence = function(ipv6) {
      var maxIndex = null;
      var maxLength = 1;
      var currStart = null;
      var currLength = 0;
      var index = 0;
      for (; index < 8; index++) {
        if (ipv6[index] !== 0) {
          if (currLength > maxLength) {
            maxIndex = currStart;
            maxLength = currLength;
          }
          currStart = null;
          currLength = 0;
        } else {
          if (currStart === null)
            currStart = index;
          ++currLength;
        }
      }
      return currLength > maxLength ? currStart : maxIndex;
    };
    var serializeHost = function(host) {
      var result, index, compress, ignore0;
      if (typeof host == "number") {
        result = [];
        for (index = 0; index < 4; index++) {
          unshift(result, host % 256);
          host = floor3(host / 256);
        }
        return join4(result, ".");
      }
      if (typeof host == "object") {
        result = "";
        compress = findLongestZeroSequence(host);
        for (index = 0; index < 8; index++) {
          if (ignore0 && host[index] === 0)
            continue;
          if (ignore0)
            ignore0 = false;
          if (compress === index) {
            result += index ? ":" : "::";
            ignore0 = true;
          } else {
            result += numberToString(host[index], 16);
            if (index < 7)
              result += ":";
          }
        }
        return "[" + result + "]";
      }
      return host;
    };
    var C0ControlPercentEncodeSet = {};
    var fragmentPercentEncodeSet = assign2({}, C0ControlPercentEncodeSet, {
      " ": 1,
      '"': 1,
      "<": 1,
      ">": 1,
      "`": 1
    });
    var pathPercentEncodeSet = assign2({}, fragmentPercentEncodeSet, {
      "#": 1,
      "?": 1,
      "{": 1,
      "}": 1
    });
    var userinfoPercentEncodeSet = assign2({}, pathPercentEncodeSet, {
      "/": 1,
      ":": 1,
      ";": 1,
      "=": 1,
      "@": 1,
      "[": 1,
      "\\": 1,
      "]": 1,
      "^": 1,
      "|": 1
    });
    var percentEncode = function(chr, set2) {
      var code = codeAt(chr, 0);
      return code > 32 && code < 127 && !hasOwn4(set2, chr) ? chr : encodeURIComponent(chr);
    };
    var specialSchemes = {
      ftp: 21,
      file: null,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443
    };
    var isWindowsDriveLetter = function(string, normalized) {
      var second;
      return string.length === 2 && exec(ALPHA, charAt(string, 0)) && ((second = charAt(string, 1)) === ":" || !normalized && second === "|");
    };
    var startsWithWindowsDriveLetter = function(string) {
      var third;
      return string.length > 1 && isWindowsDriveLetter(stringSlice5(string, 0, 2)) && (string.length === 2 || ((third = charAt(string, 2)) === "/" || third === "\\" || third === "?" || third === "#"));
    };
    var isSingleDot = function(segment) {
      return segment === "." || toLowerCase(segment) === "%2e";
    };
    var isDoubleDot = function(segment) {
      segment = toLowerCase(segment);
      return segment === ".." || segment === "%2e." || segment === ".%2e" || segment === "%2e%2e";
    };
    var SCHEME_START = {};
    var SCHEME = {};
    var NO_SCHEME = {};
    var SPECIAL_RELATIVE_OR_AUTHORITY = {};
    var PATH_OR_AUTHORITY = {};
    var RELATIVE = {};
    var RELATIVE_SLASH = {};
    var SPECIAL_AUTHORITY_SLASHES = {};
    var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
    var AUTHORITY = {};
    var HOST = {};
    var HOSTNAME = {};
    var PORT = {};
    var FILE = {};
    var FILE_SLASH = {};
    var FILE_HOST = {};
    var PATH_START = {};
    var PATH = {};
    var CANNOT_BE_A_BASE_URL_PATH = {};
    var QUERY = {};
    var FRAGMENT = {};
    var URLState = function(url, isBase, base) {
      var urlString = $toString2(url);
      var baseState, failure, searchParams;
      if (isBase) {
        failure = this.parse(urlString);
        if (failure)
          throw new TypeError3(failure);
        this.searchParams = null;
      } else {
        if (base !== void 0)
          baseState = new URLState(base, true);
        failure = this.parse(urlString, null, baseState);
        if (failure)
          throw new TypeError3(failure);
        searchParams = getInternalSearchParamsState(new URLSearchParams2());
        searchParams.bindURL(this);
        this.searchParams = searchParams;
      }
    };
    URLState.prototype = {
      type: "URL",
      // https://url.spec.whatwg.org/#url-parsing
      // eslint-disable-next-line max-statements -- TODO
      parse: function(input, stateOverride, base) {
        var url = this;
        var state = stateOverride || SCHEME_START;
        var pointer = 0;
        var buffer = "";
        var seenAt = false;
        var seenBracket = false;
        var seenPasswordToken = false;
        var codePoints, chr, bufferCodePoints, failure;
        input = $toString2(input);
        if (!stateOverride) {
          url.scheme = "";
          url.username = "";
          url.password = "";
          url.host = null;
          url.port = null;
          url.path = [];
          url.query = null;
          url.fragment = null;
          url.cannotBeABaseURL = false;
          input = replace(input, LEADING_C0_CONTROL_OR_SPACE, "");
          input = replace(input, TRAILING_C0_CONTROL_OR_SPACE, "$1");
        }
        input = replace(input, TAB_AND_NEW_LINE, "");
        codePoints = arrayFrom(input);
        while (pointer <= codePoints.length) {
          chr = codePoints[pointer];
          switch (state) {
            case SCHEME_START:
              if (chr && exec(ALPHA, chr)) {
                buffer += toLowerCase(chr);
                state = SCHEME;
              } else if (!stateOverride) {
                state = NO_SCHEME;
                continue;
              } else
                return INVALID_SCHEME;
              break;
            case SCHEME:
              if (chr && (exec(ALPHANUMERIC, chr) || chr === "+" || chr === "-" || chr === ".")) {
                buffer += toLowerCase(chr);
              } else if (chr === ":") {
                if (stateOverride && (url.isSpecial() !== hasOwn4(specialSchemes, buffer) || buffer === "file" && (url.includesCredentials() || url.port !== null) || url.scheme === "file" && !url.host))
                  return;
                url.scheme = buffer;
                if (stateOverride) {
                  if (url.isSpecial() && specialSchemes[url.scheme] === url.port)
                    url.port = null;
                  return;
                }
                buffer = "";
                if (url.scheme === "file") {
                  state = FILE;
                } else if (url.isSpecial() && base && base.scheme === url.scheme) {
                  state = SPECIAL_RELATIVE_OR_AUTHORITY;
                } else if (url.isSpecial()) {
                  state = SPECIAL_AUTHORITY_SLASHES;
                } else if (codePoints[pointer + 1] === "/") {
                  state = PATH_OR_AUTHORITY;
                  pointer++;
                } else {
                  url.cannotBeABaseURL = true;
                  push5(url.path, "");
                  state = CANNOT_BE_A_BASE_URL_PATH;
                }
              } else if (!stateOverride) {
                buffer = "";
                state = NO_SCHEME;
                pointer = 0;
                continue;
              } else
                return INVALID_SCHEME;
              break;
            case NO_SCHEME:
              if (!base || base.cannotBeABaseURL && chr !== "#")
                return INVALID_SCHEME;
              if (base.cannotBeABaseURL && chr === "#") {
                url.scheme = base.scheme;
                url.path = arraySlice3(base.path);
                url.query = base.query;
                url.fragment = "";
                url.cannotBeABaseURL = true;
                state = FRAGMENT;
                break;
              }
              state = base.scheme === "file" ? FILE : RELATIVE;
              continue;
            case SPECIAL_RELATIVE_OR_AUTHORITY:
              if (chr === "/" && codePoints[pointer + 1] === "/") {
                state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                pointer++;
              } else {
                state = RELATIVE;
                continue;
              }
              break;
            case PATH_OR_AUTHORITY:
              if (chr === "/") {
                state = AUTHORITY;
                break;
              } else {
                state = PATH;
                continue;
              }
            case RELATIVE:
              url.scheme = base.scheme;
              if (chr === EOF) {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = arraySlice3(base.path);
                url.query = base.query;
              } else if (chr === "/" || chr === "\\" && url.isSpecial()) {
                state = RELATIVE_SLASH;
              } else if (chr === "?") {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = arraySlice3(base.path);
                url.query = "";
                state = QUERY;
              } else if (chr === "#") {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = arraySlice3(base.path);
                url.query = base.query;
                url.fragment = "";
                state = FRAGMENT;
              } else {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = arraySlice3(base.path);
                url.path.length--;
                state = PATH;
                continue;
              }
              break;
            case RELATIVE_SLASH:
              if (url.isSpecial() && (chr === "/" || chr === "\\")) {
                state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
              } else if (chr === "/") {
                state = AUTHORITY;
              } else {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                state = PATH;
                continue;
              }
              break;
            case SPECIAL_AUTHORITY_SLASHES:
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
              if (chr !== "/" || charAt(buffer, pointer + 1) !== "/")
                continue;
              pointer++;
              break;
            case SPECIAL_AUTHORITY_IGNORE_SLASHES:
              if (chr !== "/" && chr !== "\\") {
                state = AUTHORITY;
                continue;
              }
              break;
            case AUTHORITY:
              if (chr === "@") {
                if (seenAt)
                  buffer = "%40" + buffer;
                seenAt = true;
                bufferCodePoints = arrayFrom(buffer);
                for (var i2 = 0; i2 < bufferCodePoints.length; i2++) {
                  var codePoint = bufferCodePoints[i2];
                  if (codePoint === ":" && !seenPasswordToken) {
                    seenPasswordToken = true;
                    continue;
                  }
                  var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                  if (seenPasswordToken)
                    url.password += encodedCodePoints;
                  else
                    url.username += encodedCodePoints;
                }
                buffer = "";
              } else if (chr === EOF || chr === "/" || chr === "?" || chr === "#" || chr === "\\" && url.isSpecial()) {
                if (seenAt && buffer === "")
                  return INVALID_AUTHORITY;
                pointer -= arrayFrom(buffer).length + 1;
                buffer = "";
                state = HOST;
              } else
                buffer += chr;
              break;
            case HOST:
            case HOSTNAME:
              if (stateOverride && url.scheme === "file") {
                state = FILE_HOST;
                continue;
              } else if (chr === ":" && !seenBracket) {
                if (buffer === "")
                  return INVALID_HOST;
                failure = url.parseHost(buffer);
                if (failure)
                  return failure;
                buffer = "";
                state = PORT;
                if (stateOverride === HOSTNAME)
                  return;
              } else if (chr === EOF || chr === "/" || chr === "?" || chr === "#" || chr === "\\" && url.isSpecial()) {
                if (url.isSpecial() && buffer === "")
                  return INVALID_HOST;
                if (stateOverride && buffer === "" && (url.includesCredentials() || url.port !== null))
                  return;
                failure = url.parseHost(buffer);
                if (failure)
                  return failure;
                buffer = "";
                state = PATH_START;
                if (stateOverride)
                  return;
                continue;
              } else {
                if (chr === "[")
                  seenBracket = true;
                else if (chr === "]")
                  seenBracket = false;
                buffer += chr;
              }
              break;
            case PORT:
              if (exec(DIGIT, chr)) {
                buffer += chr;
              } else if (chr === EOF || chr === "/" || chr === "?" || chr === "#" || chr === "\\" && url.isSpecial() || stateOverride) {
                if (buffer !== "") {
                  var port = parseInt2(buffer, 10);
                  if (port > 65535)
                    return INVALID_PORT;
                  url.port = url.isSpecial() && port === specialSchemes[url.scheme] ? null : port;
                  buffer = "";
                }
                if (stateOverride)
                  return;
                state = PATH_START;
                continue;
              } else
                return INVALID_PORT;
              break;
            case FILE:
              url.scheme = "file";
              if (chr === "/" || chr === "\\")
                state = FILE_SLASH;
              else if (base && base.scheme === "file") {
                switch (chr) {
                  case EOF:
                    url.host = base.host;
                    url.path = arraySlice3(base.path);
                    url.query = base.query;
                    break;
                  case "?":
                    url.host = base.host;
                    url.path = arraySlice3(base.path);
                    url.query = "";
                    state = QUERY;
                    break;
                  case "#":
                    url.host = base.host;
                    url.path = arraySlice3(base.path);
                    url.query = base.query;
                    url.fragment = "";
                    state = FRAGMENT;
                    break;
                  default:
                    if (!startsWithWindowsDriveLetter(join4(arraySlice3(codePoints, pointer), ""))) {
                      url.host = base.host;
                      url.path = arraySlice3(base.path);
                      url.shortenPath();
                    }
                    state = PATH;
                    continue;
                }
              } else {
                state = PATH;
                continue;
              }
              break;
            case FILE_SLASH:
              if (chr === "/" || chr === "\\") {
                state = FILE_HOST;
                break;
              }
              if (base && base.scheme === "file" && !startsWithWindowsDriveLetter(join4(arraySlice3(codePoints, pointer), ""))) {
                if (isWindowsDriveLetter(base.path[0], true))
                  push5(url.path, base.path[0]);
                else
                  url.host = base.host;
              }
              state = PATH;
              continue;
            case FILE_HOST:
              if (chr === EOF || chr === "/" || chr === "\\" || chr === "?" || chr === "#") {
                if (!stateOverride && isWindowsDriveLetter(buffer)) {
                  state = PATH;
                } else if (buffer === "") {
                  url.host = "";
                  if (stateOverride)
                    return;
                  state = PATH_START;
                } else {
                  failure = url.parseHost(buffer);
                  if (failure)
                    return failure;
                  if (url.host === "localhost")
                    url.host = "";
                  if (stateOverride)
                    return;
                  buffer = "";
                  state = PATH_START;
                }
                continue;
              } else
                buffer += chr;
              break;
            case PATH_START:
              if (url.isSpecial()) {
                state = PATH;
                if (chr !== "/" && chr !== "\\")
                  continue;
              } else if (!stateOverride && chr === "?") {
                url.query = "";
                state = QUERY;
              } else if (!stateOverride && chr === "#") {
                url.fragment = "";
                state = FRAGMENT;
              } else if (chr !== EOF) {
                state = PATH;
                if (chr !== "/")
                  continue;
              }
              break;
            case PATH:
              if (chr === EOF || chr === "/" || chr === "\\" && url.isSpecial() || !stateOverride && (chr === "?" || chr === "#")) {
                if (isDoubleDot(buffer)) {
                  url.shortenPath();
                  if (chr !== "/" && !(chr === "\\" && url.isSpecial())) {
                    push5(url.path, "");
                  }
                } else if (isSingleDot(buffer)) {
                  if (chr !== "/" && !(chr === "\\" && url.isSpecial())) {
                    push5(url.path, "");
                  }
                } else {
                  if (url.scheme === "file" && !url.path.length && isWindowsDriveLetter(buffer)) {
                    if (url.host)
                      url.host = "";
                    buffer = charAt(buffer, 0) + ":";
                  }
                  push5(url.path, buffer);
                }
                buffer = "";
                if (url.scheme === "file" && (chr === EOF || chr === "?" || chr === "#")) {
                  while (url.path.length > 1 && url.path[0] === "") {
                    shift(url.path);
                  }
                }
                if (chr === "?") {
                  url.query = "";
                  state = QUERY;
                } else if (chr === "#") {
                  url.fragment = "";
                  state = FRAGMENT;
                }
              } else {
                buffer += percentEncode(chr, pathPercentEncodeSet);
              }
              break;
            case CANNOT_BE_A_BASE_URL_PATH:
              if (chr === "?") {
                url.query = "";
                state = QUERY;
              } else if (chr === "#") {
                url.fragment = "";
                state = FRAGMENT;
              } else if (chr !== EOF) {
                url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
              }
              break;
            case QUERY:
              if (!stateOverride && chr === "#") {
                url.fragment = "";
                state = FRAGMENT;
              } else if (chr !== EOF) {
                if (chr === "'" && url.isSpecial())
                  url.query += "%27";
                else if (chr === "#")
                  url.query += "%23";
                else
                  url.query += percentEncode(chr, C0ControlPercentEncodeSet);
              }
              break;
            case FRAGMENT:
              if (chr !== EOF)
                url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
              break;
          }
          pointer++;
        }
      },
      // https://url.spec.whatwg.org/#host-parsing
      parseHost: function(input) {
        var result, codePoints, index;
        if (charAt(input, 0) === "[") {
          if (charAt(input, input.length - 1) !== "]")
            return INVALID_HOST;
          result = parseIPv6(stringSlice5(input, 1, -1));
          if (!result)
            return INVALID_HOST;
          this.host = result;
        } else if (!this.isSpecial()) {
          if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input))
            return INVALID_HOST;
          result = "";
          codePoints = arrayFrom(input);
          for (index = 0; index < codePoints.length; index++) {
            result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
          }
          this.host = result;
        } else {
          input = toASCII(input);
          if (exec(FORBIDDEN_HOST_CODE_POINT, input))
            return INVALID_HOST;
          result = parseIPv4(input);
          if (result === null)
            return INVALID_HOST;
          this.host = result;
        }
      },
      // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
      cannotHaveUsernamePasswordPort: function() {
        return !this.host || this.cannotBeABaseURL || this.scheme === "file";
      },
      // https://url.spec.whatwg.org/#include-credentials
      includesCredentials: function() {
        return this.username !== "" || this.password !== "";
      },
      // https://url.spec.whatwg.org/#is-special
      isSpecial: function() {
        return hasOwn4(specialSchemes, this.scheme);
      },
      // https://url.spec.whatwg.org/#shorten-a-urls-path
      shortenPath: function() {
        var path2 = this.path;
        var pathSize = path2.length;
        if (pathSize && (this.scheme !== "file" || pathSize !== 1 || !isWindowsDriveLetter(path2[0], true))) {
          path2.length--;
        }
      },
      // https://url.spec.whatwg.org/#concept-url-serializer
      serialize: function() {
        var url = this;
        var scheme = url.scheme;
        var username = url.username;
        var password = url.password;
        var host = url.host;
        var port = url.port;
        var path2 = url.path;
        var query = url.query;
        var fragment = url.fragment;
        var output = scheme + ":";
        if (host !== null) {
          output += "//";
          if (url.includesCredentials()) {
            output += username + (password ? ":" + password : "") + "@";
          }
          output += serializeHost(host);
          if (port !== null)
            output += ":" + port;
        } else if (scheme === "file")
          output += "//";
        output += url.cannotBeABaseURL ? path2[0] : path2.length ? "/" + join4(path2, "/") : "";
        if (query !== null)
          output += "?" + query;
        if (fragment !== null)
          output += "#" + fragment;
        return output;
      },
      // https://url.spec.whatwg.org/#dom-url-href
      setHref: function(href) {
        var failure = this.parse(href);
        if (failure)
          throw new TypeError3(failure);
        this.searchParams.update();
      },
      // https://url.spec.whatwg.org/#dom-url-origin
      getOrigin: function() {
        var scheme = this.scheme;
        var port = this.port;
        if (scheme === "blob")
          try {
            return new URLConstructor(scheme.path[0]).origin;
          } catch (error2) {
            return "null";
          }
        if (scheme === "file" || !this.isSpecial())
          return "null";
        return scheme + "://" + serializeHost(this.host) + (port !== null ? ":" + port : "");
      },
      // https://url.spec.whatwg.org/#dom-url-protocol
      getProtocol: function() {
        return this.scheme + ":";
      },
      setProtocol: function(protocol) {
        this.parse($toString2(protocol) + ":", SCHEME_START);
      },
      // https://url.spec.whatwg.org/#dom-url-username
      getUsername: function() {
        return this.username;
      },
      setUsername: function(username) {
        var codePoints = arrayFrom($toString2(username));
        if (this.cannotHaveUsernamePasswordPort())
          return;
        this.username = "";
        for (var i2 = 0; i2 < codePoints.length; i2++) {
          this.username += percentEncode(codePoints[i2], userinfoPercentEncodeSet);
        }
      },
      // https://url.spec.whatwg.org/#dom-url-password
      getPassword: function() {
        return this.password;
      },
      setPassword: function(password) {
        var codePoints = arrayFrom($toString2(password));
        if (this.cannotHaveUsernamePasswordPort())
          return;
        this.password = "";
        for (var i2 = 0; i2 < codePoints.length; i2++) {
          this.password += percentEncode(codePoints[i2], userinfoPercentEncodeSet);
        }
      },
      // https://url.spec.whatwg.org/#dom-url-host
      getHost: function() {
        var host = this.host;
        var port = this.port;
        return host === null ? "" : port === null ? serializeHost(host) : serializeHost(host) + ":" + port;
      },
      setHost: function(host) {
        if (this.cannotBeABaseURL)
          return;
        this.parse(host, HOST);
      },
      // https://url.spec.whatwg.org/#dom-url-hostname
      getHostname: function() {
        var host = this.host;
        return host === null ? "" : serializeHost(host);
      },
      setHostname: function(hostname) {
        if (this.cannotBeABaseURL)
          return;
        this.parse(hostname, HOSTNAME);
      },
      // https://url.spec.whatwg.org/#dom-url-port
      getPort: function() {
        var port = this.port;
        return port === null ? "" : $toString2(port);
      },
      setPort: function(port) {
        if (this.cannotHaveUsernamePasswordPort())
          return;
        port = $toString2(port);
        if (port === "")
          this.port = null;
        else
          this.parse(port, PORT);
      },
      // https://url.spec.whatwg.org/#dom-url-pathname
      getPathname: function() {
        var path2 = this.path;
        return this.cannotBeABaseURL ? path2[0] : path2.length ? "/" + join4(path2, "/") : "";
      },
      setPathname: function(pathname) {
        if (this.cannotBeABaseURL)
          return;
        this.path = [];
        this.parse(pathname, PATH_START);
      },
      // https://url.spec.whatwg.org/#dom-url-search
      getSearch: function() {
        var query = this.query;
        return query ? "?" + query : "";
      },
      setSearch: function(search) {
        search = $toString2(search);
        if (search === "") {
          this.query = null;
        } else {
          if (charAt(search, 0) === "?")
            search = stringSlice5(search, 1);
          this.query = "";
          this.parse(search, QUERY);
        }
        this.searchParams.update();
      },
      // https://url.spec.whatwg.org/#dom-url-searchparams
      getSearchParams: function() {
        return this.searchParams.facade;
      },
      // https://url.spec.whatwg.org/#dom-url-hash
      getHash: function() {
        var fragment = this.fragment;
        return fragment ? "#" + fragment : "";
      },
      setHash: function(hash) {
        hash = $toString2(hash);
        if (hash === "") {
          this.fragment = null;
          return;
        }
        if (charAt(hash, 0) === "#")
          hash = stringSlice5(hash, 1);
        this.fragment = "";
        this.parse(hash, FRAGMENT);
      },
      update: function() {
        this.query = this.searchParams.serialize() || null;
      }
    };
    var URLConstructor = function URL2(url) {
      var that = anInstance(this, URLPrototype);
      var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : void 0;
      var state = setInternalState(that, new URLState(url, false, base));
      if (!DESCRIPTORS7) {
        that.href = state.serialize();
        that.origin = state.getOrigin();
        that.protocol = state.getProtocol();
        that.username = state.getUsername();
        that.password = state.getPassword();
        that.host = state.getHost();
        that.hostname = state.getHostname();
        that.port = state.getPort();
        that.pathname = state.getPathname();
        that.search = state.getSearch();
        that.searchParams = state.getSearchParams();
        that.hash = state.getHash();
      }
    };
    var URLPrototype = URLConstructor.prototype;
    var accessorDescriptor = function(getter, setter) {
      return {
        get: function() {
          return getInternalURLState(this)[getter]();
        },
        set: setter && function(value) {
          return getInternalURLState(this)[setter](value);
        },
        configurable: true,
        enumerable: true
      };
    };
    if (DESCRIPTORS7) {
      defineBuiltInAccessor4(URLPrototype, "href", accessorDescriptor("serialize", "setHref"));
      defineBuiltInAccessor4(URLPrototype, "origin", accessorDescriptor("getOrigin"));
      defineBuiltInAccessor4(URLPrototype, "protocol", accessorDescriptor("getProtocol", "setProtocol"));
      defineBuiltInAccessor4(URLPrototype, "username", accessorDescriptor("getUsername", "setUsername"));
      defineBuiltInAccessor4(URLPrototype, "password", accessorDescriptor("getPassword", "setPassword"));
      defineBuiltInAccessor4(URLPrototype, "host", accessorDescriptor("getHost", "setHost"));
      defineBuiltInAccessor4(URLPrototype, "hostname", accessorDescriptor("getHostname", "setHostname"));
      defineBuiltInAccessor4(URLPrototype, "port", accessorDescriptor("getPort", "setPort"));
      defineBuiltInAccessor4(URLPrototype, "pathname", accessorDescriptor("getPathname", "setPathname"));
      defineBuiltInAccessor4(URLPrototype, "search", accessorDescriptor("getSearch", "setSearch"));
      defineBuiltInAccessor4(URLPrototype, "searchParams", accessorDescriptor("getSearchParams"));
      defineBuiltInAccessor4(URLPrototype, "hash", accessorDescriptor("getHash", "setHash"));
    }
    defineBuiltIn5(URLPrototype, "toJSON", function toJSON2() {
      return getInternalURLState(this).serialize();
    }, { enumerable: true });
    defineBuiltIn5(URLPrototype, "toString", function toString8() {
      return getInternalURLState(this).serialize();
    }, { enumerable: true });
    if (NativeURL) {
      nativeCreateObjectURL = NativeURL.createObjectURL;
      nativeRevokeObjectURL = NativeURL.revokeObjectURL;
      if (nativeCreateObjectURL)
        defineBuiltIn5(URLConstructor, "createObjectURL", bind2(nativeCreateObjectURL, NativeURL));
      if (nativeRevokeObjectURL)
        defineBuiltIn5(URLConstructor, "revokeObjectURL", bind2(nativeRevokeObjectURL, NativeURL));
    }
    var nativeCreateObjectURL;
    var nativeRevokeObjectURL;
    setToStringTag5(URLConstructor, "URL");
    $32({ global: true, constructor: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS7 }, {
      URL: URLConstructor
    });
  }
});

// browser-external:stream
var require_stream = __commonJS({
  "browser-external:stream"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_2, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "stream" has been externalized for browser compatibility. Cannot access "stream.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:events
var require_events = __commonJS({
  "browser-external:events"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_2, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "events" has been externalized for browser compatibility. Cannot access "events.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:buffer
var require_buffer = __commonJS({
  "browser-external:buffer"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_2, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "buffer" has been externalized for browser compatibility. Cannot access "buffer.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:util
var require_util = __commonJS({
  "browser-external:util"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_2, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "util" has been externalized for browser compatibility. Cannot access "util.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.symbol.js
require_es_symbol_constructor();
require_es_symbol_for();
require_es_symbol_key_for();
require_es_json_stringify();
require_es_object_get_own_property_symbols();

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.symbol.description.js
var $ = require_export();
var DESCRIPTORS = require_descriptors();
var globalThis2 = require_global_this();
var uncurryThis = require_function_uncurry_this();
var hasOwn = require_has_own_property();
var isCallable = require_is_callable();
var isPrototypeOf = require_object_is_prototype_of();
var toString = require_to_string();
var defineBuiltInAccessor = require_define_built_in_accessor();
var copyConstructorProperties = require_copy_constructor_properties();
var NativeSymbol = globalThis2.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;
if (DESCRIPTORS && isCallable(NativeSymbol) && (!("description" in SymbolPrototype) || // Safari 12 bug
NativeSymbol().description !== void 0)) {
  EmptyStringDescriptionStore = {};
  SymbolWrapper = function Symbol2() {
    var description = arguments.length < 1 || arguments[0] === void 0 ? void 0 : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this) ? new NativeSymbol(description) : description === void 0 ? NativeSymbol() : NativeSymbol(description);
    if (description === "")
      EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;
  NATIVE_SYMBOL = String(NativeSymbol("description detection")) === "Symbol(description detection)";
  thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
  symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
  regexp = /^Symbol\((.*)\)[^)]+$/;
  replace = uncurryThis("".replace);
  stringSlice5 = uncurryThis("".slice);
  defineBuiltInAccessor(SymbolPrototype, "description", {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn(EmptyStringDescriptionStore, symbol))
        return "";
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice5(string, 7, -1) : replace(string, regexp, "$1");
      return desc === "" ? void 0 : desc;
    }
  });
  $({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}
var EmptyStringDescriptionStore;
var SymbolWrapper;
var NATIVE_SYMBOL;
var thisSymbolValue;
var symbolDescriptiveString;
var regexp;
var replace;
var stringSlice5;

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.symbol.async-iterator.js
var defineWellKnownSymbol = require_well_known_symbol_define();
defineWellKnownSymbol("asyncIterator");

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.symbol.has-instance.js
var defineWellKnownSymbol2 = require_well_known_symbol_define();
defineWellKnownSymbol2("hasInstance");

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.symbol.iterator.js
var defineWellKnownSymbol3 = require_well_known_symbol_define();
defineWellKnownSymbol3("iterator");

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.symbol.to-primitive.js
var defineWellKnownSymbol4 = require_well_known_symbol_define();
var defineSymbolToPrimitive = require_symbol_define_to_primitive();
defineWellKnownSymbol4("toPrimitive");
defineSymbolToPrimitive();

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.symbol.to-string-tag.js
var getBuiltIn = require_get_built_in();
var defineWellKnownSymbol5 = require_well_known_symbol_define();
var setToStringTag = require_set_to_string_tag();
defineWellKnownSymbol5("toStringTag");
setToStringTag(getBuiltIn("Symbol"), "Symbol");

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.array.concat.js
var $2 = require_export();
var fails = require_fails();
var isArray = require_is_array();
var isObject = require_is_object();
var toObject = require_to_object();
var lengthOfArrayLike = require_length_of_array_like();
var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
var createProperty = require_create_property();
var arraySpeciesCreate = require_array_species_create();
var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
var wellKnownSymbol = require_well_known_symbol();
var V8_VERSION = require_environment_v8_version();
var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var isConcatSpreadable = function(O2) {
  if (!isObject(O2))
    return false;
  var spreadable = O2[IS_CONCAT_SPREADABLE];
  return spreadable !== void 0 ? !!spreadable : isArray(O2);
};
var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport("concat");
$2({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O2 = toObject(this);
    var A2 = arraySpeciesCreate(O2, 0);
    var n2 = 0;
    var i2, k2, length, len, E2;
    for (i2 = -1, length = arguments.length; i2 < length; i2++) {
      E2 = i2 === -1 ? O2 : arguments[i2];
      if (isConcatSpreadable(E2)) {
        len = lengthOfArrayLike(E2);
        doesNotExceedSafeInteger(n2 + len);
        for (k2 = 0; k2 < len; k2++, n2++)
          if (k2 in E2)
            createProperty(A2, n2, E2[k2]);
      } else {
        doesNotExceedSafeInteger(n2 + 1);
        createProperty(A2, n2++, E2);
      }
    }
    A2.length = n2;
    return A2;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.array.fill.js
var $3 = require_export();
var fill = require_array_fill();
var addToUnscopables = require_add_to_unscopables();
$3({ target: "Array", proto: true }, {
  fill
});
addToUnscopables("fill");

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.array.filter.js
var $4 = require_export();
var $filter = require_array_iteration().filter;
var arrayMethodHasSpeciesSupport2 = require_array_method_has_species_support();
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport2("filter");
$4({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.array.find.js
var $5 = require_export();
var $find = require_array_iteration().find;
var addToUnscopables2 = require_add_to_unscopables();
var FIND = "find";
var SKIPS_HOLES = true;
if (FIND in [])
  Array(1)[FIND](function() {
    SKIPS_HOLES = false;
  });
$5({ target: "Array", proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});
addToUnscopables2(FIND);

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.array.find-index.js
var $6 = require_export();
var $findIndex = require_array_iteration().findIndex;
var addToUnscopables3 = require_add_to_unscopables();
var FIND_INDEX = "findIndex";
var SKIPS_HOLES2 = true;
if (FIND_INDEX in [])
  Array(1)[FIND_INDEX](function() {
    SKIPS_HOLES2 = false;
  });
$6({ target: "Array", proto: true, forced: SKIPS_HOLES2 }, {
  findIndex: function findIndex(callbackfn) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});
addToUnscopables3(FIND_INDEX);

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.array.flat-map.js
var $7 = require_export();
var flattenIntoArray = require_flatten_into_array();
var aCallable = require_a_callable();
var toObject2 = require_to_object();
var lengthOfArrayLike2 = require_length_of_array_like();
var arraySpeciesCreate2 = require_array_species_create();
$7({ target: "Array", proto: true }, {
  flatMap: function flatMap(callbackfn) {
    var O2 = toObject2(this);
    var sourceLen = lengthOfArrayLike2(O2);
    var A2;
    aCallable(callbackfn);
    A2 = arraySpeciesCreate2(O2, 0);
    A2.length = flattenIntoArray(A2, O2, O2, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
    return A2;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.array.from.js
var $8 = require_export();
var from = require_array_from();
var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
  Array.from(iterable);
});
$8({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
  from
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.array.includes.js
var $9 = require_export();
var $includes = require_array_includes().includes;
var fails2 = require_fails();
var addToUnscopables4 = require_add_to_unscopables();
var BROKEN_ON_SPARSE = fails2(function() {
  return !Array(1).includes();
});
$9({ target: "Array", proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
  }
});
addToUnscopables4("includes");

// ../../../../code/HBuilderProjects/office-preview/node_modules/@js-preview/docx/lib/index.js
var import_es_array_iterator = __toESM(require_es_array_iterator());

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.array.join.js
var $10 = require_export();
var uncurryThis2 = require_function_uncurry_this();
var IndexedObject = require_indexed_object();
var toIndexedObject = require_to_indexed_object();
var arrayMethodIsStrict = require_array_method_is_strict();
var nativeJoin = uncurryThis2([].join);
var ES3_STRINGS = IndexedObject !== Object;
var FORCED2 = ES3_STRINGS || !arrayMethodIsStrict("join", ",");
$10({ target: "Array", proto: true, forced: FORCED2 }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject(this), separator === void 0 ? "," : separator);
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.array.map.js
var $11 = require_export();
var $map = require_array_iteration().map;
var arrayMethodHasSpeciesSupport3 = require_array_method_has_species_support();
var HAS_SPECIES_SUPPORT2 = arrayMethodHasSpeciesSupport3("map");
$11({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT2 }, {
  map: function map(callbackfn) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.array.slice.js
var $12 = require_export();
var isArray2 = require_is_array();
var isConstructor = require_is_constructor();
var isObject2 = require_is_object();
var toAbsoluteIndex = require_to_absolute_index();
var lengthOfArrayLike3 = require_length_of_array_like();
var toIndexedObject2 = require_to_indexed_object();
var createProperty2 = require_create_property();
var wellKnownSymbol2 = require_well_known_symbol();
var arrayMethodHasSpeciesSupport4 = require_array_method_has_species_support();
var nativeSlice = require_array_slice();
var HAS_SPECIES_SUPPORT3 = arrayMethodHasSpeciesSupport4("slice");
var SPECIES = wellKnownSymbol2("species");
var $Array = Array;
var max = Math.max;
$12({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT3 }, {
  slice: function slice(start, end2) {
    var O2 = toIndexedObject2(this);
    var length = lengthOfArrayLike3(O2);
    var k2 = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end2 === void 0 ? length : end2, length);
    var Constructor, result, n2;
    if (isArray2(O2)) {
      Constructor = O2.constructor;
      if (isConstructor(Constructor) && (Constructor === $Array || isArray2(Constructor.prototype))) {
        Constructor = void 0;
      } else if (isObject2(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null)
          Constructor = void 0;
      }
      if (Constructor === $Array || Constructor === void 0) {
        return nativeSlice(O2, k2, fin);
      }
    }
    result = new (Constructor === void 0 ? $Array : Constructor)(max(fin - k2, 0));
    for (n2 = 0; k2 < fin; k2++, n2++)
      if (k2 in O2)
        createProperty2(result, n2, O2[k2]);
    result.length = n2;
    return result;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.array.sort.js
var $13 = require_export();
var uncurryThis3 = require_function_uncurry_this();
var aCallable2 = require_a_callable();
var toObject3 = require_to_object();
var lengthOfArrayLike4 = require_length_of_array_like();
var deletePropertyOrThrow = require_delete_property_or_throw();
var toString2 = require_to_string();
var fails3 = require_fails();
var internalSort = require_array_sort();
var arrayMethodIsStrict2 = require_array_method_is_strict();
var FF = require_environment_ff_version();
var IE_OR_EDGE = require_environment_is_ie_or_edge();
var V8 = require_environment_v8_version();
var WEBKIT = require_environment_webkit_version();
var test = [];
var nativeSort = uncurryThis3(test.sort);
var push = uncurryThis3(test.push);
var FAILS_ON_UNDEFINED = fails3(function() {
  test.sort(void 0);
});
var FAILS_ON_NULL = fails3(function() {
  test.sort(null);
});
var STRICT_METHOD = arrayMethodIsStrict2("sort");
var STABLE_SORT = !fails3(function() {
  if (V8)
    return V8 < 70;
  if (FF && FF > 3)
    return;
  if (IE_OR_EDGE)
    return true;
  if (WEBKIT)
    return WEBKIT < 603;
  var result = "";
  var code, chr, value, index;
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);
    switch (code) {
      case 66:
      case 69:
      case 70:
      case 72:
        value = 3;
        break;
      case 68:
      case 71:
        value = 4;
        break;
      default:
        value = 2;
    }
    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }
  test.sort(function(a2, b2) {
    return b2.v - a2.v;
  });
  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr)
      result += chr;
  }
  return result !== "DGBEFHACIJK";
});
var FORCED3 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;
var getSortCompare = function(comparefn) {
  return function(x2, y2) {
    if (y2 === void 0)
      return -1;
    if (x2 === void 0)
      return 1;
    if (comparefn !== void 0)
      return +comparefn(x2, y2) || 0;
    return toString2(x2) > toString2(y2) ? 1 : -1;
  };
};
$13({ target: "Array", proto: true, forced: FORCED3 }, {
  sort: function sort(comparefn) {
    if (comparefn !== void 0)
      aCallable2(comparefn);
    var array = toObject3(this);
    if (STABLE_SORT)
      return comparefn === void 0 ? nativeSort(array) : nativeSort(array, comparefn);
    var items = [];
    var arrayLength = lengthOfArrayLike4(array);
    var itemsLength, index;
    for (index = 0; index < arrayLength; index++) {
      if (index in array)
        push(items, array[index]);
    }
    internalSort(items, getSortCompare(comparefn));
    itemsLength = lengthOfArrayLike4(items);
    index = 0;
    while (index < itemsLength)
      array[index] = items[index++];
    while (index < arrayLength)
      deletePropertyOrThrow(array, index++);
    return array;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.array.splice.js
var $14 = require_export();
var toObject4 = require_to_object();
var toAbsoluteIndex2 = require_to_absolute_index();
var toIntegerOrInfinity = require_to_integer_or_infinity();
var lengthOfArrayLike5 = require_length_of_array_like();
var setArrayLength = require_array_set_length();
var doesNotExceedSafeInteger2 = require_does_not_exceed_safe_integer();
var arraySpeciesCreate3 = require_array_species_create();
var createProperty3 = require_create_property();
var deletePropertyOrThrow2 = require_delete_property_or_throw();
var arrayMethodHasSpeciesSupport5 = require_array_method_has_species_support();
var HAS_SPECIES_SUPPORT4 = arrayMethodHasSpeciesSupport5("splice");
var max2 = Math.max;
var min = Math.min;
$14({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT4 }, {
  splice: function splice(start, deleteCount) {
    var O2 = toObject4(this);
    var len = lengthOfArrayLike5(O2);
    var actualStart = toAbsoluteIndex2(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A2, k2, from2, to2;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max2(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    doesNotExceedSafeInteger2(len + insertCount - actualDeleteCount);
    A2 = arraySpeciesCreate3(O2, actualDeleteCount);
    for (k2 = 0; k2 < actualDeleteCount; k2++) {
      from2 = actualStart + k2;
      if (from2 in O2)
        createProperty3(A2, k2, O2[from2]);
    }
    A2.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k2 = actualStart; k2 < len - actualDeleteCount; k2++) {
        from2 = k2 + actualDeleteCount;
        to2 = k2 + insertCount;
        if (from2 in O2)
          O2[to2] = O2[from2];
        else
          deletePropertyOrThrow2(O2, to2);
      }
      for (k2 = len; k2 > len - actualDeleteCount + insertCount; k2--)
        deletePropertyOrThrow2(O2, k2 - 1);
    } else if (insertCount > actualDeleteCount) {
      for (k2 = len - actualDeleteCount; k2 > actualStart; k2--) {
        from2 = k2 + actualDeleteCount - 1;
        to2 = k2 + insertCount - 1;
        if (from2 in O2)
          O2[to2] = O2[from2];
        else
          deletePropertyOrThrow2(O2, to2);
      }
    }
    for (k2 = 0; k2 < insertCount; k2++) {
      O2[k2 + actualStart] = arguments[k2 + 2];
    }
    setArrayLength(O2, len - actualDeleteCount + insertCount);
    return A2;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.array.unscopables.flat-map.js
var addToUnscopables5 = require_add_to_unscopables();
addToUnscopables5("flatMap");

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.array-buffer.constructor.js
var $15 = require_export();
var globalThis3 = require_global_this();
var arrayBufferModule = require_array_buffer();
var setSpecies = require_set_species();
var ARRAY_BUFFER = "ArrayBuffer";
var ArrayBuffer2 = arrayBufferModule[ARRAY_BUFFER];
var NativeArrayBuffer = globalThis3[ARRAY_BUFFER];
$15({ global: true, constructor: true, forced: NativeArrayBuffer !== ArrayBuffer2 }, {
  ArrayBuffer: ArrayBuffer2
});
setSpecies(ARRAY_BUFFER);

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.date.to-primitive.js
var hasOwn2 = require_has_own_property();
var defineBuiltIn = require_define_built_in();
var dateToPrimitive = require_date_to_primitive();
var wellKnownSymbol3 = require_well_known_symbol();
var TO_PRIMITIVE = wellKnownSymbol3("toPrimitive");
var DatePrototype = Date.prototype;
if (!hasOwn2(DatePrototype, TO_PRIMITIVE)) {
  defineBuiltIn(DatePrototype, TO_PRIMITIVE, dateToPrimitive);
}

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.function.has-instance.js
var isCallable2 = require_is_callable();
var isObject3 = require_is_object();
var definePropertyModule = require_object_define_property();
var isPrototypeOf2 = require_object_is_prototype_of();
var wellKnownSymbol4 = require_well_known_symbol();
var makeBuiltIn = require_make_built_in();
var HAS_INSTANCE = wellKnownSymbol4("hasInstance");
var FunctionPrototype = Function.prototype;
if (!(HAS_INSTANCE in FunctionPrototype)) {
  definePropertyModule.f(FunctionPrototype, HAS_INSTANCE, { value: makeBuiltIn(function(O2) {
    if (!isCallable2(this) || !isObject3(O2))
      return false;
    var P2 = this.prototype;
    return isObject3(P2) ? isPrototypeOf2(P2, O2) : O2 instanceof this;
  }, HAS_INSTANCE) });
}

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.function.name.js
var DESCRIPTORS2 = require_descriptors();
var FUNCTION_NAME_EXISTS = require_function_name().EXISTS;
var uncurryThis4 = require_function_uncurry_this();
var defineBuiltInAccessor2 = require_define_built_in_accessor();
var FunctionPrototype2 = Function.prototype;
var functionToString = uncurryThis4(FunctionPrototype2.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis4(nameRE.exec);
var NAME = "name";
if (DESCRIPTORS2 && !FUNCTION_NAME_EXISTS) {
  defineBuiltInAccessor2(FunctionPrototype2, NAME, {
    configurable: true,
    get: function() {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error2) {
        return "";
      }
    }
  });
}

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.json.to-string-tag.js
var globalThis4 = require_global_this();
var setToStringTag2 = require_set_to_string_tag();
setToStringTag2(globalThis4.JSON, "JSON", true);

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.math.to-string-tag.js
var setToStringTag3 = require_set_to_string_tag();
setToStringTag3(Math, "Math", true);

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.number.constructor.js
var $16 = require_export();
var IS_PURE = require_is_pure();
var DESCRIPTORS3 = require_descriptors();
var globalThis5 = require_global_this();
var path = require_path();
var uncurryThis5 = require_function_uncurry_this();
var isForced = require_is_forced();
var hasOwn3 = require_has_own_property();
var inheritIfRequired = require_inherit_if_required();
var isPrototypeOf3 = require_object_is_prototype_of();
var isSymbol = require_is_symbol();
var toPrimitive = require_to_primitive();
var fails4 = require_fails();
var getOwnPropertyNames = require_object_get_own_property_names().f;
var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
var defineProperty = require_object_define_property().f;
var thisNumberValue = require_this_number_value();
var trim = require_string_trim().trim;
var NUMBER = "Number";
var NativeNumber = globalThis5[NUMBER];
var PureNumberNamespace = path[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError2 = globalThis5.TypeError;
var stringSlice = uncurryThis5("".slice);
var charCodeAt = uncurryThis5("".charCodeAt);
var toNumeric = function(value) {
  var primValue = toPrimitive(value, "number");
  return typeof primValue == "bigint" ? primValue : toNumber(primValue);
};
var toNumber = function(argument) {
  var it3 = toPrimitive(argument, "number");
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it3))
    throw new TypeError2("Cannot convert a Symbol value to a number");
  if (typeof it3 == "string" && it3.length > 2) {
    it3 = trim(it3);
    first = charCodeAt(it3, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it3, 2);
      if (third === 88 || third === 120)
        return NaN;
    } else if (first === 48) {
      switch (charCodeAt(it3, 1)) {
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        default:
          return +it3;
      }
      digits = stringSlice(it3, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index);
        if (code < 48 || code > maxCode)
          return NaN;
      }
      return parseInt(digits, radix);
    }
  }
  return +it3;
};
var FORCED4 = isForced(NUMBER, !NativeNumber(" 0o1") || !NativeNumber("0b1") || NativeNumber("+0x1"));
var calledWithNew = function(dummy) {
  return isPrototypeOf3(NumberPrototype, dummy) && fails4(function() {
    thisNumberValue(dummy);
  });
};
var NumberWrapper = function Number2(value) {
  var n2 = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
  return calledWithNew(this) ? inheritIfRequired(Object(n2), this, NumberWrapper) : n2;
};
NumberWrapper.prototype = NumberPrototype;
if (FORCED4 && !IS_PURE)
  NumberPrototype.constructor = NumberWrapper;
$16({ global: true, constructor: true, wrap: true, forced: FORCED4 }, {
  Number: NumberWrapper
});
var copyConstructorProperties2 = function(target, source) {
  for (var keys3 = DESCRIPTORS3 ? getOwnPropertyNames(source) : (
    // ES3:
    "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(",")
  ), j2 = 0, key; keys3.length > j2; j2++) {
    if (hasOwn3(source, key = keys3[j2]) && !hasOwn3(target, key)) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};
if (IS_PURE && PureNumberNamespace)
  copyConstructorProperties2(path[NUMBER], PureNumberNamespace);
if (FORCED4 || IS_PURE)
  copyConstructorProperties2(path[NUMBER], NativeNumber);

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.number.to-fixed.js
var $17 = require_export();
var uncurryThis6 = require_function_uncurry_this();
var toIntegerOrInfinity2 = require_to_integer_or_infinity();
var thisNumberValue2 = require_this_number_value();
var $repeat = require_string_repeat();
var fails5 = require_fails();
var $RangeError = RangeError;
var $String = String;
var floor = Math.floor;
var repeat = uncurryThis6($repeat);
var stringSlice2 = uncurryThis6("".slice);
var nativeToFixed = uncurryThis6(1 .toFixed);
var pow = function(x2, n2, acc) {
  return n2 === 0 ? acc : n2 % 2 === 1 ? pow(x2, n2 - 1, acc * x2) : pow(x2 * x2, n2 / 2, acc);
};
var log = function(x2) {
  var n2 = 0;
  var x22 = x2;
  while (x22 >= 4096) {
    n2 += 12;
    x22 /= 4096;
  }
  while (x22 >= 2) {
    n2 += 1;
    x22 /= 2;
  }
  return n2;
};
var multiply = function(data, n2, c2) {
  var index = -1;
  var c22 = c2;
  while (++index < 6) {
    c22 += n2 * data[index];
    data[index] = c22 % 1e7;
    c22 = floor(c22 / 1e7);
  }
};
var divide = function(data, n2) {
  var index = 6;
  var c2 = 0;
  while (--index >= 0) {
    c2 += data[index];
    data[index] = floor(c2 / n2);
    c2 = c2 % n2 * 1e7;
  }
};
var dataToString = function(data) {
  var index = 6;
  var s2 = "";
  while (--index >= 0) {
    if (s2 !== "" || index === 0 || data[index] !== 0) {
      var t2 = $String(data[index]);
      s2 = s2 === "" ? t2 : s2 + repeat("0", 7 - t2.length) + t2;
    }
  }
  return s2;
};
var FORCED5 = fails5(function() {
  return nativeToFixed(8e-5, 3) !== "0.000" || nativeToFixed(0.9, 0) !== "1" || nativeToFixed(1.255, 2) !== "1.25" || nativeToFixed(1000000000000000100, 0) !== "1000000000000000128";
}) || !fails5(function() {
  nativeToFixed({});
});
$17({ target: "Number", proto: true, forced: FORCED5 }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue2(this);
    var fractDigits = toIntegerOrInfinity2(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = "";
    var result = "0";
    var e2, z2, j2, k2;
    if (fractDigits < 0 || fractDigits > 20)
      throw new $RangeError("Incorrect fraction digits");
    if (number !== number)
      return "NaN";
    if (number <= -1e21 || number >= 1e21)
      return $String(number);
    if (number < 0) {
      sign = "-";
      number = -number;
    }
    if (number > 1e-21) {
      e2 = log(number * pow(2, 69, 1)) - 69;
      z2 = e2 < 0 ? number * pow(2, -e2, 1) : number / pow(2, e2, 1);
      z2 *= 4503599627370496;
      e2 = 52 - e2;
      if (e2 > 0) {
        multiply(data, 0, z2);
        j2 = fractDigits;
        while (j2 >= 7) {
          multiply(data, 1e7, 0);
          j2 -= 7;
        }
        multiply(data, pow(10, j2, 1), 0);
        j2 = e2 - 1;
        while (j2 >= 23) {
          divide(data, 1 << 23);
          j2 -= 23;
        }
        divide(data, 1 << j2);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z2);
        multiply(data, 1 << -e2, 0);
        result = dataToString(data) + repeat("0", fractDigits);
      }
    }
    if (fractDigits > 0) {
      k2 = result.length;
      result = sign + (k2 <= fractDigits ? "0." + repeat("0", fractDigits - k2) + result : stringSlice2(result, 0, k2 - fractDigits) + "." + stringSlice2(result, k2 - fractDigits));
    } else {
      result = sign + result;
    }
    return result;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.object.assign.js
var $18 = require_export();
var assign = require_object_assign();
$18({ target: "Object", stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.object.entries.js
var $19 = require_export();
var $entries = require_object_to_array().entries;
$19({ target: "Object", stat: true }, {
  entries: function entries(O2) {
    return $entries(O2);
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var $20 = require_export();
var fails6 = require_fails();
var toIndexedObject3 = require_to_indexed_object();
var nativeGetOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
var DESCRIPTORS4 = require_descriptors();
var FORCED6 = !DESCRIPTORS4 || fails6(function() {
  nativeGetOwnPropertyDescriptor(1);
});
$20({ target: "Object", stat: true, forced: FORCED6, sham: !DESCRIPTORS4 }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor2(it3, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject3(it3), key);
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var $21 = require_export();
var DESCRIPTORS5 = require_descriptors();
var ownKeys = require_own_keys();
var toIndexedObject4 = require_to_indexed_object();
var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
var createProperty4 = require_create_property();
$21({ target: "Object", stat: true, sham: !DESCRIPTORS5 }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O2 = toIndexedObject4(object);
    var getOwnPropertyDescriptor4 = getOwnPropertyDescriptorModule.f;
    var keys3 = ownKeys(O2);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys3.length > index) {
      descriptor = getOwnPropertyDescriptor4(O2, key = keys3[index++]);
      if (descriptor !== void 0)
        createProperty4(result, key, descriptor);
    }
    return result;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.object.get-own-property-names.js
var $22 = require_export();
var fails7 = require_fails();
var getOwnPropertyNames2 = require_object_get_own_property_names_external().f;
var FAILS_ON_PRIMITIVES = fails7(function() {
  return !Object.getOwnPropertyNames(1);
});
$22({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES }, {
  getOwnPropertyNames: getOwnPropertyNames2
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.object.get-prototype-of.js
var $23 = require_export();
var fails8 = require_fails();
var toObject5 = require_to_object();
var nativeGetPrototypeOf = require_object_get_prototype_of();
var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
var FAILS_ON_PRIMITIVES2 = fails8(function() {
  nativeGetPrototypeOf(1);
});
$23({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES2, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it3) {
    return nativeGetPrototypeOf(toObject5(it3));
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.object.keys.js
var $24 = require_export();
var toObject6 = require_to_object();
var nativeKeys = require_object_keys();
var fails9 = require_fails();
var FAILS_ON_PRIMITIVES3 = fails9(function() {
  nativeKeys(1);
});
$24({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES3 }, {
  keys: function keys(it3) {
    return nativeKeys(toObject6(it3));
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.object.to-string.js
var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
var defineBuiltIn2 = require_define_built_in();
var toString3 = require_object_to_string();
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn2(Object.prototype, "toString", toString3, { unsafe: true });
}

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.promise.js
require_es_promise_constructor();
require_es_promise_all();
require_es_promise_catch();
require_es_promise_race();
require_es_promise_reject();
require_es_promise_resolve();

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.promise.finally.js
var $25 = require_export();
var IS_PURE2 = require_is_pure();
var NativePromiseConstructor = require_promise_native_constructor();
var fails10 = require_fails();
var getBuiltIn2 = require_get_built_in();
var isCallable3 = require_is_callable();
var speciesConstructor = require_species_constructor();
var promiseResolve = require_promise_resolve();
var defineBuiltIn3 = require_define_built_in();
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var NON_GENERIC = !!NativePromiseConstructor && fails10(function() {
  NativePromisePrototype["finally"].call({ then: function() {
  } }, function() {
  });
});
$25({ target: "Promise", proto: true, real: true, forced: NON_GENERIC }, {
  "finally": function(onFinally) {
    var C2 = speciesConstructor(this, getBuiltIn2("Promise"));
    var isFunction = isCallable3(onFinally);
    return this.then(
      isFunction ? function(x2) {
        return promiseResolve(C2, onFinally()).then(function() {
          return x2;
        });
      } : onFinally,
      isFunction ? function(e2) {
        return promiseResolve(C2, onFinally()).then(function() {
          throw e2;
        });
      } : onFinally
    );
  }
});
if (!IS_PURE2 && isCallable3(NativePromiseConstructor)) {
  method = getBuiltIn2("Promise").prototype["finally"];
  if (NativePromisePrototype["finally"] !== method) {
    defineBuiltIn3(NativePromisePrototype, "finally", method, { unsafe: true });
  }
}
var method;

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.reflect.construct.js
var $26 = require_export();
var getBuiltIn3 = require_get_built_in();
var apply = require_function_apply();
var bind = require_function_bind();
var aConstructor = require_a_constructor();
var anObject = require_an_object();
var isObject4 = require_is_object();
var create = require_object_create();
var fails11 = require_fails();
var nativeConstruct = getBuiltIn3("Reflect", "construct");
var ObjectPrototype = Object.prototype;
var push2 = [].push;
var NEW_TARGET_BUG = fails11(function() {
  function F2() {
  }
  return !(nativeConstruct(function() {
  }, [], F2) instanceof F2);
});
var ARGS_BUG = !fails11(function() {
  nativeConstruct(function() {
  });
});
var FORCED7 = NEW_TARGET_BUG || ARGS_BUG;
$26({ target: "Reflect", stat: true, forced: FORCED7, sham: FORCED7 }, {
  construct: function construct(Target, args) {
    aConstructor(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG)
      return nativeConstruct(Target, args, newTarget);
    if (Target === newTarget) {
      switch (args.length) {
        case 0:
          return new Target();
        case 1:
          return new Target(args[0]);
        case 2:
          return new Target(args[0], args[1]);
        case 3:
          return new Target(args[0], args[1], args[2]);
        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      }
      var $args = [null];
      apply(push2, $args, args);
      return new (apply(bind, Target, $args))();
    }
    var proto = newTarget.prototype;
    var instance = create(isObject4(proto) ? proto : ObjectPrototype);
    var result = apply(Target, instance, args);
    return isObject4(result) ? result : instance;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/@js-preview/docx/lib/index.js
var import_es_regexp_exec = __toESM(require_es_regexp_exec());

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.regexp.flags.js
var globalThis6 = require_global_this();
var DESCRIPTORS6 = require_descriptors();
var defineBuiltInAccessor3 = require_define_built_in_accessor();
var regExpFlags = require_regexp_flags();
var fails12 = require_fails();
var RegExp2 = globalThis6.RegExp;
var RegExpPrototype = RegExp2.prototype;
var FORCED8 = DESCRIPTORS6 && fails12(function() {
  var INDICES_SUPPORT = true;
  try {
    RegExp2(".", "d");
  } catch (error2) {
    INDICES_SUPPORT = false;
  }
  var O2 = {};
  var calls = "";
  var expected = INDICES_SUPPORT ? "dgimsy" : "gimsy";
  var addGetter = function(key2, chr) {
    Object.defineProperty(O2, key2, { get: function() {
      calls += chr;
      return true;
    } });
  };
  var pairs = {
    dotAll: "s",
    global: "g",
    ignoreCase: "i",
    multiline: "m",
    sticky: "y"
  };
  if (INDICES_SUPPORT)
    pairs.hasIndices = "d";
  for (var key in pairs)
    addGetter(key, pairs[key]);
  var result = Object.getOwnPropertyDescriptor(RegExpPrototype, "flags").get.call(O2);
  return result !== expected || calls !== expected;
});
if (FORCED8)
  defineBuiltInAccessor3(RegExpPrototype, "flags", {
    configurable: true,
    get: regExpFlags
  });

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.regexp.to-string.js
var PROPER_FUNCTION_NAME = require_function_name().PROPER;
var defineBuiltIn4 = require_define_built_in();
var anObject2 = require_an_object();
var $toString = require_to_string();
var fails13 = require_fails();
var getRegExpFlags = require_regexp_get_flags();
var TO_STRING = "toString";
var RegExpPrototype2 = RegExp.prototype;
var nativeToString = RegExpPrototype2[TO_STRING];
var NOT_GENERIC = fails13(function() {
  return nativeToString.call({ source: "a", flags: "b" }) !== "/a/b";
});
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn4(RegExpPrototype2, TO_STRING, function toString8() {
    var R2 = anObject2(this);
    var pattern = $toString(R2.source);
    var flags = $toString(getRegExpFlags(R2));
    return "/" + pattern + "/" + flags;
  }, { unsafe: true });
}

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.string.includes.js
var $27 = require_export();
var uncurryThis7 = require_function_uncurry_this();
var notARegExp = require_not_a_regexp();
var requireObjectCoercible = require_require_object_coercible();
var toString4 = require_to_string();
var correctIsRegExpLogic = require_correct_is_regexp_logic();
var stringIndexOf = uncurryThis7("".indexOf);
$27({ target: "String", proto: true, forced: !correctIsRegExpLogic("includes") }, {
  includes: function includes2(searchString) {
    return !!~stringIndexOf(
      toString4(requireObjectCoercible(this)),
      toString4(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : void 0
    );
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/@js-preview/docx/lib/index.js
var import_es_string_iterator = __toESM(require_es_string_iterator());

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.string.replace.js
var apply2 = require_function_apply();
var call = require_function_call();
var uncurryThis8 = require_function_uncurry_this();
var fixRegExpWellKnownSymbolLogic = require_fix_regexp_well_known_symbol_logic();
var fails14 = require_fails();
var anObject3 = require_an_object();
var isCallable4 = require_is_callable();
var isNullOrUndefined = require_is_null_or_undefined();
var toIntegerOrInfinity3 = require_to_integer_or_infinity();
var toLength = require_to_length();
var toString5 = require_to_string();
var requireObjectCoercible2 = require_require_object_coercible();
var advanceStringIndex = require_advance_string_index();
var getMethod = require_get_method();
var getSubstitution = require_get_substitution();
var regExpExec2 = require_regexp_exec_abstract();
var wellKnownSymbol5 = require_well_known_symbol();
var REPLACE = wellKnownSymbol5("replace");
var max3 = Math.max;
var min2 = Math.min;
var concat2 = uncurryThis8([].concat);
var push3 = uncurryThis8([].push);
var stringIndexOf2 = uncurryThis8("".indexOf);
var stringSlice3 = uncurryThis8("".slice);
var maybeToString = function(it3) {
  return it3 === void 0 ? it3 : String(it3);
};
var REPLACE_KEEPS_$0 = function() {
  return "a".replace(/./, "$0") === "$0";
}();
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
  if (/./[REPLACE]) {
    return /./[REPLACE]("a", "$0") === "";
  }
  return false;
}();
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails14(function() {
  var re = /./;
  re.exec = function() {
    var result = [];
    result.groups = { a: "7" };
    return result;
  };
  return "".replace(re, "$<a>") !== "7";
});
fixRegExpWellKnownSymbolLogic("replace", function(_2, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O2 = requireObjectCoercible2(this);
      var replacer = isNullOrUndefined(searchValue) ? void 0 : getMethod(searchValue, REPLACE);
      return replacer ? call(replacer, searchValue, O2, replaceValue) : call(nativeReplace, toString5(O2), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function(string, replaceValue) {
      var rx = anObject3(this);
      var S2 = toString5(string);
      if (typeof replaceValue == "string" && stringIndexOf2(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf2(replaceValue, "$<") === -1) {
        var res = maybeCallNative(nativeReplace, rx, S2, replaceValue);
        if (res.done)
          return res.value;
      }
      var functionalReplace = isCallable4(replaceValue);
      if (!functionalReplace)
        replaceValue = toString5(replaceValue);
      var global2 = rx.global;
      var fullUnicode;
      if (global2) {
        fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      var result;
      while (true) {
        result = regExpExec2(rx, S2);
        if (result === null)
          break;
        push3(results, result);
        if (!global2)
          break;
        var matchStr = toString5(result[0]);
        if (matchStr === "")
          rx.lastIndex = advanceStringIndex(S2, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = "";
      var nextSourcePosition = 0;
      for (var i2 = 0; i2 < results.length; i2++) {
        result = results[i2];
        var matched = toString5(result[0]);
        var position = max3(min2(toIntegerOrInfinity3(result.index), S2.length), 0);
        var captures = [];
        var replacement;
        for (var j2 = 1; j2 < result.length; j2++)
          push3(captures, maybeToString(result[j2]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat2([matched], captures, position, S2);
          if (namedCaptures !== void 0)
            push3(replacerArgs, namedCaptures);
          replacement = toString5(apply2(replaceValue, void 0, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S2, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice3(S2, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice3(S2, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.string.starts-with.js
var $28 = require_export();
var uncurryThis9 = require_function_uncurry_this_clause();
var getOwnPropertyDescriptor3 = require_object_get_own_property_descriptor().f;
var toLength2 = require_to_length();
var toString6 = require_to_string();
var notARegExp2 = require_not_a_regexp();
var requireObjectCoercible3 = require_require_object_coercible();
var correctIsRegExpLogic2 = require_correct_is_regexp_logic();
var IS_PURE3 = require_is_pure();
var stringSlice4 = uncurryThis9("".slice);
var min3 = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic2("startsWith");
var MDN_POLYFILL_BUG = !IS_PURE3 && !CORRECT_IS_REGEXP_LOGIC && !!function() {
  var descriptor = getOwnPropertyDescriptor3(String.prototype, "startsWith");
  return descriptor && !descriptor.writable;
}();
$28({ target: "String", proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString) {
    var that = toString6(requireObjectCoercible3(this));
    notARegExp2(searchString);
    var index = toLength2(min3(arguments.length > 1 ? arguments[1] : void 0, that.length));
    var search = toString6(searchString);
    return stringSlice4(that, index, index + search.length) === search;
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.string.trim.js
var $29 = require_export();
var $trim = require_string_trim().trim;
var forcedStringTrimMethod = require_string_trim_forced();
$29({ target: "String", proto: true, forced: forcedStringTrimMethod("trim") }, {
  trim: function trim2() {
    return $trim(this);
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.int32-array.js
var createTypedArrayConstructor = require_typed_array_constructor();
createTypedArrayConstructor("Int32", function(init2) {
  return function Int32Array2(data, byteOffset, length) {
    return init2(this, data, byteOffset, length);
  };
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.uint8-array.js
var createTypedArrayConstructor2 = require_typed_array_constructor();
createTypedArrayConstructor2("Uint8", function(init2) {
  return function Uint8Array4(data, byteOffset, length) {
    return init2(this, data, byteOffset, length);
  };
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.uint16-array.js
var createTypedArrayConstructor3 = require_typed_array_constructor();
createTypedArrayConstructor3("Uint16", function(init2) {
  return function Uint16Array3(data, byteOffset, length) {
    return init2(this, data, byteOffset, length);
  };
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.uint32-array.js
var createTypedArrayConstructor4 = require_typed_array_constructor();
createTypedArrayConstructor4("Uint32", function(init2) {
  return function Uint32Array2(data, byteOffset, length) {
    return init2(this, data, byteOffset, length);
  };
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.copy-within.js
var uncurryThis10 = require_function_uncurry_this();
var ArrayBufferViewCore = require_array_buffer_view_core();
var $ArrayCopyWithin = require_array_copy_within();
var u$ArrayCopyWithin = uncurryThis10($ArrayCopyWithin);
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
exportTypedArrayMethod("copyWithin", function copyWithin(target, start) {
  return u$ArrayCopyWithin(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : void 0);
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.every.js
var ArrayBufferViewCore2 = require_array_buffer_view_core();
var $every = require_array_iteration().every;
var aTypedArray2 = ArrayBufferViewCore2.aTypedArray;
var exportTypedArrayMethod2 = ArrayBufferViewCore2.exportTypedArrayMethod;
exportTypedArrayMethod2("every", function every(callbackfn) {
  return $every(aTypedArray2(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.fill.js
var ArrayBufferViewCore3 = require_array_buffer_view_core();
var $fill = require_array_fill();
var toBigInt = require_to_big_int();
var classof = require_classof();
var call2 = require_function_call();
var uncurryThis11 = require_function_uncurry_this();
var fails15 = require_fails();
var aTypedArray3 = ArrayBufferViewCore3.aTypedArray;
var exportTypedArrayMethod3 = ArrayBufferViewCore3.exportTypedArrayMethod;
var slice2 = uncurryThis11("".slice);
var CONVERSION_BUG = fails15(function() {
  var count = 0;
  new Int8Array(2).fill({ valueOf: function() {
    return count++;
  } });
  return count !== 1;
});
exportTypedArrayMethod3("fill", function fill2(value) {
  var length = arguments.length;
  aTypedArray3(this);
  var actualValue = slice2(classof(this), 0, 3) === "Big" ? toBigInt(value) : +value;
  return call2($fill, this, actualValue, length > 1 ? arguments[1] : void 0, length > 2 ? arguments[2] : void 0);
}, CONVERSION_BUG);

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.filter.js
var ArrayBufferViewCore4 = require_array_buffer_view_core();
var $filter2 = require_array_iteration().filter;
var fromSameTypeAndList = require_typed_array_from_same_type_and_list();
var aTypedArray4 = ArrayBufferViewCore4.aTypedArray;
var exportTypedArrayMethod4 = ArrayBufferViewCore4.exportTypedArrayMethod;
exportTypedArrayMethod4("filter", function filter2(callbackfn) {
  var list = $filter2(aTypedArray4(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  return fromSameTypeAndList(this, list);
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.find.js
var ArrayBufferViewCore5 = require_array_buffer_view_core();
var $find2 = require_array_iteration().find;
var aTypedArray5 = ArrayBufferViewCore5.aTypedArray;
var exportTypedArrayMethod5 = ArrayBufferViewCore5.exportTypedArrayMethod;
exportTypedArrayMethod5("find", function find2(predicate) {
  return $find2(aTypedArray5(this), predicate, arguments.length > 1 ? arguments[1] : void 0);
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.find-index.js
var ArrayBufferViewCore6 = require_array_buffer_view_core();
var $findIndex2 = require_array_iteration().findIndex;
var aTypedArray6 = ArrayBufferViewCore6.aTypedArray;
var exportTypedArrayMethod6 = ArrayBufferViewCore6.exportTypedArrayMethod;
exportTypedArrayMethod6("findIndex", function findIndex2(predicate) {
  return $findIndex2(aTypedArray6(this), predicate, arguments.length > 1 ? arguments[1] : void 0);
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.for-each.js
var ArrayBufferViewCore7 = require_array_buffer_view_core();
var $forEach = require_array_iteration().forEach;
var aTypedArray7 = ArrayBufferViewCore7.aTypedArray;
var exportTypedArrayMethod7 = ArrayBufferViewCore7.exportTypedArrayMethod;
exportTypedArrayMethod7("forEach", function forEach(callbackfn) {
  $forEach(aTypedArray7(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.from.js
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = require_typed_array_constructors_require_wrappers();
var exportTypedArrayStaticMethod = require_array_buffer_view_core().exportTypedArrayStaticMethod;
var typedArrayFrom = require_typed_array_from();
exportTypedArrayStaticMethod("from", typedArrayFrom, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.includes.js
var ArrayBufferViewCore8 = require_array_buffer_view_core();
var $includes2 = require_array_includes().includes;
var aTypedArray8 = ArrayBufferViewCore8.aTypedArray;
var exportTypedArrayMethod8 = ArrayBufferViewCore8.exportTypedArrayMethod;
exportTypedArrayMethod8("includes", function includes3(searchElement) {
  return $includes2(aTypedArray8(this), searchElement, arguments.length > 1 ? arguments[1] : void 0);
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.index-of.js
var ArrayBufferViewCore9 = require_array_buffer_view_core();
var $indexOf = require_array_includes().indexOf;
var aTypedArray9 = ArrayBufferViewCore9.aTypedArray;
var exportTypedArrayMethod9 = ArrayBufferViewCore9.exportTypedArrayMethod;
exportTypedArrayMethod9("indexOf", function indexOf(searchElement) {
  return $indexOf(aTypedArray9(this), searchElement, arguments.length > 1 ? arguments[1] : void 0);
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.iterator.js
var globalThis7 = require_global_this();
var fails16 = require_fails();
var uncurryThis12 = require_function_uncurry_this();
var ArrayBufferViewCore10 = require_array_buffer_view_core();
var ArrayIterators = require_es_array_iterator();
var wellKnownSymbol6 = require_well_known_symbol();
var ITERATOR = wellKnownSymbol6("iterator");
var Uint8Array2 = globalThis7.Uint8Array;
var arrayValues = uncurryThis12(ArrayIterators.values);
var arrayKeys = uncurryThis12(ArrayIterators.keys);
var arrayEntries = uncurryThis12(ArrayIterators.entries);
var aTypedArray10 = ArrayBufferViewCore10.aTypedArray;
var exportTypedArrayMethod10 = ArrayBufferViewCore10.exportTypedArrayMethod;
var TypedArrayPrototype = Uint8Array2 && Uint8Array2.prototype;
var GENERIC = !fails16(function() {
  TypedArrayPrototype[ITERATOR].call([1]);
});
var ITERATOR_IS_VALUES = !!TypedArrayPrototype && TypedArrayPrototype.values && TypedArrayPrototype[ITERATOR] === TypedArrayPrototype.values && TypedArrayPrototype.values.name === "values";
var typedArrayValues = function values() {
  return arrayValues(aTypedArray10(this));
};
exportTypedArrayMethod10("entries", function entries2() {
  return arrayEntries(aTypedArray10(this));
}, GENERIC);
exportTypedArrayMethod10("keys", function keys2() {
  return arrayKeys(aTypedArray10(this));
}, GENERIC);
exportTypedArrayMethod10("values", typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: "values" });
exportTypedArrayMethod10(ITERATOR, typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: "values" });

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.join.js
var ArrayBufferViewCore11 = require_array_buffer_view_core();
var uncurryThis13 = require_function_uncurry_this();
var aTypedArray11 = ArrayBufferViewCore11.aTypedArray;
var exportTypedArrayMethod11 = ArrayBufferViewCore11.exportTypedArrayMethod;
var $join = uncurryThis13([].join);
exportTypedArrayMethod11("join", function join2(separator) {
  return $join(aTypedArray11(this), separator);
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.last-index-of.js
var ArrayBufferViewCore12 = require_array_buffer_view_core();
var apply3 = require_function_apply();
var $lastIndexOf = require_array_last_index_of();
var aTypedArray12 = ArrayBufferViewCore12.aTypedArray;
var exportTypedArrayMethod12 = ArrayBufferViewCore12.exportTypedArrayMethod;
exportTypedArrayMethod12("lastIndexOf", function lastIndexOf(searchElement) {
  var length = arguments.length;
  return apply3($lastIndexOf, aTypedArray12(this), length > 1 ? [searchElement, arguments[1]] : [searchElement]);
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.map.js
var ArrayBufferViewCore13 = require_array_buffer_view_core();
var $map2 = require_array_iteration().map;
var aTypedArray13 = ArrayBufferViewCore13.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore13.getTypedArrayConstructor;
var exportTypedArrayMethod13 = ArrayBufferViewCore13.exportTypedArrayMethod;
exportTypedArrayMethod13("map", function map2(mapfn) {
  return $map2(aTypedArray13(this), mapfn, arguments.length > 1 ? arguments[1] : void 0, function(O2, length) {
    return new (getTypedArrayConstructor(O2))(length);
  });
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.reduce.js
var ArrayBufferViewCore14 = require_array_buffer_view_core();
var $reduce = require_array_reduce().left;
var aTypedArray14 = ArrayBufferViewCore14.aTypedArray;
var exportTypedArrayMethod14 = ArrayBufferViewCore14.exportTypedArrayMethod;
exportTypedArrayMethod14("reduce", function reduce(callbackfn) {
  var length = arguments.length;
  return $reduce(aTypedArray14(this), callbackfn, length, length > 1 ? arguments[1] : void 0);
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.reduce-right.js
var ArrayBufferViewCore15 = require_array_buffer_view_core();
var $reduceRight = require_array_reduce().right;
var aTypedArray15 = ArrayBufferViewCore15.aTypedArray;
var exportTypedArrayMethod15 = ArrayBufferViewCore15.exportTypedArrayMethod;
exportTypedArrayMethod15("reduceRight", function reduceRight(callbackfn) {
  var length = arguments.length;
  return $reduceRight(aTypedArray15(this), callbackfn, length, length > 1 ? arguments[1] : void 0);
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.reverse.js
var ArrayBufferViewCore16 = require_array_buffer_view_core();
var aTypedArray16 = ArrayBufferViewCore16.aTypedArray;
var exportTypedArrayMethod16 = ArrayBufferViewCore16.exportTypedArrayMethod;
var floor2 = Math.floor;
exportTypedArrayMethod16("reverse", function reverse() {
  var that = this;
  var length = aTypedArray16(that).length;
  var middle = floor2(length / 2);
  var index = 0;
  var value;
  while (index < middle) {
    value = that[index];
    that[index++] = that[--length];
    that[length] = value;
  }
  return that;
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.set.js
var globalThis8 = require_global_this();
var call3 = require_function_call();
var ArrayBufferViewCore17 = require_array_buffer_view_core();
var lengthOfArrayLike6 = require_length_of_array_like();
var toOffset = require_to_offset();
var toIndexedObject5 = require_to_object();
var fails17 = require_fails();
var RangeError2 = globalThis8.RangeError;
var Int8Array2 = globalThis8.Int8Array;
var Int8ArrayPrototype = Int8Array2 && Int8Array2.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray17 = ArrayBufferViewCore17.aTypedArray;
var exportTypedArrayMethod17 = ArrayBufferViewCore17.exportTypedArrayMethod;
var WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS = !fails17(function() {
  var array = new Uint8ClampedArray(2);
  call3($set, array, { length: 1, 0: 3 }, 1);
  return array[1] !== 3;
});
var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore17.NATIVE_ARRAY_BUFFER_VIEWS && fails17(function() {
  var array = new Int8Array2(2);
  array.set(1);
  array.set("2", 1);
  return array[0] !== 0 || array[1] !== 2;
});
exportTypedArrayMethod17("set", function set(arrayLike) {
  aTypedArray17(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : void 0, 1);
  var src = toIndexedObject5(arrayLike);
  if (WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS)
    return call3($set, this, src, offset);
  var length = this.length;
  var len = lengthOfArrayLike6(src);
  var index = 0;
  if (len + offset > length)
    throw new RangeError2("Wrong length");
  while (index < len)
    this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.slice.js
var ArrayBufferViewCore18 = require_array_buffer_view_core();
var fails18 = require_fails();
var arraySlice = require_array_slice();
var aTypedArray18 = ArrayBufferViewCore18.aTypedArray;
var getTypedArrayConstructor2 = ArrayBufferViewCore18.getTypedArrayConstructor;
var exportTypedArrayMethod18 = ArrayBufferViewCore18.exportTypedArrayMethod;
var FORCED9 = fails18(function() {
  new Int8Array(1).slice();
});
exportTypedArrayMethod18("slice", function slice3(start, end2) {
  var list = arraySlice(aTypedArray18(this), start, end2);
  var C2 = getTypedArrayConstructor2(this);
  var index = 0;
  var length = list.length;
  var result = new C2(length);
  while (length > index)
    result[index] = list[index++];
  return result;
}, FORCED9);

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.some.js
var ArrayBufferViewCore19 = require_array_buffer_view_core();
var $some = require_array_iteration().some;
var aTypedArray19 = ArrayBufferViewCore19.aTypedArray;
var exportTypedArrayMethod19 = ArrayBufferViewCore19.exportTypedArrayMethod;
exportTypedArrayMethod19("some", function some(callbackfn) {
  return $some(aTypedArray19(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.sort.js
var globalThis9 = require_global_this();
var uncurryThis14 = require_function_uncurry_this_clause();
var fails19 = require_fails();
var aCallable3 = require_a_callable();
var internalSort2 = require_array_sort();
var ArrayBufferViewCore20 = require_array_buffer_view_core();
var FF2 = require_environment_ff_version();
var IE_OR_EDGE2 = require_environment_is_ie_or_edge();
var V82 = require_environment_v8_version();
var WEBKIT2 = require_environment_webkit_version();
var aTypedArray20 = ArrayBufferViewCore20.aTypedArray;
var exportTypedArrayMethod20 = ArrayBufferViewCore20.exportTypedArrayMethod;
var Uint16Array2 = globalThis9.Uint16Array;
var nativeSort2 = Uint16Array2 && uncurryThis14(Uint16Array2.prototype.sort);
var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort2 && !(fails19(function() {
  nativeSort2(new Uint16Array2(2), null);
}) && fails19(function() {
  nativeSort2(new Uint16Array2(2), {});
}));
var STABLE_SORT2 = !!nativeSort2 && !fails19(function() {
  if (V82)
    return V82 < 74;
  if (FF2)
    return FF2 < 67;
  if (IE_OR_EDGE2)
    return true;
  if (WEBKIT2)
    return WEBKIT2 < 602;
  var array = new Uint16Array2(516);
  var expected = Array(516);
  var index, mod;
  for (index = 0; index < 516; index++) {
    mod = index % 4;
    array[index] = 515 - index;
    expected[index] = index - 2 * mod + 3;
  }
  nativeSort2(array, function(a2, b2) {
    return (a2 / 4 | 0) - (b2 / 4 | 0);
  });
  for (index = 0; index < 516; index++) {
    if (array[index] !== expected[index])
      return true;
  }
});
var getSortCompare2 = function(comparefn) {
  return function(x2, y2) {
    if (comparefn !== void 0)
      return +comparefn(x2, y2) || 0;
    if (y2 !== y2)
      return -1;
    if (x2 !== x2)
      return 1;
    if (x2 === 0 && y2 === 0)
      return 1 / x2 > 0 && 1 / y2 < 0 ? 1 : -1;
    return x2 > y2;
  };
};
exportTypedArrayMethod20("sort", function sort2(comparefn) {
  if (comparefn !== void 0)
    aCallable3(comparefn);
  if (STABLE_SORT2)
    return nativeSort2(this, comparefn);
  return internalSort2(aTypedArray20(this), getSortCompare2(comparefn));
}, !STABLE_SORT2 || ACCEPT_INCORRECT_ARGUMENTS);

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.subarray.js
var ArrayBufferViewCore21 = require_array_buffer_view_core();
var toLength3 = require_to_length();
var toAbsoluteIndex3 = require_to_absolute_index();
var aTypedArray21 = ArrayBufferViewCore21.aTypedArray;
var getTypedArrayConstructor3 = ArrayBufferViewCore21.getTypedArrayConstructor;
var exportTypedArrayMethod21 = ArrayBufferViewCore21.exportTypedArrayMethod;
exportTypedArrayMethod21("subarray", function subarray(begin, end2) {
  var O2 = aTypedArray21(this);
  var length = O2.length;
  var beginIndex = toAbsoluteIndex3(begin, length);
  var C2 = getTypedArrayConstructor3(O2);
  return new C2(
    O2.buffer,
    O2.byteOffset + beginIndex * O2.BYTES_PER_ELEMENT,
    toLength3((end2 === void 0 ? length : toAbsoluteIndex3(end2, length)) - beginIndex)
  );
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.to-locale-string.js
var globalThis10 = require_global_this();
var apply4 = require_function_apply();
var ArrayBufferViewCore22 = require_array_buffer_view_core();
var fails20 = require_fails();
var arraySlice2 = require_array_slice();
var Int8Array3 = globalThis10.Int8Array;
var aTypedArray22 = ArrayBufferViewCore22.aTypedArray;
var exportTypedArrayMethod22 = ArrayBufferViewCore22.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;
var TO_LOCALE_STRING_BUG = !!Int8Array3 && fails20(function() {
  $toLocaleString.call(new Int8Array3(1));
});
var FORCED10 = fails20(function() {
  return [1, 2].toLocaleString() !== new Int8Array3([1, 2]).toLocaleString();
}) || !fails20(function() {
  Int8Array3.prototype.toLocaleString.call([1, 2]);
});
exportTypedArrayMethod22("toLocaleString", function toLocaleString() {
  return apply4(
    $toLocaleString,
    TO_LOCALE_STRING_BUG ? arraySlice2(aTypedArray22(this)) : aTypedArray22(this),
    arraySlice2(arguments)
  );
}, FORCED10);

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/es.typed-array.to-string.js
var exportTypedArrayMethod23 = require_array_buffer_view_core().exportTypedArrayMethod;
var fails21 = require_fails();
var globalThis11 = require_global_this();
var uncurryThis15 = require_function_uncurry_this();
var Uint8Array3 = globalThis11.Uint8Array;
var Uint8ArrayPrototype = Uint8Array3 && Uint8Array3.prototype || {};
var arrayToString = [].toString;
var join3 = uncurryThis15([].join);
if (fails21(function() {
  arrayToString.call({});
})) {
  arrayToString = function toString8() {
    return join3(this);
  };
}
var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString !== arrayToString;
exportTypedArrayMethod23("toString", arrayToString, IS_NOT_ARRAY_METHOD);

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/esnext.global-this.js
require_es_global_this();

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/esnext.promise.all-settled.js
require_es_promise_all_settled();

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/web.dom-collections.for-each.js
var globalThis12 = require_global_this();
var DOMIterables = require_dom_iterables();
var DOMTokenListPrototype = require_dom_token_list_prototype();
var forEach2 = require_array_for_each();
var createNonEnumerableProperty = require_create_non_enumerable_property();
var handlePrototype = function(CollectionPrototype) {
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach2)
    try {
      createNonEnumerableProperty(CollectionPrototype, "forEach", forEach2);
    } catch (error2) {
      CollectionPrototype.forEach = forEach2;
    }
};
for (COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(globalThis12[COLLECTION_NAME] && globalThis12[COLLECTION_NAME].prototype);
  }
}
var COLLECTION_NAME;
handlePrototype(DOMTokenListPrototype);

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/web.dom-collections.iterator.js
var globalThis13 = require_global_this();
var DOMIterables2 = require_dom_iterables();
var DOMTokenListPrototype2 = require_dom_token_list_prototype();
var ArrayIteratorMethods = require_es_array_iterator();
var createNonEnumerableProperty2 = require_create_non_enumerable_property();
var setToStringTag4 = require_set_to_string_tag();
var wellKnownSymbol7 = require_well_known_symbol();
var ITERATOR2 = wellKnownSymbol7("iterator");
var ArrayValues = ArrayIteratorMethods.values;
var handlePrototype2 = function(CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    if (CollectionPrototype[ITERATOR2] !== ArrayValues)
      try {
        createNonEnumerableProperty2(CollectionPrototype, ITERATOR2, ArrayValues);
      } catch (error2) {
        CollectionPrototype[ITERATOR2] = ArrayValues;
      }
    setToStringTag4(CollectionPrototype, COLLECTION_NAME, true);
    if (DOMIterables2[COLLECTION_NAME])
      for (var METHOD_NAME in ArrayIteratorMethods) {
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME])
          try {
            createNonEnumerableProperty2(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
          } catch (error2) {
            CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
          }
      }
  }
};
for (COLLECTION_NAME in DOMIterables2) {
  handlePrototype2(globalThis13[COLLECTION_NAME] && globalThis13[COLLECTION_NAME].prototype, COLLECTION_NAME);
}
var COLLECTION_NAME;
handlePrototype2(DOMTokenListPrototype2, "DOMTokenList");

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/web.url.js
require_web_url_constructor();

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/web.url.to-json.js
var $30 = require_export();
var call4 = require_function_call();
$30({ target: "URL", proto: true, enumerable: true }, {
  toJSON: function toJSON() {
    return call4(URL.prototype.toString, this);
  }
});

// ../../../../code/HBuilderProjects/office-preview/node_modules/core-js/modules/web.url-search-params.js
require_web_url_search_params_constructor();

// ../../../../code/HBuilderProjects/office-preview/node_modules/@js-preview/docx/lib/index.js
var import_stream = __toESM(require_stream());
var import_events = __toESM(require_events());
var import_buffer = __toESM(require_buffer());
var import_util = __toESM(require_util());
function ownKeys2(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys2(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys2(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _defineProperty(e2, r2, t2) {
  return (r2 = _toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, { value: t2, enumerable: true, configurable: true, writable: true }) : e2[r2] = t2, e2;
}
function _toConsumableArray(r2) {
  return _arrayWithoutHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"])
    return Array.from(r2);
}
function _arrayWithoutHoles(r2) {
  if (Array.isArray(r2))
    return _arrayLikeToArray(r2);
}
function _slicedToArray(r2, e2) {
  return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e2) || _unsupportedIterableToArray(r2, e2) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(r2, l2) {
  var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t2) {
    var e2, n2, i2, u2, a2 = [], f2 = true, o2 = false;
    try {
      if (i2 = (t2 = t2.call(r2)).next, 0 === l2) {
        if (Object(t2) !== t2)
          return;
        f2 = false;
      } else
        for (; !(f2 = (e2 = i2.call(t2)).done) && (a2.push(e2.value), a2.length !== l2); f2 = true)
          ;
    } catch (r3) {
      o2 = true, n2 = r3;
    } finally {
      try {
        if (!f2 && null != t2.return && (u2 = t2.return(), Object(u2) !== u2))
          return;
      } finally {
        if (o2)
          throw n2;
      }
    }
    return a2;
  }
}
function _arrayWithHoles(r2) {
  if (Array.isArray(r2))
    return r2;
}
function _callSuper(t2, o2, e2) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t2, _isNativeReflectConstruct() ? Reflect.construct(o2, e2 || [], _getPrototypeOf(t2).constructor) : o2.apply(t2, e2));
}
function _possibleConstructorReturn(t2, e2) {
  if (e2 && ("object" == _typeof(e2) || "function" == typeof e2))
    return e2;
  if (void 0 !== e2)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t2);
}
function _assertThisInitialized(e2) {
  if (void 0 === e2)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e2;
}
function _isNativeReflectConstruct() {
  try {
    var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t3) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t2;
  })();
}
function _getPrototypeOf(t2) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
    return t3.__proto__ || Object.getPrototypeOf(t3);
  }, _getPrototypeOf(t2);
}
function _inherits(t2, e2) {
  if ("function" != typeof e2 && null !== e2)
    throw new TypeError("Super expression must either be null or a function");
  t2.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t2, writable: true, configurable: true } }), Object.defineProperty(t2, "prototype", { writable: false }), e2 && _setPrototypeOf(t2, e2);
}
function _setPrototypeOf(t2, e2) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, _setPrototypeOf(t2, e2);
}
function _createForOfIteratorHelper(r2, e2) {
  var t2 = "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (!t2) {
    if (Array.isArray(r2) || (t2 = _unsupportedIterableToArray(r2)) || e2 && r2 && "number" == typeof r2.length) {
      t2 && (r2 = t2);
      var _n11 = 0, F2 = function F3() {
      };
      return { s: F2, n: function n2() {
        return _n11 >= r2.length ? { done: true } : { done: false, value: r2[_n11++] };
      }, e: function e3(r3) {
        throw r3;
      }, f: F2 };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o2, a2 = true, u2 = false;
  return { s: function s2() {
    t2 = t2.call(r2);
  }, n: function n2() {
    var r3 = t2.next();
    return a2 = r3.done, r3;
  }, e: function e3(r3) {
    u2 = true, o2 = r3;
  }, f: function f2() {
    try {
      a2 || null == t2.return || t2.return();
    } finally {
      if (u2)
        throw o2;
    }
  } };
}
function _unsupportedIterableToArray(r2, a2) {
  if (r2) {
    if ("string" == typeof r2)
      return _arrayLikeToArray(r2, a2);
    var t2 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r2, a2) : void 0;
  }
}
function _arrayLikeToArray(r2, a2) {
  (null == a2 || a2 > r2.length) && (a2 = r2.length);
  for (var e2 = 0, n2 = Array(a2); e2 < a2; e2++)
    n2[e2] = r2[e2];
  return n2;
}
function _regeneratorRuntime() {
  "use strict";
  _regeneratorRuntime = function _regeneratorRuntime2() {
    return e2;
  };
  var t2, e2 = {}, r2 = Object.prototype, n2 = r2.hasOwnProperty, o2 = Object.defineProperty || function(t3, e3, r3) {
    t3[e3] = r3.value;
  }, i2 = "function" == typeof Symbol ? Symbol : {}, a2 = i2.iterator || "@@iterator", c2 = i2.asyncIterator || "@@asyncIterator", u2 = i2.toStringTag || "@@toStringTag";
  function define(t3, e3, r3) {
    return Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }), t3[e3];
  }
  try {
    define({}, "");
  } catch (t3) {
    define = function define2(t4, e3, r3) {
      return t4[e3] = r3;
    };
  }
  function wrap(t3, e3, r3, n3) {
    var i3 = e3 && e3.prototype instanceof Generator ? e3 : Generator, a3 = Object.create(i3.prototype), c3 = new Context(n3 || []);
    return o2(a3, "_invoke", { value: makeInvokeMethod(t3, r3, c3) }), a3;
  }
  function tryCatch(t3, e3, r3) {
    try {
      return { type: "normal", arg: t3.call(e3, r3) };
    } catch (t4) {
      return { type: "throw", arg: t4 };
    }
  }
  e2.wrap = wrap;
  var h2 = "suspendedStart", l2 = "suspendedYield", f2 = "executing", s2 = "completed", y2 = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  var p2 = {};
  define(p2, a2, function() {
    return this;
  });
  var d2 = Object.getPrototypeOf, v2 = d2 && d2(d2(values2([])));
  v2 && v2 !== r2 && n2.call(v2, a2) && (p2 = v2);
  var g2 = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p2);
  function defineIteratorMethods(t3) {
    ["next", "throw", "return"].forEach(function(e3) {
      define(t3, e3, function(t4) {
        return this._invoke(e3, t4);
      });
    });
  }
  function AsyncIterator(t3, e3) {
    function invoke(r4, o3, i3, a3) {
      var c3 = tryCatch(t3[r4], t3, o3);
      if ("throw" !== c3.type) {
        var u3 = c3.arg, h3 = u3.value;
        return h3 && "object" == _typeof(h3) && n2.call(h3, "__await") ? e3.resolve(h3.__await).then(function(t4) {
          invoke("next", t4, i3, a3);
        }, function(t4) {
          invoke("throw", t4, i3, a3);
        }) : e3.resolve(h3).then(function(t4) {
          u3.value = t4, i3(u3);
        }, function(t4) {
          return invoke("throw", t4, i3, a3);
        });
      }
      a3(c3.arg);
    }
    var r3;
    o2(this, "_invoke", { value: function value(t4, n3) {
      function callInvokeWithMethodAndArg() {
        return new e3(function(e4, r4) {
          invoke(t4, n3, e4, r4);
        });
      }
      return r3 = r3 ? r3.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } });
  }
  function makeInvokeMethod(e3, r3, n3) {
    var o3 = h2;
    return function(i3, a3) {
      if (o3 === f2)
        throw Error("Generator is already running");
      if (o3 === s2) {
        if ("throw" === i3)
          throw a3;
        return { value: t2, done: true };
      }
      for (n3.method = i3, n3.arg = a3; ; ) {
        var c3 = n3.delegate;
        if (c3) {
          var u3 = maybeInvokeDelegate(c3, n3);
          if (u3) {
            if (u3 === y2)
              continue;
            return u3;
          }
        }
        if ("next" === n3.method)
          n3.sent = n3._sent = n3.arg;
        else if ("throw" === n3.method) {
          if (o3 === h2)
            throw o3 = s2, n3.arg;
          n3.dispatchException(n3.arg);
        } else
          "return" === n3.method && n3.abrupt("return", n3.arg);
        o3 = f2;
        var p3 = tryCatch(e3, r3, n3);
        if ("normal" === p3.type) {
          if (o3 = n3.done ? s2 : l2, p3.arg === y2)
            continue;
          return { value: p3.arg, done: n3.done };
        }
        "throw" === p3.type && (o3 = s2, n3.method = "throw", n3.arg = p3.arg);
      }
    };
  }
  function maybeInvokeDelegate(e3, r3) {
    var n3 = r3.method, o3 = e3.iterator[n3];
    if (o3 === t2)
      return r3.delegate = null, "throw" === n3 && e3.iterator.return && (r3.method = "return", r3.arg = t2, maybeInvokeDelegate(e3, r3), "throw" === r3.method) || "return" !== n3 && (r3.method = "throw", r3.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), y2;
    var i3 = tryCatch(o3, e3.iterator, r3.arg);
    if ("throw" === i3.type)
      return r3.method = "throw", r3.arg = i3.arg, r3.delegate = null, y2;
    var a3 = i3.arg;
    return a3 ? a3.done ? (r3[e3.resultName] = a3.value, r3.next = e3.nextLoc, "return" !== r3.method && (r3.method = "next", r3.arg = t2), r3.delegate = null, y2) : a3 : (r3.method = "throw", r3.arg = new TypeError("iterator result is not an object"), r3.delegate = null, y2);
  }
  function pushTryEntry(t3) {
    var e3 = { tryLoc: t3[0] };
    1 in t3 && (e3.catchLoc = t3[1]), 2 in t3 && (e3.finallyLoc = t3[2], e3.afterLoc = t3[3]), this.tryEntries.push(e3);
  }
  function resetTryEntry(t3) {
    var e3 = t3.completion || {};
    e3.type = "normal", delete e3.arg, t3.completion = e3;
  }
  function Context(t3) {
    this.tryEntries = [{ tryLoc: "root" }], t3.forEach(pushTryEntry, this), this.reset(true);
  }
  function values2(e3) {
    if (e3 || "" === e3) {
      var r3 = e3[a2];
      if (r3)
        return r3.call(e3);
      if ("function" == typeof e3.next)
        return e3;
      if (!isNaN(e3.length)) {
        var o3 = -1, i3 = function next() {
          for (; ++o3 < e3.length; )
            if (n2.call(e3, o3))
              return next.value = e3[o3], next.done = false, next;
          return next.value = t2, next.done = true, next;
        };
        return i3.next = i3;
      }
    }
    throw new TypeError(_typeof(e3) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o2(g2, "constructor", { value: GeneratorFunctionPrototype, configurable: true }), o2(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: true }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u2, "GeneratorFunction"), e2.isGeneratorFunction = function(t3) {
    var e3 = "function" == typeof t3 && t3.constructor;
    return !!e3 && (e3 === GeneratorFunction || "GeneratorFunction" === (e3.displayName || e3.name));
  }, e2.mark = function(t3) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t3, GeneratorFunctionPrototype) : (t3.__proto__ = GeneratorFunctionPrototype, define(t3, u2, "GeneratorFunction")), t3.prototype = Object.create(g2), t3;
  }, e2.awrap = function(t3) {
    return { __await: t3 };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c2, function() {
    return this;
  }), e2.AsyncIterator = AsyncIterator, e2.async = function(t3, r3, n3, o3, i3) {
    void 0 === i3 && (i3 = Promise);
    var a3 = new AsyncIterator(wrap(t3, r3, n3, o3), i3);
    return e2.isGeneratorFunction(r3) ? a3 : a3.next().then(function(t4) {
      return t4.done ? t4.value : a3.next();
    });
  }, defineIteratorMethods(g2), define(g2, u2, "Generator"), define(g2, a2, function() {
    return this;
  }), define(g2, "toString", function() {
    return "[object Generator]";
  }), e2.keys = function(t3) {
    var e3 = Object(t3), r3 = [];
    for (var n3 in e3)
      r3.push(n3);
    return r3.reverse(), function next() {
      for (; r3.length; ) {
        var t4 = r3.pop();
        if (t4 in e3)
          return next.value = t4, next.done = false, next;
      }
      return next.done = true, next;
    };
  }, e2.values = values2, Context.prototype = { constructor: Context, reset: function reset(e3) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = t2, this.done = false, this.delegate = null, this.method = "next", this.arg = t2, this.tryEntries.forEach(resetTryEntry), !e3)
      for (var r3 in this)
        "t" === r3.charAt(0) && n2.call(this, r3) && !isNaN(+r3.slice(1)) && (this[r3] = t2);
  }, stop: function stop() {
    this.done = true;
    var t3 = this.tryEntries[0].completion;
    if ("throw" === t3.type)
      throw t3.arg;
    return this.rval;
  }, dispatchException: function dispatchException(e3) {
    if (this.done)
      throw e3;
    var r3 = this;
    function handle(n3, o4) {
      return a3.type = "throw", a3.arg = e3, r3.next = n3, o4 && (r3.method = "next", r3.arg = t2), !!o4;
    }
    for (var o3 = this.tryEntries.length - 1; o3 >= 0; --o3) {
      var i3 = this.tryEntries[o3], a3 = i3.completion;
      if ("root" === i3.tryLoc)
        return handle("end");
      if (i3.tryLoc <= this.prev) {
        var c3 = n2.call(i3, "catchLoc"), u3 = n2.call(i3, "finallyLoc");
        if (c3 && u3) {
          if (this.prev < i3.catchLoc)
            return handle(i3.catchLoc, true);
          if (this.prev < i3.finallyLoc)
            return handle(i3.finallyLoc);
        } else if (c3) {
          if (this.prev < i3.catchLoc)
            return handle(i3.catchLoc, true);
        } else {
          if (!u3)
            throw Error("try statement without catch or finally");
          if (this.prev < i3.finallyLoc)
            return handle(i3.finallyLoc);
        }
      }
    }
  }, abrupt: function abrupt(t3, e3) {
    for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
      var o3 = this.tryEntries[r3];
      if (o3.tryLoc <= this.prev && n2.call(o3, "finallyLoc") && this.prev < o3.finallyLoc) {
        var i3 = o3;
        break;
      }
    }
    i3 && ("break" === t3 || "continue" === t3) && i3.tryLoc <= e3 && e3 <= i3.finallyLoc && (i3 = null);
    var a3 = i3 ? i3.completion : {};
    return a3.type = t3, a3.arg = e3, i3 ? (this.method = "next", this.next = i3.finallyLoc, y2) : this.complete(a3);
  }, complete: function complete(t3, e3) {
    if ("throw" === t3.type)
      throw t3.arg;
    return "break" === t3.type || "continue" === t3.type ? this.next = t3.arg : "return" === t3.type ? (this.rval = this.arg = t3.arg, this.method = "return", this.next = "end") : "normal" === t3.type && e3 && (this.next = e3), y2;
  }, finish: function finish(t3) {
    for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
      var r3 = this.tryEntries[e3];
      if (r3.finallyLoc === t3)
        return this.complete(r3.completion, r3.afterLoc), resetTryEntry(r3), y2;
    }
  }, catch: function _catch(t3) {
    for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
      var r3 = this.tryEntries[e3];
      if (r3.tryLoc === t3) {
        var n3 = r3.completion;
        if ("throw" === n3.type) {
          var o3 = n3.arg;
          resetTryEntry(r3);
        }
        return o3;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function delegateYield(e3, r3, n3) {
    return this.delegate = { iterator: values2(e3), resultName: r3, nextLoc: n3 }, "next" === this.method && (this.arg = t2), y2;
  } }, e2;
}
function asyncGeneratorStep(n2, t2, e2, r2, o2, a2, c2) {
  try {
    var i2 = n2[a2](c2), u2 = i2.value;
  } catch (n3) {
    return void e2(n3);
  }
  i2.done ? t2(u2) : Promise.resolve(u2).then(r2, o2);
}
function _asyncToGenerator(n2) {
  return function() {
    var t2 = this, e2 = arguments;
    return new Promise(function(r2, o2) {
      var a2 = n2.apply(t2, e2);
      function _next(n3) {
        asyncGeneratorStep(a2, r2, o2, _next, _throw, "next", n3);
      }
      function _throw(n3) {
        asyncGeneratorStep(a2, r2, o2, _next, _throw, "throw", n3);
      }
      _next(void 0);
    });
  };
}
function _classCallCheck(a2, n2) {
  if (!(a2 instanceof n2))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e2, r2) {
  for (var t2 = 0; t2 < r2.length; t2++) {
    var o2 = r2[t2];
    o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, _toPropertyKey(o2.key), o2);
  }
}
function _createClass(e2, r2, t2) {
  return r2 && _defineProperties(e2.prototype, r2), t2 && _defineProperties(e2, t2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
}
function _toPropertyKey(t2) {
  var i2 = _toPrimitive(t2, "string");
  return "symbol" == _typeof(i2) ? i2 : i2 + "";
}
function _toPrimitive(t2, r2) {
  if ("object" != _typeof(t2) || !t2)
    return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2 || "default");
    if ("object" != _typeof(i2))
      return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}
void 0 === window.setImmediate && (window.setImmediate = function(e2) {
  for (var _len = arguments.length, t2 = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    t2[_key - 1] = arguments[_key];
  }
  setTimeout(function() {
    return e2(t2);
  });
});
var a = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function i(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
var s;
var o;
var l;
var c;
var h;
var u = {};
var d = {};
var f = {};
var p = {
  exports: {}
};
var m = {
  exports: {}
};
function g() {
  if (s)
    return m.exports;
  return s = 1, "undefined" == typeof process || !process.version || 0 === process.version.indexOf("v0.") || 0 === process.version.indexOf("v1.") && 0 !== process.version.indexOf("v1.8.") ? m.exports = {
    nextTick: function nextTick(e2, t2, r2, n2) {
      if ("function" != typeof e2)
        throw new TypeError('"callback" argument must be a function');
      var a2, i2, s2 = arguments.length;
      switch (s2) {
        case 0:
        case 1:
          return process.nextTick(e2);
        case 2:
          return process.nextTick(function() {
            e2.call(null, t2);
          });
        case 3:
          return process.nextTick(function() {
            e2.call(null, t2, r2);
          });
        case 4:
          return process.nextTick(function() {
            e2.call(null, t2, r2, n2);
          });
        default:
          for (a2 = new Array(s2 - 1), i2 = 0; i2 < a2.length; )
            a2[i2++] = arguments[i2];
          return process.nextTick(function() {
            e2.apply(null, a2);
          });
      }
    }
  } : m.exports = process, m.exports;
}
function b() {
  return h ? c : (h = 1, c = import_stream.default);
}
var y;
var v = {
  exports: {}
};
function w() {
  return y || (y = 1, function(e2, t2) {
    var n2 = import_buffer.default, a2 = n2.Buffer;
    function i2(e3, t3) {
      for (var r2 in e3)
        t3[r2] = e3[r2];
    }
    function s2(e3, t3, r2) {
      return a2(e3, t3, r2);
    }
    a2.from && a2.alloc && a2.allocUnsafe && a2.allocUnsafeSlow ? e2.exports = n2 : (i2(n2, t2), t2.Buffer = s2), i2(a2, s2), s2.from = function(e3, t3, r2) {
      if ("number" == typeof e3)
        throw new TypeError("Argument must not be a number");
      return a2(e3, t3, r2);
    }, s2.alloc = function(e3, t3, r2) {
      if ("number" != typeof e3)
        throw new TypeError("Argument must be a number");
      var n3 = a2(e3);
      return void 0 !== t3 ? "string" == typeof r2 ? n3.fill(t3, r2) : n3.fill(t3) : n3.fill(0), n3;
    }, s2.allocUnsafe = function(e3) {
      if ("number" != typeof e3)
        throw new TypeError("Argument must be a number");
      return a2(e3);
    }, s2.allocUnsafeSlow = function(e3) {
      if ("number" != typeof e3)
        throw new TypeError("Argument must be a number");
      return n2.SlowBuffer(e3);
    };
  }(v, v.exports)), v.exports;
}
var _;
var k = {};
function S() {
  if (_)
    return k;
  function e2(e3) {
    return Object.prototype.toString.call(e3);
  }
  return _ = 1, k.isArray = function(t2) {
    return Array.isArray ? Array.isArray(t2) : "[object Array]" === e2(t2);
  }, k.isBoolean = function(e3) {
    return "boolean" == typeof e3;
  }, k.isNull = function(e3) {
    return null === e3;
  }, k.isNullOrUndefined = function(e3) {
    return null == e3;
  }, k.isNumber = function(e3) {
    return "number" == typeof e3;
  }, k.isString = function(e3) {
    return "string" == typeof e3;
  }, k.isSymbol = function(e3) {
    return "symbol" == _typeof(e3);
  }, k.isUndefined = function(e3) {
    return void 0 === e3;
  }, k.isRegExp = function(t2) {
    return "[object RegExp]" === e2(t2);
  }, k.isObject = function(e3) {
    return "object" == _typeof(e3) && null !== e3;
  }, k.isDate = function(t2) {
    return "[object Date]" === e2(t2);
  }, k.isError = function(t2) {
    return "[object Error]" === e2(t2) || t2 instanceof Error;
  }, k.isFunction = function(e3) {
    return "function" == typeof e3;
  }, k.isPrimitive = function(e3) {
    return null === e3 || "boolean" == typeof e3 || "number" == typeof e3 || "string" == typeof e3 || "symbol" == _typeof(e3) || void 0 === e3;
  }, k.isBuffer = import_buffer.default.Buffer.isBuffer, k;
}
var x;
var C;
var E = {
  exports: {}
};
var P = {
  exports: {}
};
function A() {
  if (C)
    return E.exports;
  C = 1;
  try {
    var e2 = require_util();
    if ("function" != typeof e2.inherits)
      throw "";
    E.exports = e2.inherits;
  } catch (e3) {
    E.exports = (x || (x = 1, "function" == typeof Object.create ? P.exports = function(e4, t2) {
      t2 && (e4.super_ = t2, e4.prototype = Object.create(t2.prototype, {
        constructor: {
          value: e4,
          enumerable: false,
          writable: true,
          configurable: true
        }
      }));
    } : P.exports = function(e4, t2) {
      if (t2) {
        e4.super_ = t2;
        var r2 = function r3() {
        };
        r2.prototype = t2.prototype, e4.prototype = new r2(), e4.prototype.constructor = e4;
      }
    }), P.exports);
  }
  return E.exports;
}
var T;
var N;
var R;
var B;
var M;
var D;
var O;
var I;
var z;
var F = {
  exports: {}
};
function L() {
  return T || (T = 1, function(e2) {
    var t2 = w().Buffer, r2 = import_util.default;
    e2.exports = function() {
      function e3() {
        !function(e4, t3) {
          if (!(e4 instanceof t3))
            throw new TypeError("Cannot call a class as a function");
        }(this, e3), this.head = null, this.tail = null, this.length = 0;
      }
      return e3.prototype.push = function(e4) {
        var t3 = {
          data: e4,
          next: null
        };
        this.length > 0 ? this.tail.next = t3 : this.head = t3, this.tail = t3, ++this.length;
      }, e3.prototype.unshift = function(e4) {
        var t3 = {
          data: e4,
          next: this.head
        };
        0 === this.length && (this.tail = t3), this.head = t3, ++this.length;
      }, e3.prototype.shift = function() {
        if (0 !== this.length) {
          var e4 = this.head.data;
          return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e4;
        }
      }, e3.prototype.clear = function() {
        this.head = this.tail = null, this.length = 0;
      }, e3.prototype.join = function(e4) {
        if (0 === this.length)
          return "";
        for (var t3 = this.head, r3 = "" + t3.data; t3 = t3.next; )
          r3 += e4 + t3.data;
        return r3;
      }, e3.prototype.concat = function(e4) {
        if (0 === this.length)
          return t2.alloc(0);
        for (var r3, n2, a2, i2 = t2.allocUnsafe(e4 >>> 0), s2 = this.head, o2 = 0; s2; )
          r3 = s2.data, n2 = i2, a2 = o2, r3.copy(n2, a2), o2 += s2.data.length, s2 = s2.next;
        return i2;
      }, e3;
    }(), r2 && r2.inspect && r2.inspect.custom && (e2.exports.prototype[r2.inspect.custom] = function() {
      var e3 = r2.inspect({
        length: this.length
      });
      return this.constructor.name + " " + e3;
    });
  }(F)), F.exports;
}
function j() {
  if (R)
    return N;
  R = 1;
  var e2 = g();
  function t2(e3, t3) {
    e3.emit("error", t3);
  }
  return N = {
    destroy: function destroy(r2, n2) {
      var a2 = this, i2 = this._readableState && this._readableState.destroyed, s2 = this._writableState && this._writableState.destroyed;
      return i2 || s2 ? (n2 ? n2(r2) : r2 && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = true, e2.nextTick(t2, this, r2)) : e2.nextTick(t2, this, r2)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(r2 || null, function(r3) {
        !n2 && r3 ? a2._writableState ? a2._writableState.errorEmitted || (a2._writableState.errorEmitted = true, e2.nextTick(t2, a2, r3)) : e2.nextTick(t2, a2, r3) : n2 && n2(r3);
      }), this);
    },
    undestroy: function undestroy() {
      this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
    }
  }, N;
}
function U() {
  if (O)
    return D;
  O = 1;
  var e2 = g();
  function t2(e3) {
    var t3 = this;
    this.next = null, this.entry = null, this.finish = function() {
      !function(e4, t4, r3) {
        var n2 = e4.entry;
        e4.entry = null;
        for (; n2; ) {
          var a2 = n2.callback;
          t4.pendingcb--, a2(r3), n2 = n2.next;
        }
        t4.corkedRequestsFree.next = e4;
      }(t3, e3);
    };
  }
  D = m2;
  var r2, i2 = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : e2.nextTick;
  m2.WritableState = p2;
  var s2 = Object.create(S());
  s2.inherits = A();
  var o2 = {
    deprecate: M ? B : (M = 1, B = import_util.default.deprecate)
  }, l2 = b(), c2 = w().Buffer, h2 = (void 0 !== a ? a : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {
  };
  var u2, d2 = j();
  function f2() {
  }
  function p2(n2, a2) {
    r2 = r2 || $31(), n2 = n2 || {};
    var s3 = a2 instanceof r2;
    this.objectMode = !!n2.objectMode, s3 && (this.objectMode = this.objectMode || !!n2.writableObjectMode);
    var o3 = n2.highWaterMark, l3 = n2.writableHighWaterMark, c3 = this.objectMode ? 16 : 16384;
    this.highWaterMark = o3 || 0 === o3 ? o3 : s3 && (l3 || 0 === l3) ? l3 : c3, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
    var h3 = false === n2.decodeStrings;
    this.decodeStrings = !h3, this.defaultEncoding = n2.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(t3) {
      !function(t4, r3) {
        var n3 = t4._writableState, a3 = n3.sync, s4 = n3.writecb;
        if (function(e3) {
          e3.writing = false, e3.writecb = null, e3.length -= e3.writelen, e3.writelen = 0;
        }(n3), r3)
          !function(t5, r4, n4, a4, i3) {
            --r4.pendingcb, n4 ? (e2.nextTick(i3, a4), e2.nextTick(C2, t5, r4), t5._writableState.errorEmitted = true, t5.emit("error", a4)) : (i3(a4), t5._writableState.errorEmitted = true, t5.emit("error", a4), C2(t5, r4));
          }(t4, n3, a3, r3, s4);
        else {
          var o4 = k2(n3);
          o4 || n3.corked || n3.bufferProcessing || !n3.bufferedRequest || _2(t4, n3), a3 ? i2(v2, t4, n3, o4, s4) : v2(t4, n3, o4, s4);
        }
      }(a2, t3);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.bufferedRequestCount = 0, this.corkedRequestsFree = new t2(this);
  }
  function m2(e3) {
    if (r2 = r2 || $31(), !(u2.call(m2, this) || this instanceof r2))
      return new m2(e3);
    this._writableState = new p2(e3, this), this.writable = true, e3 && ("function" == typeof e3.write && (this._write = e3.write), "function" == typeof e3.writev && (this._writev = e3.writev), "function" == typeof e3.destroy && (this._destroy = e3.destroy), "function" == typeof e3.final && (this._final = e3.final)), l2.call(this);
  }
  function y2(e3, t3, r3, n2, a2, i3, s3) {
    t3.writelen = n2, t3.writecb = s3, t3.writing = true, t3.sync = true, r3 ? e3._writev(a2, t3.onwrite) : e3._write(a2, i3, t3.onwrite), t3.sync = false;
  }
  function v2(e3, t3, r3, n2) {
    r3 || function(e4, t4) {
      0 === t4.length && t4.needDrain && (t4.needDrain = false, e4.emit("drain"));
    }(e3, t3), t3.pendingcb--, n2(), C2(e3, t3);
  }
  function _2(e3, r3) {
    r3.bufferProcessing = true;
    var n2 = r3.bufferedRequest;
    if (e3._writev && n2 && n2.next) {
      var a2 = r3.bufferedRequestCount, i3 = new Array(a2), s3 = r3.corkedRequestsFree;
      s3.entry = n2;
      for (var o3 = 0, l3 = true; n2; )
        i3[o3] = n2, n2.isBuf || (l3 = false), n2 = n2.next, o3 += 1;
      i3.allBuffers = l3, y2(e3, r3, true, r3.length, i3, "", s3.finish), r3.pendingcb++, r3.lastBufferedRequest = null, s3.next ? (r3.corkedRequestsFree = s3.next, s3.next = null) : r3.corkedRequestsFree = new t2(r3), r3.bufferedRequestCount = 0;
    } else {
      for (; n2; ) {
        var c3 = n2.chunk, h3 = n2.encoding, u3 = n2.callback;
        if (y2(e3, r3, false, r3.objectMode ? 1 : c3.length, c3, h3, u3), n2 = n2.next, r3.bufferedRequestCount--, r3.writing)
          break;
      }
      null === n2 && (r3.lastBufferedRequest = null);
    }
    r3.bufferedRequest = n2, r3.bufferProcessing = false;
  }
  function k2(e3) {
    return e3.ending && 0 === e3.length && null === e3.bufferedRequest && !e3.finished && !e3.writing;
  }
  function x2(e3, t3) {
    e3._final(function(r3) {
      t3.pendingcb--, r3 && e3.emit("error", r3), t3.prefinished = true, e3.emit("prefinish"), C2(e3, t3);
    });
  }
  function C2(t3, r3) {
    var n2 = k2(r3);
    return n2 && (!function(t4, r4) {
      r4.prefinished || r4.finalCalled || ("function" == typeof t4._final ? (r4.pendingcb++, r4.finalCalled = true, e2.nextTick(x2, t4, r4)) : (r4.prefinished = true, t4.emit("prefinish")));
    }(t3, r3), 0 === r3.pendingcb && (r3.finished = true, t3.emit("finish"))), n2;
  }
  return s2.inherits(m2, l2), p2.prototype.getBuffer = function() {
    for (var e3 = this.bufferedRequest, t3 = []; e3; )
      t3.push(e3), e3 = e3.next;
    return t3;
  }, function() {
    try {
      Object.defineProperty(p2.prototype, "buffer", {
        get: o2.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch (e3) {
    }
  }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (u2 = Function.prototype[Symbol.hasInstance], Object.defineProperty(m2, Symbol.hasInstance, {
    value: function value(e3) {
      return !!u2.call(this, e3) || this === m2 && e3 && e3._writableState instanceof p2;
    }
  })) : u2 = function u3(e3) {
    return e3 instanceof this;
  }, m2.prototype.pipe = function() {
    this.emit("error", new Error("Cannot pipe, not readable"));
  }, m2.prototype.write = function(t3, r3, n2) {
    var a2, i3 = this._writableState, s3 = false, o3 = !i3.objectMode && (a2 = t3, c2.isBuffer(a2) || a2 instanceof h2);
    return o3 && !c2.isBuffer(t3) && (t3 = function(e3) {
      return c2.from(e3);
    }(t3)), "function" == typeof r3 && (n2 = r3, r3 = null), o3 ? r3 = "buffer" : r3 || (r3 = i3.defaultEncoding), "function" != typeof n2 && (n2 = f2), i3.ended ? function(t4, r4) {
      var n3 = new Error("write after end");
      t4.emit("error", n3), e2.nextTick(r4, n3);
    }(this, n2) : (o3 || function(t4, r4, n3, a3) {
      var i4 = true, s4 = false;
      return null === n3 ? s4 = new TypeError("May not write null values to stream") : "string" == typeof n3 || void 0 === n3 || r4.objectMode || (s4 = new TypeError("Invalid non-string/buffer chunk")), s4 && (t4.emit("error", s4), e2.nextTick(a3, s4), i4 = false), i4;
    }(this, i3, t3, n2)) && (i3.pendingcb++, s3 = function(e3, t4, r4, n3, a3, i4) {
      if (!r4) {
        var s4 = function(e4, t5, r5) {
          e4.objectMode || false === e4.decodeStrings || "string" != typeof t5 || (t5 = c2.from(t5, r5));
          return t5;
        }(t4, n3, a3);
        n3 !== s4 && (r4 = true, a3 = "buffer", n3 = s4);
      }
      var o4 = t4.objectMode ? 1 : n3.length;
      t4.length += o4;
      var l3 = t4.length < t4.highWaterMark;
      l3 || (t4.needDrain = true);
      if (t4.writing || t4.corked) {
        var h3 = t4.lastBufferedRequest;
        t4.lastBufferedRequest = {
          chunk: n3,
          encoding: a3,
          isBuf: r4,
          callback: i4,
          next: null
        }, h3 ? h3.next = t4.lastBufferedRequest : t4.bufferedRequest = t4.lastBufferedRequest, t4.bufferedRequestCount += 1;
      } else
        y2(e3, t4, false, o4, n3, a3, i4);
      return l3;
    }(this, i3, o3, t3, r3, n2)), s3;
  }, m2.prototype.cork = function() {
    this._writableState.corked++;
  }, m2.prototype.uncork = function() {
    var e3 = this._writableState;
    e3.corked && (e3.corked--, e3.writing || e3.corked || e3.bufferProcessing || !e3.bufferedRequest || _2(this, e3));
  }, m2.prototype.setDefaultEncoding = function(e3) {
    if ("string" == typeof e3 && (e3 = e3.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e3 + "").toLowerCase()) > -1))
      throw new TypeError("Unknown encoding: " + e3);
    return this._writableState.defaultEncoding = e3, this;
  }, Object.defineProperty(m2.prototype, "writableHighWaterMark", {
    enumerable: false,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  }), m2.prototype._write = function(e3, t3, r3) {
    r3(new Error("_write() is not implemented"));
  }, m2.prototype._writev = null, m2.prototype.end = function(t3, r3, n2) {
    var a2 = this._writableState;
    "function" == typeof t3 ? (n2 = t3, t3 = null, r3 = null) : "function" == typeof r3 && (n2 = r3, r3 = null), null != t3 && this.write(t3, r3), a2.corked && (a2.corked = 1, this.uncork()), a2.ending || function(t4, r4, n3) {
      r4.ending = true, C2(t4, r4), n3 && (r4.finished ? e2.nextTick(n3) : t4.once("finish", n3));
      r4.ended = true, t4.writable = false;
    }(this, a2, n2);
  }, Object.defineProperty(m2.prototype, "destroyed", {
    get: function get() {
      return void 0 !== this._writableState && this._writableState.destroyed;
    },
    set: function set2(e3) {
      this._writableState && (this._writableState.destroyed = e3);
    }
  }), m2.prototype.destroy = d2.destroy, m2.prototype._undestroy = d2.undestroy, m2.prototype._destroy = function(e3, t3) {
    this.end(), t3(e3);
  }, D;
}
function $31() {
  if (z)
    return I;
  z = 1;
  var e2 = g(), t2 = Object.keys || function(e3) {
    var t3 = [];
    for (var r3 in e3)
      t3.push(r3);
    return t3;
  };
  I = l2;
  var r2 = Object.create(S());
  r2.inherits = A();
  var n2 = Q(), a2 = U();
  r2.inherits(l2, n2);
  for (var i2 = t2(a2.prototype), s2 = 0; s2 < i2.length; s2++) {
    var o2 = i2[s2];
    l2.prototype[o2] || (l2.prototype[o2] = a2.prototype[o2]);
  }
  function l2(e3) {
    if (!(this instanceof l2))
      return new l2(e3);
    n2.call(this, e3), a2.call(this, e3), e3 && false === e3.readable && (this.readable = false), e3 && false === e3.writable && (this.writable = false), this.allowHalfOpen = true, e3 && false === e3.allowHalfOpen && (this.allowHalfOpen = false), this.once("end", c2);
  }
  function c2() {
    this.allowHalfOpen || this._writableState.ended || e2.nextTick(h2, this);
  }
  function h2(e3) {
    e3.end();
  }
  return Object.defineProperty(l2.prototype, "writableHighWaterMark", {
    enumerable: false,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  }), Object.defineProperty(l2.prototype, "destroyed", {
    get: function get() {
      return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set2(e3) {
      void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e3, this._writableState.destroyed = e3);
    }
  }), l2.prototype._destroy = function(t3, r3) {
    this.push(null), this.end(), e2.nextTick(r3, t3);
  }, I;
}
var H;
var W;
var Z;
var V;
var q;
var X;
var K;
var Y;
var G = {};
function J() {
  if (H)
    return G;
  H = 1;
  var e2 = w().Buffer, t2 = e2.isEncoding || function(e3) {
    switch ((e3 = "" + e3) && e3.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return true;
      default:
        return false;
    }
  };
  function r2(r3) {
    var n3;
    switch (this.encoding = function(r4) {
      var n4 = function(e3) {
        if (!e3)
          return "utf8";
        for (var t3; ; )
          switch (e3) {
            case "utf8":
            case "utf-8":
              return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return "utf16le";
            case "latin1":
            case "binary":
              return "latin1";
            case "base64":
            case "ascii":
            case "hex":
              return e3;
            default:
              if (t3)
                return;
              e3 = ("" + e3).toLowerCase(), t3 = true;
          }
      }(r4);
      if ("string" != typeof n4 && (e2.isEncoding === t2 || !t2(r4)))
        throw new Error("Unknown encoding: " + r4);
      return n4 || r4;
    }(r3), this.encoding) {
      case "utf16le":
        this.text = i2, this.end = s2, n3 = 4;
        break;
      case "utf8":
        this.fillLast = a2, n3 = 4;
        break;
      case "base64":
        this.text = o2, this.end = l2, n3 = 3;
        break;
      default:
        return this.write = c2, void (this.end = h2);
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = e2.allocUnsafe(n3);
  }
  function n2(e3) {
    return e3 <= 127 ? 0 : e3 >> 5 == 6 ? 2 : e3 >> 4 == 14 ? 3 : e3 >> 3 == 30 ? 4 : e3 >> 6 == 2 ? -1 : -2;
  }
  function a2(e3) {
    var t3 = this.lastTotal - this.lastNeed, r3 = function(e4, t4) {
      if (128 != (192 & t4[0]))
        return e4.lastNeed = 0, "�";
      if (e4.lastNeed > 1 && t4.length > 1) {
        if (128 != (192 & t4[1]))
          return e4.lastNeed = 1, "�";
        if (e4.lastNeed > 2 && t4.length > 2 && 128 != (192 & t4[2]))
          return e4.lastNeed = 2, "�";
      }
    }(this, e3);
    return void 0 !== r3 ? r3 : this.lastNeed <= e3.length ? (e3.copy(this.lastChar, t3, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e3.copy(this.lastChar, t3, 0, e3.length), void (this.lastNeed -= e3.length));
  }
  function i2(e3, t3) {
    if ((e3.length - t3) % 2 == 0) {
      var r3 = e3.toString("utf16le", t3);
      if (r3) {
        var n3 = r3.charCodeAt(r3.length - 1);
        if (n3 >= 55296 && n3 <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e3[e3.length - 2], this.lastChar[1] = e3[e3.length - 1], r3.slice(0, -1);
      }
      return r3;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e3[e3.length - 1], e3.toString("utf16le", t3, e3.length - 1);
  }
  function s2(e3) {
    var t3 = e3 && e3.length ? this.write(e3) : "";
    if (this.lastNeed) {
      var r3 = this.lastTotal - this.lastNeed;
      return t3 + this.lastChar.toString("utf16le", 0, r3);
    }
    return t3;
  }
  function o2(e3, t3) {
    var r3 = (e3.length - t3) % 3;
    return 0 === r3 ? e3.toString("base64", t3) : (this.lastNeed = 3 - r3, this.lastTotal = 3, 1 === r3 ? this.lastChar[0] = e3[e3.length - 1] : (this.lastChar[0] = e3[e3.length - 2], this.lastChar[1] = e3[e3.length - 1]), e3.toString("base64", t3, e3.length - r3));
  }
  function l2(e3) {
    var t3 = e3 && e3.length ? this.write(e3) : "";
    return this.lastNeed ? t3 + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t3;
  }
  function c2(e3) {
    return e3.toString(this.encoding);
  }
  function h2(e3) {
    return e3 && e3.length ? this.write(e3) : "";
  }
  return G.StringDecoder = r2, r2.prototype.write = function(e3) {
    if (0 === e3.length)
      return "";
    var t3, r3;
    if (this.lastNeed) {
      if (void 0 === (t3 = this.fillLast(e3)))
        return "";
      r3 = this.lastNeed, this.lastNeed = 0;
    } else
      r3 = 0;
    return r3 < e3.length ? t3 ? t3 + this.text(e3, r3) : this.text(e3, r3) : t3 || "";
  }, r2.prototype.end = function(e3) {
    var t3 = e3 && e3.length ? this.write(e3) : "";
    return this.lastNeed ? t3 + "�" : t3;
  }, r2.prototype.text = function(e3, t3) {
    var r3 = function(e4, t4, r4) {
      var a4 = t4.length - 1;
      if (a4 < r4)
        return 0;
      var i3 = n2(t4[a4]);
      if (i3 >= 0)
        return i3 > 0 && (e4.lastNeed = i3 - 1), i3;
      if (--a4 < r4 || -2 === i3)
        return 0;
      if (i3 = n2(t4[a4]), i3 >= 0)
        return i3 > 0 && (e4.lastNeed = i3 - 2), i3;
      if (--a4 < r4 || -2 === i3)
        return 0;
      if (i3 = n2(t4[a4]), i3 >= 0)
        return i3 > 0 && (2 === i3 ? i3 = 0 : e4.lastNeed = i3 - 3), i3;
      return 0;
    }(this, e3, t3);
    if (!this.lastNeed)
      return e3.toString("utf8", t3);
    this.lastTotal = r3;
    var a3 = e3.length - (r3 - this.lastNeed);
    return e3.copy(this.lastChar, 0, a3), e3.toString("utf8", t3, a3);
  }, r2.prototype.fillLast = function(e3) {
    if (this.lastNeed <= e3.length)
      return e3.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    e3.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e3.length), this.lastNeed -= e3.length;
  }, G;
}
function Q() {
  if (Z)
    return W;
  Z = 1;
  var e2 = g();
  W = x2;
  var r2, i2 = function() {
    if (l)
      return o;
    l = 1;
    var e3 = {}.toString;
    return o = Array.isArray || function(t2) {
      return "[object Array]" == e3.call(t2);
    };
  }();
  x2.ReadableState = k2, import_events.default.EventEmitter;
  var s2 = function s3(e3, t2) {
    return e3.listeners(t2).length;
  }, c2 = b(), h2 = w().Buffer, u2 = (void 0 !== a ? a : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {
  };
  var d2 = Object.create(S());
  d2.inherits = A();
  var f2 = import_util.default, p2 = void 0;
  p2 = f2 && f2.debuglog ? f2.debuglog("stream") : function() {
  };
  var m2, y2 = L(), v2 = j();
  d2.inherits(x2, c2);
  var _2 = ["error", "close", "destroy", "pause", "resume"];
  function k2(e3, t2) {
    e3 = e3 || {};
    var n2 = t2 instanceof (r2 = r2 || $31());
    this.objectMode = !!e3.objectMode, n2 && (this.objectMode = this.objectMode || !!e3.readableObjectMode);
    var a2 = e3.highWaterMark, i3 = e3.readableHighWaterMark, s3 = this.objectMode ? 16 : 16384;
    this.highWaterMark = a2 || 0 === a2 ? a2 : n2 && (i3 || 0 === i3) ? i3 : s3, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new y2(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.destroyed = false, this.defaultEncoding = e3.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, e3.encoding && (m2 || (m2 = J().StringDecoder), this.decoder = new m2(e3.encoding), this.encoding = e3.encoding);
  }
  function x2(e3) {
    if (r2 = r2 || $31(), !(this instanceof x2))
      return new x2(e3);
    this._readableState = new k2(e3, this), this.readable = true, e3 && ("function" == typeof e3.read && (this._read = e3.read), "function" == typeof e3.destroy && (this._destroy = e3.destroy)), c2.call(this);
  }
  function C2(e3, t2, r3, n2, a2) {
    var i3, s3 = e3._readableState;
    null === t2 ? (s3.reading = false, function(e4, t3) {
      if (t3.ended)
        return;
      if (t3.decoder) {
        var r4 = t3.decoder.end();
        r4 && r4.length && (t3.buffer.push(r4), t3.length += t3.objectMode ? 1 : r4.length);
      }
      t3.ended = true, N2(e4);
    }(e3, s3)) : (a2 || (i3 = function(e4, t3) {
      var r4;
      n3 = t3, h2.isBuffer(n3) || n3 instanceof u2 || "string" == typeof t3 || void 0 === t3 || e4.objectMode || (r4 = new TypeError("Invalid non-string/buffer chunk"));
      var n3;
      return r4;
    }(s3, t2)), i3 ? e3.emit("error", i3) : s3.objectMode || t2 && t2.length > 0 ? ("string" == typeof t2 || s3.objectMode || Object.getPrototypeOf(t2) === h2.prototype || (t2 = function(e4) {
      return h2.from(e4);
    }(t2)), n2 ? s3.endEmitted ? e3.emit("error", new Error("stream.unshift() after end event")) : E2(e3, s3, t2, true) : s3.ended ? e3.emit("error", new Error("stream.push() after EOF")) : (s3.reading = false, s3.decoder && !r3 ? (t2 = s3.decoder.write(t2), s3.objectMode || 0 !== t2.length ? E2(e3, s3, t2, false) : B2(e3, s3)) : E2(e3, s3, t2, false))) : n2 || (s3.reading = false));
    return function(e4) {
      return !e4.ended && (e4.needReadable || e4.length < e4.highWaterMark || 0 === e4.length);
    }(s3);
  }
  function E2(e3, t2, r3, n2) {
    t2.flowing && 0 === t2.length && !t2.sync ? (e3.emit("data", r3), e3.read(0)) : (t2.length += t2.objectMode ? 1 : r3.length, n2 ? t2.buffer.unshift(r3) : t2.buffer.push(r3), t2.needReadable && N2(e3)), B2(e3, t2);
  }
  Object.defineProperty(x2.prototype, "destroyed", {
    get: function get() {
      return void 0 !== this._readableState && this._readableState.destroyed;
    },
    set: function set2(e3) {
      this._readableState && (this._readableState.destroyed = e3);
    }
  }), x2.prototype.destroy = v2.destroy, x2.prototype._undestroy = v2.undestroy, x2.prototype._destroy = function(e3, t2) {
    this.push(null), t2(e3);
  }, x2.prototype.push = function(e3, t2) {
    var r3, n2 = this._readableState;
    return n2.objectMode ? r3 = true : "string" == typeof e3 && ((t2 = t2 || n2.defaultEncoding) !== n2.encoding && (e3 = h2.from(e3, t2), t2 = ""), r3 = true), C2(this, e3, t2, false, r3);
  }, x2.prototype.unshift = function(e3) {
    return C2(this, e3, null, true, false);
  }, x2.prototype.isPaused = function() {
    return false === this._readableState.flowing;
  }, x2.prototype.setEncoding = function(e3) {
    return m2 || (m2 = J().StringDecoder), this._readableState.decoder = new m2(e3), this._readableState.encoding = e3, this;
  };
  var P2 = 8388608;
  function T2(e3, t2) {
    return e3 <= 0 || 0 === t2.length && t2.ended ? 0 : t2.objectMode ? 1 : e3 != e3 ? t2.flowing && t2.length ? t2.buffer.head.data.length : t2.length : (e3 > t2.highWaterMark && (t2.highWaterMark = function(e4) {
      return e4 >= P2 ? e4 = P2 : (e4--, e4 |= e4 >>> 1, e4 |= e4 >>> 2, e4 |= e4 >>> 4, e4 |= e4 >>> 8, e4 |= e4 >>> 16, e4++), e4;
    }(e3)), e3 <= t2.length ? e3 : t2.ended ? t2.length : (t2.needReadable = true, 0));
  }
  function N2(t2) {
    var r3 = t2._readableState;
    r3.needReadable = false, r3.emittedReadable || (p2("emitReadable", r3.flowing), r3.emittedReadable = true, r3.sync ? e2.nextTick(R2, t2) : R2(t2));
  }
  function R2(e3) {
    p2("emit readable"), e3.emit("readable"), I2(e3);
  }
  function B2(t2, r3) {
    r3.readingMore || (r3.readingMore = true, e2.nextTick(M2, t2, r3));
  }
  function M2(e3, t2) {
    for (var r3 = t2.length; !t2.reading && !t2.flowing && !t2.ended && t2.length < t2.highWaterMark && (p2("maybeReadMore read 0"), e3.read(0), r3 !== t2.length); )
      r3 = t2.length;
    t2.readingMore = false;
  }
  function D2(e3) {
    p2("readable nexttick read 0"), e3.read(0);
  }
  function O2(e3, t2) {
    t2.reading || (p2("resume read 0"), e3.read(0)), t2.resumeScheduled = false, t2.awaitDrain = 0, e3.emit("resume"), I2(e3), t2.flowing && !t2.reading && e3.read(0);
  }
  function I2(e3) {
    var t2 = e3._readableState;
    for (p2("flow", t2.flowing); t2.flowing && null !== e3.read(); )
      ;
  }
  function z2(e3, t2) {
    return 0 === t2.length ? null : (t2.objectMode ? r3 = t2.buffer.shift() : !e3 || e3 >= t2.length ? (r3 = t2.decoder ? t2.buffer.join("") : 1 === t2.buffer.length ? t2.buffer.head.data : t2.buffer.concat(t2.length), t2.buffer.clear()) : r3 = function(e4, t3, r4) {
      var n2;
      e4 < t3.head.data.length ? (n2 = t3.head.data.slice(0, e4), t3.head.data = t3.head.data.slice(e4)) : n2 = e4 === t3.head.data.length ? t3.shift() : r4 ? function(e5, t4) {
        var r5 = t4.head, n3 = 1, a2 = r5.data;
        e5 -= a2.length;
        for (; r5 = r5.next; ) {
          var i3 = r5.data, s3 = e5 > i3.length ? i3.length : e5;
          if (s3 === i3.length ? a2 += i3 : a2 += i3.slice(0, e5), 0 === (e5 -= s3)) {
            s3 === i3.length ? (++n3, r5.next ? t4.head = r5.next : t4.head = t4.tail = null) : (t4.head = r5, r5.data = i3.slice(s3));
            break;
          }
          ++n3;
        }
        return t4.length -= n3, a2;
      }(e4, t3) : function(e5, t4) {
        var r5 = h2.allocUnsafe(e5), n3 = t4.head, a2 = 1;
        n3.data.copy(r5), e5 -= n3.data.length;
        for (; n3 = n3.next; ) {
          var i3 = n3.data, s3 = e5 > i3.length ? i3.length : e5;
          if (i3.copy(r5, r5.length - e5, 0, s3), 0 === (e5 -= s3)) {
            s3 === i3.length ? (++a2, n3.next ? t4.head = n3.next : t4.head = t4.tail = null) : (t4.head = n3, n3.data = i3.slice(s3));
            break;
          }
          ++a2;
        }
        return t4.length -= a2, r5;
      }(e4, t3);
      return n2;
    }(e3, t2.buffer, t2.decoder), r3);
    var r3;
  }
  function F2(t2) {
    var r3 = t2._readableState;
    if (r3.length > 0)
      throw new Error('"endReadable()" called on non-empty stream');
    r3.endEmitted || (r3.ended = true, e2.nextTick(U2, r3, t2));
  }
  function U2(e3, t2) {
    e3.endEmitted || 0 !== e3.length || (e3.endEmitted = true, t2.readable = false, t2.emit("end"));
  }
  function H2(e3, t2) {
    for (var r3 = 0, n2 = e3.length; r3 < n2; r3++)
      if (e3[r3] === t2)
        return r3;
    return -1;
  }
  return x2.prototype.read = function(e3) {
    p2("read", e3), e3 = parseInt(e3, 10);
    var t2 = this._readableState, r3 = e3;
    if (0 !== e3 && (t2.emittedReadable = false), 0 === e3 && t2.needReadable && (t2.length >= t2.highWaterMark || t2.ended))
      return p2("read: emitReadable", t2.length, t2.ended), 0 === t2.length && t2.ended ? F2(this) : N2(this), null;
    if (0 === (e3 = T2(e3, t2)) && t2.ended)
      return 0 === t2.length && F2(this), null;
    var n2, a2 = t2.needReadable;
    return p2("need readable", a2), (0 === t2.length || t2.length - e3 < t2.highWaterMark) && p2("length less than watermark", a2 = true), t2.ended || t2.reading ? p2("reading or ended", a2 = false) : a2 && (p2("do read"), t2.reading = true, t2.sync = true, 0 === t2.length && (t2.needReadable = true), this._read(t2.highWaterMark), t2.sync = false, t2.reading || (e3 = T2(r3, t2))), null === (n2 = e3 > 0 ? z2(e3, t2) : null) ? (t2.needReadable = true, e3 = 0) : t2.length -= e3, 0 === t2.length && (t2.ended || (t2.needReadable = true), r3 !== e3 && t2.ended && F2(this)), null !== n2 && this.emit("data", n2), n2;
  }, x2.prototype._read = function(e3) {
    this.emit("error", new Error("_read() is not implemented"));
  }, x2.prototype.pipe = function(t2, r3) {
    var n2 = this, a2 = this._readableState;
    switch (a2.pipesCount) {
      case 0:
        a2.pipes = t2;
        break;
      case 1:
        a2.pipes = [a2.pipes, t2];
        break;
      default:
        a2.pipes.push(t2);
    }
    a2.pipesCount += 1, p2("pipe count=%d opts=%j", a2.pipesCount, r3);
    var o2 = (!r3 || false !== r3.end) && t2 !== process.stdout && t2 !== process.stderr ? c3 : y3;
    function l2(e3, r4) {
      p2("onunpipe"), e3 === n2 && r4 && false === r4.hasUnpiped && (r4.hasUnpiped = true, p2("cleanup"), t2.removeListener("close", g2), t2.removeListener("finish", b2), t2.removeListener("drain", h3), t2.removeListener("error", m3), t2.removeListener("unpipe", l2), n2.removeListener("end", c3), n2.removeListener("end", y3), n2.removeListener("data", f3), u3 = true, !a2.awaitDrain || t2._writableState && !t2._writableState.needDrain || h3());
    }
    function c3() {
      p2("onend"), t2.end();
    }
    a2.endEmitted ? e2.nextTick(o2) : n2.once("end", o2), t2.on("unpipe", l2);
    var h3 = /* @__PURE__ */ function(e3) {
      return function() {
        var t3 = e3._readableState;
        p2("pipeOnDrain", t3.awaitDrain), t3.awaitDrain && t3.awaitDrain--, 0 === t3.awaitDrain && s2(e3, "data") && (t3.flowing = true, I2(e3));
      };
    }(n2);
    t2.on("drain", h3);
    var u3 = false;
    var d3 = false;
    function f3(e3) {
      p2("ondata"), d3 = false, false !== t2.write(e3) || d3 || ((1 === a2.pipesCount && a2.pipes === t2 || a2.pipesCount > 1 && -1 !== H2(a2.pipes, t2)) && !u3 && (p2("false write response, pause", a2.awaitDrain), a2.awaitDrain++, d3 = true), n2.pause());
    }
    function m3(e3) {
      p2("onerror", e3), y3(), t2.removeListener("error", m3), 0 === s2(t2, "error") && t2.emit("error", e3);
    }
    function g2() {
      t2.removeListener("finish", b2), y3();
    }
    function b2() {
      p2("onfinish"), t2.removeListener("close", g2), y3();
    }
    function y3() {
      p2("unpipe"), n2.unpipe(t2);
    }
    return n2.on("data", f3), function(e3, t3, r4) {
      if ("function" == typeof e3.prependListener)
        return e3.prependListener(t3, r4);
      e3._events && e3._events[t3] ? i2(e3._events[t3]) ? e3._events[t3].unshift(r4) : e3._events[t3] = [r4, e3._events[t3]] : e3.on(t3, r4);
    }(t2, "error", m3), t2.once("close", g2), t2.once("finish", b2), t2.emit("pipe", n2), a2.flowing || (p2("pipe resume"), n2.resume()), t2;
  }, x2.prototype.unpipe = function(e3) {
    var t2 = this._readableState, r3 = {
      hasUnpiped: false
    };
    if (0 === t2.pipesCount)
      return this;
    if (1 === t2.pipesCount)
      return e3 && e3 !== t2.pipes || (e3 || (e3 = t2.pipes), t2.pipes = null, t2.pipesCount = 0, t2.flowing = false, e3 && e3.emit("unpipe", this, r3)), this;
    if (!e3) {
      var n2 = t2.pipes, a2 = t2.pipesCount;
      t2.pipes = null, t2.pipesCount = 0, t2.flowing = false;
      for (var i3 = 0; i3 < a2; i3++)
        n2[i3].emit("unpipe", this, {
          hasUnpiped: false
        });
      return this;
    }
    var s3 = H2(t2.pipes, e3);
    return -1 === s3 || (t2.pipes.splice(s3, 1), t2.pipesCount -= 1, 1 === t2.pipesCount && (t2.pipes = t2.pipes[0]), e3.emit("unpipe", this, r3)), this;
  }, x2.prototype.on = function(t2, r3) {
    var n2 = c2.prototype.on.call(this, t2, r3);
    if ("data" === t2)
      false !== this._readableState.flowing && this.resume();
    else if ("readable" === t2) {
      var a2 = this._readableState;
      a2.endEmitted || a2.readableListening || (a2.readableListening = a2.needReadable = true, a2.emittedReadable = false, a2.reading ? a2.length && N2(this) : e2.nextTick(D2, this));
    }
    return n2;
  }, x2.prototype.addListener = x2.prototype.on, x2.prototype.resume = function() {
    var t2 = this._readableState;
    return t2.flowing || (p2("resume"), t2.flowing = true, function(t3, r3) {
      r3.resumeScheduled || (r3.resumeScheduled = true, e2.nextTick(O2, t3, r3));
    }(this, t2)), this;
  }, x2.prototype.pause = function() {
    return p2("call pause flowing=%j", this._readableState.flowing), false !== this._readableState.flowing && (p2("pause"), this._readableState.flowing = false, this.emit("pause")), this;
  }, x2.prototype.wrap = function(e3) {
    var t2 = this, r3 = this._readableState, n2 = false;
    for (var a2 in e3.on("end", function() {
      if (p2("wrapped end"), r3.decoder && !r3.ended) {
        var e4 = r3.decoder.end();
        e4 && e4.length && t2.push(e4);
      }
      t2.push(null);
    }), e3.on("data", function(a3) {
      (p2("wrapped data"), r3.decoder && (a3 = r3.decoder.write(a3)), r3.objectMode && null == a3) || (r3.objectMode || a3 && a3.length) && (t2.push(a3) || (n2 = true, e3.pause()));
    }), e3)
      void 0 === this[a2] && "function" == typeof e3[a2] && (this[a2] = /* @__PURE__ */ function(t3) {
        return function() {
          return e3[t3].apply(e3, arguments);
        };
      }(a2));
    for (var i3 = 0; i3 < _2.length; i3++)
      e3.on(_2[i3], this.emit.bind(this, _2[i3]));
    return this._read = function(t3) {
      p2("wrapped _read", t3), n2 && (n2 = false, e3.resume());
    }, this;
  }, Object.defineProperty(x2.prototype, "readableHighWaterMark", {
    enumerable: false,
    get: function get() {
      return this._readableState.highWaterMark;
    }
  }), x2._fromList = z2, W;
}
function ee() {
  if (q)
    return V;
  q = 1, V = n2;
  var e2 = $31(), t2 = Object.create(S());
  function r2(e3, t3) {
    var r3 = this._transformState;
    r3.transforming = false;
    var n3 = r3.writecb;
    if (!n3)
      return this.emit("error", new Error("write callback called multiple times"));
    r3.writechunk = null, r3.writecb = null, null != t3 && this.push(t3), n3(e3);
    var a3 = this._readableState;
    a3.reading = false, (a3.needReadable || a3.length < a3.highWaterMark) && this._read(a3.highWaterMark);
  }
  function n2(t3) {
    if (!(this instanceof n2))
      return new n2(t3);
    e2.call(this, t3), this._transformState = {
      afterTransform: r2.bind(this),
      needTransform: false,
      transforming: false,
      writecb: null,
      writechunk: null,
      writeencoding: null
    }, this._readableState.needReadable = true, this._readableState.sync = false, t3 && ("function" == typeof t3.transform && (this._transform = t3.transform), "function" == typeof t3.flush && (this._flush = t3.flush)), this.on("prefinish", a2);
  }
  function a2() {
    var e3 = this;
    "function" == typeof this._flush ? this._flush(function(t3, r3) {
      i2(e3, t3, r3);
    }) : i2(this, null, null);
  }
  function i2(e3, t3, r3) {
    if (t3)
      return e3.emit("error", t3);
    if (null != r3 && e3.push(r3), e3._writableState.length)
      throw new Error("Calling transform done when ws.length != 0");
    if (e3._transformState.transforming)
      throw new Error("Calling transform done when still transforming");
    return e3.push(null);
  }
  return t2.inherits = A(), t2.inherits(n2, e2), n2.prototype.push = function(t3, r3) {
    return this._transformState.needTransform = false, e2.prototype.push.call(this, t3, r3);
  }, n2.prototype._transform = function(e3, t3, r3) {
    throw new Error("_transform() is not implemented");
  }, n2.prototype._write = function(e3, t3, r3) {
    var n3 = this._transformState;
    if (n3.writecb = r3, n3.writechunk = e3, n3.writeencoding = t3, !n3.transforming) {
      var a3 = this._readableState;
      (n3.needTransform || a3.needReadable || a3.length < a3.highWaterMark) && this._read(a3.highWaterMark);
    }
  }, n2.prototype._read = function(e3) {
    var t3 = this._transformState;
    null !== t3.writechunk && t3.writecb && !t3.transforming ? (t3.transforming = true, this._transform(t3.writechunk, t3.writeencoding, t3.afterTransform)) : t3.needTransform = true;
  }, n2.prototype._destroy = function(t3, r3) {
    var n3 = this;
    e2.prototype._destroy.call(this, t3, function(e3) {
      r3(e3), n3.emit("close");
    });
  }, V;
}
function te() {
  return Y || (Y = 1, t2 = p, r2 = p.exports, n2 = import_stream.default, "disable" === process.env.READABLE_STREAM && n2 ? (t2.exports = n2, (r2 = t2.exports = n2.Readable).Readable = n2.Readable, r2.Writable = n2.Writable, r2.Duplex = n2.Duplex, r2.Transform = n2.Transform, r2.PassThrough = n2.PassThrough, r2.Stream = n2) : ((r2 = t2.exports = Q()).Stream = n2 || r2, r2.Readable = r2, r2.Writable = U(), r2.Duplex = $31(), r2.Transform = ee(), r2.PassThrough = function() {
    if (K)
      return X;
    K = 1, X = r3;
    var e2 = ee(), t3 = Object.create(S());
    function r3(t4) {
      if (!(this instanceof r3))
        return new r3(t4);
      e2.call(this, t4);
    }
    return t3.inherits = A(), t3.inherits(r3, e2), r3.prototype._transform = function(e3, t4, r4) {
      r4(null, e3);
    }, X;
  }())), p.exports;
  var t2, r2, n2;
}
if (f.base64 = true, f.array = true, f.string = true, f.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, f.nodebuffer = "undefined" != typeof Buffer, f.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer)
  f.blob = false;
else {
  re = new ArrayBuffer(0);
  try {
    f.blob = 0 === new Blob([re], {
      type: "application/zip"
    }).size;
  } catch (e2) {
    try {
      ne = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
      ne.append(re), f.blob = 0 === ne.getBlob("application/zip").size;
    } catch (e3) {
      f.blob = false;
    }
  }
}
var re;
var ne;
try {
  f.nodestream = !!te().Readable;
} catch (e2) {
  f.nodestream = false;
}
var ae;
var ie = {};
function se() {
  if (ae)
    return ie;
  ae = 1;
  var e2 = me(), t2 = f, r2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  return ie.encode = function(t3) {
    for (var n2, a2, i2, s2, o2, l2, c2, h2 = [], u2 = 0, d2 = t3.length, f2 = d2, p2 = "string" !== e2.getTypeOf(t3); u2 < t3.length; )
      f2 = d2 - u2, p2 ? (n2 = t3[u2++], a2 = u2 < d2 ? t3[u2++] : 0, i2 = u2 < d2 ? t3[u2++] : 0) : (n2 = t3.charCodeAt(u2++), a2 = u2 < d2 ? t3.charCodeAt(u2++) : 0, i2 = u2 < d2 ? t3.charCodeAt(u2++) : 0), s2 = n2 >> 2, o2 = (3 & n2) << 4 | a2 >> 4, l2 = f2 > 1 ? (15 & a2) << 2 | i2 >> 6 : 64, c2 = f2 > 2 ? 63 & i2 : 64, h2.push(r2.charAt(s2) + r2.charAt(o2) + r2.charAt(l2) + r2.charAt(c2));
    return h2.join("");
  }, ie.decode = function(e3) {
    var n2, a2, i2, s2, o2, l2, c2 = 0, h2 = 0, u2 = "data:";
    if (e3.substr(0, 5) === u2)
      throw new Error("Invalid base64 input, it looks like a data url.");
    var d2, f2 = 3 * (e3 = e3.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
    if (e3.charAt(e3.length - 1) === r2.charAt(64) && f2--, e3.charAt(e3.length - 2) === r2.charAt(64) && f2--, f2 % 1 != 0)
      throw new Error("Invalid base64 input, bad content length.");
    for (d2 = t2.uint8array ? new Uint8Array(0 | f2) : new Array(0 | f2); c2 < e3.length; )
      n2 = r2.indexOf(e3.charAt(c2++)) << 2 | (s2 = r2.indexOf(e3.charAt(c2++))) >> 4, a2 = (15 & s2) << 4 | (o2 = r2.indexOf(e3.charAt(c2++))) >> 2, i2 = (3 & o2) << 6 | (l2 = r2.indexOf(e3.charAt(c2++))), d2[h2++] = n2, 64 !== o2 && (d2[h2++] = a2), 64 !== l2 && (d2[h2++] = i2);
    return d2;
  }, ie;
}
var oe;
var le;
var ce;
var he;
var ue = {
  isNode: "undefined" != typeof Buffer,
  newBufferFrom: function newBufferFrom(e2, t2) {
    if (Buffer.from && Buffer.from !== Uint8Array.from)
      return Buffer.from(e2, t2);
    if ("number" == typeof e2)
      throw new Error('The "data" argument must not be a number');
    return new Buffer(e2, t2);
  },
  allocBuffer: function allocBuffer(e2) {
    if (Buffer.alloc)
      return Buffer.alloc(e2);
    var t2 = new Buffer(e2);
    return t2.fill(0), t2;
  },
  isBuffer: function isBuffer(e2) {
    return Buffer.isBuffer(e2);
  },
  isStream: function isStream(e2) {
    return e2 && "function" == typeof e2.on && "function" == typeof e2.pause && "function" == typeof e2.resume;
  }
};
var de = null;
de = "undefined" != typeof Promise ? Promise : function() {
  if (he)
    return ce;
  he = 1;
  var e2 = function() {
    if (le)
      return oe;
    le = 1;
    var e3, t3, r3 = a.MutationObserver || a.WebKitMutationObserver;
    if (process.browser) {
      if (r3) {
        var n3 = 0, i3 = new r3(c3), s3 = a.document.createTextNode("");
        i3.observe(s3, {
          characterData: true
        }), e3 = function e4() {
          s3.data = n3 = ++n3 % 2;
        };
      } else if (a.setImmediate || void 0 === a.MessageChannel)
        e3 = "document" in a && "onreadystatechange" in a.document.createElement("script") ? function() {
          var e4 = a.document.createElement("script");
          e4.onreadystatechange = function() {
            c3(), e4.onreadystatechange = null, e4.parentNode.removeChild(e4), e4 = null;
          }, a.document.documentElement.appendChild(e4);
        } : function() {
          setTimeout(c3, 0);
        };
      else {
        var o3 = new a.MessageChannel();
        o3.port1.onmessage = c3, e3 = function e4() {
          o3.port2.postMessage(0);
        };
      }
    } else
      e3 = function e4() {
        process.nextTick(c3);
      };
    var l3 = [];
    function c3() {
      var e4, r4;
      t3 = true;
      for (var n4 = l3.length; n4; ) {
        for (r4 = l3, l3 = [], e4 = -1; ++e4 < n4; )
          r4[e4]();
        n4 = l3.length;
      }
      t3 = false;
    }
    return oe = function oe2(r4) {
      1 !== l3.push(r4) || t3 || e3();
    };
  }();
  function t2() {
  }
  var r2 = {}, n2 = ["REJECTED"], i2 = ["FULFILLED"], s2 = ["PENDING"];
  if (!process.browser)
    var o2 = ["UNHANDLED"];
  function l2(e3) {
    if ("function" != typeof e3)
      throw new TypeError("resolver must be a function");
    this.state = s2, this.queue = [], this.outcome = void 0, process.browser || (this.handled = o2), e3 !== t2 && d2(this, e3);
  }
  function c2(e3, t3, r3) {
    this.promise = e3, "function" == typeof t3 && (this.onFulfilled = t3, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r3 && (this.onRejected = r3, this.callRejected = this.otherCallRejected);
  }
  function h2(t3, n3, a2) {
    e2(function() {
      var e3;
      try {
        e3 = n3(a2);
      } catch (e4) {
        return r2.reject(t3, e4);
      }
      e3 === t3 ? r2.reject(t3, new TypeError("Cannot resolve promise with itself")) : r2.resolve(t3, e3);
    });
  }
  function u2(e3) {
    var t3 = e3 && e3.then;
    if (e3 && ("object" == _typeof(e3) || "function" == typeof e3) && "function" == typeof t3)
      return function() {
        t3.apply(e3, arguments);
      };
  }
  function d2(e3, t3) {
    var n3 = false;
    function a2(t4) {
      n3 || (n3 = true, r2.reject(e3, t4));
    }
    function i3(t4) {
      n3 || (n3 = true, r2.resolve(e3, t4));
    }
    var s3 = f2(function() {
      t3(i3, a2);
    });
    "error" === s3.status && a2(s3.value);
  }
  function f2(e3, t3) {
    var r3 = {};
    try {
      r3.value = e3(t3), r3.status = "success";
    } catch (e4) {
      r3.status = "error", r3.value = e4;
    }
    return r3;
  }
  return ce = l2, l2.prototype.finally = function(e3) {
    if ("function" != typeof e3)
      return this;
    var t3 = this.constructor;
    return this.then(function(r3) {
      return t3.resolve(e3()).then(function() {
        return r3;
      });
    }, function(r3) {
      return t3.resolve(e3()).then(function() {
        throw r3;
      });
    });
  }, l2.prototype.catch = function(e3) {
    return this.then(null, e3);
  }, l2.prototype.then = function(e3, r3) {
    if ("function" != typeof e3 && this.state === i2 || "function" != typeof r3 && this.state === n2)
      return this;
    var a2 = new this.constructor(t2);
    return process.browser || this.handled === o2 && (this.handled = null), this.state !== s2 ? h2(a2, this.state === i2 ? e3 : r3, this.outcome) : this.queue.push(new c2(a2, e3, r3)), a2;
  }, c2.prototype.callFulfilled = function(e3) {
    r2.resolve(this.promise, e3);
  }, c2.prototype.otherCallFulfilled = function(e3) {
    h2(this.promise, this.onFulfilled, e3);
  }, c2.prototype.callRejected = function(e3) {
    r2.reject(this.promise, e3);
  }, c2.prototype.otherCallRejected = function(e3) {
    h2(this.promise, this.onRejected, e3);
  }, r2.resolve = function(e3, t3) {
    var n3 = f2(u2, t3);
    if ("error" === n3.status)
      return r2.reject(e3, n3.value);
    var a2 = n3.value;
    if (a2)
      d2(e3, a2);
    else {
      e3.state = i2, e3.outcome = t3;
      for (var s3 = -1, o3 = e3.queue.length; ++s3 < o3; )
        e3.queue[s3].callFulfilled(t3);
    }
    return e3;
  }, r2.reject = function(t3, r3) {
    t3.state = n2, t3.outcome = r3, process.browser || t3.handled === o2 && e2(function() {
      t3.handled === o2 && process.emit("unhandledRejection", r3, t3);
    });
    for (var a2 = -1, i3 = t3.queue.length; ++a2 < i3; )
      t3.queue[a2].callRejected(r3);
    return t3;
  }, l2.resolve = function(e3) {
    return e3 instanceof this ? e3 : r2.resolve(new this(t2), e3);
  }, l2.reject = function(e3) {
    var n3 = new this(t2);
    return r2.reject(n3, e3);
  }, l2.all = function(e3) {
    var n3 = this;
    if ("[object Array]" !== Object.prototype.toString.call(e3))
      return this.reject(new TypeError("must be an array"));
    var a2 = e3.length, i3 = false;
    if (!a2)
      return this.resolve([]);
    for (var s3 = new Array(a2), o3 = 0, l3 = -1, c3 = new this(t2); ++l3 < a2; )
      h3(e3[l3], l3);
    return c3;
    function h3(e4, t3) {
      n3.resolve(e4).then(function(e5) {
        s3[t3] = e5, ++o3 !== a2 || i3 || (i3 = true, r2.resolve(c3, s3));
      }, function(e5) {
        i3 || (i3 = true, r2.reject(c3, e5));
      });
    }
  }, l2.race = function(e3) {
    var n3 = this;
    if ("[object Array]" !== Object.prototype.toString.call(e3))
      return this.reject(new TypeError("must be an array"));
    var a2 = e3.length, i3 = false;
    if (!a2)
      return this.resolve([]);
    for (var s3, o3 = -1, l3 = new this(t2); ++o3 < a2; )
      s3 = e3[o3], n3.resolve(s3).then(function(e4) {
        i3 || (i3 = true, r2.resolve(l3, e4));
      }, function(e4) {
        i3 || (i3 = true, r2.reject(l3, e4));
      });
    return l3;
  }, ce;
}();
var fe;
var pe = {
  Promise: de
};
function me() {
  return fe || (fe = 1, function(e2) {
    var t2 = f, r2 = se(), n2 = ue, a2 = pe;
    function i2(e3) {
      return e3;
    }
    function s2(e3, t3) {
      for (var r3 = 0; r3 < e3.length; ++r3)
        t3[r3] = 255 & e3.charCodeAt(r3);
      return t3;
    }
    e2.newBlob = function(t3, r3) {
      e2.checkSupport("blob");
      try {
        return new Blob([t3], {
          type: r3
        });
      } catch (e3) {
        try {
          var n3 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
          return n3.append(t3), n3.getBlob(r3);
        } catch (e4) {
          throw new Error("Bug : can't construct the Blob.");
        }
      }
    };
    var o2 = {
      stringifyByChunk: function stringifyByChunk(e3, t3, r3) {
        var n3 = [], a3 = 0, i3 = e3.length;
        if (i3 <= r3)
          return String.fromCharCode.apply(null, e3);
        for (; a3 < i3; )
          "array" === t3 || "nodebuffer" === t3 ? n3.push(String.fromCharCode.apply(null, e3.slice(a3, Math.min(a3 + r3, i3)))) : n3.push(String.fromCharCode.apply(null, e3.subarray(a3, Math.min(a3 + r3, i3)))), a3 += r3;
        return n3.join("");
      },
      stringifyByChar: function stringifyByChar(e3) {
        for (var t3 = "", r3 = 0; r3 < e3.length; r3++)
          t3 += String.fromCharCode(e3[r3]);
        return t3;
      },
      applyCanBeUsed: {
        uint8array: function() {
          try {
            return t2.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
          } catch (e3) {
            return false;
          }
        }(),
        nodebuffer: function() {
          try {
            return t2.nodebuffer && 1 === String.fromCharCode.apply(null, n2.allocBuffer(1)).length;
          } catch (e3) {
            return false;
          }
        }()
      }
    };
    function l2(t3) {
      var r3 = 65536, n3 = e2.getTypeOf(t3), a3 = true;
      if ("uint8array" === n3 ? a3 = o2.applyCanBeUsed.uint8array : "nodebuffer" === n3 && (a3 = o2.applyCanBeUsed.nodebuffer), a3)
        for (; r3 > 1; )
          try {
            return o2.stringifyByChunk(t3, n3, r3);
          } catch (e3) {
            r3 = Math.floor(r3 / 2);
          }
      return o2.stringifyByChar(t3);
    }
    function c2(e3, t3) {
      for (var r3 = 0; r3 < e3.length; r3++)
        t3[r3] = e3[r3];
      return t3;
    }
    e2.applyFromCharCode = l2;
    var h2 = {};
    h2.string = {
      string: i2,
      array: function array(e3) {
        return s2(e3, new Array(e3.length));
      },
      arraybuffer: function arraybuffer(e3) {
        return h2.string.uint8array(e3).buffer;
      },
      uint8array: function uint8array(e3) {
        return s2(e3, new Uint8Array(e3.length));
      },
      nodebuffer: function nodebuffer(e3) {
        return s2(e3, n2.allocBuffer(e3.length));
      }
    }, h2.array = {
      string: l2,
      array: i2,
      arraybuffer: function arraybuffer(e3) {
        return new Uint8Array(e3).buffer;
      },
      uint8array: function uint8array(e3) {
        return new Uint8Array(e3);
      },
      nodebuffer: function nodebuffer(e3) {
        return n2.newBufferFrom(e3);
      }
    }, h2.arraybuffer = {
      string: function string(e3) {
        return l2(new Uint8Array(e3));
      },
      array: function array(e3) {
        return c2(new Uint8Array(e3), new Array(e3.byteLength));
      },
      arraybuffer: i2,
      uint8array: function uint8array(e3) {
        return new Uint8Array(e3);
      },
      nodebuffer: function nodebuffer(e3) {
        return n2.newBufferFrom(new Uint8Array(e3));
      }
    }, h2.uint8array = {
      string: l2,
      array: function array(e3) {
        return c2(e3, new Array(e3.length));
      },
      arraybuffer: function arraybuffer(e3) {
        return e3.buffer;
      },
      uint8array: i2,
      nodebuffer: function nodebuffer(e3) {
        return n2.newBufferFrom(e3);
      }
    }, h2.nodebuffer = {
      string: l2,
      array: function array(e3) {
        return c2(e3, new Array(e3.length));
      },
      arraybuffer: function arraybuffer(e3) {
        return h2.nodebuffer.uint8array(e3).buffer;
      },
      uint8array: function uint8array(e3) {
        return c2(e3, new Uint8Array(e3.length));
      },
      nodebuffer: i2
    }, e2.transformTo = function(t3, r3) {
      if (r3 || (r3 = ""), !t3)
        return r3;
      e2.checkSupport(t3);
      var n3 = e2.getTypeOf(r3);
      return h2[n3][t3](r3);
    }, e2.resolve = function(e3) {
      for (var t3 = e3.split("/"), r3 = [], n3 = 0; n3 < t3.length; n3++) {
        var a3 = t3[n3];
        "." === a3 || "" === a3 && 0 !== n3 && n3 !== t3.length - 1 || (".." === a3 ? r3.pop() : r3.push(a3));
      }
      return r3.join("/");
    }, e2.getTypeOf = function(e3) {
      return "string" == typeof e3 ? "string" : "[object Array]" === Object.prototype.toString.call(e3) ? "array" : t2.nodebuffer && n2.isBuffer(e3) ? "nodebuffer" : t2.uint8array && e3 instanceof Uint8Array ? "uint8array" : t2.arraybuffer && e3 instanceof ArrayBuffer ? "arraybuffer" : void 0;
    }, e2.checkSupport = function(e3) {
      if (!t2[e3.toLowerCase()])
        throw new Error(e3 + " is not supported by this platform");
    }, e2.MAX_VALUE_16BITS = 65535, e2.MAX_VALUE_32BITS = -1, e2.pretty = function(e3) {
      var t3, r3, n3 = "";
      for (r3 = 0; r3 < (e3 || "").length; r3++)
        n3 += "\\x" + ((t3 = e3.charCodeAt(r3)) < 16 ? "0" : "") + t3.toString(16).toUpperCase();
      return n3;
    }, e2.delay = function(e3, t3, r3) {
      setImmediate(function() {
        e3.apply(r3 || null, t3 || []);
      });
    }, e2.inherits = function(e3, t3) {
      var r3 = function r4() {
      };
      r3.prototype = t3.prototype, e3.prototype = new r3();
    }, e2.extend = function() {
      var e3, t3, r3 = {};
      for (e3 = 0; e3 < arguments.length; e3++)
        for (t3 in arguments[e3])
          Object.prototype.hasOwnProperty.call(arguments[e3], t3) && void 0 === r3[t3] && (r3[t3] = arguments[e3][t3]);
      return r3;
    }, e2.prepareContent = function(n3, i3, o3, l3, c3) {
      return a2.Promise.resolve(i3).then(function(e3) {
        return t2.blob && (e3 instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(e3))) && "undefined" != typeof FileReader ? new a2.Promise(function(t3, r3) {
          var n4 = new FileReader();
          n4.onload = function(e4) {
            t3(e4.target.result);
          }, n4.onerror = function(e4) {
            r3(e4.target.error);
          }, n4.readAsArrayBuffer(e3);
        }) : e3;
      }).then(function(i4) {
        var h3, u2 = e2.getTypeOf(i4);
        return u2 ? ("arraybuffer" === u2 ? i4 = e2.transformTo("uint8array", i4) : "string" === u2 && (c3 ? i4 = r2.decode(i4) : o3 && true !== l3 && (i4 = s2(h3 = i4, t2.uint8array ? new Uint8Array(h3.length) : new Array(h3.length)))), i4) : a2.Promise.reject(new Error("Can't read the data of '" + n3 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
      });
    };
  }(d)), d;
}
function ge(e2) {
  this.name = e2 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = {
    data: [],
    end: [],
    error: []
  }, this.previous = null;
}
!function(e2) {
  if (!e2.setImmediate) {
    var t2, r2, n2, a2, i2, s2 = 1, o2 = {}, l2 = false, c2 = e2.document, h2 = Object.getPrototypeOf && Object.getPrototypeOf(e2);
    h2 = h2 && h2.setTimeout ? h2 : e2, "[object process]" === {}.toString.call(e2.process) ? t2 = function t3(e3) {
      process.nextTick(function() {
        d2(e3);
      });
    } : !function() {
      if (e2.postMessage && !e2.importScripts) {
        var t3 = true, r3 = e2.onmessage;
        return e2.onmessage = function() {
          t3 = false;
        }, e2.postMessage("", "*"), e2.onmessage = r3, t3;
      }
    }() ? e2.MessageChannel ? ((n2 = new MessageChannel()).port1.onmessage = function(e3) {
      d2(e3.data);
    }, t2 = function t3(e3) {
      n2.port2.postMessage(e3);
    }) : c2 && "onreadystatechange" in c2.createElement("script") ? (r2 = c2.documentElement, t2 = function t3(e3) {
      var t4 = c2.createElement("script");
      t4.onreadystatechange = function() {
        d2(e3), t4.onreadystatechange = null, r2.removeChild(t4), t4 = null;
      }, r2.appendChild(t4);
    }) : t2 = function t3(e3) {
      setTimeout(d2, 0, e3);
    } : (a2 = "setImmediate$" + Math.random() + "$", i2 = function i3(t3) {
      t3.source === e2 && "string" == typeof t3.data && 0 === t3.data.indexOf(a2) && d2(+t3.data.slice(a2.length));
    }, e2.addEventListener ? e2.addEventListener("message", i2, false) : e2.attachEvent("onmessage", i2), t2 = function t3(_t2) {
      e2.postMessage(a2 + _t2, "*");
    }), h2.setImmediate = function(e3) {
      "function" != typeof e3 && (e3 = new Function("" + e3));
      for (var r3 = new Array(arguments.length - 1), n3 = 0; n3 < r3.length; n3++)
        r3[n3] = arguments[n3 + 1];
      var a3 = {
        callback: e3,
        args: r3
      };
      return o2[s2] = a3, t2(s2), s2++;
    }, h2.clearImmediate = u2;
  }
  function u2(e3) {
    delete o2[e3];
  }
  function d2(e3) {
    if (l2)
      setTimeout(d2, 0, e3);
    else {
      var t3 = o2[e3];
      if (t3) {
        l2 = true;
        try {
          !function(e4) {
            var t4 = e4.callback, r3 = e4.args;
            switch (r3.length) {
              case 0:
                t4();
                break;
              case 1:
                t4(r3[0]);
                break;
              case 2:
                t4(r3[0], r3[1]);
                break;
              case 3:
                t4(r3[0], r3[1], r3[2]);
                break;
              default:
                t4.apply(void 0, r3);
            }
          }(t3);
        } finally {
          u2(e3), l2 = false;
        }
      }
    }
  }
}("undefined" == typeof self ? a : self), ge.prototype = {
  push: function push4(e2) {
    this.emit("data", e2);
  },
  end: function end() {
    if (this.isFinished)
      return false;
    this.flush();
    try {
      this.emit("end"), this.cleanUp(), this.isFinished = true;
    } catch (e2) {
      this.emit("error", e2);
    }
    return true;
  },
  error: function error(e2) {
    return !this.isFinished && (this.isPaused ? this.generatedError = e2 : (this.isFinished = true, this.emit("error", e2), this.previous && this.previous.error(e2), this.cleanUp()), true);
  },
  on: function on(e2, t2) {
    return this._listeners[e2].push(t2), this;
  },
  cleanUp: function cleanUp() {
    this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
  },
  emit: function emit(e2, t2) {
    if (this._listeners[e2])
      for (var r2 = 0; r2 < this._listeners[e2].length; r2++)
        this._listeners[e2][r2].call(this, t2);
  },
  pipe: function pipe(e2) {
    return e2.registerPrevious(this);
  },
  registerPrevious: function registerPrevious(e2) {
    if (this.isLocked)
      throw new Error("The stream '" + this + "' has already been used.");
    this.streamInfo = e2.streamInfo, this.mergeStreamInfo(), this.previous = e2;
    var t2 = this;
    return e2.on("data", function(e3) {
      t2.processChunk(e3);
    }), e2.on("end", function() {
      t2.end();
    }), e2.on("error", function(e3) {
      t2.error(e3);
    }), this;
  },
  pause: function pause() {
    return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
  },
  resume: function resume() {
    if (!this.isPaused || this.isFinished)
      return false;
    this.isPaused = false;
    var e2 = false;
    return this.generatedError && (this.error(this.generatedError), e2 = true), this.previous && this.previous.resume(), !e2;
  },
  flush: function flush() {
  },
  processChunk: function processChunk(e2) {
    this.push(e2);
  },
  withStreamInfo: function withStreamInfo(e2, t2) {
    return this.extraStreamInfo[e2] = t2, this.mergeStreamInfo(), this;
  },
  mergeStreamInfo: function mergeStreamInfo() {
    for (var e2 in this.extraStreamInfo)
      Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e2) && (this.streamInfo[e2] = this.extraStreamInfo[e2]);
  },
  lock: function lock() {
    if (this.isLocked)
      throw new Error("The stream '" + this + "' has already been used.");
    this.isLocked = true, this.previous && this.previous.lock();
  },
  toString: function toString7() {
    var e2 = "Worker " + this.name;
    return this.previous ? this.previous + " -> " + e2 : e2;
  }
};
var be = ge;
!function(e2) {
  for (var t2 = me(), r2 = f, n2 = ue, a2 = be, i2 = new Array(256), s2 = 0; s2 < 256; s2++)
    i2[s2] = s2 >= 252 ? 6 : s2 >= 248 ? 5 : s2 >= 240 ? 4 : s2 >= 224 ? 3 : s2 >= 192 ? 2 : 1;
  i2[254] = i2[254] = 1;
  function o2() {
    a2.call(this, "utf-8 decode"), this.leftOver = null;
  }
  function l2() {
    a2.call(this, "utf-8 encode");
  }
  e2.utf8encode = function(e3) {
    return r2.nodebuffer ? n2.newBufferFrom(e3, "utf-8") : function(e4) {
      var t3, n3, a3, i3, s3, o3 = e4.length, l3 = 0;
      for (i3 = 0; i3 < o3; i3++)
        55296 == (64512 & (n3 = e4.charCodeAt(i3))) && i3 + 1 < o3 && 56320 == (64512 & (a3 = e4.charCodeAt(i3 + 1))) && (n3 = 65536 + (n3 - 55296 << 10) + (a3 - 56320), i3++), l3 += n3 < 128 ? 1 : n3 < 2048 ? 2 : n3 < 65536 ? 3 : 4;
      for (t3 = r2.uint8array ? new Uint8Array(l3) : new Array(l3), s3 = 0, i3 = 0; s3 < l3; i3++)
        55296 == (64512 & (n3 = e4.charCodeAt(i3))) && i3 + 1 < o3 && 56320 == (64512 & (a3 = e4.charCodeAt(i3 + 1))) && (n3 = 65536 + (n3 - 55296 << 10) + (a3 - 56320), i3++), n3 < 128 ? t3[s3++] = n3 : n3 < 2048 ? (t3[s3++] = 192 | n3 >>> 6, t3[s3++] = 128 | 63 & n3) : n3 < 65536 ? (t3[s3++] = 224 | n3 >>> 12, t3[s3++] = 128 | n3 >>> 6 & 63, t3[s3++] = 128 | 63 & n3) : (t3[s3++] = 240 | n3 >>> 18, t3[s3++] = 128 | n3 >>> 12 & 63, t3[s3++] = 128 | n3 >>> 6 & 63, t3[s3++] = 128 | 63 & n3);
      return t3;
    }(e3);
  }, e2.utf8decode = function(e3) {
    return r2.nodebuffer ? t2.transformTo("nodebuffer", e3).toString("utf-8") : function(e4) {
      var r3, n3, a3, s3, o3 = e4.length, l3 = new Array(2 * o3);
      for (n3 = 0, r3 = 0; r3 < o3; )
        if ((a3 = e4[r3++]) < 128)
          l3[n3++] = a3;
        else if ((s3 = i2[a3]) > 4)
          l3[n3++] = 65533, r3 += s3 - 1;
        else {
          for (a3 &= 2 === s3 ? 31 : 3 === s3 ? 15 : 7; s3 > 1 && r3 < o3; )
            a3 = a3 << 6 | 63 & e4[r3++], s3--;
          s3 > 1 ? l3[n3++] = 65533 : a3 < 65536 ? l3[n3++] = a3 : (a3 -= 65536, l3[n3++] = 55296 | a3 >> 10 & 1023, l3[n3++] = 56320 | 1023 & a3);
        }
      return l3.length !== n3 && (l3.subarray ? l3 = l3.subarray(0, n3) : l3.length = n3), t2.applyFromCharCode(l3);
    }(e3 = t2.transformTo(r2.uint8array ? "uint8array" : "array", e3));
  }, t2.inherits(o2, a2), o2.prototype.processChunk = function(n3) {
    var a3 = t2.transformTo(r2.uint8array ? "uint8array" : "array", n3.data);
    if (this.leftOver && this.leftOver.length) {
      if (r2.uint8array) {
        var s3 = a3;
        (a3 = new Uint8Array(s3.length + this.leftOver.length)).set(this.leftOver, 0), a3.set(s3, this.leftOver.length);
      } else
        a3 = this.leftOver.concat(a3);
      this.leftOver = null;
    }
    var o3 = function(e3, t3) {
      var r3;
      for ((t3 = t3 || e3.length) > e3.length && (t3 = e3.length), r3 = t3 - 1; r3 >= 0 && 128 == (192 & e3[r3]); )
        r3--;
      return r3 < 0 || 0 === r3 ? t3 : r3 + i2[e3[r3]] > t3 ? r3 : t3;
    }(a3), l3 = a3;
    o3 !== a3.length && (r2.uint8array ? (l3 = a3.subarray(0, o3), this.leftOver = a3.subarray(o3, a3.length)) : (l3 = a3.slice(0, o3), this.leftOver = a3.slice(o3, a3.length))), this.push({
      data: e2.utf8decode(l3),
      meta: n3.meta
    });
  }, o2.prototype.flush = function() {
    this.leftOver && this.leftOver.length && (this.push({
      data: e2.utf8decode(this.leftOver),
      meta: {}
    }), this.leftOver = null);
  }, e2.Utf8DecodeWorker = o2, t2.inherits(l2, a2), l2.prototype.processChunk = function(t3) {
    this.push({
      data: e2.utf8encode(t3.data),
      meta: t3.meta
    });
  }, e2.Utf8EncodeWorker = l2;
}(u);
var ye = be;
var ve = me();
function we(e2) {
  ye.call(this, "ConvertWorker to " + e2), this.destType = e2;
}
ve.inherits(we, ye), we.prototype.processChunk = function(e2) {
  this.push({
    data: ve.transformTo(this.destType, e2.data),
    meta: e2.meta
  });
};
var _e;
var ke;
var Se = we;
var xe = me();
var Ce = Se;
var Ee = be;
var Pe = se();
var Ae = pe;
var Te = null;
if (f.nodestream)
  try {
    Te = function() {
      if (ke)
        return _e;
      ke = 1;
      var e2 = te().Readable;
      function t2(t3, r2, n2) {
        e2.call(this, r2), this._helper = t3;
        var a2 = this;
        t3.on("data", function(e3, t4) {
          a2.push(e3) || a2._helper.pause(), n2 && n2(t4);
        }).on("error", function(e3) {
          a2.emit("error", e3);
        }).on("end", function() {
          a2.push(null);
        });
      }
      return me().inherits(t2, e2), t2.prototype._read = function() {
        this._helper.resume();
      }, _e = t2;
    }();
  } catch (e2) {
  }
function Ne(e2, t2) {
  return new Ae.Promise(function(r2, n2) {
    var a2 = [], i2 = e2._internalType, s2 = e2._outputType, o2 = e2._mimeType;
    e2.on("data", function(e3, r3) {
      a2.push(e3), t2 && t2(r3);
    }).on("error", function(e3) {
      a2 = [], n2(e3);
    }).on("end", function() {
      try {
        var e3 = function(e4, t3, r3) {
          switch (e4) {
            case "blob":
              return xe.newBlob(xe.transformTo("arraybuffer", t3), r3);
            case "base64":
              return Pe.encode(t3);
            default:
              return xe.transformTo(e4, t3);
          }
        }(s2, function(e4, t3) {
          var r3, n3 = 0, a3 = null, i3 = 0;
          for (r3 = 0; r3 < t3.length; r3++)
            i3 += t3[r3].length;
          switch (e4) {
            case "string":
              return t3.join("");
            case "array":
              return Array.prototype.concat.apply([], t3);
            case "uint8array":
              for (a3 = new Uint8Array(i3), r3 = 0; r3 < t3.length; r3++)
                a3.set(t3[r3], n3), n3 += t3[r3].length;
              return a3;
            case "nodebuffer":
              return Buffer.concat(t3);
            default:
              throw new Error("concat : unsupported type '" + e4 + "'");
          }
        }(i2, a2), o2);
        r2(e3);
      } catch (e4) {
        n2(e4);
      }
      a2 = [];
    }).resume();
  });
}
function Re(e2, t2, r2) {
  var n2 = t2;
  switch (t2) {
    case "blob":
    case "arraybuffer":
      n2 = "uint8array";
      break;
    case "base64":
      n2 = "string";
  }
  try {
    this._internalType = n2, this._outputType = t2, this._mimeType = r2, xe.checkSupport(n2), this._worker = e2.pipe(new Ce(n2)), e2.lock();
  } catch (e3) {
    this._worker = new Ee("error"), this._worker.error(e3);
  }
}
Re.prototype = {
  accumulate: function accumulate(e2) {
    return Ne(this, e2);
  },
  on: function on2(e2, t2) {
    var r2 = this;
    return "data" === e2 ? this._worker.on(e2, function(e3) {
      t2.call(r2, e3.data, e3.meta);
    }) : this._worker.on(e2, function() {
      xe.delay(t2, arguments, r2);
    }), this;
  },
  resume: function resume2() {
    return xe.delay(this._worker.resume, [], this._worker), this;
  },
  pause: function pause2() {
    return this._worker.pause(), this;
  },
  toNodejsStream: function toNodejsStream(e2) {
    if (xe.checkSupport("nodestream"), "nodebuffer" !== this._outputType)
      throw new Error(this._outputType + " is not supported by this method");
    return new Te(this, {
      objectMode: "nodebuffer" !== this._outputType
    }, e2);
  }
};
var Be = Re;
var Me = {
  base64: false,
  binary: false,
  dir: false,
  createFolders: true,
  date: null,
  compression: null,
  compressionOptions: null,
  comment: null,
  unixPermissions: null,
  dosPermissions: null
};
var De = me();
var Oe = be;
function Ie(e2) {
  Oe.call(this, "DataWorker");
  var t2 = this;
  this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, e2.then(function(e3) {
    t2.dataIsReady = true, t2.data = e3, t2.max = e3 && e3.length || 0, t2.type = De.getTypeOf(e3), t2.isPaused || t2._tickAndRepeat();
  }, function(e3) {
    t2.error(e3);
  });
}
De.inherits(Ie, Oe), Ie.prototype.cleanUp = function() {
  Oe.prototype.cleanUp.call(this), this.data = null;
}, Ie.prototype.resume = function() {
  return !!Oe.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, De.delay(this._tickAndRepeat, [], this)), true);
}, Ie.prototype._tickAndRepeat = function() {
  this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (De.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
}, Ie.prototype._tick = function() {
  if (this.isPaused || this.isFinished)
    return false;
  var e2 = null, t2 = Math.min(this.max, this.index + 16384);
  if (this.index >= this.max)
    return this.end();
  switch (this.type) {
    case "string":
      e2 = this.data.substring(this.index, t2);
      break;
    case "uint8array":
      e2 = this.data.subarray(this.index, t2);
      break;
    case "array":
    case "nodebuffer":
      e2 = this.data.slice(this.index, t2);
  }
  return this.index = t2, this.push({
    data: e2,
    meta: {
      percent: this.max ? this.index / this.max * 100 : 0
    }
  });
};
var ze = Ie;
var Fe = me();
var Le = function() {
  for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
    e2 = r2;
    for (var n2 = 0; n2 < 8; n2++)
      e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
    t2[r2] = e2;
  }
  return t2;
}();
var je = function je2(e2, t2) {
  return void 0 !== e2 && e2.length ? "string" !== Fe.getTypeOf(e2) ? function(e3, t3, r2, n2) {
    var a2 = Le, i2 = n2 + r2;
    e3 = ~e3;
    for (var s2 = n2; s2 < i2; s2++)
      e3 = e3 >>> 8 ^ a2[255 & (e3 ^ t3[s2])];
    return ~e3;
  }(0 | t2, e2, e2.length, 0) : function(e3, t3, r2, n2) {
    var a2 = Le, i2 = n2 + r2;
    e3 = ~e3;
    for (var s2 = n2; s2 < i2; s2++)
      e3 = e3 >>> 8 ^ a2[255 & (e3 ^ t3.charCodeAt(s2))];
    return ~e3;
  }(0 | t2, e2, e2.length, 0) : 0;
};
var Ue = be;
var $e = je;
function He() {
  Ue.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
}
me().inherits(He, Ue), He.prototype.processChunk = function(e2) {
  this.streamInfo.crc32 = $e(e2.data, this.streamInfo.crc32 || 0), this.push(e2);
};
var We = He;
var Ze = me();
var Ve = be;
function qe(e2) {
  Ve.call(this, "DataLengthProbe for " + e2), this.propName = e2, this.withStreamInfo(e2, 0);
}
Ze.inherits(qe, Ve), qe.prototype.processChunk = function(e2) {
  if (e2) {
    var t2 = this.streamInfo[this.propName] || 0;
    this.streamInfo[this.propName] = t2 + e2.data.length;
  }
  Ve.prototype.processChunk.call(this, e2);
};
var Xe = pe;
var Ke = ze;
var Ye = We;
var Ge = qe;
function Je(e2, t2, r2, n2, a2) {
  this.compressedSize = e2, this.uncompressedSize = t2, this.crc32 = r2, this.compression = n2, this.compressedContent = a2;
}
Je.prototype = {
  getContentWorker: function getContentWorker() {
    var e2 = new Ke(Xe.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new Ge("data_length")), t2 = this;
    return e2.on("end", function() {
      if (this.streamInfo.data_length !== t2.uncompressedSize)
        throw new Error("Bug : uncompressed data size mismatch");
    }), e2;
  },
  getCompressedWorker: function getCompressedWorker() {
    return new Ke(Xe.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
  }
}, Je.createWorkerFrom = function(e2, t2, r2) {
  return e2.pipe(new Ye()).pipe(new Ge("uncompressedSize")).pipe(t2.compressWorker(r2)).pipe(new Ge("compressedSize")).withStreamInfo("compression", t2);
};
var Qe = Je;
var et = Be;
var tt = ze;
var rt = u;
var nt = Qe;
var at = be;
var it = function it2(e2, t2, r2) {
  this.name = e2, this.dir = r2.dir, this.date = r2.date, this.comment = r2.comment, this.unixPermissions = r2.unixPermissions, this.dosPermissions = r2.dosPermissions, this._data = t2, this._dataBinary = r2.binary, this.options = {
    compression: r2.compression,
    compressionOptions: r2.compressionOptions
  };
};
it.prototype = {
  internalStream: function internalStream(e2) {
    var t2 = null, r2 = "string";
    try {
      if (!e2)
        throw new Error("No output type specified.");
      var n2 = "string" === (r2 = e2.toLowerCase()) || "text" === r2;
      "binarystring" !== r2 && "text" !== r2 || (r2 = "string"), t2 = this._decompressWorker();
      var a2 = !this._dataBinary;
      a2 && !n2 && (t2 = t2.pipe(new rt.Utf8EncodeWorker())), !a2 && n2 && (t2 = t2.pipe(new rt.Utf8DecodeWorker()));
    } catch (e3) {
      (t2 = new at("error")).error(e3);
    }
    return new et(t2, r2, "");
  },
  async: function async(e2, t2) {
    return this.internalStream(e2).accumulate(t2);
  },
  nodeStream: function nodeStream(e2, t2) {
    return this.internalStream(e2 || "nodebuffer").toNodejsStream(t2);
  },
  _compressWorker: function _compressWorker(e2, t2) {
    if (this._data instanceof nt && this._data.compression.magic === e2.magic)
      return this._data.getCompressedWorker();
    var r2 = this._decompressWorker();
    return this._dataBinary || (r2 = r2.pipe(new rt.Utf8EncodeWorker())), nt.createWorkerFrom(r2, e2, t2);
  },
  _decompressWorker: function _decompressWorker() {
    return this._data instanceof nt ? this._data.getContentWorker() : this._data instanceof at ? this._data : new tt(this._data);
  }
};
for (st = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], ot = function ot2() {
  throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
}, lt = 0; lt < st.length; lt++)
  it.prototype[st[lt]] = ot;
var st;
var ot;
var lt;
var ct = it;
var ht = {};
var ut = {};
var dt = {};
var ft = {};
!function(e2) {
  var t2 = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
  function r2(e3, t3) {
    return Object.prototype.hasOwnProperty.call(e3, t3);
  }
  e2.assign = function(e3) {
    for (var t3 = Array.prototype.slice.call(arguments, 1); t3.length; ) {
      var n3 = t3.shift();
      if (n3) {
        if ("object" != _typeof(n3))
          throw new TypeError(n3 + "must be non-object");
        for (var a3 in n3)
          r2(n3, a3) && (e3[a3] = n3[a3]);
      }
    }
    return e3;
  }, e2.shrinkBuf = function(e3, t3) {
    return e3.length === t3 ? e3 : e3.subarray ? e3.subarray(0, t3) : (e3.length = t3, e3);
  };
  var n2 = {
    arraySet: function arraySet(e3, t3, r3, n3, a3) {
      if (t3.subarray && e3.subarray)
        e3.set(t3.subarray(r3, r3 + n3), a3);
      else
        for (var i2 = 0; i2 < n3; i2++)
          e3[a3 + i2] = t3[r3 + i2];
    },
    flattenChunks: function flattenChunks(e3) {
      var t3, r3, n3, a3, i2, s2;
      for (n3 = 0, t3 = 0, r3 = e3.length; t3 < r3; t3++)
        n3 += e3[t3].length;
      for (s2 = new Uint8Array(n3), a3 = 0, t3 = 0, r3 = e3.length; t3 < r3; t3++)
        i2 = e3[t3], s2.set(i2, a3), a3 += i2.length;
      return s2;
    }
  }, a2 = {
    arraySet: function arraySet(e3, t3, r3, n3, a3) {
      for (var i2 = 0; i2 < n3; i2++)
        e3[a3 + i2] = t3[r3 + i2];
    },
    flattenChunks: function flattenChunks(e3) {
      return [].concat.apply([], e3);
    }
  };
  e2.setTyped = function(t3) {
    t3 ? (e2.Buf8 = Uint8Array, e2.Buf16 = Uint16Array, e2.Buf32 = Int32Array, e2.assign(e2, n2)) : (e2.Buf8 = Array, e2.Buf16 = Array, e2.Buf32 = Array, e2.assign(e2, a2));
  }, e2.setTyped(t2);
}(ft);
var pt = {};
var mt = {};
var gt = {};
var bt = ft;
function yt(e2) {
  for (var t2 = e2.length; --t2 >= 0; )
    e2[t2] = 0;
}
var vt = 256;
var wt = 286;
var _t = 30;
var kt = 15;
var St = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
var xt = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
var Ct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
var Et = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
var Pt = new Array(576);
yt(Pt);
var At = new Array(60);
yt(At);
var Tt = new Array(512);
yt(Tt);
var Nt = new Array(256);
yt(Nt);
var Rt = new Array(29);
yt(Rt);
var Bt;
var Mt;
var Dt;
var Ot = new Array(_t);
function It(e2, t2, r2, n2, a2) {
  this.static_tree = e2, this.extra_bits = t2, this.extra_base = r2, this.elems = n2, this.max_length = a2, this.has_stree = e2 && e2.length;
}
function zt(e2, t2) {
  this.dyn_tree = e2, this.max_code = 0, this.stat_desc = t2;
}
function Ft(e2) {
  return e2 < 256 ? Tt[e2] : Tt[256 + (e2 >>> 7)];
}
function Lt(e2, t2) {
  e2.pending_buf[e2.pending++] = 255 & t2, e2.pending_buf[e2.pending++] = t2 >>> 8 & 255;
}
function jt(e2, t2, r2) {
  e2.bi_valid > 16 - r2 ? (e2.bi_buf |= t2 << e2.bi_valid & 65535, Lt(e2, e2.bi_buf), e2.bi_buf = t2 >> 16 - e2.bi_valid, e2.bi_valid += r2 - 16) : (e2.bi_buf |= t2 << e2.bi_valid & 65535, e2.bi_valid += r2);
}
function Ut(e2, t2, r2) {
  jt(e2, r2[2 * t2], r2[2 * t2 + 1]);
}
function $t(e2, t2) {
  var r2 = 0;
  do {
    r2 |= 1 & e2, e2 >>>= 1, r2 <<= 1;
  } while (--t2 > 0);
  return r2 >>> 1;
}
function Ht(e2, t2, r2) {
  var n2, a2, i2 = new Array(16), s2 = 0;
  for (n2 = 1; n2 <= kt; n2++)
    i2[n2] = s2 = s2 + r2[n2 - 1] << 1;
  for (a2 = 0; a2 <= t2; a2++) {
    var o2 = e2[2 * a2 + 1];
    0 !== o2 && (e2[2 * a2] = $t(i2[o2]++, o2));
  }
}
function Wt(e2) {
  var t2;
  for (t2 = 0; t2 < wt; t2++)
    e2.dyn_ltree[2 * t2] = 0;
  for (t2 = 0; t2 < _t; t2++)
    e2.dyn_dtree[2 * t2] = 0;
  for (t2 = 0; t2 < 19; t2++)
    e2.bl_tree[2 * t2] = 0;
  e2.dyn_ltree[512] = 1, e2.opt_len = e2.static_len = 0, e2.last_lit = e2.matches = 0;
}
function Zt(e2) {
  e2.bi_valid > 8 ? Lt(e2, e2.bi_buf) : e2.bi_valid > 0 && (e2.pending_buf[e2.pending++] = e2.bi_buf), e2.bi_buf = 0, e2.bi_valid = 0;
}
function Vt(e2, t2, r2, n2) {
  var a2 = 2 * t2, i2 = 2 * r2;
  return e2[a2] < e2[i2] || e2[a2] === e2[i2] && n2[t2] <= n2[r2];
}
function qt(e2, t2, r2) {
  for (var n2 = e2.heap[r2], a2 = r2 << 1; a2 <= e2.heap_len && (a2 < e2.heap_len && Vt(t2, e2.heap[a2 + 1], e2.heap[a2], e2.depth) && a2++, !Vt(t2, n2, e2.heap[a2], e2.depth)); )
    e2.heap[r2] = e2.heap[a2], r2 = a2, a2 <<= 1;
  e2.heap[r2] = n2;
}
function Xt(e2, t2, r2) {
  var n2, a2, i2, s2, o2 = 0;
  if (0 !== e2.last_lit)
    do {
      n2 = e2.pending_buf[e2.d_buf + 2 * o2] << 8 | e2.pending_buf[e2.d_buf + 2 * o2 + 1], a2 = e2.pending_buf[e2.l_buf + o2], o2++, 0 === n2 ? Ut(e2, a2, t2) : (Ut(e2, (i2 = Nt[a2]) + vt + 1, t2), 0 !== (s2 = St[i2]) && jt(e2, a2 -= Rt[i2], s2), Ut(e2, i2 = Ft(--n2), r2), 0 !== (s2 = xt[i2]) && jt(e2, n2 -= Ot[i2], s2));
    } while (o2 < e2.last_lit);
  Ut(e2, 256, t2);
}
function Kt(e2, t2) {
  var r2, n2, a2, i2 = t2.dyn_tree, s2 = t2.stat_desc.static_tree, o2 = t2.stat_desc.has_stree, l2 = t2.stat_desc.elems, c2 = -1;
  for (e2.heap_len = 0, e2.heap_max = 573, r2 = 0; r2 < l2; r2++)
    0 !== i2[2 * r2] ? (e2.heap[++e2.heap_len] = c2 = r2, e2.depth[r2] = 0) : i2[2 * r2 + 1] = 0;
  for (; e2.heap_len < 2; )
    i2[2 * (a2 = e2.heap[++e2.heap_len] = c2 < 2 ? ++c2 : 0)] = 1, e2.depth[a2] = 0, e2.opt_len--, o2 && (e2.static_len -= s2[2 * a2 + 1]);
  for (t2.max_code = c2, r2 = e2.heap_len >> 1; r2 >= 1; r2--)
    qt(e2, i2, r2);
  a2 = l2;
  do {
    r2 = e2.heap[1], e2.heap[1] = e2.heap[e2.heap_len--], qt(e2, i2, 1), n2 = e2.heap[1], e2.heap[--e2.heap_max] = r2, e2.heap[--e2.heap_max] = n2, i2[2 * a2] = i2[2 * r2] + i2[2 * n2], e2.depth[a2] = (e2.depth[r2] >= e2.depth[n2] ? e2.depth[r2] : e2.depth[n2]) + 1, i2[2 * r2 + 1] = i2[2 * n2 + 1] = a2, e2.heap[1] = a2++, qt(e2, i2, 1);
  } while (e2.heap_len >= 2);
  e2.heap[--e2.heap_max] = e2.heap[1], function(e3, t3) {
    var r3, n3, a3, i3, s3, o3, l3 = t3.dyn_tree, c3 = t3.max_code, h2 = t3.stat_desc.static_tree, u2 = t3.stat_desc.has_stree, d2 = t3.stat_desc.extra_bits, f2 = t3.stat_desc.extra_base, p2 = t3.stat_desc.max_length, m2 = 0;
    for (i3 = 0; i3 <= kt; i3++)
      e3.bl_count[i3] = 0;
    for (l3[2 * e3.heap[e3.heap_max] + 1] = 0, r3 = e3.heap_max + 1; r3 < 573; r3++)
      (i3 = l3[2 * l3[2 * (n3 = e3.heap[r3]) + 1] + 1] + 1) > p2 && (i3 = p2, m2++), l3[2 * n3 + 1] = i3, n3 > c3 || (e3.bl_count[i3]++, s3 = 0, n3 >= f2 && (s3 = d2[n3 - f2]), o3 = l3[2 * n3], e3.opt_len += o3 * (i3 + s3), u2 && (e3.static_len += o3 * (h2[2 * n3 + 1] + s3)));
    if (0 !== m2) {
      do {
        for (i3 = p2 - 1; 0 === e3.bl_count[i3]; )
          i3--;
        e3.bl_count[i3]--, e3.bl_count[i3 + 1] += 2, e3.bl_count[p2]--, m2 -= 2;
      } while (m2 > 0);
      for (i3 = p2; 0 !== i3; i3--)
        for (n3 = e3.bl_count[i3]; 0 !== n3; )
          (a3 = e3.heap[--r3]) > c3 || (l3[2 * a3 + 1] !== i3 && (e3.opt_len += (i3 - l3[2 * a3 + 1]) * l3[2 * a3], l3[2 * a3 + 1] = i3), n3--);
    }
  }(e2, t2), Ht(i2, c2, e2.bl_count);
}
function Yt(e2, t2, r2) {
  var n2, a2, i2 = -1, s2 = t2[1], o2 = 0, l2 = 7, c2 = 4;
  for (0 === s2 && (l2 = 138, c2 = 3), t2[2 * (r2 + 1) + 1] = 65535, n2 = 0; n2 <= r2; n2++)
    a2 = s2, s2 = t2[2 * (n2 + 1) + 1], ++o2 < l2 && a2 === s2 || (o2 < c2 ? e2.bl_tree[2 * a2] += o2 : 0 !== a2 ? (a2 !== i2 && e2.bl_tree[2 * a2]++, e2.bl_tree[32]++) : o2 <= 10 ? e2.bl_tree[34]++ : e2.bl_tree[36]++, o2 = 0, i2 = a2, 0 === s2 ? (l2 = 138, c2 = 3) : a2 === s2 ? (l2 = 6, c2 = 3) : (l2 = 7, c2 = 4));
}
function Gt(e2, t2, r2) {
  var n2, a2, i2 = -1, s2 = t2[1], o2 = 0, l2 = 7, c2 = 4;
  for (0 === s2 && (l2 = 138, c2 = 3), n2 = 0; n2 <= r2; n2++)
    if (a2 = s2, s2 = t2[2 * (n2 + 1) + 1], !(++o2 < l2 && a2 === s2)) {
      if (o2 < c2)
        do {
          Ut(e2, a2, e2.bl_tree);
        } while (0 != --o2);
      else
        0 !== a2 ? (a2 !== i2 && (Ut(e2, a2, e2.bl_tree), o2--), Ut(e2, 16, e2.bl_tree), jt(e2, o2 - 3, 2)) : o2 <= 10 ? (Ut(e2, 17, e2.bl_tree), jt(e2, o2 - 3, 3)) : (Ut(e2, 18, e2.bl_tree), jt(e2, o2 - 11, 7));
      o2 = 0, i2 = a2, 0 === s2 ? (l2 = 138, c2 = 3) : a2 === s2 ? (l2 = 6, c2 = 3) : (l2 = 7, c2 = 4);
    }
}
yt(Ot);
var Jt = false;
function Qt(e2, t2, r2, n2) {
  jt(e2, 0 + (n2 ? 1 : 0), 3), function(e3, t3, r3, n3) {
    Zt(e3), n3 && (Lt(e3, r3), Lt(e3, ~r3)), bt.arraySet(e3.pending_buf, e3.window, t3, r3, e3.pending), e3.pending += r3;
  }(e2, t2, r2, true);
}
gt._tr_init = function(e2) {
  Jt || (!function() {
    var e3, t2, r2, n2, a2, i2 = new Array(16);
    for (r2 = 0, n2 = 0; n2 < 28; n2++)
      for (Rt[n2] = r2, e3 = 0; e3 < 1 << St[n2]; e3++)
        Nt[r2++] = n2;
    for (Nt[r2 - 1] = n2, a2 = 0, n2 = 0; n2 < 16; n2++)
      for (Ot[n2] = a2, e3 = 0; e3 < 1 << xt[n2]; e3++)
        Tt[a2++] = n2;
    for (a2 >>= 7; n2 < _t; n2++)
      for (Ot[n2] = a2 << 7, e3 = 0; e3 < 1 << xt[n2] - 7; e3++)
        Tt[256 + a2++] = n2;
    for (t2 = 0; t2 <= kt; t2++)
      i2[t2] = 0;
    for (e3 = 0; e3 <= 143; )
      Pt[2 * e3 + 1] = 8, e3++, i2[8]++;
    for (; e3 <= 255; )
      Pt[2 * e3 + 1] = 9, e3++, i2[9]++;
    for (; e3 <= 279; )
      Pt[2 * e3 + 1] = 7, e3++, i2[7]++;
    for (; e3 <= 287; )
      Pt[2 * e3 + 1] = 8, e3++, i2[8]++;
    for (Ht(Pt, 287, i2), e3 = 0; e3 < _t; e3++)
      At[2 * e3 + 1] = 5, At[2 * e3] = $t(e3, 5);
    Bt = new It(Pt, St, 257, wt, kt), Mt = new It(At, xt, 0, _t, kt), Dt = new It(new Array(0), Ct, 0, 19, 7);
  }(), Jt = true), e2.l_desc = new zt(e2.dyn_ltree, Bt), e2.d_desc = new zt(e2.dyn_dtree, Mt), e2.bl_desc = new zt(e2.bl_tree, Dt), e2.bi_buf = 0, e2.bi_valid = 0, Wt(e2);
}, gt._tr_stored_block = Qt, gt._tr_flush_block = function(e2, t2, r2, n2) {
  var a2, i2, s2 = 0;
  e2.level > 0 ? (2 === e2.strm.data_type && (e2.strm.data_type = function(e3) {
    var t3, r3 = 4093624447;
    for (t3 = 0; t3 <= 31; t3++, r3 >>>= 1)
      if (1 & r3 && 0 !== e3.dyn_ltree[2 * t3])
        return 0;
    if (0 !== e3.dyn_ltree[18] || 0 !== e3.dyn_ltree[20] || 0 !== e3.dyn_ltree[26])
      return 1;
    for (t3 = 32; t3 < vt; t3++)
      if (0 !== e3.dyn_ltree[2 * t3])
        return 1;
    return 0;
  }(e2)), Kt(e2, e2.l_desc), Kt(e2, e2.d_desc), s2 = function(e3) {
    var t3;
    for (Yt(e3, e3.dyn_ltree, e3.l_desc.max_code), Yt(e3, e3.dyn_dtree, e3.d_desc.max_code), Kt(e3, e3.bl_desc), t3 = 18; t3 >= 3 && 0 === e3.bl_tree[2 * Et[t3] + 1]; t3--)
      ;
    return e3.opt_len += 3 * (t3 + 1) + 5 + 5 + 4, t3;
  }(e2), a2 = e2.opt_len + 3 + 7 >>> 3, (i2 = e2.static_len + 3 + 7 >>> 3) <= a2 && (a2 = i2)) : a2 = i2 = r2 + 5, r2 + 4 <= a2 && -1 !== t2 ? Qt(e2, t2, r2, n2) : 4 === e2.strategy || i2 === a2 ? (jt(e2, 2 + (n2 ? 1 : 0), 3), Xt(e2, Pt, At)) : (jt(e2, 4 + (n2 ? 1 : 0), 3), function(e3, t3, r3, n3) {
    var a3;
    for (jt(e3, t3 - 257, 5), jt(e3, r3 - 1, 5), jt(e3, n3 - 4, 4), a3 = 0; a3 < n3; a3++)
      jt(e3, e3.bl_tree[2 * Et[a3] + 1], 3);
    Gt(e3, e3.dyn_ltree, t3 - 1), Gt(e3, e3.dyn_dtree, r3 - 1);
  }(e2, e2.l_desc.max_code + 1, e2.d_desc.max_code + 1, s2 + 1), Xt(e2, e2.dyn_ltree, e2.dyn_dtree)), Wt(e2), n2 && Zt(e2);
}, gt._tr_tally = function(e2, t2, r2) {
  return e2.pending_buf[e2.d_buf + 2 * e2.last_lit] = t2 >>> 8 & 255, e2.pending_buf[e2.d_buf + 2 * e2.last_lit + 1] = 255 & t2, e2.pending_buf[e2.l_buf + e2.last_lit] = 255 & r2, e2.last_lit++, 0 === t2 ? e2.dyn_ltree[2 * r2]++ : (e2.matches++, t2--, e2.dyn_ltree[2 * (Nt[r2] + vt + 1)]++, e2.dyn_dtree[2 * Ft(t2)]++), e2.last_lit === e2.lit_bufsize - 1;
}, gt._tr_align = function(e2) {
  jt(e2, 2, 3), Ut(e2, 256, Pt), function(e3) {
    16 === e3.bi_valid ? (Lt(e3, e3.bi_buf), e3.bi_buf = 0, e3.bi_valid = 0) : e3.bi_valid >= 8 && (e3.pending_buf[e3.pending++] = 255 & e3.bi_buf, e3.bi_buf >>= 8, e3.bi_valid -= 8);
  }(e2);
};
var er = function er2(e2, t2, r2, n2) {
  for (var a2 = 65535 & e2, i2 = e2 >>> 16 & 65535, s2 = 0; 0 !== r2; ) {
    r2 -= s2 = r2 > 2e3 ? 2e3 : r2;
    do {
      i2 = i2 + (a2 = a2 + t2[n2++] | 0) | 0;
    } while (--s2);
    a2 %= 65521, i2 %= 65521;
  }
  return a2 | i2 << 16;
};
var tr = function() {
  for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
    e2 = r2;
    for (var n2 = 0; n2 < 8; n2++)
      e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
    t2[r2] = e2;
  }
  return t2;
}();
var rr;
var nr = function nr2(e2, t2, r2, n2) {
  var a2 = tr, i2 = n2 + r2;
  e2 ^= -1;
  for (var s2 = n2; s2 < i2; s2++)
    e2 = e2 >>> 8 ^ a2[255 & (e2 ^ t2[s2])];
  return ~e2;
};
var ar = {
  2: "need dictionary",
  1: "stream end",
  0: "",
  "-1": "file error",
  "-2": "stream error",
  "-3": "data error",
  "-4": "insufficient memory",
  "-5": "buffer error",
  "-6": "incompatible version"
};
var ir = ft;
var sr = gt;
var or = er;
var lr = nr;
var cr = ar;
var hr = -2;
var ur = 258;
var dr = 262;
var fr = 103;
var pr = 113;
var mr = 666;
function gr(e2, t2) {
  return e2.msg = cr[t2], t2;
}
function br(e2) {
  return (e2 << 1) - (e2 > 4 ? 9 : 0);
}
function yr(e2) {
  for (var t2 = e2.length; --t2 >= 0; )
    e2[t2] = 0;
}
function vr(e2) {
  var t2 = e2.state, r2 = t2.pending;
  r2 > e2.avail_out && (r2 = e2.avail_out), 0 !== r2 && (ir.arraySet(e2.output, t2.pending_buf, t2.pending_out, r2, e2.next_out), e2.next_out += r2, t2.pending_out += r2, e2.total_out += r2, e2.avail_out -= r2, t2.pending -= r2, 0 === t2.pending && (t2.pending_out = 0));
}
function wr(e2, t2) {
  sr._tr_flush_block(e2, e2.block_start >= 0 ? e2.block_start : -1, e2.strstart - e2.block_start, t2), e2.block_start = e2.strstart, vr(e2.strm);
}
function _r(e2, t2) {
  e2.pending_buf[e2.pending++] = t2;
}
function kr(e2, t2) {
  e2.pending_buf[e2.pending++] = t2 >>> 8 & 255, e2.pending_buf[e2.pending++] = 255 & t2;
}
function Sr(e2, t2) {
  var r2, n2, a2 = e2.max_chain_length, i2 = e2.strstart, s2 = e2.prev_length, o2 = e2.nice_match, l2 = e2.strstart > e2.w_size - dr ? e2.strstart - (e2.w_size - dr) : 0, c2 = e2.window, h2 = e2.w_mask, u2 = e2.prev, d2 = e2.strstart + ur, f2 = c2[i2 + s2 - 1], p2 = c2[i2 + s2];
  e2.prev_length >= e2.good_match && (a2 >>= 2), o2 > e2.lookahead && (o2 = e2.lookahead);
  do {
    if (c2[(r2 = t2) + s2] === p2 && c2[r2 + s2 - 1] === f2 && c2[r2] === c2[i2] && c2[++r2] === c2[i2 + 1]) {
      i2 += 2, r2++;
      do {
      } while (c2[++i2] === c2[++r2] && c2[++i2] === c2[++r2] && c2[++i2] === c2[++r2] && c2[++i2] === c2[++r2] && c2[++i2] === c2[++r2] && c2[++i2] === c2[++r2] && c2[++i2] === c2[++r2] && c2[++i2] === c2[++r2] && i2 < d2);
      if (n2 = ur - (d2 - i2), i2 = d2 - ur, n2 > s2) {
        if (e2.match_start = t2, s2 = n2, n2 >= o2)
          break;
        f2 = c2[i2 + s2 - 1], p2 = c2[i2 + s2];
      }
    }
  } while ((t2 = u2[t2 & h2]) > l2 && 0 != --a2);
  return s2 <= e2.lookahead ? s2 : e2.lookahead;
}
function xr(e2) {
  var t2, r2, n2, a2, i2, s2, o2, l2, c2, h2, u2 = e2.w_size;
  do {
    if (a2 = e2.window_size - e2.lookahead - e2.strstart, e2.strstart >= u2 + (u2 - dr)) {
      ir.arraySet(e2.window, e2.window, u2, u2, 0), e2.match_start -= u2, e2.strstart -= u2, e2.block_start -= u2, t2 = r2 = e2.hash_size;
      do {
        n2 = e2.head[--t2], e2.head[t2] = n2 >= u2 ? n2 - u2 : 0;
      } while (--r2);
      t2 = r2 = u2;
      do {
        n2 = e2.prev[--t2], e2.prev[t2] = n2 >= u2 ? n2 - u2 : 0;
      } while (--r2);
      a2 += u2;
    }
    if (0 === e2.strm.avail_in)
      break;
    if (s2 = e2.strm, o2 = e2.window, l2 = e2.strstart + e2.lookahead, c2 = a2, h2 = void 0, (h2 = s2.avail_in) > c2 && (h2 = c2), r2 = 0 === h2 ? 0 : (s2.avail_in -= h2, ir.arraySet(o2, s2.input, s2.next_in, h2, l2), 1 === s2.state.wrap ? s2.adler = or(s2.adler, o2, h2, l2) : 2 === s2.state.wrap && (s2.adler = lr(s2.adler, o2, h2, l2)), s2.next_in += h2, s2.total_in += h2, h2), e2.lookahead += r2, e2.lookahead + e2.insert >= 3)
      for (i2 = e2.strstart - e2.insert, e2.ins_h = e2.window[i2], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[i2 + 1]) & e2.hash_mask; e2.insert && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[i2 + 3 - 1]) & e2.hash_mask, e2.prev[i2 & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = i2, i2++, e2.insert--, !(e2.lookahead + e2.insert < 3)); )
        ;
  } while (e2.lookahead < dr && 0 !== e2.strm.avail_in);
}
function Cr(e2, t2) {
  for (var r2, n2; ; ) {
    if (e2.lookahead < dr) {
      if (xr(e2), e2.lookahead < dr && 0 === t2)
        return 1;
      if (0 === e2.lookahead)
        break;
    }
    if (r2 = 0, e2.lookahead >= 3 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 3 - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 !== r2 && e2.strstart - r2 <= e2.w_size - dr && (e2.match_length = Sr(e2, r2)), e2.match_length >= 3) {
      if (n2 = sr._tr_tally(e2, e2.strstart - e2.match_start, e2.match_length - 3), e2.lookahead -= e2.match_length, e2.match_length <= e2.max_lazy_match && e2.lookahead >= 3) {
        e2.match_length--;
        do {
          e2.strstart++, e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 3 - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart;
        } while (0 != --e2.match_length);
        e2.strstart++;
      } else
        e2.strstart += e2.match_length, e2.match_length = 0, e2.ins_h = e2.window[e2.strstart], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 1]) & e2.hash_mask;
    } else
      n2 = sr._tr_tally(e2, 0, e2.window[e2.strstart]), e2.lookahead--, e2.strstart++;
    if (n2 && (wr(e2, false), 0 === e2.strm.avail_out))
      return 1;
  }
  return e2.insert = e2.strstart < 2 ? e2.strstart : 2, 4 === t2 ? (wr(e2, true), 0 === e2.strm.avail_out ? 3 : 4) : e2.last_lit && (wr(e2, false), 0 === e2.strm.avail_out) ? 1 : 2;
}
function Er(e2, t2) {
  for (var r2, n2, a2; ; ) {
    if (e2.lookahead < dr) {
      if (xr(e2), e2.lookahead < dr && 0 === t2)
        return 1;
      if (0 === e2.lookahead)
        break;
    }
    if (r2 = 0, e2.lookahead >= 3 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 3 - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), e2.prev_length = e2.match_length, e2.prev_match = e2.match_start, e2.match_length = 2, 0 !== r2 && e2.prev_length < e2.max_lazy_match && e2.strstart - r2 <= e2.w_size - dr && (e2.match_length = Sr(e2, r2), e2.match_length <= 5 && (1 === e2.strategy || 3 === e2.match_length && e2.strstart - e2.match_start > 4096) && (e2.match_length = 2)), e2.prev_length >= 3 && e2.match_length <= e2.prev_length) {
      a2 = e2.strstart + e2.lookahead - 3, n2 = sr._tr_tally(e2, e2.strstart - 1 - e2.prev_match, e2.prev_length - 3), e2.lookahead -= e2.prev_length - 1, e2.prev_length -= 2;
      do {
        ++e2.strstart <= a2 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 3 - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart);
      } while (0 != --e2.prev_length);
      if (e2.match_available = 0, e2.match_length = 2, e2.strstart++, n2 && (wr(e2, false), 0 === e2.strm.avail_out))
        return 1;
    } else if (e2.match_available) {
      if ((n2 = sr._tr_tally(e2, 0, e2.window[e2.strstart - 1])) && wr(e2, false), e2.strstart++, e2.lookahead--, 0 === e2.strm.avail_out)
        return 1;
    } else
      e2.match_available = 1, e2.strstart++, e2.lookahead--;
  }
  return e2.match_available && (n2 = sr._tr_tally(e2, 0, e2.window[e2.strstart - 1]), e2.match_available = 0), e2.insert = e2.strstart < 2 ? e2.strstart : 2, 4 === t2 ? (wr(e2, true), 0 === e2.strm.avail_out ? 3 : 4) : e2.last_lit && (wr(e2, false), 0 === e2.strm.avail_out) ? 1 : 2;
}
function Pr(e2, t2, r2, n2, a2) {
  this.good_length = e2, this.max_lazy = t2, this.nice_length = r2, this.max_chain = n2, this.func = a2;
}
function Ar() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = 8, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new ir.Buf16(1146), this.dyn_dtree = new ir.Buf16(122), this.bl_tree = new ir.Buf16(78), yr(this.dyn_ltree), yr(this.dyn_dtree), yr(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new ir.Buf16(16), this.heap = new ir.Buf16(573), yr(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new ir.Buf16(573), yr(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
function Tr(e2) {
  var t2;
  return e2 && e2.state ? (e2.total_in = e2.total_out = 0, e2.data_type = 2, (t2 = e2.state).pending = 0, t2.pending_out = 0, t2.wrap < 0 && (t2.wrap = -t2.wrap), t2.status = t2.wrap ? 42 : pr, e2.adler = 2 === t2.wrap ? 0 : 1, t2.last_flush = 0, sr._tr_init(t2), 0) : gr(e2, hr);
}
function Nr(e2) {
  var t2, r2 = Tr(e2);
  return 0 === r2 && ((t2 = e2.state).window_size = 2 * t2.w_size, yr(t2.head), t2.max_lazy_match = rr[t2.level].max_lazy, t2.good_match = rr[t2.level].good_length, t2.nice_match = rr[t2.level].nice_length, t2.max_chain_length = rr[t2.level].max_chain, t2.strstart = 0, t2.block_start = 0, t2.lookahead = 0, t2.insert = 0, t2.match_length = t2.prev_length = 2, t2.match_available = 0, t2.ins_h = 0), r2;
}
function Rr(e2, t2, r2, n2, a2, i2) {
  if (!e2)
    return hr;
  var s2 = 1;
  if (-1 === t2 && (t2 = 6), n2 < 0 ? (s2 = 0, n2 = -n2) : n2 > 15 && (s2 = 2, n2 -= 16), a2 < 1 || a2 > 9 || 8 !== r2 || n2 < 8 || n2 > 15 || t2 < 0 || t2 > 9 || i2 < 0 || i2 > 4)
    return gr(e2, hr);
  8 === n2 && (n2 = 9);
  var o2 = new Ar();
  return e2.state = o2, o2.strm = e2, o2.wrap = s2, o2.gzhead = null, o2.w_bits = n2, o2.w_size = 1 << o2.w_bits, o2.w_mask = o2.w_size - 1, o2.hash_bits = a2 + 7, o2.hash_size = 1 << o2.hash_bits, o2.hash_mask = o2.hash_size - 1, o2.hash_shift = ~~((o2.hash_bits + 3 - 1) / 3), o2.window = new ir.Buf8(2 * o2.w_size), o2.head = new ir.Buf16(o2.hash_size), o2.prev = new ir.Buf16(o2.w_size), o2.lit_bufsize = 1 << a2 + 6, o2.pending_buf_size = 4 * o2.lit_bufsize, o2.pending_buf = new ir.Buf8(o2.pending_buf_size), o2.d_buf = 1 * o2.lit_bufsize, o2.l_buf = 3 * o2.lit_bufsize, o2.level = t2, o2.strategy = i2, o2.method = r2, Nr(e2);
}
rr = [new Pr(0, 0, 0, 0, function(e2, t2) {
  var r2 = 65535;
  for (r2 > e2.pending_buf_size - 5 && (r2 = e2.pending_buf_size - 5); ; ) {
    if (e2.lookahead <= 1) {
      if (xr(e2), 0 === e2.lookahead && 0 === t2)
        return 1;
      if (0 === e2.lookahead)
        break;
    }
    e2.strstart += e2.lookahead, e2.lookahead = 0;
    var n2 = e2.block_start + r2;
    if ((0 === e2.strstart || e2.strstart >= n2) && (e2.lookahead = e2.strstart - n2, e2.strstart = n2, wr(e2, false), 0 === e2.strm.avail_out))
      return 1;
    if (e2.strstart - e2.block_start >= e2.w_size - dr && (wr(e2, false), 0 === e2.strm.avail_out))
      return 1;
  }
  return e2.insert = 0, 4 === t2 ? (wr(e2, true), 0 === e2.strm.avail_out ? 3 : 4) : (e2.strstart > e2.block_start && (wr(e2, false), e2.strm.avail_out), 1);
}), new Pr(4, 4, 8, 4, Cr), new Pr(4, 5, 16, 8, Cr), new Pr(4, 6, 32, 32, Cr), new Pr(4, 4, 16, 16, Er), new Pr(8, 16, 32, 32, Er), new Pr(8, 16, 128, 128, Er), new Pr(8, 32, 128, 256, Er), new Pr(32, 128, 258, 1024, Er), new Pr(32, 258, 258, 4096, Er)], mt.deflateInit = function(e2, t2) {
  return Rr(e2, t2, 8, 15, 8, 0);
}, mt.deflateInit2 = Rr, mt.deflateReset = Nr, mt.deflateResetKeep = Tr, mt.deflateSetHeader = function(e2, t2) {
  return e2 && e2.state ? 2 !== e2.state.wrap ? hr : (e2.state.gzhead = t2, 0) : hr;
}, mt.deflate = function(e2, t2) {
  var r2, n2, a2, i2;
  if (!e2 || !e2.state || t2 > 5 || t2 < 0)
    return e2 ? gr(e2, hr) : hr;
  if (n2 = e2.state, !e2.output || !e2.input && 0 !== e2.avail_in || n2.status === mr && 4 !== t2)
    return gr(e2, 0 === e2.avail_out ? -5 : hr);
  if (n2.strm = e2, r2 = n2.last_flush, n2.last_flush = t2, 42 === n2.status)
    if (2 === n2.wrap)
      e2.adler = 0, _r(n2, 31), _r(n2, 139), _r(n2, 8), n2.gzhead ? (_r(n2, (n2.gzhead.text ? 1 : 0) + (n2.gzhead.hcrc ? 2 : 0) + (n2.gzhead.extra ? 4 : 0) + (n2.gzhead.name ? 8 : 0) + (n2.gzhead.comment ? 16 : 0)), _r(n2, 255 & n2.gzhead.time), _r(n2, n2.gzhead.time >> 8 & 255), _r(n2, n2.gzhead.time >> 16 & 255), _r(n2, n2.gzhead.time >> 24 & 255), _r(n2, 9 === n2.level ? 2 : n2.strategy >= 2 || n2.level < 2 ? 4 : 0), _r(n2, 255 & n2.gzhead.os), n2.gzhead.extra && n2.gzhead.extra.length && (_r(n2, 255 & n2.gzhead.extra.length), _r(n2, n2.gzhead.extra.length >> 8 & 255)), n2.gzhead.hcrc && (e2.adler = lr(e2.adler, n2.pending_buf, n2.pending, 0)), n2.gzindex = 0, n2.status = 69) : (_r(n2, 0), _r(n2, 0), _r(n2, 0), _r(n2, 0), _r(n2, 0), _r(n2, 9 === n2.level ? 2 : n2.strategy >= 2 || n2.level < 2 ? 4 : 0), _r(n2, 3), n2.status = pr);
    else {
      var s2 = 8 + (n2.w_bits - 8 << 4) << 8;
      s2 |= (n2.strategy >= 2 || n2.level < 2 ? 0 : n2.level < 6 ? 1 : 6 === n2.level ? 2 : 3) << 6, 0 !== n2.strstart && (s2 |= 32), s2 += 31 - s2 % 31, n2.status = pr, kr(n2, s2), 0 !== n2.strstart && (kr(n2, e2.adler >>> 16), kr(n2, 65535 & e2.adler)), e2.adler = 1;
    }
  if (69 === n2.status)
    if (n2.gzhead.extra) {
      for (a2 = n2.pending; n2.gzindex < (65535 & n2.gzhead.extra.length) && (n2.pending !== n2.pending_buf_size || (n2.gzhead.hcrc && n2.pending > a2 && (e2.adler = lr(e2.adler, n2.pending_buf, n2.pending - a2, a2)), vr(e2), a2 = n2.pending, n2.pending !== n2.pending_buf_size)); )
        _r(n2, 255 & n2.gzhead.extra[n2.gzindex]), n2.gzindex++;
      n2.gzhead.hcrc && n2.pending > a2 && (e2.adler = lr(e2.adler, n2.pending_buf, n2.pending - a2, a2)), n2.gzindex === n2.gzhead.extra.length && (n2.gzindex = 0, n2.status = 73);
    } else
      n2.status = 73;
  if (73 === n2.status)
    if (n2.gzhead.name) {
      a2 = n2.pending;
      do {
        if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > a2 && (e2.adler = lr(e2.adler, n2.pending_buf, n2.pending - a2, a2)), vr(e2), a2 = n2.pending, n2.pending === n2.pending_buf_size)) {
          i2 = 1;
          break;
        }
        i2 = n2.gzindex < n2.gzhead.name.length ? 255 & n2.gzhead.name.charCodeAt(n2.gzindex++) : 0, _r(n2, i2);
      } while (0 !== i2);
      n2.gzhead.hcrc && n2.pending > a2 && (e2.adler = lr(e2.adler, n2.pending_buf, n2.pending - a2, a2)), 0 === i2 && (n2.gzindex = 0, n2.status = 91);
    } else
      n2.status = 91;
  if (91 === n2.status)
    if (n2.gzhead.comment) {
      a2 = n2.pending;
      do {
        if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > a2 && (e2.adler = lr(e2.adler, n2.pending_buf, n2.pending - a2, a2)), vr(e2), a2 = n2.pending, n2.pending === n2.pending_buf_size)) {
          i2 = 1;
          break;
        }
        i2 = n2.gzindex < n2.gzhead.comment.length ? 255 & n2.gzhead.comment.charCodeAt(n2.gzindex++) : 0, _r(n2, i2);
      } while (0 !== i2);
      n2.gzhead.hcrc && n2.pending > a2 && (e2.adler = lr(e2.adler, n2.pending_buf, n2.pending - a2, a2)), 0 === i2 && (n2.status = fr);
    } else
      n2.status = fr;
  if (n2.status === fr && (n2.gzhead.hcrc ? (n2.pending + 2 > n2.pending_buf_size && vr(e2), n2.pending + 2 <= n2.pending_buf_size && (_r(n2, 255 & e2.adler), _r(n2, e2.adler >> 8 & 255), e2.adler = 0, n2.status = pr)) : n2.status = pr), 0 !== n2.pending) {
    if (vr(e2), 0 === e2.avail_out)
      return n2.last_flush = -1, 0;
  } else if (0 === e2.avail_in && br(t2) <= br(r2) && 4 !== t2)
    return gr(e2, -5);
  if (n2.status === mr && 0 !== e2.avail_in)
    return gr(e2, -5);
  if (0 !== e2.avail_in || 0 !== n2.lookahead || 0 !== t2 && n2.status !== mr) {
    var o2 = 2 === n2.strategy ? function(e3, t3) {
      for (var r3; ; ) {
        if (0 === e3.lookahead && (xr(e3), 0 === e3.lookahead)) {
          if (0 === t3)
            return 1;
          break;
        }
        if (e3.match_length = 0, r3 = sr._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++, r3 && (wr(e3, false), 0 === e3.strm.avail_out))
          return 1;
      }
      return e3.insert = 0, 4 === t3 ? (wr(e3, true), 0 === e3.strm.avail_out ? 3 : 4) : e3.last_lit && (wr(e3, false), 0 === e3.strm.avail_out) ? 1 : 2;
    }(n2, t2) : 3 === n2.strategy ? function(e3, t3) {
      for (var r3, n3, a3, i3, s3 = e3.window; ; ) {
        if (e3.lookahead <= ur) {
          if (xr(e3), e3.lookahead <= ur && 0 === t3)
            return 1;
          if (0 === e3.lookahead)
            break;
        }
        if (e3.match_length = 0, e3.lookahead >= 3 && e3.strstart > 0 && (n3 = s3[a3 = e3.strstart - 1]) === s3[++a3] && n3 === s3[++a3] && n3 === s3[++a3]) {
          i3 = e3.strstart + ur;
          do {
          } while (n3 === s3[++a3] && n3 === s3[++a3] && n3 === s3[++a3] && n3 === s3[++a3] && n3 === s3[++a3] && n3 === s3[++a3] && n3 === s3[++a3] && n3 === s3[++a3] && a3 < i3);
          e3.match_length = ur - (i3 - a3), e3.match_length > e3.lookahead && (e3.match_length = e3.lookahead);
        }
        if (e3.match_length >= 3 ? (r3 = sr._tr_tally(e3, 1, e3.match_length - 3), e3.lookahead -= e3.match_length, e3.strstart += e3.match_length, e3.match_length = 0) : (r3 = sr._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++), r3 && (wr(e3, false), 0 === e3.strm.avail_out))
          return 1;
      }
      return e3.insert = 0, 4 === t3 ? (wr(e3, true), 0 === e3.strm.avail_out ? 3 : 4) : e3.last_lit && (wr(e3, false), 0 === e3.strm.avail_out) ? 1 : 2;
    }(n2, t2) : rr[n2.level].func(n2, t2);
    if (3 !== o2 && 4 !== o2 || (n2.status = mr), 1 === o2 || 3 === o2)
      return 0 === e2.avail_out && (n2.last_flush = -1), 0;
    if (2 === o2 && (1 === t2 ? sr._tr_align(n2) : 5 !== t2 && (sr._tr_stored_block(n2, 0, 0, false), 3 === t2 && (yr(n2.head), 0 === n2.lookahead && (n2.strstart = 0, n2.block_start = 0, n2.insert = 0))), vr(e2), 0 === e2.avail_out))
      return n2.last_flush = -1, 0;
  }
  return 4 !== t2 ? 0 : n2.wrap <= 0 ? 1 : (2 === n2.wrap ? (_r(n2, 255 & e2.adler), _r(n2, e2.adler >> 8 & 255), _r(n2, e2.adler >> 16 & 255), _r(n2, e2.adler >> 24 & 255), _r(n2, 255 & e2.total_in), _r(n2, e2.total_in >> 8 & 255), _r(n2, e2.total_in >> 16 & 255), _r(n2, e2.total_in >> 24 & 255)) : (kr(n2, e2.adler >>> 16), kr(n2, 65535 & e2.adler)), vr(e2), n2.wrap > 0 && (n2.wrap = -n2.wrap), 0 !== n2.pending ? 0 : 1);
}, mt.deflateEnd = function(e2) {
  var t2;
  return e2 && e2.state ? 42 !== (t2 = e2.state.status) && 69 !== t2 && 73 !== t2 && 91 !== t2 && t2 !== fr && t2 !== pr && t2 !== mr ? gr(e2, hr) : (e2.state = null, t2 === pr ? gr(e2, -3) : 0) : hr;
}, mt.deflateSetDictionary = function(e2, t2) {
  var r2, n2, a2, i2, s2, o2, l2, c2, h2 = t2.length;
  if (!e2 || !e2.state)
    return hr;
  if (2 === (i2 = (r2 = e2.state).wrap) || 1 === i2 && 42 !== r2.status || r2.lookahead)
    return hr;
  for (1 === i2 && (e2.adler = or(e2.adler, t2, h2, 0)), r2.wrap = 0, h2 >= r2.w_size && (0 === i2 && (yr(r2.head), r2.strstart = 0, r2.block_start = 0, r2.insert = 0), c2 = new ir.Buf8(r2.w_size), ir.arraySet(c2, t2, h2 - r2.w_size, r2.w_size, 0), t2 = c2, h2 = r2.w_size), s2 = e2.avail_in, o2 = e2.next_in, l2 = e2.input, e2.avail_in = h2, e2.next_in = 0, e2.input = t2, xr(r2); r2.lookahead >= 3; ) {
    n2 = r2.strstart, a2 = r2.lookahead - 2;
    do {
      r2.ins_h = (r2.ins_h << r2.hash_shift ^ r2.window[n2 + 3 - 1]) & r2.hash_mask, r2.prev[n2 & r2.w_mask] = r2.head[r2.ins_h], r2.head[r2.ins_h] = n2, n2++;
    } while (--a2);
    r2.strstart = n2, r2.lookahead = 2, xr(r2);
  }
  return r2.strstart += r2.lookahead, r2.block_start = r2.strstart, r2.insert = r2.lookahead, r2.lookahead = 0, r2.match_length = r2.prev_length = 2, r2.match_available = 0, e2.next_in = o2, e2.input = l2, e2.avail_in = s2, r2.wrap = i2, 0;
}, mt.deflateInfo = "pako deflate (from Nodeca project)";
var Br = {};
var Mr = ft;
var Dr = true;
var Or = true;
try {
  String.fromCharCode.apply(null, [0]);
} catch (e2) {
  Dr = false;
}
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch (e2) {
  Or = false;
}
for (Ir = new Mr.Buf8(256), zr = 0; zr < 256; zr++)
  Ir[zr] = zr >= 252 ? 6 : zr >= 248 ? 5 : zr >= 240 ? 4 : zr >= 224 ? 3 : zr >= 192 ? 2 : 1;
var Ir;
var zr;
function Fr(e2, t2) {
  if (t2 < 65534 && (e2.subarray && Or || !e2.subarray && Dr))
    return String.fromCharCode.apply(null, Mr.shrinkBuf(e2, t2));
  for (var r2 = "", n2 = 0; n2 < t2; n2++)
    r2 += String.fromCharCode(e2[n2]);
  return r2;
}
Ir[254] = Ir[254] = 1, Br.string2buf = function(e2) {
  var t2, r2, n2, a2, i2, s2 = e2.length, o2 = 0;
  for (a2 = 0; a2 < s2; a2++)
    55296 == (64512 & (r2 = e2.charCodeAt(a2))) && a2 + 1 < s2 && 56320 == (64512 & (n2 = e2.charCodeAt(a2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), a2++), o2 += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
  for (t2 = new Mr.Buf8(o2), i2 = 0, a2 = 0; i2 < o2; a2++)
    55296 == (64512 & (r2 = e2.charCodeAt(a2))) && a2 + 1 < s2 && 56320 == (64512 & (n2 = e2.charCodeAt(a2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), a2++), r2 < 128 ? t2[i2++] = r2 : r2 < 2048 ? (t2[i2++] = 192 | r2 >>> 6, t2[i2++] = 128 | 63 & r2) : r2 < 65536 ? (t2[i2++] = 224 | r2 >>> 12, t2[i2++] = 128 | r2 >>> 6 & 63, t2[i2++] = 128 | 63 & r2) : (t2[i2++] = 240 | r2 >>> 18, t2[i2++] = 128 | r2 >>> 12 & 63, t2[i2++] = 128 | r2 >>> 6 & 63, t2[i2++] = 128 | 63 & r2);
  return t2;
}, Br.buf2binstring = function(e2) {
  return Fr(e2, e2.length);
}, Br.binstring2buf = function(e2) {
  for (var t2 = new Mr.Buf8(e2.length), r2 = 0, n2 = t2.length; r2 < n2; r2++)
    t2[r2] = e2.charCodeAt(r2);
  return t2;
}, Br.buf2string = function(e2, t2) {
  var r2, n2, a2, i2, s2 = t2 || e2.length, o2 = new Array(2 * s2);
  for (n2 = 0, r2 = 0; r2 < s2; )
    if ((a2 = e2[r2++]) < 128)
      o2[n2++] = a2;
    else if ((i2 = Ir[a2]) > 4)
      o2[n2++] = 65533, r2 += i2 - 1;
    else {
      for (a2 &= 2 === i2 ? 31 : 3 === i2 ? 15 : 7; i2 > 1 && r2 < s2; )
        a2 = a2 << 6 | 63 & e2[r2++], i2--;
      i2 > 1 ? o2[n2++] = 65533 : a2 < 65536 ? o2[n2++] = a2 : (a2 -= 65536, o2[n2++] = 55296 | a2 >> 10 & 1023, o2[n2++] = 56320 | 1023 & a2);
    }
  return Fr(o2, n2);
}, Br.utf8border = function(e2, t2) {
  var r2;
  for ((t2 = t2 || e2.length) > e2.length && (t2 = e2.length), r2 = t2 - 1; r2 >= 0 && 128 == (192 & e2[r2]); )
    r2--;
  return r2 < 0 || 0 === r2 ? t2 : r2 + Ir[e2[r2]] > t2 ? r2 : t2;
};
var Lr = function Lr2() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
};
var jr = mt;
var Ur = ft;
var $r = Br;
var Hr = ar;
var Wr = Lr;
var Zr = Object.prototype.toString;
function Vr(e2) {
  if (!(this instanceof Vr))
    return new Vr(e2);
  this.options = Ur.assign({
    level: -1,
    method: 8,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: 0,
    to: ""
  }, e2 || {});
  var t2 = this.options;
  t2.raw && t2.windowBits > 0 ? t2.windowBits = -t2.windowBits : t2.gzip && t2.windowBits > 0 && t2.windowBits < 16 && (t2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new Wr(), this.strm.avail_out = 0;
  var r2 = jr.deflateInit2(this.strm, t2.level, t2.method, t2.windowBits, t2.memLevel, t2.strategy);
  if (0 !== r2)
    throw new Error(Hr[r2]);
  if (t2.header && jr.deflateSetHeader(this.strm, t2.header), t2.dictionary) {
    var n2;
    if (n2 = "string" == typeof t2.dictionary ? $r.string2buf(t2.dictionary) : "[object ArrayBuffer]" === Zr.call(t2.dictionary) ? new Uint8Array(t2.dictionary) : t2.dictionary, 0 !== (r2 = jr.deflateSetDictionary(this.strm, n2)))
      throw new Error(Hr[r2]);
    this._dict_set = true;
  }
}
function qr(e2, t2) {
  var r2 = new Vr(t2);
  if (r2.push(e2, true), r2.err)
    throw r2.msg || Hr[r2.err];
  return r2.result;
}
Vr.prototype.push = function(e2, t2) {
  var r2, n2, a2 = this.strm, i2 = this.options.chunkSize;
  if (this.ended)
    return false;
  n2 = t2 === ~~t2 ? t2 : true === t2 ? 4 : 0, "string" == typeof e2 ? a2.input = $r.string2buf(e2) : "[object ArrayBuffer]" === Zr.call(e2) ? a2.input = new Uint8Array(e2) : a2.input = e2, a2.next_in = 0, a2.avail_in = a2.input.length;
  do {
    if (0 === a2.avail_out && (a2.output = new Ur.Buf8(i2), a2.next_out = 0, a2.avail_out = i2), 1 !== (r2 = jr.deflate(a2, n2)) && 0 !== r2)
      return this.onEnd(r2), this.ended = true, false;
    0 !== a2.avail_out && (0 !== a2.avail_in || 4 !== n2 && 2 !== n2) || ("string" === this.options.to ? this.onData($r.buf2binstring(Ur.shrinkBuf(a2.output, a2.next_out))) : this.onData(Ur.shrinkBuf(a2.output, a2.next_out)));
  } while ((a2.avail_in > 0 || 0 === a2.avail_out) && 1 !== r2);
  return 4 === n2 ? (r2 = jr.deflateEnd(this.strm), this.onEnd(r2), this.ended = true, 0 === r2) : 2 !== n2 || (this.onEnd(0), a2.avail_out = 0, true);
}, Vr.prototype.onData = function(e2) {
  this.chunks.push(e2);
}, Vr.prototype.onEnd = function(e2) {
  0 === e2 && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = Ur.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
}, pt.Deflate = Vr, pt.deflate = qr, pt.deflateRaw = function(e2, t2) {
  return (t2 = t2 || {}).raw = true, qr(e2, t2);
}, pt.gzip = function(e2, t2) {
  return (t2 = t2 || {}).gzip = true, qr(e2, t2);
};
var Xr = {};
var Kr = {};
var Yr = ft;
var Gr = 15;
var Jr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
var Qr = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
var en = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
var tn = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
var rn = ft;
var nn = er;
var an = nr;
var sn = function sn2(e2, t2) {
  var r2, n2, a2, i2, s2, o2, l2, c2, h2, u2, d2, f2, p2, m2, g2, b2, y2, v2, w2, _2, k2, S2, x2, C2, E2;
  r2 = e2.state, n2 = e2.next_in, C2 = e2.input, a2 = n2 + (e2.avail_in - 5), i2 = e2.next_out, E2 = e2.output, s2 = i2 - (t2 - e2.avail_out), o2 = i2 + (e2.avail_out - 257), l2 = r2.dmax, c2 = r2.wsize, h2 = r2.whave, u2 = r2.wnext, d2 = r2.window, f2 = r2.hold, p2 = r2.bits, m2 = r2.lencode, g2 = r2.distcode, b2 = (1 << r2.lenbits) - 1, y2 = (1 << r2.distbits) - 1;
  e:
    do {
      p2 < 15 && (f2 += C2[n2++] << p2, p2 += 8, f2 += C2[n2++] << p2, p2 += 8), v2 = m2[f2 & b2];
      t:
        for (; ; ) {
          if (f2 >>>= w2 = v2 >>> 24, p2 -= w2, 0 === (w2 = v2 >>> 16 & 255))
            E2[i2++] = 65535 & v2;
          else {
            if (!(16 & w2)) {
              if (64 & w2) {
                if (32 & w2) {
                  r2.mode = 12;
                  break e;
                }
                e2.msg = "invalid literal/length code", r2.mode = 30;
                break e;
              }
              v2 = m2[(65535 & v2) + (f2 & (1 << w2) - 1)];
              continue t;
            }
            for (_2 = 65535 & v2, (w2 &= 15) && (p2 < w2 && (f2 += C2[n2++] << p2, p2 += 8), _2 += f2 & (1 << w2) - 1, f2 >>>= w2, p2 -= w2), p2 < 15 && (f2 += C2[n2++] << p2, p2 += 8, f2 += C2[n2++] << p2, p2 += 8), v2 = g2[f2 & y2]; ; ) {
              if (f2 >>>= w2 = v2 >>> 24, p2 -= w2, 16 & (w2 = v2 >>> 16 & 255)) {
                if (k2 = 65535 & v2, p2 < (w2 &= 15) && (f2 += C2[n2++] << p2, (p2 += 8) < w2 && (f2 += C2[n2++] << p2, p2 += 8)), (k2 += f2 & (1 << w2) - 1) > l2) {
                  e2.msg = "invalid distance too far back", r2.mode = 30;
                  break e;
                }
                if (f2 >>>= w2, p2 -= w2, k2 > (w2 = i2 - s2)) {
                  if ((w2 = k2 - w2) > h2 && r2.sane) {
                    e2.msg = "invalid distance too far back", r2.mode = 30;
                    break e;
                  }
                  if (S2 = 0, x2 = d2, 0 === u2) {
                    if (S2 += c2 - w2, w2 < _2) {
                      _2 -= w2;
                      do {
                        E2[i2++] = d2[S2++];
                      } while (--w2);
                      S2 = i2 - k2, x2 = E2;
                    }
                  } else if (u2 < w2) {
                    if (S2 += c2 + u2 - w2, (w2 -= u2) < _2) {
                      _2 -= w2;
                      do {
                        E2[i2++] = d2[S2++];
                      } while (--w2);
                      if (S2 = 0, u2 < _2) {
                        _2 -= w2 = u2;
                        do {
                          E2[i2++] = d2[S2++];
                        } while (--w2);
                        S2 = i2 - k2, x2 = E2;
                      }
                    }
                  } else if (S2 += u2 - w2, w2 < _2) {
                    _2 -= w2;
                    do {
                      E2[i2++] = d2[S2++];
                    } while (--w2);
                    S2 = i2 - k2, x2 = E2;
                  }
                  for (; _2 > 2; )
                    E2[i2++] = x2[S2++], E2[i2++] = x2[S2++], E2[i2++] = x2[S2++], _2 -= 3;
                  _2 && (E2[i2++] = x2[S2++], _2 > 1 && (E2[i2++] = x2[S2++]));
                } else {
                  S2 = i2 - k2;
                  do {
                    E2[i2++] = E2[S2++], E2[i2++] = E2[S2++], E2[i2++] = E2[S2++], _2 -= 3;
                  } while (_2 > 2);
                  _2 && (E2[i2++] = E2[S2++], _2 > 1 && (E2[i2++] = E2[S2++]));
                }
                break;
              }
              if (64 & w2) {
                e2.msg = "invalid distance code", r2.mode = 30;
                break e;
              }
              v2 = g2[(65535 & v2) + (f2 & (1 << w2) - 1)];
            }
          }
          break;
        }
    } while (n2 < a2 && i2 < o2);
  n2 -= _2 = p2 >> 3, f2 &= (1 << (p2 -= _2 << 3)) - 1, e2.next_in = n2, e2.next_out = i2, e2.avail_in = n2 < a2 ? a2 - n2 + 5 : 5 - (n2 - a2), e2.avail_out = i2 < o2 ? o2 - i2 + 257 : 257 - (i2 - o2), r2.hold = f2, r2.bits = p2;
};
var on3 = function on4(e2, t2, r2, n2, a2, i2, s2, o2) {
  var l2, c2, h2, u2, d2, f2, p2, m2, g2, b2 = o2.bits, y2 = 0, v2 = 0, w2 = 0, _2 = 0, k2 = 0, S2 = 0, x2 = 0, C2 = 0, E2 = 0, P2 = 0, A2 = null, T2 = 0, N2 = new Yr.Buf16(16), R2 = new Yr.Buf16(16), B2 = null, M2 = 0;
  for (y2 = 0; y2 <= Gr; y2++)
    N2[y2] = 0;
  for (v2 = 0; v2 < n2; v2++)
    N2[t2[r2 + v2]]++;
  for (k2 = b2, _2 = Gr; _2 >= 1 && 0 === N2[_2]; _2--)
    ;
  if (k2 > _2 && (k2 = _2), 0 === _2)
    return a2[i2++] = 20971520, a2[i2++] = 20971520, o2.bits = 1, 0;
  for (w2 = 1; w2 < _2 && 0 === N2[w2]; w2++)
    ;
  for (k2 < w2 && (k2 = w2), C2 = 1, y2 = 1; y2 <= Gr; y2++)
    if (C2 <<= 1, (C2 -= N2[y2]) < 0)
      return -1;
  if (C2 > 0 && (0 === e2 || 1 !== _2))
    return -1;
  for (R2[1] = 0, y2 = 1; y2 < Gr; y2++)
    R2[y2 + 1] = R2[y2] + N2[y2];
  for (v2 = 0; v2 < n2; v2++)
    0 !== t2[r2 + v2] && (s2[R2[t2[r2 + v2]]++] = v2);
  if (0 === e2 ? (A2 = B2 = s2, f2 = 19) : 1 === e2 ? (A2 = Jr, T2 -= 257, B2 = Qr, M2 -= 257, f2 = 256) : (A2 = en, B2 = tn, f2 = -1), P2 = 0, v2 = 0, y2 = w2, d2 = i2, S2 = k2, x2 = 0, h2 = -1, u2 = (E2 = 1 << k2) - 1, 1 === e2 && E2 > 852 || 2 === e2 && E2 > 592)
    return 1;
  for (; ; ) {
    p2 = y2 - x2, s2[v2] < f2 ? (m2 = 0, g2 = s2[v2]) : s2[v2] > f2 ? (m2 = B2[M2 + s2[v2]], g2 = A2[T2 + s2[v2]]) : (m2 = 96, g2 = 0), l2 = 1 << y2 - x2, w2 = c2 = 1 << S2;
    do {
      a2[d2 + (P2 >> x2) + (c2 -= l2)] = p2 << 24 | m2 << 16 | g2;
    } while (0 !== c2);
    for (l2 = 1 << y2 - 1; P2 & l2; )
      l2 >>= 1;
    if (0 !== l2 ? (P2 &= l2 - 1, P2 += l2) : P2 = 0, v2++, 0 == --N2[y2]) {
      if (y2 === _2)
        break;
      y2 = t2[r2 + s2[v2]];
    }
    if (y2 > k2 && (P2 & u2) !== h2) {
      for (0 === x2 && (x2 = k2), d2 += w2, C2 = 1 << (S2 = y2 - x2); S2 + x2 < _2 && !((C2 -= N2[S2 + x2]) <= 0); )
        S2++, C2 <<= 1;
      if (E2 += 1 << S2, 1 === e2 && E2 > 852 || 2 === e2 && E2 > 592)
        return 1;
      a2[h2 = P2 & u2] = k2 << 24 | S2 << 16 | d2 - i2;
    }
  }
  return 0 !== P2 && (a2[d2 + P2] = y2 - x2 << 24 | 64 << 16), o2.bits = k2, 0;
};
var ln = -2;
var cn = 12;
var hn = 30;
function un(e2) {
  return (e2 >>> 24 & 255) + (e2 >>> 8 & 65280) + ((65280 & e2) << 8) + ((255 & e2) << 24);
}
function dn() {
  this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new rn.Buf16(320), this.work = new rn.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
function fn(e2) {
  var t2;
  return e2 && e2.state ? (t2 = e2.state, e2.total_in = e2.total_out = t2.total = 0, e2.msg = "", t2.wrap && (e2.adler = 1 & t2.wrap), t2.mode = 1, t2.last = 0, t2.havedict = 0, t2.dmax = 32768, t2.head = null, t2.hold = 0, t2.bits = 0, t2.lencode = t2.lendyn = new rn.Buf32(852), t2.distcode = t2.distdyn = new rn.Buf32(592), t2.sane = 1, t2.back = -1, 0) : ln;
}
function pn(e2) {
  var t2;
  return e2 && e2.state ? ((t2 = e2.state).wsize = 0, t2.whave = 0, t2.wnext = 0, fn(e2)) : ln;
}
function mn(e2, t2) {
  var r2, n2;
  return e2 && e2.state ? (n2 = e2.state, t2 < 0 ? (r2 = 0, t2 = -t2) : (r2 = 1 + (t2 >> 4), t2 < 48 && (t2 &= 15)), t2 && (t2 < 8 || t2 > 15) ? ln : (null !== n2.window && n2.wbits !== t2 && (n2.window = null), n2.wrap = r2, n2.wbits = t2, pn(e2))) : ln;
}
function gn(e2, t2) {
  var r2, n2;
  return e2 ? (n2 = new dn(), e2.state = n2, n2.window = null, 0 !== (r2 = mn(e2, t2)) && (e2.state = null), r2) : ln;
}
var bn;
var yn;
var vn = true;
function wn(e2) {
  if (vn) {
    var t2;
    for (bn = new rn.Buf32(512), yn = new rn.Buf32(32), t2 = 0; t2 < 144; )
      e2.lens[t2++] = 8;
    for (; t2 < 256; )
      e2.lens[t2++] = 9;
    for (; t2 < 280; )
      e2.lens[t2++] = 7;
    for (; t2 < 288; )
      e2.lens[t2++] = 8;
    for (on3(1, e2.lens, 0, 288, bn, 0, e2.work, {
      bits: 9
    }), t2 = 0; t2 < 32; )
      e2.lens[t2++] = 5;
    on3(2, e2.lens, 0, 32, yn, 0, e2.work, {
      bits: 5
    }), vn = false;
  }
  e2.lencode = bn, e2.lenbits = 9, e2.distcode = yn, e2.distbits = 5;
}
function _n(e2, t2, r2, n2) {
  var a2, i2 = e2.state;
  return null === i2.window && (i2.wsize = 1 << i2.wbits, i2.wnext = 0, i2.whave = 0, i2.window = new rn.Buf8(i2.wsize)), n2 >= i2.wsize ? (rn.arraySet(i2.window, t2, r2 - i2.wsize, i2.wsize, 0), i2.wnext = 0, i2.whave = i2.wsize) : ((a2 = i2.wsize - i2.wnext) > n2 && (a2 = n2), rn.arraySet(i2.window, t2, r2 - n2, a2, i2.wnext), (n2 -= a2) ? (rn.arraySet(i2.window, t2, r2 - n2, n2, 0), i2.wnext = n2, i2.whave = i2.wsize) : (i2.wnext += a2, i2.wnext === i2.wsize && (i2.wnext = 0), i2.whave < i2.wsize && (i2.whave += a2))), 0;
}
Kr.inflateReset = pn, Kr.inflateReset2 = mn, Kr.inflateResetKeep = fn, Kr.inflateInit = function(e2) {
  return gn(e2, 15);
}, Kr.inflateInit2 = gn, Kr.inflate = function(e2, t2) {
  var r2, n2, a2, i2, s2, o2, l2, c2, h2, u2, d2, f2, p2, m2, g2, b2, y2, v2, w2, _2, k2, S2, x2, C2, E2 = 0, P2 = new rn.Buf8(4), A2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  if (!e2 || !e2.state || !e2.output || !e2.input && 0 !== e2.avail_in)
    return ln;
  (r2 = e2.state).mode === cn && (r2.mode = 13), s2 = e2.next_out, a2 = e2.output, l2 = e2.avail_out, i2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, c2 = r2.hold, h2 = r2.bits, u2 = o2, d2 = l2, S2 = 0;
  e:
    for (; ; )
      switch (r2.mode) {
        case 1:
          if (0 === r2.wrap) {
            r2.mode = 13;
            break;
          }
          for (; h2 < 16; ) {
            if (0 === o2)
              break e;
            o2--, c2 += n2[i2++] << h2, h2 += 8;
          }
          if (2 & r2.wrap && 35615 === c2) {
            r2.check = 0, P2[0] = 255 & c2, P2[1] = c2 >>> 8 & 255, r2.check = an(r2.check, P2, 2, 0), c2 = 0, h2 = 0, r2.mode = 2;
            break;
          }
          if (r2.flags = 0, r2.head && (r2.head.done = false), !(1 & r2.wrap) || (((255 & c2) << 8) + (c2 >> 8)) % 31) {
            e2.msg = "incorrect header check", r2.mode = hn;
            break;
          }
          if (8 != (15 & c2)) {
            e2.msg = "unknown compression method", r2.mode = hn;
            break;
          }
          if (h2 -= 4, k2 = 8 + (15 & (c2 >>>= 4)), 0 === r2.wbits)
            r2.wbits = k2;
          else if (k2 > r2.wbits) {
            e2.msg = "invalid window size", r2.mode = hn;
            break;
          }
          r2.dmax = 1 << k2, e2.adler = r2.check = 1, r2.mode = 512 & c2 ? 10 : cn, c2 = 0, h2 = 0;
          break;
        case 2:
          for (; h2 < 16; ) {
            if (0 === o2)
              break e;
            o2--, c2 += n2[i2++] << h2, h2 += 8;
          }
          if (r2.flags = c2, 8 != (255 & r2.flags)) {
            e2.msg = "unknown compression method", r2.mode = hn;
            break;
          }
          if (57344 & r2.flags) {
            e2.msg = "unknown header flags set", r2.mode = hn;
            break;
          }
          r2.head && (r2.head.text = c2 >> 8 & 1), 512 & r2.flags && (P2[0] = 255 & c2, P2[1] = c2 >>> 8 & 255, r2.check = an(r2.check, P2, 2, 0)), c2 = 0, h2 = 0, r2.mode = 3;
        case 3:
          for (; h2 < 32; ) {
            if (0 === o2)
              break e;
            o2--, c2 += n2[i2++] << h2, h2 += 8;
          }
          r2.head && (r2.head.time = c2), 512 & r2.flags && (P2[0] = 255 & c2, P2[1] = c2 >>> 8 & 255, P2[2] = c2 >>> 16 & 255, P2[3] = c2 >>> 24 & 255, r2.check = an(r2.check, P2, 4, 0)), c2 = 0, h2 = 0, r2.mode = 4;
        case 4:
          for (; h2 < 16; ) {
            if (0 === o2)
              break e;
            o2--, c2 += n2[i2++] << h2, h2 += 8;
          }
          r2.head && (r2.head.xflags = 255 & c2, r2.head.os = c2 >> 8), 512 & r2.flags && (P2[0] = 255 & c2, P2[1] = c2 >>> 8 & 255, r2.check = an(r2.check, P2, 2, 0)), c2 = 0, h2 = 0, r2.mode = 5;
        case 5:
          if (1024 & r2.flags) {
            for (; h2 < 16; ) {
              if (0 === o2)
                break e;
              o2--, c2 += n2[i2++] << h2, h2 += 8;
            }
            r2.length = c2, r2.head && (r2.head.extra_len = c2), 512 & r2.flags && (P2[0] = 255 & c2, P2[1] = c2 >>> 8 & 255, r2.check = an(r2.check, P2, 2, 0)), c2 = 0, h2 = 0;
          } else
            r2.head && (r2.head.extra = null);
          r2.mode = 6;
        case 6:
          if (1024 & r2.flags && ((f2 = r2.length) > o2 && (f2 = o2), f2 && (r2.head && (k2 = r2.head.extra_len - r2.length, r2.head.extra || (r2.head.extra = new Array(r2.head.extra_len)), rn.arraySet(r2.head.extra, n2, i2, f2, k2)), 512 & r2.flags && (r2.check = an(r2.check, n2, f2, i2)), o2 -= f2, i2 += f2, r2.length -= f2), r2.length))
            break e;
          r2.length = 0, r2.mode = 7;
        case 7:
          if (2048 & r2.flags) {
            if (0 === o2)
              break e;
            f2 = 0;
            do {
              k2 = n2[i2 + f2++], r2.head && k2 && r2.length < 65536 && (r2.head.name += String.fromCharCode(k2));
            } while (k2 && f2 < o2);
            if (512 & r2.flags && (r2.check = an(r2.check, n2, f2, i2)), o2 -= f2, i2 += f2, k2)
              break e;
          } else
            r2.head && (r2.head.name = null);
          r2.length = 0, r2.mode = 8;
        case 8:
          if (4096 & r2.flags) {
            if (0 === o2)
              break e;
            f2 = 0;
            do {
              k2 = n2[i2 + f2++], r2.head && k2 && r2.length < 65536 && (r2.head.comment += String.fromCharCode(k2));
            } while (k2 && f2 < o2);
            if (512 & r2.flags && (r2.check = an(r2.check, n2, f2, i2)), o2 -= f2, i2 += f2, k2)
              break e;
          } else
            r2.head && (r2.head.comment = null);
          r2.mode = 9;
        case 9:
          if (512 & r2.flags) {
            for (; h2 < 16; ) {
              if (0 === o2)
                break e;
              o2--, c2 += n2[i2++] << h2, h2 += 8;
            }
            if (c2 !== (65535 & r2.check)) {
              e2.msg = "header crc mismatch", r2.mode = hn;
              break;
            }
            c2 = 0, h2 = 0;
          }
          r2.head && (r2.head.hcrc = r2.flags >> 9 & 1, r2.head.done = true), e2.adler = r2.check = 0, r2.mode = cn;
          break;
        case 10:
          for (; h2 < 32; ) {
            if (0 === o2)
              break e;
            o2--, c2 += n2[i2++] << h2, h2 += 8;
          }
          e2.adler = r2.check = un(c2), c2 = 0, h2 = 0, r2.mode = 11;
        case 11:
          if (0 === r2.havedict)
            return e2.next_out = s2, e2.avail_out = l2, e2.next_in = i2, e2.avail_in = o2, r2.hold = c2, r2.bits = h2, 2;
          e2.adler = r2.check = 1, r2.mode = cn;
        case cn:
          if (5 === t2 || 6 === t2)
            break e;
        case 13:
          if (r2.last) {
            c2 >>>= 7 & h2, h2 -= 7 & h2, r2.mode = 27;
            break;
          }
          for (; h2 < 3; ) {
            if (0 === o2)
              break e;
            o2--, c2 += n2[i2++] << h2, h2 += 8;
          }
          switch (r2.last = 1 & c2, h2 -= 1, 3 & (c2 >>>= 1)) {
            case 0:
              r2.mode = 14;
              break;
            case 1:
              if (wn(r2), r2.mode = 20, 6 === t2) {
                c2 >>>= 2, h2 -= 2;
                break e;
              }
              break;
            case 2:
              r2.mode = 17;
              break;
            case 3:
              e2.msg = "invalid block type", r2.mode = hn;
          }
          c2 >>>= 2, h2 -= 2;
          break;
        case 14:
          for (c2 >>>= 7 & h2, h2 -= 7 & h2; h2 < 32; ) {
            if (0 === o2)
              break e;
            o2--, c2 += n2[i2++] << h2, h2 += 8;
          }
          if ((65535 & c2) != (c2 >>> 16 ^ 65535)) {
            e2.msg = "invalid stored block lengths", r2.mode = hn;
            break;
          }
          if (r2.length = 65535 & c2, c2 = 0, h2 = 0, r2.mode = 15, 6 === t2)
            break e;
        case 15:
          r2.mode = 16;
        case 16:
          if (f2 = r2.length) {
            if (f2 > o2 && (f2 = o2), f2 > l2 && (f2 = l2), 0 === f2)
              break e;
            rn.arraySet(a2, n2, i2, f2, s2), o2 -= f2, i2 += f2, l2 -= f2, s2 += f2, r2.length -= f2;
            break;
          }
          r2.mode = cn;
          break;
        case 17:
          for (; h2 < 14; ) {
            if (0 === o2)
              break e;
            o2--, c2 += n2[i2++] << h2, h2 += 8;
          }
          if (r2.nlen = 257 + (31 & c2), c2 >>>= 5, h2 -= 5, r2.ndist = 1 + (31 & c2), c2 >>>= 5, h2 -= 5, r2.ncode = 4 + (15 & c2), c2 >>>= 4, h2 -= 4, r2.nlen > 286 || r2.ndist > 30) {
            e2.msg = "too many length or distance symbols", r2.mode = hn;
            break;
          }
          r2.have = 0, r2.mode = 18;
        case 18:
          for (; r2.have < r2.ncode; ) {
            for (; h2 < 3; ) {
              if (0 === o2)
                break e;
              o2--, c2 += n2[i2++] << h2, h2 += 8;
            }
            r2.lens[A2[r2.have++]] = 7 & c2, c2 >>>= 3, h2 -= 3;
          }
          for (; r2.have < 19; )
            r2.lens[A2[r2.have++]] = 0;
          if (r2.lencode = r2.lendyn, r2.lenbits = 7, x2 = {
            bits: r2.lenbits
          }, S2 = on3(0, r2.lens, 0, 19, r2.lencode, 0, r2.work, x2), r2.lenbits = x2.bits, S2) {
            e2.msg = "invalid code lengths set", r2.mode = hn;
            break;
          }
          r2.have = 0, r2.mode = 19;
        case 19:
          for (; r2.have < r2.nlen + r2.ndist; ) {
            for (; b2 = (E2 = r2.lencode[c2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, y2 = 65535 & E2, !((g2 = E2 >>> 24) <= h2); ) {
              if (0 === o2)
                break e;
              o2--, c2 += n2[i2++] << h2, h2 += 8;
            }
            if (y2 < 16)
              c2 >>>= g2, h2 -= g2, r2.lens[r2.have++] = y2;
            else {
              if (16 === y2) {
                for (C2 = g2 + 2; h2 < C2; ) {
                  if (0 === o2)
                    break e;
                  o2--, c2 += n2[i2++] << h2, h2 += 8;
                }
                if (c2 >>>= g2, h2 -= g2, 0 === r2.have) {
                  e2.msg = "invalid bit length repeat", r2.mode = hn;
                  break;
                }
                k2 = r2.lens[r2.have - 1], f2 = 3 + (3 & c2), c2 >>>= 2, h2 -= 2;
              } else if (17 === y2) {
                for (C2 = g2 + 3; h2 < C2; ) {
                  if (0 === o2)
                    break e;
                  o2--, c2 += n2[i2++] << h2, h2 += 8;
                }
                h2 -= g2, k2 = 0, f2 = 3 + (7 & (c2 >>>= g2)), c2 >>>= 3, h2 -= 3;
              } else {
                for (C2 = g2 + 7; h2 < C2; ) {
                  if (0 === o2)
                    break e;
                  o2--, c2 += n2[i2++] << h2, h2 += 8;
                }
                h2 -= g2, k2 = 0, f2 = 11 + (127 & (c2 >>>= g2)), c2 >>>= 7, h2 -= 7;
              }
              if (r2.have + f2 > r2.nlen + r2.ndist) {
                e2.msg = "invalid bit length repeat", r2.mode = hn;
                break;
              }
              for (; f2--; )
                r2.lens[r2.have++] = k2;
            }
          }
          if (r2.mode === hn)
            break;
          if (0 === r2.lens[256]) {
            e2.msg = "invalid code -- missing end-of-block", r2.mode = hn;
            break;
          }
          if (r2.lenbits = 9, x2 = {
            bits: r2.lenbits
          }, S2 = on3(1, r2.lens, 0, r2.nlen, r2.lencode, 0, r2.work, x2), r2.lenbits = x2.bits, S2) {
            e2.msg = "invalid literal/lengths set", r2.mode = hn;
            break;
          }
          if (r2.distbits = 6, r2.distcode = r2.distdyn, x2 = {
            bits: r2.distbits
          }, S2 = on3(2, r2.lens, r2.nlen, r2.ndist, r2.distcode, 0, r2.work, x2), r2.distbits = x2.bits, S2) {
            e2.msg = "invalid distances set", r2.mode = hn;
            break;
          }
          if (r2.mode = 20, 6 === t2)
            break e;
        case 20:
          r2.mode = 21;
        case 21:
          if (o2 >= 6 && l2 >= 258) {
            e2.next_out = s2, e2.avail_out = l2, e2.next_in = i2, e2.avail_in = o2, r2.hold = c2, r2.bits = h2, sn(e2, d2), s2 = e2.next_out, a2 = e2.output, l2 = e2.avail_out, i2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, c2 = r2.hold, h2 = r2.bits, r2.mode === cn && (r2.back = -1);
            break;
          }
          for (r2.back = 0; b2 = (E2 = r2.lencode[c2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, y2 = 65535 & E2, !((g2 = E2 >>> 24) <= h2); ) {
            if (0 === o2)
              break e;
            o2--, c2 += n2[i2++] << h2, h2 += 8;
          }
          if (b2 && !(240 & b2)) {
            for (v2 = g2, w2 = b2, _2 = y2; b2 = (E2 = r2.lencode[_2 + ((c2 & (1 << v2 + w2) - 1) >> v2)]) >>> 16 & 255, y2 = 65535 & E2, !(v2 + (g2 = E2 >>> 24) <= h2); ) {
              if (0 === o2)
                break e;
              o2--, c2 += n2[i2++] << h2, h2 += 8;
            }
            c2 >>>= v2, h2 -= v2, r2.back += v2;
          }
          if (c2 >>>= g2, h2 -= g2, r2.back += g2, r2.length = y2, 0 === b2) {
            r2.mode = 26;
            break;
          }
          if (32 & b2) {
            r2.back = -1, r2.mode = cn;
            break;
          }
          if (64 & b2) {
            e2.msg = "invalid literal/length code", r2.mode = hn;
            break;
          }
          r2.extra = 15 & b2, r2.mode = 22;
        case 22:
          if (r2.extra) {
            for (C2 = r2.extra; h2 < C2; ) {
              if (0 === o2)
                break e;
              o2--, c2 += n2[i2++] << h2, h2 += 8;
            }
            r2.length += c2 & (1 << r2.extra) - 1, c2 >>>= r2.extra, h2 -= r2.extra, r2.back += r2.extra;
          }
          r2.was = r2.length, r2.mode = 23;
        case 23:
          for (; b2 = (E2 = r2.distcode[c2 & (1 << r2.distbits) - 1]) >>> 16 & 255, y2 = 65535 & E2, !((g2 = E2 >>> 24) <= h2); ) {
            if (0 === o2)
              break e;
            o2--, c2 += n2[i2++] << h2, h2 += 8;
          }
          if (!(240 & b2)) {
            for (v2 = g2, w2 = b2, _2 = y2; b2 = (E2 = r2.distcode[_2 + ((c2 & (1 << v2 + w2) - 1) >> v2)]) >>> 16 & 255, y2 = 65535 & E2, !(v2 + (g2 = E2 >>> 24) <= h2); ) {
              if (0 === o2)
                break e;
              o2--, c2 += n2[i2++] << h2, h2 += 8;
            }
            c2 >>>= v2, h2 -= v2, r2.back += v2;
          }
          if (c2 >>>= g2, h2 -= g2, r2.back += g2, 64 & b2) {
            e2.msg = "invalid distance code", r2.mode = hn;
            break;
          }
          r2.offset = y2, r2.extra = 15 & b2, r2.mode = 24;
        case 24:
          if (r2.extra) {
            for (C2 = r2.extra; h2 < C2; ) {
              if (0 === o2)
                break e;
              o2--, c2 += n2[i2++] << h2, h2 += 8;
            }
            r2.offset += c2 & (1 << r2.extra) - 1, c2 >>>= r2.extra, h2 -= r2.extra, r2.back += r2.extra;
          }
          if (r2.offset > r2.dmax) {
            e2.msg = "invalid distance too far back", r2.mode = hn;
            break;
          }
          r2.mode = 25;
        case 25:
          if (0 === l2)
            break e;
          if (f2 = d2 - l2, r2.offset > f2) {
            if ((f2 = r2.offset - f2) > r2.whave && r2.sane) {
              e2.msg = "invalid distance too far back", r2.mode = hn;
              break;
            }
            f2 > r2.wnext ? (f2 -= r2.wnext, p2 = r2.wsize - f2) : p2 = r2.wnext - f2, f2 > r2.length && (f2 = r2.length), m2 = r2.window;
          } else
            m2 = a2, p2 = s2 - r2.offset, f2 = r2.length;
          f2 > l2 && (f2 = l2), l2 -= f2, r2.length -= f2;
          do {
            a2[s2++] = m2[p2++];
          } while (--f2);
          0 === r2.length && (r2.mode = 21);
          break;
        case 26:
          if (0 === l2)
            break e;
          a2[s2++] = r2.length, l2--, r2.mode = 21;
          break;
        case 27:
          if (r2.wrap) {
            for (; h2 < 32; ) {
              if (0 === o2)
                break e;
              o2--, c2 |= n2[i2++] << h2, h2 += 8;
            }
            if (d2 -= l2, e2.total_out += d2, r2.total += d2, d2 && (e2.adler = r2.check = r2.flags ? an(r2.check, a2, d2, s2 - d2) : nn(r2.check, a2, d2, s2 - d2)), d2 = l2, (r2.flags ? c2 : un(c2)) !== r2.check) {
              e2.msg = "incorrect data check", r2.mode = hn;
              break;
            }
            c2 = 0, h2 = 0;
          }
          r2.mode = 28;
        case 28:
          if (r2.wrap && r2.flags) {
            for (; h2 < 32; ) {
              if (0 === o2)
                break e;
              o2--, c2 += n2[i2++] << h2, h2 += 8;
            }
            if (c2 !== (4294967295 & r2.total)) {
              e2.msg = "incorrect length check", r2.mode = hn;
              break;
            }
            c2 = 0, h2 = 0;
          }
          r2.mode = 29;
        case 29:
          S2 = 1;
          break e;
        case hn:
          S2 = -3;
          break e;
        case 31:
          return -4;
        default:
          return ln;
      }
  return e2.next_out = s2, e2.avail_out = l2, e2.next_in = i2, e2.avail_in = o2, r2.hold = c2, r2.bits = h2, (r2.wsize || d2 !== e2.avail_out && r2.mode < hn && (r2.mode < 27 || 4 !== t2)) && _n(e2, e2.output, e2.next_out, d2 - e2.avail_out), u2 -= e2.avail_in, d2 -= e2.avail_out, e2.total_in += u2, e2.total_out += d2, r2.total += d2, r2.wrap && d2 && (e2.adler = r2.check = r2.flags ? an(r2.check, a2, d2, e2.next_out - d2) : nn(r2.check, a2, d2, e2.next_out - d2)), e2.data_type = r2.bits + (r2.last ? 64 : 0) + (r2.mode === cn ? 128 : 0) + (20 === r2.mode || 15 === r2.mode ? 256 : 0), (0 === u2 && 0 === d2 || 4 === t2) && 0 === S2 && (S2 = -5), S2;
}, Kr.inflateEnd = function(e2) {
  if (!e2 || !e2.state)
    return ln;
  var t2 = e2.state;
  return t2.window && (t2.window = null), e2.state = null, 0;
}, Kr.inflateGetHeader = function(e2, t2) {
  var r2;
  return e2 && e2.state && 2 & (r2 = e2.state).wrap ? (r2.head = t2, t2.done = false, 0) : ln;
}, Kr.inflateSetDictionary = function(e2, t2) {
  var r2, n2 = t2.length;
  return e2 && e2.state ? 0 !== (r2 = e2.state).wrap && 11 !== r2.mode ? ln : 11 === r2.mode && nn(1, t2, n2, 0) !== r2.check ? -3 : _n(e2, t2, n2, n2) ? (r2.mode = 31, -4) : (r2.havedict = 1, 0) : ln;
}, Kr.inflateInfo = "pako inflate (from Nodeca project)";
var kn = {
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_BUF_ERROR: -5,
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  Z_BINARY: 0,
  Z_TEXT: 1,
  Z_UNKNOWN: 2,
  Z_DEFLATED: 8
};
var Sn = Kr;
var xn = ft;
var Cn = Br;
var En = kn;
var Pn = ar;
var An = Lr;
var Tn = function Tn2() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
};
var Nn = Object.prototype.toString;
function Rn(e2) {
  if (!(this instanceof Rn))
    return new Rn(e2);
  this.options = xn.assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ""
  }, e2 || {});
  var t2 = this.options;
  t2.raw && t2.windowBits >= 0 && t2.windowBits < 16 && (t2.windowBits = -t2.windowBits, 0 === t2.windowBits && (t2.windowBits = -15)), !(t2.windowBits >= 0 && t2.windowBits < 16) || e2 && e2.windowBits || (t2.windowBits += 32), t2.windowBits > 15 && t2.windowBits < 48 && (15 & t2.windowBits || (t2.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new An(), this.strm.avail_out = 0;
  var r2 = Sn.inflateInit2(this.strm, t2.windowBits);
  if (r2 !== En.Z_OK)
    throw new Error(Pn[r2]);
  if (this.header = new Tn(), Sn.inflateGetHeader(this.strm, this.header), t2.dictionary && ("string" == typeof t2.dictionary ? t2.dictionary = Cn.string2buf(t2.dictionary) : "[object ArrayBuffer]" === Nn.call(t2.dictionary) && (t2.dictionary = new Uint8Array(t2.dictionary)), t2.raw && (r2 = Sn.inflateSetDictionary(this.strm, t2.dictionary)) !== En.Z_OK))
    throw new Error(Pn[r2]);
}
function Bn(e2, t2) {
  var r2 = new Rn(t2);
  if (r2.push(e2, true), r2.err)
    throw r2.msg || Pn[r2.err];
  return r2.result;
}
Rn.prototype.push = function(e2, t2) {
  var r2, n2, a2, i2, s2, o2 = this.strm, l2 = this.options.chunkSize, c2 = this.options.dictionary, h2 = false;
  if (this.ended)
    return false;
  n2 = t2 === ~~t2 ? t2 : true === t2 ? En.Z_FINISH : En.Z_NO_FLUSH, "string" == typeof e2 ? o2.input = Cn.binstring2buf(e2) : "[object ArrayBuffer]" === Nn.call(e2) ? o2.input = new Uint8Array(e2) : o2.input = e2, o2.next_in = 0, o2.avail_in = o2.input.length;
  do {
    if (0 === o2.avail_out && (o2.output = new xn.Buf8(l2), o2.next_out = 0, o2.avail_out = l2), (r2 = Sn.inflate(o2, En.Z_NO_FLUSH)) === En.Z_NEED_DICT && c2 && (r2 = Sn.inflateSetDictionary(this.strm, c2)), r2 === En.Z_BUF_ERROR && true === h2 && (r2 = En.Z_OK, h2 = false), r2 !== En.Z_STREAM_END && r2 !== En.Z_OK)
      return this.onEnd(r2), this.ended = true, false;
    o2.next_out && (0 !== o2.avail_out && r2 !== En.Z_STREAM_END && (0 !== o2.avail_in || n2 !== En.Z_FINISH && n2 !== En.Z_SYNC_FLUSH) || ("string" === this.options.to ? (a2 = Cn.utf8border(o2.output, o2.next_out), i2 = o2.next_out - a2, s2 = Cn.buf2string(o2.output, a2), o2.next_out = i2, o2.avail_out = l2 - i2, i2 && xn.arraySet(o2.output, o2.output, a2, i2, 0), this.onData(s2)) : this.onData(xn.shrinkBuf(o2.output, o2.next_out)))), 0 === o2.avail_in && 0 === o2.avail_out && (h2 = true);
  } while ((o2.avail_in > 0 || 0 === o2.avail_out) && r2 !== En.Z_STREAM_END);
  return r2 === En.Z_STREAM_END && (n2 = En.Z_FINISH), n2 === En.Z_FINISH ? (r2 = Sn.inflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === En.Z_OK) : n2 !== En.Z_SYNC_FLUSH || (this.onEnd(En.Z_OK), o2.avail_out = 0, true);
}, Rn.prototype.onData = function(e2) {
  this.chunks.push(e2);
}, Rn.prototype.onEnd = function(e2) {
  e2 === En.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = xn.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
}, Xr.Inflate = Rn, Xr.inflate = Bn, Xr.inflateRaw = function(e2, t2) {
  return (t2 = t2 || {}).raw = true, Bn(e2, t2);
}, Xr.ungzip = Bn;
var Mn = {};
(0, ft.assign)(Mn, pt, Xr, kn);
var Dn = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array;
var On = Mn;
var In = me();
var zn = be;
var Fn = Dn ? "uint8array" : "array";
function Ln(e2, t2) {
  zn.call(this, "FlateWorker/" + e2), this._pako = null, this._pakoAction = e2, this._pakoOptions = t2, this.meta = {};
}
dt.magic = "\b\0", In.inherits(Ln, zn), Ln.prototype.processChunk = function(e2) {
  this.meta = e2.meta, null === this._pako && this._createPako(), this._pako.push(In.transformTo(Fn, e2.data), false);
}, Ln.prototype.flush = function() {
  zn.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], true);
}, Ln.prototype.cleanUp = function() {
  zn.prototype.cleanUp.call(this), this._pako = null;
}, Ln.prototype._createPako = function() {
  this._pako = new On[this._pakoAction]({
    raw: true,
    level: this._pakoOptions.level || -1
  });
  var e2 = this;
  this._pako.onData = function(t2) {
    e2.push({
      data: t2,
      meta: e2.meta
    });
  };
}, dt.compressWorker = function(e2) {
  return new Ln("Deflate", e2);
}, dt.uncompressWorker = function() {
  return new Ln("Inflate", {});
};
var jn = be;
ut.STORE = {
  magic: "\0\0",
  compressWorker: function compressWorker() {
    return new jn("STORE compression");
  },
  uncompressWorker: function uncompressWorker() {
    return new jn("STORE decompression");
  }
}, ut.DEFLATE = dt;
var Un = {
  LOCAL_FILE_HEADER: "PK",
  CENTRAL_FILE_HEADER: "PK",
  CENTRAL_DIRECTORY_END: "PK",
  ZIP64_CENTRAL_DIRECTORY_LOCATOR: "PK\x07",
  ZIP64_CENTRAL_DIRECTORY_END: "PK",
  DATA_DESCRIPTOR: "PK\x07\b"
};
var $n = me();
var Hn = be;
var Wn = u;
var Zn = je;
var Vn = Un;
var qn = function qn2(e2, t2) {
  var r2, n2 = "";
  for (r2 = 0; r2 < t2; r2++)
    n2 += String.fromCharCode(255 & e2), e2 >>>= 8;
  return n2;
};
var Xn = function Xn2(e2, t2, r2, n2, a2, i2) {
  var s2, o2, l2 = e2.file, c2 = e2.compression, h2 = i2 !== Wn.utf8encode, u2 = $n.transformTo("string", i2(l2.name)), d2 = $n.transformTo("string", Wn.utf8encode(l2.name)), f2 = l2.comment, p2 = $n.transformTo("string", i2(f2)), m2 = $n.transformTo("string", Wn.utf8encode(f2)), g2 = d2.length !== l2.name.length, b2 = m2.length !== f2.length, y2 = "", v2 = "", w2 = "", _2 = l2.dir, k2 = l2.date, S2 = {
    crc32: 0,
    compressedSize: 0,
    uncompressedSize: 0
  };
  t2 && !r2 || (S2.crc32 = e2.crc32, S2.compressedSize = e2.compressedSize, S2.uncompressedSize = e2.uncompressedSize);
  var x2 = 0;
  t2 && (x2 |= 8), h2 || !g2 && !b2 || (x2 |= 2048);
  var C2, E2, P2, A2 = 0, T2 = 0;
  _2 && (A2 |= 16), "UNIX" === a2 ? (T2 = 798, A2 |= (C2 = l2.unixPermissions, E2 = _2, P2 = C2, C2 || (P2 = E2 ? 16893 : 33204), (65535 & P2) << 16)) : (T2 = 20, A2 |= 63 & (l2.dosPermissions || 0)), s2 = k2.getUTCHours(), s2 <<= 6, s2 |= k2.getUTCMinutes(), s2 <<= 5, s2 |= k2.getUTCSeconds() / 2, o2 = k2.getUTCFullYear() - 1980, o2 <<= 4, o2 |= k2.getUTCMonth() + 1, o2 <<= 5, o2 |= k2.getUTCDate(), g2 && (v2 = qn(1, 1) + qn(Zn(u2), 4) + d2, y2 += "up" + qn(v2.length, 2) + v2), b2 && (w2 = qn(1, 1) + qn(Zn(p2), 4) + m2, y2 += "uc" + qn(w2.length, 2) + w2);
  var N2 = "";
  return N2 += "\n\0", N2 += qn(x2, 2), N2 += c2.magic, N2 += qn(s2, 2), N2 += qn(o2, 2), N2 += qn(S2.crc32, 4), N2 += qn(S2.compressedSize, 4), N2 += qn(S2.uncompressedSize, 4), N2 += qn(u2.length, 2), N2 += qn(y2.length, 2), {
    fileRecord: Vn.LOCAL_FILE_HEADER + N2 + u2 + y2,
    dirRecord: Vn.CENTRAL_FILE_HEADER + qn(T2, 2) + N2 + qn(p2.length, 2) + "\0\0\0\0" + qn(A2, 4) + qn(n2, 4) + u2 + y2 + p2
  };
};
var Kn = function Kn2(e2) {
  return Vn.DATA_DESCRIPTOR + qn(e2.crc32, 4) + qn(e2.compressedSize, 4) + qn(e2.uncompressedSize, 4);
};
function Yn(e2, t2, r2, n2) {
  Hn.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t2, this.zipPlatform = r2, this.encodeFileName = n2, this.streamFiles = e2, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
}
$n.inherits(Yn, Hn), Yn.prototype.push = function(e2) {
  var t2 = e2.meta.percent || 0, r2 = this.entriesCount, n2 = this._sources.length;
  this.accumulate ? this.contentBuffer.push(e2) : (this.bytesWritten += e2.data.length, Hn.prototype.push.call(this, {
    data: e2.data,
    meta: {
      currentFile: this.currentFile,
      percent: r2 ? (t2 + 100 * (r2 - n2 - 1)) / r2 : 100
    }
  }));
}, Yn.prototype.openedSource = function(e2) {
  this.currentSourceOffset = this.bytesWritten, this.currentFile = e2.file.name;
  var t2 = this.streamFiles && !e2.file.dir;
  if (t2) {
    var r2 = Xn(e2, t2, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
    this.push({
      data: r2.fileRecord,
      meta: {
        percent: 0
      }
    });
  } else
    this.accumulate = true;
}, Yn.prototype.closedSource = function(e2) {
  this.accumulate = false;
  var t2 = this.streamFiles && !e2.file.dir, r2 = Xn(e2, t2, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
  if (this.dirRecords.push(r2.dirRecord), t2)
    this.push({
      data: Kn(e2),
      meta: {
        percent: 100
      }
    });
  else
    for (this.push({
      data: r2.fileRecord,
      meta: {
        percent: 0
      }
    }); this.contentBuffer.length; )
      this.push(this.contentBuffer.shift());
  this.currentFile = null;
}, Yn.prototype.flush = function() {
  for (var e2 = this.bytesWritten, t2 = 0; t2 < this.dirRecords.length; t2++)
    this.push({
      data: this.dirRecords[t2],
      meta: {
        percent: 100
      }
    });
  var r2 = this.bytesWritten - e2, n2 = function(e3, t3, r3, n3, a2) {
    var i2 = $n.transformTo("string", a2(n3));
    return Vn.CENTRAL_DIRECTORY_END + "\0\0\0\0" + qn(e3, 2) + qn(e3, 2) + qn(t3, 4) + qn(r3, 4) + qn(i2.length, 2) + i2;
  }(this.dirRecords.length, r2, e2, this.zipComment, this.encodeFileName);
  this.push({
    data: n2,
    meta: {
      percent: 100
    }
  });
}, Yn.prototype.prepareNextSource = function() {
  this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
}, Yn.prototype.registerPrevious = function(e2) {
  this._sources.push(e2);
  var t2 = this;
  return e2.on("data", function(e3) {
    t2.processChunk(e3);
  }), e2.on("end", function() {
    t2.closedSource(t2.previous.streamInfo), t2._sources.length ? t2.prepareNextSource() : t2.end();
  }), e2.on("error", function(e3) {
    t2.error(e3);
  }), this;
}, Yn.prototype.resume = function() {
  return !!Hn.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
}, Yn.prototype.error = function(e2) {
  var t2 = this._sources;
  if (!Hn.prototype.error.call(this, e2))
    return false;
  for (var r2 = 0; r2 < t2.length; r2++)
    try {
      t2[r2].error(e2);
    } catch (e3) {
    }
  return true;
}, Yn.prototype.lock = function() {
  Hn.prototype.lock.call(this);
  for (var e2 = this._sources, t2 = 0; t2 < e2.length; t2++)
    e2[t2].lock();
};
var Gn = ut;
var Jn = Yn;
ht.generateWorker = function(e2, t2, r2) {
  var n2 = new Jn(t2.streamFiles, r2, t2.platform, t2.encodeFileName), a2 = 0;
  try {
    e2.forEach(function(e3, r3) {
      a2++;
      var i2 = function(e4, t3) {
        var r4 = e4 || t3, n3 = Gn[r4];
        if (!n3)
          throw new Error(r4 + " is not a valid compression method !");
        return n3;
      }(r3.options.compression, t2.compression), s2 = r3.options.compressionOptions || t2.compressionOptions || {}, o2 = r3.dir, l2 = r3.date;
      r3._compressWorker(i2, s2).withStreamInfo("file", {
        name: e3,
        dir: o2,
        date: l2,
        comment: r3.comment || "",
        unixPermissions: r3.unixPermissions,
        dosPermissions: r3.dosPermissions
      }).pipe(n2);
    }), n2.entriesCount = a2;
  } catch (e3) {
    n2.error(e3);
  }
  return n2;
};
var Qn = me();
var ea = be;
function ta(e2, t2) {
  ea.call(this, "Nodejs stream input adapter for " + e2), this._upstreamEnded = false, this._bindStream(t2);
}
Qn.inherits(ta, ea), ta.prototype._bindStream = function(e2) {
  var t2 = this;
  this._stream = e2, e2.pause(), e2.on("data", function(e3) {
    t2.push({
      data: e3,
      meta: {
        percent: 0
      }
    });
  }).on("error", function(e3) {
    t2.isPaused ? this.generatedError = e3 : t2.error(e3);
  }).on("end", function() {
    t2.isPaused ? t2._upstreamEnded = true : t2.end();
  });
}, ta.prototype.pause = function() {
  return !!ea.prototype.pause.call(this) && (this._stream.pause(), true);
}, ta.prototype.resume = function() {
  return !!ea.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
};
var ra = ta;
var na = u;
var aa = me();
var ia = be;
var sa = Be;
var oa = Me;
var la = Qe;
var ca = ct;
var ha = ht;
var ua = ue;
var da = ra;
var fa = function fa2(e2, t2, r2) {
  var n2, a2 = aa.getTypeOf(t2), i2 = aa.extend(r2 || {}, oa);
  i2.date = i2.date || /* @__PURE__ */ new Date(), null !== i2.compression && (i2.compression = i2.compression.toUpperCase()), "string" == typeof i2.unixPermissions && (i2.unixPermissions = parseInt(i2.unixPermissions, 8)), i2.unixPermissions && 16384 & i2.unixPermissions && (i2.dir = true), i2.dosPermissions && 16 & i2.dosPermissions && (i2.dir = true), i2.dir && (e2 = ma(e2)), i2.createFolders && (n2 = pa(e2)) && ga.call(this, n2, true);
  var s2 = "string" === a2 && false === i2.binary && false === i2.base64;
  r2 && void 0 !== r2.binary || (i2.binary = !s2), (t2 instanceof la && 0 === t2.uncompressedSize || i2.dir || !t2 || 0 === t2.length) && (i2.base64 = false, i2.binary = true, t2 = "", i2.compression = "STORE", a2 = "string");
  var o2 = null;
  o2 = t2 instanceof la || t2 instanceof ia ? t2 : ua.isNode && ua.isStream(t2) ? new da(e2, t2) : aa.prepareContent(e2, t2, i2.binary, i2.optimizedBinaryString, i2.base64);
  var l2 = new ca(e2, o2, i2);
  this.files[e2] = l2;
};
var pa = function pa2(e2) {
  "/" === e2.slice(-1) && (e2 = e2.substring(0, e2.length - 1));
  var t2 = e2.lastIndexOf("/");
  return t2 > 0 ? e2.substring(0, t2) : "";
};
var ma = function ma2(e2) {
  return "/" !== e2.slice(-1) && (e2 += "/"), e2;
};
var ga = function ga2(e2, t2) {
  return t2 = void 0 !== t2 ? t2 : oa.createFolders, e2 = ma(e2), this.files[e2] || fa.call(this, e2, null, {
    dir: true,
    createFolders: t2
  }), this.files[e2];
};
function ba(e2) {
  return "[object RegExp]" === Object.prototype.toString.call(e2);
}
var ya = {
  load: function load() {
    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
  },
  forEach: function forEach3(e2) {
    var t2, r2, n2;
    for (t2 in this.files)
      n2 = this.files[t2], (r2 = t2.slice(this.root.length, t2.length)) && t2.slice(0, this.root.length) === this.root && e2(r2, n2);
  },
  filter: function filter3(e2) {
    var t2 = [];
    return this.forEach(function(r2, n2) {
      e2(r2, n2) && t2.push(n2);
    }), t2;
  },
  file: function file(e2, t2, r2) {
    if (1 === arguments.length) {
      if (ba(e2)) {
        var n2 = e2;
        return this.filter(function(e3, t3) {
          return !t3.dir && n2.test(e3);
        });
      }
      var a2 = this.files[this.root + e2];
      return a2 && !a2.dir ? a2 : null;
    }
    return e2 = this.root + e2, fa.call(this, e2, t2, r2), this;
  },
  folder: function folder(e2) {
    if (!e2)
      return this;
    if (ba(e2))
      return this.filter(function(t3, r3) {
        return r3.dir && e2.test(t3);
      });
    var t2 = this.root + e2, r2 = ga.call(this, t2), n2 = this.clone();
    return n2.root = r2.name, n2;
  },
  remove: function remove(e2) {
    e2 = this.root + e2;
    var t2 = this.files[e2];
    if (t2 || ("/" !== e2.slice(-1) && (e2 += "/"), t2 = this.files[e2]), t2 && !t2.dir)
      delete this.files[e2];
    else
      for (var r2 = this.filter(function(t3, r3) {
        return r3.name.slice(0, e2.length) === e2;
      }), n2 = 0; n2 < r2.length; n2++)
        delete this.files[r2[n2].name];
    return this;
  },
  generate: function generate() {
    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
  },
  generateInternalStream: function generateInternalStream(e2) {
    var t2, r2 = {};
    try {
      if ((r2 = aa.extend(e2 || {}, {
        streamFiles: false,
        compression: "STORE",
        compressionOptions: null,
        type: "",
        platform: "DOS",
        comment: null,
        mimeType: "application/zip",
        encodeFileName: na.utf8encode
      })).type = r2.type.toLowerCase(), r2.compression = r2.compression.toUpperCase(), "binarystring" === r2.type && (r2.type = "string"), !r2.type)
        throw new Error("No output type specified.");
      aa.checkSupport(r2.type), "darwin" !== r2.platform && "freebsd" !== r2.platform && "linux" !== r2.platform && "sunos" !== r2.platform || (r2.platform = "UNIX"), "win32" === r2.platform && (r2.platform = "DOS");
      var n2 = r2.comment || this.comment || "";
      t2 = ha.generateWorker(this, r2, n2);
    } catch (e3) {
      (t2 = new ia("error")).error(e3);
    }
    return new sa(t2, r2.type || "string", r2.mimeType);
  },
  generateAsync: function generateAsync(e2, t2) {
    return this.generateInternalStream(e2).accumulate(t2);
  },
  generateNodeStream: function generateNodeStream(e2, t2) {
    return (e2 = e2 || {}).type || (e2.type = "nodebuffer"), this.generateInternalStream(e2).toNodejsStream(t2);
  }
};
var va = ya;
var wa = me();
function _a(e2) {
  this.data = e2, this.length = e2.length, this.index = 0, this.zero = 0;
}
_a.prototype = {
  checkOffset: function checkOffset(e2) {
    this.checkIndex(this.index + e2);
  },
  checkIndex: function checkIndex(e2) {
    if (this.length < this.zero + e2 || e2 < 0)
      throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e2 + "). Corrupted zip ?");
  },
  setIndex: function setIndex(e2) {
    this.checkIndex(e2), this.index = e2;
  },
  skip: function skip(e2) {
    this.setIndex(this.index + e2);
  },
  byteAt: function byteAt() {
  },
  readInt: function readInt(e2) {
    var t2, r2 = 0;
    for (this.checkOffset(e2), t2 = this.index + e2 - 1; t2 >= this.index; t2--)
      r2 = (r2 << 8) + this.byteAt(t2);
    return this.index += e2, r2;
  },
  readString: function readString(e2) {
    return wa.transformTo("string", this.readData(e2));
  },
  readData: function readData() {
  },
  lastIndexOfSignature: function lastIndexOfSignature() {
  },
  readAndCheckSignature: function readAndCheckSignature() {
  },
  readDate: function readDate() {
    var e2 = this.readInt(4);
    return new Date(Date.UTC(1980 + (e2 >> 25 & 127), (e2 >> 21 & 15) - 1, e2 >> 16 & 31, e2 >> 11 & 31, e2 >> 5 & 63, (31 & e2) << 1));
  }
};
var ka = _a;
var Sa = ka;
function xa(e2) {
  Sa.call(this, e2);
  for (var t2 = 0; t2 < this.data.length; t2++)
    e2[t2] = 255 & e2[t2];
}
me().inherits(xa, Sa), xa.prototype.byteAt = function(e2) {
  return this.data[this.zero + e2];
}, xa.prototype.lastIndexOfSignature = function(e2) {
  for (var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), a2 = e2.charCodeAt(3), i2 = this.length - 4; i2 >= 0; --i2)
    if (this.data[i2] === t2 && this.data[i2 + 1] === r2 && this.data[i2 + 2] === n2 && this.data[i2 + 3] === a2)
      return i2 - this.zero;
  return -1;
}, xa.prototype.readAndCheckSignature = function(e2) {
  var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), a2 = e2.charCodeAt(3), i2 = this.readData(4);
  return t2 === i2[0] && r2 === i2[1] && n2 === i2[2] && a2 === i2[3];
}, xa.prototype.readData = function(e2) {
  if (this.checkOffset(e2), 0 === e2)
    return [];
  var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
  return this.index += e2, t2;
};
var Ca = xa;
var Ea = ka;
function Pa(e2) {
  Ea.call(this, e2);
}
me().inherits(Pa, Ea), Pa.prototype.byteAt = function(e2) {
  return this.data.charCodeAt(this.zero + e2);
}, Pa.prototype.lastIndexOfSignature = function(e2) {
  return this.data.lastIndexOf(e2) - this.zero;
}, Pa.prototype.readAndCheckSignature = function(e2) {
  return e2 === this.readData(4);
}, Pa.prototype.readData = function(e2) {
  this.checkOffset(e2);
  var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
  return this.index += e2, t2;
};
var Aa = Pa;
var Ta = Ca;
function Na(e2) {
  Ta.call(this, e2);
}
me().inherits(Na, Ta), Na.prototype.readData = function(e2) {
  if (this.checkOffset(e2), 0 === e2)
    return new Uint8Array(0);
  var t2 = this.data.subarray(this.zero + this.index, this.zero + this.index + e2);
  return this.index += e2, t2;
};
var Ra = Na;
var Ba = Ra;
function Ma(e2) {
  Ba.call(this, e2);
}
me().inherits(Ma, Ba), Ma.prototype.readData = function(e2) {
  this.checkOffset(e2);
  var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
  return this.index += e2, t2;
};
var Da = Ma;
var Oa = me();
var Ia = f;
var za = Ca;
var Fa = Aa;
var La = Da;
var ja = Ra;
var Ua = function Ua2(e2) {
  var t2 = Oa.getTypeOf(e2);
  return Oa.checkSupport(t2), "string" !== t2 || Ia.uint8array ? "nodebuffer" === t2 ? new La(e2) : Ia.uint8array ? new ja(Oa.transformTo("uint8array", e2)) : new za(Oa.transformTo("array", e2)) : new Fa(e2);
};
var $a = Ua;
var Ha = me();
var Wa = Qe;
var Za = je;
var Va = u;
var qa = ut;
var Xa = f;
function Ka(e2, t2) {
  this.options = e2, this.loadOptions = t2;
}
Ka.prototype = {
  isEncrypted: function isEncrypted() {
    return !(1 & ~this.bitFlag);
  },
  useUTF8: function useUTF8() {
    return !(2048 & ~this.bitFlag);
  },
  readLocalPart: function readLocalPart(e2) {
    var t2, r2;
    if (e2.skip(22), this.fileNameLength = e2.readInt(2), r2 = e2.readInt(2), this.fileName = e2.readData(this.fileNameLength), e2.skip(r2), -1 === this.compressedSize || -1 === this.uncompressedSize)
      throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
    if (null === (t2 = function(e3) {
      for (var t3 in qa)
        if (Object.prototype.hasOwnProperty.call(qa, t3) && qa[t3].magic === e3)
          return qa[t3];
      return null;
    }(this.compressionMethod)))
      throw new Error("Corrupted zip : compression " + Ha.pretty(this.compressionMethod) + " unknown (inner file : " + Ha.transformTo("string", this.fileName) + ")");
    this.decompressed = new Wa(this.compressedSize, this.uncompressedSize, this.crc32, t2, e2.readData(this.compressedSize));
  },
  readCentralPart: function readCentralPart(e2) {
    this.versionMadeBy = e2.readInt(2), e2.skip(2), this.bitFlag = e2.readInt(2), this.compressionMethod = e2.readString(2), this.date = e2.readDate(), this.crc32 = e2.readInt(4), this.compressedSize = e2.readInt(4), this.uncompressedSize = e2.readInt(4);
    var t2 = e2.readInt(2);
    if (this.extraFieldsLength = e2.readInt(2), this.fileCommentLength = e2.readInt(2), this.diskNumberStart = e2.readInt(2), this.internalFileAttributes = e2.readInt(2), this.externalFileAttributes = e2.readInt(4), this.localHeaderOffset = e2.readInt(4), this.isEncrypted())
      throw new Error("Encrypted zip are not supported");
    e2.skip(t2), this.readExtraFields(e2), this.parseZIP64ExtraField(e2), this.fileComment = e2.readData(this.fileCommentLength);
  },
  processAttributes: function processAttributes() {
    this.unixPermissions = null, this.dosPermissions = null;
    var e2 = this.versionMadeBy >> 8;
    this.dir = !!(16 & this.externalFileAttributes), 0 === e2 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 === e2 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = true);
  },
  parseZIP64ExtraField: function parseZIP64ExtraField() {
    if (this.extraFields[1]) {
      var e2 = $a(this.extraFields[1].value);
      this.uncompressedSize === Ha.MAX_VALUE_32BITS && (this.uncompressedSize = e2.readInt(8)), this.compressedSize === Ha.MAX_VALUE_32BITS && (this.compressedSize = e2.readInt(8)), this.localHeaderOffset === Ha.MAX_VALUE_32BITS && (this.localHeaderOffset = e2.readInt(8)), this.diskNumberStart === Ha.MAX_VALUE_32BITS && (this.diskNumberStart = e2.readInt(4));
    }
  },
  readExtraFields: function readExtraFields(e2) {
    var t2, r2, n2, a2 = e2.index + this.extraFieldsLength;
    for (this.extraFields || (this.extraFields = {}); e2.index + 4 < a2; )
      t2 = e2.readInt(2), r2 = e2.readInt(2), n2 = e2.readData(r2), this.extraFields[t2] = {
        id: t2,
        length: r2,
        value: n2
      };
    e2.setIndex(a2);
  },
  handleUTF8: function handleUTF8() {
    var e2 = Xa.uint8array ? "uint8array" : "array";
    if (this.useUTF8())
      this.fileNameStr = Va.utf8decode(this.fileName), this.fileCommentStr = Va.utf8decode(this.fileComment);
    else {
      var t2 = this.findExtraFieldUnicodePath();
      if (null !== t2)
        this.fileNameStr = t2;
      else {
        var r2 = Ha.transformTo(e2, this.fileName);
        this.fileNameStr = this.loadOptions.decodeFileName(r2);
      }
      var n2 = this.findExtraFieldUnicodeComment();
      if (null !== n2)
        this.fileCommentStr = n2;
      else {
        var a2 = Ha.transformTo(e2, this.fileComment);
        this.fileCommentStr = this.loadOptions.decodeFileName(a2);
      }
    }
  },
  findExtraFieldUnicodePath: function findExtraFieldUnicodePath() {
    var e2 = this.extraFields[28789];
    if (e2) {
      var t2 = $a(e2.value);
      return 1 !== t2.readInt(1) || Za(this.fileName) !== t2.readInt(4) ? null : Va.utf8decode(t2.readData(e2.length - 5));
    }
    return null;
  },
  findExtraFieldUnicodeComment: function findExtraFieldUnicodeComment() {
    var e2 = this.extraFields[25461];
    if (e2) {
      var t2 = $a(e2.value);
      return 1 !== t2.readInt(1) || Za(this.fileComment) !== t2.readInt(4) ? null : Va.utf8decode(t2.readData(e2.length - 5));
    }
    return null;
  }
};
var Ya = Ka;
var Ga = Ua;
var Ja = me();
var Qa = Un;
var ei = Ya;
var ti = f;
function ri(e2) {
  this.files = [], this.loadOptions = e2;
}
ri.prototype = {
  checkSignature: function checkSignature(e2) {
    if (!this.reader.readAndCheckSignature(e2)) {
      this.reader.index -= 4;
      var t2 = this.reader.readString(4);
      throw new Error("Corrupted zip or bug: unexpected signature (" + Ja.pretty(t2) + ", expected " + Ja.pretty(e2) + ")");
    }
  },
  isSignature: function isSignature(e2, t2) {
    var r2 = this.reader.index;
    this.reader.setIndex(e2);
    var n2 = this.reader.readString(4) === t2;
    return this.reader.setIndex(r2), n2;
  },
  readBlockEndOfCentral: function readBlockEndOfCentral() {
    this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
    var e2 = this.reader.readData(this.zipCommentLength), t2 = ti.uint8array ? "uint8array" : "array", r2 = Ja.transformTo(t2, e2);
    this.zipComment = this.loadOptions.decodeFileName(r2);
  },
  readBlockZip64EndOfCentral: function readBlockZip64EndOfCentral() {
    this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
    for (var e2, t2, r2, n2 = this.zip64EndOfCentralSize - 44; 0 < n2; )
      e2 = this.reader.readInt(2), t2 = this.reader.readInt(4), r2 = this.reader.readData(t2), this.zip64ExtensibleData[e2] = {
        id: e2,
        length: t2,
        value: r2
      };
  },
  readBlockZip64EndOfCentralLocator: function readBlockZip64EndOfCentralLocator() {
    if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), this.disksCount > 1)
      throw new Error("Multi-volumes zip are not supported");
  },
  readLocalFiles: function readLocalFiles() {
    var e2, t2;
    for (e2 = 0; e2 < this.files.length; e2++)
      t2 = this.files[e2], this.reader.setIndex(t2.localHeaderOffset), this.checkSignature(Qa.LOCAL_FILE_HEADER), t2.readLocalPart(this.reader), t2.handleUTF8(), t2.processAttributes();
  },
  readCentralDir: function readCentralDir() {
    var e2;
    for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(Qa.CENTRAL_FILE_HEADER); )
      (e2 = new ei({
        zip64: this.zip64
      }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e2);
    if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length)
      throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
  },
  readEndOfCentral: function readEndOfCentral() {
    var e2 = this.reader.lastIndexOfSignature(Qa.CENTRAL_DIRECTORY_END);
    if (e2 < 0)
      throw !this.isSignature(0, Qa.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
    this.reader.setIndex(e2);
    var t2 = e2;
    if (this.checkSignature(Qa.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === Ja.MAX_VALUE_16BITS || this.diskWithCentralDirStart === Ja.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === Ja.MAX_VALUE_16BITS || this.centralDirRecords === Ja.MAX_VALUE_16BITS || this.centralDirSize === Ja.MAX_VALUE_32BITS || this.centralDirOffset === Ja.MAX_VALUE_32BITS) {
      if (this.zip64 = true, (e2 = this.reader.lastIndexOfSignature(Qa.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
        throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
      if (this.reader.setIndex(e2), this.checkSignature(Qa.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, Qa.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(Qa.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
        throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
      this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(Qa.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
    }
    var r2 = this.centralDirOffset + this.centralDirSize;
    this.zip64 && (r2 += 20, r2 += 12 + this.zip64EndOfCentralSize);
    var n2 = t2 - r2;
    if (n2 > 0)
      this.isSignature(t2, Qa.CENTRAL_FILE_HEADER) || (this.reader.zero = n2);
    else if (n2 < 0)
      throw new Error("Corrupted zip: missing " + Math.abs(n2) + " bytes.");
  },
  prepareReader: function prepareReader(e2) {
    this.reader = Ga(e2);
  },
  load: function load2(e2) {
    this.prepareReader(e2), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
  }
};
var ni = ri;
var ai = me();
var ii = pe;
var si = u;
var oi = ni;
var li = We;
var ci = ue;
function hi(e2) {
  return new ii.Promise(function(t2, r2) {
    var n2 = e2.decompressed.getContentWorker().pipe(new li());
    n2.on("error", function(e3) {
      r2(e3);
    }).on("end", function() {
      n2.streamInfo.crc32 !== e2.decompressed.crc32 ? r2(new Error("Corrupted zip : CRC32 mismatch")) : t2();
    }).resume();
  });
}
function ui() {
  if (!(this instanceof ui))
    return new ui();
  if (arguments.length)
    throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
  this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
    var e2 = new ui();
    for (var t2 in this)
      "function" != typeof this[t2] && (e2[t2] = this[t2]);
    return e2;
  };
}
ui.prototype = va, ui.prototype.loadAsync = function(e2, t2) {
  var r2 = this;
  return t2 = ai.extend(t2 || {}, {
    base64: false,
    checkCRC32: false,
    optimizedBinaryString: false,
    createFolders: false,
    decodeFileName: si.utf8decode
  }), ci.isNode && ci.isStream(e2) ? ii.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : ai.prepareContent("the loaded zip file", e2, true, t2.optimizedBinaryString, t2.base64).then(function(e3) {
    var r3 = new oi(t2);
    return r3.load(e3), r3;
  }).then(function(e3) {
    var r3 = [ii.Promise.resolve(e3)], n2 = e3.files;
    if (t2.checkCRC32)
      for (var a2 = 0; a2 < n2.length; a2++)
        r3.push(hi(n2[a2]));
    return ii.Promise.all(r3);
  }).then(function(e3) {
    for (var n2 = e3.shift(), a2 = n2.files, i2 = 0; i2 < a2.length; i2++) {
      var s2 = a2[i2], o2 = s2.fileNameStr, l2 = ai.resolve(s2.fileNameStr);
      r2.file(l2, s2.decompressed, {
        binary: true,
        optimizedBinaryString: true,
        date: s2.date,
        dir: s2.dir,
        comment: s2.fileCommentStr.length ? s2.fileCommentStr : null,
        unixPermissions: s2.unixPermissions,
        dosPermissions: s2.dosPermissions,
        createFolders: t2.createFolders
      }), s2.dir || (r2.file(l2).unsafeOriginalName = o2);
    }
    return n2.zipComment.length && (r2.comment = n2.zipComment), r2;
  });
}, ui.support = f, ui.defaults = Me, ui.version = "3.10.1", ui.loadAsync = function(e2, t2) {
  return new ui().loadAsync(e2, t2);
}, ui.external = pe;
var di;
var fi = i(ui);
!function(e2) {
  e2.OfficeDocument = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", e2.FontTable = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable", e2.Image = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", e2.Numbering = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering", e2.Styles = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", e2.StylesWithEffects = "http://schemas.microsoft.com/office/2007/relationships/stylesWithEffects", e2.Theme = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme", e2.Settings = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings", e2.WebSettings = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings", e2.Hyperlink = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", e2.Footnotes = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes", e2.Endnotes = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes", e2.Footer = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer", e2.Header = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header", e2.ExtendedProperties = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", e2.CoreProperties = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", e2.CustomProperties = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/custom-properties", e2.Comments = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments", e2.CommentsExtended = "http://schemas.microsoft.com/office/2011/relationships/commentsExtended";
}(di || (di = {}));
var pi = "http://schemas.openxmlformats.org/wordprocessingml/2006/main";
var mi = {
  mul: 0.05,
  unit: "pt"
};
var gi = {
  mul: 1 / 12700,
  unit: "pt"
};
var bi = {
  mul: 0.5,
  unit: "pt"
};
var yi = {
  mul: 0.125,
  unit: "pt"
};
var vi = {
  mul: 1,
  unit: "pt"
};
var wi = {
  mul: 0.02,
  unit: "%"
};
function _i(e2) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : mi;
  return null == e2 || /.+(p[xt]|[%])$/.test(e2) ? e2 : "".concat((parseInt(e2) * t2.mul).toFixed(2)).concat(t2.unit);
}
function ki(e2, t2, r2) {
  if (e2.namespaceURI != pi)
    return false;
  switch (e2.localName) {
    case "color":
      t2.color = r2.attr(e2, "val");
      break;
    case "sz":
      t2.fontSize = r2.lengthAttr(e2, "val", bi);
      break;
    default:
      return false;
  }
  return true;
}
var Si = function() {
  function Si2() {
    _classCallCheck(this, Si2);
  }
  return _createClass(Si2, [{
    key: "elements",
    value: function elements(e2) {
      var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      var r2 = [];
      for (var _n2 = 0, _a2 = e2.childNodes.length; _n2 < _a2; _n2++) {
        var _a3 = e2.childNodes.item(_n2);
        1 != _a3.nodeType || null != t2 && _a3.localName != t2 || r2.push(_a3);
      }
      return r2;
    }
  }, {
    key: "element",
    value: function element(e2, t2) {
      for (var _r2 = 0, _n3 = e2.childNodes.length; _r2 < _n3; _r2++) {
        var _n4 = e2.childNodes.item(_r2);
        if (1 == _n4.nodeType && _n4.localName == t2)
          return _n4;
      }
      return null;
    }
  }, {
    key: "elementAttr",
    value: function elementAttr(e2, t2, r2) {
      var n2 = this.element(e2, t2);
      return n2 ? this.attr(n2, r2) : void 0;
    }
  }, {
    key: "attrs",
    value: function attrs(e2) {
      return Array.from(e2.attributes);
    }
  }, {
    key: "attr",
    value: function attr(e2, t2) {
      for (var _r3 = 0, _n5 = e2.attributes.length; _r3 < _n5; _r3++) {
        var _n6 = e2.attributes.item(_r3);
        if (_n6.localName == t2)
          return _n6.value;
      }
      return null;
    }
  }, {
    key: "intAttr",
    value: function intAttr(e2, t2) {
      var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      var n2 = this.attr(e2, t2);
      return n2 ? parseInt(n2) : r2;
    }
  }, {
    key: "hexAttr",
    value: function hexAttr(e2, t2) {
      var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      var n2 = this.attr(e2, t2);
      return n2 ? parseInt(n2, 16) : r2;
    }
  }, {
    key: "floatAttr",
    value: function floatAttr(e2, t2) {
      var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      var n2 = this.attr(e2, t2);
      return n2 ? parseFloat(n2) : r2;
    }
  }, {
    key: "boolAttr",
    value: function boolAttr(e2, t2) {
      var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      return function(e3) {
        var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        switch (e3) {
          case "1":
          case "on":
          case "true":
            return true;
          case "0":
          case "off":
          case "false":
            return false;
          default:
            return t3;
        }
      }(this.attr(e2, t2), r2);
    }
  }, {
    key: "lengthAttr",
    value: function lengthAttr(e2, t2) {
      var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : mi;
      return _i(this.attr(e2, t2), r2);
    }
  }]);
}();
var xi = new Si();
var Ci = function() {
  function Ci2(e2, t2) {
    _classCallCheck(this, Ci2);
    this._package = e2, this.path = t2;
  }
  return _createClass(Ci2, [{
    key: "load",
    value: function() {
      var _load = _asyncToGenerator(_regeneratorRuntime().mark(function _callee() {
        var e2, t2;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._package.loadRelationships(this.path);
              case 2:
                this.rels = _context.sent;
                _context.next = 5;
                return this._package.load(this.path);
              case 5:
                e2 = _context.sent;
                t2 = this._package.parseXmlDocument(e2);
                this._package.options.keepOrigin && (this._xmlDocument = t2), this.parseXml(t2.firstElementChild);
              case 8:
              case "end":
                return _context.stop();
            }
        }, _callee, this);
      }));
      function load3() {
        return _load.apply(this, arguments);
      }
      return load3;
    }()
  }, {
    key: "save",
    value: function save() {
      var e2;
      this._package.update(this.path, (e2 = this._xmlDocument, new XMLSerializer().serializeToString(e2)));
    }
  }, {
    key: "parseXml",
    value: function parseXml(e2) {
    }
  }]);
}();
var Ei = {
  embedRegular: "regular",
  embedBold: "bold",
  embedItalic: "italic",
  embedBoldItalic: "boldItalic"
};
function Pi(e2, t2) {
  return t2.elements(e2).map(function(e3) {
    return function(e4, t3) {
      var r2 = {
        name: t3.attr(e4, "name"),
        embedFontRefs: []
      };
      var _iterator = _createForOfIteratorHelper(t3.elements(e4)), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _n7 = _step.value;
          switch (_n7.localName) {
            case "family":
              r2.family = t3.attr(_n7, "val");
              break;
            case "altName":
              r2.altName = t3.attr(_n7, "val");
              break;
            case "embedRegular":
            case "embedBold":
            case "embedItalic":
            case "embedBoldItalic":
              r2.embedFontRefs.push(Ai(_n7, t3));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return r2;
    }(e3, t2);
  });
}
function Ai(e2, t2) {
  return {
    id: t2.attr(e2, "id"),
    key: t2.attr(e2, "fontKey"),
    type: Ei[e2.localName]
  };
}
var Ti = function(_Ci) {
  function Ti2() {
    _classCallCheck(this, Ti2);
    return _callSuper(this, Ti2, arguments);
  }
  _inherits(Ti2, _Ci);
  return _createClass(Ti2, [{
    key: "parseXml",
    value: function parseXml(e2) {
      this.fonts = Pi(e2, this._package.xmlParser);
    }
  }]);
}(Ci);
function Ni(e2) {
  var t2 = e2.lastIndexOf("/") + 1;
  return [0 == t2 ? "" : e2.substring(0, t2), 0 == t2 ? e2 : e2.substring(t2)];
}
function Ri(e2, t2) {
  try {
    var _r4 = "http://docx/";
    return new URL(e2, _r4 + t2).toString().substring(_r4.length);
  } catch (_unused) {
    return "".concat(t2).concat(e2);
  }
}
function Bi(e2, t2) {
  return e2.reduce(function(e3, r2) {
    return e3[t2(r2)] = r2, e3;
  }, {});
}
function Mi(e2) {
  return e2 && "object" == _typeof(e2) && !Array.isArray(e2);
}
function Di(e2) {
  for (var _len2 = arguments.length, t2 = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    t2[_key2 - 1] = arguments[_key2];
  }
  if (!t2.length)
    return e2;
  var r2 = t2.shift();
  if (Mi(e2) && Mi(r2))
    for (var _t3 in r2)
      if (Mi(r2[_t3])) {
        var _e$_t;
        Di((_e$_t = e2[_t3]) !== null && _e$_t !== void 0 ? _e$_t : e2[_t3] = {}, r2[_t3]);
      } else
        e2[_t3] = r2[_t3];
  return Di.apply(void 0, [e2].concat(t2));
}
function Oi(e2) {
  return Array.isArray(e2) ? e2 : [e2];
}
var Ii = function() {
  function Ii2(e2, t2) {
    _classCallCheck(this, Ii2);
    this._zip = e2, this.options = t2, this.xmlParser = new Si();
  }
  return _createClass(Ii2, [{
    key: "get",
    value: function get(e2) {
      var _this$_zip$files$t;
      var t2 = function(e3) {
        return e3.startsWith("/") ? e3.substr(1) : e3;
      }(e2);
      return (_this$_zip$files$t = this._zip.files[t2]) !== null && _this$_zip$files$t !== void 0 ? _this$_zip$files$t : this._zip.files[t2.replace(/\//g, "\\")];
    }
  }, {
    key: "update",
    value: function update(e2, t2) {
      this._zip.file(e2, t2);
    }
  }, {
    key: "save",
    value: function save() {
      var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "blob";
      return this._zip.generateAsync({
        type: e2
      });
    }
  }, {
    key: "load",
    value: function load3(e2) {
      var _this$get$async, _this$get;
      var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "string";
      return (_this$get$async = (_this$get = this.get(e2)) === null || _this$get === void 0 ? void 0 : _this$get.async(t2)) !== null && _this$get$async !== void 0 ? _this$get$async : Promise.resolve(null);
    }
  }, {
    key: "loadRelationships",
    value: function() {
      var _loadRelationships = _asyncToGenerator(_regeneratorRuntime().mark(function _callee2() {
        var e2, t2, _Ni, _Ni2, _r5, _n8, r2, n2, a2, _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1)
            switch (_context2.prev = _context2.next) {
              case 0:
                e2 = _args2.length > 0 && _args2[0] !== void 0 ? _args2[0] : null;
                t2 = "_rels/.rels";
                if (null != e2) {
                  _Ni = Ni(e2), _Ni2 = _slicedToArray(_Ni, 2), _r5 = _Ni2[0], _n8 = _Ni2[1];
                  t2 = "".concat(_r5, "_rels/").concat(_n8, ".rels");
                }
                _context2.next = 5;
                return this.load(t2);
              case 5:
                r2 = _context2.sent;
                return _context2.abrupt("return", r2 ? (n2 = this.parseXmlDocument(r2).firstElementChild, (a2 = this.xmlParser).elements(n2).map(function(e3) {
                  return {
                    id: a2.attr(e3, "Id"),
                    type: a2.attr(e3, "Type"),
                    target: a2.attr(e3, "Target"),
                    targetMode: a2.attr(e3, "TargetMode")
                  };
                })) : null);
              case 7:
              case "end":
                return _context2.stop();
            }
        }, _callee2, this);
      }));
      function loadRelationships() {
        return _loadRelationships.apply(this, arguments);
      }
      return loadRelationships;
    }()
  }, {
    key: "parseXmlDocument",
    value: function parseXmlDocument(e2) {
      return function(e3) {
        var _i$getElementsByTagNa;
        var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var r2;
        t2 && (e3 = e3.replace(/<[?].*[?]>/, "")), e3 = 65279 === (r2 = e3).charCodeAt(0) ? r2.substring(1) : r2;
        var n2 = new DOMParser().parseFromString(e3, "application/xml"), a2 = (i2 = n2, (_i$getElementsByTagNa = i2.getElementsByTagName("parsererror")[0]) === null || _i$getElementsByTagNa === void 0 ? void 0 : _i$getElementsByTagNa.textContent);
        var i2;
        if (a2)
          throw new Error(a2);
        return n2;
      }(e2, this.options.trimXmlDeclaration);
    }
  }], [{
    key: "load",
    value: function() {
      var _load2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee3(e2, t2) {
        var r2;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1)
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fi.loadAsync(e2);
              case 2:
                r2 = _context3.sent;
                return _context3.abrupt("return", new Ii2(r2, t2));
              case 4:
              case "end":
                return _context3.stop();
            }
        }, _callee3);
      }));
      function load3(_x, _x2) {
        return _load2.apply(this, arguments);
      }
      return load3;
    }()
  }]);
}();
var zi = function(_Ci2) {
  function zi2(e2, t2, r2) {
    var _this;
    _classCallCheck(this, zi2);
    _this = _callSuper(this, zi2, [e2, t2]), _this._documentParser = r2;
    return _this;
  }
  _inherits(zi2, _Ci2);
  return _createClass(zi2, [{
    key: "parseXml",
    value: function parseXml(e2) {
      this.body = this._documentParser.parseDocumentFile(e2);
    }
  }]);
}(Ci);
function Fi(e2, t2) {
  return {
    type: t2.attr(e2, "val"),
    color: t2.attr(e2, "color"),
    size: t2.lengthAttr(e2, "sz", yi),
    offset: t2.lengthAttr(e2, "space", vi),
    frame: t2.boolAttr(e2, "frame"),
    shadow: t2.boolAttr(e2, "shadow")
  };
}
function Li(e2, t2) {
  var r2 = {};
  var _iterator2 = _createForOfIteratorHelper(t2.elements(e2)), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var n2 = _step2.value;
      switch (n2.localName) {
        case "left":
          r2.left = Fi(n2, t2);
          break;
        case "top":
          r2.top = Fi(n2, t2);
          break;
        case "right":
          r2.right = Fi(n2, t2);
          break;
        case "bottom":
          r2.bottom = Fi(n2, t2);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return r2;
}
var ji;
var Ui;
function $i(e2) {
  var _r$headerRefs, _r$footerRefs;
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xi;
  var r2 = {};
  var _iterator3 = _createForOfIteratorHelper(t2.elements(e2)), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var n2 = _step3.value;
      switch (n2.localName) {
        case "pgSz":
          r2.pageSize = {
            width: t2.lengthAttr(n2, "w"),
            height: t2.lengthAttr(n2, "h"),
            orientation: t2.attr(n2, "orient")
          };
          break;
        case "type":
          r2.type = t2.attr(n2, "val");
          break;
        case "pgMar":
          r2.pageMargins = {
            left: t2.lengthAttr(n2, "left"),
            right: t2.lengthAttr(n2, "right"),
            top: t2.lengthAttr(n2, "top"),
            bottom: t2.lengthAttr(n2, "bottom"),
            header: t2.lengthAttr(n2, "header"),
            footer: t2.lengthAttr(n2, "footer"),
            gutter: t2.lengthAttr(n2, "gutter")
          };
          break;
        case "cols":
          r2.columns = Hi(n2, t2);
          break;
        case "headerReference":
          ((_r$headerRefs = r2.headerRefs) !== null && _r$headerRefs !== void 0 ? _r$headerRefs : r2.headerRefs = []).push(Zi(n2, t2));
          break;
        case "footerReference":
          ((_r$footerRefs = r2.footerRefs) !== null && _r$footerRefs !== void 0 ? _r$footerRefs : r2.footerRefs = []).push(Zi(n2, t2));
          break;
        case "titlePg":
          r2.titlePage = t2.boolAttr(n2, "val", true);
          break;
        case "pgBorders":
          r2.pageBorders = Li(n2, t2);
          break;
        case "pgNumType":
          r2.pageNumber = Wi(n2, t2);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return r2;
}
function Hi(e2, t2) {
  return {
    numberOfColumns: t2.intAttr(e2, "num"),
    space: t2.lengthAttr(e2, "space"),
    separator: t2.boolAttr(e2, "sep"),
    equalWidth: t2.boolAttr(e2, "equalWidth", true),
    columns: t2.elements(e2, "col").map(function(e3) {
      return {
        width: t2.lengthAttr(e3, "w"),
        space: t2.lengthAttr(e3, "space")
      };
    })
  };
}
function Wi(e2, t2) {
  return {
    chapSep: t2.attr(e2, "chapSep"),
    chapStyle: t2.attr(e2, "chapStyle"),
    format: t2.attr(e2, "fmt"),
    start: t2.intAttr(e2, "start")
  };
}
function Zi(e2, t2) {
  return {
    id: t2.attr(e2, "id"),
    type: t2.attr(e2, "type")
  };
}
function Vi(e2, t2) {
  var r2 = {};
  var _iterator4 = _createForOfIteratorHelper(t2.elements(e2)), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var n2 = _step4.value;
      qi(n2, r2, t2);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return r2;
}
function qi(e2, t2, r2) {
  return !!ki(e2, t2, r2);
}
function Xi(e2, t2) {
  var r2 = {};
  var _iterator5 = _createForOfIteratorHelper(t2.elements(e2)), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      var n2 = _step5.value;
      Ki(n2, r2, t2);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return r2;
}
function Ki(e2, t2, r2) {
  if (e2.namespaceURI != pi)
    return false;
  if (ki(e2, t2, r2))
    return true;
  switch (e2.localName) {
    case "tabs":
      t2.tabs = function(e3, t3) {
        return t3.elements(e3, "tab").map(function(e4) {
          return {
            position: t3.lengthAttr(e4, "pos"),
            leader: t3.attr(e4, "leader"),
            style: t3.attr(e4, "val")
          };
        });
      }(e2, r2);
      break;
    case "sectPr":
      t2.sectionProps = $i(e2, r2);
      break;
    case "numPr":
      t2.numbering = function(e3, t3) {
        var r3 = {};
        var _iterator6 = _createForOfIteratorHelper(t3.elements(e3)), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            var n2 = _step6.value;
            switch (n2.localName) {
              case "numId":
                r3.id = t3.attr(n2, "val");
                break;
              case "ilvl":
                r3.level = t3.intAttr(n2, "val");
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        return r3;
      }(e2, r2);
      break;
    case "spacing":
      return t2.lineSpacing = function(e3, t3) {
        return {
          before: t3.lengthAttr(e3, "before"),
          after: t3.lengthAttr(e3, "after"),
          line: t3.intAttr(e3, "line"),
          lineRule: t3.attr(e3, "lineRule")
        };
      }(e2, r2), false;
    case "textAlignment":
      return t2.textAlignment = r2.attr(e2, "val"), false;
    case "keepLines":
      t2.keepLines = r2.boolAttr(e2, "val", true);
      break;
    case "keepNext":
      t2.keepNext = r2.boolAttr(e2, "val", true);
      break;
    case "pageBreakBefore":
      t2.pageBreakBefore = r2.boolAttr(e2, "val", true);
      break;
    case "outlineLvl":
      t2.outlineLevel = r2.intAttr(e2, "val");
      break;
    case "pStyle":
      t2.styleName = r2.attr(e2, "val");
      break;
    case "rPr":
      t2.runProps = Vi(e2, r2);
      break;
    default:
      return false;
  }
  return true;
}
function Yi(e2, t2) {
  var r2 = {
    id: t2.attr(e2, "numId"),
    overrides: []
  };
  var _iterator7 = _createForOfIteratorHelper(t2.elements(e2)), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      var n2 = _step7.value;
      switch (n2.localName) {
        case "abstractNumId":
          r2.abstractId = t2.attr(n2, "val");
          break;
        case "lvlOverride":
          r2.overrides.push(Qi(n2, t2));
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  return r2;
}
function Gi(e2, t2) {
  var r2 = {
    id: t2.attr(e2, "abstractNumId"),
    levels: []
  };
  var _iterator8 = _createForOfIteratorHelper(t2.elements(e2)), _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
      var n2 = _step8.value;
      switch (n2.localName) {
        case "name":
          r2.name = t2.attr(n2, "val");
          break;
        case "multiLevelType":
          r2.multiLevelType = t2.attr(n2, "val");
          break;
        case "numStyleLink":
          r2.numberingStyleLink = t2.attr(n2, "val");
          break;
        case "styleLink":
          r2.styleLink = t2.attr(n2, "val");
          break;
        case "lvl":
          r2.levels.push(Ji(n2, t2));
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  return r2;
}
function Ji(e2, t2) {
  var r2 = {
    level: t2.intAttr(e2, "ilvl")
  };
  var _iterator9 = _createForOfIteratorHelper(t2.elements(e2)), _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
      var n2 = _step9.value;
      switch (n2.localName) {
        case "start":
          r2.start = t2.attr(n2, "val");
          break;
        case "lvlRestart":
          r2.restart = t2.intAttr(n2, "val");
          break;
        case "numFmt":
          r2.format = t2.attr(n2, "val");
          break;
        case "lvlText":
          r2.text = t2.attr(n2, "val");
          break;
        case "lvlJc":
          r2.justification = t2.attr(n2, "val");
          break;
        case "lvlPicBulletId":
          r2.bulletPictureId = t2.attr(n2, "val");
          break;
        case "pStyle":
          r2.paragraphStyle = t2.attr(n2, "val");
          break;
        case "pPr":
          r2.paragraphProps = Xi(n2, t2);
          break;
        case "rPr":
          r2.runProps = Vi(n2, t2);
      }
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
  return r2;
}
function Qi(e2, t2) {
  var r2 = {
    level: t2.intAttr(e2, "ilvl")
  };
  var _iterator10 = _createForOfIteratorHelper(t2.elements(e2)), _step10;
  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
      var n2 = _step10.value;
      switch (n2.localName) {
        case "startOverride":
          r2.start = t2.intAttr(n2, "val");
          break;
        case "lvl":
          r2.numberingLevel = Ji(n2, t2);
      }
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }
  return r2;
}
function es(e2, t2) {
  var r2 = t2.element(e2, "pict"), n2 = r2 && t2.element(r2, "shape"), a2 = n2 && t2.element(n2, "imagedata");
  return a2 ? {
    id: t2.attr(e2, "numPicBulletId"),
    referenceId: t2.attr(a2, "id"),
    style: t2.attr(n2, "style")
  } : null;
}
!function(e2) {
  e2.Continuous = "continuous", e2.NextPage = "nextPage", e2.NextColumn = "nextColumn", e2.EvenPage = "evenPage", e2.OddPage = "oddPage";
}(ji || (ji = {}));
var ts = function(_Ci3) {
  function ts2(e2, t2, r2) {
    var _this2;
    _classCallCheck(this, ts2);
    _this2 = _callSuper(this, ts2, [e2, t2]), _this2._documentParser = r2;
    return _this2;
  }
  _inherits(ts2, _Ci3);
  return _createClass(ts2, [{
    key: "parseXml",
    value: function parseXml(e2) {
      Object.assign(this, function(e3, t2) {
        var r2 = {
          numberings: [],
          abstractNumberings: [],
          bulletPictures: []
        };
        var _iterator11 = _createForOfIteratorHelper(t2.elements(e3)), _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
            var n2 = _step11.value;
            switch (n2.localName) {
              case "num":
                r2.numberings.push(Yi(n2, t2));
                break;
              case "abstractNum":
                r2.abstractNumberings.push(Gi(n2, t2));
                break;
              case "numPicBullet":
                r2.bulletPictures.push(es(n2, t2));
            }
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
        return r2;
      }(e2, this._package.xmlParser)), this.domNumberings = this._documentParser.parseNumberingFile(e2);
    }
  }]);
}(Ci);
var rs = function(_Ci4) {
  function rs2(e2, t2, r2) {
    var _this3;
    _classCallCheck(this, rs2);
    _this3 = _callSuper(this, rs2, [e2, t2]), _this3._documentParser = r2;
    return _this3;
  }
  _inherits(rs2, _Ci4);
  return _createClass(rs2, [{
    key: "parseXml",
    value: function parseXml(e2) {
      this.styles = this._documentParser.parseStylesFile(e2);
    }
  }]);
}(Ci);
!function(e2) {
  e2.Document = "document", e2.Paragraph = "paragraph", e2.Run = "run", e2.Break = "break", e2.NoBreakHyphen = "noBreakHyphen", e2.Table = "table", e2.Row = "row", e2.Cell = "cell", e2.Hyperlink = "hyperlink", e2.SmartTag = "smartTag", e2.Drawing = "drawing", e2.Image = "image", e2.Text = "text", e2.Tab = "tab", e2.Symbol = "symbol", e2.BookmarkStart = "bookmarkStart", e2.BookmarkEnd = "bookmarkEnd", e2.Footer = "footer", e2.Header = "header", e2.FootnoteReference = "footnoteReference", e2.EndnoteReference = "endnoteReference", e2.Footnote = "footnote", e2.Endnote = "endnote", e2.SimpleField = "simpleField", e2.ComplexField = "complexField", e2.Instruction = "instruction", e2.VmlPicture = "vmlPicture", e2.MmlMath = "mmlMath", e2.MmlMathParagraph = "mmlMathParagraph", e2.MmlFraction = "mmlFraction", e2.MmlFunction = "mmlFunction", e2.MmlFunctionName = "mmlFunctionName", e2.MmlNumerator = "mmlNumerator", e2.MmlDenominator = "mmlDenominator", e2.MmlRadical = "mmlRadical", e2.MmlBase = "mmlBase", e2.MmlDegree = "mmlDegree", e2.MmlSuperscript = "mmlSuperscript", e2.MmlSubscript = "mmlSubscript", e2.MmlPreSubSuper = "mmlPreSubSuper", e2.MmlSubArgument = "mmlSubArgument", e2.MmlSuperArgument = "mmlSuperArgument", e2.MmlNary = "mmlNary", e2.MmlDelimiter = "mmlDelimiter", e2.MmlRun = "mmlRun", e2.MmlEquationArray = "mmlEquationArray", e2.MmlLimit = "mmlLimit", e2.MmlLimitLower = "mmlLimitLower", e2.MmlMatrix = "mmlMatrix", e2.MmlMatrixRow = "mmlMatrixRow", e2.MmlBox = "mmlBox", e2.MmlBar = "mmlBar", e2.MmlGroupChar = "mmlGroupChar", e2.VmlElement = "vmlElement", e2.Inserted = "inserted", e2.Deleted = "deleted", e2.DeletedText = "deletedText", e2.Comment = "comment", e2.CommentReference = "commentReference", e2.CommentRangeStart = "commentRangeStart", e2.CommentRangeEnd = "commentRangeEnd";
}(Ui || (Ui = {}));
var ns = _createClass(function ns2() {
  _classCallCheck(this, ns2);
  this.children = [], this.cssStyle = {};
});
var as = function(_ns) {
  function as2() {
    var _this4;
    _classCallCheck(this, as2);
    _this4 = _callSuper(this, as2, arguments), _this4.type = Ui.Header;
    return _this4;
  }
  _inherits(as2, _ns);
  return _createClass(as2);
}(ns);
var is = function(_ns2) {
  function is2() {
    var _this5;
    _classCallCheck(this, is2);
    _this5 = _callSuper(this, is2, arguments), _this5.type = Ui.Footer;
    return _this5;
  }
  _inherits(is2, _ns2);
  return _createClass(is2);
}(ns);
var ss = function(_Ci5) {
  function ss2(e2, t2, r2) {
    var _this6;
    _classCallCheck(this, ss2);
    _this6 = _callSuper(this, ss2, [e2, t2]), _this6._documentParser = r2;
    return _this6;
  }
  _inherits(ss2, _Ci5);
  return _createClass(ss2, [{
    key: "parseXml",
    value: function parseXml(e2) {
      this.rootElement = this.createRootElement(), this.rootElement.children = this._documentParser.parseBodyElements(e2);
    }
  }]);
}(Ci);
var os = function(_ss) {
  function os2() {
    _classCallCheck(this, os2);
    return _callSuper(this, os2, arguments);
  }
  _inherits(os2, _ss);
  return _createClass(os2, [{
    key: "createRootElement",
    value: function createRootElement() {
      return new as();
    }
  }]);
}(ss);
var ls = function(_ss2) {
  function ls2() {
    _classCallCheck(this, ls2);
    return _callSuper(this, ls2, arguments);
  }
  _inherits(ls2, _ss2);
  return _createClass(ls2, [{
    key: "createRootElement",
    value: function createRootElement() {
      return new is();
    }
  }]);
}(ss);
function cs(e2) {
  if (void 0 !== e2)
    return parseInt(e2);
}
var hs = function(_Ci6) {
  function hs2() {
    _classCallCheck(this, hs2);
    return _callSuper(this, hs2, arguments);
  }
  _inherits(hs2, _Ci6);
  return _createClass(hs2, [{
    key: "parseXml",
    value: function parseXml(e2) {
      this.props = function(e3, t2) {
        var r2 = {};
        var _iterator12 = _createForOfIteratorHelper(t2.elements(e3)), _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
            var n2 = _step12.value;
            switch (n2.localName) {
              case "Template":
                r2.template = n2.textContent;
                break;
              case "Pages":
                r2.pages = cs(n2.textContent);
                break;
              case "Words":
                r2.words = cs(n2.textContent);
                break;
              case "Characters":
                r2.characters = cs(n2.textContent);
                break;
              case "Application":
                r2.application = n2.textContent;
                break;
              case "Lines":
                r2.lines = cs(n2.textContent);
                break;
              case "Paragraphs":
                r2.paragraphs = cs(n2.textContent);
                break;
              case "Company":
                r2.company = n2.textContent;
                break;
              case "AppVersion":
                r2.appVersion = n2.textContent;
            }
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
        return r2;
      }(e2, this._package.xmlParser);
    }
  }]);
}(Ci);
var us = function(_Ci7) {
  function us2() {
    _classCallCheck(this, us2);
    return _callSuper(this, us2, arguments);
  }
  _inherits(us2, _Ci7);
  return _createClass(us2, [{
    key: "parseXml",
    value: function parseXml(e2) {
      this.props = function(e3, t2) {
        var r2 = {};
        var _iterator13 = _createForOfIteratorHelper(t2.elements(e3)), _step13;
        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
            var n2 = _step13.value;
            switch (n2.localName) {
              case "title":
                r2.title = n2.textContent;
                break;
              case "description":
                r2.description = n2.textContent;
                break;
              case "subject":
                r2.subject = n2.textContent;
                break;
              case "creator":
                r2.creator = n2.textContent;
                break;
              case "keywords":
                r2.keywords = n2.textContent;
                break;
              case "language":
                r2.language = n2.textContent;
                break;
              case "lastModifiedBy":
                r2.lastModifiedBy = n2.textContent;
                break;
              case "revision":
                n2.textContent && (r2.revision = parseInt(n2.textContent));
            }
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }
        return r2;
      }(e2, this._package.xmlParser);
    }
  }]);
}(Ci);
var ds = _createClass(function ds2() {
  _classCallCheck(this, ds2);
});
function fs(e2, t2) {
  var r2 = {
    name: t2.attr(e2, "name"),
    colors: {}
  };
  var _iterator14 = _createForOfIteratorHelper(t2.elements(e2)), _step14;
  try {
    for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
      var _i2 = _step14.value;
      var n2 = t2.element(_i2, "srgbClr"), a2 = t2.element(_i2, "sysClr");
      n2 ? r2.colors[_i2.localName] = t2.attr(n2, "val") : a2 && (r2.colors[_i2.localName] = t2.attr(a2, "lastClr"));
    }
  } catch (err) {
    _iterator14.e(err);
  } finally {
    _iterator14.f();
  }
  return r2;
}
function ps(e2, t2) {
  var r2 = {
    name: t2.attr(e2, "name")
  };
  var _iterator15 = _createForOfIteratorHelper(t2.elements(e2)), _step15;
  try {
    for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
      var n2 = _step15.value;
      switch (n2.localName) {
        case "majorFont":
          r2.majorFont = ms(n2, t2);
          break;
        case "minorFont":
          r2.minorFont = ms(n2, t2);
      }
    }
  } catch (err) {
    _iterator15.e(err);
  } finally {
    _iterator15.f();
  }
  return r2;
}
function ms(e2, t2) {
  return {
    latinTypeface: t2.elementAttr(e2, "latin", "typeface"),
    eaTypeface: t2.elementAttr(e2, "ea", "typeface"),
    csTypeface: t2.elementAttr(e2, "cs", "typeface")
  };
}
var gs = function(_Ci8) {
  function gs2(e2, t2) {
    _classCallCheck(this, gs2);
    return _callSuper(this, gs2, [e2, t2]);
  }
  _inherits(gs2, _Ci8);
  return _createClass(gs2, [{
    key: "parseXml",
    value: function parseXml(e2) {
      this.theme = function(e3, t2) {
        var r2 = new ds(), n2 = t2.element(e3, "themeElements");
        var _iterator16 = _createForOfIteratorHelper(t2.elements(n2)), _step16;
        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
            var _e2 = _step16.value;
            switch (_e2.localName) {
              case "clrScheme":
                r2.colorScheme = fs(_e2, t2);
                break;
              case "fontScheme":
                r2.fontScheme = ps(_e2, t2);
            }
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
        return r2;
      }(e2, this._package.xmlParser);
    }
  }]);
}(Ci);
var bs = _createClass(function bs2() {
  _classCallCheck(this, bs2);
});
var ys = function(_bs) {
  function ys2() {
    var _this7;
    _classCallCheck(this, ys2);
    _this7 = _callSuper(this, ys2, arguments), _this7.type = Ui.Footnote;
    return _this7;
  }
  _inherits(ys2, _bs);
  return _createClass(ys2);
}(bs);
var vs = function(_bs2) {
  function vs2() {
    var _this8;
    _classCallCheck(this, vs2);
    _this8 = _callSuper(this, vs2, arguments), _this8.type = Ui.Endnote;
    return _this8;
  }
  _inherits(vs2, _bs2);
  return _createClass(vs2);
}(bs);
var ws = function(_Ci9) {
  function ws2(e2, t2, r2) {
    var _this9;
    _classCallCheck(this, ws2);
    _this9 = _callSuper(this, ws2, [e2, t2]), _this9._documentParser = r2;
    return _this9;
  }
  _inherits(ws2, _Ci9);
  return _createClass(ws2);
}(Ci);
var _s = function(_ws) {
  function _s2(e2, t2, r2) {
    _classCallCheck(this, _s2);
    return _callSuper(this, _s2, [e2, t2, r2]);
  }
  _inherits(_s2, _ws);
  return _createClass(_s2, [{
    key: "parseXml",
    value: function parseXml(e2) {
      this.notes = this._documentParser.parseNotes(e2, "footnote", ys);
    }
  }]);
}(ws);
var ks = function(_ws2) {
  function ks2(e2, t2, r2) {
    _classCallCheck(this, ks2);
    return _callSuper(this, ks2, [e2, t2, r2]);
  }
  _inherits(ks2, _ws2);
  return _createClass(ks2, [{
    key: "parseXml",
    value: function parseXml(e2) {
      this.notes = this._documentParser.parseNotes(e2, "endnote", vs);
    }
  }]);
}(ws);
function Ss(e2, t2) {
  var r2 = {
    defaultNoteIds: []
  };
  var _iterator17 = _createForOfIteratorHelper(t2.elements(e2)), _step17;
  try {
    for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
      var n2 = _step17.value;
      switch (n2.localName) {
        case "numFmt":
          r2.nummeringFormat = t2.attr(n2, "val");
          break;
        case "footnote":
        case "endnote":
          r2.defaultNoteIds.push(t2.attr(n2, "id"));
      }
    }
  } catch (err) {
    _iterator17.e(err);
  } finally {
    _iterator17.f();
  }
  return r2;
}
var xs = function(_Ci10) {
  function xs2(e2, t2) {
    _classCallCheck(this, xs2);
    return _callSuper(this, xs2, [e2, t2]);
  }
  _inherits(xs2, _Ci10);
  return _createClass(xs2, [{
    key: "parseXml",
    value: function parseXml(e2) {
      this.settings = function(e3, t2) {
        var r2 = {};
        var _iterator18 = _createForOfIteratorHelper(t2.elements(e3)), _step18;
        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
            var n2 = _step18.value;
            switch (n2.localName) {
              case "defaultTabStop":
                r2.defaultTabStop = t2.lengthAttr(n2, "val");
                break;
              case "footnotePr":
                r2.footnoteProps = Ss(n2, t2);
                break;
              case "endnotePr":
                r2.endnoteProps = Ss(n2, t2);
                break;
              case "autoHyphenation":
                r2.autoHyphenation = t2.boolAttr(n2, "val");
            }
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
        }
        return r2;
      }(e2, this._package.xmlParser);
    }
  }]);
}(Ci);
var Cs = function(_Ci11) {
  function Cs2() {
    _classCallCheck(this, Cs2);
    return _callSuper(this, Cs2, arguments);
  }
  _inherits(Cs2, _Ci11);
  return _createClass(Cs2, [{
    key: "parseXml",
    value: function parseXml(e2) {
      this.props = function(e3, t2) {
        return t2.elements(e3, "property").map(function(e4) {
          var r2 = e4.firstChild;
          return {
            formatId: t2.attr(e4, "fmtid"),
            name: t2.attr(e4, "name"),
            type: r2.nodeName,
            value: r2.textContent
          };
        });
      }(e2, this._package.xmlParser);
    }
  }]);
}(Ci);
var Es = function(_Ci12) {
  function Es2(e2, t2, r2) {
    var _this10;
    _classCallCheck(this, Es2);
    _this10 = _callSuper(this, Es2, [e2, t2]), _this10._documentParser = r2;
    return _this10;
  }
  _inherits(Es2, _Ci12);
  return _createClass(Es2, [{
    key: "parseXml",
    value: function parseXml(e2) {
      this.comments = this._documentParser.parseComments(e2), this.commentMap = Bi(this.comments, function(e3) {
        return e3.id;
      });
    }
  }]);
}(Ci);
var Ps = function(_Ci13) {
  function Ps2(e2, t2) {
    var _this11;
    _classCallCheck(this, Ps2);
    _this11 = _callSuper(this, Ps2, [e2, t2]), _this11.comments = [];
    return _this11;
  }
  _inherits(Ps2, _Ci13);
  return _createClass(Ps2, [{
    key: "parseXml",
    value: function parseXml(e2) {
      var t2 = this._package.xmlParser;
      var _iterator19 = _createForOfIteratorHelper(t2.elements(e2, "commentEx")), _step19;
      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
          var _r6 = _step19.value;
          this.comments.push({
            paraId: t2.attr(_r6, "paraId"),
            paraIdParent: t2.attr(_r6, "paraIdParent"),
            done: t2.boolAttr(_r6, "done")
          });
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }
      this.commentMap = Bi(this.comments, function(e3) {
        return e3.paraId;
      });
    }
  }]);
}(Ci);
var As = [{
  type: di.OfficeDocument,
  target: "word/document.xml"
}, {
  type: di.ExtendedProperties,
  target: "docProps/app.xml"
}, {
  type: di.CoreProperties,
  target: "docProps/core.xml"
}, {
  type: di.CustomProperties,
  target: "docProps/custom.xml"
}];
var Ts = function() {
  function Ts2() {
    _classCallCheck(this, Ts2);
    this.parts = [], this.partsMap = {};
  }
  return _createClass(Ts2, [{
    key: "save",
    value: function save() {
      var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "blob";
      return this._package.save(e2);
    }
  }, {
    key: "loadRelationshipPart",
    value: function() {
      var _loadRelationshipPart = _asyncToGenerator(_regeneratorRuntime().mark(function _callee4(e2, t2) {
        var _r$rels, _this12 = this;
        var r2, _Ni3, _Ni4, _e3;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1)
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.partsMap[e2]) {
                  _context4.next = 2;
                  break;
                }
                return _context4.abrupt("return", this.partsMap[e2]);
              case 2:
                if (this._package.get(e2)) {
                  _context4.next = 4;
                  break;
                }
                return _context4.abrupt("return", null);
              case 4:
                r2 = null;
                _context4.t0 = t2;
                _context4.next = _context4.t0 === di.OfficeDocument ? 8 : _context4.t0 === di.FontTable ? 10 : _context4.t0 === di.Numbering ? 12 : _context4.t0 === di.Styles ? 14 : _context4.t0 === di.Theme ? 16 : _context4.t0 === di.Footnotes ? 18 : _context4.t0 === di.Endnotes ? 20 : _context4.t0 === di.Footer ? 22 : _context4.t0 === di.Header ? 24 : _context4.t0 === di.CoreProperties ? 26 : _context4.t0 === di.ExtendedProperties ? 28 : _context4.t0 === di.CustomProperties ? 30 : _context4.t0 === di.Settings ? 32 : _context4.t0 === di.Comments ? 34 : _context4.t0 === di.CommentsExtended ? 36 : 37;
                break;
              case 8:
                this.documentPart = r2 = new zi(this._package, e2, this._parser);
                return _context4.abrupt("break", 37);
              case 10:
                this.fontTablePart = r2 = new Ti(this._package, e2);
                return _context4.abrupt("break", 37);
              case 12:
                this.numberingPart = r2 = new ts(this._package, e2, this._parser);
                return _context4.abrupt("break", 37);
              case 14:
                this.stylesPart = r2 = new rs(this._package, e2, this._parser);
                return _context4.abrupt("break", 37);
              case 16:
                this.themePart = r2 = new gs(this._package, e2);
                return _context4.abrupt("break", 37);
              case 18:
                this.footnotesPart = r2 = new _s(this._package, e2, this._parser);
                return _context4.abrupt("break", 37);
              case 20:
                this.endnotesPart = r2 = new ks(this._package, e2, this._parser);
                return _context4.abrupt("break", 37);
              case 22:
                r2 = new ls(this._package, e2, this._parser);
                return _context4.abrupt("break", 37);
              case 24:
                r2 = new os(this._package, e2, this._parser);
                return _context4.abrupt("break", 37);
              case 26:
                this.corePropsPart = r2 = new us(this._package, e2);
                return _context4.abrupt("break", 37);
              case 28:
                this.extendedPropsPart = r2 = new hs(this._package, e2);
                return _context4.abrupt("break", 37);
              case 30:
                r2 = new Cs(this._package, e2);
                return _context4.abrupt("break", 37);
              case 32:
                this.settingsPart = r2 = new xs(this._package, e2);
                return _context4.abrupt("break", 37);
              case 34:
                this.commentsPart = r2 = new Es(this._package, e2, this._parser);
                return _context4.abrupt("break", 37);
              case 36:
                this.commentsExtendedPart = r2 = new Ps(this._package, e2);
              case 37:
                if (!(null == r2)) {
                  _context4.next = 39;
                  break;
                }
                return _context4.abrupt("return", Promise.resolve(null));
              case 39:
                this.partsMap[e2] = r2;
                this.parts.push(r2);
                _context4.next = 43;
                return r2.load();
              case 43:
                if (!(((_r$rels = r2.rels) === null || _r$rels === void 0 ? void 0 : _r$rels.length) > 0)) {
                  _context4.next = 47;
                  break;
                }
                _Ni3 = Ni(r2.path), _Ni4 = _slicedToArray(_Ni3, 1), _e3 = _Ni4[0];
                _context4.next = 47;
                return Promise.all(r2.rels.map(function(t3) {
                  return _this12.loadRelationshipPart(Ri(t3.target, _e3), t3.type);
                }));
              case 47:
                return _context4.abrupt("return", r2);
              case 48:
              case "end":
                return _context4.stop();
            }
        }, _callee4, this);
      }));
      function loadRelationshipPart(_x3, _x4) {
        return _loadRelationshipPart.apply(this, arguments);
      }
      return loadRelationshipPart;
    }()
  }, {
    key: "loadDocumentImage",
    value: function() {
      var _loadDocumentImage = _asyncToGenerator(_regeneratorRuntime().mark(function _callee5(e2, t2) {
        var r2;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1)
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.loadResource(t2 !== null && t2 !== void 0 ? t2 : this.documentPart, e2, "blob");
              case 2:
                r2 = _context5.sent;
                return _context5.abrupt("return", this.blobToURL(r2));
              case 4:
              case "end":
                return _context5.stop();
            }
        }, _callee5, this);
      }));
      function loadDocumentImage(_x5, _x6) {
        return _loadDocumentImage.apply(this, arguments);
      }
      return loadDocumentImage;
    }()
  }, {
    key: "loadNumberingImage",
    value: function() {
      var _loadNumberingImage = _asyncToGenerator(_regeneratorRuntime().mark(function _callee6(e2) {
        var t2;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1)
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.loadResource(this.numberingPart, e2, "blob");
              case 2:
                t2 = _context6.sent;
                return _context6.abrupt("return", this.blobToURL(t2));
              case 4:
              case "end":
                return _context6.stop();
            }
        }, _callee6, this);
      }));
      function loadNumberingImage(_x7) {
        return _loadNumberingImage.apply(this, arguments);
      }
      return loadNumberingImage;
    }()
  }, {
    key: "loadFont",
    value: function() {
      var _loadFont = _asyncToGenerator(_regeneratorRuntime().mark(function _callee7(e2, t2) {
        var r2;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1)
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.loadResource(this.fontTablePart, e2, "uint8array");
              case 2:
                r2 = _context7.sent;
                return _context7.abrupt("return", r2 ? this.blobToURL(new Blob([Ns(r2, t2)])) : r2);
              case 4:
              case "end":
                return _context7.stop();
            }
        }, _callee7, this);
      }));
      function loadFont(_x8, _x9) {
        return _loadFont.apply(this, arguments);
      }
      return loadFont;
    }()
  }, {
    key: "blobToURL",
    value: function blobToURL(e2) {
      return e2 ? this._options.useBase64URL ? function(e3) {
        return new Promise(function(t2, r2) {
          var n2 = new FileReader();
          n2.onloadend = function() {
            return t2(n2.result);
          }, n2.onerror = function() {
            return r2();
          }, n2.readAsDataURL(e3);
        });
      }(e2) : URL.createObjectURL(e2) : null;
    }
  }, {
    key: "findPartByRelId",
    value: function findPartByRelId(e2) {
      var _t$rels;
      var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      var r2 = ((_t$rels = t2.rels) !== null && _t$rels !== void 0 ? _t$rels : this.rels).find(function(t3) {
        return t3.id == e2;
      });
      var n2 = t2 ? Ni(t2.path)[0] : "";
      return r2 ? this.partsMap[Ri(r2.target, n2)] : null;
    }
  }, {
    key: "getPathById",
    value: function getPathById(e2, t2) {
      var r2 = e2.rels.find(function(e3) {
        return e3.id == t2;
      }), _Ni5 = Ni(e2.path), _Ni6 = _slicedToArray(_Ni5, 1), n2 = _Ni6[0];
      return r2 ? Ri(r2.target, n2) : null;
    }
  }, {
    key: "loadResource",
    value: function loadResource(e2, t2, r2) {
      var n2 = this.getPathById(e2, t2);
      return n2 ? this._package.load(n2, r2) : Promise.resolve(null);
    }
  }], [{
    key: "load",
    value: function() {
      var _load3 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee8(e2, t2, r2) {
        var n2;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1)
            switch (_context8.prev = _context8.next) {
              case 0:
                n2 = new Ts2();
                n2._options = r2;
                n2._parser = t2;
                _context8.next = 5;
                return Ii.load(e2, r2);
              case 5:
                n2._package = _context8.sent;
                _context8.next = 8;
                return n2._package.loadRelationships();
              case 8:
                n2.rels = _context8.sent;
                _context8.next = 11;
                return Promise.all(As.map(function(e3) {
                  var _n$rels$find;
                  var t3 = (_n$rels$find = n2.rels.find(function(t4) {
                    return t4.type === e3.type;
                  })) !== null && _n$rels$find !== void 0 ? _n$rels$find : e3;
                  return n2.loadRelationshipPart(t3.target, t3.type);
                }));
              case 11:
                return _context8.abrupt("return", n2);
              case 12:
              case "end":
                return _context8.stop();
            }
        }, _callee8);
      }));
      function load3(_x10, _x11, _x12) {
        return _load3.apply(this, arguments);
      }
      return load3;
    }()
  }]);
}();
function Ns(e2, t2) {
  var r2 = t2.replace(/{|}|-/g, ""), n2 = new Array(16);
  for (var _e4 = 0; _e4 < 16; _e4++)
    n2[16 - _e4 - 1] = parseInt(r2.substr(2 * _e4, 2), 16);
  for (var _t4 = 0; _t4 < 32; _t4++)
    e2[_t4] = e2[_t4] ^ n2[_t4 % 16];
  return e2;
}
function Rs(e2, t2) {
  return {
    type: Ui.BookmarkEnd,
    id: t2.attr(e2, "id")
  };
}
var Bs = function(_ns3) {
  function Bs2() {
    var _this13;
    _classCallCheck(this, Bs2);
    _this13 = _callSuper(this, Bs2, arguments), _this13.type = Ui.VmlElement, _this13.attrs = {};
    return _this13;
  }
  _inherits(Bs2, _ns3);
  return _createClass(Bs2);
}(ns);
function Ms(e2, t2) {
  var _r$children;
  var r2 = new Bs();
  switch (e2.localName) {
    case "rect":
      r2.tagName = "rect", Object.assign(r2.attrs, {
        width: "100%",
        height: "100%"
      });
      break;
    case "oval":
      r2.tagName = "ellipse", Object.assign(r2.attrs, {
        cx: "50%",
        cy: "50%",
        rx: "50%",
        ry: "50%"
      });
      break;
    case "line":
      r2.tagName = "line";
      break;
    case "shape":
      r2.tagName = "g";
      break;
    case "textbox":
      r2.tagName = "foreignObject", Object.assign(r2.attrs, {
        width: "100%",
        height: "100%"
      });
      break;
    default:
      return null;
  }
  var _iterator20 = _createForOfIteratorHelper(xi.attrs(e2)), _step20;
  try {
    for (_iterator20.s(); !(_step20 = _iterator20.n()).done; ) {
      var _t5 = _step20.value;
      switch (_t5.localName) {
        case "style":
          r2.cssStyleText = _t5.value;
          break;
        case "fillcolor":
          r2.attrs.fill = _t5.value;
          break;
        case "from":
          var _Os = Os(_t5.value), _Os2 = _slicedToArray(_Os, 2), _e5 = _Os2[0], n2 = _Os2[1];
          Object.assign(r2.attrs, {
            x1: _e5,
            y1: n2
          });
          break;
        case "to":
          var _Os3 = Os(_t5.value), _Os4 = _slicedToArray(_Os3, 2), a2 = _Os4[0], _i3 = _Os4[1];
          Object.assign(r2.attrs, {
            x2: a2,
            y2: _i3
          });
      }
    }
  } catch (err) {
    _iterator20.e(err);
  } finally {
    _iterator20.f();
  }
  var _iterator21 = _createForOfIteratorHelper(xi.elements(e2)), _step21;
  try {
    for (_iterator21.s(); !(_step21 = _iterator21.n()).done; ) {
      var _n9 = _step21.value;
      switch (_n9.localName) {
        case "stroke":
          Object.assign(r2.attrs, Ds(_n9));
          break;
        case "fill":
          Object.assign(r2.attrs, {});
          break;
        case "imagedata":
          r2.tagName = "image", Object.assign(r2.attrs, {
            width: "100%",
            height: "100%"
          }), r2.imageHref = {
            id: xi.attr(_n9, "id"),
            title: xi.attr(_n9, "title")
          };
          break;
        case "txbxContent":
          (_r$children = r2.children).push.apply(_r$children, _toConsumableArray(t2.parseBodyElements(_n9)));
          break;
        default:
          var _e6 = Ms(_n9, t2);
          _e6 && r2.children.push(_e6);
      }
    }
  } catch (err) {
    _iterator21.e(err);
  } finally {
    _iterator21.f();
  }
  return r2;
}
function Ds(e2) {
  var _xi$lengthAttr;
  return {
    stroke: xi.attr(e2, "color"),
    "stroke-width": (_xi$lengthAttr = xi.lengthAttr(e2, "weight", gi)) !== null && _xi$lengthAttr !== void 0 ? _xi$lengthAttr : "1px"
  };
}
function Os(e2) {
  return e2.split(",");
}
var Is = function(_ns4) {
  function Is2() {
    var _this14;
    _classCallCheck(this, Is2);
    _this14 = _callSuper(this, Is2, arguments), _this14.type = Ui.Comment;
    return _this14;
  }
  _inherits(Is2, _ns4);
  return _createClass(Is2);
}(ns);
var zs = function(_ns5) {
  function zs2(e2) {
    var _this15;
    _classCallCheck(this, zs2);
    _this15 = _callSuper(this, zs2), _this15.id = e2, _this15.type = Ui.CommentReference;
    return _this15;
  }
  _inherits(zs2, _ns5);
  return _createClass(zs2);
}(ns);
var Fs = function(_ns6) {
  function Fs2(e2) {
    var _this16;
    _classCallCheck(this, Fs2);
    _this16 = _callSuper(this, Fs2), _this16.id = e2, _this16.type = Ui.CommentRangeStart;
    return _this16;
  }
  _inherits(Fs2, _ns6);
  return _createClass(Fs2);
}(ns);
var Ls = function(_ns7) {
  function Ls2(e2) {
    var _this17;
    _classCallCheck(this, Ls2);
    _this17 = _callSuper(this, Ls2), _this17.id = e2, _this17.type = Ui.CommentRangeEnd;
    return _this17;
  }
  _inherits(Ls2, _ns7);
  return _createClass(Ls2);
}(ns);
var js = "inherit";
var Us = "black";
var $s = "black";
var Hs = "transparent";
var Ws = [];
var Zs = {
  oMath: Ui.MmlMath,
  oMathPara: Ui.MmlMathParagraph,
  f: Ui.MmlFraction,
  func: Ui.MmlFunction,
  fName: Ui.MmlFunctionName,
  num: Ui.MmlNumerator,
  den: Ui.MmlDenominator,
  rad: Ui.MmlRadical,
  deg: Ui.MmlDegree,
  e: Ui.MmlBase,
  sSup: Ui.MmlSuperscript,
  sSub: Ui.MmlSubscript,
  sPre: Ui.MmlPreSubSuper,
  sup: Ui.MmlSuperArgument,
  sub: Ui.MmlSubArgument,
  d: Ui.MmlDelimiter,
  nary: Ui.MmlNary,
  eqArr: Ui.MmlEquationArray,
  lim: Ui.MmlLimit,
  limLow: Ui.MmlLimitLower,
  m: Ui.MmlMatrix,
  mr: Ui.MmlMatrixRow,
  box: Ui.MmlBox,
  bar: Ui.MmlBar,
  groupChr: Ui.MmlGroupChar
};
var Vs = function() {
  function Vs2(e2) {
    _classCallCheck(this, Vs2);
    this.options = _objectSpread({
      ignoreWidth: false,
      debug: false
    }, e2);
  }
  return _createClass(Vs2, [{
    key: "parseNotes",
    value: function parseNotes(e2, t2, r2) {
      var n2 = [];
      var _iterator22 = _createForOfIteratorHelper(xi.elements(e2, t2)), _step22;
      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
          var a2 = _step22.value;
          var _e7 = new r2();
          _e7.id = xi.attr(a2, "id"), _e7.noteType = xi.attr(a2, "type"), _e7.children = this.parseBodyElements(a2), n2.push(_e7);
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }
      return n2;
    }
  }, {
    key: "parseComments",
    value: function parseComments(e2) {
      var t2 = [];
      var _iterator23 = _createForOfIteratorHelper(xi.elements(e2, "comment")), _step23;
      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done; ) {
          var _r7 = _step23.value;
          var _e8 = new Is();
          _e8.id = xi.attr(_r7, "id"), _e8.author = xi.attr(_r7, "author"), _e8.initials = xi.attr(_r7, "initials"), _e8.date = xi.attr(_r7, "date"), _e8.children = this.parseBodyElements(_r7), t2.push(_e8);
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }
      return t2;
    }
  }, {
    key: "parseDocumentFile",
    value: function parseDocumentFile(e2) {
      var t2 = xi.element(e2, "body"), r2 = xi.element(e2, "background"), n2 = xi.element(t2, "sectPr");
      return {
        type: Ui.Document,
        children: this.parseBodyElements(t2),
        props: n2 ? $i(n2, xi) : {},
        cssStyle: r2 ? this.parseBackground(r2) : {}
      };
    }
  }, {
    key: "parseBackground",
    value: function parseBackground(e2) {
      var t2 = {}, r2 = Xs.colorAttr(e2, "color");
      return r2 && (t2["background-color"] = r2), t2;
    }
  }, {
    key: "parseBodyElements",
    value: function parseBodyElements(e2) {
      var _this18 = this;
      var t2 = [];
      var _iterator24 = _createForOfIteratorHelper(xi.elements(e2)), _step24;
      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) {
          var _r8 = _step24.value;
          switch (_r8.localName) {
            case "p":
              t2.push(this.parseParagraph(_r8));
              break;
            case "tbl":
              t2.push(this.parseTable(_r8));
              break;
            case "sdt":
              t2.push.apply(t2, _toConsumableArray(this.parseSdt(_r8, function(e3) {
                return _this18.parseBodyElements(e3);
              })));
          }
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
      return t2;
    }
  }, {
    key: "parseStylesFile",
    value: function parseStylesFile(e2) {
      var _this19 = this;
      var t2 = [];
      return Xs.foreach(e2, function(e3) {
        switch (e3.localName) {
          case "style":
            t2.push(_this19.parseStyle(e3));
            break;
          case "docDefaults":
            t2.push(_this19.parseDefaultStyles(e3));
        }
      }), t2;
    }
  }, {
    key: "parseDefaultStyles",
    value: function parseDefaultStyles(e2) {
      var _this20 = this;
      var t2 = {
        id: null,
        name: null,
        target: null,
        basedOn: null,
        styles: []
      };
      return Xs.foreach(e2, function(e3) {
        switch (e3.localName) {
          case "rPrDefault":
            var r2 = xi.element(e3, "rPr");
            r2 && t2.styles.push({
              target: "span",
              values: _this20.parseDefaultProperties(r2, {})
            });
            break;
          case "pPrDefault":
            var n2 = xi.element(e3, "pPr");
            n2 && t2.styles.push({
              target: "p",
              values: _this20.parseDefaultProperties(n2, {})
            });
        }
      }), t2;
    }
  }, {
    key: "parseStyle",
    value: function parseStyle(e2) {
      var _this21 = this;
      var t2 = {
        id: xi.attr(e2, "styleId"),
        isDefault: xi.boolAttr(e2, "default"),
        name: null,
        target: null,
        basedOn: null,
        styles: [],
        linked: null
      };
      switch (xi.attr(e2, "type")) {
        case "paragraph":
          t2.target = "p";
          break;
        case "table":
          t2.target = "table";
          break;
        case "character":
          t2.target = "span";
      }
      return Xs.foreach(e2, function(e3) {
        switch (e3.localName) {
          case "basedOn":
            t2.basedOn = xi.attr(e3, "val");
            break;
          case "name":
            t2.name = xi.attr(e3, "val");
            break;
          case "link":
            t2.linked = xi.attr(e3, "val");
            break;
          case "next":
            t2.next = xi.attr(e3, "val");
            break;
          case "aliases":
            t2.aliases = xi.attr(e3, "val").split(",");
            break;
          case "pPr":
            t2.styles.push({
              target: "p",
              values: _this21.parseDefaultProperties(e3, {})
            }), t2.paragraphProps = Xi(e3, xi);
            break;
          case "rPr":
            t2.styles.push({
              target: "span",
              values: _this21.parseDefaultProperties(e3, {})
            }), t2.runProps = Vi(e3, xi);
            break;
          case "tblPr":
          case "tcPr":
            t2.styles.push({
              target: "td",
              values: _this21.parseDefaultProperties(e3, {})
            });
            break;
          case "tblStylePr":
            var _iterator25 = _createForOfIteratorHelper(_this21.parseTableStyle(e3)), _step25;
            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done; ) {
                var _r9 = _step25.value;
                t2.styles.push(_r9);
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }
            break;
          case "rsid":
          case "qFormat":
          case "hidden":
          case "semiHidden":
          case "unhideWhenUsed":
          case "autoRedefine":
          case "uiPriority":
            break;
          default:
            _this21.options.debug && console.warn("DOCX: Unknown style element: ".concat(e3.localName));
        }
      }), t2;
    }
  }, {
    key: "parseTableStyle",
    value: function parseTableStyle(e2) {
      var _this22 = this;
      var t2 = [], r2 = xi.attr(e2, "type"), n2 = "", a2 = "";
      switch (r2) {
        case "firstRow":
          a2 = ".first-row", n2 = "tr.first-row td";
          break;
        case "lastRow":
          a2 = ".last-row", n2 = "tr.last-row td";
          break;
        case "firstCol":
          a2 = ".first-col", n2 = "td.first-col";
          break;
        case "lastCol":
          a2 = ".last-col", n2 = "td.last-col";
          break;
        case "band1Vert":
          a2 = ":not(.no-vband)", n2 = "td.odd-col";
          break;
        case "band2Vert":
          a2 = ":not(.no-vband)", n2 = "td.even-col";
          break;
        case "band1Horz":
          a2 = ":not(.no-hband)", n2 = "tr.odd-row";
          break;
        case "band2Horz":
          a2 = ":not(.no-hband)", n2 = "tr.even-row";
          break;
        default:
          return [];
      }
      return Xs.foreach(e2, function(e3) {
        switch (e3.localName) {
          case "pPr":
            t2.push({
              target: "".concat(n2, " p"),
              mod: a2,
              values: _this22.parseDefaultProperties(e3, {})
            });
            break;
          case "rPr":
            t2.push({
              target: "".concat(n2, " span"),
              mod: a2,
              values: _this22.parseDefaultProperties(e3, {})
            });
            break;
          case "tblPr":
          case "tcPr":
            t2.push({
              target: n2,
              mod: a2,
              values: _this22.parseDefaultProperties(e3, {})
            });
        }
      }), t2;
    }
  }, {
    key: "parseNumberingFile",
    value: function parseNumberingFile(e2) {
      var _this23 = this;
      var t2 = [], r2 = {}, n2 = [];
      return Xs.foreach(e2, function(e3) {
        switch (e3.localName) {
          case "abstractNum":
            _this23.parseAbstractNumbering(e3, n2).forEach(function(e4) {
              return t2.push(e4);
            });
            break;
          case "numPicBullet":
            n2.push(_this23.parseNumberingPicBullet(e3));
            break;
          case "num":
            var a2 = xi.attr(e3, "numId"), i2 = xi.elementAttr(e3, "abstractNumId", "val");
            r2[i2] = a2;
        }
      }), t2.forEach(function(e3) {
        return e3.id = r2[e3.id];
      }), t2;
    }
  }, {
    key: "parseNumberingPicBullet",
    value: function parseNumberingPicBullet(e2) {
      var t2 = xi.element(e2, "pict"), r2 = t2 && xi.element(t2, "shape"), n2 = r2 && xi.element(r2, "imagedata");
      return n2 ? {
        id: xi.intAttr(e2, "numPicBulletId"),
        src: xi.attr(n2, "id"),
        style: xi.attr(r2, "style")
      } : null;
    }
  }, {
    key: "parseAbstractNumbering",
    value: function parseAbstractNumbering(e2, t2) {
      var _this24 = this;
      var r2 = [], n2 = xi.attr(e2, "abstractNumId");
      return Xs.foreach(e2, function(e3) {
        if ("lvl" === e3.localName)
          r2.push(_this24.parseNumberingLevel(n2, e3, t2));
      }), r2;
    }
  }, {
    key: "parseNumberingLevel",
    value: function parseNumberingLevel(e2, t2, r2) {
      var _this25 = this;
      var n2 = {
        id: e2,
        level: xi.intAttr(t2, "ilvl"),
        start: 1,
        pStyleName: void 0,
        pStyle: {},
        rStyle: {},
        suff: "tab"
      };
      return Xs.foreach(t2, function(e3) {
        switch (e3.localName) {
          case "start":
            n2.start = xi.intAttr(e3, "val");
            break;
          case "pPr":
            _this25.parseDefaultProperties(e3, n2.pStyle);
            break;
          case "rPr":
            _this25.parseDefaultProperties(e3, n2.rStyle);
            break;
          case "lvlPicBulletId":
            var t3 = xi.intAttr(e3, "val");
            n2.bullet = r2.find(function(e4) {
              return (e4 === null || e4 === void 0 ? void 0 : e4.id) == t3;
            });
            break;
          case "lvlText":
            n2.levelText = xi.attr(e3, "val");
            break;
          case "pStyle":
            n2.pStyleName = xi.attr(e3, "val");
            break;
          case "numFmt":
            n2.format = xi.attr(e3, "val");
            break;
          case "suff":
            n2.suff = xi.attr(e3, "val");
        }
      }), n2;
    }
  }, {
    key: "parseSdt",
    value: function parseSdt(e2, t2) {
      var r2 = xi.element(e2, "sdtContent");
      return r2 ? t2(r2) : [];
    }
  }, {
    key: "parseInserted",
    value: function parseInserted(e2, t2) {
      var _t$children, _t6;
      return {
        type: Ui.Inserted,
        children: (_t$children = (_t6 = t2(e2)) === null || _t6 === void 0 ? void 0 : _t6.children) !== null && _t$children !== void 0 ? _t$children : []
      };
    }
  }, {
    key: "parseDeleted",
    value: function parseDeleted(e2, t2) {
      var _t$children2, _t7;
      return {
        type: Ui.Deleted,
        children: (_t$children2 = (_t7 = t2(e2)) === null || _t7 === void 0 ? void 0 : _t7.children) !== null && _t$children2 !== void 0 ? _t$children2 : []
      };
    }
  }, {
    key: "parseParagraph",
    value: function parseParagraph(e2) {
      var _n$children, _this26 = this;
      var t2, r2, n2 = {
        type: Ui.Paragraph,
        children: []
      };
      var _iterator26 = _createForOfIteratorHelper(xi.elements(e2)), _step26;
      try {
        for (_iterator26.s(); !(_step26 = _iterator26.n()).done; ) {
          var a2 = _step26.value;
          switch (a2.localName) {
            case "pPr":
              this.parseParagraphProperties(a2, n2);
              break;
            case "r":
              n2.children.push(this.parseRun(a2, n2));
              break;
            case "hyperlink":
              n2.children.push(this.parseHyperlink(a2, n2));
              break;
            case "smartTag":
              n2.children.push(this.parseSmartTag(a2, n2));
              break;
            case "bookmarkStart":
              n2.children.push((t2 = a2, r2 = xi, {
                type: Ui.BookmarkStart,
                id: r2.attr(t2, "id"),
                name: r2.attr(t2, "name"),
                colFirst: r2.intAttr(t2, "colFirst"),
                colLast: r2.intAttr(t2, "colLast")
              }));
              break;
            case "bookmarkEnd":
              n2.children.push(Rs(a2, xi));
              break;
            case "commentRangeStart":
              n2.children.push(new Fs(xi.attr(a2, "id")));
              break;
            case "commentRangeEnd":
              n2.children.push(new Ls(xi.attr(a2, "id")));
              break;
            case "oMath":
            case "oMathPara":
              n2.children.push(this.parseMathElement(a2));
              break;
            case "sdt":
              (_n$children = n2.children).push.apply(_n$children, _toConsumableArray(this.parseSdt(a2, function(e3) {
                return _this26.parseParagraph(e3).children;
              })));
              break;
            case "ins":
              n2.children.push(this.parseInserted(a2, function(e3) {
                return _this26.parseParagraph(e3);
              }));
              break;
            case "del":
              n2.children.push(this.parseDeleted(a2, function(e3) {
                return _this26.parseParagraph(e3);
              }));
          }
        }
      } catch (err) {
        _iterator26.e(err);
      } finally {
        _iterator26.f();
      }
      return n2;
    }
  }, {
    key: "parseParagraphProperties",
    value: function parseParagraphProperties(e2, t2) {
      var _this27 = this;
      this.parseDefaultProperties(e2, t2.cssStyle = {}, null, function(e3) {
        if (Ki(e3, t2, xi))
          return true;
        switch (e3.localName) {
          case "pStyle":
            t2.styleName = xi.attr(e3, "val");
            break;
          case "cnfStyle":
            t2.className = Ks.classNameOfCnfStyle(e3);
            break;
          case "framePr":
            _this27.parseFrame(e3, t2);
            break;
          case "rPr":
            break;
          default:
            return false;
        }
        return true;
      });
    }
  }, {
    key: "parseFrame",
    value: function parseFrame(e2, t2) {
      "drop" == xi.attr(e2, "dropCap") && (t2.cssStyle.float = "left");
    }
  }, {
    key: "parseHyperlink",
    value: function parseHyperlink(e2, t2) {
      var _this28 = this;
      var r2 = {
        type: Ui.Hyperlink,
        parent: t2,
        children: []
      }, n2 = xi.attr(e2, "anchor"), a2 = xi.attr(e2, "id");
      return n2 && (r2.href = "#" + n2), a2 && (r2.id = a2), Xs.foreach(e2, function(e3) {
        if ("r" === e3.localName)
          r2.children.push(_this28.parseRun(e3, r2));
      }), r2;
    }
  }, {
    key: "parseSmartTag",
    value: function parseSmartTag(e2, t2) {
      var _this29 = this;
      var r2 = {
        type: Ui.SmartTag,
        parent: t2,
        children: []
      }, n2 = xi.attr(e2, "uri"), a2 = xi.attr(e2, "element");
      return n2 && (r2.uri = n2), a2 && (r2.element = a2), Xs.foreach(e2, function(e3) {
        if ("r" === e3.localName)
          r2.children.push(_this29.parseRun(e3, r2));
      }), r2;
    }
  }, {
    key: "parseRun",
    value: function parseRun(e2, t2) {
      var _this30 = this;
      var r2 = {
        type: Ui.Run,
        parent: t2,
        children: []
      };
      return Xs.foreach(e2, function(e3) {
        switch ((e3 = _this30.checkAlternateContent(e3)).localName) {
          case "t":
            r2.children.push({
              type: Ui.Text,
              text: e3.textContent
            });
            break;
          case "delText":
            r2.children.push({
              type: Ui.DeletedText,
              text: e3.textContent
            });
            break;
          case "commentReference":
            r2.children.push(new zs(xi.attr(e3, "id")));
            break;
          case "fldSimple":
            r2.children.push({
              type: Ui.SimpleField,
              instruction: xi.attr(e3, "instr"),
              lock: xi.boolAttr(e3, "lock", false),
              dirty: xi.boolAttr(e3, "dirty", false)
            });
            break;
          case "instrText":
            r2.fieldRun = true, r2.children.push({
              type: Ui.Instruction,
              text: e3.textContent
            });
            break;
          case "fldChar":
            r2.fieldRun = true, r2.children.push({
              type: Ui.ComplexField,
              charType: xi.attr(e3, "fldCharType"),
              lock: xi.boolAttr(e3, "lock", false),
              dirty: xi.boolAttr(e3, "dirty", false)
            });
            break;
          case "noBreakHyphen":
            r2.children.push({
              type: Ui.NoBreakHyphen
            });
            break;
          case "br":
            r2.children.push({
              type: Ui.Break,
              break: xi.attr(e3, "type") || "textWrapping"
            });
            break;
          case "lastRenderedPageBreak":
            r2.children.push({
              type: Ui.Break,
              break: "lastRenderedPageBreak"
            });
            break;
          case "sym":
            r2.children.push({
              type: Ui.Symbol,
              font: xi.attr(e3, "font"),
              char: xi.attr(e3, "char")
            });
            break;
          case "tab":
            r2.children.push({
              type: Ui.Tab
            });
            break;
          case "footnoteReference":
            r2.children.push({
              type: Ui.FootnoteReference,
              id: xi.attr(e3, "id")
            });
            break;
          case "endnoteReference":
            r2.children.push({
              type: Ui.EndnoteReference,
              id: xi.attr(e3, "id")
            });
            break;
          case "drawing":
            var _t8 = _this30.parseDrawing(e3);
            _t8 && (r2.children = [_t8]);
            break;
          case "pict":
            r2.children.push(_this30.parseVmlPicture(e3));
            break;
          case "rPr":
            _this30.parseRunProperties(e3, r2);
        }
      }), r2;
    }
  }, {
    key: "parseMathElement",
    value: function parseMathElement(e2) {
      var t2 = "".concat(e2.localName, "Pr"), r2 = {
        type: Zs[e2.localName],
        children: []
      };
      var _iterator27 = _createForOfIteratorHelper(xi.elements(e2)), _step27;
      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done; ) {
          var a2 = _step27.value;
          if (Zs[a2.localName])
            r2.children.push(this.parseMathElement(a2));
          else if ("r" == a2.localName) {
            var n2 = this.parseRun(a2);
            n2.type = Ui.MmlRun, r2.children.push(n2);
          } else
            a2.localName == t2 && (r2.props = this.parseMathProperies(a2));
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }
      return r2;
    }
  }, {
    key: "parseMathProperies",
    value: function parseMathProperies(e2) {
      var t2 = {};
      var _iterator28 = _createForOfIteratorHelper(xi.elements(e2)), _step28;
      try {
        for (_iterator28.s(); !(_step28 = _iterator28.n()).done; ) {
          var _r10 = _step28.value;
          switch (_r10.localName) {
            case "chr":
              t2.char = xi.attr(_r10, "val");
              break;
            case "vertJc":
              t2.verticalJustification = xi.attr(_r10, "val");
              break;
            case "pos":
              t2.position = xi.attr(_r10, "val");
              break;
            case "degHide":
              t2.hideDegree = xi.boolAttr(_r10, "val");
              break;
            case "begChr":
              t2.beginChar = xi.attr(_r10, "val");
              break;
            case "endChr":
              t2.endChar = xi.attr(_r10, "val");
          }
        }
      } catch (err) {
        _iterator28.e(err);
      } finally {
        _iterator28.f();
      }
      return t2;
    }
  }, {
    key: "parseRunProperties",
    value: function parseRunProperties(e2, t2) {
      this.parseDefaultProperties(e2, t2.cssStyle = {}, null, function(e3) {
        switch (e3.localName) {
          case "rStyle":
            t2.styleName = xi.attr(e3, "val");
            break;
          case "vertAlign":
            t2.verticalAlign = Ks.valueOfVertAlign(e3, true);
            break;
          default:
            return false;
        }
        return true;
      });
    }
  }, {
    key: "parseVmlPicture",
    value: function parseVmlPicture(e2) {
      var t2 = {
        type: Ui.VmlPicture,
        children: []
      };
      var _iterator29 = _createForOfIteratorHelper(xi.elements(e2)), _step29;
      try {
        for (_iterator29.s(); !(_step29 = _iterator29.n()).done; ) {
          var _r11 = _step29.value;
          var _e9 = Ms(_r11, this);
          _e9 && t2.children.push(_e9);
        }
      } catch (err) {
        _iterator29.e(err);
      } finally {
        _iterator29.f();
      }
      return t2;
    }
  }, {
    key: "checkAlternateContent",
    value: function checkAlternateContent(e2) {
      var _xi$element;
      if ("AlternateContent" != e2.localName)
        return e2;
      var t2 = xi.element(e2, "Choice");
      if (t2) {
        var r2 = xi.attr(t2, "Requires"), n2 = e2.lookupNamespaceURI(r2);
        if (Ws.includes(n2))
          return t2.firstElementChild;
      }
      return (_xi$element = xi.element(e2, "Fallback")) === null || _xi$element === void 0 ? void 0 : _xi$element.firstElementChild;
    }
  }, {
    key: "parseDrawing",
    value: function parseDrawing(e2) {
      var _iterator30 = _createForOfIteratorHelper(xi.elements(e2)), _step30;
      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done; ) {
          var t2 = _step30.value;
          switch (t2.localName) {
            case "inline":
            case "anchor":
              return this.parseDrawingWrapper(t2);
          }
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }
    }
  }, {
    key: "parseDrawingWrapper",
    value: function parseDrawingWrapper(e2) {
      var t2 = {
        type: Ui.Drawing,
        children: [],
        cssStyle: {}
      }, r2 = "anchor" == e2.localName;
      var n2 = null, a2 = xi.boolAttr(e2, "simplePos");
      xi.boolAttr(e2, "behindDoc");
      var i2 = {
        relative: "page",
        align: "left",
        offset: "0"
      }, s2 = {
        relative: "page",
        align: "top",
        offset: "0"
      };
      var _iterator31 = _createForOfIteratorHelper(xi.elements(e2)), _step31;
      try {
        for (_iterator31.s(); !(_step31 = _iterator31.n()).done; ) {
          var o2 = _step31.value;
          switch (o2.localName) {
            case "simplePos":
              a2 && (i2.offset = xi.lengthAttr(o2, "x", gi), s2.offset = xi.lengthAttr(o2, "y", gi));
              break;
            case "extent":
              t2.cssStyle.width = xi.lengthAttr(o2, "cx", gi), t2.cssStyle.height = xi.lengthAttr(o2, "cy", gi);
              break;
            case "positionH":
            case "positionV":
              if (!a2) {
                var _xi$attr;
                var _e10 = "positionH" == o2.localName ? i2 : s2;
                var l2 = xi.element(o2, "align"), c2 = xi.element(o2, "posOffset");
                _e10.relative = (_xi$attr = xi.attr(o2, "relativeFrom")) !== null && _xi$attr !== void 0 ? _xi$attr : _e10.relative, l2 && (_e10.align = l2.textContent), c2 && (_e10.offset = Xs.sizeValue(c2, gi));
              }
              break;
            case "wrapTopAndBottom":
              n2 = "wrapTopAndBottom";
              break;
            case "wrapNone":
              n2 = "wrapNone";
              break;
            case "graphic":
              var h2 = this.parseGraphic(o2);
              h2 && t2.children.push(h2);
          }
        }
      } catch (err) {
        _iterator31.e(err);
      } finally {
        _iterator31.f();
      }
      return "wrapTopAndBottom" == n2 ? (t2.cssStyle.display = "block", i2.align && (t2.cssStyle["text-align"] = i2.align, t2.cssStyle.width = "100%")) : "wrapNone" == n2 ? (t2.cssStyle.display = "block", t2.cssStyle.position = "relative", t2.cssStyle.width = "0px", t2.cssStyle.height = "0px", i2.offset && (t2.cssStyle.left = i2.offset), s2.offset && (t2.cssStyle.top = s2.offset)) : !r2 || "left" != i2.align && "right" != i2.align || (t2.cssStyle.float = i2.align), t2;
    }
  }, {
    key: "parseGraphic",
    value: function parseGraphic(e2) {
      var t2 = xi.element(e2, "graphicData");
      var _iterator32 = _createForOfIteratorHelper(xi.elements(t2)), _step32;
      try {
        for (_iterator32.s(); !(_step32 = _iterator32.n()).done; ) {
          var _e11 = _step32.value;
          if ("pic" === _e11.localName)
            return this.parsePicture(_e11);
        }
      } catch (err) {
        _iterator32.e(err);
      } finally {
        _iterator32.f();
      }
      return null;
    }
  }, {
    key: "parsePicture",
    value: function parsePicture(e2) {
      var t2 = {
        type: Ui.Image,
        src: "",
        cssStyle: {}
      }, r2 = xi.element(e2, "blipFill"), n2 = xi.element(r2, "blip");
      t2.src = xi.attr(n2, "embed");
      var a2 = xi.element(e2, "spPr"), i2 = xi.element(a2, "xfrm");
      var _iterator33 = _createForOfIteratorHelper((t2.cssStyle.position = "relative", xi.elements(i2))), _step33;
      try {
        for (_iterator33.s(); !(_step33 = _iterator33.n()).done; ) {
          var s2 = _step33.value;
          switch (s2.localName) {
            case "ext":
              t2.cssStyle.width = xi.lengthAttr(s2, "cx", gi), t2.cssStyle.height = xi.lengthAttr(s2, "cy", gi);
              break;
            case "off":
              t2.cssStyle.left = xi.lengthAttr(s2, "x", gi), t2.cssStyle.top = xi.lengthAttr(s2, "y", gi);
          }
        }
      } catch (err) {
        _iterator33.e(err);
      } finally {
        _iterator33.f();
      }
      return t2;
    }
  }, {
    key: "parseTable",
    value: function parseTable(e2) {
      var _this31 = this;
      var t2 = {
        type: Ui.Table,
        children: []
      };
      return Xs.foreach(e2, function(e3) {
        switch (e3.localName) {
          case "tr":
            t2.children.push(_this31.parseTableRow(e3));
            break;
          case "tblGrid":
            t2.columns = _this31.parseTableColumns(e3);
            break;
          case "tblPr":
            _this31.parseTableProperties(e3, t2);
        }
      }), t2;
    }
  }, {
    key: "parseTableColumns",
    value: function parseTableColumns(e2) {
      var t2 = [];
      return Xs.foreach(e2, function(e3) {
        if ("gridCol" === e3.localName)
          t2.push({
            width: xi.lengthAttr(e3, "w")
          });
      }), t2;
    }
  }, {
    key: "parseTableProperties",
    value: function parseTableProperties(e2, t2) {
      var _this32 = this;
      switch (t2.cssStyle = {}, t2.cellStyle = {}, this.parseDefaultProperties(e2, t2.cssStyle, t2.cellStyle, function(e3) {
        switch (e3.localName) {
          case "tblStyle":
            t2.styleName = xi.attr(e3, "val");
            break;
          case "tblLook":
            t2.className = Ks.classNameOftblLook(e3);
            break;
          case "tblpPr":
            _this32.parseTablePosition(e3, t2);
            break;
          case "tblStyleColBandSize":
            t2.colBandSize = xi.intAttr(e3, "val");
            break;
          case "tblStyleRowBandSize":
            t2.rowBandSize = xi.intAttr(e3, "val");
            break;
          default:
            return false;
        }
        return true;
      }), t2.cssStyle["text-align"]) {
        case "center":
          delete t2.cssStyle["text-align"], t2.cssStyle["margin-left"] = "auto", t2.cssStyle["margin-right"] = "auto";
          break;
        case "right":
          delete t2.cssStyle["text-align"], t2.cssStyle["margin-left"] = "auto";
      }
    }
  }, {
    key: "parseTablePosition",
    value: function parseTablePosition(e2, t2) {
      var r2 = xi.lengthAttr(e2, "topFromText"), n2 = xi.lengthAttr(e2, "bottomFromText"), a2 = xi.lengthAttr(e2, "rightFromText"), i2 = xi.lengthAttr(e2, "leftFromText");
      t2.cssStyle.float = "left", t2.cssStyle["margin-bottom"] = Ks.addSize(t2.cssStyle["margin-bottom"], n2), t2.cssStyle["margin-left"] = Ks.addSize(t2.cssStyle["margin-left"], i2), t2.cssStyle["margin-right"] = Ks.addSize(t2.cssStyle["margin-right"], a2), t2.cssStyle["margin-top"] = Ks.addSize(t2.cssStyle["margin-top"], r2);
    }
  }, {
    key: "parseTableRow",
    value: function parseTableRow(e2) {
      var _this33 = this;
      var t2 = {
        type: Ui.Row,
        children: []
      };
      return Xs.foreach(e2, function(e3) {
        switch (e3.localName) {
          case "tc":
            t2.children.push(_this33.parseTableCell(e3));
            break;
          case "trPr":
            _this33.parseTableRowProperties(e3, t2);
        }
      }), t2;
    }
  }, {
    key: "parseTableRowProperties",
    value: function parseTableRowProperties(e2, t2) {
      t2.cssStyle = this.parseDefaultProperties(e2, {}, null, function(e3) {
        switch (e3.localName) {
          case "cnfStyle":
            t2.className = Ks.classNameOfCnfStyle(e3);
            break;
          case "tblHeader":
            t2.isHeader = xi.boolAttr(e3, "val");
            break;
          default:
            return false;
        }
        return true;
      });
    }
  }, {
    key: "parseTableCell",
    value: function parseTableCell(e2) {
      var _this34 = this;
      var t2 = {
        type: Ui.Cell,
        children: []
      };
      return Xs.foreach(e2, function(e3) {
        switch (e3.localName) {
          case "tbl":
            t2.children.push(_this34.parseTable(e3));
            break;
          case "p":
            t2.children.push(_this34.parseParagraph(e3));
            break;
          case "tcPr":
            _this34.parseTableCellProperties(e3, t2);
        }
      }), t2;
    }
  }, {
    key: "parseTableCellProperties",
    value: function parseTableCellProperties(e2, t2) {
      t2.cssStyle = this.parseDefaultProperties(e2, {}, null, function(e3) {
        var _xi$attr2;
        switch (e3.localName) {
          case "gridSpan":
            t2.span = xi.intAttr(e3, "val", null);
            break;
          case "vMerge":
            t2.verticalMerge = (_xi$attr2 = xi.attr(e3, "val")) !== null && _xi$attr2 !== void 0 ? _xi$attr2 : "continue";
            break;
          case "cnfStyle":
            t2.className = Ks.classNameOfCnfStyle(e3);
            break;
          default:
            return false;
        }
        return true;
      });
    }
  }, {
    key: "parseDefaultProperties",
    value: function parseDefaultProperties(e2) {
      var _this35 = this;
      var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      var n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return t2 = t2 || {}, Xs.foreach(e2, function(a2) {
        if (!(n2 !== null && n2 !== void 0 && n2(a2)))
          switch (a2.localName) {
            case "jc":
              t2["text-align"] = Ks.valueOfJc(a2);
              break;
            case "textAlignment":
              t2["vertical-align"] = Ks.valueOfTextAlignment(a2);
              break;
            case "color":
              t2.color = Xs.colorAttr(a2, "val", null, Us);
              break;
            case "sz":
              t2["font-size"] = t2["min-height"] = xi.lengthAttr(a2, "val", bi);
              break;
            case "shd":
              t2["background-color"] = Xs.colorAttr(a2, "fill", null, js);
              break;
            case "highlight":
              t2["background-color"] = Xs.colorAttr(a2, "val", null, Hs);
              break;
            case "vertAlign":
              break;
            case "position":
              t2.verticalAlign = xi.lengthAttr(a2, "val", bi);
              break;
            case "tcW":
              if (_this35.options.ignoreWidth)
                break;
            case "tblW":
              t2.width = Ks.valueOfSize(a2, "w");
              break;
            case "trHeight":
              _this35.parseTrHeight(a2, t2);
              break;
            case "strike":
              t2["text-decoration"] = xi.boolAttr(a2, "val", true) ? "line-through" : "none";
              break;
            case "b":
              t2["font-weight"] = xi.boolAttr(a2, "val", true) ? "bold" : "normal";
              break;
            case "i":
              t2["font-style"] = xi.boolAttr(a2, "val", true) ? "italic" : "normal";
              break;
            case "caps":
              t2["text-transform"] = xi.boolAttr(a2, "val", true) ? "uppercase" : "none";
              break;
            case "smallCaps":
              t2["font-variant"] = xi.boolAttr(a2, "val", true) ? "small-caps" : "none";
              break;
            case "u":
              _this35.parseUnderline(a2, t2);
              break;
            case "ind":
            case "tblInd":
              _this35.parseIndentation(a2, t2);
              break;
            case "rFonts":
              _this35.parseFont(a2, t2);
              break;
            case "tblBorders":
              _this35.parseBorderProperties(a2, r2 || t2);
              break;
            case "tblCellSpacing":
              t2["border-spacing"] = Ks.valueOfMargin(a2), t2["border-collapse"] = "separate";
              break;
            case "pBdr":
              _this35.parseBorderProperties(a2, t2);
              break;
            case "bdr":
              t2.border = Ks.valueOfBorder(a2);
              break;
            case "tcBorders":
              _this35.parseBorderProperties(a2, t2);
              break;
            case "vanish":
              xi.boolAttr(a2, "val", true) && (t2.display = "none");
              break;
            case "kern":
            case "noWrap":
              break;
            case "tblCellMar":
            case "tcMar":
              _this35.parseMarginProperties(a2, r2 || t2);
              break;
            case "tblLayout":
              t2["table-layout"] = Ks.valueOfTblLayout(a2);
              break;
            case "vAlign":
              t2["vertical-align"] = Ks.valueOfTextAlignment(a2);
              break;
            case "spacing":
              "pPr" == e2.localName && _this35.parseSpacing(a2, t2);
              break;
            case "wordWrap":
              xi.boolAttr(a2, "val") && (t2["overflow-wrap"] = "break-word");
              break;
            case "suppressAutoHyphens":
              t2.hyphens = xi.boolAttr(a2, "val", true) ? "none" : "auto";
              break;
            case "lang":
              t2.$lang = xi.attr(a2, "val");
              break;
            case "bCs":
            case "iCs":
            case "szCs":
            case "tabs":
            case "outlineLvl":
            case "contextualSpacing":
            case "tblStyleColBandSize":
            case "tblStyleRowBandSize":
            case "webHidden":
            case "pageBreakBefore":
            case "suppressLineNumbers":
            case "keepLines":
            case "keepNext":
            case "widowControl":
            case "bidi":
            case "rtl":
            case "noProof":
              break;
            default:
              _this35.options.debug && console.warn("DOCX: Unknown document element: ".concat(e2.localName, ".").concat(a2.localName));
          }
      }), t2;
    }
  }, {
    key: "parseUnderline",
    value: function parseUnderline(e2, t2) {
      var r2 = xi.attr(e2, "val");
      if (null != r2) {
        switch (r2) {
          case "dash":
          case "dashDotDotHeavy":
          case "dashDotHeavy":
          case "dashedHeavy":
          case "dashLong":
          case "dashLongHeavy":
          case "dotDash":
          case "dotDotDash":
            t2["text-decoration"] = "underline dashed";
            break;
          case "dotted":
          case "dottedHeavy":
            t2["text-decoration"] = "underline dotted";
            break;
          case "double":
            t2["text-decoration"] = "underline double";
            break;
          case "single":
          case "thick":
          case "words":
            t2["text-decoration"] = "underline";
            break;
          case "wave":
          case "wavyDouble":
          case "wavyHeavy":
            t2["text-decoration"] = "underline wavy";
            break;
          case "none":
            t2["text-decoration"] = "none";
        }
        var n2 = Xs.colorAttr(e2, "color");
        n2 && (t2["text-decoration-color"] = n2);
      }
    }
  }, {
    key: "parseFont",
    value: function parseFont(e2, t2) {
      var r2 = [xi.attr(e2, "ascii"), Ks.themeValue(e2, "asciiTheme")].filter(function(e3) {
        return e3;
      }).join(", ");
      r2.length > 0 && (t2["font-family"] = r2);
    }
  }, {
    key: "parseIndentation",
    value: function parseIndentation(e2, t2) {
      var r2 = xi.lengthAttr(e2, "firstLine"), n2 = xi.lengthAttr(e2, "hanging"), a2 = xi.lengthAttr(e2, "left"), i2 = xi.lengthAttr(e2, "start"), s2 = xi.lengthAttr(e2, "right"), o2 = xi.lengthAttr(e2, "end");
      r2 && (t2["text-indent"] = r2), n2 && (t2["text-indent"] = "-".concat(n2)), (a2 || i2) && (t2["margin-left"] = a2 || i2), (s2 || o2) && (t2["margin-right"] = s2 || o2);
    }
  }, {
    key: "parseSpacing",
    value: function parseSpacing(e2, t2) {
      var r2 = xi.lengthAttr(e2, "before"), n2 = xi.lengthAttr(e2, "after"), a2 = xi.intAttr(e2, "line", null), i2 = xi.attr(e2, "lineRule");
      if (r2 && (t2["margin-top"] = r2), n2 && (t2["margin-bottom"] = n2), null !== a2)
        switch (i2) {
          case "auto":
            t2["line-height"] = "".concat((a2 / 240).toFixed(2));
            break;
          case "atLeast":
            t2["line-height"] = "calc(100% + ".concat(a2 / 20, "pt)");
            break;
          default:
            t2["line-height"] = t2["min-height"] = a2 / 20 + "pt";
        }
    }
  }, {
    key: "parseMarginProperties",
    value: function parseMarginProperties(e2, t2) {
      Xs.foreach(e2, function(e3) {
        switch (e3.localName) {
          case "left":
            t2["padding-left"] = Ks.valueOfMargin(e3);
            break;
          case "right":
            t2["padding-right"] = Ks.valueOfMargin(e3);
            break;
          case "top":
            t2["padding-top"] = Ks.valueOfMargin(e3);
            break;
          case "bottom":
            t2["padding-bottom"] = Ks.valueOfMargin(e3);
        }
      });
    }
  }, {
    key: "parseTrHeight",
    value: function parseTrHeight(e2, t2) {
      xi.attr(e2, "hRule"), t2.height = xi.lengthAttr(e2, "val");
    }
  }, {
    key: "parseBorderProperties",
    value: function parseBorderProperties(e2, t2) {
      Xs.foreach(e2, function(e3) {
        switch (e3.localName) {
          case "start":
          case "left":
            t2["border-left"] = Ks.valueOfBorder(e3);
            break;
          case "end":
          case "right":
            t2["border-right"] = Ks.valueOfBorder(e3);
            break;
          case "top":
            t2["border-top"] = Ks.valueOfBorder(e3);
            break;
          case "bottom":
            t2["border-bottom"] = Ks.valueOfBorder(e3);
        }
      });
    }
  }]);
}();
var qs = ["black", "blue", "cyan", "darkBlue", "darkCyan", "darkGray", "darkGreen", "darkMagenta", "darkRed", "darkYellow", "green", "lightGray", "magenta", "none", "red", "white", "yellow"];
var Xs = function() {
  function Xs2() {
    _classCallCheck(this, Xs2);
  }
  return _createClass(Xs2, null, [{
    key: "foreach",
    value: function foreach(e2, t2) {
      for (var r2 = 0; r2 < e2.childNodes.length; r2++) {
        var n2 = e2.childNodes[r2];
        n2.nodeType == Node.ELEMENT_NODE && t2(n2);
      }
    }
  }, {
    key: "colorAttr",
    value: function colorAttr(e2, t2) {
      var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      var n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "black";
      var a2 = xi.attr(e2, t2);
      if (a2)
        return "auto" == a2 ? n2 : qs.includes(a2) ? a2 : "#".concat(a2);
      var i2 = xi.attr(e2, "themeColor");
      return i2 ? "var(--docx-".concat(i2, "-color)") : r2;
    }
  }, {
    key: "sizeValue",
    value: function sizeValue(e2) {
      var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : mi;
      return _i(e2.textContent, t2);
    }
  }]);
}();
var Ks = function() {
  function Ks2() {
    _classCallCheck(this, Ks2);
  }
  return _createClass(Ks2, null, [{
    key: "themeValue",
    value: function themeValue(e2, t2) {
      var r2 = xi.attr(e2, t2);
      return r2 ? "var(--docx-".concat(r2, "-font)") : null;
    }
  }, {
    key: "valueOfSize",
    value: function valueOfSize(e2, t2) {
      var r2 = mi;
      switch (xi.attr(e2, "type")) {
        case "dxa":
          break;
        case "pct":
          r2 = wi;
          break;
        case "auto":
          return "auto";
      }
      return xi.lengthAttr(e2, t2, r2);
    }
  }, {
    key: "valueOfMargin",
    value: function valueOfMargin(e2) {
      return xi.lengthAttr(e2, "w");
    }
  }, {
    key: "valueOfBorder",
    value: function valueOfBorder(e2) {
      if ("nil" == xi.attr(e2, "val"))
        return "none";
      var t2 = Xs.colorAttr(e2, "color");
      return "".concat(xi.lengthAttr(e2, "sz", yi), " solid ").concat("auto" == t2 ? $s : t2);
    }
  }, {
    key: "valueOfTblLayout",
    value: function valueOfTblLayout(e2) {
      return "fixed" == xi.attr(e2, "val") ? "fixed" : "auto";
    }
  }, {
    key: "classNameOfCnfStyle",
    value: function classNameOfCnfStyle(e2) {
      var t2 = xi.attr(e2, "val");
      return ["first-row", "last-row", "first-col", "last-col", "odd-col", "even-col", "odd-row", "even-row", "ne-cell", "nw-cell", "se-cell", "sw-cell"].filter(function(e3, r2) {
        return "1" == t2[r2];
      }).join(" ");
    }
  }, {
    key: "valueOfJc",
    value: function valueOfJc(e2) {
      var t2 = xi.attr(e2, "val");
      switch (t2) {
        case "start":
        case "left":
          return "left";
        case "center":
          return "center";
        case "end":
        case "right":
          return "right";
        case "both":
          return "justify";
      }
      return t2;
    }
  }, {
    key: "valueOfVertAlign",
    value: function valueOfVertAlign(e2) {
      var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var r2 = xi.attr(e2, "val");
      switch (r2) {
        case "subscript":
          return "sub";
        case "superscript":
          return t2 ? "sup" : "super";
      }
      return t2 ? null : r2;
    }
  }, {
    key: "valueOfTextAlignment",
    value: function valueOfTextAlignment(e2) {
      var t2 = xi.attr(e2, "val");
      switch (t2) {
        case "auto":
        case "baseline":
          return "baseline";
        case "top":
          return "top";
        case "center":
          return "middle";
        case "bottom":
          return "bottom";
      }
      return t2;
    }
  }, {
    key: "addSize",
    value: function addSize(e2, t2) {
      return null == e2 ? t2 : null == t2 ? e2 : "calc(".concat(e2, " + ").concat(t2, ")");
    }
  }, {
    key: "classNameOftblLook",
    value: function classNameOftblLook(e2) {
      var t2 = xi.hexAttr(e2, "val", 0);
      var r2 = "";
      return (xi.boolAttr(e2, "firstRow") || 32 & t2) && (r2 += " first-row"), (xi.boolAttr(e2, "lastRow") || 64 & t2) && (r2 += " last-row"), (xi.boolAttr(e2, "firstColumn") || 128 & t2) && (r2 += " first-col"), (xi.boolAttr(e2, "lastColumn") || 256 & t2) && (r2 += " last-col"), (xi.boolAttr(e2, "noHBand") || 512 & t2) && (r2 += " no-hband"), (xi.boolAttr(e2, "noVBand") || 1024 & t2) && (r2 += " no-vband"), r2.trim();
    }
  }]);
}();
var Ys = {
  pos: 0,
  leader: "none",
  style: "left"
};
function Gs(e2, t2, r2) {
  var n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.75;
  var a2 = e2.closest("p"), i2 = e2.getBoundingClientRect(), s2 = a2.getBoundingClientRect(), o2 = getComputedStyle(a2), l2 = (t2 === null || t2 === void 0 ? void 0 : t2.length) > 0 ? t2.map(function(e3) {
    return {
      pos: Js(e3.position),
      leader: e3.leader,
      style: e3.style
    };
  }).sort(function(e3, t3) {
    return e3.pos - t3.pos;
  }) : [Ys], c2 = l2[l2.length - 1], h2 = s2.width * n2, u2 = Js(r2);
  var d2 = c2.pos + u2;
  if (d2 < h2)
    for (; d2 < h2 && l2.length < 50; d2 += u2)
      l2.push(_objectSpread(_objectSpread({}, Ys), {}, {
        pos: d2
      }));
  var f2 = parseFloat(o2.marginLeft), p2 = s2.left + f2, m2 = (i2.left - p2) * n2, g2 = l2.find(function(e3) {
    return "clear" != e3.style && e3.pos > m2;
  });
  if (null == g2)
    return;
  var b2 = 1;
  if ("right" == g2.style || "center" == g2.style) {
    var _t9 = Array.from(a2.querySelectorAll(".".concat(e2.className))), _r12 = _t9.indexOf(e2) + 1, _i4 = document.createRange();
    _i4.setStart(e2, 1), _r12 < _t9.length ? _i4.setEndBefore(_t9[_r12]) : _i4.setEndAfter(a2);
    var _o = "center" == g2.style ? 0.5 : 1, _l = _i4.getBoundingClientRect(), _c = _l.left + _o * _l.width - (s2.left - f2);
    b2 = g2.pos - _c * n2;
  } else
    b2 = g2.pos - m2;
  switch (e2.innerHTML = "&nbsp;", e2.style.textDecoration = "inherit", e2.style.wordSpacing = "".concat(b2.toFixed(0), "pt"), g2.leader) {
    case "dot":
    case "middleDot":
      e2.style.textDecoration = "underline", e2.style.textDecorationStyle = "dotted";
      break;
    case "hyphen":
    case "heavy":
    case "underscore":
      e2.style.textDecoration = "underline";
  }
}
function Js(e2) {
  return parseFloat(e2);
}
var Qs = "http://www.w3.org/2000/svg";
var eo = "http://www.w3.org/1998/Math/MathML";
var to = function() {
  function to2(e2) {
    _classCallCheck(this, to2);
    this.htmlDocument = e2, this.className = "docx", this.styleMap = {}, this.currentPart = null, this.tableVerticalMerges = [], this.currentVerticalMerge = null, this.tableCellPositions = [], this.currentCellPosition = null, this.footnoteMap = {}, this.endnoteMap = {}, this.currentEndnoteIds = [], this.usedHederFooterParts = [], this.currentTabs = [], this.tabsTimeout = 0, this.commentMap = {}, this.tasks = [], this.postRenderTasks = [], this.createElement = ro;
  }
  return _createClass(to2, [{
    key: "render",
    value: function render2(e2, t2) {
      var _e$settingsPart$setti;
      var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      var n2 = arguments.length > 3 ? arguments[3] : void 0;
      this.document = e2, this.options = n2, this.className = n2.className, this.rootSelector = n2.inWrapper ? ".".concat(this.className, "-wrapper") : ":root", this.styleMap = null, this.tasks = [], this.options.renderComments && globalThis.Highlight && (this.commentHighlight = new Highlight()), io(r2 = r2 || t2), io(t2), lo(r2, "docxjs library predefined styles"), r2.appendChild(this.renderDefaultStyle()), e2.themePart && (lo(r2, "docxjs document theme values"), this.renderTheme(e2.themePart, r2)), null != e2.stylesPart && (this.styleMap = this.processStyles(e2.stylesPart.styles), lo(r2, "docxjs document styles"), r2.appendChild(this.renderStyles(e2.stylesPart.styles))), e2.numberingPart && (this.prodessNumberings(e2.numberingPart.domNumberings), lo(r2, "docxjs document numbering styles"), r2.appendChild(this.renderNumbering(e2.numberingPart.domNumberings, r2))), e2.footnotesPart && (this.footnoteMap = Bi(e2.footnotesPart.notes, function(e3) {
        return e3.id;
      })), e2.endnotesPart && (this.endnoteMap = Bi(e2.endnotesPart.notes, function(e3) {
        return e3.id;
      })), e2.settingsPart && (this.defaultTabSize = (_e$settingsPart$setti = e2.settingsPart.settings) === null || _e$settingsPart$setti === void 0 ? void 0 : _e$settingsPart$setti.defaultTabStop), !n2.ignoreFonts && e2.fontTablePart && this.renderFontTable(e2.fontTablePart, r2);
      var a2 = this.renderSections(e2.documentPart.body);
      this.options.inWrapper ? t2.appendChild(this.renderWrapper(a2)) : so(t2, a2), this.commentHighlight && n2.renderComments && CSS.highlights.set("".concat(this.className, "-comments"), this.commentHighlight), this.refreshTabStops(), this.postRenderTasks.forEach(function(e3) {
        return e3();
      });
    }
  }, {
    key: "renderTheme",
    value: function renderTheme(e2, t2) {
      var _e$theme, _e$theme2;
      var r2 = {}, n2 = (_e$theme = e2.theme) === null || _e$theme === void 0 ? void 0 : _e$theme.fontScheme;
      n2 && (n2.majorFont && (r2["--docx-majorHAnsi-font"] = n2.majorFont.latinTypeface), n2.minorFont && (r2["--docx-minorHAnsi-font"] = n2.minorFont.latinTypeface));
      var a2 = (_e$theme2 = e2.theme) === null || _e$theme2 === void 0 ? void 0 : _e$theme2.colorScheme;
      if (a2)
        for (var _i5 = 0, _Object$entries = Object.entries(a2.colors); _i5 < _Object$entries.length; _i5++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i5], 2), _e12 = _Object$entries$_i[0], _t10 = _Object$entries$_i[1];
          r2["--docx-".concat(_e12, "-color")] = "#".concat(_t10);
        }
      var i2 = this.styleToString(".".concat(this.className), r2);
      t2.appendChild(oo(i2));
    }
  }, {
    key: "renderFontTable",
    value: function renderFontTable(e2, t2) {
      var _this36 = this;
      var _iterator34 = _createForOfIteratorHelper(e2.fonts), _step34;
      try {
        var _loop = function _loop2() {
          var r2 = _step34.value;
          var _iterator35 = _createForOfIteratorHelper(r2.embedFontRefs), _step35;
          try {
            var _loop22 = function _loop23() {
              var e3 = _step35.value;
              _this36.tasks.push(_this36.document.loadFont(e3.id, e3.key).then(function(n2) {
                var a2 = {
                  "font-family": r2.name,
                  src: "url(".concat(n2, ")")
                };
                "bold" != e3.type && "boldItalic" != e3.type || (a2["font-weight"] = "bold"), "italic" != e3.type && "boldItalic" != e3.type || (a2["font-style"] = "italic"), lo(t2, "docxjs ".concat(r2.name, " font"));
                var i2 = _this36.styleToString("@font-face", a2);
                t2.appendChild(oo(i2)), _this36.refreshTabStops();
              }));
            };
            for (_iterator35.s(); !(_step35 = _iterator35.n()).done; ) {
              _loop22();
            }
          } catch (err) {
            _iterator35.e(err);
          } finally {
            _iterator35.f();
          }
        };
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done; ) {
          _loop();
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }
    }
  }, {
    key: "processStyleName",
    value: function processStyleName(e2) {
      return e2 ? "".concat(this.className, "_").concat(function(e3) {
        return e3 === null || e3 === void 0 ? void 0 : e3.replace(/[ .]+/g, "-").replace(/[&]+/g, "and").toLowerCase();
      }(e2)) : this.className;
    }
  }, {
    key: "processStyles",
    value: function processStyles(e2) {
      var _this37 = this;
      var t2 = Bi(e2.filter(function(e3) {
        return null != e3.id;
      }), function(e3) {
        return e3.id;
      });
      var _iterator36 = _createForOfIteratorHelper(e2.filter(function(e3) {
        return e3.basedOn;
      })), _step36;
      try {
        for (_iterator36.s(); !(_step36 = _iterator36.n()).done; ) {
          var n2 = _step36.value;
          var r2 = t2[n2.basedOn];
          if (r2) {
            n2.paragraphProps = Di(n2.paragraphProps, r2.paragraphProps), n2.runProps = Di(n2.runProps, r2.runProps);
            var _iterator38 = _createForOfIteratorHelper(r2.styles), _step38;
            try {
              var _loop3 = function _loop32() {
                var e3 = _step38.value;
                var t3 = n2.styles.find(function(t4) {
                  return t4.target == e3.target;
                });
                t3 ? _this37.copyStyleProperties(e3.values, t3.values) : n2.styles.push(_objectSpread(_objectSpread({}, e3), {}, {
                  values: _objectSpread({}, e3.values)
                }));
              };
              for (_iterator38.s(); !(_step38 = _iterator38.n()).done; ) {
                _loop3();
              }
            } catch (err) {
              _iterator38.e(err);
            } finally {
              _iterator38.f();
            }
          } else
            this.options.debug && console.warn("Can't find base style ".concat(n2.basedOn));
        }
      } catch (err) {
        _iterator36.e(err);
      } finally {
        _iterator36.f();
      }
      var _iterator37 = _createForOfIteratorHelper(e2), _step37;
      try {
        for (_iterator37.s(); !(_step37 = _iterator37.n()).done; ) {
          var _t11 = _step37.value;
          _t11.cssName = this.processStyleName(_t11.id);
        }
      } catch (err) {
        _iterator37.e(err);
      } finally {
        _iterator37.f();
      }
      return t2;
    }
  }, {
    key: "prodessNumberings",
    value: function prodessNumberings(e2) {
      var _iterator39 = _createForOfIteratorHelper(e2.filter(function(e3) {
        return e3.pStyleName;
      })), _step39;
      try {
        for (_iterator39.s(); !(_step39 = _iterator39.n()).done; ) {
          var _e13$paragraphProps;
          var _t12 = _step39.value;
          var _e13 = this.findStyle(_t12.pStyleName);
          (_e13 === null || _e13 === void 0 || (_e13$paragraphProps = _e13.paragraphProps) === null || _e13$paragraphProps === void 0 ? void 0 : _e13$paragraphProps.numbering) && (_e13.paragraphProps.numbering.level = _t12.level);
        }
      } catch (err) {
        _iterator39.e(err);
      } finally {
        _iterator39.f();
      }
    }
  }, {
    key: "processElement",
    value: function processElement(e2) {
      if (e2.children) {
        var _iterator40 = _createForOfIteratorHelper(e2.children), _step40;
        try {
          for (_iterator40.s(); !(_step40 = _iterator40.n()).done; ) {
            var t2 = _step40.value;
            t2.parent = e2, t2.type == Ui.Table ? this.processTable(t2) : this.processElement(t2);
          }
        } catch (err) {
          _iterator40.e(err);
        } finally {
          _iterator40.f();
        }
      }
    }
  }, {
    key: "processTable",
    value: function processTable(e2) {
      var _iterator41 = _createForOfIteratorHelper(e2.children), _step41;
      try {
        for (_iterator41.s(); !(_step41 = _iterator41.n()).done; ) {
          var t2 = _step41.value;
          var _iterator42 = _createForOfIteratorHelper(t2.children), _step42;
          try {
            for (_iterator42.s(); !(_step42 = _iterator42.n()).done; ) {
              var r2 = _step42.value;
              r2.cssStyle = this.copyStyleProperties(e2.cellStyle, r2.cssStyle, ["border-left", "border-right", "border-top", "border-bottom", "padding-left", "padding-right", "padding-top", "padding-bottom"]), this.processElement(r2);
            }
          } catch (err) {
            _iterator42.e(err);
          } finally {
            _iterator42.f();
          }
        }
      } catch (err) {
        _iterator41.e(err);
      } finally {
        _iterator41.f();
      }
    }
  }, {
    key: "copyStyleProperties",
    value: function copyStyleProperties(e2, t2) {
      var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!e2)
        return t2;
      var _iterator43 = _createForOfIteratorHelper((null == t2 && (t2 = {}), null == r2 && (r2 = Object.getOwnPropertyNames(e2)), r2)), _step43;
      try {
        for (_iterator43.s(); !(_step43 = _iterator43.n()).done; ) {
          var n2 = _step43.value;
          e2.hasOwnProperty(n2) && !t2.hasOwnProperty(n2) && (t2[n2] = e2[n2]);
        }
      } catch (err) {
        _iterator43.e(err);
      } finally {
        _iterator43.f();
      }
      return t2;
    }
  }, {
    key: "createPageElement",
    value: function createPageElement(e2, t2) {
      var r2 = this.createElement("section", {
        className: e2
      });
      return t2 && (t2.pageMargins && (r2.style.paddingLeft = t2.pageMargins.left, r2.style.paddingRight = t2.pageMargins.right, r2.style.paddingTop = t2.pageMargins.top, r2.style.paddingBottom = t2.pageMargins.bottom), t2.pageSize && (this.options.ignoreWidth || (r2.style.width = t2.pageSize.width), this.options.ignoreHeight || (r2.style.minHeight = t2.pageSize.height))), r2;
    }
  }, {
    key: "createSectionContent",
    value: function createSectionContent(e2) {
      var t2 = this.createElement("article");
      return e2.columns && e2.columns.numberOfColumns && (t2.style.columnCount = "".concat(e2.columns.numberOfColumns), t2.style.columnGap = e2.columns.space, e2.columns.separator && (t2.style.columnRule = "1px solid black")), t2;
    }
  }, {
    key: "renderSections",
    value: function renderSections(e2) {
      var t2 = [];
      this.processElement(e2);
      var r2 = this.splitBySection(e2.children, e2.props), n2 = this.groupByPageBreaks(r2);
      var a2 = null;
      for (var _r13 = 0, _s2 = n2.length; _r13 < _s2; _r13++) {
        this.currentFootnoteIds = [];
        var _o2 = n2[_r13][0].sectProps;
        var _l2 = this.createPageElement(this.className, _o2);
        this.renderStyleValues(e2.cssStyle, _l2), this.options.renderHeaders && this.renderHeaderFooter(_o2.headerRefs, _o2, t2.length, a2 != _o2, _l2);
        var _iterator44 = _createForOfIteratorHelper(n2[_r13]), _step44;
        try {
          for (_iterator44.s(); !(_step44 = _iterator44.n()).done; ) {
            var _e14 = _step44.value;
            var i2 = this.createSectionContent(_e14.sectProps);
            this.renderElements(_e14.elements, i2), _l2.appendChild(i2), _o2 = _e14.sectProps;
          }
        } catch (err) {
          _iterator44.e(err);
        } finally {
          _iterator44.f();
        }
        this.options.renderFootnotes && this.renderNotes(this.currentFootnoteIds, this.footnoteMap, _l2), this.options.renderEndnotes && _r13 == _s2 - 1 && this.renderNotes(this.currentEndnoteIds, this.endnoteMap, _l2), this.options.renderFooters && this.renderHeaderFooter(_o2.footerRefs, _o2, t2.length, a2 != _o2, _l2), t2.push(_l2), a2 = _o2;
      }
      return t2;
    }
  }, {
    key: "renderHeaderFooter",
    value: function renderHeaderFooter(e2, t2, r2, n2, a2) {
      if (e2) {
        var _ref, _ref2;
        var i2 = (_ref = (_ref2 = t2.titlePage && n2 ? e2.find(function(e3) {
          return "first" == e3.type;
        }) : null) !== null && _ref2 !== void 0 ? _ref2 : r2 % 2 == 1 ? e2.find(function(e3) {
          return "even" == e3.type;
        }) : null) !== null && _ref !== void 0 ? _ref : e2.find(function(e3) {
          return "default" == e3.type;
        }), s2 = i2 && this.document.findPartByRelId(i2.id, this.document.documentPart);
        if (s2) {
          this.currentPart = s2, this.usedHederFooterParts.includes(s2.path) || (this.processElement(s2.rootElement), this.usedHederFooterParts.push(s2.path));
          var _this$renderElements = this.renderElements([s2.rootElement], a2), _this$renderElements2 = _slicedToArray(_this$renderElements, 1), _e15 = _this$renderElements2[0];
          t2 !== null && t2 !== void 0 && t2.pageMargins && (s2.rootElement.type === Ui.Header ? (_e15.style.marginTop = "calc(".concat(t2.pageMargins.header, " - ").concat(t2.pageMargins.top, ")"), _e15.style.minHeight = "calc(".concat(t2.pageMargins.top, " - ").concat(t2.pageMargins.header, ")")) : s2.rootElement.type === Ui.Footer && (_e15.style.marginBottom = "calc(".concat(t2.pageMargins.footer, " - ").concat(t2.pageMargins.bottom, ")"), _e15.style.minHeight = "calc(".concat(t2.pageMargins.bottom, " - ").concat(t2.pageMargins.footer, ")"))), this.currentPart = null;
        }
      }
    }
  }, {
    key: "isPageBreakElement",
    value: function isPageBreakElement(e2) {
      return e2.type == Ui.Break && ("lastRenderedPageBreak" == e2.break ? !this.options.ignoreLastRenderedPageBreak : "page" == e2.break);
    }
  }, {
    key: "isPageBreakSection",
    value: function isPageBreakSection(e2, t2) {
      var _e$pageSize, _t$pageSize, _e$pageSize2, _t$pageSize2, _e$pageSize3, _t$pageSize3;
      return !!e2 && !!t2 && (((_e$pageSize = e2.pageSize) === null || _e$pageSize === void 0 ? void 0 : _e$pageSize.orientation) != ((_t$pageSize = t2.pageSize) === null || _t$pageSize === void 0 ? void 0 : _t$pageSize.orientation) || ((_e$pageSize2 = e2.pageSize) === null || _e$pageSize2 === void 0 ? void 0 : _e$pageSize2.width) != ((_t$pageSize2 = t2.pageSize) === null || _t$pageSize2 === void 0 ? void 0 : _t$pageSize2.width) || ((_e$pageSize3 = e2.pageSize) === null || _e$pageSize3 === void 0 ? void 0 : _e$pageSize3.height) != ((_t$pageSize3 = t2.pageSize) === null || _t$pageSize3 === void 0 ? void 0 : _t$pageSize3.height));
    }
  }, {
    key: "splitBySection",
    value: function splitBySection(e2, t2) {
      var _this38 = this;
      var r2 = {
        sectProps: null,
        elements: [],
        pageBreak: false
      }, n2 = [r2];
      var _iterator45 = _createForOfIteratorHelper(e2), _step45;
      try {
        for (_iterator45.s(); !(_step45 = _iterator45.n()).done; ) {
          var _t13 = _step45.value;
          if (_t13.type == Ui.Paragraph) {
            var _e17$paragraphProps;
            var _e17 = this.findStyle(_t13.styleName);
            (_e17 === null || _e17 === void 0 || (_e17$paragraphProps = _e17.paragraphProps) === null || _e17$paragraphProps === void 0 ? void 0 : _e17$paragraphProps.pageBreakBefore) && (r2.sectProps = a2, r2.pageBreak = true, r2 = {
              sectProps: null,
              elements: [],
              pageBreak: false
            }, n2.push(r2));
          }
          if (r2.elements.push(_t13), _t13.type == Ui.Paragraph) {
            var _e18 = _t13;
            var a2 = _e18.sectionProps, i2 = -1, s2 = -1;
            if (this.options.breakPages && _e18.children && (i2 = _e18.children.findIndex(function(e3) {
              var _e$children$findIndex, _e$children;
              return -1 != (s2 = (_e$children$findIndex = (_e$children = e3.children) === null || _e$children === void 0 ? void 0 : _e$children.findIndex(_this38.isPageBreakElement.bind(_this38))) !== null && _e$children$findIndex !== void 0 ? _e$children$findIndex : -1);
            })), (a2 || -1 != i2) && (r2.sectProps = a2, r2.pageBreak = -1 != i2, r2 = {
              sectProps: null,
              elements: [],
              pageBreak: false
            }, n2.push(r2)), -1 != i2) {
              var _n10 = _e18.children[i2], _a4 = s2 < _n10.children.length - 1;
              if (i2 < _e18.children.length - 1 || _a4) {
                var o2 = _t13.children, l2 = _objectSpread(_objectSpread({}, _t13), {}, {
                  children: o2.slice(i2)
                });
                if (_t13.children = o2.slice(0, i2), r2.elements.push(l2), _a4) {
                  var _e19 = _n10.children, _r14 = _objectSpread(_objectSpread({}, _n10), {}, {
                    children: _e19.slice(0, s2)
                  });
                  _t13.children.push(_r14), _n10.children = _e19.slice(s2);
                }
              }
            }
          }
        }
      } catch (err) {
        _iterator45.e(err);
      } finally {
        _iterator45.f();
      }
      var c2 = null;
      for (var _e16 = n2.length - 1; _e16 >= 0; _e16--) {
        var _c2;
        null == n2[_e16].sectProps ? n2[_e16].sectProps = (_c2 = c2) !== null && _c2 !== void 0 ? _c2 : t2 : c2 = n2[_e16].sectProps;
      }
      return n2;
    }
  }, {
    key: "groupByPageBreaks",
    value: function groupByPageBreaks(e2) {
      var t2, r2 = [];
      var n2 = [r2];
      var _iterator46 = _createForOfIteratorHelper(e2), _step46;
      try {
        for (_iterator46.s(); !(_step46 = _iterator46.n()).done; ) {
          var a2 = _step46.value;
          r2.push(a2), (this.options.ignoreLastRenderedPageBreak || a2.pageBreak || this.isPageBreakSection(t2, a2.sectProps)) && n2.push(r2 = []), t2 = a2.sectProps;
        }
      } catch (err) {
        _iterator46.e(err);
      } finally {
        _iterator46.f();
      }
      return n2.filter(function(e3) {
        return e3.length > 0;
      });
    }
  }, {
    key: "renderWrapper",
    value: function renderWrapper(e2) {
      return this.createElement("div", {
        className: "".concat(this.className, "-wrapper")
      }, e2);
    }
  }, {
    key: "renderDefaultStyle",
    value: function renderDefaultStyle() {
      var e2 = this.className, t2 = "\n.".concat(e2, "-wrapper { background: gray; padding: 30px; padding-bottom: 0px; display: flex; flex-flow: column; align-items: center; } \n.").concat(e2, "-wrapper>section.").concat(e2, " { background: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); margin-bottom: 30px; }\n.").concat(e2, " { color: black; hyphens: auto; text-underline-position: from-font; }\nsection.").concat(e2, " { box-sizing: border-box; display: flex; flex-flow: column nowrap; position: relative; overflow: hidden; }\nsection.").concat(e2, ">article { margin-bottom: auto; z-index: 1; }\nsection.").concat(e2, ">footer { z-index: 1; }\n.").concat(e2, " table { border-collapse: collapse; }\n.").concat(e2, " table td, .").concat(e2, " table th { vertical-align: top; }\n.").concat(e2, " p { margin: 0pt; min-height: 1em; }\n.").concat(e2, " span { white-space: pre-wrap; overflow-wrap: break-word; }\n.").concat(e2, " a { color: inherit; text-decoration: inherit; }\n.").concat(e2, " svg { fill: transparent; }\n");
      return this.options.renderComments && (t2 += "\n.".concat(e2, "-comment-ref { cursor: default; }\n.").concat(e2, "-comment-popover { display: none; z-index: 1000; padding: 0.5rem; background: white; position: absolute; box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.25); width: 30ch; }\n.").concat(e2, "-comment-ref:hover~.").concat(e2, "-comment-popover { display: block; }\n.").concat(e2, "-comment-author,.").concat(e2, "-comment-date { font-size: 0.875rem; color: #888; }\n")), oo(t2);
    }
  }, {
    key: "renderNumbering",
    value: function renderNumbering(e2, t2) {
      var _this39 = this;
      var r2 = "", n2 = [];
      var _iterator47 = _createForOfIteratorHelper(e2), _step47;
      try {
        var _loop4 = function _loop42() {
          a2 = _step47.value;
          i2 = "p.".concat(_this39.numberingClass(a2.id, a2.level)), s2 = "none";
          if (a2.bullet) {
            var _e20 = "--".concat(_this39.className, "-").concat(a2.bullet.src).toLowerCase();
            r2 += _this39.styleToString("".concat(i2, ":before"), {
              content: "' '",
              display: "inline-block",
              background: "var(".concat(_e20, ")")
            }, a2.bullet.style), _this39.tasks.push(_this39.document.loadNumberingImage(a2.bullet.src).then(function(r3) {
              var n3 = "".concat(_this39.rootSelector, " { ").concat(_e20, ": url(").concat(r3, ") }");
              t2.appendChild(oo(n3));
            }));
          } else if (a2.levelText) {
            var _e21 = _this39.numberingCounter(a2.id, a2.level);
            var _t14 = _e21 + " " + (a2.start - 1);
            a2.level > 0 && (r2 += _this39.styleToString("p.".concat(_this39.numberingClass(a2.id, a2.level - 1)), {
              "counter-reset": _t14
            })), n2.push(_t14), r2 += _this39.styleToString("".concat(i2, ":before"), _objectSpread({
              content: _this39.levelTextToContent(a2.levelText, a2.suff, a2.id, _this39.numFormatToCssValue(a2.format)),
              "counter-increment": _e21
            }, a2.rStyle));
          } else
            s2 = _this39.numFormatToCssValue(a2.format);
          r2 += _this39.styleToString(i2, _objectSpread({
            display: "list-item",
            "list-style-position": "inside",
            "list-style-type": s2
          }, a2.pStyle));
        }, a2, i2, s2;
        for (_iterator47.s(); !(_step47 = _iterator47.n()).done; ) {
          _loop4();
        }
      } catch (err) {
        _iterator47.e(err);
      } finally {
        _iterator47.f();
      }
      return n2.length > 0 && (r2 += this.styleToString(this.rootSelector, {
        "counter-reset": n2.join(" ")
      })), oo(r2);
    }
  }, {
    key: "renderStyles",
    value: function renderStyles(e2) {
      var t2 = "";
      var r2 = this.styleMap, n2 = Bi(e2.filter(function(e3) {
        return e3.isDefault;
      }), function(e3) {
        return e3.target;
      });
      var _iterator48 = _createForOfIteratorHelper(e2), _step48;
      try {
        for (_iterator48.s(); !(_step48 = _iterator48.n()).done; ) {
          var _o3 = _step48.value;
          var a2 = _o3.styles;
          if (_o3.linked) {
            var i2 = _o3.linked && r2[_o3.linked];
            i2 ? a2 = a2.concat(i2.styles) : this.options.debug && console.warn("Can't find linked style ".concat(_o3.linked));
          }
          var _iterator49 = _createForOfIteratorHelper(a2), _step49;
          try {
            for (_iterator49.s(); !(_step49 = _iterator49.n()).done; ) {
              var _o3$target;
              var _e22 = _step49.value;
              var s2 = "".concat((_o3$target = _o3.target) !== null && _o3$target !== void 0 ? _o3$target : "", ".").concat(_o3.cssName);
              _o3.target != _e22.target && (s2 += " ".concat(_e22.target)), n2[_o3.target] == _o3 && (s2 = ".".concat(this.className, " ").concat(_o3.target, ", ") + s2), t2 += this.styleToString(s2, _e22.values);
            }
          } catch (err) {
            _iterator49.e(err);
          } finally {
            _iterator49.f();
          }
        }
      } catch (err) {
        _iterator48.e(err);
      } finally {
        _iterator48.f();
      }
      return oo(t2);
    }
  }, {
    key: "renderNotes",
    value: function renderNotes(e2, t2, r2) {
      var n2 = e2.map(function(e3) {
        return t2[e3];
      }).filter(function(e3) {
        return e3;
      });
      if (n2.length > 0) {
        var a2 = this.createElement("ol", null, this.renderElements(n2));
        r2.appendChild(a2);
      }
    }
  }, {
    key: "renderElement",
    value: function renderElement(e2) {
      switch (e2.type) {
        case Ui.Paragraph:
          return this.renderParagraph(e2);
        case Ui.BookmarkStart:
          return this.renderBookmarkStart(e2);
        case Ui.BookmarkEnd:
          return null;
        case Ui.Run:
          return this.renderRun(e2);
        case Ui.Table:
          return this.renderTable(e2);
        case Ui.Row:
          return this.renderTableRow(e2);
        case Ui.Cell:
          return this.renderTableCell(e2);
        case Ui.Hyperlink:
          return this.renderHyperlink(e2);
        case Ui.SmartTag:
          return this.renderSmartTag(e2);
        case Ui.Drawing:
          return this.renderDrawing(e2);
        case Ui.Image:
          return this.renderImage(e2);
        case Ui.Text:
        case Ui.Text:
          return this.renderText(e2);
        case Ui.DeletedText:
          return this.renderDeletedText(e2);
        case Ui.Tab:
          return this.renderTab(e2);
        case Ui.Symbol:
          return this.renderSymbol(e2);
        case Ui.Break:
          return this.renderBreak(e2);
        case Ui.Footer:
          return this.renderContainer(e2, "footer");
        case Ui.Header:
          return this.renderContainer(e2, "header");
        case Ui.Footnote:
        case Ui.Endnote:
          return this.renderContainer(e2, "li");
        case Ui.FootnoteReference:
          return this.renderFootnoteReference(e2);
        case Ui.EndnoteReference:
          return this.renderEndnoteReference(e2);
        case Ui.NoBreakHyphen:
          return this.createElement("wbr");
        case Ui.VmlPicture:
          return this.renderVmlPicture(e2);
        case Ui.VmlElement:
          return this.renderVmlElement(e2);
        case Ui.MmlMath:
          return this.renderContainerNS(e2, eo, "math", {
            xmlns: eo
          });
        case Ui.MmlMathParagraph:
          return this.renderContainer(e2, "span");
        case Ui.MmlFraction:
          return this.renderContainerNS(e2, eo, "mfrac");
        case Ui.MmlBase:
          return this.renderContainerNS(e2, eo, e2.parent.type == Ui.MmlMatrixRow ? "mtd" : "mrow");
        case Ui.MmlNumerator:
        case Ui.MmlDenominator:
        case Ui.MmlFunction:
        case Ui.MmlLimit:
        case Ui.MmlBox:
          return this.renderContainerNS(e2, eo, "mrow");
        case Ui.MmlGroupChar:
          return this.renderMmlGroupChar(e2);
        case Ui.MmlLimitLower:
          return this.renderContainerNS(e2, eo, "munder");
        case Ui.MmlMatrix:
          return this.renderContainerNS(e2, eo, "mtable");
        case Ui.MmlMatrixRow:
          return this.renderContainerNS(e2, eo, "mtr");
        case Ui.MmlRadical:
          return this.renderMmlRadical(e2);
        case Ui.MmlSuperscript:
          return this.renderContainerNS(e2, eo, "msup");
        case Ui.MmlSubscript:
          return this.renderContainerNS(e2, eo, "msub");
        case Ui.MmlDegree:
        case Ui.MmlSuperArgument:
        case Ui.MmlSubArgument:
          return this.renderContainerNS(e2, eo, "mn");
        case Ui.MmlFunctionName:
          return this.renderContainerNS(e2, eo, "ms");
        case Ui.MmlDelimiter:
          return this.renderMmlDelimiter(e2);
        case Ui.MmlRun:
          return this.renderMmlRun(e2);
        case Ui.MmlNary:
          return this.renderMmlNary(e2);
        case Ui.MmlPreSubSuper:
          return this.renderMmlPreSubSuper(e2);
        case Ui.MmlBar:
          return this.renderMmlBar(e2);
        case Ui.MmlEquationArray:
          return this.renderMllList(e2);
        case Ui.Inserted:
          return this.renderInserted(e2);
        case Ui.Deleted:
          return this.renderDeleted(e2);
        case Ui.CommentRangeStart:
          return this.renderCommentRangeStart(e2);
        case Ui.CommentRangeEnd:
          return this.renderCommentRangeEnd(e2);
        case Ui.CommentReference:
          return this.renderCommentReference(e2);
      }
      return null;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(e2, t2) {
      return this.renderElements(e2.children, t2);
    }
  }, {
    key: "renderElements",
    value: function renderElements(e2, t2) {
      var _this40 = this;
      if (null == e2)
        return null;
      var r2 = e2.flatMap(function(e3) {
        return _this40.renderElement(e3);
      }).filter(function(e3) {
        return null != e3;
      });
      return t2 && so(t2, r2), r2;
    }
  }, {
    key: "renderContainer",
    value: function renderContainer(e2, t2, r2) {
      return this.createElement(t2, r2, this.renderChildren(e2));
    }
  }, {
    key: "renderContainerNS",
    value: function renderContainerNS(e2, t2, r2, n2) {
      return ao(t2, r2, n2, this.renderChildren(e2));
    }
  }, {
    key: "renderParagraph",
    value: function renderParagraph(e2) {
      var _e$tabs, _r$paragraphProps, _e$numbering, _r$paragraphProps2;
      var t2 = this.createElement("p");
      var r2 = this.findStyle(e2.styleName);
      (_e$tabs = e2.tabs) !== null && _e$tabs !== void 0 ? _e$tabs : e2.tabs = r2 === null || r2 === void 0 || (_r$paragraphProps = r2.paragraphProps) === null || _r$paragraphProps === void 0 ? void 0 : _r$paragraphProps.tabs, this.renderClass(e2, t2), this.renderChildren(e2, t2), this.renderStyleValues(e2.cssStyle, t2), this.renderCommonProperties(t2.style, e2);
      var n2 = (_e$numbering = e2.numbering) !== null && _e$numbering !== void 0 ? _e$numbering : r2 === null || r2 === void 0 || (_r$paragraphProps2 = r2.paragraphProps) === null || _r$paragraphProps2 === void 0 ? void 0 : _r$paragraphProps2.numbering;
      return n2 && t2.classList.add(this.numberingClass(n2.id, n2.level)), t2;
    }
  }, {
    key: "renderRunProperties",
    value: function renderRunProperties(e2, t2) {
      this.renderCommonProperties(e2, t2);
    }
  }, {
    key: "renderCommonProperties",
    value: function renderCommonProperties(e2, t2) {
      null != t2 && (t2.color && (e2.color = t2.color), t2.fontSize && (e2["font-size"] = t2.fontSize));
    }
  }, {
    key: "renderHyperlink",
    value: function renderHyperlink(e2) {
      var t2 = this.createElement("a");
      if (this.renderChildren(e2, t2), this.renderStyleValues(e2.cssStyle, t2), e2.href)
        t2.href = e2.href;
      else if (e2.id) {
        var _r15 = this.document.documentPart.rels.find(function(t3) {
          return t3.id == e2.id && "External" === t3.targetMode;
        });
        t2.href = _r15 === null || _r15 === void 0 ? void 0 : _r15.target;
      }
      return t2;
    }
  }, {
    key: "renderSmartTag",
    value: function renderSmartTag(e2) {
      var t2 = this.createElement("span");
      return this.renderChildren(e2, t2), t2;
    }
  }, {
    key: "renderCommentRangeStart",
    value: function renderCommentRangeStart(e2) {
      var _this$commentHighligh;
      if (!this.options.renderComments)
        return null;
      var t2 = new Range();
      (_this$commentHighligh = this.commentHighlight) === null || _this$commentHighligh === void 0 || _this$commentHighligh.add(t2);
      var r2 = this.htmlDocument.createComment("start of comment #".concat(e2.id));
      return this.later(function() {
        return t2.setStart(r2, 0);
      }), this.commentMap[e2.id] = t2, r2;
    }
  }, {
    key: "renderCommentRangeEnd",
    value: function renderCommentRangeEnd(e2) {
      if (!this.options.renderComments)
        return null;
      var t2 = this.commentMap[e2.id], r2 = this.htmlDocument.createComment("end of comment #".concat(e2.id));
      return this.later(function() {
        return t2 === null || t2 === void 0 ? void 0 : t2.setEnd(r2, 0);
      }), r2;
    }
  }, {
    key: "renderCommentReference",
    value: function renderCommentReference(e2) {
      var _this$document$commen;
      if (!this.options.renderComments)
        return null;
      var t2 = (_this$document$commen = this.document.commentsPart) === null || _this$document$commen === void 0 ? void 0 : _this$document$commen.commentMap[e2.id];
      if (!t2)
        return null;
      var r2 = new DocumentFragment(), n2 = ro("span", {
        className: "".concat(this.className, "-comment-ref")
      }, ["💬"]), a2 = ro("div", {
        className: "".concat(this.className, "-comment-popover")
      });
      return this.renderCommentContent(t2, a2), r2.appendChild(this.htmlDocument.createComment("comment #".concat(t2.id, " by ").concat(t2.author, " on ").concat(t2.date))), r2.appendChild(n2), r2.appendChild(a2), r2;
    }
  }, {
    key: "renderCommentContent",
    value: function renderCommentContent(e2, t2) {
      t2.appendChild(ro("div", {
        className: "".concat(this.className, "-comment-author")
      }, [e2.author])), t2.appendChild(ro("div", {
        className: "".concat(this.className, "-comment-date")
      }, [new Date(e2.date).toLocaleString()])), this.renderChildren(e2, t2);
    }
  }, {
    key: "renderDrawing",
    value: function renderDrawing(e2) {
      var t2 = this.createElement("div");
      return t2.style.display = "inline-block", t2.style.position = "relative", t2.style.textIndent = "0px", this.renderChildren(e2, t2), this.renderStyleValues(e2.cssStyle, t2), t2;
    }
  }, {
    key: "renderImage",
    value: function renderImage(e2) {
      var t2 = this.createElement("img");
      return this.renderStyleValues(e2.cssStyle, t2), this.document && this.tasks.push(this.document.loadDocumentImage(e2.src, this.currentPart).then(function(e3) {
        t2.src = e3;
      })), t2;
    }
  }, {
    key: "renderText",
    value: function renderText(e2) {
      return this.htmlDocument.createTextNode(e2.text);
    }
  }, {
    key: "renderDeletedText",
    value: function renderDeletedText(e2) {
      return this.options.renderEndnotes ? this.htmlDocument.createTextNode(e2.text) : null;
    }
  }, {
    key: "renderBreak",
    value: function renderBreak(e2) {
      return "textWrapping" == e2.break ? this.createElement("br") : null;
    }
  }, {
    key: "renderInserted",
    value: function renderInserted(e2) {
      return this.options.renderChanges ? this.renderContainer(e2, "ins") : this.renderChildren(e2);
    }
  }, {
    key: "renderDeleted",
    value: function renderDeleted(e2) {
      return this.options.renderChanges ? this.renderContainer(e2, "del") : null;
    }
  }, {
    key: "renderSymbol",
    value: function renderSymbol(e2) {
      var t2 = this.createElement("span");
      return t2.style.fontFamily = e2.font, t2.innerHTML = "&#x".concat(e2.char, ";"), t2;
    }
  }, {
    key: "renderFootnoteReference",
    value: function renderFootnoteReference(e2) {
      var t2 = this.createElement("sup");
      return this.currentFootnoteIds.push(e2.id), t2.textContent = "".concat(this.currentFootnoteIds.length), t2;
    }
  }, {
    key: "renderEndnoteReference",
    value: function renderEndnoteReference(e2) {
      var t2 = this.createElement("sup");
      return this.currentEndnoteIds.push(e2.id), t2.textContent = "".concat(this.currentEndnoteIds.length), t2;
    }
  }, {
    key: "renderTab",
    value: function renderTab(e2) {
      var t2 = this.createElement("span");
      if (t2.innerHTML = "&emsp;", this.options.experimental) {
        var _ref3;
        t2.className = this.tabStopClass();
        var r2 = (_ref3 = function(e3, t3) {
          var r3 = e3.parent;
          for (; null != r3 && r3.type != t3; )
            r3 = r3.parent;
          return r3;
        }(e2, Ui.Paragraph)) === null || _ref3 === void 0 ? void 0 : _ref3.tabs;
        this.currentTabs.push({
          stops: r2,
          span: t2
        });
      }
      return t2;
    }
  }, {
    key: "renderBookmarkStart",
    value: function renderBookmarkStart(e2) {
      var t2 = this.createElement("span");
      return t2.id = e2.name, t2;
    }
  }, {
    key: "renderRun",
    value: function renderRun(e2) {
      if (e2.fieldRun)
        return null;
      var t2 = this.createElement("span");
      if (e2.id && (t2.id = e2.id), this.renderClass(e2, t2), this.renderStyleValues(e2.cssStyle, t2), e2.verticalAlign) {
        var _r16 = this.createElement(e2.verticalAlign);
        this.renderChildren(e2, _r16), t2.appendChild(_r16);
      } else
        this.renderChildren(e2, t2);
      return t2;
    }
  }, {
    key: "renderTable",
    value: function renderTable(e2) {
      var t2 = this.createElement("table");
      return this.tableCellPositions.push(this.currentCellPosition), this.tableVerticalMerges.push(this.currentVerticalMerge), this.currentVerticalMerge = {}, this.currentCellPosition = {
        col: 0,
        row: 0
      }, e2.columns && t2.appendChild(this.renderTableColumns(e2.columns)), this.renderClass(e2, t2), this.renderChildren(e2, t2), this.renderStyleValues(e2.cssStyle, t2), this.currentVerticalMerge = this.tableVerticalMerges.pop(), this.currentCellPosition = this.tableCellPositions.pop(), t2;
    }
  }, {
    key: "renderTableColumns",
    value: function renderTableColumns(e2) {
      var t2 = this.createElement("colgroup");
      var _iterator50 = _createForOfIteratorHelper(e2), _step50;
      try {
        for (_iterator50.s(); !(_step50 = _iterator50.n()).done; ) {
          var _r17 = _step50.value;
          var _e23 = this.createElement("col");
          _r17.width && (_e23.style.width = _r17.width), t2.appendChild(_e23);
        }
      } catch (err) {
        _iterator50.e(err);
      } finally {
        _iterator50.f();
      }
      return t2;
    }
  }, {
    key: "renderTableRow",
    value: function renderTableRow(e2) {
      var t2 = this.createElement("tr");
      return this.currentCellPosition.col = 0, this.renderClass(e2, t2), this.renderChildren(e2, t2), this.renderStyleValues(e2.cssStyle, t2), this.currentCellPosition.row++, t2;
    }
  }, {
    key: "renderTableCell",
    value: function renderTableCell(e2) {
      var t2 = this.createElement("td");
      var r2 = this.currentCellPosition.col;
      return e2.verticalMerge ? "restart" == e2.verticalMerge ? (this.currentVerticalMerge[r2] = t2, t2.rowSpan = 1) : this.currentVerticalMerge[r2] && (this.currentVerticalMerge[r2].rowSpan += 1, t2.style.display = "none") : this.currentVerticalMerge[r2] = null, this.renderClass(e2, t2), this.renderChildren(e2, t2), this.renderStyleValues(e2.cssStyle, t2), e2.span && (t2.colSpan = e2.span), this.currentCellPosition.col += t2.colSpan, t2;
    }
  }, {
    key: "renderVmlPicture",
    value: function renderVmlPicture(e2) {
      var t2 = ro("div");
      return this.renderChildren(e2, t2), t2;
    }
  }, {
    key: "renderVmlElement",
    value: function renderVmlElement(e2) {
      var _e$imageHref, _this$document;
      var t2 = no("svg");
      t2.setAttribute("style", e2.cssStyleText);
      var r2 = this.renderVmlChildElement(e2);
      return (_e$imageHref = e2.imageHref) !== null && _e$imageHref !== void 0 && _e$imageHref.id && this.tasks.push((_this$document = this.document) === null || _this$document === void 0 ? void 0 : _this$document.loadDocumentImage(e2.imageHref.id, this.currentPart).then(function(e3) {
        return r2.setAttribute("href", e3);
      })), t2.appendChild(r2), requestAnimationFrame(function() {
        var e3 = t2.firstElementChild.getBBox();
        t2.setAttribute("width", "".concat(Math.ceil(e3.x + e3.width))), t2.setAttribute("height", "".concat(Math.ceil(e3.y + e3.height)));
      }), t2;
    }
  }, {
    key: "renderVmlChildElement",
    value: function renderVmlChildElement(e2) {
      var t2 = no(e2.tagName);
      Object.entries(e2.attrs).forEach(function(_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2), e3 = _ref5[0], r2 = _ref5[1];
        return t2.setAttribute(e3, r2);
      });
      var _iterator51 = _createForOfIteratorHelper(e2.children), _step51;
      try {
        for (_iterator51.s(); !(_step51 = _iterator51.n()).done; ) {
          var _r18 = _step51.value;
          _r18.type == Ui.VmlElement ? t2.appendChild(this.renderVmlChildElement(_r18)) : t2.appendChild.apply(t2, _toConsumableArray(Oi(this.renderElement(_r18))));
        }
      } catch (err) {
        _iterator51.e(err);
      } finally {
        _iterator51.f();
      }
      return t2;
    }
  }, {
    key: "renderMmlRadical",
    value: function renderMmlRadical(e2) {
      var _e$props;
      var t2 = e2.children.find(function(e3) {
        return e3.type == Ui.MmlBase;
      });
      if ((_e$props = e2.props) !== null && _e$props !== void 0 && _e$props.hideDegree)
        return ao(eo, "msqrt", null, this.renderElements([t2]));
      var r2 = e2.children.find(function(e3) {
        return e3.type == Ui.MmlDegree;
      });
      return ao(eo, "mroot", null, this.renderElements([t2, r2]));
    }
  }, {
    key: "renderMmlDelimiter",
    value: function renderMmlDelimiter(e2) {
      var _e$props$beginChar, _e$props$endChar;
      var t2 = [];
      return t2.push(ao(eo, "mo", null, [(_e$props$beginChar = e2.props.beginChar) !== null && _e$props$beginChar !== void 0 ? _e$props$beginChar : "("])), t2.push.apply(t2, _toConsumableArray(this.renderElements(e2.children))), t2.push(ao(eo, "mo", null, [(_e$props$endChar = e2.props.endChar) !== null && _e$props$endChar !== void 0 ? _e$props$endChar : ")"])), ao(eo, "mrow", null, t2);
    }
  }, {
    key: "renderMmlNary",
    value: function renderMmlNary(e2) {
      var _e$props$char, _e$props2;
      var t2 = [], r2 = Bi(e2.children, function(e3) {
        return e3.type;
      }), n2 = r2[Ui.MmlSuperArgument], a2 = r2[Ui.MmlSubArgument], i2 = n2 ? ao(eo, "mo", null, Oi(this.renderElement(n2))) : null, s2 = a2 ? ao(eo, "mo", null, Oi(this.renderElement(a2))) : null, o2 = ao(eo, "mo", null, [(_e$props$char = (_e$props2 = e2.props) === null || _e$props2 === void 0 ? void 0 : _e$props2.char) !== null && _e$props$char !== void 0 ? _e$props$char : "∫"]);
      return i2 || s2 ? t2.push(ao(eo, "munderover", null, [o2, s2, i2])) : i2 ? t2.push(ao(eo, "mover", null, [o2, i2])) : s2 ? t2.push(ao(eo, "munder", null, [o2, s2])) : t2.push(o2), t2.push.apply(t2, _toConsumableArray(this.renderElements(r2[Ui.MmlBase].children))), ao(eo, "mrow", null, t2);
    }
  }, {
    key: "renderMmlPreSubSuper",
    value: function renderMmlPreSubSuper(e2) {
      var t2 = [], r2 = Bi(e2.children, function(e3) {
        return e3.type;
      }), n2 = r2[Ui.MmlSuperArgument], a2 = r2[Ui.MmlSubArgument], i2 = n2 ? ao(eo, "mo", null, Oi(this.renderElement(n2))) : null, s2 = a2 ? ao(eo, "mo", null, Oi(this.renderElement(a2))) : null, o2 = ao(eo, "mo", null);
      return t2.push(ao(eo, "msubsup", null, [o2, s2, i2])), t2.push.apply(t2, _toConsumableArray(this.renderElements(r2[Ui.MmlBase].children))), ao(eo, "mrow", null, t2);
    }
  }, {
    key: "renderMmlGroupChar",
    value: function renderMmlGroupChar(e2) {
      var t2 = "bot" === e2.props.verticalJustification ? "mover" : "munder", r2 = this.renderContainerNS(e2, eo, t2);
      return e2.props.char && r2.appendChild(ao(eo, "mo", null, [e2.props.char])), r2;
    }
  }, {
    key: "renderMmlBar",
    value: function renderMmlBar(e2) {
      var t2 = this.renderContainerNS(e2, eo, "mrow");
      switch (e2.props.position) {
        case "top":
          t2.style.textDecoration = "overline";
          break;
        case "bottom":
          t2.style.textDecoration = "underline";
      }
      return t2;
    }
  }, {
    key: "renderMmlRun",
    value: function renderMmlRun(e2) {
      var t2 = ao(eo, "ms");
      return this.renderClass(e2, t2), this.renderStyleValues(e2.cssStyle, t2), this.renderChildren(e2, t2), t2;
    }
  }, {
    key: "renderMllList",
    value: function renderMllList(e2) {
      var t2 = ao(eo, "mtable");
      this.renderClass(e2, t2), this.renderStyleValues(e2.cssStyle, t2), this.renderChildren(e2);
      var _iterator52 = _createForOfIteratorHelper(this.renderChildren(e2)), _step52;
      try {
        for (_iterator52.s(); !(_step52 = _iterator52.n()).done; ) {
          var _r19 = _step52.value;
          t2.appendChild(ao(eo, "mtr", null, [ao(eo, "mtd", null, [_r19])]));
        }
      } catch (err) {
        _iterator52.e(err);
      } finally {
        _iterator52.f();
      }
      return t2;
    }
  }, {
    key: "renderStyleValues",
    value: function renderStyleValues(e2, t2) {
      for (var _r20 in e2)
        _r20.startsWith("$") ? t2.setAttribute(_r20.slice(1), e2[_r20]) : t2.style[_r20] = e2[_r20];
    }
  }, {
    key: "renderClass",
    value: function renderClass(e2, t2) {
      e2.className && (t2.className = e2.className), e2.styleName && t2.classList.add(this.processStyleName(e2.styleName));
    }
  }, {
    key: "findStyle",
    value: function findStyle(e2) {
      var _this$styleMap;
      return e2 && ((_this$styleMap = this.styleMap) === null || _this$styleMap === void 0 ? void 0 : _this$styleMap[e2]);
    }
  }, {
    key: "numberingClass",
    value: function numberingClass(e2, t2) {
      return "".concat(this.className, "-num-").concat(e2, "-").concat(t2);
    }
  }, {
    key: "tabStopClass",
    value: function tabStopClass() {
      return "".concat(this.className, "-tab-stop");
    }
  }, {
    key: "styleToString",
    value: function styleToString(e2, t2) {
      var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      var n2 = "".concat(e2, " {\r\n");
      for (var _e24 in t2)
        _e24.startsWith("$") || (n2 += "  ".concat(_e24, ": ").concat(t2[_e24], ";\r\n"));
      return r2 && (n2 += r2), n2 + "}\r\n";
    }
  }, {
    key: "numberingCounter",
    value: function numberingCounter(e2, t2) {
      return "".concat(this.className, "-num-").concat(e2, "-").concat(t2);
    }
  }, {
    key: "levelTextToContent",
    value: function levelTextToContent(e2, t2, r2, n2) {
      var _this41 = this, _tab$space$t;
      return '"'.concat(e2.replace(/%\d*/g, function(e3) {
        var t3 = parseInt(e3.substring(1), 10) - 1;
        return '"counter('.concat(_this41.numberingCounter(r2, t3), ", ").concat(n2, ')"');
      })).concat((_tab$space$t = {
        tab: "\\9",
        space: "\\a0"
      }[t2]) !== null && _tab$space$t !== void 0 ? _tab$space$t : "", '"');
    }
  }, {
    key: "numFormatToCssValue",
    value: function numFormatToCssValue(e2) {
      var _none$bullet$decimal$;
      return (_none$bullet$decimal$ = {
        none: "none",
        bullet: "disc",
        decimal: "decimal",
        lowerLetter: "lower-alpha",
        upperLetter: "upper-alpha",
        lowerRoman: "lower-roman",
        upperRoman: "upper-roman",
        decimalZero: "decimal-leading-zero",
        aiueo: "katakana",
        aiueoFullWidth: "katakana",
        chineseCounting: "simp-chinese-informal",
        chineseCountingThousand: "simp-chinese-informal",
        chineseLegalSimplified: "simp-chinese-formal",
        chosung: "hangul-consonant",
        ideographDigital: "cjk-ideographic",
        ideographTraditional: "cjk-heavenly-stem",
        ideographLegalTraditional: "trad-chinese-formal",
        ideographZodiac: "cjk-earthly-branch",
        iroha: "katakana-iroha",
        irohaFullWidth: "katakana-iroha",
        japaneseCounting: "japanese-informal",
        japaneseDigitalTenThousand: "cjk-decimal",
        japaneseLegal: "japanese-formal",
        thaiNumbers: "thai",
        koreanCounting: "korean-hangul-formal",
        koreanDigital: "korean-hangul-formal",
        koreanDigital2: "korean-hanja-informal",
        hebrew1: "hebrew",
        hebrew2: "hebrew",
        hindiNumbers: "devanagari",
        ganada: "hangul",
        taiwaneseCounting: "cjk-ideographic",
        taiwaneseCountingThousand: "cjk-ideographic",
        taiwaneseDigital: "cjk-decimal"
      }[e2]) !== null && _none$bullet$decimal$ !== void 0 ? _none$bullet$decimal$ : e2;
    }
  }, {
    key: "refreshTabStops",
    value: function refreshTabStops() {
      var _this42 = this;
      this.options.experimental && (clearTimeout(this.tabsTimeout), this.tabsTimeout = setTimeout(function() {
        var e2 = function() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.body;
          var t2 = document.createElement("div");
          t2.style.width = "100pt", e3.appendChild(t2);
          var r2 = 100 / t2.offsetWidth;
          return e3.removeChild(t2), r2;
        }();
        var _iterator53 = _createForOfIteratorHelper(_this42.currentTabs), _step53;
        try {
          for (_iterator53.s(); !(_step53 = _iterator53.n()).done; ) {
            var _t15 = _step53.value;
            Gs(_t15.span, _t15.stops, _this42.defaultTabSize, e2);
          }
        } catch (err) {
          _iterator53.e(err);
        } finally {
          _iterator53.f();
        }
      }, 500));
    }
  }, {
    key: "later",
    value: function later(e2) {
      this.postRenderTasks.push(e2);
    }
  }]);
}();
function ro(e2, t2, r2) {
  return ao(void 0, e2, t2, r2);
}
function no(e2, t2, r2) {
  return ao(Qs, e2, t2, r2);
}
function ao(e2, t2, r2, n2) {
  var a2 = e2 ? document.createElementNS(e2, t2) : document.createElement(t2);
  return Object.assign(a2, r2), n2 && so(a2, n2), a2;
}
function io(e2) {
  e2.innerHTML = "";
}
function so(e2, t2) {
  t2.forEach(function(t3) {
    return e2.appendChild("string" == typeof (r2 = t3) || r2 instanceof String ? document.createTextNode(t3) : t3);
    var r2;
  });
}
function oo(e2) {
  return ro("style", {
    innerHTML: e2
  });
}
function lo(e2, t2) {
  e2.appendChild(document.createComment(t2));
}
var co = {
  ignoreHeight: false,
  ignoreWidth: false,
  ignoreFonts: false,
  breakPages: true,
  debug: false,
  experimental: false,
  className: "docx",
  inWrapper: true,
  trimXmlDeclaration: true,
  ignoreLastRenderedPageBreak: true,
  renderHeaders: true,
  renderFooters: true,
  renderFootnotes: true,
  renderEndnotes: true,
  useBase64URL: false,
  renderChanges: false,
  renderComments: false
};
function ho(_x13, _x14, _x15, _x16) {
  return _ho.apply(this, arguments);
}
function _ho() {
  _ho = _asyncToGenerator(_regeneratorRuntime().mark(function _callee12(e2, t2, r2, n2) {
    var a2;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1)
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return function(e3, t3) {
              var r3 = _objectSpread(_objectSpread({}, co), t3);
              return Ts.load(e3, new Vs(r3), r3);
            }(e2, n2);
          case 2:
            a2 = _context12.sent;
            _context12.next = 5;
            return function() {
              var _ref7 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee11(e3, t3, r3, n3) {
                var a3, i2;
                return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                  while (1)
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        a3 = _objectSpread(_objectSpread({}, co), n3), i2 = new to(window.document);
                        return _context11.abrupt("return", (i2.render(e3, t3, r3, a3), Promise.allSettled(i2.tasks)));
                      case 2:
                      case "end":
                        return _context11.stop();
                    }
                }, _callee11);
              }));
              return function(_x21, _x22, _x23, _x24) {
                return _ref7.apply(this, arguments);
              };
            }()(a2, t2, r2, n2);
          case 5:
            return _context12.abrupt("return", a2);
          case 6:
          case "end":
            return _context12.stop();
        }
    }, _callee12);
  }));
  return _ho.apply(this, arguments);
}
var uo = {
  ignoreLastRenderedPageBreak: false
};
var fo = {
  getData: function getData(e2) {
    var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return "string" == typeof e2 ? function(e3, t3) {
      return fetch(e3, t3).then(function(e4) {
        return 200 !== e4.status ? Promise.reject(e4) : e4;
      });
    }(e2, t2) : Promise.resolve(e2);
  },
  render: function render(e2, t2) {
    var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!e2)
      return t2.innerHTML = "", Promise.resolve();
    var n2;
    return e2 instanceof Blob ? n2 = e2 : e2 instanceof Response ? n2 = e2.blob() : e2 instanceof ArrayBuffer && (n2 = new Blob([e2])), ho(n2, t2, t2, _objectSpread(_objectSpread({}, uo), r2));
  },
  getBlob: function() {
    var _getBlob = _asyncToGenerator(_regeneratorRuntime().mark(function _callee9(e2) {
      var t2;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1)
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!(e2 instanceof Blob)) {
                _context9.next = 4;
                break;
              }
              t2 = e2;
              _context9.next = 11;
              break;
            case 4:
              if (!(e2 instanceof Response)) {
                _context9.next = 10;
                break;
              }
              _context9.next = 7;
              return e2.blob();
            case 7:
              t2 = _context9.sent;
              _context9.next = 11;
              break;
            case 10:
              e2 instanceof ArrayBuffer && (t2 = new Blob([e2]));
            case 11:
              return _context9.abrupt("return", t2);
            case 12:
            case "end":
              return _context9.stop();
          }
      }, _callee9);
    }));
    function getBlob(_x17) {
      return _getBlob.apply(this, arguments);
    }
    return getBlob;
  }()
};
function po(_x18, _x19) {
  return _po.apply(this, arguments);
}
function _po() {
  _po = _asyncToGenerator(_regeneratorRuntime().mark(function _callee13(e2, t2) {
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1)
        switch (_context13.prev = _context13.next) {
          case 0:
            t2 && (t2 instanceof ArrayBuffer && (t2 = new Blob([t2])), function(e3, t3) {
              var r2 = document.createElement("a");
              r2.download = e3, r2.style.display = "none", r2.href = t3, document.body.appendChild(r2), r2.click(), document.body.removeChild(r2);
            }(e2, URL.createObjectURL(t2)));
          case 1:
          case "end":
            return _context13.stop();
        }
    }, _callee13);
  }));
  return _po.apply(this, arguments);
}
var mo = function() {
  function mo2(e2) {
    var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    _classCallCheck(this, mo2);
    _defineProperty(this, "container", null);
    _defineProperty(this, "wrapper", null);
    _defineProperty(this, "wrapperMain", null);
    _defineProperty(this, "options", {});
    _defineProperty(this, "requestOptions", {});
    _defineProperty(this, "fileData", null);
    this.container = e2, this.options = t2, this.requestOptions = r2, this.createWrapper();
  }
  return _createClass(mo2, [{
    key: "createWrapper",
    value: function createWrapper() {
      this.wrapper = document.createElement("div"), this.wrapper.className = "vue-office-docx", this.wrapperMain = document.createElement("div"), this.wrapperMain.className = "vue-office-docx-main", this.wrapper.appendChild(this.wrapperMain), this.container.appendChild(this.wrapper);
    }
  }, {
    key: "setOptions",
    value: function setOptions(e2) {
      this.options = e2;
    }
  }, {
    key: "setRequestOptions",
    value: function setRequestOptions(e2) {
      this.requestOptions = e2;
    }
  }, {
    key: "preview",
    value: function preview(e2) {
      var _this43 = this;
      return new Promise(function(t2, r2) {
        fo.getData(e2, _this43.requestOptions).then(function() {
          var _ref6 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee10(e3) {
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1)
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return fo.getBlob(e3);
                  case 2:
                    _this43.fileData = _context10.sent;
                    fo.render(_this43.fileData, _this43.wrapperMain, _this43.options).then(function() {
                      t2();
                    }).catch(function(e4) {
                      fo.render("", _this43.wrapperMain, _this43.options), r2(e4);
                    });
                  case 4:
                  case "end":
                    return _context10.stop();
                }
            }, _callee10);
          }));
          return function(_x20) {
            return _ref6.apply(this, arguments);
          };
        }()).catch(function(e3) {
          fo.render("", _this43.wrapperMain, _this43.options), r2(e3);
        });
      });
    }
  }, {
    key: "save",
    value: function save(e2) {
      po(e2 || "js-preview-docx-".concat((/* @__PURE__ */ new Date()).getTime(), ".docx"), this.fileData);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.container.removeChild(this.wrapper), this.container = null, this.wrapper = null, this.wrapperMain = null, this.options = null, this.requestOptions = null;
    }
  }]);
}();
var go = {
  init: function init(e2, t2, r2) {
    return new mo(e2, t2, r2);
  }
};
export {
  go as default
};
/*! Bundled license information:

@js-preview/docx/lib/index.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)
*/
//# sourceMappingURL=@js-preview_docx.js.map
