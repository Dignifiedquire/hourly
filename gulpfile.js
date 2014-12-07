var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var to5 = require('6to5-browserify');
var less = require('gulp-less');
var shell = require('gulp-shell');

global.isWatching = true;

// Set options for reactify
function reactifyStrip(file) {
    return reactify(file, {
        stripTypes: true
    });
}

gulp.task('browserify', function() {
    var bundler = browserify({
        entries: ['./lib/app.js'], // Only need initial file, browserify finds the deps
        transform: [reactifyStrip, to5], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
    var watcher  = watchify(bundler);

    return watcher
    .on('update', function() { // When any files update

        return shell.task('flow')()
        .on('data', function() {
            var updateStart = Date.now();
            console.log('Updating!');
            watcher.bundle() // Create new bundle that uses the cache for high performance
            .pipe(source('app.js'))
            // This is where you add uglifying etc.
            .pipe(gulp.dest('./dist/'));
            console.log('Updated!', (Date.now() - updateStart) + 'ms');
        })
        .on('error', function(error) {
            //console.log(error);
        });
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/'));
});

// I added this so that you see how to run two watch tasks
gulp.task('less', function () {

    return gulp.src('styles/app.less')
    .pipe(less({
        paths: [
            nodeModule('font-awesome'),
            nodeModule('bootstrap')
        ]
    }))
    .pipe(gulp.dest('dist/app.css'));
});

gulp.task('serve', ['browserify'], function() {
    gulp.watch('styles/**/*.less', [less]);
});

// Just running the two tasks
gulp.task('default', ['serve']);
