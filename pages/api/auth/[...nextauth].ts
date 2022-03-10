import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: '814919103638-bab10hg1vgcu6cekr40ck5hvi79geksi.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
})