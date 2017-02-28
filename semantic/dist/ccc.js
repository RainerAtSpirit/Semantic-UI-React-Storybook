(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mobx"));
	else if(typeof define === 'function' && define.amd)
		define("ccc", ["mobx"], factory);
	else if(typeof exports === 'object')
		exports["ccc"] = factory(require("mobx"));
	else
		root["ccc"] = factory(root["mobx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(74);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*! @preserve
	 *
	 * tcomb.js - Type checking and DDD for JavaScript
	 *
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2014-2016 Giulio Canti
	 *
	 */
	
	// core
	var t = __webpack_require__(2);
	
	// types
	t.Any = __webpack_require__(33);
	t.Array = __webpack_require__(165);
	t.Boolean = __webpack_require__(52);
	t.Date = __webpack_require__(166);
	t.Error = __webpack_require__(167);
	t.Function = __webpack_require__(26);
	t.Nil = __webpack_require__(53);
	t.Number = __webpack_require__(54);
	t.Integer = __webpack_require__(168);
	t.IntegerT = t.Integer;
	t.Object = __webpack_require__(169);
	t.RegExp = __webpack_require__(170);
	t.String = __webpack_require__(34);
	t.Type = __webpack_require__(171);
	t.TypeT = t.Type;
	
	// short alias are deprecated
	t.Arr = t.Array;
	t.Bool = t.Boolean;
	t.Dat = t.Date;
	t.Err = t.Error;
	t.Func = t.Function;
	t.Num = t.Number;
	t.Obj = t.Object;
	t.Re = t.RegExp;
	t.Str = t.String;
	
	// combinators
	t.dict = __webpack_require__(35);
	t.declare = __webpack_require__(172);
	t.enums = __webpack_require__(174);
	t.irreducible = __webpack_require__(8);
	t.list = __webpack_require__(60);
	t.maybe = __webpack_require__(183);
	t.refinement = __webpack_require__(37);
	t.struct = __webpack_require__(184);
	t.tuple = __webpack_require__(62);
	t.union = __webpack_require__(185);
	t.func = __webpack_require__(176);
	t.intersection = __webpack_require__(178);
	t.subtype = t.refinement;
	t.inter = __webpack_require__(177); // IE8 alias
	t['interface'] = t.inter;
	
	// functions
	t.assert = t;
	t.update = __webpack_require__(186);
	t.mixin = __webpack_require__(36);
	t.isType = __webpack_require__(7);
	t.is = __webpack_require__(13);
	t.getTypeName = __webpack_require__(4);
	t.match = __webpack_require__(182);
	
	module.exports = t;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(6);
	var isNil = __webpack_require__(11);
	var fail = __webpack_require__(175);
	var stringify = __webpack_require__(61);
	
	function assert(guard, message) {
	  if (guard !== true) {
	    if (isFunction(message)) { // handle lazy messages
	      message = message();
	    }
	    else if (isNil(message)) { // use a default message
	      message = 'Assert failed (turn on "Pause on exceptions" in your Source panel)';
	    }
	    assert.fail(message);
	  }
	}
	
	assert.fail = fail;
	assert.stringify = stringify;
	
	module.exports = assert;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var isType = __webpack_require__(7);
	var getFunctionName = __webpack_require__(23);
	
	module.exports = function getTypeName(ctor) {
	  if (isType(ctor)) {
	    return ctor.displayName;
	  }
	  return getFunctionName(ctor);
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AjaxClient = exports.FilterGroup = exports.FilterLogic = exports.FilterExpression = exports.ApiCall = exports.CollectionOptions = exports.Sort = exports.SortExpression = exports.SortDir = undefined;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SortDir = exports.SortDir = _tcomb.enums.of(['asc', 'desc'], 'SortDir');
	
	var SortExpression = exports.SortExpression = _tcomb2.default.interface({
	  dir: SortDir,
	  field: _tcomb2.default.String
	}, 'SortExpression');
	
	var Sort = exports.Sort = _tcomb2.default.list(SortExpression, 'Sort');
	
	var CollectionOptions = exports.CollectionOptions = _tcomb2.default.interface({
	  expand: _tcomb2.default.maybe(_tcomb2.default.list(_tcomb2.default.String)),
	  select: _tcomb2.default.maybe(_tcomb2.default.list(_tcomb2.default.String)),
	  orderby: _tcomb2.default.maybe(Sort),
	  filter: _tcomb2.default.maybe(_tcomb2.default.interface({})),
	  top: _tcomb2.default.maybe(_tcomb2.default.Number),
	  parse: _tcomb2.default.maybe(_tcomb2.default.Function),
	  serialize: _tcomb2.default.maybe(_tcomb2.default.Function)
	}, 'CollectionOptions');
	
	var ApiCall = exports.ApiCall = _tcomb2.default.interface({
	  abort: _tcomb2.default.Function,
	  promise: Promise
	}, 'ApiCall');
	
	var FilterExpression = exports.FilterExpression = _tcomb2.default.interface({
	  field: _tcomb2.default.String,
	  operator: _tcomb2.default.String,
	  value: _tcomb2.default.Any
	}, 'FilterExpression');
	
	var FilterLogic = exports.FilterLogic = _tcomb.enums.of(['or', 'and'], 'FilterLogic');
	
	// recursive
	
	var FilterGroup = exports.FilterGroup = _tcomb2.default.declare('FilterGroup');
	
	var AjaxClient = exports.AjaxClient = _tcomb2.default.interface({
	  read: _tcomb2.default.Function,
	  create: _tcomb2.default.Function,
	  update: _tcomb2.default.Function,
	  destroy: _tcomb2.default.Function
	}, 'AjaxClient');
	
	FilterGroup.define(_tcomb2.default.interface({
	  logic: FilterLogic,
	  filters: _tcomb2.default.list(_tcomb2.default.union([FilterExpression, FilterGroup]))
	}))

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function isFunction(x) {
	  return typeof x === 'function';
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(6);
	var isObject = __webpack_require__(16);
	
	module.exports = function isType(x) {
	  return isFunction(x) && isObject(x.meta);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var isString = __webpack_require__(28);
	var isFunction = __webpack_require__(6);
	var forbidNewOperator = __webpack_require__(22);
	
	module.exports = function irreducible(name, predicate) {
	
	  if (false) {
	    assert(isString(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to irreducible(name, predicate) (expected a string)'; });
	    assert(isFunction(predicate), 'Invalid argument predicate ' + assert.stringify(predicate) + ' supplied to irreducible(name, predicate) (expected a function)');
	  }
	
	  function Irreducible(value, path) {
	
	    if (false) {
	      forbidNewOperator(this, Irreducible);
	      path = path || [name];
	      assert(predicate(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
	    }
	
	    return value;
	  }
	
	  Irreducible.meta = {
	    kind: 'irreducible',
	    name: name,
	    predicate: predicate,
	    identity: true
	  };
	
	  Irreducible.displayName = name;
	
	  Irreducible.is = predicate;
	
	  return Irreducible;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _isArray2 = __webpack_require__(19);
	
	var _isArray3 = _interopRequireDefault(_isArray2);
	
	var _cloneDeep2 = __webpack_require__(47);
	
	var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _mobx = __webpack_require__(3);
	
	var _mobxUtils = __webpack_require__(160);
	
	var _Transport = __webpack_require__(39);
	
	var _fn = __webpack_require__(40);
	
	var _types = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Collections = function () {
	  function Collections(appId, url) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    _classCallCheck(this, Collections);
	
	    _assert(appId, _tcomb2.default.String, 'appId');
	
	    _assert(url, _tcomb2.default.String, 'url');
	
	    _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	    this.appId = appId;
	    this.baseUrl = url;
	    this.transport = (0, _Transport.createTransport)(appId, url);
	    this._pristineData = [];
	
	    // if (typeof options.parse === 'function') {
	    //   this.parse = options.parse
	    //   delete options.parse
	    // }
	    //
	    // if (typeof options.serialize === 'function') {
	    //   this.serialize = options.serialize
	    //   delete options.serialize
	    // }
	
	    (0, _mobx.extendObservable)(this, {
	      data: [],
	      isRequesting: false,
	      isSilent: false,
	      $nextLink: '',
	      $filter: {},
	      $orderby: [],
	      $select: [],
	      $expand: [],
	      $top: 30,
	      get hasChanges() {
	        var ret = function () {
	          return this.data.findIndex(function (item) {
	            return item.isDirty || item.isNew;
	          }) > -1;
	        }.call(this);
	
	        _assert(ret, _tcomb2.default.Boolean, 'return value');
	
	        return ret;
	      },
	      get canReadMore() {
	        var ret = function () {
	          // Todo: @Rick: Remove nextLink if there are no more items
	          return this.$nextLink !== '' && this.data.length % this.$top === 0;
	        }.call(this);
	
	        _assert(ret, _tcomb2.default.Boolean, 'return value');
	
	        return ret;
	      },
	      add: (0, _mobx.action)(this.add),
	      expand: (0, _mobx.action)(this.expand),
	      select: (0, _mobx.action)(this.select),
	      orderby: (0, _mobx.action)(this.orderby),
	      filter: (0, _mobx.action)(this.filter),
	      top: (0, _mobx.action)(this.top),
	      query: (0, _mobx.action)(this.query),
	      read: (0, _mobx.action)(this.read),
	      readMore: (0, _mobx.action)(this.readMore),
	      remove: (0, _mobx.action)(this.remove),
	      sync: (0, _mobx.action)(this.sync),
	      processResponse: (0, _mobx.action)(this.processResponse),
	      // alias
	      sort: (0, _mobx.action)(this.orderby)
	    });
	
	    this.query(options, true);
	  }
	
	  /**
	   * returns itemModel at specified position in instance.data
	   * @returns {*} itemModel
	   */
	
	
	  _createClass(Collections, [{
	    key: 'at',
	    value: function at(pos) {
	      _assert(pos, _tcomb2.default.Number, 'pos');
	
	      var ret = function (pos) {
	        if (this.data.length < pos + 1) {
	          return null;
	        }
	        return this.data[pos];
	      }.call(this, pos);
	
	      _assert(ret, _tcomb2.default.union([_tcomb2.default.Any, _tcomb2.default.Nil]), 'return value');
	
	      return ret;
	    }
	  }, {
	    key: 'add',
	    value: function add(item) {
	      _assert(item, _tcomb2.default.interface({
	        Id: _tcomb2.default.maybe(_tcomb2.default.String),
	        isNew: _tcomb2.default.maybe(_tcomb2.default.Boolean)
	      }), 'item');
	
	      var ret = function (item) {
	        if (!item.hasOwnProperty('Id')) {
	          Object.assign(item, {
	            Id: (0, _fn.guid)(),
	            isNew: true
	          });
	        }
	        var model = (0, _mobxUtils.createViewModel)((0, _mobx.observable)(item));
	        this.data.unshift(model);
	
	        return model;
	      }.call(this, item);
	
	      _assert(ret, _tcomb2.default.Any, 'return value');
	
	      return ret;
	    }
	
	    /**
	     * returns itemModel with specified GUID
	     * @param id
	     * @returns {null}
	     */
	
	  }, {
	    key: 'get',
	    value: function get(id) {
	      _assert(id, _tcomb2.default.String, 'id');
	
	      var ret = function (id) {
	        var item = this.data.filter(function (item) {
	          return item.Id === id;
	        });
	        return item && item.length === 1 ? item[0] : null;
	      }.call(this, id);
	
	      _assert(ret, _tcomb2.default.union([_tcomb2.default.Any, _tcomb2.default.Nil]), 'return value');
	
	      return ret;
	    }
	  }, {
	    key: 'getPristineResponse',
	    value: function getPristineResponse() {
	      return this._pristineResponse;
	    }
	  }, {
	    key: 'getPristineData',
	    value: function getPristineData() {
	      return this._pristineData;
	    }
	  }, {
	    key: 'expand',
	    value: function expand(options) {
	      _assert(options, _tcomb2.default.maybe(_tcomb2.default.union([_tcomb2.default.list(_tcomb2.default.String), _tcomb2.default.String])), 'options');
	
	      if (!options) {
	        return (0, _mobx.toJS)(this.$expand);
	      }
	
	      this.$expand = (0, _fn.normalizeArrayOrString)(options);
	      this.data = [];
	
	      return this.read();
	    }
	  }, {
	    key: 'select',
	    value: function select(options) {
	      _assert(options, _tcomb2.default.maybe(_tcomb2.default.union([_tcomb2.default.list(_tcomb2.default.String), _tcomb2.default.String])), 'options');
	
	      if (!options) {
	        return (0, _mobx.toJS)(this.$select);
	      }
	
	      this.$select = (0, _fn.normalizeArrayOrString)(options);
	      this.data = [];
	
	      return this.read();
	    }
	  }, {
	    key: 'top',
	    value: function top(options) {
	      _assert(options, _tcomb2.default.maybe(_tcomb2.default.Number), 'options');
	
	      if (!options) {
	        return (0, _mobx.toJS)(this.$top);
	      }
	
	      this.$top = options;
	      this.data = [];
	
	      return this.read();
	    }
	  }, {
	    key: 'orderby',
	    value: function orderby(options) {
	      var dir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
	
	      _assert(options, _tcomb2.default.maybe(_tcomb2.default.union([_types.Sort, _types.SortExpression, _tcomb2.default.String])), 'options');
	
	      _assert(dir, _tcomb2.default.maybe(_types.SortDir), 'dir');
	
	      if (!options) {
	        return (0, _mobx.toJS)(this.$orderby);
	      }
	      this.$orderby = (0, _fn.normalizeSort)(options, dir);
	      this.data = [];
	
	      return this.read();
	    }
	  }, {
	    key: 'filter',
	    value: function filter(options) {
	      _assert(options, _tcomb2.default.maybe(_types.FilterGroup), 'options');
	
	      if (!options) {
	        return (0, _mobx.toJS)(this.$filter);
	      }
	      this.$filter = options;
	      this.data = [];
	
	      return this.read();
	    }
	  }, {
	    key: 'query',
	    value: function query() {
	      var _this = this;
	
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      var silent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      _assert(options, _tcomb2.default.maybe(_tcomb2.default.interface({})), 'options');
	
	      _assert(silent, _tcomb2.default.Boolean, 'silent');
	
	      this.isSilent = silent;
	      var allowedOdataVerbs = ['select', 'orderby', 'sort', 'expand', 'top', 'filter'];
	
	      (0, _mobx.runInAction)(function () {
	        allowedOdataVerbs.forEach(function (key) {
	          if (key === 'sort') {
	            key = 'orderby';
	          }
	          if (options && options.hasOwnProperty(key)) {
	            // setting observable directly not calling methods
	            // $FlowFixMe Class properties are not indexable https://github.com/facebook/flow/issues/1730
	            _this['$' + key] = options[key];
	          }
	        });
	      });
	
	      if (this.isSilent) {
	        this.isSilent = !this.isSilent;
	        return;
	      }
	
	      return this.read();
	    }
	  }, {
	    key: 'parse',
	    value: function parse(resp) {
	      _assert(resp, _tcomb2.default.Any, 'resp');
	
	      return resp;
	    }
	  }, {
	    key: 'serialize',
	    value: function serialize(data) {
	      _assert(data, _tcomb2.default.Any, 'data');
	
	      return data;
	    }
	  }, {
	    key: 'processResponse',
	    value: function processResponse(resp) {
	      _assert(resp, _tcomb2.default.Any, 'resp');
	
	      this._pristineResponse = (0, _cloneDeep3.default)(resp);
	      var data = (0, _isArray3.default)(resp.value) ? resp.value : [resp.value];
	      var parsedData = this.parse(data);
	      // append data
	      this._pristineData = this._pristineData.concat((0, _cloneDeep3.default)(parsedData));
	
	      var nextLink = checkNextLink(resp);
	
	      this.isRequesting = false;
	      this.$nextLink = nextLink;
	
	      var result = parsedData.map(function (item) {
	        return (0, _mobxUtils.createViewModel)((0, _mobx.observable)(item));
	      });
	
	      // append data in a single operation
	      this.data = this.data.concat(result);
	
	      // return the store
	      return this;
	
	      // remove leading hostname/protocol
	      function checkNextLink(response) {
	        var link = response ? response['@odata.nextLink'] : '';
	
	        if (link) {
	          return link.split('?')[1];
	        }
	
	        return '';
	      }
	    }
	  }, {
	    key: 'read',
	    value: function read() {
	      var ret = function () {
	        this.isRequesting = true;
	        var options = getOptions.call(this);
	
	        return this.transport.read(options).then(this.processResponse.bind(this));
	
	        function getOptions() {
	          return {
	            top: (0, _mobx.toJS)(this.$top),
	            orderby: (0, _mobx.toJS)(this.$orderby),
	            select: (0, _mobx.toJS)(this.$select),
	            expand: (0, _mobx.toJS)(this.$expand),
	            filter: (0, _mobx.toJS)(this.$filter)
	          };
	        }
	      }.call(this);
	
	      _assert(ret, Promise, 'return value');
	
	      return ret;
	    }
	  }, {
	    key: 'readMore',
	    value: function readMore() {
	      if (!this.canReadMore) {
	        return false;
	      }
	      this.isRequesting = true;
	      return this.transport.read({ nextLink: (0, _mobx.toJS)(this.$nextLink) }).then(this.processResponse.bind(this));
	    }
	  }, {
	    key: 'remove',
	    value: function remove(item) {
	      _assert(item, _tcomb2.default.Any, 'item');
	
	      var ret = function (item) {
	        if (this.data.find(function (ent) {
	          return item.Id === ent.Id;
	        })) {
	          item.Recycled = true;
	        }
	      }.call(this, item);
	
	      _assert(ret, _tcomb2.default.Nil, 'return value');
	
	      return ret;
	    }
	
	    // todo: Error handling
	
	  }, {
	    key: 'sync',
	    value: function sync() {
	      var ret = function () {
	        var _this2 = this;
	
	        if (!this.hasChanges) {
	          return Promise.resolve();
	        }
	
	        this.isRequesting = true;
	        var promises = [];
	        var dataCreated = this.data.filter(function (field) {
	          return field.isNew;
	        });
	        var dataUpdated = this.data.filter(function (field) {
	          return field.isDirty && !field.Recycled && !field.hasOwnProperty('isNew');
	        });
	        var dataRecycled = this.data.filter(function (field) {
	          return field.Recycled;
	        });
	
	        if (dataCreated.length) {
	          dataCreated.forEach(function (item) {
	            item.submit();
	            var data = (0, _mobx.toJS)(item.model);
	            delete data.isNew;
	            delete data.Id;
	            var serializedData = _this2.serialize(data);
	            var promise = _this2.transport.create(serializedData);
	            promises.push(promise);
	
	            promise.then((0, _mobx.action)('created', function (data) {
	              var itemVM = (0, _mobxUtils.createViewModel)((0, _mobx.observable)(data));
	              var index = _this2.data.findIndex(function (i) {
	                return i === item;
	              });
	              _this2.data.splice(index, 0, itemVM);
	              _this2.data.remove(item);
	            }).bind(_this2)).catch(function (error) {
	              console.log('error', error);
	            });
	          });
	        }
	
	        if (dataUpdated.length) {
	          dataUpdated.forEach(function (item) {
	            item.submit();
	            var data = (0, _mobx.toJS)(item.model);
	            var serializedData = _this2.serialize(data);
	            var promise = _this2.transport.update(serializedData);
	            promises.push(promise);
	
	            promise.then((0, _mobx.action)('updated', function (data) {
	              var itemVM = (0, _mobxUtils.createViewModel)((0, _mobx.observable)(data));
	              var index = _this2.data.findIndex(function (i) {
	                return i === item;
	              });
	              _this2.data.splice(index, 0, itemVM);
	              _this2.data.remove(item);
	            }).bind(_this2)).catch(function (error) {
	              console.log('error', error);
	            });
	          });
	        }
	
	        if (dataRecycled.length) {
	          dataRecycled.forEach(function (item) {
	            var promise = _this2.transport.destroy(item.Id);
	            promises.push(promise);
	
	            promise.then((0, _mobx.action)('destroyed', function (data) {
	              _this2.data.remove(item);
	            }).bind(_this2)).catch(function (error) {
	              console.log('error', error);
	            });
	          });
	        }
	
	        return Promise.all(promises).then((0, _mobx.action)(function () {
	          _this2.isRequesting = false;
	        })).catch((0, _mobx.action)(function () {
	          _this2.isRequesting = false;
	        }));
	      }.call(this);
	
	      _assert(ret, _tcomb2.default.union([Promise, _tcomb2.default.Nil]), 'return value');
	
	      return ret;
	    }
	  }]);
	
	  return Collections;
	}();
	
	exports.default = Collections;
	module.exports = exports['default'];

	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var isNil = __webpack_require__(11);
	var isString = __webpack_require__(28);
	
	module.exports = function isTypeName(name) {
	  return isNil(name) || isString(name);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function isNil(x) {
	  return x === null || x === void 0;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isType = __webpack_require__(7);
	var getFunctionName = __webpack_require__(23);
	var assert = __webpack_require__(2);
	var stringify = __webpack_require__(61);
	
	// creates an instance of a type, handling the optional new operator
	module.exports = function create(type, value, path) {
	  if (isType(type)) {
	    return !type.meta.identity && typeof value === 'object' && value !== null ? new type(value, path): type(value, path);
	  }
	
	  if (false) {
	    // here type should be a class constructor and value some instance, just check membership and return the value
	    path = path || [getFunctionName(type)];
	    assert(value instanceof type, function () { return 'Invalid value ' + stringify(value) + ' supplied to ' + path.join('/'); });
	  }
	
	  return value;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isType = __webpack_require__(7);
	
	// returns true if x is an instance of type
	module.exports = function is(x, type) {
	  if (isType(type)) {
	    return type.is(x);
	  }
	  return x instanceof type; // type should be a class constructor
	};


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function isArray(x) {
	  return Array.isArray ? Array.isArray(x) : x instanceof Array;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var Boolean = __webpack_require__(52);
	var isType = __webpack_require__(7);
	var getTypeName = __webpack_require__(4);
	
	// return true if the type constructor behaves like the identity function
	module.exports = function isIdentity(type) {
	  if (isType(type)) {
	    if (false) {
	      assert(Boolean.is(type.meta.identity), function () { return 'Invalid meta identity ' + assert.stringify(type.meta.identity) + ' supplied to type ' + getTypeName(type); });
	    }
	    return type.meta.identity;
	  }
	  // for tcomb the other constructors, like ES6 classes, are identity-like
	  return true;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isNil = __webpack_require__(11);
	var isArray = __webpack_require__(14);
	
	module.exports = function isObject(x) {
	  return !isNil(x) && typeof x === 'object' && !isArray(x);
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = strictIndexOf;


/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	exports.NOOP = function () { };
	exports.IDENTITY = function (_) { return _; };
	function invariant(cond, message) {
	    if (message === void 0) { message = "Illegal state"; }
	    if (!cond)
	        throw new Error("[mobx-utils] " + message);
	}
	exports.invariant = invariant;
	var deprecatedMessages = [];
	function deprecated(msg) {
	    if (deprecatedMessages.indexOf(msg) !== -1)
	        return;
	    deprecatedMessages.push(msg);
	    console.error("[mobx-utils] Deprecated: " + msg);
	}
	exports.deprecated = deprecated;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var getTypeName = __webpack_require__(4);
	
	module.exports = function forbidNewOperator(x, type) {
	  assert(!(x instanceof type), function () { return 'Cannot use the new operator to instantiate the type ' + getTypeName(type); });
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function getFunctionName(f) {
	  return f.displayName || f.name || '<function' + f.length + '>';
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(48);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(42),
	    baseAssignValue = __webpack_require__(43);
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	
	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}
	
	module.exports = copyObject;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(8);
	var isFunction = __webpack_require__(6);
	
	module.exports = irreducible('Function', isFunction);


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function isBoolean(x) {
	  return x === true || x === false;
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function isString(x) {
	  return typeof x === 'string';
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ListModelManager = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.createListModelManager = createListModelManager;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _AjaxClient = __webpack_require__(38);
	
	var _AjaxClient2 = _interopRequireDefault(_AjaxClient);
	
	var _createModel = __webpack_require__(65);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var cache = {};
	var headerDefaults = {
	  accept: 'application/json;odata.metadata=minimal'
	};
	
	var ListModelManager = exports.ListModelManager = function () {
	  function ListModelManager(appId) {
	    _classCallCheck(this, ListModelManager);
	
	    _assert(appId, _tcomb2.default.String, 'appId');
	
	    this.listModels = {};
	
	    this.appId = appId;
	    this.headers = Object.assign({}, headerDefaults, { appId: appId });
	    this.proxy = new _AjaxClient2.default();
	  }
	
	  _createClass(ListModelManager, [{
	    key: 'getListModel',
	    value: function getListModel(connId, listId) {
	      var _this = this;
	
	      _assert(connId, _tcomb2.default.String, 'connId');
	
	      _assert(listId, _tcomb2.default.String, 'listId');
	
	      if (this.listModels[listId]) {
	        return Promise.resolve(this.listModels[listId]);
	      }
	
	      var url = '/odata/Connections(\'' + connId + '\')/Lists(\'' + listId + '\')?$expand=Fields,RelatedChildren($expand=Fields)';
	      var request = Object.assign({}, {
	        url: url,
	        headers: this.headers
	      });
	
	      var _proxy$read = this.proxy.read(request),
	          promise = _proxy$read.promise;
	
	      return promise.then(function (resp) {
	        if (resp && resp.hasOwnProperty('Fields')) {
	          _this.listModels[listId] = (0, _createModel.createModel)(resp.Fields);
	          return _this.listModels[listId];
	        }
	
	        return {};
	      });
	    }
	  }, {
	    key: 'importFields',
	    value: function importFields(listId, fields) {
	      _assert(listId, _tcomb2.default.String, 'listId');
	
	      _assert(fields, _tcomb2.default.list(_tcomb2.default.Object), 'fields');
	
	      // Todo Consider overwrite option
	      if (this.listModels[listId]) {
	        return this;
	      }
	
	      this.listModels[listId] = (0, _createModel.createModel)(fields);
	      return this.listModels[listId];
	    }
	  }]);
	
	  return ListModelManager;
	}();
	
	/**
	 * Create a ListModelManager instance
	 */
	
	
	function createListModelManager(appId) {
	  _assert(appId, _tcomb2.default.String, 'appId');
	
	  var ret = function (appId) {
	    if (cache[appId]) {
	      return cache[appId];
	    }
	
	    cache[appId] = new ListModelManager(appId);
	
	    return cache[appId];
	  }.call(this, appId);
	
	  _assert(ret, ListModelManager, 'return value');
	
	  return ret;
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var DEFAULT_CONNECTION_ID = exports.DEFAULT_CONNECTION_ID = 'E3CC8646-243C-4D95-BD84-67224112411D';

/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(8);
	
	module.exports = irreducible('Any', function () { return true; });


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(8);
	var isString = __webpack_require__(28);
	
	module.exports = irreducible('String', isString);


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(10);
	var isFunction = __webpack_require__(6);
	var getTypeName = __webpack_require__(4);
	var isIdentity = __webpack_require__(15);
	var isObject = __webpack_require__(16);
	var create = __webpack_require__(12);
	var is = __webpack_require__(13);
	
	function getDefaultName(domain, codomain) {
	  return '{[key: ' + getTypeName(domain) + ']: ' + getTypeName(codomain) + '}';
	}
	
	function dict(domain, codomain, name) {
	
	  if (false) {
	    assert(isFunction(domain), function () { return 'Invalid argument domain ' + assert.stringify(domain) + ' supplied to dict(domain, codomain, [name]) combinator (expected a type)'; });
	    assert(isFunction(codomain), function () { return 'Invalid argument codomain ' + assert.stringify(codomain) + ' supplied to dict(domain, codomain, [name]) combinator (expected a type)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to dict(domain, codomain, [name]) combinator (expected a string)'; });
	  }
	
	  var displayName = name || getDefaultName(domain, codomain);
	  var domainNameCache = getTypeName(domain);
	  var codomainNameCache = getTypeName(codomain);
	  var identity = isIdentity(domain) && isIdentity(codomain);
	
	  function Dict(value, path) {
	
	    if (true) {
	      if (identity) {
	        return value; // just trust the input if elements must not be hydrated
	      }
	    }
	
	    if (false) {
	      path = path || [displayName];
	      assert(isObject(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
	    }
	
	    var idempotent = true; // will remain true if I can reutilise the input
	    var ret = {}; // make a temporary copy, will be discarded if idempotent remains true
	    for (var k in value) {
	      if (value.hasOwnProperty(k)) {
	        k = create(domain, k, (  false ? path.concat(domainNameCache) : null ));
	        var actual = value[k];
	        var instance = create(codomain, actual, (  false ? path.concat(k + ': ' + codomainNameCache) : null ));
	        idempotent = idempotent && ( actual === instance );
	        ret[k] = instance;
	      }
	    }
	
	    if (idempotent) { // implements idempotency
	      ret = value;
	    }
	
	    if (false) {
	      Object.freeze(ret);
	    }
	
	    return ret;
	  }
	
	  Dict.meta = {
	    kind: 'dict',
	    domain: domain,
	    codomain: codomain,
	    name: name,
	    identity: identity
	  };
	
	  Dict.displayName = displayName;
	
	  Dict.is = function (x) {
	    if (!isObject(x)) {
	      return false;
	    }
	    for (var k in x) {
	      if (x.hasOwnProperty(k)) {
	        if (!is(k, domain) || !is(x[k], codomain)) {
	          return false;
	        }
	      }
	    }
	    return true;
	  };
	
	  Dict.update = function (instance, patch) {
	    return Dict(assert.update(instance, patch));
	  };
	
	  return Dict;
	}
	
	dict.getDefaultName = getDefaultName;
	module.exports = dict;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var isNil = __webpack_require__(11);
	var assert = __webpack_require__(2);
	
	// safe mixin, cannot override props unless specified
	module.exports = function mixin(target, source, overwrite) {
	  if (isNil(source)) { return target; }
	  for (var k in source) {
	    if (source.hasOwnProperty(k)) {
	      if (overwrite !== true) {
	        if (false) {
	          assert(!target.hasOwnProperty(k) || target[k] === source[k], function () { return 'Invalid call to mixin(target, source, [overwrite]): cannot overwrite property "' + k + '" of target object'; });
	        }
	      }
	      target[k] = source[k];
	    }
	  }
	  return target;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(10);
	var isFunction = __webpack_require__(6);
	var forbidNewOperator = __webpack_require__(22);
	var isIdentity = __webpack_require__(15);
	var create = __webpack_require__(12);
	var is = __webpack_require__(13);
	var getTypeName = __webpack_require__(4);
	var getFunctionName = __webpack_require__(23);
	
	function getDefaultName(type, predicate) {
	  return '{' + getTypeName(type) + ' | ' + getFunctionName(predicate) + '}';
	}
	
	function refinement(type, predicate, name) {
	
	  if (false) {
	    assert(isFunction(type), function () { return 'Invalid argument type ' + assert.stringify(type) + ' supplied to refinement(type, predicate, [name]) combinator (expected a type)'; });
	    assert(isFunction(predicate), function () { return 'Invalid argument predicate supplied to refinement(type, predicate, [name]) combinator (expected a function)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to refinement(type, predicate, [name]) combinator (expected a string)'; });
	  }
	
	  var displayName = name || getDefaultName(type, predicate);
	  var identity = isIdentity(type);
	
	  function Refinement(value, path) {
	
	    if (false) {
	      if (identity) {
	        forbidNewOperator(this, Refinement);
	      }
	      path = path || [displayName];
	    }
	
	    var x = create(type, value, path);
	
	    if (false) {
	      assert(predicate(x), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
	    }
	
	    return x;
	  }
	
	  Refinement.meta = {
	    kind: 'subtype',
	    type: type,
	    predicate: predicate,
	    name: name,
	    identity: identity
	  };
	
	  Refinement.displayName = displayName;
	
	  Refinement.is = function (x) {
	    return is(x, type) && predicate(x);
	  };
	
	  Refinement.update = function (instance, patch) {
	    return Refinement(assert.update(instance, patch));
	  };
	
	  return Refinement;
	}
	
	refinement.getDefaultName = getDefaultName;
	module.exports = refinement;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _reqwest = __webpack_require__(164);
	
	var _reqwest2 = _interopRequireDefault(_reqwest);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Response = _tcomb2.default.interface({
	  abort: _tcomb2.default.Function,
	  promise: Promise
	}, 'Response');
	
	function ajax(options) {
	  _assert(options, _tcomb2.default.interface({}), 'options');
	
	  var ret = function (options) {
	    var request = (0, _reqwest2.default)(Object.assign({}, options, {
	      type: 'json',
	      contentType: 'application/json'
	    }));
	    var promise = new Promise(function (resolve, reject) {
	      request.then(function (resp) {
	        // Performing date parsing here as reqwest has no option to specify JSON.parse reviver
	        var jsonString = JSON.stringify(resp);
	        resolve(parseWithDate(jsonString));
	      }).fail(function (error) {
	        var message = error && error.responseText ? JSON.parse(error.responseText) : {};
	        reject(message);
	      });
	    });
	
	    var abort = function abort() {
	      return request.abort();
	    };
	
	    return { abort: abort, promise: promise };
	  }.call(this, options);
	
	  _assert(ret, Response, 'return value');
	
	  return ret;
	}
	
	var AjaxClient = function () {
	  function AjaxClient() {
	    _classCallCheck(this, AjaxClient);
	  }
	
	  _createClass(AjaxClient, [{
	    key: 'read',
	    value: function read(options) {
	      _assert(options, _tcomb2.default.interface({}), 'options');
	
	      var ret = function (options) {
	        return ajax(Object.assign({}, options, { method: 'get' }));
	      }.call(this, options);
	
	      _assert(ret, Response, 'return value');
	
	      return ret;
	    }
	  }, {
	    key: 'create',
	    value: function create(options) {
	      _assert(options, _tcomb2.default.interface({}), 'options');
	
	      var ret = function (options) {
	        return ajax(Object.assign({}, options, { method: 'post' }));
	      }.call(this, options);
	
	      _assert(ret, Response, 'return value');
	
	      return ret;
	    }
	  }, {
	    key: 'update',
	    value: function update(options) {
	      _assert(options, _tcomb2.default.interface({}), 'options');
	
	      var ret = function (options) {
	        return ajax(Object.assign({}, options, { method: 'put' }));
	      }.call(this, options);
	
	      _assert(ret, Response, 'return value');
	
	      return ret;
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy(options) {
	      _assert(options, _tcomb2.default.interface({}), 'options');
	
	      var ret = function (options) {
	        return ajax(Object.assign({}, options, { method: 'delete' }));
	      }.call(this, options);
	
	      _assert(ret, Response, 'return value');
	
	      return ret;
	    }
	  }]);
	
	  return AjaxClient;
	}();
	
	exports.default = AjaxClient;
	
	
	function parseWithDate(json) {
	  var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
	
	  return JSON.parse(json, dateParser);
	
	  function dateParser(key, value) {
	    if (typeof value === 'string') {
	      var a = reISO.exec(value);
	      if (a) {
	        return new Date(value);
	      }
	    }
	    return value;
	  }
	}
	module.exports = exports['default'];

	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Transport = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.createTransport = createTransport;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _mobx = __webpack_require__(3);
	
	var _AjaxClient = __webpack_require__(38);
	
	var _AjaxClient2 = _interopRequireDefault(_AjaxClient);
	
	var _parameterMap = __webpack_require__(70);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var headerDefaults = {
	  accept: 'application/json;odata.metadata=minimal'
	};
	// todo: Concurrency handling Etag If-Match header
	
	var Transport = exports.Transport = function () {
	  function Transport(appid, baseUrl) {
	    _classCallCheck(this, Transport);
	
	    _assert(appid, _tcomb2.default.String, 'appid');
	
	    _assert(baseUrl, _tcomb2.default.String, 'baseUrl');
	
	    this.proxy = new _AjaxClient2.default(baseUrl);
	    this.baseUrl = baseUrl;
	    this.headers = Object.assign({}, headerDefaults, { appid: appid });
	    (0, _mobx.extendObservable)(this, {
	      request: null,
	      error: null,
	      counter: {
	        create: 0,
	        update: 0,
	        read: 0,
	        destroy: 0
	      },
	      read: (0, _mobx.action)(this.read),
	      update: (0, _mobx.action)(this.update),
	      create: (0, _mobx.action)(this.create),
	      destroy: (0, _mobx.action)(this.destroy),
	      // alias
	      post: (0, _mobx.action)(this.create)
	    });
	  }
	
	  _createClass(Transport, [{
	    key: 'create',
	    value: function create() {
	      var _this = this;
	
	      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      _assert(data, _tcomb2.default.maybe(_tcomb2.default.interface({})), 'data');
	
	      var url = '' + this.baseUrl;
	      var request = Object.assign({}, {
	        url: url,
	        headers: this.headers,
	        data: JSON.stringify(data)
	      });
	
	      var _proxy$create = this.proxy.create(request),
	          promise = _proxy$create.promise;
	
	      this.counter.create++;
	      return promise.then((0, _mobx.action)(function () {
	        return _this.counter.create--;
	      })).then(function () {
	        return promise;
	      });
	    }
	  }, {
	    key: 'read',
	    value: function read() {
	      var _this2 = this;
	
	      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      _assert(data, _tcomb2.default.maybe(_tcomb2.default.interface({
	        nextLink: _tcomb2.default.maybe(_tcomb2.default.String)
	      })), 'data');
	
	      var url = getUrl(this.baseUrl, data);
	      var request = Object.assign({}, {
	        url: url,
	        headers: this.headers
	      });
	
	      var _proxy$read = this.proxy.read(request),
	          promise = _proxy$read.promise;
	
	      this.counter.read++;
	      return promise.then((0, _mobx.action)(function () {
	        return _this2.counter.read--;
	      })).then(function () {
	        return promise;
	      });
	
	      function getUrl(baseUrl) {
	        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	        _assert(params, _tcomb2.default.interface({}), 'params');
	
	        // $FlowFixMe https://github.com/facebook/flow/issues/1805
	        var strParams = params.hasOwnProperty('nextLink') ? params.nextLink : (0, _parameterMap.parameterMap)('read', params);
	
	        if (!strParams) {
	          return baseUrl;
	        }
	        var cleanBaseUrl = baseUrl.split('?')[0];
	
	        return cleanBaseUrl + '?' + strParams;
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update(data) {
	      var _this3 = this;
	
	      _assert(data, _tcomb2.default.interface({
	        Id: _tcomb2.default.String
	      }), 'data');
	
	      var url = this.baseUrl + '(\'' + data.Id + '\')';
	      var request = Object.assign({}, {
	        url: url,
	        headers: this.headers,
	        data: JSON.stringify(data)
	      });
	
	      var _proxy$update = this.proxy.update(request),
	          promise = _proxy$update.promise;
	
	      this.counter.update++;
	      return promise.then((0, _mobx.action)(function () {
	        return _this3.counter.update--;
	      })).then(function () {
	        return promise;
	      });
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy(id) {
	      var _this4 = this;
	
	      _assert(id, _tcomb2.default.String, 'id');
	
	      var url = this.baseUrl + '(\'' + id + '\')';
	      var request = Object.assign({}, {
	        url: url,
	        headers: this.headers
	      });
	
	      var _proxy$destroy = this.proxy.destroy(request),
	          promise = _proxy$destroy.promise;
	
	      this.counter.destroy++;
	      return promise.then((0, _mobx.action)(function () {
	        return _this4.counter.destroy--;
	      })).then(function () {
	        return promise;
	      });
	    }
	  }]);
	
	  return Transport;
	}();
	
	function createTransport(AppId, baseUrl) {
	  _assert(AppId, _tcomb2.default.String, 'AppId');
	
	  _assert(baseUrl, _tcomb2.default.String, 'baseUrl');
	
	  return new Transport(AppId, baseUrl);
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _normalizeArrayOrString = __webpack_require__(68);
	
	Object.keys(_normalizeArrayOrString).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _normalizeArrayOrString[key];
	    }
	  });
	});
	
	var _normalizeSort = __webpack_require__(69);
	
	Object.keys(_normalizeSort).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _normalizeSort[key];
	    }
	  });
	});
	
	var _guid = __webpack_require__(67);
	
	Object.keys(_guid).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _guid[key];
	    }
	  });
	});
	
	var _format = __webpack_require__(66);
	
	Object.keys(_format).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _format[key];
	    }
	  });
	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ActionConfigs = __webpack_require__(77);
	
	Object.keys(_ActionConfigs).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _ActionConfigs[key];
	    }
	  });
	});
	
	var _Applications = __webpack_require__(78);
	
	Object.keys(_Applications).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Applications[key];
	    }
	  });
	});
	
	var _Audits = __webpack_require__(79);
	
	Object.keys(_Audits).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Audits[key];
	    }
	  });
	});
	
	var _ChartConfigs = __webpack_require__(80);
	
	Object.keys(_ChartConfigs).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _ChartConfigs[key];
	    }
	  });
	});
	
	var _Connections = __webpack_require__(81);
	
	Object.keys(_Connections).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Connections[key];
	    }
	  });
	});
	
	var _Fields = __webpack_require__(82);
	
	Object.keys(_Fields).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Fields[key];
	    }
	  });
	});
	
	var _GridConfig = __webpack_require__(83);
	
	Object.keys(_GridConfig).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _GridConfig[key];
	    }
	  });
	});
	
	var _LayoutConfigs = __webpack_require__(84);
	
	Object.keys(_LayoutConfigs).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _LayoutConfigs[key];
	    }
	  });
	});
	
	var _LibraryConfigs = __webpack_require__(85);
	
	Object.keys(_LibraryConfigs).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _LibraryConfigs[key];
	    }
	  });
	});
	
	var _ListItems = __webpack_require__(86);
	
	Object.keys(_ListItems).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _ListItems[key];
	    }
	  });
	});
	
	var _Lists = __webpack_require__(87);
	
	Object.keys(_Lists).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Lists[key];
	    }
	  });
	});
	
	var _ViewConfigs = __webpack_require__(88);
	
	Object.keys(_ViewConfigs).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _ViewConfigs[key];
	    }
	  });
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(43),
	    eq = __webpack_require__(48);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}
	
	module.exports = assignValue;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(115);
	
	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}
	
	module.exports = baseAssignValue;


