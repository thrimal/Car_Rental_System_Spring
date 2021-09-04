package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
@RestController
@RequestMapping("/api/v1/driver")
@CrossOrigin
public class DriverController {
    @Autowired
    private DriverService service;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveDriver(@RequestBody DriverDTO dto) {
        if (dto.getId().trim().length() <= 0) {
            throw new RuntimeException("Customer Id Cannot be Empty...");
        }
        service.addDriver(dto);
        return new ResponseEntity(new StandardResponse("201", "Done", dto), HttpStatus.CREATED);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ArrayList<DriverDTO> getAllDriver(){
        ArrayList<DriverDTO> allDriver = service.getAllDriver();
        return allDriver;
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody DriverDTO searchDriver(@PathVariable String id){
        DriverDTO driver = service.searchDriver(id);
        return driver;
    }

    @GetMapping(path = "/count")
    public @ResponseBody int getAllDriversCount(){
        return service.getAllDriversCount();
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity deleteDriver(@RequestParam String id){
        service.deleteDriver(id);
        return new ResponseEntity(new StandardResponse("200","Done",null),HttpStatus.OK);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateDriver(@RequestBody DriverDTO dto){
        if (dto.getId().trim().length()<=0) {
            throw new RuntimeException("Customer Not Found...");
        }
        service.updateDriver(dto);
        return new ResponseEntity(new StandardResponse("200","Done",dto),HttpStatus.OK);
    }
}
