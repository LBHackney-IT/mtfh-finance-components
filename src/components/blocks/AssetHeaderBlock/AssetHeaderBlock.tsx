import { memo } from 'react';

import { useGetAssetInfo } from '../../../store';
import { getAddress, formatPercent } from '../../../helpers';

import HeaderBlock from '../HeaderBlock';

type AssetHeaderBlockProps = {
  assetType: 'Block' | 'Estate';
};

const AssetHeaderBlock = ({ assetType }: AssetHeaderBlockProps) => {
  const { data: asset = {}, isSuccess } = useGetAssetInfo();

  const address = getAddress({ address: asset.assetAddress });
  const description = `${address} • ${formatPercent(asset.occupied)} occupied`;

  return (
    <HeaderBlock
      subtitle={assetType}
      title={isSuccess ? asset.assetAddress?.postPreamble : ''}
      description={isSuccess ? description : ''}
    />
  );
};

export default memo(AssetHeaderBlock);
