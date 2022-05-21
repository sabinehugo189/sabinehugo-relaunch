export function useHeaderIsSticky() {
  const headerIsSticky = useState('headerIsSticky', () => 0);

  function setHeaderIsSticky(sticky) {
    headerIsSticky.value = sticky;
  }

  return {
    headerIsSticky,
    setHeaderIsSticky,
  };
}
