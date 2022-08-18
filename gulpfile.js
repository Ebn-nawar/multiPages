let gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    minify = require('gulp-minify'),
    pug = require('gulp-pug'),
    cleanCSS = require('gulp-clean-css');


// compile pug to html
function pugToHtml() {
    return gulp
        .src('./build/pug/index.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('./dist'))
        .pipe(livereload())
}
// js minyfier
function jsMinify() {
    return gulp
        .src(['./build/js/*.js' , './libs/js/*.js'])
        .pipe(minify())
        .pipe(gulp.dest('./dist/assets/js'))
        .pipe(livereload())
}
// css trans & minify
function cssTrans() {
    return gulp
        .src(['./build/css/main.css' , './libs/css/*.css'])
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/assets/css'))
        .pipe(livereload())
}

exports.default = function () {
    require('./server')
    livereload.listen()

    gulp.watch(['./build/js/app.js'] , jsMinify )
    gulp.watch(['./build/pug/index.pug'] , pugToHtml )
    gulp.watch(['./build/css/main.sass'] , cssTrans )
};