const dismissOutSideEle = (
  elementRef: any,
  toggleVar: boolean,
  closeFun: (value: React.SetStateAction<boolean>) => void
) => {
  if (!elementRef) return;
  const checkIfClickedOutside = (e: any) => {
    if (
      toggleVar &&
      elementRef.current &&
      !elementRef.current.contains(e.target)
    ) {
      closeFun(false);
    }
  };

  document.addEventListener("mousedown", checkIfClickedOutside);

  return () => {
    // Cleanup the event listener
    document.removeEventListener("mousedown", checkIfClickedOutside);
  };
};

export default dismissOutSideEle;
