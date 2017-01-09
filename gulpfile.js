var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
	var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
  	minifycss =require('gulp-minify-css');
 
// Tarea 1  minify-css
gulp.task('minify-css', function () {
  gulp.src('source/*.css')
  .pipe(concat('style.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('build/css'))
});
 
// Tarea 2  minify-js
gulp.task('minify-js', function () {
  gulp.src('source/*.js')
  .pipe(concat('script.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/js'))
});
 
});