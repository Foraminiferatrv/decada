import styled from 'styled-components'

import { grayscalePalette, mainContentWidth, mainPalette } from '../../styles/constants'
import Link from 'next/link'
// import { NavLink } from 'react-router-dom'
export const Navbar = styled.nav`

  height: 55px;
  display: flex;
  justify-content: center;
`
export const NavbarWrapper = styled.div`
  max-width: ${mainContentWidth};
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: 100%;
`
export const NavlinksWrapper = styled.div`
  padding: 10px 88px;
  display: flex;
  gap: 5px;
`

export const NavItem = styled(Link)`
  width: 110px;
  height: 20px;
  padding: 16px 30px;
  border-radius: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${grayscalePalette[600]};
  font-weight: 600;
  text-decoration: none;

  :hover {
    background: ${mainPalette[200]};
  }

  &.active {
    background: ${mainPalette[300]};
  }
`

/* ${({ isActive }: NavItemProps) =>
    isActive &&
    `
    background: ${mainPalette[300]};
    text-decoration: underscore;
    `}; */
