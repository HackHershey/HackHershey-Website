import React from 'react'
import PropTypes from 'prop-types'
import { Divider, DividerMobileFooter } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const FAQ = ({ children, offset }) => (
  <>
    <Divider bg='chocolate' clipPath="polygon(0 4%, 100% 16%, 100% 94%, 0 82%)" speed={0.4} offset={1.65} factor={.95}/>
    <Divider speed={.1} offset={offset}>
      {/*<UpDown>
        <SVG icon="box" hiddenMobile width={6} fill={colors.blue} left="50%" top="75%" />
        <SVG icon="upDown" hiddenMobile width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
        <SVG icon="upDown" hiddenMobile width={24} fill={colors.orange} left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} fill={colors.purple} left="5%" top="80%" />
        <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
        <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
        <SVG icon="upDown" hiddenMobile width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="arrowUp" width={6} fill={colors.yellow} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
      <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
      <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />*/}
    </Divider>
    <Content speed={0.5} offset={1.6}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default FAQ

FAQ.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
