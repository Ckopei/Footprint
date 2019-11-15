import React from "react";

function Card({ id, avatar, title, position, bio, linkedIn, github, mail }) {
  return (
    <div className="card" id={id}>
      <div className="card-body text-center">
        <img className="avatar rounded-circle"src={avatar} alt="portfolio"></img>
        <h3 className="card-title">
          <strong>
             {title}
          </strong>
        </h3>
        <h6 className="subtitle">{position}</h6>
        <hr></hr>
        <div className="card-text">{bio}</div>
        <div className="icon-block">
          <a href={linkedIn}><i className="fa fa-linkedin"></i></a>
          <a href={github}><i className="fa fa-github"></i></a>
          <a href={mail}><i className="fa fa-envelope"></i></a>

        </div>
      </div>
      
    </div>
  );
}

export default Card;
