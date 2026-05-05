import TransactionProvider from "./transaction-provider";
import TransactionStateResolver from "./transaction-state-resolver";
import Container from "react-bootstrap/Container";

const Categories = () => {
  return (
    <TransactionProvider>
      <Container>
        <TransactionStateResolver />
      </Container>
    </TransactionProvider>
  );
};

export default Categories;
