import { Button, FormControl, Input, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Create() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  let hello = () => {
    axios.post(`http://localhost:5000/api/contact`, {
      name,
      number,
      email,
    });
    setName("");
    setNumber("");
    setEmail("");
  };
  return (
    <div>
        <br />
        <br />
      <FormControl width="400px" margin="auto">
        <VStack spacing={5}>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter-Name"
          />
          <Input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Number"
          />
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-Mail"
          />
          <Spacer flexDirection="row">
            <Button
              color="white"
              backgroundColor="black"
              colorScheme="facebook"
              onClick={hello}
            >
              Create
            </Button>
          </Spacer>
        </VStack>
      </FormControl>
    </div>
  );
}
