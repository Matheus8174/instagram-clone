import type { PropsWithChildren } from 'react';

import { twMerge } from 'tailwind-merge';

import LinkUnstyled, { LinkProps } from 'next/link';

const Link = ({
  className,
  ...props
}: PropsWithChildren<LinkProps & { className?: string }>) => (
  <LinkUnstyled className={twMerge('text-blue-900', className)} {...props} />
);

export default Link;
