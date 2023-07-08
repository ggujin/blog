interface Props {
  emoji?: string
  title: string
}

export function PostTitle({ emoji, title }: Props) {
  return (
    <h1 tw="text-4xl my-4">
      <span tw="pr-2">{emoji}</span>
      <span>{title}</span>
    </h1>
  )
}
