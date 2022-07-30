import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
let linking = [
  {
    to: "/",
    title: "CREATE",
  },
  {
    to: "/read",
    title: "READ",
  },
  {
    to: "/update",
    title: "UPDATE",
  },
  {
    to: "/delete",
    title: "DELETE",
  },
];
export default function Navbar() {
  return (
    <div>
      <Flex
        justifyContent="space-around"
        marginTop="20px
      "
      >
        {linking.map((item) => (
          <Box key={item.to}>
            <Button color="white" backgroundColor="black" colorScheme="facebook">
              <NavLink to={item.to} key={item.to}>
                {item.title}
              </NavLink>
            </Button>
          </Box>
        ))}
      </Flex>
    </div>
  );
}
