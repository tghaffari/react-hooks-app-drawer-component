import React, { useState } from 'react';

export default function AppDrawer() {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  function MenuIcon() {
    return <i className="fa-solid fa-bars menu-bars" onClick={toggleMenu}></i>;
  }

  function DrawerComponent() {
    return (
      <>
        <div className='background' onClick={toggleMenu}></div>
        <div className='app-drawer'>
          <div className='drawer-components'>
            <h3>Choose a Game</h3>
            <p onClick={toggleMenu}>The Legend of Zelda</p>
            <p onClick={toggleMenu}>A Link to the Past</p>
            <p onClick={toggleMenu}>Ocarina of Time</p>
            <p onClick={toggleMenu}>The Wind Waker</p>
            <p onClick={toggleMenu}>Breath of the Wild</p>
          </div>
        </div>
      </>

    );
  }

  return (
    <>
      {!openMenu && <MenuIcon />}
      {openMenu && <DrawerComponent />}
    </>

  );

}

// export default function AppDrawer({ menuHeading, menuItems }) {
//   const [isOpen, setIsOpen] = useState(false);

//   function toggleOpen() {
//     setIsOpen(!isOpen);
//   }

//   function displayItem(item) {
//     toggleOpen();
//     console.log('Displaying', item);
//   }

//   return (
//     <>
//       <MenuIcon onClick={toggleOpen} />
//       <Backdrop isDrawn={isOpen} onClick={toggleOpen} />
//       <Menu isOpen={isOpen}>
//         <h3 className="menu-heading">
//           {menuHeading}
//         </h3>
//         <ul className="menu-items">
//           {menuItems.map((item) => (
//             <li key={item} className="menu-item" onClick={() => displayItem(item)}>
//               {item}
//             </li>
//           ))}
//         </ul>
//       </Menu>
//     </>
//   );
// }

// function MenuIcon({ onClick }) {
//   return (
//     <i onClick={onClick} className="menu-icon fa fa-bars" />
//   );
// }

// function Menu({ isOpen, children }) {
//   const className = isOpen ? 'menu-drawer is-open' : 'menu-drawer';
//   return (
//     <div className={className}>
//       {children}
//     </div>
//   );
// }

// function Backdrop({ isDrawn, onClick }) {
//   const className = isDrawn ? 'menu-shade is-drawn' : 'menu-shade';
//   return (
//     <div className={className} onClick={onClick} />
//   );
// }
