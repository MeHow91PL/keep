import { connect } from 'react-redux'
import NotatkaInput from './NotatkaInput'
import { dodajNotatke, zmienTekst, rozwinNotke, zwinNotke } from './NotatkaInputActions'

const mapStateToProps = (state, ownProps) => ({
    nowaNotka: state.NotatkaInput
})

const mapDispatchToProps = {
    dodajNotatke,
    zmienTekst,
    rozwinNotke, zwinNotke
}

export default connect(mapStateToProps, mapDispatchToProps)(NotatkaInput)
