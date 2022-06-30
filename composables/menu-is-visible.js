export function useMenuIsVisible() {
  const getMenuIsVisible = useState('menuIsVisible', () => false);

  function setMenuIsVisible(isVisible) {
    getMenuIsVisible.value = isVisible;
  }

  return {
    getMenuIsVisible,
    setMenuIsVisible,
  };
}
