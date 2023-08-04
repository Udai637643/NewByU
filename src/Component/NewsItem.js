import React, { Component } from 'react'

// export class NewsItem extends Component {
  const NewsItem =(props)=>{
  // render() {
    let {title,discription,imageUrl,newURL,author,date,sources}=props;
    return (
      <div>
      <div className="card" >
  <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2021/06/Morning-Scan-10-770x433.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{ title} <span class="badge rounded-pill text-bg-danger">{sources}</span></h5>
    <p className="card-text">{discription}</p>
    <p class="card-text"><small class="text-body-secondary">by {!author?"Unknown":author} on {date}</small></p>
    <a href={newURL} className="btn btn-sm btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
// }

export default NewsItem
