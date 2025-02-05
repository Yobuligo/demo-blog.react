import { ITodo } from "@/model/ITodo";
import { readLocalStorage } from "@/utils/readLocalStorage";
import { writeLocalStorage } from "@/utils/writeLocalStorage";
import { ChangeEvent, useEffect, useState } from "react";

export const Todo: React.FC = () => {
  const [myTodo, setMyTodo] = useState<ITodo>({
    title: "My Todo",
    text: "This is my todo",
  });

  useEffect(() => {
    if (typeof window !== undefined) {
      const todo = readLocalStorage<ITodo>("myTodo");
      if (todo) {
        setMyTodo(todo);
      }
    }
  }, []);

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const newTodo: ITodo = { text: "", title: event.target.value };
    setMyTodo(newTodo);
    writeLocalStorage<ITodo>("myTodo", newTodo);
  };

  return (
    <>
      <input type="text" value={myTodo.title} onChange={onChangeTitle} />
    </>
  );
};
