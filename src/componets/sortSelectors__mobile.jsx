import React from 'react';
import SortType from "./sortType";

const SortSelectorsMobile = ({setSortType, sortType}) => {
    return (
        <div className="todoapp__sorting mobile">
            <SortType value={'All'} sortType={sortType} setSortType={setSortType}/>
            <SortType value={'Active'} sortType={sortType} setSortType={setSortType}/>
            <SortType value={'Completed'} sortType={sortType} setSortType={setSortType}/>
        </div>
    );
};

export default SortSelectorsMobile;