import React, { useState } from 'react';
import { Block, Text, Photo, Input, Button } from '../elements';
import { theme } from '../constants';

export default function UserProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  return (
    <Block color="white">
      <Block padding={[theme.sizes.padding, theme.sizes.padding]}>
        <Block center row flex={false}>
          <Text bold secondary h3>
            Profile
          </Text>
          <Block center bottom row>
            <Photo
              image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              avatar
            />
          </Block>
        </Block>
        <Block middle>
          <Input label="Name" defaultValue={name} onChangeText={setName} />
          <Input label="Email" defaultValue={email} onChangeText={setEmail} />
          <Input
            label="Address"
            defaultValue={address}
            onChangeText={setAddress}
          />
        </Block>
        <Button shadow color="primary">
          <Text bold white center>
            Update
          </Text>
        </Button>
      </Block>
    </Block>
  );
}
