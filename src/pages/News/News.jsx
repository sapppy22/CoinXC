import React,{useEffect,useState} from "react";
import { fetchCryptoNews } from "../../services/newsapi";
import "./News.css";

const News=()=>{
    const [news,setNews]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetchNews=async()=>{
            try{
               const data=await fetchCryptoNews();
               setNews(data);
               setLoading(false);
            } catch(error){
                console.log("Error in fetching news:",error);
                setLoading(false);
            }


        };
        fetchNews();
    },[]);

    if (loading){
        return <p className="Loading">Loading Crypto Api..</p>;
    }

    return (
        <div className="news-container">
            <h2 className="page-headline">Latest Crypto News</h2>
            <div className="news-grid">
                {news.map((article)=>(
                    <div className="news-card" key={article.id}>
                    <img 
                        src={article.imageurl}
                        alt={article.title}
                        className="news-image"
                    />
                        
                    <a href={article.link} target="_blank">
                        <h3 className="news-heading">{article.title}</h3>
                    </a>
                    <p className="news-body">{article.body.slice(0,120)}....</p>
                    <p className="news-source">Source:{article.source}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;