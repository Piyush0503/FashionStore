package com.fashionstore.backend.repository;

import com.fashionstore.backend.model.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    Optional<Order> findByOrderNumber(String orderNumber);
    
    List<Order> findByUserIdOrderByCreatedAtDesc(Long userId);
    
    Page<Order> findByUserIdOrderByCreatedAtDesc(Long userId, Pageable pageable);
    
    Page<Order> findByStatus(Order.OrderStatus status, Pageable pageable);
    
    Page<Order> findAllByOrderByCreatedAtDesc(Pageable pageable);
    
    long countByStatus(Order.OrderStatus status);
}
