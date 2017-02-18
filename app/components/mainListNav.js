import React from 'react';

class MainListNav extends React.Component {
    render() {
        return (
            <div className="uk-width-1-1 uk-row-first">
                <ul className="uk-subnav uk-subnav-pill">
                    <li className="uk-active">
                        <a href="/?tab=tech" className="router-link-active">技术</a>
                    </li>
                    <li>
                        <a href="/?tab=creative" className="router-link-active">创意</a>
                    </li>
                    <li>
                        <a href="/?tab=play" className="router-link-active">好玩</a>
                    </li>
                    <li>
                        <a href="/?tab=apple" className="router-link-active">Apple</a>
                    </li>
                    <li>
                        <a href="/?tab=jobs" className="router-link-active">酷工作</a>
                    </li>
                    <li>
                        <a href="/?tab=deals" className="router-link-active">交易</a>
                    </li>
                    <li>
                        <a href="/?tab=city" className="router-link-active">城市</a>
                    </li>
                    <li>
                        <a href="/?tab=qna" className="router-link-active">问与答</a>
                    </li>
                    <li>
                        <a href="/?tab=hot" className="router-link-active">最热</a>
                    </li>
                    <li>
                        <a href="/?tab=all" className="router-link-active">全部</a>
                    </li>
                    <li>
                        <a href="/?tab=r2" className="router-link-active">R2</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MainListNav;