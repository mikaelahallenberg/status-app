import { FETCH_ERROR, FETCH_SUCCESS, FETCH_START } from '../actions/status-action';

const initialStatus = {
    data: [],
  };
  
  export default (state = initialStatus, action) => {
    switch (action.type) {

      case FETCH_START: {
        const data = {
          provider: action.provider,
          pending: true,
          statuses: []
        }
        const updatedData = state.data.concat(data)
        console.log(updatedData)
        return {
          ...state,
          data: updatedData
        };
      }

      case FETCH_ERROR: {
        return {
          ...state,
          error: action.error,
        };
      }
      case FETCH_SUCCESS: {
        const updatedIndex = state.data.findIndex((item) => { 
          return item.provider === action.data.provider
        }
        )
        const updatedData = state.data.map((item, index) => {
          if (index === updatedIndex) {
          
            const newStatuses = action.data.statuses // Miksi ei kopioidu? :I
            console.log(index)
            console.log(updatedIndex)

            return {
              provider: action.data.provider,
              pending: false,
              statuses: newStatuses
            }
          }
          return item;
        })

        console.log(updatedData)
        return {
          ...state,
          data: updatedData,
        };
      }
      default:
        return state;
    }
  };