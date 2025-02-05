import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ITodo } from "@/model/ITodo";
import { ChangeEvent } from "react";

export const Todo: React.FC = () => {
  const [myTodo, setMyTodo] = useLocalStorage<ITodo>("myTodo", {
    title: "My Todo",
    text: "This is my todo",
  });

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) =>
    setMyTodo({ text: "", title: event.target.value });
  
  return (
    <>
      <input type="text" value={myTodo.title} onChange={onChangeTitle} />
    </>
  );
};
