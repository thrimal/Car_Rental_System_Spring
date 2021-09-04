package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Rental {
    @Id
    private String rentId;
    @ManyToOne
    @JoinColumn(name = "id",referencedColumnName = "id")
    private Customer id;
    @ManyToOne
    @JoinColumn(name = "carId", referencedColumnName = "carId")
    private Car carId;
    @ManyToOne
    @JoinColumn(name = "dId",referencedColumnName = "id")
    private Driver dId;
    private String startDate;
    private String endDate;
    private double price;
    private int extraKM;
}
