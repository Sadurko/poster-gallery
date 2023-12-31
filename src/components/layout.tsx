import React, { ReactNode, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
    center,
    container,
    navContainer,
    navLinkItem,
    navLinkText,
    siteTitle
} from './layout.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

type Props = {
    children?: ReactNode
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      imageSharp(fixed: {originalName: {eq: "podpis_2.png"}}) {
        gatsbyImageData
      }
    }
  `)

  const image = getImage(data.imageSharp.gatsbyImageData);

  return (
    <div className={center}>
      <div className={container}>
        <header className={siteTitle}>
          {
            (image !== undefined)
            ? <GatsbyImage
                image={image}
                alt='logo'
                style={{ width: '1000px' }}
              />
            : data.site.siteMetadata.title.toUpperCase()
          }
        </header>
        
        <nav>
          <ul className={navContainer}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>HOME</Link>
            </li>

            <li className={navLinkItem}>
              <Link to="/poster" className={navLinkText}>POSTERS</Link>
            </li>

            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>ABOUT</Link>
            </li>
          </ul>
        </nav>
        
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout