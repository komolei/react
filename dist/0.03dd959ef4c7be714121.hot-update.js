webpackHotUpdate(0,{

/***/ 1360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(74);

var _fa = __webpack_require__(92);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_Component) {
    _inherits(Signup, _Component);

    function Signup() {
        var _temp, _this, _ret;

        _classCallCheck(this, Signup);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClick = function () {
            var _this2;

            return (_this2 = _this).__handleClick__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Signup.prototype.__handleClick__REACT_HOT_LOADER__ = function __handleClick__REACT_HOT_LOADER__(e) {
        var name = this.getName.value.trim();
        var password = this.getPassword.value.trim();
        var surePassword = this.getSurePassword.value.trim();
        var email = this.getEmail.value.trim();
        if (name.length > 3) {
            if (password.length > 6) {
                if (/\@/g.test(email)) {
                    password === surePassword ? this.props.click(name, password, email) : alert("no same password");
                } else {
                    alert("fail");
                }
            } else {
                alert("this length should more than 6");
            }
        } else {
            alert("this length should more than 3");
        }
        // password === surePassword ? this.props.click(name, password, email) : alert("no same password")FF
    };

    Signup.prototype.render = function render() {
        var _this3 = this;

        var _props = this.props,
            name = _props.name,
            password = _props.password,
            surePassword = _props.surePassword,
            email = _props.email,
            click = _props.click;
        // console.log("name is:wath", name, click, "click");

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'label',
                { htmlFor: 'name1' },
                _react2.default.createElement(_fa.FaUser, null)
            ),
            _react2.default.createElement('input', { type: 'text', id: 'name1', ref: function ref(input) {
                    return _this3.getName = input;
                }, placeholder: 'name' }),
            _react2.default.createElement('p', null),
            _react2.default.createElement(
                'label',
                { htmlFor: 'password1' },
                _react2.default.createElement(_fa.FaKey, null)
            ),
            _react2.default.createElement('input', { type: 'password', id: 'password1', ref: function ref(input) {
                    return _this3.getPassword = input;
                }, placeholder: 'input password' }),
            _react2.default.createElement('p', null),
            _react2.default.createElement(
                'label',
                { htmlFor: 'surePassword' },
                _react2.default.createElement(_fa.FaKey, null)
            ),
            _react2.default.createElement('input', { type: 'password', id: 'surePassword', ref: function ref(input) {
                    return _this3.getSurePassword = input;
                }, placeholder: 'input password again' }),
            _react2.default.createElement('p', null),
            _react2.default.createElement(
                'label',
                { htmlFor: 'email' },
                _react2.default.createElement(_fa.FaEnvelopeO, null)
            ),
            _react2.default.createElement('input', { type: 'text', id: 'email', ref: function ref(input) {
                    return _this3.getEmail = input;
                }, placeholder: 'email' }),
            _react2.default.createElement('p', null),
            _react2.default.createElement(
                'span',
                { onClick: function onClick(e) {
                        _this3.handleClick(e);
                    } },
                _react2.default.createElement(_fa.FaHandPaperO, null)
            )
        );
    };

    return Signup;
}(_react.Component);

var _default = Signup;
exports.default = _default;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Signup, 'Signup', 'C:/Users/KOMO/Desktop/react/newSrc/components/Signup.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/KOMO/Desktop/react/newSrc/components/Signup.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.03dd959ef4c7be714121.hot-update.js.map