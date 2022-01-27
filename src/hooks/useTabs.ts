import { useEffect, useMemo, useState } from 'react';

type TabComponents = {
  [key: string]: string;
};

const useTabs = (components: TabComponents) => {
  const labels = useMemo(() => Object.keys(components), [components]);

  const [tab, setTab] = useState(labels[0]);

  useEffect(() => {
    setTab(labels[0]);
  }, [labels]);

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
