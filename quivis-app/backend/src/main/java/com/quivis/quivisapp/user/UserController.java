package com.quivis.quivisapp.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    @PostMapping("/save-claude-api-key")
    public ResponseEntity<String> saveClaudeApiKey(@RequestBody Map<String, String> payload, Principal principal) {
        String apiKey = payload.get("apiKey");
        String username = principal.getName(); // Assuming you're using Spring Security

        try {
            userService.saveClaudeApiKey(username, apiKey);
            return ResponseEntity.ok("API key saved successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving API key");
        }
    }
}