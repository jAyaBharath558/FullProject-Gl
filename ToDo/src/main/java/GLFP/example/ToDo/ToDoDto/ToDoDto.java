package GLFP.example.ToDo.ToDoDto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ToDoDto {
    int id;
    String title;
    String description;
    boolean status;
}
