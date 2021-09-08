module.exports = {
    plugins: [
    // {
        // require('postcss-import')(),
        require('tailwindcss')('./tailwind.config.js'), //This refers to your tailwind config
        require('autoprefixer'),
        // require('tailwindcss'),
        // require('autoprefixer'), 
        // 'postcss-import': {},
        // 'postcss-nesting': {},


        // tailwindcss: {},
        // autoprefixer: {},
    // }
]
}