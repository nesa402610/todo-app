import React, {useState} from 'react';
import Header from "./componets/header";
import TodoApp from "./componets/TodoApp";
import './DarkTheme.css';

const App = () => {
    const [light, setLight] = useState(false);
    const themeHandler = (bool) => {
        setLight(bool);
    };
    return (
        <>
            <Header themeHandler={themeHandler}/>
            <TodoApp/>
        </>
    );
};

export default App;