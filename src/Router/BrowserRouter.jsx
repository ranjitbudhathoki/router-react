import { useState } from "react";

export default function BrowserRouter() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
}
