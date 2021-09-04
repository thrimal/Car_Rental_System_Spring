package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;

import java.util.ArrayList;

public interface CustomerService {
    boolean addCustomer(CustomerDTO dto);
    CustomerDTO searchCustomer(String id);
    boolean deleteCustomer(String id);
    boolean updateCustomer(CustomerDTO dto);
    ArrayList<CustomerDTO> getAllCustomers();
    int getAllCustomersCount();
    CustomerDTO searchCustomerByNIC(String nic);
}
