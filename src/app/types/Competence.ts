export interface Competence {
  area: string,
  techs: Tech[]
}

export interface Tech {
  description: string,
  subTechs: string[]
}
