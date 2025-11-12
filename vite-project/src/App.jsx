import { useState } from "react";
import "./index.css";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";

export function App() {
  const [items, setItems] = useState([]);

  function hanldeAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteAllItems() {
    const confirmed = window.confirm("Вы уверены, что хотите все удалить?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={hanldeAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteAllItems={handleDeleteAllItems}
      />
      <Stats items={items} />
    </div>
  );
}
