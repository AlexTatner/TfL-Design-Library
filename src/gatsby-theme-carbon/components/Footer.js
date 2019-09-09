import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import {
  logo,
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
      <path d="M40,13h-4.3C34.3,5.6,27.8,0,20,0S5.7,5.6,4.3,13H0v6h4.3c1.4,7.4,7.9,13,15.7,13s14.3-5.6,15.7-13H40V13z
	 M20,6c4.5,0,8.3,2.9,9.5,7H10.5C11.7,8.9,15.5,6,20,6z M20,26c-4.5,0-8.3-2.9-9.5-7h19.1C28.3,23.1,24.5,26,20,26z" />
    </g>
  </svg>
);

const Logo = IBMLogo

const CustomFooter = () => <Footer links={links} Content={Content} Logo={Logo} />;

export default CustomFooter;
