import './Cards.css';
import Card from '../Card/Card';
import { cardsData } from '../../dashboarddata/data';

const Cards = () => {
    return (
        <div className="cards"> 
        {cardsData.map((card,index)=> {
            return (
                     <div className="cards-preview" key={index}>
                <Card
               title={card.title}
                color={card.color} 
                png={card.png} 
               barValue={card.barValue}  
                series={card.series}
               value={card.value}  />
            </div>
            )
        })}      
        </div>
      );
}
 
export default Cards;