export function useMenuIsOpen() {
  const getMenuIsOpen = useState('menuIsOpen', () => false);

  function setMenuIsOpen(status) {
    getMenuIsOpen.value = status;
  }

  return {
    getMenuIsOpen,
    setMenuIsOpen,
  };
}
