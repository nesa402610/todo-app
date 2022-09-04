import React from 'react';
import Delete from "./UI/delete";

const TodoItem = ({task, func}) => {
        const changeStatusHandler = (id) => {
            func.changeStatus(id);
        };
        const deleteTaskHandler = (task) => {
            func.deleteTask(task);
        };
        return (
            <div className={'todoapp__task'}>
                <div className={"todoapp__task__state" + (task.isCompleted ? ' completed' : '')}
                     onClick={() => changeStatusHandler(task.id)}
                />
                <div className="todoapp__task__name">
                    {task.name} {task.isCompleted}
                </div>
                <Delete task={task} remove={deleteTaskHandler}/>
            </div>
        );
    }
;

export default TodoItem;