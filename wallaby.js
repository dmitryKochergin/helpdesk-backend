module.exports = function () {
  return {
    files: [
      'src/**/*.js',
    ],

    tests: [
      'src/__tests__/**/*.js',
    ],

    env: {
      type: 'node',
    },
  };
};
