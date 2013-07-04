module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: {
                    paths: 'build/',
                    outdir: 'docs/'
                }
            }
        },
        jasmine: {
            main: {
                src: 'build/geometry2d.js',
                options: {
                    specs: 'Geometry2D/test/**/*.test.js'
                }
            }
        },
        //jshint: {
        //    all: [
        //        'Gruntfile.js',
        //        'build/**/*.js',
        //        'spec/**/*.js'
        //    ],
        //    options: {
        //        jshintrc: '.jshintrc'
        //    }
        //},
        typescript: {
            base: {
                src: ['Geometry2D/src/**/*.ts'],
                dest: 'build/geometry2d.js',
                options: {
                    target: 'ES5',
                    module: 'amd',
                    comments: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-yuidoc');

    grunt.registerTask('test', ['typescript', 'jasmine']);
    grunt.registerTask('doc', ['typescript','yuidoc']);

    grunt.registerTask('default', ['test']);

};