import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import {
  DeleteButton,
  LikeButton,
  EditButton,
  TodoWrapper,
  EditWrapper,
  EditInput,
} from './Todo.styled';
import { useDispatch } from 'react-redux';
import {
  deleteToDo,
  incrementLikes,
  decrementLikes,
  editToDo,
} from 'redux/toDosSlice';
import {
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineEdit,
  AiOutlineSave,
} from 'react-icons/ai';
import { useState } from 'react';

export const Todo = ({ text, counter, id, likes }) => {
  const [isEdit, setIsedit] = useState(false);
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();
  const hahdleDelete = id => {
    dispatch(deleteToDo(id));
  };

  const handleIncrementLikes = id => {
    dispatch(incrementLikes(id));
  };
  const handleDecrementLikes = id => {
    dispatch(decrementLikes(id));
  };

  const handleEdit = () => {
    setIsedit(true);
  };

  const handleSave = () => {
    dispatch(editToDo({ activeId: id, query }));
    setIsedit(false);
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <TodoWrapper>
        <EditWrapper>
          {' '}
          {!isEdit ? (
            <EditButton onClick={() => handleEdit()}>
              <AiOutlineEdit size={24} />
            </EditButton>
          ) : (
            <EditButton onClick={() => handleSave()}>
              <AiOutlineSave size={24} />
            </EditButton>
          )}
        </EditWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>
          {' '}
          {!isEdit ? (
            <>{text}</>
          ) : (
            <EditInput defaultValue={text} onChange={handleChange} />
          )}
        </Text>
        <Text>
          {likes}
          <LikeButton type="button" onClick={() => handleIncrementLikes(id)}>
            <AiOutlineLike size={24} />
          </LikeButton>
          <LikeButton type="button" onClick={() => handleDecrementLikes(id)}>
            <AiOutlineDislike size={24} />
          </LikeButton>
        </Text>
        <DeleteButton type="button" onClick={() => hahdleDelete(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
