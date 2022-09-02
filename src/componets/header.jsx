import React, {useEffect, useState} from 'react';
import darkTheme from '../img/icon-moon.svg';
import lightTheme from '../img/icon-sun.svg';

const Header = ({themeHandler}) => {
    const [light, setLight] = useState(false);

    useEffect(() => {
        themeHandler(light);
    }, [light, themeHandler]);

    return (
        <header>
            <div className={'header__title'}>
                TODO
            </div>
            <div className="header__theme" onClick={() => setLight(!light)}>
                {light ? <img src={darkTheme} alt=""/> : <img src={lightTheme} alt=""/>}
            </div>
        </header>
    );
};

export default Header;