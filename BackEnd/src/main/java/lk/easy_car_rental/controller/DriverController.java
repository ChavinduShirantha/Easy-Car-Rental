package lk.easy_car_rental.controller;

import lk.easy_car_rental.dto.CustomerDTO;
import lk.easy_car_rental.dto.DriverDTO;
import lk.easy_car_rental.dto.UserDTO;
import lk.easy_car_rental.service.CustomerService;
import lk.easy_car_rental.service.DriverService;
import lk.easy_car_rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Chavindu
 * created : 12/5/2023-3:55 PM
 **/

@RestController
@RequestMapping("/driver")
@CrossOrigin
public class DriverController {
    @Autowired
    DriverService service;

    @ResponseStatus(HttpStatus.OK)
    @PostMapping
    public ResponseUtil saveDriver(@ModelAttribute DriverDTO dto, @ModelAttribute UserDTO userDTO){
        dto.setUser(userDTO);
        service.saveDriver(dto);
        return new ResponseUtil("Ok","Successfully Added",null);
    }
}
