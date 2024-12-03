import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  const handleChange = jest.fn();

  render(
    <Input
      labelText={"input-text"}
      placeholder={"Please type in something."}
      name={"input"}
      required={true}
      onChange={handleChange}
      value={"test value"}
    />
  );

  // getByText addresses the label itself, not the input field
  const label = screen.getByText(/input-text/i);
  const inputField = screen.getByRole("textbox");

  // label checks
  expect(label).toBeInTheDocument();
  expect(label).toHaveAttribute("for", "input");
  expect(label).toHaveTextContent("input-text");

  // input field checks
  expect(inputField).toBeInTheDocument();
  expect(inputField).toHaveAttribute(
    "placeholder",
    "Please type in something."
  );
  expect(inputField).toHaveAttribute("value", "test value");
  expect(inputField).toHaveAttribute("name", "input");

  expect(inputField).toBeRequired();
});

test("calls callback on every user input", async () => {
  const handleChange = jest.fn();

  const user = userEvent.setup();

  render(
    <Input
      labelText={"input-text"}
      placeholder={"Please type in something."}
      name={"input"}
      required={true}
      onChange={handleChange}
      value={"test value"}
    />
  );

  const inputField = screen.getByLabelText(/input-text/i);

  await user.type(inputField, "Test");

  expect(handleChange).toHaveBeenCalledTimes(4);
});
