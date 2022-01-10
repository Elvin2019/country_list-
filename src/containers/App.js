import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Selection from '../components/Selection';
import './App.css';
import { UniversalTutorialRepository, API_UNIVERSAL_AUTH_TOKEN } from '../repositories/univesal-tutorial-repo';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, requestRobots } from '../store-redux/actions';

const DEFAULT_IMAGE_SIZE = '32x24';


const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		countries: state.requestRobots.robots,
		isPending: state.requestRobots.isPending
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}
class App extends Component {
	constructor() {
		super();
		this.state = {
			imageSize: DEFAULT_IMAGE_SIZE
		};
	}

	componentDidMount() {
		UniversalTutorialRepository.getAccessToken()
			.then(response => {
				sessionStorage.setItem(API_UNIVERSAL_AUTH_TOKEN, response.auth_token);
			})
			.then(() => this.props.onRequestRobots());
	}
	onSizeChange = event => {
		this.setState({ imageSize: event.target.value });
	};
	render() {
    	const {searchField, onSearchChange, countries, isPending} = this.props

		const filteredCountries = countries.filter(country => {
			return country.country_name.toLowerCase().includes(searchField.toLowerCase());
		});
		return isPending ? (
			<h1>Loading</h1>
		) : (
			<div className="tc">
				<div className="sticky">
					<h1 className="f1">Countries</h1>
					<div className="wrapper ">
						<Selection
							list={[
								{ value: '16x12', title: '16x12' },
								{ value: '32x24', title: '32x24' },
								{ value: '64x48', title: '64x48' },
								{ value: '128x96', title: '128x96' },
								{ value: '256x192', title: '256x192' }
							]}
							defaultValue={DEFAULT_IMAGE_SIZE}
							onChange={this.onSizeChange}
							style={{
								width: '150px',
								textAlign: 'center',
								justifyContent: 'center'
							}}
							className=" b--green bg-lightest-blue"
						/>
						<SearchBox searchChange={onSearchChange} />
					</div>
				</div>

          <div className="content">
					<Scroll>
							<CardList countries={filteredCountries} imageSize={this.state.imageSize} />
              </Scroll>
              
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
