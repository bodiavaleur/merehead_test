import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { loadData } from './redux/actionCreators';
import {
  UsersList,
  User,
  UserName,
  UserDescription,
  UsePaginationStyle,
  UseGlobalStyle
} from './ui';
import ReactPaginate from 'react-paginate';
import { Trail } from 'react-spring/renderprops';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url:
        'https://cors-anywhere.herokuapp.com/http://dev.frevend.com/json/users.json'
    }).then(response => {
      let users = response.data.users;
      // Segment an array to 5 pages
      users = users.map(() => users.splice(0, 5));
      // Filter empty fields
      users = users.filter(x => !!x);
      this.props.dispatch(loadData(users));
    });
  }

  handlePageChange(data) {
    console.log('data.selected :', data.selected);
    return this.setState({ currentPage: data.selected });
  }

  render() {
    const page = this.state.currentPage;
    const data = this.props.data;
    return (
      <React.Fragment>
        <UseGlobalStyle />
        <UsePaginationStyle />

        <UsersList>
          {!!data.length && (
            <Trail
              items={data[page]}
              keys={user => user.id}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}>
              {user => props => (
                <User style={props}>
                  <UserName>{`${user.name} ${user.surname}`}</UserName>
                  <UserDescription>{user.desc}</UserDescription>
                </User>
              )}
            </Trail>
          )}
        </UsersList>
        <ReactPaginate
          previousLabel={<i className="fas fa-angle-left" />}
          nextLabel={<i className="fas fa-angle-right" />}
          pageCount={Math.round(this.props.data.length)}
          initialPage={0}
          onPageChange={this.handlePageChange}
          containerClassName="pagination"
          pageClassName="page"
          activeClassName="active"
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps)(App);
