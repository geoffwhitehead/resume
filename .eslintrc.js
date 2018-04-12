module.exports = {
  "parser": "babel-eslint",
  "extends": ["plugin:prettier/recommended"],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jquery": true,
  },
  "plugins": [
    "react",
    "import"
  ],
  "root": true,
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [
          "src"
        ]
      }
    }
  },
}