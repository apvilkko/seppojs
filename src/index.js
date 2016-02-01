
class Seppo {
  constructor() {

  }
  activate() {
    console.log("activated!");
    var el = document.createElement('div')
    el.classList.add('seppo-wrap');
    var seppo = document.createElement('div')
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
}

if (typeof window !== 'undefined') {
  window.SeppoJS = SeppoJS;
}

export default SeppoJS;
