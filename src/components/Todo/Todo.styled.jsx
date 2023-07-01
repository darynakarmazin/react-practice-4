import styled from '@emotion/styled';

export const TodoWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(10)};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing(2)};

  color: ${({ theme }) => theme.colors.gray};
  box-shadow: ${({ theme }) => theme.shadows.regular};

  position: relative;
  width: 100%;
  height: 100%;
`;

export const EditWrapper = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  padding: ${({ theme }) => theme.spacing(2.5)};
  transition: transform ${({ theme }) => theme.animation.cubicBezier};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const LikeButton = styled.button`
  top: 0;
  right: 0;

  padding: ${({ theme }) => theme.spacing(2.5)};
  transition: transform ${({ theme }) => theme.animation.cubicBezier};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
export const EditButton = styled.button`
  padding: ${({ theme }) => theme.spacing(2.5)};

  transition: transform ${({ theme }) => theme.animation.cubicBezier};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const EditInput = styled.input`
  width: 90%;
  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  background-color: transparent;
`;
