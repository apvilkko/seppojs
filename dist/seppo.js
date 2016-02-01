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
    constructor() {
      this.seppo = null;
      this.SLIDER_UP = 'seppo-slider-up';
    }

    activate() {
      var el = document.createElement('div');
      el.classList.add('seppo-wrap');
      var seppo = document.createElement('div');
      seppo.classList.add('seppo-avatar');
      seppo.classList.add('seppo-slider');
      el.appendChild(seppo);
      document.body.appendChild(el);
      this.seppo = seppo;
      setTimeout(() => {
        this.show();
      }, 2000);
    }

    show() {
      if (!this.seppo.classList.contains(this.SLIDER_UP)) {
        this.seppo.classList.toggle(this.SLIDER_UP);
      }
    }

    hide() {
      if (this.seppo.classList.contains(this.SLIDER_UP)) {
        this.seppo.classList.toggle(this.SLIDER_UP);
      }
    }

  }

  let seppoInstance = null;
  var SeppoJS = {
    el: null,
    activate: function () {
      if (!seppoInstance) {
        seppoInstance = new Seppo();
        SeppoJS.el = seppoInstance.activate();
      }
    },
    show: () => {
      return seppoInstance.show();
    },
    hide: () => {
      return seppoInstance.hide();
    }
  };

  if (typeof window !== 'undefined') {
    window.SeppoJS = SeppoJS;
  }

  exports.default = SeppoJS;
});
