import React from 'react';
import MainListNav from './mainListNav';
import MainListItem from './mainListItem';

class MainList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="uk-width-medium-3-4 uk-row-first">
                <div className="uk-panel uk-panel-box">
                    <MainListNav />
                    <hr className="uk-article-divider" />
                    <MainListItem />
                </div>
            </div>
        )
    }
}

export default MainList;