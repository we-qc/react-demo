var React = require('react');

var SideBar = React.createClass({
    render: function () {
        return (
            <div className="uk-width-medium-1-4">
                <div className="uk-panel uk-panel-box">
                    <dl className="uk-description-list-line">
                        <dt>V2EX = way to explore</dt>
                        <dd>V2EX 是一个关于分享和探索的地方</dd>
                    </dl>
                    <div className="uk-text-center inner line-top">
                        <a className="uk-button" href="/register">现在注册</a>
                        <p>已注册用户请 <a href="/login">登录</a></p>
                    </div>
                </div>
                <div className="uk-panel uk-panel-box panel-default">
                    <div className="panel-heading">最热议主题</div>
                    <table className="uk-table no-margin-top-bottom">
                        <tbody>
                            <tr>
                                <td width="35px" className="uk-vertical-middle">
                                    <a href="/member/138873">
                                        <img src="//cdn.v2ex.co/avatar/264e/f414/138873_normal.png?m=1476531543" className="uk-border-radius-10"/>
                                    </a>
                                </td>
                                <td className="uk-vertical-middle"><a href="/show/336633" className="topic-title">qq 靓号可以买断了，你们谁的号是靓号，赶紧去买断</a></td>
                            </tr>
                            <tr>
                                <td width="35px" className="uk-vertical-middle">
                                    <a href="/member/2719">
                                        <img src="//cdn.v2ex.co/avatar/7aee/26c3/2719_normal.png?m=1391653646" className="uk-border-radius-10"/>
                                    </a>
                                </td>
                                <td className="uk-vertical-middle"><a href="/show/336714" className="topic-title">我可能是第一个被 V2EX 明确降权的人，请大家引以为戒……</a></td>
                            </tr>
                            <tr>
                                <td width="35px" className="uk-vertical-middle">
                                    <a href="/member/84957">
                                        <img src="//cdn.v2ex.co/avatar/043a/5783/84957_normal.png?m=1458204503" className="uk-border-radius-10"/>
                                    </a>
                                </td>
                                <td className="uk-vertical-middle"><a href="/show/336586" className="topic-title">你用小程序吗，频度如何？</a></td>
                            </tr>
                            <tr>
                                <td width="35px" className="uk-vertical-middle">
                                    <a href="/member/170805">
                                        <img src="//cdn.v2ex.co/gravatar/23c7ae52c34db6f5a77b62706b639512?s=48&amp;d=retro" className="uk-border-radius-10"/>
                                    </a>
                                </td>
                                <td className="uk-vertical-middle"><a href="/show/336607" className="topic-title">年后计划购买人生第一部汽车，预算 13w 落地，目前觉得轩逸、卡罗拉都挺不错，请相关车主安利或打醒。</a></td>
                            </tr>
                            <tr>
                                <td width="35px" className="uk-vertical-middle">
                                    <a href="/member/34530">
                                        <img src="//cdn.v2ex.co/gravatar/3ad8520d5ab1f4ddee0cc386684cb3a1?s=48&amp;d=retro" className="uk-border-radius-10"/>
                                    </a>
                                </td>
                                <td className="uk-vertical-middle"><a href="/show/336649" className="topic-title">阿里音乐和腾讯音乐双寡头的时代来了，网易云音乐要杯具？</a></td>
                            </tr>
                            <tr>
                                <td width="35px" className="uk-vertical-middle">
                                    <a href="/member/102867">
                                        <img src="//cdn.v2ex.co/gravatar/9647fa9a3f62dafa6b37e62faced89ae?s=48&amp;d=retro" className="uk-border-radius-10"/>
                                    </a>
                                </td>
                                <td className="uk-vertical-middle"><a href="/show/336673" className="topic-title">关于定居,哪座城才是作为程序员的你的理想之地?</a></td>
                            </tr>
                            <tr>
                                <td width="35px" className="uk-vertical-middle">
                                    <a href="/member/2570">
                                        <img src="//cdn.v2ex.co/avatar/852c/44dd/2570_normal.png?m=1332250511" className="uk-border-radius-10"/>
                                    </a>
                                </td>
                                <td className="uk-vertical-middle"><a href="/show/336587" className="topic-title">支付宝能不能行行好不要搞集福了</a></td>
                            </tr>
                            <tr>
                                <td width="35px" className="uk-vertical-middle">
                                    <a href="/member/41611">
                                        <img src="//cdn.v2ex.co/gravatar/a97045e4810bd1a809de8aea971b71c8?s=48&amp;d=retro" className="uk-border-radius-10"/>
                                    </a>
                                </td>
                                <td className="uk-vertical-middle"><a href="/show/336720" className="topic-title">史上最无耻的“日租卡”</a></td>
                            </tr>
                            <tr>
                                <td width="35px" className="uk-vertical-middle">
                                    <a href="/member/18845">
                                        <img src="//cdn.v2ex.co/avatar/e71d/7330/18845_normal.png?m=1346728573" className="uk-border-radius-10"/>
                                    </a>
                                </td>
                                <td className="uk-vertical-middle"><a href="/show/336691" className="topic-title">蚂蚁借呗上征信么？</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="uk-panel uk-panel-box panel-default">
                    <div className="panel-heading">社区运行状况</div>
                    <div className="panel-body">
                        <table className="uk-table no-bottom-line no-margin-top-bottom">
                            <tbody>
                                <tr>
                                    <td width="58px" className="uk-text-right">注册会员</td>
                                    <td>211048</td>
                                </tr>
                                <tr>
                                    <td width="58px" className="uk-text-right">主题</td>
                                    <td>330159</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = SideBar;