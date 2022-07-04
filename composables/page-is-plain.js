export function usePageIsPlain() {
  const getPageIsPlain = useState('pageIsPlain', () => false);

  function setPageIsPlain(isPlain) {
    getPageIsPlain.value = isPlain;
  }

  return {
    getPageIsPlain,
    setPageIsPlain,
  };
}
