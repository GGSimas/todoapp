import "react-native-get-random-values";
import { useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TaskItem } from '../../components/TaskItem';

import logoImage from '../../assets/Logo.png';


import { TaskDTO } from '../../dtos/task';

import { 
    Badge,
    BadgeText, 
    Container, 
    Content, 
    EmptyListSubtitle, 
    EmptyListTitle, 
    EmptyListWrapper,
    Clipboard,
    Form, 
    Header, 
    Heading, 
    Logo, 
    TaskCreated, 
    TaskFinished, 
    TaskIndicator, 
    TaskList
} from "./styles";
import { Alert } from 'react-native';

interface TaskListItem {
    item: TaskDTO;
}

export function Home() {
    const [taskDescription, setTaskDescription] = useState('');
    const [tasks, setTasks] = useState<TaskDTO[]>([]);


    const finishedTasks = useMemo(() => {
        return tasks.filter(task => task.done === true).length;
    }, [tasks]);

    function renderEmptyList() {
        return (
            <EmptyListWrapper>
                <Clipboard />
                <EmptyListTitle>Você ainda não tem tarefas cadastradas</EmptyListTitle>
                <EmptyListSubtitle>Crie tarefas e organize seus items a fazer</EmptyListSubtitle>
            </EmptyListWrapper>
        )
    }

    function renderTaskItem({ item }: TaskListItem) {
        return (
            <TaskItem
                task={item}
                onDone={() => handleFinishTask(item.id)}
                onRemove={() => handleRemoveTask(item.id)}
            />
        );
    }

    function handleAddNewTask() {
        if (!taskDescription) {
            return Alert.alert('Informe a descrição da tarefa!')
        };

        setTasks(oldTasks => [...oldTasks, {
            id: uuid(),
            description: taskDescription,
            done: false,
        }]);

        setTaskDescription('');
    }
    
    function handleRemoveTask(taskId: string) {
        const newTasks = tasks.filter(task => task.id !== taskId);

        setTasks(newTasks);
    }

    function handleFinishTask(taskId: string) {
        const finishedTask = tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    done: !task.done
                }
            } else {
                return task;
            }
        })

        setTasks(finishedTask);
    }

    return (
        <Container>
            <Header>
                <Logo source={logoImage} />
            </Header>
    
            <Content>
                <Form>
                    <Input 
                        testID="task-input"
                        placeholder="Adicione uma tarefa"
                        value={taskDescription}
                        onChangeText={setTaskDescription}
                    />
                    <Button testID="task-add-button" onPress={handleAddNewTask} />
                </Form>

                <Heading>
                    <TaskIndicator>
                        <TaskCreated>Criadas</TaskCreated>
                        <Badge>
                            <BadgeText>{tasks.length}</BadgeText>
                        </Badge>
                    </TaskIndicator>

                    <TaskIndicator>
                        <TaskFinished>Concluidas</TaskFinished>
                        <Badge>
                            <BadgeText>{finishedTasks}</BadgeText>
                        </Badge>
                    </TaskIndicator>
                </Heading>

                <TaskList 
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={renderTaskItem}
                    ListEmptyComponent={renderEmptyList}
                />
        
            </Content>
        </Container>
    )
}