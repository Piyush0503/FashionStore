package com.fashionstore.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "addresses")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Address {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    @NotBlank(message = "Address line 1 is required")
    @Column(nullable = false)
    private String addressLine1;
    
    private String addressLine2;
    
    @NotBlank(message = "City is required")
    @Column(nullable = false)
    private String city;
    
    @NotBlank(message = "State is required")
    @Column(nullable = false)
    private String state;
    
    @NotBlank(message = "Pin code is required")
    @Pattern(regexp = "^[0-9]{6}$", message = "Pin code should be 6 digits")
    @Column(nullable = false)
    private String pinCode;
    
    @Column(nullable = false)
    @Builder.Default
    private Boolean isDefault = false;
}
