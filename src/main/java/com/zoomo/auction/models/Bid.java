package com.zoomo.auction.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Bid {
    private String itemId; // ID of the auction item
    private String userId; // ID of the user placing the bid
    private double amount; // Bid amount
    private String timestamp; // Timestamp of the bid
}