/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ },
/* 45 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(31);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(100);
	
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_SYMBOLS_FLAG = 4;
	
	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
	}
	
	module.exports = cloneDeep;


/***/ },
/* 48 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(31);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(106),
	    castSlice = __webpack_require__(108),
	    charsEndIndex = __webpack_require__(109),
	    charsStartIndex = __webpack_require__(110),
	    stringToArray = __webpack_require__(136),
	    toString = __webpack_require__(152);
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/**
	 * Removes leading and trailing whitespace or specified characters from `string`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to trim.
	 * @param {string} [chars=whitespace] The characters to trim.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {string} Returns the trimmed string.
	 * @example
	 *
	 * _.trim('  abc  ');
	 * // => 'abc'
	 *
	 * _.trim('-_-abc-_-', '_-');
	 * // => 'abc'
	 *
	 * _.map(['  foo  ', '  bar  '], _.trim);
	 * // => ['foo', 'bar']
	 */
	function trim(string, chars, guard) {
	  string = toString(string);
	  if (string && (guard || chars === undefined)) {
	    return string.replace(reTrim, '');
	  }
	  if (!string || !(chars = baseToString(chars))) {
	    return string;
	  }
	  var strSymbols = stringToArray(string),
	      chrSymbols = stringToArray(chars),
	      start = charsStartIndex(strSymbols, chrSymbols),
	      end = charsEndIndex(strSymbols, chrSymbols) + 1;
	
	  return castSlice(strSymbols, start, end).join('');
	}
	
	module.exports = trim;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mobx_1 = __webpack_require__(3);
	var utils_1 = __webpack_require__(21);
	/**
	 * `fromResource` creates an observable which current state can be inspected using `.current()`,
	 * and which can be kept in sync with some external datasource that can be subscribed to.
	 *
	 * The created observable will only subscribe to the datasource if it is in use somewhere,
	 * (un)subscribing when needed. To enable `fromResource` to do that two callbacks need to be provided,
	 * one to subscribe, and one to unsubscribe. The subscribe callback itself will receive a `sink` callback, which can be used
	 * to update the current state of the observable, allowing observes to react.
	 *
	 * Whatever is passed to `sink` will be returned by `current()`. The values passed to the sink will not be converted to
	 * observables automatically, but feel free to do so.
	 * It is the `current()` call itself which is being tracked,
	 * so make sure that you don't dereference to early.
	 *
	 * For inspiration, an example integration with the apollo-client on [github](https://github.com/apollostack/apollo-client/issues/503#issuecomment-241101379),
	 * or the [implementation](https://github.com/mobxjs/mobx-utils/blob/1d17cf7f7f5200937f68cc0b5e7ec7f3f71dccba/src/now.ts#L43-L57) of `mobxUtils.now`
	 *
	 * The following example code creates an observable that connects to a `dbUserRecord`,
	 * which comes from an imaginary database and notifies when it has changed.
	 *
	 * @example
	 * function createObservableUser(dbUserRecord) {
	 *   let currentSubscription;
	 *   return fromResource(
	 *     (sink) => {
	 *       // sink the current state
	 *       sink(dbUserRecord.fields)
	 *       // subscribe to the record, invoke the sink callback whenever new data arrives
	 *       currentSubscription = dbUserRecord.onUpdated(() => {
	 *         sink(dbUserRecord.fields)
	 *       })
	 *     },
	 *     () => {
	 *       // the user observable is not in use at the moment, unsubscribe (for now)
	 *       dbUserRecord.unsubscribe(currentSubscription)
	 *     }
	 *   )
	 * }
	 *
	 * // usage:
	 * const myUserObservable = createObservableUser(myDatabaseConnector.query("name = 'Michel'"))
	 *
	 * // use the observable in autorun
	 * autorun(() => {
	 *   // printed everytime the database updates its records
	 *   console.log(myUserObservable.current().displayName)
	 * })
	 *
	 * // ... or a component
	 * const userComponent = observer(({ user }) =>
	 *   <div>{user.current().displayName}</div>
	 * )
	 *
	 * @export
	 * @template T
	 * @param {(sink: (newValue: T) => void) => void} subscriber
	 * @param {IDisposer} [unsubscriber=NOOP]
	 * @param {T} [initialValue=undefined] the data that will be returned by `get()` until the `sink` has emitted its first data
	 * @returns {{
	 *     current(): T;
	 *     dispose(): void;
	 *     isAlive(): boolean;
	 * }}
	 */
	function fromResource(subscriber, unsubscriber, initialValue) {
	    if (unsubscriber === void 0) { unsubscriber = utils_1.NOOP; }
	    if (initialValue === void 0) { initialValue = undefined; }
	    var isActive = false;
	    var isDisposed = false;
	    var value = initialValue;
	    var suspender = function () {
	        if (isActive) {
	            isActive = false;
	            unsubscriber();
	        }
	    };
	    var atom = new mobx_1.Atom("ResourceBasedObservable", function () {
	        utils_1.invariant(!isActive && !isDisposed);
	        isActive = true;
	        subscriber(function (newValue) {
	            mobx_1.extras.allowStateChanges(true, function () {
	                value = newValue;
	                atom.reportChanged();
	            });
	        });
	    }, suspender);
	    return {
	        current: function () {
	            utils_1.invariant(!isDisposed, "subscribingObservable has already been disposed");
	            var isBeingTracked = atom.reportObserved();
	            if (!isBeingTracked && !isActive)
	                console.warn("Called `get` of an subscribingObservable outside a reaction. Current value will be returned but no new subscription has started");
	            return value;
	        },
	        dispose: function () {
	            isDisposed = true;
	            suspender();
	        },
	        isAlive: function () { return isActive; }
	    };
	}
	exports.fromResource = fromResource;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(8);
	var isBoolean = __webpack_require__(27);
	
	module.exports = irreducible('Boolean', isBoolean);


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(8);
	var isNil = __webpack_require__(11);
	
	module.exports = irreducible('Nil', isNil);


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(8);
	var isNumber = __webpack_require__(58);
	
	module.exports = irreducible('Number', isNumber);


