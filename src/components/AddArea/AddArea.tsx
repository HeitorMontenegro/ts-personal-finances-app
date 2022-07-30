import './AddArea.css'
type Props = {
    submitAdd: (date:string, category:string, title:string, money:number) => void;

    dateInfo: string;
    setDate: React.Dispatch<React.SetStateAction<string>>;

    categoryInfo: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;

    titleInfo: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;

    moneyInfo: number;
    setMoney: React.Dispatch<React.SetStateAction<number>>;

}


const AddArea = ({dateInfo, setDate, categoryInfo, setCategory, titleInfo, setTitle, moneyInfo, setMoney, submitAdd}:Props) => {


const handlingAdd = () =>{
    (dateInfo !== "" && categoryInfo !== "" && titleInfo !== "" && moneyInfo !== 0 ? 
    submitAdd(dateInfo, categoryInfo, titleInfo, moneyInfo) :
    alert("Please, insert valid input"))
}


  return (
          <div className="add__area__container">
                            
                                                  <div className="add__area__element">
                                                        <h2>Date</h2>
                                                    <input name="" type="date" value={dateInfo} onChange={(e)=> setDate(e.target.value)}/>
                                                  </div>
                                                    <div className="add__area__element">
                                                        <h2>Category</h2>
                                                    <select onChange={(e)=> setCategory(e.target.value)}>
                                                        <option value=""></option>
                                                        <option value="Wage">Wage</option>
                                                        <option value="Food">Food</option>
                                                        <option value="Rent">Rent</option>
                                                    </select>
                                                    </div>
                                                    <div className="add__area__element">
                                                        <h2>Title</h2>
                                                    <input type="text" value={titleInfo} onChange={(e) => setTitle(e.target.value)} />
                                                    </div>
                                                    <div className="add__area__element">
                                                        <h2>Value</h2>
                                                    <input onFocus={(e) => e.target.value=('')} type="number" value={moneyInfo} onChange={(e) => setMoney(parseInt(e.target.value))}/>
                                                    </div>
                                                    <div className="add__area__element add__area__element__btn">
                                                        <button className="btn" onClick={()=> handlingAdd()}>Submit</button>
                                                    </div>
                                              </div>                                     
                         
                      );
}

export default AddArea