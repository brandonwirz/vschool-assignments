import axios from "axios";

export function getLocalForcast(lat, long){
      return (dispatch) => {
        axios.get(`http://cors.vschool.io?url=https://api.darksky.net/forecast/33722c235dde0e1f98b2c0963306637e/${lat},${long}`)
        .then(response =>{
          console.dir(response)
          dispatch({
            type: "GET_LOCAL_FORCAST",
            item: response.data
          })
      })
   }
}

const defaultObject = {
  currently: {
    apparentTemperature: ""
  },
  daily: {
    summary: ""
  }

}

export default function reducer(prevState = defaultObject ,action) {
      switch(action.type) {
          case "GET_LOCAL_FORCAST":
             return action.item;
          default:
             return prevState
      }
}
