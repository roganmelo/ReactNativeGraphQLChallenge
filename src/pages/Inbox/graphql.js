import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
  query {
    allMessages(
      orderBy: createdAt_ASC
      filter: { to: "Rogan" }
    ) {
      id
      from
      to
      subject
      createdAt
      text
    }
  }
`;

const subscription = gql`
  subscription onMessageAdded($to: String!) {
    Message(filter: {
      mutation_in: [CREATED]
      node: { to: $to }
    }) {
      node {
        id
        from
        to
        subject
        createdAt
        text
      }
    }
  }
`;

export default graphql(query, {
  name: 'inbox',
  props: props => ({
    ...props,
    subscribeToMore: () => props.inbox.subscribeToMore({
      document: subscription,
      variables: { to: 'Rogan' },
      updateQuery: (prev, { subscriptionData: { data } }) => ({
        ...prev,
        allMessages: [...prev.allMessages, data.Message.node]
      })
    })
  })
});
