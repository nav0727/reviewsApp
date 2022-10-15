/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onRightArrow = () => {
    const {count} = this.state
    const {reviewsList} = this.props
    if (count < reviewsList.length - 1) {
      this.setState(prev => ({count: prev.count + 1}))
    }
  }

  renderReviewsList = reviewsList => {
    const {imgUrl, username, companyName, description} = reviewsList

    return (
      <div className="container">
        <h1 className="head">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="para">{username}</p>
        <p>{companyName}</p>
        <p className="desc">{description}</p>
      </div>
    )
  }

  onLeftArrow = () => {
    const {count} = this.state
    const {reviewsList} = this.props
    if (count > 0) {
      this.setState(prev => ({count: prev.count - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {count} = this.state
    const reviewsListDetails = reviewsList[count]
    return (
      <div className="bg">
        <div className="bg2">
          <button type="button" onClick={this.onLeftArrow} testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          {this.renderReviewsList(reviewsListDetails)}
          <button type="button" onClick={this.onRightArrow} testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
