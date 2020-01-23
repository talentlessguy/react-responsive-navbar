import React, { useState } from 'react'
import { css } from '@emotion/core'

const MenuIcon = ({ onClick, icon }: { onClick: (e: React.MouseEvent<HTMLElement>) => void; icon: any }) => (
  <div role="button" onClick={onClick}>
    {icon}
  </div>
)

const largeMenuCss = (changeMenuOn: number) => css`
  display: block;
  text-align: center;
  @media (max-width: ${changeMenuOn}) {
    display: none;
  }
`

const smallMenuCss = (changeMenuOn: number) => css`
  display: none;
  text-align: center;
  @media (max-width: ${changeMenuOn}) {
    display: block;
  }
`

const Menu = ({
  menu,
  largeMenuClassName,
  smallMenuClassName,
  changeMenuOn,
  menuOpenButton,
  menuCloseButton
}: {
  menu: any
  largeMenuClassName?: string
  smallMenuClassName?: string
  changeMenuOn: number
  menuOpenButton: any
  menuCloseButton: any
}) => {
  const [showMenu, setShowMenu] = useState(false)
  const handleClick = () => setShowMenu(!showMenu)

  return (
    <div>
      <div className={`${largeMenuCss(changeMenuOn)} ${largeMenuClassName}`}>{menu}</div>
      <div className={`${smallMenuCss} ${smallMenuClassName}`}>
        {!showMenu ? (
          <MenuIcon onClick={handleClick} icon={menuOpenButton} />
        ) : (
          <MenuIcon onClick={handleClick} icon={menuCloseButton} />
        )}
        {showMenu ? <div>{menu}</div> : null}
      </div>
    </div>
  )
}

export default Menu
