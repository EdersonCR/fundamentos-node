export function buildRoutePath(path) {
  const routeParametersRgex = /:([a-zA-Z]+)/g;
  const pathWithParams = path.replaceAll(routeParametersRgex, '(?<$1>[a-z0-9\-_]+)');
  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`);
  return pathRegex;
}

export function extractQueryParams(query) {
  return query.substr(1).split('&').reduce((queryParams, param) => {
    const [key, value] = param.split('=');
    queryParams[key] = value;
    return queryParams;
  }, {});
}