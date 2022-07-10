import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const NavLink = ({children, ...delegated}) => {

  return (
      <Wrapper {...delegated}>
          <TextWrapper>
          <span>{children}</span>
          <strong aria-hidden="true">{children}</strong>
          </TextWrapper>
      </Wrapper>
  );
};

const Wrapper = styled.a`
   &:first-of-type {
    color: var(--color-secondary); 
  }
  
  font-size: 1.125rem;
  height: 1.5em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  /* text slide-up elements*/
  overflow-y: hidden;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (prefers-reduced-motion: no-preference) {
  transform: translateY(0%);
  transition: transform 450ms;
  
      ${Wrapper}:hover & {
        transform: translateY(-1.5em);
        transition: transform 300ms;
      }
  }

`;






export default NavLink;