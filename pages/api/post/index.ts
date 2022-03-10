import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { name, bio, phone, facebook, twitter, instagram, slug } = req.body;

  const session = await getSession({ req });

  if (!session) {
    return res.status(401);
  }

  const profile = await prisma.profile.create({
    data: {
      name,
      bio,
      phone,
      //@ts-ignore
      email: session.user.email,
      facebook,
      slug,
      twitter,
      instagram,
      //@ts-ignore
      user: { connect: { email: session.user.email } },
    },
  });

  console.log(profile);
  return res.status(200).json(profile);
}
