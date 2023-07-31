import { TEmployeeDetail } from "@/types/detail";
import Image from "next/image";
import { FC } from "react";
import { HistoryComponent } from "./history";

const DetailComponent: FC<TEmployeeDetail> = ({
  info,
  history,
  departments,
}) => {
  const { id, name, dates, departmentName, phone, address } = info;

  const deactivateUserHandler = () => {};
  const updateDepartmentHandler = () => {};

  return (
    <div>
      <div>
        <Image
          src="https://fakeimg.pl/150x150?text=Avatar&font=bebas"
          alt="Employee Avatar"
          width={150}
          height={150}
        />
      </div>
      <div>
        <h3>{name}</h3>
        <p>Employee Id: {id}</p>
        <p>Employee Department: {departmentName}</p>
        <p>Employee Telephone: {phone}</p>
        <p>Employee Address: {address}</p>

        <h6>Update Department</h6>
        <div>
          <select>
            {departments.map((department, i) => (
              <option key={`department-${i}`} value={department.id}>
                {department.name}
              </option>
            ))}
          </select>
          <button onClick={updateDepartmentHandler}>Update</button>
        </div>
        <div></div>
      </div>
      <div>
        <h5>Hire Date</h5>
        <p>{dates.hired}</p>
        <p>{dates.hiredSince}</p>
        <button onClick={deactivateUserHandler}>Deactivate</button>
      </div>
      <h4>Department History</h4>
      <HistoryComponent history={history} />
    </div>
  );
};

export default DetailComponent;
