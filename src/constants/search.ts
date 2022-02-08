const rentEndpointType = 'Rent';
const leaseholderEndpointType = 'Leaseholder';

export const SEARCH_TYPES = {
  rentAccounts: {
    endpointType: rentEndpointType,
    label: 'Rent Accounts',
  },
  leaseholder: {
    endpointType: leaseholderEndpointType,
    label: 'Leaseholder Accounts',
  },
  // blocks: {
  //   endpointType: 'Block',
  //   label: 'Blocks',
  // },
  // estates: {
  //   endpointType: 'Estate',
  //   label: 'Estates',
  // },
};

export const SEARCH_PERSON_TYPES = {
  [rentEndpointType]: 0,
  [leaseholderEndpointType]: 1,
};
