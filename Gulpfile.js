var gulp         = require('gulp');
var connect      = require('gulp-connect');
var plumber      = require('gulp-plumber');
var browserify   = require('gulp-browserify');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cp           = require('child_process');

gulp.task('js', function() {
	return gulp.src('src/index.js')
		.pipe(plumber())
		.pipe(browserify({
			transform: ['babelify'],
			debug: false,
		}))
		.pipe(gulp.dest('build'))
		.pipe(connect.reload());
});

gulp.task('sass', function() {
	return gulp.src('src/index.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('build'))
		.pipe(connect.reload());
});

gulp.task('css', function() {
	return gulp.src('src/css/**/*.css')
		.pipe(plumber())
		.pipe(gulp.dest('build/css'))
		.pipe(connect.reload());
});

gulp.task('fonts', function() {
	return gulp.src('src/fonts/**/*')
		.pipe(plumber())
		.pipe(gulp.dest('build/fonts'))
		.pipe(connect.reload());
});

gulp.task('html', function() {
	return gulp.src('index.html')
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.js',   ['js']);
	gulp.watch('src/**/*.scss', ['sass']);
	gulp.watch('src/**/*.css', ['css']);
	gulp.watch('index.html', ['html']);
	gulp.watch('data/**/**/*', ['html']);
	gulp.watch('src/fonts/*', ['fonts']);
});

gulp.task('connect', function() {
	connect.server({
		livereload: true,
		port: 8000,
	});
});

gulp.task('default', ['build', 'watch', 'connect']);
gulp.task('build', ['js', 'sass', 'fonts', 'css']);
