import { render, screen, waitFor } from "@testing-library/react";
import "intersection-observer";
import React from "react";
import App from "../views/App/App";

test("first render spinner", async () => {
  render(<App />);
  await waitFor(() => {
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });
});

test("first render card container", async () => {
  render(<App />);
  await waitFor(() => {
    const cardsList = screen.getByTestId("cards-container");
    expect(cardsList).toBeInTheDocument();
  });
});

// test("card count in first render", async () => {
//   await waitFor(() => {
//     const cardsList = screen.getByTestId("cards-container");
//     expect(cardsList.childElementCount).toBe(3);
//   });
// });
