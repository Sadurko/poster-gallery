import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import {
  container,
  textContainer,
  textTitle,
  poster,
} from './{mdx.frontmatter__slug}.module.css';

type DataProps = {
    mdx: {
        frontmatter: {
            title: string,
            image: {
              gatsbyImageData: IGatsbyImageData,
            }
        }
    },
    children: any;
}

const PosterPost = ({ data: {mdx}, children }: PageProps<DataProps>) => {

  const image = getImage(mdx.frontmatter.image);

    return (
        <Layout>
          <div className={container}>
            {
              (image !== undefined)
              ? <GatsbyImage
                  image={image}
                  alt=''
                  className={poster}
                />
              : <div>Unable to load image</div>
            }


            <div className={textContainer}>
              <h4 className={textTitle}>{mdx.frontmatter.title}</h4>

              {children}
            </div>
          </div>
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data: {mdx} }: PageProps<DataProps>) => <Seo title={mdx.frontmatter.title} />

export default PosterPost