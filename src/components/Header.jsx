import React from 'react';

function Header() {
  return (
    <div className="bg-lightheader h-20 min-h-fit font-sans flex justify-around items-center text-lightorangetext border-lightpurpletext border-b-[4px]">
      <a className="text-4xl font-semibold" href="/">
        &lt;GB/&gt;
      </a>
      <nav className="flex justify-between w-2/5 text-lg font-medium	">
        <a href="/">Home</a>
        <a href="#about">Sobre</a>
        <a href="#curriculum">Currículo</a>
        <a href="/projects">Projetos</a>
      </nav>
    </div>
  );
}

export default Header;
