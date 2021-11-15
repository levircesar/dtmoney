import { useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { Container, DeleteButton, Pagination } from "./styles";
import { FaTrashAlt } from 'react-icons/fa'

export function TransactionsTable(){
  const {transactions, deleteTransaction } = useTransactions();
  const [page, setPage] = useState(1)
  const maxPage = Math.ceil(transactions.length / 5)


  function paginate(array : any, page_size :any, page_number : any) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  const pagination = paginate(transactions.sort(),5,page)

  function handleNextPage(){
    if(page === maxPage){
      return;
    }
    setPage(page + 1)
  }
  function handleLastPage(){
    if(page === 1){
      return
    }
    setPage(page - 1)
  }

  return (
    <Container>
      <Pagination>
          <button onClick={handleLastPage}>Anterior</button>
          <h2>{page}</h2>
          <button onClick={handleNextPage}>Proxima</button>
      </Pagination>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {pagination.map((transaction : any) =>  (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
                {/* {transaction.createdAt} */}
              </td>
              <td>
                <DeleteButton onClick={()=>deleteTransaction(transaction.id)}>
                  <FaTrashAlt />
                </DeleteButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}