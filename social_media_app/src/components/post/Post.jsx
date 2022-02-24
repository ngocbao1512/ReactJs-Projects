import PropTypes from 'prop-types';
import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

Post.propTypes = {
    
};

function Post(props) {
    const {avt_url,post_image, conttent, user, timeout, count_like, count_comment} = props
    return (
        <div className="post">
           <div className="postWrapper">
               <div className="postTop">
                   <div className="postTopLeft">
                   
                       <img className="postProfileImg" src={avt_url} alt="" />
                       <span className="postUserName">{user}</span>
                       <span className="postDate">{timeout} minutes ago</span>
                   </div>
                   <div className="postTopRight">
                   <MoreVertIcon />
                   </div>
               </div>
               <div className="postCenter">
                    <span className="postText">
                        {conttent} 
                    </span>
                    <img className="postImg" src={post_image} alt="" />
               </div>
               <div className="postBottom">
                   <div className="postBottomLeft">
                       <img className="likeButton" src="assets/like.png" alt="" />
                       <img className="likeButton" src="assets/heart.jpg" alt="" />
                       <span className="postLikeCounter">{count_like} people like it </span>
                   </div>
                   <div className="postBottomRight">
                       <span className="postCommentText">{count_comment} comments</span>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Post;