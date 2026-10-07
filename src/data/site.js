const env = import.meta.env

function optionalUrl(value) {
  if (!value) return ''
  if (value.includes('YOUR_')) return ''
  return value
}

export const site = {
  name: 'Nadia Maria',
  shortName: 'NM',
  role: 'Software Developer',
  currentTitle: 'Graduate Trainee – Software Development',
  location: 'Nairobi, Kenya',
  education: {
    degree: 'Bachelor of Science in Applied Computer Technology',
    school: 'United States International University – Africa',
    years: '2022–2026',
  },
  email: env.VITE_EMAIL || 'otienonadiamaria@gmail.com',
  githubUrl: optionalUrl(env.VITE_GITHUB_URL),
  linkedinUrl: optionalUrl(env.VITE_LINKEDIN_URL),
  portfolioRepoUrl: optionalUrl(env.VITE_PORTFOLIO_REPO_URL),
  githubPlaceholder: 'PLACEHOLDER FOR MY GITHUB',
  linkedinPlaceholder: 'PLACEHOLDER FOR MY LINKEDIN',
  tagline:
    'I build practical web applications and reliable systems, with a growing focus on secure software development and cybersecurity.',
  exploring: [
    'Cybersecurity',
    'Networking',
    'Linux',
    'Secure Software Development',
  ],
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
