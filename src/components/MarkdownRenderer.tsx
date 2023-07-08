import ReactMarkdown from 'react-markdown'
import styled from '@emotion/styled'
import tw from 'twin.macro'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface Props {
  content: string
}

const Container = styled.div`
  ${tw`text-sm`}
  ul {
    ${tw`pl-4 list-disc leading-6`}
  }

  ol {
    ${tw`pl-4 list-decimal py-2 leading-6`}
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    ${tw`mb-4 mt-8`}
  }

  h1 {
    ${tw`text-3xl font-bold`}
  }

  h2 {
    ${tw`text-2xl font-bold`}
  }

  h3 {
    ${tw`text-xl font-semibold`}
  }

  h4 {
    ${tw`text-lg font-semibold`}
  }

  p {
    ${tw`text-sm my-2`}
  }
`

export function MarkdownRenderer({ content }: Props) {
  return (
    <Container>
      <ReactMarkdown
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')} // eslint-disable-line
                style={dracula}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </Container>
  )
}
