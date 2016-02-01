
class Seppo {
  constructor() {

  }
  activate() {
    console.log("activated!");
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
