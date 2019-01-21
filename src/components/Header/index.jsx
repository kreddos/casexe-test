import React, { Component } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faVk, faTwitter } from '@fortawesome/free-brands-svg-icons';
import WinnersSlider from '../WinnersSlider';
import SignUpForm from '../SignUpForm';
import './style.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.openSignUpFrom = this.openSignUpFrom.bind(this);
    this.closeSignUpForm = this.closeSignUpForm.bind(this);
  }

  state = {
    isSignUpFormOpen: false,
  };

  openSignUpFrom() {
    this.setState({ isSignUpFormOpen: true });
  }

  closeSignUpForm() {
    this.setState({ isSignUpFormOpen: false });
  }

  render() {
    const { isSignUpFormOpen } = this.state;
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <ul className="mainMenu">
                <li><a href="/">ВСЕ ИГРЫ</a></li>
                <li><a href="/">ПОПОЛНЕНИЕ СЧЕТА</a></li>
                <li><a href="/">ПОЛУЧИТЬ ВЫИГРЫШ</a></li>
                <li><a href="/">БОНУСЫ</a></li>
                <li><a href="/">МОБИЛЬНАЯ ВЕРСИЯ</a></li>
                <li><a href="/">КОНТАКТЫ</a></li>
              </ul>
            </div>
            <div className="col-sm mainActions">
              <button type="button" className="button fastReg">
                <img src="/assets/img/icons/bolt.png" alt="" />
                  Быстрая регистрация
              </button>
              <div className="scNetworks">
                <a className="scLink" href="/">
                  <Icon icon={faFacebookF} />
                </a>
                <a className="scLink" href="/">
                  <Icon icon={faTwitter} />
                </a>
                <a className="scLink" href="/">
                  <Icon icon={faVk} />
                </a>
              </div>

              <button type="button" className="changeLanguage">
                <img src="/assets/img/us_flag.png" alt="us_flag" />
                  English
              </button>
            </div>
          </div>
        </div>


        <div className="signRow">
          <div className="container">
            <div className="row">
              <div className="col-sm logoContainer">
                <img className="logo" src="/assets/img/logo.png" alt="logo" />
              </div>

              <div className="col-sm signActions">
                <button type="button" className="button base" onClick={this.openSignUpFrom}>registration</button>
                <div className="inputs">
                  <input type="text" placeholder="Username" />
                  <div>
                    <input type="password" placeholder="Password" />
                    <a className="passwordHelper" href="/">Forgot your pasword?</a>
                  </div>
                </div>
                <button type="button" className="button warn">login</button>
              </div>
            </div>
          </div>
        </div>


        <div className="infoBlock">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="title">last winners</div>
                <WinnersSlider />
              </div>
              <div className="col-md">
                <div className="title">jackpot</div>
                <ul className="jackpotList">
                  <li className="coin gold">
                    <img src="/assets/img/GOLDEN_COIN.png" alt="gold" />
                      7 859 352
                  </li>
                  <li className="coin silver">
                    <img src="/assets/img/SILVER_COIN.png" alt="gold" />
                      2 148 759
                  </li>
                  <li className="coin bronze">
                    <img src="/assets/img/BRONZE_COIN.png" alt="gold" />
                      1 589 654
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <SignUpForm
          isOpen={isSignUpFormOpen}
          onClose={this.closeSignUpForm}
        />
      </header>
    );
  }
}

export default Header;
