import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getData } from "../actions/index";
import Title from "./title";
var moment = require("moment");

export class Books extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div>
        <Title />
        <table>
          <thead>
            <tr>
              <th> Book Name </th>
              <th> Released Date </th>
              <th> Number of Pages </th>
              <th> Details </th>
            </tr>
          </thead>
          <tbody>
            {this.props.books.map(
              oneBook => (
                this.props.books.sort(),
                (
                  <tr key={oneBook.isbn}>
                    <td>{oneBook.name}</td>
                    <td> {moment(oneBook.released).format("DD/MM/YYYY")}</td>
                    <td>{oneBook.numberOfPages}</td>
                    <td>
                      <Link
                        to={`/details/${oneBook.isbn}`}
                        activeClassName="active"
                      >
                        {" "}
                        Details{" "}
                      </Link>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    books: state.books
  };
}
export default connect(
  mapStateToProps,
  { getData }
)(Books);
