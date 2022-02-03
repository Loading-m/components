"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addons = require("@storybook/addons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  textAlign: 'center'
};

var _default = (0, _addons.makeDecorator)({
  name: 'makeCenter',
  wrapper: function wrapper(storyFn, context, _ref) {
    var parameters = _ref.parameters;
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles
    }, storyFn(context));
  }
});

exports.default = _default;