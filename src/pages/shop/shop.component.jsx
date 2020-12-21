import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './shop.styles.scss';

import SHOP_DATA from './shop.data';

export default class ShopPage extends Component {
	constructor() {
		super();

		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div>
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}
