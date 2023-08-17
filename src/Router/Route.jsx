import { useNavigation } from "./BrowserRouter";

export default function Route({ path, component }) {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return component;
  }

  return null;
}
