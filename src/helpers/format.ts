import { DateTime } from 'luxon';

export const formatNumber = ({
  value,
  withSign,
  defaultValue = '-',
  maximumFractionDigits = 2,
}) => {
  if (value == null) return defaultValue;

  return new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits,
    // required to fix crash with maximumFractionDigits equals to 0
    minimumFractionDigits: maximumFractionDigits,
    signDisplay: withSign ? 'exceptZero' : 'auto',
  }).format(value);
};

export const formatPercent = (value) => {
  if (value == null) return undefined;

  const formattedPercent = value > 1 ? value / 100 : value;

  return new Intl.NumberFormat('en-EN', {
    style: 'percent',
    maximumFractionDigits: 1,
  }).format(formattedPercent);
};

export const formatDate = ({ value, withTime, defaultValue = '-' }) => {
  const format = withTime ? 'HH:mm dd/MM/yy' : 'dd/MM/yy';
  if (value) return DateTime.fromISO(value).toFormat(format);
  return defaultValue;
};

export const withOrdinal = (value) => {
  const pr = new Intl.PluralRules('en-US', { type: 'ordinal' });

  const suffixes = new Map([
    ['one', 'st'],
    ['two', 'nd'],
    ['few', 'rd'],
    ['other', 'th'],
  ]);

  const formatOrdinals = (number) => {
    const rule = pr.select(number);
    const suffix = suffixes.get(rule);
    return `${number}${suffix}`;
  };

  return formatOrdinals(Number(value));
};

export const protectNumber = ({ value }) => '*'.repeat(6) + String(value).slice(-2);

export const getTwoDigitsYearPeriod = (year) => {
  const twoDigitsYear = Number(String(year).slice(2));
  return `${twoDigitsYear}-${twoDigitsYear + 1}`;
};
