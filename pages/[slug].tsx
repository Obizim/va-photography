import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from 'next'
import { sanity } from "../sanityClient";

const Sluigi: NextPage = () => {
    return <div> Hello, my new Page</div>
}

export default Sluigi

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            
        }
    }
  }
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await sanity.fetch(`*[_type == "post"]{
        'slug': slug.current
      }`);

      return {
          paths: posts.map((e: any) => `/${e.slug}`),
          fallback: false
      }
  }