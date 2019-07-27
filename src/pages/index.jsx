import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import FAQCard from '../components/FAQCard'
import AboutCard from '../components/AboutCard'
import ContactCard from '../components/ContactCard'
import MapCard from '../components/MapCard'

//Elements
import Inner from '../elements/Inner'
import { Title, BlackTitle, BigTitle, Subtitle } from '../elements/Titles'
import { Divider, DividerMobile } from '../elements/Dividers'

// Views
import Hero from '../views/Hero'
import About from '../views/About'
import FAQ from '../views/FAQ'
import Sponsors from '../views/Sponsors'
import Contact from '../views/Contact'

//photos
import CPRLogo from '../images/CPRLogo.png'
import HarrisburgUniversityLogo from '../images/HarrisburgUniversityLogo.jpg'
import HersheyLogo from '../images/HersheyLogo.png'
//import coders from "../images/coders.png"
//import coders2 from "../images/coders2.png"
import Prospectus from "../images/SponsorshipProspectus.pdf"

import Michael from "../images/Michael.png"

import avatar from '../images/avatar.jpg'

const AboutWrapper = styled.div`
  ${tw`flex flex-wrap justify-between`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`
const FAQWrapper = styled.div`
  ${tw`flex flex-wrap justify-between`};
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`
const SponsorsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between`};
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0;
  }
  @media (max-width: 900px) {
    grid-template-columns: 2;
    grid-gap: 0rem;
  }
`
const ContactWrapper = styled.div`
  ${tw`flex flex-wrap justify-between invisible md:visible`};
  display: grid;
  grid-gap: 0rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0;
    margin-top: -4rem;
  }
`
const ContactMobileWrapper = styled.div`
  ${tw`flex flex-wrap justify-between visible md:invisible`};
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0;
    margin-top: -6rem;
  }
`
const MapWrapper = styled.div`
  ${tw`flex flex-wrap justify-between invisible md:visible`};
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`
{/*spacers are named after section beneth them...ik this is garbage code. sorry.*/}
const AboutSpacer = styled.div`
${tw`flex flex-wrap justify-between sm:py-32 md:p-0 lg:py-12`};
display: block;
@media (max-width: 1200px) {
  grid-gap: 3rem;
}
@media (max-width: 900px) {
  grid-template-columns: 1fr;
  grid-gap: 2rem;
}
`
const FAQSpacer = styled.div`
${tw`flex flex-wrap justify-between sm:py-40 md:p-0 lg:py-8`};
display: block;
@media (max-width: 1200px) {
  grid-gap: 3rem;
}
@media (max-width: 900px) {
  grid-template-columns: 1fr;
  grid-gap: 2rem;
}
`
const SponsorSpacer = styled.div`
${tw`flex flex-wrap justify-between sm:py-24 md:py-4 lg:py-8`};
display: block;
@media (max-width: 1200px) {
  grid-gap: 3rem;
}
@media (max-width: 900px) {
  grid-template-columns: 1fr;
  grid-gap: 2rem;
}
`
const ContactSpacer = styled.div`
${tw`flex flex-wrap justify-between pt-8 md:p-8 lg:py-10`};
display: block;
@media (max-width: 1200px) {
  grid-gap: 3rem;
}
@media (max-width: 900px) {
  grid-template-columns: 1fr;
  grid-gap: 2rem;
}
`
const MapSpacer = styled.div`
${tw`flex flex-wrap justify-between sm:py-24 md:p-10`};
display: block;
@media (max-width: 1200px) {
  grid-gap: 3rem;
}
@media (max-width: 900px) {
  grid-template-columns: 1fr;
  grid-gap: 2rem;
}
`
const FooterSpacer = styled.div`
${tw`flex flex-wrap justify-between sm:py-0 md:p-64 md:-mt-64`};
display: block;
@media (max-width: 1200px) {
  grid-gap: 3rem;
}
@media (max-width: 900px) {
  grid-template-columns: 1fr;
  grid-gap: 2rem;
}
`

const AboutPhotos = styled.img`
  ${tw` rounded-lg shadow-lower mt-4 w-full mb-4 `};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
&:hover {
  opacity
}
`
const SponsorsPhotos = styled.img`
  ${tw` rounded-lg mt-4 w-1/2 mb-4 `};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`

const SponsorText = styled.div`
  ${tw`text-midnightBlue text-md md:text-lg xl:text-xl tracking-wide font-sans mb-4`};
`
const ContactMobileText = styled.div`
${tw`pt-8`};
${tw`text-midnightBlue uppercase text-xs md:text-lg xl:text-xl tracking-wide font-sans -mt-8 text-center`};
`
const FooterText = styled.footer`
  ${tw`text-center text-white absolute pin-b w-full pb-6 pt-4 md:pb-6 font-sans text-md lg:text-lg`};
  background: midnightBlue;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  `

//beloww this is old
const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`
//above this is old

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle style={{ textAlign:'center'}}>HackHershey</BigTitle>
        <Subtitle style={{ textAlign:'center'}}>Hershey High School's very own hackathon!<br /><br /> Date TBD</Subtitle>
      </Hero>

      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
            Emoji into my speech to better express myself. Winky face.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel
          every day. My mother cried the day I was born because she knew she’d never be prettier than me. You should
          make me your campaign manager. I was born for politics. I have great hair and I love lying. Captain? The kids
          want to know where Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that all
          right?
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> or find me on other platforms:{' '}
            <a href="https://dribbble.com/LekoArts">Dribbble</a> &{' '}
            <a href="https://www.instagram.com/lekoarts.de/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">GitHub Repository</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)
export default Index