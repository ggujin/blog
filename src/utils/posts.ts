import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { format } from 'date-fns'
import removeMd from 'remove-markdown'

interface Frontmatter {
  emoji: string
  title: string
  createdAt: Date
  tags: string[]
}

interface Post {
  emoji: string
  title: string
  content: string
  slug: string
  createdAt: string
  tags: string[]
}

export function getPosts() {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), 'posts'), {
    withFileTypes: true,
  })

  const posts: Post[] = dirFiles
    .filter(file => file.name.endsWith('.mdx'))
    .map(post => getPost({ filename: post.name, shouldSummarize: true }))

  return posts
}

export function getPostBySlug(slug: string) {
  return getPost({ filename: `${slug}.mdx` })
}

function getPost({
  filename,
  shouldSummarize,
}: {
  filename: string
  shouldSummarize?: boolean
}): Post {
  const fileContent = fs.readFileSync(
    path.join(process.cwd(), 'posts', filename),
    'utf-8',
  )
  const { data, content } = matter(fileContent)
  const { createdAt, ...rest } = data as Frontmatter

  return {
    ...rest,
    content: shouldSummarize ? removeMd(content).slice(0, 200) : content,
    createdAt: format(createdAt, 'yyyy-MM-dd'),
    slug: filename.slice(0, filename.lastIndexOf('.')),
  }
}
