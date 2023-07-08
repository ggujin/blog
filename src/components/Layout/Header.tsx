import tw from 'twin.macro'
import { VscDebugConsole } from 'react-icons/vsc'

import { Container } from '@/styles'

const StyledHeader = tw.header`
  bg-primary-main
`

const ContainerInner = tw.div`
flex justify-between items-center
`

const Menu = tw.ul`block text-lg font-semibold`
const MenuItem = tw.li`inline-block p-0 pl-4`

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <ContainerInner>
          <h1 tw="font-bold">
            <VscDebugConsole size={25} tw="inline-block font-bold pr-2" />
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
