package lk.easy_car_rental.repo;

import lk.easy_car_rental.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Chavindu
 * created : 12/5/2023-10:42 AM
 **/

public interface CustomerRepo extends JpaRepository<Customer,String> {
}
