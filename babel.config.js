module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            "nativewind/babel",
        ],
        plugins: [
            ['module-resolver', {
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
                alias: {
                    '@': './',
                    '@tn/libs': './packages/libs/*',
                    '@tn/components': './components/*',
                    '@tn/atoms': './components/atoms/*',
                    '@tn/molecules': './components/molecules/*',
                }
            }]
        ]
    };
};
