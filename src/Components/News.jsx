import React from 'react'
import NewsItem from './NewsItem';
import newsData from './newsData.json';
const News = (props)=> {
   
    return (
           <>
            <h1 className="text-center" style={{ color: props.mode === 'dark' ? 'white' : 'black', marginTop: '90px', marginBottom: '45px' }} >NewsApp-Top Headlines</h1>
                
                
                    <div className="container">
                        <div className="row">
                            {newsData.data.map((article)=>{
                                return (<div className="col-md-6 col-sm-12 my-3" key={article.id}>
                                    <NewsItem title={article.headline}
                                        description={article.news}
                                        imgUrl={article.image}
                                        id={article.id}
                                        mode={props.mode}/>
                                        
                                </div>)
                                 })};
                        </div>
                    </div>
                
            </>
       )
    }


export default News;
