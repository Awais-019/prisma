import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Alice",
  //     },
  //   });
  //   const users = await prisma.user.findMany();
  await prisma.user.deleteMany();
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
