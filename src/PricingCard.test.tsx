// filepath: ./PricingCard.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import PricingCard from "./PricingCard";

describe("PricingCard Component", () => {
  it("renders the component correctly", () => {
    render(<PricingCard />);

    expect(screen.getByRole("heading", { name: /Powerful features for powerful creators/i })).toBeInTheDocument();
    expect(screen.getByText(/Freebie/i)).toBeInTheDocument();
    expect(screen.getByText(/Professional/i)).toBeInTheDocument();
    expect(screen.getByText(/Enterprise/i)).toBeInTheDocument();
  });

  it("displays the correct pricing plans", () => {
    render(<PricingCard />);
    const plans = ["Freebie", "Professional", "Enterprise"];
    plans.forEach(plan => {
      expect(screen.getByRole("heading", { name: plan })).toBeInTheDocument();
    });
  });

  it("renders all buttons correctly", () => {
    render(<PricingCard />);
    const buttons = screen.getAllByRole("button", { name: /get started now/i });
    expect(buttons.length).toBe(3);
    buttons.forEach(button => expect(button).toBeInTheDocument());
  });

  it("displays the correct pricing for each plan", () => {
    render(<PricingCard />);
    const prices = ["$0", "$25", "$100"];
    prices.forEach(price => {
      expect(screen.getByText(price)).toBeInTheDocument();
    });
  });

  // switches to dark more on button click
  it("switches to dark mode on button click", () => {
    render(<PricingCard />);
    const button = screen.getByRole("button", { name: /dark mode/i });
    fireEvent.click(button);
    const cardElement = document.getElementsByClassName("card")[0];
    expect(cardElement.classList.contains("bg-[#1E293B]")).toBe(true);
    fireEvent.click(button);
    expect(cardElement.classList.contains("bg-gray-100")).toBe(true);
  })
});
