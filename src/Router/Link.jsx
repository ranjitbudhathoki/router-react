import { useNavigation } from "./BrowserRouter";

export default function Link({ to, children }) {
  const { navigate } = useNavigation();

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
