define(["react", "../components/templates/home/home"], function (_react, _home) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _home2 = _interopRequireDefault(_home);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var destination = document.querySelector("#container");
  ReactDOM.render(_react2.default.createElement(_home2.default, null), destination);
});
