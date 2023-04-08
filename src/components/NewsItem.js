import React, { useState } from 'react'

export default function NewsItem(props) {
    return (
        <div className="card my-3">
            <div style={{ display: 'flex', position: 'absolute', right: 0 }}>
                <span className=" badge rounded-pill bg-light text-dark">
                    {props.source}
                </span>
           

            </div>
            <img src={!props.imageUrl ? "https://bsmedia.business-standard.com/_media/bs/img/article/2019-02/03/full/1549177756-4584.jpg" : props.imageUrl}

                className="card-img-top" alt="Page not found"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text">
                    <small className="text-danger">
                        By {!props.author ? "Unknown" : props.author} <br /> On  {new Date(props.date).toGMTString()}
                    </small>
                </p>
                <a href={props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">Read More</a>
            </div>
        </div>
    )
}
