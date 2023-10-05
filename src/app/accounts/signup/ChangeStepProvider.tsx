'use client';

import React from 'react';

type ChangeStepContextProps = {
  currentStep: string;
  setCurrentStep: React.Dispatch<string>;
};

const ChangeStepContext = React.createContext<ChangeStepContextProps>(
  {} as ChangeStepContextProps
);

export const useChangeStepContext = () => React.useContext(ChangeStepContext);

function ChangeStepProvider({ children }: React.PropsWithChildren) {
  const [currentStep, setCurrentStep] = React.useState<string>('userData');

  return (
    <ChangeStepContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </ChangeStepContext.Provider>
  );
}

export default ChangeStepProvider;
