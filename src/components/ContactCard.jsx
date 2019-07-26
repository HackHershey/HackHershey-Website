import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

{/*const Wrapper = styled.a`
  width: 100%;
  ${tw`relative no-underline rounded-lg pt-12 pb-4 text-white hidden md:block`};
  background: chocolate;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  filter: grayscale(40%);
  &:hover {
    filter: grayscale(0%);
  }
`*/}
const Wrapper = styled.div`
  ${tw`flex flex-col rounded-lg lg:flex-row items-center`};
  background: transparent;
`
const Text = styled.div`
${tw`pt-8`};
${tw`text-midnightBlue uppercase text-xs md:text-lg xl:text-xl tracking-wide font-sans -mt-8 text-center`};
`
const Title = styled.div`
  ${tw`text-midnightBlue uppercase text-xs md:text-lg xl:text-xl tracking-wide font-sans -mt-8 text-center`};
`
const ContactPhotos = styled.img`
  ${tw`rounded-lg m-8 w-auto h-32 md:h-48 lg:h-32`};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`

const ContactCard = ({ photo, title, link, children, bg}) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg='white'>
    <ContactPhotos src={photo} alt="HackHershey 2018 Coders" />
    <Title>{title}</Title>
    <Text>{children}</Text>
  </Wrapper>
)

export default ContactCard

ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  photo: PropTypes.any.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}