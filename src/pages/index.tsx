// Step 1: Import React
import React from 'react';
import Seo from '../components/seo';


const IndexPage = () => {
  return (
    <p>Showcase of some posters made by me</p>
  )
}

// export for gatsby
export const Head = () => <Seo title='Home Page'/>

export default IndexPage