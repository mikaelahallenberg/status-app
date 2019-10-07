import StatusService from "../services/status-service";

export const FETCH_ERROR = "@fetch/error";
export const FETCH_SUCCESS = "@fetch/success";
export const FETCH_START = "@fetch/start";


const fetchStart = provider => ({
  type: FETCH_START,
  provider: provider
});

const fetchError = error => ({
  type: FETCH_ERROR,
  error
});

const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  data
});

export const fetchStatuses = () => async dispatch => {
  dispatch(fetchStart("DataDog"));
  let items = [];
  try {
  
   const statusService = new StatusService()
    const datadogItems = await statusService.getStatusFromDatadog();
    items.push(datadogItems)
    dispatch(fetchSuccess(datadogItems));
  } catch (err) {
    dispatch(fetchError(err));
  }

  dispatch(fetchStart("Azure"))
  try {
    const statusService = new StatusService()
     const azureItems = await statusService.getStatusFromAzure();
     items.push(azureItems)
     dispatch(fetchSuccess(azureItems));
   } catch (err) {
     dispatch(fetchError(err));
   }

};

export default fetchStatuses;