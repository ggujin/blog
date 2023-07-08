import tw from 'twin.macro'

interface Props {
  tags: string[]
}

const Tag = tw.span`
  text-xs
  text-gray-400 mr-1 mb-1
`

export function PostTags({ tags }: Props) {
  return (
    <p tw="leading-none mb-1">
      {tags.map(tag => (
        <Tag key={tag}>#{tag}</Tag>
      ))}
    </p>
  )
}
