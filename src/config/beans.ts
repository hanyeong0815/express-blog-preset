import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

const beans = {
  prismaClient: () => prismaClient,
  memberRepository: () => prismaClient.member,
};

export default beans;
