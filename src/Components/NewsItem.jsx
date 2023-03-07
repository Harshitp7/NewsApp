import React from 'react'
const NewsItem = (props) => {

    let { title, description, imgUrl, mode} = props;
   
    return (
        <div>
            {title && description && <div className="card my-3">

                <div><img src={imgUrl} className="card-img-top" alt="newsItem" style={{height: '16rem'}}/></div>
                <div className="card-body rounded" style={{ backgroundColor: mode === 'dark' ? '#2b2d2f' : 'white', color: mode === 'dark' ? 'white' : 'black' , width: '100%'}}>

                    <h5 className="card-title">{title}</h5>

                    <p className="card-text">{description}<br/></p>
                </div>
            </div>}
        </div>
    )
}

export default NewsItem