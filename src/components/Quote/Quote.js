import React, { Component } from "react";
import "./Quote.css";
import Quotes from "../../quotes";
import Colors from "../../colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Quote extends Component {
  state = {
    text: Quotes[Math.floor(Math.random() * Quotes.length)].text,
    author: Quotes[Math.floor(Math.random() * Quotes.length)].author,
    color: Colors[Math.floor(Math.random() * Colors.length)]
  };

  componentWillMount() {
    document.body.style.backgroundColor = this.state.color;
  }

  componentDidUpdate() {
    document.body.style.backgroundColor = this.state.color;
  }

  fetchQuoteAndColor = () => {
    let newColor = Colors[Math.floor(Math.random() * Colors.length)];
    let newQuote = { ...Quotes[Math.floor(Math.random() * Quotes.length)] };
    while (this.state.text === newQuote.text && this.state.author === newQuote.author)
      newQuote = Quotes[Math.floor(Math.random() * Quotes.length)];

    while (this.state.color === newColor)
      newColor = Colors[Math.floor(Math.random() * Colors.length)];

    this.setState({
      text: newQuote.text,
      author: newQuote.author,
      color: newColor
    });
  };

  render() {
    return (
      <div id="quote-box">
        <p style={{ color: this.state.color }} id="text">
          {this.state.text}
        </p>
        <p id="author" style={{ color: this.state.color }}>
          - {this.state.author}
        </p>
        <div className="buttons">
          <a
            id="tweet-quote"
            className="twitter-share-button"
            href={`https://twitter.com/intent/tweet?text=${
              this.state.text
            }%20-${this.state.author}&hashtags=quotes`}
          >
            <button
              style={{ backgroundColor: this.state.color }}
              className="buttons__social"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </button>
          </a>
          <a
            id="facebook-quote"
            href="https://www.facebook.com/sharer/sharer.php?u=https://nacen.github.io/Random-Quote-Machine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{ backgroundColor: this.state.color }}
              className="buttons__social"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </button>
          </a>
          <button
            style={{ backgroundColor: this.state.color }}
            onClick={this.fetchQuoteAndColor}
            id="new-quote"
          >
            New quote
          </button>
        </div>
      </div>
    );
  }
}

export default Quote;
