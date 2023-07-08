import tw from 'twin.macro'
import styled from '@emotion/styled'
import { BsGithub, BsRssFill } from 'react-icons/bs'

import { Container } from '@/styles'

const StyledFooter = tw.footer`
  py-4
  bg-primary-dark
`

const IconList = styled.ul`
  ${tw`flex justify-center mb-4`}
  li {
    ${tw`inline-block px-2`}
  }
`

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <div tw="flex justify-center">
          <div>
            <IconList>
              <li>
                <BsGithub size={20} />
              </li>
              <li>
                <BsRssFill size={20} />
              </li>
            </IconList>
            <p tw="text-xs">Copyright © 2023, All right reserved.</p>
          </div>
        </div>
      </Container>
    </StyledFooter>
  )
}
