import { useCallback } from 'react';
import { useSet } from 'react-use';

const useSorts = <T = string>() => {
  const [selectedOptions, { toggle }] = useSet(new Set());

  const onChange = useCallback((id: T) => toggle(id), [toggle]);

  return { selectedOptions, onChange };
};

export default useSorts;
