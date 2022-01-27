import { useCallback } from 'react';
import { useSet } from 'react-use';

const useSorts = () => {
  const [selectedOptions, { toggle }] = useSet(new Set());

  const onChange = useCallback((id) => toggle(id), [toggle]);

  return { selectedOptions, onChange };
};

export default useSorts;
