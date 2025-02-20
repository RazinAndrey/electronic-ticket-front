module.exports = {
  root: true,
  ignorePatterns: ['projects/**/*'],
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'airbnb-base',
        'airbnb-typescript/base',
        'prettier',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      rules: {
        'no-restricted-syntax': 'off',
        'no-plusplus': 'off',
        'class-methods-use-this': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/lines-between-class-members': [
          'error',
          {
            enforce: [
              { blankLine: 'always', prev: '*', next: 'method' },
              { blankLine: 'always', prev: 'method', next: '*' },
              { blankLine: 'never', prev: 'field', next: 'field' },
            ],
          },
        ],
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase',
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: ['app', 'ui'],
            style: 'kebab-case',
          },
        ],
      },
    },

    {
      files: ['*.html'],
      extends: [
        'plugin:@angular-eslint/template/recommended',
        'plugin:@angular-eslint/template/accessibility',
      ],
      rules: {},
    },
  ],
};
