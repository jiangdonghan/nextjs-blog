import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return <div className='container mx-auto mb-8 px-10'>{children}</div>;
}
