import { FC } from "react";

const CardComponent: FC<TEmployee> = ({
  firstname,
  lastname,
  hiredate,
  department,
}) => {
  const parsedDate = new Date(hiredate).toDateString();

  return (
    <div>
      <div>Icon</div>
      <div>
        <span>{`${firstname} ${lastname}`}</span>
        <span>({department.name})</span>
      </div>
      <div>
        <p>Hire Date</p>
        <p>{parsedDate}</p>
      </div>
      <div>
        <button onClick={() => {}}>View Details</button>
      </div>
    </div>
  );
};

export default CardComponent;
