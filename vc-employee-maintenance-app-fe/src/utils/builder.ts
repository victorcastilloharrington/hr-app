import { TEmployeeDetail } from "@/types/detail";
import { TEmployeeList } from "@/types/list";
import moment from "moment";

export const dateBuilder = (hiredate: Date) => {
  const init = moment(hiredate);
  const calcDiff = moment.duration(moment().diff(init));

  const hired = init.format("MMM D, YYYY");
  const hiredSince = `${calcDiff.years()}y - ${calcDiff.months()}m - ${calcDiff.days()}d`;

  return { hired, hiredSince };
};

export const employeeListBuilder = (
  employees: TEmployee[]
): TEmployeeList[] => {
  return employees.map((employee) => {
    const { id, firstname, lastname, hiredate, department } = employee;
    const { hired, hiredSince } = dateBuilder(hiredate);

    return {
      id,
      name: `${firstname} ${lastname}`,
      hired: `${hired} (${hiredSince})`,
      departmentName: department.name,
    };
  });
};

export const employeeDetailBuilder = (data: {
  GetEmployeeById: TEmployee;
  GetAllDepartments: TDepartment[];
}): TEmployeeDetail => {
  const {
    id,
    firstname,
    lastname,
    hiredate,
    department,
    address,
    phone,
    isActive,
    DepartmentsOnEmployees,
  } = data.GetEmployeeById;

  const info = {
    id,
    name: `${firstname} ${lastname}`,
    dates: dateBuilder(hiredate),
    departmentName: department.name,
    departmentId: department.id,
    address,
    phone,
    isActive,
  };

  const history = DepartmentsOnEmployees?.map((doe) => {
    const departmentName =
      data.GetAllDepartments?.find(
        (department) => department.id === doe.department_id
      )?.name || "";

    return {
      date: moment(doe.assignedAt).format("MM/DD/YYYY"),
      departmentName,
    };
  });

  return {
    info,
    history,
    departments: data.GetAllDepartments,
  };
};
