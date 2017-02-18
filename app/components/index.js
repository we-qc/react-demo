import React from 'react';
import SubNav from './subNav';
import MainList from './mainList';
import SideBar from './sideBar';


class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="uk-container uk-container-center">
                <SubNav />
                <div className="uk-grid">
                    <MainList />
                    <SideBar />
                </div>
            </div>
        );
    }
}

export default Index;