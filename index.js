const express = require("express");
const socket = require("socket.io");
const fetch = require("node-fetch");

const app = express();
const server = app.listen(4000, () => {
  console.log("started on 4000...");
});
app.use(express.static("test"));
const io = socket(server);

io.on("connection", async socket => {
  // const data = await getchartdata("BTCUSD", "H4");
  const data = [
    {
      Timestamp: "2019-07-19T20:00:00+03:00",
      Open: "1.12285",
      High: "1.12297",
      Low: "1.12033",
      Close: "1.12187",
      Vol: "6799"
    },
    {
      Timestamp: "2019-07-22T00:05:00+03:00",
      Open: "1.12138",
      High: "1.12200",
      Low: "1.12081",
      Close: "1.12096",
      Vol: "3027"
    },
    {
      Timestamp: "2019-07-22T04:05:00+03:00",
      Open: "1.12098",
      High: "1.12208",
      Low: "1.12074",
      Close: "1.12151",
      Vol: "3582"
    },
    {
      Timestamp: "2019-07-22T08:05:00+03:00",
      Open: "1.12151",
      High: "1.12236",
      Low: "1.12118",
      Close: "1.12161",
      Vol: "6231"
    },
    {
      Timestamp: "2019-07-22T12:05:00+03:00",
      Open: "1.12162",
      High: "1.12242",
      Low: "1.12068",
      Close: "1.12188",
      Vol: "6463"
    },
    {
      Timestamp: "2019-07-22T16:05:00+03:00",
      Open: "1.12187",
      High: "1.12251",
      Low: "1.12119",
      Close: "1.12198",
      Vol: "6739"
    },
    {
      Timestamp: "2019-07-22T20:05:00+03:00",
      Open: "1.12197",
      High: "1.12199",
      Low: "1.12061",
      Close: "1.12076",
      Vol: "3545"
    },
    {
      Timestamp: "2019-07-23T00:00:00+03:00",
      Open: "1.12072",
      High: "1.12096",
      Low: "1.12030",
      Close: "1.12045",
      Vol: "2200"
    },
    {
      Timestamp: "2019-07-23T04:00:00+03:00",
      Open: "1.12040",
      High: "1.12043",
      Low: "1.11897",
      Close: "1.11920",
      Vol: "3815"
    },
    {
      Timestamp: "2019-07-23T08:00:00+03:00",
      Open: "1.11921",
      High: "1.11957",
      Low: "1.11808",
      Close: "1.11829",
      Vol: "5941"
    },
    {
      Timestamp: "2019-07-23T12:00:00+03:00",
      Open: "1.11827",
      High: "1.11847",
      Low: "1.11681",
      Close: "1.11687",
      Vol: "7010"
    },
    {
      Timestamp: "2019-07-23T16:00:00+03:00",
      Open: "1.11689",
      High: "1.11695",
      Low: "1.11474",
      Close: "1.11505",
      Vol: "7693"
    },
    {
      Timestamp: "2019-07-23T20:00:00+03:00",
      Open: "1.11505",
      High: "1.11574",
      Low: "1.11457",
      Close: "1.11508",
      Vol: "4604"
    },
    {
      Timestamp: "2019-07-24T00:00:00+03:00",
      Open: "1.11508",
      High: "1.11553",
      Low: "1.11441",
      Close: "1.11485",
      Vol: "2641"
    },
    {
      Timestamp: "2019-07-24T04:00:00+03:00",
      Open: "1.11485",
      High: "1.11499",
      Low: "1.11426",
      Close: "1.11453",
      Vol: "2159"
    },
    {
      Timestamp: "2019-07-24T08:00:00+03:00",
      Open: "1.11452",
      High: "1.11553",
      Low: "1.11268",
      Close: "1.11382",
      Vol: "9262"
    },
    {
      Timestamp: "2019-07-24T12:00:00+03:00",
      Open: "1.11382",
      High: "1.11550",
      Low: "1.11355",
      Close: "1.11414",
      Vol: "8584"
    },
    {
      Timestamp: "2019-07-24T16:00:00+03:00",
      Open: "1.11414",
      High: "1.11557",
      Low: "1.11391",
      Close: "1.11452",
      Vol: "7935"
    },
    {
      Timestamp: "2019-07-24T20:00:00+03:00",
      Open: "1.11451",
      High: "1.11460",
      Low: "1.11328",
      Close: "1.11396",
      Vol: "3951"
    },
    {
      Timestamp: "2019-07-25T00:00:00+03:00",
      Open: "1.11383",
      High: "1.11438",
      Low: "1.11344",
      Close: "1.11361",
      Vol: "2666"
    },
    {
      Timestamp: "2019-07-25T04:00:00+03:00",
      Open: "1.11363",
      High: "1.11413",
      Low: "1.11334",
      Close: "1.11343",
      Vol: "2497"
    },
    {
      Timestamp: "2019-07-25T08:00:00+03:00",
      Open: "1.11342",
      High: "1.11371",
      Low: "1.11220",
      Close: "1.11291",
      Vol: "5275"
    },
    {
      Timestamp: "2019-07-25T12:00:00+03:00",
      Open: "1.11290",
      High: "1.11613",
      Low: "1.11011",
      Close: "1.11553",
      Vol: "15546"
    },
    {
      Timestamp: "2019-07-25T16:00:00+03:00",
      Open: "1.11561",
      High: "1.11876",
      Low: "1.11322",
      Close: "1.11333",
      Vol: "17003"
    },
    {
      Timestamp: "2019-07-25T20:00:00+03:00",
      Open: "1.11333",
      High: "1.11507",
      Low: "1.11262",
      Close: "1.11452",
      Vol: "4817"
    },
    {
      Timestamp: "2019-07-26T00:00:00+03:00",
      Open: "1.11453",
      High: "1.11495",
      Low: "1.11422",
      Close: "1.11464",
      Vol: "2160"
    },
    {
      Timestamp: "2019-07-26T04:00:00+03:00",
      Open: "1.11464",
      High: "1.11508",
      Low: "1.11451",
      Close: "1.11472",
      Vol: "2376"
    },
    {
      Timestamp: "2019-07-26T08:00:00+03:00",
      Open: "1.11473",
      High: "1.11482",
      Low: "1.11320",
      Close: "1.11357",
      Vol: "6560"
    },
    {
      Timestamp: "2019-07-26T12:00:00+03:00",
      Open: "1.11357",
      High: "1.11470",
      Low: "1.11253",
      Close: "1.11335",
      Vol: "7678"
    },
    {
      Timestamp: "2019-07-26T16:00:00+03:00",
      Open: "1.11333",
      High: "1.11418",
      Low: "1.11119",
      Close: "1.11219",
      Vol: "11355"
    },
    {
      Timestamp: "2019-07-26T20:00:00+03:00",
      Open: "1.11218",
      High: "1.11294",
      Low: "1.11190",
      Close: "1.11243",
      Vol: "2949"
    },
    {
      Timestamp: "2019-07-29T00:05:00+03:00",
      Open: "1.11229",
      High: "1.11375",
      Low: "1.11220",
      Close: "1.11370",
      Vol: "1998"
    },
    {
      Timestamp: "2019-07-29T04:05:00+03:00",
      Open: "1.11372",
      High: "1.11388",
      Low: "1.11257",
      Close: "1.11270",
      Vol: "2180"
    },
    {
      Timestamp: "2019-07-29T08:05:00+03:00",
      Open: "1.11270",
      High: "1.11286",
      Low: "1.11170",
      Close: "1.11224",
      Vol: "5177"
    },
    {
      Timestamp: "2019-07-29T12:05:00+03:00",
      Open: "1.11223",
      High: "1.11286",
      Low: "1.11129",
      Close: "1.11238",
      Vol: "8015"
    },
    {
      Timestamp: "2019-07-29T16:05:00+03:00",
      Open: "1.11237",
      High: "1.11437",
      Low: "1.11177",
      Close: "1.11410",
      Vol: "8759"
    },
    {
      Timestamp: "2019-07-29T20:05:00+03:00",
      Open: "1.11412",
      High: "1.11509",
      Low: "1.11391",
      Close: "1.11446",
      Vol: "3600"
    },
    {
      Timestamp: "2019-07-30T00:00:00+03:00",
      Open: "1.11446",
      High: "1.11472",
      Low: "1.11402",
      Close: "1.11416",
      Vol: "2816"
    },
    {
      Timestamp: "2019-07-30T04:00:00+03:00",
      Open: "1.11418",
      High: "1.11444",
      Low: "1.11334",
      Close: "1.11369",
      Vol: "4447"
    },
    {
      Timestamp: "2019-07-30T08:00:00+03:00",
      Open: "1.11370",
      High: "1.11492",
      Low: "1.11322",
      Close: "1.11467",
      Vol: "8428"
    },
    {
      Timestamp: "2019-07-30T12:00:00+03:00",
      Open: "1.11469",
      High: "1.11597",
      Low: "1.11395",
      Close: "1.11541",
      Vol: "9673"
    },
    {
      Timestamp: "2019-07-30T16:00:00+03:00",
      Open: "1.11542",
      High: "1.11550",
      Low: "1.11379",
      Close: "1.11521",
      Vol: "9879"
    },
    {
      Timestamp: "2019-07-30T20:00:00+03:00",
      Open: "1.11521",
      High: "1.11609",
      Low: "1.11494",
      Close: "1.11541",
      Vol: "3966"
    },
    {
      Timestamp: "2019-07-31T00:00:00+03:00",
      Open: "1.11540",
      High: "1.11592",
      Low: "1.11534",
      Close: "1.11534",
      Vol: "3307"
    },
    {
      Timestamp: "2019-07-31T04:00:00+03:00",
      Open: "1.11535",
      High: "1.11558",
      Low: "1.11479",
      Close: "1.11552",
      Vol: "3377"
    },
    {
      Timestamp: "2019-07-31T08:00:00+03:00",
      Open: "1.11550",
      High: "1.11620",
      Low: "1.11432",
      Close: "1.11440",
      Vol: "7344"
    },
    {
      Timestamp: "2019-07-31T12:00:00+03:00",
      Open: "1.11439",
      High: "1.11527",
      Low: "1.11434",
      Close: "1.11510",
      Vol: "7073"
    },
    {
      Timestamp: "2019-07-31T16:00:00+03:00",
      Open: "1.11509",
      High: "1.11517",
      Low: "1.11205",
      Close: "1.11285",
      Vol: "12115"
    },
    {
      Timestamp: "2019-07-31T20:00:00+03:00",
      Open: "1.11280",
      High: "1.11385",
      Low: "1.10601",
      Close: "1.10754",
      Vol: "22548"
    },
    {
      Timestamp: "2019-08-01T00:00:00+03:00",
      Open: "1.10749",
      High: "1.10809",
      Low: "1.10336",
      Close: "1.10415",
      Vol: "6255"
    },
    {
      Timestamp: "2019-08-01T04:00:00+03:00",
      Open: "1.10415",
      High: "1.10532",
      Low: "1.10374",
      Close: "1.10529",
      Vol: "6106"
    },
    {
      Timestamp: "2019-08-01T08:00:00+03:00",
      Open: "1.10528",
      High: "1.10537",
      Low: "1.10319",
      Close: "1.10472",
      Vol: "9866"
    },
    {
      Timestamp: "2019-08-01T12:00:00+03:00",
      Open: "1.10472",
      High: "1.10502",
      Low: "1.10269",
      Close: "1.10295",
      Vol: "12536"
    },
    {
      Timestamp: "2019-08-01T16:00:00+03:00",
      Open: "1.10296",
      High: "1.10698",
      Low: "1.10270",
      Close: "1.10681",
      Vol: "16769"
    },
    {
      Timestamp: "2019-08-01T20:00:00+03:00",
      Open: "1.10682",
      High: "1.10956",
      Low: "1.10643",
      Close: "1.10847",
      Vol: "21275"
    },
    {
      Timestamp: "2019-08-02T00:00:00+03:00",
      Open: "1.10847",
      High: "1.10965",
      Low: "1.10743",
      Close: "1.10895",
      Vol: "6293"
    },
    {
      Timestamp: "2019-08-02T04:00:00+03:00",
      Open: "1.10893",
      High: "1.10947",
      Low: "1.10696",
      Close: "1.10822",
      Vol: "11228"
    },
    {
      Timestamp: "2019-08-02T08:00:00+03:00",
      Open: "1.10821",
      High: "1.11149",
      Low: "1.10772",
      Close: "1.10961",
      Vol: "15771"
    },
    {
      Timestamp: "2019-08-02T12:00:00+03:00",
      Open: "1.10961",
      High: "1.11069",
      Low: "1.10781",
      Close: "1.10849",
      Vol: "15832"
    },
    {
      Timestamp: "2019-08-02T16:00:00+03:00",
      Open: "1.10852",
      High: "1.11157",
      Low: "1.10813",
      Close: "1.11142",
      Vol: "20444"
    },
    {
      Timestamp: "2019-08-02T20:00:00+03:00",
      Open: "1.11142",
      High: "1.11164",
      Low: "1.11040",
      Close: "1.11092",
      Vol: "6955"
    },
    {
      Timestamp: "2019-08-05T00:05:00+03:00",
      Open: "1.11073",
      High: "1.11326",
      Low: "1.11045",
      Close: "1.11259",
      Vol: "4253"
    },
    {
      Timestamp: "2019-08-05T04:05:00+03:00",
      Open: "1.11259",
      High: "1.11319",
      Low: "1.11121",
      Close: "1.11255",
      Vol: "9229"
    },
    {
      Timestamp: "2019-08-05T08:05:00+03:00",
      Open: "1.11252",
      High: "1.11492",
      Low: "1.11141",
      Close: "1.11486",
      Vol: "9807"
    },
    {
      Timestamp: "2019-08-05T12:05:00+03:00",
      Open: "1.11488",
      High: "1.11842",
      Low: "1.11416",
      Close: "1.11755",
      Vol: "10716"
    },
    {
      Timestamp: "2019-08-05T16:05:00+03:00",
      Open: "1.11753",
      High: "1.12129",
      Low: "1.11702",
      Close: "1.12094",
      Vol: "13764"
    },
    {
      Timestamp: "2019-08-05T20:05:00+03:00",
      Open: "1.12094",
      High: "1.12108",
      Low: "1.11937",
      Close: "1.12029",
      Vol: "7187"
    },
    {
      Timestamp: "2019-08-06T00:00:00+03:00",
      Open: "1.12026",
      High: "1.12495",
      Low: "1.11993",
      Close: "1.12427",
      Vol: "7122"
    },
    {
      Timestamp: "2019-08-06T04:00:00+03:00",
      Open: "1.12426",
      High: "1.12426",
      Low: "1.11902",
      Close: "1.12027",
      Vol: "8726"
    },
    {
      Timestamp: "2019-08-06T08:00:00+03:00",
      Open: "1.12029",
      High: "1.12186",
      Low: "1.11968",
      Close: "1.11989",
      Vol: "10909"
    },
    {
      Timestamp: "2019-08-06T12:00:00+03:00",
      Open: "1.11988",
      High: "1.12052",
      Low: "1.11774",
      Close: "1.11796",
      Vol: "7745"
    },
    {
      Timestamp: "2019-08-06T16:00:00+03:00",
      Open: "1.11796",
      High: "1.12058",
      Low: "1.11675",
      Close: "1.11974",
      Vol: "12996"
    },
    {
      Timestamp: "2019-08-06T20:00:00+03:00",
      Open: "1.11974",
      High: "1.12066",
      Low: "1.11905",
      Close: "1.11963",
      Vol: "6633"
    },
    {
      Timestamp: "2019-08-07T00:00:00+03:00",
      Open: "1.11963",
      High: "1.12175",
      Low: "1.11963",
      Close: "1.12088",
      Vol: "3429"
    },
    {
      Timestamp: "2019-08-07T04:00:00+03:00",
      Open: "1.12085",
      High: "1.12194",
      Low: "1.12053",
      Close: "1.12113",
      Vol: "7189"
    },
    {
      Timestamp: "2019-08-07T08:00:00+03:00",
      Open: "1.12114",
      High: "1.12121",
      Low: "1.11869",
      Close: "1.11904",
      Vol: "7462"
    },
    {
      Timestamp: "2019-08-07T12:00:00+03:00",
      Open: "1.11902",
      High: "1.12085",
      Low: "1.11792",
      Close: "1.12072",
      Vol: "10549"
    },
    {
      Timestamp: "2019-08-07T16:00:00+03:00",
      Open: "1.12071",
      High: "1.12418",
      Low: "1.12034",
      Close: "1.12270",
      Vol: "19828"
    },
    {
      Timestamp: "2019-08-07T20:00:00+03:00",
      Open: "1.12271",
      High: "1.12308",
      Low: "1.11975",
      Close: "1.11984",
      Vol: "11492"
    },
    {
      Timestamp: "2019-08-08T00:00:00+03:00",
      Open: "1.11985",
      High: "1.12135",
      Low: "1.11967",
      Close: "1.12102",
      Vol: "5014"
    },
    {
      Timestamp: "2019-08-08T04:00:00+03:00",
      Open: "1.12102",
      High: "1.12122",
      Low: "1.12010",
      Close: "1.12096",
      Vol: "4521"
    },
    {
      Timestamp: "2019-08-08T08:00:00+03:00",
      Open: "1.12096",
      High: "1.12277",
      Low: "1.12002",
      Close: "1.12145",
      Vol: "6122"
    },
    {
      Timestamp: "2019-08-08T12:00:00+03:00",
      Open: "1.12141",
      High: "1.12203",
      Low: "1.11811",
      Close: "1.12040",
      Vol: "7804"
    },
    {
      Timestamp: "2019-08-08T16:00:00+03:00",
      Open: "1.12050",
      High: "1.12318",
      Low: "1.11873",
      Close: "1.12049",
      Vol: "15002"
    },
    {
      Timestamp: "2019-08-08T20:00:00+03:00",
      Open: "1.12049",
      High: "1.12105",
      Low: "1.11769",
      Close: "1.11788",
      Vol: "7148"
    },
    {
      Timestamp: "2019-08-09T00:00:00+03:00",
      Open: "1.11793",
      High: "1.11945",
      Low: "1.11781",
      Close: "1.11926",
      Vol: "2957"
    },
    {
      Timestamp: "2019-08-09T04:00:00+03:00",
      Open: "1.11927",
      High: "1.11970",
      Low: "1.11896",
      Close: "1.11949",
      Vol: "2441"
    },
    {
      Timestamp: "2019-08-09T08:00:00+03:00",
      Open: "1.11949",
      High: "1.11981",
      Low: "1.11833",
      Close: "1.11944",
      Vol: "5452"
    },
    {
      Timestamp: "2019-08-09T12:00:00+03:00",
      Open: "1.11942",
      High: "1.12079",
      Low: "1.11934",
      Close: "1.12016",
      Vol: "6976"
    },
    {
      Timestamp: "2019-08-09T16:00:00+03:00",
      Open: "1.12017",
      High: "1.12229",
      Low: "1.11881",
      Close: "1.12110",
      Vol: "12136"
    },
    {
      Timestamp: "2019-08-09T20:00:00+03:00",
      Open: "1.12108",
      High: "1.12123",
      Low: "1.12026",
      Close: "1.12026",
      Vol: "3863"
    },
    {
      Timestamp: "2019-08-12T00:05:00+03:00",
      Open: "1.11984",
      High: "1.12079",
      Low: "1.11969",
      Close: "1.12057",
      Vol: "2210"
    }
  ];
  io.to(socket.id).emit("allData", data);

  socket.on("callSymbol", async params => {
    let { symbolName, interval } = params;
    if (interval == "default") {
      interval = "H1";
    }
    // console.log(symbolName, interval)
    // const newData = await getchartdata(symbolName, interval);
    // console.log(newData)
    io.to(socket.id).emit("updatedSymbol", data);
  });
  let activeChannel;
  let interval;
  socket.on("startUpdate", params => {
    if (interval) {
      clearInterval(interval);
    }

    socket.join("Bitcoin");
    activeChannel = "Bitcoin"
    interval = setInterval(() => getApiDataAndEmit(socket, "Bitcoin"), 3000);
  });

  socket.on("changeUpdateChannel", ({ currentChannel, nextChannel }) => {
    if (interval) {
      clearInterval(interval);
    }
    if(activeChannel){
        
        socket.leave(activeChannel);
    }
    console.log("left", activeChannel);
    socket.join(nextChannel);
    console.log("joined", nextChannel);
    activeChannel=nextChannel
    interval = setInterval(() => getApiDataAndEmit(socket, nextChannel), 3000);
  });

  socket.on("disconnect", () => {
    clearInterval(interval);
    console.log("disconnected");
  });
  // console.log(socket)
});

