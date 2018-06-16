import { connect } from 'react-redux'
import NotatkaInput from './NotatkaInput'
import { test } from './NotatkaActions'

const mapStateToProps = (state, ownProps) => ({
    test:state.NotatkaInput
})

const mapDispatchToProps = {
    click: test
}

export default connect(mapStateToProps, mapDispatchToProps)(NotatkaInput)
