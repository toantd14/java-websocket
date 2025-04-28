package com.zoomo.auction.controllers;

import com.zoomo.auction.models.Bid;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class AuctionController {

    @MessageMapping("/auction.placeBid")
    @SendTo("/auction-topic/bids")
    public Bid placeBid(Bid bid) {
        // Handle bid logic
        return bid;
    }
}