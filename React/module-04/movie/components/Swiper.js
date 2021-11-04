import { Carousel } from 'react-responsive-carousel';
import Head from 'next/head'
import Link from 'next/link'
import { css } from '@emotion/core';
import styled from '@emotion/styled'
import { Box, Heading, Text, Button } from '@chakra-ui/core';
import axios from 'axios';
import { baseURL } from '../axiosConfig'

const CarouselItem = styled.div`
  position: relative;
  & > div {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    color: #FFFFFF;
    padding-top: 180px;
    text-align: left;
    width: 100%;
    max-width 1200px;

    & > p {
      margin: 15px 0;
      font-size: 12px;
      width: 450px;
    }
  }

  & > img {
    filter: brightness(50%)
  }
`

const swiperContainer = css`
  position: relative;
  & >.carousel:last-child {
    position: absolute;
    left: 0;
    bottom: 0;
    & > .thumbs-wrapper > .thumbs {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export default function Swiper({ data }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/carousel.min.css" />
      </Head>
      <Carousel
        css={swiperContainer}
        showArrows={false}
        renderIndicator={false}
        showStatus={false}
      >
        {
          data.map( swiper => (
            <CarouselItem key={swiper.id}>
              <img src={swiper.url} />
              <Box>
                <Heading as="h2" size="lg">{swiper.title}</Heading>
                <Text>{swiper.description}</Text>
                <Button colorScheme="red">
                  <Link href="/detail/[id]" as={`/detail/${swiper.vid}`}><a>CHECK</a></Link>
                </Button>
              </Box>
            </CarouselItem>
          ))
        }
      </Carousel>
    </>
  );
};

// 加载
export function loadSwiper () {
  return axios.get('api/swiper', { baseURL })
}