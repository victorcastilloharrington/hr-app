import { FC, PropsWithChildren } from "react";
import HeaderComponent from "./header";

const CoreComponent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  );
};

export default CoreComponent;