/***/ },
/* 55 */
/***/ function(module, exports) {

	function assign(x, y) {
	  for (var k in y) {
	    if (y.hasOwnProperty(k)) {
	      x[k] = y[k];
	    }
	  }
	  return x;
	}
	
	module.exports = assign;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var isFunction = __webpack_require__(6);
	var isArray = __webpack_require__(14);
	var mixin = __webpack_require__(36);
	var isStruct = __webpack_require__(181);
	var isInterface = __webpack_require__(179);
	var isObject = __webpack_require__(16);
	var refinement = __webpack_require__(37);
	var decompose = __webpack_require__(173);
	
	function compose(predicates, unrefinedType) {
	  return predicates.reduce(function (type, predicate) {
	    return refinement(type, predicate);
	  }, unrefinedType);
	}
	
	function getProps(type) {
	  return isObject(type) ? type : type.meta.props;
	}
	
	function getDefaultProps(type) {
	  return isObject(type) ? null : type.meta.defaultProps;
	}
	
	function pushAll(arr, elements) {
	  Array.prototype.push.apply(arr, elements);
	}
	
	function extend(combinator, mixins, options) {
	  if (false) {
	    assert(isFunction(combinator), function () { return 'Invalid argument combinator supplied to extend(combinator, mixins, options), expected a function'; });
	    assert(isArray(mixins), function () { return 'Invalid argument mixins supplied to extend(combinator, mixins, options), expected an array'; });
	  }
	  var props = {};
	  var prototype = {};
	  var predicates = [];
	  var defaultProps = {};
	  mixins.forEach(function (x, i) {
	    var decomposition = decompose(x);
	    var unrefinedType = decomposition.unrefinedType;
	    if (false) {
	      assert(isObject(unrefinedType) || isStruct(unrefinedType) || isInterface(unrefinedType), function () { return 'Invalid argument mixins[' + i + '] supplied to extend(combinator, mixins, options), expected an object, struct, interface or a refinement (of struct or interface)'; });
	    }
	    pushAll(predicates, decomposition.predicates);
	    mixin(props, getProps(unrefinedType));
	    mixin(prototype, unrefinedType.prototype);
	    mixin(defaultProps, getDefaultProps(unrefinedType), true);
	  });
	  options = combinator.getOptions(options);
	  options.defaultProps = mixin(defaultProps, options.defaultProps, true);
	  var result = compose(predicates, combinator(props, options));
	  mixin(result.prototype, prototype);
	  return result;
	}
	
	module.exports = extend;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var getTypeName = __webpack_require__(4);
	
	function getDefaultInterfaceName(props) {
	  return '{' + Object.keys(props).map(function (prop) {
	    return prop + ': ' + getTypeName(props[prop]);
	  }).join(', ') + '}';
	}
	
	module.exports = getDefaultInterfaceName;


/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function isNumber(x) {
	  return typeof x === 'number' && isFinite(x) && !isNaN(x);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var isType = __webpack_require__(7);
	
	module.exports = function isUnion(x) {
	  return isType(x) && ( x.meta.kind === 'union' );
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(10);
	var isFunction = __webpack_require__(6);
	var getTypeName = __webpack_require__(4);
	var isIdentity = __webpack_require__(15);
	var create = __webpack_require__(12);
	var is = __webpack_require__(13);
	var isArray = __webpack_require__(14);
	
	function getDefaultName(type) {
	  return 'Array<' + getTypeName(type) + '>';
	}
	
	function list(type, name) {
	
	  if (false) {
	    assert(isFunction(type), function () { return 'Invalid argument type ' + assert.stringify(type) + ' supplied to list(type, [name]) combinator (expected a type)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to list(type, [name]) combinator (expected a string)'; });
	  }
	
	  var displayName = name || getDefaultName(type);
	  var typeNameCache = getTypeName(type);
	  var identity = isIdentity(type); // the list is identity iif type is identity
	
	  function List(value, path) {
	
	    if (true) {
	      if (identity) {
	        return value; // just trust the input if elements must not be hydrated
	      }
	    }
	
	    if (false) {
	      path = path || [displayName];
	      assert(isArray(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an array of ' + typeNameCache + ')'; });
	    }
	
	    var idempotent = true; // will remain true if I can reutilise the input
	    var ret = []; // make a temporary copy, will be discarded if idempotent remains true
	    for (var i = 0, len = value.length; i < len; i++ ) {
	      var actual = value[i];
	      var instance = create(type, actual, (  false ? path.concat(i + ': ' + typeNameCache) : null ));
	      idempotent = idempotent && ( actual === instance );
	      ret.push(instance);
	    }
	
	    if (idempotent) { // implements idempotency
	      ret = value;
	    }
	
	    if (false) {
	      Object.freeze(ret);
	    }
	
	    return ret;
	  }
	
	  List.meta = {
	    kind: 'list',
	    type: type,
	    name: name,
	    identity: identity
	  };
	
	  List.displayName = displayName;
	
	  List.is = function (x) {
	    return isArray(x) && x.every(function (e) {
	      return is(e, type);
	    });
	  };
	
	  List.update = function (instance, patch) {
	    return List(assert.update(instance, patch));
	  };
	
	  return List;
	}
	
	list.getDefaultName = getDefaultName;
	module.exports = list;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var getFunctionName = __webpack_require__(23);
	
	function replacer(key, value) {
	  if (typeof value === 'function') {
	    return getFunctionName(value);
	  }
	  return value;
	}
	
	module.exports = function stringify(x) {
	  try { // handle "Converting circular structure to JSON" error
	    return JSON.stringify(x, replacer, 2);
	  }
	  catch (e) {
	    return String(x);
	  }
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(10);
	var isFunction = __webpack_require__(6);
	var getTypeName = __webpack_require__(4);
	var isIdentity = __webpack_require__(15);
	var isArray = __webpack_require__(14);
	var create = __webpack_require__(12);
	var is = __webpack_require__(13);
	
	function getDefaultName(types) {
	  return '[' + types.map(getTypeName).join(', ') + ']';
	}
	
	function tuple(types, name) {
	
	  if (false) {
	    assert(isArray(types) && types.every(isFunction), function () { return 'Invalid argument types ' + assert.stringify(types) + ' supplied to tuple(types, [name]) combinator (expected an array of types)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to tuple(types, [name]) combinator (expected a string)'; });
	  }
	
	  var displayName = name || getDefaultName(types);
	  var identity = types.every(isIdentity);
	
	  function Tuple(value, path) {
	
	    if (true) {
	      if (identity) {
	        return value;
	      }
	    }
	
	    if (false) {
	      path = path || [displayName];
	      assert(isArray(value) && value.length === types.length, function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an array of length ' + types.length + ')'; });
	    }
	
	    var idempotent = true;
	    var ret = [];
	    for (var i = 0, len = types.length; i < len; i++) {
	      var expected = types[i];
	      var actual = value[i];
	      var instance = create(expected, actual, (  false ? path.concat(i + ': ' + getTypeName(expected)) : null ));
	      idempotent = idempotent && ( actual === instance );
	      ret.push(instance);
	    }
	
	    if (idempotent) { // implements idempotency
	      ret = value;
	    }
	
	    if (false) {
	      Object.freeze(ret);
	    }
	
	    return ret;
	  }
	
	  Tuple.meta = {
	    kind: 'tuple',
	    types: types,
	    name: name,
	    identity: identity
	  };
	
	  Tuple.displayName = displayName;
	
	  Tuple.is = function (x) {
	    return isArray(x) &&
	      x.length === types.length &&
	      types.every(function (type, i) {
	        return is(x[i], type);
	      });
	  };
	
	  Tuple.update = function (instance, patch) {
	    return Tuple(assert.update(instance, patch));
	  };
	
	  return Tuple;
	}
	
	tuple.getDefaultName = getDefaultName;
	module.exports = tuple;

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isArray2 = __webpack_require__(19);
	
	var _isArray3 = _interopRequireDefault(_isArray2);
	
	var _cloneDeep2 = __webpack_require__(47);
	
	var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // flow
	
	
	exports.createAggregationRequest = createAggregationRequest;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _mobx = __webpack_require__(3);
	
	var _Transport = __webpack_require__(39);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Perform aggregation request
	// This is a kind of one time store
	var AggregationRequest = function () {
	  function AggregationRequest(appId, config, format) {
	    _classCallCheck(this, AggregationRequest);
	
	    _assert(appId, _tcomb2.default.String, 'appId');
	
	    _assert(config, _tcomb2.default.Object, 'config');
	
	    _assert(format, _tcomb2.default.String, 'format');
	
	    this.baseUrl = config.Group.hasOwnProperty('SubGroupFields') ? '/api/Aggregation/MultiSeries' : '/api/Aggregation';
	    this.transport = (0, _Transport.createTransport)(appId, this.baseUrl);
	
	    this.appId = appId;
	    this.data = [];
	    this._pristineData = [];
	    this.config = config;
	    this.toJS = _mobx.toJS;
	
	    (0, _mobx.extendObservable)(this, {
	      isRequesting: true,
	      read: (0, _mobx.action)(this.read),
	      processResponse: (0, _mobx.action)(this.processResponse)
	    });
	  }
	
	  _createClass(AggregationRequest, [{
	    key: 'parse',
	    value: function parse(resp) {
	      _assert(resp, _tcomb2.default.Any, 'resp');
	
	      return resp;
	    }
	  }, {
	    key: 'serialize',
	    value: function serialize(data) {
	      _assert(data, _tcomb2.default.Any, 'data');
	
	      return data;
	    }
	  }, {
	    key: 'processResponse',
	    value: function processResponse(resp) {
	      _assert(resp, _tcomb2.default.Any, 'resp');
	
	      this._pristineResponse = (0, _cloneDeep3.default)(resp);
	      var data = (0, _isArray3.default)(resp) ? resp : [resp];
	      var parsedData = this.parse(data);
	      this._pristineData = (0, _cloneDeep3.default)(parsedData);
	      this.isRequesting = false;
	      this.data = parsedData;
	
	      // return the store
	      return this;
	    }
	  }, {
	    key: 'read',
	    value: function read() {
	      var ret = function () {
	        this.isRequesting = true;
	        return this.transport.post(this.config).then(this.processResponse.bind(this));
	      }.call(this);
	
	      _assert(ret, Promise, 'return value');
	
	      return ret;
	    }
	  }]);
	
	  return AggregationRequest;
	}();
	
	function createAggregationRequest(appId, config, format) {
	  _assert(appId, _tcomb2.default.String, 'appId');
	
	  _assert(config, _tcomb2.default.Object, 'config');
	
	  _assert(format, _tcomb2.default.String, 'format');
	
	  return new AggregationRequest(appId, config, format);
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createModel = createModel;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _maps = __webpack_require__(75);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createModel(fields) {
	  _assert(fields, _tcomb2.default.Any, 'fields');
	
	  var result = {
	    fieldMap: {},
	    fieldOption: {},
	    defaultModelValues: {
	      Title: ''
	    }
	  };
	
	  fields.forEach(function (field) {
	    var id = field.StaticName;
	    var type = field.FieldType;
	
	    if (!id || !type) {
	      return;
	    }
	
	    result.fieldMap[id] = field;
	    if (_maps.odataFieldMap.hasOwnProperty(type)) {
	      result.fieldOption[id] = _maps.odataFieldMap[type];
	    }
	    result.defaultModelValues[id] = checkForModelValue(id, type, field);
	  });
	
	  return result;
	
	  function checkForModelValue(id, type, field) {
	    var value = null;
	    if (_maps.odataFieldMap.hasOwnProperty(type) && _maps.odataFieldMap[type].hasOwnProperty('defaultValue')) {
	      value = _maps.odataFieldMap[type].defaultValue;
	    }
	    if (type === 'Text') {
	      value = '';
	    }
	    return value;
	  }
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.format = format;
	function format(str, col) {
	  col = (typeof col === 'undefined' ? 'undefined' : _typeof(col)) === 'object' ? col : Array.prototype.slice.call(arguments, 1);
	
	  return str.replace(/\{\{|\}\}|\{(\w+)\}/g, function (m, n) {
	    if (m === '{{') {
	      return '{';
	    }
	    if (m === '}}') {
	      return '}';
	    }
	    return col[n];
	  });
	}

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.guid = guid;
	function guid() {
	  var id = '';
	  var i = void 0;
	  var random = void 0;
	  for (i = 0; i < 32; i++) {
	    random = Math.random() * 16 | 0;
	    if (i === 8 || i === 12 || i === 16 || i === 20) {
	      id += '-';
	    }
	    id += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
	  }
	  return id;
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trim2 = __webpack_require__(50);
	
	var _trim3 = _interopRequireDefault(_trim2);
	
	exports.normalizeArrayOrString = normalizeArrayOrString;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function normalizeArrayOrString(options) {
	  _assert(options, _tcomb2.default.union([_tcomb2.default.list(_tcomb2.default.String), _tcomb2.default.String]), 'options');
	
	  if (typeof options === 'string') {
	    return options.split(',').map(function (val) {
	      return (0, _trim3.default)(val);
	    });
	  }
	  return options;
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isPlainObject2 = __webpack_require__(147);
	
	var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);
	
	exports.normalizeSort = normalizeSort;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _types = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function normalizeSort(options) {
	  var dir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
	
	  _assert(options, _tcomb2.default.union([_types.Sort, _types.SortExpression, _tcomb2.default.String]), 'options');
	
	  _assert(dir, _types.SortDir, 'dir');
	
	  if (typeof options === 'string') {
	    return [{ field: options, dir: dir }];
	  }
	  if ((0, _isPlainObject3.default)(options)) {
	    return [options];
	  }
	  return options;
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trim2 = __webpack_require__(50);
	
	var _trim3 = _interopRequireDefault(_trim2);
	
	var _noop2 = __webpack_require__(150);
	
	var _noop3 = _interopRequireDefault(_noop2);
	
	exports.parameterMap = parameterMap;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _toODataFilter = __webpack_require__(71);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mappers = {
	  pageSize: _noop3.default,
	  page: _noop3.default,
	  filter: function filter(params, _filter) {
	    var expr = void 0;
	    if (_filter && _filter.filters && _filter.filters.length > 0) {
	      expr = (0, _toODataFilter.toOdataFilter)(_filter);
	      params.push('$filter=' + expr);
	    }
	  },
	  orderby: function orderby(params, _orderby) {
	    var expr = _orderby.map(function (value) {
	      var order = (0, _trim3.default)(value.field);
	
	      if (value.dir === 'desc') {
	        order += ' desc';
	      }
	
	      return order;
	    }).join(',');
	
	    if (expr) {
	      params.push('$orderby=' + expr);
	    }
	  },
	  select: function select(params, _select) {
	    var expr = _select.map(function (value) {
	      return (0, _trim3.default)(value);
	    });
	    if (expr.length) {
	      if (expr.indexOf('Id') === -1) {
	        expr.unshift('Id');
	      }
	
	      params.push('$select=' + expr.join(','));
	    }
	  },
	  top: function top(params, _top) {
	    if (_top !== -1) {
	      params.push('$top=' + _top);
	    }
	  },
	  expand: function expand(params, _expand) {
	    var expr = _expand.map(function (value) {
	      return (0, _trim3.default)(value);
	    });
	    if (expr.length) {
	      params.push('$expand=' + expr.join(','));
	    }
	  }
	};
	
	function parameterMap() {
	  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'read';
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  _assert(type, _tcomb2.default.String, 'type');
	
	  _assert(options, _tcomb2.default.maybe(_tcomb2.default.interface({})), 'options');
	
	  var params = [];
	
	  if (type === 'read') {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = Object.keys(options)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var key = _step.value;
	
	        var val = options[key];
	        if (mappers[key]) {
	          if (key === 'filter' || key === 'orderby') {
	            mappers[key](params, val);
	          } else {
	            mappers[key](params, val);
	          }
	        } else {
	          params[key] = val;
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  }
	
	  return params.length ? params.join('&') : '';
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isDate2 = __webpack_require__(143);
	
	var _isDate3 = _interopRequireDefault(_isDate2);
	
	var _isNumber2 = __webpack_require__(146);
	
	var _isNumber3 = _interopRequireDefault(_isNumber2);
	
	var _isString2 = __webpack_require__(148);
	
	var _isString3 = _interopRequireDefault(_isString2);
	
	var _indexOf2 = __webpack_require__(139);
	
	var _indexOf3 = _interopRequireDefault(_indexOf2);
	
	exports.toOdataFilter = toOdataFilter;
	
	var _fn = __webpack_require__(40);
	
	var fn = _interopRequireWildcard(_fn);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var odataFilters = {
	  eq: 'eq',
	  neq: 'ne',
	  gt: 'gt',
	  gte: 'ge',
	  lt: 'lt',
	  lte: 'le',
	  in: 'in',
	  ne: 'ne',
	  contains: 'contains',
	  doesnotcontain: 'doesnotcontain',
	  endswith: 'endswith',
	  startswith: 'startswith',
	  isnull: 'eq',
	  null: 'eq',
	  nnull: 'ne',
	  isnotnull: 'ne',
	  isempty: 'eq',
	  isnotempty: 'ne'
	};
	var nullCheck = ['null', 'nnull', 'isnull', 'isnotnull'];
	var emptyCheck = ['isempty', 'isnotempty'];
	
	// V1: No field specific filter handling. No replacements
	function toOdataFilter(filter) {
	  var result = [];
	  var logic = filter.logic || 'and';
	  var filters = filter.filters;
	  var idx = void 0;
	  var length = void 0;
	  var field = void 0;
	  var format = void 0;
	  var operator = void 0;
	  var value = void 0;
	
	  for (idx = 0, length = filters.length; idx < length; idx++) {
	    filter = filters[idx];
	
	    if (filter.filters) {
	      filter = toOdataFilter(filter);
	    } else {
	      // Move null check before replacementValues
	      if ((0, _indexOf3.default)(emptyCheck, filter.operator.toLowerCase()) > -1) {
	        filter.value = '';
	      }
	      if ((0, _indexOf3.default)(nullCheck, filter.operator.toLowerCase()) > -1) {
	        filter.value = null;
	      }
	      operator = filter.operator;
	      field = filter.field;
	      value = filter.value;
	      field = field.replace(/\./g, '/');
	      filter = odataFilters[operator];
	
	      if (filter && value !== undefined) {
	        if ((0, _isString3.default)(value)) {
	          format = "'{1}'";
	
	          value = value.replace(/'/g, "''");
	          value = encodeURIComponent(value);
	          // addresses overencoding of certain characters eg. whitespace %20 -> %2520
	          value = value.replace(/%20/g, ' ');
	          value = value.replace(/%3A/g, ':');
	          value = value.replace(/%2F/g, '/');
	        } else if ((0, _isNumber3.default)(value)) {
	          format = '{1}';
	        } else if ((0, _isDate3.default)(value) && operator !== 'eq') {
	          value = value.toISOString();
	          format = '{1}';
	        } else {
	          format = '{1}';
	        }
	
	        if (filter.length > 3) {
	          if (filter !== 'substringof') {
	            if (operator === 'doesnotcontain') {
	              format = 'not contains({2},' + format + ')';
	            } else {
	              format = '{0}({2},' + format + ')';
	            }
	          } else {
	            format = '{0}(' + format + ',{2})';
	          }
	        } else {
	          format = '{2} {0} ' + format;
	        }
	
	        // "in" operator expansion
	        if (filter === 'in' && Array.isArray(value)) {
	          format = '({1})';
	          value = expandInFilter(field, value);
	        }
	
	        filter = fn.format(format, filter, value, field);
	
	        // overwrite filter if it's a lambda expression
	
	        // if (lambda) {
	        //
	        //   filter = createLambdaExpression(lambda, logic, odataFilters[ operator ], value, field)
	        // }
	
	        // overwrite filter for DateTime eq filter
	
	        // if (operator === 'eq' && (fieldMap[ field ] && fieldMap[ field ].FieldType === 'DateTime')) {
	        //
	        //   filter = createDateEqualFilter(field, value)
	        //
	        // }
	      }
	    }
	
	    result.push(filter);
	  }
	
	  filter = result.join(' ' + logic + ' ');
	
	  if (result.length > 1) {
	    filter = '(' + filter + ')';
	  }
	
	  return filter;
	}
	
	function expandInFilter(field, value) {
	  var result = [];
	  var logic = 'or';
	
	  value.forEach(function (orFilter) {
	    result.push(field + ' eq \'' + orFilter + '\'');
	  });
	
	  return result.join(' ' + logic + ' ');
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // flow
	
	
	exports.createAppRequest = createAppRequest;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _localforage = __webpack_require__(89);
	
	var _localforage2 = _interopRequireDefault(_localforage);
	
	var _constants = __webpack_require__(30);
	
	var _mobx = __webpack_require__(3);
	
	var _storesTransformer = __webpack_require__(73);
	
	var _storesTransformer2 = _interopRequireDefault(_storesTransformer);
	
	var _stores = __webpack_require__(41);
	
	var stores = _interopRequireWildcard(_stores);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Get app data from remote and store in localforage
	var AppRequest = function () {
	  function AppRequest(appId) {
	    var _this = this;
	
	    _classCallCheck(this, AppRequest);
	
	    _assert(appId, _tcomb2.default.String, 'appId');
	
	    this.appId = appId;
	    this.rawResponses = {};
	    this.parsedResponses = {};
	    this.toJS = _mobx.toJS;
	
	    this.lfStore = _localforage2.default.createInstance({
	      name: 'ccc-' + appId
	    });
	
	    (0, _mobx.extendObservable)(this, {
	      isRequesting: true
	    });
	
	    // get all app data with the exception of ListItems
	    this.stores = {
	      actions: stores.createActionConfigsStore(appId, {
	        top: -1
	      }),
	      app: stores.createApplicationsStore({
	        expand: ['AppConfig($select=AppId,ApplicationName,Description,ModifiedBy,ModifiedDate)'],
	        top: -1,
	        filter: {
	          logic: 'and',
	          filters: [{ field: 'Id', operator: 'eq', value: appId }]
	        }
	      }),
	      charts: stores.createChartConfigsStore(appId, {
	        top: -1
	      }),
	      connections: stores.createConnectionsStore(appId, {
	        expand: ['Capabilities'],
	        top: -1
	      }),
	      grids: stores.createGridConfigsStore(appId, {
	        top: -1
	      }),
	      layouts: stores.createLayoutConfigsStore(appId, {
	        top: -1
	      }),
	      libraries: stores.createLibraryConfigsStore(appId, {
	        top: -1
	      }),
	      lists: stores.createListsStore(appId, _constants.DEFAULT_CONNECTION_ID, {
	        expand: ['Fields'],
	        top: -1
	      }),
	      views: stores.createViewConfigsStore(appId, {
	        expand: ['Tabs($expand=Views)'],
	        top: -1
	      })
	    };
	
	    (0, _mobx.autorun)(function () {
	      _this.parsedResponses = (0, _storesTransformer2.default)(_this.stores);
	    });
	  }
	
	  _createClass(AppRequest, [{
	    key: 'read',
	    value: function read() {
	      var _this2 = this;
	
	      var promises = [];
	
	      return this.lfStore.getItem('responses').then(function (responses) {
	        // Todo: Check for updates
	        var stores = _this2.stores;
	        if (responses && responses.hasOwnProperty('app')) {
	          Object.keys(stores).forEach(function (key) {
	            if (responses[key]) {
	              stores[key].processResponse(responses[key]);
	            }
	          });
	        } else {
	          return getFromServer.call(_this2);
	        }
	      }).then((0, _mobx.action)(function () {
	        _this2.isRequesting = false;
	        return _this2.parsedResponses;
	      }));
	
	      function getFromServer() {
	        var _this3 = this;
	
	        var stores = this.stores;
	        Object.keys(stores).forEach(function (key) {
	          promises.push(stores[key].read());
	        });
	
	        return Promise.all(promises).then(function () {
	          var stores = _this3.stores;
	          var rawResponses = _this3.rawResponses;
	
	          Object.keys(stores).forEach(function (key) {
	            rawResponses[key] = stores[key].getPristineResponse();
	          });
	          _this3.lfStore.setItem('last-saved', new Date().toISOString());
	          _this3.lfStore.setItem('responses', _this3.rawResponses);
	        });
	      }
	    }
	  }]);
	
	  return AppRequest;
	}();
	
	function createAppRequest(appId) {
	  _assert(appId, _tcomb2.default.String, 'appId');
	
	  return new AppRequest(appId);
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _without2 = __webpack_require__(153);
	
	var _without3 = _interopRequireDefault(_without2);
	
	var _constants = __webpack_require__(30);
	
	var _mobx = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Un-opinionated conversion of OData Responses
	 * Minimal conversion and consistency checking of Odata responses
	 * In place conversion of stringified JSON properties
	 * Use AppRequests this.stores to specify Select and Expand options to minimize response
	 */
	
	var storesTransformer = (0, _mobx.createTransformer)(function (stores) {
	  return {
	    actions: stores.actions.data.map(actionTransformer),
	    app: stores.app.data.map(appTransformer),
	    charts: stores.charts.data.map(chartTransformer),
	    connections: stores.connections.data.map(connectionTransformer),
	    grids: stores.grids.data.map(gridTransformer),
	    layouts: stores.lists.data.map(layoutTransformer),
	    libraries: stores.lists.data.map(libraryTransformer),
	    lists: stores.lists.data.map(listTransformer),
	    views: stores.views.data.map(viewTransformer)
	  };
	});
	
	exports.default = storesTransformer;
	
	
	var actionTransformer = (0, _mobx.createTransformer)(function (action) {
	  var model = (0, _mobx.toJS)(action.model);
	
	  model.ActionConfigJSON = JSON.parse(model.ActionConfigJSON);
	  // Consistency check
	  model.Connection = model.ConnectionId || _constants.DEFAULT_CONNECTION_ID;
	
	  return model;
	});
	
	var appTransformer = (0, _mobx.createTransformer)(function (app) {
	  return (0, _mobx.toJS)(app.model);
	});
	
	var chartTransformer = (0, _mobx.createTransformer)(function (chart) {
	  var model = (0, _mobx.toJS)(chart.model);
	  model.ChartConfigJSON = JSON.parse(model.ChartConfigJSON);
	  model.DataSourceConfigJSON = JSON.parse(model.DataSourceConfigJSON);
	  model.ConnectionId = model.ConnectionId || model.ChartConfigJSON.ConnectionId || _constants.DEFAULT_CONNECTION_ID;
	  model.ListId = model.ListId || model.ChartConfigJSON.DataSource;
	
	  return model;
	});
	
	var connectionTransformer = (0, _mobx.createTransformer)(function (conn) {
	  return (0, _mobx.toJS)(conn.model);
	});
	
	var gridTransformer = (0, _mobx.createTransformer)(function (grid) {
	  var model = (0, _mobx.toJS)(grid.model);
	  model.GridConfigJSON = JSON.parse(model.GridConfigJSON);
	  model.ConnectionId = model.ConnectionId || model.GridConfigJSON.ConnectionId || _constants.DEFAULT_CONNECTION_ID;
	  model.ListId = model.ListId || model.GridConfigJSON.DataSource;
	  model.ViewFields = (0, _without3.default)(model.GridConfigJSON.ViewFields, null);
	
	  return model;
	});
	
	var layoutTransformer = (0, _mobx.createTransformer)(function (layout) {
	  return (0, _mobx.toJS)(layout.model);
	});
	
	var libraryTransformer = (0, _mobx.createTransformer)(function (list) {
	  return (0, _mobx.toJS)(list.model);
	});
	
	var listTransformer = (0, _mobx.createTransformer)(function (list) {
	  return (0, _mobx.toJS)(list.model);
	});
	
	var viewTransformer = (0, _mobx.createTransformer)(function (view) {
	  return (0, _mobx.toJS)(view.model);
	});
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mobx = __webpack_require__(3);
	
	var _stores = __webpack_require__(41);
	
	var stores = _interopRequireWildcard(_stores);
	
	var _AppRequest = __webpack_require__(72);
	
	var _AggregationRequest = __webpack_require__(64);
	
	var _ListModelManager = __webpack_require__(29);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// mobx.extras.shareGlobalState()
	
	(0, _mobx.useStrict)(true);
	
	if (false) {
	  // eslint-disable-line
	  var enableLogging = require('mobx-logger').enableLogging;
	  enableLogging();
	}
	
	exports.default = {
	  stores: stores,
	  createAppRequest: _AppRequest.createAppRequest,
	  createAggregationRequest: _AggregationRequest.createAggregationRequest,
	  createListModelManager: _ListModelManager.createListModelManager,
	  VERSION: ("0.5.2") // eslint-disable-line
	};
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _odataFieldMap = __webpack_require__(76);
	
	Object.keys(_odataFieldMap).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _odataFieldMap[key];
	    }
	  });
	});

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var odataFieldMap = exports.odataFieldMap = {
	  Text: {
	    type: 'string',
	    sortable: true,
	    groupable: true,
	    filterable: true
	  },
	  Note: {
	    type: 'string',
	    sortable: false,
	    groupable: false,
	    filterable: true
	  },
	  DateTime: {
	    type: 'date',
	    sortable: true,
	    groupable: false,
	    filterable: true,
	    defaultValue: null,
	    nullable: true,
	    format: '{0:g}'
	  },
	  Counter: {
	    type: 'number',
	    groupable: false
	  },
	  Choice: {
	    type: 'string'
	  },
	  Lookup: {
	    sortable: true,
	    groupable: true,
	    filterable: true,
	    defaultValue: null
	  },
	  Relation: {
	    sortable: true,
	    groupable: true,
	    filterable: true,
	    defaultValue: null
	  },
	  DocumentRelation: {
	    sortable: false,
	    groupable: false,
	    filterable: false,
	    defaultValue: null
	  },
	  Boolean: {
	    type: 'boolean',
	    sortable: true,
	    filterable: true
	  },
	  Number: {
	    type: 'number',
	    sortable: true,
	    groupable: true,
	    filterable: true
	  },
	  Currency: {
	    type: 'number',
	    sortable: true,
	    groupable: true,
	    filterable: true
	  },
	  MultiDocumentRelation: {
	    sortable: false,
	    groupable: false,
	    filterable: false,
	    defaultValue: []
	  },
	  MultiChoice: {
	    sortable: true,
	    groupable: true,
	    filterable: false,
	    defaultValue: []
	  },
	  MultiUser: {
	    sortable: true,
	    groupable: true,
	    filterable: false,
	    defaultValue: []
	  },
	  MultiRelation: {
	    sortable: true,
	    groupable: true,
	    filterable: false,
	    defaultValue: []
	  },
	  MultiLookup: {
	    sortable: true,
	    groupable: true,
	    filterable: false,
	    defaultValue: []
	  },
	  File: {},
	  Attachments: {},
	  User: {
	    sortable: true,
	    groupable: true,
	    filterable: true,
	    defaultValue: null
	  },
	  CustomId: {
	    type: 'string',
	    editable: false,
	    sortable: true,
	    groupable: true,
	    filterable: true
	  },
	  Calculated: {
	    editable: false,
	    sortable: true,
	    groupable: true,
	    filterable: true
	  }
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createActionConfigsStore = createActionConfigsStore;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _Collection2 = __webpack_require__(9);
	
	var _Collection3 = _interopRequireDefault(_Collection2);
	
	var _types = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ActionConfigsStore = function (_Collection) {
	  _inherits(ActionConfigsStore, _Collection);
	
	  function ActionConfigsStore(appId) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    _classCallCheck(this, ActionConfigsStore);
	
	    _assert(appId, _tcomb2.default.String, 'appId');
	
	    _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	    var url = '/odata/ActionConfigs';
	    return _possibleConstructorReturn(this, (ActionConfigsStore.__proto__ || Object.getPrototypeOf(ActionConfigsStore)).call(this, appId, url, options));
	  }
	
	  return ActionConfigsStore;
	}(_Collection3.default);
	
	function createActionConfigsStore(appId) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  _assert(appId, _tcomb2.default.String, 'appId');
	
	  _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	  return new ActionConfigsStore(appId, options);
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.createApplicationsStore = createApplicationsStore;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _Collection2 = __webpack_require__(9);
	
	var _Collection3 = _interopRequireDefault(_Collection2);
	
	var _types = __webpack_require__(5);
	
	var _mobx = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var optionsDefaults = {
	  orderby: [{ field: 'AppConfig/ApplicationName', dir: 'asc' }],
	  expand: ['AppConfig($select=AppId,ApplicationName,ModifiedBy,ModifiedDate)'],
	  filter: {
	    logic: 'and',
	    filters: [{ field: 'UserApplication ', operator: 'ne', value: null }, { field: 'UserApplication/IsInvitation', operator: 'ne', value: true }]
	  }
	};
	
	var ApplicationsStore = function (_Collection) {
	  _inherits(ApplicationsStore, _Collection);
	
	  function ApplicationsStore() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, ApplicationsStore);
	
	    _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	    var url = '/odata/Applications';
	
	    var _this = _possibleConstructorReturn(this, (ApplicationsStore.__proto__ || Object.getPrototypeOf(ApplicationsStore)).call(this, '', url, options));
	
	    (0, _mobx.extendObservable)(_this, {
	      getUserApplication: (0, _mobx.action)(_this.getUserApplications)
	    });
	    return _this;
	  }
	
	  _createClass(ApplicationsStore, [{
	    key: 'getUserApplications',
	    value: function getUserApplications() {
	      return this.query(optionsDefaults);
	    }
	  }]);
	
	  return ApplicationsStore;
	}(_Collection3.default);
	
	function createApplicationsStore(options) {
	  _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	  return new ApplicationsStore(options);
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createAuditsStore = createAuditsStore;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _Collection2 = __webpack_require__(9);
	
	var _Collection3 = _interopRequireDefault(_Collection2);
	
	var _types = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AuditsStore = function (_Collection) {
	  _inherits(AuditsStore, _Collection);
	
	  function AuditsStore() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, AuditsStore);
	
	    _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	    var url = '/odata/Audits';
	    return _possibleConstructorReturn(this, (AuditsStore.__proto__ || Object.getPrototypeOf(AuditsStore)).call(this, '', url, options));
	  }
	
	  return AuditsStore;
	}(_Collection3.default);
	
	function createAuditsStore() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	  return new AuditsStore(options);
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createChartConfigsStore = createChartConfigsStore;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _Collection2 = __webpack_require__(9);
	
	var _Collection3 = _interopRequireDefault(_Collection2);
	
	var _types = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ChartConfigsStore = function (_Collection) {
	  _inherits(ChartConfigsStore, _Collection);
	
	  function ChartConfigsStore(appId) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    _classCallCheck(this, ChartConfigsStore);
	
	    _assert(appId, _tcomb2.default.String, 'appId');
	
	    _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	    var url = '/odata/ChartConfigs';
	    return _possibleConstructorReturn(this, (ChartConfigsStore.__proto__ || Object.getPrototypeOf(ChartConfigsStore)).call(this, appId, url, options));
	  }
	
	  return ChartConfigsStore;
	}(_Collection3.default);
	
	function createChartConfigsStore(appId) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  _assert(appId, _tcomb2.default.String, 'appId');
	
	  _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	  return new ChartConfigsStore(appId, options);
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createConnectionsStore = createConnectionsStore;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _Collection2 = __webpack_require__(9);
	
	var _Collection3 = _interopRequireDefault(_Collection2);
	
	var _types = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ConnectionsStore = function (_Collection) {
	  _inherits(ConnectionsStore, _Collection);
	
	  function ConnectionsStore(appId) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    _classCallCheck(this, ConnectionsStore);
	
	    _assert(appId, _tcomb2.default.String, 'appId');
	
	    _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	    var url = '/odata/Connections';
	    return _possibleConstructorReturn(this, (ConnectionsStore.__proto__ || Object.getPrototypeOf(ConnectionsStore)).call(this, appId, url, options));
	  }
	
	  return ConnectionsStore;
	}(_Collection3.default);
	
	function createConnectionsStore(appId) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  _assert(appId, _tcomb2.default.String, 'appId');
	
	  _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	  return new ConnectionsStore(appId, options);
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createFieldsStore = createFieldsStore;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _Collection2 = __webpack_require__(9);
	
	var _Collection3 = _interopRequireDefault(_Collection2);
	
	var _types = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FieldsStore = function (_Collection) {
	  _inherits(FieldsStore, _Collection);
	
	  function FieldsStore(appId, connectionId, listId) {
	    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	    _classCallCheck(this, FieldsStore);
	
	    _assert(appId, _tcomb2.default.String, 'appId');
	
	    _assert(connectionId, _tcomb2.default.String, 'connectionId');
	
	    _assert(listId, _tcomb2.default.String, 'listId');
	
	    _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	    var url = '/odata/Connections(\'' + connectionId + '\')/Lists(\'' + listId + '\')/Fields';
	
	    var _this = _possibleConstructorReturn(this, (FieldsStore.__proto__ || Object.getPrototypeOf(FieldsStore)).call(this, appId, url, options));
	
	    _this.connectionId = connectionId;
	    _this.listId = listId;
	    return _this;
	  }
	
	  return FieldsStore;
	}(_Collection3.default);
	
	function createFieldsStore(appId, connectionId, listId) {
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	  _assert(appId, _tcomb2.default.String, 'appId');
	
	  _assert(connectionId, _tcomb2.default.String, 'connectionId');
	
	  _assert(listId, _tcomb2.default.String, 'listId');
	
	  _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	  return new FieldsStore(appId, connectionId, listId, options);
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createGridConfigsStore = createGridConfigsStore;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _Collection2 = __webpack_require__(9);
	
	var _Collection3 = _interopRequireDefault(_Collection2);
	
	var _types = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GridConfigsStore = function (_Collection) {
	  _inherits(GridConfigsStore, _Collection);
	
	  function GridConfigsStore(appId) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    _classCallCheck(this, GridConfigsStore);
	
	    _assert(appId, _tcomb2.default.String, 'appId');
	
	    _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	    var url = '/odata/GridConfigs';
	    return _possibleConstructorReturn(this, (GridConfigsStore.__proto__ || Object.getPrototypeOf(GridConfigsStore)).call(this, appId, url, options));
	  }
	
	  return GridConfigsStore;
	}(_Collection3.default);
	
	function createGridConfigsStore(appId) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  _assert(appId, _tcomb2.default.String, 'appId');
	
	  _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	  return new GridConfigsStore(appId, options);
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createLayoutConfigsStore = createLayoutConfigsStore;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _Collection2 = __webpack_require__(9);
	
	var _Collection3 = _interopRequireDefault(_Collection2);
	
	var _types = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LayoutConfigsStore = function (_Collection) {
	  _inherits(LayoutConfigsStore, _Collection);
	
	  function LayoutConfigsStore(appId) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    _classCallCheck(this, LayoutConfigsStore);
	
	    _assert(appId, _tcomb2.default.String, 'appId');
	
	    _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	    var url = '/odata/LayoutConfigs';
	    return _possibleConstructorReturn(this, (LayoutConfigsStore.__proto__ || Object.getPrototypeOf(LayoutConfigsStore)).call(this, appId, url, options));
	  }
	
	  return LayoutConfigsStore;
	}(_Collection3.default);
	
	function createLayoutConfigsStore(appId) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  _assert(appId, _tcomb2.default.String, 'appId');
	
	  _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	  return new LayoutConfigsStore(appId, options);
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createLibraryConfigsStore = createLibraryConfigsStore;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _Collection2 = __webpack_require__(9);
	
	var _Collection3 = _interopRequireDefault(_Collection2);
	
	var _types = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LibraryConfigsStore = function (_Collection) {
	  _inherits(LibraryConfigsStore, _Collection);
	
	  function LibraryConfigsStore(appId) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    _classCallCheck(this, LibraryConfigsStore);
	
	    _assert(appId, _tcomb2.default.String, 'appId');
	
	    _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	    var url = '/odata/LibraryConfigs';
	    return _possibleConstructorReturn(this, (LibraryConfigsStore.__proto__ || Object.getPrototypeOf(LibraryConfigsStore)).call(this, appId, url, options));
	  }
	
	  return LibraryConfigsStore;
	}(_Collection3.default);
	
	function createLibraryConfigsStore(appId) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  _assert(appId, _tcomb2.default.String, 'appId');
	
	  _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	  return new LibraryConfigsStore(appId, options);
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	exports.createListItemsStore = createListItemsStore;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _ListModelManager = __webpack_require__(29);
	
	var _Collection2 = __webpack_require__(9);
	
	var _Collection3 = _interopRequireDefault(_Collection2);
	
	var _types = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ListItemsStore = function (_Collection) {
	  _inherits(ListItemsStore, _Collection);
	
	  function ListItemsStore(appId, connectionId, listId) {
	    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	    _classCallCheck(this, ListItemsStore);
	
	    _assert(appId, _tcomb2.default.String, 'appId');
	
	    _assert(connectionId, _tcomb2.default.String, 'connectionId');
	
	    _assert(listId, _tcomb2.default.String, 'listId');
	
	    _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	    var url = '/odata/Connections(\'' + connectionId + '\')/Lists(\'' + listId + '\')/ListItems';
	
	    var _this = _possibleConstructorReturn(this, (ListItemsStore.__proto__ || Object.getPrototypeOf(ListItemsStore)).call(this, appId, url, options));
	
	    _this.model = null;
	
	
	    _this.connectionId = connectionId;
	    _this.listId = listId;
	    _this.listModelManager = (0, _ListModelManager.createListModelManager)(appId);
	    _this.promise = _this.listModelManager.getListModel(connectionId, listId).then(function (model) {
	      _this.model = model;
	    });
	    return _this;
	  }
	
	  // allow getListModel() and read() to be performed in parallel
	
	
	  _createClass(ListItemsStore, [{
	    key: 'read',
	    value: function read() {
	      var _this2 = this;
	
	      var readPromise = _get(ListItemsStore.prototype.__proto__ || Object.getPrototypeOf(ListItemsStore.prototype), 'read', this).call(this);
	      var promises = [this.promise, readPromise];
	      this.isRequesting = true;
	
	      return Promise.all(promises).then(function () {
	        return _this2;
	      });
	    }
	
	    // Todo: Consider making add async by default
	
	  }, {
	    key: 'add',
	    value: function add(item) {
	      _assert(item, _tcomb2.default.interface({}), 'item');
	
	      if (!this.model) {
	        return 'Model hasn\'t loaded yet.';
	      }
	      var defaultValues = this.model.defaultModelValues || {};
	      var result = {};
	
	      Object.keys(defaultValues).forEach(function (key) {
	        result[key] = item.hasOwnProperty(key) ? item[key] : defaultValues[key];
	      });
	
	      return _get(ListItemsStore.prototype.__proto__ || Object.getPrototypeOf(ListItemsStore.prototype), 'add', this).call(this, result);
	    }
	  }]);
	
	  return ListItemsStore;
	}(_Collection3.default);
	/**
	 * Create a ListItemsStore instance
	 */
	
	
	function createListItemsStore(appId, connectionId, listId) {
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	  _assert(appId, _tcomb2.default.String, 'appId');
	
	  _assert(connectionId, _tcomb2.default.String, 'connectionId');
	
	  _assert(listId, _tcomb2.default.String, 'listId');
	
	  _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	  var ret = function (appId, connectionId, listId, options) {
	    return new ListItemsStore(appId, connectionId, listId, options);
	  }.call(this, appId, connectionId, listId, options);
	
	  _assert(ret, ListItemsStore, 'return value');
	
	  return ret;
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createListsStore = createListsStore;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _Collection2 = __webpack_require__(9);
	
	var _Collection3 = _interopRequireDefault(_Collection2);
	
	var _mobx = __webpack_require__(3);
	
	var _ListModelManager = __webpack_require__(29);
	
	var _constants = __webpack_require__(30);
	
	var _types = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ListsStore = function (_Collection) {
	  _inherits(ListsStore, _Collection);
	
	  function ListsStore(appId, connectionId) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    _classCallCheck(this, ListsStore);
	
	    _assert(appId, _tcomb2.default.String, 'appId');
	
	    _assert(connectionId, _tcomb2.default.String, 'connectionId');
	
	    _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	    var url = '/odata/Connections(\'' + connectionId + '\')/Lists';
	
	    var _this = _possibleConstructorReturn(this, (ListsStore.__proto__ || Object.getPrototypeOf(ListsStore)).call(this, appId, url, options));
	
	    _this.connectionId = connectionId;
	    _this.listModelManager = (0, _ListModelManager.createListModelManager)(appId);
	    var hasFields = (0, _mobx.computed)(function () {
	      if (_this.data.length < 1) {
	        return false;
	      }
	
	      return _this.data[0].Fields && Array.isArray(_this.data[0].Fields.slice());
	    });
	    (0, _mobx.when)(function () {
	      return hasFields;
	    }, function () {
	      _this.data.forEach(function (list) {
	        _this.listModelManager.importFields(list.Id, list.Fields.slice());
	      });
	    });
	    return _this;
	  }
	
	  return ListsStore;
	}(_Collection3.default);
	
	function createListsStore(appId) {
	  var connectionId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.DEFAULT_CONNECTION_ID;
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  _assert(appId, _tcomb2.default.String, 'appId');
	
	  _assert(connectionId, _tcomb2.default.maybe(_tcomb2.default.String), 'connectionId');
	
	  _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	  return new ListsStore(appId, connectionId, options);
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createViewConfigsStore = createViewConfigsStore;
	
	var _tcomb = __webpack_require__(1);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);
	
	var _Collection2 = __webpack_require__(9);
	
	var _Collection3 = _interopRequireDefault(_Collection2);
	
	var _types = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ViewConfigsStore = function (_Collection) {
	  _inherits(ViewConfigsStore, _Collection);
	
	  function ViewConfigsStore(appId) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    _classCallCheck(this, ViewConfigsStore);
	
	    _assert(appId, _tcomb2.default.String, 'appId');
	
	    _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	    var url = '/odata/ViewConfigs';
	    return _possibleConstructorReturn(this, (ViewConfigsStore.__proto__ || Object.getPrototypeOf(ViewConfigsStore)).call(this, appId, url, options));
	  }
	
	  return ViewConfigsStore;
	}(_Collection3.default);
	
	function createViewConfigsStore(appId) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  _assert(appId, _tcomb2.default.String, 'appId');
	
	  _assert(options, _tcomb2.default.maybe(_types.CollectionOptions), 'options');
	
	  return new ViewConfigsStore(appId, options);
	}
	
	function _assert(x, type, name) {
	  if (false) {
	    _tcomb2.default.fail = function (message) {
	      console.warn(message);
	    };
	  }

	  if (_tcomb2.default.isType(type) && type.meta.kind !== 'struct') {
	    if (!type.is(x)) {
	      type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);
	    }
	  } else if (!(x instanceof type)) {
	    _tcomb2.default.fail('Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')');
	  }

	  return x;
	}

