import React, { useEffect, useState } from 'react'
import { Item } from './types/Item'
import ListItem from './components/ListItem/ListItem';
import AddArea from './components/AddArea/AddArea';
import FrontPanel from './components/FrontPanel/FrontPanel';

const App = () => {
  const [monthSelector, setMonthSelector] = useState((new Date().getMonth() + 1));
  const [yearSelector, setYearSelector] = useState((new Date().getFullYear()));
  const [dateInfo, setDate] = useState('');
  const [categoryInfo, setCategory] = useState('');
  const [titleInfo, setTitle] = useState('');
  const [moneyInfo, setMoney] = useState(0);
  const [balanceInfo, setBalance] = useState(0)
  const [revenueCount, setrevenueCount] = useState(0);
  const [expensesCount, setexpensesCount] = useState(0);
  const [list, setList] = useState<Item[]>([]);
  const [filteredList, setfilteredList] = useState<Item[]>([]);


  const handleAdd = (date: string, category: string, title:string, money: number) =>{
    let newList = [...list];
    newList.push({
      title: title,
      id: list.length+1,
      category: category,
      date: date,
      money: money
    })
    setList(newList);
  }


  useEffect(() =>{
    let newList: Item[] = [];
    list.map( 
      (item, index) => (parseInt((item.date).split('-')[0]) === yearSelector && parseInt((item.date).split('-')[1]) === monthSelector) &&
      newList.push(item))
    setfilteredList(newList);
  },[list, monthSelector])

useEffect(() =>{
  let balanceCount = 0;
  let expenseCount = 0;
  let revenueCount = 0;
  for (let i in filteredList){
    filteredList[i].category === "Wage" ? 
    revenueCount += filteredList[i].money :
    expenseCount += filteredList[i].money
    balanceCount = revenueCount - expenseCount
  } 
  setexpensesCount(expenseCount);
  setrevenueCount(revenueCount);
  setBalance(balanceCount);
},[filteredList])

  return (
    <>

    
 
  
    <FrontPanel revenueCount={revenueCount} expensesCount={expensesCount} monthSelector={monthSelector} setMonthSelector={setMonthSelector} yearSelector={yearSelector} setYearSelector={setYearSelector} balanceInfo={balanceInfo}/>

    <AddArea submitAdd={handleAdd} dateInfo={dateInfo} setDate={setDate} categoryInfo={categoryInfo} setCategory={setCategory} titleInfo={titleInfo} setTitle={setTitle} moneyInfo={moneyInfo} setMoney={setMoney}/>

  {
  filteredList.map((item, index) => (
   <ListItem key={index} item={item}/> )
)}

</>
);
}
export default App;