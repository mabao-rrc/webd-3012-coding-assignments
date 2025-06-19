/**
 * Name: Marissa Abao
 * Submission Date: June 30, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Component_card.tsx
 * Description: Renders a customizable Card component with optional image,
 * title, content, and footer. Supports disabled state styling.
 */

import React from "react";
import styled from "styled-components";
import { CardProps } from "./Component_card.types";

// Styled wrapper for the entire card
const StyledCard = styled.div<{ disabled?: boolean }>`
  border: 1px solid #ccc;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  background-color: #fff;
  transition: box-shadow 0.3s ease-in-out;
  max-width: 300px;
  margin: auto;
`;

// Styled image for the card (optional)
const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

// Styled section for the card's title
const CardTitle = styled.h3`
  margin: 16px;
  font-size: 1.25rem;
  color: #333;
`;

// Styled section for the card's content
const CardContent = styled.p`
  margin: 0 16px 16px 16px;
  font-size: 1rem;
  color: #555;
`;

// Styled footer text or element
const CardFooter = styled.div`
  margin: 16px;
  font-size: 0.875rem;
  color: #777;
  border-top: 1px solid #eee;
  padding-top: 8px;
`;

const Component_card: React.FC<CardProps> = ({
  title,
  content,
  imageUrl,
  footer,
  disabled = false,
}) => {
  return (
    <StyledCard disabled={disabled}>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </StyledCard>
  );
};

export default Component_card;
