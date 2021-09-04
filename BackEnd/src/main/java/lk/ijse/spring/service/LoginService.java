package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.LoginDTO;

public interface LoginService {
    boolean addCustomer(LoginDTO dto);
    LoginDTO searchCustomer(String email,String password);
}
