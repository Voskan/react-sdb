import React from 'react';
import { ListGroup } from 'react-bootstrap';

import './ListItem.css';

const ListItem = () => {
  return (
    <ListGroup>
      <ListGroup.Item variant="dark" action active>
        Person Name 1
      </ListGroup.Item>
      <ListGroup.Item variant="dark" action>
        Person Name 2
      </ListGroup.Item>
      <ListGroup.Item variant="dark" action>
        Person Name 3
      </ListGroup.Item>
      <ListGroup.Item variant="dark" action>
        Person Name 4
      </ListGroup.Item>
      <ListGroup.Item variant="dark" action>
        Person Name 5
      </ListGroup.Item>
      <ListGroup.Item variant="dark" action>
        Person Name 6
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ListItem;
