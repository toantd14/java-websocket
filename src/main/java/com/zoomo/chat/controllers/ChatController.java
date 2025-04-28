package com.zoomo.chat.controllers;

import com.zoomo.chat.models.Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    private static final Logger logger = LoggerFactory.getLogger(ChatController.class);

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public Message sendMessage(com.zoomo.chat.models.Message message) {
        logger.info("Chat Log - Timestamp: {}, User ID: {}, FullName: {}, Message: {}",
                message.getTimestamp(), message.getId(), message.getFrom(), message.getText());
        System.out.println("Received message at " + message.getTimestamp() + " from user ID: "
                + message.getId() + ", FullName: " + message.getFrom());


        return message;
    }
}