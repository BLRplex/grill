import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { updateGrill } from "../actions";
import sampleData from "../sample-data.json";

const JSONInput = () => {
  const [json, setJson] = useState(() => {
    try {
      return JSON.stringify(sampleData, void 0, 2);
    } catch {
      return "";
    }
  });

  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const JSONObject = JSON.parse(json);
      setError("");
      dispatch(updateGrill(JSONObject));
    } catch (error) {
      setError(error.toString());
    }
  }, [json]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setJson(value);
  };

  return (
    <Form>
      <Form.Group controlId="json-input">
        <Form.Label>Input JSON</Form.Label>
        <Form.Control
          value={json}
          onChange={handleInputChange}
          as="textarea"
          rows={10}
          isValid={!error}
        />
        {error}
      </Form.Group>
    </Form>
  );
};

export default JSONInput;
