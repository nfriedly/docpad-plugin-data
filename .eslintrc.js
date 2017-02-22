module.exports = {
    "env": {
        "node": true,
    },
    "plugins": [
        "node",
        "prettier",
    ],
    "extends": [
        "eslint:recommended",
        "google",
        "plugin:node/recommended",
        "prettier",
    ],
    "rules": {
        "strict": ["error", "safe"], // todo: fixup client-side js and then enable this
        "prettier/prettier": ["error", {"singleQuote": true, "printWidth": 160}],
    }
};
