import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../../components/topbar/topbar'
import RightBar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import SideBar from '../../components/sidebar/Sidebar'
import './home.css'

home.propTypes = {
    
};

function home(props) {
    return (
        <>
        <TopBar />
        
        <div className="homeContainer">
            <SideBar />
            <Feed />
            <RightBar />
        </div>
        </>
    );
}

export default home;