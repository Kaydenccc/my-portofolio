import Image from 'next/image';
import React from 'react';

interface chatProps {
  img: string;
  username: string;
  text: string;
}

const GuestChat = ({ img, username, text }: chatProps) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-[40px] h-[40px] rounded-full overflow-hidden bg-zinc-200">
        <Image width={40} height={40} src={img} alt={'profile user chat'} />
      </div>
      <span className="text-sm">
        <span className="font-bold ">{username} : </span>
        {text}
      </span>
    </div>
  );
};

export default GuestChat;
