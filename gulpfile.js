var gulp = require('gulp'),
    vfs = require('vinyl-fs'),
    minifyhtml = require('gulp-minify-html'),
    concat = require('gulp-concat'),
    mincss = require('gulp-minify-css'),
    uglify = require('gulp-uglify');





//directory
var src = './src',
    dist = './dist';

//tasks
//make responsive image
// gulp.task('image', function () {
//     vfs.src(src+'/images/*.jpg')
//         .pipe(responsive({
//             '*.jpg': [{
//                 width: 500,
//                 height: 600,
//                 suffix: '-600',
//                 crop: true
//
//             }, {
//                 width: 750,
//                 height: 800,
//                 suffix: '-800',
//                 crop: true
//             }, {
//                 width: 400,
//                 height: 200,
//                 suffix: '-400',
//                 crop: true
//             }, {
//                 width: 300,
//                 height: 120,
//                 suffix: '-300',
//                 crop: true
//             }]
//         }))
//         .pipe(gulp.dest(dist+'/images'));
// });

//make clean the image folder in dist dir


gulp.task('clean', function () {
    return gulp.src('dist/images', {read: false})
        .pipe(clean());
});
opts = { /* plugin options */ };


//minify html
gulp.task('minhtml', function () {
    return gulp.src(src+'/*.html')
        .pipe(minifyhtml())
        .pipe(gulp.dest(dist));
});

//minify css
gulp.task('mincss', function () {
    return gulp.src(src+'/styles/*.css')
        .pipe(mincss())
        .pipe(gulp.dest(dist+'/styles'));
});

//minify js
gulp.task('minjs', function () {
    return gulp.src(src+'/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(dist+'/scripts'));
});



gulp.task('build', ['mincss','minhtml','minjs']);