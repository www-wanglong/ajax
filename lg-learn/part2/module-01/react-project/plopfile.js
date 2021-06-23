module.exports = plop => {
  plop.setGenerator('component', {
    description: 'create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
        default: 'MyComponent'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.js',
        templateFile: 'plop-templates/component.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.css',
        templateFile: 'plop-templates/component.css.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.test.js',
        templateFile: 'plop-templates/component.test.hbs'
      }
    ]
  })
}