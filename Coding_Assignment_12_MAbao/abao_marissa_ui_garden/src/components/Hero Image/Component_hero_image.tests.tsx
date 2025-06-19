/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_hero_image.tests.tsx
 * Description: This file contains unit tests for the HeroImage component using
 * React Testing Library. It tests conditional rendering of headings and overlay.
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Component_hero_image from "./Component_hero_image";

describe("Component_hero_image", () => {
  test("renders with heading and subheading", () => {
    render(
      <Component_hero_image
        imageUrl="https://example.com/hero.jpg"
        heading="Hello"
        subheading="Subtext here"
        overlay={true}
      />
    );

    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("Subtext here")).toBeInTheDocument();
  });

  test("does not render text when heading and subheading are missing", () => {
    render(<Component_hero_image imageUrl="https://example.com/hero.jpg" />);
    expect(screen.queryByText("Hello")).not.toBeInTheDocument();
  });
});
