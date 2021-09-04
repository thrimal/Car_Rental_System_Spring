package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CarDTO {
    private String carId;
    private String brand;
    private String type;
    private int numOfPassenger;
    private String transmission;
    private String fuel;
    private double perDay;
    private String status;
}
