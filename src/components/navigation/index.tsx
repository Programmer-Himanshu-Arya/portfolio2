import { MobileNav } from './mobile-nav';
import NavTabs from './nav-tabs';

export type NavItem = {
  label: string;
  pathname: string;
};

const NavItems: NavItem[] = [
  {
    label: 'About Us',
    pathname: '/about-me',
  },
  {
    label: 'Skills',
    pathname: '/resume',
  },
  {
    label: 'Projects',
    pathname: '/projects',
  },
  {
    label: 'Contact Us',
    pathname: '/contact',
  },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-center bg-transparent">
      <NavTabs tabs={NavItems} />
      <MobileNav tabs={NavItems} />
    </nav>
  );
}
