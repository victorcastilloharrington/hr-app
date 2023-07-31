import Image from "next/image";
import { FC } from "react";

const HeaderComponent: FC = () => {
  return (
    <div className="flex py-4 mb-4 border-b-4 border-sky-600">
      <Image src="/logo.png" width={200} height={100} alt="Logo" />
    </div>
  );
};

export default HeaderComponent;
