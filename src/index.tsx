import React, { useState, Fragment } from 'react'
import styled from '@emotion/styled'

const MenuIcon = ({ onClick, icon }: { onClick: (e: React.MouseEvent<HTMLElement>) => void; icon: any }) => (
  <div role="button" onClick={onClick}>
    {icon}
  </div>
)

const LargeMenu = styled.div`
  display: block;
  text-align: center;
  @media (max-width: ${(props: any) => props.changeMenuOn}) {
    display: none;
  }
`

const SmallMenu = styled.div`
  display: none;
  text-align: center;
  @media (max-width: ${(props: any) => props.changeMenuOn}) {
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
  changeMenuOn: string
  menuOpenButton: any
  menuCloseButton: any
}) => {
  const [showMenu, setShowMenu] = useState(false)
  const handleClick = () => setShowMenu(!showMenu)

  return (
    <Fragment>
      <LargeMenu changeMenuOn={changeMenuOn}>{menu}</LargeMenu>
      <SmallMenu className={smallMenuClassName}>
        {!showMenu ? (
          <MenuIcon onClick={handleClick} icon={menuOpenButton} />
        ) : (
          <MenuIcon onClick={handleClick} icon={menuCloseButton} />
        )}
        {showMenu ? <div>{menu}</div> : null}
      </SmallMenu>
    </Fragment>
  )
}

export default Menu
