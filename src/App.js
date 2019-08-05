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

function Date(){
  return (
    <div class="formatDate">
      {props.date}
    </div>
  )
}
function month(props) {
  return (
    <div className="formatmonth">
      <p =(props.month) "01"> January</p>
    </div>
  )
}

function year(props) {
  return (
    <div className="formatyear">
      <p>2018</p>
    </div>
  )
}
class Commentupdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: new newCommnent() };
    this.state ={ date: new CreateDate};
    this.state ={ month: new month};
    this.state ={year: new year};
    this.state ={getdate =CreateDate+month+year}
  };

  componentDidMount() {
    this.newComment+CreateDate = SetCommmentDate(
      () => this.getdate(),
    );
  }
  }
  tick() {
    this.setState({
      date: new Date()
    });

    render() {
      return (
        <div className="Comment">
          <UserInfo user={props.author} />
          <div className="Comment-text">
            {this.state.text.newComment()}.
      </div>
          <date></date>
            {formatDate(props.day.month.year)}
          </div>
        </div>
      );
    };
  }



function newCommnent() {
  ReactDOM.render(
    element,
    <Comment text={new text()} />,
    document.getElementById('root')
  )
};
