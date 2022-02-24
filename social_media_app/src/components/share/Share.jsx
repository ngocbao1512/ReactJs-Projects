import './share.css';
import TheatersIcon from '@mui/icons-material/Theaters';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import KingBedIcon from '@mui/icons-material/KingBed';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Share(props) {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/persons/avt1.jpg" alt="" />
                    <input
                     type="text"
                     placeholder="Ngoc ơi, bạn đang nghĩ gì thế?"
                     className="shareInput"
                     />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <TheatersIcon htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or video</span>
                        </div>
                        <div className="shareOption">
                            <LabelImportantIcon htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tags</span>
                        </div>
                        <div className="shareOption">
                            <KingBedIcon htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Locations</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor="golden" className="shareIcon"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Share;