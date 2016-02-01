(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  class Seppo {
    constructor() {}

    activate() {
      console.log("activated!");
      var el = document.createElement('div');
      el.classList.add('seppo-wrap');
      var seppo = document.createElement('div');
      seppo.classList.add('seppo-avatar');
      el.appendChild(seppo);
      document.body.appendChild(el);
    }

  }

  let seppoInstance = null;
  var SeppoJS = {
    activate: function () {
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
});
