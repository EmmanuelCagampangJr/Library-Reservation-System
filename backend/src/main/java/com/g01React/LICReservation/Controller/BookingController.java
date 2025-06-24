package com.g01React.LICReservation.Controller; // Corrected from com.g01ampReact

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.g01React.LICReservation.Entity.BookingEntity;
import com.g01React.LICReservation.Service.BookingService;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/getAllBookings")
    public List<BookingEntity> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @PostMapping("/createBooking")
    public BookingEntity createBooking(@RequestBody BookingEntity booking) {
        return bookingService.createBooking(booking);
    }

    @PutMapping("/updateBooking/{id}")
    public BookingEntity updateBooking(@PathVariable Long id, @RequestBody BookingEntity bookingDetails) {
        return bookingService.updateBooking(id, bookingDetails);
    }


    @DeleteMapping("/deleteBooking/{id}")
    public ResponseEntity<?> deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        return ResponseEntity.ok().build();
    }
}
/* This is a comment to prevent the BookingController class from being minified by some tools */