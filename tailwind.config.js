module.exports = {
    purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily:{
                sans:['Poppins']
            },
            colors:{
                "primary-black":"#333536",
                "blacked-gray" : "#545C67",
                "background-gray" :"#F3F3F3",
                "primary-gray" : "#89898A"
            },
            width:{
                '81':'21rem' 
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
