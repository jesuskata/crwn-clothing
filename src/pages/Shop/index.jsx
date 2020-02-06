// Dependencies
import React from 'react';

// Components
import { CollectionPreview } from '../../components/CollectionPreview';

// Data
import { SHOP_DATA } from './shopData';

export class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA // eslint-disable-line
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {
          collections.map(({
            id, title, routeName, items
          }) => (
            <CollectionPreview key={id} title={title} routeName={routeName} items={items} />
          ))
        }
      </div>
    );
  }
}
