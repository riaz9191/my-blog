import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log('--- Authorize Function Called ---');
        console.log('Received credentials:', credentials);

        if (!credentials) {
          console.log('No credentials provided.');
          return null;
        }
        const { username, password } = credentials;

        const storedUser = process.env.ADMIN_USERNAME;
        const storedPassword = process.env.ADMIN_PASSWORD;

        console.log('ADMIN_USERNAME from env:', storedUser);
        console.log('ADMIN_PASSWORD from env (hashed):', storedPassword);
        console.log('Provided username:', username);
        console.log('Provided password:', password); // Be cautious with logging plain passwords in production

        if (!storedUser || !storedPassword) {
          console.error('Admin credentials (username or password) are not set in environment variables.');
          return null;
        }

        let isPasswordCorrect = false;
        try {
          isPasswordCorrect = await bcrypt.compare(password, storedPassword);
          console.log('bcrypt.compare result:', isPasswordCorrect);
        } catch (error) {
          console.error('Error during bcrypt.compare:', error);
        }

        if (username === storedUser && isPasswordCorrect) {
          console.log('Login successful for user:', username);
          return { id: "1", name: "Admin" };
        }

        console.log('Login failed: Username or password mismatch.');
        return null;
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
