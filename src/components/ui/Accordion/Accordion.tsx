import { memo } from 'react';
import type { PropsWithChildren } from 'react';

import MUIAccordion from '@mui/material/Accordion';

import styles from './Accordion.module.scss';

type AccordionProps = PropsWithChildren<{
  isExpanded: boolean;
}>;

const Accordion = ({ isExpanded, children }: AccordionProps) => (
  <MUIAccordion
    expanded={isExpanded}
    classes={{ root: styles.root, expanded: styles.expanded }}
  >
    {children}
  </MUIAccordion>
);

export default memo(Accordion);
