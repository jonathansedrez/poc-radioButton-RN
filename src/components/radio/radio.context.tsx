import {createContext} from 'react';

type RadioContextActions = {
  currentValue: string;
  handleChange(value: string): void;
};

export const RadioContext = createContext<RadioContextActions>(undefined!);
