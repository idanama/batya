import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Auth(props) {
  // const [session, loading] = useSession();
  const session = props.session;

  if (!session) {
    return (
      <>
        Not signed in <br />
        <span onClick={signIn}>Sign in</span>
      </>
    );
  } else {
    return (
      <>
        <span onClick={signOut}>Sign out</span>
      </>
    );
  }
}
