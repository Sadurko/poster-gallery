import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import {
  paragraph,
  header
} from './about.module.css';

const AboutPage = () => {
  return (
    <Layout>
      <div style={{ margin: 'auto', width: '80%' }}>
        <h1 className={header}>HELLO</h1>

        <p className={paragraph}>
          &emsp;&emsp;My name is Samuel Ďurkovic. I'm a dedicated programmer with a passion for design.
          While my academic background is in the field of robotics and cybernetics, I find joy
          in channeling my creativity into crafting unique UIs and designs.
        </p>
        
        <p className={paragraph}>
          &emsp;&emsp;As a programmer, I appreciate the power of logical thinking and problem-solving.
          This background complements my design work, allowing me to bring a structured and
          technical approach to my poster creations. It's the fusion of art and technology
          that inspires me and makes each project unique.
        </p>
      </div>
    </Layout>
  )
}


// changes text in browser tab
export const Head = () => <Seo title='About Me'/>

export default AboutPage