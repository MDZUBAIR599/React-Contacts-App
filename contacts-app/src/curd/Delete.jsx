import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Delete() {
  const [item, setItem] = useState([]);
  const [empty, setEmpty] = useState([]);
  let parms = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/contact/${parms.delete_id}`)
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let dele = () => {
    axios
      .delete(`http://localhost:5000/api/contact/${parms.delete_id}`)
      .then((res) => {
        console.log(res.data);
        setEmpty(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Number</Th>
              <Th>E-Mail</Th>
              <Th>Update</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.name}</Td>
              <Td>{item.number}</Td>
              <Td>{item.email}</Td>
              <Td>
                <Link to={`/update/${item.id}`}>
                  <Button backgroundColor="green.400">Update</Button>
                </Link>
              </Td>
              <Td>
                <Link to="/read">
                  <Button onClick={dele} backgroundColor="Red">
                    Delete
                  </Button>
                </Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
