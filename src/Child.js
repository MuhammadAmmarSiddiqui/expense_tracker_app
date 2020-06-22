import React, { useContext, useState } from 'react';
import {TransactionContext} from './transContext';


function Child() {
    let { transactions, addTransaction } = useContext(TransactionContext);
    let [newdesc, setdesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) =>{
        event.preventDefault();
        console.log(newdesc, newAmount);
        addTransaction({
            amount: newAmount,
            desc: newdesc
        })
    }

    console.log(transactions);
    const Incomes = ()=>{
        let income = 0;
        for(var i=0; i < transactions.length; i++) {
            if(transactions[i].amount > 0)
                income = parseFloat(income) + parseFloat(transactions[i].amount)
        }
        return income;
    }

    const Expenses = ()=>{
        let expense = 0;
        for(var i=0; i < transactions.length; i++) {
            if(transactions[i].amount < 0)
                expense = parseFloat(expense) + parseFloat(transactions[i].amount)
        }
        return expense;
    }

    const Balance = ()=>{
        let balance = 0;
        balance = Incomes() + Expenses();
        return balance;
    }

    return (
      <div className='container'>
        <div className='Transactions'>
            <h1 className='text-center'>EXPENSE TRACKER</h1>

            <h3>YOUR BALANCE <br />RS.{Balance()}</h3>

            <div className='expense-container'>
                <h3 className='income'>INCOME <br />Rs.{Incomes()}</h3>
                <h3 className='expense'>EXPENSE <br />Rs.{Expenses()}</h3>
            </div>

            


        
            <h3>Add new transaction</h3>
            <hr />

            <form className='transaction-form' onSubmit={handleAddition}>
                <label>
                    Enter Description <br />
                    <input type='text' className='input-style' onChange={(ev)=>setdesc(ev.target.value)} required />
                </label>
                <br />

                <label>
                    Enter Amount <br />
                    <input type='number' className='input-style' onChange={(ev)=>setAmount(ev.target.value)} required />

                </label>
                <br />
                <input type='submit' value='Add Transaction' className='input-btn'></input>
                
            </form>
        </div>

        <div className='history'>
        <h3>History</h3>
        <hr />

        <ul className='transaction-list'>
            {transactions.map((transObj, ind) => {
                return (<li key={ind}>
                    <span>{transObj.desc}</span>
                    <span>Rs.{transObj.amount}</span>
                </li>
                )
            })}
        </ul>

        </div>
      </div>
    );
  }
  
  export default Child;
  