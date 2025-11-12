import { useState } from "react";
import { Item } from "./Item";

export function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onDeleteAllItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Cортировка по добавлению</option>
          <option value="description">Сортировка по описанию</option>
          <option value="packed">По статусу упакованно</option>
        </select>
        <button onClick={onDeleteAllItems}>Очистить лист</button>
      </div>
    </div>
  );
}
