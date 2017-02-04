/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './todo.style.scss';

/**
 * Components
 */

import {
    Button
} from '../../components';

/**
 * Todo component definition and export
 */

export const Todo = props => {
    const deleteTodo = () => props.deleteTodo(props.id);

    return (
        <div key={props.id} className="todo">
			<span>{props.id} {props.text}</span>
			<Button handleClick={deleteTodo} title="X" />
		</div>
    );
};

/**
 * Prop types
 */

Todo.propTypes = {
    id: React.PropTypes.string,
    text: React.PropTypes.string,
    deleteTodo: React.PropTypes.func
};
