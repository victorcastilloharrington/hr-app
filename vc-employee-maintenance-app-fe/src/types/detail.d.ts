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
  departmentId: number;
  address: string;
  phone: string;
  isActive: boolean;
};

export type TEmployeeDetail = {
  info: TEmployeeInfo;
  history: TEmployeeHistory[];
  departments: TDepartment[];
};
