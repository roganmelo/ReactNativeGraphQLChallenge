import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const mutation = gql`
  mutation(
    $to: String!
    $from: String!
    $subject: String!
    $text: String!
  ) {
    createMessage(
      to: $to
      from: $from
      subject: $subject
      text: $text
    ) {
      id
      from
      subject
      createdAt
    }
  }
`;

export default graphql(mutation, {
  props: ({ mutate }) => ({
    addMessage: ({ to, from, subject, text }) => mutate({
      variables: { to, from, subject, text },
      update: () => alert('Enviado!')
    })
  })
});
