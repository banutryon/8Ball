const express = require("express");
const eightBall = express.Router();
const EightBall = require("../models/8ball_model.js");
// const SeedData = require("../models/seed_model.js");
const SeedData = [
    {
        name:"It is certain",
        url:"https://media.giphy.com/media/H2sK4jOyAGO5PpomfF/giphy.gif"
    },
    {
        name:"It is decidedly so",
        url:"https://media.giphy.com/media/jErnybNlfE1lm/giphy.gif"
    },
    {
        name:"I'd rather Rick Roll you",
        url:"https://media.giphy.com/media/kFgzrTt798d2w/giphy.gif"
    },
    {
        name:"Sorry, but no",
        url:"https://media.giphy.com/media/j0AOPBeDOaRXrrs1pF/giphy.gif"
    },
	{
		name: "Can't Decide",
		url: "https://media1.giphy.com/media/l0CLThEZp4OtNNsli/giphy.gif?cid=ecf05e470su7drt5gjhgfea89drtibvs41plp81a48lteth7&rid=giphy.gif"

	},
    {
		name: "Can't...make...a...decision",
		url: "https://media1.giphy.com/media/l0CLThEZp4OtNNsli/giphy.gif?cid=ecf05e470su7drt5gjhgfea89drtibvs41plp81a48lteth7&rid=giphy.gif"

	},
    {
		name: "I want to believe",
		url: "https://media0.giphy.com/media/xT9IgEx8SbQ0teblUQ/giphy.gif?cid=ecf05e47yxfjpogndwtpmctb1rdr0j5bwaz4tn48t6192nrd&rid=giphy.gif"

	},
    {
		name: "Yes",
		url: "https://media4.giphy.com/media/H2sK4jOyAGO5PpomfF/giphy.gif?cid=ecf05e47yxfjpogndwtpmctb1rdr0j5bwaz4tn48t6192nrd&rid=giphy.gif"

	},
    {
		name: "Very Much Yes",
		url: "https://media4.giphy.com/media/H2sK4jOyAGO5PpomfF/giphy.gif?cid=ecf05e47yxfjpogndwtpmctb1rdr0j5bwaz4tn48t6192nrd&rid=giphy.gif"

	},
    {
		name: "Yeah, I think so, Too",
		url: "https://media0.giphy.com/media/eh0c3GR22OtFP64ro7/giphy.gif?cid=ecf05e47542b0d1b93e3d6ebba31459bdeb2ad42921beb38&rid=giphy.gif"

	},
    {
		name: "It could Pop Off",
		url: "https://media2.giphy.com/media/PmLzgRNxy790fV61VM/giphy.gif?cid=ecf05e47c1qibqnw590gle1k287lrklfxcg4xgc0v2m216uy&rid=giphy.gif"

	},
    {
		name: "The Outlook Sucks",
		url: "https://media4.giphy.com/media/NVmB6AL4kjx6w/giphy.gif?cid=ecf05e470420602bce0ccfc10b9c5a338936aa69fa3a2ab8&rid=giphy.gif"

	},
    {
		name: "You'd think so, but...NO",
		url: "https://media0.giphy.com/media/3o6MbmYHWmaekABoDm/giphy.gif?cid=ecf05e478934253cec3897f912edd71606a040f14c401897&rid=giphy.gif"

	},
    {
		name: "No, no",
		url: "https://media1.giphy.com/media/pn68W2AmK5g82rcgTR/giphy.gif?cid=ecf05e47f6b5cadbb7c1ebc320b6611d98a21ff8bf26d94e&rid=giphy.gif"

	},
    {
		name: "No",
		url: "https://media4.giphy.com/media/VcWnY3R6YWVtC/giphy.gif"

	},
    {
		name: "How about you focus on those overdue TPS reports?",
		url: "https://media4.giphy.com/media/o7lhOIWax9hQs/giphy.gif?cid=ecf05e476ff39e389a6f51d2c1ae17c98d2c2614e6041542&rid=giphy.gif"

	},
    {
		name: "It should work out",
		url: "https://media0.giphy.com/media/TU0YWTjo2e208/giphy.gif?cid=ecf05e476a78cfeb984f5288b171373928a9257abdcd85eb&rid=giphy.gif"

	},
    {
		name: "Definite Maybe",
		url: "https://media0.giphy.com/media/12WxFiMHBUl1RK/giphy.gif"

    },
    {
        name:"Maybe",
        url:"https://media.giphy.com/media/3o6Mbq2xmPVwPKcOaI/giphy.gif"
    },
    {
        name:"Haha, take this Rick Roll peasant",
        url:"https://media.giphy.com/media/kFgzrTt798d2w/giphy.gif"
    },
    {
        name:"I could answer...or, just Rick Roll you",
        url:"https://media.giphy.com/media/kFgzrTt798d2w/giphy.gif"
    },
    {
        name:"Gotta go...it's God!",
        url:"https://media.giphy.com/media/H89Ea18SqUPZGmCerk/giphy.gif"
    },
    {
        name:"What do you think?",
        url:"https://media.giphy.com/media/Ri1bFxaW7VPnPZUn2R/giphy.gif"
    },
    {
        name:"I'm confused. Ask again!",
        url:"https://media.giphy.com/media/toB3AnUDkqE3GENKx0/giphy.gif"
    },
    {
        name:"Signs point to...kinda",
        url:"https://media.giphy.com/media/4JVTF9zR9BicshFAb7/giphy.gif"
    },
    {
        name:"Why are you asking me?",
        url:"https://media.giphy.com/media/QyyPO5zC7KEkl6xPfq/giphy.gif"
    },
    {
        name:"Maybe...but don't put any money on it.",
        url:"https://media.giphy.com/media/THJ2ageyNjvALKm6gH/giphy.gif"
    },
    {
        name:"Buy Why",
        url:"https://media2.giphy.com/media/s239QJIh56sRW/giphy.gif?cid=ecf05e4796nuptbroeugtkykbuck55h49frgairm4lm2am2o&rid=giphy.gif"
    },
    {
        name:"Both is good",
        url:"https://media1.giphy.com/media/3o7aCRloybJlXpNjSU/giphy.gif?cid=ecf05e473698e5d249de7a8b70dc10086c425e4287b27ca6&rid=giphy.gif"
    },
    {
        name:"How about Both",
        url:"https://media4.giphy.com/media/3ohzdMDbNXvnWdeOZi/giphy.gif?cid=ecf05e476479aee20613a0e2dc054850481798a0c38be715&rid=giphy.gif"
    },
    {
        name:"no wink",
        url:"https://media2.giphy.com/media/BYgNcD0N2qHzG/giphy.gif?cid=ecf05e47256115ab0f0149c6b7253d64674e94e16c0b758e&rid=giphy.gif"
    },
    {
        name:"Ask again later",
        url:"https://media4.giphy.com/media/U6N0orhIreHPmj69HH/giphy.gif?cid=ecf05e47ya2ozkis52w104wvpvmo6rkiyb778yeq26nzt5tn&rid=giphy.gif"
    },
    {
        name:"hmmm",
        url:"https://media2.giphy.com/media/5t9wJjyHAOxvnxcPNk/giphy.gif?cid=ecf05e47joxclhzrz6hzyr5e9cbbd1zzog86d1xba8263pad&rid=giphy.gif"
    },
    {
        name:"What???",
        url:"https://media0.giphy.com/media/glmRyiSI3v5E4/giphy.gif?cid=ecf05e47f1d900ab6e5dd184f9de368a3ceec90520a7c179&rid=giphy.gif"
    },
    {
        name:"Doesn't make sense",
        url:"https://media4.giphy.com/media/8xggx6JIPHdWE/giphy.gif?cid=ecf05e4766efc8f38f1b6bb42e0ac7bc23e84a93d680953e&rid=giphy.gif"
    },
    {
        name:"Really?",
        url:"https://media3.giphy.com/media/12ZZwLv5KwXEdi/giphy.gif?cid=ecf05e47ed095ccf1914f0f6a9f746749a557b5957fafc08&rid=giphy.gif"
    },
    {
        name:"I doubt it",
        url:"https://media4.giphy.com/media/R9dJJNPIBsUwM/giphy.gif?cid=ecf05e47a7grsmuj7qmihv81f3h2x5l3gun3lxzox3x8e4ua&rid=giphy.gif"
    },
    {
        name:"You Sure?",
        url:"https://media3.giphy.com/media/5b5OU7aUekfdSAER5I/giphy.gif?cid=ecf05e475981a7ed9294c2e9b0d010407f0a992ea2d8b801&rid=giphy.gif"
    },
    {
        name:"Sure..",
        url:"https://media4.giphy.com/media/7Jmtg4Dp5kziqLdfJl/giphy.gif?cid=ecf05e475c9a4f00cbcbb702b79eecb6c05581cb040868a9&rid=giphy.gif"
    },
    {
        name:"Ok Sure",
        url:"https://media1.giphy.com/media/3o6ZtcWWhcJkJF3WYU/giphy.gif?cid=ecf05e47a3abc57017b3203264db380b40e3c3bcce303258&rid=giphy.gif"
    },
    {
        name:"Thumbs up",
        url:"https://media3.giphy.com/media/GCvktC0KFy9l6/giphy.gif?cid=ecf05e4798leq5z6uqc52zl0airb1wh6ox9g8kkyeb5ff8ao&rid=giphy.gif"
    },
    {
        name:"Thumbs up",
        url:"https://media2.giphy.com/media/mgqefqwSbToPe/giphy.gif?cid=ecf05e4738e24b0ca1e88a09879a198db895c331d8f63cd3&rid=giphy.gif"
    },
    {
        name:"Yes",
        url:"https://media4.giphy.com/media/yFs12GkGa4Cpq/giphy.gif?cid=ecf05e47a84645bb59a136929c3af087684a1792a4d7f25e&rid=giphy.gif"
    },
    {
        name:"fo sho",
        url:"https://media2.giphy.com/media/xT0BKk9aPtLzKJiUi4/giphy.gif?cid=ecf05e47ofxj7gd3yazrx6tnde1ifbcvxhe2ld886cmrn2nv&rid=giphy.gif"
    },
    {
        name:"fo sho",
        url:"https://media2.giphy.com/media/SXenm9qOH8RSHRULO3/giphy.gif?cid=ecf05e4775ce85e2190f78df1d9159788a392a668966d587&rid=giphy.gif"
    },
    {
        name:"fur sure",
        url:"https://media4.giphy.com/media/3o6wrvPt1ZuZ58qbXW/giphy.gif?cid=ecf05e47829a67fb1c4691ab240a1466169916155059dd6a&rid=giphy.gif"
    },
    {
        name:"Totally",
        url:"https://media3.giphy.com/media/3ohhws1z4yUh00sD4c/giphy.gif?cid=ecf05e47392f090d7dd4a7e15b1684ebb9ae5b7130089943&rid=giphy.gif"
    },
    {
        name:"yup",
        url:"https://media2.giphy.com/media/3oeSAD00YsGzUPTmqA/giphy.gif?cid=ecf05e47ddd5ceb883d414b0e8a79f8c8ca2a4994e86de5f&rid=giphy.gif"
    },
    {
        name:"not so good",
        url:"https://media1.giphy.com/media/4mu0tBr7zzNlpFSODF/giphy.gif"
    },
    {
        name:"give it up",
        url:"https://media3.giphy.com/media/xT1R9QvhynQuWxUtJm/giphy.gif?cid=ecf05e47c5206a30c2e6026951171a2fd0339d04a0cb0dd3&rid=giphy.gif"
    },
    {
        name:"ask yourself",
        url:"https://media2.giphy.com/media/2wZWW6JDMnEDHqZMJL/giphy.gif?cid=ecf05e47rn6lj7vl2jpc85wiyd19sedk3maowse0ls3l434t&rid=giphy.gif"
    },
    {
        name:"Try again",
        url:"https://media1.giphy.com/media/3og0IJXQEKwIdIEYpy/giphy.gif"
    },
    {
        name:"Maybe",
        url:"https://media3.giphy.com/media/RlMlAtHx1N0yAJvTz0/giphy.gif?cid=ecf05e47tze13q5i3xj1xrwfgisekz07zumbt8iggsa2h7dd&rid=giphy.gif"
    },
    {
        name:"i don't know",
        url:"https://media1.giphy.com/media/ZanpuDtyrfy181mNuS/giphy.gif?cid=ecf05e4731e033f87bcad6f1e0b4d63f2decf58119ca6f6b&rid=giphy.gif"
    },
    {
        name:"I Don't believe you",
        url:"https://media2.giphy.com/media/EouEzI5bBR8uk/giphy.gif?cid=ecf05e474ab39eb48e47c54856c7053e7bf2b60871d27839&rid=giphy.gif"
    },
    {
        name:"Truth",
        url:"https://media2.giphy.com/media/XxTQLNIGgI7sY/giphy.gif?cid=ecf05e47434e5b902f7b54bb26f1b57c751c5ebd39077b91&rid=giphy.gif"
    },
    {
        name:"Yes",
        url:"https://media0.giphy.com/media/599XNNWGtWigo/giphy.gif?cid=ecf05e4706fc21973d0feb502661860b3c4da3e3e6108f44&rid=giphy.gif"
    },
    {
        name:"Absolutely",
        url:"https://media1.giphy.com/media/3oz8xwNlejeJDQREic/giphy.gif?cid=ecf05e4786cd2c6ae9b251ca66ed8acaddc4daaf0400e6a4&rid=giphy.gif"
    },
    {
        name:"Yes",
        url:"https://media4.giphy.com/media/Qh6NZWsFx1G1O/giphy.gif?cid=ecf05e47a01244e2acf1dbc04f737d6ab96c33978c9bf6c7&rid=giphy.gif"
    },
    {
        name:"Correct",
        url:"https://media0.giphy.com/media/PS7d4tm1Hq6Sk/giphy.gif?cid=ecf05e47fur8vbea0d3l51260ace4fv7j4mbstavihpalyfk&rid=giphy.gif"
    },
    {
        name:"True",
        url:"https://media2.giphy.com/media/ap6wcjRyi8HoA/giphy.gif?cid=ecf05e47qjw9x9i87x17i5yromiz9cdvdn61l01prnyspm2c&rid=giphy.gif"
    },
    {
        name:"True",
        url:"https://media0.giphy.com/media/Q8Dubr4o23mSc/giphy.gif?cid=ecf05e4740f339b120e04b51f2f4f5a0b983f028c0326fac&rid=giphy.gif"
    },
    {
        name:"Not untrue",
        url:"https://media3.giphy.com/media/3o7aD3JtKXHaFN81dC/giphy.gif"
    }
];

