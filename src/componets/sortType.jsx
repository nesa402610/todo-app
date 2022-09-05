import React from 'react';

const SortType = ({value, sortType, setSortType}) => {
    return (
        <div className={"todoapp__sorting--item" + (sortType === value ? ' active' : '')}
             onClick={() => setSortType(value)}>
            {value}
        </div>
    );
};

export default SortType;