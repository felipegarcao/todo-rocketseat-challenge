import styled from "styled-components";

export const Header = styled.header`
  height: 200px;

  background-color: ${(props) => props.theme.gray_700};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.section`
  max-width: 750px;
  margin: 0 auto;
  padding: 1rem;
  margin-top: -40px;
`;

export const SectionCreateNewTask = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 1rem;
  border: 0;
  border: 1px solid #0d0d0d;
  background: #262626;
  border-radius: 8px;
  width: 650px;
  color: ${(props) => props.theme.white};

  &::placeholder {
    color: #808080;
  }

  &:focus {
    outline: 0;
  }
`;

export const ButtonCreateTask = styled.button`
  border: 0;
  padding: 1rem;

  background-color: ${(props) => props.theme.blue_dark};
  color: ${(props) => props.theme.white};
  cursor: pointer;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 14px;
  font-weight: bold;
`;

export const ContainerTasks = styled.div`
  margin-top: 2rem;
`;

export const HeaderTasks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.gray_400};
`;

export const TaskCreated = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.blue};
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const TaskDone = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.purple};
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Counter = styled.span`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.gray_400};
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 999px;
`;

export const MessageNotTasks = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const TextNotTasks = styled.strong`
  color: ${(props) => props.theme.gray_300};
  font-size: 1rem;
`;

export const Task = styled.div`
  background-color: ${(props) => props.theme.gray_400};
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-radius: 8px;
  margin-bottom: 0.5rem;
`;

export const ButtonDeleteTask = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  
  &:hover {
    filter: brightness(0.7);
  }
`;

export const TaskDescription = styled.span`
  color: ${(props) => props.theme.gray_100};
`;

export const TaskDescriptionDone = styled.span`
  text-decoration: line-through;
  color: ${(props) => props.theme.gray_300};

`;

export const Check = styled.div`
  height: 24px;
  width: 24px;
  border: 2px solid ${(props) => props.theme.blue};
  border-radius: 999px;
  cursor: pointer;
`;

export const CheckDone = styled.div`
  height: 24px;
  width: 24px;
  background-color: ${(props) => props.theme.purple};
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

  justify-content: center;
`;
