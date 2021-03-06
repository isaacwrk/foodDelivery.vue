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
                "primary-gray" : "#89898A",
                "secondary-black" :"#525B66"
            },
            width:{
                '81':'21rem',
                '17':'4.35rem' ,
                '28.5':'7.5rm'
            },
            height:{
                '25':'6.5rem',
                '81':'22.5rem'
            },
            fontSize:{
                'xss':'.65rem'
            },
            borderRadius:{
                '4xl':'2.5rem'
            },
            margin:{
                '25':'6.5rem'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
