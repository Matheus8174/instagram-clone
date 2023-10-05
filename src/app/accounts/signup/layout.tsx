'use client';

import ChangeStepProvider from './ChangeStepProvider';

function RootLayout({ children }: React.PropsWithChildren) {
  return <ChangeStepProvider>{children}</ChangeStepProvider>;
}

export default RootLayout;
