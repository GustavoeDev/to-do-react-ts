import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { TaskHeader } from "./components/TaskHeader";
import { TaskList } from "./components/TaskList";
import { useState } from "react";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  const [task, setTask] = useState<string[]>([]);
  const [concludeTask, setConcludeTask] = useState<string[]>([]);

  function addTask(item: string) {
    setTask([...task, item]);
  }

  function addConcludeTask(item: string) {
    setConcludeTask([...concludeTask, item]);
  }

  function removeConcludeTask(taskDeleted: string) {
    const commentWithoutDeleted = concludeTask.filter((item) => {
      return item !== taskDeleted;
    });

    setConcludeTask(commentWithoutDeleted);
  }

  function deleteTask(taskDelete: string) {
    const taskWithoutDeleted = task.filter((item) => {
      return item !== taskDelete;
    });

    setTask(taskWithoutDeleted);
  }

  function handleMoveTask(taskToMove: string, moveToEnd: boolean) {
    setTask((prevTasks) => {
      const filteredTasks = prevTasks.filter((task) => task !== taskToMove);
      if (moveToEnd) {
        return [...filteredTasks, taskToMove];
      } else {
        return [taskToMove, ...filteredTasks];
      }
    });
  }

  const totalTasks = task.length;

  const totalConcludeTasks = concludeTask.length;

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <InputTask addTask={addTask} />
        <main>
          <TaskHeader
            totalTasks={totalTasks}
            totalConcludeTasks={totalConcludeTasks}
          />
          <div className={styles.tasks}>
            {task.map((task) => {
              return (
                <TaskList
                  key={task}
                  content={task}
                  onDeleteTask={deleteTask}
                  onAddConcludeTask={addConcludeTask}
                  onRemoveConcludeTask={removeConcludeTask}
                  onMoveTask={handleMoveTask}
                />
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
