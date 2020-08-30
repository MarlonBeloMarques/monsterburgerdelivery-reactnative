import React, { useRef, useState } from 'react';
import { Block, Photo, Text, Input, Button } from '../elements';

import background from '../assets/images/background2.png';
import { theme } from '../constants';

export default function ForgetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

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
            Forgot your password,
          </Text>
          <Text secondary>shall we recover it?</Text>
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
            label="Password"
            defaultValue={password}
            onChangeText={setPassword}
            reference={passwordRef}
            next
            submitEditing={() => confirmPasswordRef.current.focus()}
          />
          <Input
            secure
            label="Confirm Password"
            defaultValue={confirmPassword}
            onChangeText={setConfirmPassword}
            reference={confirmPasswordRef}
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
