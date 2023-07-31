import DetailComponent from "@/components/detail";
import { getEmployeesById } from "@/graphql/queries";
import { TEmployeeDetail } from "@/types/detail";
import { employeeDetailBuilder } from "@/utils/builder";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FC } from "react";

const EmployeeDetailPage: FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ employee }) => {
  return (
    <div>
      <DetailComponent {...employee} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  employee: TEmployeeDetail;
}> = async ({ query }) => {
  const { id } = query;
  const data = await getEmployeesById(id as string);

  const employee = employeeDetailBuilder(data);
  return { props: { employee } };
};
export default EmployeeDetailPage;
