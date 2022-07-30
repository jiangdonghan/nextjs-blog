import * as React from 'react';

import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Header />
      <div className='container mx-auto mb-8 px-8 md:px-28'>{children}</div>;
    </>
  );
}
