import tw from 'twin.macro'

import { Layout, PostList } from '@/components'

const posts = [
  {
    slug: '난슬러그',
    emoji: '💃',
    title: '난제목',
    content: '난 내용',
    createdAt: '난 날짜',
    tags: ['태1', '태2'],
  },
  {
    slug: '난슬러그',
    emoji: '💃',
    title: '난제목',
    content: '난 내용',
    createdAt: '난 날짜',
    tags: ['태1', '태2'],
  },
  {
    slug: '난슬러그',
    emoji: '💃',
    title: '난제목',
    content: '난 내용',
    createdAt: '난 날짜',
    tags: ['태1', '태2'],
  },
]

export default function Home() {
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  )
}
