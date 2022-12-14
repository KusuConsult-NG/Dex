const truncateAddress = (address: string) => {
  return (
    address.slice(0, 5) +
    "..." +
    address.slice(address.length - 4, address.length)
  );
};

export { truncateAddress };
