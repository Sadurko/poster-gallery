import React, { useEffect } from 'react';
import { Link, PageProps, graphql } from 'gatsby';
import Seo from '../../components/seo';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import ImageCard from '../../components/imageCard';
import { gridContainer } from './index.module.css';

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

  // some pages load scrolled down a bit, this moves them back up
  useEffect(() => {
    setTimeout(() => window.scrollTo(...[0, 0]), 0);
  }, []);
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <div className={gridContainer}>
        {
          allMdx.nodes.map(node => (
            <Link to={`/poster/${node.frontmatter.slug}`} key={node.id}>
              <ImageCard
                imageInput={node.frontmatter.image_small}
                imageAlt={node.frontmatter.image_alt}
                text={node.frontmatter.title}
              />
            </Link>
          ))
        }
      </div>
    </div>
  )
}

// export query to render on web page
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