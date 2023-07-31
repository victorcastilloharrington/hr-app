import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Employee, Prisma } from '@prisma/client';
@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  async findOneById(
    employeeWhereUniqueInput: Prisma.EmployeeWhereUniqueInput,
  ): Promise<Employee | null> {
    return this.prisma.employee.findUnique({
      where: employeeWhereUniqueInput,
      include: {
        department: true,
        DepartmentsOnEmployees: {
          orderBy: {
            assignedAt: 'desc',
          },
        },
      },
    });
  }

  async findAll(): Promise<Employee[] | null> {
    return this.prisma.employee.findMany({ include: { department: true } });
  }

  async update(params: {
    where: Prisma.EmployeeWhereUniqueInput;
    data: Prisma.EmployeeUncheckedUpdateInput;
  }): Promise<Employee> {
    const { data, where } = params;
    await this.prisma.departmentsOnEmployees.create({
      data: {
        employee_id: where.id,
        department_id: data.department_id as number,
      },
    });
    return this.prisma.employee.update({
      data,
      where,
      include: {
        department: true,
        DepartmentsOnEmployees: {
          orderBy: {
            assignedAt: 'desc',
          },
        },
      },
    });
  }

  async delete(where: Prisma.EmployeeWhereUniqueInput): Promise<Employee> {
    const employee = await this.prisma.employee.findUnique({
      where,
    });

    const data = {
      isActive: !employee.isActive,
    };

    return this.prisma.employee.update({
      data,
      where,
      include: {
        department: true,
        DepartmentsOnEmployees: {
          orderBy: {
            assignedAt: 'desc',
          },
        },
      },
    });
  }
}
