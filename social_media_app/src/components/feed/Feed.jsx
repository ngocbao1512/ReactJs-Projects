import React from 'react';
import PropTypes from 'prop-types';
import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';

Feed.propTypes = {
    
};
//avt_url,post_image, conttent, user, timeout, count_like, count_comment
function Feed(props) {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                <Post 
                avt_url="/assets/persons/avt2.jpg" 
                conttent="i love her"
                post_image="/assets/posts/post1.jpg"
                user="Vy Oanh"
                timeout="5"
                count_like="20"
                count_comment="4"
                />
                <Post 
                avt_url="/assets/persons/avt3.jpg" 
                conttent="this is two post"
                post_image="/assets/posts/post2.jpg"
                user="ngoc bao"
                timeout="2"
                count_like="14"
                count_comment="8"
                />
                <Post 
                avt_url="/assets/persons/avt4.jpg" 
                conttent="this is first post"
                post_image="/assets/posts/post3.jpg"
                user="Obama"
                timeout="2"
                count_like="899"
                count_comment="7"
                />
                <Post 
                avt_url="/assets/persons/avt5.jpg" 
                conttent="post cua dat"
                post_image="/assets/posts/post6.jpg"
                user="Tran Dat"
                timeout="9"
                count_like="98"
                count_comment="67"
                />
                <Post 
                avt_url="/assets/persons/avt6.jpg" 
                conttent="this is first post"
                post_image="/assets/posts/post4.jpg"
                user="Cong Duong"
                timeout="9"
                count_like="98"
                count_comment="67"
                />
                <Post 
                avt_url="/assets/persons/avt7.jpg" 
                conttent="this is first post"
                post_image="/assets/posts/post2.jpg"
                user="Ngoc Anh"
                timeout="9"
                count_like="98"
                count_comment="67"
                />
               
            </div> 
        </div>
    );
}

export default Feed;