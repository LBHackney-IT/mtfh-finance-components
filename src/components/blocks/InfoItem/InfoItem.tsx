import { memo } from 'react';

import Typography from '../../ui/Typography';

type InfoItemProps = {
  className?: string;
  label: string;
  value: string | number;
};

const InfoItem = ({ label, value, className = '' }: InfoItemProps) => (
  <div data-testid="info-item" className={className}>
    <Typography variant="h2">{value}</Typography>
    <Typography size="s">{label}</Typography>
  </div>
);

export default memo(InfoItem);
