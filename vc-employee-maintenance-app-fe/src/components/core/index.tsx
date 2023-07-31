import { FC, PropsWithChildren } from "react";
import HeaderComponent from "./header";

const CoreComponent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default CoreComponent;
