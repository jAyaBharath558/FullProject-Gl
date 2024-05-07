package GLFP.example.ToDo.Main;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ToDoList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(name = "Todo title")
    String title;

    @Column(name = "Todo Description")
    String description;

    @Column(name = "Todo Completed")
    boolean status;
}
