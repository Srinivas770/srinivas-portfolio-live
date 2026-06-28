const BASE_PATH = "/srinivas-portfolio";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${BASE_PATH}${path}`;
}
