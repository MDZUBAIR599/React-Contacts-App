import { Button, FormControl, Input, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Update() {
  let parms = useParams();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  let hello = () => {
    axios.patch(`http://localhost:5000/api/contact/${parms.update_id}`, {
      name,
      number,
      email,
    });
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
            <Link to="/read">
              <Button
                color="white"
                backgroundColor="black"
                colorScheme="facebook"
                onClick={hello}
              >
                Update
              </Button>
            </Link>
          </Spacer>
        </VStack>
      </FormControl>
    </div>
  );
}
