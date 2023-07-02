import tw from 'twin.macro'
import { VscDebugConsole } from 'react-icons/vsc'

import { Container } from '@/styles'

const StyledHeader = tw.header`
  bg-primary-main
`

const ContainerInner = tw.div`
flex justify-between items-center
`

const Menu = tw.ul`block`
const MenuItem = tw.li`inline-block p-0 pl-4`

export function Header() {
  return (
    <StyledHeader>
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
    </StyledHeader>
  )
}
