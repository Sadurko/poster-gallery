import React, { FC, ReactNode } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
    container,
    heading,
    navContainer,
    navLinkItem,
    navLinkText,
    siteTitle
} from './layout.module.css';

type Props = {
    children?: ReactNode,
    pageTitle: string,
}

const Layout = ({ pageTitle, children }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title.toUpperCase()}</header>
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
        {/* <h1 className={heading}>{pageTitle}</h1> */}
        
        {children}
      </main>
    </div>
  )
}

export default Layout