// Import react, react-dom and styling
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

// Import assets
import logo from '../../assets/global/logo.png';
import { menuItems } from '../../sitecontent/HeaderMenuContent.ts';
import type { menuItem } from '../../sitecontent/HeaderMenuContent.ts';

// Import functions
import { navigateToPath } from '../../functions/navigateToPath.ts';

// Built a custom navigation bar and system since the primereact ones didn't offer the functionality that the site needed

// Variable to check if a menu item has a submenu
const hasSubmenu = (item: menuItem) => Boolean(item.subSection?.length);

const Header: React.FC = () => {

  // Navigation hook
  const navigate = useNavigate();

  // When a menu item is clicked, it navigates to the selected path
  const handleNavClick = (event: React.MouseEvent<HTMLButtonElement>, path: string) => {
    event.currentTarget.blur();
    navigateToPath(navigate, path);
  };

  return (
    <div className='header-structure'>
      <img src={logo} alt='Linces Softco logo' className='header-logo'/>
      <div className='header-menu'>
        <div className='header-menu-items'>
          {/* For every menu items */}
          {menuItems.map((item) => {
            const itemHasSubmenu = hasSubmenu(item);
            return (
              <div key={item.key} className='header-menu-item'>

                {/* Build the main button */}
                <button className='header-menu-trigger' onClick={(event) => handleNavClick(event, item.path)}>
                  <div className={item.icon}/>
                  <div>{item.label}</div>
                  {itemHasSubmenu && <div className='pi pi-angle-down'/>}
                </button>

                {/* Builds a submenu section if there is one */}
                {itemHasSubmenu && (
                <div className='header-submenu-panel'>
                  
                  {/* For every submenu section */}
                  {item.subSection?.map((subItem) => (
                    <div key={subItem.title} className='header-submenu-section'>
                      <div className='header-submenu-title'>{subItem.title}</div>

                      {/* For every submenu item */}
                      {subItem.items.map((subItem) => (
                        <div className='header-submenu-list' key={subItem.label}>
                          <button className='header-submenu-link' onClick={(event) => handleNavClick(event, subItem.path)}>
                            {subItem.icon && <div className={subItem.icon}/>}
                            <div>{subItem.label}</div>
                          </button>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;