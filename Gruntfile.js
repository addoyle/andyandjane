var moment = require('moment');

var site = (function(site) {
  site.weddingDate = moment(site.weddingDate);
  for (var s in site.stories) {
    site.stories[s].date = moment(site.stories[s].date);
  }
  for (var s in site.events) {
    site.events[s].date = moment(site.events[s].date);
  }

  return site;
})(require('./src/site.json'));

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    pug: {
      deploy: {
        options: {
          data: site
        },
        files: {
          'deploy/index.html': ['src/views/site.pug']
        }
      }
    },
    wiredep: {
      deploy: {
        src: [ 'deploy/index.html' ],
        overrides: {
          jquery: { main: ['dist/jquery.min.js'] },
          bootstrap: { main: ['dist/css/bootstrap.min.css', 'dist/js/bootstrap.min.js'] },
          timecircles: { main: ['inc/TimeCircles.css', 'inc/TimeCircles.js']},
          'jquery.selectbox': { main: ['css/jquery.selectbox.css', 'js/jquery.selectbox-0.2.min.js']},
          'font-awesome': { main: ['css/font-awesome.min.css']},
          wow: { main: ['dist/wow.min.js'] },
          masonry: { main: ['dist/masonry.pkgd.min.js'], dependencies: []},
          imagesloaded: { main: ['imagesloaded.pkgd.min.js'], dependencies: []}
        }
      }
    },
    copy: {
      deploy: {
        files: [
          {
            expand: true,
            src: 'assets/**',
            dest: 'deploy/'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['pug', 'wiredep', 'copy']);
};
