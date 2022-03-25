import { Injectable, NotFoundException, Param } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { CreateOrderDetail } from "src/order-detail/dto";
import { OrderDetail } from "src/order-detail/order-detail.model";
import { CreateShipping } from "src/shipping-info/dto";
import { Shipping } from "src/shipping-info/shipping-info.model";
import { CreateOrder, FormOrder } from "./dto";
import { Order } from "./order.model";



@Injectable()
export class OrdersRepository {

    constructor(
        @InjectModel(Order.name) private orderModel: Model<Order>,
        @InjectModel(OrderDetail.name) private orderDetailModel: Model<OrderDetail>,
        @InjectModel(Shipping.name) private shippingModel: Model<Shipping>) { }


    /**Queries responsible on the creqtion */
    async create(formOrder: FormOrder) {
        let dataOrderDetail, dataShipping;
        //saving nested data
        dataOrderDetail = await this.createOrderDetail(formOrder);
        dataShipping = await this.createShipping(formOrder);

        return await this.createOrder(formOrder, dataOrderDetail.id, dataShipping.id)

    }

    async createOrderDetail(formOrder: FormOrder) {
        //construction of the object
        const totalPrice = formOrder.quantity * formOrder.price;
        const orderDetail = { price: formOrder.price, quantity: formOrder.quantity, totalPrice: totalPrice };
        //saving the object
        return new this.orderDetailModel(orderDetail).save();
    }

    async createShipping(formOrder: FormOrder) {
        //construction of the object
        const shppingInfo = { addresse: formOrder.addresse, transport: formOrder.transport, region: formOrder.region, cost: formOrder.cost };
        //saving the object
        return new this.shippingModel(shppingInfo).save();
    }

    async createOrder(formOrder: FormOrder, OrderDetailId, ShippingId) {

        const new_order = {
            productId: formOrder.productId,
            customerId: formOrder.customerId,
            orderDetailId: OrderDetailId,
            shippingId: ShippingId,
        }
        return new this.orderModel(new_order).save();
    }
    /**Queries responsible on finding */
    async findAll() {
        const orders = this.orderModel.find();
        if (orders) {
            orders.populate('customerId');
            orders.populate('productId');
            orders.populate('orderDetailId');
            orders.populate('shippingId');
        }
        return orders



    }

    async findOne(id) {
        const order = this.orderModel.findById(id);
        if (order) {
            order.populate('customerId');
            order.populate('productId');
            order.populate('orderDetailId');
            order.populate('shippingId');
        }
        return order
    }
}