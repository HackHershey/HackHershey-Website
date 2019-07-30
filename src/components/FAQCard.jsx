import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-sm relative no-underline rounded-lg pt-8 px-8 pb-4 text-white`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: .95;
  &:hover {
    opacity: 1;
  }
`
const Text = styled.div`
  ${tw`opacity-75 font-sans text-xxs lg:text-s xl:text-base text-midnightBlue`};
`
const Title = styled.div`
  ${tw`text-midnightBlue uppercase text-sm lg:text-lg xl:text-xl tracking-wide font-sans -mt-8`};
`

const FAQCard = ({ title, link, children, bg }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg='white'>
    <Title>{title}</Title>
    <Text>{children}</Text>
  </Wrapper>
)

export default FAQCard

FAQCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
