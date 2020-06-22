import React, { createContext, useReducer } from 'react';
import TransactionReducer from './transReducer'


const initialTransactions = [
    {amount: 0, desc: 'Cash'},
    {amount: 0, desc:  'Book'},
    {amount: 0, desc:  'Camera'}
]
export const TransactionContext = createContext(initialTransactions);

//let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

export const TransacationProvider =({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type: 'ADD TRANSACTION',
            payload: {
                amount : transObj.amount,
                desc : transObj.desc
            }
        })
    }
    
    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )

}

