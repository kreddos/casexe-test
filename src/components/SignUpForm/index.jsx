import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import IpControl from '../IpControl';
import FormControl from '../FormControl';
import './style.scss';

class SignUpForm extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.onAddIp = this.onAddIp.bind(this);
    this.onRemoveIp = this.onRemoveIp.bind(this);
    this.onChangeFormControl = this.onChangeFormControl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onClickLayout = this.onClickLayout.bind(this);
  }

  state = this.getInitialState();

  getInitialState() {
    return {
      firstName: '',
      email: '',
      password: '',
      confirmPassword: '',
      ips: [],
      errors: {
        firstName: '',
        email: '',
        password: '',
        confirmPassword: '',
        ips: '',
      },
    };
  }

  onClose() {
    const state = this.getInitialState();
    this.setState(state);
    const { onClose } = this.props;
    onClose();
  }

  onAddIp(ip) {
    const { ips } = this.state;
    this.setState({
      ips: [
        ...ips,
        ip,
      ],
    });
  }

  onRemoveIp(index) {
    const { ips } = this.state;
    ips.splice(index, 1);
    this.setState({ ips });
  }

  onChangeFormControl(fieldName) {
    return (value) => {
      this.setState({ [fieldName]: value });
    };
  }

  onFocusControl(fieldName) {
    return () => {
      const { errors } = this.state;
      this.setState({ errors: { ...errors, [fieldName]: '' } });
    };
  }

  onSubmit(event) {
    event.preventDefault();

    const errors = this.findFormErrors();

    if (Object.keys(errors).length) {
      this.setState({ errors });
      return;
    }

    console.warn('success');
    const state = this.getInitialState();

    this.setState(state);
    this.onClose();
  }

  onClickLayout(e) {
    const { className, id } = e.target;
    if (className !== 'modalContainer' && id !== 'modalContainer') {
      return;
    }

    this.onClose();
  }

  findFormErrors() {
    const {
      firstName,
      email,
      password,
      confirmPassword,
      ips,
    } = this.state;

    const errors = {};

    if (!/^[A-Za-z]+$/.test(firstName)) {
      errors.firstName = 'Name should be only letters';
    }

    if (!firstName) {
      errors.firstName = 'Name is required feild';
    }

    if (!/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(email)) {
      errors.email = 'E-mail should be email address';
    }

    if (!email) {
      errors.email = 'E-mail is required feild';
    }

    if (!ips.length) {
      errors.ips = 'IP addresses is required';
    }

    if (password.length < 6 || password.length > 16) {
      errors.password = 'Password could be any string of 6-16 symbols.';
    }

    if (!password) {
      errors.password = 'Password is required field.';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required field.';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords don\'t mutch.';
    }

    return errors;
  }

  render() {
    const { isOpen } = this.props;
    if (!isOpen) {
      return null;
    }

    const {
      firstName, email, password, confirmPassword, ips, errors,
    } = this.state;
    return (

      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div className="modalContainer" id="modalContainer" onClick={this.onClickLayout}>
        <div className="modal signUpModal">
          <div className="modalHeader">
            <button className="modalClose" type="button" onClick={this.onClose}>
              <Icon className="closeIcon" icon={faTimes} />
              close
            </button>
          </div>
          <div className="modalBody">
            <h1>Registration</h1>
            <span className="formInfo">* inducates required fields</span>
            <form className="signUpForm" onSubmit={this.onSubmit} noValidate>
              <FormControl
                required
                label="Name"
                value={firstName}
                id="firstName"
                errorMessage={errors.firstName}
                onChange={this.onChangeFormControl('firstName')}
                onFocus={this.onFocusControl('firstName')}
              />

              <FormControl
                errorMessage={errors.email}
                required
                label="E-mail"
                value={email}
                id="email"
                type="email"
                onChange={this.onChangeFormControl('email')}
                onFocus={this.onFocusControl('email')}
              />

              <FormControl required label="IP adresses" id="ip">
                <IpControl
                  errorMessage={errors.ips}
                  maxLen={5}
                  list={ips}
                  onAddIp={this.onAddIp}
                  onRemoveIp={this.onRemoveIp}
                  onFocus={this.onFocusControl('ips')}
                />
              </FormControl>

              <FormControl
                errorMessage={errors.password}
                required
                label="Password"
                value={password}
                id="password"
                type="password"
                onChange={this.onChangeFormControl('password')}
                onFocus={this.onFocusControl('password')}
              />

              <FormControl
                errorMessage={errors.confirmPassword}
                required
                label="Confirm Password"
                value={confirmPassword}
                id="confirmPassword"
                type="password"
                onChange={this.onChangeFormControl('confirmPassword')}
                onFocus={this.onFocusControl('password')}
              />
              <div className="actions">
                <button type="submit" className="button base">submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
