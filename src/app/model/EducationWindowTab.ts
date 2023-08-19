import {WindowTab} from "./Tab";

export interface EducationWindowTab extends WindowTab {
  institution: string,
  degree: string,
  location: string,
  duration: string,
  skills: string[],
}
