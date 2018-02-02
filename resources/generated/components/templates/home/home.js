define(["exports", "react", "../../atoms/title/title", "../../atoms/paragraph/paragraph"], function (exports, _react, _title, _paragraph) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _title2 = _interopRequireDefault(_title);

  var _paragraph2 = _interopRequireDefault(_paragraph);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Home = function Home(props) {
    return _react2.default.createElement("div", null, _react2.default.createElement(_title2.default, {
      text: "Atomic Components: Managing Dynamic React Components using Atomic Design"
    }), _react2.default.createElement(_paragraph2.default, {
      text: "Designed by Brad Frost and Dave Olsen, atomic design is a wonderful \u201Cmethodology for creating design systems\u201D backed by Pattern Lab with five distinct levels or \u2018building blocks\u2019, which, when combined, create semantic, contextual relationships between interface objects."
    }));
  };

  exports.default = Home;
});
