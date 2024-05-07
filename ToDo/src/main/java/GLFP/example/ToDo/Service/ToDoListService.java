package GLFP.example.ToDo.Service;

import GLFP.example.ToDo.Main.ToDoList;

import java.util.List;

public interface ToDoListService {
    ToDoList createToDoList(ToDoList to);

    ToDoList getToDoListById(int id);

    ToDoList updateToDoListById(int id, ToDoList to);

    List<ToDoList> getAllToDoList();

    void deleteToDoListById(int id);

    ToDoList completeTask(int id);

    ToDoList inCompleteTask(int id);

}
