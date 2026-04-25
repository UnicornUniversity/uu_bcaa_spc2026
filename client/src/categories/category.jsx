import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

function Category({ data }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleCreate = () => {
    console.log({ name, desc });
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "160px auto 80px",
        gap: 8,
      }}
    >
      <div>
        <Form.Control
          type="text"
          placeholder="Název kategorie"
          buttons
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <Form.Control
          type="text"
          placeholder="Popis kategorie"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div>
        {!data?.id ? (
          <Button
            variant="success"
            onClick={() => {
              handleCreate();
            }}
            size="sm"
            disabled={!name}
          >
            <Icon path={mdiPlus} size={1} />
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={() => {
              handleCreate();
            }}
          >
            Upravit
          </Button>
        )}
      </div>
    </div>
  );
}

export default Category;
