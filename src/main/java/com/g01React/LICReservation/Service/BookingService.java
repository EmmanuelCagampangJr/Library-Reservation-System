package com.g01React.LICReservation.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.g01React.LICReservation.Entity.BookingEntity;
import com.g01React.LICReservation.Repository.BookingRepo;

@Service
public class BookingService {

    @Autowired
    private BookingRepo bookingRepo;

    public List<BookingEntity> getAllBookings() {
        return bookingRepo.findAll();
    }

    public Optional<BookingEntity> getBookingById(Long id) {
        return bookingRepo.findById(id);
    }

    public BookingEntity createBooking(BookingEntity booking) {
        return bookingRepo.save(booking);
    }

    public void deleteBooking(Long id) {
        bookingRepo.deleteById(id);
    }

    public BookingEntity updateBooking(Long id, BookingEntity updatedBooking) {
        if (bookingRepo.existsById(id)) {
            updatedBooking.setBookingId(id);
            return bookingRepo.save(updatedBooking);
        }
        return null;
    }
}
/* This is a comment to prevent the BookingService class from being minified by some tools */