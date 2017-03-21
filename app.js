import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from './actions'

let styles

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText,
    mainContent
  } = styles

  return (
    <View style={container}>
      { !props.appData.data.length ? (
        <View>
          <Text style={text}>Example Data</Text>
          <TouchableHighlight style={button} onPress={() => props.fetchData()}>
            <Text style={buttonText}>Load Data</Text>
          </TouchableHighlight>
        </View>
        ) : (
          <View>
            <Text style={text}>Example Data</Text>
          </View>
        )
      }
      <View style={mainContent}>
        {
          props.appData.isFetching && <Text>Loading</Text>
        }
        {
          props.appData.data.length ? (
            props.appData.data.map((person, i) => {
              return <View key={i} >
                <Text>Name: {person.name}</Text>
                <Text>Age: {person.age}</Text>
                <Text>Bio: {person.bio}</Text>
              </View>
            })
          ) : null
        }
      </View>
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10
  }
})

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
