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
});
