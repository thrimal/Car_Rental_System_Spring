package lk.ijse.spring.controller;

import lk.ijse.spring.dto.LoginDTO;
import lk.ijse.spring.service.LoginService;
import lk.ijse.spring.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/login")
@CrossOrigin
public class LoginController {
    @Autowired
    private LoginService service;

    @PostMapping
    public ResponseEntity addUser(@RequestBody LoginDTO dto){
        if (dto.getEmail().trim().length()<=0) {
            throw new RuntimeException("Email Cannot be Empty...");
        }
        service.addCustomer(dto);
        return new ResponseEntity(new StandardResponse("200","Done",dto), HttpStatus.CREATED);
    }

    @GetMapping
    public @ResponseBody LoginDTO searchUser(@PathVariable String email,@PathVariable String password){
        return service.searchCustomer(email,password);
    }
}
