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
    global.seppo = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Seppo = function () {
    function Seppo() {
      _classCallCheck(this, Seppo);

      this.seppo = null;
      this.SLIDER_UP = 'seppo-slider-up';
      this.SLIDER_EYES = 'seppo-slider-eyes';
    }

    _createClass(Seppo, [{
      key: 'activate',
      value: function activate() {
        var _this = this;

        var el = document.createElement('div');
        el.classList.add('seppo-wrap');
        var seppo = document.createElement('div');
        seppo.classList.add('seppo-avatar');
        seppo.classList.add('seppo-slider');
        el.appendChild(seppo);
        document.body.appendChild(el);
        this.seppo = seppo;
        setTimeout(function () {
          _this.show();
        }, 2000);
      }
    }, {
      key: 'show',
      value: function show(eyes) {
        if (eyes) {
          this.hide();

          if (!this.seppo.classList.contains(this.SLIDER_EYES)) {
            this.seppo.classList.toggle(this.SLIDER_EYES);
          }
        } else {
          if (this.seppo.classList.contains(this.SLIDER_EYES)) {
            this.seppo.classList.toggle(this.SLIDER_EYES);
          }

          if (!this.seppo.classList.contains(this.SLIDER_UP)) {
            this.seppo.classList.toggle(this.SLIDER_UP);
          }
        }
      }
    }, {
      key: 'hide',
      value: function hide() {
        if (this.seppo.classList.contains(this.SLIDER_UP)) {
          this.seppo.classList.toggle(this.SLIDER_UP);
        }

        if (this.seppo.classList.contains(this.SLIDER_EYES)) {
          this.seppo.classList.toggle(this.SLIDER_EYES);
        }
      }
    }]);

    return Seppo;
  }();

  var seppoInstance = null;
  var SeppoJS = {
    el: null,
    activate: function activate() {
      if (!seppoInstance) {
        seppoInstance = new Seppo();
        SeppoJS.el = seppoInstance.activate();
      }
    },
    show: function show(param) {
      return seppoInstance.show(param);
    },
    hide: function hide() {
      return seppoInstance.hide();
    }
  };

  if (typeof window !== 'undefined') {
    window.SeppoJS = SeppoJS;
  }

  exports.default = SeppoJS;
});