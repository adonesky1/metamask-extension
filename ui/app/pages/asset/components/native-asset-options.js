import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { I18nContext } from '../../../contexts/i18n';
import { Menu, MenuItem } from '../../../components/ui/menu';

const NativeAssetOptions = ({ onViewEtherscan, onViewAccountDetails }) => {
  const t = useContext(I18nContext);
  const [
    nativeAssetOptionsButtonElement,
    setNativeAssetOptionsButtonElement,
  ] = useState(null);
  const [nativeAssetOptionsOpen, setNativeAssetOptionsOpen] = useState(false);

  return (
    <>
      <button
        className="fas fa-ellipsis-v native-asset-options__button"
        data-testid="native-asset-options__button"
        onClick={() => setNativeAssetOptionsOpen(true)}
        ref={setNativeAssetOptionsButtonElement}
        title={t('nativeAssetOptions')}
      />
      {nativeAssetOptionsOpen ? (
        <Menu
          anchorElement={nativeAssetOptionsButtonElement}
          onHide={() => setNativeAssetOptionsOpen(false)}
        >
          <MenuItem
            iconClassName="fas fa-qrcode"
            data-testid="native-asset-options__account-details"
            onClick={() => {
              setNativeAssetOptionsOpen(false);
              onViewAccountDetails();
            }}
          >
            {t('accountDetails')}
          </MenuItem>
          <MenuItem
            iconClassName="fas fa-external-link-alt native-asset-options__icon"
            data-testid="native-asset-options__etherscan"
            onClick={() => {
              setNativeAssetOptionsOpen(false);
              onViewEtherscan();
            }}
          >
            {t('viewOnEtherscan')}
          </MenuItem>
        </Menu>
      ) : null}
    </>
  );
};

NativeAssetOptions.propTypes = {
  onViewEtherscan: PropTypes.func.isRequired,
  onViewAccountDetails: PropTypes.func.isRequired,
};

export default NativeAssetOptions;
