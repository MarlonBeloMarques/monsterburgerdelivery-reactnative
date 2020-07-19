import React, { useState, useRef } from 'react';
import { Block, Text, Input, Button, Photo } from '../elements';
import { theme } from '../constants';

import background from '../assets/images/background.png';
import { Title } from '../components';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef();

  function handleSubmit() {
    navigation.navigate('welcome');
  }

  return (
    // eslint-disable-next-line no-use-before-define
    <Block color="white" middle>
      <Block row flex={false}>
        <Block flex={0.9}>
          <Photo size={331} size2={337} image={background} />
        </Block>
        <Title />
      </Block>
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
            Welcome back,
          </Text>
          <Text secondary>came to buy a monster burger?</Text>
        </Block>
        <Block flex={false} margin={[0, 0, theme.sizes.base, 0]}>
          <Input
            label="Email"
            defaultValue={email}
            onChangeText={setEmail}
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
          <Block padding={[0, 5, 0, 0]} bottom row flex={false}>
            <Button style>
              <Text>Forget Password?</Text>
            </Button>
          </Block>
        </Block>
        <Button shadow onPress={handleSubmit} color="primary">
          <Text bold white center>
            Sign In
          </Text>
        </Button>
        <Block margin={[theme.sizes.base, 0]} center flex={false}>
          <Block row flex={false}>
            <Text>Don't have on account?</Text>
            <Text bold>Register</Text>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}
