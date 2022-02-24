import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.css';
 
import RssFeedIcon from '@mui/icons-material/RssFeed'; 
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuizIcon from '@mui/icons-material/Quiz';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SchoolIcon from '@mui/icons-material/School';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';

SideBar.propTypes = {
    
};

function SideBar(props) {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarkIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <OndemandVideoIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <QuizIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Quesitons</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutlineIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <EventNoteIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <SchoolIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <ShareLocationIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Locations</span>
                    </li>
                </ul>

                <button className="sidebarButton"> Show More </button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/persons/avt2.jpg" alt="" />
                        <span className="sidebarFriendName">ngoc bao</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/persons/avt3.jpg" alt="" />
                        <span className="sidebarFriendName">minh trí</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/persons/avt4.jpg" alt="" />
                        <span className="sidebarFriendName">trần văn nam</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/persons/avt5.jpg" alt="" />
                        <span className="sidebarFriendName">lợi thảo</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/persons/avt6.jpg" alt="" />
                        <span className="sidebarFriendName">xăng dầu lợi thảo</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/persons/avt7.jpg" alt="" />
                        <span className="sidebarFriendName">Bác Sĩ Nam</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/persons/avt8.jpg" alt="" />
                        <span className="sidebarFriendName">Khánh Uyên</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/persons/avt9.jpg" alt="" />
                        <span className="sidebarFriendName">Đình Khánh</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/persons/avt10.jpg" alt="" />
                        <span className="sidebarFriendName">Đình Bảo</span>
                    </li>
                  
                </ul>
            </div>
        </div>
    );
}

export default SideBar;