/***/ },
/* 89 */
/***/ function(module, exports) {

	/*!
	    localForage -- Offline Storage, Improved
	    Version 1.4.3
	    https://mozilla.github.io/localForage
	    (c) 2013-2016 Mozilla, Apache License 2.0
	*/
	(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.localforage = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
	'use strict';
	var immediate = _dereq_(2);
	
	/* istanbul ignore next */
	function INTERNAL() {}
	
	var handlers = {};
	
	var REJECTED = ['REJECTED'];
	var FULFILLED = ['FULFILLED'];
	var PENDING = ['PENDING'];
	
	module.exports = exports = Promise;
	
	function Promise(resolver) {
	  if (typeof resolver !== 'function') {
	    throw new TypeError('resolver must be a function');
	  }
	  this.state = PENDING;
	  this.queue = [];
	  this.outcome = void 0;
	  if (resolver !== INTERNAL) {
	    safelyResolveThenable(this, resolver);
	  }
	}
	
	Promise.prototype["catch"] = function (onRejected) {
	  return this.then(null, onRejected);
	};
	Promise.prototype.then = function (onFulfilled, onRejected) {
	  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
	    typeof onRejected !== 'function' && this.state === REJECTED) {
	    return this;
	  }
	  var promise = new this.constructor(INTERNAL);
	  if (this.state !== PENDING) {
	    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
	    unwrap(promise, resolver, this.outcome);
	  } else {
	    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
	  }
	
	  return promise;
	};
	function QueueItem(promise, onFulfilled, onRejected) {
	  this.promise = promise;
	  if (typeof onFulfilled === 'function') {
	    this.onFulfilled = onFulfilled;
	    this.callFulfilled = this.otherCallFulfilled;
	  }
	  if (typeof onRejected === 'function') {
	    this.onRejected = onRejected;
	    this.callRejected = this.otherCallRejected;
	  }
	}
	QueueItem.prototype.callFulfilled = function (value) {
	  handlers.resolve(this.promise, value);
	};
	QueueItem.prototype.otherCallFulfilled = function (value) {
	  unwrap(this.promise, this.onFulfilled, value);
	};
	QueueItem.prototype.callRejected = function (value) {
	  handlers.reject(this.promise, value);
	};
	QueueItem.prototype.otherCallRejected = function (value) {
	  unwrap(this.promise, this.onRejected, value);
	};
	
	function unwrap(promise, func, value) {
	  immediate(function () {
	    var returnValue;
	    try {
	      returnValue = func(value);
	    } catch (e) {
	      return handlers.reject(promise, e);
	    }
	    if (returnValue === promise) {
	      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
	    } else {
	      handlers.resolve(promise, returnValue);
	    }
	  });
	}
	
	handlers.resolve = function (self, value) {
	  var result = tryCatch(getThen, value);
	  if (result.status === 'error') {
	    return handlers.reject(self, result.value);
	  }
	  var thenable = result.value;
	
	  if (thenable) {
	    safelyResolveThenable(self, thenable);
	  } else {
	    self.state = FULFILLED;
	    self.outcome = value;
	    var i = -1;
	    var len = self.queue.length;
	    while (++i < len) {
	      self.queue[i].callFulfilled(value);
	    }
	  }
	  return self;
	};
	handlers.reject = function (self, error) {
	  self.state = REJECTED;
	  self.outcome = error;
	  var i = -1;
	  var len = self.queue.length;
	  while (++i < len) {
	    self.queue[i].callRejected(error);
	  }
	  return self;
	};
	
	function getThen(obj) {
	  // Make sure we only access the accessor once as required by the spec
	  var then = obj && obj.then;
	  if (obj && typeof obj === 'object' && typeof then === 'function') {
	    return function appyThen() {
	      then.apply(obj, arguments);
	    };
	  }
	}
	
	function safelyResolveThenable(self, thenable) {
	  // Either fulfill, reject or reject with error
	  var called = false;
	  function onError(value) {
	    if (called) {
	      return;
	    }
	    called = true;
	    handlers.reject(self, value);
	  }
	
	  function onSuccess(value) {
	    if (called) {
	      return;
	    }
	    called = true;
	    handlers.resolve(self, value);
	  }
	
	  function tryToUnwrap() {
	    thenable(onSuccess, onError);
	  }
	
	  var result = tryCatch(tryToUnwrap);
	  if (result.status === 'error') {
	    onError(result.value);
	  }
	}
	
	function tryCatch(func, value) {
	  var out = {};
	  try {
	    out.value = func(value);
	    out.status = 'success';
	  } catch (e) {
	    out.status = 'error';
	    out.value = e;
	  }
	  return out;
	}
	
	exports.resolve = resolve;
	function resolve(value) {
	  if (value instanceof this) {
	    return value;
	  }
	  return handlers.resolve(new this(INTERNAL), value);
	}
	
	exports.reject = reject;
	function reject(reason) {
	  var promise = new this(INTERNAL);
	  return handlers.reject(promise, reason);
	}
	
	exports.all = all;
	function all(iterable) {
	  var self = this;
	  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
	    return this.reject(new TypeError('must be an array'));
	  }
	
	  var len = iterable.length;
	  var called = false;
	  if (!len) {
	    return this.resolve([]);
	  }
	
	  var values = new Array(len);
	  var resolved = 0;
	  var i = -1;
	  var promise = new this(INTERNAL);
	
	  while (++i < len) {
	    allResolver(iterable[i], i);
	  }
	  return promise;
	  function allResolver(value, i) {
	    self.resolve(value).then(resolveFromAll, function (error) {
	      if (!called) {
	        called = true;
	        handlers.reject(promise, error);
	      }
	    });
	    function resolveFromAll(outValue) {
	      values[i] = outValue;
	      if (++resolved === len && !called) {
	        called = true;
	        handlers.resolve(promise, values);
	      }
	    }
	  }
	}
	
	exports.race = race;
	function race(iterable) {
	  var self = this;
	  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
	    return this.reject(new TypeError('must be an array'));
	  }
	
	  var len = iterable.length;
	  var called = false;
	  if (!len) {
	    return this.resolve([]);
	  }
	
	  var i = -1;
	  var promise = new this(INTERNAL);
	
	  while (++i < len) {
	    resolver(iterable[i]);
	  }
	  return promise;
	  function resolver(value) {
	    self.resolve(value).then(function (response) {
	      if (!called) {
	        called = true;
	        handlers.resolve(promise, response);
	      }
	    }, function (error) {
	      if (!called) {
	        called = true;
	        handlers.reject(promise, error);
	      }
	    });
	  }
	}
	
	},{"2":2}],2:[function(_dereq_,module,exports){
	(function (global){
	'use strict';
	var Mutation = global.MutationObserver || global.WebKitMutationObserver;
	
	var scheduleDrain;
	
	{
	  if (Mutation) {
	    var called = 0;
	    var observer = new Mutation(nextTick);
	    var element = global.document.createTextNode('');
	    observer.observe(element, {
	      characterData: true
	    });
	    scheduleDrain = function () {
	      element.data = (called = ++called % 2);
	    };
	  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
	    var channel = new global.MessageChannel();
	    channel.port1.onmessage = nextTick;
	    scheduleDrain = function () {
	      channel.port2.postMessage(0);
	    };
	  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
	    scheduleDrain = function () {
	
	      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	      var scriptEl = global.document.createElement('script');
	      scriptEl.onreadystatechange = function () {
	        nextTick();
	
	        scriptEl.onreadystatechange = null;
	        scriptEl.parentNode.removeChild(scriptEl);
	        scriptEl = null;
	      };
	      global.document.documentElement.appendChild(scriptEl);
	    };
	  } else {
	    scheduleDrain = function () {
	      setTimeout(nextTick, 0);
	    };
	  }
	}
	
	var draining;
	var queue = [];
	//named nextTick for less confusing stack traces
	function nextTick() {
	  draining = true;
	  var i, oldQueue;
	  var len = queue.length;
	  while (len) {
	    oldQueue = queue;
	    queue = [];
	    i = -1;
	    while (++i < len) {
	      oldQueue[i]();
	    }
	    len = queue.length;
	  }
	  draining = false;
	}
	
	module.exports = immediate;
	function immediate(task) {
	  if (queue.push(task) === 1 && !draining) {
	    scheduleDrain();
	  }
	}
	
	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{}],3:[function(_dereq_,module,exports){
	(function (global){
	'use strict';
	if (typeof global.Promise !== 'function') {
	  global.Promise = _dereq_(1);
	}
	
	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"1":1}],4:[function(_dereq_,module,exports){
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function getIDB() {
	    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
	    try {
	        if (typeof indexedDB !== 'undefined') {
	            return indexedDB;
	        }
	        if (typeof webkitIndexedDB !== 'undefined') {
	            return webkitIndexedDB;
	        }
	        if (typeof mozIndexedDB !== 'undefined') {
	            return mozIndexedDB;
	        }
	        if (typeof OIndexedDB !== 'undefined') {
	            return OIndexedDB;
	        }
	        if (typeof msIndexedDB !== 'undefined') {
	            return msIndexedDB;
	        }
	    } catch (e) {}
	}
	
	var idb = getIDB();
	
	function isIndexedDBValid() {
	    try {
	        // Initialize IndexedDB; fall back to vendor-prefixed versions
	        // if needed.
	        if (!idb) {
	            return false;
	        }
	        // We mimic PouchDB here; just UA test for Safari (which, as of
	        // iOS 8/Yosemite, doesn't properly support IndexedDB).
	        // IndexedDB support is broken and different from Blink's.
	        // This is faster than the test case (and it's sync), so we just
	        // do this. *SIGH*
	        // http://bl.ocks.org/nolanlawson/raw/c83e9039edf2278047e9/
	        //
	        // We test for openDatabase because IE Mobile identifies itself
	        // as Safari. Oh the lulz...
	        if (typeof openDatabase !== 'undefined' && typeof navigator !== 'undefined' && navigator.userAgent && /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
	            return false;
	        }
	
	        return idb && typeof idb.open === 'function' &&
	        // Some Samsung/HTC Android 4.0-4.3 devices
	        // have older IndexedDB specs; if this isn't available
	        // their IndexedDB is too old for us to use.
	        // (Replaces the onupgradeneeded test.)
	        typeof IDBKeyRange !== 'undefined';
	    } catch (e) {
	        return false;
	    }
	}
	
	function isWebSQLValid() {
	    return typeof openDatabase === 'function';
	}
	
	function isLocalStorageValid() {
	    try {
	        return typeof localStorage !== 'undefined' && 'setItem' in localStorage && localStorage.setItem;
	    } catch (e) {
	        return false;
	    }
	}
	
	// Abstracts constructing a Blob object, so it also works in older
	// browsers that don't support the native Blob constructor. (i.e.
	// old QtWebKit versions, at least).
	// Abstracts constructing a Blob object, so it also works in older
	// browsers that don't support the native Blob constructor. (i.e.
	// old QtWebKit versions, at least).
	function createBlob(parts, properties) {
	    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
	    parts = parts || [];
	    properties = properties || {};
	    try {
	        return new Blob(parts, properties);
	    } catch (e) {
	        if (e.name !== 'TypeError') {
	            throw e;
	        }
	        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
	        var builder = new Builder();
	        for (var i = 0; i < parts.length; i += 1) {
	            builder.append(parts[i]);
	        }
	        return builder.getBlob(properties.type);
	    }
	}
	
	// This is CommonJS because lie is an external dependency, so Rollup
	// can just ignore it.
	if (typeof Promise === 'undefined' && typeof _dereq_ !== 'undefined') {
	    _dereq_(3);
	}
	var Promise$1 = Promise;
	
	function executeCallback(promise, callback) {
	    if (callback) {
	        promise.then(function (result) {
	            callback(null, result);
	        }, function (error) {
	            callback(error);
	        });
	    }
	}
	
	function executeTwoCallbacks(promise, callback, errorCallback) {
	    if (typeof callback === 'function') {
	        promise.then(callback);
	    }
	
	    if (typeof errorCallback === 'function') {
	        promise["catch"](errorCallback);
	    }
	}
	
	// Some code originally from async_storage.js in
	// [Gaia](https://github.com/mozilla-b2g/gaia).
	
	var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
	var supportsBlobs;
	var dbContexts;
	var toString = Object.prototype.toString;
	
	// Transform a binary string to an array buffer, because otherwise
	// weird stuff happens when you try to work with the binary string directly.
	// It is known.
	// From http://stackoverflow.com/questions/14967647/ (continues on next line)
	// encode-decode-image-with-base64-breaks-image (2013-04-21)
	function _binStringToArrayBuffer(bin) {
	    var length = bin.length;
	    var buf = new ArrayBuffer(length);
	    var arr = new Uint8Array(buf);
	    for (var i = 0; i < length; i++) {
	        arr[i] = bin.charCodeAt(i);
	    }
	    return buf;
	}
	
	//
	// Blobs are not supported in all versions of IndexedDB, notably
	// Chrome <37 and Android <5. In those versions, storing a blob will throw.
	//
	// Various other blob bugs exist in Chrome v37-42 (inclusive).
	// Detecting them is expensive and confusing to users, and Chrome 37-42
	// is at very low usage worldwide, so we do a hacky userAgent check instead.
	//
	// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
	// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
	// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
	//
	// Code borrowed from PouchDB. See:
	// https://github.com/pouchdb/pouchdb/blob/9c25a23/src/adapters/idb/blobSupport.js
	//
	function _checkBlobSupportWithoutCaching(txn) {
	    return new Promise$1(function (resolve) {
	        var blob = createBlob(['']);
	        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');
	
	        txn.onabort = function (e) {
	            // If the transaction aborts now its due to not being able to
	            // write to the database, likely due to the disk being full
	            e.preventDefault();
	            e.stopPropagation();
	            resolve(false);
	        };
	
	        txn.oncomplete = function () {
	            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
	            var matchedEdge = navigator.userAgent.match(/Edge\//);
	            // MS Edge pretends to be Chrome 42:
	            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
	            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
	        };
	    })["catch"](function () {
	        return false; // error, so assume unsupported
	    });
	}
	
	function _checkBlobSupport(idb) {
	    if (typeof supportsBlobs === 'boolean') {
	        return Promise$1.resolve(supportsBlobs);
	    }
	    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
	        supportsBlobs = value;
	        return supportsBlobs;
	    });
	}
	
	function _deferReadiness(dbInfo) {
	    var dbContext = dbContexts[dbInfo.name];
	
	    // Create a deferred object representing the current database operation.
	    var deferredOperation = {};
	
	    deferredOperation.promise = new Promise$1(function (resolve) {
	        deferredOperation.resolve = resolve;
	    });
	
	    // Enqueue the deferred operation.
	    dbContext.deferredOperations.push(deferredOperation);
	
	    // Chain its promise to the database readiness.
	    if (!dbContext.dbReady) {
	        dbContext.dbReady = deferredOperation.promise;
	    } else {
	        dbContext.dbReady = dbContext.dbReady.then(function () {
	            return deferredOperation.promise;
	        });
	    }
	}
	
	function _advanceReadiness(dbInfo) {
	    var dbContext = dbContexts[dbInfo.name];
	
	    // Dequeue a deferred operation.
	    var deferredOperation = dbContext.deferredOperations.pop();
	
	    // Resolve its promise (which is part of the database readiness
	    // chain of promises).
	    if (deferredOperation) {
	        deferredOperation.resolve();
	    }
	}
	
	function _getConnection(dbInfo, upgradeNeeded) {
	    return new Promise$1(function (resolve, reject) {
	
	        if (dbInfo.db) {
	            if (upgradeNeeded) {
	                _deferReadiness(dbInfo);
	                dbInfo.db.close();
	            } else {
	                return resolve(dbInfo.db);
	            }
	        }
	
	        var dbArgs = [dbInfo.name];
	
	        if (upgradeNeeded) {
	            dbArgs.push(dbInfo.version);
	        }
	
	        var openreq = idb.open.apply(idb, dbArgs);
	
	        if (upgradeNeeded) {
	            openreq.onupgradeneeded = function (e) {
	                var db = openreq.result;
	                try {
	                    db.createObjectStore(dbInfo.storeName);
	                    if (e.oldVersion <= 1) {
	                        // Added when support for blob shims was added
	                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
	                    }
	                } catch (ex) {
	                    if (ex.name === 'ConstraintError') {
	                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
	                    } else {
	                        throw ex;
	                    }
	                }
	            };
	        }
	
	        openreq.onerror = function () {
	            reject(openreq.error);
	        };
	
	        openreq.onsuccess = function () {
	            resolve(openreq.result);
	            _advanceReadiness(dbInfo);
	        };
	    });
	}
	
	function _getOriginalConnection(dbInfo) {
	    return _getConnection(dbInfo, false);
	}
	
	function _getUpgradedConnection(dbInfo) {
	    return _getConnection(dbInfo, true);
	}
	
	function _isUpgradeNeeded(dbInfo, defaultVersion) {
	    if (!dbInfo.db) {
	        return true;
	    }
	
	    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
	    var isDowngrade = dbInfo.version < dbInfo.db.version;
	    var isUpgrade = dbInfo.version > dbInfo.db.version;
	
	    if (isDowngrade) {
	        // If the version is not the default one
	        // then warn for impossible downgrade.
	        if (dbInfo.version !== defaultVersion) {
	            console.warn('The database "' + dbInfo.name + '"' + ' can\'t be downgraded from version ' + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
	        }
	        // Align the versions to prevent errors.
	        dbInfo.version = dbInfo.db.version;
	    }
	
	    if (isUpgrade || isNewStore) {
	        // If the store is new then increment the version (if needed).
	        // This will trigger an "upgradeneeded" event which is required
	        // for creating a store.
	        if (isNewStore) {
	            var incVersion = dbInfo.db.version + 1;
	            if (incVersion > dbInfo.version) {
	                dbInfo.version = incVersion;
	            }
	        }
	
	        return true;
	    }
	
	    return false;
	}
	
	// encode a blob for indexeddb engines that don't support blobs
	function _encodeBlob(blob) {
	    return new Promise$1(function (resolve, reject) {
	        var reader = new FileReader();
	        reader.onerror = reject;
	        reader.onloadend = function (e) {
	            var base64 = btoa(e.target.result || '');
	            resolve({
	                __local_forage_encoded_blob: true,
	                data: base64,
	                type: blob.type
	            });
	        };
	        reader.readAsBinaryString(blob);
	    });
	}
	
	// decode an encoded blob
	function _decodeBlob(encodedBlob) {
	    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
	    return createBlob([arrayBuff], { type: encodedBlob.type });
	}
	
	// is this one of our fancy encoded blobs?
	function _isEncodedBlob(value) {
	    return value && value.__local_forage_encoded_blob;
	}
	
	// Specialize the default `ready()` function by making it dependent
	// on the current database operations. Thus, the driver will be actually
	// ready when it's been initialized (default) *and* there are no pending
	// operations on the database (initiated by some other instances).
	function _fullyReady(callback) {
	    var self = this;
	
	    var promise = self._initReady().then(function () {
	        var dbContext = dbContexts[self._dbInfo.name];
	
	        if (dbContext && dbContext.dbReady) {
	            return dbContext.dbReady;
	        }
	    });
	
	    executeTwoCallbacks(promise, callback, callback);
	    return promise;
	}
	
	// Open the IndexedDB database (automatically creates one if one didn't
	// previously exist), using any options set in the config.
	function _initStorage(options) {
	    var self = this;
	    var dbInfo = {
	        db: null
	    };
	
	    if (options) {
	        for (var i in options) {
	            dbInfo[i] = options[i];
	        }
	    }
	
	    // Initialize a singleton container for all running localForages.
	    if (!dbContexts) {
	        dbContexts = {};
	    }
	
	    // Get the current context of the database;
	    var dbContext = dbContexts[dbInfo.name];
	
	    // ...or create a new context.
	    if (!dbContext) {
	        dbContext = {
	            // Running localForages sharing a database.
	            forages: [],
	            // Shared database.
	            db: null,
	            // Database readiness (promise).
	            dbReady: null,
	            // Deferred operations on the database.
	            deferredOperations: []
	        };
	        // Register the new context in the global container.
	        dbContexts[dbInfo.name] = dbContext;
	    }
	
	    // Register itself as a running localForage in the current context.
	    dbContext.forages.push(self);
	
	    // Replace the default `ready()` function with the specialized one.
	    if (!self._initReady) {
	        self._initReady = self.ready;
	        self.ready = _fullyReady;
	    }
	
	    // Create an array of initialization states of the related localForages.
	    var initPromises = [];
	
	    function ignoreErrors() {
	        // Don't handle errors here,
	        // just makes sure related localForages aren't pending.
	        return Promise$1.resolve();
	    }
	
	    for (var j = 0; j < dbContext.forages.length; j++) {
	        var forage = dbContext.forages[j];
	        if (forage !== self) {
	            // Don't wait for itself...
	            initPromises.push(forage._initReady()["catch"](ignoreErrors));
	        }
	    }
	
	    // Take a snapshot of the related localForages.
	    var forages = dbContext.forages.slice(0);
	
	    // Initialize the connection process only when
	    // all the related localForages aren't pending.
	    return Promise$1.all(initPromises).then(function () {
	        dbInfo.db = dbContext.db;
	        // Get the connection or open a new one without upgrade.
	        return _getOriginalConnection(dbInfo);
	    }).then(function (db) {
	        dbInfo.db = db;
	        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
	            // Reopen the database for upgrading.
	            return _getUpgradedConnection(dbInfo);
	        }
	        return db;
	    }).then(function (db) {
	        dbInfo.db = dbContext.db = db;
	        self._dbInfo = dbInfo;
	        // Share the final connection amongst related localForages.
	        for (var k = 0; k < forages.length; k++) {
	            var forage = forages[k];
	            if (forage !== self) {
	                // Self is already up-to-date.
	                forage._dbInfo.db = dbInfo.db;
	                forage._dbInfo.version = dbInfo.version;
	            }
	        }
	    });
	}
	
	function getItem(key, callback) {
	    var self = this;
	
	    // Cast the key to a string, as that's all we can set as a key.
	    if (typeof key !== 'string') {
	        console.warn(key + ' used as a key, but it is not a string.');
	        key = String(key);
	    }
	
	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            var store = dbInfo.db.transaction(dbInfo.storeName, 'readonly').objectStore(dbInfo.storeName);
	            var req = store.get(key);
	
	            req.onsuccess = function () {
	                var value = req.result;
	                if (value === undefined) {
	                    value = null;
	                }
	                if (_isEncodedBlob(value)) {
	                    value = _decodeBlob(value);
	                }
	                resolve(value);
	            };
	
	            req.onerror = function () {
	                reject(req.error);
	            };
	        })["catch"](reject);
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	// Iterate over all items stored in database.
	function iterate(iterator, callback) {
	    var self = this;
	
	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            var store = dbInfo.db.transaction(dbInfo.storeName, 'readonly').objectStore(dbInfo.storeName);
	
	            var req = store.openCursor();
	            var iterationNumber = 1;
	
	            req.onsuccess = function () {
	                var cursor = req.result;
	
	                if (cursor) {
	                    var value = cursor.value;
	                    if (_isEncodedBlob(value)) {
	                        value = _decodeBlob(value);
	                    }
	                    var result = iterator(value, cursor.key, iterationNumber++);
	
	                    if (result !== void 0) {
	                        resolve(result);
	                    } else {
	                        cursor["continue"]();
	                    }
	                } else {
	                    resolve();
	                }
	            };
	
	            req.onerror = function () {
	                reject(req.error);
	            };
	        })["catch"](reject);
	    });
	
	    executeCallback(promise, callback);
	
	    return promise;
	}
	
	function setItem(key, value, callback) {
	    var self = this;
	
	    // Cast the key to a string, as that's all we can set as a key.
	    if (typeof key !== 'string') {
	        console.warn(key + ' used as a key, but it is not a string.');
	        key = String(key);
	    }
	
	    var promise = new Promise$1(function (resolve, reject) {
	        var dbInfo;
	        self.ready().then(function () {
	            dbInfo = self._dbInfo;
	            if (toString.call(value) === '[object Blob]') {
	                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
	                    if (blobSupport) {
	                        return value;
	                    }
	                    return _encodeBlob(value);
	                });
	            }
	            return value;
	        }).then(function (value) {
	            var transaction = dbInfo.db.transaction(dbInfo.storeName, 'readwrite');
	            var store = transaction.objectStore(dbInfo.storeName);
	
	            // The reason we don't _save_ null is because IE 10 does
	            // not support saving the `null` type in IndexedDB. How
	            // ironic, given the bug below!
	            // See: https://github.com/mozilla/localForage/issues/161
	            if (value === null) {
	                value = undefined;
	            }
	
	            transaction.oncomplete = function () {
	                // Cast to undefined so the value passed to
	                // callback/promise is the same as what one would get out
	                // of `getItem()` later. This leads to some weirdness
	                // (setItem('foo', undefined) will return `null`), but
	                // it's not my fault localStorage is our baseline and that
	                // it's weird.
	                if (value === undefined) {
	                    value = null;
	                }
	
	                resolve(value);
	            };
	            transaction.onabort = transaction.onerror = function () {
	                var err = req.error ? req.error : req.transaction.error;
	                reject(err);
	            };
	
	            var req = store.put(value, key);
	        })["catch"](reject);
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	function removeItem(key, callback) {
	    var self = this;
	
	    // Cast the key to a string, as that's all we can set as a key.
	    if (typeof key !== 'string') {
	        console.warn(key + ' used as a key, but it is not a string.');
	        key = String(key);
	    }
	
	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            var transaction = dbInfo.db.transaction(dbInfo.storeName, 'readwrite');
	            var store = transaction.objectStore(dbInfo.storeName);
	
	            // We use a Grunt task to make this safe for IE and some
	            // versions of Android (including those used by Cordova).
	            // Normally IE won't like `.delete()` and will insist on
	            // using `['delete']()`, but we have a build step that
	            // fixes this for us now.
	            var req = store["delete"](key);
	            transaction.oncomplete = function () {
	                resolve();
	            };
	
	            transaction.onerror = function () {
	                reject(req.error);
	            };
	
	            // The request will be also be aborted if we've exceeded our storage
	            // space.
	            transaction.onabort = function () {
	                var err = req.error ? req.error : req.transaction.error;
	                reject(err);
	            };
	        })["catch"](reject);
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	function clear(callback) {
	    var self = this;
	
	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            var transaction = dbInfo.db.transaction(dbInfo.storeName, 'readwrite');
	            var store = transaction.objectStore(dbInfo.storeName);
	            var req = store.clear();
	
	            transaction.oncomplete = function () {
	                resolve();
	            };
	
	            transaction.onabort = transaction.onerror = function () {
	                var err = req.error ? req.error : req.transaction.error;
	                reject(err);
	            };
	        })["catch"](reject);
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	function length(callback) {
	    var self = this;
	
	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            var store = dbInfo.db.transaction(dbInfo.storeName, 'readonly').objectStore(dbInfo.storeName);
	            var req = store.count();
	
	            req.onsuccess = function () {
	                resolve(req.result);
	            };
	
	            req.onerror = function () {
	                reject(req.error);
	            };
	        })["catch"](reject);
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	function key(n, callback) {
	    var self = this;
	
	    var promise = new Promise$1(function (resolve, reject) {
	        if (n < 0) {
	            resolve(null);
	
	            return;
	        }
	
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            var store = dbInfo.db.transaction(dbInfo.storeName, 'readonly').objectStore(dbInfo.storeName);
	
	            var advanced = false;
	            var req = store.openCursor();
	            req.onsuccess = function () {
	                var cursor = req.result;
	                if (!cursor) {
	                    // this means there weren't enough keys
	                    resolve(null);
	
	                    return;
	                }
	
	                if (n === 0) {
	                    // We have the first key, return it if that's what they
	                    // wanted.
	                    resolve(cursor.key);
	                } else {
	                    if (!advanced) {
	                        // Otherwise, ask the cursor to skip ahead n
	                        // records.
	                        advanced = true;
	                        cursor.advance(n);
	                    } else {
	                        // When we get here, we've got the nth key.
	                        resolve(cursor.key);
	                    }
	                }
	            };
	
	            req.onerror = function () {
	                reject(req.error);
	            };
	        })["catch"](reject);
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	function keys(callback) {
	    var self = this;
	
	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            var store = dbInfo.db.transaction(dbInfo.storeName, 'readonly').objectStore(dbInfo.storeName);
	
	            var req = store.openCursor();
	            var keys = [];
	
	            req.onsuccess = function () {
	                var cursor = req.result;
	
	                if (!cursor) {
	                    resolve(keys);
	                    return;
	                }
	
	                keys.push(cursor.key);
	                cursor["continue"]();
	            };
	
	            req.onerror = function () {
	                reject(req.error);
	            };
	        })["catch"](reject);
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	var asyncStorage = {
	    _driver: 'asyncStorage',
	    _initStorage: _initStorage,
	    iterate: iterate,
	    getItem: getItem,
	    setItem: setItem,
	    removeItem: removeItem,
	    clear: clear,
	    length: length,
	    key: key,
	    keys: keys
	};
	
	// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
	// it to Base64, so this is how we store it to prevent very strange errors with less
	// verbose ways of binary <-> string data storage.
	var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	
	var BLOB_TYPE_PREFIX = '~~local_forage_type~';
	var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;
	
	var SERIALIZED_MARKER = '__lfsc__:';
	var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;
	
	// OMG the serializations!
	var TYPE_ARRAYBUFFER = 'arbf';
	var TYPE_BLOB = 'blob';
	var TYPE_INT8ARRAY = 'si08';
	var TYPE_UINT8ARRAY = 'ui08';
	var TYPE_UINT8CLAMPEDARRAY = 'uic8';
	var TYPE_INT16ARRAY = 'si16';
	var TYPE_INT32ARRAY = 'si32';
	var TYPE_UINT16ARRAY = 'ur16';
	var TYPE_UINT32ARRAY = 'ui32';
	var TYPE_FLOAT32ARRAY = 'fl32';
	var TYPE_FLOAT64ARRAY = 'fl64';
	var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;
	
	var toString$1 = Object.prototype.toString;
	
	function stringToBuffer(serializedString) {
	    // Fill the string into a ArrayBuffer.
	    var bufferLength = serializedString.length * 0.75;
	    var len = serializedString.length;
	    var i;
	    var p = 0;
	    var encoded1, encoded2, encoded3, encoded4;
	
	    if (serializedString[serializedString.length - 1] === '=') {
	        bufferLength--;
	        if (serializedString[serializedString.length - 2] === '=') {
	            bufferLength--;
	        }
	    }
	
	    var buffer = new ArrayBuffer(bufferLength);
	    var bytes = new Uint8Array(buffer);
	
	    for (i = 0; i < len; i += 4) {
	        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
	        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
	        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
	        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);
	
	        /*jslint bitwise: true */
	        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
	        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
	        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
	    }
	    return buffer;
	}
	
	// Converts a buffer to a string to store, serialized, in the backend
	// storage library.
	function bufferToString(buffer) {
	    // base64-arraybuffer
	    var bytes = new Uint8Array(buffer);
	    var base64String = '';
	    var i;
	
	    for (i = 0; i < bytes.length; i += 3) {
	        /*jslint bitwise: true */
	        base64String += BASE_CHARS[bytes[i] >> 2];
	        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
	        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
	        base64String += BASE_CHARS[bytes[i + 2] & 63];
	    }
	
	    if (bytes.length % 3 === 2) {
	        base64String = base64String.substring(0, base64String.length - 1) + '=';
	    } else if (bytes.length % 3 === 1) {
	        base64String = base64String.substring(0, base64String.length - 2) + '==';
	    }
	
	    return base64String;
	}
	
	// Serialize a value, afterwards executing a callback (which usually
	// instructs the `setItem()` callback/promise to be executed). This is how
	// we store binary data with localStorage.
	function serialize(value, callback) {
	    var valueType = '';
	    if (value) {
	        valueType = toString$1.call(value);
	    }
	
	    // Cannot use `value instanceof ArrayBuffer` or such here, as these
	    // checks fail when running the tests using casper.js...
	    //
	    // TODO: See why those tests fail and use a better solution.
	    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
	        // Convert binary arrays to a string and prefix the string with
	        // a special marker.
	        var buffer;
	        var marker = SERIALIZED_MARKER;
	
	        if (value instanceof ArrayBuffer) {
	            buffer = value;
	            marker += TYPE_ARRAYBUFFER;
	        } else {
	            buffer = value.buffer;
	
	            if (valueType === '[object Int8Array]') {
	                marker += TYPE_INT8ARRAY;
	            } else if (valueType === '[object Uint8Array]') {
	                marker += TYPE_UINT8ARRAY;
	            } else if (valueType === '[object Uint8ClampedArray]') {
	                marker += TYPE_UINT8CLAMPEDARRAY;
	            } else if (valueType === '[object Int16Array]') {
	                marker += TYPE_INT16ARRAY;
	            } else if (valueType === '[object Uint16Array]') {
	                marker += TYPE_UINT16ARRAY;
	            } else if (valueType === '[object Int32Array]') {
	                marker += TYPE_INT32ARRAY;
	            } else if (valueType === '[object Uint32Array]') {
	                marker += TYPE_UINT32ARRAY;
	            } else if (valueType === '[object Float32Array]') {
	                marker += TYPE_FLOAT32ARRAY;
	            } else if (valueType === '[object Float64Array]') {
	                marker += TYPE_FLOAT64ARRAY;
	            } else {
	                callback(new Error('Failed to get type for BinaryArray'));
	            }
	        }
	
	        callback(marker + bufferToString(buffer));
	    } else if (valueType === '[object Blob]') {
	        // Conver the blob to a binaryArray and then to a string.
	        var fileReader = new FileReader();
	
	        fileReader.onload = function () {
	            // Backwards-compatible prefix for the blob type.
	            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);
	
	            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
	        };
	
	        fileReader.readAsArrayBuffer(value);
	    } else {
	        try {
	            callback(JSON.stringify(value));
	        } catch (e) {
	            console.error("Couldn't convert value into a JSON string: ", value);
	
	            callback(null, e);
	        }
	    }
	}
	
	// Deserialize data we've inserted into a value column/field. We place
	// special markers into our strings to mark them as encoded; this isn't
	// as nice as a meta field, but it's the only sane thing we can do whilst
	// keeping localStorage support intact.
	//
	// Oftentimes this will just deserialize JSON content, but if we have a
	// special marker (SERIALIZED_MARKER, defined above), we will extract
	// some kind of arraybuffer/binary data/typed array out of the string.
	function deserialize(value) {
	    // If we haven't marked this string as being specially serialized (i.e.
	    // something other than serialized JSON), we can just return it and be
	    // done with it.
	    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
	        return JSON.parse(value);
	    }
	
	    // The following code deals with deserializing some kind of Blob or
	    // TypedArray. First we separate out the type of data we're dealing
	    // with from the data itself.
	    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
	    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);
	
	    var blobType;
	    // Backwards-compatible blob type serialization strategy.
	    // DBs created with older versions of localForage will simply not have the blob type.
	    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
	        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
	        blobType = matcher[1];
	        serializedString = serializedString.substring(matcher[0].length);
	    }
	    var buffer = stringToBuffer(serializedString);
	
	    // Return the right type based on the code/type set during
	    // serialization.
	    switch (type) {
	        case TYPE_ARRAYBUFFER:
	            return buffer;
	        case TYPE_BLOB:
	            return createBlob([buffer], { type: blobType });
	        case TYPE_INT8ARRAY:
	            return new Int8Array(buffer);
	        case TYPE_UINT8ARRAY:
	            return new Uint8Array(buffer);
	        case TYPE_UINT8CLAMPEDARRAY:
	            return new Uint8ClampedArray(buffer);
	        case TYPE_INT16ARRAY:
	            return new Int16Array(buffer);
	        case TYPE_UINT16ARRAY:
	            return new Uint16Array(buffer);
	        case TYPE_INT32ARRAY:
	            return new Int32Array(buffer);
	        case TYPE_UINT32ARRAY:
	            return new Uint32Array(buffer);
	        case TYPE_FLOAT32ARRAY:
	            return new Float32Array(buffer);
	        case TYPE_FLOAT64ARRAY:
	            return new Float64Array(buffer);
	        default:
	            throw new Error('Unkown type: ' + type);
	    }
	}
	
	var localforageSerializer = {
	    serialize: serialize,
	    deserialize: deserialize,
	    stringToBuffer: stringToBuffer,
	    bufferToString: bufferToString
	};
	
	/*
	 * Includes code from:
	 *
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	// Open the WebSQL database (automatically creates one if one didn't
	// previously exist), using any options set in the config.
	function _initStorage$1(options) {
	    var self = this;
	    var dbInfo = {
	        db: null
	    };
	
	    if (options) {
	        for (var i in options) {
	            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
	        }
	    }
	
	    var dbInfoPromise = new Promise$1(function (resolve, reject) {
	        // Open the database; the openDatabase API will automatically
	        // create it for us if it doesn't exist.
	        try {
	            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
	        } catch (e) {
	            return reject(e);
	        }
	
	        // Create our key/value table if it doesn't exist.
	        dbInfo.db.transaction(function (t) {
	            t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' (id INTEGER PRIMARY KEY, key unique, value)', [], function () {
	                self._dbInfo = dbInfo;
	                resolve();
	            }, function (t, error) {
	                reject(error);
	            });
	        });
	    });
	
	    dbInfo.serializer = localforageSerializer;
	    return dbInfoPromise;
	}
	
	function getItem$1(key, callback) {
	    var self = this;
	
	    // Cast the key to a string, as that's all we can set as a key.
	    if (typeof key !== 'string') {
	        console.warn(key + ' used as a key, but it is not a string.');
	        key = String(key);
	    }
	
	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                t.executeSql('SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
	                    var result = results.rows.length ? results.rows.item(0).value : null;
	
	                    // Check to see if this is serialized content we need to
	                    // unpack.
	                    if (result) {
	                        result = dbInfo.serializer.deserialize(result);
	                    }
	
	                    resolve(result);
	                }, function (t, error) {
	
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	function iterate$1(iterator, callback) {
	    var self = this;
	
	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	
	            dbInfo.db.transaction(function (t) {
	                t.executeSql('SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
	                    var rows = results.rows;
	                    var length = rows.length;
	
	                    for (var i = 0; i < length; i++) {
	                        var item = rows.item(i);
	                        var result = item.value;
	
	                        // Check to see if this is serialized content
	                        // we need to unpack.
	                        if (result) {
	                            result = dbInfo.serializer.deserialize(result);
	                        }
	
	                        result = iterator(result, item.key, i + 1);
	
	                        // void(0) prevents problems with redefinition
	                        // of `undefined`.
	                        if (result !== void 0) {
	                            resolve(result);
	                            return;
	                        }
	                    }
	
	                    resolve();
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	function setItem$1(key, value, callback) {
	    var self = this;
	
	    // Cast the key to a string, as that's all we can set as a key.
	    if (typeof key !== 'string') {
	        console.warn(key + ' used as a key, but it is not a string.');
	        key = String(key);
	    }
	
	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            // The localStorage API doesn't return undefined values in an
	            // "expected" way, so undefined is always cast to null in all
	            // drivers. See: https://github.com/mozilla/localForage/pull/42
	            if (value === undefined) {
	                value = null;
	            }
	
	            // Save the original value to pass to the callback.
	            var originalValue = value;
	
	            var dbInfo = self._dbInfo;
	            dbInfo.serializer.serialize(value, function (value, error) {
	                if (error) {
	                    reject(error);
	                } else {
	                    dbInfo.db.transaction(function (t) {
	                        t.executeSql('INSERT OR REPLACE INTO ' + dbInfo.storeName + ' (key, value) VALUES (?, ?)', [key, value], function () {
	                            resolve(originalValue);
	                        }, function (t, error) {
	                            reject(error);
	                        });
	                    }, function (sqlError) {
	                        // The transaction failed; check
	                        // to see if it's a quota error.
	                        if (sqlError.code === sqlError.QUOTA_ERR) {
	                            // We reject the callback outright for now, but
	                            // it's worth trying to re-run the transaction.
	                            // Even if the user accepts the prompt to use
	                            // more storage on Safari, this error will
	                            // be called.
	                            //
	                            // TODO: Try to re-run the transaction.
	                            reject(sqlError);
	                        }
	                    });
	                }
	            });
	        })["catch"](reject);
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	function removeItem$1(key, callback) {
	    var self = this;
	
	    // Cast the key to a string, as that's all we can set as a key.
	    if (typeof key !== 'string') {
	        console.warn(key + ' used as a key, but it is not a string.');
	        key = String(key);
	    }
	
	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                t.executeSql('DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
	                    resolve();
	                }, function (t, error) {
	
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	// Deletes every item in the table.
	// TODO: Find out if this resets the AUTO_INCREMENT number.
	function clear$1(callback) {
	    var self = this;
	
	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                t.executeSql('DELETE FROM ' + dbInfo.storeName, [], function () {
	                    resolve();
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	// Does a simple `COUNT(key)` to get the number of items stored in
	// localForage.
	function length$1(callback) {
	    var self = this;
	
	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                // Ahhh, SQL makes this one soooooo easy.
	                t.executeSql('SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
	                    var result = results.rows.item(0).c;
	
	                    resolve(result);
	                }, function (t, error) {
	
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	// Return the key located at key index X; essentially gets the key from a
	// `WHERE id = ?`. This is the most efficient way I can think to implement
	// this rarely-used (in my experience) part of the API, but it can seem
	// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
	// the ID of each key will change every time it's updated. Perhaps a stored
	// procedure for the `setItem()` SQL would solve this problem?
	// TODO: Don't change ID on `setItem()`.
	function key$1(n, callback) {
	    var self = this;
	
	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                t.executeSql('SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
	                    var result = results.rows.length ? results.rows.item(0).key : null;
	                    resolve(result);
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	function keys$1(callback) {
	    var self = this;
	
	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                t.executeSql('SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
	                    var keys = [];
	
	                    for (var i = 0; i < results.rows.length; i++) {
	                        keys.push(results.rows.item(i).key);
	                    }
	
	                    resolve(keys);
	                }, function (t, error) {
	
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	var webSQLStorage = {
	    _driver: 'webSQLStorage',
	    _initStorage: _initStorage$1,
	    iterate: iterate$1,
	    getItem: getItem$1,
	    setItem: setItem$1,
	    removeItem: removeItem$1,
	    clear: clear$1,
	    length: length$1,
	    key: key$1,
	    keys: keys$1
	};
	
	// Config the localStorage backend, using options set in the config.
	function _initStorage$2(options) {
	    var self = this;
	    var dbInfo = {};
	    if (options) {
	        for (var i in options) {
	            dbInfo[i] = options[i];
	        }
	    }
	
	    dbInfo.keyPrefix = dbInfo.name + '/';
	
	    if (dbInfo.storeName !== self._defaultConfig.storeName) {
	        dbInfo.keyPrefix += dbInfo.storeName + '/';
	    }
	
	    self._dbInfo = dbInfo;
	    dbInfo.serializer = localforageSerializer;
	
	    return Promise$1.resolve();
	}
	
	// Remove all keys from the datastore, effectively destroying all data in
	// the app's key/value store!
	function clear$2(callback) {
	    var self = this;
	    var promise = self.ready().then(function () {
	        var keyPrefix = self._dbInfo.keyPrefix;
	
	        for (var i = localStorage.length - 1; i >= 0; i--) {
	            var key = localStorage.key(i);
	
	            if (key.indexOf(keyPrefix) === 0) {
	                localStorage.removeItem(key);
	            }
	        }
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	// Retrieve an item from the store. Unlike the original async_storage
	// library in Gaia, we don't modify return values at all. If a key's value
	// is `undefined`, we pass that value to the callback function.
	function getItem$2(key, callback) {
	    var self = this;
	
	    // Cast the key to a string, as that's all we can set as a key.
	    if (typeof key !== 'string') {
	        console.warn(key + ' used as a key, but it is not a string.');
	        key = String(key);
	    }
	
	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        var result = localStorage.getItem(dbInfo.keyPrefix + key);
	
	        // If a result was found, parse it from the serialized
	        // string into a JS object. If result isn't truthy, the key
	        // is likely undefined and we'll pass it straight to the
	        // callback.
	        if (result) {
	            result = dbInfo.serializer.deserialize(result);
	        }
	
	        return result;
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	// Iterate over all items in the store.
	function iterate$2(iterator, callback) {
	    var self = this;
	
	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        var keyPrefix = dbInfo.keyPrefix;
	        var keyPrefixLength = keyPrefix.length;
	        var length = localStorage.length;
	
	        // We use a dedicated iterator instead of the `i` variable below
	        // so other keys we fetch in localStorage aren't counted in
	        // the `iterationNumber` argument passed to the `iterate()`
	        // callback.
	        //
	        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
	        var iterationNumber = 1;
	
	        for (var i = 0; i < length; i++) {
	            var key = localStorage.key(i);
	            if (key.indexOf(keyPrefix) !== 0) {
	                continue;
	            }
	            var value = localStorage.getItem(key);
	
	            // If a result was found, parse it from the serialized
	            // string into a JS object. If result isn't truthy, the
	            // key is likely undefined and we'll pass it straight
	            // to the iterator.
	            if (value) {
	                value = dbInfo.serializer.deserialize(value);
	            }
	
	            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);
	
	            if (value !== void 0) {
	                return value;
	            }
	        }
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	// Same as localStorage's key() method, except takes a callback.
	function key$2(n, callback) {
	    var self = this;
	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        var result;
	        try {
	            result = localStorage.key(n);
	        } catch (error) {
	            result = null;
	        }
	
	        // Remove the prefix from the key, if a key is found.
	        if (result) {
	            result = result.substring(dbInfo.keyPrefix.length);
	        }
	
	        return result;
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	function keys$2(callback) {
	    var self = this;
	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        var length = localStorage.length;
	        var keys = [];
	
	        for (var i = 0; i < length; i++) {
	            if (localStorage.key(i).indexOf(dbInfo.keyPrefix) === 0) {
	                keys.push(localStorage.key(i).substring(dbInfo.keyPrefix.length));
	            }
	        }
	
	        return keys;
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	// Supply the number of keys in the datastore to the callback function.
	function length$2(callback) {
	    var self = this;
	    var promise = self.keys().then(function (keys) {
	        return keys.length;
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	// Remove an item from the store, nice and simple.
	function removeItem$2(key, callback) {
	    var self = this;
	
	    // Cast the key to a string, as that's all we can set as a key.
	    if (typeof key !== 'string') {
	        console.warn(key + ' used as a key, but it is not a string.');
	        key = String(key);
	    }
	
	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        localStorage.removeItem(dbInfo.keyPrefix + key);
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	// Set a key's value and run an optional callback once the value is set.
	// Unlike Gaia's implementation, the callback function is passed the value,
	// in case you want to operate on that value only after you're sure it
	// saved, or something like that.
	function setItem$2(key, value, callback) {
	    var self = this;
	
	    // Cast the key to a string, as that's all we can set as a key.
	    if (typeof key !== 'string') {
	        console.warn(key + ' used as a key, but it is not a string.');
	        key = String(key);
	    }
	
	    var promise = self.ready().then(function () {
	        // Convert undefined values to null.
	        // https://github.com/mozilla/localForage/pull/42
	        if (value === undefined) {
	            value = null;
	        }
	
	        // Save the original value to pass to the callback.
	        var originalValue = value;
	
	        return new Promise$1(function (resolve, reject) {
	            var dbInfo = self._dbInfo;
	            dbInfo.serializer.serialize(value, function (value, error) {
	                if (error) {
	                    reject(error);
	                } else {
	                    try {
	                        localStorage.setItem(dbInfo.keyPrefix + key, value);
	                        resolve(originalValue);
	                    } catch (e) {
	                        // localStorage capacity exceeded.
	                        // TODO: Make this a specific error/event.
	                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
	                            reject(e);
	                        }
	                        reject(e);
	                    }
	                }
	            });
	        });
	    });
	
	    executeCallback(promise, callback);
	    return promise;
	}
	
	var localStorageWrapper = {
	    _driver: 'localStorageWrapper',
	    _initStorage: _initStorage$2,
	    // Default API, from Gaia/localStorage.
	    iterate: iterate$2,
	    getItem: getItem$2,
	    setItem: setItem$2,
	    removeItem: removeItem$2,
	    clear: clear$2,
	    length: length$2,
	    key: key$2,
	    keys: keys$2
	};
	
	// Custom drivers are stored here when `defineDriver()` is called.
	// They are shared across all instances of localForage.
	var CustomDrivers = {};
	
	var DriverType = {
	    INDEXEDDB: 'asyncStorage',
	    LOCALSTORAGE: 'localStorageWrapper',
	    WEBSQL: 'webSQLStorage'
	};
	
	var DefaultDriverOrder = [DriverType.INDEXEDDB, DriverType.WEBSQL, DriverType.LOCALSTORAGE];
	
	var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'];
	
	var DefaultConfig = {
	    description: '',
	    driver: DefaultDriverOrder.slice(),
	    name: 'localforage',
	    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
	    // we can use without a prompt.
	    size: 4980736,
	    storeName: 'keyvaluepairs',
	    version: 1.0
	};
	
	var driverSupport = {};
	// Check to see if IndexedDB is available and if it is the latest
	// implementation; it's our preferred backend library. We use "_spec_test"
	// as the name of the database because it's not the one we'll operate on,
	// but it's useful to make sure its using the right spec.
	// See: https://github.com/mozilla/localForage/issues/128
	driverSupport[DriverType.INDEXEDDB] = isIndexedDBValid();
	
	driverSupport[DriverType.WEBSQL] = isWebSQLValid();
	
	driverSupport[DriverType.LOCALSTORAGE] = isLocalStorageValid();
	
	var isArray = Array.isArray || function (arg) {
	    return Object.prototype.toString.call(arg) === '[object Array]';
	};
	
	function callWhenReady(localForageInstance, libraryMethod) {
	    localForageInstance[libraryMethod] = function () {
	        var _args = arguments;
	        return localForageInstance.ready().then(function () {
	            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
	        });
	    };
	}
	
	function extend() {
	    for (var i = 1; i < arguments.length; i++) {
	        var arg = arguments[i];
	
	        if (arg) {
	            for (var key in arg) {
	                if (arg.hasOwnProperty(key)) {
	                    if (isArray(arg[key])) {
	                        arguments[0][key] = arg[key].slice();
	                    } else {
	                        arguments[0][key] = arg[key];
	                    }
	                }
	            }
	        }
	    }
	
	    return arguments[0];
	}
	
	function isLibraryDriver(driverName) {
	    for (var driver in DriverType) {
	        if (DriverType.hasOwnProperty(driver) && DriverType[driver] === driverName) {
	            return true;
	        }
	    }
	
	    return false;
	}
	
	var LocalForage = function () {
	    function LocalForage(options) {
	        _classCallCheck(this, LocalForage);
	
	        this.INDEXEDDB = DriverType.INDEXEDDB;
	        this.LOCALSTORAGE = DriverType.LOCALSTORAGE;
	        this.WEBSQL = DriverType.WEBSQL;
	
	        this._defaultConfig = extend({}, DefaultConfig);
	        this._config = extend({}, this._defaultConfig, options);
	        this._driverSet = null;
	        this._initDriver = null;
	        this._ready = false;
	        this._dbInfo = null;
	
	        this._wrapLibraryMethodsWithReady();
	        this.setDriver(this._config.driver);
	    }
	
	    // Set any config values for localForage; can be called anytime before
	    // the first API call (e.g. `getItem`, `setItem`).
	    // We loop through options so we don't overwrite existing config
	    // values.
	
	
	    LocalForage.prototype.config = function config(options) {
	        // If the options argument is an object, we use it to set values.
	        // Otherwise, we return either a specified config value or all
	        // config values.
	        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	            // If localforage is ready and fully initialized, we can't set
	            // any new configuration values. Instead, we return an error.
	            if (this._ready) {
	                return new Error("Can't call config() after localforage " + 'has been used.');
	            }
	
	            for (var i in options) {
	                if (i === 'storeName') {
	                    options[i] = options[i].replace(/\W/g, '_');
	                }
	
	                this._config[i] = options[i];
	            }
	
	            // after all config options are set and
	            // the driver option is used, try setting it
	            if ('driver' in options && options.driver) {
	                this.setDriver(this._config.driver);
	            }
	
	            return true;
	        } else if (typeof options === 'string') {
	            return this._config[options];
	        } else {
	            return this._config;
	        }
	    };
	
	    // Used to define a custom driver, shared across all instances of
	    // localForage.
	
	
	    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
	        var promise = new Promise$1(function (resolve, reject) {
	            try {
	                var driverName = driverObject._driver;
	                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');
	                var namingError = new Error('Custom driver name already in use: ' + driverObject._driver);
	
	                // A driver name should be defined and not overlap with the
	                // library-defined, default drivers.
	                if (!driverObject._driver) {
	                    reject(complianceError);
	                    return;
	                }
	                if (isLibraryDriver(driverObject._driver)) {
	                    reject(namingError);
	                    return;
	                }
	
	                var customDriverMethods = LibraryMethods.concat('_initStorage');
	                for (var i = 0; i < customDriverMethods.length; i++) {
	                    var customDriverMethod = customDriverMethods[i];
	                    if (!customDriverMethod || !driverObject[customDriverMethod] || typeof driverObject[customDriverMethod] !== 'function') {
	                        reject(complianceError);
	                        return;
	                    }
	                }
	
	                var supportPromise = Promise$1.resolve(true);
	                if ('_support' in driverObject) {
	                    if (driverObject._support && typeof driverObject._support === 'function') {
	                        supportPromise = driverObject._support();
	                    } else {
	                        supportPromise = Promise$1.resolve(!!driverObject._support);
	                    }
	                }
	
	                supportPromise.then(function (supportResult) {
	                    driverSupport[driverName] = supportResult;
	                    CustomDrivers[driverName] = driverObject;
	                    resolve();
	                }, reject);
	            } catch (e) {
	                reject(e);
	            }
	        });
	
	        executeTwoCallbacks(promise, callback, errorCallback);
	        return promise;
	    };
	
	    LocalForage.prototype.driver = function driver() {
	        return this._driver || null;
	    };
	
	    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
	        var self = this;
	        var getDriverPromise = Promise$1.resolve().then(function () {
	            if (isLibraryDriver(driverName)) {
	                switch (driverName) {
	                    case self.INDEXEDDB:
	                        return asyncStorage;
	                    case self.LOCALSTORAGE:
	                        return localStorageWrapper;
	                    case self.WEBSQL:
	                        return webSQLStorage;
	                }
	            } else if (CustomDrivers[driverName]) {
	                return CustomDrivers[driverName];
	            } else {
	                throw new Error('Driver not found.');
	            }
	        });
	        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
	        return getDriverPromise;
	    };
	
	    LocalForage.prototype.getSerializer = function getSerializer(callback) {
	        var serializerPromise = Promise$1.resolve(localforageSerializer);
	        executeTwoCallbacks(serializerPromise, callback);
	        return serializerPromise;
	    };
	
	    LocalForage.prototype.ready = function ready(callback) {
	        var self = this;
	
	        var promise = self._driverSet.then(function () {
	            if (self._ready === null) {
	                self._ready = self._initDriver();
	            }
	
	            return self._ready;
	        });
	
	        executeTwoCallbacks(promise, callback, callback);
	        return promise;
	    };
	
	    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
	        var self = this;
	
	        if (!isArray(drivers)) {
	            drivers = [drivers];
	        }
	
	        var supportedDrivers = this._getSupportedDrivers(drivers);
	
	        function setDriverToConfig() {
	            self._config.driver = self.driver();
	        }
	
	        function initDriver(supportedDrivers) {
	            return function () {
	                var currentDriverIndex = 0;
	
	                function driverPromiseLoop() {
	                    while (currentDriverIndex < supportedDrivers.length) {
	                        var driverName = supportedDrivers[currentDriverIndex];
	                        currentDriverIndex++;
	
	                        self._dbInfo = null;
	                        self._ready = null;
	
	                        return self.getDriver(driverName).then(function (driver) {
	                            self._extend(driver);
	                            setDriverToConfig();
	
	                            self._ready = self._initStorage(self._config);
	                            return self._ready;
	                        })["catch"](driverPromiseLoop);
	                    }
	
	                    setDriverToConfig();
	                    var error = new Error('No available storage method found.');
	                    self._driverSet = Promise$1.reject(error);
	                    return self._driverSet;
	                }
	
	                return driverPromiseLoop();
	            };
	        }
	
	        // There might be a driver initialization in progress
	        // so wait for it to finish in order to avoid a possible
	        // race condition to set _dbInfo
	        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
	            return Promise$1.resolve();
	        }) : Promise$1.resolve();
	
	        this._driverSet = oldDriverSetDone.then(function () {
	            var driverName = supportedDrivers[0];
	            self._dbInfo = null;
	            self._ready = null;
	
	            return self.getDriver(driverName).then(function (driver) {
	                self._driver = driver._driver;
	                setDriverToConfig();
	                self._wrapLibraryMethodsWithReady();
	                self._initDriver = initDriver(supportedDrivers);
	            });
	        })["catch"](function () {
	            setDriverToConfig();
	            var error = new Error('No available storage method found.');
	            self._driverSet = Promise$1.reject(error);
	            return self._driverSet;
	        });
	
	        executeTwoCallbacks(this._driverSet, callback, errorCallback);
	        return this._driverSet;
	    };
	
	    LocalForage.prototype.supports = function supports(driverName) {
	        return !!driverSupport[driverName];
	    };
	
	    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
	        extend(this, libraryMethodsAndProperties);
	    };
	
	    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
	        var supportedDrivers = [];
	        for (var i = 0, len = drivers.length; i < len; i++) {
	            var driverName = drivers[i];
	            if (this.supports(driverName)) {
	                supportedDrivers.push(driverName);
	            }
	        }
	        return supportedDrivers;
	    };
	
	    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
	        // Add a stub for each driver API method that delays the call to the
	        // corresponding driver method until localForage is ready. These stubs
	        // will be replaced by the driver methods as soon as the driver is
	        // loaded, so there is no performance impact.
	        for (var i = 0; i < LibraryMethods.length; i++) {
	            callWhenReady(this, LibraryMethods[i]);
	        }
	    };
	
	    LocalForage.prototype.createInstance = function createInstance(options) {
	        return new LocalForage(options);
	    };
	
	    return LocalForage;
	}();
	
	// The actual localForage object that we expose as a module or via a
	// global. It's extended by pulling in one of our other libraries.
	
	
	var localforage_js = new LocalForage();
	
	module.exports = localforage_js;
	
	},{"3":3}]},{},[4])(4)
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(19);
	
	/**
	 * Casts `value` as an array if it's not one.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.4.0
	 * @category Lang
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast array.
	 * @example
	 *
	 * _.castArray(1);
	 * // => [1]
	 *
	 * _.castArray({ 'a': 1 });
	 * // => [{ 'a': 1 }]
	 *
	 * _.castArray('abc');
	 * // => ['abc']
	 *
	 * _.castArray(null);
	 * // => [null]
	 *
	 * _.castArray(undefined);
	 * // => [undefined]
	 *
	 * _.castArray();
	 * // => []
	 *
	 * var array = [1, 2, 3];
	 * console.log(_.castArray(array) === array);
	 * // => true
	 */
	function castArray() {
	  if (!arguments.length) {
	    return [];
	  }
	  var value = arguments[0];
	  return isArray(value) ? value : [value];
	}
	
	module.exports = castArray;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(127),
	    listCacheDelete = __webpack_require__(128),
	    listCacheGet = __webpack_require__(129),
	    listCacheHas = __webpack_require__(130),
	    listCacheSet = __webpack_require__(131);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ },
