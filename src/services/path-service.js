import * as paths from "./status-paths";

export const getUrl = url => {
  const target = paths.filter(path => {
    return path.name === url;
  });
  return target[0] ? target[0].url : null;
};
