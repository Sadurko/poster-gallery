// Step 1: Import React
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';


const IndexPage = () => {
  return (
    <Layout pageTitle='Home page'>
      <p>Showcase of some posters made by me</p>
    </Layout>
  )
}

// export for gatsby
export const Head = () => <Seo title='Home Page'/>

export default IndexPage