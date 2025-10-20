export type Service = {
  id: number
  name: string
  color: string
}

export type Category = {
  id: number
  name: string
  color: string
}

export type Link = {
  title: string
  url: string
}

export type Technology = {
  id: number
  name: string
}

export type ProjectMedia = {
  image_url: string
}

export type ProjectHighlight = {
  highlight: string
}

export interface Project {
  id: number
  // category: Service['id']
  sort_order: number
  category: Category
  title: string
  role: string
  description: string
  url?: string
  url_title?: string
  images?: ProjectMedia[]
  technologies: string[]
  highlights?: ProjectHighlight[]
}
