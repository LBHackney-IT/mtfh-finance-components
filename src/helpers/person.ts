export const getFullName = (firstName = '', lastName = '') =>
  `${firstName ?? ''} ${lastName ?? ''}`.trim();

export const getAddress = ({ address, withPreamble = false, isShort = false }) => {
  let result = '';

  if (address) {
    const { postPreamble, ...restAddress } = address;

    result = isShort
      ? `${restAddress.addressLine1}`
      : Object.values(restAddress).filter(Boolean).join(', ');

    if (withPreamble && postPreamble) result = `${postPreamble}, ${result}`;
  }

  return result;
};