/* 92 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ },
/* 93 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(18);
	
	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}
	
	module.exports = arrayIncludes;


/***/ },
/* 95 */
/***/ function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arrayIncludesWith;


/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },
/* 97 */
/***/ function(module, exports) {

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function asciiToArray(string) {
	  return string.split('');
	}
	
	module.exports = asciiToArray;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(25),
	    keys = __webpack_require__(49);
	
	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(25),
	    keysIn = __webpack_require__(149);
	
	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn(object, source) {
	  return object && copyObject(source, keysIn(source), object);
	}
	
	module.exports = baseAssignIn;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(91),
	    arrayEach = __webpack_require__(93),
	    assignValue = __webpack_require__(42),
	    baseAssign = __webpack_require__(98),
	    baseAssignIn = __webpack_require__(99),
	    cloneBuffer = __webpack_require__(111),
	    copyArray = __webpack_require__(112),
	    copySymbols = __webpack_require__(113),
	    copySymbolsIn = __webpack_require__(114),
	    getAllKeys = __webpack_require__(116),
	    getAllKeysIn = __webpack_require__(117),
	    getTag = __webpack_require__(121),
	    initCloneArray = __webpack_require__(123),
	    initCloneByTag = __webpack_require__(124),
	    initCloneObject = __webpack_require__(125),
	    isArray = __webpack_require__(19),
	    isBuffer = __webpack_require__(142),
	    isObject = __webpack_require__(32),
	    keys = __webpack_require__(49);
	
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;
	
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;
	
	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : initCloneObject(value);
	      if (!isDeep) {
	        return isFlat
	          ? copySymbolsIn(value, baseAssignIn(result, value))
	          : copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);
	
	  var keysFunc = isFull
	    ? (isFlat ? getAllKeysIn : getAllKeys)
	    : (isFlat ? keysIn : keys);
	
	  var props = isArr ? undefined : keysFunc(value);
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}
	
	module.exports = baseClone;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32);
	
	/** Built-in value references. */
	var objectCreate = Object.create;
	
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());
	
	module.exports = baseCreate;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(90),
	    arrayIncludes = __webpack_require__(94),
	    arrayIncludesWith = __webpack_require__(95),
	    arrayMap = __webpack_require__(96),
	    baseUnary = __webpack_require__(44),
	    cacheHas = __webpack_require__(107);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;
	
	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee == null ? value : iteratee(value);
	
	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseDifference;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(17),
	    isObjectLike = __webpack_require__(20);
	
	/** `Object#toString` result references. */
	var dateTag = '[object Date]';
	
	/**
	 * The base implementation of `_.isDate` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	 */
	function baseIsDate(value) {
	  return isObjectLike(value) && baseGetTag(value) == dateTag;
	}
	
	module.exports = baseIsDate;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(138),
	    overRest = __webpack_require__(133),
	    setToString = __webpack_require__(135);
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}
	
	module.exports = baseRest;


