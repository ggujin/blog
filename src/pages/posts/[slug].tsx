import type { NextPage, GetStaticPaths, GetStaticProps } from 'next/'
import { getPosts, getPostBySlug } from '@/utils/posts'

import { PostItem } from '@/types'
import { format } from 'date-fns'

interface PageProps {
  post: PostItem
}

const PostDetailPage: NextPage<PageProps> = ({ post }) => {
  // 여기서 에러나면 브라우저 콘솔
  return (
    <div>
      <h1>{post?.title}</h1>
    </div>
  )
}

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
