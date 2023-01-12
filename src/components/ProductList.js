import React from 'react';

const ListProjects = (props) => {
    return (
        <div>
            {props.render(props.products)}
        </div>
    );
}

export default ListProjects;
