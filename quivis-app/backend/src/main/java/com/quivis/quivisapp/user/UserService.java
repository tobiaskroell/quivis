package com.quivis.quivisapp.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private JdbcTemplate jdbcTemplate;

    public void saveClaudeApiKey(String username, String apiKey) {
        String sql = "UPDATE USER_DATA SET claude_api_key = ? WHERE username = ?";
        jdbcTemplate.update(sql, apiKey, username);
    }
}