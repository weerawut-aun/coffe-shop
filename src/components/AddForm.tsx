import { AddressElement } from "@stripe/react-stripe-js";
import React from "react";

const AddressForm = () => {
  return (
    <form>
      <AddressElement
        options={{ mode: "shipping" }}
        onChange={(event) => {
          if (event.complete) {
            const address = event.value.address;
          }
        }}
        className="bg-transparent"
      />
    </form>
  );
};

export default AddressForm;
