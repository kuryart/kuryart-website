// TranslationWrapper.js
import { ReactNode } from 'react';
import TranslationContext from "./TranslationContext";

interface TranslationWrapperProps {
    children: ReactNode;
    language: string;
  }

const TranslationWrapper = ({ children, language }: TranslationWrapperProps) => {
  return <TranslationContext.Provider value={language}>{children}</TranslationContext.Provider>;
};

export default TranslationWrapper;
