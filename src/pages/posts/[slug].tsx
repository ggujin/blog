import type { NextPage, GetStaticPaths, GetStaticProps } from 'next/'
import { format } from 'date-fns'

import { getPosts, getPostBySlug } from '@/utils/posts'
import { Layout } from '@/components'
import { PostItem } from '@/types'

interface PageProps {
  post: PostItem
}

const PostDetailPage: NextPage<PageProps> = ({ post }) => {
  const { title, content, emoji, createdAt } = post ?? {}
  // 여기서 에러나면 브라우저 콘솔
  return (
    <Layout>
      <h1>
        {emoji}
        {title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: content ?? '' }} />
      <p>{createdAt}</p>
    </Layout>
  )
}

// 다이나믹 세그먼트에 들어갈 값을 미리 만듬 동적 경로
export const getStaticPaths: GetStaticPaths = () => {
  //여기서 에러나면 서버사이드이기때문에 터미널을 본다.
  return {
    paths: getPosts().map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = context => {
  const slug = context.params?.slug as string
  const { createdAt, ...rest } = getPostBySlug(slug)

  return {
    props: {
      post: {
        ...rest,
        createdAt: format(createdAt, 'yyyy-MM-dd'),
      },
    },
  }
}

export default PostDetailPage
