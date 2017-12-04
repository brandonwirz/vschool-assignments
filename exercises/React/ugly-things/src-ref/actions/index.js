export function addItem(name, url, desc) {
  return {
    type: "ADD_ITEM",
    name,
    url,
    desc
  }
}

export function removeItem(index) {
  return {
    type: "REMOVE_ITEM",
    index
  }
}
