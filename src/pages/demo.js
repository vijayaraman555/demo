/**
 *
 * @author vijayaraman
 * @since 22/01/2020.
 *
 */
'use strict';

import React from 'react';
const data = [{id:1,name:'vj'},{id:2,name:'aj'},{id:3,name:'viki'},{id:4,name:'karthi'}]

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return (
    	<div className="demo">
    		<div className="card-group">
    		{ data.map((d)=>(
			  <div className="card mx-2 mb-3">
			    <div><img className="card-img-top" src="profile.jpg" alt="Card image cap"/></div>
			    <div className="card-body">
			      <h5 className="card-title">{d.name}</h5>
			      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
			      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
			    </div>
			  </div>
			
			))}
			</div>
    	</div>
    	);
  }
}

export default Demo;