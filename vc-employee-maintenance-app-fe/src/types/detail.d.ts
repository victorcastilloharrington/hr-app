export type TEmployeeDates = {
  hired: string;
  hiredSince: string;
};

export type TEmployeeHistory = {
  date: string;
  departmentName: string;
};

export type TEmployeeInfo = {
  id: number;
  name: string;
  dates: TEmployeeDates;
  departmentName: string;
  address: string;
  phone: string;
};

export type TEmployeeDetail = {
  info: TEmployeeInfo;
  history: TEmployeeHistory[];
  departments: TDepartment[];
};
