(window["webpackJsonpSettings"] = window["webpackJsonpSettings"] || []).push([[1],{

/***/ "./node_modules/@nextcloud/auth/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@nextcloud/auth/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getRequestToken", {
  enumerable: true,
  get: function get() {
    return _requesttoken.getRequestToken;
  }
});
Object.defineProperty(exports, "onRequestTokenUpdate", {
  enumerable: true,
  get: function get() {
    return _requesttoken.onRequestTokenUpdate;
  }
});
Object.defineProperty(exports, "getCurrentUser", {
  enumerable: true,
  get: function get() {
    return _user.getCurrentUser;
  }
});

var _requesttoken = __webpack_require__(/*! ./requesttoken */ "./node_modules/@nextcloud/auth/dist/requesttoken.js");

var _user = __webpack_require__(/*! ./user */ "./node_modules/@nextcloud/auth/dist/user.js");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/auth/dist/requesttoken.js":
/*!***********************************************************!*\
  !*** ./node_modules/@nextcloud/auth/dist/requesttoken.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRequestToken = getRequestToken;
exports.onRequestTokenUpdate = onRequestTokenUpdate;

var _eventBus = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/auth/node_modules/@nextcloud/event-bus/dist/index.js");

var tokenElement = document.getElementsByTagName('head')[0];
var token = tokenElement ? tokenElement.getAttribute('data-requesttoken') : null;
var observers = [];

function getRequestToken() {
  return token;
}

function onRequestTokenUpdate(observer) {
  observers.push(observer);
} // Listen to server event and keep token in sync


(0, _eventBus.subscribe)('csrf-token-update', function (e) {
  token = e.token;
  observers.forEach(function (observer) {
    try {
      observer(e.token);
    } catch (e) {
      console.error('error updating CSRF token observer', e);
    }
  });
});
//# sourceMappingURL=requesttoken.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/auth/dist/user.js":
/*!***************************************************!*\
  !*** ./node_modules/@nextcloud/auth/dist/user.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentUser = getCurrentUser;
var uidElement = document.getElementsByTagName('head')[0];
var uid = uidElement ? uidElement.getAttribute('data-user') : null;
var displayNameElement = document.getElementsByTagName('head')[0];
var displayName = displayNameElement ? displayNameElement.getAttribute('data-user-displayname') : null;

function getCurrentUser() {
  if (uid === null) {
    return null;
  }

  return {
    uid: uid,
    displayName: displayName
  };
}
//# sourceMappingURL=user.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/@nextcloud/event-bus/dist/ProxyBus.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/@nextcloud/event-bus/dist/ProxyBus.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProxyBus = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var packageJson = {
  name: "@nextcloud/event-bus",
  version: "0.2.1",
  description: "",
  main: "dist/index.js",
  types: "dist/index.d.ts",
  scripts: {
    build: "babel ./lib --out-dir dist --extensions '.ts,.tsx' --source-maps && tsc --emitDeclarationOnly",
    "check-types": "tsc",
    dev: "babel ./lib --out-dir dist --extensions '.ts,.tsx' --watch",
    test: "jest",
    "test:watch": "jest --watchAll"
  },
  keywords: ["nextcloud"],
  homepage: "https://github.com/nextcloud/nextcloud-event-bus#readme",
  author: "Christoph Wurst",
  license: "GPL-3.0-or-later",
  repository: {
    type: "git",
    url: "https://github.com/nextcloud/nextcloud-event-bus"
  },
  dependencies: {
    "core-js": "^3.1.4"
  },
  devDependencies: {
    "@babel/cli": "^7.6.0",
    "@babel/core": "^7.6.0",
    "@babel/plugin-proposal-class-properties": "^7.5.5",
    "@babel/preset-env": "^7.6.0",
    "@babel/preset-typescript": "^7.6.0",
    "babel-jest": "^24.9.0",
    "babel-plugin-inline-json-import": "^0.3.2",
    "browserslist-config-nextcloud": "0.0.1",
    jest: "^24.9.0",
    typescript: "^3.6.3"
  },
  browserslist: ["extends browserslist-config-nextcloud"]
};

var ProxyBus =
/*#__PURE__*/
function () {
  function ProxyBus(bus) {
    _classCallCheck(this, ProxyBus);

    _defineProperty(this, "bus", void 0);

    if (bus.getVersion() !== this.getVersion()) {
      // TODO: only warn if major version number does not match
      console.warn('Proxying an event bus of version ' + bus.getVersion() + ' with ' + this.getVersion());
    }

    this.bus = bus;
  }

  _createClass(ProxyBus, [{
    key: "getVersion",
    value: function getVersion() {
      return packageJson.version;
    }
  }, {
    key: "subscribe",
    value: function subscribe(name, handler) {
      this.bus.subscribe(name, handler);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(name, handler) {
      this.bus.unsubscribe(name, handler);
    }
  }, {
    key: "emit",
    value: function emit(name, event) {
      this.bus.emit(name, event);
    }
  }]);

  return ProxyBus;
}();

exports.ProxyBus = ProxyBus;
//# sourceMappingURL=ProxyBus.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/@nextcloud/event-bus/dist/SimpleBus.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/@nextcloud/event-bus/dist/SimpleBus.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.map */ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.map.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleBus = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var packageJson = {
  name: "@nextcloud/event-bus",
  version: "0.2.1",
  description: "",
  main: "dist/index.js",
  types: "dist/index.d.ts",
  scripts: {
    build: "babel ./lib --out-dir dist --extensions '.ts,.tsx' --source-maps && tsc --emitDeclarationOnly",
    "check-types": "tsc",
    dev: "babel ./lib --out-dir dist --extensions '.ts,.tsx' --watch",
    test: "jest",
    "test:watch": "jest --watchAll"
  },
  keywords: ["nextcloud"],
  homepage: "https://github.com/nextcloud/nextcloud-event-bus#readme",
  author: "Christoph Wurst",
  license: "GPL-3.0-or-later",
  repository: {
    type: "git",
    url: "https://github.com/nextcloud/nextcloud-event-bus"
  },
  dependencies: {
    "core-js": "^3.1.4"
  },
  devDependencies: {
    "@babel/cli": "^7.6.0",
    "@babel/core": "^7.6.0",
    "@babel/plugin-proposal-class-properties": "^7.5.5",
    "@babel/preset-env": "^7.6.0",
    "@babel/preset-typescript": "^7.6.0",
    "babel-jest": "^24.9.0",
    "babel-plugin-inline-json-import": "^0.3.2",
    "browserslist-config-nextcloud": "0.0.1",
    jest: "^24.9.0",
    typescript: "^3.6.3"
  },
  browserslist: ["extends browserslist-config-nextcloud"]
};

var SimpleBus =
/*#__PURE__*/
function () {
  function SimpleBus() {
    _classCallCheck(this, SimpleBus);

    _defineProperty(this, "handlers", new Map());
  }

  _createClass(SimpleBus, [{
    key: "getVersion",
    value: function getVersion() {
      return packageJson.version;
    }
  }, {
    key: "subscribe",
    value: function subscribe(name, handler) {
      this.handlers.set(name, (this.handlers.get(name) || []).concat(handler));
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(name, handler) {
      this.handlers.set(name, (this.handlers.get(name) || []).filter(function (h) {
        return h != handler;
      }));
    }
  }, {
    key: "emit",
    value: function emit(name, event) {
      (this.handlers.get(name) || []).forEach(function (h) {
        try {
          h(event);
        } catch (e) {
          console.error('could not invoke event listener', e);
        }
      });
    }
  }]);

  return SimpleBus;
}();

exports.SimpleBus = SimpleBus;
//# sourceMappingURL=SimpleBus.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/@nextcloud/event-bus/dist/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/@nextcloud/event-bus/dist/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emit = exports.unsubscribe = exports.subscribe = void 0;

var _ProxyBus = __webpack_require__(/*! ./ProxyBus */ "./node_modules/@nextcloud/auth/node_modules/@nextcloud/event-bus/dist/ProxyBus.js");

var _SimpleBus = __webpack_require__(/*! ./SimpleBus */ "./node_modules/@nextcloud/auth/node_modules/@nextcloud/event-bus/dist/SimpleBus.js");

function getBus() {
  if (typeof window.OC !== 'undefined' && window.OC._eventBus && typeof window._nc_event_bus === 'undefined') {
    console.warn('found old event bus instance at OC._eventBus. Update your version!');
    window._nc_event_bus = window.OC._eventBus;
  } // Either use an existing event bus instance or create one


  if (typeof window._nc_event_bus !== 'undefined') {
    return new _ProxyBus.ProxyBus(window._nc_event_bus);
  } else {
    return window._nc_event_bus = new _SimpleBus.SimpleBus();
  }
}

var bus = getBus();
var subscribe = bus.subscribe.bind(bus);
exports.subscribe = subscribe;
var unsubscribe = bus.unsubscribe.bind(bus);
exports.unsubscribe = unsubscribe;
var emit = bus.emit.bind(bus);
exports.emit = emit;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/a-function.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/a-function.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/a-possible-prototype.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/a-possible-prototype.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/add-to-unscopables.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/add-to-unscopables.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-create.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-non-enumerable-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  createNonEnumerableProperty(ArrayPrototype, UNSCOPABLES, create(null));
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/an-instance.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/an-instance.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/an-object.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/an-object.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-for-each.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-for-each.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-iteration.js").forEach;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/sloppy-array-method.js");

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-includes.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-includes.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-iteration.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-iteration.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-method-has-species-support.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-method-has-species-support.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-species-create.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-species-create.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/bind-context.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/bind-context.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/classof-raw.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/classof-raw.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/classof.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/classof.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/collection-strong.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/collection-strong.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-define-property.js").f;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-create.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/redefine-all.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/bind-context.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/an-instance.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/iterate.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/define-iterator.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/descriptors.js");
var fastKey = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/internal-metadata.js").fastKey;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/collection.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/collection.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/redefine.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/internal-metadata.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/iterate.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/an-instance.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/check-correctness-of-iteration.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/inherit-if-required.js");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/copy-constructor-properties.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/correct-prototype-getter.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/correct-prototype-getter.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-iterator-constructor.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-iterator-constructor.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-non-enumerable-property.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-property-descriptor.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-property-descriptor.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-property.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-property.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/define-iterator.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/define-iterator.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/descriptors.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/descriptors.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/document-create-element.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/document-create-element.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/dom-iterables.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/dom-iterables.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
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


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/enum-bug-keys.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/enum-bug-keys.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/export.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/export.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/freezing.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/freezing.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/get-built-in.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/get-built-in.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/get-iterator-method.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/get-iterator-method.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/hidden-keys.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/hidden-keys.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/html.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/html.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/ie8-dom-define.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/ie8-dom-define.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/indexed-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/indexed-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/inherit-if-required.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/inherit-if-required.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/inspect-source.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/inspect-source.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/internal-metadata.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/internal-metadata.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/hidden-keys.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-define-property.js").f;
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/uid.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/freezing.js");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/internal-state.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/internal-state.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-array-iterator-method.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-array-iterator-method.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-array.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-array.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-forced.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-forced.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-pure.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-pure.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/iterate.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/iterate.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/get-iterator-method.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/iterators-core.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/iterators-core.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/iterators.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/iterators.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/native-symbol.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/native-symbol.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/native-weak-map.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/native-weak-map.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-create.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-create.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared-key.js");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-define-properties.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-define-properties.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-define-property.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-define-property.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-names.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-prototype-of.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-prototype-of.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-keys-internal.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-keys-internal.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-keys.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-keys.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-property-is-enumerable.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-set-prototype-of.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-set-prototype-of.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-to-string.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-to-string.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/own-keys.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/own-keys.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/path.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/path.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/redefine-all.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/redefine-all.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/redefine.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/redefine.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/require-object-coercible.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/require-object-coercible.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/set-global.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/set-global.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/set-species.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/set-species.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/set-to-string-tag.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/set-to-string-tag.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared-key.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared-key.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared-store.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared-store.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.5.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/sloppy-array-method.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/sloppy-array-method.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/string-multibyte.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/string-multibyte.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-absolute-index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-absolute-index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-indexed-object.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-indexed-object.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-integer.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-integer.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-length.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-length.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-object.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-object.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-primitive.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-primitive.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-string-tag-support.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-string-tag-support.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/uid.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/uid.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/use-symbol-as-uid.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol() == 'symbol';


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/user-agent.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/user-agent.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/v8-version.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/v8-version.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/user-agent */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.array.concat.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.array.concat.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.array.filter.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.array.filter.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-iteration.js").filter;
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = HAS_SPECIES_SUPPORT && !fails(function () {
  [].filter.call({ length: -1, 0: 1 }, function (it) { throw it; });
});

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.array.for-each.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.array.for-each.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.array.iterator.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.array.iterator.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.map.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.map.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/collection-strong.js");

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.object.to-string.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.object.to-string.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.string.iterator.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.string.iterator.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/vue-click-outside/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vue-click-outside/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function validate(binding) {
  if (typeof binding.value !== 'function') {
    console.warn('[Vue-click-outside:] provided expression', binding.expression, 'is not a function.')
    return false
  }

  return true
}

