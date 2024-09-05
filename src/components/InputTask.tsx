import { PlusCircle } from "phosphor-react";
import styles from "./InputTask.module.css";
import { useState, KeyboardEvent, ChangeEvent } from "react";

interface InputTaskProps {
  addTask: (item: string) => void;
}

export function InputTask({ addTask }: InputTaskProps) {
  const [itemTask, setItemTask] = useState("");

  function getValueTask(event: ChangeEvent<HTMLInputElement>) {
    setItemTask(event.target.value);
  }

  function handleAddTask() {
    addTask(itemTask);
    setItemTask("");
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      addTask(itemTask);
      setItemTask("");
    }
  }

  return (
    <div className={styles.inputTask}>
      <input
        className={styles.addTask}
        type="text"
        value={itemTask}
        onChange={getValueTask}
        onKeyDown={handleKeyDown}
        placeholder="Adicione uma nova tarefa"
      />
      <button onClick={handleAddTask}>
        <span>Criar</span>
        <PlusCircle size={16} />
      </button>
    </div>
  );
}
