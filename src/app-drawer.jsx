import React, { useState } from 'react';

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