function isPopup(popupItem, elements) {
  if (!popupItem || !elements)
    return false

  for (var i = 0, len = elements.length; i < len; i++) {
    try {
      if (popupItem.contains(elements[i])) {
        return true
      }
      if (elements[i].contains(popupItem)) {
        return false
      }
    } catch(e) {
      return false
    }
  }

  return false
}

function isServer(vNode) {
  return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer
}

exports = module.exports = {
  bind: function (el, binding, vNode) {
    if (!validate(binding)) return

    // Define Handler and cache it on the element
    function handler(e) {
      if (!vNode.context) return

      // some components may have related popup item, on which we shall prevent the click outside event handler.
      var elements = e.path || (e.composedPath && e.composedPath())
      elements && elements.length > 0 && elements.unshift(e.target)
      
      if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) return

      el.__vueClickOutside__.callback(e)
    }

    // add Event Listeners
    el.__vueClickOutside__ = {
      handler: handler,
      callback: binding.value
    }
    !isServer(vNode) && document.addEventListener('click', handler)
  },

  update: function (el, binding) {
    if (validate(binding)) el.__vueClickOutside__.callback = binding.value
  },
  
  unbind: function (el, binding, vNode) {
    // Remove Event Listeners
    !isServer(vNode) && document.removeEventListener('click', el.__vueClickOutside__.handler)
    delete el.__vueClickOutside__
  }
}


