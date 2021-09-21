import Head from 'next/head';
import styles from './list.module.css'
import { readFile } from 'fs';
import { promisify } from 'util'
import { join } from 'path'

const read = promisify(readFile)

export default function List ({ data }) {
  return (
    <>
      <Head>
        <title>list page</title>
      </Head>
      <div className={styles.demo}>list</div>
      <div>{data}</div>
    </>
  )
};

// node环境输出
// getStaticProps 客户端渲染
// getServerSideProps 服务器端渲染
export async function getServerSideProps (context) {
  let data = await read(join(process.cwd(), 'pages', '_app.js'), 'utf-8');
  console.log('hello', context.query)
  return {
    props: {
      data
    }
  };
};