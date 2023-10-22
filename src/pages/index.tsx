// Step 1: Import React
import React, { useEffect } from 'react';
import Seo from '../components/seo';


const IndexPage = () => {

  // some pages load scrolled down a bit, this moves them back up
  useEffect(() => {
    setTimeout(() => window.scrollTo(...[0, 0]), 0);
  }, []);
  
  return (
    <body onLoad={() => console.log('loaded')}>
      <p style={{ height: '300px', backgroundColor: 'lightblue' }}>Test</p>
      <p style={{ height: '3000px', backgroundColor: 'lightGray' }}>Showcase of some posters made by me</p>
    </body>
  )
}

// export for gatsby
export const Head = () => <Seo title='Home Page'/>

export default IndexPage