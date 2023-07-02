import { Global, css } from "@emotion/react"
import tw, { GlobalStyles as BaseStyles } from "twin.macro"

const customStyles = css({
  body: {
    ...tw`antialiased text-contents-main`,
  },
})

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)
