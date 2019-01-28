import React from 'react';
import PropTypes from 'prop-types';

const MenuPage = ({ pageName }) => (
  <div className="page menuPage">
    <div className="container">
      {pageName}
    </div>
  </div>
);

MenuPage.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default MenuPage;
