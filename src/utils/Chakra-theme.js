import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    gradient: {
      button: "linear-gradient(90deg,#842cd7,#21f5f1)",
      claro: "linear-gradient(135deg, #FFC100, #FFEC00 )",
      oscuro: "linear-gradient(135deg, #2D044E, #5F1E94)",
      triclaro: "linear-gradient(90deg, #F6F0F9 0%, #FFFFFF 50%, #F6F0F9 100%)",
      trioscuro:"linear-gradient(90deg, #23053E 0%, #481058 50%, #23053E 100%)",
      redOrange: "linear-gradient(135deg, #FF6B6B, #FFA500)",
      orangeYellow: "linear-gradient(135deg, #FFA500, #FFD700)",
      bluePurple: "linear-gradient(135deg, #6A5ACD, #8A2BE2)",
      pinkRose: "linear-gradient(135deg, #FF69B4, #FF1493)",
      goldSilver: "linear-gradient(135deg, #FFD700, #C0C0C0)",
      skyTurquoise: "linear-gradient(135deg, #87CEEB, #40E0D0)",
      lavenderViolet: "linear-gradient(135deg, #E6E6FA, #9370DB)",
      title: "linear-gradient(90deg, #9F23D5, #21D2F5)",
      more: "linear-gradient(0deg,rgba(0,0,0,.2),rgba(0,0,0,.2)),linear-gradient(94.41deg,#842cd7 -0.69%,#21f5f1 108.6%);",
    },
  },
});

export default theme;