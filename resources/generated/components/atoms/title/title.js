define(["exports", "react"], function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Title = function Title(props) {
    return _react2.default.createElement("h1", null, props.text);
  };

  Title.prototype = {
    text: _react2.default.PropTypes.string.isRequired
  };
  exports.default = Title;
});
