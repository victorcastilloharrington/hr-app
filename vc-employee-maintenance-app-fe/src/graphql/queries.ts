import { createQuery, graphqlFetch } from "./client";
import * as constants from "./constants";

export const getAllEmployees = async () => {
  try {
    const response = await (
      await graphqlFetch(
        constants.GRAPHQL_URL_SERVER_SIDE,
        createQuery(constants.GET_ALL_EMPLOYEES)
      )
    ).json();

    return response?.data?.GetAllEmployees;
  } catch (err: any) {
    console.error("error fetching graphql: ", err);
  }
};

export const getEmployeesById = async (id: string) => {
  try {
    const response = await (
      await graphqlFetch(
        constants.GRAPHQL_URL_SERVER_SIDE,
        createQuery(constants.GET_EMPLOYEE_BY_ID, { id })
      )
    ).json();

    return response?.data;
  } catch (err: any) {
    console.error("error fetching graphql: ", err);
  }
};

export const updateEmployeeDepartment = async (
  id: string,
  department_id: string
) => {
  try {
    const response = await (
      await graphqlFetch(
        constants.GRAPHQL_URL_CLIENT_SIDE,
        createQuery(constants.UPDATE_EMPLOYEE, { id, department_id })
      )
    ).json();

    return response?.data?.UpdateEmployee?.DepartmentsOnEmployees[0];
  } catch (err: any) {
    console.error("error fetching graphql: ", err);
  }
};

export const toggleActiveEmployee = async (id: string) => {
  try {
    const response = await (
      await graphqlFetch(
        constants.GRAPHQL_URL_CLIENT_SIDE,
        createQuery(constants.DELETE_EMPLOYEE, { id })
      )
    ).json();

    return response?.data?.DeleteEmployee?.isActive;
  } catch (err: any) {
    console.error("error fetching graphql: ", err);
  }
};
