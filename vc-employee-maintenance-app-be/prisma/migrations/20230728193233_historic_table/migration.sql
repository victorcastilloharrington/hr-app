-- CreateTable
CREATE TABLE "DepartmentsOnEmployees" (
    "employee_id" INTEGER NOT NULL,
    "department_id" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DepartmentsOnEmployees_pkey" PRIMARY KEY ("employee_id","department_id")
);

-- AddForeignKey
ALTER TABLE "DepartmentsOnEmployees" ADD CONSTRAINT "DepartmentsOnEmployees_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepartmentsOnEmployees" ADD CONSTRAINT "DepartmentsOnEmployees_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
