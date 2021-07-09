import projectsData from './assets/projects.json'

const projects = projectsData as Projects

interface Projects {
  majors: Project[]
  awards: Project[]
}

export interface Project {
  id: string

  name: string
  image: string
  icon?: string

  tags?: string[]
  props?: string[]
  links?: string[]
  badges?: string[]

  description: string
  blurb?: string
}

const images = import.meta.globEager('./assets/projects/*.*')

function attachImages(projects: Project[]): Project[] {
  return projects.map((x) => ({
    ...x,
    image: images[`./assets/projects/${x.image}`].default
  }))
}

export const majors = attachImages(projects.majors)
export const awards = attachImages(projects.awards)

export const all = majors.concat(awards)
