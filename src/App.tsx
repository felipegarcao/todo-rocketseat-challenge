import { Barbell, Check as CheckIcon, PlusCircle, Trash } from "phosphor-react";
import {
  ButtonCreateTask,
  ButtonDeleteTask,
  Check,
  CheckDone,
  ContainerTasks,
  Counter,
  Header,
  HeaderTasks,
  Input,
  MessageNotTasks,
  SectionCreateNewTask,
  Task,
  TaskCreated,
  TaskDescription,
  TaskDescriptionDone,
  TaskDone,
  TextNotTasks,
  Wrapper,
} from "./home.styles";
import { useEffect, useState } from "react";

import logo from "./assets/logo.png";

interface TasksProps {
  id: number;
  task: string;
  complete: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [nameTask, setNameTask] = useState("");
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  const handleCreateNewTask = () => {
    const id = tasks.length + 1;

    if (nameTask !== ""){
      setTasks((prev) => [
        ...prev,
        {
          id,
          task: nameTask,
          complete: false,
        },
      ]);
    } else {
      alert("Preenche ai")
    }

    setNameTask("");
  };

  const handleCompleteTask = (id: number) => {
    const changeDone = tasks.map((info) => {
      if (info.id === id) {
        return { ...info, complete: !info.complete };
      }
      return info;
    });
    setTasks(changeDone);
  };

  useEffect(() => {
    const changeDoneArray = tasks.filter((info) => info.complete);

    setCompletedTaskCount(changeDoneArray.length);
  }, [tasks]);

  const handleRemoveTask = (id: number) => {
    const taskBeforeRemove = tasks.filter((filter) => filter.id !== id);

    setTasks(taskBeforeRemove);
  };

  return (
    <>
      <Header>
        <img src={logo} alt="" />
      </Header>
      <Wrapper>
        <SectionCreateNewTask>
          <Input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={nameTask}
            onChange={(event) => setNameTask(event.target.value)}
          />
          <ButtonCreateTask onClick={() => handleCreateNewTask()}>
            <span>Criar</span>
            <PlusCircle size={16} color="#fff" />
          </ButtonCreateTask>
        </SectionCreateNewTask>
        <ContainerTasks>
          <HeaderTasks>
            <TaskCreated>
              Tarefas criadas
              <Counter>{tasks.length}</Counter>
            </TaskCreated>
            <TaskDone>
              Concluídas
              <Counter>
                {completedTaskCount} de {tasks.length}
              </Counter>
            </TaskDone>
          </HeaderTasks>
          {tasks.length === 0 && (
            <MessageNotTasks>
              <Barbell size={56} color="#808080" />
              <TextNotTasks>
                Você ainda não tem tarefas cadastradas
              </TextNotTasks>
              <TextNotTasks>
                Crie tarefas e organize seus itens a fazer
              </TextNotTasks>
            </MessageNotTasks>
          )}

          {tasks.map((task) => (
            <Task key={task.id}>
              {!task.complete && (
                <>
                  <Check onClick={() => handleCompleteTask(task.id)} />
                  <TaskDescription>{task.task}</TaskDescription>
                </>
              )}
              {task.complete && (
                <>
                  <CheckDone onClick={() => handleCompleteTask(task.id)}>
                    <CheckIcon color="#fff" />
                  </CheckDone>
                  <TaskDescriptionDone>{task.task}</TaskDescriptionDone>
                </>
              )}
              <ButtonDeleteTask onClick={() => handleRemoveTask(task.id)}>
                <Trash size={20} color="#808080" />
              </ButtonDeleteTask>
            </Task>
          ))}
        </ContainerTasks>
      </Wrapper>
    </>
  );
}

export default App;
