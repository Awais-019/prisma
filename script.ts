import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: "alice@test.com",
  //   },
  // });
  // const user = await prisma.user.findFirst({
  //   where: {
  //     name: "Alice",
  //   },
  // });
  const user = await prisma.user.findMany({
    where: {
      name: "Alice",
    },
    orderBy: {
      age: "asc",
    },
    distinct: ["name"],
    take: 10,
    skip: 1,
  });
  console.log(user);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
