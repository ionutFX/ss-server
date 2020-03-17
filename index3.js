// require dependencies
const express = require("express");
const socket = require("socket.io");
const fetch = require("node-fetch");
const WebSocket = require("ws");


// the full list of symbols details defaults selected from finnhub.io
const listOfSymbols = [
    {
      category: "forex",
      items: [
        {
          displayName: "EUR/USD",
          symbolName: "FXPRO:1",
          iconName: "apple"
        },
        {
          displayName: "GBP/USD",
          symbolName: "FXPRO:2",
          iconName: "apple"
        },
        {
          displayName: "EUR/JPY",
          symbolName: "FXPRO:3",
          iconName: "apple"
        },
        {
          displayName: "USD/JPY",
          symbolName: "FXPRO:4",
          iconName: "apple"
        },
        {
          displayName: "AUD/USD",
          symbolName: "FXPRO:5",
          iconName: "apple"
        },
        {
          displayName: "USD/CHF",
          symbolName: "FXPRO:6",
          iconName: "apple"
        }
      ]
    },
    {
      category: "crypto",
      items: [
        {
          displayName: "Bitcoin",
          symbolName: "BINANCE:BTCUSDT",
          iconName: "apple"
        },
        {
          displayName: "Litecoin",
          symbolName: "BINANCE:LTCUSDT",
          iconName: "apple"
        },
        {
          displayName: "Ethereum",
          symbolName: "BINANCE:ETHUSDT",
          iconName: "apple"
        },
        {
          displayName: "Ripple",
          symbolName: "FXPRO:1315",
          iconName: "apple"
        }
      ]
    },
    {
      category: "stock",
      items: [
        {
          displayName: "Apple",
          symbolName: "AAPL",
          iconName: "apple"
        },
        {
          displayName: "Tesla",
          symbolName: "TSLA",
          iconName: "apple"
        },
        {
          displayName: "Microsoft",
          symbolName: "MSFT",
          iconName: "apple"
        },
        {
          displayName: "Amazon",
          symbolName: "AMZN",
          iconName: "apple"
        },
        {
          displayName: "Facebook",
          symbolName: "FB",
          iconName: "apple"
        },
        {
          displayName: "Google",
          symbolName: "GOOGL",
          iconName: "apple"
        },
        {
          displayName: "Netflix",
          symbolName: "NFLX",
          iconName: "apple"
        }
      ]
    },
    {
      category: "commodities",
      items: [
        {
          displayName: "Gold",
          symbolName: "FXPRO:41",
          iconName: "apple"
        },
        {
          displayName: "Silver",
          symbolName: "FXPRO:42",
          iconName: "apple"
        },
        {
          displayName: "Platinum",
          symbolName: "FXPRO:1297",
          iconName: "apple"
        },
        {
          displayName: "BRENT",
          symbolName: "FXPRO:1117",
          iconName: "apple"
        },
        {
          displayName: "NGAS",
          symbolName: "FXPRO:1118",
          iconName: "apple"
        }
      ]
    }
  ];
// instantiate default variables
let predefinedCharts = null;
let connections = 0;
let rooms = [];
let finnSocket = new WebSocket("wss://ws.finnhub.io?token=bp79c7frh5r8uq65p420");


// instantiate new server instance
const app = express();

// start sever
const server = app.listen(4000, () => {
    console.log("started on 4000...");
});

// instantiate the socket.io server
const io =  socket(server);

let webSocketSubscriptions = [];

const checkWebsocketSubscriptions = () => {

    if (webSocketSubscriptions.length <= 0 ) {
        console.log("empty ")
    }else{
        console.log("resr", webSocketSubscriptions)

    }
}

// on connection with socket.io
io.on("connection", ( socket )=>{
    connections++;
    console.log(connections);

    // check websockets subscriptions and update only if necessary
    checkWebsocketSubscriptions() 


    socket.on("disconnect", e =>{
        connections--;
        console.log(connections)
    })
});