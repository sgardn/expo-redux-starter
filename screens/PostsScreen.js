import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import { getPosts, getPost } from '../actions'

class Posts extends Component {
  static navigationOptions = {
    title: 'Posts'
  }

  componentDidMount() {
    this.props.dispatchGetPosts()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.post) {
      this.props.navigation.navigate('Post')
    }
  }

  _keyExtractor = (item, index) => String(item.id)

  _renderItem = ({ item }) => {
    const postLoading = this.props.postLoading

    return (
      <TouchableWithoutFeedback onPress={() => !postLoading && this.props.dispatchGetPost(item.id)}>
        <View style={styles.card}>
          <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      </TouchableWithoutFeedback>
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
    flexDirection: 'column'
  },
  card: {
    backgroundColor: '#fff',
    padding: 8,
    margin: 12,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  }
})

const mapStateToProps = state => {
  const { posts, loading, error, post, postLoading } = state.posts

  return { posts, loading, error, post, postLoading }
}

const mapDispatchToProps = {
  dispatchGetPosts: getPosts,
  dispatchGetPost: (id) => getPost(id)
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
