package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.List;

public interface CarRepo extends JpaRepository<Car,String> {
    @Query(value = "select * from car where status='Available'&&type=?", nativeQuery = true)
    List<Car> getAllCarsByType(@Param("type") String type);
}
