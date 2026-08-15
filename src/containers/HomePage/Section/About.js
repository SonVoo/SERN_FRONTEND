import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

class About extends Component {
    render() {
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>

                </div>
                <div className='section-about-center'>
                    <div className='content-left'>
                        <iframe width="50%" height="400px" src="https://www.youtube.com/embed/147SkAVXEqM"
                            title="#51 Kết Thúc Design Giao Diện Clone BookingCare.vn 4 | React.JS Cho Người Mới Bắt Đầu"
                            frameBorder="0"
                            allow="accelerometer; 
                    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                    <div className="content-right">
                        <div className="about-title">
                            Nền tảng Y tế Toàn diện BookingCare Clone
                        </div>
                        <p className="about-text">
                            Ứng dụng được xây dựng với mục đích kết nối người bệnh với các cơ sở y tế.
                        </p>
                        <ul className="about-list">
                            <li>✔ Đặt khám dễ dàng với các chuyên gia đầu ngành</li>
                            <li>✔ Hệ thống cơ sở y tế, phòng khám phủ rộng</li>
                            <li>✔ Giao diện tối ưu, trải nghiệm mượt mà với React.js & Node.js</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);