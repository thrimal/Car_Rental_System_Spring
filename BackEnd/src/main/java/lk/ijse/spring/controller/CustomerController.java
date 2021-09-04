package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.RespectBinding;
import java.util.ArrayList;

@RestController
@RequestMapping("/api/v1/customer")
@CrossOrigin
public class CustomerController {
    @Autowired
    private CustomerService service;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveCustomer(@RequestBody CustomerDTO dto) {
        if (dto.getId().trim().length() <= 0) {
            throw new RuntimeException("Customer Id Cannot be Empty...");
        }
        service.addCustomer(dto);
        return new ResponseEntity(new StandardResponse("201", "Done", dto), HttpStatus.CREATED);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ArrayList<CustomerDTO> getAllCustomers(){
        ArrayList<CustomerDTO> allCustomers = service.getAllCustomers();
        service.getAllCustomersCount();
        return allCustomers;
    }
    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody CustomerDTO searchCustomer(@PathVariable String id){
        CustomerDTO customer = service.searchCustomer(id);
        return customer;
    }

    @GetMapping(path = "/nic/{nic}",produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody CustomerDTO getCustomerByNIC(@PathVariable String nic){
        CustomerDTO customer = service.searchCustomerByNIC(nic);
        return customer;
    }

    @GetMapping(path = "/count")
    public @ResponseBody int getAllCustomersCount(){
        return service.getAllCustomersCount();
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity deleteCustomer(@RequestParam String id){
        service.deleteCustomer(id);
        return new ResponseEntity(new StandardResponse("200","Done",null),HttpStatus.OK);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateCustomer(@RequestBody CustomerDTO dto){
        if (dto.getId().trim().length()<=0) {
            throw new RuntimeException("Customer Not Found...");
        }
        service.updateCustomer(dto);
        return new ResponseEntity(new StandardResponse("200","Done",dto),HttpStatus.OK);
    }
}
