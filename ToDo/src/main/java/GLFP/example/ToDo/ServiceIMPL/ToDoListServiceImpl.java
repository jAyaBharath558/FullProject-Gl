package GLFP.example.ToDo.ServiceIMPL;

import GLFP.example.ToDo.Exception.ResourceNotFoundExpection;
import GLFP.example.ToDo.Main.ToDoList;
import GLFP.example.ToDo.Repository.ToDoListRepository;
import GLFP.example.ToDo.Service.ToDoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ToDoListServiceImpl implements ToDoListService {
    @Autowired
    ToDoListRepository dao;

    @Override
    public ToDoList createToDoList(ToDoList to) {
        dao.save(to);
        return to;
    }

    @Override
    public ToDoList getToDoListById(int id) {
        ToDoList d=null;
        d = dao.findById(id).orElseThrow(()->new ResourceNotFoundExpection("to do list is not found by given id"+id));
        return d;
    }

    @Override
    public ToDoList updateToDoListById(int id, ToDoList to) {
        ToDoList d = null;
        d = dao.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExpection("To do list is not found by given id " + id));
        d.setDescription(to.getDescription());
        d.setTitle(to.getTitle());
        d.setStatus(to.isStatus());
        return dao.save(d);
    }

    @Override
    public List<ToDoList> getAllToDoList() {
        List<ToDoList> list = dao.findAll();
        return list;
    }

    @Override
    public void deleteToDoListById(int id) {
        dao.deleteById(id);
    }

    @Override
    public ToDoList completeTask(int id) {
        ToDoList d2 = null;
        d2 = dao.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExpection("To do list is not found by given id " + id));
        d2.setStatus(true);
        return dao.save(d2);
    }

    @Override
    public ToDoList inCompleteTask(int id) {
        ToDoList d1 = null;
        d1 = dao.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExpection("To do list is not found by given id " + id));
        d1.setStatus(false);
        return dao.save(d1);
    }
}
