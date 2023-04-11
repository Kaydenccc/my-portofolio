import GuestChat from '@/components/GuestChat';
import Header from '@/components/Header';
import React from 'react';

const Guestbook = () => {
  return (
    <main className="space-y-4 w-full">
      <Header label="Guest Book" />
      <GuestChat img={'/images/anhar.png'} username={'kayden'} text={'This project is Absolutly cool!!'} />
      <GuestChat img={'/images/anhar.png'} username={'kayden'} text={'This project is Absolutly cool!!'} />
      <GuestChat img={'/images/anhar.png'} username={'kayden'} text={'This project is Absolutly cool!!'} />
      <GuestChat img={'/images/anhar.png'} username={'kayden'} text={'This project is Absolutly cool!!'} />
      <GuestChat img={'/images/anhar.png'} username={'kayden'} text={'This project is Absolutly cool!!'} />
      <GuestChat img={'/images/anhar.png'} username={'kayden'} text={'This project is Absolutly cool!!'} />
      <GuestChat img={'/images/anhar.png'} username={'kayden'} text={'This project is Absolutly cool!!'} />
      <GuestChat img={'/images/anhar.png'} username={'kayden'} text={'This project is Absolutly cool!!'} />
    </main>
  );
};

export default Guestbook;
