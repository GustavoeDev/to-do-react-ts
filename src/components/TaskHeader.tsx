import styles from "./TaskHeader.module.css";

interface TaskHeaderProps {
  totalTasks: number;
  totalConcludeTasks: number;
}

export function TaskHeader({
  totalTasks,
  totalConcludeTasks,
}: TaskHeaderProps) {
  return (
    <div className={styles.taskHeader}>
      <div className={styles.createHeader}>
        <a href="#">Tarefas criadas</a>
        <span>{totalTasks}</span>
      </div>

      <div className={styles.concludeHeader}>
        <a href="#">Concluídas</a>
        <span>
          {totalTasks === 0
            ? totalConcludeTasks
            : `${totalConcludeTasks} de ${totalTasks}`}
        </span>
      </div>
    </div>
  );
}
