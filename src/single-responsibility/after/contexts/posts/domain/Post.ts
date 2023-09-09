export class Post {
  id: number
  title: string
  content: string
  publishedAt: Date

  constructor(
    id: number,
    title: string,
    content: string,
    publishedAt: Date
  ) {
    this.id = id
    this.title = title
    this.content = content
    this.publishedAt = publishedAt
  }

  isActive() {
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)

    return this.publishedAt > new Date()
  }
}
