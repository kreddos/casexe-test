import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  children: PropTypes.element,
};

class FormControl extends Component {
  static propTypes = propTypes

  static defaultProps = {
    errorMessage: '',
    value: '',
    onChange: () => {},
    required: false,
    children: null,
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { onChange } = this.props;
    const { value } = e.currentTarget;
    onChange(value);
  }

  get inputProps() {
    const props = { ...this.props };
    Object.keys(propTypes).forEach((propName) => {
      delete props[propName];
    });
    return props;
  }

  renderErrorMessage() {
    const { errorMessage } = this.props;
    if (!errorMessage) {
      return null;
    }
    return (
      <span className="controlMessage">
        {errorMessage}
      </span>
    );
  }

  renderControlBody() {
    const {
      children, value, id, required, errorMessage,
    } = this.props;

    if (!children) {
      return (
        <>
          <input
            {...this.inputProps}
            required={required}
            value={value}
            id={id}
            onChange={this.onChange}
            className={classNames({ error: errorMessage })}
          />
          { this.renderErrorMessage() }
        </>
      );
    }
    return children;
  }

  render() {
    const {
      label, id, required,
    } = this.props;
    return (
      <div className="formControl">
        <label className={classNames({ required })} htmlFor={id}>{label}</label>
        <div className="control">
          { this.renderControlBody() }
        </div>
      </div>
    );
  }
}

export default FormControl;
