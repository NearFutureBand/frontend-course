export type Post = {
  id: number;
  user?: {
    name: string
  }
  title: string
  body: string
}