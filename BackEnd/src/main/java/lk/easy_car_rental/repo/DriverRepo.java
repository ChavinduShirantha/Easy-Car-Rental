package lk.easy_car_rental.repo;

import lk.easy_car_rental.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Chavindu
 * created : 12/5/2023-3:50 PM
 **/

public interface DriverRepo extends JpaRepository<Driver,String> {
}
