import ReactMarkdown from 'react-markdown'
import styled from '@emotion/styled'
import tw from 'twin.macro'

interface Props {
  content: string
}

const Container = styled.div`
  ul {
    ${tw`pl-4 list-disc`}
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    ${tw`my-4`}
  }

  h1 {
    ${tw`text-4xl font-bold`}
  }

  h2 {
    ${tw`text-3xl font-bold`}
  }

  h3 {
    ${tw`text-2xl font-semibold`}
  }

  h4 {
    ${tw`text-xl font-semibold`}
  }

  p {
    ${tw`text-sm my-2`}
  }
`

export function MarkdownRenderer({ content }: Props) {
  return (
    <Container>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Container>
  )
}
