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
      include: { department: true },
    });
  }

  async findAll(): Promise<Employee[] | null> {
    return this.prisma.employee.findMany({ include: { department: true } });
  }
}
