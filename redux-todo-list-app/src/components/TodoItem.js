import React from 'react';
import {
	// toggleComplete, deleteTodo,
	toggleCompleteAsync, deleteTodoAsync
} from '../redux/TodoSlice';
import { useDispatch } from 'react-redux';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCompletedToggle = () => {
		dispatch(toggleCompleteAsync({
			completed: !completed,
			id
		}));
	};

	const handleDeleteTodoAction = () => {
		dispatch(deleteTodoAsync({ id }));
	};

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input onClick={handleCompletedToggle} type='checkbox' className='mr-3' checked={completed}></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={handleDeleteTodoAction}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
