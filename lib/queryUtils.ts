export function getQueryParam(
  searchParams: { [key: string]: string },
  key: string,
) {
  return searchParams[key] || null;
}

export function getMultipleQueryParams(
  searchParams: { [key: string]: string },
  keys: string[],
) {
  const result: { [key: string]: string | null } = {};
  keys.forEach((key) => {
    result[key] = searchParams[key] || null;
  });
  return result;
}
