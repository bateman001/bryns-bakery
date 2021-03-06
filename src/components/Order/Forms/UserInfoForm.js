import React, {useContext} from 'react'
import OrderContext from '../../../context/OrderContext'
import ServiceFunctions from '../../../services/ServiceFunctions'
import PropTypes from 'prop-types'

export default function UserInfoForm(props){
    const context = useContext(OrderContext)

    const submitOrder = (e) => {
        e.preventDefault()
        const user = context.user
        const order = context.order
        const items = context.items
        ServiceFunctions.submitOrder(order, items, user)
        .then(res => {
            context.clearOrder()
        })
        return props.history.push('/order/confirmation')
    }

    return(        
        <div className='userForm'>
            <form id='user-info' className='user-info-form' onSubmit={(e) => submitOrder(e)}>
                <label htmlFor="first-name">First Name</label>
                <input type='text' id='first-name' onChange={e => context.updateUser(e)} required/>

                <label htmlFor='last-name'>Last Name</label>
                <input type='text' id='last-name' onChange={e => context.updateUser(e)} required/>

                <label htmlFor='email'>Email</label>
                <input type='email' id='email' onChange={e => context.updateUser(e)} required/>

                <label htmlFor='phone-number'>Phone Number</label>
                <input type='tel' id='phone-number' onChange={e => context.updateUser(e)} required/>

                <label htmlFor='pickup-date'>Ready By: </label>
                <input type='date' id='pickup-date' onChange={e => context.updateUser(e)} required/>
            <div className='flex-column'>
                <button type='submit' id='user-info' className='submit'>Submit </button>
            </div>
            </form>
        </div>
)
}

UserInfoForm.propTypes = {
    history: PropTypes.object.isRequired
}
//now() return time and date PG, WHERE date >= '2020-09-10' AND date <= '2020-09-15'
//WHERE date >= now() - '3 days'::INTERVAL


