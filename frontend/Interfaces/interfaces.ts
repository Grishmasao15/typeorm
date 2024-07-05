
export interface FormInterface {

  address1: string
  address2: string
  bachelorcourse: string
  bachelorpassingyear: number
  bachelorpercentage: number
  basicdetails: BasicdetailsInterface
  city: string
  currentctc: string
  department: string
  designation: string
  dob: Date
  education_details: Array<EducationdetailsInterface>
  email: string
  english: string[]
  expectedctc: string
  firstname: string
  gender: string
  gujarati: string[]
  hindi: string[]
  hscboard: string
  hscpassingyear: number
  hscpercentage: number
  lang: boolean[] | string[]
  langknown_details: Array<LanguageDetailsInterface>
  laravel: string | null
  lastname: string
  mastercourse: string
  masterpassingyear: number
  masterpercentage: number
  mysql: string | null
  noticeperiod: string
  oracle: string | null
  phonenumber: string
  php: string | null
  preferences_details: PreferencesDetailsInterface
  preferredlocation: string
  refcontact_details: Array<RefContactDetailsInterface>
  referencecontact: Array<RefContactDetailsInterface>
  relationship_status: string
  sscboard: string
  sscpassingyear: number
  sscpercentage: number
  state: string
  tech: string[] | boolean[]
  techknown_details: TechnologyDetailsInterface
  workexp_details: Array<WorkExperienceInterface>
  workexperience: Array<WorkExperienceInterface>
}

export interface BasicdetailsInterface {
  address1: string
  address2: string | null
  city: string
  createdAt: Date
  designation: string
  dob: string
  email: string
  firstname: string
  gender: string
  id: number
  lastname: string
  phonenumber: string
  relationship_status: string
  state: string
  updatedAt: Date
}

export interface EducationdetailsInterface {
  createdAt: Date
  employee_id: number
  id: number
  nameofboard_or_coursename: string
  passingyear: number
  percentage: number
  updatedAt: Date
}

export interface LanguageDetailsInterface {
  createdAt: Date
  employee_id: number
  id: number
  language_name: string
  rws: string
  updatedAt: Date
}

export interface TechnologyDetailsInterface {
  createdAt: Date
  employee_id: number
  id: number
  level_of_expertise: string
  technology_name: string
  updatedAt: Date
}

export interface PreferencesDetailsInterface {
  createdAt: Date
  currentctc: string
  department: string
  employee_id: number
  expectedctc: string
  id: number
  noticeperiod: string
  preferredlocation: string
  updatedAt: Date
}

export interface RefContactDetailsInterface {
  contactnumber: string
  createdAt: Date
  employee_id: number
  id: number
  name: string
  relation: string
  updatedAt: Date
}

export interface WorkExperienceInterface {
  company_name: string
  createdAt: Date
  designation: string
  employee_id?: number
  from_date: Date
  id?: number
  to_date: Date
  updatedAt: Date
}

export interface newValueInterface {
  contact_no: string
  dob: Date
  email: string
  firstname: string
  gender: string
  id: number
  lastname: string
  token: string
}

