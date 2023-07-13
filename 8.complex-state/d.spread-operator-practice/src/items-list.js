import React from "react";
import ListItem from "./components/ListItem";

const itemsList = [];

function addItem(item) {
  itemsList.push(item);
}

function createList(listItem) {
  return <ListItem key={listItem.key} itemText={listItem.itemText} />;
}

export default itemsList;
export { addItem, createList };
