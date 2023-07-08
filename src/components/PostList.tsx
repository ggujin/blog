import tw from 'twin.macro'
import Link from 'next/link'

import type { PostItem } from '@/types'

const List = tw.ul`
  m-0 p-0
`

const ListItem = tw.li`
  py-4 px-2 border-b-primary-light border-b-[1px] last:border-b-0
`

const Tag = tw.span`
  text-xs
  text-gray-400 mr-1 mb-1
`

interface Props {
  posts: PostItem[]
}

export function PostList({ posts }: Props) {
  if (posts.length < 1) return null

  return (
    <List>
      {posts.map(({ slug, emoji, title, content, createdAt, tags }) => (
        <ListItem key={slug}>
          <Link href={`/posts/${slug}`}>
            <h1 tw="text-lg font-semibold mb-1">
              <span tw="text-xl mr-1">{emoji}</span>
              {title}
            </h1>
          </Link>
          <p tw="text-sm mb-1 line-clamp-2">{content}</p>
          <p tw="text-xs text-gray-400">{createdAt}</p>
          <p tw="leading-none">
            {tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </p>
        </ListItem>
      ))}
    </List>
  )
}
