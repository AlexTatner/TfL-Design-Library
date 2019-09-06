import React, { useContext } from 'react';
import cx from 'classnames';
import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import { nav, open, divider, link, linkDisabled } from './Switcher.module.scss';

const Switcher = ({ children }) => {
  const { switcherIsOpen } = useContext(NavContext);

  return (
    <nav
      className={cx(nav, { [open]: switcherIsOpen })}
      aria-label="IBM Design ecosystem navigation"
      aria-expanded={switcherIsOpen}
      tabIndex="-1"
    >
      <ul>{children}</ul>
    </nav>
  );
};

export const SwitcherDivider = props => (
  <li className={divider}>
    <span {...props} />
  </li>
);

export const SwitcherLink = ({
  disabled,
  children,
  href: hrefProp,
  ...rest
}) => {
  const href = disabled || !hrefProp ? undefined : hrefProp;
  const className = disabled ? linkDisabled : link;
  const { switcherIsOpen } = useContext(NavContext);

  return (
    <li>
      <a
        aria-disabled={disabled}
        role="button"
        tabIndex={switcherIsOpen ? 0 : '-1'}
        className={className}
        href={href}
        {...rest}
      >
        {children}
      </a>
    </li>
  );
};

// https://css-tricks.com/using-css-transitions-auto-dimensions/
// Note: if you change this, update the max-height in the switcher stylesheet
const DefaultChildren = () => (
  <>
    <SwitcherLink href="https://ibm.com/design">TfL Digital Blog</SwitcherLink>
    <SwitcherDivider>Design disciplines</SwitcherDivider>
    <SwitcherLink disabled>This is a disabled link</SwitcherLink>
    <SwitcherDivider>Design practices</SwitcherDivider>

  </>
);

Switcher.defaultProps = {
  children: <DefaultChildren />,
};

export default Switcher;
