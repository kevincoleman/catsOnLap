let cat = { annoyance: 30 }; // cats are born annoyed
let lapContents = [];
let needToPee = 0;

const catSettle = cat => lapContents.push(cat);
const theInevitable = () => needToPee++;
const useRestroom = () => {
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
