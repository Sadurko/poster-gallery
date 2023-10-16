import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

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
          <div style={{ display: 'flex' }}>
            {
              (image !== undefined)
              ? <GatsbyImage
                  image={image}
                  alt=''
                />
              : <div>Unable to load image</div>
            }


            <div style={{ display: 'block', padding: '2rem', backgroundColor: '#ededed', borderBottomRightRadius: '20px', borderTopRightRadius: '20px', textAlign: 'justify' }}>
              <h4 style={{ textAlign: 'center' }}>{mdx.frontmatter.title}</h4>
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