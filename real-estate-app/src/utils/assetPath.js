export function assetPath(path) {
  const base = import.meta.env.BASE_URL; // e.g. "/react_2153591/"
  return path.startsWith("/") ? `${base}${path.slice(1)}` : `${base}${path}`;
}