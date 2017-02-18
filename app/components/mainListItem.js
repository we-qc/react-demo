import React from 'react';

class MainListItem extends React.Component {
    render() {
        return (
            <section>
                <div className="line">
                    <div className="uk-grid">
                        <div className="uk-width-2-10 uk-width-small-1-10 uk-row-first">
                            <a href="/member/155265">
                                <img className="uk-border-radius-10" src="//cdn.v2ex.co/avatar/380a/6834/155265_normal.png?m=1454659865"/>
                            </a>
                        </div>
                        <div className="uk-width-6-10 uk-width-small-8-10">
                            <h2 className="uk-h3">
                                <a className="topic-title" href="/show/336819">
                                    [广州／杭州/ 北京] 图普科技诚聘高级深度学习，欢迎有志投身于人工智能领域的小伙伴们加入！
                                </a>
                            </h2>
                            <div>
                                <span>酷工作</span> •
                                <a className="username" href="/member/155265">Tpela</a> •
                                <span className="created">5 分钟前</span>
                            </div>
                        </div>
                        <div className="uk-width-2-10 uk-width-small-1-10 line-height-59">
                            <p className="uk-text-right uk-badge uk-badge-notification">0</p>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="line">
                    <div className="uk-grid">
                        <div className="uk-width-2-10 uk-width-small-1-10 uk-row-first">
                            <a href="/member/71013">
                                <img className="uk-border-radius-10" src="//cdn.v2ex.co/gravatar/5e5e3f91727bab4a45b227b1295813be?s=48&amp;d=retro"/>
                            </a>
                        </div>
                        <div className="uk-width-6-10 uk-width-small-8-10">
                            <h2 className="uk-h3">
                                <a className="topic-title" href="/show/336817">
                                    在苹果官网怎么选购教育优惠的 macbook pro 中的 MJLT2CH 这个型号？
                                </a>
                            </h2>
                            <div>
                                <span>MacBook Pro</span> •
                                <a href="/member/71013" className="username">rockxsj</a> •
                                <span className="created">15 分钟前</span>
                            </div>
                        </div>
                        <div className="uk-width-2-10 uk-width-small-1-10 line-height-59">
                            <p className="uk-text-right uk-badge uk-badge-notification">3</p>
                        </div>
                    </div>
                    <hr/>
                </div>
            </section>
        )
    }
}

export default MainListItem;
