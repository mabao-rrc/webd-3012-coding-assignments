/**
 * Name: Marissa Abao
 * Submission Date: June 25, 2025
 * Class: WEBD-3012
 * Coding Assignment 12: Web Component Library
 * Filename: Table.tsx
 * Description: This file defines the Table component, a reusable and responsive
 * component that supports striped rows, bordered cells, and hover effects.
 */

import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

// Styled table element with optional striped, bordered, and hoverable features
const StyledTable = styled.table<{
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
}>`
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;

  th,
  td {
    padding: 10px;
    text-align: left;
    ${({ bordered }) => bordered && 'border: 1px solid #ccc;'}
  }

  tbody tr:nth-child(even) {
    ${({ striped }) => striped && 'background-color: #f9f9f9;'}
  }

  tbody tr:hover {
    ${({ hoverable }) =>
      hoverable && 'background-color: #f0f8ff; cursor: pointer;'}
  }

  thead {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  tfoot {
    background-color: #f9f9f9;
    font-weight: bold;
  }
`;

const Table: React.FC<TableProps> = ({ headers, rows, footer, striped, bordered, hoverable }) => {
  return (
    <StyledTable striped={striped} bordered={bordered} hoverable={hoverable}>
      {headers && (
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
      {footer && (
        <tfoot>
          <tr>
            {footer.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        </tfoot>
      )}
    </StyledTable>
  );
};

export default Table;
