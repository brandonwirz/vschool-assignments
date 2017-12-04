//action creators
export function add(item) {
    return {
         type: "ADD",
         item
    }
}

export function deleteImg(imgAndComments) {
    return {
         type: "DELETE_ALL",
         imgAndComments
    }
}

//reducer
export default function reducer(prevState = [], action) {
      switch(action.type) {
          case "ADD":
              return [...prevState, action.item];
          case "DELETE_ALL":
              return [...prevState, action.imgAndComments];
          default:
              return prevState
      }
}
