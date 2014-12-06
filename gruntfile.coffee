module.exports = (grunt) ->
  require('load-grunt-tasks')(grunt)

  grunt.initConfig
    '6to5':
      options:
        sourceMap: yes
      dist:
        files:
          'dist/app.js': 'lib/app.js'

    'download-atom-shell':
      version: '0.19.5'
      outputDir: './atom-shell'
      rebuild: yes

    browserify:
      dist:
        options:
          transform: ['6to5-browserify']
        files:
          'dist/app.js': ['lib/app.js']


  grunt.registerTask 'default', ['browserify']
