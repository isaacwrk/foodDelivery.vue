module.exports = {
    purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors:{
                "primary-black":"#333536",
                "blacked-gray" : "#545C67",
                "background-gray" :"#F3F3F3",
                "primary-gray" : "#89898A"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
