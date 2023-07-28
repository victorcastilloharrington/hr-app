/*
  Warnings:

  - The primary key for the `DepartmentsOnEmployees` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "DepartmentsOnEmployees" DROP CONSTRAINT "DepartmentsOnEmployees_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "DepartmentsOnEmployees_pkey" PRIMARY KEY ("id");
