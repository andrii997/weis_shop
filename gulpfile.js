var gulp          = require('gulp');
var autoprefixer  = require('gulp-autoprefixer');
var browserSync   = require('browser-sync');
var browserify    = require('browserify');
var sourse        = require('vinyl-source-stream');
const fileinclude = require('gulp-file-include');

var sass          = require('gulp-sass');
sass.compiler     = require('node-sass');

var rigger        = require('gulp-rigger');




gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('./dist/css/'))
      .pipe(browserSync.reload({
        stream: true
    }));
  });


gulp.task('html', function() {
    gulp.src('./src/*.html')
    .pipe(rigger())
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});



gulp.task('js', function() {
    browserify('./src/js/index.js')
        .bundle()
        .pipe(sourse('scripts.all.js'))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('files', function() {
    gulp.src('./src/img/*.*')
        .pipe(gulp.dest('./dist/img/'));
    gulp.src('./src/fonts/*.*')
        .pipe(gulp.dest('./dist/fonts/'));
        gulp.src('./src/libs/*.*')
        .pipe(gulp.dest('./dist/libs/'));
    gulp.src('./src/data/*.*')
        .pipe(gulp.dest('./dist/data/'));
})

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: 'dist'
        }
    })
});



gulp.task('watch', ['server', 'build'], function() {
    gulp.watch('./src/fonts/**/*.*', ['files']);
    gulp.watch('./src/img/**/*.*', ['files']);
    gulp.watch('./src/sass/**/*.scss', ['sass']);
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch('./src/*.html', ['html']);
});

gulp.task('build', ['sass', 'js', 'html', 'files']);

gulp.task('start', ['build', 'watch']);