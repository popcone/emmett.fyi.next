export type Service = {
  id: number
  name: string
  color: string
}

export type Project = {
  id: number
  category: Service['id']
  name: string
  description: string
  link: string
  technologies: Technology['id'][]
}

export const SERVICES: Service[] = [
  { id: 1, name: 'Software', color: '#F24900' },
  { id: 2, name: 'Applications', color: '#1A88F8' },
  { id: 3, name: 'AI Automation', color: '#1F807B' },
]

export type Technology = {
  id: number
  name: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Project 1',
    category: 1,
    description:
      'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius',
    link: '#',
    id: 1,
    technologies: [1, 2, 3, 4, 5],
  },
  {
    name: 'Project 2',
    category: 2,
    description:
      'Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel.',
    link: '#',
    id: 2,
    technologies: [1, 2, 3, 4, 5],
  },
  {
    name: 'Project 3',
    category: 2,
    description:
      'Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.',
    link: '#',
    id: 2,
    technologies: [1, 2, 3, 4, 5],
  },
  {
    name: 'Project 4',
    category: 1,
    description:
      'Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.',
    link: '#',
    id: 1,
    technologies: [1, 2, 3, 4, 5],
  },
  {
    name: 'Project 5',
    category: 3,
    description:
      'Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.',
    link: '#',
    id: 3,
    technologies: [1, 2, 3, 4, 5],
  },
]

export const TECHNOLOGIES: Technology[] = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'TypeScript' },
  { id: 3, name: 'HTML' },
  { id: 4, name: 'CSS' },
  { id: 5, name: 'React' },
  { id: 6, name: 'Next' },
  { id: 7, name: 'Vue' },
  { id: 8, name: 'Nuxt' },
  { id: 9, name: 'Tailwind' },
  { id: 10, name: 'UI & Component Libraries' },
  { id: 10, name: 'Redux' },
  { id: 11, name: 'Pinia' },
  { id: 12, name: 'React Context' },
  { id: 13, name: 'REST API' },
]
