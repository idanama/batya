import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { query } from '../../../lib/db';

const options = {
  events: {
    signIn: async (message) => console.log(message),
    signOut: async (message) => console.log(message),
    createUser: async (message) => console.log(message),
    linkAccount: async (message) => console.log(message),
    session: async (message) => console.log(message),
    error: async (message) => console.log(message),
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    newUser: '/search'
  },
  providers: [
    // OAuth authentication providers...
    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Enter your email-address' },
        password: { label: 'Password', type: 'password', placeholder: 'Enter your password' },
      },
      authorize: async (credentials) => {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        let msg;
        let user = null;
        try {
          user = await query(
            `
              SELECT *
              FROM user
              WHERE email = ?
            `,
            credentials.username
          );
          console.log(user);
          if (user.length === 0) {
            return null;
          }
        } catch (e) {
          msg = e.message;
        }
        console.log(user, msg);
        if (user) {
          // Any user object returned here will be saved in the JSON Web Token
          console.log('resolved')
          return Promise.resolve({ user: { ...user.RowDataPacket } });
        } else {
          return Promise.reject(msg);
        }
      },
    }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
