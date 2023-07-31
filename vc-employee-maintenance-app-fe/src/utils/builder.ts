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
