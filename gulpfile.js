const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
  return gulp
    .src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}

function watchFiles() {
  gulp.watch('./sass/**/*.scss', compileSass);
}

exports.default = gulp.series(compileSass, watchFiles);

