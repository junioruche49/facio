import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

function SubmitButton({ title, onPress }) {
  const { handleSubmit } = useFormikContext();

  return <Button title={title} onPress={onPress} />;
}

export default SubmitButton;
