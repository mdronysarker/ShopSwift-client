import React from "react";
import Container from "./ShareComponents/Container";
import Heading from "./Heading";
import Product from "./ShareComponents/Product";
import Flex from "./ShareComponents/Flex";

export default function Newarrival() {
  return (
    <Container>
      <Heading
        heading="New Arrivals"
        para="Grab these new items before they are gone!"
      />
      <Flex className="gap-6 mt-8">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Flex>
    </Container>
  );
}
