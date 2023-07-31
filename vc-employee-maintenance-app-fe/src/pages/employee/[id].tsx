import DetailComponent from "@/components/detail";
import { getEmployeesById } from "@/graphql/queries";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FC } from "react";

const EmployeeDetailPage: FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ employee }) => {
  return <DetailComponent {...employee} />;
};

export const getServerSideProps: GetServerSideProps<{
  employee: TEmployee;
}> = async ({ query }) => {
  const { id } = query;
  const employee = await getEmployeesById(id as string);
  return { props: { employee } };
};
export default EmployeeDetailPage;
