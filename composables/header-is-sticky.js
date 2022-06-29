export function useHeaderIsSticky() {
  const getHeaderIsSticky = useState('headerIsSticky', () => false);

  function setHeaderIsSticky(isSticky) {
    getHeaderIsSticky.value = isSticky;
  }

  return {
    getHeaderIsSticky,
    setHeaderIsSticky,
  };
}
