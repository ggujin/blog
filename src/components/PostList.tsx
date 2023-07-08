import tw from 'twin.macro'
import Link from 'next/link'

import { PostTags } from './PostTags'
import type { PostItem } from '@/types'

const List = tw.ul`
  m-0 p-0
`

const ListItem = tw.li`
  py-4 px-2 border-b-primary-light border-b-[1px] last:border-b-0
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
          <PostTags tags={tags} />
          <p tw="text-xs text-gray-400">{createdAt}</p>
        </ListItem>
      ))}
    </List>
  )
}
