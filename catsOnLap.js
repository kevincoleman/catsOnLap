var cat         = { annoyance: 30 }; // cats are never not annoyed
var lapContents = [];
var needToPee   = 0;

var catSettle = (settlingCat) => {
	lapContents.push(settlingCat);
  console.log("You have a cat on your lap!");
  return;
};

var theInevitable = () => {
	needToPee++;
  console.log("The bathroom beckons ever louder...");
  return;
};

var useRestroom = () => {
	lapContents = [];
	cat.annoyance++;
  needToPee = 0;
  console.log("Ahh, much better. Your cat glares at you unforgivingly.");
  return;
};

while (lapContents.length < 1 && cat.annoyance < 100) {
  catSettle(cat);
  while (lapContents.length > 0) {
    theInevitable();
    if (needToPee >= 1) {
      useRestroom();
    }
    if (cat.annoyance >= 100) {
      console.log("Your cat leaves.");
      break;
    }
  }
}
