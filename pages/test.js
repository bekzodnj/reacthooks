export default function Box() {
  const ref = useRef(null);

  useEffect(() => {
    const div = ref.current;

    // when component mounts, create an observer
    // the browser API notifies us when the element is visible
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        document.body.style.backgroundColor = 'orange';
      } else {
        document.body.style.backgroundColor = 'darkblue';
      }
    });

    observer.observe(div, {
      threshold: 1.0,
    });
    return () => {
      // when component unmounts, disconnect the observer
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        height: 100,
        width: 100,
        // ...
      }}
    />
  );
}
