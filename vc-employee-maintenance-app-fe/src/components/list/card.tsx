import { TEmployeeList } from "@/types/list";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

const CardComponent: FC<TEmployeeList> = ({
  id,
  name,
  hired,
  departmentName,
}) => {
  const router = useRouter();

  return (
    <div>
      <div>
        <Image
          src="https://fakeimg.pl/150x150?text=Avatar&font=bebas"
          alt="Employee Avatar"
          width={80}
          height={80}
        />
      </div>
      <div>
        <span>{name}</span>
        <span>{departmentName}</span>
      </div>
      <div>
        <p>Hire Date</p>
        <p>{hired}</p>
      </div>
      <div>
        <button onClick={() => router.push(`/employee/${id}`)}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
