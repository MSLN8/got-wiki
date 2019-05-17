import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getData, getCharacters } from "../actions/index";
import Title from "./title";
import _ from "lodash";

function mapStateToProps(state) {
  return {
    books: state.books,
    characters: state.characters
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getStoreData: () => dispatch(getData()),
    getCharacters: () => dispatch(getCharacters())
  };
};

class Details extends React.Component {
  componentDidMount() {
    this.props.getCharacters();
  }
  //   constructor(props) {
  //     super(props);
  //     this.findCharacter = this.findCharacter.bind(this);
  //   }

  //   function findCharacter(url) {
  //    var query = url ? url.split('?')[1] : null
  //    var obj = {};
  //    if (query){ }
  //     return ;
  //   };

  render() {
    let bookISBN = this.props.match.params.isbn;
    var thisBook = _.find(this.props.books, function(book) {
      return book.isbn === bookISBN;
    });

    var oneChar = "https://anapioficeandfire.com/api/characters/175";
    var idOneChar = oneChar.substring(oneChar.lastIndexOf("/") + 1);
    console.log("!!!! fonction", getCharacters(idOneChar));

    // var characters = this.props.characters;
    // console.log("les persos", characters);
    return (
      <div>
        <Title />
        <h2> Details </h2>
        <p> {thisBook.name} </p>
        <p>{thisBook.isbn}</p>
        <p>{thisBook.authors}</p>
        <p>{thisBook.publisher}</p>
        <p>{thisBook.released}</p>
        <h2> Characters </h2>
        <table>
          <thead>
            <tr>
              <th> Chars Name </th>
              <th> Details </th>
            </tr>
          </thead>
          {/* <tbody>
            {thisBook.characters.map(oneChar => {
              var idOneChar = oneChar.substring(oneChar.lastIndexOf("/") + 1);
              //   console.log(this.props.getCharacters(idOneChar));
              return (
                <tr key={idOneChar}>
                  <td>{oneChar}</td>
                  <td>
                    <Link to={`/character/${idOneChar}`}> Details </Link>
                  </td>
                </tr>
              );
            })}
            }
          </tbody> */}
        </table>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
