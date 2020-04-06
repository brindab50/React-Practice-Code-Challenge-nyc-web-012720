import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {

        props.sushi.map((sushiObject) => <Sushi sushi={sushiObject} key={sushiObject.id} eat={props.eat} taken={props.eaten.includes(sushi)}/>)
        }
        <MoreButton more={props.more} />
      </div>
    </Fragment>
  )
}

export default SushiContainer