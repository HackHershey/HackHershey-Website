import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-lower relative no-underline rounded-lg pt-8 px-8 pb-4 text-white md:hidden`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`
const Text = styled.div`
  ${tw`font-sans text-sm text-white text-center`};
`
const Title = styled.div`
  ${tw`text-white uppercase text-sm tracking-wide font-sans text-center`};
`

const MapMobileCard = ({ title, link, children, bg }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg='chocolate'>
    <Title>{title}</Title>
    <Text>{children}</Text>
  </Wrapper>
)

export default MapMobileCard

MapMobileCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
