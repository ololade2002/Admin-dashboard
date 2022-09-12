import './Maindash.css';
import Cards from '../Cards/Cards';
import Table from '../React Table/Table'

const Maindash = () => {
    

    return ( 
        <div className="maindash">
            <h2>Dashboard</h2>
         <Cards/>
        <Table/>
        </div>
     );
}
 
export default Maindash;