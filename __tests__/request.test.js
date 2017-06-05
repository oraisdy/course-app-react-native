global.fetch = require('isomorphic-fetch');

import request from '../src/api/request'
import api from '../src/api/api'

it('renders correctly', () => {
    request.login(api.auth, {
        username: "nanguangtailang",
        password: "123"
    });
    request.get(api.groups);

    // request.get(api.groups);

    // request.get(api.analysis, [1, 1]);
});