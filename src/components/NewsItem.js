import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {tittle,description,imageUrl,newsUrl}=this.props;
    return (
      <div className='my-3'>
        <div className="card card-container" style={{width: '18rem'}} onTouchMoveCapture>
  <img className="card-img-top" src={imageUrl} alt="Card image cap" style={{height:'12rem'}}/>
  <div className="card-body">
    <h5 className="card-title">{tittle}...</h5>
    <p className="card-text"  >{description}...</p >
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more...</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
