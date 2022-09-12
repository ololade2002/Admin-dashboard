import './Update.css';
import { updateData } from '../../dashboarddata/data';

const Update = () => {

    return ( 
        <div className="update">
          
         {updateData.map((update,index)=> (
             <div className="update-preview" key={index}>
             <img src={update.img} alt="" />
            <div className="text">
              <div>
              <span>{update.name}</span>
               <span>{update.not}</span>
              </div>
             <span>{update.time}</span>
            </div>
             </div>
         ))}
        </div>
     );
}
 
export default Update;