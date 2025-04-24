package com.wsjv.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    private String id; // Unique user ID
    private String from; // FullName
    private String text; // Message content
    private String timestamp; // timestamp of the message
}
