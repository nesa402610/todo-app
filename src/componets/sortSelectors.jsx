import React from 'react';
import SortType from "./sortType";

const SortSelectors = ({sortType, setSortType}) => {
    return (
        <div className="todoapp__sorting">
            <SortType value={'All'} sortType={sortType} setSortType={setSortType}/>
            <SortType value={'Active'} sortType={sortType} setSortType={setSortType}/>
            <SortType value={'Completed'} sortType={sortType} setSortType={setSortType}/>
        </div>
    );
};

export default SortSelectors;