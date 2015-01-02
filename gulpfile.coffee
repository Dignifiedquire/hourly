gulp = require 'gulp'
source = require 'vinyl-source-stream' # Used to stream bundle for further handling
browserify = require 'browserify'
watchify = require 'watchify'
reactify = require 'reactify'
to5 = require '6to5-browserify'
less = require 'gulp-less'
shell = require 'gulp-shell'

global.isWatching = yes

# Set options for reactify
reactifyStrip = (file) -> reactify file, stripTypes: yes

gulp.task 'browserify', ->
  bundler = browserify
    entries: ['./lib/app.js'] # Only need initial file, browserify finds the deps
    extensions: ['.jsx']
    transform: [reactifyStrip, to5] # We want to convert JSX to normal javascript
    debug: yes # Gives us sourcemapping
    cache: {}
    packageCache: {}
    fullPaths: yes # Requirement of watchify

  watcher  = watchify bundler

  watcher
  .on 'update', -> # When any files update

    shell.task('flow')()
    .on 'data', ->
      updateStart = Date.now()
      console.log 'Updating!'
      watcher.bundle() # Create new bundle that uses the cache for high performance
      .pipe source 'app.js'
      # This is where you add uglifying etc.
      .pipe gulp.dest './dist/'
      console.log 'Updated!', (Date.now() - updateStart) + 'ms'
    .on 'error', (error) ->
      #console.log(error)
  .bundle() # Create the initial bundle when starting the task
  .pipe source 'app.js'
  .pipe gulp.dest './dist/'

# I added this so that you see how to run two watch tasks
gulp.task 'less', ->
  gulp.src 'styles/app.less'
  .pipe less()
  .pipe gulp.dest './dist'


gulp.task 'serve', ['browserify'], ->
  gulp.watch 'styles/**/*.less', [less]


# Just running the two tasks
gulp.task 'default', ['less', 'serve']
