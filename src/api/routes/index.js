import productRoute from './product.route.js'
import adminRoute from './admin.route.js'
import orderRoute from './order.route.js'
function route(app){
    app.use('/product',productRoute)
    app.use('/admin',adminRoute)
    app.use('/order',orderRoute)
}

export default route