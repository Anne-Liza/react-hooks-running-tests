// import libraries needed for testing
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";


// import the component i wrote
import Header from "../components/Header";

// test the component
test("displays the text 'hello from the Header!'", () => {
  render(<Header />);

  expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
});
