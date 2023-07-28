-- DropForeignKey
ALTER TABLE "DepartmentsOnEmployees" DROP CONSTRAINT "DepartmentsOnEmployees_department_id_fkey";

-- DropForeignKey
ALTER TABLE "DepartmentsOnEmployees" DROP CONSTRAINT "DepartmentsOnEmployees_employee_id_fkey";

-- AddForeignKey
ALTER TABLE "DepartmentsOnEmployees" ADD CONSTRAINT "DepartmentsOnEmployees_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepartmentsOnEmployees" ADD CONSTRAINT "DepartmentsOnEmployees_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;
