package com.fashionstore.backend.repository;

import com.fashionstore.backend.model.ReturnRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReturnRequestRepository extends JpaRepository<ReturnRequest, Long> {
    Optional<ReturnRequest> findByReturnNumber(String returnNumber);
    
    Page<ReturnRequest> findByStatus(ReturnRequest.ReturnStatus status, Pageable pageable);
    
    Page<ReturnRequest> findAllByOrderByCreatedAtDesc(Pageable pageable);
    
    long countByStatus(ReturnRequest.ReturnStatus status);
}
