import { providers, signIn } from 'next-auth/client';
import SignIn from '../../components/Signin';

export default function SignInPage() {
  return <SignIn logo={false} />;
}
