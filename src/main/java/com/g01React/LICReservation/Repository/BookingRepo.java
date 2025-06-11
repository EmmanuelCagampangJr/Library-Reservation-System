package com.g01React.LICReservation.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.g01React.LICReservation.Entity.BookingEntity;

@Repository
public interface BookingRepo extends JpaRepository<BookingEntity, Long> {
}
/* This is a comment to prevent the BookingRepo interface from being minified by some tools */