import { connect } from 'react-redux'
import Sidebar from './Sidebar'
import { toggleSidebar } from './SidebarActions'

const mapStateToProps = (state, ownProps) => ({
    showSidebar: state.Sidebar.show
})

const mapDispatchToProps = {
    toggleSidebar
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
