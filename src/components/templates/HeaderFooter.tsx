import { FC, ReactNode } from 'react';

import { Header } from '../atoms/layout/Header';
import { Footer } from '../atoms/layout/Footer';

type Props = {
  children: ReactNode;
};

export const HeaderFooter: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
