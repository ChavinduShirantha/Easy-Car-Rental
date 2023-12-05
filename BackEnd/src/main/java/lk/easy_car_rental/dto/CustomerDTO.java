package lk.easy_car_rental.dto;

import lk.easy_car_rental.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

/**
 * @author : Chavindu
 * created : 12/5/2023-10:17 AM
 **/

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CustomerDTO {
    private String user_Id;
    private String firstName;
    private String lastName;
    private String contact_No;
    private String address;
    private String email;
    private String nic;
    private MultipartFile nic_Img;
    private String license_No;
    private MultipartFile license_Img;

    private UserDTO user;
}
