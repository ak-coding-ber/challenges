import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);

  // 2 input fields should be rendered
  const InputFields = screen.getAllByRole("textbox");
  expect(InputFields).toHaveLength(2);

  //a button should be rendered - extra Check: button text should be 'Create game'
  const createGameButton = screen.getByRole("button", { name: "Create game" });
  expect(createGameButton).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);

  const form = screen.getByRole("form", { name: "Create a new game" });

  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {});

test("does not submit form if one input field is left empty", async () => {});
