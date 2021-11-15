import { useTransactions } from "../../hooks/useTransactions";
import { Container, DeleteButton } from "./styles";
import { FaTrashAlt } from 'react-icons/fa'

export function TransactionsTable(props : any){
  const {transactions, deleteTransaction } = useTransactions();

  function paginate(array : any, page_size :any, page_number : any) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  const pagination = paginate(transactions.sort(),5,props.numero ?? 1 )

  return (
    <Container>
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