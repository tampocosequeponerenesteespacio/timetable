import React, { useEffect, useState } from "react"
import Timetable from "./components/Timetable"
import allTeachers from "./helpers/teachers"
import {
  HashRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import whatPeriod from "./helpers/period"




function App() {
  const [date, setDate] = useState(new Date())
  
  useEffect( () => {
    setInterval( () => {
      setDate(new Date())
    },1000)
  },[])

  const padding = {
    padding: 5
  }  


  return (
    <div className='maindiv'>
      <Router>
      <div id='header' >
        <Link style={padding} to="/"><button className='menuButton sci'>SCIENCE</button></Link>
        <Link style={padding} to="/phy"><button className='menuButton phy'>PHYSICS</button></Link>
        <Link style={padding} to="/chem"><button className='menuButton chem'>CHEMISTRY</button></Link>
        <Link style={padding} to="/bio"><button className='menuButton bio'>BIOLOGY</button></Link>
      </div>

      
      <Switch>
      <Route path="/phy">
          <Timetable date={date} teachers={allTeachers.PHY} />
        </Route>
        <Route path="/chem">
          <Timetable date={date} teachers={allTeachers.CHE} />
        </Route>
        <Route path="/bio">
          <Timetable date={date} teachers={allTeachers.BIO} />
        </Route>
        <Route path="/">
          <Timetable date={date} teachers={allTeachers.SCI} />
        </Route>
      </Switch>
      </Router>

      <div id='time'>
        <h1>Period: {whatPeriod(date)}</h1>
        <h1>{date.toLocaleTimeString()}</h1>
      </div>
    </div>
    
    
      
      
      
      
    
  )
}
export default App;
