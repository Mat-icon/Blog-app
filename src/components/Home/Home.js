import React, { useState, useEffect} from 'react'
import './app.css'
import { db ,auth} from "../../firebase-config";
import {getDocs,collection, deleteDoc, doc} from 'firebase/firestore'



function Home({isAuth}) {
  const [postLists, setPostLists] = useState([]);
  const postCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPost = async() => {
      const data = await getDocs(postCollectionRef);
      setPostLists(data.docs.map((doc) =>({...doc.data(), id: doc.id})))
      
    }
  getPost();  
  })
  
  const deletePost = async(id) => {
    const postedDoc = doc(db, "posts", id)
    await deleteDoc(postedDoc)
  }
  return (
    <div className='homepage'>
      {postLists.map((post) => (
        <>
        <div className='post-container' key={post.author.id}>
          {isAuth && post.author.id === auth.currentUser.uid && <button className='delete' onClick={() => deletePost(post.id)}>Delete</button>}
          <div className='postTitle'><h2>{post.title}</h2></div>
        <div className='post-text'>{post.postText}</div>
        <div className='post-author'><p>@{post.author.name}</p></div>
        </div>
        
        </>
      ) )}
    </div>
  )
}

export default Home