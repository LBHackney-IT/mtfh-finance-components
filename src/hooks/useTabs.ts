import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';

type TabComponents = {
  [key: string]: ReactNode;
};

const useTabs = (components: TabComponents) => {
  const labels = useMemo(() => Object.keys(components), [components]);

  const [tab, setTab] = useState(labels[0]);

  return useMemo(
    () => ({
      tabContent: components[tab],
      tabsProps: {
        tabs: labels,
        changeTab: setTab,
        currentTab: tab,
      },
    }),
    [components, labels, tab]
  );
};

export default useTabs;
