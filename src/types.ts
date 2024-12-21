import { JSX } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Product = {
  name: string;
  image: string;
};

export type Column<T> = {
  key: string;
  label: string;
  cellRenderer?: (value: T, row: any) => JSX.Element;
};

export type StringColumn = Column<string>;
export type ProductColumn = Column<Product>;
export type NumberColumn = Column<number>;
