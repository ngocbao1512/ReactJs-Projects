import React from 'react';
import PropTypes from 'prop-types';
import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';

Feed.propTypes = {
    
};

function Feed(props) {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                <Post />
            </div> 
        </div>
    );
}

export default Feed;