/***/ }),

/***/ "./node_modules/vue-infinite-loading/dist/vue-infinite-loading.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-infinite-loading/dist/vue-infinite-loading.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vue-infinite-loading v2.4.4
 * (c) 2016-2019 PeachScript
 * MIT License
 */
!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(3).default)("09280948",i,!0,{})},function(t,e,n){var i=n(8);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(3).default)("51e4c3f9",i,!0,{})},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=(o=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(a).concat([r]).join("\n")}var o;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(i[a]=!0)}for(r=0;r<t.length;r++){var o=t[r];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},r=0;r<e.length;r++){var a=e[r],o=a[0],s={id:t+":"+r,css:a[1],media:a[2],sourceMap:a[3]};i[o]?i[o].parts.push(s):n.push(i[o]={id:o,parts:[s]})}return n}n.r(e),n.d(e,"default",function(){return b});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},o=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,d=!1,c=function(){},u=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function b(t,e,n,r){d=n,u=r||{};var o=i(t,e);return h(o),function(e){for(var n=[],r=0;r<o.length;r++){var s=o[r];(l=a[s.id]).refs--,n.push(l)}e?h(o=i(t,e)):o=[];for(r=0;r<n.length;r++){var l;if(0===(l=n[r]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete a[l.id]}}}}function h(t){for(var e=0;e<t.length;e++){var n=t[e],i=a[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(g(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var o=[];for(r=0;r<n.parts.length;r++)o.push(g(n.parts[r]));a[n.id]={id:n.id,refs:1,parts:o}}}}function m(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function g(t){var e,n,i=document.querySelector("style["+p+'~="'+t.id+'"]');if(i){if(d)return c;i.parentNode.removeChild(i)}if(f){var r=l++;i=s||(s=m()),e=w.bind(null,i,r,!1),n=w.bind(null,i,r,!0)}else i=m(),e=function(t,e){var n=e.css,i=e.media,r=e.sourceMap;i&&t.setAttribute("media",i);u.ssrId&&t.setAttribute(p,e.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var v,y=(v=[],function(t,e){return v[t]=e,v.filter(Boolean).join("\n")});function w(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var a=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=i=function(t){return n(t)}:t.exports=i=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},i(e)}t.exports=i},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e.default=r.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,'.loading-wave-dots[data-v-46b20d22]{position:relative}.loading-wave-dots[data-v-46b20d22] .wave-item{position:absolute;top:50%;left:50%;display:inline-block;margin-top:-4px;width:8px;height:8px;border-radius:50%;-webkit-animation:loading-wave-dots-data-v-46b20d22 linear 2.8s infinite;animation:loading-wave-dots-data-v-46b20d22 linear 2.8s infinite}.loading-wave-dots[data-v-46b20d22] .wave-item:first-child{margin-left:-36px}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(2){margin-left:-20px;-webkit-animation-delay:.14s;animation-delay:.14s}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(3){margin-left:-4px;-webkit-animation-delay:.28s;animation-delay:.28s}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(4){margin-left:12px;-webkit-animation-delay:.42s;animation-delay:.42s}.loading-wave-dots[data-v-46b20d22] .wave-item:last-child{margin-left:28px;-webkit-animation-delay:.56s;animation-delay:.56s}@-webkit-keyframes loading-wave-dots-data-v-46b20d22{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}to{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}@keyframes loading-wave-dots-data-v-46b20d22{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}to{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}.loading-circles[data-v-46b20d22] .circle-item{width:5px;height:5px;-webkit-animation:loading-circles-data-v-46b20d22 linear .75s infinite;animation:loading-circles-data-v-46b20d22 linear .75s infinite}.loading-circles[data-v-46b20d22] .circle-item:first-child{margin-top:-14.5px;margin-left:-2.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(2){margin-top:-11.26px;margin-left:6.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(3){margin-top:-2.5px;margin-left:9.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(4){margin-top:6.26px;margin-left:6.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(5){margin-top:9.5px;margin-left:-2.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(6){margin-top:6.26px;margin-left:-11.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(7){margin-top:-2.5px;margin-left:-14.5px}.loading-circles[data-v-46b20d22] .circle-item:last-child{margin-top:-11.26px;margin-left:-11.26px}@-webkit-keyframes loading-circles-data-v-46b20d22{0%{background:#dfdfdf}90%{background:#505050}to{background:#dfdfdf}}@keyframes loading-circles-data-v-46b20d22{0%{background:#dfdfdf}90%{background:#505050}to{background:#dfdfdf}}.loading-bubbles[data-v-46b20d22] .bubble-item{background:#666;-webkit-animation:loading-bubbles-data-v-46b20d22 linear .75s infinite;animation:loading-bubbles-data-v-46b20d22 linear .75s infinite}.loading-bubbles[data-v-46b20d22] .bubble-item:first-child{margin-top:-12.5px;margin-left:-.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(2){margin-top:-9.26px;margin-left:8.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(3){margin-top:-.5px;margin-left:11.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(4){margin-top:8.26px;margin-left:8.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(5){margin-top:11.5px;margin-left:-.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(6){margin-top:8.26px;margin-left:-9.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(7){margin-top:-.5px;margin-left:-12.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:last-child{margin-top:-9.26px;margin-left:-9.26px}@-webkit-keyframes loading-bubbles-data-v-46b20d22{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}to{width:1px;height:1px;box-shadow:0 0 0 3px #666}}@keyframes loading-bubbles-data-v-46b20d22{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}to{width:1px;height:1px;box-shadow:0 0 0 3px #666}}.loading-default[data-v-46b20d22]{position:relative;border:1px solid #999;-webkit-animation:loading-rotating-data-v-46b20d22 ease 1.5s infinite;animation:loading-rotating-data-v-46b20d22 ease 1.5s infinite}.loading-default[data-v-46b20d22]:before{content:"";position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.loading-spiral[data-v-46b20d22]{border:2px solid #777;border-right-color:transparent;-webkit-animation:loading-rotating-data-v-46b20d22 linear .85s infinite;animation:loading-rotating-data-v-46b20d22 linear .85s infinite}@-webkit-keyframes loading-rotating-data-v-46b20d22{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-rotating-data-v-46b20d22{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.loading-bubbles[data-v-46b20d22],.loading-circles[data-v-46b20d22]{position:relative}.loading-bubbles[data-v-46b20d22] .bubble-item,.loading-circles[data-v-46b20d22] .circle-item{position:absolute;top:50%;left:50%;display:inline-block;border-radius:50%}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(2),.loading-circles[data-v-46b20d22] .circle-item:nth-child(2){-webkit-animation-delay:93ms;animation-delay:93ms}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(3),.loading-circles[data-v-46b20d22] .circle-item:nth-child(3){-webkit-animation-delay:.186s;animation-delay:.186s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(4),.loading-circles[data-v-46b20d22] .circle-item:nth-child(4){-webkit-animation-delay:.279s;animation-delay:.279s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(5),.loading-circles[data-v-46b20d22] .circle-item:nth-child(5){-webkit-animation-delay:.372s;animation-delay:.372s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(6),.loading-circles[data-v-46b20d22] .circle-item:nth-child(6){-webkit-animation-delay:.465s;animation-delay:.465s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(7),.loading-circles[data-v-46b20d22] .circle-item:nth-child(7){-webkit-animation-delay:.558s;animation-delay:.558s}.loading-bubbles[data-v-46b20d22] .bubble-item:last-child,.loading-circles[data-v-46b20d22] .circle-item:last-child{-webkit-animation-delay:.651s;animation-delay:.651s}',""])},function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e.default=r.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".infinite-loading-container[data-v-46b21138]{clear:both;text-align:center}.infinite-loading-container[data-v-46b21138] [class^=loading-]{display:inline-block;margin:5px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.btn-try-infinite[data-v-46b21138]{margin-top:5px;padding:5px 10px;color:#999;font-size:14px;line-height:1;background:transparent;border:1px solid #ccc;border-radius:3px;outline:none;cursor:pointer}.btn-try-infinite[data-v-46b21138]:not(:active):hover{opacity:.8}",""])},function(t,e,n){"use strict";n.r(e);var i={throttleLimit:50,loopCheckTimeout:1e3,loopCheckMaxCalls:10},r=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){return t={passive:!0},!0}});window.addEventListener("testpassive",e,e),window.remove("testpassive",e,e)}catch(t){}return t}(),a={STATE_CHANGER:["emit `loaded` and `complete` event through component instance of `$refs` may cause error, so it will be deprecated soon, please use the `$state` argument instead (`$state` just the special `$event` variable):","\ntemplate:",'<infinite-loading @infinite="infiniteHandler"></infinite-loading>',"\nscript:\n...\ninfiniteHandler($state) {\n  ajax('https://www.example.com/api/news')\n    .then((res) => {\n      if (res.data.length) {\n        $state.loaded();\n      } else {\n        $state.complete();\n      }\n    });\n}\n...","","more details: https://github.com/PeachScript/vue-infinite-loading/issues/57#issuecomment-324370549"].join("\n"),INFINITE_EVENT:"`:on-infinite` property will be deprecated soon, please use `@infinite` event instead.",IDENTIFIER:"the `reset` event will be deprecated soon, please reset this component by change the `identifier` property."},o={INFINITE_LOOP:["executed the callback function more than ".concat(i.loopCheckMaxCalls," times for a short time, it looks like searched a wrong scroll wrapper that doest not has fixed height or maximum height, please check it. If you want to force to set a element as scroll wrapper ranther than automatic searching, you can do this:"),'\n\x3c!-- add a special attribute for the real scroll wrapper --\x3e\n<div infinite-wrapper>\n  ...\n  \x3c!-- set force-use-infinite-wrapper --\x3e\n  <infinite-loading force-use-infinite-wrapper></infinite-loading>\n</div>\nor\n<div class="infinite-wrapper">\n  ...\n  \x3c!-- set force-use-infinite-wrapper as css selector of the real scroll wrapper --\x3e\n  <infinite-loading force-use-infinite-wrapper=".infinite-wrapper"></infinite-loading>\n</div>\n    ',"more details: https://github.com/PeachScript/vue-infinite-loading/issues/55#issuecomment-316934169"].join("\n")},s={READY:0,LOADING:1,COMPLETE:2,ERROR:3},l={color:"#666",fontSize:"14px",padding:"10px 0"},d={mode:"development",props:{spinner:"default",distance:100,forceUseInfiniteWrapper:!1},system:i,slots:{noResults:"No results :(",noMore:"No more data :)",error:"Opps, something went wrong :(",errorBtnText:"Retry",spinner:""},WARNINGS:a,ERRORS:o,STATUS:s},c=n(4),u=n.n(c),p={BUBBLES:{render:function(t){return t("span",{attrs:{class:"loading-bubbles"}},Array.apply(Array,Array(8)).map(function(){return t("span",{attrs:{class:"bubble-item"}})}))}},CIRCLES:{render:function(t){return t("span",{attrs:{class:"loading-circles"}},Array.apply(Array,Array(8)).map(function(){return t("span",{attrs:{class:"circle-item"}})}))}},DEFAULT:{render:function(t){return t("i",{attrs:{class:"loading-default"}})}},SPIRAL:{render:function(t){return t("i",{attrs:{class:"loading-spiral"}})}},WAVEDOTS:{render:function(t){return t("span",{attrs:{class:"loading-wave-dots"}},Array.apply(Array,Array(5)).map(function(){return t("span",{attrs:{class:"wave-item"}})}))}}};function f(t,e,n,i,r,a,o,s){var l,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),a&&(d._scopeId="data-v-"+a),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(d.functional){d._injectStyles=l;var c=d.render;d.render=function(t,e){return l.call(e),c(t,e)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:d}}var b=f({name:"Spinner",computed:{spinnerView:function(){return p[(this.$attrs.spinner||"").toUpperCase()]||this.spinnerInConfig},spinnerInConfig:function(){return d.slots.spinner&&"string"==typeof d.slots.spinner?{render:function(){return this._v(d.slots.spinner)}}:"object"===u()(d.slots.spinner)?d.slots.spinner:p[d.props.spinner.toUpperCase()]||p.DEFAULT}}},function(){var t=this.$createElement;return(this._self._c||t)(this.spinnerView,{tag:"component"})},[],!1,function(t){var e=n(5);e.__inject__&&e.__inject__(t)},"46b20d22",null);b.options.__file="Spinner.vue";var h=b.exports;function m(t){"production"!==d.mode&&console.warn("[Vue-infinite-loading warn]: ".concat(t))}function g(t){console.error("[Vue-infinite-loading error]: ".concat(t))}var v={timers:[],caches:[],throttle:function(t){var e=this;-1===this.caches.indexOf(t)&&(this.caches.push(t),this.timers.push(setTimeout(function(){t(),e.caches.splice(e.caches.indexOf(t),1),e.timers.shift()},d.system.throttleLimit)))},reset:function(){this.timers.forEach(function(t){clearTimeout(t)}),this.timers.length=0,this.caches=[]}},y={isChecked:!1,timer:null,times:0,track:function(){var t=this;this.times+=1,clearTimeout(this.timer),this.timer=setTimeout(function(){t.isChecked=!0},d.system.loopCheckTimeout),this.times>d.system.loopCheckMaxCalls&&(g(o.INFINITE_LOOP),this.isChecked=!0)}},w={key:"_infiniteScrollHeight",getScrollElm:function(t){return t===window?document.documentElement:t},save:function(t){var e=this.getScrollElm(t);e[this.key]=e.scrollHeight},restore:function(t){var e=this.getScrollElm(t);"number"==typeof e[this.key]&&(e.scrollTop=e.scrollHeight-e[this.key]+e.scrollTop),this.remove(e)},remove:function(t){void 0!==t[this.key]&&delete t[this.key]}};function x(t){return t.replace(/[A-Z]/g,function(t){return"-".concat(t.toLowerCase())})}function k(t){return t.offsetWidth+t.offsetHeight>0}var S=f({name:"InfiniteLoading",data:function(){return{scrollParent:null,scrollHandler:null,isFirstLoad:!0,status:s.READY,slots:d.slots}},components:{Spinner:h},computed:{isShowSpinner:function(){return this.status===s.LOADING},isShowError:function(){return this.status===s.ERROR},isShowNoResults:function(){return this.status===s.COMPLETE&&this.isFirstLoad},isShowNoMore:function(){return this.status===s.COMPLETE&&!this.isFirstLoad},slotStyles:function(){var t=this,e={};return Object.keys(d.slots).forEach(function(n){var i=x(n);(!t.$slots[i]&&!d.slots[n].render||t.$slots[i]&&!t.$slots[i][0].tag)&&(e[n]=l)}),e}},props:{distance:{type:Number,default:d.props.distance},spinner:String,direction:{type:String,default:"bottom"},forceUseInfiniteWrapper:{type:[Boolean,String],default:d.props.forceUseInfiniteWrapper},identifier:{default:+new Date},onInfinite:Function},watch:{identifier:function(){this.stateChanger.reset()}},mounted:function(){var t=this;this.$watch("forceUseInfiniteWrapper",function(){t.scrollParent=t.getScrollParent()},{immediate:!0}),this.scrollHandler=function(e){t.status===s.READY&&(e&&e.constructor===Event&&k(t.$el)?v.throttle(t.attemptLoad):t.attemptLoad())},setTimeout(function(){t.scrollHandler(),t.scrollParent.addEventListener("scroll",t.scrollHandler,r)},1),this.$on("$InfiniteLoading:loaded",function(e){t.isFirstLoad=!1,"top"===t.direction&&t.$nextTick(function(){w.restore(t.scrollParent)}),t.status===s.LOADING&&t.$nextTick(t.attemptLoad.bind(null,!0)),e&&e.target===t||m(a.STATE_CHANGER)}),this.$on("$InfiniteLoading:complete",function(e){t.status=s.COMPLETE,t.$nextTick(function(){t.$forceUpdate()}),t.scrollParent.removeEventListener("scroll",t.scrollHandler,r),e&&e.target===t||m(a.STATE_CHANGER)}),this.$on("$InfiniteLoading:reset",function(e){t.status=s.READY,t.isFirstLoad=!0,w.remove(t.scrollParent),t.scrollParent.addEventListener("scroll",t.scrollHandler,r),setTimeout(function(){v.reset(),t.scrollHandler()},1),e&&e.target===t||m(a.IDENTIFIER)}),this.stateChanger={loaded:function(){t.$emit("$InfiniteLoading:loaded",{target:t})},complete:function(){t.$emit("$InfiniteLoading:complete",{target:t})},reset:function(){t.$emit("$InfiniteLoading:reset",{target:t})},error:function(){t.status=s.ERROR,v.reset()}},this.onInfinite&&m(a.INFINITE_EVENT)},deactivated:function(){this.status===s.LOADING&&(this.status=s.READY),this.scrollParent.removeEventListener("scroll",this.scrollHandler,r)},activated:function(){this.scrollParent.addEventListener("scroll",this.scrollHandler,r)},methods:{attemptLoad:function(t){var e=this;this.status!==s.COMPLETE&&k(this.$el)&&this.getCurrentDistance()<=this.distance?(this.status=s.LOADING,"top"===this.direction&&this.$nextTick(function(){w.save(e.scrollParent)}),"function"==typeof this.onInfinite?this.onInfinite.call(null,this.stateChanger):this.$emit("infinite",this.stateChanger),!t||this.forceUseInfiniteWrapper||y.isChecked||y.track()):this.status===s.LOADING&&(this.status=s.READY)},getCurrentDistance:function(){var t;"top"===this.direction?t="number"==typeof this.scrollParent.scrollTop?this.scrollParent.scrollTop:this.scrollParent.pageYOffset:t=this.$el.getBoundingClientRect().top-(this.scrollParent===window?window.innerHeight:this.scrollParent.getBoundingClientRect().bottom);return t},getScrollParent:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$el;return"string"==typeof this.forceUseInfiniteWrapper&&(t=e.querySelector(this.forceUseInfiniteWrapper)),t||("BODY"===e.tagName?t=window:!this.forceUseInfiniteWrapper&&["scroll","auto"].indexOf(getComputedStyle(e).overflowY)>-1?t=e:(e.hasAttribute("infinite-wrapper")||e.hasAttribute("data-infinite-wrapper"))&&(t=e)),t||this.getScrollParent(e.parentNode)}},destroyed:function(){!this.status!==s.COMPLETE&&(v.reset(),w.remove(this.scrollParent),this.scrollParent.removeEventListener("scroll",this.scrollHandler,r))}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"infinite-loading-container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowSpinner,expression:"isShowSpinner"}],staticClass:"infinite-status-prompt",style:t.slotStyles.spinner},[t._t("spinner",[n("spinner",{attrs:{spinner:t.spinner}})])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowNoResults,expression:"isShowNoResults"}],staticClass:"infinite-status-prompt",style:t.slotStyles.noResults},[t._t("no-results",[t.slots.noResults.render?n(t.slots.noResults,{tag:"component"}):[t._v(t._s(t.slots.noResults))]])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowNoMore,expression:"isShowNoMore"}],staticClass:"infinite-status-prompt",style:t.slotStyles.noMore},[t._t("no-more",[t.slots.noMore.render?n(t.slots.noMore,{tag:"component"}):[t._v(t._s(t.slots.noMore))]])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowError,expression:"isShowError"}],staticClass:"infinite-status-prompt",style:t.slotStyles.error},[t._t("error",[t.slots.error.render?n(t.slots.error,{tag:"component",attrs:{trigger:t.attemptLoad}}):[t._v("\n        "+t._s(t.slots.error)+"\n        "),n("br"),t._v(" "),n("button",{staticClass:"btn-try-infinite",domProps:{textContent:t._s(t.slots.errorBtnText)},on:{click:t.attemptLoad}})]],{trigger:t.attemptLoad})],2)])},[],!1,function(t){var e=n(7);e.__inject__&&e.__inject__(t)},"46b21138",null);S.options.__file="InfiniteLoading.vue";var E=S.exports;function _(t){d.mode=t.config.productionTip?"development":"production"}Object.defineProperty(E,"install",{configurable:!1,enumerable:!1,value:function(t,e){Object.assign(d.props,e&&e.props),Object.assign(d.slots,e&&e.slots),Object.assign(d.system,e&&e.system),t.component("infinite-loading",E),_(t)}}),"undefined"!=typeof window&&window.Vue&&(window.Vue.component("infinite-loading",E),_(window.Vue));e.default=E}])});

/***/ })

}]);
//# sourceMappingURL=vue-1.js.map?v=78e84771248f15dee8c8