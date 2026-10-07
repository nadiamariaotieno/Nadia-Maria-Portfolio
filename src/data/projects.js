import { site } from './site'

/**
 * Add a project object to this array. Optional fields:
 * github, live, caseStudy, image, imageAlt.
 * `preview` selects a built-in abstract diagram when no screenshot exists.
 */
export const projects = [
  {
    id: 'finance',
    name: 'Personal Finance & Debt Management System',
    status: 'In Progress',
    description:
      'A full-stack application intended to help users track finances, transactions, budgets, savings and debt. Core product work is underway; this listing describes the intended scope, not a finished feature set.',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'REST API',
      'Authentication',
    ],
    github: '',
    live: '',
    caseStudy: '',
    preview: 'finance',
  },
  {
    id: 'farm',
    name: 'Smart Farm Management System',
    status: 'In Development',
    description:
      'A web-based system designed around managing farm records, operations and data. The project is in development and should be read as a work in progress, not a completed product.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Charts'],
    github: '',
    live: '',
    caseStudy: '',
    preview: 'farm',
  },
  {
    id: 'portfolio',
    name: 'Portfolio Website',
    status: 'Live',
    description:
      'This site — a personal portfolio for professional software development roles, with a clear trajectory toward secure software and cybersecurity.',
    technologies: ['React', 'Vite', 'JavaScript', 'Tailwind CSS'],
    github: site.portfolioRepoUrl,
    live: '/',
    caseStudy: '',
    preview: 'portfolio',
  },
]
