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

const handleResult = async (dispatch, request) => {
  try {
    const items = await request;
    dispatch(fetchSuccess(items));
  } catch (err) {
    dispatch(fetchError(err));
  }
};

export const fetchStatuses = () => async dispatch => {
  const statusService = new StatusService();
  dispatch(fetchStart("DataDog"));
  dispatch(fetchStart("Azure"))

  const dataDog = statusService.getStatusFromDatadog();
  const azure = statusService.getStatusFromAzure();

  handleResult(dispatch, dataDog);
  handleResult(dispatch, azure);
};

export default fetchStatuses;
