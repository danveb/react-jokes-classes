import React from "react";
import "./Joke.css";

// Functional Component
// function Joke({ vote, votes, text, id }) {
//   const upVote = () => vote(id, +1);
//   const downVote = () => vote(id, -1);

//   return (
//     <div className="Joke">
//       <div className="Joke-votearea">
//         <button onClick={upVote}>
//           <i className="fas fa-thumbs-up" />
//         </button>

//         <button onClick={downVote}>
//           <i className="fas fa-thumbs-down" />
//         </button>

//         {votes}
//       </div>

//       <div className="Joke-text">{text}</div>
//     </div>
//   );
// }

// Class Component
class Joke extends React.Component {
  constructor(props) {
    super(props)
    // BIND methods
    this.upVote = this.upVote.bind(this) 
    this.downVote = this.downVote.bind(this) 
  }

  // instance methods 
  upVote() {
    this.props.upVote(this.props.id, +1) 
  }
  downVote() {
    this.props.downVote(this.props.id, -1) 
  }

  render() {
    // destructure props here 
    // - upVote, downVote methods
    // - votes, text
    const { upVote, downVote, votes, text } = this.props 

    return (
      <div className="Joke">
        <div className="Joke-votearea">
          <button onClick={upVote}>
            <i className="fas fa-thumbs-up" />
          </button>
  
          <button onClick={downVote}>
            <i className="fas fa-thumbs-down" />
          </button>
  
          {votes}
        </div>
  
        <div className="Joke-text">{text}</div>
      </div>
    );
  }
}

export default Joke;