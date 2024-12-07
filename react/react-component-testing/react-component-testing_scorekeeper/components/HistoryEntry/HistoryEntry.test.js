import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HistoryEntry from ".";

test("renders name of game and 'display more' button only", () => {
  const { container } = render(
    <HistoryEntry
      nameOfGame="Dodelido"
      players={[
        { name: "John", score: 2, id: "xyz" },
        { name: "Jane", score: 1, id: "abc" },
      ]}
    />
  );

  const nameOfGame = screen.getByText(/dodelido/i);
  const button = screen.getByRole("button", { name: /display more/i });
  const buttons = screen.getAllByRole("button");

  expect(nameOfGame).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  // according to description only one button (display more) should be shown
  expect(buttons).toHaveLength(1);

  // only 2 elements are expected to be rendered inside the span (firstChild)
  const entryElements = container.firstChild.children;
  expect(entryElements).toHaveLength(2);

  // Ensure they are the correct elements
  expect(entryElements[0].tagName).toBe("SPAN");
  expect(entryElements[1].tagName).toBe("BUTTON");
});

test("renders player names and scores after button click", async () => {
  render(
    <HistoryEntry
      nameOfGame="Dodelido"
      players={[
        { name: "John", score: 2, id: "xyz" },
        { name: "Jane", score: 1, id: "abc" },
      ]}
    />
  );

  const noPlayer1 = screen.queryByText(/john/i);
  const noPlayer2 = screen.queryByText(/jane/i);
  const noPlayerScore1 = screen.queryByText(/2/i);
  const noPlayerScore2 = screen.queryByText(/1/i);

  // button has not be clicked yet, so the queried elements above should not be found yet in the document
  expect(noPlayer1).not.toBeInTheDocument();
  expect(noPlayer2).not.toBeInTheDocument();
  expect(noPlayerScore1).not.toBeInTheDocument();
  expect(noPlayerScore2).not.toBeInTheDocument();

  const button = screen.getByRole("button", { name: /display more/i });
  await userEvent.click(button);

  const player1 = screen.getByText(/john/i);
  const player2 = screen.getByText(/jane/i);
  const playerScore1 = screen.getByText(/2/i);
  const playerScore2 = screen.getByText(/1/i);

  // since the submit Button has been clicked now, the queried elements above should be present in the document
  expect(player1).toBeInTheDocument();
  expect(player2).toBeInTheDocument();
  expect(playerScore1).toBeInTheDocument();
  expect(playerScore2).toBeInTheDocument();
});
