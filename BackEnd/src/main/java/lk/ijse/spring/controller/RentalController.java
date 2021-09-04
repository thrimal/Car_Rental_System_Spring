package lk.ijse.spring.controller;

import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.service.RentalService;
import lk.ijse.spring.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/v1/rental")
@CrossOrigin
public class RentalController {
    @Autowired
    private RentalService service;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addRental(@RequestBody RentalDTO dto){
        if ((dto.getRentId().trim().length()<=0) & (dto.getCarId().trim().length()<=0) & (dto.getId().trim().length()<=0)) {
            throw new RuntimeException("Rental Fields Cannot be Empty...");
        }
        service.addRental(dto);
        return new ResponseEntity(new StandardResponse("200","Done",dto), HttpStatus.CREATED);
    }

    @DeleteMapping(params = {"id"})
    public ResponseEntity deleteRental(@RequestParam String id){
        service.deleteRental(id);
        return new ResponseEntity(new StandardResponse("200","Done",null),HttpStatus.OK);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ArrayList<RentalDTO> getAllRentals(){
        ArrayList<RentalDTO> allRentals = service.getAllRentals();
        return allRentals;
    }
}
