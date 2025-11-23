const config = require('@lobehub/lint').stylelint;

module.exports = {
  ...config,
  extends: ["stylelint-config-recess-order"],
  rules: {
    'selector-id-pattern': null,
    ...config.rules,
  },
};
