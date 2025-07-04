package com.g01React.LICReservation.Service;

import java.util.List;

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

    public BookingEntity createBooking(BookingEntity booking) {
        return bookingRepo.save(booking);
    }
}