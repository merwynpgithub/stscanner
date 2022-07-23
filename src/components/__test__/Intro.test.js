import { render, screen } from "@testing-library/react"
import Intro from "../Intro"

test("it renders the Intro component", () => {
  render(<Intro />);
  screen.debug();
  const linkElement = screen.getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});