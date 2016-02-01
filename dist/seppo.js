"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Seppo = function () {
  function Seppo() {
    _classCallCheck(this, Seppo);
  }

  _createClass(Seppo, [{
    key: "activate",
    value: function activate() {
      console.log("activated!");
    }
  }]);

  return Seppo;
}();

var seppoInstance = null;

var SeppoJS = {
  activate: function activate() {
    if (!seppoInstance) {
      seppoInstance = new Seppo();
      seppoInstance.activate();
    }
  }
};

if (typeof window !== 'undefined') {
  window.SeppoJS = SeppoJS;
}

exports.default = SeppoJS;
