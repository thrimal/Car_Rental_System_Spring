package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.entity.Car;

import java.util.ArrayList;

public interface CarService {
    boolean addCar(CarDTO dto);
    boolean updateCar(CarDTO dto);
    boolean deleteCar(String id);
    CarDTO searchCustomer(String id);
    ArrayList<CarDTO> getAllCars();
    int getAllCarsCount();
    ArrayList<CarDTO> getAllCarsByType(String type);
}
