import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { toast } from 'react-toastify';
import { api } from '../services/api';


interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt:  string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}


interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  deleteTransaction: (transactionID: any) => Promise<void>;
}

// interface TransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  async function fetchMyAPI() {
    await api.get('transactions')
     .then(response => setTransactions(response.data.transactions)); 
   }
  useEffect(() => {
      fetchMyAPI()
  }, [])

  async function createTransaction(transactionInput : TransactionInput){
    const response = await api.post('/transactions' , {
      ...transactionInput,
      createdAt: new Date(),
    })
    const newResponse = response.data;

    setTransactions([
      newResponse.transactions,
      ...transactions
    ])
  }

  async function deleteTransaction(transactionId : number){
    if(window.confirm('Deseja deletar?')){
      await api.delete(`/transactions/${transactionId}`).then(() => {
        toast.success('Deletado com sucesso')
      })
    }else{
      toast.error('Cancelado')
    }
    fetchMyAPI()
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction , deleteTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions(){
  const context = useContext(TransactionsContext);

  return context;
}