// ROUTES
eightBall.get("/", (req, res) => {
    EightBall.find({}, (err, foundAnswers) => {
        res.json(foundAnswers);
    });
});

eightBall.get("/seed", (req, res) => {
    EightBall.insertMany(SeedData, () => {
        res.redirect("/eightball");
    });
});

eightBall.get("/dropcollection", (req, res) => {
    EightBall.collection.drop();
    res.redirect("/eightball");
});

eightBall.get("/reset", (req, res) => {
    EightBall.collection.drop();
    EightBall.insertMany(SeedData, () => {
        res.redirect("/eightball");
    });
});

eightBall.post("/", (req, res) => {
    EightBall.create(req.body, (err, createdAnswer) => {
        EightBall.find({}, (err, foundAnswers) => {
            res.json(foundAnswers);
        });
    });
});

eightBall.put("/:id", (req, res) => {
    EightBall.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedAnswer) => {
            if (err) {
                res.send(err);
            } else {
                EightBall.find({}, (err, foundAnswers) => {
                    res.json(foundAnswers);
                });
            }
        });
});

eightBall.delete("/:id", (req, res) => {
    EightBall.findByIdAndRemove(req.params.id, (err, deletedAnswer) => {
        EightBall.find({}, (err, foundAnswers) => {
            res.json(foundAnswers);
        });
    });
});

module.exports = eightBall;
