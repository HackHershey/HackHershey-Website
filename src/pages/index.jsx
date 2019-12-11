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
import MapMobileCard from '../components/MapMobileCard'

//Elements
import Inner from '../elements/Inner'
import { Title, BlackTitle, BigTitle, Subtitle } from '../elements/Titles'
import { DividerMobile } from '../elements/Dividers'

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
import Pieter from "../images/Pieter.png"
import Nick from "../images/Nick.png"
import Will from "../images/Will.png"

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
  grid-gap: 1rem;
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
const MapMobileWrapper = styled.div`
  ${tw`flex flex-wrap justify-between md:hidden pt-12`};
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
`

{/*spacers are named after section beneth them...ik this is garbage code. sorry.*/}
const AboutSpacer = styled.div`
${tw`flex flex-wrap justify-between sm:py-40 md:p-0 lg:py-12`};
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
${tw`flex flex-wrap justify-between sm:py-48 md:p-0 lg:py-8`};
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
${tw`flex flex-wrap justify-between sm:py-0 md:py-4 lg:py-8`};
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
${tw`flex flex-wrap justify-between pt-64 md:py-0 lg:p-8 xl:pt-0`};
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
${tw`flex flex-wrap justify-between sm:py-24 md:p-24`};
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
${tw`pt-24`};
${tw`text-midnightBlue uppercase text-xs md:text-lg xl:text-xl tracking-wide font-sans -mt-8 text-center`};
`
const FooterText = styled.footer`
  ${tw`text-center text-white absolute pin-b w-full pb-6 pt-4 md:pb-6 font-sans text-md lg:text-lg`};
  background: midnightBlue;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  `

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle style={{ textAlign:'center'}}>HackHershey</BigTitle>
        <Subtitle style={{ textAlign:'center'}}>Hershey High School's very own hackathon!<br /><br />December 14, 2019<br /><br />8am - 9pm</Subtitle>
        <Subtitle style={{ textAlign:'center'}}><a href="https://hackhershey.typeform.com/to/FeBqx2" target="_blank" rel="noopener">Sign Up Now!</a></Subtitle>
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
            Last year over 75 students from 20 different schools came to HackHershey to learn, code, eat, play Smash, win amazing prizes, and create <a href="https://hackhershey.devpost.com/" target="_blank" rel="noopener">amazing projects!</a>  
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
            HackHershey will take place at Hershey High School on Saturday, December 14, 2019!
          </FAQCard>
        </FAQWrapper>
      </FAQ>

      <SponsorSpacer></SponsorSpacer>

      <Sponsors offset={2.1}>
        <BlackTitle>Our Past Sponsors</BlackTitle>
        <SponsorText>Interested in sponsoring HackHershey?  Check out our <a href={Prospectus} target="_blank">sponsorship packet</a> and email our <a href="mailto:pverbeek@hershey.k12.pa.us" target="_blank">sponsorship coordinator</a>.</SponsorText>
        <br /><br />
        <td style={{ textAlign:'center'}} onClick={()=> window.open("https://www.hersheys.com", "_blank", "noopener")}><SponsorsPhotos src={HersheyLogo} alt="The Hershey Company" /></td>
        <SponsorsWrapper>
          <td style={{ textAlign:'center'}} onClick={()=> window.open("http://www.forcollegeprep.com/", "_blank", "noopener")}><SponsorsPhotos src={CPRLogo} alt="College Preparations and Resources" /></td>
          <td style={{ textAlign:'center'}} onClick={()=> window.open("https://harrisburgu.edu/", "_blank", "noopener")}><SponsorsPhotos src={HarrisburgUniversityLogo} alt="Harrisburg University" /></td>
        </SponsorsWrapper>
      </Sponsors>

      <ContactSpacer></ContactSpacer>

      <Contact offset={3.2}>
        <Inner>
          <BlackTitle>Contact Us!</BlackTitle>
          <SponsorText>Meet our Leadership Team!  Feel Free To <a href="mailto:hackhershey@gmail.com">Reach Out</a> To Us For Any Reason.  We’re Happy To Help!</SponsorText>
          <ContactMobileWrapper>
            <ContactMobileText><a href="mailto:mcronin@hershey.k12.pa.us">Michael Cronin<br></br>President<br></br>📩</a></ContactMobileText>
            <ContactMobileText><a href="mailto:pverbeek@hershey.k12.pa.us">Pieter Verbeek<br></br>Sponsorships<br></br>📩</a></ContactMobileText>
            <ContactMobileText><a href="mailto:nmartin@hershey.k12.pa.us">Nick Martin<br></br>Publicity<br></br>📩</a></ContactMobileText>
            {/*<ContactMobileText><a href="mailto:mcronin@hershey.k12.pa.us">Will Miller<br></br>Treasurer<br></br>📩</a></ContactMobileText>
            <ContactMobileText><a href="mailto:mcronin@hershey.k12.pa.us">Paul Ioffreda<br></br>Undecided<br></br>📩</a></ContactMobileText>
            <ContactMobileText><a href="mailto:mcronin@hershey.k12.pa.us">David Randall<br></br>Undecided<br></br>📩</a></ContactMobileText>*/}
          </ContactMobileWrapper>
          <MapMobileWrapper>
            <MapMobileCard title="See You There!">
              HackHershey will take place at Hershey High School on December 14, 2019
              <br /><br /><br /><br />550 Homestead Rd, Hershey, PA 17033
            </MapMobileCard>
          </MapMobileWrapper>
          <ContactWrapper>
            <ContactCard photo= {Michael} bg= "${props => props.bg}" link = "mailto:mcronin@hershey.k12.pa.us">
              Michael Cronin<br></br>President<br></br>📩
            </ContactCard>
            <ContactCard photo= {Pieter} bg= "${props => props.bg}" link = "mailto:pverbeek@hershey.k12.pa.us">
              Pieter Verbeek<br></br>Sponsorships<br></br>📩
            </ContactCard>
            <ContactCard photo= {Nick} bg= "${props => props.bg}" link = "mailto:nmartin@hershey.k12.pa.us">
              Nick Martin<br></br>Publicity<br></br>📩
            </ContactCard>
            {/*<ContactCard photo= {Will} bg= "${props => props.bg}" link = "mailto:mcronin_03@yahoo.com">
              Will Miller<br></br>Treasurer<br></br>📩
            </ContactCard>
            <ContactCard photo= {Michael}bg= "${props => props.bg}" link = "mailto:mcronin_03@yahoo.com">
              Paul Ioffreda<br></br>Undecided<br></br>📩
            </ContactCard>
            <ContactCard photo= {Michael} bg= "${props => props.bg}" link = "mailto:mcronin_03@yahoo.com">
              David Randall<br></br>Undecided<br></br>📩
          </ContactCard>*/}
          </ContactWrapper>
          
          <MapSpacer></MapSpacer>

          <MapWrapper>
            <MapCard title="See You There!">
              HackHershey will take place at Hershey High School on December 14, 2019
              <br /><br /><br /><br />550 Homestead Rd, Hershey, PA 17033
            </MapCard>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.9623490138765!2d-76.64327938416601!3d40.2765865793817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8a4b34b4586cb%3A0xf9fdad88180af9dc!2s550+Homestead+Rd%2C+Hershey%2C+PA+17033!5e0!3m2!1sen!2sus!4v1562268471292!5m2!1sen!2sus" width="600" height="400" frameborder="0"></iframe>
          </MapWrapper>

          <MapMobileWrapper>
            <MapMobileCard title="See You There!">
              HackHershey will take place at Hershey High School on December 14, 2019
              <br /><br /><br /><br />550 Homestead Rd, Hershey, PA 17033
            </MapMobileCard>
          </MapMobileWrapper>

        </Inner>
      </Contact>


      <FooterText>
        Made with ❤️️ by The HackHershey Team.{' '} <br></br>
        Check out our <a href="https://github.com/mcronin03/HackHershey-Website" target="_blank" rel="noopener">Github Repository</a>.
      </FooterText>
    </Parallax>
  </>
)
export default Index