import Kemu from '../kemu/kemu';
import React from 'react';

class K1 extends Kemu {

    componentDidMount() {
        // super.componentDidMount();
        this.setState({ name: 'k1' });

        this.requestK1();
    }
}

export default K1;