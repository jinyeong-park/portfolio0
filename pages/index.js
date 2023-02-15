import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout';
import Hero from '../components/home/hero';
import Contact from '../components/contact/contact.tsx';
import Animation from '../components/home/animation';

export default function Home() {
  return (
    <Layout>
        <Head>
            <title>Jenny Park</title>
            <meta name="description" content="Jenny's portfolio" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <Hero/>
            </div>
        </section>

        {/* - Contact */}
        <section id="contact" className="snap-center">
          <Contact />
        </section>

    </Layout>
  );
}
