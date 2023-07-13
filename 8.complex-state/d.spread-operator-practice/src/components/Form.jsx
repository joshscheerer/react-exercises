import React, { useState } from "react";
import itemsList, { addItem, createList } from "../items-list";
import List from "./List";

function Form() {
  const [newListItem, setNewListItem] = useState({
    key: "",
    itemText: "",
  });

  const [list, setList] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setNewListItem(() => {
      return { key: itemsList.length, itemText: value };
    });
  }

  return (
    <div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          name="listItem"
          value={newListItem.itemText}
          placeholder="New Item"
        />
        <button
          type="submit"
          onClick={() => {
            addItem(newListItem);
            setList(itemsList.map(createList));
          }}>
          <span>Add</span>
        </button>
      </div>
      <List list={list} />
    </div>
  );
}

export default Form;
