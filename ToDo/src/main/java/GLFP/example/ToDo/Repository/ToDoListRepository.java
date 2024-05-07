package GLFP.example.ToDo.Repository;

import GLFP.example.ToDo.Main.ToDoList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoListRepository extends JpaRepository<ToDoList, Integer> {
}
