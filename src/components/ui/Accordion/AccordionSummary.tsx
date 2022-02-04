import { memo } from 'react';
import type { PropsWithChildren } from 'react';
import MUIAccordionSummary from '@mui/material/AccordionSummary';

import styles from './Accordion.module.scss';

type AccordionSummaryProps = PropsWithChildren<{}>;

const AccordionSummary = ({ children }: AccordionSummaryProps) => (
  <MUIAccordionSummary classes={{ root: styles.summary, content: styles.content }}>
    {children}
  </MUIAccordionSummary>
);

export default memo(AccordionSummary);
