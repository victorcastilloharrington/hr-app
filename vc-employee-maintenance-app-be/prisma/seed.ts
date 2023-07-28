import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const employeeFactory = (): any => ({
  firstname: faker.person.firstName(),
  lastname: faker.person.lastName(),
  hiredate: faker.date.past({ years: 10 }),
  phone: faker.phone.number(),
  address: faker.location.streetAddress(),
});

const departmentFactory = (): any => ({
  name: faker.commerce.department(),
});

const historyFactory = (
  department_id: number,
  employee_id: number,
  recent?: boolean,
): any => ({
  department_id,
  employee_id,
  assignedAt: recent
    ? faker.date.recent({ days: 5 })
    : faker.date.past({ years: 10 }),
});

async function main() {
  // check if db is seeded
  const employeeCount = await prisma.employee?.count();

  if (employeeCount > 0) return;

  console.log('---------------Seeding Database---------------');
  // Departments
  for (let i = 0; i < 5; i++) {
    await prisma.department.create({ data: departmentFactory() });
  }

  const departmentsIds = await prisma.department.findMany({
    select: { id: true },
  });

  // Employees
  for (let i = 0; i < 10; i++) {
    const department_id =
      departmentsIds[Math.floor(Math.random() * departmentsIds.length)].id;

    const employee = await prisma.employee.create({
      data: { ...employeeFactory(), department_id },
    });

    // Employee recent history
    await prisma.departmentsOnEmployees.create({
      data: historyFactory(department_id, employee.id, true),
    });

    // Employee past history
    for (let j = 0; j < 3; j++) {
      const department_id =
        departmentsIds[Math.floor(Math.random() * departmentsIds.length)].id;

      await prisma.departmentsOnEmployees.create({
        data: historyFactory(department_id, employee.id),
      });
    }
  }
  console.log('---------------Seeding Successful!---------------');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
