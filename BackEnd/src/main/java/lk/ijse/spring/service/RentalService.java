package lk.ijse.spring.service;

import lk.ijse.spring.dto.RentalDTO;

import java.util.ArrayList;

public interface RentalService {
    boolean addRental(RentalDTO dto);
    boolean deleteRental(String id);
    ArrayList<RentalDTO> getAllRentals();
}
