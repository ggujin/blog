import { Global, css } from '@emotion/react'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

import { nanumGothic } from './font'

const customStyles = css({
  body: {
    ...tw`antialiased text-contents-main`,
    ...nanumGothic.style,
  },
})

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)
