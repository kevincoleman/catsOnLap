var cat         = { annoyance: 30 }; // cats are never not annoyed
var lapContents = [];
var needToPee   = 0;

var catSettle = (cat) => lapContents.push(cat);

var theInevitable = () => needToPee++;

var useRestroom = () => {
	lapContents = [];
	cat.annoyance++;
  needToPee = 0;
};

while (lapContents.length < 1 && cat.annoyance < 100) {
  catSettle(cat);
  while (lapContents.length > 0) {
    theInevitable();
    if (needToPee >= 1) { useRestroom(); }
    if (cat.annoyance >= 100) { break; }
  }
}
