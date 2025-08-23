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
                    '@/libs': './packages/libs'
                }
            }]
        ]
    };
};
