import React from 'react'
import {useTheme} from "next-themes";
import {Switch} from "@nextui-org/react";
import { MoonIcon } from '../assets/MoonIcon';
import { SunIcon } from '../assets/SunIcon';  
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    Link,
    Button
  } from "@nextui-org/react";

  export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme('dark')

    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    };
  
  
    return (
      <div>
        <Switch
        defaultSelected={theme === 'dark'}
        size="lg"
        color="primary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
        onChange={toggleTheme} // Attach the toggleTheme function to the onChange event
      >
        {/* {theme === 'dark' ? 'Light mode' : 'Dark mode'} */}
      </Switch>
      </div>
    )
  };

const Header = () => {
    return (
        <Navbar shouldHideOnScroll isBordered isBlurred>
          <NavbarBrand>
            <p className="font-bold text-inherit">Aazim Anish</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Projects
              </Link>
            </NavbarItem>
            
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                About
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <ThemeSwitcher />
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Resume
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      );
}

export default Header