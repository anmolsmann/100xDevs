import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getUser(email: string) {
  const user = await prisma.user.findFirst({
    where: {
        email
    }
  })
  console.log(user);
}

getUser("aps@gmail.com");