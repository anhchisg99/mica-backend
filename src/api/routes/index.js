import productRoute from './product.route.js'
import adminRoute from './admin.route.js'
import orderRoute from './order.route.js'
import contactRoute from './contact.route.js'
function route(app){
    app.use('/product',productRoute)
    app.use('/admin',adminRoute)
    app.use('/order',orderRoute)
    app.use('/contact',contactRoute)
}

export default route