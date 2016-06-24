var cat = {
	annoyance: 30 // cats are never not annoyed
};
var lapContents = [];
var needToPee = 0;

var catSettle = function(settlingCat) {
	lapContents.push(settlingCat);
  console.log(".\n.\n.\nYou have a cat on your lap!");
};

var theInevitable = function() {
	needToPee++;
  console.log("The bathroom beckons ever louder...");
};

var useRestroom = function() {
	lapContents = [];
	cat.annoyance++;
  needToPee = 0;
  console.log("Ahh, much better.\n\nYour cat glares at you unforgivingly.");
};

while (lapContents.length < 1 && cat.annoyance < 100) {
  catSettle(cat);
  while (lapContents.length !== 0) {
    theInevitable();
    if (needToPee >= 1) {
      useRestroom();
    }
    if (cat.annoyance === 100) {
      console.log("\n\n\nYour cat leaves.");
      break;
    }
  }
}
