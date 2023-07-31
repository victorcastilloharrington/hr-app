import ListComponent from "@/components/list";
import { getAllEmployees } from "@/graphql/queries";
import { TEmployeeList } from "@/types/list";
import { employeeListBuilder } from "@/utils/builder";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FC } from "react";

const Index: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  employees,
}) => {
  return <ListComponent employees={...employees} />;
};

export const getServerSideProps: GetServerSideProps<{
  employees: TEmployeeList[];
}> = async () => {
  const employees = await getAllEmployees();

  return { props: { employees: employeeListBuilder(employees) } };
};
export default Index;
