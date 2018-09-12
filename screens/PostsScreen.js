import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { getPosts } from '../actions'

class Posts extends Component {
  static navigationOptions = {
    title: 'Posts'
  }

  componentDidMount() {
    this.props.dispatchGetPosts()
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {}

  _keyExtractor = (item, index) => String(item.id)

  _renderItem = ({ item }) => {
    return (
      <View style={{margin: 16}}>
        <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
        <Text>{item.body}</Text>
      </View>
    )
  }

  render() {
    const error = this.props.error

    if (this.props.loading) {
      return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: 40}}>
          <ActivityIndicator size='large'/>
        </View>
      )
    } else {
      if (error) {
        return <Text>{error}</Text>
      } else {
        return (
          <View style={styles.container}>
            <FlatList
              contentContainerStyle={{flexGrow: 1}}
              data={this.props.posts}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              ListEmptyComponent={<Text>No posts yet!</Text>}
              />
          </View>
        )
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9E9EF',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    flexDirection: 'row'
  }
})

const mapStateToProps = state => {
  const { posts, loading, error } = state.posts

  return { posts, loading, error }
}

const mapDispatchToProps = {
  dispatchGetPosts: getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
