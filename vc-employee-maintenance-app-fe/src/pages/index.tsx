import ListComponent from "@/components/list";
import { getAllEmployees } from "@/graphql/queries";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FC } from "react";

const Index: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  employees,
}) => {
  return <ListComponent employees={...employees} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const employees = await getAllEmployees();
  return { props: { employees } };
};
export default Index;
