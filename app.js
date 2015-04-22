var quoteEndpoint = "http://www.zen-quote.com" // Don't forget www. :)

function renderQuote(data){
  $('.quote').html(data.quote);
}

function getQuote() {
  $.get(quoteEndpoint, renderQuote);
}

function loadApp() {
  $newQuoteButton = $('button.new-quote');
  $newQuoteButton.click(getQuote);
  getQuote();
}

$(loadApp);
