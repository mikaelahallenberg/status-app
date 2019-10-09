import statusPaths from '../services/status-paths';

export const getPath = (path) => {
    const url = statusPaths.filter(statusPath => {
      return statusPath.name === path;
    });
    return url[0] ? url[0].url : null;
  }


export default getPath;