/***/ },
/* 105 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;
	
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	module.exports = baseSlice;


/***/ },
/* 106 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(18);
	
	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}
	
	module.exports = arrayIncludes;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var baseSlice = __webpack_require__(105);
	
	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : baseSlice(array, start, end);
	}
	
	module.exports = castSlice;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(18);
	
	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	 * that is not found in the character symbols.
	 *
	 * @private
	 * @param {Array} strSymbols The string symbols to inspect.
	 * @param {Array} chrSymbols The character symbols to find.
	 * @returns {number} Returns the index of the last unmatched string symbol.
	 */
	function charsEndIndex(strSymbols, chrSymbols) {
	  var index = strSymbols.length;
	
	  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	  return index;
	}
	
	module.exports = charsEndIndex;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(18);
	
	/**
	 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	 * that is not found in the character symbols.
	 *
	 * @private
	 * @param {Array} strSymbols The string symbols to inspect.
	 * @param {Array} chrSymbols The character symbols to find.
	 * @returns {number} Returns the index of the first unmatched string symbol.
	 */
	function charsStartIndex(strSymbols, chrSymbols) {
	  var index = -1,
	      length = strSymbols.length;
	
	  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	  return index;
	}
	
	module.exports = charsStartIndex;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(134);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
	
	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	
	  buffer.copy(result);
	  return result;
	}
	
	module.exports = cloneBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)(module)))

/***/ },
/* 112 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = copyArray;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(25),
	    getSymbols = __webpack_require__(119);
	
	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}
	
	module.exports = copySymbols;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(25),
	    getSymbolsIn = __webpack_require__(120);
	
	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn(source, object) {
	  return copyObject(source, getSymbolsIn(source), object);
	}
	
	module.exports = copySymbolsIn;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(118);
	
	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());
	
	module.exports = defineProperty;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(31);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 117 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = nativeKeysIn;


/***/ },
/* 118 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ },
/* 119 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;


/***/ },
/* 120 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;


/***/ },
/* 121 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },
/* 122 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 123 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);
	
	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}
	
	module.exports = initCloneArray;


/***/ },
/* 124 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(101),
	    getPrototype = __webpack_require__(46),
	    isPrototype = __webpack_require__(126);
	
	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}
	
	module.exports = initCloneObject;


/***/ },
/* 126 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 127 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(24);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(24);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(24);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(24);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(45);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)(module)))

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(92);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = overRest;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(45);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 135 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var asciiToArray = __webpack_require__(97),
	    hasUnicode = __webpack_require__(122),
	    unicodeToArray = __webpack_require__(137);
	
	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return hasUnicode(string)
	    ? unicodeToArray(string)
	    : asciiToArray(string);
	}
	
	module.exports = stringToArray;


/***/ },
/* 137 */
/***/ function(module, exports) {

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function asciiToArray(string) {
	  return string.split('');
	}
	
	module.exports = asciiToArray;


/***/ },
/* 138 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(18),
	    toInteger = __webpack_require__(151);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Gets the index at which the first occurrence of `value` is found in `array`
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons. If `fromIndex` is negative, it's used as the
	 * offset from the end of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 * @example
	 *
	 * _.indexOf([1, 2, 1, 2], 2);
	 * // => 1
	 *
	 * // Search from the `fromIndex`.
	 * _.indexOf([1, 2, 1, 2], 2, 2);
	 * // => 3
	 */
	function indexOf(array, value, fromIndex) {
	  var length = array == null ? 0 : array.length;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger(fromIndex);
	  if (index < 0) {
	    index = nativeMax(length + index, 0);
	  }
	  return baseIndexOf(array, value, index);
	}
	
	module.exports = indexOf;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(144),
	    isLength = __webpack_require__(145);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(140),
	    isObjectLike = __webpack_require__(20);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;


/***/ },
/* 142 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsDate = __webpack_require__(103),
	    baseUnary = __webpack_require__(44),
	    nodeUtil = __webpack_require__(132);
	
	/* Node.js helper references. */
	var nodeIsDate = nodeUtil && nodeUtil.isDate;
	
	/**
	 * Checks if `value` is classified as a `Date` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	 * @example
	 *
	 * _.isDate(new Date);
	 * // => true
	 *
	 * _.isDate('Mon April 23 2012');
	 * // => false
	 */
	var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
	
	module.exports = isDate;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(17),
	    isObject = __webpack_require__(32);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 145 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(17),
	    isObjectLike = __webpack_require__(20);
	
	/** `Object#toString` result references. */
	var numberTag = '[object Number]';
	
	/**
	 * Checks if `value` is classified as a `Number` primitive or object.
	 *
	 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	 * classified as numbers, use the `_.isFinite` method.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
	 * @example
	 *
	 * _.isNumber(3);
	 * // => true
	 *
	 * _.isNumber(Number.MIN_VALUE);
	 * // => true
	 *
	 * _.isNumber(Infinity);
	 * // => true
	 *
	 * _.isNumber('3');
	 * // => false
	 */
	function isNumber(value) {
	  return typeof value == 'number' ||
	    (isObjectLike(value) && baseGetTag(value) == numberTag);
	}
	
	module.exports = isNumber;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(17),
	    getPrototype = __webpack_require__(46),
	    isObjectLike = __webpack_require__(20);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(17),
	    isArray = __webpack_require__(19),
	    isObjectLike = __webpack_require__(20);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	}
	
	module.exports = isString;


/***/ },
/* 149 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = nativeKeysIn;


/***/ },
/* 150 */
/***/ function(module, exports) {

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}
	
	module.exports = noop;


