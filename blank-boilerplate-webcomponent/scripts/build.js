const fs = require('fs-extra');
const concat = require('concat');
const path = require('path');
const accept = ['js'];

const src = (__dirname, path.resolve('build/static/js'));

(async function build() {
  fs.readdir(src, async (err, _files) => {
    if (err) {
      console.log(err);
    } else {
      const acceptFiles = _files.filter((f) => {
        let ext = f.split('.');
        return accept.includes(ext[ext.length - 1]);
      });

      await fs.ensureDir('elements');
      await concat(
        acceptFiles.map((f) => `${src}/${f}`),
        'elements/liv-form.js'
      );
    }
  });
})();
