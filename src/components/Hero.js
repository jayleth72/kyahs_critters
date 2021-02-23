import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const query = graphql`
  {
    person: file(relativePath: {eq: "person.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = ({ showKyah }) => {
  const {person} = useStaticQuery(query)
  return <header className="hero">
    {
      showKyah && (
        <Image fluid={person.childImageSharp.fluid} className="hero-person" />
      )
    }
    
  </header>
}

export default Hero
