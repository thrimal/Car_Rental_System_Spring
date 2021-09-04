package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface LoginRepo extends JpaRepository<Login,String> {
    Login findByEmailAndPassword( String email, String password);
}
