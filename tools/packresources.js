var Datauri = require('datauri');
var datauri = new Datauri();
var fs = require('fs');
var copy = require('copy-files');

const paths = {
  dist: 'dist/',
  src: 'src/',
  style: 'seppo.css',
  avatar: 'resources/seppo_128.png'
};

var copySpec = {};
copySpec[paths.style] = paths.src + paths.style;

copy({
  files: copySpec,
  dest: paths.dist,
  overwrite: true
}, function (err) {
  datauri
    .on('encoded', function (content) {
      var cssClass = this.getCSS({class: 'seppo-avatar'});
      fs.appendFile(paths.dist + paths.style, cssClass, (err) => {
        if (err) throw err;
      });
    })
    .on('error', function (content) {
        console.log('Fail!');
    })
    .encode(paths.avatar);

});
