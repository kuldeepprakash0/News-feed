import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";

export default class News extends Component {
  articles = [];

  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    console.log("iam constructoe frome news items");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsFeed`
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=3e23feb97c01461a9f1054958eb4fa7a&pageSize=${this.props.pageSize}&category=${this.props.category}&page=${this.state.page}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }

  async componentDidMount() {
    console.log("cdm");
    this.updateNews();
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=3e23feb97c01461a9f1054958eb4fa7a&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading:false
    // });
  }

  handlePrevClick = async () => {
    console.log("prev");
    this.setState({page:this.state.page -1});
    this.updateNews();
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=3e23feb97c01461a9f1054958eb4fa7a&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
  
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading:false
    // });
  };
  handleNextClick = async () => {
    console.log("next");
    this.setState({page:this.state.page +1});
    this.updateNews();
    // if (
    //   !(this.state.page + 1 >
    //   Math.ceil(this.state.totalResults / this.props.pageSize))
    // ) {
    
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=3e23feb97c01461a9f1054958eb4fa7a&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({loading:false});
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //   });
    // }
  };
  render() {
    return (
      <div className="container my-3">
        <h3 style={{ textAlign: "center", marginTop: '90px'}}>NewsFeed : Top {this.capitalizeFirstLetter(this.props.category)} Headline </h3>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div
                key={element.url}
                className="col-md-4"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <NewsItems
                  title={element.title ? element.title.slice(0, 25) : ""}
                  description={
                    element.description ? element.description.slice(0, 85) : ""
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url} author={element.author?element.author:"Unkown"} date={element.publishedAt} source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            &larr; previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNextClick}
          >
            next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
