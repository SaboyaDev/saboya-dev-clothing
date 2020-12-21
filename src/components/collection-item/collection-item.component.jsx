import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, imageUrl, price }) => (
	<div key={id} className='collection-item'>
		<img className='image' src={imageUrl} />
		<div className='collection-footer'>
			<p className='name'>{name}</p>
			<p className='price'>${price}</p>
		</div>
	</div>
);

export default CollectionItem;
