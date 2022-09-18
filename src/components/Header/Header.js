import React from 'react';
import { HeaderStyled } from './Header.styled';

function Header() {

  const navItems = [
    'About',
    'Skills',
    'Projects',
    'Contact',
  ]
  return (
    <HeaderStyled>
      <h1>Doug Carter</h1>
      <nav>
        <ul>
          {navItems.map((navItem) => {
            return (
              <li>
                <a href={`#${navItem}`}>{navItem}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    </HeaderStyled>
  )
}

export default Header;