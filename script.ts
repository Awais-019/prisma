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
  const user = await prisma.user.update({
    data: {
      email: "alice1@test.com"
    },
    where: {
      email: "alice@test.com"
    },
  });
  // Advanced filtering
  // not - not equal
  // in - in array
  // notIn - not in array
  // lt - less than
  // lte - less than or equal
  // gt - greater than
  // gte - greater than or equal
  // contains - contains string
  // startsWith - starts with string
  // endsWith - ends with string
  // notContains - does not contain string
  // notStartsWith - does not start with string
  // notEndsWith - does not end with string
  // AND - and
  // OR - or
  // NOT - not
  console.log(user);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
