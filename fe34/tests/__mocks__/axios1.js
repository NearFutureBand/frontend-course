const user = {
   "_id": "5e91ac983ed21bfcc3e35c68",
    "index": 2,
    "guid": "b4820655-1036-46e7-994c-929291a2ff6b",
    "isActive": true,
    "balance": "$2,312.43",
    "picture": "https://avatars.dicebear.com/api/human/c.svg",
    "age": 39,
    "eyeColor": "green",
    "name": {
      "first": "Barr",
      "last": "Copeland"
    },
    "company": "NIPAZ",
    "email": "barr.copeland@nipaz.me",
    "phone": "+18465683597",
    "address": "793 Anna Court, Wanamie, Virginia, 1398",
    "about": "Est quis nulla nostrud et. Laboris nulla non adipisicing occaecat dolore. Aute consequat cillum mollit ea cupidatat amet magna magna adipisicing est sint eiusmod fugiat non. Commodo ad fugiat culpa mollit Lorem ea Lorem magna id laborum deserunt adipisicing et. Ut culpa dolore est est nostrud magna id nisi ad elit ullamco. Nisi et sunt sint magna aute aliqua adipisicing fugiat. Quis elit veniam ad id id.",
    "registered": "Wednesday, November 20, 2019 11:45 PM",
    "latitude": "69.268872",
    "longitude": "152.537354",
    "tags": [
      "culpa",
      "est",
      "sunt",
      "sint",
      "proident"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [],
    "greeting": "Hello, Barr! You have 10 unread messages.",
    "favoriteFruit": "strawberry",
    "passwordHash": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
};

axios = {
  post: function(url, data) {
    return new Promise((resolve) => {
      process.nextTick(() => {
        resolve(user);
      });
    });
  }
}

module.exports = axios;