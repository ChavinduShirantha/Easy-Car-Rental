package lk.easy_car_rental.service.impl;

import lk.easy_car_rental.dto.DriverDTO;
import lk.easy_car_rental.entity.Customer;
import lk.easy_car_rental.entity.Driver;
import lk.easy_car_rental.entity.User;
import lk.easy_car_rental.repo.CustomerRepo;
import lk.easy_car_rental.repo.DriverRepo;
import lk.easy_car_rental.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.IOException;

/**
 * @author : Chavindu
 * created : 12/5/2023-3:51 PM
 **/
@Service
@Transactional
public class DriverServiceImpl implements DriverService {
    @Autowired
    DriverRepo repo;
    @Override
    public void saveDriver(DriverDTO dto) {
        Driver driver = new Driver(dto.getUser_Id(), dto.getFirstName(), dto.getLastName(), dto.getContact_No(), dto.getAddress(), dto.getEmail(), dto.getNic(), "", dto.getLicense_No(), "", dto.getAvailability(), new User(dto.getUser().getUser_Id(), dto.getUser().getRole_Type(), dto.getUser().getUser_Name(), dto.getUser().getPassword()));
        if (repo.existsById(dto.getUser_Id()))
            throw new RuntimeException(dto.getUser_Id() + " is already available, please insert a new ID");

        try {
            String projectPath="D:\\EasyCarRental";
            // String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();

            dto.getNic_Img().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getNic_Img().getOriginalFilename()));
            dto.getLicense_Img().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getLicense_Img().getOriginalFilename()));

            driver.setNic_Img("uploads/" + dto.getNic_Img().getOriginalFilename());
            driver.setLicense_Img("uploads/" + dto.getLicense_Img().getOriginalFilename());


        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        System.out.println(driver);
        repo.save(driver);
    }
}
