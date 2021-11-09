import BarChat from "../BarChart";
import DonutChart from "../DonutChart";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container, Grid } from "./styles";

export function Dashboard(){
  return (
    <Container>
      <Summary />
      <TransactionsTable />
      <Grid>
        <BarChat />
        <DonutChart />
      </Grid>
    </Container>
  );
}