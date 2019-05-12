import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const HBButtonStyle = styled.button`
  background: ${props => (props.type === 'primary' ? 'palevioletred' : 'white')};
  color: ${props => (props.type === 'primary' ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const HBButton = ({
  title,
  type,
  disabled,
  onClick,
}) => {
  return (
    <HBButtonStyle
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </HBButtonStyle>
  );
};

/**
 * propType validation
 */
HBButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

/**
 * propType default values
 */
HBButton.defaultProps = {
  type: 'primary',
  disabled: false,
  onClick: null,
};


export default HBButton;
