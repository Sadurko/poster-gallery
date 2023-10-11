import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import SmallImage from '../../components/smallImage';

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

    return (
        <Layout pageTitle={mdx.frontmatter.title}>
          <SmallImage
            imageInput={mdx.frontmatter.image}
            imageAlt=''
          />
          {children}
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