const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const inject = require('gulp-inject');
const wiredep = require('wiredep').stream;
const del = require('del');
const deporder = require('gulp-deporder');

const mainBowerFiles = require('main-bower-files');
const filter = require('gulp-filter');

const conf = {
  tasks: {
    html: {
      src: path.join(__dirname, 'src', '*.html')
    },
    css: {
      src: path.join(__dirname, 'src/sass/*'),
      output: 'build.css'
    },
    vendors: {
      output: 'vendors.css'
    },
    vendorsJS: {
      output: 'vendors.js'
    },
    js: {
      src: path.join(__dirname, 'src/js/*'),
      output: 'build.js'
    }
  },
  buildDir: path.join(__dirname, 'build')
};

gulp.task('build', ['build:html', 'build:css', 'build:vendors', 'build:vendorsJS', 'build:js']);

gulp.task('watch', function () {
  gulp.watch([
    conf.tasks.html.src,
    conf.tasks.css.src,
    conf.tasks.js.src
  ], ['build:html', 'build:css', 'build:js']);
});

// $ npm run build:html
gulp.task('build:html', ['build:css', 'build:vendors', 'build:vendorsJS', 'build:js'], function () {
  const injectFiles = gulp.src(['build/build.css', 'build/vendors.css', 'build/vendors.js', 'build/build.js']);

  const injectOptions = {
    addRootSlash: false,
    ignorePath: ['src', 'build']
  };

  gulp.src(conf.tasks.html.src)
    .pipe(inject(injectFiles, injectOptions))
    .pipe(gulp.dest(conf.buildDir));
});

// $ npm run watch:html
gulp.task('watch:html', function () {
  gulp.watch(conf.tasks.html.src, ['build:html']);
});

// $ npm run build:vendors
gulp.task('build:vendors', function() {
  gulp.src(mainBowerFiles({ debugging: true }))
    .pipe(filter('**/*.css'))
    .pipe(concat(conf.tasks.vendors.output))
    .pipe(gulp.dest(conf.buildDir));
});

// $ npm run build:vendorsJS
gulp.task('build:vendorsJS', function() {
  gulp.src('bower_components/page/*')
    .pipe(filter('/.js'))
    .pipe(concat(conf.tasks.vendorsJS.output))
    //.pipe(uglify())
    .pipe(gulp.dest(conf.buildDir));
});

// $ npm run build:css
gulp.task('build:css', function () {

  function transformFilepath(filepath) {
    return '@import "' + filepath + '"';
  }

  const injectGlobalFiles = gulp.src('src/global/*.sass', {read: false});

  const injectGlobalOptions = {
    transform: transformFilepath,
    starttag: '// inject:global',
    endtag: '// endinject',
    addRootSlash: false
  };

  gulp.src(conf.tasks.css.src)
    .pipe(wiredep())
    .pipe(inject(injectGlobalFiles, injectGlobalOptions))
    .pipe(sass({style: 'expanded'}))
    .pipe(concat(conf.tasks.css.output))
    .pipe(gulp.dest(conf.buildDir));
});

// $ npm run watch:css
gulp.task('watch:css', function () {
  gulp.watch(conf.tasks.css.src, ['build:css']);
});

// $ npm run build:js
gulp.task('build:js', function () {
  gulp.src(conf.tasks.js.src)
    .pipe(deporder())
    .pipe(uglify())
    .pipe(concat(conf.tasks.js.output))
    .pipe(gulp.dest(conf.buildDir));
});

// $ npm run watch:js
gulp.task('watch:js', function () {
  gulp.watch(conf.tasks.js.src, ['build:js']);
});

// $ gulp
gulp.task('default', ['build', 'watch']);