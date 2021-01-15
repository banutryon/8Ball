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