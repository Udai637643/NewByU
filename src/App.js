
import './App.css';
import React, { Component, useState } from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";


// export default class App extends Component {
  const App =()=>{
 let  PageSize=6;
  let apiKey="5071adab6dcd4ebeb8079ac9c9d97e9a"
  const city="in"
  // state={
  //   progress:0
  // }
  // setProgress=(progress)=>{
  //   setState({progress:progress})
  // }
  // render() {
   const [progress,setProgress]=useState(0)
    return (
     
      <Router>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      
      />
         <NavBar/>
      <div>
      <Routes>
        <Route exact  path="/"   element={<News  setProgress={setProgress} apiKey={apiKey}  key="gerneral"  pageSize={PageSize} country={city} category="general"/>} />
        <Route exact path="/business" element={<News  setProgress={setProgress} apiKey={apiKey}  key="business"  pageSize={PageSize} country={city} category="business"/>} />
        <Route exact path="/science" element={<News  setProgress={setProgress}apiKey={apiKey}   key="science" pageSize={PageSize} country={city} category="science"/>} />
        <Route exact path="/entertainment" element={<News  setProgress={setProgress}apiKey={apiKey}   key="entertainment" pageSize={PageSize} country={city} category="entertainment"/>} />
        <Route exact path="/general" element={<News  setProgress={setProgress} apiKey={apiKey}  key="general"  pageSize={PageSize} country={city} category="general"/>} />
        <Route exact path="/health"  element={<News  setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={PageSize} country={city} category="health"/>} />
        <Route exact path="/sports" element={<News  setProgress={setProgress} apiKey={apiKey}   key="sports" pageSize={PageSize} country={city} category="sports"/>} />
        <Route exact path="/technology"  element={<News  setProgress={setProgress}apiKey={apiKey}  key="techhnology" pageSize={PageSize} country={city} category="technology"/>} />
        
      
      </Routes>
      </div>
      </Router>
    )
  }
// }

export default App
