
import React, {useState} from "react"

function VideoPage(props) {
  const [likes, setLikes] = useState(9210);
  const [dislikes, setDislikes] = useState(185)
  function handleLikes() {
    setLikes(likes + 1);
    console.log('click')
  }

  function handleDislikes() {
    setDislikes(dislikes + 1)
  }
  

    return (
      <div>
      <iframe
        width="919"
        height="525"
        src={props.url}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"/>
        <h2>{props.title}</h2>
        <p>{props.views} Views | Uploaded {props.uploaded}</p>
        <button onClick={handleLikes}>{likes}👍</button>
        <button onClick={handleDislikes}>{dislikes}👎</button>
        
        </div>
        )}

export default VideoPage;