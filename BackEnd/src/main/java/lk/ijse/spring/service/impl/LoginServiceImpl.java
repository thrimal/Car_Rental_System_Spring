package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.LoginDTO;
import lk.ijse.spring.entity.Login;
import lk.ijse.spring.repo.LoginRepo;
import lk.ijse.spring.service.LoginService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class LoginServiceImpl implements LoginService {
    @Autowired
    private LoginRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public boolean addCustomer(LoginDTO dto) {
        if (repo.existsById(dto.getEmail())) {
            throw new RuntimeException("Already Exist...");
        }
        repo.save(mapper.map(dto, Login.class));
        return true;
    }

    @Override
    public LoginDTO searchCustomer(String email,String password) {
        Login user = repo.findByEmailAndPassword(email,password);
        if (user!=null) {
            return mapper.map(user,LoginDTO.class);
        }
        return null;
    }
}
