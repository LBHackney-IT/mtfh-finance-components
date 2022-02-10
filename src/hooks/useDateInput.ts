import { useCallback, useMemo, useState } from 'react';
import type { ChangeEvent } from 'react';

import { DateTime } from 'luxon';

import { ONLY_DIGITS_REGEX } from '../constants';

export const initialDateInputState = {
  day: '',
  month: '',
  year: '',
};

export const useDateInput = () => {
  const [dateValues, setDates] = useState(initialDateInputState);

  const onChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;

    if (value.match(ONLY_DIGITS_REGEX)) {
      setDates((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  }, []);

  const reset = useCallback((state = null) => {
    setDates(state ?? initialDateInputState);
  }, []);

  const resultDate = useMemo(() => {
    const { year, month, day } = dateValues;

    if (year && month && day) {
      return DateTime.fromObject({
        year: parseInt(year, 10),
        month: parseInt(month, 10),
        day: parseInt(day, 10),
      }).toISO({
        includeOffset: false,
      });
    }

    return null;
  }, [dateValues]);

  const isFilled = Boolean(dateValues.day && dateValues.month && dateValues.year);
  const isFullyEmpty = !dateValues.day && !dateValues.month && !dateValues.year;
  const isPartiallyEmpty =
    !isFullyEmpty && (!dateValues.day || !dateValues.month || !dateValues.year);

  return {
    dateValues,
    onChange,
    resultDate,
    isFilled,
    isPartiallyEmpty,
    reset,
  };
};

export default useDateInput;
