import React from 'react';

const Header = ({ label }: { label: string }) => {
  return (
    <header>
      <h1 className="text-5xl font-bold ">{label}</h1>
    </header>
  );
};

export default Header;
