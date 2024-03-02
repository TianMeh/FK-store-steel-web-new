import React from 'react';
import MetaHead from './MetaHead';
import Navbar from './Navbar';

function BaseContainer({
  children,
  meta = { title: 'PartyCrave', description: '' },
}: {
  children: React.ReactNode;
  meta?: { title: string; description?: string };
}) {
  return (
    <>
      <MetaHead title={meta.title} description={meta.description} />
      <Navbar />

      <div className="bg-gr-blue min-h-screen w-[100%]">{children}</div>
    </>
  );
}

export default BaseContainer;
