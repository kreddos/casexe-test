import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ children, isLoading }) => {
  if (!isLoading) {
    return children;
  }
  return (
    <div className="page">
      <div className="spinnerContainer">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

Loading.propTypes = {
  children: PropTypes.element,
  isLoading: PropTypes.bool.isRequired,
};

Loading.defaultProps = {
  children: null,
};

export default Loading;
