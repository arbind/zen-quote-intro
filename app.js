function renderQuote(quote){
  $('.quote').html(quote);
}

function getQuote() {
  var quote = new Date();
  renderQuote(quote);
}

function loadApp() {
  $newQuoteButton = $('button.new-quote');
  $newQuoteButton.click(getQuote);
}

$(loadApp);
