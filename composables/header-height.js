export function useHeaderHeight() {
  const headerHeight = useState('headerHeight', () => 0);

  function setHeaderHeight(height) {
    headerHeight.value = height;
  }

  return {
    headerHeight,
    setHeaderHeight,
  };
}
