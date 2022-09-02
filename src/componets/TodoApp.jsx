import React, {useState} from 'react';
import Delete from "./UI/delete";

const TodoApp = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    // const [left, setLeft] = useState(0);
    const addTask = (e) => {
        if (e.key === 'Enter') {
            setTasks([...tasks, {id: Date.now(), name: task, completed: 0}]);
            setTask('');
        }
    };
    const deleteTaskHandler = (task) => {
        setTasks(tasks.filter(t => t.id !== task.id));
    };
    const changeStatus = (e,task) => {
        e.target.classList.toggle('completed')
        task.completed = !task.completed
    };
    return (
        <div className={'todoapp'}>
            <div className="todoapp__input">
                <input type="text"
                       placeholder={'Create a new todo...'}
                       value={task}
                       onChange={e => setTask(e.target.value)}
                       onKeyPress={e => addTask(e)}
                />
            </div>
            <div className="todoapp__content">
                <div className={'todoapp__tasks'}>
                    {tasks.map(task =>
                        <div key={task.name} className={'todoapp__task'}>
                            <div className={"todoapp__task__state"}
                                 onClick={e => changeStatus(e, task)}
                            />
                            <div className="todoapp__task__name">
                                {task.name}
                            </div>
                            <Delete task={task} remove={deleteTaskHandler}/>
                        </div>
                    )}
                </div>
                <div className="todoapp__info">
                    <div className="todoapp__tasksleft">
                        {tasks.length + ' items left'}
                    </div>
                    <div className="todoapp__sorting">
                        <div className="todoapp_sorting--item">All</div>
                        <div className="todoapp_sorting--item">Active</div>
                        <div className="todoapp_sorting--item">Completed</div>
                    </div>
                    <div className="todoapp__clear">
                        Clear Completed
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;