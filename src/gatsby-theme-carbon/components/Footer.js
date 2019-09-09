import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import {
  footer,
  grid,
  nav,
  listItem,
  logo,
  content,
} from './Footer/Footer.module.scss';

const Content = () => (
  <>
    <p>
      By importing the <strong>Footer</strong> component from
      gatsby-theme-carbon, we can supply our own props.
    </p>
    <p>
      The default export from a shadowed component will replace that component
      in the theme.
    </p>
    <p>
      <a href="https://www.gatsbyjs.org/docs/themes/api-reference/#component-shadowing">
        More about component shadowing
      </a>
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
  secondCol: [
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
};

const IBMLogo = () => (
  <svg
    className={logo}
    width="81"
    height="32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fillRule="evenodd">
      <path d="M20,0c8.84,0,16,7.16,16,16s-7.16,16-16,16S4,24.84,4,16S11.16,0,20,0z M20,6
	c5.52,0,10,4.48,10,10s-4.48,10-10,10s-10-4.48-10-10S14.48,6,20,6z M0,13h40v6H0V13z" />
    </g>
  </svg>
);

const Logo = IBMLogo

const CustomFooter = () => <Footer links={links} Content={Content} Logo={Logo} />;

export default CustomFooter;
