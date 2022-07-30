import './ListItem.css'
import { Item } from '../../types/Item'

type Props = {
  item: Item;
}


const ListItem = ({ item }: Props) => {


  return (
<div className="list__item__container">


  <div className="list__item__element">
    Date
    <div className="list__item__data">{item.date}</div>
    </div>
  
  <div className="list__item__element">
    Category
    <div className="list__item__data">{item.category}</div>
    </div>
  
  <div className="list__item__element">
    Title
   <div className="list__item__data">{item.title}</div>
    </div>
  
  <div className="list__item__element">
    Value
    <div className={`list__item__data ${item.category === "Wage" ? "element__green" : "element__red"}`}>$ {item.money}</div>
    </div>

</div>
  );
}

export default ListItem