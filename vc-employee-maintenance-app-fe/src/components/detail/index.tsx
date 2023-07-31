import { TEmployeeDetail } from "@/types/detail";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { HistoryComponent } from "./history";
import {
  toggleActiveEmployee,
  updateEmployeeDepartment,
} from "@/graphql/queries";
import moment from "moment";

const DetailComponent: FC<TEmployeeDetail> = ({
  info,
  history,
  departments,
}) => {
  const {
    id,
    name,
    dates,
    departmentName,
    departmentId,
    phone,
    address,
    isActive,
  } = info;

  const [active, setActive] = useState(isActive);
  const [depHistory, setDepHistory] = useState(history);
  const [currentDep, setCurrentDep] = useState(departmentId);
  const [isChanged, setIsChanged] = useState(false);

  const changeSelectDepHandler = (id: number) => {
    if (!isChanged) setIsChanged(true);
    setCurrentDep(id);
  };

  const toggleEmployeeHandler = () => {
    toggleActiveEmployee(`${id}`)
      .then((res) => setActive(res))
      .catch((err) => console.error(err));
  };
  const updateDepartmentHandler = () => {
    updateEmployeeDepartment(`${id}`, `${currentDep}`)
      .then((res: TDepartmentsOnEmployees) => {
        const newDep = {
          departmentName:
            departments.find((dep) => dep.id === res.department_id)?.name || "",
          date: moment(res.assignedAt).format("MM/DD/YYYY"),
        };
        const updateDepHistory = [...depHistory];
        updateDepHistory.unshift(newDep);
        setDepHistory(updateDepHistory);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div>
        <Image
          src="https://fakeimg.pl/150x150?text=Avatar&font=bebas"
          alt="Employee Avatar"
          width={150}
          height={150}
        />
        {!active && <span>Inactive</span>}
      </div>
      <div>
        <h3>{name}</h3>
        <p>Employee Id: {id}</p>
        <p>Employee Department: {departmentName}</p>
        <p>Employee Telephone: {phone}</p>
        <p>Employee Address: {address}</p>

        <h6>Update Department</h6>
        <div>
          <select
            onChange={(e) => changeSelectDepHandler(Number(e.target.value))}
            value={currentDep}
          >
            {departments.map((department, i) => (
              <option key={`department-${i}`} value={department.id}>
                {department.name}
              </option>
            ))}
          </select>
          <button onClick={updateDepartmentHandler} disabled={!isChanged}>
            Update
          </button>
        </div>
        <div></div>
      </div>
      <div>
        <h5>Hire Date</h5>
        <p>{dates.hired}</p>
        <p>{dates.hiredSince}</p>

        <button onClick={toggleEmployeeHandler}>
          {active ? "Deactivate" : "Activate"}
        </button>
      </div>
      <h4>Department History</h4>
      <HistoryComponent history={depHistory} />
    </div>
  );
};

export default DetailComponent;
