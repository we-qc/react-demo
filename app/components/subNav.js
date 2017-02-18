import React from 'react';

class SubNav extends React.Component {
    render() {
        return (
            <nav className="uk-navbar uk-margin-bottom">
                <a href="/" className="uk-navbar-brand uk-hidden-small">
                    <span className="title">V2EX Clone 2.0</span>
                </a>
                <ul className="uk-navbar-nav uk-hidden-small uk-navbar-flip">
                    <li><a href="/">首页</a></li>
                    <li><a href="/register">注册</a></li>
                    <li><a href="/login">登录</a></li>
                </ul>
            </nav>
        );
    }
}

export default SubNav;