import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface Frontmatter {
  emoji: string
  title: string
  createdAt: Date
  tags: string[]
}

interface Post extends Frontmatter {
  slug: string
  content: string
}

export function getPosts() {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), 'posts'), {
    withFileTypes: true,
  })

  const posts: Post[] = dirFiles
    .filter(file => file.name.endsWith('.mdx'))
    .map(post => getPost(post.name))

  return posts
}

export function getPostBySlug(slug: string) {
  return getPost(`${slug}.mdx`)
}

function getPost(filename: string): Post {
  const fileContent = fs.readFileSync(
    path.join(process.cwd(), 'posts', filename),
    'utf-8',
  )
  const { data, content } = matter(fileContent)

  return {
    ...(data as Frontmatter),
    content,
    slug: filename.slice(0, filename.lastIndexOf('.')),
  }
}
