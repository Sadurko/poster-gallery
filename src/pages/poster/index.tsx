import React from 'react';
import { Link, PageProps, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import SmallImage from '../../components/smallImage';
import { cardContainer, cardText } from './index.module.css';

type DataProps = {
    allMdx: {
        nodes: {
            frontmatter: {
                title: string,
                slug: string
                image_small: {
                  gatsbyImageData: IGatsbyImageData,
                },
                image_alt: string;
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
          <div className={cardContainer} key={node.id}>
            <Link to={`/poster/${node.frontmatter.slug}`}>
              <SmallImage
                imageInput={node.frontmatter.image_small}
                imageAlt={node.frontmatter.image_alt}
              />

              <div className={cardText}>
                {node.frontmatter.title}
              </div>
            </Link>
          </div>
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