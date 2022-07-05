import React from "react";

export default function NewsItems(props) {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-2">
      <div className="card my-2 mx-2">
        <div className="container">
          <span
            className=" badge rounded-pill bg-danger"
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              right: "0px",
            }}
          >
            {source}
          </span>
        </div>
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://c.ndtvimg.com/2022-06/adm9oqj8_kk_625x300_01_June_22.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>

          <p className="card-text">
            <small className="text-muted">
              By {author} on {new Date(date).toGMTString()}{" "}
            </small>
          </p>
          <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">
            Read more!
          </a>
        </div>
      </div>
    </div>
  );
}
