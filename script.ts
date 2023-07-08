import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  await prisma.user.deleteMany();
  // createMany to create multiple records at once
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@test.com",
      age: 20,
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    select: {
      name: true,
      userPreference: {
        select: { id: true },
      },
    },
  });
  console.log("User created", user);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
