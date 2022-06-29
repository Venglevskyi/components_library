import React from 'react';
import { TextInput, Button, Text } from 'react-native-paper';
import styled from 'styled-components/native';

import Section from 'components/Section/Section';

const Feed = () => {
  const [text, setText] = React.useState('');
  return (
    <Section isScrolled>
      <ContentContainer>
        <Text>Some content</Text>
      </ContentContainer>
      <TextInput
        label="Email"
        value={text}
        onChangeText={txt => setText(txt)}
      />
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </Section>
  );
};

const ContentContainer = styled.View`
  height: 500px;
  width: 100%;
  background-color: yellow;
`;

export default Feed;
