import { rawPeriod } from "../helpers/period"
import { v1 as uuid } from 'uuid';

const Teacher = ({date, teacher}) => {
    
    let day = date.getDay()
    let period = rawPeriod(date)
    let classes = teacher.slice( 11*(day-1)+1 , 11*day+1 )    
    classes.splice(4,0,'-')

    
    
    return (

        classes.map( (b, i) => {
            
            const block = b.replace(/"/g,"")

            if (i === period) {
                return <td key={uuid()} className='highlight'>{block}</td>
            } else {
                return <td key={uuid()}>{block}</td>
            }
        })

    )
}

export default Teacher