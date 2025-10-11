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

export interface Project {
  id: number
  // category: Service['id']
  category: Category
  title: string
  role: string
  description: string
  link?: string
  images?: string[]
  technologies: Technology['id'][]
  highlights?: string[]
}
