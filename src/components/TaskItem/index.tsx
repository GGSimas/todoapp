import { EvilIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import { TaskDTO } from "../../dtos/task";
import {
     TaskWrapper,
     TaskCheck,
     TaskDescription,
     TaskExcludeButton,
} from "./styles";

interface TaskItemProps {
    task: TaskDTO;
    onDone(): void;
    onRemove(): void;
}

export function TaskItem({ task, onDone, onRemove }: TaskItemProps) {
    const theme = useTheme();

    return (
        <TaskWrapper>
            <TaskCheck 
                value={task.done}
                onValueChange={onDone}
            />
            <TaskDescription done={task.done}>{task.description}</TaskDescription>

            <TaskExcludeButton onPress={onRemove}>
                <EvilIcons name="trash" size={24} color={theme.colors.gray_300} />
            </TaskExcludeButton>
        </TaskWrapper>
    )
}