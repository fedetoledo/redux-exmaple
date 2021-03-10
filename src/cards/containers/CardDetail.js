import {connect} from 'react-redux';
import actions from '../cards.actions';
import CardDetailScreen from '../components/CardDetailScreen';

const mapStateToProps = state => ({
    card: state.cards.currentCard
});

const mapDispatchToProps = dispatch => ({
    getCard: cardId => dispatch(actions.getCurrentCard(cardId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardDetailScreen);
