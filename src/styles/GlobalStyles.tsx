import { Global, css } from '@emotion/react'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

import { nanumGothic } from './font'

const customStyles = css({
  html: {
    overflowX: 'hidden',
  },
  body: {
    ...tw`antialiased text-contents-main`,
    ...nanumGothic.style,
    overflowX: 'hidden',
  },
})

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)
