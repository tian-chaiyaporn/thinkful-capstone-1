const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const inject = require('gulp-inject');

const conf = {
  tasks: {
    html: {
      src: path.join(__dirname, 'src', '*.html')
    },
    css: {
      src: path.join(__dirname, 'src/sass/*'),
      output: 'build.css'
    },
    js: {
      src: [
        path.join(__dirname, 'src/js/Utils/*'),
        path.join(__dirname, 'src/js/Models/*'),
        path.join(__dirname, 'src/js/Presenters/*'),
        path.join(__dirname, 'src/js/Views/*'),
        path.join(__dirname, 'src/js/*')
      ],
      output: 'build.js'
    }
  },
  buildDir: path.join(__dirname, 'build')
};

// $ npm run build:html
gulp.task('build:html', function () {
  gulp.src(conf.tasks.html.src)
    .pipe(gulp.dest(conf.buildDir));
});

// $ npm run build:js
gulp.task('build:js', function () {
  gulp.src(conf.tasks.js.src)
    .pipe(concat(conf.tasks.js.output))
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
    .pipe(inject(injectGlobalFiles, injectGlobalOptions))
    .pipe(sass({style: 'expanded'}))
    .pipe(concat(conf.tasks.css.output))
    .pipe(gulp.dest(conf.buildDir));
});


gulp.task('build', ['build:html', 'build:css', 'build:js']);

gulp.task('watch', function () {
  gulp.watch([
    conf.tasks.html.src,
    conf.tasks.js.src
  ], ['build:html', 'build:css', 'build:js']);
});

// $ gulp
gulp.task('default', ['build', 'watch']);
