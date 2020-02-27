const gulp = require('gulp');
const babel = require('gulp-babel');
var bookmarklet = require('gulp-bookmarklet');

gulp.task('bookmarklet', function() {
    return gulp.src('src/bookmarklets/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(bookmarklet())
        .pipe(gulp.dest('dist'));
});