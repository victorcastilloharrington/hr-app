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
    <div className="flex py-4 px-8 drop-shadow-md bg-gray-50 mb-4 rounded-xl flex-wrap items-center">
      <Image
        className="p-2 rounded mr-4"
        src="https://fakeimg.pl/150x150?text=Avatar&font=bebas"
        alt="Employee Avatar"
        width={150}
        height={150}
      />
      <div className="grow p-2">
        <div className="flex mb-4">
          <span className="font-bold text-xl mr-2">{name}</span>
          <span className="text-xl">({departmentName})</span>
        </div>
        <div>
          <p className="font-bold">Hire Date</p>
          <p>{hired}</p>
        </div>
      </div>
      <div>
        <button
          className="mt-4 text-white px-4 py-2 text-lg font-bold drop-shadow-md rounded bg-black"
          onClick={() => router.push(`/employee/${id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
