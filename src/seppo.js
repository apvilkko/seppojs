class Seppo {
  constructor() {
    this.seppo = null;
    this.SLIDER_UP = 'seppo-slider-up';
    this.SLIDER_EYES = 'seppo-slider-eyes';
  }
  activate() {
    var el = document.createElement('div')
    el.classList.add('seppo-wrap');
    var seppo = document.createElement('div')
    seppo.classList.add('seppo-avatar');
    seppo.classList.add('seppo-slider');
    el.appendChild(seppo);
    document.body.appendChild(el);
    this.seppo = seppo;
    setTimeout(() => {
      this.show();
    }, 2000);
  }
  show(eyes) {
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
  hide() {
    if (this.seppo.classList.contains(this.SLIDER_UP)) {
      this.seppo.classList.toggle(this.SLIDER_UP);
    }
    if (this.seppo.classList.contains(this.SLIDER_EYES)) {
      this.seppo.classList.toggle(this.SLIDER_EYES);
    }
  }
}

let seppoInstance = null;


var SeppoJS = {
  el: null,
  activate: function() {
    if (!seppoInstance) {
      seppoInstance = new Seppo();
      SeppoJS.el = seppoInstance.activate();
    }
  },
  show: (param) => { return seppoInstance.show(param); },
  hide: () => { return seppoInstance.hide(); },
}

if (typeof window !== 'undefined') {
  window.SeppoJS = SeppoJS;
}

export default SeppoJS;
