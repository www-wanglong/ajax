import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>index page</title>
      </Head>
      <div>
        index
        <Link href="/list"><a className="demo">jump to list page</a></Link>
        <img src="/images/1.jpg" />
      </div>

      <style jsx>{`
        .demo {
          color: red;
        }
      `}</style>

    </>
  );
}