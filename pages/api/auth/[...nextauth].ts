import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GitHubProvider({
            // clientId: `${process.env.GITHUB_ID}`,
            // clientSecret: `${process.env.GITHUB_SECRET}`,
            clientId: 'c9260d32970a3ce353ea',
            clientSecret: '24be1f0191c00ea9df304d88ffcaffda072c0bb7',
        })
    ]
})
