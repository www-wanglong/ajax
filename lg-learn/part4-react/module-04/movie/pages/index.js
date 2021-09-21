import Layout from '../components/Layout';
import Swiper, { loadSwiper } from '../components/Swiper';
import Movie, { loadMovie } from '../components/Movie';

export default function Home({ swiper, movie }) {
  return (
    <Layout>
      <Swiper data={swiper} />
      <Movie data={movie} title="电影" />
    </Layout>
  );
};

// 有数据的静态生成
export async function getStaticProps () {
  // 获取轮播图数据
  let { data: swiper } = await loadSwiper();
  let { data: movie } = await loadMovie();
  return {
    props: {
      swiper,
      movie
    }
  }
}