import React from "react"
import PropTypes from "prop-types"
import styles from "components/FeedPhoto/styles.module.scss"

const FeedPhoto = (props, context) => {
  console.log(props)
  return <div className ={styleMedia.feedPhoto}>hello!</div>
}

FeedPhoto.propTypes = {
  creator: PropTypes.shape({
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired,
  }),
  location: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired,
      }).isRequired,
      message: PropTypes.string.isRequired
    })
  )
}

export default FeedPhoto