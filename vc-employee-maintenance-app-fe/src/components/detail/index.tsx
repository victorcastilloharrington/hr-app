import { FC } from "react";

const DetailComponent: FC<TEmployee> = ({
  id,
  firstname,
  lastname,
  department,
  phone,
  address,
  hiredate,
}) => {
  const parsedDate = new Date(hiredate).toDateString();
  return (
    <div>
      <div>Icon</div>
      <div>
        <h3>{`${firstname} ${lastname}`}</h3>
        <p>Employee Id: {id}</p>
        <p>Employee Department: {department.name}</p>
        <p>Employee Telephone: {phone}</p>
        <p>Employee Address: {address}</p>

        <h6>Update Department</h6>
        <div>
          <select>
            <option>Department Name</option>
            <option>Department Name</option>
            <option>Department Name</option>
          </select>
          <button onClick={() => {}}>Update</button>
        </div>
        <div></div>
      </div>
      <div>
        <h5>Hire Date</h5>
        <p>{parsedDate}</p>
        <button onClick={() => {}}>Deactivate</button>
      </div>
    </div>
  );
};

export default DetailComponent;
