export const GRAPHQL_URL_CLIENT_SIDE = 'http://localhost:4000/graphql'
export const GRAPHQL_URL_SERVER_SIDE = 'http://vc-app-be:4000/graphql'

export const GET_EMPLOYEE_BY_ID = `query GetEmployeeById($id: String!) {
  GetEmployeeById(id: $id){
    id
    firstname
    lastname
    hiredate
    phone
    address
    department{
      name
    }
  }
}`

export const GET_ALL_EMPLOYEES = `query GetAllEmployees {
  GetAllEmployees{
    id
    firstname
    lastname
    hiredate
    phone
    address
    department{
      name
    }
  }
}`

export const GET_ALL_DEPARTMENTS = `query GetAllDepartments {
  GetAllDepartments{
  	id
   	name
  }
}`

export const UPDATE_EMPLOYEE = `mutation UpdateEmployee($id: String!, $department_id: String!) {
  UpdateEmployee(updateEmployeeData:{id: $id, department_id: $department_id}){
    id
    firstname
    lastname
    hiredate
    phone
    address
    department{
      name
    }
  }
}`

export const DELETE_EMPLOYEE = `mutation DeleteEmployee($id: String!) {
  DeleteEmployee(id: $id){
    id
    firstname
    lastname
    hiredate
    phone
    address
    department{
      name
    }
  }
}`

