package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.entity.Rental;
import lk.ijse.spring.repo.RentalRepo;
import lk.ijse.spring.service.RentalService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class RentalServiceImpl implements RentalService {
    @Autowired
    private RentalRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public boolean addRental(RentalDTO dto) {
        if (repo.existsById(dto.getRentId())) {
            throw new RuntimeException("Car Already Exists...");
        }
        repo.save(mapper.map(dto, Rental.class));
        return true;
    }

    @Override
    public boolean deleteRental(String id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException("Rental Not Found...");
        }
        repo.deleteById(id);
        return true;
    }

    @Override
    public ArrayList<RentalDTO> getAllRentals() {
        List<Rental> all = repo.findAll();
        return mapper.map(all,new TypeToken<ArrayList<RentalDTO>>(){}.getType());
    }
}
