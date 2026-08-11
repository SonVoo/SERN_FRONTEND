import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowpassword: false,
            errMessage: ''
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
    HandleonClick = async () => {
        this.setState({ errMessage: '' });

        try {
            let data = await handleLoginApi(this.state.username, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
        }
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
                                    <i className={this.state.isShowpassword ? 'far fa-eye' : 'fa fa-eye-slash'}></i>
                                </span>
                            </div>
                        </div>
                        <div className='col-12' style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>
                            {this.state.errMessage}
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
        // adminLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
