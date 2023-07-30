export { }

declare global {
  type TVariables = {id: string} | {id: string, department_id: string}

  type TDepartment = {
  id: number
  name: string
}

  type TEmployee = {
  id: number
  firstname: string
  lastname: string
  hiredate: Date
  phone: string
  address: string
  department: TDepartment
}
}