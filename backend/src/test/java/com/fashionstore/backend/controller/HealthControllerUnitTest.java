package com.fashionstore.backend.controller;

import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class HealthControllerUnitTest {

    @Test
    void health_ShouldReturnHealthStatus() {
        // Given
        HealthController controller = new HealthController();

        // When
        var response = controller.health();

        // Then
        assertNotNull(response);
        assertEquals(200, response.getStatusCode().value());
        
        Map<String, Object> body = response.getBody();
        assertNotNull(body);
        assertEquals("UP", body.get("status"));
        assertEquals("FashionStoreAPI", body.get("service"));
        assertTrue(body.containsKey("timestamp"));
    }
}
