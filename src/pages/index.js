import Head from "next/head";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import ImageSlideshow from "@/components/ImagePreview";
import About from "@/components/About";
import JoinNow from "@/components/JoinNow";
import Footer from "@/components/Footer";

const images = [
  {
    original: 'preview1.png',
    thumbnail: 'preview1.png',
  },
  {
    original: 'preview2.png',
    thumbnail: 'preview2.png',
  },
  {
    original: 'preview3.png',
    thumbnail: 'preview3.png',
  },
  {
    original: 'preview4.png',
    thumbnail: 'preview4.png',
  },
  {
    original: 'preview5.png',
    thumbnail: 'preview5.png',
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Solidbooru-AI</title>
        <meta
          name="description"
          content="Minimal and awesome discord bot website created with ❤️ using NextJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Showcase />
      <ImageSlideshow images={images} />
      <About />
      <JoinNow />
      <Footer />
    </>
  );
}
