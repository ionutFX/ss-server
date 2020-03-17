const express = require("express");
const socket = require("socket.io");
const fetch = require("node-fetch");
const WebSocket = require("ws");

const app = express();
app.use(express.static("test"));
const server = app.listen(4000, () => {
  console.log("started on 4000...");
});

// get chart data
// const defaults = ["BINANCE:BTCUSDT", "BINANCE:LTCUSDT", "BINANCE:ETHUSDT", "FXPRO:1", "FXPRO:2", "FXPRO:3", "FXPRO:4", "FXPRO:5", "FXPRO:6", "FXPRO:1315", "AAPL", "TSLA", "MSFT", "AMZN", "FB", "GOOG", "NFLX", "FXPRO:41", "FXPRO:42", "FXPRO:1297", "FXPRO:1117", "FXPRO:1118,]";



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

let date = new Date();
let to = date.getTime();
date.setDate(date.getDate() - 2);
let from = date.getTime();
// let endpoint = "crypto";

let predefinedCharts = null;
let connections = 0;

const asyncForeach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};
const preGetChartData = async (list, endpoint, from, to, interval = 60) => {
  let charts = [];

  await  asyncForeach(listOfSymbols,  async category =>{
    let items = category.items;
    let endpoint = category.category;
    if (endpoint == "commodities") endpoint= "forex"
    await asyncForeach(items, async symbol => {
      
      const apiURL = `https://finnhub.io/api/v1/${endpoint}/candle?symbol=${symbol.symbolName}&resolution=60&count=60&token=bp79c7frh5r8uq65p420`;
      // const apiURL = `https://finnhub.io/api/v1/${endpoint}/candle?symbol=${symbol}&resolution=60&from=${from}&to=${to}&token=bp79c7frh5r8uq65p420`;
      const response = await fetch(apiURL);
      const data = await response.json();
      charts.push({ symbol: symbol, data: data["o"] });
    });
  })

  return charts;
};

const loadGraphs = async () => {
  await preGetChartData(listOfSymbols, from, to).then(vals => {
    predefinedCharts = vals;
  });
  // console.log(predefinedCharts);
};

const io = socket(server);
loadGraphs();
let finnSocket = null;
let rooms = [];

const startSockets = () => {
  // instantiate timers
  let timers = {};

  finnSocket = new WebSocket("wss://ws.finnhub.io?token=bp79c7frh5r8uq65p420");

  finnSocket.onopen = () => {
    listOfSymbols.forEach(category => {
      category.items.forEach((item, i) => {
        timers[item.symbolName] = {
          symbol: item.symbolName,
          timerID: null
        };
        finnSocket.send(
          JSON.stringify({ type: "subscribe", symbol: item.symbolName })
        );
      });
    });
  };

  finnSocket.onmessage = e => {
    let data = JSON.parse(e.data);
    if (data.data) {
      let currentSymbol = data.data[0].s;
      // console.log();
      if (timers[currentSymbol].timerID !== null) {
        return;
      } else {
        // a message was received
        let json = JSON.parse(e.data);
        if (json.data) {
          timers[currentSymbol].timerID = setTimeout(async () => {
            let price = json.data[0].p;
            let symbolName = json.data[0].s;

            rooms[symbolName] = price;

            io.to(symbolName).emit("liveData", rooms[symbolName]);
            timers[currentSymbol].timerID = null;
          }, 2500);
        }
        // console.log(rooms);
      }
    } else {
      console.log("fail");
    }
  };
  finnSocket.onerror = e => {
    console.log("err", e);
  };
  finnSocket.onclose = e => {
    console.log("closed", e);
  };
  // console.log(finnSocket)
};

startSockets();

io.on("connection", ioSocket => {
  connections++;
  ioSocket.on("disconnect", () => {
    console.log("disc");
    connections--;
  });
  console.log("user connected");
  io.to(ioSocket.id).emit("predefinedCharts", predefinedCharts);
  ioSocket.on("requestLivedata", symbolData => {
    ioSocket.join(symbolData.symbol);
  });
  ioSocket.on("switchSymbol", data => {
    let from = data.from;
    let to = data.to;
    ioSocket.leave(from);
    console.log("left ", from);
    ioSocket.join(to);
    console.log("joined ", to);
  });
});
