import React from 'react';

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var BankItem = function BankItem(_ref) {
  var bankData = _ref.bankData,
      onSubmit = _ref.onSubmit;
  var bankId = bankData.bankId,
      bankName = bankData.bankName,
      type = bankData.type;
  return /*#__PURE__*/React.createElement("li", {
    onClick: function onClick(e) {
      e.preventDefault();
      onSubmit({
        bankId: bankId,
        bankName: bankName,
        type: type
      });
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, bankName)));
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
    return /*#__PURE__*/React.createElement(BankItem, {
      bankData: bank,
      key: bank.bankId,
      onSubmit: onSubmit
    });
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, listItem);
};

var SearchBar = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SearchBar, _React$Component);

  function SearchBar(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.handleFilterTextChange = _this.handleFilterTextChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = SearchBar.prototype;

  _proto.handleFilterTextChange = function handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  };

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("form", {
      className: "searchBar"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "Search...",
      value: this.props.filterText,
      onChange: this.handleFilterTextChange
    }));
  };

  return SearchBar;
}(React.Component);

var OBWebCheckout = /*#__PURE__*/function (_React$Component2) {
  _inheritsLoose(OBWebCheckout, _React$Component2);

  function OBWebCheckout(props) {
    var _this2;

    _this2 = _React$Component2.call(this, props) || this;
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

  var _proto2 = OBWebCheckout.prototype;

  _proto2.handleFilterTextChange = function handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  };

  _proto2.handleSubmit = function handleSubmit(paymentMethod) {
    var state = {
      data: {
        paymentMethod: paymentMethod
      }
    };
    this.props.configuration.onSubmit(state, this);
  };

  _proto2.componentDidMount = function componentDidMount() {
    return Promise.resolve();
  };

  _proto2.render = function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "OBWebCheckout"
    }, /*#__PURE__*/React.createElement(SearchBar, {
      filterText: this.state.filterText,
      onFilterTextChange: this.handleFilterTextChange
    }), /*#__PURE__*/React.createElement("ul", {
      className: "bank-list"
    }, /*#__PURE__*/React.createElement(BankList, {
      banks: this.props.configuration.paymentMethods,
      onSubmit: this.handleSubmit,
      filterText: this.state.filterText
    })));
  };

  return OBWebCheckout;
}(React.Component);

var index = {
  OBWebCheckout: OBWebCheckout
};

export default index;
//# sourceMappingURL=index.modern.js.map
