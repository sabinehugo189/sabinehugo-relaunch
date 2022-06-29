export function useHeaderHeight() {
  const getHeaderHeight = useState('headerHeight', () => 0);

  function setHeaderHeight(height) {
    getHeaderHeight.value = height;
  }

  return {
    getHeaderHeight,
    setHeaderHeight,
  };
}
