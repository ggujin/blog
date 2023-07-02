import styled from "@emotion/styled"
import tw from "twin.macro"
import { css } from "@emotion/react"
import { BsGithub, BsRssFill } from "react-icons/bs"
import { VscDebugConsole } from "react-icons/vsc"

const Header = tw.header`
  bg-primary-main
`

const Main = tw.main`
  min-h-[500px]
  bg-primary-main 
  border-y-primary-light border-y-[1px]
`

const Footer = tw.footer`
  py-4
  bg-primary-dark
`

const Container = tw.div`
  container mx-auto py-4
`

const ContainerInner = tw.div`
flex justify-between items-center
`

const Menu = tw.ul`block`
const MenuItem = tw.li`inline-block p-0 pl-4`

export default function Home() {
  return (
    <>
      <Header>
        <Container>
          <ContainerInner>
            <h1 tw="font-semibold">
              <VscDebugConsole size={20} tw="inline-block font-bold pr-1" />
              Tech blog
            </h1>
            <Menu>
              <MenuItem>Resume</MenuItem>
              <MenuItem>Posts</MenuItem>
              <MenuItem>About</MenuItem>
            </Menu>
          </ContainerInner>
        </Container>
      </Header>
      <Main>
        <Container>b</Container>
      </Main>
      <Footer>
        <Container>
          <div tw="flex justify-center">
            <div>
              <ul
                css={css`
                  ${tw`flex justify-center mb-4`}
                  li {
                    ${tw`inline-block px-2`}
                  }
                `}
              >
                <li>
                  <BsGithub size={20} />
                </li>
                <li>
                  <BsRssFill size={20} />
                </li>
              </ul>

              <p tw="text-xs">Copyright © 2023, All right reserved.</p>
            </div>
          </div>
        </Container>
      </Footer>
    </>
  )
}
