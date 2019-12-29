import Loadable from 'react-loadable';
import Spinner from './Spinner';

export default function CustomLoadable(opts) {
    return Loadable(
        Object.assign(
            {
                loading: Spinner,
                delay: 200,
                timeout: 10000
            },
            opts
        )
    );
}

