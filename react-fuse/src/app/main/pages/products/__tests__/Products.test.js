import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';

import history from '@history';
import Products from '../Products';

const mockStore = configureStore();
const store = mockStore({});

describe('Products', () => {
	it('should render correctly', () => {
		const tree = renderer
			.create(
				<Provider store={store}>
					<Router history={history}>
						<Products />
					</Router>
				</Provider>
			)
			.toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});
