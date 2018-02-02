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

  var Paragraph = function Paragraph(props) {
    return _react2.default.createElement("p", null, props.text);
  };

  Paragraph.prototype = {
    text: _react2.default.PropTypes.string.isRequired
  };
  exports.default = Paragraph;
});
