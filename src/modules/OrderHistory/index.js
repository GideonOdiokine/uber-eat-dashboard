import React from "react";
import { Card, Table, Tag } from "antd";
import orders from "../../assets/data/orders-history.json";

const OrderHistory = () => {
    const renderOrderStatus = (orderStatus) => {
			if (orderStatus === "Accepted") {
				return <Tag color='green'> {orderStatus}</Tag>;
			}
			if (orderStatus === "Pending") {
				return <Tag color='orange'> {orderStatus}</Tag>;
			}
			if (orderStatus === "Declined") {
				return <Tag color='red'> {orderStatus}</Tag>;
			}
			console.log(orderStatus);
		};
	return (
		<Card title='Orders History' style={{ margin: 20 }}>
			OrderHistory
		</Card>
	);
};

export default OrderHistory;
