import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, LikeButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteToDo,incrementLikes, decrementLikes } from 'redux/toDosSlice';
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

export const Todo = ({ text, counter, id, likes }) => {
  const dispatch = useDispatch();
  const hahdleDelete = id => {
    dispatch(deleteToDo(id));
  };

  const handleIncrementLikes = id => {
    dispatch(incrementLikes(id))
  }
  const handleDecrementLikes = id => {
    dispatch(decrementLikes(id))
  }
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <Text>{likes}
          <LikeButton type="button" onClick={()=>handleIncrementLikes(id)}><AiOutlineLike size={24} /></LikeButton>
          <LikeButton type="button" onClick={()=>handleDecrementLikes(id)}><AiOutlineDislike size={24} /></LikeButton>
        </Text>
        <DeleteButton type="button" onClick={() => hahdleDelete(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
