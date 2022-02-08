import { memo } from 'react';

import Typography from '../Typography';

type NoDataProps = {
    className?: string
};

const NoData = ({ className = "" }: NoDataProps) => (
  <Typography variant="h4" className={className}>
    No results
  </Typography>
);

export default memo(NoData);
