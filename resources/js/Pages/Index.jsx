import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Button from "@/Components/Button";
import { Link, useForm } from "@inertiajs/inertia-react";

export default function Index(props) {
    const { delete: destroy } = useForm();
    const handleDelete = (id) => {
        destroy(route("todo.destroy", id) ,{
          // スクロールの位置を保持する
            preserveScroll: true,
        });
    };
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          TodoList
        </h2>
      }
    >
      <Head title="TodoList Index" />

      <div className="py-8">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200 task">
            <div className="complete_title">
                <h3>Task</h3>
              </div>
              <div className="create_btn">
                <Link href={route("todo.create")}>
                  <Button type="button" className="bg-gray-600">Create New</Button>
                </Link>
              </div>
              <table>
                <thead>
                  <tr>
                    <th className="todo_title">Title</th>
                    <th className="todo_content">Content</th>
                    <th className="todo_delete"></th>
                    <th className="todo_edit"></th>
                  </tr>
                </thead>
                <tbody>
                  {props.todo.map((todo) => {
                    return (
                      <tr key={todo.id}>
                        <td className="">{todo.title}</td>
                        <td className="">{todo.content}</td>
                        <td className="">
                        <Link href={route("todo.edit",todo.id)}>
                        <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-xs font-semibold">
                            更新
                        </button>
                        </Link>
                    </td>
                        <td className="">
                        <button className="px-4 py-2 bg-blue-400 text-white rounded-lg text-xs font-semibold" onClick={() => 
                        handleDelete(todo.id)}>完了</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>



      <div className="">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200 completed">
              <div className="complete_title">
                <h3>Completed</h3>
              </div>
              <table>
                <thead>
                  <tr>
                    <th className="todo_title"></th>
                    <th className="todo_content"></th>
                    <th className="todo_delete"></th>
                  </tr>
                </thead>
                <tbody>
                  {props.todo.map((todo) => {
                    return (
                      <tr key={todo.id}>
                        <td className="">{todo.title}</td>
                        <td className="">{todo.content}</td>
                        <td className="">
                        <button className="px-4 py-2 bg-red-400 text-white rounded-lg text-xs font-semibold" onClick={() => 
                        handleDelete(todo.id)}>削除</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </Authenticated>
    
  );
}


