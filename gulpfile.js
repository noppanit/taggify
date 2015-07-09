var gulp = require('gulp');
var karma = require('gulp-karma');

var testFiles = [
	'tests/vendors/jquery-1.11.3.min.js',
	'tests/vendors/jasmine-jquery.js',
	'src/**/*.js',
	'tests/spec/**/*.js'
];
/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
	return gulp.src(testFiles)
		.pipe(karma({
			configFile: 'karma.conf.js',
			action: 'run'
		}))
	.on('error', function(err) {
		// Make sure failed tests cause gulp to exit non-zero 
		throw err;
	});
});

gulp.task('default', function() {
	gulp.src(testFiles)
		.pipe(karma({
			configFile: 'karma.conf.js',
			action: 'watch'
		}));
});
