import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import SmallImage from '../../components/imageCard';

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
        <Layout pageTitle={mdx.frontmatter.title}>
          {
            (image !== undefined)
            ? <GatsbyImage
                image={image}
                alt=''
              />
            : <div>Unable to load image</div>
          }


          <div style={{ width: '100%' }}>
            {children}
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