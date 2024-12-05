import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";
import { handleClientScriptLoad } from "next/script";

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

test("submits the correct form data when every field is filled out", async () => {
  const handleSubmit = jest.fn();

  render(<GameForm onCreateGame={handleSubmit} />);

  const user = userEvent.setup();

  // simulate filling out the form fields
  const [nameOfGame, playerNames] = screen.getAllByRole("textbox");
  await user.type(nameOfGame, "Gothic 2");
  await user.type(playerNames, "Skip, Ronald");

  // simulate pressing the submit button
  const submitButton = screen.getByRole("button", { name: "Create game" });
  await user.click(submitButton);

  // checking if the mock function was called with the correct data
  expect(handleSubmit).toHaveBeenCalledWith({
    nameOfGame: "Gothic 2",
    playerNames: ["Skip", "Ronald"],
  });

  // Submit function should have been called only one time
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

test("does not submit form if one input field is left empty", async () => {});
