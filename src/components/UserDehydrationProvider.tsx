'use client';

import { useAppDispatch } from '@/store';
import { setUser } from '@/store/slices/auth';
import { useEffect } from 'react';

type Props = {
  status: string;
};

const UserDehydrationProvider = ({ status }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'invalid') {
      dispatch(setUser(null));
    }
  }, [status, dispatch]);

  return null;
};

export default UserDehydrationProvider;
