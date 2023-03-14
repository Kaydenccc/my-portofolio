import Image from 'next/image';
import React from 'react';

const CardBio = () => {
  return (
    <div className="flex w-fit gap-6 justify-center items-center p-5 border-2 border-zinc-200 rounded-lg">
      <div className="w-[100px] h-[100px] bg-zinc-200 rounded-full object-cover overflow-hidden">
        <Image width={100} height={100} src={'/images/anhar.PNG'} alt={'profile Anhar Fadilah'} />
      </div>
      <div className="space-y-2">
        <div className="flex gap-1">
          <Image width={16} height={16} src={'/svg/project.svg'} alt={'profile Anhar Fadilah'} />
          <p className="text-sm">
            <span className="font-bold">140 </span>
            Repositories github
          </p>
        </div>
        <div className="flex gap-2">
          <Image width={16} height={16} src={'/svg/github.svg'} alt={'profile Anhar Fadilah'} />
          <p className="text-sm">
            <span className="font-bold">1440 </span>
            Stars on repository github
          </p>
        </div>
        <div className="flex gap-2">
          <Image width={16} height={16} src={'/svg/deal.svg'} alt={'profile Anhar Fadilah'} />
          <p className="text-sm">
            <span className="font-bold">40 </span>
            Clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardBio;
