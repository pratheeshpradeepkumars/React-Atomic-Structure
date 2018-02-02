module.exports = function (grunt) {
    require('jit-grunt')(grunt);

	grunt.initConfig({
        'babel': {
    		options: {
    			sourceMaps: false,
    					presets: ['./node_modules/babel-preset-es2015', './node_modules/babel-preset-react'],
    					plugins : ["./node_modules/babel-plugin-transform-es2015-modules-amd"]
    		},
    		jsx: {
    			files: [{
                    expand: true,
                    cwd: './resources',
                    src: ['components/**/**/*.js', 'app/*.js'],
                    dest: 'resources/generated/',
                    ext: '.js'
    			}]
    		}
    	},
        'less': {
            development: {
                options: {
                  compress: true,
                  yuicompress: true,
                  optimization: 2
                },
                files: {
                  "resources/generated/styles/main.css": "resources/styles/style.less" // destination file and source file
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default', ['babel','less']);
};
