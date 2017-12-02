//action creators
export function add (item) {
    return{
         type: "ADD",
         item
    }
}

// export function addDescription (description) {
//     return{
//          type: "ADD_DESCRIPTION",
//          description
//     }
// }
//
// export function addImage (img) {
//     return{
//          type: "ADD_IMAGE",
//          img
//     }
// }
// export function deleteAll (imgAndComments) {
//     return{
//          type: "DELETE_ALL",
//          imgAndComments
//     }
// }

//reducer
export default function reducer(prevState = [], action) {
      switch(action.type) {
          case "ADD":
              return [...prevState, action.item];
          // case "ADD_DESCRIPTION":
          //     return [...prevState, action.description];
          // case "ADD_IMAGE":
          //     return [...prevState, action.img];
          // case "DELETE_ALL":
          default:
              return prevState
      }
}
