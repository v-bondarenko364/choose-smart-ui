import { cookies } from 'next/headers';
import { ApiClient } from '@/lib/api';

const verifyToken = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  let tokenStatus = !token ? 'empty' : 'valid';

  if (token) {
    const tokenResponse = await ApiClient.verifyToken();
    tokenStatus = tokenResponse?.isValid ? 'valid' : 'invalid';
  }

  return tokenStatus;
};

export default verifyToken;
