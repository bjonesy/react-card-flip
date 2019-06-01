import React from "react";
import Card from "./shared/components/Card/Card";

class CardContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  async fetchData() {
    return fetch("https://swapi.co/api/people/");
  }

  async componentWillMount() {
    try {
      const response = await this.fetchData();
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (!this.state.data.results) return null;
    return (
      <div className="container">
        <div className="columns is-desktop is-multiline">
          {this.state.data.results.map((people, index) => (
            <Card
              key={index}
              name={people.name}
              height={people.height}
              gender={people.gender}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CardContainer;
