import { extendTheme } from 'native-base';

const theme = extendTheme({
    colors: {
        primary: {
            "50": "#90acdb",
            "100": "#7896cc",
            "200": "#6282ba",
            "300": "#526fa2",
            "400": "#455e89",
            "500": "#425473",
            "600": "#3e4a5f",
            "700": "#39404d",
            "800": "#32363c",
            "900": "#2a2b2c"
        },
        secondary: {
            "50": "#ffdad2",
            "100": "#ffbaab",
            "200": "#fb9c87",
            "300": "#f48065",
            "400": "#f25f3f",
            "500": "#e95331",
            "600": "#e04623",
            "700": "#c74224",
            "800": "#ad4027",
            "900": "#943c28"
        },
        tertiary: {
            "50": "#e56cb5",
            "100": "#d951a2",
            "200": "#ca3890",
            "300": "#a63478",
            "400": "#892b64",
            "500": "#712a55",
            "600": "#5c2747",
            "700": "#48243a",
            "800": "#361e2d",
            "900": "#251820"
        },
        singletons: {
            "white": "#E0E0E0",
            "black": "#0A171F",
            "lightText": "#ABABAB",
            "darkText": "#181818",
        }
    },
    fontConfig: {
        Roboto: {
            100: { normal: "roboto_light" },
            200: { normal: "roboto_light" },
            300: { normal: "roboto_light" },
            400: { normal: "roboto" },
            500: { normal: "roboto_medium" },
            600: { normal: "roboto_medium" },
            700: { normal: 'roboto_bold' },
            800: { normal: 'roboto_bold' },
            900: { normal: 'roboto_bold' }
        }
    },
    fonts: {
        heading: "Roboto",
        body: "Roboto",
        mono: "Roboto",
    },
    config: {
        initialColorMode: 'dark',
    }
});

export default theme