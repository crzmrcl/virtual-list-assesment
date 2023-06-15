import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GitHubProvider({
            // **** If key is in env file. ****
            // clientId: `${process.env.GITHUB_ID}`,
            // clientSecret: `${process.env.GITHUB_SECRET}`,

            // **** Key should be hidden from the public. But for demonstration purpose I hardcode it ****
            clientId: 'c9260d32970a3ce353ea',
            clientSecret: '24be1f0191c00ea9df304d88ffcaffda072c0bb7',
        })
    ]
})
