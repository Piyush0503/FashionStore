package com.fashionstore.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "return_requests")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReturnRequest {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String returnNumber;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_item_id", nullable = false)
    private OrderItem orderItem;
    
    @NotNull(message = "Return reason is required")
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ReturnReason reason;
    
    @NotBlank(message = "Comments are required")
    @Column(nullable = false, columnDefinition = "TEXT")
    private String comments;
    
    @ElementCollection
    @CollectionTable(name = "return_photos", joinColumns = @JoinColumn(name = "return_id"))
    @Column(name = "photo_url")
    @Builder.Default
    private List<String> photos = new ArrayList<>();
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private ReturnStatus status = ReturnStatus.PENDING;
    
    private String adminNotes;
    
    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    private LocalDateTime updatedAt;
    
    private LocalDateTime approvedAt;
    private LocalDateTime rejectedAt;
    private LocalDateTime completedAt;
    
    public enum ReturnReason {
        SIZE_TOO_SMALL,
        SIZE_TOO_LARGE,
        QUALITY_ISSUE,
        WRONG_ITEM_RECEIVED,
        CHANGED_MIND,
        OTHER
    }
    
    public enum ReturnStatus {
        PENDING, APPROVED, REJECTED, COMPLETED
    }
}
