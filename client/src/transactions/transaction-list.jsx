import { useContext, useState } from "react";
import { TransactionContext } from "./transaction-provider";
// import Transaction from "./transaction";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Icon from "@mdi/react";
import { mdiRefresh, mdiPlus } from "@mdi/js";

import TransactionItemForm from "./transaction-item-form";

function TransactionList() {
  const { data, state, date, handlerMap } = useContext(TransactionContext);
  const [showTransactionItemForm, setShowTransactionItemForm] = useState(false);

  return (
    <div>
      {showTransactionItemForm && (
        <TransactionItemForm
          setShowTransactionItemForm={setShowTransactionItemForm}
        />
      )}
      <h1>
        <Stack direction="horizontal" gap={3}>
          <div>Seznam transakcí</div>
          <div className="ms-auto">
            <div style={{ display: "flex", gap: 8 }}>
              <Form.Control
                type="month"
                value={date}
                onChange={(e) => handlerMap.setDate(e.target.value)}
              />

              <Button
                variant="outline-success"
                size="sm"
                onClick={() => {
                  handlerMap.fetchCategories();
                }}
              >
                <Icon path={mdiRefresh} size={1} spin={state === "loading"} />
              </Button>
              <Button
                variant="success"
                size="sm"
                onClick={() => {
                  setShowTransactionItemForm({});
                }}
              >
                <Icon path={mdiPlus} size={1} spin={state === "loading"} />
              </Button>
            </div>
          </div>
        </Stack>
      </h1>
    </div>
  );
}

export default TransactionList;
