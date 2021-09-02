import React from "react";
import { FaTv } from 'react-icons/fa';
import { BsGrid3X3 } from 'react-icons/bs';
import { MdPersonPin } from 'react-icons/md';
import { VscBookmark } from 'react-icons/vsc';

const Tab = () => {
  return (
    <div className="tabContainer">
      <a href="">
        <span>
            <div className="tabIcons"><BsGrid3X3/></div>
            POSTS
        </span>
      </a>
      <a href="">
        <span>
            <div className="tabIcons"><FaTv/></div>
            IGTV
        </span>
      </a>
      <a href="">
        <span>
            <div className="tabIcons"><VscBookmark/></div>
            SAVED
        </span>
      </a>
      <a href="">
        <span>
            <div className="tabIcons"><MdPersonPin/></div>
            TAGGED
        </span>
      </a>
    </div>
  );
};

export default Tab;
