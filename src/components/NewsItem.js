import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    imageUrl = imageUrl || "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"
    return (
        <div className='my-3'>
            <div className="card shadow p-3 mb-5 bg-body rounded" style={{ width: "18rem" }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-danger"> {source} </span>
                </div>
                <img src={imageUrl} className="card-img-top" alt="" />
                <div className="card-body">

                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text">
                        <small className="text-muted">
                            By {author} on {new Date(date).toGMTString()}
                        </small>
                    </p>
                    <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
