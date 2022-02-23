import Head from 'next/head'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-[800px] h-[800px] bg-blue-500'>
        <h1 className='text-white'>hello</h1>
      </div>
    </div>
  );
}
