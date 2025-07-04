package com.g01React.LICReservation.Controller;

import com.g01React.LICReservation.Entity.BookingEntity;
import com.g01React.LICReservation.Entity.UserEntity;
import com.g01React.LICReservation.Service.BookingService;
import com.g01React.LICReservation.Service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservations")
public class BookingController {

    private final BookingService bookingService;
    private final UserService userService;

    public BookingController(BookingService bookingService, UserService userService) {
        this.bookingService = bookingService;
        this.userService = userService;
    }

    @GetMapping
    public List<BookingEntity> getAllReservations() {
        return bookingService.getAllBookings();
    }

    @PostMapping
    public BookingEntity createReservation(@RequestBody BookingEntity booking) {
        // Always link to the default user (ID 1)
        Long defaultUserId = 1L;
        UserEntity defaultUser = userService.getUserById(defaultUserId);
        booking.setUser(defaultUser);
        return bookingService.createBooking(booking);
    }
}