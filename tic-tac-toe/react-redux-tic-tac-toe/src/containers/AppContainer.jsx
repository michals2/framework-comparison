import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../model/actions/";
import App from "../components/App";

const mapStateToProps = state => ({ state: { ...state.ticTacToe } });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
