webpackHotUpdate(0,{

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _fa = __webpack_require__(92);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log("fa",FontAwesome);
var Login = function Login(_ref) {
    var name = _ref.name,
        password = _ref.password,
        onclick = _ref.onclick;

    // console.log("name is:", name,);
    var getName = null;
    var getPassword = null;
    var handleClick = function handleClick(e) {
        var sure = getName.value.trim();
        var sure1 = getPassword.value.trim();
        if (sure.length < 3) {
            alert("the length should more than 3");
            getName.value = "";
            if (sure1.length < 6) {
                alert("the length should more than 6");
                getPassword.value = "";
            } else {}
        }
        onclick(sure, sure1);
        // sure = '';//清空input
        // sure1 = '';
        getName.value = ""; //user name 不清空
        getPassword.value = "";
    };

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'label',
            { htmlFor: 'name' },
            _react2.default.createElement(_fa.FaUser, null)
        ),
        _react2.default.createElement('input', { type: 'text', id: 'name', ref: function ref(input) {
                getName = input;
            }, placeholder: 'name' }),
        _react2.default.createElement('p', null),
        _react2.default.createElement(
            'label',
            { htmlFor: 'password' },
            _react2.default.createElement(_fa.FaKey, null)
        ),
        _react2.default.createElement('input', { type: 'password', id: 'password', ref: function ref(input) {
                getPassword = input;
            }, placeholder: 'password' }),
        _react2.default.createElement('p', null),
        _react2.default.createElement(
            'span',
            { onClick: function onClick(e) {
                    return handleClick(e);
                } },
            _react2.default.createElement(_fa.FaHandPaperO, null)
        )
    );
};
// Login = connect()(Login); 

// import { connect } from 'redux';
// import { surePeople } from '../actions'
// console.log("log surePeople", surePeople);
// import {LogIn} from '../containers/login.js'
// console.log("LogIn:",LogIn);
//icon 
var _default = Login;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Login, 'Login', 'C:/Users/KOMO/Desktop/react/newSrc/components/login.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/KOMO/Desktop/react/newSrc/components/login.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.90858ba20cbb5c1c0301.hot-update.js.map