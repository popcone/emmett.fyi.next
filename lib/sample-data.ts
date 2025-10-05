import { Service, Project, Technology } from './definitions'

export const SERVICES: Service[] = [
  { id: 1, name: 'Applications', color: '#F24900' },
  { id: 2, name: 'Marketing', color: '#1F807B' },
  { id: 3, name: 'Systems', color: '#1A88F8' },
  { id: 4, name: 'Performance', color: '#FFB800' },
]

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'eCommerce (example.com)',
    role: 'Frontend Developer',
    category: 1,
    description:
      'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius',
    link: '#',
    images: ['screen-1.png', 'screen-2.png', 'screen-3.png'],
    technologies: [1, 2, 3, 4, 5],
    highlights: [
      'Lorem ipsum dolor sit amet. adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Lorem ipsum dolor sit amet. adipiscing elit. Sed do eiusmod.',
      'Lorem ipsum dolor sit amet',
    ],
  },
  {
    id: 2,
    title: 'Project 2 (project management)',
    role: 'Frontend Developer',
    category: 2,
    description:
      'Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel.',
    link: '#',
    images: ['screen-1.png'],
    technologies: [1, 2, 3, 4, 5],
    highlights: ['highlight 1', 'highlight 2', 'highlight 3'],
  },
  {
    id: 2,
    title: 'Project 3',
    role: 'Frontend Developer',
    category: 2,
    description:
      'Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.',
    link: '#',
    technologies: [1, 2, 3, 4, 5],
    highlights: ['highlight 1', 'highlight 2', 'highlight 3'],
  },
  {
    id: 1,
    title: 'Project 4',
    role: 'Frontend Developer',
    category: 1,
    description:
      'Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.',
    link: '#',
    technologies: [1, 2, 3, 4, 5],
    highlights: ['highlight 1', 'highlight 2', 'highlight 3'],
  },
  {
    id: 3,
    title: 'Project 5',
    role: 'Frontend Developer',
    category: 3,
    description:
      'Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.',
    link: '#',
    technologies: [1, 2, 3, 4, 5],
    highlights: ['highlight 1', 'highlight 2', 'highlight 3'],
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
