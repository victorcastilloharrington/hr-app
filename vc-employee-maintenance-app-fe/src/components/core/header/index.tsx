import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

const HeaderComponent: FC = () => {
  const router = useRouter();
  return (
    <div className="flex py-4 mb-12 border-b-4 border-sky-600">
      <Image
        src="/logo.png"
        width={200}
        height={100}
        alt="Logo"
        onClick={() => router.push("/")}
      />
    </div>
  );
};

export default HeaderComponent;
