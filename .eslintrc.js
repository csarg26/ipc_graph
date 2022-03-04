module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript'],

  rules: {
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },

  "env": {
    "browser": true,
    "node": true
  }, 

  parserOptions: {
    project: [
        resolve(__dirname, './tsconfig.json'),
        resolve(__dirname, './tsconfig.eslint.json'),
    ],
  }
};
