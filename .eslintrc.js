/** @format */

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    tsconfigRootDir: './',
    project: 'tsconfig.json',
    sourceType: 'module'
  },

  settings: {
    'import/parsers': {
      'babel-eslint': ['.*.js', '*.js']
    }
  },

  parser: 'babel-eslint',

  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/react'
  ],

  plugins: ['import', 'material-ui', '@next/eslint-plugin-next', 'prettier'],

  rules: {
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'newline-before-return': 2,
    'import/no-unresolved': [1, { ignore: ['^(all|part):'] }],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ]
  },

  overrides: [
    {
      files: ['./**/*.ts', './**/*.tsx', '.*.ts', '*.ts', '*.tsx', '.*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: './',
        project: 'tsconfig.json',
        sourceType: 'module'
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react'
      ],

      plugins: [
        'import',
        '@typescript-eslint',
        'material-ui',
        '@next/eslint-plugin-next',
        'prettier'
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
            project: 'tsconfig.json'
          }
        }
      },
      rules: {
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE']
          },
          {
            selector: 'interface',
            format: ['PascalCase'],
            prefix: ['I', 'A']
          },
          {
            selector: 'typeParameter',
            format: ['PascalCase'],
            prefix: ['T']
          },
          {
            selector: ['variable'],
            format: ['camelCase'],
            leadingUnderscore: 'allow'
          }
        ],
        'react/react-in-jsx-scope': 0,
        'react/prop-types': 0,
        'newline-before-return': 2,
        'import/no-unresolved': [1, { ignore: ['^(all|part):'] }],
        'comma-dangle': [
          'error',
          {
            arrays: 'never',
            objects: 'never',
            imports: 'never',
            exports: 'never',
            functions: 'never'
          }
        ]
      }
    }
  ]
}
