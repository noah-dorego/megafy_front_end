import { jsx, css } from "@emotion/react"

const styles = {
    header: {
      backgroundColor: 'black',
    },
    logoBox: {
      px: "10px"
    },
    title: {
      my: 0,  // top/bottom margin
      mx: 'auto', // left/right margin
      maxWidth: 960,
      py: '1.45rem', // top/bottom padding
      px: '1.0875rem' // left/right padding
    },
    customComponent: { // to be used with none MUI components
      backgroundColor: "white",
    }
  }

export default styles;