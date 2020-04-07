import React from 'react';

const Card = ({name,email,id}) =>{
	return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow'>
    	<img alt='robots' src={`https://robohash.org/${id}`}style={{height:'200px',width:'200px'}} />
    	<div>
    	<h2>{name}</h2>
    	<p>{email}</p>
    	</div>
    </div>
    );
}
export default Card;
