import PropTypes from 'prop-types';
import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

Post.propTypes = {
    
};

function Post(props) {
    return (
        <div className="post">
           <div className="postWrapper">
               <div className="postTop">
                   <div className="postTopLeft">
                       <img className="postProfileImg" src="/assets/persons/avt2.jpg" alt="" />
                       <span className="postUserName">Vy Oanh</span>
                       <span className="postDate">5 minutes ago</span>
                   </div>
                   <div className="postTopRight">
                   <MoreVertIcon />
                   </div>
               </div>
               <div className="postCenter">
                    <span className="postText">
                       ☺️LẠI CHƠI HÈN REPORT FACE V.O 30 ngày nên mọi người qua trang page này nhé. Tôi chỉ nói lần này còn lại để luật pháp lên tiếng nên cũng không cần chơi trò này đâu nhé.
                        ❌Tôi- VY OANH CHÍNH THỨC KHỞI KIỆN bà NGUYỄN PHƯƠNG HẰNG lên TOÀ ÁN VÀ BỘ CÔNG AN. 
                    </span>
                    <img className="postImg" src="assets/posts/post1.jpg" alt="" />
               </div>
               <div className="postBottom">
                   <div className="postBottomLeft">
                   👍
                       <img className="likeIcon" src="assets/like.png" alt="" />
                       <img className="likeIcon" src="assets/heart.png" alt="" />
                       <span className="postLikeCounter">32 people like it </span>
                   </div>
                   <div className="postBottomRight">
                       <span className="postCommentText">9 comments</span>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Post;