import { useEffect } from 'react';
import { signIn } from './firebase/authentication';
import React from 'react';

const WrapperApp = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const logIn = async () => {
      const user = await signIn('test@test.com', 'test@test');
      console.log(user);
    };
    logIn();
  }, []);
  return (
    <div data-theme="cupcake" className="prose min-h-screen min-w-full">
      {children}
    </div>
  );
};

export default WrapperApp;
