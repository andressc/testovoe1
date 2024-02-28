import type { Preview } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { withReduxProvider } from '../src/app/model/withReduxProvider'

const preview: Preview = {
    decorators: [withRouter, withReduxProvider],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
