"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BankItem = function BankItem(_ref) {
  var bankData = _ref.bankData,
      onSubmit = _ref.onSubmit;
  var bankId = bankData.bankId,
      bankName = bankData.bankName,
      logo = bankData.logo,
      type = bankData.type;
  return /*#__PURE__*/_react["default"].createElement("li", {
    onClick: function onClick(e) {
      e.preventDefault();
      onSubmit({
        bankId: bankId,
        bankName: bankName,
        type: type
      });
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, bankName)));
};

var BankList = function BankList(_ref2) {
  var filterText = _ref2.filterText,
      banks = _ref2.banks,
      onSubmit = _ref2.onSubmit;
  var rows = [];
  banks.forEach(function (bank) {
    if (bank.bankName.indexOf(filterText) === -1) {
      return;
    } else {
      rows.push(bank);
    }
  });
  var listItem = rows.map(function (bank) {
    return /*#__PURE__*/_react["default"].createElement(BankItem, {
      bankData: bank,
      key: bank.bankId,
      onSubmit: onSubmit
    });
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, listItem);
};

var SearchBar = /*#__PURE__*/function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  var _super = _createSuper(SearchBar);

  function SearchBar(props) {
    var _this;

    _classCallCheck(this, SearchBar);

    _this = _super.call(this, props);
    _this.handleFilterTextChange = _this.handleFilterTextChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SearchBar, [{
    key: "handleFilterTextChange",
    value: function handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("form", {
        className: "searchBar"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        placeholder: "Search...",
        value: this.props.filterText,
        onChange: this.handleFilterTextChange
      }));
    }
  }]);

  return SearchBar;
}(_react["default"].Component);

var OBWebCheckout = /*#__PURE__*/function (_React$Component2) {
  _inherits(OBWebCheckout, _React$Component2);

  var _super2 = _createSuper(OBWebCheckout);

  function OBWebCheckout(props) {
    var _this2;

    _classCallCheck(this, OBWebCheckout);

    _this2 = _super2.call(this, props);
    _this2.state = {
      filterText: '',
      data: {
        paymentMethod: []
      }
    };
    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));
    _this2.handleFilterTextChange = _this2.handleFilterTextChange.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(OBWebCheckout, [{
    key: "handleFilterTextChange",
    value: function handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(paymentMethod) {
      var state = {
        data: {
          paymentMethod: paymentMethod
        }
      };
      this.props.configuration.onSubmit(state, this);
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "OBWebCheckout"
      }, /*#__PURE__*/_react["default"].createElement(SearchBar, {
        filterText: this.state.filterText,
        onFilterTextChange: this.handleFilterTextChange
      }), /*#__PURE__*/_react["default"].createElement("ul", {
        className: "bank-list"
      }, /*#__PURE__*/_react["default"].createElement(BankList, {
        banks: this.props.configuration.paymentMethods,
        onSubmit: this.handleSubmit,
        filterText: this.state.filterText
      })));
    }
  }]);

  return OBWebCheckout;
}(_react["default"].Component);

var _default = OBWebCheckout;
exports["default"] = _default;
