import React from 'react';
import logo from './logo.svg';
import './App.css';


//this is an avatar


function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />

  );
}
//user info

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}


function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
      {props.text.newComment()}.      
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )};

  function newCommnent(){
  ReactDOM.render(
    element,
    <Comment text={new text()} />,
    document.getElementById('root')
  )
}