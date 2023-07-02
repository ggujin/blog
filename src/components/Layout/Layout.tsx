import type { ReactNode } from 'react'
import tw from 'twin.macro'

import { Header } from './Header'
import { Footer } from './Footer'

const Main = tw.main`
  min-h-[500px]
  bg-primary-main 
  border-y-primary-light border-y-[1px]
`
const Container = tw.div`
  container mx-auto py-4
`

interface Props {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer />
    </>
  )
}
