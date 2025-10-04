import React,{useState} from "react";
import "./Blog.css";

const Blog=()=>{
    const[blogs,setBlogs]=useState([
        {
            title:"The future of DeFi tokens",
            body:"The future of DeFi tokens points toward a more mature, interconnected and mature ecosystem...",
            author:"Mark Zuck"
        }
        
    ]);
    const [newTitle,setNewTitle]=useState("");
    const [newBody,setNewBody]=useState(" ");
    const[newAuthor,setNewAuthor]=useState("");
    
    const handleAddBlog=(e)=>{
        e.preventDefault();
        if(!newTitle.trim() ||!newBody.trim()||!newAuthor.trim()) return;

        const newPost={
            title:newTitle,
            body:newBody,
            author:newAuthor
        };

        setBlogs([...blogs,newPost]);

        setNewBody("");
        setNewTitle("");
        setNewAuthor("");

    };

    return(
        <div className="blog-container">
            <h2 className="blog-title">Community Blog</h2>

            <form className="blog-form" onSubmit={handleAddBlog}>
                <input
                type="text"
                placeholder="Your Name"
                value={newAuthor}
                onChange={(e)=>setNewAuthor(e.target.value)}
                className="blog-input"
                />

                <input 
                type="text"
                placeholder="Blog Title"
                value={newTitle}
                onChange={(e)=>setNewTitle(e.target.value)}
                className="blog-input"
                />
                <textarea
                 placeholder="Share your thoughts"
                 value={newBody}
                 onChange={(e)=>setNewBody(e.target.value)}
                 className="blog-textarea"
                 />

                 <button type="submit" className="blog-btn">
                    Add Blog
                 </button>
            </form>
            {blogs.map((post,i)=>(
                <div key={i} className="blog-post">
                    <h3 className ="blog-heading">{post.title}</h3>
                    <p className="blog-body">{post.body}</p>
                    <p className="blog-author">{post.author}</p>
                    </div>
            ))}
        </div>
    );
};

export default Blog;
