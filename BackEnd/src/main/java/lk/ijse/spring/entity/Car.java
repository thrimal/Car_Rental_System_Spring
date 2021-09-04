package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Car {
    @Id
    private String carId;
    private String brand;
    private String type;
    private int numOfPassenger;
    private String transmission;
    private String fuel;
    private double perDay;
    private String status;
}
