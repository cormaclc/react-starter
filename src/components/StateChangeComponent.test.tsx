import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {StateChangeComponent} from './StateChangeComponent';

const mountComponent = () => {
  render (
    <StateChangeComponent />
  );
};

describe('StateChangeComponent tests', () => {
  it('renders a button', () => {
    mountComponent();

    expect(screen.getByRole('button', { name: 'Click me to show a message' })).toBeInTheDocument();
  });

  describe('on button click', () => {
    it('renders a message', async () => {
      const user = userEvent.setup();
      mountComponent();

      // message not present
      expect(screen.queryByText('This is showing because you clicked the button!')).not.toBeInTheDocument();

      // click the button
      await user.click(screen.getByRole('button', { name: 'Click me to show a message' }));

      // message is present
      expect(screen.getByText('This is showing because you clicked the button!')).toBeInTheDocument();
    });

    it('changes button text', async () => {
      const user = userEvent.setup();
      mountComponent();

      // click the button
      await user.click(screen.getByRole('button', { name: 'Click me to show a message' }));

      // button by old text is no longer present
      expect(screen.queryByRole('button', { name: 'Click me to show a message' })).not.toBeInTheDocument();

      // button by new text is present
      expect(screen.getByRole('button', { name: 'Click me to hide a message' })).toBeInTheDocument();
    });

    it('toggles message on second click', async () => {
      const user = userEvent.setup();
      mountComponent();

      // message not present
      expect(screen.queryByText('This is showing because you clicked the button!')).not.toBeInTheDocument();

      // click the button
      await user.click(screen.getByRole('button', { name: 'Click me to show a message' }));

      // message is present
      expect(screen.getByText('This is showing because you clicked the button!')).toBeInTheDocument();

      // click the updated button
      await user.click(screen.getByRole('button', { name: 'Click me to hide a message' }));

      // message not present
      expect(screen.queryByText('This is showing because you clicked the button!')).not.toBeInTheDocument();
    });
  });
});
