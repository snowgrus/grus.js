module.exports=function(grunt){
	var // files
		coreFiles = [
			"core.js"
		],

		jsFiles = coreFiles.map(function(file) {
			return "src/" + file;
		});
		
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		banner: '/*!\n' +
			' * <%= pkg.name %>.js v<%= pkg.version %> ' +
			'<%= grunt.template.today("isoDate") %>\n' +
			' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
			' * Licensed under <%= _.pluck(pkg.licenses, "type").join(", ") %>\n' +
			' *\n' +
			' * <%= pkg.description %>.\n' +
			' */\n\n',
		
		// Task configuration.
		// 清除文件或文件夹
		clean: {
			dest: ['dist'],
			css: ['dist/css'],
			js: ['dist/js']
		},
		
		//===============================
		// 文件合并
		concat: {
			js: {
				options: {
					banner: "<%= banner %>",
					
					// true 去掉所有块注释 /* */，false不对注释做处理
					stripBanners: false,
					separator: '\n\n'
				},
				src: jsFiles,
				dest: "dist/<%= pkg.name %>-<%= pkg.version %>.js"
			}
		},
		
		
		//===============================
		// 文件压缩
		uglify: {
			options: {
				banner: "<%= banner %>",
				report: 'min'
			},
			
			all: {
				files: [{
					expand: true,
					cwd: 'dist/js',
					src: '*.js',
					dest: 'dist/js'
				}]
			},
			
			js: {
				files: {
					'dist/js/<%= pkg.name %>-<%= pkg.version %>.min.js':
							['dist/js/<%= pkg.name %>-<%= pkg.version %>.js']
				}
			}
		},
		
		//===============================
		//代码验证
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish'),
				reporterOutput: {
				
				}
			},
			//具体任务配置
			files: {
				src: ['src/js/*.js']
			}
		},
		
		//===============================
		// 监听文件改变，并执行特定任务
		watch: {
			js: {
				files:['src/*.js'],
				tasks:['jshint']
			}
		}
	});	

	//grunt plugins
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-jslint");
	grunt.loadNpmTasks("grunt-contrib-watch");

	// Custom Task
	grunt.registerTask("jsmin", ["concat:js", "uglify:js"]);

};