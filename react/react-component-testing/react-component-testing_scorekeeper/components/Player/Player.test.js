import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  const onDecreasePlayerScore = jest.fn();
  const onIncreasePlayerScore = jest.fn();

  render(
    <Player
      name={"Paul"}
      score={15}
      onDecreasePlayerScore={onDecreasePlayerScore}
      onIncreasePlayerScore={onIncreasePlayerScore}
    />
  );

  // player information should be shown
  const playerName = screen.getByText(/paul/i);
  const playerScore = screen.getByText(/15/i);

  expect(playerName).toBeInTheDocument();
  expect(playerScore).toBeInTheDocument();

  // player component should always show 2 buttons (increase/decrease)
  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const handleDecreasePlayerScore = jest.fn();
  const handleIncreasePlayerScore = jest.fn();
  const user = userEvent.setup();

  render(
    <Player
      name={"Sascha"}
      score={9}
      onDecreasePlayerScore={handleDecreasePlayerScore}
      onIncreasePlayerScore={handleIncreasePlayerScore}
    />
  );

  const increaseButton = screen.getByRole("button", {
    name: /increase score/i,
  });

  const decreaseButton = screen.getByRole("button", {
    name: /decrease score/i,
  });

  await user.click(decreaseButton);
  await user.click(increaseButton);

  expect(handleIncreasePlayerScore).toHaveBeenCalledTimes(1);
  expect(handleDecreasePlayerScore).toHaveBeenCalledTimes(1);
});
