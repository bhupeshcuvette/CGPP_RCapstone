import React ,{useState,useEffect} from 'react';
import './News.css';


const News =()=>{
    const [curNews,setCurNews]=useState(false);
    useEffect(()=>{
        const fetchNews=async()=>{
            await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-04-20&sortBy=publishedAt&apiKey=190cad2366ba439488b8d20386fd3660").then(
                    async(data)=>await data.json()).then((data)=>setCurNews(data.articles[0]))
        }
        fetchNews();
    })

    return (
        <div className='news-info'>
            <img src={curNews.urlToImage} className="news-image"></img>
            <div className='news-info-title'>
                <h2>{curNews.title}</h2>
                <span>{curNews.publishedAt}</span>
            </div>
            <div className='news-description'>
               <span>{curNews.content}</span>
            </div>
        </div>

    )

}

export default News;