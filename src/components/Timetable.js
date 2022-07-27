import { rawPeriod } from "../helpers/period"
import Teacher from "./Teacher"
import { v1 as uuid } from 'uuid';


const Header = ({date}) => {
  let period = rawPeriod(date)
    const arr = ["",1,2,3,4,'B',5,6,7,8,9,10,11]
    return (
      arr.map( (n, i) => {
        if ( period === i-1 ) {
          return <td style={{fontWeight:'bold'}} className='highlight' key={uuid()}>{n}</td>
        } else {
          return <td style={{fontWeight:'bold'}} key={uuid()}>{n}</td>
        }
      })
    )  
  }


const Timetable = ({date, teachers}) => {
    
    
    
    return(
      <div id='timetable'>
        <table >
            <tbody>
                <tr key='header'>
                    <Header date={date}  />
                </tr>
                {teachers.map( (t) => {            
                    return (
                        <tr key={uuid()}>
                        <td key={uuid()}>{t[0].replace(/"/g,"")}</td>
                        <Teacher teacher={t} date={date} />
                        </tr>
                    )
                })}
            </tbody>
        </table>

      </div>
        
    )

}

export default Timetable