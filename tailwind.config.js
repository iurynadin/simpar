module.exports = {
    content: ["./pages/*.{html,js}"],
    theme: {
        container: {
            center: true,
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: '1120px',
                '2-xl': '1536px',
            },
            padding: {
                DEFAULT: "1rem",
                sm: "1rem",
                md: "1rem",
                lg: "1.5rem",
                xl: "0.5rem",
                "2-xl": "2rem"
            },
        },
        extend: {
            colors: {
                "azul": "#0F233D",
                "azul-light": "#0FACE4",
            },
            fontFamily: {
                montserrat: ["Montserrat"],
                lato: ["Lato"],
            },
            scale: {
                101: "1.01",
                103: "1.03",
            },
            width: {
                'desempenho-xl': 'calc(100vw - 600px)',
            },
            aspectRatio: {
                hero: '17 / 10',
                featured2: '353 / 279',
            },
            backgroundImage: {
                navLeft: "url('../svgs/topnav-left.svg')",
                navRight: "url('../svgs/topnav-right.svg')",
                desempenho: "url('../images/desempenho.jpg')",
            },
            backgroundPosition: {
                centerTop: 'center top',
                centerBottom: 'center bottom',
            },
            backgroundSize: {
            }
        },
    },
    plugins: [],
};
