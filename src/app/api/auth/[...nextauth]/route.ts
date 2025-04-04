import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth/next";
import { UserRole } from "@prisma/client";
import { authOptions } from "./auth";

interface Credentials {
  email: string;
  password: string;
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; 