import React from "react";
import posts from "../data/posts";
import { NavLink } from "react-router-dom";
import Controls from "./Controls";

const Blog = () => {
    return (
      
            <div>
              <h2>Blog</h2>
              <ul>
                {posts.map((post)=>{
                  return <li key={post.id}><NavLink to={`/post/${post.id}`}>{post.titulo}</NavLink></li>
                })}
              
              </ul>
              <Controls/>
              </div>
    );
    
  }
  
  export default Blog;