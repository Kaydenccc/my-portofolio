import Image from 'next/image';
import React from 'react';
interface cardProps {
  img: string;
  title: string;
}

const CardBlog = ({ img, title }: cardProps) => {
  return (
    <div className="flex items-center  gap-6 w-full">
      <Image width={80} height={80} src={img} alt="default image of blog" />
      <div className="flex flex-col justify-center gap-2">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex justify-center items-center gap-6">
          <p>2 Hari yang lalu</p>
          <p>180x Dilihat</p>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
