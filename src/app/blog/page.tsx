import CardBlog from '@/components/CardBlog';
import Header from '@/components/Header';
import React from 'react';

const Blogpage = () => {
  return (
    <main className="space-y-4 cursor-pointer w-full">
      <Header label="Blog" />
      <div className="space-y-4 w-full ">
        <CardBlog title="Belajar Next.js" img="/svg/blog.svg" />
        <CardBlog title="Belajar Next.js" img="/svg/blog.svg" />
        <CardBlog title="Belajar Next.js" img="/svg/blog.svg" />
        <CardBlog title="Belajar Next.js" img="/svg/blog.svg" />
      </div>
    </main>
  );
};

export default Blogpage;