let ldata = [
  {
    Timestamp: "2019-07-19T20:00:00+03:00",
    Open: "1.12285",
    High: "1.12297",
    Low: "1.12033",
    Close: (Math.random() + 1).toFixed(3),
    Vol: "6799"
  },
  {
    Timestamp: "2019-07-22T00:05:00+03:00",
    Open: "1.12138",
    High: "1.12200",
    Low: "1.12081",
    Close: (Math.random() + 1).toFixed(3),
    Vol: "3027"
  },
  {
    Timestamp: "2019-07-22T04:05:00+03:00",
    Open: "1.12098",
    High: "1.12208",
    Low: "1.12074",
    Close: (Math.random() + 1).toFixed(3),
    Vol: "3582"
  },
  {
    Timestamp: "2019-07-22T08:05:00+03:00",
    Open: "1.12151",
    High: "1.12236",
    Low: "1.12118",
    Close: (Math.random() + 1).toFixed(3),
    Vol: "6231"
  },
  {
    Timestamp: "2019-07-22T12:05:00+03:00",
    Open: "1.12162",
    High: "1.12242",
    Low: "1.12068",
    Close: (Math.random() + 1).toFixed(3),
    Vol: "6463"
  },
  {
    Timestamp: "2019-07-22T16:05:00+03:00",
    Open: "1.12187",
    High: "1.12251",
    Low: "1.12119",
    Close: (Math.random() + 1).toFixed(3),
    Vol: "6739"
  },
  {
    Timestamp: "2019-07-22T20:05:00+03:00",
    Open: "1.12197",
    High: "1.12199",
    Low: "1.12061",
    Close: (Math.random() + 1).toFixed(3),
    Vol: "3545"
  }
];
const getApiDataAndEmit = (socket, channel) => {
  ldata.push({
    Timestamp: "2019-07-22T20:05:00+03:00",
    Open: "1.12197",
    High: (Math.random() + 1).toFixed(3),
    Low: (Math.random() + 1).toFixed(3),
    Close: (Math.random() + 1).toFixed(3),
    Vol: "3545"
  });
  io.to(channel).emit("liveData", ldata);
  console.log("emitted to " + channel, ldata[ldata.length - 1].Close);
};

let i = 0;

const getchartdata = async (symbol, interval) => {
  console.log(i++);
  // get the current date
  const date = new Date();
  const today = date.toISOString().slice(0, 10);

  // set date -30 days
  switch (interval) {
    case "MN1":
      date.setDate(date.getDate() - 2000);

      break;

    case "W1":
      date.setDate(date.getDate() - 730);

      break;
    case "D1":
      date.setDate(date.getDate() - 100);

      break;
    case "H1":
      date.setDate(date.getDate() - 5);

      break;
    case "M30":
      date.setDate(date.getDate() - 1);

      break;

    default:
      date.setDate(date.getDate() - 5);
      break;
  }

  const oneMonthEarlier = date.toISOString().slice(0, 10);

  // get data from api
  const response = await fetch(
    "https://pubservices.fxoro.com/api/tradingplatform/getchartdata",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        Symbol: symbol,
        From: oneMonthEarlier,
        To: today,
        Timeframe: interval
      })
    }
  );
  const data = await response.json();
  return data;
};
