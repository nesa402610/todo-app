import React from 'react';
import Delete from "./UI/delete";
import check from '../img/icon-check.svg';


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
                >
                    {task.isCompleted ?
                        <img src={check} alt=""/>
                        : ''
                    }
                </div>
                <div className={"todoapp__task__name" + (task.isCompleted ? ' completed' : '')}>
                    {task.name} {task.isCompleted}
                </div>
                <Delete task={task} remove={deleteTaskHandler}/>
            </div>
        );
    }
;

export default TodoItem;