import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from './Button';
import userEvents from "@testing-library/user-event";

describe("Button", () => {
  const title = 'Button content';
  const dataTestid = 'button';

  it('Render Button and content', () => {
    const { getByText } = render(<Button>{title}</Button>);

    expect(getByText(title)).toBeInTheDocument();
  });

  it('Button click event', async () => {
    const fn = jest.fn();

    render(<Button onClick={fn}>{title}</Button>);

    const buttonElement = screen.getByTestId(dataTestid);

    await userEvents.click(buttonElement);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('Button on press Enter', async () => {
    const fn = jest.fn();

    render(<Button onClick={fn}>{title}</Button>);

    await userEvents.tab();

    const buttonElement = screen.getByTestId(dataTestid);

    await userEvents.type(buttonElement, '{enter}');

    expect(fn).toHaveBeenCalled();
  });
});
