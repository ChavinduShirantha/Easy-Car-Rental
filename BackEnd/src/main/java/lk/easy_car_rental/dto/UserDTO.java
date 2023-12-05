package lk.easy_car_rental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author : Chavindu
 * created : 12/5/2023-10:16 AM
 **/

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserDTO {
    private String user_Id;
    private String role_Type;
    private String user_Name;
    private String password;
}
