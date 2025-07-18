import NextAuth from "next-auth"

declare module "next-auth" {

    interface Session {
        user: {
            id: string | null;
            roles: string[] | [];
            email: string | null;
            nickname: string | null;
            isPartner: boolean | null;
            isVerified: boolean | null;
            crowns: number
        } & DefaultSession["user"];
    }

    interface User {
        id: string | null;
        roles: string[] | [];
        email: string | null;
        nickname: string | null;
        isPartner: boolean | null;
        isVerified: boolean | null;
        crowns: number
    }
}