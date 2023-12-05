package lk.easy_car_rental.controller;

import lk.easy_car_rental.dto.CustomerDTO;
import lk.easy_car_rental.dto.UserDTO;
import lk.easy_car_rental.service.CustomerService;
import lk.easy_car_rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Chavindu
 * created : 12/5/2023-10:51 AM
 **/

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {
    @Autowired
    CustomerService service;

    @ResponseStatus(HttpStatus.OK)
    @PostMapping
    public ResponseUtil saveUser(@ModelAttribute CustomerDTO dto, @ModelAttribute UserDTO userDTO){
        dto.setUser(userDTO);
        service.saveCustomer(dto);
        return new ResponseUtil("Ok","Successfully Added",null);
    }
}
