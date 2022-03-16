module.exports = {
  extends: [
    'next/core-web-vitals',
    'airbnb-base',
    'airbnb-typescript',
    'plugin:unicorn/recommended',
    'plugin:typescript-sort-keys/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    jest: true,
    node: true,
    browser: true,
  },
  plugins: ['react', 'react-hooks', 'folders', 'sort-destructure-keys'],
  overrides: [
    {
      files: ['*.js', '*.ts', '*.tsx'],
      rules: {
        'linebreak-style': 0,
        'consistent-return': 'off',
        'prefer-arrow-callback': 2,
        'operator-linebreak': 'off',
        'no-confusing-arrow': 'off',
        'no-underscore-dangle': 'off',
        'object-curly-newline': 'off',
        'no-restricted-syntax': 'off',
        'no-prototype-builtins': 'off',
        'class-methods-use-this': 'off',
        'function-paren-newline': 'off',
        'newline-per-chained-call': 'off',
        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
          { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
          { blankLine: 'always', prev: 'directive', next: '*' },
          { blankLine: 'any', prev: 'directive', next: 'directive' },
          { blankLine: 'always', prev: ['case', 'default'], next: '*' },
          { blankLine: 'always', prev: 'if', next: '*' },
        ],
        'implicit-arrow-linebreak': 'off',
        'import/order': 'off',
        'import/no-cycle': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/no-this-in-sfc': 'off',
        'react/jsx-curly-newline': 'off',
        'react/require-default-props': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-wrap-multilines': [
          'error',
          {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'ignore',
          },
        ],
        'react/jsx-sort-props': [
          2,
          {
            reservedFirst: true,
            callbacksLast: true,
            shorthandFirst: true,
          },
        ],
        'react-hooks/exhaustive-deps': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'unicorn/no-null': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/prefer-regexp-test': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prefer-query-selector': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/prefer-array-index-of': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-object-as-default-parameter': 'off',
        'unicorn/filename-case': [
          'error',
          {
            case: 'kebabCase',
          },
        ],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            prev: ['interface', 'type'],
            next: '*',
          },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: true,
            },
          },
          {
            selector: 'enum',
            format: ['PascalCase'],
            custom: {
              regex: '^E[A-Z]',
              match: true,
            },
          },
        ],
        'sort-destructure-keys/sort-destructure-keys': [2, { caseSensitive: false }],
        'folders/match-regex': [2, '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', `${process.cwd()}/`],
      },
    },
  ],
};
