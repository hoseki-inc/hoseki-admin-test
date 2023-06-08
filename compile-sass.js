const sass = require('sass');
const fs = require('fs');

const inputFile = './sass/main.scss';
const outputFile = './css/main.css';

sass.render(
  {
    file: inputFile,
  },
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      fs.writeFileSync(outputFile, result.css.toString());
      console.log('Sass compiled successfully!');
    }
  }
);
