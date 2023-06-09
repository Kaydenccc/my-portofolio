import Header from '@/components/Header';
import React from 'react';

const Aboutpage = () => {
  return (
    <main className="space-y-4 w-full">
      <Header label="About" />
      <p>
        Saya Anhar, seorang Software <span className="font-bold">Developer di Google Indonesia</span> , dan saya senang dapat berbagi karya dan pengalaman saya dengan Anda di sini.
      </p>
      <hr className="border border-zinc-200" />
      <p>
        Sebagai seorang software engineer, saya telah mengembangkan berbagai aplikasi dan platform yang melibatkan teknologi canggih seperti Java, Python, dan React Native. Saya selalu mencari cara untuk meningkatkan keterampilan saya dan
        mengeksplorasi teknologi baru yang dapat membantu saya menciptakan solusi yang lebih baik.
      </p>
      <p>
        Saya percaya bahwa pengembangan perangkat lunak bukan hanya tentang menulis kode, tetapi juga tentang memahami kebutuhan pengguna dan memastikan pengalaman pengguna yang optimal. Dengan itu, saya selalu berusaha untuk memahami
        konteks bisnis yang mendukung produk yang saya buat dan mengoptimalkan solusi yang dapat memberikan dampak positif bagi bisnis dan pengguna. Saya senang berbagi pengalaman saya dalam mengembangkan perangkat lunak dan memberikan
        solusi teknologi yang inovatif.
      </p>
      <p>Silakan jelajahi portofolio saya dan jangan ragu untuk menghubungi saya jika Anda tertarik untuk bekerja sama atau berdiskusi lebih lanjut tentang proyek Anda. Terima kasih telah mengunjungi halaman saya!</p>
    </main>
  );
};

export default Aboutpage;
