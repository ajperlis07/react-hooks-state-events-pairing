import React, { useState } from "react";
import video from "../data/video.js";
import Comment from "./Comment.js"


function RenderComments() {
    const [isHidden, setIsHidden] = useState(false)
    
    function hideComments(){
        setIsHidden(!isHidden) 
    }

    const allComments = video.comments.map(post => {
        return (
            <Comment name = {post.user}  comment={post.comment}/>
            );
    })
    return (
        
        <section class="allComments">
            <br></br>
            <button onClick={hideComments}>{isHidden ? "Show" : "Hide"} Comments</button>
            <h1>{allComments.length} Comments </h1> 
            {isHidden ? null : allComments}
            </section>
        
    )
}

export default RenderComments;