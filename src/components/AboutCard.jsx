import styled from 'styled-components'
import tw from 'tailwind.macro'
import { rotateAnimation } from '../styles/animations'
import triangle from '../images/triangle.svg'
import blackTriangle from '../images/blackTriangle.svg'

export const Title = styled.h1`
  ${tw`text-4xl lg:text-5xl font-sans text-white mb-8 tracking-wide relative inline-block`};
  
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    ${rotateAnimation('4s')};
    left: -60px;
    top: 5px;
  }
`
export const BlackTitle = styled.h1`
  ${tw`text-4xl lg:text-5xl font-sans text-chocolate mb-8 tracking-wide relative inline-block`};
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${blackTriangle});
    position: absolute;
    background-size: 40px;
    ${rotateAnimation('4s')};
    left: -60px;
    top: 5px;
  }
`
export const BigTitle = styled.h1`
  ${tw`text-5xl md:text-6xl font-sans text-white mb-6 tracking-wide`};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`
export const Subtitle = styled.p`
  ${tw`text-2xl lg:text-4xl font-sans text-white mt-8 tracking-wide`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  justify-content: center;
`
