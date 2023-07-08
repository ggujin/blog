import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'

import { getPosts, getPostBySlug } from '@/utils/posts'
import { Layout, MarkdownRenderer, PostTitle, PostTags } from '@/components'
import { PostItem } from '@/types'

interface PageProps {
  post: PostItem
}

const PostDetailPage: NextPage<PageProps> = ({ post }) => {
  if (!post) return null

  const { title, content, emoji, createdAt, tags } = post ?? {}
  // 여기서 에러나면 브라우저 콘솔
  return (
    <Layout>
      <div tw="py-8">
        <PostTitle emoji={emoji} title={title} />
        <PostTags tags={tags} />
        <p tw="text-xs text-contents-dark mb-4">{createdAt}</p>
        <MarkdownRenderer content={content} />
      </div>
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
  const slug = context?.params?.slug as string
  const post = getPostBySlug(slug)

  return {
    props: {
      post,
    },
  }
}

export default PostDetailPage
