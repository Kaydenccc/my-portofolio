'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

const Item = ({ href = '/', text = 'Home', id }: { id: string; href?: string; text?: string }) => (
  <Link className="item w-fit z-10 px-4 py-2" id={id} href={href}>
    {text}
  </Link>
);

const Sidebar = () => {
  const pathname = usePathname();
  // default state
  useEffect(() => {
    const mark = document.getElementById('marks');
    const blog = document.getElementById('blog');
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const guestbook = document.getElementById('guestbook');
    const indicator = (e: any) => {
      mark!.style.transitionDuration = '0s';
      mark!.style.top = e.offsetTop + 'px';
      mark!.style.height = e.offsetHeight + 'px';
      mark!.style.width = e.offsetWidth + 'px';
    };
    if (pathname.includes('/')) {
      indicator(home);
    }
    if (pathname.includes('/blog')) {
      indicator(blog);
    }
    if (pathname.includes('/about')) {
      indicator(about);
    }
    if (pathname.includes('/guestbook')) {
      indicator(guestbook);
    }
  }, []);

  // when click menu
  useEffect(() => {
    const items = document.querySelectorAll('.item');
    const mark = document.getElementById('marks');

    const indicator = (e: any) => {
      mark!.style.transitionDuration = '500ms';
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
    <div className="flex flex-col gap-4 font-semibold w-[231px]">
      <Image className="mx-[12px]" width={54} height={54} alt="logo" src={'/svg/logo.svg'} />
      <div className="flex flex-col relative gap-2 ">
        <Item id={'home'} />
        <Item id={'about'} href={'/about'} text={'About'} />
        <Item id={'blog'} href={'/blog'} text={'Blog'} />
        <Item id={'guestbook'} href={'/guestbook'} text={'Guest Book'} />
        <div id="marks" className="rounded-md absolute transition-all duration-500 bg-zinc-100"></div>
      </div>
    </div>
  );
};

export default Sidebar;
