import {connect} from 'react-redux'
import CardsScreen from '../components/CardsScreen';
import actions from '../cards.actions';

const mapStateToProps = state => ({
    cards: state.cards.cards,
    status: state.cards.status
});

const mapDispatchToProps = dispatch => ({
    getCardsRequest: () => dispatch(actions.getCardsRequest())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardsScreen);