package lk.easy_car_rental.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * @author : Chavindu
 * created : 12/5/2023-10:35 AM
 **/
@Configuration
@Import({JPAConfig.class})
@ComponentScan(basePackages = "lk.easy_car_rental.service")
public class WebRootConfig {
    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}
