import { createSystem, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
    theme: {
      breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
      tokens: {
        colors: {
        },
      },
      semanticTokens: {
        colors: {
          danger: { value: "{colors.red}" },
          gray:{

          }
        },
      },
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  })
  
  export default createSystem(config)