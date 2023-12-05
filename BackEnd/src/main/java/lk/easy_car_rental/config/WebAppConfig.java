package lk.easy_car_rental.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * @author : Chavindu
 * created : 12/5/2023-10:32 AM
 **/
@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {"lk.easy_car_rental.controller","lk.easy_car_rental.advisor"})
public class WebAppConfig {
}
