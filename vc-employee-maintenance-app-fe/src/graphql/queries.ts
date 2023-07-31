import { createQuery, graphqlFetch } from "./client";
import  * as constants from "./constants";

export const getAllEmployees = async () => {
    try {
      const response = await (await graphqlFetch(constants.GRAPHQL_URL_SERVER_SIDE,createQuery(constants.GET_ALL_EMPLOYEES))).json();

      return response?.data?.GetAllEmployees
    }
    catch (err:any){
      console.error('error fetching graphql: ', err);
    }

  };

  export const getEmployeesById = async (id: string) => {
    try {
      const response = await (await graphqlFetch(constants.GRAPHQL_URL_SERVER_SIDE,createQuery(constants.GET_EMPLOYEE_BY_ID, {id}))).json();

      return response?.data?.GetEmployeeById
    }
    catch (err:any){
      console.error('error fetching graphql: ', err);
    }

  };