import { FC } from "react";
import CardComponent from "./card";
import { TEmployeeList } from "@/types/list";
type TListComponent = {
  employees: TEmployeeList[];
};
const ListComponent: FC<TListComponent> = ({ employees }) => {
  return (
    <div>
      {employees?.map((employee, i) => (
        <CardComponent key={`employee-list-${i}`} {...employee} />
      ))}
    </div>
  );
};

export default ListComponent;
