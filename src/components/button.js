import React from 'react';

const Button = props => {
    const { data } = props;
    return [
      <Button key="Button" >Your repos</Button>,
    ]
  };

// Button.propTypes = {
//     data: arrayOf(
//       shape({
//         color: string,
//       }),
//     ).isRequired,
//   };

export default Button;