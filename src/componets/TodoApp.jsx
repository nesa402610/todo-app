import React, {useMemo, useState} from 'react';
import TodoItem from "./todoItem";

const TodoApp = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([{id: 1, name: 'test task', isCompleted: false}]);
    // const [left, setLeft] = useState(0);
    const [sortType, setSortType] = useState(null);
    const sorted = useMemo(() => {
        if (sortType === true) {
            return [...tasks].filter(t => t.isCompleted === true);
        } else if (sortType === false) {
            return [...tasks].filter(t => t.isCompleted === false);
        } else {
            return tasks;
        }
    }, [sortType, tasks]);

    const addTask = (e) => {
        if (e.key === 'Enter') {
            setTasks([...tasks, {id: Date.now(), name: task, isCompleted: false}]);
            setTask('');
        }
    };
    const deleteTask = (task) => {
        setTasks(tasks.filter(t => t.id !== task.id));
    };
    const changeStatus = (id) => {
        const copy = [...tasks];
        const current = copy.find(t => t.id === id);
        current.isCompleted = !current.isCompleted;
        setTasks(copy);
    };
    const clearCompleted = () => {
        setTasks(tasks.filter(t => t.isCompleted !== true));
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
                    {sorted.map(task =>
                        <TodoItem key={task.name} task={task} func={{changeStatus, deleteTask}}/>
                    )}
                </div>
                <div className="todoapp__info">
                    <div className="todoapp__tasksleft">
                        {tasks.length + ' items left'}
                    </div>
                    <div className="todoapp__sorting">
                        <div className={"todoapp__sorting--item" + (sortType === null  ? ' active':'')} onClick={() => setSortType(null)}>All</div>
                        <div className={"todoapp__sorting--item" + (sortType === false  ? ' active':'')} onClick={() => setSortType(false)}>Active</div>
                        <div className={"todoapp__sorting--item" + (sortType === true  ? ' active':'')} onClick={() => setSortType(true)}>Completed</div>
                    </div>
                    <div className="todoapp__clear" onClick={clearCompleted}>
                        Clear Completed
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;