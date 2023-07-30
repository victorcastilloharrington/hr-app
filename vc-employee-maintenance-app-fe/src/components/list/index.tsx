import { FC } from "react";
import CardComponent from "./card";
type TListComponent = {
  employees: TEmployee[];
};
const ListComponent: FC<TListComponent> = ({ employees }) => {
  return (
    <div>
      {employees?.map((employee, i) => (
        <CardComponent key={`employee-list-${i}`} />
      ))}
    </div>
  );
};

export default ListComponent;
