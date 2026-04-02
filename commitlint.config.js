const Configuration = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'revert',
        'chore',
        'design',
        'init',
        'rename',
        'test',
      ],
    ],
    'subject-case': [0],
  },
};

module.exports = Configuration;
