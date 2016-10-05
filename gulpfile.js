var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

/*******************************
 Main build tasks
 *******************************/
gulp.task('watch', ['serve', 'watch:sass', 'watch:html', 'watch:js']);

/*******************************
 Development build tasks
 *******************************/
gulp.task('serve', ['sass-watch'], function() {
	browserSync.init({
		server: "./client"
	});
});

gulp.task('watch:sass', function () {
	gulp.watch("client/assets/sass/*.scss", ['sass-watch']);
});

gulp.task('watch:html', function () {
	gulp.watch("client/**/*.html").on('change', browserSync.reload);
});

gulp.task('watch:js', function () {
	gulp.watch("client/**/*.js").on('change', browserSync.reload);
});

gulp.task('sass-watch', function() {
	return gulp.src("client/assets/sass/**/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("./client/assets/css"))
		.pipe(browserSync.stream());
});