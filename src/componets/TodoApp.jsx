import React, {useEffect, useMemo, useState} from 'react';
import TodoItem from "./todoItem";
import SortSelectors from "./sortSelectors";
import check from "../img/icon-check.svg";
import SortSelectorsMobile from "./sortSelectors__mobile";

const TodoApp = () => {
    //Стейты одной таски и массив тасков
    const [task, setTask] = useState({id: '', name: '', isCompleted: false});
    const [tasks, setTasks] = useState([
        {id: 1, name: 'Завершить курс по JavaScript', isCompleted: true},
        {id: 2, name: 'Пробежка вокруг парка', isCompleted: false},
        {id: 3, name: 'Сыграть в Dota 2', isCompleted: false},
        {id: 4, name: 'Завершить этот TodoApp', isCompleted: false},
        {id: 5, name: 'Сыграть в Minecraft', isCompleted: true},
    ]);
    //Невыполненные таски
    const [left, setLeft] = useState(0);
    //Сортировка по...
    const [sortType, setSortType] = useState('All');

    //Не шарю за юзмемо, но так лучше делать. Вывод сортированных и не сортированных здесь
    const sorted = useMemo(() => {
        if (sortType === 'Completed') {
            return [...tasks].filter(t => t.isCompleted === true);
        } else if (sortType === 'Active') {
            return [...tasks].filter(t => t.isCompleted === false);
        } else {
            return tasks;
        }
    }, [sortType, tasks]);

    const addTask = (e) => {
        if (e.key === 'Enter') {
            setTasks([...tasks, {id: Date.now(), name: task.name, isCompleted: task.isCompleted}]);
            setTask({id: '', name: '', isCompleted: false});
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

    useEffect(() => {
        setLeft(tasks.filter(t => t.isCompleted === false).length);
    }, [tasks]);
    return (
        <div className={'todoapp'}>
            <div className="todoapp__input">
                <div className={"todoapp__task__state" + (task.isCompleted ? ' completed' : '')}
                     onClick={() => setTask({...task, isCompleted: !task.isCompleted})}
                >
                    {task.isCompleted ?
                        <img src={check} alt=""/>
                        : ''
                    }
                </div>
                <input type="text"
                       placeholder={'Create a new todo...'}
                       value={task.name}
                       onChange={e => setTask({...task, name: e.target.value})}
                       onKeyPress={e => addTask(e)}
                />
            </div>
            <div className="todoapp__content">
                <div className={'todoapp__tasks'}>
                    {sorted.map(task =>
                        <TodoItem key={task.id} task={task} func={{changeStatus, deleteTask}}/>
                    )}
                </div>
                <div className="todoapp__info">
                    <div className="todoapp__tasksleft">
                        {left + ' items left'}
                    </div>
                    <SortSelectors sortType={sortType} setSortType={setSortType}/>
                    <div className="todoapp__clear" onClick={clearCompleted}>
                        Clear Completed
                    </div>
                </div>
            </div>
            <SortSelectorsMobile sortType={sortType} setSortType={setSortType}/>
        </div>
    );
};

export default TodoApp;