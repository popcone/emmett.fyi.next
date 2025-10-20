import { Category, Project, Technology } from './definitions'

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Applications', color: '#F24900' },
  { id: 3, name: 'Systems', color: '#1A88F8' },
  { id: 4, name: 'Performance', color: '#FFB800' },
  { id: 2, name: 'Marketing', color: '#1F807B' },
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

export const PROJECTS: Project[] = [
  {
    id: 1,
    sort_order: 1,
    title: 'eCommerce (example.com)',
    role: 'Frontend Developer',
    category: CATEGORIES[0],
    description:
      'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius',
    url: '#',
    url_title: 'View Project',
    images: [
      { image_url: 'screen-1.png' },
      { image_url: 'screen-2.png' },
      { image_url: 'screen-3.png' },
    ],
    technologies: [
      TECHNOLOGIES[0].name,
      TECHNOLOGIES[1].name,
      TECHNOLOGIES[2].name,
    ],
    highlights: [
      {
        highlight:
          'Lorem ipsum dolor sit amet. adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        highlight:
          'Lorem ipsum dolor sit amet. adipiscing elit. Sed do eiusmod.',
      },
      { highlight: 'Lorem ipsum dolor sit amet' },
    ],
  },
  {
    id: 2,
    sort_order: 2,
    title: 'Project 2 (project management)',
    role: 'Frontend Developer',
    category: CATEGORIES[1],
    description:
      'Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel.',
    url: '#',
    url_title: 'View Project',
    images: [{ image_url: 'screen-1.png' }],
    technologies: [
      TECHNOLOGIES[0].name,
      TECHNOLOGIES[1].name,
      TECHNOLOGIES[2].name,
    ],
    highlights: [
      { highlight: 'highlight 1' },
      { highlight: 'highlight 2' },
      { highlight: 'highlight 3' },
    ],
  },
  {
    id: 3,
    sort_order: 3,
    title: 'Project 3',
    role: 'Frontend Developer',
    category: CATEGORIES[2],
    description:
      'Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.',
    url: '#',
    url_title: 'View Project',
    technologies: [
      TECHNOLOGIES[0].name,
      TECHNOLOGIES[1].name,
      TECHNOLOGIES[2].name,
    ],
    highlights: [
      { highlight: 'highlight 1' },
      { highlight: 'highlight 2' },
      { highlight: 'highlight 3' },
    ],
  },
]
