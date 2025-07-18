import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { handleApiError } from "@/lib/apiErrorHandler";
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await axios.post(`${backendUrl}/api/auth/login`, {
            email: credentials?.email,
            password: credentials?.password,
          });
          if (res.data && res.data.token) {
            return { ...res.data };
          }
          return null;
        } catch (error) {
            handleApiError(error);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token = { ...token, ...user };
      }
      if (trigger === 'update' && session?.user?.crowns != null) {
        token.crowns = session.user.crowns;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };