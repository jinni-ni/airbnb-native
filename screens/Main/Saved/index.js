import SavedContainer from "./SavedContainer";
import { getFavs } from "../../../redux/userSlice";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    getFavs: () => dispatch(getFavs()),
  };
}

export default connect(null, mapDispatchToProps)(SavedContainer);
