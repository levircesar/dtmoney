import { useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import BarChat from "../BarChart";
import DonutChart from "../DonutChart";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container, Grid, Pagination } from "./styles";

export function Dashboard(){
  const {transactions } = useTransactions();
  const [page, setPage] = useState(1)
  const maxPage = Math.ceil(transactions.length / 5)

  function handleNextPage(){
    setPage(page + 1)
  }
  function handleLastPage(){
    setPage(page - 1)
  }
  return (
    <Container>
      <Summary />
      <Pagination >
          <button disabled={page === 1} onClick={handleLastPage}>Anterior</button>
          <h2>{page}</h2>
          <button disabled={page === maxPage} onClick={handleNextPage}>Proxima</button>
      </Pagination>
      <TransactionsTable numero={page} />
      <Grid>
        <BarChat />
        <DonutChart />
      </Grid>
    </Container>
  );
}