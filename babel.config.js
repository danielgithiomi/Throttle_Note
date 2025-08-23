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
                    '@tn/libs': './packages/libs',
                    '@tn/constants': './constants',
                    '@tn/hooks': './packages/hooks',
                    '@tn/atoms': './components/atoms',
                    '@tn/molecules': './components/molecules',
                    // With Indexes
                    '@atoms': './components/atoms/index',
                    '@molecules': './components/molecules/index',
                    '@constants': './constants/index',
                }
            }]
        ]
    };
};
