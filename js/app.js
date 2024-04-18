$(window).ready(() => {
  //selecting home score
  let initialHomeScore = 0;

  //selecting away score
  let initialAwayScore = 0;

  // selecting home freethrow button
  $("#ft1").click(() => {
    initialHomeScore++;
    $("#score1").text(initialHomeScore);
  });

  // selecting away freethrow button
  $("#ft2").click(() => {
    initialAwayScore++;
    $("#score2").text(initialAwayScore);
  });

  // selecting home 2 points button
  $("#2p1").click(() => {
    initialHomeScore += 2;
    $("#score1").text(initialHomeScore);
  });

  // selecting away 2 points button
  $("#2p2").click(() => {
    initialAwayScore += 2;
    $("#score2").text(initialAwayScore);
  });

  // selecting home 3 points button
  $("#3p1").click(() => {
    initialHomeScore += 3;
    $("#score1").text(initialHomeScore);
  });

  // selecting away 3 points button
  $("#3p2").click(() => {
    initialAwayScore += 3;
    $("#score2").text(initialAwayScore);
  });

  //selecting the clear for home button
  $("#clear1").click(() => {
    if (initialHomeScore < 1) {
      alert("home team score cannot be negative");
    } else {
      initialHomeScore--;
      $("#score1").text(initialHomeScore);
    }
  });

  //selecting the clear for away button
  $("#clear2").click(() => {
    if (initialAwayScore < 1) {
      alert("Away team csore cannot be negative");
    } else {
      initialAwayScore--;
      $("#score2").text(initialAwayScore);
    }
  });

  //selecting the reset all button
  $("#reset-all").click(() => {
    initialHomeScore = 0;
    initialAwayScore = 0;

    $("#score1").text(initialHomeScore);
    $("#score2").text(initialAwayScore);
  });
});
