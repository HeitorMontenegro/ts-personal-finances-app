import './FrontPanel.css'

type Props = {
  balanceInfo: number;
  monthSelector: number;
  setMonthSelector: React.Dispatch<React.SetStateAction<number>>;
  yearSelector: number
  setYearSelector: React.Dispatch<React.SetStateAction<number>>;
  expensesCount: number;
  revenueCount: number;
}


const FrontPanel = ({expensesCount, revenueCount, balanceInfo, monthSelector, setMonthSelector, yearSelector, setYearSelector}:Props) => {


  return (
    <div className="front__panel__container">

    
             <div className="front__panel__element">
             
                   <div className="front__panel__element__month">
             
                     <button className="btn" onClick={()=> monthSelector >= 2 ? setMonthSelector(monthSelector-1) : (setMonthSelector(12), setYearSelector(yearSelector-1))}>-</button>
             
                   <div> Month: {monthSelector} </div>
                     
                     <button className="btn" onClick={()=> monthSelector <=11 ? setMonthSelector(monthSelector+1) : (setMonthSelector(1), setYearSelector(yearSelector+1))}>+</button>
             
                     <div className="front__panel__element__year">Year: {yearSelector}</div>
                   </div>
      


      
    
      </div>
          <div className="front__panel__element">
            Revenue
            <div className={`${revenueCount > 0 ? "element__green" : "element__secondary"}`}>$ {revenueCount}</div>
            </div>
          <div className="front__panel__element">
            Expenses
          <div className={`${expensesCount > 0 ? "element__red" : "element__secondary"}`}>$ {expensesCount}</div>
          </div>
          <div className="front__panel__element">
            Balance
            <div className={`element__secondary ${balanceInfo > 0 && "element__green"} ${balanceInfo < 0 && "element__red"}`}>$ {balanceInfo}</div>
              </div>

    </div>
  )
}

export default FrontPanel;