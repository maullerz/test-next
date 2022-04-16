const path = require('path') // eslint-disable-line import/no-extraneous-dependencies

const config = {
  extends: 'airbnb',
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  env: {
    browser: true,
    mocha: true,
    es6: true,
    node: true,
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  globals: {
    APP_CONFIG: true,
    APP_CONSTANTS: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, './webpack.dev.config.js'),
      },
      node: {
        extensions: ['.js', '.jsx', '.scss', '.css'],
        moduleDirectory: [
          'src',
          'node_modules',
        ],
        paths: ['src'],
      },
    },
  },
  rules: {
    'semi': ['error', 'never'],
    'linebreak-style': 0,
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'jsx-quotes': ['error', 'prefer-single'],
    'quote-props': ['error', 'consistent-as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'max-len': 0,
    // 'max-len': ['error', 120, 2, {
    //   ignoreUrls: true,
    //   ignoreComments: true,
    //   ignoreRegExpLiterals: true,
    //   ignoreStrings: true,
    //   ignoreTemplateLiterals: true,
    // }],
    'arrow-body-style': 0,
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      scss: 'never',
    }],
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react/button-has-type': 0,
    'object-curly-newline': ['error', { consistent: true }],

    'operator-linebreak': ['warn', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'react/jsx-curly-newline': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'object-property-newline': 'off',
    'class-methods-use-this': 'off',

    'no-unused-expressions': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'react/jsx-props-no-multi-spaces': 'off',
    'react/jsx-one-expression-per-line': 'off',

    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-filename-extension': 'off',

    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'ignore',
      prop: 'parens-new-line',
    }],

    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',
    // 'padding-line-between-statements': [
    //   'error',
    //   { blankLine: 'always', prev: '*', next: 'return' },
    //   { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
    //   { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    // ],
    'react/jsx-no-target-blank': ['warn', { allowReferrer: true }],

    'react/destructuring-assignment': 'off',

    'no-console': 'off',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'no-undef': 'warn',

    'react/jsx-no-bind': 'off',

    'react/function-component-definition': [2, { "namedComponents": "arrow-function" }],
  },
}

if (process.env.NODE_ENV === 'development') {
  config.rules['no-unused-vars'] = 0
  config.rules['no-undef'] = 0
  config.rules['react/jsx-no-undef'] = 0
  config.rules['no-unreachable'] = 0
  config.rules['no-console'] = 0
}

module.exports = config
