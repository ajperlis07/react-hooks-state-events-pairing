
import video from "../data/video.js";
import VideoPage from "./VideoInfo";
import RenderComments from "./CommentList";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoPage 
        url={ video.embedUrl } 
        title={video.title} 
        views={video.views} 
        uploaded={video.createdAt} 
        likes={video.upvotes} 
        dislikes={video.downvotes}/>
      <RenderComments comments={video.comments} />
    </div>
  );
}

export default App;
