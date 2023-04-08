import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// https://newsapi.org/v2/top-headlines?country=us&apiKey=91f7e8d894b84d76af1eb60814612d93&page=1
// ce02a24facbf498fbd48d4c1d961712e

export default function News(props) {
    let [articles, setArticles] = useState([])
    let [totalResults, setTotalResults] = useState([])
    let [loading, setLoading] = useState(false)
    let [page, setPage] = useState(1)

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const fetchNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        // setLoading(true)
        let data = await fetch(url);
        props.setProgress(50);
        let parseData = await data.json()
        props.setProgress(70);
        console.log(parseData)
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        props.setProgress(100);
        document.title = `${capitalizeFirstLetter(props.category)}__DailyDigest`
    }

    useEffect(() => {
        fetchNews();
        // eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData)
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
    };

    return (
        <>
            <h2 className='text-center' style={{margin:'35px 0px',marginTop:'100px'}}>DailyDigest- Top {capitalizeFirstLetter(props.category)} Headlines </h2>
            {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element, index) => {
                            return <div className="col-md-4" key={index}>
                                <NewsItem title={element ? element.title : ""} description={element ? element.description : ""}
                                    imageUrl={element.urlToImage} newsUrl={element.url} author={element.author}
                                    date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>

    )
}
News.defaultProps = {
    pageSize: 10,
    country: 'us',
    category: 'general'
}
News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
}