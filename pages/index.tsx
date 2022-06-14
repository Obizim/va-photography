import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import imageUrlBuilder from '@sanity/image-url'
import { Splide, SplideSlide} from "@splidejs/react-splide";
import Image from "next/image";
import { sanity } from "../sanityClient";
import styles from "../styles/Home.module.css";
import "@splidejs/react-splide/css";

interface IPosts {
  posts: [];
}

function urlFor (source: any) {
  return imageUrlBuilder(sanity).image(source)
}

const Home: NextPage<IPosts> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Victor Abiola - Portfolio</title>
        <meta name="description" content="photography portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.main}>
          <h1 className={styles.title}>
            Victor Abiola <br /> Photographer Services
          </h1>
          <p className={styles.desc}>
            Event/Portrait photographer and film maker
          </p>
      
          <Link href="/contact">
            <a className={styles.booking}>Book an event</a>
          </Link>
        </section>

        <section className={styles.project_container}>
          <Splide
            options={{
              rewind: false,
              width: "100vw",
              gap: "2rem",
              pagination: false,
              perMove: 1,
              drag: true,
            }}>
            {posts && posts.map((post: any, index) => (
              <SplideSlide className={styles.splide__slide} key={index}>
                <Link href={`/${post.slug}`} key={index}>
                  <a className={styles.project}>
                    <Image src={urlFor(post.mainImage).url()} alt="Work" width={348.33} height={300} objectFit="cover" />
                    <div className={styles.project_contents}>
                      <p>{post.title}</p>
                      <p>{post.yearCreated}</p>
                    </div>
                  </a>
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </section>

    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await sanity.fetch(`*[_type == "post"]{
    'slug': slug.current,
    'title': title,
    'yearCreated': yearCreated,
    'mainImage': mainImage {
      asset->{
        _id,
        url
      }
    }
  }`);

  if(!posts || !posts.length) {
    return {
      props: {
        posts: []
      },
    }
  }else {
    return {
      props: {
        posts
      },
    };
  }

  
};
