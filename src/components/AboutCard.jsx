import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-sm relative no-underline rounded-lg pt-12 pb-4 text-white`};
  background: transparent;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: .95;
  &:hover {
    opacity: 1;
  }
`
const Text = styled.div`
${tw`font-sans pt-4 text-black text-xl capitalize`};
line-height: 1.625;
`
const Title = styled.div`
  ${tw`text-midnightBlue uppercase text-md md:text-lg xl:text-xl tracking-wide font-sans -mt-8`};
`

const AboutCard = ({ title, link, children, bg }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg='white'>
    <Title>{title}</Title>
    <Text>{children}</Text>
  </Wrapper>
)

export default AboutCard

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
