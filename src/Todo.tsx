import { TodoType } from "./types/todo";
import { FC } from "react";

export const Todo: FC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完了]" : "[未完了]";

  return <p>{`${completeMark}${title}(ユーザー：${userId})`}</p>;
};
