package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/v1/car")
@CrossOrigin
public class CarController {

    @Autowired
    private CarService service;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveCar(@RequestBody CarDTO dto){
        if (dto.getCarId().trim().length()<=0) {
            throw new RuntimeException("Car Id is Cannot be Empty...");
        }
        service.addCar(dto);
        return new ResponseEntity(new StandardResponse("201","Done",dto), HttpStatus.CREATED);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ArrayList<CarDTO> getAllCars(){
        ArrayList<CarDTO> allCars = service.getAllCars();
        return allCars;
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody CarDTO searchCar(@PathVariable String id){
        CarDTO dto = service.searchCustomer(id);
        return dto;
    }

    @GetMapping(path = "/count")
    public @ResponseBody int getAllCarsCount(){
        return service.getAllCarsCount();
    }

    @GetMapping(params = {"type"},path = "/byType",produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ArrayList<CarDTO> getAllCarsByType(@RequestParam String type){
        return service.getAllCarsByType(type);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity deleteCar(@RequestParam String id){
        service.deleteCar(id);
        return new ResponseEntity(new StandardResponse("200","Done",null),HttpStatus.OK);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateCar(@RequestBody CarDTO dto){
        if (dto.getCarId().trim().length()<=0) {
            throw new RuntimeException("Car Id is Not Found...");
        }
        service.updateCar(dto);
        return new ResponseEntity(new StandardResponse("200","Done",dto),HttpStatus.OK);
    }
}
