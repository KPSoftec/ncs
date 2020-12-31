module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
  ],
  rules: {
    indentation: 2,
    'selector-pseudo-element-colon-notation': 'single',
    'declaration-empty-line-before': 'never',
    'comment-empty-line-before': [
      'never',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'stylelint-commands'],
      },
    ],
    'value-keyword-case': null,
    'function-name-case': null,
    'font-family-no-missing-generic-family-keyword': null,
    'no-duplicate-selectors': null,
    'no-eol-whitespace': null,
    'no-extra-semicolons': null,
  },
  syntax: 'scss',
}
