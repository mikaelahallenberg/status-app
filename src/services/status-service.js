import getPath from '../services/path-service';

class StatusService {

  async getStatusFromDatadog() {
    let items = { provider: "DataDog", statuses: [] };

    const response = await fetch(getPath('DataDog'))
    if (response.status !== 200) {
      throw new Error(`There was a problem, code: ${response.status}`);
    }

    const data = await response.json()
    
    data.components.forEach(item => {
      if (item.id === "s6jxgrkjjj6p" || item.id === "xfqwlt66k1xg") {
        items.statuses.push({
          name: item.name,
          status: item.status
        })
      }
    })
    
    return items
  }


  async getStatusFromAzure() {

    let items = { provider: "Azure", statuses: [] };

    const response = await fetch(getPath('Azure'))
    if (response.status !== 200) {
      throw new Error(`There was a problem, code: ${response.status}`);
    }

    const data = await response.json()
    
    data.components.forEach(item => {
      if (item.id === "s6jxgrkjjj6p" || item.id === "xfqwlt66k1xg") {
        items.statuses.push({
          name: item.name,
          status: item.status
        })
      }
    })

    return items

  }
}

export default StatusService;
