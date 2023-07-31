import React, { useState } from "react";
import "./app.css";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
function CreatePost() {
  const [title, setTitle] = useState("");
  const [postText, setPost] = useState("");
 
  let navigate = useNavigate()
  const postCollectionRef = collection(db, "posts");
  const createPost = async () => {
    await addDoc(
      postCollectionRef,
      { title,
       postText ,
      
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      }
    );
    navigate('/');
  };
  return (
    <div className="post-body">
      <h3>Create a Post</h3>
      <div className="post-inputs">
        <input
          placeholder="Title"
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <textarea
          placeholder="Write a post..."
          onChange={(event) => {
            setPost(event.target.value);
          }}
        />
        <button onClick={createPost}>Submit post</button>
      </div>
    </div>
  );
}

export default CreatePost;
