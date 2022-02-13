import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import './BackLink.scss';

const BackLink = () => {
  return (
    <div className="back-link">
      <Link className="back-link__text" to="/">
        <MdArrowBackIos />
        <span>Characters</span>
      </Link>
    </div>
  );
};

export default BackLink;
