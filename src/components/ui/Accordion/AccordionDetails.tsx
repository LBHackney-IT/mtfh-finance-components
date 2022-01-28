import { memo } from 'react';
import type { PropsWithChildren } from 'react';
import MUIAccordionDetails from '@mui/material/AccordionDetails';

import styles from './Accordion.module.scss';

type AccordionDetailsProps = PropsWithChildren<{}>;

const AccordionDetails = ({ children }: AccordionDetailsProps) => (
  <MUIAccordionDetails classes={{ root: styles.details }}>
    {children}
  </MUIAccordionDetails>
);

export default memo(AccordionDetails);
