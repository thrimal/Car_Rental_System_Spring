package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public boolean addCustomer(CustomerDTO dto) {
        if (repo.existsById(dto.getId())) {
            throw new RuntimeException("Customer Already Exists...");
        }
        repo.save(mapper.map(dto, Customer.class));
        return true;
    }

    @Override
    public CustomerDTO searchCustomer(String id) {
        Optional<Customer> customer = repo.findById(id);
        if (customer.isPresent()) {
            Customer c = customer.get();
            return mapper.map(c,CustomerDTO.class);
        }
        return null;
    }

    @Override
    public boolean deleteCustomer(String id) {
        if (! repo.existsById(id)) {
            throw new RuntimeException("Customer Not Found...");
        }
        repo.deleteById(id);
        return true;
    }

    @Override
    public boolean updateCustomer(CustomerDTO dto) {
        if (repo.existsById(dto.getId())) {
            repo.save(mapper.map(dto,Customer.class));
            return true;
        }
        return false;
    }

    @Override
    public ArrayList<CustomerDTO> getAllCustomers() {
        List<Customer> all = repo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<CustomerDTO>>(){}.getType());
    }

    @Override
    public int getAllCustomersCount() {
        return (int) repo.count();
    }

    @Override
    public CustomerDTO searchCustomerByNIC(String nic) {
        Optional<Customer> customer = repo.findByNic(nic);
        if (customer.isPresent()) {
            return mapper.map(customer.get(),CustomerDTO.class);
        }
        return null;
    }
}
