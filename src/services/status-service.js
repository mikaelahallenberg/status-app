
class StatusService {
  async getStatusFromDatadog() {

    let items = { provider: "DataDog", statuses: [] };
    await fetch("https://1k6wzpspjf99.statuspage.io/api/v2/summary.json").then(
      res => {
        if (res.status !== 200) {
          throw new Error(`There was a problem, code: ${res.status}`);
        }

        res.json().then(data =>
          data.components.filter(item => {
            return item.id === "s6jxgrkjjj6p" || item.id === "xfqwlt66k1xg"
              ? items.statuses.push({ name: item.name, status: item.status === 'operational' ? true : false })
              : null;
          })
        );
      }
    );

    return items;
  }
  async getStatusFromAzure() {
    let items = { provider: "Azure", statuses: [] };

    await fetch("https://1k6wzpspjf99.statuspage.io/api/v2/summary.json").then(
      res => {
        if (res.status !== 200) {
          throw new Error(`There was a problem, code: ${res.status}`);
        }

        res.json().then(data =>
          data.components.filter(item => {
            return item.id === "s6jxgrkjjj6p" || item.id === "xfqwlt66k1xg"
            ? items.statuses.push({ name: item.name, status: item.status === 'operational' ? true : false })              
              : null;
          })
        );
      }
    );
    return items;
  }
}

export default StatusService;