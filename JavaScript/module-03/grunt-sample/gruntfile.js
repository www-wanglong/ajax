const loadGruntTasks = require('load-grunt-tasks')
module.exports = grunt => {
  grunt.initConfig({ //配置方法
    foo: {
      bar: 123
    }
  })
  grunt.registerTask('foo', '任务描述', () => {
    console.log(grunt.config('foo.bar'))
  })

  grunt.registerTask('bar', '任务描述', () => {
    console.log('bar')
  })

  // 失败任务 不会运行下面的任务
  grunt.registerTask('fail', '任务描述', () => {
    console.log('fail')
    return false
  })

  grunt.registerTask('default', ['foo', 'fail', 'bar'])

  grunt.registerTask('async-task', function () {
    const done = this.async()
    setTimeout(() => {
      console.log('async task')
      done(false) //失败的异步任务
    }, 1000)
  })

  grunt.initConfig({
    build: {
      css: {
        options: { // 覆盖全面的 options
          foo: 'options css'
        }
      },
      js: '2',
      options: {
        foo: 'bar'
      }
    }
  })
  // 多目标模式
  grunt.registerMultiTask('build', function () {
    console.log(this.options())
    console.log(`build:${this.target}--${this.data}`)
  })

  //插件使用
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.initConfig({ //添加任务的配置选项
    clean: {
      temp: 'temp/*.txt'
    }
  })

  // grunt-sass
  const sass = require('sass')
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true,
        implementation: sass,
      },
      main: {
        files: {
          'dist/css/main.css': 'src/scss/main.scss'
        }
      }
    },

    babel: { //需要设置babel 的presets
      options: {
        sourceMap: true,
        presets: ['@babel/preset-env']
      },
      main: {
        files: {
          'dist/js/app.js': 'src/js/app.js'
        }
      },
    },

    watch: {
      js: {
        files: ['src/js/*.js'],
        tasks: ['babel']
      },
      css: {
        files: ['src/scss/*.scss'],
        tasks: ['sass']
      },

    }
  })

  grunt.loadNpmTasks('grunt-sass')

  // grunt-babel
  grunt.loadNpmTasks('grunt-babel')

  loadGruntTasks(grunt) //自动加载所有的 grunt插件中的任务

  grunt.registerTask('default', ['sass', 'babel', 'watch']) // 先编译 再执行
}