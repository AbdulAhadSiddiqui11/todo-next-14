import { FC } from "react";

interface ITodoItemPros {
  id: string;
  title: string;
  complete: boolean;
}

const TodoItem: FC<ITodoItemPros> = ({ id, title, complete }) => {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} type="checkbox" className="cursor-pointer peer" />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
};

export default TodoItem;
