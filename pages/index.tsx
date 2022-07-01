import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import imageUrlBuilder from '@sanity/image-url'
import Image from "next/image";
import { sanity } from "../sanityClient";
import styles from "../styles/Home.module.css";

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
            John Doe is a photographer and filmmaker based in Amsterdam, Netherlands
          </h1>
        

        <section className={styles.project_container}>
            {posts && posts.map((post: any, index) => (
                <Link href={`/${post.slug}`} key={index}>
                  <a className={styles.project}>
                    <div className={styles.projectImg_container}>
                    <Image src={urlFor(post.mainImage).url()} alt="Work" width={450} height={350} objectFit="cover" className={styles.mainImage} />
                    </div>
                    <div className={styles.project_contents}>
                      <p>{post.title}</p>
                      <p>{post.yearCreated}</p>
                    </div>
                  </a>
                </Link>
            ))}
        </section>
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
