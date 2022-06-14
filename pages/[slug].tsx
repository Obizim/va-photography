import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from 'next'
import { sanity } from "../sanityClient";
import {PortableText} from '@portabletext/react'
import styles from "../styles/Home.module.css";
import React from "react";


interface Iprops {
   posts: {
      title: string,
      body: any
   }
}


const PostDetails: NextPage<Iprops> = ({posts}) => {
    return <section className={styles.post_details}>
         <h1>{posts.title}</h1>

         <div className={styles.post_contents}>
            <PortableText value={posts.body} />
         </div>
         </section>
}

export default PostDetails

export const getStaticProps: GetStaticProps = async ({params}) => {
   const slug = params?.slug
   const posts = await sanity.fetch(`*[_type == "post" && slug.current == '${slug}']{
      'slug': slug.current,
      'title': title,
      'body': body,
      'yearCreated': yearCreated,
      'mainImage': mainImage {
        asset->{
          _id,
          url
        }
      }
    }`);
    console.log(posts[0]);
    
    return {
        props: {
           posts: posts[0]
        }
    }
  }
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await sanity.fetch(`*[_type == "post"]{
        'slug': slug.current
      }`);

      return {
          paths: posts.map((p: any) => `/${p.slug}`),
          fallback: false
      }
  }