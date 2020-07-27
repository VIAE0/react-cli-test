module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "babel"
    ],
    "rules": {
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/prop-types": 2,
        "no-console": 0,
        "no-empty": 0,
        "no-irregular-whitespace": 0,
        "indent": [1, 2, {"SwitchCase": 2}],
        "no-unused-vars": 2,
        "no-alert": 2,
        "indent": [2, 2, {"SwitchCase": 1}]
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};