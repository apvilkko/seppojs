const gulp = require('gulp');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const rimraf = require('gulp-rimraf');
const runSequence = require('run-sequence');
const cssBase64 = require('gulp-css-base64');
const babel = require('gulp-babel');

const config = {
  paths: {
    src: {
      sass: './src/seppo.scss',
      js: './src/**/*.js',
      main: './src/seppo.js',
    },
    dist: './dist/'
  }
};

gulp.task('babel', () => {
  return gulp.src(config.paths.src.main)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(config.paths.dist));
});

gulp.task('eslint', () => {
  return gulp.src(['gulpfile.js', config.paths.src.js, '!node_modules/**', '!dist/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('sass:dist', () => {
  return gulp.src(config.paths.src.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(cssBase64())
    .pipe(gulp.dest(config.paths.dist));
});

gulp.task('clean:dist', () => {
  return gulp.src(config.paths.dist)
    .pipe(rimraf());
});

gulp.task('pack', ['eslint', 'sass:dist', 'babel']);

gulp.task('dist', (cb) => {
  runSequence('clean:dist', 'pack', cb);
});

gulp.task('default', ['eslint', 'dist']);
