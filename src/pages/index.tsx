import type { GetStaticProps, NextPage } from 'next'

import { Layout, PostList } from '@/components'
import { getPosts } from '@/utils/posts'
import { PostItem } from '@/types'

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

interface PageProps {
  posts: PostItem[]
}

const HomePage: NextPage<PageProps> = ({ posts }) => {
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      posts: getPosts(),
    },
  }
}

export default HomePage
