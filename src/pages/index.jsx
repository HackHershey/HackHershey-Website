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
import coders from "../images/Coders.png"
import coders2 from "../images/Coders2.png"
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
//hiddden (below) used to be invisible
const ContactMobileWrapper = styled.div`
  ${tw`flex flex-wrap justify-between visible md:hidden`}
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

      <AboutSpacer></AboutSpacer>

      <About offset={1}>
        <BlackTitle>About HackHershey</BlackTitle>
        <AboutWrapper>
          <AboutCard title="Our Sophomore Hackathon" bg= "${props => props.bg}">
            HackHershey 2019 will be Hershey High School’s second hackathon.  Students from Across Pennsylvania Will Come Together To Code Their Ideas Into Reality And Compete For Prizes!  All students are welcome - we're beginner friendly!
          </AboutCard>
          <AboutPhotos src={coders} alt="HackHershey 2018 Coders" />
        </AboutWrapper>
        <AboutWrapper>
          <AboutPhotos src={coders2} alt="HackHershey 2018 Coders" />
          <AboutCard title="A Great Start" bg= "${props => props.bg}">
            Last year over 75 students from 25 different schools came to HackHershey to learn, get fresh swag, eat, play Smash, win amazing prizes, and create <a href="https://hackhershey.devpost.com/" target="_blank">amazing projects!</a>  
          </AboutCard>
        </AboutWrapper>
      </About>

      <FAQSpacer></FAQSpacer>

      <DividerMobile bg='chocolate' clipPath="polygon(0 5%, 100% 10%, 100% 90%, 0 85%)" speed={0.4} offset={1.35} factor={1.5}/>
      <FAQ offset={1.8}>
        <Title>FAQ</Title>
        <FAQWrapper>
          <FAQCard title="What is HackHershey" bg= "${props => props.bg}">
            HackHershey is a student-run hackathon for high school and middle school students.  Students will have 10 hours to work together in teams of up to 4 students to bring any idea they want into reality!
          </FAQCard>
          <FAQCard title="Who can Attend" bg= "${props => props.bg}">
            HackHershey welcomes all high school and middle school students to participate! 
          </FAQCard>
          <FAQCard title="What should I bring to HackHershey" bg= "${props => props.bg}">
            Bring your charged laptop, phone, and any other devices you need to work – and don’t forget chargers!  Please make sure any software you may need is already downloaded as well!  Also, wear something comfortable, you will be hacking all day!
          </FAQCard>
          <FAQCard title="How much does Hackhershey cost" bg= "${props => props.bg}">
            HackHershey is completely free for everyone!
          </FAQCard>
          <FAQCard title="Will there be food" bg= "${props => props.bg}">
            Yes! HackHershey will have plenty of free food, Including Breakfast, lunch, dinner, and snacks!
          </FAQCard>
          <FAQCard title="When is HackHershey" bg= "${props => props.bg}">
            HackHershey will take place at Hershey High School on --- TBD!
          </FAQCard>
        </FAQWrapper>
      </FAQ>

      <SponsorSpacer></SponsorSpacer>

      <Sponsors offset={2.1}>
        <BlackTitle>Our Past Sponsors</BlackTitle>
        <SponsorText>Interested in sponsoring HackHershey?  Check out our <a href={Prospectus} target="_blank">sponsorship packet</a> and email our sponsorship coordinator at <a href="mailto:mcronin@hershey.k12.pa.us">mcronin@hershey.k12.pa.us</a></SponsorText>
        <br /><br />
        <td style={{ textAlign:'center'}} onClick={()=> window.open("https://www.hersheys.com", "_blank")}><SponsorsPhotos src={HersheyLogo} alt="The Hershey Company" /></td>
        <SponsorsWrapper>
          <td style={{ textAlign:'center'}} onClick={()=> window.open("http://www.forcollegeprep.com/", "_blank")}><SponsorsPhotos src={CPRLogo} alt="College Preparations and Resources" /></td>
          <td style={{ textAlign:'center'}} onClick={()=> window.open("https://harrisburgu.edu/", "_blank")}><SponsorsPhotos src={HarrisburgUniversityLogo} alt="Harrisburg University" /></td>
        </SponsorsWrapper>
      </Sponsors>

      <ContactSpacer></ContactSpacer>

      <Contact offset={3.2}>
        <Inner>
          <BlackTitle>Contact Us!</BlackTitle>
          <SponsorText>Feel Free To <a href="mailto:mcronin@hershey.k12.pa.us">Reach Out</a> To Us For Any Reason.  We’re Happy To Help!</SponsorText>
          <ContactMobileWrapper>
            <ContactMobileText><a href="mailto:mcronin@hershey.k12.pa.us">Michael Cronin<br></br>President<br></br>📩</a></ContactMobileText>
            <ContactMobileText><a href="mailto:mcronin@hershey.k12.pa.us">Michael Cronin<br></br>Sponsorships<br></br>📩</a></ContactMobileText>
            <ContactMobileText><a href="mailto:mcronin@hershey.k12.pa.us">Michael Cronin<br></br>Advertizing<br></br>📩</a></ContactMobileText>
            <ContactMobileText><a href="mailto:mcronin@hershey.k12.pa.us">Michael Cronin<br></br>Treasurer<br></br>📩</a></ContactMobileText>
            <ContactMobileText><a href="mailto:mcronin@hershey.k12.pa.us">Michael Cronin<br></br>Untitled<br></br>📩</a></ContactMobileText>
            <ContactMobileText><a href="mailto:mcronin@hershey.k12.pa.us">Michael Cronin<br></br>Untitled<br></br>📩</a></ContactMobileText>
          </ContactMobileWrapper>
          <ContactWrapper>
          <ContactCard photo= {Michael} bg= "${props => props.bg}" link = "mailto:mcronin_03@yahoo.com">
          Michael Cronin<br></br>President<br></br>📩
            </ContactCard>
            <ContactCard photo= {Michael} bg= "${props => props.bg}" link = "mailto:mcronin_03@yahoo.com">
            Michael Cronin<br></br>Sponsorships<br></br>📩
            </ContactCard>
            <ContactCard photo= {Michael} bg= "${props => props.bg}" link = "mailto:mcronin_03@yahoo.com">
            Michael Cronin<br></br>Advertizing<br></br>📩
            </ContactCard>
            <ContactCard photo= {Michael} bg= "${props => props.bg}" link = "mailto:mcronin_03@yahoo.com">
            Michael Cronin<br></br>Treasurer<br></br>📩
            </ContactCard>
            <ContactCard photo= {Michael}bg= "${props => props.bg}" link = "mailto:mcronin_03@yahoo.com">
            Michael Cronin<br></br>Untitled<br></br>📩
            </ContactCard>
            <ContactCard photo= {Michael} bg= "${props => props.bg}" link = "mailto:mcronin_03@yahoo.com">
            Michael Cronin<br></br>Untitled<br></br>📩
            </ContactCard>
          </ContactWrapper>
          
          <MapSpacer></MapSpacer>

          <MapWrapper> {/*use about box w/ shadow and the tirangle title*/}
            <MapCard title="See You There!">
              HackHershey will take place at Hershey High School on December XX, 2019
              <br /><br /><br /><br />550 Homestead Rd, Hershey, PA 17033
            </MapCard>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.9623490138765!2d-76.64327938416601!3d40.2765865793817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8a4b34b4586cb%3A0xf9fdad88180af9dc!2s550+Homestead+Rd%2C+Hershey%2C+PA+17033!5e0!3m2!1sen!2sus!4v1562268471292!5m2!1sen!2sus" width="600" height="400" frameborder="0"></iframe>
          </MapWrapper>
        </Inner>
      </Contact>

      <FooterText>
        Made with ❤️️ by The HackHershey Team.{' '} <br></br>
        Check out our <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>.
      </FooterText>
    </Parallax>
  </>
)
export default Index