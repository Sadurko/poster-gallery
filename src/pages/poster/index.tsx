import * as React from 'react';
import { Link, PageProps, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import SmallImage from '../../components/smallImage';

type DataProps = {
    allMdx: {
        nodes: {
            frontmatter: {
                title: string,
                slug: string
                image_small: {
                  gatsbyImageData: IGatsbyImageData,
                }
            }
            id: string
        }[]
    }
}

const PosterPage = ({ data: {allMdx} }: PageProps<DataProps>) => {


  return (
    <Layout pageTitle="My Posters">
      {
        allMdx.nodes.map(node => (
            <article key={node.id}>
                <h2>
                    <Link to={`/poster/${node.frontmatter.slug}`}>
                        {node.frontmatter.title}
                    </Link>
                </h2>
                
                <SmallImage
                  imageInput={node.frontmatter.image_small}
                  imageAlt={'s'}
                  style={{ width: '25%', height: '25%' }}
                />
            </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          image_small {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default PosterPage