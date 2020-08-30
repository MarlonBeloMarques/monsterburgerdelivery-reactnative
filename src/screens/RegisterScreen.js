import React, { useRef, useState } from 'react';
import { Block, Photo, Text, Input, Button } from '../elements';

import background from '../assets/images/background2.png';
import { theme } from '../constants';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef();
  const emaildRef = useRef();

  function handleSubmit() {
    navigation.navigate('Login');
  }

  return (
    <Block color="white">
      <Photo size={375} size2={295} image={background} />
      <Block
        padding={[
          theme.sizes.base,
          theme.sizes.base * 2,
          0,
          theme.sizes.base * 2,
        ]}
        flex={false}
      >
        <Block flex={false} margin={[theme.sizes.base, 0]}>
          <Text h3 bold secondary>
            Don't haveon account,
          </Text>
          <Text secondary>shall we register?</Text>
        </Block>
        <Block flex={false} margin={[0, 0, theme.sizes.base, 0]}>
          <Input
            label="Name"
            defaultValue={name}
            onChangeText={setName}
            next
            submitEditing={() => emaildRef.current.focus()}
          />
          <Input
            label="Email"
            defaultValue={email}
            onChangeText={setEmail}
            reference={emaildRef}
            next
            submitEditing={() => passwordRef.current.focus()}
          />
          <Input
            secure
            label="Password"
            defaultValue={password}
            onChangeText={setPassword}
            reference={passwordRef}
            done
            submitEditing={handleSubmit}
          />
        </Block>
        <Button shadow onPress={handleSubmit} color="primary">
          <Text bold white center>
            Register
          </Text>
        </Button>
      </Block>
    </Block>
  );
}
