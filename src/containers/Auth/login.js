import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowpassword: false,
        }
    }
    HandleonChangeUsername = (event) => {
        this.setState({
            username: event.target.value,
        })
    }
    HandleonChangepassword = (event) => {
        this.setState({
            password: event.target.value,
        })
    }
    HandleonClick = () => {
        console.log('username: ', this.state.username, 'password: ', this.state.password)
    }
    HandleClickShowHide = () => {
        this.setState({
            isShowpassword: !this.state.isShowpassword
        })
    }
    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>

                        <div className='col-12 form-group'>
                            <label>Username</label>
                            <input type='text' className='form-control'
                                placeholder='Enter your name'
                                value={this.state.username}
                                onChange={(event) => { this.HandleonChangeUsername(event) }} />
                        </div>

                        <div className='col-12 form-group'>
                            <label>password</label>
                            <div className='custom-password-input-wrapper'>
                                <input type={this.state.isShowpassword ? 'text' : 'password'} className='form-control'
                                    placeholder='Enter your password'
                                    value={this.state.password}
                                    onChange={(event) => { this.HandleonChangepassword(event) }}
                                />
                                <span onClick={() => { this.HandleClickShowHide() }}>
                                    <i class={this.state.isShowpassword ? 'far fa-eye' : 'fa fa-eye-slash'}></i>
                                </span>
                            </div>
                        </div>

                        <div className='col-12'>
                            <button className='col-12 btn-login'
                                onClick={() => { this.HandleonClick() }}>Login</button>
                        </div>

                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>

                        <div className='col-12 text-center mt-3'>
                            <span>Or Login with:</span>
                        </div>

                        <div className='col-12 social-login text-center'>
                            <i className="fab fa-google google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
