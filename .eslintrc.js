const rules = {
  'no-underscore-dangle': [
    'error',
    { allow: ['_id', '_type', '_rev', '_key', '_createdAt', '_updatedAt'] }
  ],
  'react/jsx-props-no-spreading': [
    2,
    {
      html: 'enforce',
      custom: 'enforce',
      explicitSpread: 'ignore',
      exceptions: ['App', 'Component', 'SectionComponent', 'SingleCategory']
    }
  ],
  'no-undef': 0,
  'node/no-missing-import': 0,
  'jsdoc/check-tag-names': 0,
  'react/react-in-jsx-scope': 0,
  'react/prop-types': 0,
  'newline-before-return': 2,
  'import/no-unresolved': [1, { ignore: ['^(all|part):'] }],
  'comma-dangle': [
    2,
    {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }
  ],
  'arrow-body-style': [2, 'as-needed'],
  'prefer-arrow/prefer-arrow-functions': [
    2,
    {
      allowStandaloneDeclarations: true,
      disallowPrototype: true,
      singleReturnOnly: true,
      classPropertiesAllowed: false
    }
  ]
}

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
  globals: {
    JSX: true
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
    'plugin:jsdoc/recommended',
    'plugin:promise/recommended',
    'plugin:node/recommended-module',
    'prettier',
    'prettier/react'
  ],

  plugins: [
    'import',
    'jsdoc',
    'prefer-arrow',
    'promise',
    '@next/eslint-plugin-next',
    'prettier'
  ],

  rules,

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
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:jsdoc/recommended',
        'plugin:promise/recommended',
        'plugin:node/recommended-module',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react'
      ],

      plugins: [
        'import',
        '@typescript-eslint',
        'jsdoc',
        'prefer-arrow',
        'promise',
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
        ...rules,
        /* TS Specific rules */
        'no-undef': 0,

        '@typescript-eslint/naming-convention': [
          1,
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
        ]
      }
    }
  ]
}
