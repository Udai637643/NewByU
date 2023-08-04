import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


// export class News extends Component {
 const News=(props)=>{
  const {setProgress,country,apiKey,category,pageSize}=props;
//   articles= [
//     {
//         "source": {
//             "id": "news-com-au",
//             "name": "News.com.au"
//         },
//         "author": "Daanyal Saeed",
//         "title": "Stokes slammed in ‘spirit of cricket’ shame",
//         "description": "Ben Stokes has come under fire in the wake of his Herschelle Gibbs moment in the Fifth Ashes Test.",
//         "url": "https://www.news.com.au/sport/cricket/the-ashes/ben-stokes-drops-ball-while-celebrating-in-moment-of-madness-in-fifth-ashes-test/news-story/307184ee0e8968cadc29c624bffbc108",
//         "urlToImage": "https://content.api.news/v3/images/bin/434754afa7b82cd3c8825863a9a14be8",
//         "publishedAt": "2023-07-31T15:42:00Z",
//         "content": "Ben Stokes has come under fire in the wake of his Herschelle Gibbs moment in the Fifth Ashes Test.\r\nStokes gave Steve Smith an extraordinary reprieve when he dropped the Aussie star while celebrating… [+4434 chars]"
//     },
//     {
//         "source": {
//             "id": "espn-cric-info",
//             "name": "ESPN Cric Info"
//         },
//         "author": null,
//         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//         "publishedAt": "2020-04-27T11:41:47Z",
//         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//     },
//     {
//         "source": {
//             "id": "espn-cric-info",
//             "name": "ESPN Cric Info"
//         },
//         "author": null,
//         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//         "publishedAt": "2020-03-30T15:26:05Z",
//         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//     }
// ]
         const [articles,setArticles]= useState([])
        //  const [loading,setLoading]=useState(true)
         const [page,setPage]=useState(1)
         const [totalResults,setTotalResults]=useState(0)
          // const [loading,setLoading]=useState(<Spinner/>)  
   
  
  const  UpateData=async(props)=>{
    setProgress(10)
    let url=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
  
    // this.set({loading:true})
    // setLoading(<Spinner/>)
    let data = await fetch(url);
   setProgress(30)
    let parseData=await data.json();
    setProgress(70)
    setArticles(parseData.articles)
    // setLoading(<Spinner/>)
    setTotalResults(parseData.totalResults)
    // this.setState({
    //   articles:parseData.articles,
    //   totalResults:parseData.totalResults,
    //   loading:false
      
    // });
    setProgress(100)

  }
 const capitalizeFirstLetter=(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
document.title=`NewsByU-${capitalizeFirstLetter(props.category)}`
useEffect(()=>{
  UpateData();
},[])
  // async componentDidMount(){
  //   // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
  //   // this.setState({loading:true})
  //   // let data = await fetch(url);
  //   // let parseData=await data.json();
  //   // this.setState({
  //   //   articles:parseData.articles,
  //   //   totalResults:parseData.totalResults,
  //   //   loading:false
      
  //   // });
   
  // }
//  const handlePrebutton=async ()=>{
//   // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page-1}&pageSize=${props.pageSize}`;
//   // this.setState({loading:true})
//   // let data = await fetch(url);
//   // let parseData=await data.json();
  
//   // this.setState({
//   //   page:this.state.page-1,
//   //   articles:parseData.articles,
//   //   loading:false

//   // })
// //  this.setState( {page:this.state.page-1})
// setPage(page)
//    UpateData()
//  }


 const fetchMoreData = async () => {
// this.setState({page:this.state.page+1  })

    let url=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pageSize=${pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parseData=await data.json();
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
//     this.setState({
//       articles:this.state.articles.concat(parseData.articles),
//       totalResults:parseData.totalResults,
//       loading:false   
  
// })
};

 
// const handleNextbutton=async ()=>{
//   if(page+1>Math.ceil(totalResults/pageSize)){

//   }
//   else{
//   // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page+1}&pageSize=${props.pageSize}`;
//   // this.setState({loading:true})
//   // let data = await fetch(url);
//   // let parseData=await data.json();
//   // console.log(parseData);
//   // this.setState({
//   //   page:this.state.page+1,
//   //   articles:parseData.articles,
//   //   loading:false
  
//   // });
//   // this.setState( {page:this.state.page+1})
//   setPage(page+1)
//    this.UpateData()
// }
//  }
 
 
  // render(props) {
    return (
      <div>
        <div className="container my-3">
            <h3 style={{textAlign:"center" ,marginTop:"60px ",marginBottom:"30px " ,color:"#CE2351"}}> Top News on {capitalizeFirstLetter(category)}  </h3>
           {/* { this.state.loading && <Spinner/>}   */}
           <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData} 
          // next={this.state.articles.length!==this.state.totalResults}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
    
        >
          <div className="container">
            <div className="row">
            {articles.map((ele)=>{
            return<div className="col-md-4" key={ele.url}>
                <NewsItem  title={ele.title} discription={ele.description} imageUrl={ele.urlToImage} newURL={ele.url} author={ele.author} date={ele.publishedAt} sources={ele.source.name}/>
                </div>})}
                
                </div>
            </div>
            </InfiniteScroll>
        </div>
        
        {/* <div className='container d-flex justify-content-between'>
        <button  disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrebutton}> &larr;Privious</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark"  onClick={this.handleNextbutton} >Next &rarr;</button>
        </div> */}
      </div>
    )
  }
// }


News.defaultProps = {
  country:'in',
  category:"technology",
  pageSize:5,
  totalResults:0

}
// News.PropTypes={
// country:PropTypes.string,
// pageSize:PropTypes.number

// }
export default News
