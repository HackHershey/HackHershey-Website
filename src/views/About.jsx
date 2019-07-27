import React from 'react'
import PropTypes from 'prop-types'
import { Divider, DividerMiddle } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const About = ({ children, offset }) => (
  <>
    {/*<DividerMiddle
      bg="linear-gradient(to left, white 0%, white 100%)"
      speed={0.1}
      offset={`.8`}
      factor={1.35}
    />*/}
    <Content speed={.7} offset={.85} factor={2}>
      <Inner>{children}</Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
      {/*<UpDown>
        <SVG icon="box" width={6} fill={colors.black} left="85%" top="75%" />
        <SVG icon="upDown" width={8} fill={colors.yellow} left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke={colors.white} left="25%" top="5%" />
        <SVG icon="circle" hiddenMobile width={24} fill={colors.midnightBlue} left="10%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} fill={colors.green} left="20%" top="90%" />
        <SVG icon="triangle" width={12} stroke={colors.teal} left="90%" top="30%" />
        <SVG icon="circle" width={16} fill={colors.yellow} left="70%" top="90%" />
        <SVG icon="triangle" hiddenMobile width={16} stroke={colors.teal} left="18%" top="75%" />
        <SVG icon="circle" width={6} fill={colors.white} left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} fill={colors.green} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors.black} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={colors.pink} left="85%" top="60%" />
      <SVG icon="box" width={6} fill={colors.chocolate} left="10%" top="10%" />
      <SVG icon="box" width={12} fill={colors.chocolate} left="29%" top="26%" />
      <SVG icon="hexa" width={16} stroke={colors.red} left="75%" top="30%" />
      <SVG icon="hexa" width={10} stroke={colors.chocolate} left="80%" top="70%" />*/}
    </Divider>
  </>
)

export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
