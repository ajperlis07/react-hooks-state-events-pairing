import React, { useState } from "react";
function Comment({name, comment}) {
    return (
        <div>
            <h4>{name}</h4>
            <p>{comment}</p>
        </div>
)}

export default Comment;