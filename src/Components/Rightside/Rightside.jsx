import './Rightside.css';
import Update from '../Updates/Update';
import Review from '../Review/Review';

const Rightside = () => {

    return ( 
        <div className="rightside">
            <h3>Updates</h3>
         <Update/>
         <h3>Customer Review</h3>
        <Review></Review>
         
        </div>
     );
}
 
export default Rightside;