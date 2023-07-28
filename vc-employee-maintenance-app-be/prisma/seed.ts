import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const employeeFactory = (): any => ({
  firstname: faker.person.firstName(),
  lastname: faker.person.lastName(),
  hiredate: faker.date.recent(),
  phone: faker.phone.number(),
  address: faker.location.streetAddress(),
});

const departmentFactory = (): any => ({
  name: faker.commerce.department(),
});

async function main() {
  // check if db is seeded
  const employeeCount = await prisma.employee?.count();

  if (employeeCount > 0) return;

  console.log('---------------Seeding Database---------------');
  /// --------- Departments ---------------
  for (let i = 0; i < 5; i++) {
    await prisma.department.create({ data: departmentFactory() });
  }

  /// --------- Employees ---------------
  for (let i = 0; i < 10; i++) {
    const departmentsIds = await prisma.department.findMany({
      select: { id: true },
    });

    const department_id =
      departmentsIds[Math.floor(Math.random() * departmentsIds.length)].id;

    await prisma.employee.create({
      data: { ...employeeFactory(), department_id },
    });
  }
  console.log('---------------Seeding Successful!---------------');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
