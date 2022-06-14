import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from 'next'
import { sanity } from "../sanityClient";
import styles from "../styles/Home.module.css";

const PostDetails: NextPage = () => {
    return <section className={styles.post_details}>
         <h1>Hello, my new Page</h1>

         <div className={styles.post_contents}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam qui earum mollitia molestiae, ut dolore architecto tempora itaque sed autem!</p>
         </div>
         </section>
}

export default PostDetails

// export const getStaticProps: GetStaticProps = async (context) => {
//     return {
//         props: {
            
//         }
//     }
//   }
  
//   export const getStaticPaths: GetStaticPaths = async () => {
//     const posts = await sanity.fetch(`*[_type == "post"]{
//         'slug': slug.current
//       }`);

//       return {
//           paths: posts.map((p: any) => `/${p.slug}`),
//           fallback: false
//       }
//   }