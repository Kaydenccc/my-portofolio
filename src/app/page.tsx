import CardBio from '@/components/CardBio';

export default function Home() {
  return (
    <main className="w-full space-y-4">
      <h1 className="text-5xl font-bold ">Anhar Fadilah</h1>
      <p>
        Saya Anhar, seorang Software <span className="font-bold">Developer di Google Indonesia</span> , dan saya senang dapat berbagi karya dan pengalaman saya dengan Anda di sini.
      </p>
      <CardBio />
      <p>
        Sebagai seorang software engineer, saya telah mengembangkan berbagai aplikasi dan platform yang melibatkan teknologi canggih seperti Java, Python, dan React Native. Saya selalu mencari cara untuk meningkatkan keterampilan saya dan
        mengeksplorasi teknologi baru yang dapat membantu saya menciptakan solusi yang lebih baik.
      </p>
      <div className="flex gap-6 !mt-6">
        <button className="border-b-2 leading-3 border-b-black font-bold">Github</button>
        <button className="border-b-2 leading-3 border-b-black font-bold">Linkedin</button>
      </div>
    </main>
  );
}
