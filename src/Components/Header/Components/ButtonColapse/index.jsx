/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { HamburgerButton, Line, NavRight, NavElements, Option } from './styles';

const ButtonCollapse = (props) => {
  const {
    sections,
    handleActivate,
    sectionsPosition
  } = props;
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    setOpen(!open);
  }

  return (
    < >
      <HamburgerButton open={open} onClick={handleButtonClick}>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </HamburgerButton>
      <NavRight open={open}>
        <NavElements>
          {sections.map((e, i) => (
            <Option 
              key={i}
              open={open}
              onClick={() => {
                window.scrollTo( 0, sectionsPosition[e.id.substring(1)].distanceToTop )
                handleButtonClick()
              }}
              active={handleActivate(e.id.substring(1))}
            >
              {e.label}
            </Option>
          ))}
        </NavElements>
      </NavRight>
    </ >
  );
}

export default ButtonCollapse;
