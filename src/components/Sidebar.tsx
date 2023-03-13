'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Item = ({ href = '/', text = 'Home' }: { href?: string; text?: string }) => (
  <Link className="item w-fit z-10 px-4 py-2" href={href}>
    {text}
  </Link>
);

const Sidebar = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.item');
    const mark = document.getElementById('marks');
    const indicator = (e: any) => {
      mark!.style.top = e.offsetTop + 'px';
      mark!.style.height = e.offsetHeight + 'px';
      mark!.style.width = e.offsetWidth + 'px';
    };
    items.forEach((link) => {
      link.addEventListener('click', (e) => {
        indicator(e.target);
      });
    });
  }, []);

  return (
    <div className="flex  flex-col gap-4 font-semibold w-[231px]">
      <Image width={54} height={54} alt="logo" src={'/svg/logo.svg'} />
      <div className="flex flex-col relative gap-4 ">
        <Item />
        <Item href={'/about'} text={'About'} />
        <Item href={'/blog'} text={'Blog'} />
        <Item href={'/guestbook'} text={'Guest Book'} />
        <div id="marks" className="rounded-md absolute top-0 left-0 w-[4.688rem] h-[2.5rem] transition-all duration-500 bg-zinc-100"></div>
      </div>
    </div>
  );
};

export default Sidebar;