/***/ },
/* 151 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 152 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(102),
	    baseRest = __webpack_require__(104),
	    isArrayLikeObject = __webpack_require__(141);
	
	/**
	 * Creates an array excluding all given values using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * **Note:** Unlike `_.pull`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...*} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.difference, _.xor
	 * @example
	 *
	 * _.without([2, 1, 2, 3], 1, 2);
	 * // => [3]
	 */
	var without = baseRest(function(array, values) {
	  return isArrayLikeObject(array)
	    ? baseDifference(array, values)
	    : [];
	});
	
	module.exports = without;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mobx_1 = __webpack_require__(3);
	/**
	 * `chunkProcessor` takes an observable array, observes it and calls `processor`
	 * once for a chunk of items added to the observable array, optionally deboucing the action.
	 * The maximum chunk size can be limited by number.
	 * This allows both, splitting larger into smaller chunks or (when debounced) combining smaller
	 * chunks and/or single items into reasonable chunks of work.
	 *
	 * @example
	 * const trackedActions = observable([])
	 * const stop = chunkProcessor(trackedActions, chunkOfMax10Items => {
	 *   sendTrackedActionsToServer(chunkOfMax10Items);
	 * }, 100, 10)
	 *
	 * // usage:
	 * trackedActions.push("scrolled")
	 * trackedActions.push("hoveredButton")
	 * // when both pushes happen within 100ms, there will be only one call to server
	 *
	 * @param {T[]} observableArray observable array instance to track
	 * @param {(item: T[]) => void} processor action to call per item
	 * @param {number} [debounce=0] optional debounce time in ms. With debounce 0 the processor will run synchronously
	 * @param {number} [maxChunkSize=0] optionally do not call on full array but smaller chunks. With 0 it will process the full array.
	 * @returns {IDisposer} stops the processor
	 */
	function chunkProcessor(observableArray, processor, debounce, maxChunkSize) {
	    if (debounce === void 0) { debounce = 0; }
	    if (maxChunkSize === void 0) { maxChunkSize = 0; }
	    if (!mobx_1.isObservableArray(observableArray))
	        throw new Error("Expected observable array as first argument");
	    if (!mobx_1.isAction(processor))
	        processor = mobx_1.action("chunkProcessor", processor);
	    var runner = function () {
	        var _loop_1 = function () {
	            var chunkSize = maxChunkSize === 0 ? observableArray.length : Math.min(observableArray.length, maxChunkSize);
	            // construct a final set
	            var items = observableArray.slice(0, chunkSize);
	            // clear the slice for next iteration
	            mobx_1.runInAction(function () { return observableArray.splice(0, chunkSize); });
	            // fire processor
	            processor(items);
	        };
	        while (observableArray.length > 0) {
	            _loop_1();
	        }
	    };
	    if (debounce > 0)
	        return mobx_1.autorunAsync(runner, debounce);
	    else
	        return mobx_1.autorun(runner);
	}
	exports.chunkProcessor = chunkProcessor;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var mobx_1 = __webpack_require__(3);
	var utils_1 = __webpack_require__(21);
	var RESERVED_NAMES = ["model", "reset", "submit", "isDirty", "isPropertyDirty"];
	var ViewModel = (function () {
	    function ViewModel(model) {
	        var _this = this;
	        this.model = model;
	        this.localValues = mobx_1.observable.map({});
	        utils_1.invariant(mobx_1.isObservableObject(model), "createViewModel expects an observable object");
	        Object.keys(model).forEach(function (key) {
	            utils_1.invariant(RESERVED_NAMES.indexOf(key) === -1, "The propertyname " + key + " is reserved and cannot be used with viewModels");
	            Object.defineProperty(_this, key, {
	                enumerable: true,
	                configurable: true,
	                get: function () {
	                    if (_this.isPropertyDirty(key))
	                        return _this.localValues.get(key);
	                    else
	                        return _this.model[key];
	                },
	                set: mobx_1.action(function (value) {
	                    if (_this.isPropertyDirty(key) || value !== _this.model[key]) {
	                        _this.localValues.set(key, value);
	                    }
	                })
	            });
	        });
	    }
	    Object.defineProperty(ViewModel.prototype, "isDirty", {
	        get: function () {
	            return this.localValues.size > 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ViewModel.prototype.isPropertyDirty = function (key) {
	        return this.localValues.has(key);
	    };
	    ViewModel.prototype.submit = function () {
	        var _this = this;
	        this.localValues.keys().forEach(function (key) {
	            var source = _this.localValues.get(key);
	            var destination = _this.model[key];
	            if (mobx_1.isObservableArray(destination)) {
	                destination.replace(source);
	            }
	            else if (mobx_1.isObservableMap(destination)) {
	                destination.clear();
	                destination.merge(source);
	            }
	            else {
	                _this.model[key] = source;
	            }
	        });
	        this.localValues.clear();
	    };
	    ViewModel.prototype.reset = function () {
	        this.localValues.clear();
	    };
	    ViewModel.prototype.resetProperty = function (key) {
	        this.localValues.delete(key);
	    };
	    return ViewModel;
	}());
	__decorate([
	    mobx_1.computed
	], ViewModel.prototype, "isDirty", null);
	__decorate([
	    mobx_1.action
	], ViewModel.prototype, "submit", null);
	__decorate([
	    mobx_1.action
	], ViewModel.prototype, "reset", null);
	__decorate([
	    mobx_1.action
	], ViewModel.prototype, "resetProperty", null);
	/**
	 * `createViewModel` takes an object with observable properties (model)
	 * and wraps a viewmodel around it. The viewmodel proxies all enumerable property of the original model with the following behavior:
	 *  - as long as no new value has been assigned to the viewmodel property, the original property will be returned.
	 *  - any future change in the model will be visible in the viewmodel as well unless the viewmodel property was dirty at the time of the attempted change.
	 *  - once a new value has been assigned to a property of the viewmodel, that value will be returned during a read of that property in the future. However, the original model remain untouched until `submit()` is called.
	 *
	 * The viewmodel exposes the following additional methods, besides all the enumerable properties of the model:
	 * - `submit()`: copies all the values of the viewmodel to the model and resets the state
	 * - `reset()`: resets the state of the viewmodel, abandoning all local modifications
	 * - `resetProperty(propName)`: resets the specified property of the viewmodel
	 * - `isDirty`: observable property indicating if the viewModel contains any modifications
	 * - `isPropertyDirty(propName)`: returns true if the specified property is dirty
	 * - `model`: The original model object for which this viewModel was created
	 *
	 * You may use observable arrays, maps and objects with `createViewModel` but keep in mind to assign fresh instances of those to the viewmodel's properties, otherwise you would end up modifying the properties of the original model.
	 * Note that if you read a non-dirty property, viewmodel only proxies the read to the model. You therefore need to assign a fresh instance not only the first time you make the assignment but also after calling `reset()` or `submit()`.
	 *
	 * @example
	 * class Todo {
	 *   \@observable title = "Test"
	 * }
	 *
	 * const model = new Todo()
	 * const viewModel = createViewModel(model);
	 *
	 * autorun(() => console.log(viewModel.model.title, ",", viewModel.title))
	 * // prints "Test, Test"
	 * model.title = "Get coffee"
	 * // prints "Get coffee, Get coffee", viewModel just proxies to model
	 * viewModel.title = "Get tea"
	 * // prints "Get coffee, Get tea", viewModel's title is now dirty, and the local value will be printed
	 * viewModel.submit()
	 * // prints "Get tea, Get tea", changes submitted from the viewModel to the model, viewModel is proxying again
	 * viewModel.title = "Get cookie"
	 * // prints "Get tea, Get cookie" // viewModel has diverged again
	 * viewModel.reset()
	 * // prints "Get tea, Get tea", changes of the viewModel have been abandoned
	 *
	 * @param {T} model
	 * @returns {(T & IViewModel<T>)}
	 * ```
	 */
	function createViewModel(model) {
	    return new ViewModel(model);
	}
	exports.createViewModel = createViewModel;


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mobx_1 = __webpack_require__(3);
	var utils_1 = __webpack_require__(21);
	exports.PENDING = "pending";
	exports.FULFILLED = "fulfilled";
	exports.REJECTED = "rejected";
	var PromiseBasedObservable = (function () {
	    function PromiseBasedObservable(promise, initialValue) {
	        if (initialValue === void 0) { initialValue = undefined; }
	        var _this = this;
	        this.promise = promise;
	        this._state = mobx_1.observable(exports.PENDING); // MWE: Hm... as any should not be needed...
	        this._reason = mobx_1.observable.shallowBox(undefined);
	        this._observable = mobx_1.observable.box(initialValue);
	        promise.then(mobx_1.action("observableFromPromise-resolve", function (value) {
	            _this._observable.set(value);
	            _this._state.set("fulfilled");
	        }), mobx_1.action("observableFromPromise-reject", function (reason) {
	            _this._reason.set(reason);
	            _this._observable.set(reason);
	            _this._state.set("rejected");
	        }));
	    }
	    Object.defineProperty(PromiseBasedObservable.prototype, "value", {
	        get: function () {
	            return this._observable.get();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PromiseBasedObservable.prototype, "state", {
	        get: function () {
	            return this._state.get();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PromiseBasedObservable.prototype, "reason", {
	        get: function () {
	            utils_1.deprecated("In `fromPromise`: `.reason` is deprecated, use `.value` instead");
	            return this._reason.get();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PromiseBasedObservable.prototype.case = function (handlers) {
	        switch (this.state) {
	            case "pending": return handlers.pending && handlers.pending();
	            case "rejected": return handlers.rejected && handlers.rejected(this.value);
	            case "fulfilled": return handlers.fulfilled && handlers.fulfilled(this.value);
	        }
	    };
	    return PromiseBasedObservable;
	}());
	/**
	 * `fromPromise` takes a Promise and returns an object with 3 observable properties that track
	 * the status of the promise. The returned object has the following observable properties:
	 *  - `value`: either the initial value, the value the Promise resolved to, or the value the Promise was rejected with. use `.state` if you need to be able to tell the difference
	 *  - `state`: one of `"pending"`, `"fulfilled"` or `"rejected"`
	 *  - `promise`: (not observable) the original promise object
	 * and the following method:
	 * - `case({fulfilled, rejected, pending})`: maps over the result using the provided handlers, or returns `undefined` if a handler isn't available for the current promise state.
	 *
	 * @example
	 * const fetchResult = fromPromise(fetch("http://someurl"))
	 *
	 * // combine with when..
	 * when(
	 *   () => fetchResult.state !== "pending"
	 *   () => {
	 *     console.log("Got ", fetchResult.value)
	 *   }
	 * )
	 *
	 * // or a mobx-react component..
	 * const myComponent = observer(({ fetchResult }) => {
	 *   switch(fetchResult.state) {
	 *      case "pending": return <div>Loading...</div>
	 *      case "rejected": return <div>Ooops... {fetchResult.value}</div>
	 *      case "fulfilled": return <div>Gotcha: {fetchResult.value}</div>
	 *   }
	 * })
	 *
	 * // or using the case method instead of switch:
	 *
	 * const myComponent = observer(({ fetchResult }) =>
	 *   fetchResult.case({
	 *     pending:   () => <div>Loading...</div>
	 *     rejected:  error => <div>Ooops.. {error}</div>
	 *     fulfilled: value => <div>Gotcha: {value}</div>
	 *   }))
	 *
	 * Note that the status strings are available as constants:
	 * `mobxUtils.PENDING`, `mobxUtils.REJECTED`, `mobxUtil.FULFILLED`
	 *
	 * @param {IThenable<T>} promise The promise which will be observed
	 * @param {T} [initialValue=undefined] Optional predefined initial value
	 * @returns {IPromiseBasedObservable<T>}
	 */
	function fromPromise(promise, initialValue) {
	    if (initialValue === void 0) { initialValue = undefined; }
	    return new PromiseBasedObservable(promise, initialValue);
	}
	exports.fromPromise = fromPromise;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mobx_1 = __webpack_require__(3);
	/**
	 * Like normal `when`, except that this `when` will automatically dispose if the condition isn't met within a certain amount of time.
	 *
	 * @example
	 * test("expect store to load", t => {
	 *   const store = {
	 *     items: [],
	 *     loaded: false
	 *   }
	 *   fetchDataForStore((data) => {
	 *     store.items = data;
	 *     store.loaded = true;
	 *   })
	 *   whenWithTimeout(
	 *     () => store.loaded
	 *     () => t.end()
	 *     2000,
	 *     () => t.fail("store didn't load with 2 secs")
	 *   )
	 * })
	 *
	 *
	 * @export
	 * @param {() => boolean} expr see when, the expression to await
	 * @param {() => void} action see when, the action to execut when expr returns truthy
	 * @param {number} [timeout=10000] maximum amount when spends waiting before giving up
	 * @param {any} [onTimeout=() => {}] the ontimeout handler will be called if the condition wasn't met within the given time
	 * @returns {IDisposer} disposer function that can be used to cancel the when prematurely. Neither action or onTimeout will be fired if disposed
	 */
	function whenWithTimeout(expr, action, timeout, onTimeout) {
	    if (timeout === void 0) { timeout = 10000; }
	    if (onTimeout === void 0) { onTimeout = function () { }; }
	    var done = false;
	    var handle = setTimeout(function () {
	        if (!done) {
	            disposer();
	            onTimeout();
	        }
	    }, timeout);
	    var disposer = mobx_1.when(expr, function () {
	        done = true;
	        clearTimeout(handle);
	        action();
	    });
	    return function () {
	        clearTimeout(handle);
	        disposer();
	    };
	}
	exports.whenWithTimeout = whenWithTimeout;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mobx_1 = __webpack_require__(3);
	/**
	 * MobX normally suspends any computed value that is not in use by any reaction,
	 * and lazily re-evaluates the expression if needed outside a reaction while not in use.
	 * `keepAlive` marks a computed value as always in use, meaning that it will always fresh, but never disposed automatically.
	 *
	 * @example
	 * const obj = observable({
	 *   number: 3,
	 *   doubler: function() { return this.number * 2 }
	 * })
	 * const stop = keepAlive(obj, "doubler")
	 *
	 * @param {Object} target an object that has a computed property, created by `@computed` or `extendObservable`
	 * @param {string} property the name of the property to keep alive
	 * @returns {IDisposer} stops this keep alive so that the computed value goes back to normal behavior
	 */
	/**
	 * @example
	 * const number = observable(3)
	 * const doubler = computed(() => number.get() * 2)
	 * const stop = keepAlive(doubler)
	 * // doubler will now stay in sync reactively even when there are no further observers
	 * stop()
	 * // normal behavior, doubler results will be recomputed if not observed but needed, but lazily
	 *
	 * @param {IComputedValue<any>} computedValue created using the `computed` function
	 * @returns {IDisposer} stops this keep alive so that the computed value goes back to normal behavior
	 */
	function keepAlive(_1, _2) {
	    var computed = mobx_1.extras.getAtom(_1, _2);
	    if (!computed)
	        throw new Error("No computed provided, please provide an object created with `computed(() => expr)` or an object + property name");
	    return computed.observe(function () { });
	}
	exports.keepAlive = keepAlive;


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(21);
	var mobx_1 = __webpack_require__(3);
	/**
	 * `lazyObservable` creates an observable around a `fetch` method that will not be invoked
	 * util the observable is needed the first time.
	 * The fetch method receives a `sink` callback which can be used to replace the
	 * current value of the lazyObservable. It is allowed to call `sink` multiple times
	 * to keep the lazyObservable up to date with some external resource.
	 *
	 * Note that it is the `current()` call itself which is being tracked by MobX,
	 * so make sure that you don't dereference to early.
	 *
	 * @example
	 * const userProfile = lazyObservable(
	 *   sink => fetch("/myprofile").then(profile => sink(profile))
	 * )
	 *
	 * // use the userProfile in a React component:
	 * const Profile = observer(({ userProfile }) =>
	 *   userProfile.current() === undefined
	 *   ? <div>Loading user profile...</div>
	 *   : <div>{userProfile.current().displayName}</div>
	 * )
	 *
	 * // triggers refresh the userProfile
	 * userProfile.refresh()
	 *
	 * @param {(sink: (newValue: T) => void) => void} fetch method that will be called the first time the value of this observable is accessed. The provided sink can be used to produce a new value, synchronously or asynchronously
	 * @param {T} [initialValue=undefined] optional initialValue that will be returned from `current` as long as the `sink` has not been called at least once
	 * @returns {{
	 *     current(): T,
	 *     refresh(): T,
	 *     reset(): T
	 * }}
	 */
	function lazyObservable(fetch, initialValue, modifier) {
	    if (initialValue === void 0) { initialValue = undefined; }
	    if (modifier === void 0) { modifier = utils_1.IDENTITY; }
	    var started = false;
	    var value = mobx_1.observable(modifier(initialValue));
	    var currentFnc = function () {
	        if (!started) {
	            started = true;
	            fetch(function (newValue) {
	                mobx_1.extras.allowStateChanges(true, function () {
	                    value.set(newValue);
	                });
	            });
	        }
	        return value.get();
	    };
	    var resetFnc = mobx_1.action("lazyObservable-reset", function () {
	        value.set(initialValue);
	        return value.get();
	    });
	    return {
	        current: currentFnc,
	        refresh: function () {
	            if (started) {
	                started = false;
	                return currentFnc();
	            }
	            else {
	                return value.get();
	            }
	        },
	        reset: function () {
	            return resetFnc();
	        }
	    };
	}
	exports.lazyObservable = lazyObservable;


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(156));
	__export(__webpack_require__(159));
	__export(__webpack_require__(51));
	__export(__webpack_require__(162));
	__export(__webpack_require__(155));
	__export(__webpack_require__(157));
	__export(__webpack_require__(158));
	__export(__webpack_require__(163));
	__export(__webpack_require__(154));
	__export(__webpack_require__(161));
	__export(__webpack_require__(21));


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var from_resource_1 = __webpack_require__(51);
	var tickers = ({});
	/**
	 * Returns the current date time as epoch number.
	 * The date time is read from an observable which is updated automatically after the given interval.
	 * So basically it treats time as an observable.
	 *
	 * The function takes an interval as parameter, which indicates how often `now()` will return a new value.
	 * If no interval is given, it will update each second. If "frame" is specified, it will update each time a
	 * `requestAnimationFrame` is available.
	 *
	 * Multiple clocks with the same interval will automatically be synchronized.
	 *
	 * Countdown example: http://jsbin.com/roqesit/1/edit?js,output
	 *
	 * @example
	 *
	 * const start = Date.now()
	 *
	 * autorun(() => {
	 *   console.log("Seconds elapsed: ", (mobxUtils.now() - start) / 1000)
	 * })
	 *
	 *
	 * @export
	 * @param {(number | "frame")} [interval=1000] interval in milliseconds about how often the interval should update
	 * @returns
	 */
	function now(interval) {
	    if (interval === void 0) { interval = 1000; }
	    if (!tickers[interval]) {
	        if (typeof interval === "number")
	            tickers[interval] = createIntervalTicker(interval);
	        else
	            tickers[interval] = createAnimationFrameTicker();
	    }
	    return tickers[interval].current();
	}
	exports.now = now;
	function createIntervalTicker(interval) {
	    var subscriptionHandle;
	    return from_resource_1.fromResource(function (sink) {
	        subscriptionHandle = setInterval(function () { return sink(Date.now()); }, interval);
	    }, function () {
	        clearInterval(subscriptionHandle);
	    }, Date.now());
	}
	function createAnimationFrameTicker() {
	    var subscriptionHandle;
	    var frameBasedTicker = from_resource_1.fromResource(function (sink) {
	        function scheduleTick() {
	            window.requestAnimationFrame(function () {
	                sink(Date.now());
	                if (frameBasedTicker.isAlive())
	                    scheduleTick();
	            });
	        }
	        scheduleTick();
	    }, function () { }, Date.now());
	    return frameBasedTicker;
	}


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var mobx_1 = __webpack_require__(3);
	function observableSymbol() {
	    return (typeof Symbol === "function" && Symbol.observable) || "@@observable";
	}
	function self() {
	    return this;
	}
	/**
	 * Converts an expression to an observable stream (a.k.a. TC 39 Observable / RxJS observable).
	 * The provided expression is tracked by mobx as long as there are subscribers, automatically
	 * emitting when new values become available. The expressions respect (trans)actions.
	 *
	 * @example
	 *
	 * const user = observable({
	 *   firstName: "C.S",
	 *   lastName: "Lewis"
	 * })
	 *
	 * Rx.Observable
	 *   .from(mobxUtils.toStream(() => user.firstname + user.lastName))
	 *   .scan(nameChanges => nameChanges + 1, 0)
	 *   .subscribe(nameChanges => console.log("Changed name ", nameChanges, "times"))
	 *
	 * @export
	 * @template T
	 * @param {() => T} expression
	 * @returns {IObservableStream<T>}
	 */
	function toStream(expression) {
	    var computedValue = mobx_1.computed(expression);
	    return _a = {
	            subscribe: function (observer) {
	                return {
	                    unsubscribe: computedValue.observe(typeof observer === "function"
	                        ? function (_a) {
	                            var newValue = _a.newValue;
	                            return observer(newValue);
	                        }
	                        : function (_a) {
	                            var newValue = _a.newValue;
	                            return observer.next(newValue);
	                        })
	                };
	            }
	        },
	        _a[observableSymbol()] = self,
	        _a;
	    var _a;
	}
	exports.toStream = toStream;
	var StreamListener = (function () {
	    function StreamListener(observable, initialValue) {
	        var _this = this;
	        this.current = undefined;
	        mobx_1.runInAction(function () {
	            _this.current = initialValue;
	            _this.subscription = observable.subscribe(_this);
	        });
	    }
	    StreamListener.prototype.dispose = function () {
	        this.subscription.unsubscribe();
	    };
	    StreamListener.prototype.next = function (value) {
	        this.current = value;
	    };
	    StreamListener.prototype.complete = function () {
	        this.subscription.unsubscribe();
	        this.dispose();
	    };
	    StreamListener.prototype.error = function (value) {
	        this.current = value;
	        this.dispose();
	    };
	    return StreamListener;
	}());
	__decorate([
	    mobx_1.observable.ref
	], StreamListener.prototype, "current", void 0);
	__decorate([
	    mobx_1.action
	], StreamListener.prototype, "next", null);
	__decorate([
	    mobx_1.action
	], StreamListener.prototype, "complete", null);
	__decorate([
	    mobx_1.action
	], StreamListener.prototype, "error", null);
	/**
	 *
	 * Converts an subscribable, observable stream (TC 39 observable / RxJS stream)
	 * into an object which stores the current value (as `current`). The subscription can be cancelled through the `dispose` method.
	 * Takes an initial value as second optional argument
	 *
	 * @example
	 * const debouncedClickDelta = MobxUtils.fromStream(Rx.Observable.fromEvent(button, 'click')
	 *     .throttleTime(1000)
	 *     .map(event => event.clientX)
	 *     .scan((count, clientX) => count + clientX, 0)
	 * )
	 *
	 * autorun(() => {
	 *     console.log("distance moved", debouncedClickDelta.current)
	 * })
	 *
	 * @export
	 * @template T
	 * @param {IObservableStream<T>} observable
	 * @returns {{
	 *     current: T;
	 *     dispose(): void;
	 * }}
	 */
	function fromStream(observable, initialValue) {
	    if (initialValue === void 0) { initialValue = undefined; }
	    return new StreamListener(observable, initialValue);
	}
	exports.fromStream = fromStream;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mobx_1 = __webpack_require__(3);
	/**
	 * `queueProcessor` takes an observable array, observes it and calls `processor`
	 * once for each item added to the observable array, optionally deboucing the action
	 *
	 * @example
	 * const pendingNotifications = observable([])
	 * const stop = queueProcessor(pendingNotifications, msg => {
	 *   // show Desktop notification
	 *   new Notification(msg);
	 * })
	 *
	 * // usage:
	 * pendingNotifications.push("test!")
	 *
	 * @param {T[]} observableArray observable array instance to track
	 * @param {(item: T) => void} processor action to call per item
	 * @param {number} [debounce=0] optional debounce time in ms. With debounce 0 the processor will run synchronously
	 * @returns {IDisposer} stops the processor
	 */
	function queueProcessor(observableArray, processor, debounce) {
	    if (debounce === void 0) { debounce = 0; }
	    if (!mobx_1.isObservableArray(observableArray))
	        throw new Error("Expected observable array as first argument");
	    if (!mobx_1.isAction(processor))
	        processor = mobx_1.action("queueProcessor", processor);
	    var runner = function () {
	        // construct a final set
	        var items = observableArray.slice(0);
	        // clear the queue for next iteration
	        mobx_1.runInAction(function () { return observableArray.splice(0); });
	        // fire processor
	        items.forEach(processor);
	    };
	    if (debounce > 0)
	        return mobx_1.autorunAsync(runner, debounce);
	    else
	        return mobx_1.autorun(runner);
	}
	exports.queueProcessor = queueProcessor;


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * Reqwest! A general purpose XHR connection manager
	  * license MIT (c) Dustin Diaz 2015
	  * https://github.com/ded/reqwest
	  */
	
	!function (name, context, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else context[name] = definition()
	}('reqwest', this, function () {
	
	  var context = this
	
	  if ('window' in context) {
	    var doc = document
	      , byTag = 'getElementsByTagName'
	      , head = doc[byTag]('head')[0]
	  } else {
	    var XHR2
	    try {
	      XHR2 = __webpack_require__(187)
	    } catch (ex) {
	      throw new Error('Peer dependency `xhr2` required! Please npm install xhr2')
	    }
	  }
	
	
	  var httpsRe = /^http/
	    , protocolRe = /(^\w+):\/\//
	    , twoHundo = /^(20\d|1223)$/ //http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	    , readyState = 'readyState'
	    , contentType = 'Content-Type'
	    , requestedWith = 'X-Requested-With'
	    , uniqid = 0
	    , callbackPrefix = 'reqwest_' + (+new Date())
	    , lastValue // data stored by the most recent JSONP callback
	    , xmlHttpRequest = 'XMLHttpRequest'
	    , xDomainRequest = 'XDomainRequest'
	    , noop = function () {}
	
	    , isArray = typeof Array.isArray == 'function'
	        ? Array.isArray
	        : function (a) {
	            return a instanceof Array
	          }
	
	    , defaultHeaders = {
	          'contentType': 'application/x-www-form-urlencoded'
	        , 'requestedWith': xmlHttpRequest
	        , 'accept': {
	              '*':  'text/javascript, text/html, application/xml, text/xml, */*'
	            , 'xml':  'application/xml, text/xml'
	            , 'html': 'text/html'
	            , 'text': 'text/plain'
	            , 'json': 'application/json, text/javascript'
	            , 'js':   'application/javascript, text/javascript'
	          }
	      }
	
	    , xhr = function(o) {
	        // is it x-domain
	        if (o['crossOrigin'] === true) {
	          var xhr = context[xmlHttpRequest] ? new XMLHttpRequest() : null
	          if (xhr && 'withCredentials' in xhr) {
	            return xhr
	          } else if (context[xDomainRequest]) {
	            return new XDomainRequest()
	          } else {
	            throw new Error('Browser does not support cross-origin requests')
	          }
	        } else if (context[xmlHttpRequest]) {
	          return new XMLHttpRequest()
	        } else if (XHR2) {
	          return new XHR2()
	        } else {
	          return new ActiveXObject('Microsoft.XMLHTTP')
	        }
	      }
	    , globalSetupOptions = {
	        dataFilter: function (data) {
	          return data
	        }
	      }
	
	  function succeed(r) {
	    var protocol = protocolRe.exec(r.url)
	    protocol = (protocol && protocol[1]) || context.location.protocol
	    return httpsRe.test(protocol) ? twoHundo.test(r.request.status) : !!r.request.response
	  }
	
	  function handleReadyState(r, success, error) {
	    return function () {
	      // use _aborted to mitigate against IE err c00c023f
	      // (can't read props on aborted request objects)
	      if (r._aborted) return error(r.request)
	      if (r._timedOut) return error(r.request, 'Request is aborted: timeout')
	      if (r.request && r.request[readyState] == 4) {
	        r.request.onreadystatechange = noop
	        if (succeed(r)) success(r.request)
	        else
	          error(r.request)
	      }
	    }
	  }
	
	  function setHeaders(http, o) {
	    var headers = o['headers'] || {}
	      , h
	
	    headers['Accept'] = headers['Accept']
	      || defaultHeaders['accept'][o['type']]
	      || defaultHeaders['accept']['*']
	
	    var isAFormData = typeof FormData !== 'undefined' && (o['data'] instanceof FormData);
	    // breaks cross-origin requests with legacy browsers
	    if (!o['crossOrigin'] && !headers[requestedWith]) headers[requestedWith] = defaultHeaders['requestedWith']
	    if (!headers[contentType] && !isAFormData) headers[contentType] = o['contentType'] || defaultHeaders['contentType']
	    for (h in headers)
	      headers.hasOwnProperty(h) && 'setRequestHeader' in http && http.setRequestHeader(h, headers[h])
	  }
	
	  function setCredentials(http, o) {
	    if (typeof o['withCredentials'] !== 'undefined' && typeof http.withCredentials !== 'undefined') {
	      http.withCredentials = !!o['withCredentials']
	    }
	  }
	
	  function generalCallback(data) {
	    lastValue = data
	  }
	
	  function urlappend (url, s) {
	    return url + (/\?/.test(url) ? '&' : '?') + s
	  }
	
	  function handleJsonp(o, fn, err, url) {
	    var reqId = uniqid++
	      , cbkey = o['jsonpCallback'] || 'callback' // the 'callback' key
	      , cbval = o['jsonpCallbackName'] || reqwest.getcallbackPrefix(reqId)
	      , cbreg = new RegExp('((^|\\?|&)' + cbkey + ')=([^&]+)')
	      , match = url.match(cbreg)
	      , script = doc.createElement('script')
	      , loaded = 0
	      , isIE10 = navigator.userAgent.indexOf('MSIE 10.0') !== -1
	
	    if (match) {
	      if (match[3] === '?') {
	        url = url.replace(cbreg, '$1=' + cbval) // wildcard callback func name
	      } else {
	        cbval = match[3] // provided callback func name
	      }
	    } else {
	      url = urlappend(url, cbkey + '=' + cbval) // no callback details, add 'em
	    }
	
	    context[cbval] = generalCallback
	
	    script.type = 'text/javascript'
	    script.src = url
	    script.async = true
	    if (typeof script.onreadystatechange !== 'undefined' && !isIE10) {
	      // need this for IE due to out-of-order onreadystatechange(), binding script
	      // execution to an event listener gives us control over when the script
	      // is executed. See http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
	      script.htmlFor = script.id = '_reqwest_' + reqId
	    }
	
	    script.onload = script.onreadystatechange = function () {
	      if ((script[readyState] && script[readyState] !== 'complete' && script[readyState] !== 'loaded') || loaded) {
	        return false
	      }
	      script.onload = script.onreadystatechange = null
	      script.onclick && script.onclick()
	      // Call the user callback with the last value stored and clean up values and scripts.
	      fn(lastValue)
	      lastValue = undefined
	      head.removeChild(script)
	      loaded = 1
	    }
	
	    // Add the script to the DOM head
	    head.appendChild(script)
	
	    // Enable JSONP timeout
	    return {
	      abort: function () {
	        script.onload = script.onreadystatechange = null
	        err({}, 'Request is aborted: timeout', {})
	        lastValue = undefined
	        head.removeChild(script)
	        loaded = 1
	      }
	    }
	  }
	
	  function getRequest(fn, err) {
	    var o = this.o
	      , method = (o['method'] || 'GET').toUpperCase()
	      , url = typeof o === 'string' ? o : o['url']
	      // convert non-string objects to query-string form unless o['processData'] is false
	      , data = (o['processData'] !== false && o['data'] && typeof o['data'] !== 'string')
	        ? reqwest.toQueryString(o['data'])
	        : (o['data'] || null)
	      , http
	      , sendWait = false
	
	    // if we're working on a GET request and we have data then we should append
	    // query string to end of URL and not post data
	    if ((o['type'] == 'jsonp' || method == 'GET') && data) {
	      url = urlappend(url, data)
	      data = null
	    }
	
	    if (o['type'] == 'jsonp') return handleJsonp(o, fn, err, url)
	
	    // get the xhr from the factory if passed
	    // if the factory returns null, fall-back to ours
	    http = (o.xhr && o.xhr(o)) || xhr(o)
	
	    http.open(method, url, o['async'] === false ? false : true)
	    setHeaders(http, o)
	    setCredentials(http, o)
	    if (context[xDomainRequest] && http instanceof context[xDomainRequest]) {
	        http.onload = fn
	        http.onerror = err
	        // NOTE: see
	        // http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/30ef3add-767c-4436-b8a9-f1ca19b4812e
	        http.onprogress = function() {}
	        sendWait = true
	    } else {
	      http.onreadystatechange = handleReadyState(this, fn, err)
	    }
	    o['before'] && o['before'](http)
	    if (sendWait) {
	      setTimeout(function () {
	        http.send(data)
	      }, 200)
	    } else {
	      http.send(data)
	    }
	    return http
	  }
	
	  function Reqwest(o, fn) {
	    this.o = o
	    this.fn = fn
	
	    init.apply(this, arguments)
	  }
	
	  function setType(header) {
	    // json, javascript, text/plain, text/html, xml
	    if (header === null) return undefined; //In case of no content-type.
	    if (header.match('json')) return 'json'
	    if (header.match('javascript')) return 'js'
	    if (header.match('text')) return 'html'
	    if (header.match('xml')) return 'xml'
	  }
	
	  function init(o, fn) {
	
	    this.url = typeof o == 'string' ? o : o['url']
	    this.timeout = null
	
	    // whether request has been fulfilled for purpose
	    // of tracking the Promises
	    this._fulfilled = false
	    // success handlers
	    this._successHandler = function(){}
	    this._fulfillmentHandlers = []
	    // error handlers
	    this._errorHandlers = []
	    // complete (both success and fail) handlers
	    this._completeHandlers = []
	    this._erred = false
	    this._responseArgs = {}
	
	    var self = this
	
	    fn = fn || function () {}
	
	    if (o['timeout']) {
	      this.timeout = setTimeout(function () {
	        timedOut()
	      }, o['timeout'])
	    }
	
	    if (o['success']) {
	      this._successHandler = function () {
	        o['success'].apply(o, arguments)
	      }
	    }
	
	    if (o['error']) {
	      this._errorHandlers.push(function () {
	        o['error'].apply(o, arguments)
	      })
	    }
	
	    if (o['complete']) {
	      this._completeHandlers.push(function () {
	        o['complete'].apply(o, arguments)
	      })
	    }
	
	    function complete (resp) {
	      o['timeout'] && clearTimeout(self.timeout)
	      self.timeout = null
	      while (self._completeHandlers.length > 0) {
	        self._completeHandlers.shift()(resp)
	      }
	    }
	
	    function success (resp) {
	      var type = o['type'] || resp && setType(resp.getResponseHeader('Content-Type')) // resp can be undefined in IE
	      resp = (type !== 'jsonp') ? self.request : resp
	      // use global data filter on response text
	      var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type)
	        , r = filteredResponse
	      try {
	        resp.responseText = r
	      } catch (e) {
	        // can't assign this in IE<=8, just ignore
	      }
	      if (r) {
	        switch (type) {
	        case 'json':
	          try {
	            resp = context.JSON ? context.JSON.parse(r) : eval('(' + r + ')')
	          } catch (err) {
	            return error(resp, 'Could not parse JSON in response', err)
	          }
	          break
	        case 'js':
	          resp = eval(r)
	          break
	        case 'html':
	          resp = r
	          break
	        case 'xml':
	          resp = resp.responseXML
	              && resp.responseXML.parseError // IE trololo
	              && resp.responseXML.parseError.errorCode
	              && resp.responseXML.parseError.reason
	            ? null
	            : resp.responseXML
	          break
	        }
	      }
	
	      self._responseArgs.resp = resp
	      self._fulfilled = true
	      fn(resp)
	      self._successHandler(resp)
	      while (self._fulfillmentHandlers.length > 0) {
	        resp = self._fulfillmentHandlers.shift()(resp)
	      }
	
	      complete(resp)
	    }
	
	    function timedOut() {
	      self._timedOut = true
	      self.request.abort()
	    }
	
	    function error(resp, msg, t) {
	      resp = self.request
	      self._responseArgs.resp = resp
	      self._responseArgs.msg = msg
	      self._responseArgs.t = t
	      self._erred = true
	      while (self._errorHandlers.length > 0) {
	        self._errorHandlers.shift()(resp, msg, t)
	      }
	      complete(resp)
	    }
	
	    this.request = getRequest.call(this, success, error)
	  }
	
	  Reqwest.prototype = {
	    abort: function () {
	      this._aborted = true
	      this.request.abort()
	    }
	
	  , retry: function () {
	      init.call(this, this.o, this.fn)
	    }
	
	    /**
	     * Small deviation from the Promises A CommonJs specification
	     * http://wiki.commonjs.org/wiki/Promises/A
	     */
	
	    /**
	     * `then` will execute upon successful requests
	     */
	  , then: function (success, fail) {
	      success = success || function () {}
	      fail = fail || function () {}
	      if (this._fulfilled) {
	        this._responseArgs.resp = success(this._responseArgs.resp)
	      } else if (this._erred) {
	        fail(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
	      } else {
	        this._fulfillmentHandlers.push(success)
	        this._errorHandlers.push(fail)
	      }
	      return this
	    }
	
	    /**
	     * `always` will execute whether the request succeeds or fails
	     */
	  , always: function (fn) {
	      if (this._fulfilled || this._erred) {
	        fn(this._responseArgs.resp)
	      } else {
	        this._completeHandlers.push(fn)
	      }
	      return this
	    }
	
	    /**
	     * `fail` will execute when the request fails
	     */
	  , fail: function (fn) {
	      if (this._erred) {
	        fn(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
	      } else {
	        this._errorHandlers.push(fn)
	      }
	      return this
	    }
	  , 'catch': function (fn) {
	      return this.fail(fn)
	    }
	  }
	
	  function reqwest(o, fn) {
	    return new Reqwest(o, fn)
	  }
	
	  // normalize newline variants according to spec -> CRLF
	  function normalize(s) {
	    return s ? s.replace(/\r?\n/g, '\r\n') : ''
	  }
	
	  function serial(el, cb) {
	    var n = el.name
	      , t = el.tagName.toLowerCase()
	      , optCb = function (o) {
	          // IE gives value="" even where there is no value attribute
	          // 'specified' ref: http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-862529273
	          if (o && !o['disabled'])
	            cb(n, normalize(o['attributes']['value'] && o['attributes']['value']['specified'] ? o['value'] : o['text']))
	        }
	      , ch, ra, val, i
	
	    // don't serialize elements that are disabled or without a name
	    if (el.disabled || !n) return
	
	    switch (t) {
	    case 'input':
	      if (!/reset|button|image|file/i.test(el.type)) {
	        ch = /checkbox/i.test(el.type)
	        ra = /radio/i.test(el.type)
	        val = el.value
	        // WebKit gives us "" instead of "on" if a checkbox has no value, so correct it here
	        ;(!(ch || ra) || el.checked) && cb(n, normalize(ch && val === '' ? 'on' : val))
	      }
	      break
	    case 'textarea':
	      cb(n, normalize(el.value))
	      break
	    case 'select':
	      if (el.type.toLowerCase() === 'select-one') {
	        optCb(el.selectedIndex >= 0 ? el.options[el.selectedIndex] : null)
	      } else {
	        for (i = 0; el.length && i < el.length; i++) {
	          el.options[i].selected && optCb(el.options[i])
	        }
	      }
	      break
	    }
	  }
	
	  // collect up all form elements found from the passed argument elements all
	  // the way down to child elements; pass a '<form>' or form fields.
	  // called with 'this'=callback to use for serial() on each element
	  function eachFormElement() {
	    var cb = this
	      , e, i
	      , serializeSubtags = function (e, tags) {
	          var i, j, fa
	          for (i = 0; i < tags.length; i++) {
	            fa = e[byTag](tags[i])
	            for (j = 0; j < fa.length; j++) serial(fa[j], cb)
	          }
	        }
	
	    for (i = 0; i < arguments.length; i++) {
	      e = arguments[i]
	      if (/input|select|textarea/i.test(e.tagName)) serial(e, cb)
	      serializeSubtags(e, [ 'input', 'select', 'textarea' ])
	    }
	  }
	
	  // standard query string style serialization
	  function serializeQueryString() {
	    return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
	  }
	
	  // { 'name': 'value', ... } style serialization
	  function serializeHash() {
	    var hash = {}
	    eachFormElement.apply(function (name, value) {
	      if (name in hash) {
	        hash[name] && !isArray(hash[name]) && (hash[name] = [hash[name]])
	        hash[name].push(value)
	      } else hash[name] = value
	    }, arguments)
	    return hash
	  }
	
	  // [ { name: 'name', value: 'value' }, ... ] style serialization
	  reqwest.serializeArray = function () {
	    var arr = []
	    eachFormElement.apply(function (name, value) {
	      arr.push({name: name, value: value})
	    }, arguments)
	    return arr
	  }
	
	  reqwest.serialize = function () {
	    if (arguments.length === 0) return ''
	    var opt, fn
	      , args = Array.prototype.slice.call(arguments, 0)
	
	    opt = args.pop()
	    opt && opt.nodeType && args.push(opt) && (opt = null)
	    opt && (opt = opt.type)
	
	    if (opt == 'map') fn = serializeHash
	    else if (opt == 'array') fn = reqwest.serializeArray
	    else fn = serializeQueryString
	
	    return fn.apply(null, args)
	  }
	
	  reqwest.toQueryString = function (o, trad) {
	    var prefix, i
	      , traditional = trad || false
	      , s = []
	      , enc = encodeURIComponent
	      , add = function (key, value) {
	          // If value is a function, invoke it and return its value
	          value = ('function' === typeof value) ? value() : (value == null ? '' : value)
	          s[s.length] = enc(key) + '=' + enc(value)
	        }
	    // If an array was passed in, assume that it is an array of form elements.
	    if (isArray(o)) {
	      for (i = 0; o && i < o.length; i++) add(o[i]['name'], o[i]['value'])
	    } else {
	      // If traditional, encode the "old" way (the way 1.3.2 or older
	      // did it), otherwise encode params recursively.
	      for (prefix in o) {
	        if (o.hasOwnProperty(prefix)) buildParams(prefix, o[prefix], traditional, add)
	      }
	    }
	
	    // spaces should be + according to spec
	    return s.join('&').replace(/%20/g, '+')
	  }
	
	  function buildParams(prefix, obj, traditional, add) {
	    var name, i, v
	      , rbracket = /\[\]$/
	
	    if (isArray(obj)) {
	      // Serialize array item.
	      for (i = 0; obj && i < obj.length; i++) {
	        v = obj[i]
	        if (traditional || rbracket.test(prefix)) {
	          // Treat each array item as a scalar.
	          add(prefix, v)
	        } else {
	          buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, traditional, add)
	        }
	      }
	    } else if (obj && obj.toString() === '[object Object]') {
	      // Serialize object item.
	      for (name in obj) {
	        buildParams(prefix + '[' + name + ']', obj[name], traditional, add)
	      }
	
	    } else {
	      // Serialize scalar item.
	      add(prefix, obj)
	    }
	  }
	
	  reqwest.getcallbackPrefix = function () {
	    return callbackPrefix
	  }
	
	  // jQuery and Zepto compatibility, differences can be remapped here so you can call
	  // .ajax.compat(options, callback)
	  reqwest.compat = function (o, fn) {
	    if (o) {
	      o['type'] && (o['method'] = o['type']) && delete o['type']
	      o['dataType'] && (o['type'] = o['dataType'])
	      o['jsonpCallback'] && (o['jsonpCallbackName'] = o['jsonpCallback']) && delete o['jsonpCallback']
	      o['jsonp'] && (o['jsonpCallback'] = o['jsonp'])
	    }
	    return new Reqwest(o, fn)
	  }
	
	  reqwest.ajaxSetup = function (options) {
	    options = options || {}
	    for (var k in options) {
	      globalSetupOptions[k] = options[k]
	    }
	  }
	
	  return reqwest
	});


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(8);
	var isArray = __webpack_require__(14);
	
	module.exports = irreducible('Array', isArray);


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(8);
	
	module.exports = irreducible('Date', function (x) { return x instanceof Date; });


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(8);
	
	module.exports = irreducible('Error', function (x) { return x instanceof Error; });


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var refinement = __webpack_require__(37);
	var Number = __webpack_require__(54);
	
	module.exports = refinement(Number, function (x) { return x % 1 === 0; }, 'Integer');


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(8);
	var isObject = __webpack_require__(16);
	
	module.exports = irreducible('Object', isObject);


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(8);
	
	module.exports = irreducible('RegExp', function (x) { return x instanceof RegExp; });


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(8);
	var isType = __webpack_require__(7);
	
	module.exports = irreducible('Type', isType);

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(10);
	var isType = __webpack_require__(7);
	var isNil = __webpack_require__(11);
	var mixin = __webpack_require__(36);
	var getTypeName = __webpack_require__(4);
	var isUnion = __webpack_require__(59);
	
	// All the .declare-d types should be clearly different from each other thus they should have
	// different names when a name was not explicitly provided.
	var nextDeclareUniqueId = 1;
	
	module.exports = function declare(name) {
	  if (false) {
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + name + ' supplied to declare([name]) (expected a string)'; });
	  }
	
	  var type;
	
	  function Declare(value, path) {
	    if (false) {
	      assert(!isNil(type), function () { return 'Type declared but not defined, don\'t forget to call .define on every declared type'; });
	      if (isUnion(type)) {
	        assert(type.dispatch === Declare.dispatch, function () { return 'Please define the custom ' + name + '.dispatch function before calling ' + name + '.define()'; });
	      }
	    }
	    return type(value, path);
	  }
	
	  Declare.define = function (spec) {
	    if (false) {
	      assert(isType(spec), function () { return 'Invalid argument type ' + assert.stringify(spec) +  ' supplied to define(type) (expected a type)'; });
	      assert(isNil(type), function () { return 'Declare.define(type) can only be invoked once'; });
	      assert(isNil(spec.meta.name) && Object.keys(spec.prototype).length === 0, function () { return 'Invalid argument type ' + assert.stringify(spec) + ' supplied to define(type) (expected a fresh, unnamed type)'; });
	    }
	
	    if (isUnion(spec) && Declare.hasOwnProperty('dispatch')) {
	      spec.dispatch = Declare.dispatch;
	    }
	    type = spec;
	    mixin(Declare, type, true); // true because it overwrites Declare.displayName
	    if (name) {
	      type.displayName = Declare.displayName = name;
	      Declare.meta.name = name;
	    }
	    Declare.meta.identity = type.meta.identity;
	    Declare.prototype = type.prototype;
	    return Declare;
	  };
	
	  Declare.displayName = name || ( getTypeName(Declare) + "$" + nextDeclareUniqueId++ );
	  // in general I can't say if this type will be an identity, for safety setting to false
	  Declare.meta = { identity: false };
	  Declare.prototype = null;
	  return Declare;
	};


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var isType = __webpack_require__(7);
	
	function isRefinement(type) {
	  return isType(type) && type.meta.kind === 'subtype';
	}
	
	function getPredicates(type) {
	  return isRefinement(type) ?
	    [type.meta.predicate].concat(getPredicates(type.meta.type)) :
	    [];
	}
	
	function getUnrefinedType(type) {
	  return isRefinement(type) ?
	    getUnrefinedType(type.meta.type) :
	    type;
	}
	
	function decompose(type) {
	  return {
	    predicates: getPredicates(type),
	    unrefinedType: getUnrefinedType(type)
	  };
	}
	
	module.exports = decompose;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(10);
	var forbidNewOperator = __webpack_require__(22);
	var isString = __webpack_require__(28);
	var isObject = __webpack_require__(16);
	
	function getDefaultName(map) {
	  return Object.keys(map).map(function (k) { return assert.stringify(k); }).join(' | ');
	}
	
	function enums(map, name) {
	
	  if (false) {
	    assert(isObject(map), function () { return 'Invalid argument map ' + assert.stringify(map) + ' supplied to enums(map, [name]) combinator (expected a dictionary of String -> String | Number)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to enums(map, [name]) combinator (expected a string)'; });
	  }
	
	  var displayName = name || getDefaultName(map);
	
	  function Enums(value, path) {
	
	    if (false) {
	      forbidNewOperator(this, Enums);
	      path = path || [displayName];
	      assert(Enums.is(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected one of ' + assert.stringify(Object.keys(map)) + ')'; });
	    }
	
	    return value;
	  }
	
	  Enums.meta = {
	    kind: 'enums',
	    map: map,
	    name: name,
	    identity: true
	  };
	
	  Enums.displayName = displayName;
	
	  Enums.is = function (x) {
	    return map.hasOwnProperty(x);
	  };
	
	  return Enums;
	}
	
	enums.of = function (keys, name) {
	  keys = isString(keys) ? keys.split(' ') : keys;
	  var value = {};
	  keys.forEach(function (k) {
	    value[k] = k;
	  });
	  return enums(value, name);
	};
	
	enums.getDefaultName = getDefaultName;
	module.exports = enums;
	


/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = function fail(message) {
	  throw new TypeError('[tcomb] ' + message);
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(10);
	var FunctionType = __webpack_require__(26);
	var isArray = __webpack_require__(14);
	var list = __webpack_require__(60);
	var isObject = __webpack_require__(16);
	var create = __webpack_require__(12);
	var isNil = __webpack_require__(11);
	var isBoolean = __webpack_require__(27);
	var tuple = __webpack_require__(62);
	var getFunctionName = __webpack_require__(23);
	var getTypeName = __webpack_require__(4);
	var isType = __webpack_require__(7);
	
	function getDefaultName(domain, codomain) {
	  return '(' + domain.map(getTypeName).join(', ') + ') => ' + getTypeName(codomain);
	}
	
	function isInstrumented(f) {
	  return FunctionType.is(f) && isObject(f.instrumentation);
	}
	
	function getOptionalArgumentsIndex(types) {
	  var end = types.length;
	  var areAllMaybes = false;
	  for (var i = end - 1; i >= 0; i--) {
	    var type = types[i];
	    if (!isType(type) || type.meta.kind !== 'maybe') {
	      return (i + 1);
	    } else {
	      areAllMaybes = true;
	    }
	  }
	  return areAllMaybes ? 0 : end;
	}
	
	function func(domain, codomain, name) {
	
	  domain = isArray(domain) ? domain : [domain]; // handle handy syntax for unary functions
	
	  if (false) {
	    assert(list(FunctionType).is(domain), function () { return 'Invalid argument domain ' + assert.stringify(domain) + ' supplied to func(domain, codomain, [name]) combinator (expected an array of types)'; });
	    assert(FunctionType.is(codomain), function () { return 'Invalid argument codomain ' + assert.stringify(codomain) + ' supplied to func(domain, codomain, [name]) combinator (expected a type)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to func(domain, codomain, [name]) combinator (expected a string)'; });
	  }
	
	  var displayName = name || getDefaultName(domain, codomain);
	  var domainLength = domain.length;
	  var optionalArgumentsIndex = getOptionalArgumentsIndex(domain);
	
	  function FuncType(value, path) {
	
	    if (!isInstrumented(value)) { // automatically instrument the function
	      return FuncType.of(value);
	    }
	
	    if (false) {
	      path = path || [displayName];
	      assert(FuncType.is(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
	    }
	
	    return value;
	  }
	
	  FuncType.meta = {
	    kind: 'func',
	    domain: domain,
	    codomain: codomain,
	    name: name,
	    identity: true
	  };
	
	  FuncType.displayName = displayName;
	
	  FuncType.is = function (x) {
	    return isInstrumented(x) &&
	      x.instrumentation.domain.length === domainLength &&
	      x.instrumentation.domain.every(function (type, i) {
	        return type === domain[i];
	      }) &&
	      x.instrumentation.codomain === codomain;
	  };
	
	  FuncType.of = function (f, curried) {
	
	    if (false) {
	      assert(FunctionType.is(f), function () { return 'Invalid argument f supplied to func.of ' + displayName + ' (expected a function)'; });
	      assert(isNil(curried) || isBoolean(curried), function () { return 'Invalid argument curried ' + assert.stringify(curried) + ' supplied to func.of ' + displayName + ' (expected a boolean)'; });
	    }
	
	    if (FuncType.is(f)) { // makes FuncType.of idempotent
	      return f;
	    }
	
	    function fn() {
	      var args = Array.prototype.slice.call(arguments);
	      var argsLength = args.length;
	
	      if (false) {
	        // type-check arguments
	        var tupleLength = curried ? argsLength : Math.max(argsLength, optionalArgumentsIndex);
	        tuple(domain.slice(0, tupleLength), 'arguments of function ' + displayName)(args);
	      }
	
	      if (curried && argsLength < domainLength) {
	        if (false) {
	          assert(argsLength > 0, 'Invalid arguments.length = 0 for curried function ' + displayName);
	        }
	        var g = Function.prototype.bind.apply(f, [this].concat(args));
	        var newDomain = func(domain.slice(argsLength), codomain);
	        return newDomain.of(g, true);
	      }
	      else {
	        return create(codomain, f.apply(this, args));
	      }
	    }
	
	    fn.instrumentation = {
	      domain: domain,
	      codomain: codomain,
	      f: f
	    };
	
	    fn.displayName = getFunctionName(f);
	
	    return fn;
	
	  };
	
	  return FuncType;
	
	}
	
	func.getDefaultName = getDefaultName;
	func.getOptionalArgumentsIndex = getOptionalArgumentsIndex;
	module.exports = func;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(10);
	var String = __webpack_require__(34);
	var Function = __webpack_require__(26);
	var isBoolean = __webpack_require__(27);
	var isObject = __webpack_require__(16);
	var isNil = __webpack_require__(11);
	var create = __webpack_require__(12);
	var getTypeName = __webpack_require__(4);
	var dict = __webpack_require__(35);
	var getDefaultInterfaceName = __webpack_require__(57);
	var isIdentity = __webpack_require__(15);
	var is = __webpack_require__(13);
	var extend = __webpack_require__(56);
	var assign = __webpack_require__(55);
	
	function extendInterface(mixins, name) {
	  return extend(inter, mixins, name);
	}
	
	function getOptions(options) {
	  if (!isObject(options)) {
	    options = isNil(options) ? {} : { name: options };
	  }
	  if (!options.hasOwnProperty('strict')) {
	    options.strict = inter.strict;
	  }
	  return options;
	}
	
	function inter(props, options) {
	
	  options = getOptions(options);
	  var name = options.name;
	  var strict = options.strict;
	
	  if (false) {
	    assert(dict(String, Function).is(props), function () { return 'Invalid argument props ' + assert.stringify(props) + ' supplied to interface(props, [options]) combinator (expected a dictionary String -> Type)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to interface(props, [options]) combinator (expected a string)'; });
	    assert(isBoolean(strict), function () { return 'Invalid argument strict ' + assert.stringify(strict) + ' supplied to struct(props, [options]) combinator (expected a boolean)'; });
	  }
	
	  var displayName = name || getDefaultInterfaceName(props);
	  var identity = Object.keys(props).map(function (prop) { return props[prop]; }).every(isIdentity);
	
	  function Interface(value, path) {
	
	    if (true) {
	      if (identity) {
	        return value; // just trust the input if elements must not be hydrated
	      }
	    }
	
	    if (false) {
	      path = path || [displayName];
	      assert(!isNil(value), function () { return 'Invalid value ' + value + ' supplied to ' + path.join('/'); });
	      // strictness
	      if (strict) {
	        for (var k in value) {
	          assert(props.hasOwnProperty(k), function () { return 'Invalid additional prop "' + k + '" supplied to ' + path.join('/'); });
	        }
	      }
	    }
	
	    var idempotent = true;
	    var ret = identity ? {} : assign({}, value);
	    for (var prop in props) {
	      var expected = props[prop];
	      var actual = value[prop];
	      var instance = create(expected, actual, (  false ? path.concat(prop + ': ' + getTypeName(expected)) : null ));
	      idempotent = idempotent && ( actual === instance );
	      ret[prop] = instance;
	    }
	
	    if (idempotent) { // implements idempotency
	      ret = value;
	    }
	
	    if (false) {
	      Object.freeze(ret);
	    }
	
	    return ret;
	
	  }
	
	  Interface.meta = {
	    kind: 'interface',
	    props: props,
	    name: name,
	    identity: identity,
	    strict: strict
	  };
	
	  Interface.displayName = displayName;
	
	  Interface.is = function (x) {
	    if (isNil(x)) {
	      return false;
	    }
	    if (strict) {
	      for (var k in x) {
	        if (!props.hasOwnProperty(k)) {
	          return false;
	        }
	      }
	    }
	    for (var prop in props) {
	      if (!is(x[prop], props[prop])) {
	        return false;
	      }
	    }
	    return true;
	  };
	
	  Interface.update = function (instance, patch) {
	    return Interface(assert.update(instance, patch));
	  };
	
	  Interface.extend = function (xs, name) {
	    return extendInterface([Interface].concat(xs), name);
	  };
	
	  return Interface;
	}
	
	inter.strict = false;
	inter.getOptions = getOptions;
	inter.getDefaultName = getDefaultInterfaceName;
	inter.extend = extendInterface;
	module.exports = inter;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(10);
	var isFunction = __webpack_require__(6);
	var isArray = __webpack_require__(14);
	var forbidNewOperator = __webpack_require__(15);
	var is = __webpack_require__(13);
	var getTypeName = __webpack_require__(4);
	var isIdentity = __webpack_require__(15);
	
	function getDefaultName(types) {
	  return types.map(getTypeName).join(' & ');
	}
	
	function intersection(types, name) {
	
	  if (false) {
	    assert(isArray(types) && types.every(isFunction) && types.length >= 2, function () { return 'Invalid argument types ' + assert.stringify(types) + ' supplied to intersection(types, [name]) combinator (expected an array of at least 2 types)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to intersection(types, [name]) combinator (expected a string)'; });
	  }
	
	  var displayName = name || getDefaultName(types);
	  var identity = types.every(isIdentity);
	
	  function Intersection(value, path) {
	
	    if (false) {
	      if (identity) {
	        forbidNewOperator(this, Intersection);
	      }
	      path = path || [displayName];
	      assert(Intersection.is(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
	    }
	
	    return value;
	  }
	
	  Intersection.meta = {
	    kind: 'intersection',
	    types: types,
	    name: name,
	    identity: identity
	  };
	
	  Intersection.displayName = displayName;
	
	  Intersection.is = function (x) {
	    return types.every(function (type) {
	      return is(x, type);
	    });
	  };
	
	  Intersection.update = function (instance, patch) {
	    return Intersection(assert.update(instance, patch));
	  };
	
	  return Intersection;
	}
	
	intersection.getDefaultName = getDefaultName;
	module.exports = intersection;
	


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var isType = __webpack_require__(7);
	
	module.exports = function isInterface(x) {
	  return isType(x) && ( x.meta.kind === 'interface' );
	};

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var isType = __webpack_require__(7);
	
	module.exports = function isMaybe(x) {
	  return isType(x) && ( x.meta.kind === 'maybe' );
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var isType = __webpack_require__(7);
	
	module.exports = function isStruct(x) {
	  return isType(x) && ( x.meta.kind === 'struct' );
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var isFunction = __webpack_require__(6);
	var isType = __webpack_require__(7);
	var Any = __webpack_require__(33);
	
	module.exports = function match(x) {
	  var type, guard, f, count;
	  for (var i = 1, len = arguments.length; i < len; ) {
	    type = arguments[i];
	    guard = arguments[i + 1];
	    f = arguments[i + 2];
	
	    if (isFunction(f) && !isType(f)) {
	      i = i + 3;
	    }
	    else {
	      f = guard;
	      guard = Any.is;
	      i = i + 2;
	    }
	
	    if (false) {
	      count = (count || 0) + 1;
	      assert(isType(type), function () { return 'Invalid type in clause #' + count; });
	      assert(isFunction(guard), function () { return 'Invalid guard in clause #' + count; });
	      assert(isFunction(f), function () { return 'Invalid block in clause #' + count; });
	    }
	
	    if (type.is(x) && guard(x)) {
	      return f(x);
	    }
	  }
	  assert.fail('Match error');
	};


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(10);
	var isFunction = __webpack_require__(6);
	var isMaybe = __webpack_require__(180);
	var isIdentity = __webpack_require__(15);
	var Any = __webpack_require__(33);
	var create = __webpack_require__(12);
	var Nil = __webpack_require__(53);
	var forbidNewOperator = __webpack_require__(22);
	var is = __webpack_require__(13);
	var getTypeName = __webpack_require__(4);
	
	function getDefaultName(type) {
	  return '?' + getTypeName(type);
	}
	
	function maybe(type, name) {
	
	  if (isMaybe(type) || type === Any || type === Nil) { // makes the combinator idempotent and handle Any, Nil
	    return type;
	  }
	
	  if (false) {
	    assert(isFunction(type), function () { return 'Invalid argument type ' + assert.stringify(type) + ' supplied to maybe(type, [name]) combinator (expected a type)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to maybe(type, [name]) combinator (expected a string)'; });
	  }
	
	  var displayName = name || getDefaultName(type);
	  var identity = isIdentity(type);
	
	  function Maybe(value, path) {
	    if (false) {
	      if (identity) {
	        forbidNewOperator(this, Maybe);
	      }
	    }
	    return Nil.is(value) ? value : create(type, value, path);
	  }
	
	  Maybe.meta = {
	    kind: 'maybe',
	    type: type,
	    name: name,
	    identity: identity
	  };
	
	  Maybe.displayName = displayName;
	
	  Maybe.is = function (x) {
	    return Nil.is(x) || is(x, type);
	  };
	
	  return Maybe;
	}
	
	maybe.getDefaultName = getDefaultName;
	module.exports = maybe;


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(10);
	var String = __webpack_require__(34);
	var Function = __webpack_require__(26);
	var isBoolean = __webpack_require__(27);
	var isObject = __webpack_require__(16);
	var isNil = __webpack_require__(11);
	var create = __webpack_require__(12);
	var getTypeName = __webpack_require__(4);
	var dict = __webpack_require__(35);
	var getDefaultInterfaceName = __webpack_require__(57);
	var extend = __webpack_require__(56);
	
	function getDefaultName(props) {
	  return 'Struct' + getDefaultInterfaceName(props);
	}
	
	function extendStruct(mixins, name) {
	  return extend(struct, mixins, name);
	}
	
	function getOptions(options) {
	  if (!isObject(options)) {
	    options = isNil(options) ? {} : { name: options };
	  }
	  if (!options.hasOwnProperty('strict')) {
	    options.strict = struct.strict;
	  }
	  if (!options.hasOwnProperty('defaultProps')) {
	    options.defaultProps = {};
	  }
	  return options;
	}
	
	function struct(props, options) {
	
	  options = getOptions(options);
	  var name = options.name;
	  var strict = options.strict;
	  var defaultProps = options.defaultProps;
	
	  if (false) {
	    assert(dict(String, Function).is(props), function () { return 'Invalid argument props ' + assert.stringify(props) + ' supplied to struct(props, [options]) combinator (expected a dictionary String -> Type)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to struct(props, [options]) combinator (expected a string)'; });
	    assert(isBoolean(strict), function () { return 'Invalid argument strict ' + assert.stringify(strict) + ' supplied to struct(props, [options]) combinator (expected a boolean)'; });
	    assert(isObject(defaultProps), function () { return 'Invalid argument defaultProps ' + assert.stringify(defaultProps) + ' supplied to struct(props, [options]) combinator (expected an object)'; });
	  }
	
	  var displayName = name || getDefaultName(props);
	
	  function Struct(value, path) {
	
	    if (Struct.is(value)) { // implements idempotency
	      return value;
	    }
	
	    if (false) {
	      path = path || [displayName];
	      assert(isObject(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an object)'; });
	      // strictness
	      if (strict) {
	        for (k in value) {
	          if (value.hasOwnProperty(k)) {
	            assert(props.hasOwnProperty(k), function () { return 'Invalid additional prop "' + k + '" supplied to ' + path.join('/'); });
	          }
	        }
	      }
	    }
	
	    if (!(this instanceof Struct)) { // `new` is optional
	      return new Struct(value, path);
	    }
	
	    for (var k in props) {
	      if (props.hasOwnProperty(k)) {
	        var expected = props[k];
	        var actual = value[k];
	        // apply defaults
	        if (actual === undefined) {
	          actual = defaultProps[k];
	        }
	        this[k] = create(expected, actual, (  false ? path.concat(k + ': ' + getTypeName(expected)) : null ));
	      }
	    }
	
	    if (false) {
	      Object.freeze(this);
	    }
	
	  }
	
	  Struct.meta = {
	    kind: 'struct',
	    props: props,
	    name: name,
	    identity: false,
	    strict: strict,
	    defaultProps: defaultProps
	  };
	
	  Struct.displayName = displayName;
	
	  Struct.is = function (x) {
	    return x instanceof Struct;
	  };
	
	  Struct.update = function (instance, patch) {
	    return new Struct(assert.update(instance, patch));
	  };
	
	  Struct.extend = function (xs, name) {
	    return extendStruct([Struct].concat(xs), name);
	  };
	
	  return Struct;
	}
	
	struct.strict = false;
	struct.getOptions = getOptions;
	struct.getDefaultName = getDefaultName;
	struct.extend = extendStruct;
	module.exports = struct;


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(10);
	var isFunction = __webpack_require__(6);
	var getTypeName = __webpack_require__(4);
	var isIdentity = __webpack_require__(15);
	var isArray = __webpack_require__(14);
	var create = __webpack_require__(12);
	var is = __webpack_require__(13);
	var forbidNewOperator = __webpack_require__(22);
	var isUnion = __webpack_require__(59);
	var isNil = __webpack_require__(11);
	
	function getDefaultName(types) {
	  return types.map(getTypeName).join(' | ');
	}
	
	function union(types, name) {
	
	  if (false) {
	    assert(isArray(types) && types.every(isFunction) && types.length >= 2, function () { return 'Invalid argument types ' + assert.stringify(types) + ' supplied to union(types, [name]) combinator (expected an array of at least 2 types)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to union(types, [name]) combinator (expected a string)'; });
	  }
	
	  var displayName = name || getDefaultName(types);
	  var identity = types.every(isIdentity);
	
	  function Union(value, path) {
	
	    if (true) {
	      if (identity) {
	        return value;
	      }
	    }
	
	    var type = Union.dispatch(value);
	    if (!type && Union.is(value)) {
	      return value;
	    }
	
	    if (false) {
	      if (identity) {
	        forbidNewOperator(this, Union);
	      }
	      path = path || [displayName];
	      assert(isFunction(type), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (no constructor returned by dispatch)'; });
	      path[path.length - 1] += '(' + getTypeName(type) + ')';
	    }
	
	    return create(type, value, path);
	  }
	
	  Union.meta = {
	    kind: 'union',
	    types: types,
	    name: name,
	    identity: identity
	  };
	
	  Union.displayName = displayName;
	
	  Union.is = function (x) {
	    return types.some(function (type) {
	      return is(x, type);
	    });
	  };
	
	  Union.dispatch = function (x) { // default dispatch implementation
	    for (var i = 0, len = types.length; i < len; i++ ) {
	      var type = types[i];
	      if (isUnion(type)) { // handle union of unions
	        var t = type.dispatch(x);
	        if (!isNil(t)) {
	          return t;
	        }
	      }
	      else if (is(x, type)) {
	        return type;
	      }
	    }
	  };
	
	  Union.update = function (instance, patch) {
	    return Union(assert.update(instance, patch));
	  };
	
	  return Union;
	}
	
	union.getDefaultName = getDefaultName;
	module.exports = union;
	


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var isObject = __webpack_require__(16);
	var isFunction = __webpack_require__(6);
	var isArray = __webpack_require__(14);
	var isNumber = __webpack_require__(58);
	var assign = __webpack_require__(55);
	
	function getShallowCopy(x) {
	  if (isObject(x)) {
	    if (x instanceof Date || x instanceof RegExp) {
	      return x;
	    }
	    return assign({}, x);
	  }
	  if (isArray(x)) {
	    return x.concat();
	  }
	  return x;
	}
	
	function isCommand(k) {
	  return update.commands.hasOwnProperty(k);
	}
	
	function getCommand(k) {
	  return update.commands[k];
	}
	
	function update(instance, patch) {
	
	  if (false) {
	    assert(isObject(patch), function () { return 'Invalid argument patch ' + assert.stringify(patch) + ' supplied to function update(instance, patch): expected an object containing commands'; });
	  }
	
	  var value = instance;
	  var isChanged = false;
	  var newValue;
	  for (var k in patch) {
	    if (patch.hasOwnProperty(k)) {
	      if (isCommand(k)) {
	        newValue = getCommand(k)(patch[k], value);
	        if (newValue !== instance) {
	          isChanged = true;
	          value = newValue;
	        } else {
	          value = instance;
	        }
	      }
	      else {
	        if (value === instance) {
	          value = getShallowCopy(instance);
	        }
	        newValue = update(value[k], patch[k]);
	        isChanged = isChanged || ( newValue !== value[k] );
	        value[k] = newValue;
	      }
	    }
	  }
	  return isChanged ? value : instance;
	}
	
	// built-in commands
	
	function $apply(f, value) {
	  if (false) {
	    assert(isFunction(f), 'Invalid argument f supplied to immutability helper { $apply: f } (expected a function)');
	  }
	  return f(value);
	}
	
	function $push(elements, arr) {
	  if (false) {
	    assert(isArray(elements), 'Invalid argument elements supplied to immutability helper { $push: elements } (expected an array)');
	    assert(isArray(arr), 'Invalid value supplied to immutability helper $push (expected an array)');
	  }
	  if (elements.length > 0) {
	    return arr.concat(elements);
	  }
	  return arr;
	}
	
	function $remove(keys, obj) {
	  if (false) {
	    assert(isArray(keys), 'Invalid argument keys supplied to immutability helper { $remove: keys } (expected an array)');
	    assert(isObject(obj), 'Invalid value supplied to immutability helper $remove (expected an object)');
	  }
	  if (keys.length > 0) {
	    obj = getShallowCopy(obj);
	    for (var i = 0, len = keys.length; i < len; i++ ) {
	      delete obj[keys[i]];
	    }
	  }
	  return obj;
	}
	
	function $set(value) {
	  return value;
	}
	
	function $splice(splices, arr) {
	  if (false) {
	    assert(isArray(splices) && splices.every(isArray), 'Invalid argument splices supplied to immutability helper { $splice: splices } (expected an array of arrays)');
	    assert(isArray(arr), 'Invalid value supplied to immutability helper $splice (expected an array)');
	  }
	  if (splices.length > 0) {
	    arr = getShallowCopy(arr);
	    return splices.reduce(function (acc, splice) {
	      acc.splice.apply(acc, splice);
	      return acc;
	    }, arr);
	  }
	  return arr;
	}
	
	function $swap(config, arr) {
	  if (false) {
	    assert(isObject(config), 'Invalid argument config supplied to immutability helper { $swap: config } (expected an object)');
	    assert(isNumber(config.from), 'Invalid argument config.from supplied to immutability helper { $swap: config } (expected a number)');
	    assert(isNumber(config.to), 'Invalid argument config.to supplied to immutability helper { $swap: config } (expected a number)');
	    assert(isArray(arr), 'Invalid value supplied to immutability helper $swap (expected an array)');
	  }
	  if (config.from !== config.to) {
	    arr = getShallowCopy(arr);
	    var element = arr[config.to];
	    arr[config.to] = arr[config.from];
	    arr[config.from] = element;
	  }
	  return arr;
	}
	
	function $unshift(elements, arr) {
	  if (false) {
	    assert(isArray(elements), 'Invalid argument elements supplied to immutability helper {$unshift: elements} (expected an array)');
	    assert(isArray(arr), 'Invalid value supplied to immutability helper $unshift (expected an array)');
	  }
	  if (elements.length > 0) {
	    return elements.concat(arr);
	  }
	  return arr;
	}
	
	function $merge(whatToMerge, value) {
	  var isChanged = false;
	  var result = getShallowCopy(value);
	  for (var k in whatToMerge) {
	    if (whatToMerge.hasOwnProperty(k)) {
	      result[k] = whatToMerge[k];
	      isChanged = isChanged || ( result[k] !== value[k] );
	    }
	  }
	  return isChanged ? result : value;
	}
	
	update.commands = {
	  $apply: $apply,
	  $push: $push,
	  $remove: $remove,
	  $set: $set,
	  $splice: $splice,
	  $swap: $swap,
	  $unshift: $unshift,
	  $merge: $merge
	};
	
	module.exports = update;


/***/ },
/* 187 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ccc.js.map