import Kemu from '../kemu/kemu';

class K4 extends Kemu {

    componentDidMount() {
        this.setState({ name: 'k4' });
        this.requestK4();
    }

}
export default K4;