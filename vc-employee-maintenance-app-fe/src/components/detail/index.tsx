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
    <div className="flex flex-wrap">
      <div className="p-4">
        <Image
          src="https://fakeimg.pl/150x150?text=Avatar&font=bebas"
          alt="Employee Avatar"
          width={200}
          height={200}
          className="rounded"
        />
        {!active && (
          <div className="mt-1 w-full bg-red-400 py-2 px-6 font-bold rounded text-xl -top-4 left-10 text-center">
            Inactive
          </div>
        )}
      </div>
      <div className="p-4 grow">
        <h3 className="font-bold text-2xl mb-4">{name}</h3>
        <p className="mb-2">Employee Id: {id}</p>
        <p className="mb-2">Department: {departmentName}</p>
        <p className="mb-2">Telephone: {phone}</p>
        <p className="mb-2">Address: {address}</p>

        <h6 className="mt-4 font-bold text-md">Update Department</h6>
        <div className="flex align-center mt-2">
          <select
            className="border-2 border-gray-500 py-2 px-4 rounded mr-1"
            onChange={(e) => changeSelectDepHandler(Number(e.target.value))}
            value={currentDep}
          >
            {departments.map((department, i) => (
              <option key={`department-${i}`} value={department.id}>
                {department.name}
              </option>
            ))}
          </select>
          <button
            className="bg-black disabled:bg-gray-300 text-white px-4 py-2 text-lg font-bold rounded"
            onClick={updateDepartmentHandler}
            disabled={!isChanged}
          >
            Update
          </button>
        </div>
        <div></div>
      </div>
      <div className="p-4">
        <h5 className="font-bold text-lg">Hire Date</h5>
        <p>{dates.hired}</p>
        <p>{dates.hiredSince}</p>

        <button
          className={`mt-4 text-white px-4 py-2 text-lg font-bold drop-shadow-md rounded ${
            active ? "bg-red-600" : "bg-green-600"
          }`}
          onClick={toggleEmployeeHandler}
        >
          {active ? "Deactivate" : "Activate"}
        </button>
      </div>
      <HistoryComponent history={depHistory} />
    </div>
  );
};

export default DetailComponent;
