import React from 'react'
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap'
import { Link } from 'react-router-dom'

const RenderMenuItem = ({ dish }) => {
    return (
        <Card tag='li'>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width='100%' src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle heading >{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )

}
const Menu = ({ dishes }) => {
    const menu = dishes.map(dish => {
        return (
            <div className='col-12 col-md-5 m-1' key={dish.id}>
                <RenderMenuItem dish={dish} />
            </div>
        )
    })
    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center'>
                    {menu}
                </div>
            </div>
        </div>
    )
}

export default Menu
