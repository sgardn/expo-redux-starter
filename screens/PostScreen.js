import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { getComments, clearPost } from '../actions'

class Post extends Component {
  static navigationOptions = {
    title: 'Post',
  }

  componentDidMount() {
    this.props.dispatchGetComments(this.props.post.id)
  }

  componentWillUnmount() {
    this.props.dispatchClearPost()
  }

  _keyExtractor = (item, index) => String(item.id)

  _renderItem = ({ item }) => {
    const postLoading = this.props.postLoading

    return (
      <View style={styles.card}>
        <Text style={{fontWeight: 'bold'}}>{item.email} -</Text>
        <Text>{item.body}</Text>
      </View>
    )
  }

  _renderPost() {
    return (
      <View style={styles.post}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>{this.props.post.title}</Text>
        <Text style={{fontSize: 16}}>{this.props.post.body}</Text>
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
              ListHeaderComponent={this._renderPost.bind(this)}
              data={this.props.comments}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              ListEmptyComponent={<Text>No comments yet!</Text>}
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
    // alignItems: 'center',
    // justifyContent: 'center',
    flexGrow: 1,
    flexDirection: 'column'
  },
  post: {
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
  },
  card: {
    backgroundColor: '#fff',
    padding: 8,
    marginHorizontal: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
  }
})

const mapStateToProps = state => {
  const { comments, loading, error } = state.comments
  const { post } = state.posts

  return { post, comments, loading, error }
}

const mapDispatchToProps = {
  dispatchGetComments: (postId) => getComments(postId),
  dispatchClearPost: clearPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
