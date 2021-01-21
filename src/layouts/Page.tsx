import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';

interface IProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export type Ref = HTMLDivElement;

export const Page = forwardRef<Ref, IProps>((props, ref) => {

  const { children, className, title = '' } = props;

  return (
    <div ref={ref} className={className}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});
